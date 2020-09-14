<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Super Demo</router-link> |
      <router-link to="travel">travel</router-link> |
      <router-link to="acquisition">acquisition</router-link> |
      <router-link to="analysis">analysis</router-link> -->
      {{ count }}
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    // 定义一个不需要改变的数据
    const btnText = '点这个按钮上面的数字会变';
    // 定义一个 count 的响应式数据，并赋值为 0
    const count = ref(0);
    // 定义一个函数，修改 count 的值。
    const countAdd: Function = () => {
      count.value++;
      // console.log(props.message);
    };
    // 导出一些内容给上面的模板区域使用
    return {
      btnText,
      count,
      countAdd
    };
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
