<template>
  <div class="travel">
    <home />
    <about />
    <div class="count-group" @click="add">
      {{ `${text}: ${count}` }}
    </div>
    <div class="store-group" @click="storeAdd">
      {{ storeCount }}
    </div>
  </div>
</template>

<script lang="ts">
import Home from '@/components/road/Home.vue';
import About from '@/components/road/About.vue';
import {ref} from 'vue';
import {useStore} from 'vuex';

export default {
  props: {
    msg: {
      type: String,
      required: false,
      default: 'hh'
    }
  },
  components: {
    Home,
    About
  },
  setup(props: any) { // eslint-disable-line
    const text = '点我，来吧';
    const count = ref(0);
    const store = useStore();
    const storeCount = ref(store.getters.getCount); // 竟然不是响应式，Store的使用，需要跟进。
    console.log('vuex: ', store, store.getters.getCount);
    const add: () => void = () => {
      count.value++;
      console.log('message: ', props.msg);
    };
    const storeAdd = () => {
      store.dispatch('addCount', {num: 100});
    };
    return {
      text,
      count,
      add,
      storeCount,
      storeAdd
    };
  }
};
</script>

<style lang="less">
.travel {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .count-group {
    p {
      background: #339966;
      cursor: pointer;
    }
  }
}
</style>
