<template>
  <div class="analysis">
    <condition></condition>
    <container></container>
  </div>
</template>

<script lang="ts">
import Condition from './analysis/Condition.vue';
import Container from './analysis/Container.vue';

export default {
  name: 'Analysis',

  components: {
    Condition,
    Container
  }
};
</script>

<style lang="less">
.analysis {
  background: #446688;
  padding: 10px;
}
</style>
