<template>
  <div>
    <b-field label="Add dates to reservation">
      <b-datepicker
        placeholder="Check in - check out"
        v-model="dates"
        :min-date="new Date()"
        range>
      </b-datepicker>
    </b-field>
    <p>{{ guests.adults }} {{ guests.children }} {{ guests.infants }}</p>
    <GuestsPicker v-model="guests"></GuestsPicker>
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
    data() {
      return {
        dates: [],
        guests: {
          adults: 1,
          children: 0,
          infants: 0
        }
      }
    }
    finish() {
      console.log(this.guests);
      this.$emit('finished', this.dates)
    }
    get passes() {
      return this.dates.length > 0 && this.adults > 0;
    }
  }
</script>
