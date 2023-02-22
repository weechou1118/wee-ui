<template>
  <div :class="classes">
    <!-- 文本框 -->
    <template v-if="type !== 'textarea'">
      <input 
        ref="weeInput"
        :value="nativeInputValue"
        class="wee-input-inner"
        :type="type"
        :disabled="disabled"
        @blur="handleBlur"
        @input="handleInput"
        @focus="handleFocus"
        :placeholder="placeholder" 
      />
      <!-- 左侧图标 slot -->
      <i class="wee-input-prefix-icon">
        <component class="prefix-icon" v-if="prefixIcon" :is="prefixIcon" />
      </i>
      <!-- 右侧图标 slot -->
      <i class="wee-input-suffix-icon">
        <Close class="close-icon" v-if="clearable && showClose" @click="clearValue" />
        <EyeOutline class="pass-icon" v-if="showPassword" @click="handlePasswordVisible" />
        <component class="suffix-icon" v-if="suffixIcon" :is="suffixIcon" />
      </i>
    </template>
    <!-- 文本域 -->
    <textarea 
      v-else 
      cols="30"
      :rows="rows"
      ref="weeInput"
      :value="nativeInputValue"
      class="wee-input-inner"
      :type="type"
      :disabled="disabled"
      @blur="handleBlur"
      @input="handleInput"
      @focus="handleFocus"
      :placeholder="placeholder" 
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { Close, EyeOutline } from '@vicons/ionicons5'
import { inputProps, useInput } from './input'

const props = defineProps(inputProps)
const emits = defineEmits(['blur', 'focus', 'select', 'update:modelValue'])
const {
  classes,
  placeholder,
  clearable,
  nativeInputValue,
  disabled,
  showPassword,
  type,
  showPasswordVisible,
  rows
} = useInput(props, emits)

const weeInput = ref()
const showClose = computed(() => {
  return clearable.value && nativeInputValue.value
})

const focus = () => {
  weeInput.value.focus()
}
const blur = () => {
  weeInput.value.blur()
}
const select = () => {
  nextTick(() => {
    weeInput.value?.focus();
    var selection = document.getSelection();
    var range = document.createRange();
    range.selectNode(weeInput.value);
    selection?.removeAllRanges();
    selection?.addRange(range);
  });
}

const handleBlur = (e) => {
  emits('blur', e)
}

const handleInput = (e) => {
  emits('update:modelValue', e.target?.value)
}

const handleFocus = (e) => {
  emits('focus', e)
}

const clearValue = () => {
  emits('update:modelValue', '')
}

const handlePasswordVisible = () => {
  showPasswordVisible.value = !showPasswordVisible.value
}

defineExpose({
  blur,
  focus,
  select
})
</script>

<script lang="ts">
export default {
  name: 'WeeInput'
}
</script>

<style scoped lang="scss">
.wee-input {
  position: relative;
  display: inline-block;
  width: 200px;
  margin-right: 20px;

  &.is-suffix-icon &-inner {
    padding-right: 22px;
  }

  &.is-prefix-icon &-inner {
    padding-left: 22px;
  }

  &-inner {
    display: inline-block;
    border-width: 1px;
    border-style: solid;
    border-color: #acacac;
    padding: 7px 0 7px 8px;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    transition: all .2s ease;
    font-size: 14px;
    width: 100%;

    &::placeholder {
      color: #d6d6d6;
    }

    &.is-disabled {
      cursor: not-allowed;
    }

    &:hover {
      border-color: #c1c1c1;
    }

    &:focus {
      border-color: $main-color;
    }
  }

  .wee-input-prefix-icon,
  .wee-input-suffix-icon {
    position: absolute;
    top: 55%;
    right: 5px;
    transform: translateY(-50%);
    display: inline-block;
    width: 16px;

    svg {
      width: 1em;
      height: 1em;
      color: #e1e1e1;
      transition: color .5s;

      &:not(.suffix-icon, .prefix-icon):hover {
        cursor: pointer;
        color: #909399;
      }
    }
  }

  .wee-input-prefix-icon {
    left: 5px;
  }

  .close-icon,
  .pass-icon {
    display: none;
  }

  &:hover .pass-icon,
  &:hover .close-icon,
  &:focus .pass-icon,
  &:focus .close-icon {
    display: inline-block;
  }
}
</style>