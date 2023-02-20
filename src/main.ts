import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import './assets/styles/normalize.css'
import './assets/styles/style.scss'
import WeeUi from './lib'
import Preview from '@/components/Preview.vue'
import Doc from '@/components/Doc.vue'

const app = createApp(App)
app.component('Preview', Preview)
app.component('Doc', Doc)
app.use(Router)
app.use(WeeUi)
app.mount('#app')
