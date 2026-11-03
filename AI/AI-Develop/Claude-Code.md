## Claude Code 简介

> Claude Code 官方网站 https://claude.ai/code

Claude Code 是 Anthropic 公司推出的官方命令行 AI 编程工具，基于 Claude AI 模型构建。它是目前功能最强大的命令行编程工具之一。它可以帮助开发者：

- 编写、调试和重构代码
- 解释代码逻辑和架构
- 快速完成编程任务
- 进行安全代码审查
- 管理项目结构
- 执行 shell 命令和操作文件

**Claude Code 的优势**：

- **自主执行能力**：AI 不仅能生成代码，还能自动执行命令、修改文件、安装依赖
- **集成开发环境**: 与现有的开发工作流无缝集成
- **智能理解**: 理解项目上下文、代码历史和依赖关系
- **安全审查**: 默认避免破坏性操作，执行危险操作前会主动询问并确认，防止误操作
- **多语言支持**: 支持主流编程语言和框架
- **上下文感知**: 基于并理解整个项目结构，提供智能建议，修改代码时保证整体一致性
- **Claude Skills 支持**：能力扩展包，可自定义代码规范、任务流程等

Claude Code 的缺点就是使用 Anthropic 的 API，按 Token 计费。

### 适用场景

- 快速原型开发：用自然语言描述需求，直接生成可运行的项目骨架
- 代码重构与优化：分析现有实现，统一调整命名、结构和风格
- Bug 修复与调试：结合报错日志定位问题并给出修复方案
- 单元测试生成与代码审查：补全测试用例，检查质量与安全问题
- 文档编写：根据代码生成说明文档与注释

## 安装

### 系统要求

- **操作系统**: Windows、macOS、Linux
- **Node.js**: 18.x 或更高版本
- **Git**: 用于版本控制
- **终端**: 任何现代终端（CMD、PowerShell、bash、zsh）

### 安装步骤

#### 下载 Claude Code

访问 Claude Code 官方网站: https://claude.ai/code

> [!note] 国内建议直接通过 NPM 方式安装

#### 安装 CLI 工具

1. 首先确保有 Nodejs 环境和 npm 软件依赖安装工具。*关于 Node.js 相关内容与安装详见《[[node|Node.js 笔记]]》*
2. 打开终端，输入以下命令安装 Claude Code。

```bash
# 使用 npm 安装
npm install -g @anthropic-ai/claude-code

# 或使用 pip 安装
pip install claude-code

# 或使用 Homebrew（macOS）
brew install claude-code
```

#### 登录认证

按照提示访问链接、授权并获取访问令牌。

```bash
# 首次运行会引导你登录
claude login
```

> [!info] 因为国内的特殊性，所以是无法直接登陆 Claude Code，后面会配置切换使用国内的大模型，因此跳过登陆此步骤！

#### 验证安装

```bash
claude --version
```

成功安装后应显示版本号。

#### 安装检查清单

- [ ] Node.js 版本 >= 18
- [ ] npm 可用（`npm --version` 能输出结果）
- [ ] Git 已安装
- [ ] `claude --version` 能输出版本号
- [ ] 已完成登录，或已配置可用的第三方模型

### 切换第三方模型

Claude Code 虽然默认使用 Anthropic 的 Claude 模型，但它是支持切换第三方模型。很多国产大模型（如 DeepSeek、智谱等）都提供了兼容 OpenAI 格式的 API，可以直接对接 Claude Code 使用。有以下两种

