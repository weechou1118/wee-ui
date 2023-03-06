<template>
  <div class="doc-content">
    <h1>Backup 回到顶部</h1>
    <p>返回页面顶部的操作按钮</p>
    <div class="preview-wrapper">
      <Preview :el="BackupPreview1" />
      <Preview :el="BackupPreview2" />
    </div>
    <h1>属性</h1>
    <Doc type="attr" :content="attrContent" />
    <h1>插槽</h1>
    <Doc type="slot" :content="slotContent" />
  </div>
</template>

<script setup lang=ts>
import BackupPreview1 from './BackupPreview1.preview.vue'
import BackupPreview2 from './BackupPreview2.preview.vue'

const attrContent = [
  ['target', '触发滚动的对象', 'String', '-', '-'],
  ['visibility-height', '滚动高度达到此参数才会出现', 'Number', '-', 200],
  ['right', '控制其显示位置, 距离页面右边距', 'Number', '-', 40],
  ['bottom', '控制其显示位置, 距离页面底部距离', 'Number', '-', 40]
]

const slotContent = [
  ['default', '按钮内容']
]
</script>

<style scoped lang="scss"></style>
