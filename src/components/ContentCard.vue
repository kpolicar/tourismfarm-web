<template>
  <component :is="tag">
    <h2 class="title title-new">{{ title }}</h2>
    <h3 class="subtitle" v-if="subtitle">{{ subtitle }}</h3>
    <div class="content">
      <b-icon v-if="icon" :icon="icon"></b-icon>
      <div v-if="transition" v-scroll-reveal="transition">
        <slot></slot>
      </div>
      <div v-else>
        <slot></slot>
      </div>
    </div>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({})
export default class ContentCard extends Vue {
    @Prop({ default: 'div' })
    tag!: string

    @Prop({
      default: () => ({ duration: 1000, distance: '20%', origin: 'bottom' }),
    })
    transition!: object | false

    @Prop({ required: true })
    title!: string

    @Prop()
    subtitle!: string

    @Prop()
    icon!: string
}
</script>

<style lang="scss" scoped>
  .content {
    position: relative;
    & > .icon {
      position: absolute;
      opacity: 0.1;
      font-size: 80px;
    }
  }
</style>
