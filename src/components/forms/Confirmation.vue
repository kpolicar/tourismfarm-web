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
      this.$http.get('http://localhost:8000/api/reservations')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => this.loading = false)
    }
  }
</script>
