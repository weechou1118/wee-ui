<template>
  <div class="doc-content">
    <h1>Radio 单选框</h1>
    <p>在一组备选项中进行单选</p>
    <div class="preview-wrapper">
      <Preview :el="RadioPreview1" />
      <Preview :el="RadioPreview2" />
      <Preview :el="RadioPreview3" />
      <Preview :el="RadioPreview4" />
      <Preview :el="RadioPreview5" />
    </div>
    <h1>Radio 属性</h1>
    <Doc type="attr" :content="RadioAttrContent" />
    <h1>Radio 插槽</h1>
    <Doc type="slot" :content="RadioSlotContent" />
    <h1>Radio 事件 </h1>
    <Doc type="event" :content="RadioEventContent" />
    <h1>RadioGroup 属性</h1>
    <Doc type="attr" :content="RadioGroupAttrContent" />
    <h1>RadioGroup 插槽</h1>
    <Doc type="slot" :content="RadioGroupSlotContent" />
    <h1>RadioGroup 事件</h1>
    <Doc type="event" :content="RadioEventContent" />
  </div>
</template>

<script setup lang="ts">
import RadioPreview1 from './RadioPreview1.preview.vue'
import RadioPreview2 from './RadioPreview2.preview.vue'
import RadioPreview3 from './RadioPreview3.preview.vue'
import RadioPreview4 from './RadioPreview4.preview.vue'
import RadioPreview5 from './RadioPreview5.preview.vue'

const RadioAttrContent = [
  ['modelValue', '单选框选中项绑定值', 'String/Boolean/Number', '-', '-'],
  ['label', '单选框的值', 'String/Boolean/Number', '-', '-'],
  ['disabled', '是否禁用', 'Boolean', '-', 'false'],
  ['size', '尺寸', 'String', 'small/large/\'\'', '-'],
  ['border', '是否添加边框', 'Boolean', '-', '-']
]

const RadioSlotContent = [
  ['default', '选项内容']
]

const RadioEventContent = [
  ['change', '改变活跃选项的触发事件', '选中选项的label值']
]

const RadioGroupAttrContent = [
  ['modelValue', '单选框选中项绑定值', 'String/Boolean/Number', '-', '-'],
  ['size', '尺寸', 'String', 'small/large/\'\'', '-']
]

const RadioGroupSlotContent = [
  ['default', '单选框组内容']
]

</script>

<style scoped></style>
