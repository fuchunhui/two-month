import * as types from './mutation-types';

interface State {
  count: number
}

type Count = {
  num: number;
};

export default {
  state: {
    count: 0
  },
  getters: {
    getCount: ({count}: State): number => {
      console.log('store getters: ', count);
      return count;
    }
  },
  actions: {
    async addCount(context: any, {num}: Count): Promise<void> { // eslint-disable-line
      await context.commit(types.ADD_COUNT, {
        num
      });
    }
  },
  mutations: {
    [types.ADD_COUNT](state: State, {num}: Count): void {
      state.count = num + state.count;
    }
  }
};
