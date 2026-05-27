---
tags:
  - Software
  - AI
---

## AI 编程工具概述

AI 编程工具按使用方式可分为 3 大类：

- AI 零代码平台：在浏览器里打开就能用，不需要安装任何软件，不需要懂任何代码。适合完全零基础的新手、快速做出原型。代表工具：Bolt.new、Lovable、秒哒
    - 优势：上手快、所见即所得、自动部署
    - 缺点：功能相对简单，复杂项目可能力不从心
- AI 代码编辑器：需要下载安装的软件，界像传统代码编辑器，内置了强大的 AI 助手。适合有一定基础、想深入学习 VibeCoding、需要做复杂项目。代表工具：Cursor、Windsurf、Antigravity、Augment Code
    - 优势：功能强大、灵活度高、适合大型项目
    - 缺点：需要一定学习成本，对新手不够友好
- AI 命令行工具（CLI）：在终端里通过命令行和 AI 对话，适合有编程基础的开发者、喜欢命令行的极客。代表工具：Claude Code、Gemini CLI
    - 优势：效率极高、自动化程度强、成本可控
    - 缺点：需要一定技术基础，新手不建议使用

## AI 零代码平台

### Bolt.new

**Bolt.new**是由 StackBlitz 公司于**2024 年 10 月 4 日**推出的**AI 驱动的全栈 Web 开发平台**，它将先进的 AI 模型与 WebContainer 技术深度整合，让开发者能够**直接在浏览器中通过自然语言提示快速构建、运行、编辑和部署完整的 Web 应用**，无需任何本地开发环境设置。

> 官网 https://bolt.new/

#### 一、核心定位与开发背景

| 项目 | 详情 |
|------|------|
| **开发公司** | StackBlitz（知名在线 IDE 开发商，以 WebContainer 技术闻名，可在浏览器中直接运行 Node.js） |
| **核心使命** | 简化全栈开发流程，降低开发门槛，让任何人都能通过自然语言描述快速创建功能完整的 Web 应用 |
| **技术基础** | WebContainer（浏览器内 Node.js 运行时）+ 尖端 AI 模型（最初为 Claude 3.5 Sonnet，后续支持多种模型） |
| **融资情况** | 由 a 16 z（Andreessen Horowitz）投资，发布 5 个月内实现 4000 万美元 ARR（年化经常性收入） |

Bolt.new 代表了 Web 开发的未来趋势——**AI 辅助开发+浏览器内全栈环境+无代码/低代码结合**，它不仅降低了开发门槛，还显著提升了开发效率，让"想法到产品"的周期从数周缩短到数小时甚至数分钟。随着 AI 技术的不断进步和 WebContainer 性能的提升，Bolt.new 有望支持更复杂的应用场景，成为全栈开发的主流工具之一。对于开发者而言，掌握这种 AI 辅助开发工具将成为未来的必备技能。

#### 二、核心技术原理

1.  **WebContainer 技术**：StackBlitz 自主研发的浏览器内运行时，无需虚拟机或 Docker 即可在浏览器中原生运行完整的 Node.js 环境，包括文件系统、终端和包管理器
2.  **AI Agent 架构**：Bolt 的 AI 代理能够理解复杂的自然语言需求，自动完成：
    - 项目结构搭建
    - 前后端代码生成（支持 React、Next.js、Nuxt、Node.js 等主流框架）
    - 数据库集成与配置
    - 依赖安装与版本管理
    - 实时错误修复与优化
3.  **自然语言处理**：支持中文等多语言提示，能理解详细的功能描述、UI 设计要求和业务逻辑

#### 三、主要功能与特点

##### 1. 核心开发能力

| 功能 | 描述 |
|------|------|
| **自然语言生成** | 输入文字描述（如"创建一个带用户认证和任务管理的项目管理工具"），AI 自动生成完整可运行的应用 |
| **全栈支持** | 同时生成前端 UI、后端 API、数据库模型和认证系统，无需分开开发 |
| **实时预览** | 代码生成后立即在浏览器中运行，所见即所得，支持实时编辑与热重载 |
| **代码编辑** | 内置功能完善的代码编辑器，支持语法高亮、自动补全、错误提示等 IDE 级功能 |
| **终端访问** | 完整的浏览器内终端，可执行 npm/yarn 命令、运行脚本、调试代码 |

