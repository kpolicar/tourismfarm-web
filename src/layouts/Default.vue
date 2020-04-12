<template>
  <div id="default-layout">
    <section class="section is-paddingless">
      <portal-target name="navigation">
        <QuickNavigation></QuickNavigation>
      </portal-target>
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
  export default class DefaultLayout extends Vue {
  }
</script>

