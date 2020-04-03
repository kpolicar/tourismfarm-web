<template>
  <div id="default-layout">
    <LandingHero></LandingHero>
    <router-view></router-view>
    <section class="section container">
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
    <Footer></Footer>
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


<style lang="scss" scoped>
  ::v-deep section {
    padding: $section-spacing 0;
  }

  ::v-deep .contrast .section-divider {
    margin-top: $section-spacing;
    margin-bottom: -$section-spacing;
    fill: $white-ter;
  }

  ::v-deep .contrast section {
    background-color: $white-ter;
  }
</style>
