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

    @Watch('passes')
    validatedChanged(passes: boolean) {
      this.$emit('passes', passes)
    }
  }
</script>
