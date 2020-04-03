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
  import Testimonials from '@/components/Testimonials.vue';
  import WhyUs from "@/components/WhyUs.vue";
  import PromoHero from "@/components/PromoHero.vue";
  import Divider from "@/components/Divider.vue";

  @Component({
    components: {WhyUs, Testimonials, PromoHero, Divider}
  })
  export default class Home extends Vue {
  }
</script>
