import { createApp } from 'VUE';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import Menu from './components/Menu/Menu.vue'
import LoginPage from './components/Login/LoginPage.vue'
import PlayPage from './components/PlayPage/PlayPage.vue'
import NotFound from './components/NotFound/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: App },
      { path: '/menu', component: Menu },
      { path: '/login', component: LoginPage },
      { path: '/play', component: PlayPage },
      { path: '/:notFound(.*)', component: NotFound}
    ],
 
  });
  const app = createApp({});
  app.use(router);
  app.mount('#app');


