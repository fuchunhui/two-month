'<template>
  <div class="super-demo">
    TypeScript {{ count }}
  </div>
</template>

<script lang="ts">
// import basic from '@/store/super/basic';
// import interfaces from '@/store/super/interfaces';
// import functions from '@/store/super/functions';
// import literal from '@/store/super/literal';
// import intersections from '@/store/super/intersections';
// import classes from '@/store/super/classes';
// import enums from '@/store/super/enums';
// import generics from '@/store/super/generics';
// import decorator from '@/store/super/decorator';
// import utility from '@/store/super/utility';
// import modules from '@/store/super/modules';
// import advance from '@/store/super/advance';
// import cus from '@/store/super/cus';

// export default {
//   created() {
//     // basic();
//     // interfaces();
//     // functions();
//     // literal();
//     // intersections();
//     // classes();
//     // enums();
//     // generics();
//     // decorator();
//     // utility();
//     // modules();
//     // advance();
//     cus();
//   }
// };
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
.super-demo {
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
