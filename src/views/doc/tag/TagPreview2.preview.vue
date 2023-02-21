<preview>可关闭的标签</preview>
<template>
  <div class="row">
      <Tag 
        v-for="(item, index) in tags"
        :key="item.name"
        :type="item.type"
        @close="handleClose(index)"
        closable
      >{{ item.name }}</Tag>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tag from '@/lib/tag/index.vue'

const tags = ref([
  { name: '标签一', type: 'primary' },
  { name: '标签二', type: 'success' },
  { name: '标签三', type: 'info' },
  { name: '标签四', type: 'warn' },
  { name: '标签五', type: 'error' },
])

const handleClose = (i: any) => {
  tags.value.splice(i, 1)
}
</script>