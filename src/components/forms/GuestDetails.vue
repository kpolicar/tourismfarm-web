<template>
  <div>
    <b-field label="Full name" horizontal custom-class="is-normal">
      <b-input v-model="name"
               type="text"
               placeholder="John Doe"
               icon="user"
               minlength="5"
               maxlength="100">
      </b-input>
    </b-field>
    <b-field label="Email" horizontal custom-class="is-normal">
      <b-input v-model="email"
               type="email"
               placeholder="example@domain.com"
               icon="envelope"
               minlength="5"
               maxlength="100">
      </b-input>
    </b-field>
    <b-field label="Message (optional)" horizontal custom-class="is-normal">
      <b-input v-model="message"
               maxlength="300"
               type="textarea">

      </b-input>
    </b-field>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import GuestsPicker from "@/components/inputs/GuestsPicker.vue";

  @Component({
    components: {GuestsPicker}
  })
  export default class GuestDetailsForm extends Vue {

    name: string = ''
    email: string = ''
    message: string = ''

    get passes() {
      return this.name.length > 1 && this.email.length > 1
    }

    @Watch('passes')
    validatedChanged(passes: boolean) {
      this.$emit('passes', passes)
    }
  }
</script>
