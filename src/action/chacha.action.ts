import * as types from '../modules/mutation-types';

export const increment = ({ commit }: any) => {
  commit(types.INCREMENT);
};

export const decrement = ({ commit }: any) => {
  commit(types.DECREMENT);
};
