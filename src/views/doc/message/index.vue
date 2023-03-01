<template>
  <div class="doc-content">
    <h1>Message 消息</h1>
    <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
    <div class="preview-wrapper">
      <Preview :el="MessagePreview1" />
      <Preview :el="MessagePreview2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MessagePreview1 from './MessagePreview1.preview.vue'
import MessagePreview2 from './MessagePreview2.preview.vue'
</script>

<style scoped lang="scss"></style>
