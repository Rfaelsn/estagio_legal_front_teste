import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Master',
    path: '/',
    component: import('../views/layout/master-home.vue'),
    redirect: '/dashboard',
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        component: import('../views/dashboard-home.vue'),
      },
    ],
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
