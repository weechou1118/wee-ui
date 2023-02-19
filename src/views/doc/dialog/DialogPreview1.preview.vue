<preview>基础用法</preview>
<template>
  <wee-button theme="primary" @click="dialogVisible = !dialogVisible">打开对话框</wee-button>
  <wee-dialog 
    v-model="dialogVisible"
    :title="title"
  ></wee-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
const title = ref('标题')
</script>