<template>
  <div class="wee-select" :class="{ 'is-disabled': useDisabled }">
    <div ref="selectRef" class="wee-select-inner" :tabindex="useDisabled ? '' : 0">
      <span v-if="!multiple && showValue" class="wee-select-value">{{ showValue }}</span>
      <div v-else-if="multiple && showValue && showValue.length" class="wee-select-multi">
        <wee-tag v-for="(item, index) in showValue" :key="item.value" @close="handleMultiTagClose(index)"
          closable>{{ item.label }}</wee-tag>
      </div>
      <span v-else class="wee-select-placeholder">{{ placeholder }}</span>
      <i class="icon" @mouseenter.stop="handleEnter" @mouseleave.stop="handleLeave">
        <CloseOutline v-if="clearable && showValue && onIcon" @click="handleClear" />
        <ChevronDownOutline v-else />
      </i>
      <ul class="wee-select-options">
        <li v-for="item in options" :key="item.label" class="wee-select-options-item"
          @click="optionHandleClick($event, item)" :class="classes(item)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import WeeTag from '@/lib/tag/index.vue'
import { ChevronDownOutline, CloseOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import { selectProps, useSelect } from './index'
type option = {
  label: string
  value: string,
  disabled?: Boolean
}
const props = defineProps(selectProps)
const emits = defineEmits(['update:modelValue'])
const { modelValue, options, useDisabled, clearable, multiple, showValue } = useSelect(props, emits)

const placeholder = ref('请选择')
const selectRef = ref()
const onIcon = ref(false)

const classes = (item) => {
  return {
    'is-active': item.value === modelValue,
    'is-disabled': item.disabled
  }
}

const optionHandleClick = (e: Event, val: option) => {
  e.stopPropagation()
  if (val.disabled) return
  if (typeof modelValue === 'string') {
    emits('update:modelValue', val.value)
    selectRef.value.blur()
  } else {
    (props.modelValue as Array<option>).push({ label: val.label, value: val.value })
  }
}

const handleMultiTagClose = (index: number) => {
  (props.modelValue as Array<option>).splice(index, 1)
}

const handleEnter = () => {
  onIcon.value = true
}

const handleLeave = () => {
  onIcon.value = false
}

const handleClear = () => {
  emits('update:modelValue', '')
}
</script>

<style scoped lang="scss">
.wee-select {
  position: relative;
  width: 200px;
  cursor: pointer;
  color: #808080;

  .icon {
    display: flex;
    align-items: center;
  }

  .wee-select-placeholder {
    color: #c2c2c2;
  }

  .wee-select-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    padding: 10px;
    border-radius: 4px;
    transition: all .4s ease;
    outline: none;

    svg {
      width: 1em;
    }

    &:hover {
      border: 1px solid #909398;
    }

    &:focus-within {
      border: 1px solid $main-color;
      box-shadow: 0 0 4px $main-color;
    }

    &:focus-within .wee-select-options {
      height: 200px;
      opacity: 1;
    }

    .is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  .wee-select-options {
    position: absolute;
    width: 200px;
    box-sizing: border-box;
    box-shadow: 0 0 5px rgba($color: #000000, $alpha: .2);
    border-radius: 4px;
    left: 0;
    top: 120%;
    height: 0px;
    background-color: #fff;
    z-index: 10;
    overflow-y: scroll;
    transition: all .3s ease;
    opacity: 0;

    &-item {
      padding: 10px;

      &:hover:not(.is-disabled),
      .is-active {
        background-color: #ededed;
      }
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    background-color: #fafafc;
    color: #c2c2c2;

    .wee-select-inner {

      &:focus,
      &:hover {
        box-shadow: none;
        border: 1px solid #dcdfe6;
      }
    }
  }
}
</style>