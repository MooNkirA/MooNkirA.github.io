## 开发辅助工具

### SwitchHosts

- 官网：https://github.com/oldj/SwitchHosts

#### SwitchHosts 简介

SwitchHosts! 是一款可以方便管理和一键切换多个 hosts 方案的免费开源工具，跨平台支持 Windows、macOS 和 Linux 系统。除了可以帮助你快速切换不同的 hosts 设置、编辑 hosts 文件外，它还有着一些很不错的特性，比如:

- 免费、开源、支持三大操作系统
- 系统托盘快速「一键切换」不同的 hosts 方案
- 支持 hosts 文件语法高亮，可以方便用户更直观地阅读和修改 Hosts 内容;
- 编辑 hosts 时，可以点击行号可以对行进行快速注释或取消注释
- 支持远程 hosts，直接从指定网址读取 hosts 内容，方便多台机器同步 hosts 设置，这是一个很赞的特性！
- 支持 hosts 配置的导入、导出备份
- macOS 系统下可以支持 Alfred workflow 快速切换

#### 解决 host 文件无法修改的问题

1.	首先进入 Win 系统的 hosts 文件所在位置，我们直接输入 `C:\Windows\System32\Drivers\etc` 后回车就可以打开了，右键 hosts 文件，选择属性，如下图所示。

![](images/164793825603524.jpg)

2. 点击 hosts 属性对话框里的“高级”，如下图所示。

![](images/2264877620234.jpg)

3. 在 hosts 的高级安全设置界面点击更改权限，如下图所示。

![](images/320054545521323.jpg)

4. 在新弹出的对话框里点击添加按钮，如下图所示。

![](images/68564227831566.jpg)

5. 点击 hosts 的权限项目窗口下面的主体的“选择主体”，如下图所示。

![](images/205183134378519.jpg)

6. 点击进入选择用户或组界面，点击高级，如下图所示。

![](images/91885299762823.jpg)

7. 点击高级后，我们接着在点击理解查找，然后在查找结果里找到当前用户的账号，选中后点击确定，如下图所示。

![](images/433476677839932.jpg)

8. 在选择用户或组界面里点击确定，如下图所示。
![](images/592124277962441.jpg)

9. 将 hosts 的权限项目界面下的基本权限的所以项目都勾选上，然后点击确定，如下图所示。

![](images/177543123775867.jpg)

10. 权限添加成功后，直接点击确定，如下图所示。

![](images/375146485171511.jpg)

11. 点击后，系统提示你将要更改系统文件夹的权限设置，这样会降低计算机的安全性，并导致用户访问文件时出现问题。要继续吗？我们点击是。如下图所示。

![](images/362514703113379.jpg)

#### 修改 hosts 后不生效怎么解决？

无论是手工修改 hosts 还是使用软件来修改，很多人都会遇到修改 hosts 后不生效的情况。其实，这一般是由于 DNS 缓存的原因导致的。因为系统为了加快用户打开网站的速度，在首次访问网站成功之后，会把 DNS 解析的结果暂时性地保存在本地缓存 (称为 DNS 缓存) 里一小段时间，如果浏览器在“这段时间里”再次打开同一个网址，则会自动从 DNS 缓存里取出结果，而不会请求远程的 DNS 服务器，也不会查询 hosts 文件，从而节省时间提高打开速度。因此用户会遇到有时修改了 hosts 文件但并不生效的情况，一般这时候我们想办法清空 (刷新) 一下系统的 DNS 缓存即可。

怎样清空 DNS 缓存？

- Windows 系统，在命令行执行：`ipconfig /flushdns`
- macOS 系统，执行命令：`sudo killall -HUP mDNSResponder`
- 如果使用 Chrome 浏览器，那么可以访问：`chrome://net-internals/#dns`，然后点击『Clear host cache』按钮来清空浏览器里的 DNS 缓存。

> 如果这样还不生效，那么只能再试试重启电脑了，一般都 OK 了。要这样还是不行，可能就是的 hosts 写错了。

### 文本/代码对比工具

#### Beyond Compare

Beyond Compare（简称 BC）是美国 Scooter Software 公司开发的跨平台专业**文件 / 文件夹对比、合并、同步工具**，广泛用于开发、运维、文档比对、备份同步等场景，支持 Windows /macOS/ Linux。提供 30 天全功能免费试用，付费后永久授权，分标准版（Standard）与专业版（Pro）。

> 官网 https://beyond-compare.com/

**重置试用时间**：打开记录本，输入以下代码，另存为 `.reg` 格式的 Windows 注册表脚本文件。当 Beyond Compare 试用时间结束前双击运行即可重置继续免费试用。

```reg
Windows Registry Editor Version 5.00

;删除缓存
[HKEY_CURRENT_USER\SOFTWARE\Scooter Software\Beyond Compare 5\]
"CacheID"=-
```

> [!info] 安装不同的版本时，需要注意修改脚本相应的版本号

#### WinMerge

WinMerge 是 Windows 平台专属、GPLv2 开源、完全免费的**文件 / 文件夹对比与合并工具**，主打可视化差异高亮、文本 / 目录双向合并、编码与行尾处理，适合代码、配置、文档比对与简单合并场景。仅支持 Windows，无 macOS/Linux 版本；个人 / 企业均可免费商用。

> - 官网 https://winmerge.org/
> - GitHub https://github.com/WinMerge/winmerge

#### Diffuse

Diffuse 在命令行中的速度是相当快的，支持像 C++、Python、Java、XML 等语言的语法高亮显示。可视化比较，非常直观，支持两相比较和三相比较。这就是说，使用 Diffuse 可以同时比较两个或三个文本文件。支持常见的版本控制工具，包括 CVS、subversion、git、mercurial 等，可以通过 Diffuse 直接从版本控制系统获取源代码，以便对其进行比较和合并。

#### Code Compare

Code Compare 是一款用于程序代码文件的比较工具，目前 Code Compare 支持的对比语言有：C#、C++、CSS、HTML、Java、JavaScrip 等代码语言。Visual Studio 环境源代码比较是一个方便，易于使用的工具，独特的 Visual Studio 集成，可以同时在一个环境内，使所有的方便程序开发设计。

#### AptDiff

AptDiff 是一个文件比较工具，可以对文本和二进制文件进行比较和合并，适用于软件开发、网络设计和其它的专业领域。它使用方便，支持键盘快捷键，可以同步进行横向和纵向卷动，支持 Unicode 格式和大于 4GB 的文件，可以生成 HTML 格式的比较报告。

## CC Switch

开源工具 CC Switch 是一款适用于多种平台的桌面、一体化、可视化管理模型配置辅助工具，适用于 Claude Code、Codex、OpenCode、openclaw 及 Gemini CLI。它内置了 50 多个供应商预设，一键切换不同的模型供应商，不用手动修改配置文件。

官方 Github 仓库：https://github.com/farion1231/cc-switch

以切换智谱的 glm-4.7-flash 为例，操作步骤如下：

1. 到仓库中下载并安装 CC Switch（或者使用便携版）
2. 打开软件后点击右上角“+”号，添加新供应商。如选择【Zhipu GLM】
3. 填写从智谱开放平台获取的 API Key
4. 设置主模型。示例选用了【glm-4.7-flash】
5. 保存并启用，重新进入 Claude Code 即可使用

![](images/20260504191216057.jpg)

如上图所示，下面就生成对应 CLI 的配置项。
