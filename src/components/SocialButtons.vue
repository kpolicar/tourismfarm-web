<template>
  <div>
    <a href="https://www.facebook.com/turisticna.kmetija.hribar.brezje" target="_blank">
      <b-button icon-right="facebook" icon-pack="fab" type="is-primary" class="is-large"
                outlined rounded></b-button>
    </a>
    <a href="https://plus.google.com/105378170775320918111" target="_blank">
      <b-button icon-right="google" icon-pack="fab" type="is-primary" class="is-large"
                outlined rounded></b-button>
    </a>
    <a href="https://www.instagram.com/touristfarmhribar" target="_blank">
      <b-button icon-right="instagram" icon-pack="fab" type="is-primary" class="is-large"
                outlined rounded></b-button>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({})
export default class SocialButtons extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
