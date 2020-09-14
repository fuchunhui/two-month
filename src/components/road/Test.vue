<template>
  <div class="test-wrapper">
      test demo {{message}}
      <button @click="onClick">click</button>
  </div>
</template>

<script lang="ts">
import { Options, props, emits, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Test extends Vue {
    // @Prop()
    private message!: string

    // @emits('on-click')
    onClick(): void {
      console.log(123);
      this.checkConsole();
    }

    checkConsole() {
      console.log('checkConsole');
    }
}
</script>

<style lang="less">
.test-wrapper {
    background: #336699
}
</style>
