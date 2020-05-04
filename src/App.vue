<template>
  <div id="app">
    <component :is="layout"></component>
    <Ad></Ad>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Ad from "@/components/Ad.vue";

const default_layout = 'default';

  @Component({
    components: {Ad}
  })
export default class App extends Vue {
  mounted() {
    this.$store.dispatch('updatePricing');
  }

  get layout(): string {
    return `layout-${this.$route.meta.layout || default_layout}`;
  }
}
</script>

<style lang="scss">
  @import "./css/style.scss";
</style>
