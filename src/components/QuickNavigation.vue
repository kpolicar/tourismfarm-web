<template>
  <b-navbar fixed-top
            :style="`background: rgb(255, 255, 255, ${opacity}); box-shadow: 0 4px 2px -2px rgb(255, 255, 255, ${opacity});`">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <LogoSvg class="logo" :width="logoSize" :height="logoSize" :fill="`rgb(${r}, ${b}, ${g})`" />
      </b-navbar-item>
      <b-navbar-item tag="div">
        <h1 class="title" :style="`color: rgb(${r}, ${b}, ${g})`">Grand apartment</h1>
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
  import LogoSvg from '@/assets/logo.svg?inline'

  @Component({
    components: {LogoSvg}
  })
  export default class QuickNavigation extends Vue {

    logoSize = 128;
    r = 255
    g = 255
    b = 255
    opacity = 0

    mounted() {

      this.$nextTick(function(){
        window.addEventListener("scroll", this.handleScroll);
      })
    }
    data() {
      return {
        links: [
          {name: 'home', 'title': 'Home'},
          {name: 'camp', 'title': 'Camping'},
          {name: 'grand-apartment', 'title': 'Apartments'},
          {name: 'about', 'title': 'Dormitories'},
          {name: 'about', 'title': 'Activities'},
        ]
      }
    }
    handleScroll (event) {
      let modifier = document.documentElement.scrollTop
      if (modifier > 100) {
        modifier = 100;
      }

      this.logoSize = 128 - (modifier/10*6.4);
      this.r = this.g = this.b = 255 - modifier * 2
      this.opacity = modifier/100
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


  nav {
    transition: all 0.5s;
    background: whitesmoke;
  }
</style>
