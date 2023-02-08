<script setup lang="ts">
import { version } from '../../package.json'
</script>

<!-- 顶部导航栏 -->
<template>
  <div id="navBar">
    <router-link to="/">
      <img id="logo" src="@/assets/img/cat.jpg" alt="">
    </router-link>
    <div class="right">
      <router-link to="/">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="https://github.com/weech0u/wee-ui" target="__blank">Github</a>
      <span>{{ version }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
#navBar {
  display: flex;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ececec;
  #logo {
    width: 60px;
    height: 60px;
  }
  .right {
    span, a {
      display: inline-block;
      width: 80px;
      height: 60px;
      text-align: center;
    }
    a {
      color: #000;
      text-decoration: none;
      &.router-link-active {
        color: cornflowerblue;
        border-bottom: 2px solid cornflowerblue;
      }
    }
  }
}
</style>