<template>
  <div id="sub-container" style="margin-top: 20px" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useQiankun } from '@/micro/register'

/* 只有路由切到 /vue3-sub 或 /react-sub 时才触发 */
onMounted(useQiankun)
</script>