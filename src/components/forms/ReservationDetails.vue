<template>
  <div class="columns">

    <div class="column is-two-thirds">
      hey
    </div>


    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ pricing.base }}€<small>per night</small>
          </p>
        </header>
        <div class="card-content">

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

          <table class="table is-fullwidth" v-if="passes">
            <tbody>
            <tr>
              <td>€{{ pricing.base }} x {{ duration }} nights</td>
              <td>€{{ price }}</td>
            </tr>
            <tr>
              <td>Tourist tax</td>
              <td>€{{ tax }}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th>Total</th>
              <th>€{{ total }}</th>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>

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

    get passes() {
      return this.dates.length > 0 && this.guests.adults > 0;
    }

    get duration() {
      let dateDiff =  Math.abs(this.dates[0].getTime() - this.dates[1].getTime())

      return dateDiff / (1000 * 60 * 60 * 24) + 1;
    }

    get modifier() {
      return  this.duration * (this.guests.adults + this.guests.children)
    }

    get price() {
      return this.pricing.base * this.modifier
    }

    get tax() {
      return this.pricing.tax * this.modifier
    }

    get total() {
      return this.price + this.tax
    }

    get pricing() {
      return this.$store.state.pricing.camp;
    }

    @Watch('passes')
    validatedChanged(passes: boolean) {
      this.$emit('passes', passes)
    }
  }
</script>

<style lang="scss" scoped>
  .table {
    td:last-child, th:last-child {
      text-align: right;
    }
  }
</style>