方式一：手动修改。找到 Claude Code 的全局配置文件 `C:\Users\用户名\.claude\settings.json`，设置相应的模型的配置，如没有则手动创建。下面是使用智谱的大模型的配置示例：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "Your API Key",
    "ANTHROPIC_MODEL": "glm-4.7-flash",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.7-flash",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7-flash",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7-flash"
  },
  "includeCoAuthoredBy": false
}
```

方式二：使用开源软件 CC-Switch 配置（简单易用，推荐。具体配置详见 [[Development-Tools#CC Switch|CC Switch 笔记]]），软件具体的实现原理也是修改对应 CLI 的配置文件（如 Claude Code 则将软件界面填写的内容，修改到对应的 `C:\Users\用户名\.claude\settings.json` 配置文件中）

### 环境变量配置

除了写入 `settings.json`，也可以通过环境变量临时指定模型与鉴权信息，适合在不同项目之间切换模型：

```bash
# macOS / Linux
export ANTHROPIC_BASE_URL="https://open.bigmodel.cn/api/anthropic"
export ANTHROPIC_AUTH_TOKEN="Your API Key"
export ANTHROPIC_MODEL="glm-4.7-flash"
```

```powershell
# Windows PowerShell
$env:ANTHROPIC_BASE_URL="https://open.bigmodel.cn/api/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="Your API Key"
$env:ANTHROPIC_MODEL="glm-4.7-flash"
```

```bat
:: Windows CMD
set ANTHROPIC_BASE_URL=https://open.bigmodel.cn/api/anthropic
set ANTHROPIC_AUTH_TOKEN=Your API Key
set ANTHROPIC_MODEL=glm-4.7-flash
```

> [!warning] 环境变量只在当前终端会话生效，关闭终端后即失效；需要长期生效请写入 `settings.json`，或用 CC-Switch 管理。

## 基本使用

> [!note] 想要系统学习 Claude Code 的使用，可以看[官方的实战教程](https://anthropic.skilljar.com/claude-code-in-action)。

### 启动交互式模式

```bash
claude-code
```

进入交互模式后，你可以：

1. 输入自然语言描述任务
2. 接收 AI 的代码建议
3. 逐步迭代和改进

### 示例对话流程

```
你: "帮我创建一个 Python 脚本，读取 CSV 文件并计算平均值"
Claude: "好的，我来帮你创建这个脚本。首先让我确认文件路径..."
Claude: "我已经创建了 average_calculator.py，包含以下功能：
- 读取 CSV 文件
- 计算数值列的平均值
- 输出结果到控制台
你想运行测试一下吗？"

你: "是的，运行一下"
Claude: "运行结果...（显示输出）"
```

### 非交互式模式

```bash
# 单次执行命令
claude-code "创建一个 React 组件，显示用户列表"

# 从文件读取指令
claude-code < task.txt
```

## 核心功能

### 1. 代码生成

支持从自然语言描述直接生成代码：

```bash
# 创建新文件
claude-code "创建一个 TypeScript 接口定义"

# 修改现有文件
claude-code "把函数改为 async/await 格式"

