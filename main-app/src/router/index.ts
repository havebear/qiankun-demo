import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/home/index.vue') },
  /* 通配符：qiankun 会接管子应用内部路由 */
  { path: '/vue3-sub', component: () => import('@/views/empty/index.vue') },
  { path: '/vue3-sub2', component: () => import('@/views/empty/index.vue') },
  { path: '/react-sub', component: () => import('@/views/empty/index.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/404/index.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})