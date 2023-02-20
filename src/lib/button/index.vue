<template>
  <button class="wee-button" :class="myClass">
    <component v-if="icon" class="x-icons" :is="getIconName()"></component>
    <Loading v-if="loading" class="loading" />
    <span v-if="loading" style="display: inline-block; width: 10px;"></span>
    <slot>
    </slot>
</button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { GameControllerOutline } from '@vicons/ionicons5'
import Loading from '@/components/loading.vue'
const attrs = useAttrs()
const props = defineProps({
  theme: {
    type: String,
    default: 'common'
  },
  size: {
    type: String,
    default: 'medium'
  },
  icon: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const { theme, size, icon, loading } = props

const disabledClass = computed(() => {
  return loading || attrs.hasOwnProperty('disabled')
})

const myClass = computed(() => {
  return {
    [`wee-button--${theme}`]: theme,
    [`wee-button--${size}`]: size,
    ['is-dotted']: attrs.hasOwnProperty('dotted'),
    ['is-round']: attrs.hasOwnProperty('round'),
    ['is-circle']: attrs.hasOwnProperty('circle'),
    ['disabled']: disabledClass.value
  }
})

const getIconName = () => {
  const iconMap: any = {
    game: GameControllerOutline
  }
  return iconMap[icon]
}
</script>

<script lang="ts">
export default {
  name: 'WeeButton'
}
</script>

<style lang="scss">
.wee-button {
  svg {
    width: 1em;
    height: 1em;
  }
}
</style>

<style scoped lang="scss">

// 默认样式
.wee-button {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: transparent;
  box-sizing: border-box;
  border: 1px solid #ccc;
  transition: .2s all;
  color: #fff;
}

.x-icons {
  width: 1em;
  height: 1em;
}

.wee-button {
  display: inline-flex;
  align-items: center;

  // 样式
  &--common {
    border: 1px solid #ccc;
    color: #ccc;

    &:hover {
      color: $main-color;
      border-color: $main-color;
    }
  }

  &--primary {
    background-color: $primary-color;
    border-color: $primary-color;

    &:hover,
    &.disabled {
      background: $primary-hover-color;
      border-color: $primary-hover-color;
    }

    &.is-dotted {
      background-color: #ecf5ff;
      color: $primary-color;
    }
  }

  &--success {
    background-color: $success-color;
    border-color: $success-color;

    &:hover,
    &.disabled {
      background-color: $success-hover-color;
      border-color: $success-hover-color;
    }

    &.is-dotted {
      background-color: #f0f9eb;
      color: $success-color;
    }
  }

  &--info {
    background-color: $info-color;
    border-color: $info-color;

    &:hover,
    &.disabled {
      background-color: $info-hover-color;
      border-color: $info-hover-color;
    }

    &.is-dotted {
      background-color: #f4f4f5;
      color: $info-color;
    }
  }

  &--warn {
    background-color: $warn-color;
    border-color: $warn-color;

    &:hover,
    &.disabled {
      background-color: $warn-hover-color;
      border-color: $warn-hover-color;
    }

    &.is-dotted {
      background-color: #fdf6ec;
      color: $warn-color;
    }
  }

  &--error {
    background-color: $error-color;
    border-color: $error-color;

    &:hover,
    &.disabled {
      background-color: $error-hover-color;
      border-color: $error-hover-color;
    }

    &.is-dotted {
      background-color: #fef0f0;
      color: $error-color;
    }
  }

  // 特殊
  &.is-dotted {
    border-style: dashed;
  }

  &.is-round {
    border-radius: 20px;
  }

  &.is-circle {
    border-radius: 50%;
    padding: 10px;
  }

  &.disabled {
    pointer-events: none;
  }

  // 尺寸
  &--small {
    padding: 5px 15px;
    font-size: 14px;
  }

  &--medium {
    padding: 12px 20px;
    font-size: 14px;
  }

  &--large {
    padding: 20px 30px;
    font-size: 20px;
  }
}
</style>
