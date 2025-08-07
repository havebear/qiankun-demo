<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/vue3-sub">Vue3 子应用</router-link> |
      <router-link to="/vue3-sub2">Vue3 子应用2</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  padding: 10px;
  background: #f0f0f0;
}
</style>