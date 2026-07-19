# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal programming note-taking repository ("MooNkirA's code note") containing comprehensive technical documentation organized by programming topics. The notes are primarily in Markdown format and support Obsidian wiki links.

## Repository Structure

```
Workspace/
├── AI/                      # AI-related notes (assistance, development, experience)
│   ├── AI-Assistance/       # AI tool usage guides
│   ├── AI-Develop/          # AI-assisted development notes
│   ├── AI-Experience/       # Personal AI experience sharing
│   └── images/
├── Database/                # Database concepts and notes
│   ├── MongoDb/
│   ├── MySQL/
│   ├── Oracle/
│   ├── Redis/
│   └── images/
├── DevOps/                  # DevOps tools and practices
│   ├── 应用容器/             # Containerization (Docker, etc.)
│   ├── 持续集成工具/         # CI tools (Jenkins, etc.)
│   ├── 测试工具/             # Testing tools
│   ├── 版本管理工具/         # Version control (Git, etc.)
│   └── 项目构建工具/         # Build tools (Maven, Gradle, etc.)
├── Frontend/               # Frontend development notes (renamed from 前端资料)
│   ├── Bootstrap/
│   ├── CSS/
│   ├── HTML/
│   ├── JavaScript/
│   ├── React/
│   ├── TypeScript/
│   ├── Vue/
│   ├── 前端工程化工具/       # Frontend engineering tools
│   ├── 工具类库/             # Utility libraries
│   └── 移动端Web/            # Mobile web development
├── JVM/                    # JVM notes (memory model, GC, class loading)
├── Java/                   # Java core notes (JDK, collections, IO, reflection, etc.)
├── JavaWeb/                # JavaWeb notes (Servlet, JSP, web servers)
├── Linux/                  # Linux knowledge
├── Python/                 # Python notes
├── attachments/            # Attachments: note templates, mind maps, study notes
│   ├── API/
│   ├── Dubbo/
│   ├── IDE/
│   ├── JVM/
│   ├── JavaSE基础/
│   ├── Maven/
│   ├── MyBatis/
│   ├── MySQL/
│   ├── Python/
│   ├── Spring/
│   ├── SpringCloud/
│   ├── SpringMVC/
│   ├── Vue/
│   ├── java学习笔记/
│   ├── linux/
│   ├── templates/          # Note templates
│   ├── 实战项目/
│   ├── 工具框架/
│   ├── 常用工具类/
│   ├── 并发编程/
│   └── 思维导图-程序开发知识体系
├── resources/              # Static assets (CSS, JS, images, file-map.json)
├── 其他/                   # Other resources (software tutorials, dev tools, learning resources)
│   ├── images/
│   ├── software/
│   ├── tools/
│   └── 学习资源/
├── 分布式微服务/            # Distributed microservices architecture
│   ├── Authorization-Certification/
│   ├── Dubbo/
│   ├── ElasticStack/
│   ├── Nginx/
│   ├── SpringBoot/
│   ├── SpringCloud/
│   ├── 任务调度/
│   ├── 分布式事务/
│   ├── 分布式文件系统/
│   ├── 分布式链路追踪/
│   ├── 分库分表/
│   ├── 微服务监控/
│   ├── 服务注册中心/
│   ├── 消息中件间/
│   ├── 系统架构/
│   └── 配置中心/
├── 后端框架/                # Backend frameworks (Spring, MyBatis, Hibernate, Activiti)
│   ├── Activiti/
│   ├── Hibernate/
│   ├── MyBatis/
│   ├── Spring/
│   ├── Spring-Data/
│   ├── SpringMVC/
│   └── 工具框架/
├── 并发编程/                # Concurrency programming
├── 面试手册/                # Interview questions (Java, MySQL, Redis, Spring, Dubbo)
├── 项目资料/                # Real-world project examples
│   ├── 万信金融/
│   ├── 品优购/
│   ├── 品达通用权限系统/
│   ├── 国际物流云商系统/
│   ├── 好客租房/
│   ├── 学成在线/
│   ├── 红包雨场景案例/
│   └── 自用信息管理系统/
├── index.html              # Docsify documentation site
├── _coverpage.md           # Docsify cover page
├── _navbar.md              # Docsify navbar
└── README.md               # Main index and navigation
```

## Obsidian Configuration

This project uses Obsidian as the primary note-taking tool with the following configuration:

**Core Plugins:**
- `dataview` - Database queries for notes
- `templater-obsidian` - Template-based note creation
- `obsidian-hover-editor` - Hover to preview notes
- `obsidian-outliner` - Outline mode for nested content
- `obsidian-quiet-outline` - Visual outline display
- `easy-typing-obsidian` - Typing shortcuts

**Third-party plugins:**
- `obsidian-style-settings` - Custom CSS settings
- `header-enhancer` - Enhanced headers
- `table-editor-obsidian` - Table editing
- `tag-wrangler` - Tag management
- `obsidian-custom-attachment-location` - Attachment location management

**Theme:** AnuPpuccin (installed from community themes)

**Appearance configuration** is in `.obsidian/appearance.json`.

## Docsify Documentation Site

The `index.html` file configures a Docsify-based static documentation site with:

- **Theme:** docsify-darklight-theme (supports dark/light mode toggle)
- **Custom plugins:**
  - Wiki link conversion: Converts Obsidian-style `[[filename]]` links to standard markdown links using `resources/file-map.json`
  - Mermaid diagram support
  - Code syntax highlighting (Java, Bash, YAML, JavaScript, SQL, TypeScript, etc.)
  - Search functionality
  - Copy code blocks
  - Image zoom
  - Emoji support

**Configuration options in `window.$docsify`:**
- `maxLevel: 6` - Render up to 6 heading levels
- `homepage: 'README.md'` - Main page
- `search` - Full-text search with placeholder
- `darklightTheme` - Custom theme colors for dark/light modes
- Custom navigation links in HTML `<nav>` element

**View the online documentation:** https://moonkira.github.io/#/

## Important Notes

### Markdown Format

- Uses standard Markdown with Obsidian wiki link syntax `[[filename]]` or `[[filename#anchor|alias]]`
- The file map (`resources/file-map.json`) maps these wiki links to actual file paths
- Docsify automatically converts wiki links when `index.html` loads

### File Naming Conventions

Files use a clear, descriptive naming pattern:
- `Java基础-IO编程.md` (Java Basic - IO Programming)
- `Java扩展-设计模式.md` (Java Extension - Design Patterns)
- `分布式微服务/面试-README.md` (Interview - README)

### Real-world Projects

Located in `项目资料/`, includes complete project examples:
- International logistics cloud platform
- E-commerce systems (品优购, 学成在线)
- Real estate rental system (好客租房)
- Finance systems (万信金融)
- Permission management systems

## Development Workflow

**Viewing in browser:**
1. Open `index.html` in a web browser
2. The site uses CDN links for docsify and plugins (no local build step required)

**Contributing new notes:**
1. Create new Markdown file in the appropriate directory
2. Use descriptive file names following the naming convention
3. Add wiki links to other notes using `[[filename]]` syntax
4. Run `fetch /resources/file-map.json` in the browser console to update the file map if needed

**Updating the file map:**
The `resources/file-map.json` is manually maintained. When adding new files, update this JSON to ensure wiki links work correctly in both Obsidian and Docsify.
