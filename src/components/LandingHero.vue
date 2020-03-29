<template>
  <section class="hero is-fullheight video">
    <div class="hero-video">
      <video playsinline autoplay muted loop>
        <source src="" type="video/mp4"/>
      </video>
    </div>

    <div class="hero-head">
      <QuickNavigation></QuickNavigation>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Explore The<br/>Countryside!
        </h1>
        <h2 class="subtitle">
          A family farm
        </h2>
        <button class="button is-primary is-medium is-rounded"
                @click="cardModal()">
          Book now
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import QuickNavigation from '@/components/QuickNavigation.vue';
  import MakeBooking from '@/components/modals/MakeBooking.vue';

  @Component({
    components: {QuickNavigation,},
  })
  export default class LandingHero extends Vue {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: MakeBooking,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        animation: 'slide'
      });
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    background: center center url('~@/assets/hero.jpg');
    background-size: cover;

    .hero-body {
      .title {
        color: $text-invert;
        font-size: 96px;
      }

      .subtitle {
        margin-top: $block-spacing;
        text-transform: uppercase;
        font-weight: $weight-bold;
        font-style: italic;
      }
    }
  }
</style>
