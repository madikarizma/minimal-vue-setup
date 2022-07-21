import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter } from 'vue-router';
import routerConfig from '@/router.js';

const router = createRouter(routerConfig);

createApp(App)
  .use(router)
  .mount('#app');