##### 2. 协作与部署能力

- **一键部署**：支持直接部署到 Vercel、Netlify、Cloudflare Pages 等主流托管平台
- **GitHub 集成**：可导入/导出项目到 GitHub，方便版本控制与团队协作
- **实时协作**：支持多人同时编辑同一项目，适合团队快速原型开发
- **项目分享**：生成可共享链接，让他人直接在浏览器中查看和运行你的应用

##### 3. 高级特性

- **AI 迭代优化**：可通过对话式交互持续改进应用，如"添加暗黑模式"、"优化移动端布局"
- **自定义模型**：支持切换不同 AI 模型（如 Claude、GPT-4 等），适配不同开发需求
- **模板库**：提供多种预构建模板，快速启动常见应用类型（如博客、电商、管理系统）
- **错误自动修复**：AI 能检测并修复代码中的常见错误，提升开发效率
- **无代码/低代码结合**：既适合完全不懂代码的初学者，也支持专业开发者深度定制代码

#### 四、使用流程

1.  **访问平台**：打开浏览器，输入官方网址，无需注册即可开始使用免费版
2.  **描述需求**：在左侧聊天框中用自然语言详细描述你想要构建的应用，例如：
    > "创建一个个人博客网站，包含文章列表、详情页、分类功能、评论系统和管理员后台，使用 Next.js 和 Tailwind CSS，支持暗黑模式"
3.  **生成应用**：点击"Build now"按钮，AI 开始分析需求并生成代码，通常需要 1-5 分钟（取决于应用复杂度）
4.  **预览与编辑**：生成完成后，右侧会显示实时运行的应用预览和完整的代码结构，可直接修改代码并实时查看效果
5.  **调试与优化**：通过聊天框与 AI 交互，提出修改建议，如"把导航栏颜色改为蓝色"、"添加用户注册功能"
6.  **部署上线**：点击部署按钮，选择目标平台，完成一键部署，获得可访问的在线应用链接
7.  **导出项目**：可将完整代码导出到本地或 GitHub，进行后续开发与维护

#### 五、适用场景与用户群体

| 用户类型 | 典型使用场景 |
|----------|--------------|
| **初学者** | 快速学习 Web 开发，无需配置复杂环境，通过实践理解项目结构 |
| **设计师** | 将设计理念快速转化为可交互原型，验证用户体验 |
| **产品经理** | 快速构建 MVP（最小可行产品），用于市场测试和需求验证 |
| **创业者** | 降低开发成本，快速推出产品原型，吸引投资 |
| **专业开发者** | 加速项目启动，自动生成重复性代码，专注核心业务逻辑开发 |
| **教育工作者** | 用于编程教学，让学生专注于逻辑思考而非环境配置 |

#### 六、支持的技术栈与框架

Bolt.new 支持主流的 Web 开发技术栈，包括但不限于：

- **前端框架**：React、Next.js、Vue、Nuxt、Svelte、Angular
- **CSS 框架**：Tailwind CSS、Bootstrap、Material UI
- **后端技术**：Node.js、Express、Fastify、Prisma ORM
- **数据库**：SQLite、PostgreSQL、MySQL、MongoDB
- **认证系统**：NextAuth.js、Auth.js、JWT
- **部署平台**：Vercel、Netlify、Cloudflare Pages、AWS、Google Cloud

#### 七、价格体系（2026 年最新）

Bolt.new 提供多种定价方案，满足不同用户需求：

| 方案 | 价格 | 核心功能 |
|------|------|----------|
| **免费版** | 0 美元 | 基础 AI 生成、单个项目、有限部署次数、社区支持 |
| **Pro 版** | 每月 19 美元 | 无限项目、高级 AI 模型、优先支持、更多部署选项 |
| **团队版** | 每月 99 美元起 | 团队协作、用户管理、高级安全功能、自定义模板 |
| **企业版** | 定制价格 | 私有部署、专属 AI 模型、企业级支持、数据隔离 |

#### 八、优势与局限性

**优势**：

