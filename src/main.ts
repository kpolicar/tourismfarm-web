import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';
import router from './router';
import store from './store'
import Buefy from 'buefy'
import Fragment from 'vue-fragment'
import Echo from 'laravel-echo'
import '@fortawesome/fontawesome-free/css/all.css'

import DefaultLayout from '@/layouts/Default.vue';
import LandingLayout from '@/layouts/Landing.vue';
import FormLayout from "@/layouts/Form.vue";

Axios.defaults.baseURL = process.env.VUE_APP_API_URL;

window.Pusher = require('pusher-js');

Vue.prototype.$echo = new Echo({
  broadcaster: 'pusher',
  host: 'ws://ws-mt1.pusher.com/app/12ae4861e7cfe43c382f',
  key: process.env.VUE_APP_PUSHER_KEY
});
Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

Vue.component('layout-default', DefaultLayout);
Vue.component('layout-landing', LandingLayout);
Vue.component('layout-form', FormLayout);

Vue.use(Fragment.Plugin)
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  iconfont: 'fa'
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
