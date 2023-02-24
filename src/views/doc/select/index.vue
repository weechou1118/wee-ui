<template>
  <div class="doc-content">
    <h1>Select 选择器</h1>
    <p>当选项过多时，使用下拉菜单展示并选择内容</p>
    <div class="preview-wrapper">
      <Preview :el="SelectPreview1"/>
      <Preview :el="SelectPreview2"/>
      <Preview :el="SelectPreview3"/>
      <Preview :el="SelectPreview5"/>
      <Preview :el="SelectPreview4"/>
    </div>
    <Doc type="attr" :content="attrContent"/>
  </div>
</template>

<script setup lang="ts">
import SelectPreview1 from './SelectPreview1.preview.vue'
import SelectPreview2 from './SelectPreview2.preview.vue'
import SelectPreview3 from './SelectPreview3.preview.vue'
import SelectPreview4 from './SelectPreview4.preview.vue'
import SelectPreview5 from './SelectPreview5.preview.vue'

const attrContent = [
  [ '' ]
]
</script>