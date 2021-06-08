<template>
  <div class="source-list">
    <source-item
      v-for="(item, index) in sourceList"
      :key="index"
      :source="item"
      :index="index"
      @del="deleteItem"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue';
import SourceItem from './SourceItem.vue';

export default defineComponent({
  name: 'SourceList',

  components: {
    SourceItem
  },

  props: {
    sourceList: {
      type: Array,
      default: () => []
    }
  },

  setup(props: any) {
    const {sourceList} = toRefs(props); // eslint-disable-line
    const deleteItem = (index: number) => {
      console.log('list: ', index);
    };

    return {
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