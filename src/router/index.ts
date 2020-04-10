import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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
    meta: {title: 'Campgrounds'}
  },
  {
    path: '/grand-apartment',
    name: 'grand-apartment',
    component: () => import('@/views/GrandApartment.vue'),
    meta: {title: 'Grand apartment'}
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
