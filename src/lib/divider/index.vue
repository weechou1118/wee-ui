<template>
  <div class="wee-divider" :class="classes">
    <div v-if="direction === 'horizontal'" class="wee-divider-title">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  direction: {
    type: String,
    value: ['horizontal', 'vertical'],
    default: 'horizontal'
  },
  contentPosition: {
    type: String,
    default: ''
  }
})

const classes = computed(() => {
  return {
    'is-left': props.contentPosition === 'left',
    'is-right': props.contentPosition === 'right',
    [`is-${props.direction}`]: props.direction
  }
})

</script>

<style scoped lang="scss">
.wee-divider {
  &.is-horizontal {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #eaeaea;
    margin: 20px 0;

    .wee-divider-title {
      position: absolute;
      left: 50%;
      height: 20px;
      line-height: 20px;
      transform: translateX(-50%);
      background-color: #fff;
      padding: 10px;
      top: -20px;
    }

    &.is-left .wee-divider-title {
      left: 10%;
    }

    &.is-right .wee-divider-title {
      left: 85%;
    }
  }

  &.is-vertical {
    display: inline-block;
    border-right: 1px solid #ababab;
    margin: 0 10px;
    height: 16px;
  }
}
</style>
