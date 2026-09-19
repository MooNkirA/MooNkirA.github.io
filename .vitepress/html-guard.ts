/**
 * HTML 守卫插件（行级状态机方案）
 *
 * 旧笔记中存在大量未放入代码块的 HTML/Vue 模板示例（如 <BaseInput>、<el-table>、<template> 等），
 * 这些内容本应作为代码展示，却被 VitePress 当作 Vue 模板编译，导致 "Element is missing end tag" 构建错误。
 *
 * 策略：逐行扫描源码，跟踪代码块围栏状态，只对非代码块行做 HTML 转义。
 * 行内代码（反引号）在行级处理时先抠出保护。
 */
import type MarkdownIt from 'markdown-it'

const ALLOWED_TAGS = new Set([
  'span', 'font', 'b', 'i', 'em', 'strong', 'u', 'small', 'sub', 'sup', 'mark',
  'br', 'wbr',
])

/** 从一行文本中抠出行内代码（`...`），保护其中的内容不被 HTML 转义 */
function escapeInlineLine(line: string): string {
  // 先抠出行内代码
  const inlineCodes: string[] = []
  let result = line.replace(/`[^`\n]+`/g, (m) => {
    inlineCodes.push(m)
    return `\x00IC${inlineCodes.length - 1}\x00`
  })

  // 转义 HTML 注释
  result = result.replace(/<!--[^-]*(--(?!>)[^-]*)*-->/g, (m) =>
    m.replace(/</g, '&lt;').replace(/>/g, '&gt;'),
  )

  // 转义非白名单 HTML 标签
  result = result.replace(
    /<\/?([a-zA-Z][a-zA-Z0-9-]*)[^>]*>/g,
    (match, tagName) => {
      if (ALLOWED_TAGS.has(tagName.toLowerCase())) return match
      return match.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    },
  )

  // 还原行内代码
  result = result.replace(/\x00IC(\d+)\x00/g, (_, idx) => inlineCodes[parseInt(idx, 10)])

  return result
}

/** 逐行扫描，跟踪代码块围栏，只转义非代码块行 */
function escapeUnsafeHtml(src: string): string {
  const lines = src.split('\n')
  let inCodeFence = false
  let fenceChar = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // 检测代码块围栏行（以 ``` 或 ~~~ 开头）
    const fenceMatch = line.match(/^\s*(```|~~~)/)
    if (fenceMatch) {
      const fc = fenceMatch[1][0] // '`' 或 '~'
      if (!inCodeFence) {
        // 打开代码块
        inCodeFence = true
        fenceChar = fc
      } else if (fc === fenceChar) {
        // 关闭代码块（同类型围栏）
        inCodeFence = false
        fenceChar = ''
      }
      // 如果不同类型，忽略（正常 markdown 不会出现）
      continue // 围栏行本身不转义
    }

    if (inCodeFence) {
      // 代码块内部，完全不处理
      continue
    }

    // 非代码块行，做 HTML 转义
    lines[i] = escapeInlineLine(line)
  }

  return lines.join('\n')
}

/** markdown-it 插件主体 */
export function htmlGuardPlugin(md: MarkdownIt) {
  md.core.ruler.before('block', 'html_guard', (state) => {
    state.src = escapeUnsafeHtml(state.src)
  })
}
