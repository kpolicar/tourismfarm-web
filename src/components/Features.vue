<template>
  <div class="columns has-text-centered is-mobile">
    <div class="column" v-for="feature in features">
      <b-icon :icon="feature.icon" type="is-primary" size="is-large"></b-icon>
      <p class="heading">{{ feature.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({})
export default class Features extends Vue {
  data() {
    return {
      features: [
        { title: 'peaceful', icon: 'dove' },
        { title: 'location', icon: 'compass' },
        { title: 'flexible', icon: 'language' },
        { title: 'assistance', icon: 'comment' },
        { title: 'price', icon: 'money-bill-wave' },
      ],
    };
  }
}
</script>

<style lang="scss" scoped>
  .column:hover > .heading {
    color: $primary;
    transition-duration: $speed;
  }
</style>
