import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import { useQiankun } from './micro/register'

const app = createApp(App)
app.use(createPinia()).use(router).mount('#app')

// 启动 qiankun
useQiankun()