<template>
  <div>
    <div class="has-text-centered">
      <template v-if="!verifying">

        <b-icon icon="envelope" size="is-large"></b-icon><br>
        <p>One last thing! We need to verify your email address so we can send you details on how to find us.</p>
        <p>Please click the button below to verify your email address.</p>
        <b-button type="is-primary"
                  size="is-medium"
                  @click="beginVerification"
                  :loading="requesting">
          Send verification email
        </b-button>

      </template>
      <template v-else>

        <b-icon icon="envelope" size="is-large"></b-icon><br>
        <p>We've sent an email to <strong>{{ formData.email }}</strong></p>
        <p>Please check your inbox. If you haven't received an email, click the button below to resend.</p>
        <b-button type="is-primary is-outlined"
                  size="is-medium"
                  @click="resendVerification"
                  :loading="requesting">
          Resend verification email
        </b-button>
      </template>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Api, { Inquiry } from '@/services/api/Inquiry';

  interface VerificationEvent {
    inquiry: Inquiry;
  }

  @Component({})
export default class VerificationForm extends Vue {
    @Prop({ required: true })
    formData!: object

    record!: Inquiry

    requesting = false;

    verifying = false;


    beginVerification() {
      this.requesting = true;

      Api.postInquiry(this.formData)
        .then(this.onBegunVerification)
        .then(() => this.requesting = false);
    }

    onBegunVerification(record: Inquiry) {
      this.verifying = true;
      this.$emit('input', this.record = record);

      this.$echo.channel(`inquiry.${record.id}`)
        .listen('Verified', (verified: VerificationEvent) => {
          this.verifying = false;
          this.$emit('input', verified.inquiry);
          this.$emit('passes', true);
        });
    }

    resendVerification() {
      this.requesting = true;

      Api.resendVerification(this.record.id)
        .then(() => this.requesting = false);
    }
}
</script>
