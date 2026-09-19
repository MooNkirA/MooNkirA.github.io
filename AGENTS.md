# AGENTS.md

本文件为 AI 编码助手（Claude Code、Qoder、Trae 等）在本仓库中工作时提供指导说明。

## 项目概述

这是一个个人编程笔记仓库（“MooNkirA 的代码笔记”），按技术主题组织成体系化的中文技术文档。全仓库约 413 篇 Markdown 笔记，同时是 **Obsidian 笔记库** 和 **VitePress 静态文档站**（在线地址 https://moonkira.github.io/ ）。

内容重心：`分布式微服务/`（86 篇）、`项目资料/`（78 篇）、`后端框架/`（47 篇）、`Frontend/`（35 篇）。

## 写作风格：动手前必读

<span style="color: red;">**本仓库笔记的书写风格由一个 Skill 单独维护，不要凭感觉改写。**</span>

- 权威来源：`.trae/skills/moon-note-style/SKILL.md`（核心约定 + 骨架模板 + 12 项校对清单），细则见同目录 `reference.md`。
- 新建、改写、补全、校对任何一篇笔记前，先读该 Skill 并按其产出；本文件不重复其规则，以免两处漂移。

最容易被违反的几条，先行提示：

| 约定 | 说明 |
| :--- | :--- |
| 正文从 `##` 起 | 不用 `#`（H1）当正文主标题；标题也不手动编号 |
| 样式只用 `<span style="...">` | `<font color=red>`、`<u>` 是遗留写法，**已废弃**，改到时顺手替换 |
| 红色只用于最关键警示 | 重要结论用紫字，次要用粉字，不要滥用彩色 |
| 新笔记用 Obsidian callout | 不再用 `> Notes:` / `> Tips:`；改老笔记时整篇风格保持一致 |
| 代码块必须标语言，注释写中文 | |
| 中英文、中文与数字之间加半角空格 | `线程池是 JDK 1.5 后的新特性` |
| 换行一律靠空行 | 禁止行尾两空格硬换行；callout 内多段用只含 `>` 的空行分隔 |

## 仓库结构

```
Workspace/
├── AI/                      # AI 相关笔记（顶层散落概览笔记 + 子目录）
│   ├── AI-基础.md            # 概览类笔记直接放在主题目录顶层
│   ├── AI-编程工具.md
│   ├── Vibe-Coding.md
│   ├── AI-Assistance/       # AI 工具使用指南（Agent Skills、Claude Code 教程等）
│   ├── AI-Develop/          # AI 辅助开发笔记
│   ├── AI-Experience/       # 占位目录，当前为空
│   └── images/
├── Database/                # 数据库（顶层放 数据库概述.md、Supabase.md）
│   ├── MySQL/  Redis/  MongoDb/  Oracle/
│   └── images/
├── DevOps/                  # DevOps 工具与实践
│   ├── 应用容器/  持续集成工具/  测试工具/  版本管理工具/  项目构建工具/
├── Frontend/                # 前端笔记（由“前端资料”重命名而来）
│   ├── HTML/  CSS/  Bootstrap/  JavaScript/  TypeScript/  React/  Vue/
│   └── 前端工程化工具/  工具类库/  移动端Web/
├── JVM/                     # JVM（8 篇扁平笔记：内存模型、GC、类加载、调优、Arthas 等）
├── Java/                    # Java 核心（22 篇扁平笔记：Java基础-*、Java扩展-*）
├── JavaWeb/                 # JavaWeb（Servlet、JSP、Web 服务器、网络、网络安全）
├── Linux/                   # Linux（命令、安装、shell、WSL、虚拟机）
├── Python/                  # Python（基础 + 函数/类/作用域/数据模型等）
├── attachments/             # 附件区：模板、思维导图、历史学习笔记
│   ├── templates/           # 仅 2 个 Templater 片段：Insert-Callouts.md、font-css.md
│   ├── 思维导图-程序开发知识体系/   # 5 个 .xmind 文件
│   └── API/ Dubbo/ IDE/ JVM/ JavaSE基础/ Maven/ MyBatis/ MySQL/ Python/
│       Spring/ SpringCloud/ SpringMVC/ Vue/ java学习笔记/ linux/
│       实战项目/ 工具框架/ 常用工具类/ 并发编程/
├── images/                  # 仓库级图片目录（当前仅剩一个未被引用的空 UUID 子目录）
├── resources/               # 仅保留 README 打赏图片（images/wechat_pay.png、images/ali_pay.jpg）
├── 其他/                    # 软件教程、开发工具、学习资源、编程资源分享
├── 分布式微服务/              # 分布式与微服务（16 个子目录，86 篇，内容最多）
├── 后端框架/                 # Spring、SpringMVC、Spring-Data、MyBatis、Hibernate、Activiti
├── 并发编程/                 # 并发基础、JMM、CAS、AQS、线程池、并发容器、锁
├── 面试手册/                 # 面试题（Java/MySQL/Redis/Spring/Dubbo/JVM/分布式）
├── 项目资料/                 # 实战项目案例（品优购、万信金融、学成在线、好客租房等）
├── .trae/skills/            # 本仓库的 Agent Skill（写作风格、Obsidian 相关工具技能）
├── .obsidian/               # Obsidian 配置与插件（已纳入版本管理）
├── .vitepress/              # VitePress 配置（config.ts、sidebar.ts、wikilink.ts、html-guard.ts）
├── .github/workflows/        # GitHub Actions（deploy.yml：push main 自动部署到 Pages）
├── index.md                 # VitePress 首页（home layout）
├── README.md                # 手工维护的笔记索引（含打赏二维码）
├── package.json             # VitePress 依赖与脚本（pnpm 管理）
└── AGENTS.md                # 本文件；CLAUDE.md 通过 @AGENTS.md 指向此处
```

