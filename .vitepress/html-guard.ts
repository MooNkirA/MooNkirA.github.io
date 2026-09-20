/**
 * HTML 守卫 + 白名单标签恢复插件
 *
 * 策略：配合 markdown.html=false 使用。
 * - markdown-it 的 html:false 会把所有原始 HTML 转义为 &lt; &gt;
 * - 本插件在渲染后处理阶段，把白名单标签（span/b/i 等）从转义状态恢复为真实 HTML
 * - 这样既避免了裸 HTML 导致 Vue 编译错误，又保留了笔记中的彩色强调样式
 *
 * 注意：恢复逻辑已启用。白名单默认只放行行内样式标签（span/b/i 等），
 * 块级标签（ul/div/table 等）不在白名单内，仍保持转义——这些 docsify 遗留结构
 * 应直接改写成标准 Markdown，而不是靠 HTML 渲染。
 * 另放行少量有真实用途且 Vue 模板编译器能识别的标签：
 * details/summary（折叠块）、abbr（悬浮注释）、progress（进度条）。
 * 注意：center 不能放行——Vue 编译器不识别该标签，会按自定义组件解析，
 * 导致 SSR 产物中该元素内容整体丢失（实测 MySQL-索引.md 的居中标题在构建后消失）。
 * 需要居中请用 <span style="display:block;text-align:center;">。
 */
import type MarkdownIt from 'markdown-it'

const ALLOWED_TAGS = new Set([
  'span', 'font', 'b', 'i', 'em', 'strong', 'u', 'small', 'sub', 'sup', 'mark',
  'br', 'wbr',
  'details', 'summary', 'abbr', 'progress',
])

/**
 * 从被转义的 HTML 文本中恢复白名单标签
 */
function restoreAllowedTags(html: string): string {
  // 先把块级代码块 <pre>...</pre> 抠出来保护
  const codeBlocks: string[] = []
  let result = html.replace(/<pre[^>]*>[\s\S]*?<\/pre>/g, (m) => {
    codeBlocks.push(m)
    return `\x00CB${codeBlocks.length - 1}\x00`
  })

  // 再把行内代码 <code>...</code> 抠出来保护
  const inlineCodes: string[] = []
  result = result.replace(/<code[^>]*>[\s\S]*?<\/code>/g, (m) => {
    inlineCodes.push(m)
    return `\x00IC${inlineCodes.length - 1}\x00`
  })

  // 恢复转义的标签
  result = result.replace(
    /&lt;(\/)?([a-zA-Z][a-zA-Z0-9-]*)([\s\S]*?)&gt;/g,
    (match, slash, tagName, attrs) => {
      if (!ALLOWED_TAGS.has(tagName.toLowerCase())) return match
      const restoredAttrs = attrs
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&')

      const slashStr = slash || ''
      return `<${slashStr}${tagName}${restoredAttrs}>`
    },
  )

  // 还原行内代码
  result = result.replace(/\x00IC(\d+)\x00/g, (_, idx) => inlineCodes[parseInt(idx, 10)])
  // 还原块级代码块
  result = result.replace(/\x00CB(\d+)\x00/g, (_, idx) => codeBlocks[parseInt(idx, 10)])

  return result
}

/** markdown-it 插件主体 */
export function htmlGuardPlugin(md: MarkdownIt) {
  // 保存原始 render 方法
  const defaultRender = md.render.bind(md)

  // 在 markdown-it 解析前，转义 {{ 和 }}，避免 Vue 编译器把代码块中的 JSX {{ }} 误判为模板插值
  // 只影响 markdown 内容，不影响 VitePress 主题组件自身的插值
  md.core.ruler.before('block', 'escape_mustache', (state) => {
    state.src = state.src
      .replace(/\{\{/g, '&#123;&#123;')
      .replace(/\}\}/g, '&#125;&#125;')
  })

  // 重写 render 方法，在渲染后处理 HTML
  // 恢复白名单行内标签（span/font/b/i 等），块级标签不放行
  md.render = (src: string, env?: any): string => {
    let html = defaultRender(src, env)
    html = restoreAllowedTags(html)
    return html
  }
}
