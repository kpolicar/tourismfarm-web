<template>
  <div>
    <b-button size="is-medium"
              type="is-primary"
              icon-right="upload"
              :loading="loading"
              @click="sendReservationToApi">
      Make reservation
    </b-button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class ConfirmationForm extends Vue {
    loading = false

    sendReservationToApi() {
      this.loading=true;
    }
  }
</script>
