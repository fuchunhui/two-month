import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Super',
  //   component: Super
  // },
  {
    path: '/analysis',
    name: 'Analysis',
    component: () =>
      import(/* webpackChunkName: "analysis" */ '@/views/Analysis.vue')
  },
  {
    path: '/acquisition',
    name: 'Acquisition',
    component: () =>
      import(/* webpackChunkName: "acquisition" */ '@/views/Acquisition.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
