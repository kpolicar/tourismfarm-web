<template>
  <div class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="subtitle">
          Explore romantic campsites
        </h2>
        <h1 class="title">
          Spend a Romantic<br/>Weekend
        </h1>
        <p>Glamping is where stunning nature meets modern luxury. Experiential travel is an
          authentic way to connect with nature. Together, the experience is about stepping off the
          beaten path, walking away from superficial tourist activities and embracing an immersive
          cultural environment.</p>
        <button class="button is-primary is-medium is-rounded">
          Book a stay
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({})
export default class PromoHero extends Vue {
}
</script>

<style lang="scss" scoped>
  .hero {
    background: center center url('~@/assets/glamping.jpg');
    background-size: cover;

    .hero-body, .title {
      color: $text-invert;
    }

    .title {
      font-size: 64px;
    }
  }
</style>
