<preview>为 Affix 指定容器</preview>
<template>
  <div class="affix-container">
    <wee-affix target=".affix-container" :offset="80" position="top">
      <wee-button type="primary">距离顶部80px固定</wee-button>
    </wee-affix>
  </div>
</template>

<script setup lang="ts">
import WeeAffix from '@/lib/affix/index.vue'

</script>

<style scoped lang="scss">
.affix-container {
  text-align: center;
  background-color: #a0cfff;
  height: 900px;
}
</style>