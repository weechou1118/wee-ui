import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Doc from '@/views/doc/index.vue'
import docRoutes from './doc-routes'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/doc',
    component: Doc,
    redirect: '/doc/intro',
    children: docRoutes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router