<preview>基本用法</preview>
<template>
  <div class="row">
    <wee-affix :offset="80" position="top">
      <wee-button type="primary">距离顶部80px固定</wee-button>
    </wee-affix>
  </div>
</template>

<script setup lang="ts">
import WeeAffix from '@/lib/affix/index.vue'

</script>