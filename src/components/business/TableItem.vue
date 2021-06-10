<template>
  <div class="table-item">
    <p class="table-item-content">
      {{ cardName }}
    </p>
    <p class="">
      {{ date }}
    </p>
    <p class="">
      {{ type }}
    </p>
    <p class="">
      {{ purpose }}
    </p>
    <p class="">
      {{ app }}
    </p>
    <p class="">
      {{ amount }}
    </p>
    <p class="">
      {{ balance }}
    </p>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs} from 'vue';

export default defineComponent({
  name: 'TableItem',

  props: {
    card: {
      type: String,
      default: '0000'
    },
    name: {
      type: String,
      default: 'bank',
      required: true
    },
    date: {
      type: String,
      default: '2021-06-21 11:18',
      required: true
    },
    type: {
      type: String,
      default: '收入',
      required: true
    },
    purpose: {
      type: String,
      default: 'body building',
      required: true
    },
    app: {
      type: String,
      default: 'keep',
      required: true
    },
    amount: {
      type: Number,
      default: 99,
      required: true
    },
    balance: {
      type: Number,
      default: 10000,
      required: true
    },
    order: {
      type: Number,
      default: 1,
      required: true
    }
  },

  setup(props: any) {
    const {card, name} = toRefs(props);
    return {
      cardName: `${name.value}${card.value}`
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
