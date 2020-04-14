<template>
  <div>
    <blockquote v-for="(review, index) in value"
                v-scroll-reveal="{ duration: 1000, distance: '100%', origin: index % 2 === 0 ? 'left' : 'right' }">
      <p>{{ review.content }}</p>
      <footer>
        <cite>{{ review.author }}</cite>
        <p class="heading">{{ review.date }}</p>
      </footer>
    </blockquote>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  export interface Review {
    content: string
    author: string
    date: string
  }

  @Component({})
  export default class Reviews extends Vue {
    @Prop({required: true})
    value!: Array<Review>

  }
</script>

<style lang="scss" scoped>
  .column:not(:first-child) {
    margin-top: $block-spacing;
  }
  blockquote {
    padding: 2.5rem 3rem 1rem;
    cite {
      font-style: normal;
    }
  }

  cite {
    font-weight: bold;
    font-style: normal;
    font-family: $family-primary;
    font-size: 18px;
    color: $black-bis;
  }
  ::v-deep .heading {
    color: $accent;
  }

  blockquote {
    position: relative;
    &:before {
      position: absolute;
      top: 1rem;
      left: 2.5rem;
      opacity: 0.1;
      content: "\f10d";
      font-weight: 900;
      font-family: "Font Awesome 5 Free";
      font-size: 50px;
    }
    border-top: 1px solid rgba($primary, 0.1);
    border-radius: 2px;
    &:nth-child(odd) {
      border-left: 3px solid $primary;
    }
    &:nth-child(even) {
      border-right: 3px solid $primary;
    }
    width: 100%;
    footer {
      margin-top: 1rem;
    }
  }
</style>
