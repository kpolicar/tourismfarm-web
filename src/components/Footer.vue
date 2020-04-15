<template>
  <fragment>
    <nav class="navbar is-transparent" role="navigation">
        <a class="navbar-item has-text-centered" href="#">
          Contact
        </a>
        <a class="navbar-item has-text-centered" href="#">
          Legal
        </a>
        <a class="navbar-item has-text-centered" href="#">
          Terms & Privacy
        </a>
    </nav>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          ©2020 TKH
        </p>
      </div>
    </footer>
  </fragment>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({})
export default class QuickNavigation extends Vue {
}
</script>

<style lang="scss" scoped>
  .navbar {
    justify-content: center;
  }
</style>
