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
            <slot></slot>
          </div>
          <div style="grid-column: 9 / span 4 !important;">
            <div
              style="background: #3e394d; color: whitesmoke; border-radius: 5px; padding: 3rem 3rem 2rem; position: sticky;top: 80px">
              <slot name="pricing"></slot>

              <b-button tag="router-link"
                        :to="{name: 'inquiry', params: {accommodation: url}}"
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
  </fragment>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Amenities from '@/components/Amenities.vue';
import Reviews, { Review } from '@/components/Reviews.vue';

  @Component({
    components: { Reviews, Amenities },
  })
export default class Accommodation extends Vue {
    @Prop({ required: true })
    amenities!: Array<string>

    @Prop({ required: true })
    images!: Array<string>

    @Prop({ required: true })
    url!: string

    fixedPrices = false


    mounted() {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.handleScroll);
      });
    }

    handleScroll() {
      const modifier = document.documentElement.scrollTop;
      this.fixedPrices = modifier > 133;
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
