<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { watch } from 'vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const { Layout } = DefaultTheme
const { page } = useData()

// 访问首页时隐藏导航「首页」项，其他页面显示（便于返回首页）
watch(
  () => page.value.relativePath,
  (path) => {
    document.documentElement.classList.toggle('home-hide-nav-home', path === 'index.md')
  },
  { immediate: true },
)
</script>

<template>
  <Layout>
    <!-- 主题色切换器：插槽渲染在导航栏最右侧，由 custom.css 的 flex order 重排到明暗切换旁边 -->
    <template #nav-bar-content-after>
      <ThemeSwitcher />
    </template>
  </Layout>
</template>
