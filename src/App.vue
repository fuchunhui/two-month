<template>
  <div class="nav">
    <router-link to="acquisition">
      acquisition
    </router-link> |
    <router-link to="analysis">
      analysis
    </router-link> |
    <router-link to="travel">
      travel
    </router-link> |
    <router-link to="/">
      Super Demo
    </router-link> |
    <router-link to="magic">
      Magic CSS
    </router-link>
  </div>
  <router-view class="content" />
</template>

<script lang="ts">
import Database from './db/index';

export default {
  created() {
    Database.initial();
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.content {
  flex: 1;
}
</style>
