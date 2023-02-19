<!-- 首页 -->
<template>
  <div class="intro-container">
    <div class="content">
      <img :src="Cat">
      <h1>wee-ui</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cat from '@/assets/img/cat.jpg'
</script>

<style scoped lang="scss">
.intro-container {
  transform: translateY(50%);
  .content {
    text-align: center;
    img {
      width: 200px;
      height: 200px;
    }
    h1 {
      text-align: center;
      letter-spacing: 5px;
      font-weight: 300;
    }
  }
}
</style>
