<!-- 文档页 -->
<script setup lang="ts">
import { ref } from 'vue'

const asideList = ref([
  { path: '/doc/button', name: 'Button 按钮' }
])
</script>

<template>
  <div class="content">
    <aside>
      <p class="title">组件</p>
      <ul>
        <li v-for="item in asideList" :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </aside>
    <main class="doc-content-container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  height: calc(100% - 61px);
  aside {
    position: absolute;
    left: 0;
    height: 100%;
    width: 280px;
    box-sizing: border-box;
    padding: 20px 20px 0 30px;
    color: #444;
    border-right: 1px solid #ececec;
    .title {
      font-size: 14px;
      margin: 10px 0;
      font-weight: 500;
    }
    & > ul {
      width: 100%;
      li {
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        list-style: none;
        a {
          display: inline-block;
          width: 100%;
          height: 40px;
          padding-left: 20px;
          border-radius: 10px;
          box-sizing: border-box;
        }
        .router-link-active {
          border-radius: 4px;
          background: rgb(136, 175, 249, .9);
          color: #fff;
        }
      }
    }
  }
  main {
    // 280 + 20
    padding-left: 300px;
  }
}
</style>