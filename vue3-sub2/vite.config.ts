import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [vue(), qiankun('vue3-sub2', { useDevMode: true })],
  server: { port: 5175, cors: true },
  base: 'vue3-sub2'
})
