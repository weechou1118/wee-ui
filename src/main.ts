import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import './assets/styles/normalize.css'
import './assets/styles/style.scss'
import WeeUi from './lib'

const app = createApp(App)
app.use(Router)
app.use(WeeUi)
app.mount('#app')
