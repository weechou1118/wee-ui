<template>
  <button class="wee-switch" :class="classes" @click="handleClick">
    <span></span>
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String,
    default: 'rgb(219, 219, 219)'
  },
  inactiveColor: {
    type: String,
    default: 'rgb(219, 219, 219)'
  },
  size: {
    type: String,
    default: 'medium'
  }
})

const { modelValue, disabled, size } = toRefs(props)

const emits = defineEmits(['update:modelValue'])

const classes = computed(() => {
  return {
    'wee-switch--open': modelValue.value,
    'wee-switch--close': !modelValue.value,
    'wee-switch--disabled': disabled.value,
    [`wee-switch--${size.value}`]: size.value,
  }
})

const handleClick = () => {
  if (disabled.value) return
  emits('update:modelValue', !props.modelValue)
}
</script>

<style scoped lang="scss">
.wee-switch {
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 24px;
  border: none;
  border-radius: 25px;
  margin-right: 10px;
  transition: background-color .2s ease;

  &--open {
    background-color: v-bind(activeColor);
  }

  &--close {
    background-color: v-bind(inactiveColor);
  }

  span {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    left: 2px;
    top: 2px;
    background-color: #fff;
    transition: all .2s ease;
  }

  &--open span {
    left: 28px;
  }

  &--disabled {
    cursor: not-allowed;
    opacity: .5;
  }

  &--small {
    width: 40px;
    height: 20px;

    span {
      width: 16px;
      height: 16px;
    }

    &.wee-switch--open {
      background-color: v-bind(activeColor);

      span {
        left: 21px;
      }
    }

    &--close {
      background-color: v-bind(inactiveColor);
    }
  }

  &--large {
    width: 60px;
    height: 30px;

    span {
      width: 26px;
      height: 26px;
    }

    &.wee-switch--open {
      background-color: v-bind(activeColor);

      span {
        left: 30px;
      }
    }
  }
}</style>