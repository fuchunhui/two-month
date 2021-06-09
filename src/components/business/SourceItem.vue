<template>
  <div class="source-item">
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
    index: {
      type: Number,
      default: 0
    }
  },
  emits: ['del', 'update'],

  setup(props: any, {emit}: any) {
    const {index} = toRefs(props);
    const updateItem = (value: string) => {
      update({
        value,
        index: index.value
      });
    };
    const update = (payload: SourceItemInfo) => {
      emit('update', payload);
    };
    const deleteItem = () => {
      emit('del', index.value);
    };

    return {
      updateItem,
      deleteItem
    };
  }
});
</script>

<style lang="less">
.source-item {
  display: flex;
  height: 37px;
  line-height: 36px;
  border-bottom: 1px solid red;
  &-content {
    flex: 1;
    background-color: darkkhaki;
  }
  &-btn {
    width: 30px;
    background-color: wheat;
    cursor: pointer;
  }
}
</style>