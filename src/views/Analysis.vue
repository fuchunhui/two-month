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

export default {
  name: 'Analysis',

  components: {
    Condition,
    Container
  },

  setup() {
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const card: string = BANK.num1;
    const info: object = {
      year,
      month,
      card
    };
    return {
      info
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
