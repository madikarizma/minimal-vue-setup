import { createWebHistory } from 'vue-router';

import Home from '@/components/Home.vue';

export default {
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
};