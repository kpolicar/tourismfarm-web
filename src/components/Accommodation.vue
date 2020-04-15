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
            <div class="content"
              style="background: #3e394d; color: whitesmoke; border-radius: 5px; padding: 3rem 3rem 2rem; position: sticky;top: 80px">


              <p class="heading is-marginless">Priced at</p>
              <p class="title" style="color: whitesmoke; margin-bottom: 0">
                <strong>€{{ pricing.base }}</strong>
                <small style="opacity: 0.6; font-size: 16px"> / <template v-if="pricing.type==='per-night'">night</template><template v-else>person</template>
                </small>
              </p>
              <small class="heading" style="opacity: 0.6">tax not included</small>
              <hr>
              <p class="is-marginless">Tourist tax (adult) {{ pricing.base }}€</p>
              <p>Tourist tax (child) {{ pricing.base }}€</p>

              <slot name="pricing" v-bind="pricing"></slot>

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
import ContentCard from '@/components/ContentCard.vue';
import { PriceData } from '@/services/api/Price';

  @Component({
    components: { ContentCard, Reviews, Amenities },
  })
export default class Accommodation extends Vue {
    @Prop({ required: true })
    amenities!: Array<string>

    @Prop({ required: true })
    images!: Array<string>

    @Prop({ required: true })
    url!: string

    @Prop({ required: true })
    pricing!: PriceData
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
