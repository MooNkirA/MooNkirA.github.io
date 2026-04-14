---
tags:
  - Software
---


## Obsidian 概述

官方文档：https://obsidian.md/zh/

## 常用设置与操作

### 同步滚动的分屏

按住 Ctrl 键，同时使用鼠标点击右上角的**视图**图标，即可直接打开一个新的同步滚动的分屏，再根据需求分别调整两个分屏显示“阅读模式”或者“编辑模式”。

## 插件

### Header Enhancer

Header Enhancer 全能型标题增强插件，核心功能用于给标题自动编号，相关设置如下：

1. 打开插件设置 -> 开启 "Enable Auto Numbering Function" 总开关，配置如下：
    - Numbering Format：选择编号样式（`1.1`、`1.2.3` 等）
    - Trigger Method：设置触发方式（输入标题后按 Enter 自动添加编号）
    - Skip Levels：设置跳过的标题层级
2. 额外增强功能：
    - 智能反向链接：自动管理标题与内容的关联链接
    - 标题字体自定义：为不同层级标题设置专属字体、大小、颜色
    - 批量处理：通过侧边栏图标一键为当前文档标题添加 / 移除编号

使用 YAML 控制是否开开启：

```yml
# 旧
---
header-auto-numbering: ["state on", "start-level h2", "end-level h6", "start-at 1", "separator ."]
---
# 新版本设置
---
header-auto-numbering: 
  - state on
  - start-level h2
  - end-level h6
  - start-at 1
  - separator .
---
```

### Outliner（测试中

Outliner 进阶增强的列表大纲插件，可以对节点进行上下的移动。

### Quiet Outline

Obsidian 核心插件“大纲”的增强版。

> Tips: 此插件完全可以代替 Obsidian 自带的核心插件『大纲』，只保留其中一个即可。

### Calendar（暂时无用）

Calendar 日历插件，快速新建日记

### Templater

增强版模板插件。官方文档：[Introduction - Templater](https://silentvoid13.github.io/Templater/)

#### 插入模板后指定光标的位置

语法：

```html
<% tp.file.cursor(order?: number) %>
```

示例：

```html
// File cursor

// File multi-cursor
<% tp.file.cursor(1) %>Content<% tp.file.cursor(1) %>
```

> Note: 特别注意，此功能必须在 Templater 的设置中开启 `Automatic jump to cursor` 选项。（<font color=red>**此选项默认是关闭的，如果设置模板没有实现光标定位的效果，请检查此配置项！**</font>）

**多光标定位（高级用法）**：如果需要多个光标位置，用 `tp.file.cursor(1)` `tp.file.cursor(2)`，按 `Tab` 可以在多个光标之间切换。

```html
<font color=red><% tp.file.cursor(1) %></font> <% tp.file.cursor(2) %>
```

**关键说明**:

1. **`<% tp.file.cursor() %>`** 是 Templater 专属光标定位标记，**不会被渲染出来**，仅控制光标位置；
2. 插入后的代码是**标准 HTML + Markdown**，兼容所有平台；
3. 上面示例在预览模式下会直接显示**相应HTML代码的效果**，编辑模式会保留源码。

### Quick Explorer

Obsidian 更快的切换文件，快捷资源管理器。

### Hover Editor

悬浮预览编辑器，可以有预览链接内容的同时直接修改对应的内容。

### 待试用

- Easy typing
- advanced tables - 强大的表格插件
- Custom Attachment Location
- Editing toolbar
- Notebook Navigator
- Excalidraw
- Manual Sorting - 文件夹拖拽排序 
- Iconize - 修改文件夹和颜色 
- Style Settings / ViewTuner 
- MySnippets 状态栏管理css片段 
- Samrt connections 
- Mind Map 笔记转成思维导图
- weread 导入微信读书书摘
- Tag Wrangler 批量修改标签
- file cleaner 无用附件清理，<font color=red>**还不熟悉删除插件的执行规则，会出现大量删除仓库中很多文件，慎重测试中！！！**</font>
