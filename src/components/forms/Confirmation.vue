<template>
  <div>
    <b-button size="is-medium"
              tag="input"
              native-type="submit"
              type="is-primary"
              icon-right="upload"
              @click="$emit('passes', true)">
      Make reservation
    </b-button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class ConfirmationForm extends Vue {
  }
</script>
