<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container">
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
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class PromoHero extends Vue {
  }
</script>

<style lang="scss" scoped>
  .hero {
    background: center center url('https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/67402318_2603172066383001_5349954518236790784_o.jpg?_nc_cat=106&_nc_sid=2d5d41&_nc_ohc=AWTvbbfTfbQAX9RMQe-&_nc_ht=scontent-mxp1-1.xx&_nc_tp=6&oh=070b01e1ebe7edf727ee3d55be033652&oe=5EA2490F');
    background-size: cover;

    .hero-body, .title {
      color: $text-invert;
    }

    .title {
      font-size: 64px;
    }
  }
</style>
