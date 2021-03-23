// 这个名字，为什么是这个名字，不能换吗？我竟然问这种问题
// TODO

import {ComponentCustomProperties} from 'vue';
import {Store} from 'vuex';
// import { createLogger } from 'vuex';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

// import { useStore } from 'vuex'

// export default {
//   setup () {
//     const store = useStore()
//   }
// }