/**
 * 侧边栏自动生成器
 *
 * 扫描项目目录树，为每个一级分类生成 VitePress 侧边栏配置。
 * 目录 → 可折叠分组，.md 文件 → 链接项。
 */
import fs from 'node:fs'
import path from 'node:path'
import type { DefaultTheme } from 'vitepress'

type SidebarItem = DefaultTheme.SidebarItem

const EXCLUDE_DIRS = new Set([
  '.obsidian', '.trae', '.claude', '.vscode', '.git',
  'node_modules', '.vitepress', 'resources', 'attachments',
  'images',
])

/** 一级分类目录（与 README 索引分区对应） */
const CATEGORIES = [
  'AI',
  'Java',
  'JavaWeb',
  'JVM',
  '后端框架',
  'Frontend',
  'Database',
  'DevOps',
  '分布式微服务',
  '并发编程',
  'Linux',
  'Python',
  '面试手册',
  '项目资料',
  '其他',
]

/** 自然排序：让 "10" 排在 "2" 后面 */
function naturalCompare(a: string, b: string): number {
  return a.localeCompare(b, 'zh-CN', { numeric: true, sensitivity: 'base' })
}

/** 把文件名转成可读标题：去掉 .md，替换常见分隔符 */
function fileToTitle(filename: string): string {
  return filename.replace(/\.md$/, '').replace(/[-_]/g, ' ')
}

/** 递归扫描目录，生成侧边栏树 */
function buildSidebarTree(dir: string, basePath: string): SidebarItem[] {
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return []
  }

  const items: SidebarItem[] = []
  const dirs: { name: string; path: string }[] = []
  const files: { name: string; path: string }[] = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (EXCLUDE_DIRS.has(entry.name) || entry.name.startsWith('.')) continue
      dirs.push({ name: entry.name, path: path.join(dir, entry.name) })
    } else if (entry.isFile() && entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
      files.push({ name: entry.name, path: path.join(dir, entry.name) })
    }
  }

  // 当前目录下的 .md 文件作为顶层项
  files.sort((a, b) => naturalCompare(a.name, b.name))
  for (const f of files) {
    const stem = f.name.replace(/\.md$/, '')
    const url = (basePath + '/' + stem).replace(/\\/g, '/')
    items.push({ text: fileToTitle(stem), link: url })
  }

  // 子目录作为可折叠分组
  dirs.sort((a, b) => naturalCompare(a.name, b.name))
  for (const d of dirs) {
    const subPath = basePath + '/' + d.name
    const children = buildSidebarTree(d.path, subPath)
    if (children.length > 0) {
      items.push({
        text: d.name,
        collapsed: true,
        items: children,
      })
    }
  }

  return items
}

/** 生成完整的侧边栏配置对象 */
export function generateSidebar(srcDir: string): DefaultTheme.Config['sidebar'] {
  const sidebar: Record<string, SidebarItem[]> = {}
  for (const cat of CATEGORIES) {
    const catDir = path.join(srcDir, cat)
    if (!fs.existsSync(catDir)) continue
    const tree = buildSidebarTree(catDir, '/' + cat)
    if (tree.length > 0) {
      sidebar['/' + cat + '/'] = tree
    }
  }
  return sidebar
}
