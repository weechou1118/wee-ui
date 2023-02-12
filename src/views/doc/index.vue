<!-- 文档页 -->
<script setup lang="ts">
import { reactive } from 'vue'

const asideList = reactive([
  {
    title: '文档',
    children: [
      { path: '/doc/intro', name: '介绍' }
    ]
  },
  {
    title: '通用组件',
    children: [
      { path: '/doc/button', name: 'Button 按钮' }
    ]
  }
])
</script>

<template>
  <div class="content">
    <aside>
      <template v-for="item in asideList">
        <p class="title">{{ item.title }}</p>
        <ul>
          <li v-for="child in item.children" :key="child.name">
            <router-link :to="child.path">{{ child.name }}</router-link>
          </li>
        </ul>
      </template>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  height: calc(100% - 60px);
  width: 100%;
  position: absolute;
  top: 60px;
  overflow: auto;
  aside {
    position: absolute;
    left: 0;
    height: calc(100% - 60px);
    width: 280px;
    box-sizing: border-box;
    padding: 20px 20px 0 30px;
    color: #444;
    border-right: 1px solid #ececec;
    .title {
      font-size: 14px;
      margin: 10px 0;
      font-weight: 500;
      user-select: none;
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
    width: 100%;
  }
}
</style>