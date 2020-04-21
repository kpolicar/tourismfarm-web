<template>
  <div class="has-text-centered">
    <b-icon icon="check" size="is-large"></b-icon>
    <p>You've made your inquiry successfully.</p>
    <p>Please await approval and further instructions.</p>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({})
  export default class Success extends Vue {
    @Prop()
    record!: object
  }
</script>
