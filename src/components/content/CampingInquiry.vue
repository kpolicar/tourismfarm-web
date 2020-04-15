<template>
  <div>
    <h2 class="title">Small Rural Campsite (Bring Your Tent/Caravan)</h2>
    <p class="subtitle">Brezje, Slovenia</p>
    <ul>
      <li class="is-inline">8 guests</li>
      <li class="is-inline">1 bed</li>
      <li class="is-inline">2 baths</li>
    </ul>

    <h3 class="title">Amenities</h3>
    <Amenities></Amenities>
    <h3 class="title">The space</h3>
    Our small rural camping ground in our orchard is perfect for those who prefer smallness, privacy and want to spend some time away from the big, crowded camps. Families are especially welcome! The camping ground does not provide much luxury, though we take great care to keep the grounds clean, tidy and ecologically oriented. We can house up to around 20 tents or trailers at a time.
    <br><br>
    Whether you're a budget traveller or simply a large family, you will enjoy camping in our green, lush orchard. The rustic charm of the village combined with our great service and location will be one of the most unique countryside experiences you will have in Slovenia.
    <br><br>
    We can house up to around 20 tents or trailers at a time. There are four showers and washbasins with hot water; an equal number of toilets plus an additional shower.
    <br><br>
    In the summer and autumn, we can also offer fresh vegetables from our organic vegetable garden, and fruits from our orchard.
    <br><br>
    Please note:<br>
    - tents and beds are NOT included/provided<br>
    - a tourist tax of 0.64 Euros per person per night is included in the price (income of the local community)
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Amenities from '@/components/Amenities.vue';

  @Component({
    components: { Amenities },
  })
export default class CampingInquiryContent extends Vue {
}
</script>
