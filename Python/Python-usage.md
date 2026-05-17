> 此文档专门介绍关于在不同平台上设置 Python 环境、调用解释器以及让使用 Python 更容易的一些事情的有用信息。

## Python 安装

想要使用 Python 语言编写程序，必须下载 Python 安装包并配置Python环境。最新安装包[下载地址](https://www.python.org/downloads/)。*更新笔记时 Python 最新版本是：3.14.4（发布于2024年6月6日）*

![](images/92368367322634.png)

如果是系统信息中显示是『基于 x64 的处理器』，选择第1个安装包即可。

![](images/244208717072171.png)

如果是系统信息中显示是『基于 ARM 的处理器』，则选择第3个（ARM64）安装包。

![](images/99267197533397.png)

### 安装步骤（Windows）

1. **建议使用管理员身份**去打开下载的安装包。勾选相关选项，并选择自定义安装

![](images/468943218456736.png)

2. 选择安装位置，其他默认即可

![](images/312594236665211.png) ![](images/397994634749242.png)

3. 安装完成

![](images/500433694138233.png)

4. 运行 cmd 打开“命令提示符”程序，输入 `python` 并回车

![](images/113946911687031.png)

### 安装步骤（MacOS）

> 基于 MacOS 12.4。下载地址：https://www.python.org/downloads/macos/

![](images/56040715993970.png)

1. 双击打开下载好的 python-3.10.4-macos11.pkg 文件，开始安装。

![](images/160471920886548.png)

2. 找到 mac 中的“终端”程序并打开：

![](images/276620627624382.png)

3. 直接在终端中输入命令：`python3`

![](images/152591267575029.png)

> 如上图，最新版 3.10.4 已经安装成功。

4. 如果想要使用 python 命令，而非 python3 命令执行 python。那么可以设置环境变量来解决，在终端中执行如下代码：

```python
echo 'alias python=python3' >> .bash_profile
```

退出且重新打开终端，然后执行：

![](images/499381927228001.png)

### 安装步骤（Linux）

> Tips: 在 Linux 上安装 Python 需要相关前置技能。有过 Linux 系统的使用经验，熟悉 Linux 操作系统的常见命令，如：yum、cd、wget、vi 编辑器、软链接等。

1. 在 Linux 上安装 Python 需要先安装前置依赖程序。登陆到 Linux 中，使用 yum 程序进行依赖程序安装，执行如下命令：

```shell
yum install wget zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gcc make zlib zlib-devel libffi-devel -y
```

2. Linux 版本下载地址 https://www.python.org/downloads/source/

拖动网页到最下方，如下图

![](images/367083479991265.png)

找到 Gzipped source tarball 按钮，点击右键，选择复制链接

![](images/588666147577020.png)

3. 进入到 Linux 系统内，使用 `wget` 命令，粘贴复制的下载链接，执行下载：

```shell
cd ~
wget https://www.python.org/ftp/python/3.10.4/Python-3.10.4.tgz
```

![](images/362045013502451.png)

4. 下载完成后，即可看到已下载好的安装包文件：

![](images/525044532407792.png)

5. 解压安装包，执行：

```shell
tar -xvf Python-3.10.4.tgz
```

![](images/199804522501597.png)

6. 切换目录到解压后的 Python 安装文件夹：

```shell
# 切换目录
cd Python-3.10.4
```

- 配置

```shell
./configure --prefix=/usr/local/python3.10.4
```

- 编译

```shell
make && make install
```

- 编译完成后，可以配置软链接，方便快速使用 python：

```shell
# 删除系统自带的老版本(python2)的软链接
rm -f /usr/bin/python

# 创建软链接
ln -s /usr/local/python3.10.4/bin/python3.10 /usr/bin/python
```

7. 创建软链接后，会破坏 yum 程序的正常使用（只能使用系统自带的 python2）。修改如下2个文件：

```shell
/usr/bin/yum
/usr/libexec/urlgrabber-ext-down
```

使用 vi 编辑器，将这 2 个文件的第一行，从

```shell
#!/usr/bin/python
```

修改为：

```shell
#!/usr/bin/python2
```

8. 在 Linux 系统命令行窗口内，直接执行 `python` 并回车：

![](images/31532851663524.png)

如图，看到 Python 3.10.4 字样，即表明安装成功。

## Python 环境变量配置

程序和可执行文件可以在许多目录，而这些路径很可能不在操作系统提供可执行文件的搜索路径中。

path(路径)存储在环境变量中，这是由操作系统维护的一个命名的字符串。这些变量包含可用的命令行解释器和其他程序的信息。

- Unix 或 Windows 中路径变量为 `PATH`（UNIX区分大小写，Windows不区分大小写）。
- 在 Mac OS 中，安装程序过程中改变了 python 的安装路径。如果你需要在其他目录引用 Python，你必须在 path 中添加 Python 目录。

### 在 Unix/Linux 设置环境变量

- 在 csh shell: 输入以下命令后回车

```shell
setenv PATH "$PATH:/usr/local/bin/python"
```

- 在 bash shell (Linux): 输入以下命令后回车

```shell
export PATH="$PATH:/usr/local/bin/python"
```

- 在 sh 或者 ksh shell: 输入以下命令后回车

```shell
PATH="$PATH:/usr/local/bin/python" 
```

> Notes: `/usr/local/bin/python` 是 Python 的安装目录。

### 在 Windows 设置环境变量

可以在命令提示框中(cmd)，环境变量中添加 Python 目录：

```shell
path=%path%;C:\Python 
```

> Notes: C:\Python 是 Python 的安装目录。

也可以通过控制面板来设置。

1. 右键点击"计算机"，然后点击"属性"
2. 然后点击"高级系统设置"
3. 选择"系统变量"窗口下面的"Path",双击即可！
4. 然后在"Path"行，添加 python 安装路径即可。**ps：记住，路径直接用分号`;`隔开！**
5. 最后设置成功以后，在 cmd 命令行，输入命令 `python`，就可以有相关显示。

![](images/572105486593783.png)

### Python 重要的环境变量

- `PYTHONPATH`：是 Python 搜索路径，默认 import 的模块都会从此路径中寻找。
- `PYTHONSTARTUP`：Python 启动后，先寻找此环境变量，然后执行此变量指定的文件中的代码。
- `PYTHONCASEOK`：加入此环境变量，就会使 Python 导入模块的时候不区分大小写.
- `PYTHONHOME`：另一种模块搜索路径。它通常内嵌于的 `PYTHONSTARTUP` 或 `PYTHONPATH` 目录中，使得两个模块库更容易切换。

## 命令行方式运行

### 命令行脚本

调用 Python 时，可以指定下列任意选项：

```bash
python [-bBdEhiIOPqRsSuvVWx?] [-c command | -m module-name | script | - ] [args]
```

在应用程序中通过引入解释器可以在命令行中执行 Python 脚本，如下所示：

```shell
$ python script.py # Unix/Linux
# 或者
C:>python script.py # Windows/DOS
```

> Notes: 在执行脚本时，请检查脚本是否有可执行权限。

### 交互式解释器

可以通过命令行窗口进入 Python，并在交互式解释器中开始编写 Python 代码。即在 Unix、DOS 或任何其他提供了命令行或者 shell 的系统进行 Python 编码工作。

```shell
$ python # Unix/Linux
# 或者
C:>python # Windows/DOS
```

Python 命令行参数：

- `-d`：在解析时显示调试信息
- `-O`：生成优化代码（`.pyo` 文件）
- `-S`：启动时不引入查找 Python 路径的位置
- `-V`：输出 Python 版本号
- `-X`：从 1.6 版本之后基于内建的异常（仅仅用于字符串）已过时。
- `-c cmd`：执行 Python 脚本，并将运行结果作为 cmd 字符串
- `file`：在给定的 python 文件执行 python 脚本。

输入 `exit()` 可以退出解释器

```python
>>> exit()
```

或者在 python 解释器中，按热键 `ctrl + d` 也可以退出解释器。

### 查看 Python 版本

可以在命令窗口(Windows 使用 win+R 调出 cmd 运行框)使用以下命令查看当前使用的 Python 版本：

```python
python -V
# 或
python --version
```

> [!note] 需要注意 `-V` 参数是<span style="color: red;">**大写字母**</span>

## 集成开发环境（IDE：Integrated Development Environment）

Python 最常见的开发环境是 PyCharm。此集成开发工具（IDE），是当下全球 Python 开发者，使用最频繁的工具软件

## Python AI 编程助手

AI 是一个可靠的编程助手，可以提供实时的建议和解决方案，无论是快速修复错误、提升代码质量，或者查找关键文档和资源，AI 作为编程助手都能让事半功倍。

推荐一款适配了 Viusal Studio，VS Code(本文使用)，JetBrains 系列(本文使用)以及Vim等多种编译器环境的插件 Fitten Code，Fitten Code 是由非十大模型驱动的 AI 编程助手，它可以自动生成代码，提升开发效率，帮助调试 Bug，另外还可以对话聊天，解决编程的问题。Fitten Code 免费且支持 80 多种语言：Python、C++、Javascript、Typescript、Java等。
