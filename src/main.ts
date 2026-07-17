// import 'reset-css/reset.css'
import './assets/main.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-v4.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import('uno:icons.css')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
