<template>
  <Accommodation
    url="grand-apartment"
    :amenities="amenities"
    :images="images">
    <template v-slot:tabs>
      <b-tab-item label='Apartment details'>
        <h2 class='title'>Information</h2>
        <p>In a separate house, on the 1st floor, we offer you a spacious apartment with two
          bedrooms plus a well furnished kitchen complete with an electric stove, dishwasher,
          fridge, ... A large dining room, bathroom and separate toilette.
        </p>
        <p>Perfect for up to 6 persons, a crib can be supplied for small children.
        </p>
      </b-tab-item>

      <b-tab-item label='Rules'>
        <h2 class='title'>House rules</h2>
        <ul>
          <li>Smoking is not allowed inside the apartment.</li>
          <li>You are free to use all the amenities in the apartment.</li>
          <li>The Wifi is available 24/7.</li>
          <li>Make yourself at home, and enjoy your stay!</li>
        </ul>

      </b-tab-item>
    </template>

    <template v-slot:pricing>
      <p class='heading'>Priced at</p>
      <p class='title' style='color: whitesmoke; margin-bottom: 0'>
        <strong>€100</strong><small style='opacity: 0.6; font-size: 16px'> / night</small><br>
      </p>
      <small class='heading' style='opacity: 0.6'>tax not included</small>
      <hr>
      Tourist tax (adult) 2.00€<br>
      Tourist tax (child) 1.00€<br><br><br>
    </template>
  </Accommodation>
</template>

<script lang='ts'>
  import {Component, Vue} from 'vue-property-decorator';
  import Accommodation from '@/components/Accommodation.vue';
  import Amenities from '@/components/Amenities.vue';

  @Component({
    components: {Amenities, Accommodation}
  })
  export default class GrandApartment extends Vue {


    amenities = ['parking', 'wifi', 'kitchen', 'washer', 'shower', 'noSmoking', 'coffee', 'oven', 'dishwasher', 'refrigerator', 'freezer']
    images = [
      'http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC06638-1920.jpg',
      'http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC01599-1920.jpg',
      'http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC05360-1920.jpg',
      'http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC05363-1920.jpg',
      'http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC06651-1920.jpg',
      'http://turisticna-kmetija-hribar.si/images/grand-apartment/TK11-1920.jpg',
      'http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC00436-1920.jpg',
      'http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC01623-1920.jpg',
    ]
  }
</script>

