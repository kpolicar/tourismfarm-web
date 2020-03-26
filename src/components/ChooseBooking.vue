<template>
    <div class="modal-card">
        <section class="modal-card-body">
            <svg viewBox="0 0 10 5.6" height="100%" width="100%" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <clipPath id="camping-clip">
                        <polygon id="hightlight2" points="0 0, 10 0, 0 5.6">
                            <animate attributeName="points" dur="1s" fill="freeze"
                                     to="0 0, 12 0, 0 6.8" begin="camping.mouseenter "></animate>
                            <animate attributeName="points" dur="1s" fill="freeze"
                                     to="0 0, 10 0, 0 5.6" begin="camping.mouseleave"></animate>
                            <animate attributeName="points" dur="1s" fill="freeze"
                                     to="0 -1.2, 10 -1.2, 0 4.4" begin="apartment.mouseenter "></animate>
                            <animate attributeName="points" dur="1s" fill="freeze"
                                     to="0 0, 10 0, 0 5.6" begin="apartment.mouseleave"></animate>
                        </polygon>
                    </clipPath>
                    <clipPath id="apartment-clip">
                        <polygon id="hightlight1" points="10 0, 10 5.6, 0 5.6">
                            <animate xlink:href="#hightlight1" attributeName="points" dur="1s" fill="freeze"
                                     to="10 -1.2, 10 5.6, -2 5.6" begin="apartment.mouseenter "></animate>
                            <animate xlink:href="#hightlight1" attributeName="points" dur="1s" fill="freeze"
                                     to="10 0, 10 5.6, 0 5.6" begin="apartment.mouseleave"></animate>
                            <animate xlink:href="#hightlight1" attributeName="points" dur="1s" fill="freeze"
                                     to="12 0, 12 6.8, 0 6.8" begin="camping.mouseenter "></animate>
                            <animate xlink:href="#hightlight1" attributeName="points" dur="1s" fill="freeze"
                                     to="10 0, 10 5.6, 0 5.6" begin="camping.mouseleave"></animate>
                        </polygon>
                    </clipPath>
                </defs>

                <image id="apartment"
                       preserveAspectRatio="xMidYMin slice"
                       xlink:href="http://turisticna-kmetija-hribar.si/images/grand-apartment/DSC06638-1600.jpg"
                       x="0" y="0" height="5.6" width="10"
                       clip-path="url(#apartment-clip)">
                </image>

                <image id="camping"
                       preserveAspectRatio="xMidYMax slice"
                       xlink:href="https://wallpaperset.com/w/full/8/1/2/216250.jpg"
                       x="0" y="0" height="5.6" width="10"
                       clip-path="url(#camping-clip)">
                </image>
            </svg>
        </section>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class ChooseBooking extends Vue {
    @Prop() email: number
    @Prop() password: string

    data() {
      return {
        isComponentModalActive: false,
        formProps: {
          email: 'evan@you.com',
          password: 'testing'
        }
      }
    }
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