<template>
  <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
    <b-button icon-right="caret-down"  slot="trigger">
      <span>{{ title }}</span>
    </b-button>

    <b-dropdown-item
      aria-role="menu-item"
      :focusable="false"
      custom
      paddingless>
      <form action="">
        <div class="modal-card">
          <section class="modal-card-body">
            <b-field label="Adults" horizontal custom-class="is-normal">
              <b-numberinput v-model="computedAdults" min="1"></b-numberinput>
            </b-field>

            <b-field label="Children" horizontal custom-class="is-normal">
              <b-numberinput v-model="computedChildren" min="0"></b-numberinput>
            </b-field>

            <b-field label="Infants" horizontal custom-class="is-normal">
              <b-numberinput v-model="computedInfants" min="0"></b-numberinput>
            </b-field>
          </section>
          <footer class="modal-card-foot">
            8 guests maximum. Infants don’t count toward the number of guests.
          </footer>
        </div>
      </form>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({})
  export default class GuestsPicker extends Vue {
    @Prop()
    value = {
      adults: 1, children: 0, infants: 0,
    }

    adults!: number
    children!: number
    infants!: number

    mounted () {
      this.adults = this.value.adults
      this.children = this.value.children
      this.infants = this.value.infants
    }

    get title() {
      return (+this.adults + +this.children) + ' guests, ' + this.infants + ' infants';
    }

    get computedAdults() {
      return this.adults;
    }

    get computedChildren() {
      return this.children;
    }

    get computedInfants() {
      return this.infants;
    }

    set computedAdults(value) {
      this.$emit('input', {
        ...this.value, ...{
          adults: this.adults = value,
        }
      })
    }

    set computedChildren(value) {
      this.$emit('input', {
        ...this.value, ...{
          children: this.children = value,
        }
      })
    }

    set computedInfants(value) {
      this.$emit('input', {
        ...this.value, ...{
          infants: this.infants = value,
        }
      })
    }
  }
</script>
