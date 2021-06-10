<template>
  <div class="source-item">
    <div class="source-item-order">
      {{ order }}
    </div>
    <div
      class="source-item-content"
      @click="updateItem(source)"
    >
      {{ source }}
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
import {defineComponent, toRefs} from 'vue';
import {SourceItemInfo} from 'types/business';

export default defineComponent({
  name: 'SourceItem',

  props: {
    source: {
      type: String,
      default: ''
    },
    order: {
      type: Number,
      default: 0
    }
  },
  emits: ['del', 'update'],

  setup(props: any, {emit}: any) {
    const {order} = toRefs(props);
    const updateItem = (value: string) => {
      update({
        value,
        order: order.value
      });
    };
    const update = (payload: SourceItemInfo) => {
      emit('update', payload);
    };
    const deleteItem = () => {
      emit('del', order.value);
    };

    return {
      updateItem,
      deleteItem
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
  }
  &-btn {
    width: 42px;
    color: rgb(4, 136, 212);
    text-align: center;
    cursor: pointer;
  }
}
</style>
