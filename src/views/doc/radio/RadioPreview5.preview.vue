<preview>带边框</preview>
<template>
  <div class="row">
    <wee-radio v-model="radio" label="1" border>单选1</wee-radio>
    <wee-radio v-model="radio" label="2" border>单选2</wee-radio>
    <br />
    <wee-radio-group v-model="radio1" size="small">
      <wee-radio label="true" border>单选1</wee-radio>
      <wee-radio :label="2" border>单选2</wee-radio>
    </wee-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeeRadio from '@/lib/radio/radio.vue'
import WeeRadioGroup from '@/lib/radio/radio-group.vue'

const radio = ref('1')
const radio1 = ref('true')
</script>

<style scoped lang="scss"></style>
