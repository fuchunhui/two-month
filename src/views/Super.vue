<template>
  <div class="super-demo">
      a123
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import basic from '@/store/super/basic';
// import Home from '@/components/road/Home.vue';

@Component
export default class Super extends Vue {
  created () {
    console.log('created');
    basic();
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
