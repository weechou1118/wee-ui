<template>
  <div class="wee-select" @click="selectHandleClick">
    <span class="wee-select-value">{{ showValue }}</span>
    <ChevronDownOutline class="arrow" />
    <transition name="fade">
      <ul v-if="optionsVisible" class="wee-options-list">
        <li 
          v-for="item in options" 
          :key="item.label"
          @click="optionHandleClick($event, item)"
          :class="{ 'active-option': item.value === modelValue}"
        >
          {{ item.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ChevronDownOutline } from '@vicons/ionicons5'
import { ref, computed, toRefs } from 'vue'
type option = {
  label: string
  value: string
}
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array<option>,
    default: () => []
  }
})
const emits = defineEmits(['update:modelValue'])

const optionsVisible = ref(false)

const showValue = ref('请选择')

const selectHandleClick = () => {
  optionsVisible.value = !optionsVisible.value
}
const optionHandleClick = (e: Event, val: option) => {
  showValue.value = val.label
  emits('update:modelValue', val.value)
}
</script>

<style setup lang="scss">
.wee-select {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 200px;
  border: 1px solid #dcdfe6;
  padding: 10px;
  border-radius: 4px;
  color: #808080;
  transition: all .4s ease;
  cursor: pointer;

  svg {
    width: 1em;
  }

  &:hover {
    border: 1px solid #909398;
  }
}

.wee-options-list {
  position: absolute;
  width: 200px;
  box-sizing: border-box;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: .2);
  border-radius: 4px;
  left: 0;
  top: 120%;
  background-color: #fff;
  z-index: 10;

  li {
    padding: 10px;

    &:hover,
    &.active-option {
      background-color: #ededed;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>