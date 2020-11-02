<template>
  <div class="analysis">
    <condition v-model:info="info"></condition>
    <container></container>
  </div>
</template>

<script lang="ts">
import Condition from './analysis/Condition.vue';
import Container from './analysis/Container.vue';
import {BANK} from '@/config/index';
import { reactive, toRefs, ref, Ref } from 'vue';

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
    const current = ref({
      year,
      month,
      card
    });
    const newTest = toRefs(reactive({current}));
    console.log('newTest: ', newTest);
    return {
      // info: newTest.test,
      info: current
    };
  }
};
</script>

<style lang="less">
.analysis {
  background: #446688;
  padding: 10px;
}
</style>
