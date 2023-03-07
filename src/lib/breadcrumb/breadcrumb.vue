<template>
  <div class="wee-breadcrumb">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
const props = defineProps({
  separator: {
    type: String,
    default: '/'
  },
  separatorIcon: {
    type: Object
  }
})

// 将值传入到props当中可以考虑使用provide/inject
provide('WeeBreadcrumbKey', props)
</script>

<script lang="ts">
export default {
  name: 'WeeBreadcrumb'
}
</script>

<style scoped lang="scss"></style>
