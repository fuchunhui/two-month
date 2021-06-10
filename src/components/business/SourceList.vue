<template>
  <div class="source-list">
    <source-item
      v-for="(item, index) in sourceList"
      :key="index"
      :source="item"
      :order="index + 1"
      :error="errorList.includes(index)"
      @del="deleteItem"
      @update="updateItem"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import SourceItem from './SourceItem.vue';
import {SourceItemInfo} from 'types/business';

export default defineComponent({
  name: 'SourceList',

  components: {
    SourceItem
  },

  emits: {
    'del': null,
    'update': null
  },

  props: {
    sourceList: {
      type: Array,
      default: () => []
    },
    errorList: {
      type: Array,
      default: () => []
    }
  },

  setup(props: any, {emit}: any) {
    const deleteItem = (index: number) => {
      emit('del', index);
    };
    const updateItem = (payload: SourceItemInfo) => {
      emit('update', payload);
    };

    return {
      updateItem,
      deleteItem
    };
  }
});
</script>

<style lang="less">
.source-list {
  background-color: lightskyblue;
}
</style>