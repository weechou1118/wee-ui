<template>
  <div class="doc-content">
    <h1>Message 消息</h1>
    <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
    <div class="preview-wrapper">
      <Preview :el="MessagePreview1" />
      <Preview :el="MessagePreview2" />
      <Preview :el="MessagePreview3" />
      <Preview :el="MessagePreview4" />
    </div>
    <h1>属性</h1>
    <Doc type="attr" :content="attrContent" />
    <h1>插槽</h1>
    <Doc type="slot" :content="slotContent"/>
  </div>
</template>

<script setup lang="ts">
import MessagePreview1 from './MessagePreview1.preview.vue'
import MessagePreview2 from './MessagePreview2.preview.vue'
import MessagePreview3 from './MessagePreview3.preview.vue'
import MessagePreview4 from './MessagePreview4.preview.vue'

const attrContent = [
  ['message', '消息内容', 'String/Object', '-', '-'],
  ['type', '消息类型', 'String', 'success/warning/error', '-'],
  ['duration', '显示的时间（ms）', 'Number', '-', '2000'],
  ['showClose', '是否可关闭', 'Boolean', '-', 'false'],
  ['isCenter', '是否居中', 'Boolean', '-', 'false']
]

const slotContent = [
  ['default', '弹窗内容']
]
</script>

<style scoped lang="scss"></style>
