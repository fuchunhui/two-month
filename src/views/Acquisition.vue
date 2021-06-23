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
        :error-list="errorList"
        @del="deleteItem"
        @update="updateItem"
      />
      <table-list
        class="acquisition-right"
        :source-list="tableList"
      />
    </div>
    <div class="acquisition-btn">
      <month-button :label="recordLabel" @click="record"/>
      <month-button label="分析" u="primary" :disabled="!parseEnabled" @click="parse"/>
      <month-button label="入库" u="primary" :disabled="!storeEnabled" @click="store"/>
      <month-button label="清空" u="grey" @click="reset"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import {MonthButton} from 'components/month';
import {SourceList, TableList} from 'components/business';
import {SourceItemInfo, BankRecord, SourceInfo} from 'types/business';
import Parser from 'utils/parser';
import UUID from 'utils/uuid';

interface SourceInfoList {
  value: SourceInfo[]
}

interface TableListInfo {
  value: BankRecord[]
}
interface ErrorList {
  value: string[]
}

export default defineComponent({
  name: 'Acquisition',

  components: {
    MonthButton,
    SourceList,
    TableList
  },

  setup() {
    const showRecord = ref(true);
    const localSource = ref('');
    const sourceList: SourceInfoList = ref([]);
    const tableList: TableListInfo = ref([]);
    const errorList: ErrorList = ref([]);

    const recordLabel = computed(() => {
      return showRecord.value ? '录入' : '继续录入';
    });
    const parseEnabled = computed(() => {
      return !showRecord.value;
    });
    const noError = computed(() => {
      return !errorList.value.length;
    });
    const storeEnabled = computed(() => {
      return parseEnabled.value && noError.value;
    });

    const record = () => {
      if (showRecord.value) {
        if (localSource.value === '') {
          return;
        }
        const list = localSource.value.trim().split('\n').filter(item => item !== '');
        const idList: SourceInfo[] = list.map(item => {
          return {
            id: UUID('month-'),
            value: item
          };
        });
        sourceList.value = sourceList.value.concat(idList);
        localSource.value = '';
      }
      showRecord.value = !showRecord.value;
    };
    const parse = () => {
      if (!parseEnabled.value) {
        return;
      }
      errorList.value = [];
      const data = Parser.parserArr(sourceList.value);
      data.forEach(({id, message}) => {
        if (message) {
          errorList.value.push(id);
        }
      });

      if (!errorList.value.length) {
        tableList.value = data as BankRecord[];
      }
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
      sourceList.value = [];
      tableList.value = [];
      errorList.value = [];
    };
    const deleteItem = (index: number) => {
      const delList = sourceList.value.splice(index, 1);
      if (noError.value) {
        tableList.value.splice(index, 1);
      } else if (errorList.value.includes(delList[0].id)) {
        const errIndex = errorList.value.findIndex(item => item === delList[0].id);
        errorList.value.splice(errIndex, 1);
      }
    };

    const updateItem = ({value, order}: SourceItemInfo) => {
      sourceList.value[order].value = value;
    };

    return {
      showRecord,
      recordLabel,
      localSource,
      parseEnabled,
      storeEnabled,
      sourceList,
      errorList,
      tableList,
      record,
      store,
      parse,
      reset,
      deleteItem,
      updateItem
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
    min-height: 120px;
    background-color: rgb(239, 245, 231);
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
    height: 100%;
    overflow: scroll;
  }
  &-left,
  &-right {
    width: 50%;
    height: 100%;
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
