<preview>自定义开启/关闭状态颜色</preview>
<template>
  <div class="row">
    <Switch v-model="value" active-color="#467897" inactive-color="#E7CD79"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/lib/switch/index.vue'
const value = ref(false)
</script>