## 命名与链接约定

- **文件命名**：主导模式是 `主题-子主题.md`，例如 `Java基础-IO编程.md`、`并发编程-线程池.md`、`JVM-GC.md`。子主题在 Java 系用中文、Python 系多用英文，各目录内部保持一致即可。
- **文件名需全仓库唯一**：<span style="color: purple;">**VitePress 的 wikilink 插件以”不含扩展名的文件名”为键**</span>，同名文件在构建期后者覆盖前者，会导致 wiki 链接跳错。当前 413 篇零重名，新增笔记时务必先确认没有同名文件。
- **项目实战类笔记**允许保留教程原始序号风格：`Day07-商品录入模块.md`、`15-项目部署.md`。
- **跨笔记链接**：Obsidian wiki 链接，实际以带别名形式为主 `[[文件名|显示别名]]`（317 处），锚点形式 `[[文件名#章节|别名]]`；正文里提到其他笔记/章节用书名号《》。VitePress 构建期由 `.vitepress/wikilink.ts` 自动将其转为标准 Markdown 链接。
- **图片**：`![](images/文件名.png)`，引用**与笔记同级的 `images/` 子目录**（全仓库 5254 处这种写法，无 `./images/`、`../images/`）。不要臆造路径。
- 笔记**通常不带 YAML frontmatter**（413 篇中仅 5 篇有），也不写手动 TOC 目录；约 29 篇以 `## 参考…` 收尾。

## Obsidian 配置

**已启用的社区插件（`.obsidian/community-plugins.json`，共 11 个）：**

| 插件 | 用途 |
| :--- | :--- |
| `dataview` | 对笔记做数据库式查询（现有笔记中暂无查询代码块） |
| `templater-obsidian` | 模板；`templates_folder = attachments/templates`，`trigger_on_file_creation = true` |
| `obsidian-hover-editor` | 悬停预览/临时面板 |
| `obsidian-outliner` | 列表提纲操作 |
| `obsidian-quiet-outline` | 可视化大纲 |
| `easy-typing-obsidian` | 输入辅助 |
| `obsidian-style-settings` | AnuPpuccin 及扩展的样式开关 |
| `table-editor-obsidian` | Advanced Tables 表格编辑 |
| `tag-wrangler` | 标签管理 |
| `obsidian-custom-attachment-location` | 决定附件落盘位置（见下） |
| `oz-clear-unused-images` | 清理未引用图片，删除到 `.trash`，排除 `attachments,resources` |

