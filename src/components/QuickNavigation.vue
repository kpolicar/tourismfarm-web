<template>
  <div :class="['nav-container', scrolled ? 'has-shrunk' : '', blended ? 'is-blended' : '']">
    <b-navbar :class="scrolled ? 'is-shrunk' : ''"
              :transparent="blended"
              fixed-top>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <LogoSvg class="logo" width="128px" height="128px"/>
        </b-navbar-item>
        <b-navbar-item tag="div" v-if="this.$route.meta.title">
          <h1 class="title">{{ this.$route.meta.title }}</h1>
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
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import LogoSvg from '@/assets/logo.svg?inline'

  @Component({
    components: {LogoSvg}
  })
  export default class QuickNavigation extends Vue {
    @Prop({ type: Boolean })
    blended!: boolean

    scrolled = false

    mounted() {
      this.$nextTick(function(){
        window.addEventListener("scroll", this.handleScroll);
      })
    }

    links = [
      {name: 'home', 'title': 'Home'},
      {name: 'camp', 'title': 'Camping'},
      {name: 'grand-apartment', 'title': 'Apartments'},
      {name: 'about', 'title': 'Dormitories'},
      {name: 'about', 'title': 'Activities'},
    ]

    handleScroll () {
      this.scrolled = !!document.documentElement.scrollTop
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

  .nav-container{
    padding-top: 146px;
    transition: all 0.15s ease-out;
    &.has-shrunk:not(.is-blended) {
      padding-top: 80px;
    }
  }
</style>
