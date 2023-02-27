<template>
  <div class="doc-content">
    <h1>Divider 分割线</h1>
    <p>区隔内容的分割线。</p>
    <div class="preview-wrapper">
      <Preview :el="DividerPreview1" />
      <Preview :el="DividerPreview2" />
      <Preview :el="DividerPreview3" />
    </div>
    <h1>属性</h1>
    <Doc type="attr" :content="attrContent"/>
    <h1>插槽</h1>
    <Doc type="slot" :content="slotContent"/>
  </div>
</template>

<script setup lang="ts">
import DividerPreview1 from './DividerPreview1.preview.vue'
import DividerPreview2 from './DividerPreview2.preview.vue'
import DividerPreview3 from './DividerPreview3.preview.vue'
const attrContent = [
  ['direction', '分割线位置', 'String', 'horizontal/vertical', 'horizontal'],
  ['content-position', '内容插槽的展示位置(仅支持水平分割线)', 'String', 'left/right/\'\'', '-'],
]

const slotContent = [
  ['default', '水平线中的内容(仅支持水平分割线)']
]

</script>

<style scoped></style>
