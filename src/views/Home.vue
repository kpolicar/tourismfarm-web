<template>
  <fragment>
    <section class="section">
      <Testimonials></Testimonials>
    </section>

    <section class="section">
      <Apartments></Apartments>
    </section>

    <section class="section is-paddingless is-contrasted">
      <Divider top bottom="triangle">
        <div class="container">
          <WhyUs></WhyUs>
        </div>
      </Divider>
    </section>

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

  @Component({
    components: {Apartments, WhyUs, Testimonials, PromoHero, Divider}
  })
  export default class Home extends Vue {
  }
</script>
