<preview>内容居中</preview>
<template>
  <div class="row">
    <wee-button @click="open1">成功</wee-button>
    <wee-button @click="open2">警告</wee-button>
    <wee-button @click="open3">消息</wee-button>
    <wee-button @click="open4">错误</wee-button>
  </div>
</template>

<script setup lang="ts">
import WeeButton from '@/lib/button/index.vue'
import WeeMessage from '@/lib/message'

const open1 = () => {
  WeeMessage({
    message: 'this is a message',
    type: 'success',
    showClose: true,
    isCenter: true
  })
}
const open2 = () => {
  WeeMessage({
    message: 'this is a message',
    type: 'warning',
    showClose: true,
    isCenter: true
  })
}
const open3 = () => {
  WeeMessage({
    message: 'this is a message',
    showClose: true,
    isCenter: true
  })
}
const open4 = () => {
  WeeMessage({
    message: 'this is a message',
    type: 'error',
    showClose: true,
    isCenter: true
  })
}
</script>