# 添加新功能
claude-code "在这个组件中添加错误处理逻辑"
```

### 2. 代码解释

理解代码结构和逻辑：

```bash
claude-code "解释这段代码的作用"
claude-code "这个函数为什么会死循环？"
claude-code "这个依赖项的作用是什么？"
```

### 3. 代码审查

安全检查和改进建议：

```bash
claude-code "审查这个文件的安全性"
claude-code "有没有性能优化建议？"
claude-code "重构这段代码以提高可读性"
```

### 4. 调试辅助

帮助定位和修复问题：

```bash
claude-code "这个错误是什么原因导致的？"
claude-code "如何调试这个崩溃问题？"
claude-code "帮我找出性能瓶颈"
```

### 5. 项目探索

理解项目结构：

```bash
claude-code "项目有哪些主要模块？"
claude-code "这个依赖项的版本是多少？"
claude-code "查找所有使用某个函数的地方"
```

## "/" 命令

Claude Code 提供了一系列斜杠命令（slash commands）来快速执行常用操作。这些命令可以直接在交互模式中输入：

### 常用 "/" 命令

| 命令 | 功能说明 |
|------|----------|
| `/help` | 显示帮助信息，列出所有可用命令 |
| `/clear` | 清除对话上下文，重置当前会话 |
| `/remember <内容>` | 记住重要信息，用于跨会话记忆 |
| `/schedule <时间> <任务>` | 设置定时提醒任务（支持 cron 表达式） |
| `/loop <间隔> <提示>` | 设置定期执行的任务循环 |
| `/exit` 或 `/quit` | 退出交互模式 |

### Skills 相关命令

Claude Code 预置了多个内置 Skills，可通过斜杠命令快速调用：

| 命令 | 功能说明 |
|------|----------|
| `/config` | 配置 Claude Code 设置 |
| `/keybindings` | 查看或自定义键盘快捷键 |
| `/loop` | 设置重复任务循环（/loop 5m /foo, 默认 10 分钟） |
| `/babysit-prs` | 监控并报告 Pull Request 状态 |
| `/loop 30s check-build` | 每 30 秒检查构建状态 |
| `/loop 5m /check-status` | 每 5 分钟执行 /check-status 命令 |

### 监控和管理命令

| 命令 | 功能说明 |
|------|----------|
| `/tasks` | 列出当前任务列表，查看任务状态和依赖 |
| `/task <id>` | 获取指定任务的详细信息 |
| `/task-complete <id>` | 标记任务为已完成 |
| `/task-cancel <id>` | 取消指定任务 |
| `/task-add <subject> <description>` | 创建新任务 |
| `/status` | 查看当前会话状态 |
| `/history` | 查看历史命令记录 |

### Git 操作命令

| 命令 | 功能说明 |
|------|----------|
| `/git status` | 查看仓库状态 |
| `/git diff` | 查看文件变更 |
| `/git log` | 查看提交历史 |
| `/git branch` | 查看分支信息 |
| `/git commit` | 创建提交 |
| `/git push` | 推送到远程仓库 |
| `/git pull` | 从远程拉取更新 |

### 编程技能命令

| 命令 | 功能说明 |
|------|----------|
| `/init` | 初始化项目文档，创建 CLAUDE.md |
| `/review` | 审查代码质量和最佳实践 |
| `/security-review` | 进行安全审查 |
| `/simplify` | 简化和优化代码 |
| `/defuddle <URL>` | 从网页提取清理后的 markdown 内容 |
| `/json-canvas` | 创建或编辑 JSON Canvas 文件 |
| `/obsidian-cli` | 通过 Obsidian CLI 交互 |
| `/obsidian-markdown` | 创建或编辑 Obsidian Markdown 文件 |
| `/obsidian-bases` | 创建或编辑 Obsidian Bases |
| `/claude-api` | 构建、调试 Claude API 应用 |

### 示例用法

```bash
# 显示帮助
/help

# 清除上下文
/clear

# 记住项目重要信息
/remember 我需要在本周五前完成用户认证模块的开发

# 设置定时提醒
/schedule 17:00 检查项目构建状态

# 每小时检查一次依赖更新
/loop 1h npm outdated

# 创建任务并标记完成
/task-add 优化数据库查询性能 针对慢查询日志分析
/task-complete 1

# 退出交互模式
/exit
```

## 命令快捷键

### 交互模式快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+C` | 取消当前操作 |
| `Ctrl+D` | 退出交互模式 |
| `Tab` | 补全命令和文件名 |
| `Up/Down` | 历史命令 |
| `Ctrl+R` | 搜索历史命令 |

### 编辑快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+S` | 保存文件 |
| `Ctrl+Z` | 撤销 |
| `Ctrl+Y` | 重做 |
| `Ctrl+A` | 全选 |
| `Ctrl+W` | 删除单词 |

## 最佳实践

### 写好 CLAUDE.md

CLAUDE.md 是一份 Claude 行为规范，包含：项目怎么启动、测试跑哪条命令、目录怎么分层、团队的特殊约定等等。Anthropic 建议保持 CLAUDE.md 精简不超过 200 行，只保留 Claude 无法轻易从代码中推断的信息。

要判断某个内容是否需要写进 CLAUDE.md，只要验证删除这些内容后，Claude 会不会更容易犯错？

### 提供清晰的上下文

好的请求示例：

```bash
# 清晰上下文
claude-code "在 src/utils/auth.js 中添加 JWT 验证，当前支持登录和注册"

# 模糊上下文
claude-code "添加验证"
```

### 提示词技巧

上下文之外，提示词本身也要尽量具体、可验证：

