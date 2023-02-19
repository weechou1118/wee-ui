<preview>通过方法生成弹窗</preview>
<template>
  <wee-button theme="primary" @click="createDialog">打开对话框</wee-button>
</template>

<script setup lang="ts">
import openDialog from '@/lib/dialog/openDialog'
const createDialog = () => {
  openDialog({
    title: () => '标题',
    content: () => '内容',
    overlayClosable: true,
    cancel: () => {},
    confirm: () => {}
  })
}
</script>