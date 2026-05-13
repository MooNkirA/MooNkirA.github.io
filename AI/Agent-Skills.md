---
tags:
  - AI
  - Skills
---

## 什么是 Skills

Skills 是 Claude Code 中的可重用工具集，每个 Skill 都是一个专门的 AI 能力，用于处理特定类型的任务。Skills 通过 `/<skill-name>` 命令调用，为用户提供了专业的功能支持。

## 内置 Skills 列表

Claude Code 内置了多个 Skills，包括：

### 核心开发 Skills

- **init** - 初始化新的 CLAUDE.md 文档，为代码库生成文档
- **review** - 审查拉取请求（PR）
- **security-review** - 对当前分支的待更改内容进行安全审查

### Claude API 相关 Skills

- **claude-api** - 构建、调试和优化 Claude API / Anthropic SDK 应用。包括：
  - 提示词缓存（prompt caching）
  - 适合新项目的提示词模板
  - 迁移现有代码在不同 Claude 模型版本间（4.5 → 4.6, 4.6 → 4.7, 已退役模型替换）
  - 模型选择和优化建议

### Python/代码质量 Skills

- **simplify** - 审查修改后的代码，评估可重用性、质量和效率，然后修复发现的问题
- **fewer-permission-prompts** - 扫描对话记录中的常见只读 Bash 和 MCP 工具调用，然后添加优先级 allowlist 到项目 .claude/settings.json 以减少权限提示

### 编辑器 Skills

- **obsidian-markdown** - 创建和编辑 Obsidian Flavored Markdown（Wiki 链接、嵌入、属性等）
- **obsidian-cli** - 使用 Obsidian CLI 交互 vault（读取、创建、搜索、管理笔记、任务等）
- **obsidian-bases** - 创建和编辑 Obsidian Bases（视图、过滤器、公式、摘要等）
- **json-canvas** - 创建和编辑 JSON Canvas 文件（节点、边、组、连接）

### 主题开发 Skills

- **obsidian-style-settings** - 用于 Obsidian 主题开发的专用工具
- **obsidian-hover-editor** - 在 Obsidian 中悬停预览笔记
- **obsidian-outliner** - Obsidian 的大纲模式
- **obsidian-quiet-outline** - 视觉大纲显示
- **obsidian-custom-attachment-location** - 附件位置管理

### 实用工具 Skills

- **keybindings-help** - 自定义键盘快捷键、重新绑定键、添加和弦绑定、修改 ~/.claude/keybindings.json
- **update-config** - 配置 Claude Code harness（通过 settings.json 自动化行为）
- **defuddle** - 使用 Defuddle CLI 从网页提取干净的 markdown 内容，移除杂乱内容和导航

### 定期任务 Skills

- **loop** - 按定期间隔运行提示词或斜杠命令（例如 `/loop 5m /foo`，默认 10 分钟）

## skill-creator 安装与使用指南

### 什么是 skill-creator

skill-creator 是 Claude Code 的官方技能创建和管理工具，用于创建新 Skill、修改和优化现有 Skill、以及测量 Skill 性能。它是一个基于 Node.js 的开发工具，帮助你开发和维护 Claude Code Skills。

### 安装和使用 skill-creator 的详细步骤

#### 1. 前置要求

在开始之前，请确保你已经安装并配置好以下环境：

- **Node.js** (版本 18+) - skill-creator 需要运行在 Node.js 环境中
- **Git** - 用于克隆和版本管理
- **Claude Code** - 已安装 Claude Code CLI

检查 Node.js 版本：

```bash
node --version
```

检查 Git 版本：

```bash
git --version
```

#### 2. 安装 skill-creator

**方法一：使用 npm 安装（推荐）**

```bash
# 全局安装 skill-creator
npm install -g @anthropic/skill-creator

# 验证安装
skill-creator --version
```

**方法二：从源码安装**

```bash
# 克隆官方仓库
git clone https://github.com/anthropics/claude-code-plugins.git
cd claude-code-plugins/packages/skill-creator

# 安装依赖
npm install

# 构建
npm run build

# 全局链接
npm link
```

#### 3. 初始化 skill-creator

安装完成后，需要进行初始化配置：

```bash
# 初始化 skill-creator
skill-creator init

# 这会提示你：
# - 输入项目名称
# - 选择是否启用默认配置
# - 选择是否启用调试模式
```

初始化后会在当前目录创建以下结构：

```
skill-creator-project/
├── .claude/
│   └── skills/          # 你的 Skills 目录
├── package.json
├── skill-creator.config.js
└── README.md
```

#### 4. 验证安装

运行以下命令验证 skill-creator 是否正确安装：

```bash
# 查看帮助信息
skill-creator --help

# 查看版本信息
skill-creator --version

# 列出所有命令
skill-creator list
```

### skill-creator 主要功能

#### 1. 创建新 Skill

使用 skill-creator CLI 创建新的 Skill：

