import {Module, VuexModule, Mutation, Action, getModule} from 'vuex-module-decorators';
import store from './index';

@Module({
  dynamic: true,
  store,
  name: 'counter',
  namespaced: true
}) class CounterModule extends VuexModule {
  count = 1;

  get doubleCount() {
    return this.count * 2;
  }

  @Mutation
  add() {
    this.count++;
  }

  @Action
  asyncAdd() {
    setTimeout(() => {
      this.add();
    }, 100);
  }
}

export default getModule(CounterModule);
