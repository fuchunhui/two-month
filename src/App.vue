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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  padding: 30px;
  font-size: 16px;
  background: rgba(17, 158, 183, 0.3);
  color: #2c3e50;
  text-align: center;
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
