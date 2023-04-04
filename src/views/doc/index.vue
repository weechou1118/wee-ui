<!-- 文档页 -->
<template>
  <div class="doc-container">
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
      <PrevNext :routes="DocRoutes" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import PrevNext from '@/components/PrevNext.vue'
import DocRoutes from '@/router/doc-routes'

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
      { path: '/doc/button', name: 'Button 按钮' },
      { path: '/doc/dialog', name: 'Dialog 对话框' },
      { path: '/doc/link', name: 'Link 文字链接' },
      { path: '/doc/tag', name: 'Tag 标签' },
      { path: '/doc/input', name: 'Input 输入框' },
      { path: '/doc/switch', name: 'Switch 开关' },
      { path: '/doc/select', name: 'Select 选择器' },
      { path: '/doc/radio', name: 'Radio 单选框' },
      { path: '/doc/divider', name: 'Divider 分割线' },
      { path: '/doc/message', name: 'Message 消息' },
      { path: '/doc/backup', name: 'Backup 回到顶部' },
      { path: '/doc/breadcrumb', name: 'Breadcrumb 面包屑' },
      { path: '/doc/tabs', name: 'Tabs 标签页' },
      // { path: '/doc/affix', name: 'Affix 固钉' },
    ]
  }
])
</script>

<style scoped lang="scss">
aside {
  position: fixed;
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
  height: 100%;
  // 280 + 20
  padding-left: 320px;
  padding-top: 40px;
  overflow: auto;
  padding-bottom: 50px;
}
</style>