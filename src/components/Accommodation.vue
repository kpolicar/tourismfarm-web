<template>
  <fragment>
    <b-carousel :indicator-inside="false">
      <b-carousel-item v-for="(item, i) in 6" :key="i">
            <span class="image">
              <img :src="getImgUrl(i)">
            </span>
      </b-carousel-item>
      <template slot="indicators" slot-scope="props">
            <span class="al image">
                <img :src="getImgUrl(props.i)" :title="props.i">
            </span>
      </template>
    </b-carousel>

    <div class="container">
      <b-carousel-list
        :data="items" :arrow="false" :items-to-show="5">

        <template slot="item" slot-scope="props">
          <p class="has-text-centered" style="padding: 2rem">
            <b-icon class="is-rounded" :icon="props.list.icon"></b-icon>
            <span class="heading">{{ props.list.title }}</span>
          </p>
        </template>
      </b-carousel-list>
      <hr>
    </div>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <b-tabs size="is-medium"
                    vertical>
              <slot name="tabs"></slot>
            </b-tabs>
          </div>
          <div class="column" style="background: #3e394d; color: whitesmoke; border-radius: 5px; padding: 3rem 3rem">
            <div class="container">
              <slot name="pricing"></slot>
            </div>

            <b-button tag="router-link"
                      :to="{name: 'inquiry', params: {accommodation: 'camping'}}"
                      type="is-primary"
                      size="is-medium"
                      expanded>
              Make inquiry
            </b-button>
          </div>
        </div>
      </div>
    </section>
  </fragment>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class Accommodation extends Vue {

    data() {
      return {
        items: [
          {title: 'Free parking', icon: 'parking'},
          {title: 'Wifi', icon: 'wifi'},
          {title: 'Kitchen', icon: 'utensils'},
          {title: 'Washer', icon: 'tshirt'},
          {title: 'Shower', icon: 'shower'},
        ]
      }
    }

    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`
    }
  }
</script>

<style lang="scss" scoped>
  .is-active .al img {
    filter: grayscale(0%);
  }
  .al img {
    filter: grayscale(100%);
  }

  .icon {
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 50%;
    width: 66px;
    height: 66px;
    line-height: 66px;
    text-align: center;
    margin-bottom: 10px;
  }

  .heading {
    font-size: 14px;
  }

  .carousel-list.has-shadow {
    box-shadow: none;
  }
</style>
