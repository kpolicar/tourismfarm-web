<template>
  <fragment>
    <portal to="navigation">
      <QuickNavigation blended></QuickNavigation>
    </portal>

    <section class="section is-paddingless">
      <LandingHero></LandingHero>
    </section>

    <Divider bottom="triangle"
             tag="section"
             custom-class="section"
             :transition="{to: 'is-contrasted'}">
      <Testimonials></Testimonials>
    </Divider>

    <section class="section has-text-centered">
      <h2 class="title title-new">Apartments</h2>
      <AccommodationCards :value="require('@/config/apartments')"></AccommodationCards>
    </section>

    <section class="section has-text-centered">
      <h2 class="title title-new">Dormitories</h2>
      <AccommodationCards :value="require('@/config/dormitories')"></AccommodationCards>
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
import { Component, Vue } from 'vue-property-decorator';
import Testimonials from '@/components/Testimonials.vue';
import WhyUs from '@/components/WhyUs.vue';
import PromoHero from '@/components/PromoHero.vue';
import Divider from '@/components/Divider.vue';
import LandingHero from '@/components/LandingHero.vue';
import QuickNavigation from '@/components/QuickNavigation.vue';
import AccommodationCards from '@/components/AccommodationCards.vue';

  @Component({
    components: {
      AccommodationCards, QuickNavigation, LandingHero, WhyUs, Testimonials, PromoHero, Divider,
    },
  })
export default class Home extends Vue {
}
</script>
