<template>
  <div class="columns is-multiline">
    <div class="column is-one-third" v-for="feature in features">
      <p><b-icon :icon="feature.icon"></b-icon> {{ feature.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class Amenities extends Vue {
    features = [
      {title: 'Free parking', icon: 'parking'},
      {title: 'Wifi', icon: 'wifi'},
      {title: 'Kitchen', icon: 'utensils'},
      {title: 'Washer', icon: 'tshirt'},
      {title: 'Shower', icon: 'shower'},
    ]
  }
</script>
