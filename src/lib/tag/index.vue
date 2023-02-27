<template>
  <span class="wee-tag" :class="classes">
    <slot></slot>
    <CloseOutline @click="handleClose" v-if="closable" />
  </span>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { CloseOutline } from '@vicons/ionicons5'
const { type } = defineProps({
  type: {
    type: String,
    default: 'primary'
  }
})

const emits = defineEmits(['close'])

const attrs = useAttrs()

const closable = computed(() => {
  return attrs.hasOwnProperty('closable')
})

const classes = computed(() => {
  return {
    [`wee-tag--${type}`]: type
  }
})

const handleClose = () => {
  emits('close')
}
</script>

<script lang="ts">
export default {
  name: 'WeeTag'
}
</script>

<style scoped lang="scss">
$tag-primary: #e7f3ff;
$tag-success: #e2f8d7;
$tag-info: #e5e5e5;
$tag-warn: #fdecd2;
$tag-error: #ffdddd;
.wee-tag {
  display: inline-flex;
  padding: 5px 10px;
  margin-right: 6px;
  margin-bottom: 2px;
  border-radius: 2px;
  align-items: center;
  svg {
    width: 1em;
    height: 1em;
    cursor: pointer;
  }
  &--primary {
    color: $primary-color;
    border: 1px solid $primary-color;
    background-color: $tag-primary;
  }
  &--success {
    color: $success-color;
    border: 1px solid $success-color;
    background-color: $tag-success;
  }
  &--info {
    color: $info-color;
    border: 1px solid $info-color;
    background-color: $tag-info;
  }
  &--warn {
    color: $warn-color;
    border: 1px solid $warn-color;
    background-color: $tag-warn;
  }
  &--error {
    color: $error-color;
    border: 1px solid $error-color;
    background-color: $tag-error;
  }
}
</style>