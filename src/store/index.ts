import {createStore} from 'vuex';
import counter from './counter';
import date from './date';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  mutations: {},
  actions: {},
  modules: {
    counter,
    date
  }
});
