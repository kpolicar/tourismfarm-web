<template>
  <fragment>
    <div class="columns is-multiline" v-if="render === 'columns'">
      <div class="column is-one-third" v-for="(key, feature) in features">
        <p><b-icon :icon="feature.icon"></b-icon> {{ feature.title }}</p>
      </div>
    </div>

    <CarouselListSlideshow :data="features"
                     :arrow="false"
                     :items-to-show="7"
                     autoplay
                     v-if="render === 'carousel'">
      <template slot="item" slot-scope="props">
        <p class="has-text-centered" style="padding: 2rem">
          <b-icon class="is-rounded" :icon="props.list.icon"></b-icon>
          <span class="heading">{{ props.list.title }}</span>
        </p>
      </template>
    </CarouselListSlideshow>
  </fragment>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import CarouselListSlideshow from "@/components/bulma/CarouselListSlideshow.vue";

  @Component({
    components: {CarouselListSlideshow}
  })
  export default class Amenities extends Vue {
    @Prop({ default: 'columns' })
    render!: string
    @Prop()
    items!: Array<string>

    get features() {
      return Object.values(this._.pick({
        parking: {title: 'Free parking', icon: 'parking'},
        wifi: {title: 'Wifi', icon: 'wifi'},
        kitchen: {title: 'Kitchen', icon: 'utensils'},
        washer: {title: 'Washer', icon: 'tshirt'},
        shower: {title: 'Shower', icon: 'shower'},
        noSmoking: {title: 'No smoking', icon: 'smoking-ban'},
        coffee: {title: 'Coffee maker', icon: 'coffee'},
        oven: {title: 'Oven', icon: 'fire'},
        dishwasher: {title: 'Dishwasher', icon: 'soap'},
        refrigerator: {title: 'Refrigerator', icon: 'fan'},
        freezer: {title: 'Freezer', icon: 'temperature-low'},

      }, this.items));
    }
  }
</script>

<style lang="scss" scoped>
  .icon {
    border: 1px solid #999;
    border-radius: $radius-rounded;
    width: 66px;
    height: 66px;
    text-align: center;
    margin-bottom: 10px;
  }
</style>
