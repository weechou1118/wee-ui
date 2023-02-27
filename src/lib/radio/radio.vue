<template>
  <div class="wee-radio" @click="handleClick" :class="classes">
    <span class="wee-radio-input" :class="classes"></span>
    <span class="wee-radio-label" :class="classes">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { radioProps, useRadio } from './radio'

const props = defineProps(radioProps)
const emits = defineEmits(['update:modelValue', 'change'])

const { modelValue, classes, disabled, radioGroupProp, isGroup, label } = useRadio(props, emits)

const handleClick = () => {
  // 重复点击当前活跃选项时，直接 return 避免重复执行后续逻辑
  if (disabled.value || label.value === modelValue.value ) return
  if (isGroup) {
    radioGroupProp.changeEvent(label.value)
  } else {
    emits('update:modelValue', label.value)
    emits('change', label.value)
  }
}
</script>

<script lang="ts">
export default {
  name: 'WeeRadio'
}
</script>

<style scoped lang="scss">
.wee-radio {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  margin: 5px 16px 5px 0;
  &.has-border {
    border: 1px solid $main-color;
    padding: 10px;
    border-radius: 5px;
  }
  &-input {
    position: relative;
    width: 17px;
    height: 17px;
    box-shadow: #e0e0e6 0 0 0 1px;
    margin-right: 6px;
    border-radius: 50%;
    &::after {
      content: '';
      border-radius: 50%;
      position: absolute;
      width: 11px;
      height: 11px;
      transform: scale(0);
      background-color: $main-color;
      left: 3px;
      top: 3px;
      transition: all .5s ease;
    }
    &.is-disabled {
      background-color: #fafafc;
    }
    &.is-disabled::after {
      background-color: #c0c4cc;
    }
    &.is-active::after {
      transform: scale(1);
    }
  }
  &.is-disabled {
    cursor: not-allowed;
  }

  &-small {
    font-size: 14px;
    .wee-radio-input {
      width: 12px;
      height: 12px;
      &::after {
        width: 8px;
        height: 8px;
        left: 2px;
        top: 2px;
      }
    }
  }
  &-large {
    font-size: 18px;
    .wee-radio-input {
      width: 19px;
      height: 19px;
      &::after {
        width: 13px;
        height: 13px;
      }
    }
  }
}
</style>
