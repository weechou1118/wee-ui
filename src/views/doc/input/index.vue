<template>
  <div class="doc-content">
    <h1>Input 输入框</h1>
    <p>输入框的基础用法</p>
    <div class="preview-wrapper">
      <Preview :el="InputPreview1" />
      <Preview :el="InputPreview2" />
      <Preview :el="InputPreview3" />
      <Preview :el="InputPreview4" />
      <Preview :el="InputPreview5" />
      <Preview :el="InputPreview7" />
      <Preview :el="InputPreview6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputPreview1 from './InputPreview1.preview.vue'
import InputPreview2 from './InputPreview2.preview.vue'
import InputPreview3 from './InputPreview3.preview.vue'
import InputPreview4 from './InputPreview4.preview.vue'
import InputPreview5 from './InputPreview5.preview.vue'
import InputPreview6 from './InputPreview6.preview.vue'
import InputPreview7 from './InputPreview7.preview.vue'
</script>