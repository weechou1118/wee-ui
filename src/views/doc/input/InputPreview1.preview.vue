<preview>基本用法</preview>
<template>
  <div class="row">
    <wee-input v-model="inputValue"></wee-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeInput from '@/lib/input/index.vue'
const inputValue = ref('')
</script>