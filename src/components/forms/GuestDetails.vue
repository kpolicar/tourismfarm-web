<template>
  <div>
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
        dates: []
      }
    }
    finish() {
      this.$emit('finished', this.dates)
    }
  }
</script>
