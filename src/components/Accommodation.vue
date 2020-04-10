<template>
  <fragment>
    <b-carousel :pause-info="false" :interval="5000">
      <b-carousel-item v-for="image in images">
            <span class="image is-16by9">
              <img :src="image">
            </span>
      </b-carousel-item>
    </b-carousel>

    <section class="section is-paddingless">
      <div class="container">
        <Amenities :items="amenities" render="carousel"></Amenities>
        <hr>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid">
          <div style="grid-column: 1 / span 7 !important;">
            <b-tabs size="is-medium"
                    vertical>
              <slot name="tabs"></slot>
            </b-tabs>
          </div>
          <div style="grid-column: 9 / span 4 !important;">
            <div style="background: #3e394d; color: whitesmoke; border-radius: 5px; padding: 3rem 3rem; position: sticky;top: 80px">
              <slot name="pricing"></slot>

              <b-button tag="router-link"
                        :to="{name: 'inquiry', params: {accommodation: 'camping'}}"
                        type="is-primary"
                        size="is-medium"
                        expanded>
                Make inquiry
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <h2 class="title">Reviews</h2>
          </div>
          <div class="column">
            <div>
              <a href="https://www.anwbcamping.nl/99824?utm_source=%20Turisti?na kmetija Hribar&amp;utm_medium=widget&amp;utm_content=logo-lg&amp;utm_campaign=anwbcamping-widget" target="_blank"><img src="https://tracking.aanmeld.nl/7263/0/1130/Klein.png" title=" Turistična kmetija Hribar - Klein" width="300"></a>
              <p style="font-size:11px;"><a href="https://www.anwbcamping.nl/99824?utm_source=%20Turisti?na kmetija Hribar&amp;utm_medium=widget&amp;utm_content=link-lg&amp;utm_campaign=anwbcamping-widget" title=" Turisti?na kmetija Hribar">Bekijk ANWB oordeel</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </fragment>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import Amenities from "@/components/Amenities.vue";

  @Component({
    components: {Amenities}
  })
  export default class Accommodation extends Vue {
    @Prop({ required: true })
    amenities
    @Prop({ required: true })
    images

    fixedPrices = false


    mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", this.handleScroll);
      })
    }

    handleScroll () {
      let modifier = document.documentElement.scrollTop
      this.fixedPrices = modifier > 133
    }
  }
</script>

<style lang="scss" scoped>

  .grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
    grid-column-gap: 16px;
  }

  .heading {
    font-size: 14px;
  }

  ::v-deep .carousel-list.has-shadow {
    box-shadow: none;
  }
</style>
