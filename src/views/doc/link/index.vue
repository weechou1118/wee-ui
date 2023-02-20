<template>
  <div class="doc-content">
    <h1>Lint 文字链接</h1>
    <p>列举常用的文字链接用法</p>
    <div class="preview-wrapper">
      <Preview :el="linkPreview1"/>
      <Preview :el="linkPreview2"/>
      <Preview :el="linkPreview3"/>
      <Preview :el="linkPreview4"/>
    </div>
    <h1>属性</h1>
    <Doc type="attr" :content="attrContent"></Doc>
    <h1>插槽</h1>
    <Doc type="slot" :content="slotContent"></Doc>
  </div>
</template>

<script setup lang="ts">
import linkPreview1 from './LinkPreview1.preview.vue'
import linkPreview2 from './LinkPreview2.preview.vue'
import linkPreview3 from './LinkPreview3.preview.vue'
import linkPreview4 from './LinkPreview4.preview.vue'

const attrContent = [
  [ 'target', '在何处显示链接的资源', 'String', '_self/_blank/_parent/_top', '_self' ],
  [ 'href', '跳转链接', 'String', '-', '-' ],
  [ 'theme', '主题', 'String', 'primary/success/info/warn/error', '_self' ],
  [ 'underline', '鼠标移上去是否显示下划线', 'Boolean', '-', 'true' ],
  [ 'icon', '图标', 'String / Component', '-', '-' ],
  [ 'toRight', '图标位置', 'Boolean', '-', 'false' ]
]

const slotContent = [
  [ 'default', '链接文字内容' ]
]
</script>