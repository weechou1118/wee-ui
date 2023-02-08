<template>
  <div class="doc-content-container">
    <h1>Button 按钮</h1>
    <p>列举常用的操作按钮</p>
    <div class="demo-block">
      <wee-button>默认按钮</wee-button>
      <wee-button theme="primary">主要按钮</wee-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import WeeButton from '@/lib/button/index.vue'
</script>

<style scoped lang="scss">
h1 {
  font-weight: 400;
  font-size: 28px;
}
p {
  color: #5e6d82;
  font-size: 14px;
}
.demo-block {
  display: flex;
  border: 1px solid #ebebeb;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  :deep(.wee-button:not(:first-child)) {
    margin-left: 20px;
  }
}
</style>