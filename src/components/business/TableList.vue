<template>
  <div class="source-list">
    <table-item
      v-for="(item, index) in sourceList"
      :key="index"
      :source="item"
      :order="index"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue';
import TableItem from './TableItem.vue';

export default defineComponent({
  name: 'TableList',

  components: {
    TableItem
  },

  props: {
    sourceList: {
      type: Array,
      default: () => []
    }
  },

  setup(props: any) {
    const {sourceList}  = toRefs(props);
    // parse data
    return {
      tableList: sourceList
    };
  }
});
</script>

<style lang="less">

</style>