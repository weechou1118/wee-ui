<preview>基础用法</preview>
<template>
  <div class="row">
    <Switch v-model="value" />
    <Switch v-model="value" disabled />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/lib/switch/index.vue'
const value = ref(false)
</script>