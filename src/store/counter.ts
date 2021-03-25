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
      console.log('getters: ', count);
      return count * 2;
    }
  },
  actions: {
    async addCount(context: any, {num}: Count): Promise<void> { // eslint-disable-line
      let localNum = 100;
      await new Promise(resolve => {
        setTimeout(() => {
          localNum = localNum + num;
          console.log('settimeout: ', localNum, num);
        }, 2000);
        console.log(1);
        resolve(localNum + num);
      });
      console.log(2);
      context.commit(types.ADD_COUNT, {
        num: localNum + num
      });
    }
  },
  mutations: {
    [types.ADD_COUNT](state: State, {num}: Count): void {
      console.log('localNum: ', num);
      state.count = num * 2;
      console.log('state.count: ', state.count);
    }
  }
};
