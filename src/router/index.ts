import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Doc from '@/views/doc/index.vue'
import Intro from '@/views/doc/intro/index.vue'
import Button from '@/views/doc/button/index.vue'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/doc',
    component: Doc,
    children: [
      {
        path: 'intro',
        component: Intro
      },
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