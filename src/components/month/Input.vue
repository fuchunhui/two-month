<template>
  <input
    :class="[
      'month-input',
      {
        'disabled': disabled
      }
    ]"
    :title="title"
    :value="modelValue"
    @change="changeValue"
  >
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Input',

  props: {
    modelValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue'],

  setup(props: any, {emit}: any) {
    const changeValue = (event: InputEvent) => {
      emit('update:modelValue', (event.target as HTMLInputElement).value);
    };
    return {
      changeValue
    };
  }
});
</script>

<style lang="less">
.month-input {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid transparent;
  text-indent: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
