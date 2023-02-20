<preview>图标</preview>
<template>
  <div class="row flex">
    <wee-link :icon="CreateOutline">编辑</wee-link>
    <wee-link :icon="EyeOutline" :to-right="true">查看</wee-link>
  </div>
</template>

<script setup lang="ts">
import WeeLink from '@/lib/link/index.vue'
import { CreateOutline, EyeOutline } from '@vicons/ionicons5'
</script>