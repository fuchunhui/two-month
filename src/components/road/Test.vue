<template>
  <div class="test-wrapper">
    test demo {{ msg }}
    <button @click="onClick">
      click
    </button>
  </div>
</template>

<script lang="ts">
import {props, emits, mixins} from 'vue-class-component';

const Props = props({
  msg: {
    type: String,
    required: false,
    default: 'hhh'
  }
});

const Emits = emits({
  demo: value => {
    return typeof value === 'number';
  }
});

export default class Test extends mixins(Props, Emits) {
  onClick(): void {
    console.log('test demo click!');
    this.checkConsole();
  }

  checkConsole() {
    this.$emit('demo', 10);
  }
}
</script>

<style lang="less">
.test-wrapper {
    background: #336699
}
</style>
