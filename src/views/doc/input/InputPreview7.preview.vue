<preview>外部控制输入框</preview>
<template>
  <div class="row">
    <wee-button @click="handleFocus">focus</wee-button>
    <wee-button @click="handleBlur">blur</wee-button>
    <wee-button @click="handleSelect">select</wee-button>
    <br />
    <wee-input ref="input" v-model="inputValue" placeholder="请输入内容" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeButton from '@/lib/button/index.vue'
import WeeInput from '@/lib/input/index.vue'

const inputValue = ref('青春是谎言，是邪恶')
const input = ref()

const handleFocus = () => {
  input.value.focus()
}
const handleBlur = () => {
  input.value.blur()
}
const handleSelect = () => {
  input.value.select()
}
</script>