<template>
  <div class="doc-content">
    <h1>Switch 开关</h1>
    <p>表示两种相互对立的状态间的切换，多用于触发「开/关」</p>
    <div class="preview-wrapper">
      <Preview :el="SwitchPreview1"/>
      <Preview :el="SwitchPreview2"/>
      <Preview :el="SwitchPreview3"/>
    </div>
    <h1>属性</h1>
    <Doc type="attr" :content="attrContent"/>
  </div>
</template>

<script setup lang="ts">
import SwitchPreview1 from './SwitchPreview1.preview.vue'
import SwitchPreview2 from './SwitchPreview2.preview.vue'
import SwitchPreview3 from './SwitchPreview3.preview.vue'

const attrContent = [
  [ 'v-model', '开关的值', 'Boolean', '-', '-' ],
  [ 'disabled', '是否可以切换开关', 'Boolean', '-', 'false' ],
  [ 'activeColor', '开启状态背景色', 'String', '-', '-' ],
  [ 'inactiveColor', '关闭状态背景色', 'String', '-', '-' ],
  [ 'size', '开关尺寸', 'String', '-', '-' ],
]
</script>