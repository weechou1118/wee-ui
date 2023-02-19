<template>
  <div class="preview-container">
    <h2 class="preview-container-title">
      {{ el!.__sourceCodeTitle }}
      <wee-button @click="checkMode = !checkMode">
        {{ checkMode ? '隐藏代码' : '查看代码'  }}
      </wee-button>
    </h2>
    <div class="preview-container-component">
      <component :is="el"></component>
    </div>
    <div v-if="checkMode" class="preview-container-code">
      <pre class="language-html" v-html="html"></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Prism from 'prismjs'
import "prismjs/themes/prism.css";
const props = defineProps({
  el: {
    type: Object,
    require: true
  }
})
const checkMode = ref(false)
const html = computed(() => {
  return Prism.highlight(
    props.el!.__sourceCode,
    Prism.languages.html,
    'html'
  )
})
</script>

<style scoped lang="scss">
.preview-container {
  min-width: 400px;
  border: 1px solid #eaeaea;
  margin-bottom: 40px;
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
    overflow: hidden;
  }
  &-code {
    border-top: 1px dashed #eaeaea;
    padding: 10px 20px;
  }
}
</style>