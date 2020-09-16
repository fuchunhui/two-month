<template>
  <div class="travel">
    <home />
    <about />
    <div class="count-group" @click="this.add">
      {{ `${this.text}: ${this.count}` }}
    </div>
  </div>
</template>

<script lang="ts">
import Home from '@/components/road/Home.vue';
import About from '@/components/road/About.vue';
import { ref } from 'vue';

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
  setup(props) {
    const text = '点我，来吧';
    const count = ref(0);
    const add: Function = () => {
      count.value++;
      console.log('message: ', props.msg);
    };
    return {
      text,
      count,
      add
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
