<template>
  <div class="acquisition">
    <div class="acquisition-record" v-if="showRecord">
      <textarea class="acquisition-area" placeholder="请输入你的数据"/>
    </div>
    <div class="acquisition-content" v-else>
      <div>左侧表格</div>
      <div>右侧列表</div>
    </div>
    <div class="acquisition-btn">
      <month-button label="录入" @click="record"/>
      <month-button label="分析" u="primary"/>
      <month-button label="入库" u="primary"/>
      <month-button label="清空" u="grey" @click="reset"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {MonthButton} from 'components/month';

export default defineComponent({
  name: 'Acquisition',

  components: {
    MonthButton
  },

  setup() {
    let showRecord = ref(true);
    const reset = () => {
      console.log('clear');
    };
    // const store = () => {
    //   console.log('store');
    // };
    const record = () => {
      console.log('record');
    };
    return {
      showRecord,
      record,
      reset
    };
  }
});
</script>

<style lang="less">
@import url('css/mixins.less');
.acquisition {
  display: flex;
  flex-direction: column;
  padding: 10px;
  &-record,
  &-content {
    flex: 1;
    min-height: 300px;
    background-color: cadetblue;
  }
  &-record {
    border-radius: 20px;
  }
  &-area {
    width: 100%;
    height: 100%;
    resize: none;
    position: relative;
    &::placeholder {
      .position-center();
    }
  }
  &-btn {
    .flex-center();
    height: 64px;
    .month-button {
      margin-right: 20px;
    }
    .month-button:last-child {
      margin-right: 0;
    }
  }
}
</style>
