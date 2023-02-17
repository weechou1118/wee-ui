<script setup lang="ts">
import NavBar from './components/navBar.vue'
</script>

<template>
  <div class="app-container">
    <nav-bar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
.app-container {
  height: 100vh;
  overflow: hidden;
  .main-content {
    display: flex;
    height: calc(100% - 60px);
    width: 100%;
    position: absolute;
    top: 60px;
    overflow: overlay;
  }
}
</style>
