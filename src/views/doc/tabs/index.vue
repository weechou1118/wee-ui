<template>
<div class="doc-content">
  <h1>Tabs 标签页</h1>
  <p>分隔内容上有关联但属于不同类别的数据集合。</p>
  <div class="preview-wrapper">
    <Preview :el="TabPreview1"/>
    <Preview :el="TabPreview2"/>
  </div>
  <h1>属性</h1>
  <Doc type="attr" :content="attrContent" />
  <h1>插槽</h1>
  <Doc type="slot" :content="slotContent" />
</div>
</template>

<script setup lang="ts">
import TabPreview1 from './TabPreview1.preview.vue'
import TabPreview2 from './TabPreview2.preview.vue'

const attrContent = [
  ['v-model', '绑定值', 'String', '-', '-'],
  ['type', '标签页类型', 'String', 'card/line', 'line']
]

const slotContent = [
  ['default', '标签内容']
]
</script>

<style scoped lang="scss"></style>
