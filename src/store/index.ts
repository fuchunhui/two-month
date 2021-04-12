import {createStore} from 'vuex';
import counter from './counter';
import date from './date';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    counter,
    date
  }
});
