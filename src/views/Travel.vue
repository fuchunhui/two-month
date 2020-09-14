<template>
  <div class="travel">
    <home/>
    <about/>
    <div class="count-group">
      <p @click="add">{{$store.state.counter.count}}</p>
      <p @click="asyncAdd">{{count}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import CounterModule from '@/store/counter';
import Home from '@/components/road/Home.vue';
import About from '@/components/road/About.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  },
  components: {
    Home,
    About
  }
})

export default class Travel extends Vue {
  msg!: string;
  get count() {
    return CounterModule.count;
  }

  add() {
    console.log('123');
    CounterModule.add();
  }

  asyncAdd() {
    CounterModule.asyncAdd();
  }
}
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
