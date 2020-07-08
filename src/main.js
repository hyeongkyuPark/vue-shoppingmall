import Vue from 'vue';
import App from './App.vue';
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueMq from 'vue-mq';


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

new Vue({
  render: h => h(App),
}).$mount('#app');


