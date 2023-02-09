<template>
  <article class="markdown" v-html="content"></article>
</template>

<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})
</script>