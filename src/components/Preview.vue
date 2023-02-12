<template>
  <div class="preview-container">
    <h2 class="preview-container-title">
      {{ el!.__sourceCodeTitle }}
      <Button @click="checkMode = !checkMode">
        {{ checkMode ? '查看代码' : '隐藏代码'  }}
      </Button>
    </h2>
    <div class="preview-container-component">
      <component :is="el"></component>
    </div>
    <div v-if="!checkMode" class="preview-container-code">
      <pre class="language-js">{{ el!.__sourceCode }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/lib/button/index.vue'
const props = defineProps({
  el: {
    type: Object,
    require: true
  }
})
const checkMode = ref(false)
</script>

<style scoped lang="scss">
.preview-container {
  min-width: 400px;
  &-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    padding: 10px 20px;
    button {
      user-select: none;
    }
  }
  &-component {
    padding: 10px 20px;
  }
  &-code {
    border-top: 1px dashed #eaeaea;
    padding: 10px 20px;
  }
}
</style>