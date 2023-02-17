<template>
  <table>
    <tr>
      <th v-for="(item, index) in headerList" :key="index">{{ item }}</th>
    </tr>
    <tr v-for="(trItem, index) in content" :key="index">
      <td v-for="(tdItem, index) in trItem" :key="index">{{ tdItem }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  content: {
    type: Array,
    default: () => []
  }
})

const { content } = props
const headerList = ref(['参数', '描述', '类型', '可选值', '默认值'])
</script>

<style setup lang="scss">
table {
  width: 80%;
  margin-top: 20px;
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