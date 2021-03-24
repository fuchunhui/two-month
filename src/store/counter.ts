import * as types from './mutation-types';

interface State {
  count: number
}

type Count = {
  num: number;
};

export default {
  state: {
    count: 10
  },
  getters: {
    getCount: ({count}: State): number => {
      return count * 2;
    }
  },
  actions: {
    async addCount(context: any, {num}: Count): Promise<void> { // eslint-disable-line
      let localNum = 100;
      await new Promise(() => {
        setTimeout(() => {
          localNum = localNum + num;
          console.log('settimeout: ', localNum);
        }, 2000);
        Promise.resolve(localNum);
      });
      context.commit(types.ADD_COUNT, {
        num: localNum
      });
    }
  },
  mutations: {
    [types.ADD_COUNT](state: State, {num}: Count): void {
      console.log('localNum: ', num);
      state.count = num * 2;
    }
  }
};
