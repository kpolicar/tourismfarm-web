<template>
  <div>
    <b-field label="Add dates to reservation" custom-class="is-normal">
      <b-datepicker
        placeholder="Check in - check out"
        v-model="dates"
        :min-date="new Date()"
        range>
      </b-datepicker>
    </b-field>
    <b-field label="Guests" custom-class="is-normal">
      <GuestsPicker v-model="guests"></GuestsPicker>
    </b-field>

    <nav class="level">
      <div class="level-item level-left">
        <div>
          <p>€25 x {{ duration }} nights</p>
        </div>
      </div>
      <div class="level-item level-right">
        <div>
          <p class="heading">€{{ sum }}</p>
        </div>
      </div>
    </nav>

    <b-table :data="data" :columns="columns"></b-table>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import GuestsPicker from "@/components/inputs/GuestsPicker.vue";

  @Component({
    components: {GuestsPicker}
  })
  export default class ReservationDetailsForm extends Vue {

    dates: Array<Date> = []
    guests = {
      adults: 1,
      children: 0,
      infants: 0
    }

    sum = 0

    get passes() {
      return this.dates.length > 0 && this.guests.adults > 0;
    }

    get duration() {
      return Math.abs((this.dates[0] - this.dates[1]) / (1000 * 60 * 60 * 24)) + 1;
    }

    @Watch('guests')
    @Watch('duration')
    priceChanged() {
      this.$http.get('http://localhost:8000/api/price/camping', {params: {modifier: this.guests.adults, duration: this.duration}})
        .then(response => {
          this.sum = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }

    @Watch('passes')
    validatedChanged(passes: boolean) {
      this.$emit('passes', passes)
    }
  }
</script>
