<preview>基础用法</preview>
<template>
  <div class="row">
    <Link href="https://weech0u.github.io/" target="__blank">默认链接</Link>
    <Link type="primary">主要链接</Link>
    <Link type="success">成功链接</Link>
    <Link type="info">信息链接</Link>
    <Link type="warn">警告链接</Link>
    <Link type="error">错误链接</Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/lib/link/index.vue'
</script>