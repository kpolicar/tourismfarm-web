<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  const default_layout = 'default';

  @Component({})
  export default class App extends Vue {
    get layout(): string {
      return 'layout-' + (this.$route.meta.layout || default_layout);
    }
  }
</script>

<style lang="scss">
  @import "./css/style.scss";
</style>
