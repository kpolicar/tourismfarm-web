<script lang="ts">
// @ts-nocheck

import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import config from 'buefy/src/utils/config.js';
import CarouselList from 'buefy/src/components/carousel/CarouselList.vue';

  @Component({
    mixins: [CarouselList],
  })
export default class CarouselListSlideshow extends Vue {
    @Prop({ type: Boolean, default: true })
    autoplay!: boolean

    @Prop({ type: Boolean, default: true })
    repeat!: boolean

    @Prop()
    interval!: number

    isPause = false

    timer: NodeJS.Timer|null = null

    reversed = false

    mounted() {
      this.startTimer();
    }

    beforeDestroy() {
      this.pauseTimer();
    }

    startTimer() {
      if (!this.autoplay || this.timer) return;
      this.isPause = false;
      this.timer = setInterval(() => {
        if (!this.repeat) {
          this.pauseTimer();
        } else {
          const tooFar = this.activeItem > this.total - this.itemsToShow;
          const atStart = this.activeItem === 0;
          if (tooFar || atStart) {
            this.reversed = tooFar || !atStart;
          }

          this.reversed ? this.prev() : this.next();
        }
      }, (this.interval || config.defaultCarouselInterval));
    }

    pauseTimer() {
      this.isPause = true;
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }

    dragStart(event: any) {
      this.pauseTimer();
      this.$super(CarouselList).dragStart(event);
    }

    dragEnd(event: any) {
      this.startTimer();
      this.$super(CarouselList).dragEnd(event);
    }

    @Watch('autoplay')
    autoplayChanged(status: boolean) {
      status ? this.startTimer() : this.pauseTimer();
    }
}
</script>
