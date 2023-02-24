<preview>有禁用选项</preview>
<template>
  <div class="row">
    <wee-select v-model="value" :options="options"></wee-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeSelect from '@/lib/select/index.vue'
const value = ref('')
const options = ref([
  { label: '我喜欢', value: 'sen1' },
  { label: '吃', value: 'sen2', disabled: true },
  { label: '牛肉', value: 'sen3' },
  { label: '面', value: 'sen4', disabled: true },
  { label: '你喜欢', value: 'sen5' },
  { label: '吃', value: 'sen6', disabled: true },
  { label: '猪脚', value: 'sen7' },
  { label: '饭', value: 'sen8', disabled: true },
  { label: '他喜欢', value: 'sen9' },
  { label: '吃', value: 'sen10', disabled: true },
  { label: '猫', value: 'sen11' },
  { label: '粮', value: 'sen12', disabled: true },
])
</script>