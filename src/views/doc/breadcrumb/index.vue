<template>
  <div class="doc-content">
    <h1>Breadcrumb 面包屑</h1>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>
    <div class="preview-wrapper">
      <Preview :el="BreadcrumbPreview1"></Preview>
      <Preview :el="BreadcrumbPreview2"></Preview>
    </div>
    <h1>Breadcrumb 属性</h1>
    <Doc type="attr" :content="attrContent1" />
    <h1>Breadcrumb 插槽</h1>
    <Doc type="slot" :content="slotContent1" />
    <h1>BreadcrumbItem 属性</h1>
    <Doc type="attr" :content="attrContent2" />
    <h1>BreadcrumbItem 插槽</h1>
    <Doc type="slot" :content="slotContent2" />
  </div>
</template>

<script setup lang="ts">
import BreadcrumbPreview1 from './BreadcrumbPreview1.preview.vue'
import BreadcrumbPreview2 from './BreadcrumbPreview2.preview.vue'

const attrContent1 = [
  ['separator', '分隔符', 'String', '-', '/'],
  ['separatorIcon', '分隔符图标', 'Object', '-', '-'],
]

const slotContent1 = [
  ['default', '面包屑选项的内容（组）']
]

const attrContent2 = [
  ['to', '要跳转的路由', 'Object', '-', '-'],
  ['replace', '跳转的路由是否留下历史记录', 'Boolean', '-', 'false'],
]

const slotContent2 = [
  ['default', '面包屑选项的内容']
]
</script>

<style scoped lang="scss"></style>
