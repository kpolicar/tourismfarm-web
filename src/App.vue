<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  const default_layout = 'default';

  @Component
  export default class App extends Vue {
    get layout(): string {
      return 'layout-' + (this.$route.meta.layout || default_layout);
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Candal&display=swap');
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  .title {
    font-family: "Candal", sans-serif;
  }
  .subtitle {
    font-family: "Permanent Marker", cursive;
    color: $accent;
  }
</style>
