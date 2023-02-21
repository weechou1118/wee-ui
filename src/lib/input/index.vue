<template>
  <input ref="weeInput" class="wee-input" type="text" @blur="handleBlur">
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const emit = defineEmits(['blur'])

const weeInput = ref()

onMounted(() => {
  weeInput.value.focus()
})

const handleBlur = (e: any) => {
  emit('blur', e.target.value)
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