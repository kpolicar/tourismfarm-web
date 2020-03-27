<template>
  <div>
    <Testimonials></Testimonials>
    <WhyUs></WhyUs>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Testimonials from '@/components/Testimonials';
  import WhyUs from "@/components/WhyUs";

  @Component({
    components: {WhyUs, Testimonials}
  })
  export default class Home extends Vue {
  }
</script>
