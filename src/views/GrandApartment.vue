<template>
  <Accommodation
    url="grand-apartment"
    :amenities="amenities"
    :images="images"
    :reviews="reviews">
    <template>
      <section class="section" style="padding-top: 0">
        <h2 class="title title-new">Apartment details</h2>
        <h3 class="subtitle">Know where you're going</h3>

        <div class="content apartment">
          <div v-scroll-reveal="{ duration: 1000, distance: '20%', origin: 'bottom' }">
            <p>In a separate house, on the 1st floor, we offer you a spacious apartment with two
              bedrooms plus a well furnished kitchen complete with an electric stove, dishwasher,
              fridge, ... A large dining room, bathroom and separate toilette.
            </p>
            <p>Perfect for up to 6 persons, a crib can be supplied for small children.
            </p>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="title title-new">Rules</h2>
        <h3 class="subtitle">We'll call 911 on you</h3>

        <div class="content rules">
          <ol v-scroll-reveal="{ duration: 1000, distance: '20%', origin: 'bottom' }">
            <li>Smoking is not allowed inside the apartment.</li>
            <li>You are free to use all the amenities in the apartment.</li>
            <li>The Wifi is available 24/7.</li>
            <li>Make yourself at home, and enjoy your stay!</li>
          </ol>
        </div>
      </section>

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
import { Component, Vue } from 'vue-property-decorator';
import Accommodation from '@/components/Accommodation.vue';
import Amenities from '@/components/Amenities.vue';

  @Component({
    components: { Amenities, Accommodation },
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

    reviews = [
      {
        content: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, cupiditate deleniti deserunt dolore fuga laboriosam magni molestias natus nemo optio quia quis sequi soluta tempore vel veniam. Nihil, quo.',
        author: 'John Doe',
        date: '18/3/2019',
      },
      {
        content: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, cupiditate deleniti deserunt dolore fuga laboriosam magni molestias natus nemo optio quia quis sequi soluta tempore vel veniam. Nihil, quo.',
        author: 'Peter Panda',
        date: '1/4/2020',
      },
      {
        content: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, cupiditate deleniti deserunt dolore fuga laboriosam magni molestias natus nemo optio quia quis sequi soluta tempore vel veniam. Nihil, quo.',
        author: 'Pavlin Hoe',
        date: '31/6/2016',
      },
    ]
}
</script>

<style lang="scss" scoped>
  .apartment {
    position: relative;
    &:before {
      position: absolute;
      top: -2.5rem;
      left: -2rem;
      opacity: 0.1;
      content: "\f236";
      font-weight: 900;
      font-family: "Font Awesome 5 Free";
      font-size: 80px;
    }
  }
  .rules {
    position: relative;
    &:before {
      position: absolute;
      top: -2.5rem;
      left: -2rem;
      opacity: 0.1;
      content: "\f46d";
      font-weight: 900;
      font-family: "Font Awesome 5 Free";
      font-size: 80px;
    }
  }
</style>
