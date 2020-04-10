<template>
  <div class="has-text-centered">
    <h2 class="title title-new">Apartments</h2>

    <div class="columns">

      <div class="column" v-for="apartment in apartments">
        <router-link :to="{name: apartment.url}">
          <div class="card is-accommodation is-clipped">
            <div class="card-content">
              <figure class="image is-3by2">
                <img :src="apartment.image" alt="Placeholder image">
                <figcaption>
                  <h3>{{ apartment.title }}</h3>
                  <p class="card-header-badge">
                    {{ apartment.min }}
                    <template v-if="apartment.max!==apartment.min"> - {{ apartment.max }}</template>
                    guests
                  </p>
                  <p class="card-header-badge">
                    €{{ apartment.price }}
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Features from '@/components/Features.vue';

  @Component({})
  export default class Apartments extends Vue {
    apartments = [
      {
        title: 'Grand apartment',
        min: 4,
        max: 6,
        price: 80,
        image: 'https://turisticna-kmetija-hribar.si/images/grand-apartment/DSC06638-480.jpg',
        url: 'grand-apartment'
      },
      {
        title: 'Large apartment',
        min: 4,
        max: 4,
        price: 80,
        image: 'https://turisticna-kmetija-hribar.si/images/large-apartment/DSC01391edit-480.jpg',
      },
      {
        title: 'Rustic apartment',
        min: 4,
        max: 6,
        price: 80,
        image: 'https://turisticna-kmetija-hribar.si/images/rustic-apartment/WP_20171229_15_21_23_Pro-480.jpg',
      },
    ]
  }
</script>

<style lang="scss" scoped>
</style>
