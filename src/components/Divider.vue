<template>
  <fragment>
    <component v-if="top"
               height="100px"
               width="100%"
               :class="['is-divider'].concat([this.transition.to ? this.transition.to : '',  this.transition.above ? 'from-'+this.transition.above : ''])"
               :is="dividers[top]"></component>
    <component :is="tag" :class="[customClass, transition.to]">
      <slot></slot>
    </component>
    <component v-if="bottom"
               height="100px"
               width="100%"
               :class="['is-divider'].concat([this.transition.to ? this.transition.to : '',  this.transition.below ? 'from-'+this.transition.below : ''])"
               :is="dividers[bottom]"></component>
  </fragment>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import RoundSvg from '@/assets/dividers/round.svg?inline';
  import TriangleSvg from '@/assets/dividers/triangle.svg?inline';

  interface Transition {
    to: string
    above: string
    below: string
  }

  @Component({
    components: {RoundSvg, TriangleSvg}
  })
  export default class Divider extends Vue {
    @Prop({type: [Boolean, String]})
    top!: boolean | string
    @Prop({type: [Boolean, String]})
    bottom!: boolean | string
    @Prop({default: {to: '', above: '', below: ''}})
    transition!: Transition
    @Prop({default: 'div'})
    tag!: string
    @Prop()
    customClass!: string

    dividers = {
      true: RoundSvg,
      'round': RoundSvg,
      'triangle': TriangleSvg,
    }
  }
</script>
