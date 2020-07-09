import Vue from 'vue';
import App from './App.vue';
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueMq from 'vue-mq';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

//폰트어썸
faLibrary.add(faCartPlus, faSearch);
Vue.component('font-awesome-icon', FontAwesomeIcon);

//vue-mq
Vue.use(VueMq, {
  breakpoints: {
    mobile: 550,
    tablet: 900,
    laptop: 1300,
    desktop: Infinity
  }
});

Vue.use(VueRouter);

import {MainPage, LoginPage} from './pages'

const routes = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/',
    component: MainPage
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');


