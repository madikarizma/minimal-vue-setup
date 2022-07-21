import { createApp } from 'vue';
import { createRouter } from 'vue-router';
import routerConfig from '@/router.js';
import './style.css';
import App from './App.vue';

const router = createRouter(routerConfig);

createApp(App)
  .use(router)
  .mount('#app');