1.  **零环境配置**：彻底告别本地开发环境搭建的繁琐过程，打开浏览器即可开发
2.  **开发效率提升**：AI 自动完成重复性工作，开发者可专注于核心业务逻辑
3.  **学习曲线平缓**：降低 Web 开发门槛，让非专业开发者也能创建功能完整的应用
4.  **无缝协作**：浏览器内开发环境，无需同步代码，团队成员可实时协作
5.  **快速部署**：一键部署到主流平台，缩短开发到上线的周期

**局限性**：

1.  **复杂应用支持有限**：对于超大规模、高并发或特殊技术栈的应用，可能需要大量手动调整
2.  **依赖网络连接**：完全基于浏览器，离线状态下无法使用
3.  **AI 生成质量**：虽然持续改进，但复杂需求下仍可能需要人工修正代码
4.  **隐私与安全**：敏感项目代码存储在云端，可能存在数据安全顾虑（企业版可私有部署）

#### 九、与其他类似工具的对比

| 工具 | 核心区别 | 优势场景 |
|------|----------|----------|
| **Bolt.new** | 全栈开发+浏览器内运行时+AI 深度集成 | 快速构建完整 Web 应用，无需本地环境 |
| **v 0.dev** | 专注前端 UI 生成，基于 React 和 Tailwind | 快速生成美观的前端界面，适合设计师 |
| **Cursor** | 本地 IDE 集成 AI，支持代码补全和生成 | 专业开发者日常开发，需要本地环境控制 |
| **Replit** | 多语言在线 IDE，支持协作 | 学习编程，快速测试代码片段 |

## AI 命令行编程工具

### 命令行工具和代码编辑器的区别

AI 代码编辑器是有图形界面的软件，可以看到文件列表、代码高亮、按钮等等。而命令行工具完全在终端运行，只有文字输入和输出，几乎没有任何图形界。

### 命令行工具的优势

为什么有些开发者更喜欢命令行工具？

- **速度快**：不需要加载图形界面，启动速度极快，而且全键盘操作效率更高。
- **资源占用少**：因为没有图形界面，内存和 CPU 占用很低，在配置一般的电脑上也能流畅运行。
- **自动化**：命令行工具可以写脚本批量处理任务，或者集成到自动化流程中。
- **远程开发**：通过 SSH 连接到服务器，可以直接在服务器上使用命令行工具开发。

### CLI 在 AI 时代的优势

现在的 CLI 不是在给人类做，而是在做给 AI。

**CLI 是 AI 的母语**。AI 模型从诞那天起就在学习海量的代码、命令操作、终端输出。让它读一命令、执行一个操作，相当简单。但很难让 AI 去操作图形界（如：打开浏览器、等待页面加载、找到按钮、处理网页元素，中间有大量和内容无关的干扰信息）

**面向 AI 做产品，给 AI 使用，越简单直接越好**。现在都是比谁先把自己的产品 CLI 化，谁就能先被 AI Agent 接入，才能在 AI 时代保持竞争力。以前产品之间的互通靠 API，现在 AI 时代产品和 AI 之间的互通靠 CLI。现在大厂们纷纷开源自己产品的 CLI 工具（Google、飞书、钉钉、企业微信等），本质上就是在给 AI 提供操作自己产品的接口。

以前做产品只考虑人类用户怎么用，现在还得考虑 AI 怎么用。所以未来的产品可能会有两套前端：一套给人类看的 GUI，一套给 AI 用的 CLI。

### 常用 AI CLI

#### Claude Code

Claude Code 是 Anthropic 公司推出的官方命令行 AI 编程工具，直接集成了 Claude 模型。它是目前功能最强大的命令行编程工具之一。具体内容详见《[[Claude-Code|Claude Code 文档]]》

#### Gemini CLI

Gemini CLI 是 Google 推出的开源命令行工具，集成了 Gemini 模型。最大的优势是有免费额度，而且支持超长上下文（100 万 Token），可以一次性分析整个大型项目。适合想尝试命令行工具，但预算有限、需要分析大型项目的开发者。它采用 ReAct（推理和行动）循环，AI 会先思考再行动，处理复杂任务的能力比较强。而且支持 MCP（Model Context Protocol），可以连接各种外部工具和服务。

