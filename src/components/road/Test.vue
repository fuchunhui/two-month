// import Vue from 'vue'
// import Component from 'vue-class-component'

// @Component({
//     template: '<div>test demo{{message}}<button @click="onClick">click</button></div>'
// })

// export default class Test extends Vue {
//     message: string = 'hello!'

//     onClick(): void {
//         console.log('click!!!');
//     }
// }

<template>
    <div class="test-wrapper">
        test demo {{message}}
        <button @click="onClick">click</button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
    @Prop() private message!: string

    @Emit('on-click')
    onClick (): void {
      console.log(123);
    }
}
</script>

<style lang="less">
.test-wrapper {
    background: #336699
}
</style>
