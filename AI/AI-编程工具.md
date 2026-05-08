---
tags:
  - Software
  - AI
---

## AI 编程工具

AI 编程工具按使用方式可分为 3 大类：

- AI 零代码平台
- AI 代码编辑器
- AI 命令行工具（CLI）

### AI 零代码平台

在浏览器里打开就能用，不需要安装任何软件，不需要懂任何代码。适合完全零基础的新手、快速做出原型。

- 代表工具：Bolt.new、Lovable、秒哒
- 优势：上手快、所见即所得、自动部署
- 缺点：功能相对简单，复杂项目可能力不从心

### AI 代码编辑器

需要下载安装的软件，界像传统代码编辑器，内置了强大的 AI 助手。适合有一定基础、想深入学习 VibeCoding、需要做复杂项目。

- 代表工具：Cursor、Windsurf、Antigravity、Augment Code
- 优势：功能强大、灵活度高、适合大型项目
- 缺点：需要一定学习成本，对新手不够友好

### AI 命令行工具

在终端里通过命令行和 AI 对话，适合有编程基础的开发者、喜欢命令行的极客。

- 代表工具：Claude Code、Gemini CLI
- 优势：效率极高、自动化程度强、成本可控
- 缺点：需要一定技术基础，新手不建议使用

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