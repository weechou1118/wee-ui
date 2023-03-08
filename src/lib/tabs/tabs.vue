<template>
  <div class="wee-tabs" :class="classes" ref="container">
    <span v-for="label in labels" :key="label" class="wee-tab" :class="{ 'is-active': modelValue === label }"
      @click="handleClick(label)" :ref="getItemRef(label)">
      {{ label }}
    </span>
    <div v-if="type === 'line'" class="wee-tabs-indicator" ref="indicator"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots, ref, onMounted, watchEffect } from 'vue'
const emits = defineEmits(['update:modelValue', 'changeTab'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'line'
  }
})

const slots = useSlots().default()

const selectedItem = ref<HTMLElement>(null)
const container = ref<HTMLElement>(null)
const indicator = ref<HTMLElement>(null)

const labels = slots.map(item => item.props.label)
// const current = computed(() => {
//   return slots.find((tab) => tab.props.label === props.modelValue)
// })

onMounted(() => {
  watchEffect(() => {
    renderIndicator()
  })
})

const renderIndicator = () => {
  if (props.type !== 'line') return
  const { left: left1, width } = selectedItem.value.getBoundingClientRect()
  const { left: left2 } = container.value.getBoundingClientRect()
  indicator.value.style.width = width + 'px'
  indicator.value.style.left = (left1 - left2) + 'px'
}

const getItemRef = (label) => {
  return (ref) => {
    if (label === props.modelValue) selectedItem.value = ref
  }
}

const classes = computed(() => {
  return {
    [`wee-tabs-${props.type}`]: props.type
  }
})

const handleClick = (val) => {
  emits('update:modelValue', val)
  emits('changeTab')
}

</script>

<style scoped lang="scss">
.wee-tabs {
  display: flex;
  border-bottom: 1px solid #eaeaea;
  position: relative;

  &-indicator {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: #409eff;
    transition: all .2s ease;
  }

  .wee-tab {
    display: inline-block;
    margin-right: 20px;
    padding-bottom: 4px;
    cursor: pointer;
    background-color: transparent;
    transition: background-color .3s ease;

    &.is-active {
      color: #409eff;
      // border-bottom: 2px solid #409eff;
    }
  }

  &-card {
    background-color: #f7f7fa;
    padding: 10px;
    border-bottom: none;

    .wee-tab {
      border-bottom: none;
      color: #000;
      padding: 10px 20px;
      border-radius: 10px;
      flex: 1;
      text-align: center;

      &.is-active {
        background-color: #fff;
      }
    }
  }
}
</style>
