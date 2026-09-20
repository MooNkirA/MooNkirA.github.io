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
    title: 'MooN Code Note',
    description: '个人编程笔记 —— AI、分布式、全栈、数据库与 DevOps',
    lang: 'zh-CN',
    // 用户站点（MooNkirA.github.io），base 为根路径
    base: '/',

    // ===== 主题配置 =====
    themeConfig: {
      siteTitle: 'MooNkirA Code Note',

      // 顶部导航
      nav: [
        { text: '首页', link: '/' },
        {
          text: '语雀',
          link: 'https://www.yuque.com/moonkira/code-note',
        },
        { text: '编程资源分享', link: '/其他/编程资源分享' },
        { text: 'Github', link: 'https://github.com/MooNkirA/MooNkirA.github.io' },
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
              noResultsText: '未找到结果',
              footer: { selectText: '选择', navigateText: '切换' },
            },
          },
        },
      },

      // 上一页 / 下一页
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },

      // 页脚
      footer: {
        message: 'I know where dry desert ends, green grass grows · MooN',
      },

      // 返回顶部
      returnToTopLabel: '返回顶部',

      // 编辑链接（可选，指向 GitHub）
      editLink: {
        pattern: 'https://github.com/MooNkirA/MooNkirA.github.io/edit/main/:path',
        text: '在 GitHub 上编辑此页',
      },
    },

    // ===== Markdown 增强 =====
    markdown: {
      lineNumbers: false,
      html: false, // 禁用原始 HTML，避免旧笔记中的裸 HTML 导致 Vue 编译错误
      config(md) {
        // html-guard 在渲染后处理：从被转义的文本中恢复白名单 span/font 标签
        md.use(htmlGuardPlugin)
        md.use(wikilinkPlugin, { srcDir })
      },
    },

    // ===== Vue 编译器配置 =====
    // 注意：不要修改 delimiters，会破坏 VitePress 主题组件自身的 {{ }} 插值渲染
    // 笔记中的 JSX {{ }} 问题通过在 markdown 代码块中自然处理
    vue: {
      template: {
        compilerOptions: {},
      },
    },

    // ===== 构建输出 =====
    outDir: '.vitepress/dist',
    cleanUrls: true,

    // 不监听的目录
    ignoreDeadLinks: true, // 忽略死链（旧笔记中有一些失效的图片/链接引用）

    // 排除非文档文件和不需要处理的目录
    srcExclude: ['**/images/**', '**/attachments/**', '**/resources/**', 'AGENTS.md', '**/.obsidian/**', '**/.trae/**', '**/.claude/**'],

    // ===== Vite 配置 =====
    // 强制预构建 CJS 模块，解决 dev 模式下 ESM 互操作问题
    // 注意：必须写与 mermaid 源码中完全一致的导入写法（带 .js 后缀）。
    // mermaid 的 dist 里是 `import ... from 'fastdom/extensions/fastdom-promised.js'`，
    // Vite 按精确字符串匹配预构建条目，不带 .js 的条目不会命中，会退化为直接
    // 下发原始 CJS 文件，导致浏览器报 "does not provide an export named 'default'"。
    vite: {
      optimizeDeps: {
        include: [
          'dayjs',
          '@braintree/sanitize-url',
          'fastdom',
          'fastdom/extensions/fastdom-promised',
          'fastdom/extensions/fastdom-promised.js',
          'debug',
          'cytoscape',
          'cytoscape-cose-bilkent',
        ],
      },
    },
  }),
)
