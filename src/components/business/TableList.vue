<template>
  <div class="source-list">
    <table-item
      v-for="(item, index) in sourceList"
      :key="index"
      v-bind="item"
      :order="index + 1"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
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
  }
});
</script>
