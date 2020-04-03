<template>
  <div id="default-layout">
    <QuickNavigation></QuickNavigation>
    <router-view></router-view>
    <div class="columns">
      <LanguageSelector></LanguageSelector>
      <ContactInfo></ContactInfo>
      <SocialButtons></SocialButtons>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import LandingHero from "@/components/LandingHero.vue";
  import Footer from "@/components/Footer.vue";
  import QuickNavigation from "@/components/QuickNavigation.vue";
  import LanguageSelector from "@/components/inputs/LanguageSelector.vue";
  import ContactInfo from "@/components/ContactInfo.vue";
  import SocialButtons from "@/components/SocialButtons.vue";

  @Component({
    components: {SocialButtons, ContactInfo, LanguageSelector, QuickNavigation, Footer, LandingHero},
  })
  export default class DefaultLayout extends Vue {
  }
</script>

