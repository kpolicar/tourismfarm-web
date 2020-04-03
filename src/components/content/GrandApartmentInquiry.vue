<template>
  <div>
    <h2 class="title">Holiday Home near Bled (Brezje)</h2>
    <p class="subtitle">Brezje, Slovenia</p>
    <ul>
      <li class="is-inline">6 guests</li>
      <li class="is-inline">2 bedrooms</li>
      <li class="is-inline">4 beds</li>
      <li class="is-inline">1 bath</li>
    </ul>

    <h3 class="title">Amenities</h3>
    <Amenities></Amenities>
    <h3 class="title">The space</h3>
    Come spend a few days with us in Brezje, in the Alpine area of Northwest Slovenia. A few minute drive to the main Alpine resorts and lakes. (Bled, Vintgar, Bohinj, ...) and a 30-minute drive from the capital, Ljubljana.
    <br><br>
    In the summer and autumn, we can also offer fresh vegetables from our organic vegetable garden, and fruits from our orchard.
    <br><br>
    Perfect for four people, but we can add an extra bed as well. A crib can be supplied for small children.
    <br><br>
    What we offer that others don't?
    <br><br>
    - experience the Slovenian countryside life in a quaint, quiet village<br>
    - a very convenient location to see the sights of Slovenia from while having a peaceful place to sleep<br>
    - a very flexible and personal approach, we also speak several languages fluently<br>
    - easy booking and assistance with navigating the area<br>
    - a lot of bang for your buck with no hidden fees<br>
    <br><br>
    Please note:
    <br>
    - a tourist tax of 1.27 euros per person per night will be charged on the spot (income of the local community)
    <br>
    - child under 7 years free of charge
    <br>
    - if you wish to stay for more than 7 nights, please ask for special offer
    <br><br>
    We speak English, French and Russian. We understand some Italian, too.
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import Amenities from "@/components/Amenities.vue";

  @Component({
    components: {Amenities}
  })
  export default class CampingInquiryContent extends Vue {
  }
</script>
