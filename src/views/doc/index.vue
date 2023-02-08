<!-- 文档页 -->
<script setup lang="ts">
import { ref } from 'vue'

const asideList = ref([
  { path: '/doc/button', name: 'Button 按钮' }
])
</script>

<template>
  <div id="doc">
    <aside>
      <ul>
        <li v-for="item in asideList" :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </aside>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
#doc {
  display: flex;
  margin-top: 10px;
  aside {
    height: 100%;
    width: 300px;
    padding: 0 10px;
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
  .content {
    width: 100%;
    padding-left: 30px;
  }
}
</style>