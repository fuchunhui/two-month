<template>
  <div class="table-item">
    <div class="table-item-content">
      {{ source }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TableItem',

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

  setup() {
    return {
      value: ''
    };
  }
});
</script>

<style lang="less">
.table-item {
  display: flex;
  height: 37px;
  line-height: 36px;
  border-bottom: 1px solid red;
  &-content {
    flex: 1;
    background-color: violet;
  }
}
</style>
