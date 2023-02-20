<template>
  <div class="doc-content">
    <h1>Button 按钮</h1>
    <p>列举常用的操作按钮</p>
    <div class="preview-wrapper">
      <Preview :el="ButtonPreview1"></Preview>
      <Preview :el="ButtonPreview2"></Preview>
      <Preview :el="ButtonPreview3"></Preview>
      <Preview :el="ButtonPreview4"></Preview>
      <Preview :el="ButtonPreview5"></Preview>
    </div>
    <h1>属性</h1>
    <Doc :content="content" />
  </div>
</template>

<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import ButtonPreview1 from './ButtonPreview1.preview.vue'
import ButtonPreview2 from './ButtonPreview2.preview.vue'
import ButtonPreview3 from './ButtonPreview3.preview.vue'
import ButtonPreview4 from './ButtonPreview4.preview.vue'
import ButtonPreview5 from './ButtonPreview5.preview.vue'
import Doc from '@/components/Doc.vue'

const content = [
  ['theme', '按钮主题', 'String', 'common/primary/success/info/error', 'common'],
  ['size', '按钮大小', 'String', 'small/medium/large', 'medium'],
  ['loading', '是否加载', 'Boolean', '-', 'false'],
  ['circle', '是否圆形按钮', 'Boolean', '-', 'false'],
  ['round', '是否圆角按钮', 'Boolean', '-', 'false'],
  ['disabled', '是否禁用', 'Boolean', '-', 'false'],
]
</script>

<style scoped lang="scss">
.preview-wrapper {
  :deep(.wee-button:not(:last-child)) {
    margin-right: 20px;
  }
}
</style>