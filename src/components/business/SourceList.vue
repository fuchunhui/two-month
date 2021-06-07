<template>
  <div class="source-list">
    <div
      v-for="(item, index) in source"
      :key="index"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SourceList',

  props: {
    source: {
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