<template>
  <div id="default-layout">
    <LandingHero></LandingHero>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import LandingHero from "@/components/LandingHero.vue";

  @Component({
    components: {LandingHero},
  })
  export default class DefaultLayout extends Vue {
  }
</script>
