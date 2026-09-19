/**
 * Obsidian 风格 Wikilink 解析插件
 *
 * 替代原 docsify 的自定义插件 + file-map.json 方案。
 * 在构建期自动扫描项目内所有 .md 文件，建立「文件名 → URL 路径」映射，
 * 将 [[文件名]]、[[文件名#章节]]、[[文件名|别名]]、[[文件名#章节|别名]]
 * 替换为标准 Markdown 链接。
 */
import fs from 'node:fs'
import path from 'node:path'
import type MarkdownIt from 'markdown-it'

/** 构建「不含扩展名的文件名 → 页面路径」映射 */
function buildFileMap(srcDir: string): Record<string, string> {
  const map: Record<string, string> = {}
  // 需要排除的目录
  const excludeDirs = new Set([
    '.obsidian', '.trae', '.claude', '.vscode', '.git',
    'node_modules', '.vitepress', 'resources', 'attachments',
  ])

  function walk(dir: string) {
    let entries: fs.Dirent[]
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (excludeDirs.has(entry.name)) continue
        walk(full)
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        const stem = entry.name.replace(/\.md$/, '')
        // 跳过以下划线开头的 docsify 特殊文件
        if (stem.startsWith('_')) continue
        // 计算相对于 srcDir 的 URL 路径（正斜杠，无扩展名）
        const rel = path.relative(srcDir, full).replace(/\\/g, '/').replace(/\.md$/, '')
        // 同名文件后者覆盖前者（与 Obsidian shortest 语义一致）
        map[stem] = '/' + rel
      }
    }
  }
  walk(srcDir)
  return map
}

/** markdown-it 插件主体 */
export function wikilinkPlugin(md: MarkdownIt, options: { srcDir: string }) {
  const { srcDir } = options
  const fileMap = buildFileMap(srcDir)

  const regex = /\[\[([^\#\|\]]+)(?:#([^\|\]]+))?(?:\|([^\]]+))?\]\]/g

  md.core.ruler.before('block', 'wikilinks', (state) => {
    state.src = state.src.replace(regex, (match, fileName, anchor, alias) => {
      const name = fileName.trim()
      const target = fileMap[name]
      if (!target) return match // 找不到文件，保留原文
      const display = (alias || fileName).trim()
      let url = target
      if (anchor) url += '#' + anchor.trim()
      return `[${display}](${url})`
    })
  })

  // 开发模式下在控制台输出索引统计
  console.log(`[wikilink] 已索引 ${Object.keys(fileMap).length} 个笔记`)
}