- 明确输入输出：写清参数、返回值和边界条件，例如「接收两个 `YYYY-MM-DD` 格式的日期，返回天数差」
- 指定技术约束：语言版本、是否允许第三方库、代码风格与注释要求
- 给出参考示例：贴出现有代码片段或期望的输出格式，让 Claude 对齐风格

**好的提示词**：

```text
创建一个函数，接收两个 YYYY-MM-DD 格式的日期参数，使用 JavaScript 返回它们之间的天数差。
```

**不好的提示词**：

```text
写个日期函数
```

### 使用文件路径

明确指定文件位置：

```bash
claude-code "修复 src/components/Header.js 第 42 行的样式问题"
```

### 分解复杂任务

将大任务分解为小步骤：

```bash
# 不要这样
claude-code "重构整个项目的架构"

# 要这样
claude-code "分析当前架构，列出需要改进的地方"
claude-code "先重构数据库层"
claude-code "然后更新 API 层"
```

先让它只读代码，不要改文件。限定范围，让它先把调用链、关键文件、可能原因讲清楚。等方向对了，再让它补测试、改实现、跑验证。*前面慢一点，后面能少很多返工。*

### 利用项目记忆

Claude Code 会记住你的项目上下文，定期提及：

```bash
claude-code "这个改动符合项目的 RESTful 风格吗？"
```

### 安全地执行操作

始终使用 `--dry-run` 预览：

```bash
claude-code --dry-run "删除所有测试文件"
claude-code "删除所有测试文件"  # 确认后再执行
```

### 权限别全放开

- `git diff`、`git status`、`rg`、`npm test` 这类只读或验证命令，可以适当放宽。
- `rm -rf`、强制推送 Git、读 `.env` 文件、改生产配置、改密钥证书等等，需要尽量限制。

### 让 Claude 自己验证结果

Anthropic 官方最佳实践推荐：给 Claude 一个能运行的检查。测试、构建、lint、截图对比、脚本输出都可以。

### MCP、Skills、Hooks 各施其职

- MCP 用来连接外部系统，比如数据库、浏览器、Sentry、Notion。
- Skills 用来沉淀重复流程，比如代码审查、TDD。
- Hooks 用来做硬约束，比如编辑后格式化、提交前跑测试、拦截危险命令。

### 长任务用 Sub-Agent 或 Worktree 拆开

排查日志、搜大仓库、并行改多个模块，别都塞进一个会话里。

- Sub-Agent 适合做局部调查，只把结论带回来。
- Worktree 适合多任务并行，一个分支修认证，一个分支改订单，互不干扰。

## 故障排除

### 常见问题

#### 1. 登录失败

**问题**: 认证失败或无法获取令牌

**解决方案**:

```bash
# 清除缓存
claude-code logout
claude-code login

# 检查网络连接
ping anthropic.com

# 使用代理
claude-code --proxy http://your-proxy:port login
```

#### 2. 安装失败

**问题**: npm 安装报错

**解决方案**:

```bash
# 使用 sudo（macOS/Linux）
sudo npm install -g @anthropic-ai/claude-code

# 或使用 yarn
yarn global add @anthropic-ai/claude-code

# 检查 Node.js 版本
node --version  # 需要 18+

# 升级 Node.js
nvm install 18
nvm use 18

# 清理 npm 缓存
npm cache clean --force

# 使用国内镜像源
npm config set registry https://registry.npmmirror.com
```

#### 3. 内存不足

**问题**: 处理大型项目时内存溢出

**解决方案**:

```bash
# 增加内存限制
claude-code --max-memory 4096

# 限制上下文大小
claude-code --context-size 2048
```

#### 4. 代码不生效

**问题**: 生成的代码无法运行

**解决方案**:

1. 检查生成的代码语法
2. 确认依赖已安装
3. 查看错误日志
4. 重新请求并详细说明问题

#### 5. API Key 无效

**问题**: 提示鉴权失败或额度不足

**解决方案**:

