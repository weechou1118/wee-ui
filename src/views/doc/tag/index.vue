<template>
  <div class="doc-content">
    <h1>Tag 标签</h1>
    <p>列举常用的标签用法</p>
    <div class="preview-wrapper">
      <Preview :el="tagPreview1"/>
      <Preview :el="tagPreview2"/>
      <Preview :el="tagPreview3"/>
    </div>
    <h1>属性</h1>
    <Doc type="attr" :content="attrContent"/>
    <h1>插槽</h1>
    <Doc type="slot" :content="slotContent"></Doc>
  </div>
</template>

<script setup lang="ts">
import tagPreview1 from './TagPreview1.preview.vue'
import tagPreview2 from './TagPreview2.preview.vue'
import tagPreview3 from './TagPreview3.preview.vue'

const attrContent = [
  [ 'type', '标签主题', 'String', 'primary/success/info/warn/error', 'primary' ],
  [ 'closable', '标签是否可关闭', 'Boolean', '-', '-' ]
]

const slotContent = [
  [ 'default', '按钮内容']
]
</script>