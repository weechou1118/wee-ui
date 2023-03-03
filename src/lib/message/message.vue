<template>
  <Transition :duration="300" name="fade" appear @before-leave="onClose" @after-leave="$emit('destroy')">
    <div 
      v-show="showMessage"
      class="wee-message"
      :class="classes"
      :id="id"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
    >
      <i>
        <component :is="getIconsType"></component>
      </i>
      <slot>
        <div class="wee-message-content">{{ message }}</div>
      </slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, toRefs, onUnmounted } from 'vue'
import { messageProps, messageEmits } from './message'
import { CheckmarkCircleOutline, InformationCircleOutline, WarningOutline, BugOutline } from '@vicons/ionicons5'
const showMessage = ref(false)

const props = defineProps(messageProps)
defineEmits(messageEmits)

const { type } = toRefs(props)
let timer: any = undefined

onMounted(() => {
  startTimer()
  showMessage.value = true

  window.addEventListener('keydown', keydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', keydown)
})

const getIconsType = computed(() => {
  switch(type.value) {
    case 'success':
      return CheckmarkCircleOutline
    case 'warn':
      return WarningOutline
    case 'error':
      return BugOutline
    default:
      return InformationCircleOutline
  }
})

// 鼠标移入移除控制计时器
const handleEnter = () => {
  clearTimer()
}

const handleLeave = () => {
  startTimer()
}

// 计时器控制显隐
const startTimer = () => {
  timer = setTimeout(() => {
    if (showMessage.value) close()
  }, props.duration);
}

const clearTimer = () => {
  clearTimeout(timer)
  timer = undefined
}

function keydown({ code }: KeyboardEvent) {
  if (code === "Escape") {
    // press esc to close the message
    if (showMessage.value) {
      close();
    }
  } else {
    startTimer(); // resume timer
  }
}

const offsetTop = computed(() => props.offset + 'px')

const classes = computed(() => {
  return {
    [`is-${type.value}`]: type.value
  }
})

const close = () => {
  showMessage.value = false
}

// const keydown = ({ code }) => {
//   console.log(code)
// }

</script>

<style scoped lang="scss">
.wee-message {
  position: fixed;
  min-width: 250px;
  height: 50px;
  top: v-bind(offsetTop);
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: #e0e0e6 0 0 0 1px;
  z-index: 1;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 5px;
  text-align: center;

  &-content {
    margin-left: 10px;
    margin-bottom: 2px;
  }

  i {
    display: flex;
    align-items: center;

  }

  svg {
    width: 1.5em;
    height: 1.5em;
    color: #a2a2a5;
  }

  &.is-success {
    box-shadow: $success-disabled-color 0 0 0 1px;
    background-color: #e1f3d8;
    svg {
      color: $success-color;
    }
  }
  &.is-warning {
    box-shadow: $warn-disabled-color 0 0 0 1px;
    background-color: #fdf6ec;
    svg {
      color: $warn-color;
    }
  }
  &.is-error {
    box-shadow: $error-disabled-color 0 0 0 1px;
    background-color: #fef0f0;
    svg {
      color: $error-color;
    }
  }
}
</style>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

