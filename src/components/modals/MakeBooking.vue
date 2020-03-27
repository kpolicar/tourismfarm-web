<template>
  <div class="modal-card">
    <section class="modal-card-body">
      <component :is="this.steps[this.progress]" @finished="stepFinished"></component>
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import ChooseBooking from "@/components/ChooseBooking.vue";

  @Component({})
  export default class MakeBooking extends Vue {
    @Prop({default: 0}) step: number
    data() {
      return {
        progress: this.step,
        steps: [
          ChooseBooking,
          ChooseBooking,
        ]
      }
    }

    stepFinished(data) {
      this.progress++;
      console.log('progress: '+this.progress);
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
