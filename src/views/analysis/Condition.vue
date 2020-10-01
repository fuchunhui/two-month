<template>
  <div class="analysis-condition">
    <div class="condition-common condition-card">
      <card
        v-for="item in bankList"
        :key="item.value"
        :text="item.label"
        @click="change(item.value, 'currentCard')">
      </card>
    </div>
    <div class="condition-common condition-month">
      <card
        v-for="item in monthList"
        :key="item.value"
        :text="item.label"
        @click="change(item.value, 'currentMonth')">
      </card>
    </div>
    <div class="condition-common condition-year">
      <card
        v-for="item in yearList"
        :key="item.value"
        :text="item.label"
        @click="change(item.value, 'currentYear')">
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import Card from './Card.vue';
import {BANK, MONTH, YEAR} from '@/config/index';

export default {
  name: 'AnalysisCondition',

  components: {
    Card
  },

  setup() {
    // TODO 处理事件，选中逻辑，高亮 + 切换判断 + 禁用选择
    // 卡片必选一个
    // 月份可以多选，也可不选择，不选择，默认全年数据
    // 年必选一个
    // let currentCard: string = BANK.num1;
    const bankList = [BANK.num1, BANK.num2].map(item => {
      return {
        label: item,
        value: item,
        // checked: currentCard === item
        checked: false
      };
    });
    const date = new Date();
    const monthList = MONTH.map(item => {
      return {
        label: `${item}月`,
        value: item,
        checked: item === date.getMonth() + 1
      };
    });
    const yearList = YEAR.map(item => {
      return {
        label: item,
        value: item,
        checked: item === date.getFullYear()
      };
    });
    return {
      // currentCard,
      bankList,
      monthList,
      yearList
    };
  },
  methods: {
    change(value: string | number, key: string) {
      console.log(value, key);
      // currentCard = value;
    },
    reset() {
      console.log('params reset');
    }
  }
};
</script>

<style lang="less">
.analysis-condition {
  height: 56px;
  margin-bottom: 10px;
  background: #F7F9FB;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  .condition-common {
    display: flex;
    padding: 10px;
  }
  .condition-month {
    .card {
      width: 48px;
    }
    .card + .card {
      margin-left: 5px;
    }
  }
  .condition-card,
  .condition-month,
  .condition-year {
    border-right: 1px dashed #eeeeee;
  }
}
</style>
