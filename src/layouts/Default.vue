<template>
  <div id="default-layout">
    <section class="hero is-fullheight video">
      <div class="hero-video">
        <video poster="@/assets/hero.jpg" playsinline autoplay muted loop>
          <source src="" type="video/mp4"/>
        </video>
      </div>

      <div class="hero-head">
        <Navigation></Navigation>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Explore The<br/> Countryside!
          </h1>
          <h2 class="subtitle">
            A family farm
          </h2>
          <button class="button is-primary is-medium"
                  @click="cardModal()">
            Book now
          </button>
        </div>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Navigation from '@/components/Navigation.vue';
  import ChooseBooking from '@/components/ChooseBooking.vue';

  @Component({
    components: {
      Navigation,
    },
  })
  export default class DefaultLayout extends Vue {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: ChooseBooking,
        hasModalCard: true,
        trapFocus: true,
        fullScreen: true,
        animation: 'slide'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .hero .hero-body {
    .title {
      color: #fff;
      font-size: 96px;
    }

    .subtitle {
      margin-top: 10px;
      text-transform: uppercase;
      font-weight: bold;
      font-style: italic;
    }
  }

  ::v-deep section {
    margin-top: 50px;
  }

  section {
    margin-top: 0;
  }
</style>
