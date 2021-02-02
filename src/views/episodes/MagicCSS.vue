<template>
  <div class="magic-css">
    <div class="magic-wrap">
      <div class="magic-wrap-item first-item">
        <div class="hover-first-item" />
      </div>
      <div class="magic-wrap-item" />
      <div class="magic-wrap-item" />
      <div class="magic-wrap-item" />
      <div class="magic-wrap-item" />
      <div class="magic-wrap-item" />
      <div class="magic-wrap-item" />
      <div class="magic-wrap-item" />
      <div class="magic-wrap-item" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  
};
</script>

<style lang="less">
@borderColor: #03A9F3;
.magic-css {
  display: grid;
  grid-template-columns: 0.5fr minmax(10px, 4fr) 0.5fr;
}
.magic-wrap {
  grid-column: 2/3;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  &-item {
    position: relative;
    border: 1px solid #222;
    border-radius: 0.5rem;
    padding: 2rem;
  }
  .first-item {
    grid-column: 1/0;
  }
  .hover-first-item {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #03A9F3;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      transition: .3s ease-in-out;
    }
    &::before {
      top: -10px;
      left: -10px;
      border-top: 1px solid @borderColor;
      border-left: 1px solid @borderColor;
    }
    &::after {
      right: -10px;
      bottom: -10px;
      border-bottom: 1px solid @borderColor;
      border-right: 1px solid @borderColor;
    }
    
    &:hover::before,
    &:hover::after {
      width: calc(100% + 19px);
      height: calc(100% + 19px);
    }
  }
}
</style>
