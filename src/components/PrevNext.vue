<!-- 翻页器 -->
<template>
  <div class="prev-next-container">
    <span v-if="prevRoute" class="prev" @click="pageTurnHandle(false)">← {{ prevRoute.meta.name }}</span>
    <span v-if="nextRoute" class="next" @click="pageTurnHandle(true)">{{ nextRoute.meta.name }} →</span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// props
const props = defineProps({
  routes: {
    type: Array,
    default: () => []
  }
})
const { routes } = props

// data
const currentRouteIndex = ref()

// 引入路由对象
const router = useRouter()
const route = useRoute()

// 路由跳转相关
const setRouteIndex = (val: any) => {
  const activeName = val.split('/').pop()
  currentRouteIndex.value = routes.findIndex((item: any) => item.path === activeName)
}

// 监听路由变化
watch(() => route.fullPath, (val) => {
  setRouteIndex(val)
}, { immediate: true })

const prevRoute: any = computed(() => {
  return routes[currentRouteIndex.value - 1]
})
const nextRoute: any = computed(() => {
  return routes[currentRouteIndex.value + 1]
})

const pageTurnHandle = (isNext: Boolean) => {
  const route: any = isNext ? nextRoute.value : prevRoute.value
  const path: string = route.path
  router.push({ path: `/doc/${path}` }) 
}
</script>

<style scoped lang="scss">
.prev-next-container {
  overflow: hidden;
  width: 80%;
  margin-top: 50px;
  .prev, .next {
    cursor: pointer;
    color: #409eff;
    user-select: none;
  }
  .prev {
    float: left;
  }
  .next {
    float: right;
  }
}
</style>