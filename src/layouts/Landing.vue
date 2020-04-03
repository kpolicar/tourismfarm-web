<template>
  <div id="landing-layout">
    <section class="section is-paddingless">
      <LandingHero></LandingHero>
    </section>

    <router-view></router-view>

    <section class="section">
      <div class="columns">
        <div class="column">
          <LanguageSelector></LanguageSelector>
        </div>
        <div class="column">
          <ContactInfo></ContactInfo>
        </div>
        <div class="column">
          <SocialButtons></SocialButtons>
        </div>
      </div>
    </section>

    <section class="section is-paddingless">
      <Footer></Footer>
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import LandingHero from "@/components/LandingHero.vue";
  import Footer from "@/components/Footer.vue";
  import LanguageSelector from "@/components/inputs/LanguageSelector.vue";
  import ContactInfo from "@/components/ContactInfo.vue";
  import SocialButtons from "@/components/SocialButtons.vue";

  @Component({
    components: {SocialButtons, ContactInfo, LanguageSelector, Footer, LandingHero},
  })
  export default class LandingLayout extends Vue {
  }
</script>


<style lang="scss">
  section {
    padding: $section-spacing 0;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-top: 0;
    }
  }
</style>
