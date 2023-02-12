<script setup lang="ts">
import NavBar from './components/navBar.vue'
</script>

<template>
  <div class="app-container">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/style.scss";
.app-container {
  height: 100vh;
  overflow: hidden;
}
</style>
