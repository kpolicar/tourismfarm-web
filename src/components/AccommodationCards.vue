<template>
  <div class="columns">
    <div class="column"
         v-for="(accommodation, index) in value"
         v-scroll-reveal="{ delay: index*300, duration: 1000, distance: '50%', origin: 'bottom' }">
      <router-link :to="{name: url}">
        <div class="card is-accommodation is-clipped">
          <div class="card-content">
            <figure class="image is-3by2">
              <img :src="accommodation.image" alt="Placeholder image">
              <figcaption>
                <h3>{{ accommodation.title }}</h3>
                <p class="card-header-badge">
                  {{ accommodation.min }}
                  <template v-if="accommodation.max!==accommodation.min"> - {{ accommodation.max
                    }}
                  </template>
                  guests
                </p>
                <p class="card-header-badge">
                  €{{ accommodation.price }}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  interface AccommodationData {
    title: string,
    price: number,
    min: number,
    max: number,
    image: string,
    url: string,
  }

  @Component({})
  export default class Features extends Vue {

    @Prop({required: true})
    value!: Array<AccommodationData>
  }
</script>
