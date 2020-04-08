<template>
  <div class="has-text-centered">
    <h2 class="title title-new">Dormitories</h2>

    <div class="columns">

      <div class="column" v-for="apartment in apartments">
        <div class="card is-accommodation is-clipped">
          <div class="card-content">
            <figure class="image is-3by2">
              <img :src="apartment.image" alt="Placeholder image">
              <figcaption>
                <h3>{{ apartment.title }}</h3>
                <p class="card-header-badge">
                  {{ apartment.min }}<template v-if="apartment.max"> - {{ apartment.max }}</template> guests
                </p>
                <p class="card-header-badge">
                  €{{ apartment.price }}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Features from '@/components/Features.vue';

  @Component({})
  export default class Dormitories extends Vue {
    apartments = [
      {
        title: 'Renovated barnhouse',
        min: 4,
        max: 6,
        price: 80,
        image: 'https://www.turisticna-kmetija-hribar.si/images/dormitory/ezgif-5-c5b8df47c0-480.jpg'
      },
      {
        title: 'Pod',
        min: 4,
        price: 80,
        image: 'https://www.turisticna-kmetija-hribar.si/images/pod/ezgif-5-f87ea3d696-480.jpg'
      },
      {
        title: 'Small room',
        min: 1,
        max: 2,
        price: 80,
        image: 'https://www.turisticna-kmetija-hribar.si/images/small-room/ezgif-5-b232e9201e-480.jpg'
      },
    ]
  }
</script>

<style lang="scss" scoped>
</style>
