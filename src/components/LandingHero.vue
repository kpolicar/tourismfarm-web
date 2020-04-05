<template>
  <div class="hero is-fullheight video">
    <div class="hero-video">
      <parallax>
      <video playsinline autoplay muted loop poster="@/assets/hero.jpg">
        <source src="" type="video/mp4"/>
      </video>
      </parallax>
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
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import QuickNavigation from '@/components/QuickNavigation.vue';
  import ChooseBookingModal from '@/components/modals/ChooseBooking.vue';
  import Parallax from 'vue-parallaxy';

  @Component({
    components: {QuickNavigation, Parallax},
  })
  export default class LandingHero extends Vue {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: ChooseBookingModal,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        animation: 'slide'
      });
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep .logo {
    fill: $white-bis;
  }
  .hero {
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
