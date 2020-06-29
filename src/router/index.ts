import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Travel from '@/views/Travel.vue';
import Super from '@/views/Super.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Super',
    component: Super
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/analysis',
    name: 'Analysis',
    component: () => import(/* webpackChunkName: "analysis" */ '@/views/Analysis.vue')
  },
  {
    path: '/acquisition',
    name: 'Acquisition',
    component: () => import(/* webpackChunkName: "acquisition" */ '@/views/Acquisition.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
