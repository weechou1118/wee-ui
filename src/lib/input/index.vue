<template>
  <input ref="weeInput" class="wee-input" type="text" @blur="handleBlur" @input="handleInput">
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['blur', 'update:modelValue'])

const weeInput = ref()

onMounted(() => {
  weeInput.value.focus()
})

const handleBlur = (e: any) => {
  emit('blur', e.target.value)
}

const handleInput = (e: any) => {
  emit('update:modelValue', e.target.value)
}

</script>

<style scoped lang="scss">
.wee-input {
  border-width: 1px;
  border-style: solid;
  border-color: #eaeaea;
  padding: 5px;
  padding-left: 8px;
  border-radius: 4px;
  outline: none;
  transition: all .2s ease;
  &:focus {
    border-color: $main-color;
  }
}
</style>