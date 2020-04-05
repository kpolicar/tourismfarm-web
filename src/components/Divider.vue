<template>
  <div class="is-divided">
    <component v-if="top"
               class="section-divider"
               :is="dividers[topType]"></component>

    <slot></slot>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import RoundSvg from '@/assets/dividers/round.svg';

  @Component({
    components: {RoundSvg}
  })
  export default class Divider extends Vue {
    @Prop({type: Boolean, default: true})
    top!: boolean
    @Prop({type: Boolean})
    bottom!: boolean

    @Prop({default: 'round'})
    topType!: string
    @Prop({default: 'round'})
    bottomType!: string


    dividers = {
      round: RoundSvg
    }
  }
</script>

<style lang="scss" scoped>
  svg {
    width: 100%;
  }
</style>
