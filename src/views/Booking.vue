<template>
  <div>
    <b-steps
      v-model="progress"
      animated
      has-navigation
      :customNavigation="true">
      <b-step-item :label="step.title" v-for="(step, index) in steps" :clickable="step.complete" :type="{'is-success': step.complete}">
        <h1 class="title has-text-centered" v-if="step.title">{{ step.title }}</h1>
        {{ step.description }}
        <div style="max-width: 350px; margin: 0 auto;">
          <component :is="step.component" @passes="stepChanged(index, $event)"></component>
        </div>
      </b-step-item>

      <template
        v-slot:navigation="{previous, next}">
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
      </template>
    </b-steps>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import ReservationDetails from "@/components/forms/ReservationDetails.vue";
  import GuestDetails from "@/components/forms/GuestDetails.vue";
  import Confirmation from "@/components/forms/Confirmation.vue";

  @Component({})
  export default class Booking extends Vue {
    progress = 0
    steps = [
      {
        component: ReservationDetails,
        title: 'Reservation details',
        description: 'Select the dates you would like to stay with us. You can always extend your stay once you arrive.',
        complete: false
      },
      {
        component: GuestDetails,
        title: 'Contact info',
        description: 'Please provide us with some basic contact information in case we need to contact you.',
        complete: false
      },
      {
        component: Confirmation,
        title: 'Finish',
        description: 'Please confirm your e-mail address to complete your reservation.',
        complete: false
      },
    ]

    stepFinished() {
      this.progress++;
    }

    stepChanged(index: number, passes: boolean) {
      this.steps[index].complete = passes;
    }
  }
</script>
