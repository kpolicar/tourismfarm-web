<template>
  <Accommodation
    :url="{ name: 'grand-apartment' }"
    :amenities="amenities"
    :images="images"
    :pricing="$store.state.pricing.grandApartment">

    <ContentCard tag="section" class="section" style="padding-top: 0"
                 :title="$t('details.title')"
                 :subtitle="$t('details.subtitle')"
                 icon="bed">
      <p v-for="content in $t('details.paragraphs')">{{ content }}</p>
    </ContentCard>

    <ContentCard tag="section" class="section"
                 :title="$t('rules.title')"
                 :subtitle="$t('rules.subtitle')"
                 icon="clipboard-list">
      <p v-for="content in $t('rules.items')">{{ content }}</p>
    </ContentCard>

    <ContentCard tag="section" class="section"
                 :title="$t('reviews.title')"
                 :subtitle="$t('reviews.subtitle')"
                 :transition="false">
      <Reviews :value="$t('reviews.items')"></Reviews>
    </ContentCard>

  </Accommodation>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Accommodation from '@/components/Accommodation.vue';
import Amenities from '@/components/Amenities.vue';
import Reviews from '@/components/Reviews.vue';
import ContentCard from '@/components/ContentCard.vue';

  @Component({
    components: {
      ContentCard, Reviews, Amenities, Accommodation,
    },
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


<i18n>
  {
    "en": {
      "details": {
        "title": "Apartment details",
        "paragraphs": [
          "In a separate house, on the 1st floor, we offer you a spacious apartment with two bedrooms plus a well furnished kitchen complete with an electric stove, dishwasher, fridge, ... A large dining room, bathroom and separate toilette.",
          "Perfect for up to 6 persons, a crib can be supplied for small children."
        ]
      },
      "rules": {
        "items": [
          "Silence between 10:00PM and 7:00AM.",
          "Guests are kindly expected to keep the camping ground clean and tidy, the garbage should be collected in the appropriate recycling containers.",
          "Hot water is always at your disposal, however, please be considerate and don't be wasteful.",
          "The tap water is drinkable since it comes from the nearby Alpine foothills. There is no need to boil it beforehand."
        ]
      },
      "reviews": {
        "items": [
          {
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, cupiditate deleniti deserunt dolore fuga laboriosam magni molestias natus nemo optio quia quis sequi soluta tempore vel veniam. Nihil, quo.",
            "author": "John Doe",
            "date": "1/2/2020"
          },
          {
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, cupiditate deleniti deserunt dolore fuga laboriosam magni molestias natus nemo optio quia quis sequi soluta tempore vel veniam. Nihil, quo.",
            "author": "Pavlin Hoe",
            "date": "22/8/2019"
          },
          {
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, cupiditate deleniti deserunt dolore fuga laboriosam magni molestias natus nemo optio quia quis sequi soluta tempore vel veniam. Nihil, quo.",
            "author": "Justin Hoe",
            "date": "31/6/2016"
          },
          {
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequatur, cupiditate deleniti deserunt dolore fuga laboriosam magni molestias natus nemo optio quia quis sequi soluta tempore vel veniam. Nihil, quo.",
            "author": "Klemen Saint",
            "date": "28/1/2014"
          }
        ]
      }
    }
  }
</i18n>
