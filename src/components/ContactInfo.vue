<template>
  <div>
    <div class="columns">
      <div class="column">
        <p class="subtitle">Address</p>
        Brezje 14, 4243 Brezje, Slovenia

        <p class="subtitle">Telephone</p>
        +386 40 260 414
        <p class="subtitle">Email</p>
        breda.policar@gmail.com
      </div>
      <div class="column">
        <p class="subtitle">GPS Coordinates</p>
        Lat. 46.326170
        Long. 14.234771
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component({})
export default class ContactInfo extends Vue {
}
</script>