```bash
# 创建新 Skill
skill-creator create my-custom-skill

# 这会自动创建以下文件：
# - .claude/skills/my-custom-skill.md
# - .claude/skills/my-custom-skill.ts
# - skill.yaml
```

创建后，你需要编辑以下文件：

- **skill.yaml** - 定义 Skill 的元数据和触发条件
- **.claude/skills/my-custom-skill.ts** - TypeScript 实现
- **.claude/skills/my-custom-skill.md** - 技能说明文档

#### 2. 编写 Skill

**示例：创建一个简单的代码审查 Skill**

在 `.claude/skills/code-reviewer.md` 中编写：

```markdown
# Role
你是一个专业的代码审查专家。

# Context
用户需要对其代码进行审查，请提供专业的代码质量和安全建议。

# Guidelines
1. 读取用户提供的代码
2. 识别潜在的问题和风险
3. 提供具体的改进建议
4. 解释每个问题的原因

# Output Format
以以下格式输出：
## 代码质量评估
- 可读性: ⭐⭐⭐⭐⭐
- 可维护性: ⭐⭐⭐⭐
- ...

## 潜在问题
1. 问题 1
2. 问题 2
...
```

在 `.claude/skills/code-reviewer.ts` 中实现：

```typescript
import { Skill } from '@anthropic/skill-creator';

@Skill('code-reviewer')
export class CodeReviewerSkill {
  async execute(prompt: string, context: any) {
    // 实现你的 Skill 逻辑
    return {
      analysis: '...',
      suggestions: [...]
    };
  }
}
```

#### 3. 测试 Skill

```bash
# 测试单个 Skill
skill-creator test my-custom-skill

# 运行所有测试
skill-creator test --all

# 测试模式
skill-creator test --dry-run
```

#### 4. 部署 Skill

```bash
# 部署到本地
skill-creator deploy --local

# 部署到远程服务器
skill-creator deploy --remote

# 验证部署
skill-creator verify
```

#### 5. 管理已安装的 Skills

```bash
# 列出所有已安装的 Skills
skill-creator list

# 查看 Skill 详情
skill-creator show <skill-name>

# 更新 Skill
skill-creator update <skill-name>

# 删除 Skill
skill-creator remove <skill-name>
```

#### 6. 性能评估

```bash
# 评估 Skill 性能
skill-creator benchmark

# 生成性能报告
skill-creator benchmark --report
```

#### 7. 调试

```bash
# 启用调试模式
skill-creator debug

# 查看日志
skill-creator logs

# 清除缓存
skill-creator cache clear
```

### Skill 配置文件 (skill.yaml)

每个 Skill 都需要一个 `skill.yaml` 配置文件：

```yaml
name: "my-custom-skill"
version: "1.0.0"
description: "一个自定义的示例 Skill"
author: "Your Name"

# 触发条件
triggers:
  - "/my-skill"
  - "使用我的技能"
  - "help"

# 分类
categories:
  - "开发工具"

# 依赖
dependencies: []

# 权限要求
permissions:
  read: true
  write: false
  network: false

# 配置选项
config:
  - name: "option1"
    type: "string"
    default: "default-value"
    description: "配置选项 1"

# 资源文件
resources:
  - "README.md"
  - "assets/logo.png"
```

### 开发工作流

#### 1. 创建新 Skill

```bash
# 使用模板创建
skill-creator create --template basic

# 使用自定义模板
skill-creator create --template custom my-skill
```

#### 2. 编码和测试

```bash
# 启动开发服务器
skill-creator dev

# 在另一个终端运行测试
skill-creator test my-skill
```

#### 3. 代码审查

```bash
# 使用内置的代码审查工具
skill-creator lint
```

#### 4. 文档生成

```bash
# 自动生成文档
skill-creator docs

# 生成 API 文档
skill-creator docs --api
```

### 常见问题

#### Q: skill-creator 命令找不到？

A: 确保：
1. skill-creator 已正确安装（`npm install -g @anthropic/skill-creator`）
2. Node.js 在 PATH 中
3. 重启终端后重试

#### Q: 如何调试 Skill？

A: 使用调试模式：
```bash
skill-creator debug
```

然后运行你的 Skill，查看详细的调试信息。

#### Q: Skill 无法触发怎么办？

A: 检查：
1. `skill.yaml` 中的触发条件是否正确
2. Skill 是否已安装（`skill-creator list`）
3. 查看日志：`skill-creator logs`

#### Q: 如何更新 skill-creator？

A:
```bash
# 更新到最新版本
npm update -g @anthropic/skill-creator

# 或者重新安装
npm install -g @anthropic/skill-creator@latest
```

### 资源链接

- [Claude Code GitHub Repository](https://github.com/anthropics/claude-code)
- [skill-creator GitHub](https://github.com/anthropics/claude-code-plugins/tree/main/packages/skill-creator)
- [Claude Code 文档](https://docs.anthropic.com/claude-code)
- [官方 Skills 示例](https://github.com/anthropics/claude-code/tree/main/skills)
