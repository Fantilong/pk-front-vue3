// import 'reset-css/reset.css'
import './assets/main.scss'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-v4.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue/client' // <--

import App from './App.vue'
import router from './router'

import('uno:icons.css')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createHead())

app.mount('#app')
