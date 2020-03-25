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
                    <a class="button is-primary is-rounded">
                        <strong>Home</strong>
                    </a>
                    <a class="button is-light is-rounded">
                        About
                    </a>
                    <a class="button is-light is-rounded">
                        Amenities
                    </a>
                    <a class="button is-light is-rounded">
                        Rates
                    </a>
                    <a class="button is-light is-rounded">
                        Activities
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class Navigation extends Vue {
  }
</script>

<style lang="scss">
    .logo {
        fill: white;
    }
</style>
