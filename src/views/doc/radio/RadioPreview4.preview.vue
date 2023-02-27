<preview>单选框组</preview>
<template>
  <div class="row flex">
    <wee-radio-group v-model="radio" @change="handleChange">
      <wee-radio label="1">单选1</wee-radio>
      <wee-radio :label="true">单选2</wee-radio>
    </wee-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeRadio from '@/lib/radio/radio.vue'
import WeeRadioGroup from '@/lib/radio/radio-group.vue'

const radio = ref('1')
const handleChange = (val: [String, Number, Boolean]) => {
  console.log(val)
}
</script>

<style scoped lang="scss"></style>
