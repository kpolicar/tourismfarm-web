<template>
  <div class="columns">
    <div class="column is-two-thirds">
      <b-button class="is-small">Change</b-button>
      <component :is="active.content"></component>
    </div>
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ pricing.base }}€<small>per <template v-if="pricing.type==='per-night'">night</template><template v-else>person</template></small>
          </p>
        </header>
        <div class="card-content">

          <b-field label="Add dates to reservation" custom-class="is-normal">
            <b-datepicker
              placeholder="Check in - check out"
              name="dates"
              v-model="value.dates"
              :min-date="new Date()"
              range>
            </b-datepicker>
          </b-field>
          <b-field label="Guests" custom-class="is-normal">
            <GuestsPicker name="guests" v-model="value.guests"></GuestsPicker>
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
  import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
  import GuestsPicker from "@/components/inputs/GuestsPicker.vue";
  import CampingInquiryContent from "@/components/content/CampingInquiry.vue";
  import GrandApartmentInquiryContent from "@/components/content/GrandApartmentInquiry.vue";

  export interface DataModel {
    dates: Array<Date>,
    guests: {
      adults: number,
      children: number,
      infants: number
    }
  }

  interface AccommodationConfig {
    content: typeof Vue
  }

  @Component({
    components: {GuestsPicker, CampingInquiryContent}
  })
  export default class ReservationDetailsForm extends Vue {
    value = {
      dates: [],
      guests: { adults: 1, children: 0, infants: 0 }
    }

    accommodation!: string

    active!: AccommodationConfig
    configs : { [key: string]: AccommodationConfig } = {
      'camping': {
        content: CampingInquiryContent
      },
        'grand-apartment': {
        content: GrandApartmentInquiryContent
      }
    }

    created() {
      this.accommodation = this.$route.params.accommodation
      this.active = this.configs[this.accommodation]
    }

    get passes() {
      return this.value.dates.length == 2 &&
             this.value.guests.adults > 0;
    }

    get duration() {
      let dateDiff = Math.abs(this.value.dates[0].getTime() - this.value.dates[1].getTime())

      return dateDiff / (1000 * 60 * 60 * 24) + 1;
    }

    get modifier() {
      if (this.pricing.type == 'per-night') {
        return this.duration
      }
      return this.duration * (this.value.guests.adults + this.value.guests.children)
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
      return this.$store.state.pricing[this.accommodation];
    }

    @Watch('value', { deep: true })
    valueChanged(value: DataModel) {
      this.$emit('input', value)
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
