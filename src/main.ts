import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
// import {store, key} from './store/store';
import store from './store';
import 'css/base.less';

createApp(App)
  .use(store)
  // .use(store, key)
  .use(router)
  .mount('#app');
