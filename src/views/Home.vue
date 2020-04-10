<template>
  <fragment>
    <section class="section is-paddingless">
      <LandingHero></LandingHero>
    </section>

    <Divider bottom="triangle"
             tag="section"
             custom-class="section"
             :transition="{to: 'is-contrasted'}">
      <Testimonials></Testimonials>
    </Divider>

    <section class="section">
      <Apartments></Apartments>
    </section>

    <section class="section">
      <Dormitories></Dormitories>
    </section>

    <Divider top
             tag="section"
             custom-class="section"
             :transition="{to: 'is-contrasted'}">
        <div class="container">
          <WhyUs></WhyUs>
        </div>
    </Divider>

    <section class="section is-paddingless">
      <PromoHero></PromoHero>
    </section>
  </fragment>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Testimonials from '@/components/Testimonials.vue';
  import WhyUs from "@/components/WhyUs.vue";
  import PromoHero from "@/components/PromoHero.vue";
  import Divider from "@/components/Divider.vue";
  import Apartments from "@/components/Apartments.vue";
  import Dormitories from "@/components/Dormitories.vue";
  import LandingHero from "@/components/LandingHero.vue";

  @Component({
    components: {LandingHero, Dormitories, Apartments, WhyUs, Testimonials, PromoHero, Divider}
  })
  export default class Home extends Vue {
  }
</script>
