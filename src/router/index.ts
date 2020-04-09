import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {layout: 'landing'}
  },
  {
    path: '/inquiry/:accommodation',
    name: 'inquiry',
    component: () => import('@/views/Inquiry.vue'),
    meta: {layout: 'form'}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/Inquiry.vue'),
  },
  {
    path: '/camp',
    name: 'camp',
    component: () => import('@/views/Camp.vue'),
  },
  {
    path: '/grand-apartment',
    name: 'grand-apartment',
    component: () => import('@/views/GrandApartment.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