用法跟 Claude Code 类似，可以使用 npm 命令安装：

```bash
npm install -g @google/gemini-cli
```

然后输入 `gemini` 即可运行了。

#### Warp

Warp 是一个现代化的终端工具，它不仅是终端，还集成了代码编辑器和 AI 助手，三位一体。Warp 的界面比 Claude Code 更易用，支持 AI 命令建议和团队协作功能。如果经常在终端里工作，又想要更好的交互体验，Warp 是个不错的选择。它能让在享受命令行效率的同时，不用完全放弃图形界面的便利。

最近 Warp 正式宣布全面开源，其客户端代码库已在 GitHub 上公开。Warp 自诞生以来就定位为 "诞生于终端的代理式开发环境"（agentic development environment）。与传统终端不同，Warp 内置了编码代理功能，开发者可以直接在终端中调用 AI 助手完成代码编写、调试和重构等任务。同时，Warp 也支持接入第三方 CLI 代理工具，包括 Claude Code、Codex、Gemini CLI 等，为开发者提供了极大的灵活性。

Warp 将 AI 代理能力深度集成到开发者的日常工具链中，代表了开发环境智能化的重要方向。在 OpenAI 的支持下，Warp 有望持续引领终端工具的 AI 化变革。

- 官网：https://www.warp.dev/
- Github 仓库：https://github.com/warpdotdev/warp

#### GitHub Copilot CLI

GitHub Copilot 是微软推出的 AI 编程助手，而 GitHub Copilot CLI 是它的命令行版本，可以在终端里使用 AI 辅助。它与 GitHub 深度集成、支持 MCP 协议、可以生成和解释命令。

如果已经在用 GitHub Copilot 做代码补全，那么 Copilot CLI 能终端里也享受到类似的 AI 辅助，特别适合需要频繁执行命令的场景。

#### OpenCode

OpenCode 是最近非常火的开源命令行 AI 编程工具，被称为 “Claude Code 的开源版”。OpenCode 最大的优势是 **完全免费开源**，相比 Claude Code，OpenCode 不需要付费订阅，也没有地区限制，对国内用户特别友好。如果想尝试命令行 AI 编程，但不想付费，OpenCode 是最佳选择。

它提供直观的终端界面、会话管理、自定义命令等功能。而且支持多模型自由切换，包括 Claude、GPT、Gemini、DeepSeek 等。可以根据不同任务选择最合适的模型，不用被单一模型限制。

使用以下命令安装：

```bash
curl -fsSL https://opencode.ai/install | bash
```

然后执行 `opencode` 命令即可使用。

## 国内免费大模型 API 完整清单（2026 年 5 月）

**核心速览**：截至 2026 年 5 月 3 日，国内共有 10 + 主流平台提供免费大模型 API 服务，其中**智谱 GLM-4.7-Flash 完全免费无上限**、**阿里云百炼 Qwen-Turbo 永久免费**、**百度文心一言 / 讯飞星火 / 腾讯混元**提供长期免费额度，其余平台提供新用户免费体验包。

### 一、核心免费大模型 API 平台对比总览表

| 平台                | 核心免费模型   | 免费额度                   | 有效期 | 并发限制 | 上下文窗口 | 关键优势                                |
| ------------------- | -------------- | -------------------------- | ------ | -------- | ---------- | --------------------------------------- |
| **智谱 AI**         | GLM-4.7-Flash  | 完全免费，无 token 上限    | 永久   | 30       | 128K       | 编程能力强，30B 级最强模型，OpenAI 兼容 |
| **阿里云百炼**      | Qwen-Turbo     | 每月 100 万 token          | 永久   | 5        | 128K       | 中文效果好，长文档处理强，模型最全      |
| **百度文心一言**    | ERNIE-Bot      | 每月 100 万 token          | 长期   | 5        | 128K       | 中文理解地道，数理逻辑准确率 92%+       |
| **讯飞星火**        | Spark Lite     | 永久免费，每月 20 万 token | 永久   | 3        | 32K        | 语音能力突出，多语言支持 130+           |
| **腾讯混元**        | Hunyuan-Lite   | 100 万 token 共享包        | 1 年   | 5        | 64K        | 腾讯生态深度集成，多模态能力强          |
| **月之暗面 Kimi**   | Kimi-K2.5      | Tier 0 免费额度            | 长期   | 2        | 128K       | 长文本处理专家，支持 100 万字上下文     |
| **DeepSeek**        | DeepSeek-Flash | 新用户 100 万 token        | 30 天  | 3        | 128K       | 推理速度快，代码生成能力优异            |
| **MiniMax**         | MiniMax-M1     | 新用户 15 元代金券         | 长期   | 6 RPM    | 64K        | 对话自然度高，适合聊天机器人            |
| **魔搭 ModelScope** | Qwen 系列      | 每天 2000 次调用           | 长期   | 10       | 64K        | 开源模型丰富，支持本地部署              |
| **硅基流动**        | 多模型聚合     | 新用户 2000 万 token       | 永久   | 5        | 128K       | 一站式调用多模型，国内直连              |

