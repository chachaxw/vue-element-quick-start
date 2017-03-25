import Home from './components/home/home.vue';
import Page1 from './components/page1/Page1.vue';
import Page2 from './components/page2/Page2.vue';
import Page3 from './components/page3/Page3.vue';
import Page4 from './components/page4/Page4.vue';

export default [
  {
    path: '/',
    component: Home,
  }, {
    path: '/page1',
    component: Page1,
  }, {
    path: '/page2',
    component: Page2,
  }, {
    path: '/page3',
    component: Page3,
  }, {
    path: '/page4',
    component: Page4,
  },
];
