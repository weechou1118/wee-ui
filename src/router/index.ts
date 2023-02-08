import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/home.vue'
import Doc from '@/components/doc.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/doc', component: Doc }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router