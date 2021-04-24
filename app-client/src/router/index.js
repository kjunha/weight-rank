import { createRouter, createWebHistory } from '@ionic/vue-router';
import Main from '../views/Main';
import SplashInit from '../views/SplashInit';
import Login from '../views/Login';
import PersonalInformation from '../views/personal';

// import auth from '../middleware/auth';

const routes = [
  {
    path: '/',
    redirect: '/init'
  },
  {
    path: '/authenticated/:service',
    name: 'login',
    component: Login
  },
  {
    path: '/init',
    name: 'init',
    component: SplashInit
  },
  {
    path: '/main/:type',
    name: 'main',
    component: Main,
    // beforeEnter: auth
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalInformation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
