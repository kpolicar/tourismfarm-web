<template>
  <div>
    You've made your inquiry successfully.
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
