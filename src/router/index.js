import { createRouter, createWebHistory } from '@ionic/vue-router';
import Main from '../views/Main';
import SplashInit from '../views/SplashInit';

const routes = [
  {
    path: '/',
    redirect: '/init',
  },
  {
    path: '/main/:type',
    name: 'main',
    component: Main,
  },
  {
    path: '/init',
    name: 'init',
    component: SplashInit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
