<template>
  <section>
    <footer class="footer is-secondary">
      <div class="content has-text-centered">
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Legal</a></li>
          <li><a href="#">Terms & Privacy</a></li>
        </ul>
      </div>
    </footer>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          ©2020 TKH
        </p>
      </div>
    </footer>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class QuickNavigation extends Vue {
  }
</script>

<style lang="scss" scoped>
  .footer.is-secondary {
      background: transparent;
  }
</style>
