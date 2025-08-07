import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [react(), qiankun('react-sub', { useDevMode: true })],
  server: { port: 5175, cors: true },
  base: 'react-sub'
})