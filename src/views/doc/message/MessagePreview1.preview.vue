<preview>基本用法</preview>
<template>
  <div class="row">
    <wee-button @click="open">show message</wee-button>
    <wee-button @click="openVN">use VNode</wee-button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import WeeButton from '@/lib/button/index.vue'
import WeeMessage from '@/lib/message'

const open = () => {
  WeeMessage('this is a message')
}

const openVN = () => {
  WeeMessage({
    message: h('p', null, [
      h('span', { style: 'display: inline-block; margin-left: 10px; margin-bottom: 2px' }, '内容可以是：'),
      h('i', { style: 'color: teal' }, 'VNode')
    ])
  })
}
</script>
