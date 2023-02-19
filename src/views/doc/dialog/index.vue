<template>
  <div class="doc-content">
    <h1>Dialog 对话框</h1>
    <p>列举常用的对话框用法</p>
    <div class="preview-wrapper">
      <Preview :el="DialogPreview1"/>
      <Preview :el="DialogPreview2"/>
      <Preview :el="DialogPreview3"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import DialogPreview1 from './DialogPreview1.preview.vue'
import DialogPreview2 from './DialogPreview2.preview.vue'
import DialogPreview3 from './DialogPreview3.preview.vue'
</script>