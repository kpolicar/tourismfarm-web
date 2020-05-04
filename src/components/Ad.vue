<template>
  <div class="ad" id="ad">
    <div class="content">
      <img src="@/assets/dancing.gif" alt="" style="height: 100%">
      <p>Hot singles in your area</p>
    </div>
  </div>
</template>

<script lang="ts">
  // @ts-nocheck
  
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import _ from 'lodash'

  class AvoidElement {
    element;
    top = 0;
    left = 0;
    radius;

    constructor(element, top=0, left=0) {
      this.radius = element.clientHeight/2;
      this.element = element;
      this.top = top;
      this.left = left;
      this.refreshPosition();

      document.addEventListener('mousemove', _.debounce(this.onMouseMove.bind(this), 1))
    }

    onMouseMove(event) {
      let centerX = this.left + this.radius;
      let centerY = this.top + this.radius;

      let distanceFromCenter = Math.sqrt(
        Math.pow(centerX-event.x, 2) + Math.pow(centerY-event.y, 2)
      );

      let distanceFromBorder;
      let tooClose = distanceFromCenter <= this.radius;
      let tooFar = distanceFromCenter >= this.radius+100;

      if (!tooClose && !tooFar) {
        return;
      } else if (tooFar) {
        distanceFromBorder = this.radius+100-distanceFromCenter;
      } else if (tooClose) {
        distanceFromBorder = this.radius-distanceFromCenter;
      }

      let ratio = distanceFromBorder / distanceFromCenter;

      let vecX = ratio * (centerX-event.x);
      let vecY = ratio * (centerY-event.y);

      this.left += vecX;
      this.top += vecY;
      this.refreshPosition();
    }

    refreshPosition() {
      this.element.style.left = this.left+'px';
      this.element.style.top = this.top+'px';
    }
  }

  @Component({})
  export default class Ad extends Vue {
    @Prop()
    record!: object

    mounted() {
      new AvoidElement(document.querySelector('#ad'));
    }
  }
</script>

<style lang="scss">
  .ad {
    border-radius: 50%;
    //border: 2px dashed red;
    z-index: 9999;
    position: fixed;
    left: 0;
    top: 0;
    padding: 100px; // radius
    .content {
      position: relative;
      :before {
        color: red;
        content: '\f410';
        font-family: 'Font Awesome 5 Free';
        border-radius: 50%;
        position: absolute;
        font-size: 20px;
        left: -5px;
        top: -10px;
      }
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 20px;
      display: flex;
      align-items: center;
      height: 200px;
      width: 200px;
      padding: 20px;
      border-radius: 6px;
      animation: rainbow-bg 2s linear;
      animation-iteration-count: infinite;
    }
  }

  @keyframes rainbow-bg{
    100%,0%{
      background-color: rgb(255,0,0);
    }
    8%{
      background-color: rgb(255,127,0);
    }
    16%{
      background-color: rgb(255,255,0);
    }
    25%{
      background-color: rgb(127,255,0);
    }
    33%{
      background-color: rgb(0,255,0);
    }
    41%{
      background-color: rgb(0,255,127);
    }
    50%{
      background-color: rgb(0,255,255);
    }
    58%{
      background-color: rgb(0,127,255);
    }
    66%{
      background-color: rgb(0,0,255);
    }
    75%{
      background-color: rgb(127,0,255);
    }
    83%{
      background-color: rgb(255,0,255);
    }
    91%{
      background-color: rgb(255,0,127);
    }
  }
</style>
