<preview>卡片式</preview>
<template>
  <div class="row">
    <wee-tabs v-model="activeTab" type="card">
      <wee-tab label="只因">只因</wee-tab>
      <wee-tab label="你">你</wee-tab>
      <wee-tab label="太美">太美</wee-tab>
    </wee-tabs>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import WeeTabs from '@/lib/tabs/tabs.vue'
import WeeTab from '@/lib/tabs/tab.vue'

const activeTab = ref('只因')
</script>

<style scoped lang="scss"></style>
