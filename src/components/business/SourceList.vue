<template>
  <div class="source-list">
    <source-item
      v-for="(item, index) in sourceList"
      :key="index"
      :source="item"
      :index="index"
    />
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import SourceItem from './SourceItem';

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
  }
});
</script>

<style lang="less">
.source-list {
  background-color: lightskyblue;
}
</style>