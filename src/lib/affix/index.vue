<template>
  <div ref="root" class="wee-affix">
    <div :class="{ 'wee-affix-fixed': state.fixed }" :style="affixStyle"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed, shallowRef } from 'vue'
const props = defineProps({
  offset: {
    type: Number,
    default: 80
  },
  position: {
    type: String,
    default: 'top'
  },
  target: {
    type: String,
    default: ''
  }
})

const root = shallowRef<HTMLElement>()
const target = shallowRef<HTMLElement>()

const state = reactive({
  fixed: false
})

const affixStyle = computed(() => {
  return {}
})

const update = () => {
  if (!root.value || !target.value) return
  const rootRect = root.value.getBoundingClientRect()
  const targetRect = target.value.getBoundingClientRect()
  if (props.position === 'top') {
    
  }
}

const onScroll = () => {
  update()
}

onMounted(() => {
  if (props.target) {
    target.value = document.querySelector(props.target) || undefined
    if (!props.target) {
      throw new Error(`Target is not exist: ${props.target}`)
    }
  } else {
    target.value = document.documentElement
  }
  window.addEventListener('scroll', onScroll, true)
})
</script>

<style scoped>
.wee-affix {
}
</style>
