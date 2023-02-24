<preview>基础多选</preview>
<template>
  <div class="row">
    <wee-select v-model="value" :options="options" multiple></wee-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeSelect from '@/lib/select/index.vue'
const value = ref([])
const options = ref([
  { label: '楼下', value: 'sen1' },
  { label: '超市', value: 'sen2' },
  { label: '速食', value: 'sen3' },
  { label: '冒着热气', value: 'sen4' },
  { label: '穿过', value: 'sen5' },
  { label: '玻璃', value: 'sen6' },
  { label: '发呆', value: 'sen7' },
  { label: '得到停息', value: 'sen8' },
  { label: '好像', value: 'sen9' },
  { label: '时间', value: 'sen10' },
  { label: '力气', value: 'sen11' },
  { label: '都被剥离', value: 'sen12' },
])
</script>