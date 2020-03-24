<template>
    <div>
        <Navigation></Navigation>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

    @Component({
      components: {
        Navigation,
      },
    })
export default class DefaultLayout extends Vue {}
</script>
