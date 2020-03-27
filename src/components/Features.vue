<template>
  <nav class="level is-bold">
    <div class="level-item" v-for="feature in features">
      <div>
        <p class="title">
          <b-icon :icon="feature.icon" type="is-primary"></b-icon>
        </p>
        <p class="heading">{{ feature.title }}</p>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class Features extends Vue {
    data() {
      return {
        features: [
          {title: 'peaceful', icon: 'dove'},
          {title: 'location', icon: 'compass'},
          {title: 'flexible', icon: 'language'},
          {title: 'assistance', icon: 'comment'},
          {title: 'price', icon: 'money-bill-wave'},
        ],
      };
    }
  }
</script>

<style lang="scss" scoped>
  .level-item:hover .heading {
    color: $primary;
    transition-duration: $speed;
  }
</style>
