<template>
  <span class="wee-tab" :class="classes" @click="handleClick">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})

const parent: any = inject('WeeTabsKey', undefined)

const classes = computed(() => {
  return {
    'is-active': parent.modelValue.value === props.label,
    [`wee-tab-${parent.type.value}`]: parent.type.value
  }
})

const handleClick = () => {
  parent.changeEvent(props.label)
}
</script>

<style scoped lang="scss">
.wee-tab {
  display: inline-block;
  margin-right: 20px;
  padding-bottom: 4px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color .3s ease;

  &.is-active {
    color: #409eff;
    border-bottom: 2px solid #409eff;
  }
}

.wee-tab-card.wee-tab-card {
  border-bottom: none;
  color: #000;
  padding: 10px 20px;
  border-radius: 10px;
  flex: 1;
  text-align: center;

  &.is-active {
    background-color: #fff;
  }
}
</style>
