<script setup lang="ts">
/**
 * 主题色切换器（下拉菜单）
 *
 * 在 <html> 上设置 data-theme 属性（green / blue / purple / teal / orange），
 * 与 custom.css 中 html[data-theme='xxx'] 的 CSS 变量分组对应；
 * 选择结果持久化到 localStorage，刷新后保持。
 */
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const THEMES = [
  { key: 'green', label: '绿色', color: '#42b883' },
  { key: 'blue', label: '蓝色', color: '#3b82f6' },
  { key: 'purple', label: '紫色', color: '#8b5cf6' },
  { key: 'teal', label: '青色', color: '#14b8a6' },
  { key: 'orange', label: '橙色', color: '#f97316' },
] as const

type ThemeKey = (typeof THEMES)[number]['key']
const STORAGE_KEY = 'vp-theme-color'

const current = ref<ThemeKey>('blue')
const open = ref(false)

const currentTheme = computed(() => THEMES.find((t) => t.key === current.value) ?? THEMES[0])

let removeClickListener: (() => void) | null = null

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY) as ThemeKey | null
  if (saved && THEMES.some((t) => t.key === saved)) {
    current.value = saved
  }
  document.documentElement.dataset.theme = current.value
  // 点击下拉外部时关闭菜单
  const handler = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.theme-color-switcher')) {
      open.value = false
    }
  }
  document.addEventListener('click', handler)
  removeClickListener = () => document.removeEventListener('click', handler)
})

onBeforeUnmount(() => {
  removeClickListener?.()
})

function toggle() {
  open.value = !open.value
}

function setTheme(key: ThemeKey) {
  current.value = key
  document.documentElement.dataset.theme = key
  localStorage.setItem(STORAGE_KEY, key)
  open.value = false
}
</script>

<template>
  <div class="theme-color-switcher">
    <button
      class="theme-color-trigger"
      type="button"
      :aria-haspopup="true"
      :aria-expanded="open"
      :title="'主题色：' + currentTheme.label"
      @click="toggle"
    >
      <span class="theme-color-dot" :style="{ backgroundColor: currentTheme.color }" />
      <span class="theme-color-label">{{ currentTheme.label }}</span>
      <span class="theme-color-arrow" aria-hidden="true">▾</span>
    </button>

    <div v-if="open" class="theme-color-menu" role="menu">
      <button
        v-for="t in THEMES"
        :key="t.key"
        type="button"
        class="theme-color-option"
        :class="{ active: current === t.key }"
        role="menuitemradio"
        :aria-checked="current === t.key"
        @click="setTheme(t.key)"
      >
        <span class="theme-color-dot" :style="{ backgroundColor: t.color }" />
        <span class="theme-color-option-label">{{ t.label }}</span>
        <span v-if="current === t.key" class="theme-color-check" aria-hidden="true">✓</span>
      </button>
    </div>
  </div>
</template>