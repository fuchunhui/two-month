<template>
  <div class="analysis">
    <condition v-model:info="info" @aa="click" v-model:dept="dept"></condition>
    <container></container>
  </div>
</template>

<script lang="ts">
import Condition from './analysis/Condition.vue';
import Container from './analysis/Container.vue';
import {BANK} from '@/config/index';
import { reactive, toRef, toRefs, ref, Ref } from 'vue';

export default {
  name: 'Analysis',

  components: {
    Condition,
    Container
  },

  data() {
    return {
      info1: {
        year: 2020,
        month: 9,
        card: '0797'
      }
    };
  },

  setup() {
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const card: string = BANK.num1;
    const test: object = {
      year,
      month,
      card
    };
    const dept: Ref<string> = ref('企业智能平台部');
    console.log('iiii: ', reactive(test));
    console.log('dept: ', dept);
    const newTest = toRefs({
      test
    });
    console.log('newTest: ', newTest);
    const reactiveTest = reactive({
      test
    });
    console.log('reactiveTest: ', reactiveTest);
    return {
      info: newTest.test,
      dept
    };
  },

  methods: {
    click(value: string) {
      console.log(value, '------aaa-------');
    },
    test(value: object) {
      console.log(value, '-------test------');
    }
  }
};
</script>

<style lang="less">
.analysis {
  background: #446688;
  padding: 10px;
}
</style>
