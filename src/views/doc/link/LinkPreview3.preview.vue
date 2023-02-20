<preview>有无下划线</preview>
<template>
  <div class="row">
    <wee-link :underline="false">无下划线</wee-link>
    <wee-link>有下划线</wee-link>
  </div>
</template>

<script setup lang="ts">
import WeeLink from '@/lib/link/index.vue'
</script>