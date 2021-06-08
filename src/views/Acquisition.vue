<template>
  <div class="acquisition">
    <div class="acquisition-record" v-if="showRecord">
      <textarea
        class="acquisition-area"
        placeholder="请输入你的数据"
        v-model="localSource"
      />
    </div>
    <div class="acquisition-content" v-else>
      <source-list
        class="acquisition-left"
        :source-list="sourceList"
      />
      <div class="acquisition-right">
        右侧列表
      </div>
    </div>
    <div class="acquisition-btn">
      <month-button label="录入" @click="record"/>
      <month-button label="分析" u="primary" :disabled="!parseEnabled" @click="parse"/>
      <month-button label="入库" u="primary" :disabled="!storeEnabled" @click="store"/>
      <month-button label="清空" u="grey" @click="reset"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import {MonthButton} from 'components/month';
import {SourceList} from 'components/business';

export default defineComponent({
  name: 'Acquisition',

  components: {
    MonthButton,
    SourceList
  },

  setup() {
    let showRecord = ref(true);
    let localSource = ref('');
    let sourceList = ref({});

    let parseEnabled = computed(() => {
      return !showRecord.value;
    });
    const noError = ref(true);
    let storeEnabled = computed(() => {
      return parseEnabled.value && noError.value;
    });

    const record = () => {
      if (localSource.value === '') {
        return;
      }
      showRecord.value = !showRecord.value;
      sourceList.value = localSource.value.split('\n');
    };
    const parse = () => {
      if (!parseEnabled.value) {
        return;
      }
      console.log('parse localdata data.');
    };
    const store = () => {
      if (!storeEnabled.value) {
        return;
      }
      console.log('store to database.');
    };
    const reset = () => {
      localSource.value = '';
      showRecord.value = true;
    };
    return {
      showRecord,
      localSource,
      parseEnabled,
      storeEnabled,
      sourceList,
      record,
      store,
      parse,
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
  &-content {
    display: flex;
  }
  &-left,
  &-right {
    width: 100%;
    height: 100%;
  }
  .source-list {
    opacity: 1; // TODO delete
  }
  &-right {
    width: 100%;
    height: 100%;
    background-color: blanchedalmond;
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
