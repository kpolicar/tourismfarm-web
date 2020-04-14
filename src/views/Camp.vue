<template>
  <Accommodation
    url="camping"
    :amenities="amenities"
    :images="images">
    <template>
      <section class="section">
        <h2 class="title title-new">Campsite details</h2>
        <h3 class="subtitle">Know where you're going</h3>
        <div class="content camping">
          <div v-scroll-reveal="{ duration: 1000, distance: '20%', origin: 'bottom' }">
            <p>The small camping ground in our orchard is perfect for those who prefer
              smallness,
              privacy and want to spend some time away from the big, crowded camps. Families especially
              are welcome! The camping ground does not provide much luxury, though we take great care to
              keep the grounds clean, tidy and ecologically oriented. We can house up to around 20 tents
              or trailers at a time. The guests are free to pick up fruit from our orchard and
              vegetables upon request.
            </p>
            <p>There are four showers and washbasins with hot water; an equal number of
              toilets plus an
              additional shower.</p>
            <p>We are happy to assist our guests in any way possible. We also speak
              fluent English and
              understand all major European languages.</p>
          </div>
        </div>
      </section>

      <section class="section">
        <h2 class="title title-new">Rules</h2>
        <h3 class="subtitle">We'll call 911 on you</h3>
        <div class="content rules">
          <ol v-scroll-reveal="{ duration: 1000, distance: '20%', origin: 'bottom' }">
            <li>Silence between 10:00PM and 7:00AM.</li>
            <li> Guests are kindly expected to keep the camping ground clean and tidy, the garbage
              should be collected in the appropriate recycling containers.
            </li>
            <li> Hot water is always at your disposal, however, please be considerate and don't be
              wasteful.
            </li>
            <li> The tap water is drinkable since it comes from the nearby Alpine foothills. There is
              no need to boil it beforehand.
            </li>
          </ol>
        </div>
      </section>

      <section class="section">
        <h2 class="title title-new">Reviews</h2>
        <h3 class="subtitle">What people think of us</h3>
        <Reviews :value="reviews"></Reviews>
      </section>
    </template>

    <template v-slot:pricing>
      <p class="heading">Priced at</p>
      <p class="title" style="color: whitesmoke; margin-bottom: 0">
        <strong>€12</strong><small style="opacity: 0.6; font-size: 16px"> / person</small><br>
      </p>
      <small class="heading" style="opacity: 0.6">tax not included</small>
      <hr>
      Tourist tax (adult) 2.00€<br>
      Tourist tax (child) 1.00€<br><br>


      * Electricity 3.5€<br><br>
    </template>
  </Accommodation>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Accommodation from "@/components/Accommodation.vue";
  import Amenities from "@/components/Amenities.vue";
  import Reviews from "@/components/Reviews.vue";

  @Component({
    components: {Reviews, Amenities, Accommodation}
  })
  export default class Camp extends Vue {

    amenities = ['parking', 'wifi', 'kitchen', 'washer', 'shower', 'refrigerator']
    images = [
      'https://turisticna-kmetija-hribar.si/images/camp/DSC00770-1920.jpg',
      'https://turisticna-kmetija-hribar.si/images/camp/DSC06618-1920.jpg',
      'https://turisticna-kmetija-hribar.si/images/camp/DSC00367-1920.jpg',
      'https://turisticna-kmetija-hribar.si/images/camp/DSC06619-1920.jpg',
      'https://turisticna-kmetija-hribar.si/images/camp/DSC06624-1920.jpg',
      'https://turisticna-kmetija-hribar.si/images/camp/DSC06626-1920.jpg',
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
      {
        content: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, cupiditate deleniti deserunt dolore fuga laboriosam magni molestias natus nemo optio quia quis sequi soluta tempore vel veniam. Nihil, quo.',
        author: 'Justin Hoe',
        date: '31/6/2016',
      },
    ]
  }
</script>


<style lang="scss" scoped>
  .camping {
    position: relative;
    &:before {
      position: absolute;
      top: -2.5rem;
      left: -2rem;
      opacity: 0.1;
      content: "\f1bb";
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
