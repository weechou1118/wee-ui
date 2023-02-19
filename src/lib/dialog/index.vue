<template>
  <template v-if="modelValue">
    <Teleport to="body">
      <div class="wee-dialog__overlay" @click="OverlayHandle">
      </div>
      <div class="wee-dialog">
        <header class="wee-dialog__header">
          <slot name="title">{{ title }}</slot>
        </header>
        <main class="wee-dialog__main">
          <slot>
            <p>弹窗默认内容</p>
          </slot>
        </main>
        <footer class="wee-dialog__footer">
          <slot name="footer">
            <wee-button @click="cancel">取消</wee-button>
            <wee-button @click="confirm" theme="primary">确认</wee-button>
          </slot>
        </footer>
      </div>
    </Teleport>
    </template>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import WeeButton from '@/lib/button/index.vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '标题'
  },
  content: {
    type: String,
    default: ''
  },
  overlayClosable: {
    type: Boolean,
    default: false
  },
  cancel: {
    type: Function
  },
  confirm: {
    type: Function
  }
})
const emit = defineEmits(['update:modelValue', 'closeDialog'])

const OverlayHandle = () => {
  if (props.overlayClosable) {
    emit('update:modelValue', false)
  }
}
const close = () => {
  emit('update:modelValue', false)
}
const confirm = () => {
  if (props.confirm) {
    props.confirm()
  }
  close()
}
const cancel = () => {
  if (props.cancel) {
    props.cancel()
  }
  close()
}
</script>

<script lang="ts">
export default {
  name: 'WeeDialog'
}
</script>

<style lang="scss">
.wee-dialog {
  position: absolute;
  left: 50%;
  top: 40%;
  background: #fff;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 200px;
  box-shadow: 0 0 1px rgba($color: #000000, $alpha: .8);
  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background: rgba($color: #000000, $alpha: .6);
  }
  &__header {
    padding: 20px;
  }
  &__main {
    padding: 20px;
  }
  &__footer {
    text-align: right;
    padding: 20px;
  }
  .wee-button + .wee-button {
    margin-left: 10px;
  }
}
</style>