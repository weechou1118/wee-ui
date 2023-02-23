<template>
  <div class="doc-content">
    <h1>Select 选择器</h1>
    <p>当选项过多时，使用下拉菜单展示并选择内容</p>
    <div class="preview-wrapper">
      <Preview :el="SelectPreview1"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SelectPreview1 from './SelectPreview1.preview.vue'
</script>