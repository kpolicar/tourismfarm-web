<template>
  <div class="modal-card">
    <div class="modal-card-body">
      <svg viewBox="0 0 10 5.6" height="100%" width="100%" preserveAspectRatio="xMidYMid slice">
        <defs>
          <clipPath id="camping-clip">
            <polygon id="hightlight2" points="0 0, 10 0, 0 5.6">
            </polygon>
          </clipPath>
          <clipPath id="apartment-clip">
            <polygon id="hightlight1" points="10 0, 10 5.6, 0 5.6">
            </polygon>
          </clipPath>
        </defs>

        <image id="apartment"
               preserveAspectRatio="xMidYMin slice"
               xlink:href="http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC06638-1600.jpg"
               x="0" y="0" height="5.6" width="10"
               clip-path="url(#apartment-clip)">
        </image>

        <router-link :to="{name: 'booking', query: {target: 'camping'}}">
          <image id="camping"
                 preserveAspectRatio="xMidYMax slice"
                 xlink:href="https://wallpaperset.com/w/full/8/1/2/216250.jpg"
                 x="0" y="0" height="5.6" width="10"
                 clip-path="url(#camping-clip)">
          </image>
        </router-link>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class ChooseBookingModal extends Vue {
  }
</script>

<style lang="scss" scoped>
  .modal-card {
    .modal-card-body {
      margin: 0;
      padding: 0;
    }
  }
</style>
