<template>
  <div v-if="visible" class="wee-backup" :style="customStyle" @click="scrollToTop">
    <slot>TOP</slot>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount, shallowRef } from 'vue'
import { backupProps, backupEmits } from './index'
import { debounce, easeInOutCubic } from '@/utils'

const el = shallowRef<HTMLElement | undefined>(document.documentElement)
const container = shallowRef<Document | HTMLElement>(document)
const visible = ref(false)

const props = defineProps(backupProps)
const emits = defineEmits(backupEmits)

onMounted(() => {
  if (props.target) {
    el.value = document.querySelector<HTMLElement>(props.target) ?? undefined
    if (!el.value) {
      throw new Error('指定元素不存在')
    }
    container.value = el.value
    container.value.addEventListener('scroll', handleScroll)
  }
})

onBeforeUnmount(() => {
  container.value.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  if (!el.value) return
  const beginTime = Date.now()
  const beginValue = el.value.scrollTop
  const frameFunc = () => {
    if (!el.value) return
    // 进度比例 当前滚动时间/500(ms)
    const progress = (Date.now() - beginTime) / 500
    if (progress < 1) {
      el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
      requestAnimationFrame(frameFunc)
    } else {
      el.value.scrollTop = 0
      emits('scrollDone')
    }
  }
  requestAnimationFrame(frameFunc)
}

const handleScroll = debounce((e) => {
  const scrollTop = e.target?.scrollTop
  visible.value = scrollTop && scrollTop > props.visibilityHeight
}, 100, false)

const customStyle = computed(() => {
  return {
    bottom: `${props.bottom}px`,
    right: `${props.right}px`
  }
})
</script>

<style scoped lang="scss">
.wee-backup {
  position: fixed;
  bottom: 5px;
  right: 5px;
  width: 50px;
  height: 50px;
  box-shadow: 0 0 4px rgba(0, 0, 0, .5);
  border-radius: 3px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>
