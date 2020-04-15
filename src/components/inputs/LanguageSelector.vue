<template>
  <b-dropdown aria-role="list" expanded>
    <b-button icon-right="caret-down" type="is-primary" class="is-large" slot="trigger">
      English
    </b-button>
    <b-dropdown-item aria-role="listitem">Slovene</b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({})
export default class LanguageSelector extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
