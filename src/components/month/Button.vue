<template>
  <button>{{ label }}</button>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Button',

  setup() {
    let label = ref('ffff');
    return {
      label
    };
  }
});
</script>

<style lang="less">

</style>
