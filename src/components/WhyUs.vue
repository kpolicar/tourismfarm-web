<template>
  <div class="columns is-marginless is-vcentered">
    <div class="column">
      <h2 class="title">Why us?</h2>
      <h3 class="subtitle">What do we offer that others don't?</h3>
      <p>We are situated in a very convenient location. We are located near the highway, which
        means that
        travelling anywhere is a breeze. Slovenia is a small country, and most scenic locations
        are just a
        short drive away.</p>
      <p>You also get the opportunity to experience the Slovenian countryside and quaint
        little villages.</p>
      <Features></Features>
    </div>
    <div class="column is-hidden-mobile">
      <img src="@/assets/campseats.jpg"
           alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Features from '@/components/Features.vue';

  @Component({
    components: { Features },
  })
export default class WhyUs extends Vue {
}
</script>

<style lang="scss" scoped>
  p {
    margin-bottom: $block-spacing;
  }
</style>
