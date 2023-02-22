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
    <h1>属性</h1>
    <Doc type="attr" :content="attrContent" />
    <h1>事件</h1>
    <Doc type="event" :content="eventContent"/>
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

const attrContent = [
  [ 'type', '输入框类型', 'String', 'text/textarea/和其他原生input的type值', 'text' ],
  [ 'v-model', '值', 'Number/String', '-', '-' ],
  [ 'disabled', '是否禁用', 'Boolean', '-', 'false' ],
  [ 'placeholder', '提示信息', 'String', '-', '-' ],
  [ 'clearable', '是否可以清空', 'Boolean', '-', '-' ],
  [ 'show-password', '是否将type设置为password', 'Boolean', '-', '-' ],
  [ 'suffix-icon', '插入后缀图标', 'Component', '-', '-' ],
  [ 'prefix-icon', '插入前缀图标', 'Component', '-', '-' ],
  [ 'rows', '行高', 'Number', '-', '-' ],
]

const eventContent = [
  [ 'blur', '失去焦点', '-' ],
  [ 'focus', '获取焦点', '-' ],
  [ 'select', '选中内容', '-' ]
]
</script>