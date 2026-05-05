# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal programming note-taking repository ("MooNkirA's code note") containing comprehensive technical documentation organized by programming topics. The notes are primarily in Markdown format and support Obsidian wiki links.

## Repository Structure

```
Workspace/
├── AI/                      # AI-related notes
├── Database/                # Database concepts and MySQL notes
├── DevOps/                  # DevOps tools (Maven, Git, Docker, Jenkins)
├── Java/                    # Java core notes (JDK, collections, IO, reflection, etc.)
├── JavaWeb/                 # JavaWeb notes (Servlet, JSP, web servers)
├── JVM/                     # JVM notes (memory model, GC, class loading)
├── Linux/                   # Linux knowledge
├── Python/                  # Python notes
├── 前端资料/                 # Frontend notes (HTML, CSS, JavaScript, Vue, React)
├── 后端框架/                # Backend frameworks (Spring, MyBatis, Hibernate)
├── 分布式微服务/            # Distributed microservices (Spring Cloud, Dubbo, etc.)
├── 并发编程/                # Concurrency programming
├── 面试手册/                # Interview questions (Java, MySQL, Redis, Spring, Dubbo)
├── 项目资料/                # Real-world project examples (international logistics, e-commerce)
├── 其他/                    # Other resources (software tutorials, development tools)
├── resources/               # Static assets (CSS, images, file-map.json)
├── index.html               # Docsify documentation site
└── README.md                # Main index and navigation
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
