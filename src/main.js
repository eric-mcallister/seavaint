import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const app = createApp(App)

app.use(router)

app.mount('#app')
