import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';
import router from './router';
import store from './store'
import Buefy from 'buefy'
import Fragment from 'vue-fragment'
import Echo from 'laravel-echo'
import VueLodash from 'vue-lodash'
import PortalVue from 'portal-vue'
import lodash from 'lodash'
import VueSuperMethod from 'vue-super-call'
import '@fortawesome/fontawesome-free/css/all.css'

import DefaultLayout from '@/layouts/Default.vue';
import FormLayout from "@/layouts/Form.vue";

declare module 'vue/types/vue' {
  interface Vue {
    $echo: Echo
    $super: any
  }
}


window.Pusher = require('pusher-js');

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.prototype.$http = Axios;
Vue.prototype.$echo = new Echo({
  broadcaster: 'pusher',
  host: 'ws://ws-mt1.pusher.com/app/12ae4861e7cfe43c382f',
  key: process.env.VUE_APP_PUSHER_KEY
});
Vue.prototype.$super = VueSuperMethod

Vue.config.productionTip = false;

Vue.component('layout-default', DefaultLayout);
Vue.component('layout-form', FormLayout);

Vue.use(VueLodash, {lodash: lodash})
Vue.use(Fragment.Plugin)
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  iconfont: 'fa'
})
Vue.use(PortalVue)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
