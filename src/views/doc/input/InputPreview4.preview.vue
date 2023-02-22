<preview>密码框</preview>
<template>
  <div class="row">
    <wee-input v-model="inputValue" placeholder="请输入密码" :show-password="true"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeInput from '@/lib/input/index.vue'
const inputValue = ref('password')
</script>