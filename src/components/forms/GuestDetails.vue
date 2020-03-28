<template>
  <div>
    <b-field label="Full name" horizontal custom-class="is-normal">
      <b-input type="text"
               placeholder="John Doe"
               icon="user"
               maxlength="100">
      </b-input>
    </b-field>
    <b-field label="Email" horizontal custom-class="is-normal">
      <b-input type="email"
               placeholder="example@domain.com"
               icon="envelope"
               maxlength="100">
      </b-input>
    </b-field>
    <b-field label="Message (optional)" horizontal custom-class="is-normal">
      <b-input maxlength="300" type="textarea"></b-input>
    </b-field>
    <b-button
      outlined
      icon-pack="fas"
      icon-right="forward"
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
    finish() {
      this.$emit('finished')
    }
  }
</script>
