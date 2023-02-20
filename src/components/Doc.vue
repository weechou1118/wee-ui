<template>
  <table>
    <tr>
      <th v-for="(item, index) in headerProps" :key="index">{{ item }}</th>
    </tr>
    <tr v-for="(trItem, index) in content" :key="index">
      <td v-for="(tdItem, index) in trItem" :key="index">{{ tdItem }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    values: ['attr', 'slot', 'event'],
    default: 'attr'
  },
  content: {
    type: Array,
    default: () => ([])
  }
})

const { type, content } = props
const headerProps = computed(() => {
  switch (type) {
    case 'attr':
      return ['参数', '描述', '类型', '可选值', '默认值']
    case 'slot':
      return ['插槽名', '描述']
    case 'event':
      return ['事件名', '描述', '回调参数']
  }
})
</script>

<style setup lang="scss">
table {
  width: 80%;
  margin-top: 20px;
  margin-bottom: 30px;
  tr {
    th {
      text-align: left;
    }
    th, td {
      border-bottom: 1px solid #dcdfe6;
      height: 45px;
    }
  } 
}
</style>