### 二、各平台详细介绍与关键配置

#### 1. 智谱 AI（GLM 系列）⭐⭐⭐⭐⭐【最推荐】

**平台定位**：国内领先的大模型开放平台，编程能力突出，GLM-4.7-Flash 为 30B 级最强模型

**免费模型与额度**：

- **GLM-4.7-Flash**：完全免费，无 token 上限，仅限制 30 并发
- **新用户福利**：注册即送 2000-2500 万 Token 体验包，永久有效
- **GLM-4V**：每月 50 万 tokens，新用户送 10 万图像 tokens

**关键配置参数**：

| 参数        | 推荐值                                 | 说明            |
| ----------- | -------------------------------------- | --------------- |
| 基础 URL    | `https://open.bigmodel.cn/api/paas/v4` | OpenAI 兼容接口 |
| 模型 ID     | `glm-4.7-flash`                        | 免费主力模型    |
| max_tokens  | 16384                                  | 最大输出长度    |
| temperature | 0.7                                    | 创造力控制      |
| top_p       | 0.6                                    | 智谱官方推荐    |
| top_k       | 2                                      | 智谱官方推荐    |

**调用示例（Python）**：

```python
from openai import OpenAI

client = OpenAI(
    api_key="你的智谱API Key",
    base_url="https://open.bigmodel.cn/api/paas/v4"
)

response = client.chat.completions.create(
    model="glm-4.7-flash",
    messages=[{"role": "user", "content": "写一个Python冒泡排序算法"}]
)
print(response.choices[0].message.content)
```

#### 2. 阿里云百炼（通义千问）⭐⭐⭐⭐【模型最全】

**平台定位**：一站式模型服务平台，集成 Qwen 全系列及主流开源模型

**免费模型与额度**：

- **Qwen-Turbo**：每月 100 万 token，永久免费
- **Qwen-7B**：无限制免费
- **Qwen-14B**：每月 100 万 tokens，Qwen-72B：每月 50 万 tokens
- **新用户福利**：各模型 100 万 tokens（90 天），新用户送 1000 元通用代金券

**关键配置参数**：

| 参数               | 推荐值                                              | 说明            |
| ------------------ | --------------------------------------------------- | --------------- |
| 兼容 URL           | `https://dashscope.aliyuncs.com/compatible-mode/v1` | OpenAI 兼容接口 |
| 官方 URL           | `https://dashscope.aliyuncs.com/api/v1`             | 原生接口        |
| 模型 ID            | `qwen-turbo`/`qwen-7b`/`qwen-14b`                   | 免费模型        |
| max_tokens         | 8192                                                | 最大输出长度    |
| temperature        | 0.7                                                 | 创造力控制      |
| repetition_penalty | 1.05                                                | 避免重复        |

**调用示例（Python）**：

```python
from openai import OpenAI

client = OpenAI(
    api_key="你的阿里云API Key",
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1"
)

response = client.chat.completions.create(
    model="qwen-turbo",
    messages=[{"role": "user", "content": "分析一篇电商产品评论的情感倾向"}]
)
print(response.choices[0].message.content)
```

#### 3. 百度文心一言（ERNIE 系列）⭐⭐⭐⭐【中文王者】

