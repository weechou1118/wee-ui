import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Doc from '@/views/doc/index.vue'
import Button from '@/views/doc/button/index.vue'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/doc',
    component: Doc,
    children: [
      {
        path: 'button',
        component: Button
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router