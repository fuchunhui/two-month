<template>
  <div class="super-demo">
    TypeScript {{ time }}
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
import generics from '@/store/super/generics';
// import decorator from '@/store/super/decorator';
// import utility from '@/store/super/utility';
// import modules from '@/store/super/modules';
// import advance from '@/store/super/advance';
// import cus from '@/store/super/cus';

export default {
  created() {
    // basic();
    // interfaces();
    // functions();
    // literal();
    // intersections();
    // classes();
    // enums();
    generics();
    // decorator();
    // utility();
    // modules();
    // advance();
    // cus();
  },
  setup() {
    const date = new Date();
    return {
      time: date.toString()
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