**平台定位**：百度研发的中文大模型，中文理解地道，数理逻辑能力强

**免费模型与额度**：

- **ERNIE-Bot**：每月 100 万 tokens
- **ERNIE-Speed**：每月 50 万 tokens
- **ERNIE-4.0**：每月 30 万 tokens
- **新用户福利**：注册送 150 万 tokens，企业认证送 200 万 tokens / 月

**关键配置参数**：

| 参数              | 推荐值                                                                        | 说明         |
| ----------------- | ----------------------------------------------------------------------------- | ------------ |
| 基础 URL          | `https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie_bot` | 原生接口     |
| 模型 ID           | `ernie_bot`/`ernie_speed`/`ernie_4.0`                                         | 免费模型     |
| max_output_tokens | 4096                                                                          | 最大输出长度 |
| temperature       | 0.8                                                                           | 创造力控制   |
| top_p             | 0.8                                                                           | 采样参数     |

**调用示例（Python）**：

```python
import requests
import json

url = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie_bot?access_token=你的access_token"

payload = json.dumps({
    "messages": [{"role": "user", "content": "解释什么是机器学习"}]
})
headers = {
    'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)
print(response.json()["result"])
```

#### 4. 讯飞星火（Spark 系列）⭐⭐⭐【语音交互强】

**平台定位**：科大讯飞研发的认知大模型，语音能力突出，多语言支持

**免费模型与额度**：

- **Spark Lite**：永久免费，每月 20 万 token
- **新用户福利**：注册可免费领取 100 万 Tokens，个人认证用户可领取 20 万 tokens 免费包

**关键配置参数**：

| 参数         | 推荐值                                             | 说明             |
| ------------ | -------------------------------------------------- | ---------------- |
| 基础 URL     | `https://spark-api.xfyun.cn/v3.5/chat/completions` | 原生接口         |
| 模型 ID      | `spark-lite`                                       | 免费模型         |
| max_tokens   | 8192                                               | 最大输出长度     |
| temperature  | 0.7                                                | 创造力控制       |
| top_p        | 0.9                                                | 采样参数         |
| voice_enable | False                                              | 是否启用语音输出 |

**调用示例（Python）**：

```python
import requests
import base64
import hashlib
import hmac
import json
from datetime import datetime
from time import mktime
from wsgiref.handlers import format_date_time

def get_auth_header(api_key, api_secret):
    # 生成认证头
    date = format_date_time(mktime(datetime.now().timetuple()))
    signature_origin = f"host: spark-api.xfyun.cn\ndate: {date}\nPOST /v3.5/chat/completions HTTP/1.1"
    signature_sha = hmac.new(api_secret.encode('utf-8'), signature_origin.encode('utf-8'), hashlib.sha256).digest()
    signature = base64.b64encode(signature_sha).decode(encoding='utf-8')
    authorization_origin = f'api_key="{api_key}", algorithm="hmac-sha256", headers="host date request-line", signature="{signature}"'
    authorization = base64.b64encode(authorization_origin.encode('utf-8')).decode(encoding='utf-8')
    return {
        "Authorization": authorization,
        "Content-Type": "application/json",
        "Host": "spark-api.xfyun.cn",
        "Date": date
    }

url = "https://spark-api.xfyun.cn/v3.5/chat/completions"
api_key = "你的API Key"
api_secret = "你的API Secret"
headers = get_auth_header(api_key, api_secret)

payload = json.dumps({
    "model": "spark-lite",
    "messages": [{"role": "user", "content": "用中文写一篇关于人工智能的短文"}]
})

response = requests.request("POST", url, headers=headers, data=payload)
print(response.json()["choices"][0]["message"]["content"])
```

#### 5. 腾讯混元（Hunyuan 系列）⭐⭐⭐【腾讯生态】

**平台定位**：腾讯研发的大模型，与腾讯云、微信生态深度集成

**免费模型与额度**：

- **Hunyuan-Lite**：永久免费，5 并发
- **通用资源包**：10 款主力模型共享 100 万 Tokens（有效期 1 年）
- **学生福利**：学生认证用户每日可获 5 万 tokens（普通用户 1-5 万）

**关键配置参数**：

