<preview>文本域</preview>
<template>
  <div class="row">
    <wee-input type="textarea" :rows="4" v-model="inputValue" placeholder="我是文本域" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeInput from '@/lib/input/index.vue'

const inputValue = ref('')
</script>