<preview>禁用状态</preview>
<template>
  <div class="row flex">
    <wee-radio v-model="radio" label="1" disabled>单选1</wee-radio>
    <wee-radio v-model="radio" label="2" disabled>单选2</wee-radio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeRadio from '@/lib/radio/radio.vue'

const radio = ref('1')
</script>

<style scoped lang="scss"></style>
