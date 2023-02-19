<preview>可以通过点击遮罩层关闭弹窗</preview>
<template>
  <wee-button theme="primary" @click="dialogVisible = !dialogVisible">打开对话框</wee-button>
  <wee-dialog 
    v-model="dialogVisible"
    :content="content"
    :title="title"
    :overlay-closable="true"
    :cancel="cancel"
  ></wee-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
const content = ref('对话框内容')
const title = ref('标题噢')

const cancel = () => {
  // TODO 结合消息框
  console.log('对话框被销毁辣')
}
</script>