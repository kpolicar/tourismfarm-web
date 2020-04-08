<template>
  <form @submit.prevent="onSubmit">
    <b-steps
      v-model="progress"
      animated
      has-navigation
      :customNavigation="true">
      <b-step-item :label="step.title"
                   v-for="(step, index) in steps"
                   :clickable="steps[index-1] ? steps[index-1].complete : true"
                   :type="{'is-success': step.complete}">
        <div class="container">
          <component :is="step.component"
                     v-bind="step.props"
                     v-on="step.events"
                     @passes="stepPassed(step, $event)"></component>
        </div>
      </b-step-item>

      <template v-slot:navigation="{previous, next}">
        <div class="has-text-centered">
          <b-button
            outlined
            type="is-danger"
            icon-pack="fas"
            icon-left="backward"
            :disabled="previous.disabled"
            @click.prevent="previous.action">
            Previous
          </b-button>
          <b-button
            outlined
            type="is-success"
            icon-pack="fas"
            icon-right="forward"
            :disabled="next.disabled || !steps[progress].complete"
            @click.prevent="next.action">
            Next
          </b-button>
        </div>
      </template>
    </b-steps>
  </form>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ReservationDetails from "@/components/forms/ReservationDetails.vue";
  import GuestDetails from "@/components/forms/GuestDetails.vue";
  import Verification from "@/components/forms/Verification.vue";
  import Form from "@/layouts/Form.vue";
  import Success from "@/components/Success.vue";

  interface FormStep {
    component: typeof Vue | any
    title: string
    props?: { [key:string]: any }
    events?: { [key:string]: ($event: any) => void }
    complete?: boolean
  }

  @Component({
    components: {Form}
  })

  export default class Inquiry extends Vue {
    progress = 0

    record = {};
    formData = {};

    steps: Array<FormStep> = [
      {
        component: ReservationDetails,
        title: 'Reservation details',
        events: { input: $event => this.aggregate($event) },
        complete: false,
      },
      {
        component: GuestDetails,
        title: 'Contact info',
        events: { input: $event => this.aggregate($event) },
        complete: false,
      },
      {
        component: Verification,
        title: 'Verification',
        props: { formData: this.formData },
        events: { input: $event => this.record = $event, passes: this.onVerified },
        complete: false,
      },
      {
        component: Success,
        title: 'Finish',
        props: { record: this.record }
      },
    ]

    aggregate(data: object) {
      Object.assign(this.formData, data);
    }

    stepPassed(step: FormStep, passes: boolean) {
      step.complete = passes;
    }

    onVerified(successfully: boolean) {
      if (successfully)
        this.progress++;
    }
  }
</script>
