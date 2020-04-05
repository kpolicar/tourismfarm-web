<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <LogoSvg src="@/assets/logo.svg" class="logo" width="128px" height="128px"/>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link :to="link" v-for="link in links" class="button is-rounded"
                       exact-active-class="is-primary" :event="link.name!=='about' ? 'click': ''">
            {{ link.title }}
          </router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import LogoSvg from '@/assets/logo.svg'

  @Component({
    components: {LogoSvg}
  })
  export default class QuickNavigation extends Vue {
    data() {
      return {
        links: [
          {name: 'home', 'title': 'Home'},
          {name: 'about', 'title': 'Camping'},
          {name: 'about', 'title': 'Apartments'},
          {name: 'about', 'title': 'Dormitories'},
          {name: 'about', 'title': 'Activities'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button:not(.is-primary) {
    background: transparent;
    border: none;
    &:hover {
      color: $primary;
    }
  }

  ::v-deep .navbar-item {
    font-family: $family-secondary;
  }
</style>
