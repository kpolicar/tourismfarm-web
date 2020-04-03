<template>
  <section>
    <div class="container">
      <div class="columns is-vcentered">
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
        <div class="column">
          <img src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/10565221_824746984225527_3125628643527703560_n.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=rnRBVhwPcmsAX-bugcX&_nc_ht=scontent-mxp1-1.xx&oh=f6bded5ed26f3b64ca33e204505f8d18&oe=5EA3C572"
               alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Features from '@/components/Features.vue';

  @Component({
    components: {Features}
  })
  export default class WhyUs extends Vue {
  }
</script>

<style lang="scss" scoped>
  p {
    margin-bottom: $block-spacing;
  }
</style>
