<template>
  <input
    :class="[
      'month-input',
      {
        'disabled': disabled
      }
    ]"
    :value="modelValue"
    @input="changeValue"
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
  background-color: aqua;
}
</style>
