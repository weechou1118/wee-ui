<template>
  <div class="wee-tabs" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { toRefs, provide, computed } from 'vue'
const emits = defineEmits(['tabClick', 'update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
})

const changeEvent = (val) => {
  emits('update:modelValue', val)
  emits('tabClick')
}

provide('WeeTabsKey', {
  ...toRefs(props),
  changeEvent
})

const classes = computed(() => {
  return {
    [`wee-tabs-${props.type}`]: props.type
  }
})

</script>

<style scoped lang="scss">
.wee-tabs {
  display: flex;
  border-bottom: 1px solid #eaeaea;
  &-card {
    background-color: #f7f7fa;
    padding: 10px;
    border-bottom: none;
  }
}
</style>
