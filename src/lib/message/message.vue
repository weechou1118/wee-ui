<template>
  <Transition name="fade" appear @before-leave="onClose" @after-leave="$emit('destroy')">
    <div v-if="showMessage" class="wee-message">
      <i v-if="type === 'success'">
        <CheckmarkCircleOutline />
      </i>
      <i v-else>
        <InformationCircleOutline />
      </i>
      <slot>
        <div class="wee-message-content">{{ message }}</div>
      </slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { messageProps, messageEmits } from './message'
import { CheckmarkCircleOutline, InformationCircleOutline } from '@vicons/ionicons5'
const showMessage = ref(true)

const props = defineProps(messageProps)
const emits = defineEmits(messageEmits)

onMounted(() => {
  setTimeout(() => {
    close()
  }, 2000);
})

const offsetTop = computed(() => props.offset + 'px')

const close = () => {
  showMessage.value = false
}
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

