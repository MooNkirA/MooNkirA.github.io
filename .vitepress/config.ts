import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { wikilinkPlugin } from './wikilink'
import { generateSidebar } from './sidebar'
import { htmlGuardPlugin } from './html-guard'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
// srcDir 即项目根目录（VitePress 默认以 config 文件所在目录的上一级为 srcDir）
const srcDir = resolve(__dirname, '..')

export default withMermaid(
  defineConfig({
    // ===== 站点信息 =====
    title: 'MooNkirA Code Note',
    description: '个人编程笔记 —— Java、分布式、前端、数据库与 DevOps',
    lang: 'zh-CN',
    // 用户站点（MooNkirA.github.io），base 为根路径
    base: '/',

    // ===== 主题配置 =====
    themeConfig: {
      siteTitle: 'MooNkirA Code Note',

      // 顶部导航
      nav: [
        { text: '首页', link: '/' },
        { text: '面试手册', link: '/面试手册/' },
        { text: '编程资源分享', link: '/其他/编程资源分享' },
        {
          text: '语雀',
          link: 'https://www.yuque.com/moonkira/code-note',
        },
      ],

      // 侧边栏：自动生成
      sidebar: generateSidebar(srcDir),

      // 大纲（右侧目录）
      outline: {
        level: [2, 3, 4],
        label: '本页目录',
      },

      // 本地全文搜索（替代 docsify search 插件）
      search: {
        provider: 'local',
        options: {
          translations: {
            button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
            modal: {
              displayDetails: '显示详细列表',
              resetButtonTitle: '清除查询',
              backButtonTitle: '关闭搜索',
              noResultsText: '😅 找不到结果',
              footer: { selectText: '选择', navigateText: '切换' },
            },
          },
        },
      },

      // 上一页 / 下一页
      docFooter: {
        prev: '上一篇',
        next: '下一篇',
      },

      // 页脚
      footer: {
        message: '基于 VitePress 构建 · MooNkirA',
      },

      // 返回顶部
      returnToTopLabel: '返回顶部',

      // 编辑链接（可选，指向 GitHub）
      editLink: {
        pattern: 'https://github.com/MooNkirA/MooNkirA.github.io/edit/main/:path',
        text: '在 GitHub 上编辑此页',
      },

      // 最后更新时间
      lastUpdated: {
        text: '最后更新',
        formatOptions: {
          dateStyle: 'short',
          timeStyle: 'short',
        },
      },
    },

    // ===== Markdown 增强 =====
    markdown: {
      lineNumbers: false,
      html: false, // 禁用原始 HTML，避免旧笔记中的裸 HTML 导致 Vue 编译错误
      config(md) {
        // 放行需要的内联样式标签（span/font/b/i 等），其余 HTML 全部转义
        md.use(htmlGuardPlugin)
        md.use(wikilinkPlugin, { srcDir })
      },
    },

    // ===== Vue 编译器配置 =====
    // 笔记中包含 JSX/TSX 代码示例（如 style={{ backgroundColor }}），
    // 其中的 {{ }} 会被 Vue 误判为模板插值。改成分隔符禁用插值解析。
    vue: {
      template: {
        compilerOptions: {
          delimiters: ['\u0000{{', '}}\u0000'],
        },
      },
    },

    // ===== Mermaid =====
    mermaid: {
      // 明暗主题自动切换
    },

    // ===== 构建输出 =====
    outDir: '.vitepress/dist',
    cleanUrls: true,

    // 不监听的目录
    ignoreDeadLinks: true, // 忽略死链（旧笔记中有一些失效的图片/链接引用）

    // 排除 images 目录（无扩展名图片文件会被 Vite 误判为 JS 模块）
    srcExclude: ['**/images/**'],
  }),
)
