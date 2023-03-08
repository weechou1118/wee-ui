<template>
  <div class="doc-content">
    <h1>affix 固钉</h1>
    <div class="preview-wrapper">
      <Preview :el="AffixPreview1" />
      <Preview :el="AffixPreview2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AffixPreview1 from './AffixPreview1.preview.vue'
import AffixPreview2 from './AffixPreview2.preview.vue'

onMounted(() => {
  
})
</script>

<style scoped lang="scss"></style>
