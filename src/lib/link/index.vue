<template>
  <a ref="weeLink" class="wee-link" :class="classes">
    <i v-if="icon && !toRight" class="wee-icon">
      <component :is="icon"></component>
    </i>
    <slot></slot>
    <i v-if="icon && toRight" class="wee-icon to-right">
      <component :is="icon"></component>
    </i>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, useAttrs } from 'vue'

const weeLink = ref()
const props = defineProps({
  target: {
    type: String,
    default: '_self'
  },
  href: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'common'
  },
  underline: {
    type: Boolean,
    default: true
  },
  icon: {
    type: [String, Object]
  },
  toRight: {
    type: Boolean,
    default: false
  }
})
const { target, href, theme, underline, icon } = props
const attrs = useAttrs()
const classes = computed(() => {
  return {
    [`wee-link--${theme}`]: theme,
    [`is-disabled`]: attrs.hasOwnProperty('disabled'),
    [`is-no-underline`]: !underline
  }
})

onMounted(() => {
  if (target) {
    weeLink.value.setAttribute('target', target)
  }
  if (href) {
    weeLink.value.setAttribute('href', href)
  }
})
</script>

<script lang="ts">
export default {
  name: 'WeeLink'
}
</script>

<style setup lang="scss">
.wee-link {
  display: inline-flex;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  align-items: center;
  position: relative;
  .wee-icon {
    width: 1em;
    height: 1em;
    display: inline-flex;
    margin-right: 2px;
    &.to-right {
      margin-right: 0;
      margin-left: 2px;
    }
  }
  &.is-disabled {
    cursor: not-allowed;
  }
  &:hover {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-style: solid;
      border-width: 0;
      border-bottom-width: 1px;
      border-color: $main-color;
    }
  }
  &--common {
    color: $common-color;
    &:hover {
      color: $primary-hover-color;
    }
    &.is-disabled {
      color: $common-disabled-color;
    }
  }
  &--primary {
    color: $primary-color;
    &:hover {
      color: $primary-hover-color;
    }
    &.is-disabled {
      color: $primary-disabled-color;
    }
  }
  &--success {
    color: $success-color;
    &:hover {
      color: $success-hover-color;
    }
    &:hover::after {
      border-color: $success-hover-color;
    }
    &.is-disabled {
      color: $success-disabled-color;
    }
  }
  &--info {
    color: $info-color;
    &:hover {
      color: $info-hover-color;
    }
    &:hover::after {
      border-color: $info-hover-color;
    }
    &.is-disabled {
      color: $info-disabled-color;
    }
  }
  &--warn {
    color: $warn-color;
    &:hover {
      color: $warn-hover-color;
    }
    &:hover::after {
      border-color: $warn-hover-color;
    }
    &.is-disabled {
      color: $warn-disabled-color;
    }
  }
  &--error {
    color: $error-color;
    &:hover {
      color: $error-hover-color;
    }
    &:hover::after {
      border-color: $error-hover-color;
    }
    &.is-disabled {
      color: $error-disabled-color;
    }
  }
  &.is-no-underline, &.is-disabled {
    &:hover::after {
      border: none;
    }
  }
}
</style>