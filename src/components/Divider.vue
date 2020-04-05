<template>
  <div class="is-divided">
    <component v-if="top"
               height="100px"
               width="100%"
               class="section-divider"
               :is="dividers[top]"></component>

    <slot></slot>
    <component v-if="bottom"
               height="100px"
               width="100%"
               class="section-divider"
               :is="dividers[bottom]"></component>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import RoundSvg from '@/assets/dividers/round.svg?inline';
  import TriangleSvg from '@/assets/dividers/triangle.svg?inline';

  @Component({
    components: {RoundSvg, TriangleSvg}
  })
  export default class Divider extends Vue {
    @Prop({type: [Boolean, String]})
    top!: boolean | string
    @Prop({type: [Boolean, String]})
    bottom!: boolean | string

    dividers = {
      true: RoundSvg,
      'round': RoundSvg,
      'triangle': TriangleSvg,
    }
  }
</script>

<style lang="scss" scoped>
 svg {
   ::v-deep path.is-primary {
     fill: whitesmoke;
   }
   ::v-deep path.is-secondary {
     fill: #e1e1e1;
   }
 }
</style>
