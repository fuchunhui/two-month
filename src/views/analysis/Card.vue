<template>
  <div class="card">{{ `${text}----${title}` }}</div>
</template>

<script lang="ts">
import { reactive, toRefs, readonly } from 'vue';

export default {
  name: 'Card',

  props: {
    text: {
      type: [String, Number],
      required: false,
      default: 'card'
    }
  },

  setup() {
    const book = reactive({
      title: 'a new book',
      year: 2020,
      price: 'free'
    });

    console.log('reactive: ', book);
    const { price, title } = toRefs(book);
    title.value = '1';
    console.log(book.title, book);

    const original = reactive({
      count: 0
    });
    const copy = readonly(original);
    original.count ++;
    copy.count ++;
    return {
      price,
      title
    };
  }
};
</script>

<style lang="less">
.card {
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  user-select: none;
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
  &:hover {
    background-color: #f2f5ff;
    border-color: #4c84ff;
  }
  &:active {
    background-color: #4c84ff;
    border-color: #4c84ff;
    color: #ffffff;
  }
}
</style>