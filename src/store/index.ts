import {createStore} from 'vuex';
import date from './date';

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  mutations: {},
  actions: {},
  modules: {
    date
  }
});
