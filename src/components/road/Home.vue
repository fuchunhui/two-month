<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <test ref="test" message="123456"/>
    <counter />
    <!-- <official message="123456"/> -->
    <!-- <ReturnValue message="123456"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/road/HelloWorld.vue';
import Test from '@/components/road/Test';
import Counter from '@/components/road/Counter';
// import Official from '@/components/Official';
// import ReturnValue from '@/components/ReturnValue.ts';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Test,
    Counter
    // Official,
    // ReturnValue
  },
  mounted () {
    console.log('test: ', this.$refs.test);
    console.log('test: ', this.$refs.test.$mesg);
  }
};
</script>
