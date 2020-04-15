<template>
  <Accommodation
    :url="{ name: 'camp' }"
    :amenities="amenities"
    :images="images"
    :pricing="$store.state.pricing.camping">

    <ContentCard tag="section" class="section" style="padding-top: 0"
                 :title="$t('details.title')"
                 :subtitle="$t('details.subtitle')"
                 icon="tree">
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

    <template #pricing="{ base }">
      <p>* Electricity {{ base }}€</p>
    </template>

  </Accommodation>
</template>

<script lang="ts">
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
}
</script>

<i18n>
  {
    "en": {
      "details": {
        "title": "Campsite details",
        "paragraphs": [
          "The small camping ground in our orchard is perfect for those who prefer smallness, privacy and want to spend some time away from the big, crowded camps. Families especially are welcome! The camping ground does not provide much luxury, though we take great care to keep the grounds clean, tidy and ecologically oriented. We can house up to around 20 tents or trailers at a time. The guests are free to pick up fruit from our orchard and vegetables upon request.",
          "There are four showers and washbasins with hot water; an equal number of toilets plus an additional shower.",
          "We are happy to assist our guests in any way possible. We also speak fluent English and understand all major European languages."
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
          }
        ]
      }
    }
  }
</i18n>
