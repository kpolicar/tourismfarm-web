<template>
  <div id="default-layout">
    <LandingHero></LandingHero>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import LandingHero from "@/components/LandingHero.vue";
  import Footer from "@/components/Footer.vue";

  @Component({
    components: {Footer, LandingHero},
  })
  export default class LandingLayout extends Vue {
  }
</script>
