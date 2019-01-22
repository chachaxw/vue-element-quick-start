import Vue from 'vue';
import Vuex from 'vuex';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store/store';
import router from './router';
import './registerServiceWorker';

Vue.use(Element);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
