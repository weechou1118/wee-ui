<template>
  <div ref="root" class="wee-affix">
    <div :class="{ 'wee-affix-fixed': state.fixed }" :style="affixStyle">
      <slot></slot>
    </div>
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
  fixed: false,
  top: props.offset
})

const affixStyle = computed(() => {
  return {
    top: state.top + 'px'
  }
})

// TODO 指定容器，使固钉不超出容器范围
const update = () => {
  if (!root.value || !target.value) return
  const rootRect = root.value.getBoundingClientRect()
  const targetRect = target.value.getBoundingClientRect()
  if (props.position === 'top') {
    state.fixed = rootRect.top - targetRect.top < 80
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
  // 监听容器滚动
  window.addEventListener('scroll', onScroll, true)
})
</script>

<style lang="scss" scoped>
.wee-affix {
  &-fixed {
    position: fixed;
  }
}
</style>
