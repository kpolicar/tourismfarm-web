<template>
  <div>
    <b-steps
      v-model="progress"
      animated
      has-navigation
      :customNavigation="true">
      <b-step-item :label="step.title" v-for="(step, index) in steps" :clickable="step.complete" :type="{'is-success': step.complete}">
        <h1 class="title has-text-centered" v-if="step.title">{{ step.title }}</h1>
        <div class="container">
          <component :is="step.component" @passes="stepChanged(index, $event)"></component>
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
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import ReservationDetails from "@/components/forms/ReservationDetails.vue";
  import GuestDetails from "@/components/forms/GuestDetails.vue";
  import Confirmation from "@/components/forms/Confirmation.vue";
  import Amenities from "@/components/Amenities.vue";

  @Component({})
  export default class Inquiry extends Vue {
    progress = 0
    steps = [
      {
        component: ReservationDetails,
        title: 'Inquiry details',
        complete: false
      },
      {
        component: GuestDetails,
        title: 'Contact info',
        complete: false
      },
      {
        component: Confirmation,
        title: 'Finish',
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