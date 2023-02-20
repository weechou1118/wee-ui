<template>
  <div class="doc-content">
    <h1>Dialog 对话框</h1>
    <p>列举常用的对话框用法</p>
    <div class="preview-wrapper">
      <Preview :el="DialogPreview1"/>
      <Preview :el="DialogPreview2"/>
      <Preview :el="DialogPreview3"/>
    </div>
    <h1>属性</h1>
    <Doc type="attr" :content="attrContent" />
    <h1>插槽</h1>
    <Doc type="slot" :content="slotContent" />
    <h1>事件</h1>
    <Doc type="event" :content="eventContent" />
  </div>
</template>

<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import DialogPreview1 from './DialogPreview1.preview.vue'
import DialogPreview2 from './DialogPreview2.preview.vue'
import DialogPreview3 from './DialogPreview3.preview.vue'
import Doc from '@/components/Doc.vue'

const attrContent = [
  [ 'v-model', '绑定值，用于控制弹窗显隐', 'Boolean', '-', 'false' ],
  [ 'title', '弹窗标题', 'String', '-', '标题' ],
  [ 'content', '弹窗内容', 'String', '-', '内容' ],
  [ 'overlayClosable', '是否允许点击遮罩层关闭弹窗', 'Boolean', '-', 'false' ],
]

const slotContent = [
  [ '-', '弹窗的主体内容' ],
  [ 'header', '弹窗的标题内容' ],
  [ 'footer', '弹窗的底部内容' ]
]

const eventContent =  [
  [ 'cancel', '取消回调', '-'],
  [ 'confirm', '提交回调', '-'],
]
</script>