**已安装但当前禁用**：`header-enhancer`（目录仍在 `.obsidian/plugins/`）。

> [!warning] 与写作风格有关的一个矛盾
> `moon-note-style` 约定“标题不手动编号，编号交给 header-enhancer”，但该插件处于**禁用**状态，因此编号实际不会渲染。改写笔记时**仍然不要手动加编号**；若要恢复编号，需要在 Obsidian 里重新启用该插件。

**影响编辑行为的设置（`.obsidian/app.json`）：**

- `newLinkFormat: "shortest"` + `useMarkdownLinks: false` → 新建链接默认写成最短形式的 `[[wiki 链接]]`
- `alwaysUpdateLinks: true` → 重命名/移动文件时 Obsidian 会自动改写链接；用命令行或脚本移动文件则**不会**更新链接，需谨慎
- `strictLineBreaks: true` → 与风格约定一致：换行靠空行
- `newFileLocation: "current"`、`trashOption: "system"`、`livePreview: false`
- `attachmentFolderPath: "attachments"` 被 `obsidian-custom-attachment-location` 覆盖：实际附件落到 **`./images`（笔记同级）**，文件名格式为 17 位时间戳 `YYYYMMDDHHmmssSSS`

**主题与外观**：主题 AnuPpuccin（`.obsidian/appearance.json`，`cssTheme: "AnuPpuccin"`）；启用片段 `snippets/extended-colorschemes.css`（另有两枚护眼背景片段未启用）。

## VitePress 文档站

站点由 VitePress（`^1.6.4`）驱动，配置在 `.vitepress/` 目录下，包管理用 pnpm。

**核心配置文件（`.vitepress/`）：**

| 文件 | 作用 |
| :--- | :--- |
| `config.ts` | 主配置：站点标题、导航、搜索、页脚、构建输出等 |
| `sidebar.ts` | 自动扫描目录树生成侧边栏，按一级分类分组 |
| `wikilink.ts` | 构建期扫描所有 `.md` 建立文件名→URL 映射，将 `[[文件名]]` 转为标准 Markdown 链接 |
| `html-guard.ts` | 从被转义的文本中恢复白名单 `<span>`/`<font>` 标签（旧笔记中的彩色样式） |
| `clean-broken-images.cjs` / `fix-img-paths.cjs` | 维护期脚本（清理坏图、修正图片路径） |

**常用命令（在仓库根目录执行）：**

```bash
pnpm docs:dev       # 本地开发预览（默认 http://localhost:5173）
pnpm docs:build     # 构建到 .vitepress/dist/
pnpm docs:preview   # 预览构建产物
```

<span style="color: red;">**构建时若 OOM，需加内存上限**：</span>413 篇笔记全量 build 在默认 Node 堆下会触发 heap out of memory（exit 134），需先设 `NODE_OPTIONS=--max-old-space-size=8192` 再执行 build。

**`config.ts` 实际生效项：**

- `base: '/'`、`cleanUrls: true`、`outDir: '.vitepress/dist'`
- 首页是根目录 `index.md`（VitePress home layout），不是 `README.md`
- 搜索用 VitePress 内置 `provider: 'local'`（Minisearch），中文界面
- Mermaid 由 `vitepress-plugin-mermaid` npm 包提供
- 侧边栏由 `sidebar.ts` 自动生成，**不需要手写 `_sidebar.md`**
- `srcExclude` 排除了 `**/images/**`、`AGENTS.md`、`.obsidian/**`、`.trae/**`、`.claude/**`
- `ignoreDeadLinks: true`（旧笔记中的失效图片/链接不报错）
- `markdown.html: false`（禁用原始 HTML，避免旧笔记中的裸 HTML 导致 Vue 编译错误）

