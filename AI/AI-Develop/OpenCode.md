## OpenCode 简介

OpenCode 是一个开源的 AI 编码代理。它提供终端界面、桌面应用和 IDE 扩展等多种使用方式。

- OpenCode 官网 https://opencode.ai/
- OpenCode 文档 https://opencode.ai/docs/zh-cn/

### 安装

安装 OpenCode 最简单的方法是通过安装脚本。

```bash
curl -fsSL https://opencode.ai/install | bash
```

如果安装 Node.js，可以使用 `npm` 命令安装

```bash
npm install -g opencode-ai
```

然后在终端执行 `opencode` 命令即可使用。

> [!info] 推荐：使用 WSL 为了在 Windows 上获得最佳体验，我们推荐使用 Windows Subsystem for Linux (WSL)。它提供更好的性能，并完全兼容 OpenCode 的所有功能。

## Windows (WSL) 使用 OpenCode

虽然 OpenCode 可以直接在 Windows 上运行，但推荐使用 [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install) 以获得最佳体验。WSL 提供了一个 Linux 环境，能够与 OpenCode 的各项功能无缝配合。

> [!note] WSL 提供更出色的文件系统性能、完整的终端支持，以及与 OpenCode 所依赖的开发工具的良好兼容性。

### 安装配置

- **安装 WSL**。如果尚未安装，请参照 Microsoft 官方指南[安装 WSL](https://learn.microsoft.com/en-us/windows/wsl/install)。
- **在 WSL 中安装 OpenCode**。WSL 设置完成后，打开 WSL 终端，按前面章节[[OpenCode#安装|安装]] OpenCode。
- **从 WSL 中使用 OpenCode**。导航到相应的项目目录（通过 `/mnt/c/`、`/mnt/d/` 等路径访问 Windows 文件），然后运行 OpenCode。例如：

```bash
cd /mnt/c/Users/YourName/project
opencode
```

## 配置

OpenCode 是使用 JSON 配置。

### 配置的格式

OpenCode 支持 **JSON** 和 **JSONC**（带注释的 JSON）格式。如 `opencode.jsonc`

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "anthropic/claude-sonnet-4-5",
  "autoupdate": true,
  "server": {
    "port": 4096,
  },
}
```

### 配置的位置

配置放置在不同的位置，它们具有不同的优先级顺序。配置文件是合并在一起的，而不是被替换。来自以下配置位置的设置会被合并。后面的配置仅在键冲突时覆盖前面的配置。所有配置中的非冲突设置都会被保留。

> [!info] 配置文件是合并在一起的，而不是替换！例如，如果在全局配置设置了 `autoupdate: true`，而项目配置设置了 `model: "anthropic/claude-sonnet-4-5"`，则最终配置将包含这两个设置。

#### 优先级顺序

配置源按以下顺序加载（后面的源覆盖前面的源）：

1. **远程配置**（来自 `.well-known/opencode`）- 组织默认值
2. **全局配置**（`~/.config/opencode/opencode.json`）- 用户偏好
3. **自定义配置**（`OPENCODE_CONFIG` 环境变量）- 自定义覆盖
4. **项目配置**（项目中的 `opencode.json`）- 项目特定设置
5. **`.opencode` 目录** - 代理、命令、插件
6. **内联配置**（`OPENCODE_CONFIG_CONTENT` 环境变量）- 运行时覆盖

> [!note] 即项目配置可以覆盖全局默认值，全局配置可以覆盖远程组织默认值。值得注意：`.opencode` 和 `~/.config/opencode` 目录的子目录使用**复数名称**：`agents/`、`commands/`、`modes/`、`plugins/`、`skills/`、`tools/` 和 `themes/`。为了向后兼容，也支持单数名称（例如 `agent/`）。

#### 全局配置

OpenCode 使用全局配置来设置用户级别的偏好，例如主题、提供商或快捷键。全局配置覆盖远程组织默认值。全局配置位置如下：

- Window：`C:\Users\<用户名>\.config\opencode` （`%USERPROFILE%\.config\opencode`）
- Linux：`~/.config/opencode/opencode.json`

#### 项目级配置

在项目根目录中添加 `opencode.json`。项目配置在标准配置文件中具有最高优先级——它会覆盖全局配置和远程配置。当 OpenCode 启动时，它会在当前目录中查找配置文件，或向上遍历到最近的 Git 目录。该配置文件也可以安全地提交到 Git 中，并使用与全局配置相同的 Schema。

> [!tip] 将项目特定配置放在项目的根目录中。