|参数|推荐值|说明|
|---|---|---|
|基础 URL|`https://hunyuan.tencentcloudapi.com`|腾讯云 SDK 接口|
|模型 ID|`hunyuan-lite`/`hunyuan-standard`|免费模型|
|max_tokens|8192|最大输出长度|
|temperature|0.7|创造力控制|
|top_p|0.8|采样参数|

**调用示例（Python）**：

```python
from tencentcloud.common import credential
from tencentcloud.hunyuan.v20230901 import hunyuan_client, models

cred = credential.Credential("你的SecretId", "你的SecretKey")
client = hunyuan_client.HunyuanClient(cred, "ap-guangzhou")

req = models.ChatCompletionsRequest()
req.Model = "hunyuan-lite"
req.Messages = [{"Role": "user", "Content": "解释云计算的概念"}]

resp = client.ChatCompletions(req)
print(resp.Choices[0].Message.Content)
```

#### 6. 月之暗面（Kimi 系列）⭐⭐⭐【长文本专家】

**平台定位**：月之暗面研发的大模型，长文本处理能力突出，支持 100 万字上下文

**免费模型与额度**：

- **Kimi-K2.5**：Tier 0 免费额度（每月约 5 万 tokens）
- **新用户福利**：实名认证送 15 元代金券

**关键配置参数**：

|参数|推荐值|说明|
|---|---|---|
|基础 URL|`https://api.moonshot.ai/v1`|OpenAI 兼容接口|
|模型 ID|`kimi-k2.5`|免费模型|
|max_tokens|16384|最大输出长度|
|temperature|0.7|创造力控制|
|top_p|0.9|采样参数|

**调用示例（Python）**：

```python
from openai import OpenAI

client = OpenAI(
    api_key="你的Kimi API Key",
    base_url="https://api.moonshot.ai/v1"
)

response = client.chat.completions.create(
    model="kimi-k2.5",
    messages=[{"role": "user", "content": "总结一篇10万字的学术论文"}]
)
print(response.choices[0].message.content)
```

#### 7. 其他免费大模型 API 平台

|平台|免费模型|免费额度|关键配置|适用场景|
|---|---|---|---|---|
|**DeepSeek**|DeepSeek-Flash|新用户 100 万 token（30 天）|base_url: `https://api.deepseek.com/v1`|代码生成、推理任务|
|**MiniMax**|MiniMax-M1|新用户 15 元代金券|base_url: `https://api.minimax.io/v1`|聊天机器人、对话系统|
|**魔搭 ModelScope**|Qwen 系列、Llama 系列|每天 2000 次调用|base_url: `https://api.modelscope.cn/v1`|开源模型测试、多模型对比|
|**硅基流动**|GLM-4.7-Flash、Qwen-Turbo|新用户 2000 万 token（永久）|base_url: `https://api.siliconflow.cn/v1`|一站式模型调用、国内直连|
|**NVIDIA NIM**|Kimi k2.5、MiniMax M2.1、GLM-4.7|调用次数无限，40 RPM|base_url: `https://integrate.api.nvidia.com/v1`|多模型测试、高性能推理|

### 三、免费大模型 API 选择指南

1. **编程开发首选**：**智谱 GLM-4.7-Flash**（完全免费、编程能力强、OpenAI 兼容）
2. **中文内容生成首选**：**阿里云 Qwen-Turbo**（永久免费、中文效果好、长文档处理强）
3. **语音交互首选**：**讯飞星火 Lite**（永久免费、语音能力突出）
4. **腾讯生态用户首选**：**腾讯混元 Lite**（永久免费、与腾讯云深度集成）
5. **长文本处理首选**：**月之暗面 Kimi-K2.5**（免费额度、支持 100 万字上下文）

### 四、获取 API Key 通用步骤

1. 访问对应平台官网注册账号（智谱：[bigmodel.cn](https://bigmodel.cn)，阿里云：[bailian.console.aliyun.com](https://bailian.console.aliyun.com)等）
2. 完成实名认证（个人认证即可，通常需要身份证）
3. 进入 API Key 管理页面创建密钥（注意：密钥仅显示一次，需妥善保存）
4. 在代码中配置 API Key 和基础 URL，即可开始调用
