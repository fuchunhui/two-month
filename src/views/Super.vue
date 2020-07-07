<template>
  <div class="super-demo">
      a123
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import basic from '@/store/super/basic';
// import interfaces from '@/store/super/interfaces';
// import functions from '@/store/super/functions';
// import literal from '@/store/super/literal';
// import intersections from '@/store/super/intersections';
import classes from '@/store/super/classes';

@Component
export default class Super extends Vue {
  created () {
    // basic();
    // interfaces();
    // functions();
    // literal();
    // intersections();
    classes();
  }
}
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
