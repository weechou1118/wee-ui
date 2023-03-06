<preview>自定义内容</preview>
<template>
  <div style="height: 300px">Scroll down to see the custom bottom-right button.</div>
  <wee-backup target=".main-content" :bottom="100" @scrollDone="scrollDone"><PawOutline /></wee-backup>
</template>

<script setup lang="ts">
import WeeBackup from '@/lib/backup/index.vue'
import { PawOutline } from '@vicons/ionicons5'

const scrollDone = () => {
  console.log('scroll done')
  // 达到顶部后的操作
}
</script>

<style scoped lang="scss"></style>
