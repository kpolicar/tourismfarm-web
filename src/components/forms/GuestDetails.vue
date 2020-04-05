<template>
  <div>
    <b-field label="Full name" horizontal custom-class="is-normal">
      <b-input v-model="value.name"
               name="name"
               type="text"
               placeholder="John Doe"
               icon="user"
               minlength="5"
               maxlength="100"
               required>
      </b-input>
    </b-field>
    <b-field label="Email" horizontal custom-class="is-normal">
      <b-input v-model="value.email"
               name="email"
               type="email"
               placeholder="example@domain.com"
               icon="envelope"
               minlength="5"
               maxlength="100"
               required>
      </b-input>
    </b-field>
    <b-field label="Message (optional)" horizontal custom-class="is-normal">
      <b-input v-model="value.message"
               name="message"
               maxlength="300"
               type="textarea">

      </b-input>
    </b-field>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import GuestsPicker from "@/components/inputs/GuestsPicker.vue";

  export interface DataModel {
    name: string,
    email: string,
    message: string
  }

  @Component({
    components: {GuestsPicker}
  })
  export default class GuestDetailsForm extends Vue {

    value: DataModel = {
      name: '',
      email: '',
      message: '',
    }


    get passes() {
      let {name, email, message} = this.value;

      return name.length >= 5 && name.length <= 100 &&
             email.length >= 5 && email.length <= 100 && email.match('@.+') &&
             message.length <= 300;
    }

    @Watch('value', { deep: true })
    valueChanged(value: DataModel) {
      this.$emit('input', value)
    }

    @Watch('passes')
    validatedChanged(passes: boolean) {
      this.$emit('passes', passes)
    }
  }
</script>
