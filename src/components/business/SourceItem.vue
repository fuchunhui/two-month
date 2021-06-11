<template>
  <div
    :class="['source-item', {
      'source-item-error': error
    }]"
  >
    <div class="source-item-order">
      {{ order + 1 }}
    </div>
    <div
      class="source-item-content"
      @click="edit"
    >
      <template v-if="!editable">
        {{ source }}
      </template>
      <month-input
        v-else
        :ref="`ref${order}`"
        :model-value="source"
        :title="source"
        @update:modelValue="updateItem"
        @blur="toggleEditable"
      />
    </div>
    <div
      class="source-item-btn"
      @click="deleteItem"
    >
      移除
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, ref} from 'vue';
import {MonthInput} from 'components/month';
import {SourceItemInfo} from 'types/business';

export default defineComponent({
  name: 'SourceItem',

  components: {
    MonthInput
  },

  props: {
    source: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 0
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  emits: ['del', 'update'],

  setup(props: any, {emit, refs}: any) {
    // const editable = ref(true); 
    const editable = ref(false);
    const {order} = toRefs(props);

    const toggleEditable = () => {
      // TODO 陷入困境了，一时忘记应该如何在vue3中操作refs，还是先回家吧。
      // 目前需要解决，点击的不是input框，也要让焦点失去
      // 或者，点击编辑后，自动让input获取焦点。
      console.log(refs[`ref${order.value}`]); 
      editable.value = false;
    };
    const updateItem = (value: string) => {
      update({
        value,
        order: order.value
      });
    };
    const edit = () => {
      editable.value = true;
    };
    const update = (payload: SourceItemInfo) => {
      toggleEditable();
      emit('update', payload);
    };
    const deleteItem = () => {
      emit('del', order.value);
    };
    const testValue = ref('');
    return {
      toggleEditable,
      edit,
      editable,
      updateItem,
      deleteItem,
      testValue
    };
  }
});
</script>

<style lang="less">
@import (reference) url('assets/css/variable.less');

.source-item {
  display: flex;
  height: @line-height + 1;
  line-height: @line-height;
  border-bottom: 1px solid @line-color;
  &-order {
    width: 42px;
    text-align: center;
  }
  &-content {
    flex: 1;
    padding-left: 8px;
    .month-input {
      text-indent: 0;
      // border: none;
      // &:focus {
      //   border-width: 1px;
      //   border-style: solid;
      // }
    }
  }
  &-btn {
    width: 42px;
    color: rgb(4, 136, 212);
    text-align: center;
    cursor: pointer;
  }
  &-error {
    border: 1px solid #FF6847;
    border-radius: 4px;
    box-shadow: 0 0 3px 1px rgba(240, 78, 42, 0.45);
    .source-item-btn {
      font-weight: 500;
    }
  }
}
</style>
