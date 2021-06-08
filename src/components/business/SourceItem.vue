<template>
  <div class="source-item">
    {{ source }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SourceItem',

  props: {
    source: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0
    }
  },

  setup() {
    
  }
});
</script>

<style lang="less">

</style>
