<template>
  <div class="modal-card">
    <section class="modal-card-body">
      <b-steps
        v-model="progress"
        animated
        has-navigation
        :customNavigation="true">
        <b-step-item :label="step.title" v-for="step in this.steps">
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
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import ChooseBooking from "@/components/ChooseBooking.vue";
  import ReservationDetails from "@/components/forms/ReservationDetails.vue";
  import GuestDetails from "@/components/forms/GuestDetails.vue";

  @Component({
    components: {ChooseBooking}
  })
  export default class MakeBooking extends Vue {
    @Prop()
    step: number = 0

    progress!: number
    steps = [
      {
        component: ChooseBooking,
        title: 'Choose booking'
      },
      {
        component: ReservationDetails,
        title: 'Reservation details',
        description: 'Select the dates you would like to stay with us\nYou can always extend your stay once you arrive'
      },
      {
        component: GuestDetails,
        title: 'Reservation details',
        description: 'Select the dates you would like to stay with us\nYou can always extend your stay once you arrive'
      },
    ]

    mounted () {
      this.progress = this.step
    }

    stepFinished() {
      this.progress++;
      console.log('progress: '+this.progress);
    }
  }
</script>

<style lang="scss" scoped>
  .modal-card {
    .modal-card-body {
      margin: 0;
      padding: 0;
    }
  }
</style>
