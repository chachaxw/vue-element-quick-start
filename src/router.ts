import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home/home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page1',
      name: 'page1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "page1" */ './pages/page1/Page1.vue'),
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import(/* webpackChunkName: "page2" */ './pages/page2/Page2.vue'),
    },
    {
      path: '/page3',
      name: 'page3',
      component: () => import(/* webpackChunkName: "page3" */ './pages/page3/Page3.vue'),
    },
    {
      path: '/page4',
      name: 'page4',
      component: () => import(/* webpackChunkName: "page4" */ './pages/page4/Page4.vue'),
    },
  ],
});
