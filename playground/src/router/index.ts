import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import DemoPage from '../views/DemoPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/demo',
  },
  {
    path: '/demo',
    name: 'DemoPage',
    component: DemoPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