1. 确认 `ANTHROPIC_AUTH_TOKEN` / `ANTHROPIC_API_KEY` 已正确设置，且没有被其他环境变量覆盖
2. 确认 Key 未过期，账户有可用额度
3. 使用第三方模型时，检查 `ANTHROPIC_BASE_URL` 是否与 Key 所属平台一致

#### 6. 响应速度慢

**问题**: 请求等待时间长

**解决方案**:

1. 检查网络连接与代理设置
2. 降低 `maxTokens`，避免一次生成过长内容
3. 日常任务可切换到更快的模型（如 Haiku 系列）
4. 查看 API 配额是否耗尽

#### 7. 如何更新 Claude Code

```bash
# 更新到最新版本
npm update -g @anthropic-ai/claude-code

# 或重新安装最新版
npm install -g @anthropic-ai/claude-code@latest
```

#### 8. 如何保护 API Key

1. 优先使用环境变量或 `settings.json`，不要硬编码到代码中
2. 用 `.gitignore` 排除包含密钥的配置文件
3. 定期轮换 Key，并监控 API 用量

#### 9. 配置文件格式错误

**问题**: 修改 `settings.json` 后启动报解析错误

**解决方案**:

1. 确认 JSON 语法正确，字符串使用双引号
2. 确认引号、括号成对匹配，没有多余逗号
3. 用 JSON 校验工具检查后再保存

### 日志和调试

```bash
# 启用调试模式
claude-code --debug

# 查看帮助
claude-code --help

# 查看版本
claude-code --version
```

## 学习资源

### 官方文档

- [Claude Code 官方网站](https://claude.ai/code)
- [Anthropic 官方文档](https://docs.anthropic.com)
- [Claude API 文档](https://docs.anthropic.com/claude/reference)

### 社区资源

- [GitHub 仓库](https://github.com/anthropic/claude-code)
- [Discord 社区](https://discord.gg/anthropic)
- [Reddit 社区](https://reddit.com/r/Claude)

### 相关技能

- **init**: 初始化项目文档
- **review**: 审查代码
- **security-review**: 安全审查
- **simplify**: 简化和优化代码

## 进阶技巧

### 1. 自定义配置

创建 `~/.claude/settings.json`:

```json
{
  "theme": "dark",
  "max_memory": 4096,
  "context_size": 2048,
  "auto_save": true,
  "show_confirmations": true
}
```

### 2. 创建别名

在 `.bashrc` 或 `.zshrc` 中添加：

```bash
alias cc="claude-code"
alias ccr="claude-code --review"
alias ccs="claude-code --simplify"
```

### 3. 集成到编辑器

支持多种编辑器集成：

- **VS Code**：在扩展面板（Ctrl+Shift+X）搜索 “Claude Code”，安装 Anthropic 官方扩展
- **JetBrains**（IntelliJ IDEA、WebStorm 等）：在插件市场安装 Claude Code 插件
- **Neovim**：通过社区插件或终端面板直接调用 Claude Code CLI
- **其他编辑器**：可直接在编辑器的终端窗口中运行 `claude`，共享项目上下文

### 4. 自定义 Skills

Skills 是 Claude Code 的能力扩展包，用来把重复流程（代码审查、TDD、发布检查等）沉淀成可复用的规范。自定义 Skill 放在项目的 `.claude/skills/<skill-name>/` 目录，核心是一个 `SKILL.md`，写明触发条件、步骤和约束：

```markdown
---
name: code-reviewer
description: 按团队规范审查本次改动的代码
---

## 审查步骤

1. 读取 `git diff`，确认改动范围
2. 检查命名、异常处理与边界条件
3. 输出问题清单，按「必须改 / 建议改」分级
```

> [!tip] Skill 只写 Claude 无法从代码中推断的约定，避免与 CLAUDE.md 内容重复。

## 总结

Claude Code 是一个强大的编程助手，能够显著提高开发效率。通过掌握其基本用法和最佳实践，你可以：

- 快速生成和维护代码
- 深入理解项目结构
- 高效进行代码审查
- 快速定位和修复问题

建议定期查看官方更新，探索新功能，并根据个人习惯调整配置。

## 参考资料

- [Learn Claude Code](https://learn.shareai.run/zh/)