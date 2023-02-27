<preview>设置文案</preview>
<template>
  好想乘风而起
  <wee-divider content-position="left">左边的内容</wee-divider>
  穿过那片雨林
  <wee-divider><BagCheck class="divider-icon"/></wee-divider>
  视野里有整个世界
  <wee-divider content-position="right">右边的内容</wee-divider>
</template>

<script setup lang="ts">
import WeeDivider from '@/lib/divider/index.vue'
import { BagCheck } from '@vicons/ionicons5'

</script>

<style scoped>
.divider-icon {
  width: 1em;
  height: 1em;
}
</style>
