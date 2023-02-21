<preview>禁用链接</preview>
<template>
  <div class="row">
    <Link href="https://weech0u.github.io/" target="__blank" disabled>默认链接</Link>
    <Link type="primary" disabled>主要链接</Link>
    <Link type="success" disabled>成功链接</Link>
    <Link type="info" disabled>信息链接</Link>
    <Link type="warn" disabled>警告链接</Link>
    <Link type="error" disabled>错误链接</Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/lib/link/index.vue'
</script>