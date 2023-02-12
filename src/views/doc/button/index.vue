<template>
  <div class="doc-content">
    <h1>Button 按钮</h1>
    <p>列举常用的操作按钮</p>
    <div class="preview-wrapper">
      <Preview :el="ButtonPreview1"></Preview>
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import ButtonPreview1 from './ButtonPreview1.preview.vue'
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
.doc-content {
  padding: 20px;
  .preview-wrapper {
    width: 80%;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    align-items: center;
    :deep(.wee-button:not(:first-child)) {
      margin-left: 20px;
    }
  }
}
</style>