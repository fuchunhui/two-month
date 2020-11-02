<template>
  <div class="analysis-condition">
    <div class="condition-common condition-card">
      <card
        v-for="item in bankList"
        :key="item.value"
        :text="item.value"
        :active="item.value === info.card"
        @click="change(item.value, INFO_TYPE.CARD)">
      </card>
    </div>
    <div class="condition-common condition-month">
      <card
        v-for="item in monthList"
        :key="item.value"
        :text="item.label"
        :active="item.value === info.month"
        @click="change(item.value, INFO_TYPE.MONTH)">
      </card>
    </div>
    <div class="condition-common condition-year">
      <card
        v-for="item in yearList"
        :key="item.value"
        :text="item.label"
        :active="item.value === info.year"
        @click="change(item.value, INFO_TYPE.YEAR)">
      </card>
    </div>
    <!-- {{ currentCard }} - {{ current.card }} -->
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, toRefs} from 'vue';
import Card from './Card.vue';
import {BANK, MONTH, YEAR} from '@/config/index';

enum INFO_TYPE {
  YEAR = 'YEAR',
  MONTH = 'MONTH',
  CARD = 'CARD',
}
interface Info {
  [key: string]: string | number;
  [index: number]: string;
}

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

  setup(props, { emit }) {
    console.log('setup: ', {...props.info}, emit);
    // TODO 处理事件，选中逻辑，高亮 + 切换判断 + 禁用选择
    // 卡片必选一个
    // 月份可以多选，也可不选择，不选择，默认全年数据
    // 年必选一个
    const {info} = toRefs(props);
    // 思路A-2
    // const {info} = toRefs(props);
    // const {year, month, card} = toRefs(info.value);
    console.log(info.value);
    // console.log('init info: ', info);
    // const currentCard = ref(info.value);

    // 思路B
    // const current = ref(info.value);
    // console.log('current', current);
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
      console.log('change: ', key, value, info.value);
      const iinfo: Info = {
        year: info.value.year,
        month: info.value.month,
        card: info.value.card
      };
      if (key === INFO_TYPE.CARD) {
        iinfo[key.toLowerCase()] = value;
      } else {
        iinfo[key.toLowerCase()] = Number(value);
      }
      console.log('change---------: ', info, key.toLowerCase(), value);
      emit('update:info', info);
    }
    return {
      // currentCard,
      // current,
      change,
      bankList,
      monthList,
      yearList,
      INFO_TYPE
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
