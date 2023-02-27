<template>
  <div class="wee-radio-group">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, toRefs } from 'vue'
import { radioGroupProps, radioGroupEmits } from './radio-group'

const props = defineProps(radioGroupProps)
const emits = defineEmits(radioGroupEmits)

const changeEvent = (value) => {
  emits('update:modelValue', value)
  emits('change', value)
}
console.log(props, 123)
// 为了区分点击单选框后触发的事件
provide(
  'radioGroupKey',
  reactive({
    ...toRefs(props),
    changeEvent
  })
)
</script>

<script lang="ts">
export default {
  name: 'WeeRadioGroup'
}
</script>
