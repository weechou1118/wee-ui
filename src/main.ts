import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/home.vue'
import Doc from '@/components/doc.vue'
import './assets/normalize.css'

const routes = [
  { path: '/', component: Home },
  { path: '/doc', component: Doc }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)

app.mount('#app')
