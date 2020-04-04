<template>
  <div>
    <b-field label="Full name" horizontal custom-class="is-normal">
      <b-input v-model="name"
               ref="name"
               name="name"
               type="text"
               placeholder="John Doe"
               icon="user"
               minlength="5"
               maxlength="100"
               required>
      </b-input>
    </b-field>
    <b-field label="Email" horizontal custom-class="is-normal">
      <b-input v-model="email"
               ref="email"
               name="email"
               type="email"
               placeholder="example@domain.com"
               icon="envelope"
               minlength="5"
               maxlength="100"
               required>
      </b-input>
    </b-field>
    <b-field label="Message (optional)" horizontal custom-class="is-normal">
      <b-input v-model="message"
               ref="message"
               name="message"
               maxlength="300"
               type="textarea">

      </b-input>
    </b-field>
  </div>
</template>

<script lang="ts">
  import {Component, Watch} from 'vue-property-decorator';
  import {Mixins} from "vue-mixin-decorator";
  import GuestsPicker from "@/components/inputs/GuestsPicker.vue";
  import FormMixin from "@/mixins/FormMixin";

  @Component({
    components: {GuestsPicker}
  })
  export default class GuestDetailsForm extends Mixins<FormMixin>(FormMixin) {
    name: string = ''
    email: string = ''
    message: string = ''

    passesValidation = {
      name: false,
      email: false
    }

    mounted() {
      this.watchElementValidity('name');
      this.watchElementValidity('email');
    }

    @Watch('passes')
    validatedChanged(passes: boolean) {
      this.$emit('passes', passes)
    }
  }
</script>
