<template>
  <div class="wee-button">
    <button :class="myClass">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  theme: {
    type: String,
    default: 'common'
  },
  size: {
    type: String,
    default: 'medium'
  }
})
const { theme, size } = props

const myClass = computed(() => {
  return {
    [`wee-button--${theme}`]: theme,
    [`wee-button--${size}`]: size
  }
})
</script>

<style scoped lang="scss">
$primary-bg-color: #409eff;
$success-bg-color: #67c23a;
.wee-button {
  // 默认样式
  button {
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: transparent;
    box-sizing: border-box;
    border: 1px solid #ccc;
    transition: .2s all;
  }
  .wee-button {
    &--common {
      border: 1px solid #ccc;
      color: #ccc;
      &:hover {
        color: $main-color;
        border-color: $main-color;
      }
    }
    &--primary {
      background-color: $primary-bg-color;
      border-color: $primary-bg-color;
      color: #fff;
    }
    &--success {
      background-color: $success-bg-color;
      border-color: $success-bg-color;
      color: #fff;
    }
    &--small {
      padding: 5px 25px;
      font-size: 14px;
    }
    &--medium {
      padding: 10px 30px;
      font-size: 15px;
    }
  }
}
</style>
