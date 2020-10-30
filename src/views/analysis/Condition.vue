<template>
  <div class="analysis-condition">
    <div class="condition-common condition-card">
      <card
        v-for="item in bankList"
        :key="item.value"
        :text="item.value"
        :active="item.value === currentCard"
        @click="change(item.value, 'currentCard')">
      </card>
    </div>
    <div class="condition-common condition-month">
      <card
        v-for="item in monthList"
        :key="item.value"
        :text="item.label"
        :active="item.checked"
        @click="change(item.value, 'currentMonth')">
      </card>
    </div>
    <div class="condition-common condition-year">
      <card
        v-for="item in yearList"
        :key="item.value"
        :text="item.label"
        :active="item.checked"
        @click="change(item.value, 'currentYear')">
      </card>
    </div>
    {{ currentCard }} - {{ current.card }}
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from 'vue';
import Card from './Card.vue';
import {BANK, MONTH, YEAR} from '@/config/index';

export default defineComponent({
  name: 'AnalysisCondition',

  components: {
    Card
  },

  props: {
    info: {
      type: Object,
      required: true,
      default: () => {
        return {
          year: 2020,
          month: 1,
          card: '0797'
        };
      }
    }
  },

  setup(props, context) {
    console.log('setup: ', {...props.info}, context);
    // TODO 处理事件，选中逻辑，高亮 + 切换判断 + 禁用选择
    // 卡片必选一个
    // 月份可以多选，也可不选择，不选择，默认全年数据
    // 年必选一个
    // const {year, month, card} = toRefs(props.info);
    // 思路A-2
    const {info} = toRefs(props);
    console.log('init info: ', info);
    const currentCard = ref(info.value.card);

    // 思路B
    const current = ref(info.value);
    console.log('current', current);
    // const {year, month, card} = props.info;

    // 此种当然没问题呀 思路A-1
    // const {year, month, card} = props.info; // eslint-disable-line
    // const currentCard = ref(card);
    // console.log('currentCard: ', card, currentCard);

    const bankList = [BANK.num1, BANK.num2].map(item => {
      return {
        label: item,
        value: item
      };
    });
    const monthList = MONTH.map(item => {
      return {
        label: `${item}月`,
        value: item
      };
    });
    const yearList = YEAR.map(item => {
      return {
        label: item,
        value: item
      };
    });

    function change(value: string | number, key: string) {
      console.log(value, key);
      if (key === 'currentCard') {
        // 思路A
        // currentCard.value = value as string;
        // console.log('change: ', currentCard.value);

        // 思路B
        current.value.card = value;
        console.log('change: ', current.value);
      }
    }
    return {
      currentCard,
      current,
      change,
      bankList,
      monthList,
      yearList
    };
  },
  methods: {
    // change(value: string | number, key: string) {
    //   console.log(value, key);
    //   if (key === 'currentCard') {
    //     this.currentCard = value;
    //   }
    // },
    reset() {
      console.log('params reset');
    }
  }
});
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
