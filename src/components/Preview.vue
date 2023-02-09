<template>
  <div class="preview-container">
    <h2>{{ el!.__sourceCodeTitle }}</h2>
    <div class="preview-container-component">
      <component :is="el"></component>
    </div>
    <div class="preview-container-code">
      {{ el!.__sourceCode }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  el: {
    type: Object,
    require: true
  }
})
</script>

<style scoped lang="scss">
  
</style>