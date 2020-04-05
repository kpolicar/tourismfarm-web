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
               style="transform: rotate(180deg)"
               :is="dividers[bottom]"></component>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import RoundSvg from '@/assets/dividers/round.svg?inline';

  @Component({
    components: {RoundSvg}
  })
  export default class Divider extends Vue {
    @Prop({type: [Boolean, String]})
    top!: boolean | string
    @Prop({type: [Boolean, String]})
    bottom!: boolean | string

    dividers = {
      true: RoundSvg,
      'round': RoundSvg,
    }
  }
</script>
