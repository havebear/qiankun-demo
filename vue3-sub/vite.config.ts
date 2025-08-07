import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [vue(), qiankun('vue3-sub', { useDevMode: true })],
  server: { port: 5174, cors: true },
  base: 'vue3-sub'
})
