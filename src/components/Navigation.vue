<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img svg-inline src="@/assets/logo.svg" class="logo" width="128px" height="128px"/>
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-button icon-left="facebook-f" icon-pack="fab" rounded></b-button>
                    <b-button icon-left="twitter" icon-pack="fab" rounded></b-button>
                    <b-button icon-left="instagram" icon-pack="fab" rounded></b-button>
                    <b-button icon-left="phone" tag="a" href="tel:080055522233">
                        0 800 555 222 33
                    </b-button>
                </div>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link :to="link" v-for="link in links" class="button is-rounded" exact-active-class="is-primary">
                        {{ link.title }}
                    </router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Navigation extends Vue {
    data() {
      return {
        links: [
          {name: 'home', 'title': 'Home'},
          {name: 'about', 'title': 'About'},
          {name: 'about', 'title': 'Ameneties'},
          {name: 'about', 'title': 'Rates'},
          {name: 'about', 'title': 'Activities'},
        ]
      }
    }
  }
</script>

<style lang="scss">
    .logo {
        fill: white;
    }
</style>
