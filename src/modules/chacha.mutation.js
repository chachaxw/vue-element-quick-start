import * as types from './mutation-types';

const state = {
  count: 0,
};

const mutations = {
  [types.INCREMENT]() {
    state.count += 1;
    console.log(state.count);
  },
  [types.DECREMENT]() {
    state.count -= 1;
    console.log(state.count);
  },
};

export default {
  state,
  mutations,
};
