import Vue from 'vue';
import App from './App.vue';
import Axios from 'axios';
import router from './router';
import store from './store'
import Buefy from 'buefy'
import '@fortawesome/fontawesome-free/css/all.css'

import DefaultLayout from './layouts/Default.vue';
import LandingLayout from './layouts/Landing.vue';

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;

Vue.component('layout-default', DefaultLayout);
Vue.component('layout-landing', LandingLayout);

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  iconfont: 'fa'
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
