<template>
  <div>
    <Testimonials></Testimonials>
    <div class="contrast">
      <Divider></Divider>
      <WhyUs></WhyUs>
    </div>
    <PromoHero></PromoHero>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Testimonials from '@/components/Testimonials';
  import WhyUs from "@/components/WhyUs";
  import PromoHero from "@/components/PromoHero";
  import Divider from "@/components/Divider";

  @Component({
    components: {WhyUs, Testimonials, PromoHero, Divider}
  })
  export default class Home extends Vue {
  }
</script>

<style lang="scss" scoped>
  ::v-deep section {
    padding: $section-spacing 0;
  }

  ::v-deep .contrast .section-divider {
    margin-top: $section-spacing;
    margin-bottom: -$section-spacing;
    fill: $white-ter;
  }

  ::v-deep .contrast section {
    background-color: $white-ter;
  }
</style>
