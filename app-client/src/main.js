import { createApp } from 'vue';
import { Plugins } from '@capacitor/core';
import App from './App.vue';
import router from './router';
import store from './store';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';

const app = createApp(App).use(IonicVue).use(router).use(store);
const capacitor = Plugins.App;
/* API Services */
import AppService from './services/AppService';
import UserService from './services/UserService';

//Assign Api Service
const appApi = new AppService();
const userApi = new UserService();
app.config.globalProperties.appApi = appApi;
app.config.globalProperties.userApi = userApi;

router.isReady().then(() => {
  app.mount('#app');
  capacitor.addListener('appUrlOpen', data => {
    const slug = data.url.split('.app').pop()
    console.log('slug ::: ' + slug)
    if(slug) {
      router.push(slug)
    }
  })
});
