<preview>图标分隔符</preview>
<template>
  <div class="row">
    <wee-breadcrumb :separator-icon="ChevronForwardOutline">
      <wee-breadcrumb-item :to="{ path: '/' }">首页</wee-breadcrumb-item>
      <wee-breadcrumb-item>选项</wee-breadcrumb-item>
    </wee-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ChevronForwardOutline } from '@vicons/ionicons5'
import WeeBreadcrumb from '@/lib/breadcrumb/breadcrumb.vue'
import WeeBreadcrumbItem from '@/lib/breadcrumb/breadcrumbItem.vue'

</script>

<style scoped lang="scss"></style>