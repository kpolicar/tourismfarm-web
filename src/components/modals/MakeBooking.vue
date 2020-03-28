<template>
  <div class="modal-card">
    <section class="modal-card-body">
      <b-steps
        v-model="progress"
        animated
        has-navigation
        :customNavigation="true"
        v-if="progress > 0">
        <b-step-item label="Account">
          <h1 class="title has-text-centered">Account</h1>
          Lorem ipsum dolor sit amet.
        </b-step-item>

        <b-step-item label="Reservation">
          <h1 class="title has-text-centered">Reservation details</h1>
          Select the dates you would like to stay with us<br/>
          You can always extend your stay once you arrive
        </b-step-item>

        <b-step-item label="Details">
          <h1 class="title has-text-centered">Basic info</h1>
          Tell us a little about yourself<br/>
          How many people plan on staying? Do you have any additional requests?
        </b-step-item>

        <b-step-item label="Finish" disabled>
          <h1 class="title has-text-centered">Finish</h1>
          Lorem ipsum dolor sit amet.
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
      <keep-alive>
        <component :is="this.steps[this.progress]" @finished="stepFinished"></component>
      </keep-alive>
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import ChooseBooking from "@/components/ChooseBooking.vue";
  import ReservationDetails from "@/components/forms/ReservationDetails.vue";
  import GuestDetails from "@/components/forms/GuestDetails.vue";

  @Component({})
  export default class MakeBooking extends Vue {
    @Prop({default: 0}) step: number
    data() {
      return {
        progress: this.step,
        steps: [
          ChooseBooking,
          ReservationDetails,
          GuestDetails,
        ]
      }
    }

    stepFinished(data) {
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
