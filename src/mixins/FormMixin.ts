import Vue from 'vue'
import {Mixin} from "vue-mixin-decorator";

@Mixin
export default class FormMixin extends Vue {
  passesValidation!: {[key:string] : boolean} = {};

  watchElementValidity(ref: string) {
    this.$watch(() => {
      return this.$refs[ref].isValid;
    }, (val) => {
      this.passesValidation[ref] = val;
      console.log(this.passesValidation);
    }, {immediate: true});
  }

  get passes() {
    return Object.values(this.passesValidation).every(predicate => predicate);
  }
}
