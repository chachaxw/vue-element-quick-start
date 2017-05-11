import * as types from './mutation-types';

/* eslint no-param-reassign: 0 */
const state = {
  count: 0,
};

const mutations = {
  [types.INCREMENT](data) {
    data.count += 1;
  },
  [types.DECREMENT](data) {
    data.count -= 1;
  },
};

export default {
  state,
  mutations,
};
