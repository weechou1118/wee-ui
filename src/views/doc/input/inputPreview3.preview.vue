<preview>可清空的输入框</preview>
<template>
  <div class="row">
    <wee-input v-model="inputValue" placeholder="我可以被清空噢" :clearable="true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeInput from '@/lib/input/index.vue'
const inputValue = ref('')
</script>