**Wiki 链接处理**：`.vitepress/wikilink.ts` 在构建期自行扫描仓库内所有 `.md` 文件（排除 `.obsidian`、`.trae`、`.claude`、`.vscode`、`.git`、`node_modules`、`.vitepress`、`resources`、`attachments`），建立映射后将 `[[文件名#章节|别名]]` 替换为标准链接。**不再需要 `file-map.json`，也没有任何生成脚本需要手动跑。**

**旧 `_coverpage.md` / `_navbar.md`**：已从根目录删除，不再使用。

## 索引与部署

- **`README.md`**：手工维护的笔记索引，12 个 `##` 分区（AI、Java 核心技术、后端框架、前端、数据库、DevOps、Linux、分布式微服务、并发编程、Python、其他、项目实战），条目全部用 `[[文件名|别名]]`；末尾含打赏二维码（引用 `resources/images/` 下的两张图）。新增重要笔记应补进对应分区——目前有缺口（`面试手册/` 的 10 篇面试题、`其他/学习资源/` 等尚未收录）。
- **首页是 `index.md`**（VitePress home layout），不是 `README.md`。
- **发布方式**：GitHub Actions 自动部署，配置在 `.github/workflows/deploy.yml`。push 到 `main` 分支后自动触发：ubuntu runner 上 `pnpm install` → `pnpm docs:build`（已配 8GB 堆）→ 上传 `.vitepress/dist` 为 artifact → `deploy-pages` 发布到 GitHub Pages。也支持在 Actions 页面手动 `workflow_dispatch` 触发。Pages 来源设为 "GitHub Actions"，不需要本地 build 或手动推送 dist。
- `.nojekyll`（空文件）用于关闭 Jekyll 处理，保证 `_` 开头文件与点目录原样发布。
- `.gitignore` 忽略编辑器与构建产物（`.vscode`、`*.class`、`target`、`*.iml`、VNote 缓存、`desktop.ini`、`node_modules/`、`.vitepress/dist/`、`.vitepress/cache/` 等），不忽略笔记内容。

## 新增一篇笔记的完整流程

1. 读 `.trae/skills/moon-note-style/SKILL.md`，按其骨架与约定撰写。
2. 确认文件名符合 `主题-子主题.md` 且**全仓库无同名文件**（wikilink 插件以文件名为键，重名会覆盖）。
3. 放到对应主题目录（一层深，如 `Java/`、`分布式微服务/SpringBoot/`）；跨主题的概览笔记可放在主题目录顶层。
4. 图片放到该笔记同级的 `images/` 目录，用 `![](images/xxx.png)` 引用。
5. 用 `[[文件名|别名]]` 关联相关笔记（VitePress 构建期自动解析为标准链接，无需手动维护映射表）。
6. 在 `README.md` 的相应分区补一条索引。
7. 校对：对照 Skill 的 12 项清单自查，尤其 `<font>`/`<u>`、H1、行尾硬换行、代码块语言标注。

## 已知问题与待确认项

- `header-enhancer` 已禁用，与”编号交给插件”的风格约定冲突（见上文 callout）。
- `AI/AI-Experience/` 是空目录；根 `images/` 仅剩一个未被任何笔记引用的空 UUID 子目录 `images/23b0f52d-9c8b-40bb-a170-48968575303f/`。
- VitePress 全量 build 内存消耗大（413 篇笔记），默认 Node 堆会 OOM，需 `NODE_OPTIONS=--max-old-space-size=8192`（CI 已在 `.github/workflows/deploy.yml` 中配好，本地 build 需手动设）。
- `AGENTS.md` 尚未纳入版本管理；`CLAUDE.md` 已缩减为 `@AGENTS.md` 入口。

## 协作注意事项

- 笔记正文与技术表述一律**中文**，改动应贴合既有风格，避免把作者连贯的笔记改写成机械化的模板文本。
- 大量笔记仍是旧的 `<font>`/`> Notes:` 风格。除非任务明确要求，**不要做大范围批量风格改写**；顺手修改时保持单篇内部风格一致。
- 内容仓库以“可长期复习”为目标，技术结论、表格与代码示例的准确性优先于排版。
