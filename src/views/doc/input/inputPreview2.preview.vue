<preview>禁用状态</preview>
<template>
  <div class="row">
    <wee-input v-model="inputValue" :disabled="true" placeholder="我被禁用了！"></wee-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeInput from '@/lib/input/index.vue'
const inputValue = ref('')
</script>