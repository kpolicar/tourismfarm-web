<template>
  <div>
    <b-steps
      v-model="progress"
      animated
      has-navigation
      :customNavigation="true">
      <b-step-item :label="step.title" v-for="step in steps">
        <h1 class="title has-text-centered" v-if="step.title">{{ step.title }}</h1>
        {{ step.description }}
        <component :is="step.component" @finished="stepFinished"></component>
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
      </template>
    </b-steps>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import ReservationDetails from "@/components/forms/ReservationDetails.vue";
  import GuestDetails from "@/components/forms/GuestDetails.vue";

  @Component({})
  export default class Booking extends Vue {
    progress = 0
    steps = [
      {
        component: ReservationDetails,
        title: 'Reservation details',
        description: 'Select the dates you would like to stay with us\nYou can always extend your stay once you arrive'
      },
      {
        component: GuestDetails,
        title: 'Contact info',
        description: 'Select the dates you would like to stay with us\nYou can always extend your stay once you arrive'
      },
    ]

    stepFinished() {
      this.progress++;
    }
  }
</script>
