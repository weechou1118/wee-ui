<preview>可编辑添加的标签</preview>
<template>
  <div class="row flex">
      <wee-tag 
        v-for="(item, index) in tags"
        :key="item.name"
        :type="item.type"
        @close="handleClose(index)"
        closable
      >{{ item.name }}</wee-tag>
      <wee-button v-if="!showInput" @click="showInput = true">+ 新标签</wee-button>
      <wee-input v-if="showInput" ref="weeInput" @blur="handleBlur"></wee-input>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import WeeTag from '@/lib/tag/index.vue'
import WeeInput from '@/lib/input/index.vue'
import WeeButton from '@/lib/button/index.vue'

const tags = ref([
  { name: '标签一', type: 'primary' },
  { name: '标签二', type: 'success' },
  { name: '标签三', type: 'info' },
  { name: '标签四', type: 'warn' },
  { name: '标签五', type: 'error' },
])

const weeInput = ref()

const handleClose = (i: any) => {
  tags.value.splice(i, 1)
}

const showInput = ref(false)

const handleBlur = (val: string) => {
  if (val) {
    tags.value.push({ name: val, type: 'primary' })
  }
  showInput.value = false
}

watch(showInput, (val) => {
  if (val) {
    nextTick(() => {
      weeInput.value.focus()
    })
  }
})
</script>

<style scoped lang="scss">
.wee-button {
  display: inline-flex;
  height: 30px;
}
</style>