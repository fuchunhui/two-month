<template>
  <div class="acquisition">
    <div class="acquisition-record" v-if="showRecord">
      <textarea>这里是录入内容框</textarea>
    </div>
    <!-- <div class="acquisition-content" v-else> -->
    <div class="acquisition-content">
      <div>左侧表格</div>
      <div>右侧列表</div>
    </div>
    <div class="acquisition-btn">
      <month-button label="录入"/>
      <month-button label="分析"/>
      <month-button label="入库"/>
      <month-button :label="emptyBtn"/>
      <button @click="handleLabel">
        测试按钮
      </button>
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
    let emptyBtn = ref('请看看');
    const handleLabel = () => {
      emptyBtn.value = '清空';
    };
    return {
      showRecord,
      emptyBtn,
      handleLabel
    };
  }
});
</script>

<style lang="less">
.acquisition {
  padding: 10px;
  &-btn {
    background-color: #FF0000;
  }
}
</style>
