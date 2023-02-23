<preview>不同尺寸</preview>
<template>
  <div class="row flex">
    <Switch v-model="value" size="small"/>
    <Switch v-model="value" size="medium"/>
    <Switch v-model="value" size="large"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/lib/switch/index.vue'
const value = ref(false)
</script>