<template>
  <button class="month-button">
    {{ localLabel }}
  </button>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue';

export default defineComponent({
  name: 'Button',

  props: {
    label: {
      type: String,
      default: '提交'
    }
  },

  setup(props) {
    const {label} = toRefs(props);
    return {
      localLabel: label
    };
  }
});
</script>

<style lang="less">
.month-button {
  min-width: 98px;
  height: 32px;
}
</style>
