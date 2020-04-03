<template>
  <div id="form-layout">
    <section class="section is-paddingless">
      <QuickNavigation></QuickNavigation>
    </section>

    <router-view></router-view>

    <section class="section is-paddingless">
      <Footer></Footer>
    </section>
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
    components: {
      SocialButtons,
      ContactInfo,
      LanguageSelector,
      QuickNavigation,
      Footer,
      LandingHero
    },
  })
  export default class FormLayout extends Vue {
  }
</script>

