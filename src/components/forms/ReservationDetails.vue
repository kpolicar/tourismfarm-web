<template>
  <div>
    <b-field label="Add dates to reservation" horizontal custom-class="is-normal">
      <b-datepicker
        placeholder="Check in - check out"
        v-model="dates"
        :min-date="new Date()"
        range>
      </b-datepicker>
    </b-field>
    <b-field label="Guests" horizontal custom-class="is-normal">
    <GuestsPicker v-model="guests"></GuestsPicker>
    </b-field>
    <b-button
      outlined
      icon-pack="fas"
      icon-right="forward"
      :disabled="dates.length === 0"
      @click="finish()">
      Next
    </b-button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import GuestsPicker from "@/components/inputs/GuestsPicker.vue";

  @Component({
    components: {GuestsPicker}
  })
  export default class ReservationDates extends Vue {
    dates: Array<Date> = []
    guests = {
      adults: 1,
      children: 0,
      infants: 0
    }

    finish() {
      console.log(this.guests);
      this.$emit('finished', this.dates)
    }

    get passes() {
      return this.dates.length > 0 && this.guests.adults > 0;
    }
  }
</script>
