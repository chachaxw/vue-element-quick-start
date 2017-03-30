import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from '../action/chacha.action';
import mutations from '../modules/chacha.mutation';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters: {
    count: state => state.count,
  },
  modules: {
    mutations,
  },
});
