import Vue from 'vue';
import Vuex from 'Vuex';
import App from './App';
import Router from 'vue-router';
import Element from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element);
Vue.use(Router);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
