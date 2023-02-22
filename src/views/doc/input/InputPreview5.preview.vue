<preview>带图标的输入框</preview>
<template>
  <div class="row">
    <wee-input v-model="inputValue1" placeholder="我有图标" :suffix-icon="AlarmOutline"/>
    <wee-input v-model="inputValue2" placeholder="我有也有图标" :prefix-icon="AlarmSharp"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeInput from '@/lib/input/index.vue'
import { AlarmOutline } from '@vicons/ionicons5'
import { AlarmSharp } from '@vicons/ionicons5'

const inputValue1= ref('')
const inputValue2 = ref('')
</script>