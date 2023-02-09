import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Doc from '@/views/doc/index.vue'
import docRouters from './doc-routers'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/doc',
    component: Doc,
    children: docRouters
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router