---
tags:
  - AI
  - Python
---

## Python 简介

### 概述

Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。Python 的设计具有很强的可读性，相比其他语言经常使用英文关键字，其他语言的一些标点符号，它具有比其他语言更有特色语法结构。

- **平台语言**：可以运行在不同的操作系统上。
- **Python 是一种解释型语言**：这意味着开发过程中没有了编译这个环节，类似于 PHP 和 Perl 语言。
- **Python 是交互式语言**：这意味着，可以在一个 Python 提示符 `>>>` 后直接执行代码。
- **Python 是面向对象语言**：这意味着 Python 支持面向对象的风格或代码封装在对象的编程技术。
    - 函数、模块、数字、字符串都是对象，在 Python 中一切皆对象。
    - 完全支持继承、重载、多重继承。
    - 支持重载运算符，也支持泛型设计
- **Python 是初学者的语言**：Python 对初级程序员而言，是一种伟大的语言，它支持广泛的应用程序开发，从简单的文字处理到 WWW 浏览器再到游戏。

### 官方资源

- 官网：https://www.python.org/
- Python 官方文档：https://docs.python.org/zh-cn/3/

### Python 的版本

#### 概述

Python 有两个主要版本：**Python 2** 和 **Python 3**。

- **Python 2.x**：是过去的版本（**官方已经停止维护**）。
  - 解释器名称是 `python`。
- **Python 3.x**：现在是主流版本，并且是未来发展的方向。
  - 解释器名称是 `python3`。
  - 相对于 Python 的早期版本，Python 3.x 是一个较大的升级。
  - 在设计时没有考虑向下兼容，以避免带入过多累赘。许多基于早期 Python 版本设计的程序无法在 Python 3.0 上正常执行。

> Tips: <font color=red>**Python 3.0 与 Python 2.0 不兼容的**</font>。新的 Python 程序建议使用 Python 3.x 版本的语法

#### Python 的 3.x 版本

Python 的 3.0 版本，常被称为 Python 3000，或简称 Py3k。相对于 Python 的早期版本，这是一个较大的升级。为了不带入过多的累赘，Python 3.0 在设计的时候没有考虑向下兼容。

> 以下笔记主要针对 Python 3.x 版本的学习。*官方宣布，2020 年 1 月 1 日， 停止 Python 2 的更新。Python 2.7 被确定为最后一个 Python 2.x 版本。*

#### Python 3.x 发展历史

- Python 3.0 发布于 2008 年。
- Python 3.3 发布于 2012 年。
- Python 3.4 发布于 2014 年。
- Python 3.5 发布于 2015 年。
- Python 3.6 发布于 2016 年。

#### Python 3.x 特点

1. Python 3.x 的使用越来越广泛，大部分新项目开始使用 Python 3。
2. 大部分第三方库已经支持 Python 3.x。
3. Python 3.x 起初比 Python 2.x 效率低，但有极大的优化空间，效率正在不断提升。
4. 使用 Python 3，开发者可以完全理解并维护使用 Python 2.x 开发的项目。
5. Python 3.x 已经成为编程语言发展的趋势。

### 语言的区别

#### 解释型语言

解释型语言是在运行的时候将程序翻译成机器语言，所以运行速度相对于编译型语言要慢。比如 PHP、Python

- 优点：可移植性较好，只要有解释环境，可在不同的操作系统上运行
- 缺点：运行需要解释环境，运行起来比编译的要慢，占用资源也要多一些，代码效率低，代码修改后就可运行，不需要编译过程

#### 编译型语言

编译型语言在程序执行之前，有一个单独的编译过程，将程序翻译成机器语言，以后执行这个程序的时候，就不用再进行翻译了。比如 C、C++、Java

- 优点：运行速度快，代码效率高，编译后的程序不可修改，保密性较好
- 缺点：代码需要经过编译方可运行，可移植性差，只能在兼容的操作系统上运行

### Python 应用

- **Web后端开发**：Python 在构建网站后端服务中发挥着重要作用。
- **网络爬虫**：Python 被广泛用于编写网络爬虫，进行数据抓取和处理。
- **人工智能**：Python 是人工智能领域的主要编程语言之一，用于机器学习和深度学习。
- **自动化运维**：Python 在自动化运维中用于编写脚本，提高运维效率。
- **网络编程**：Python 支持网络编程，用于开发网络应用和工具。
- **国内应用情况**：国内许多知名公司，如豆瓣、百度、阿里巴巴、新浪等，都在其技术栈中使用 Python。
- **国外应用情况**：国际上，Google、Facebook、Twitter 等大型科技公司也广泛使用 Python。
- **就业优势**：即使不是程序员，Python 在日常工作中的应用也越来越广泛。掌握 Python 技能的求职者在投简历时可能会被优先考虑。
- **教育支持**：
    - 大学生和在校的学生可以参加与 Python 相关的考试和课程。
    - 国务院印发了《新一代人工智能发展规划》。
    - 教育部出台了《高等学校人工智能创新行动计划》，这些政策都表明了 Python 在教育领域的重视和推广。

### Python 解释器

- cpython 官方默认的解释器，使用最广泛
- jypython 运行于 java 平台上的解释器
- ironpython 运行于 .net 平台上的解释器
- Pypy 使用 Python 编写的解释器，支持 JIT 技术(即时编译）

### Python 的优缺点

**优点**：

- 易于学习：python 有相对较少的关键字，结构简单，和一个明确定义的语法，学习起来更加简单
- 易于阅读：python 代码定义的更清晰
- 易于维护：python的成功在于它的源代码是相当容易维护的
- Python 拥有一个强大的标准库：python 的最大的优势之一是丰富的库，跨平台的，在 UNIX，Windows 和 Macintosh 兼容很好。Python 语言的核心只包含**数字、字符串、列表、字典、文件**等常见类型和函数，而由 Python 标准库提供了**系统管理、网络通信、文本处理、数据库接口、图形系统、XML 处理**等额外的功能
- Python 社区提供了大量的第三方模块，使用方式与标准库类似。它们的功能覆盖**科学计算、人工智能、机器学习、Web开发、数据库接口、图形系统**多个领域。
- 互动模式：互动模式的支持，可以从终端输入执行代码并获得结果的语言，互动的测试和调试代码片断
- 可移植：基于其开放源代码的特性，Python已经被移植（也就是使其工作）到许多平台
- 可扩展：如果需要一段运行很快的关键代码，或者是想要编写一些不愿开放的算法，可以使用 C 或 C++ 完成那部分程序，然后从 Python 程序中调用
- 数据库：python 提供所有主要的商业数据库的接口
- GUI 编程：python支持 GUI 可以创建和移植到许多系统调用。
- 可嵌入：可以将 python 嵌入到 C/C++ 程序，让程序的用户获得"脚本化"的能力
- 免费、开源
- 面向对象

**缺点**：

- 运行速度慢：和 C 程序相比非常慢，因为 Python 是解释型语言，代码在执行时会一行一行地翻译成 CPU 能理解的机器码，这个翻译过程非常耗时，所以很慢。而 C 程序是运行前直接编译成 CPU 能执行的机器码，所以非常快。
- 代码不能加密：如果要发布 Python 程序，实际上就是发布源代码，这一点跟 C 语言不同，C 语言不用发布源代码，只需要把编译后的机器码（也就是在 Windows 上常见的 exe 文件）发布出去。要从机器码反推出 C 代码是不可能的，所以，凡是编译型的语言，都没有这个问题，而解释型的语言，则必须把源码发布出去。
- 内存消耗略大：相比 C、C++ 这种紧凑型语言，Python 会更“吃内存”，不太适合资源受限设备，比如一些微控制器等。

## Python 环境搭建

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

### 环境变量配置

程序和可执行文件可以在许多目录，而这些路径很可能不在操作系统提供可执行文件的搜索路径中。

path(路径)存储在环境变量中，这是由操作系统维护的一个命名的字符串。这些变量包含可用的命令行解释器和其他程序的信息。

- Unix 或 Windows 中路径变量为 `PATH`（UNIX区分大小写，Windows不区分大小写）。
- 在 Mac OS 中，安装程序过程中改变了 python 的安装路径。如果你需要在其他目录引用 Python，你必须在 path 中添加 Python 目录。

#### 在 Unix/Linux 设置环境变量

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

#### 在 Windows 设置环境变量

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

#### Python 重要的环境变量

- `PYTHONPATH`：是 Python 搜索路径，默认 import 的模块都会从此路径中寻找。
- `PYTHONSTARTUP`：Python 启动后，先寻找此环境变量，然后执行此变量指定的文件中的代码。
- `PYTHONCASEOK`：加入此环境变量，就会使 Python 导入模块的时候不区分大小写.
- `PYTHONHOME`：另一种模块搜索路径。它通常内嵌于的 `PYTHONSTARTUP` 或 `PYTHONPATH` 目录中，使得两个模块库更容易切换。

### 运行 Python

有三种方式可以运行 Python。

#### 交互式解释器

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

#### 命令行脚本

在应用程序中通过引入解释器可以在命令行中执行 Python 脚本，如下所示：

```shell
$ python script.py # Unix/Linux
# 或者
C:>python script.py # Windows/DOS
```

> Notes: 在执行脚本时，请检查脚本是否有可执行权限。

#### 集成开发环境（IDE：Integrated Development Environment）

Python 最常见的开发环境是 PyCharm。此集成开发工具（IDE），是当下全球 Python 开发者，使用最频繁的工具软件

#### Python AI 编程助手

AI 是一个可靠的编程助手，可以提供实时的建议和解决方案，无论是快速修复错误、提升代码质量，或者查找关键文档和资源，AI 作为编程助手都能让事半功倍。

推荐一款适配了 Viusal Studio，VS Code(本文使用)，JetBrains 系列(本文使用)以及Vim等多种编译器环境的插件 Fitten Code，Fitten Code 是由非十大模型驱动的 AI 编程助手，它可以自动生成代码，提升开发效率，帮助调试 Bug，另外还可以对话聊天，解决编程的问题。Fitten Code 免费且支持 80 多种语言：Python、C++、Javascript、Typescript、Java等。

### 查看 Python 版本

可以在命令窗口(Windows 使用 win+R 调出 cmd 运行框)使用以下命令查看当前使用的 Python 版本：

```python
python -V
# 或
python --version
```

> Note: 需要注意 `-V` 参数是<font color=red>**大写字母**</font>

## Python 基础语法

### 标识符

标示符就是在程序中定义的**变量名**、**函数名**。在 Python 里，所有标识符可以包括英文字母、数字以及下划线(`_`)，但不能以数字开头，不能使用保留字符（关键字）。值得注意的是：Python 中的标识符是<font color=red>**区分大小写**</font>的。如果标识符中包含多个名词，Python 官方推荐使用蛇形命名法（即 `user_name`）。

以下划线开头的标识符是有特殊意义的。

- **以单下划线开头（如 `_foo`）**：代表不能直接访问的类属性，需通过类提供的接口进行访问，不能用 `from xxx import *` 而导入。
- **以双下划线开头（如 `__foo`）**：代表类的私有成员。
- **以双下划线开头和结尾（如 `__foo__`）**：代表 Python 里特殊方法专用的标识，如 `__init__()` 代表类的构造函数。

### 字面量

在代码中，被写下来的的固定的值，称之为字面量

### 变量

#### 概念

变量是用于存储数据。Python 中的变量不需要声明。每个变量在使用前都必须赋值（定义变量的同时就要赋值），变量赋值以后该变量才会被创建。变量必须先定义后使用，变量定义之后，后续就可以直接使用。

在 Python 中，变量就是变量，它没有类型，所谓的"类型"是变量所指的内存中对象的类型。

#### 语法格式

```python
变量名 = 变量值
```

等号（`=`）用来给变量赋值。等号（`=`）运算符左边是变量名，等号（`=`）运算符右边是存储在变量中的值。<font color=red>**`=` 两边要留一个空格**</font>。示例如下：

```python
counter = 100   # 整型变量  
miles = 1000.0  # 浮点型变量  
name = "runoob" # 字符串
```

#### 多个变量赋值

Python 允许同时为多个变量赋值。具体语法如下：

```python
变量1 = 变量2 = 变量3 = ... = 变量值
```

以上实例，创建多个变量，从后向前赋值，每个变量被赋予相同的数值。

也为多个变量指定多个不同的值。语法如下：

```python
变量1, 变量2, 变量3, ... = 变量值1, 变量值2, 变量值3, ...
```

以上实例，创建多个变量，每个变量赋予相应位置上的数值。

#### 变量的修改

创建变量后，可以在代码中重新赋值。

```python
year = 2023
print(year)
year = 2024
print(year)
```

<font color=red>**不同类型的变量也可以进行修改、重新赋值，与类型无关**</font>。

```python
money = 10
money = '10元'
print(money)
```

#### 常量

程序在运行的过程中，值永远不会发生改变的变量称之为**常量**。Python 没有专门的常量类型，一般约定<font color=red>**使用大写表示常量**</font>。

### 保留字符（关键字）

保留字符（关键字）是在 Python 内部已经使用的标识符，具有特殊的功能和含义。

开发者不允许使用（定义）保留字作为常量或变量，或任何其他标识符名称。所有 Python 的关键字只包含小写字母。下表是 Python 中的保留字：

|    -     |    -    |   -    |
| -------- | ------- | ------ |
| and      | exec    | not    |
| assert   | finally | or     |
| break    | for     | pass   |
| class    | from    | print  |
| continue | global  | raise  |
| def      | if      | return |
| del      | import  | try    |
| elif     | in      | while  |
| else     | is      | with   |
| except   | lambda  | yield  |

Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字：

```python
>>> import keyword
>>> keyword.kwlist
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

### 行和缩进

Python 与其他语言最大的区别就是，**Python 的代码块不使用大括号 `{}` 来控制类，函数以及其他逻辑判断**。python 最具特色的就是<font color=red>**用缩进来写模块**</font>。

<font color=red>**缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行**</font>。以下实例缩进为四个空格:

```python
if True:
    print ("True")
else:
    print ("False")
```

以下代码将会执行错误：

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：test.py

if True:
    print ("Answer")
    print ("True")
else:
    print ("Answer")
    # 没有严格缩进，在执行时会报错
  print ("False")
```

执行以上代码，会出现如下错误提醒：

```
  File "test.py", line 11
    print ("False")
                  ^
IndentationError: unindent does not match any outer indentation level
```

- `IndentationError: unindent does not match any outer indentation level` 错误表明，使用的缩进方式不一致，有的是 tab 键缩进，有的是空格缩进，改为一致即可。
- `IndentationError: unexpected indent` 错误，则 python 编译器提示可能是 tab 和空格没对齐的问题，所以 python 对格式要求非常严格。

Python 的代码块中必须使用相同数目的行首缩进空格数，建议在每个缩进层次使用**单个制表符**或**两个空格**或**四个空格**，切记不能混用

### 多行语句

Python 语句中<font color=red>**一般以新行作为语句的结束符**</font>。但是也可以使用斜杠（`\`）将一行的语句分为多行显示，如下所示：

```python
total = item_one + \
        item_two + \
        item_three
```

语句中包含 `[]`, `{}` 或 `()` 括号就不需要使用多行连接符。如下实例：

```python
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
```

#### 同一行显示多条语句

Python 可以同一行显示多条语句，语句之间是用分号 `;` 分割，如：

```python
>>> print ('hello');print ('runoob');
hello
runoob

>>> import sys; x = 'runoob'; sys.stdout.write(x + '\n')
runoob
```

#### 多个语句构成代码块

缩进相同的一组语句构成一个代码块。

像 if、while、def 和 class 这样的复合语句，首行以关键字开始，以冒号(`:`)结束，该行之后的一行或多行代码构成代码块。这种首行及后面的代码块称为一个子句(clause)。

```python
if expression :
   suite
elif expression :
   suite
else :
   suite
```

### 引号

Python 可以使用引号( `'` )、双引号( `"` )、三引号( `'''` 或 `"""` ) 来表示字符串，引号的开始与结束必须是相同类型的。

其中三引号可以由多行组成，编写多行文本的快捷语法，常用于文档字符串，在文件的特定地点，被当做注释。

```python
word = 'word'
sentence = "这是一个句子。"
paragraph = """这是一个段落。
包含了多个语句"""
```

### 注释

**注释**：是指在程序代码中对程序代码进行解释说明的文字。

注释不是程序，<font color=red>**不能被执行**</font>，其作用只是对程序代码进行解释说明，让别人可以看懂程序代码的作用，能够大大增强程序的可读性。

#### 单行注释

单行注释：以 `#` 开头，`#`右边的所有文字都属于注释的内容，此部分内容不是真正要执行的程序，只是起辅助说明作用。**注释可以在语句或表达式行末**。

```python
# 第一个单行注释
print ("Hello, Python!")  # 第二个单行注释
```

> Tips: 为了保证代码的可读性，建议 `#` 后面先添加一个空格，然后再编写相应的说明文字

#### 多行注释

python 中多行注释使用一对三个单引号 `'''` 或三个双引号 `"""` 包裹起来，用来解释说明一段代码的作用使用方法。

```python
'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''
print ("This is a multi-line comment, using single quotes.")
"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""
print ("This is a multi-line comment, using double quotes.")
```

> Tips: 其实所谓的“多行注释”就是字符串，只是定义时没有被变量引用，后续程序没有使用而被忽略，因此可以当成注释来使用。

#### DocStrings(文档字符串)

DocStrings (文档字符串)，是一个重要工具，用于解释文档程序，帮助程序文档更加简单易懂。

在函数体的第一行使用一对三个单引号 `'''` 或者一对三个双引号号 `"""` 来定义文档字符串。一般编写的**规范**是：**首行简述函数功能，第二行空行，第三行为函数的具体描述**。

**输出文档说明的内容**：可以使用 `__doc__`（<font color=red>**注意双下划线**</font>）调用函数中的文档字符串属性。

```python
def add(num1, num2):
    """ 完成传入的两个数之和
    :paramnuml: 加数1
    :paramnum2: 加数2
    :return: 和
    """
    return num1 + num2

print(add.__doc__)
```

#### Python 中文编码声明注释（了解）

语法中的编码，指的是编写程序所用的字符编码类型，比如 UTF-8、GBK 编码等。而 **Python 2.x 版本中会出现中文编码问题**。例如在 Python 2.0+ 的情况，使用 Python 输出 "Hello, World!"，英文没有问题，但是如果你输出中文字符 "你好，世界"，而 Python 文件中未指定编码，在执行过程会出现报错：

```python
#!/usr/bin/python
print ("你好，世界")
```

以上程序执行输出结果为：

```
File "test.py", line 2
SyntaxError: Non-ASCII character '\xe4' in file test.py on line 2, but no encoding declared; see http://www.python.org/peps/pep-0263.html for details
```

这是因为 Python 中默认的编码格式是 ASCII 格式，在没修改编码格式时无法正确打印汉字，所以在读取中文时会报错。

为此 Python 提供了一种**特殊的中文编码声明注释**，其主要用来解决 Python2.x 中不支持直接写中文的问题。虽然此问题在 Python3.x 中已经不存在啦，但为了规范编码，增强代码的可执行性，方便其他程序员及时了解程序所用的编码，建议初学者在程序开头处加上中文编码声明注释。

中文编码声明注释的语法有如下2种：在文件开头加入 `# -*- coding:编码 -*-` 或者 `# coding=编码` 即可。

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# coding:utf-8
# coding=utf-8
print( "你好，世界" )
```

> Notes: <font color=red>**`# coding=utf-8` 的 `=` 号两边不要空格**</font>。另外，在第一种语法中，`-*-` 并没有实际意义，只是为了美观才加上去了，因此，第一种语法格式中也可以直接将前后的 `-*-` 去掉（即示例中第三种写法）。

<font color=red>**注意：Python3.X 源码文件默认使用 utf-8 编码，所以可以正常解析中文，无需指定 UTF-8 编码**</font>。但如果使用编辑器(IDE)，同时需要设置 py 文件存储的格式为 UTF-8，否则会出现类似以下错误信息：

```
SyntaxError: (unicode error) ‘utf-8’ codec can’t decode byte 0xc4 in position 0:
invalid continuation byte
```

#### 使用注释的场景

- 注释不是越多越好，对于一目了然的代码，不需要添加注释。
- 对于复杂的操作，应该在操作开始前写上若干行注释。
- 对于不是一目了然的代码，应在其行尾添加注释。
- 绝不要描述代码，假设阅读代码的人比你更懂 Python，他只是不知道你的代码要做什么。

> 在一些正规的开发团队，通常会有代码审核的惯例，就是一个团队中彼此阅读对方的代码。

### 空行

函数之间或类的方法之间用空行分隔，表示一段新的代码的开始。类和函数入口之间也用一行空行分隔，以突出函数入口的开始。

> Notes: <font color=red>**空行与代码缩进不同，空行并不是 Python 语法的一部分，却是程序代码的一部分。书写时不插入空行，Python 解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。**</font>

### 转义字符

在字符中使用特殊字符时，需要用反斜杠 `\` 转义字符。如下表：

| 转义字符 | 描述                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------ |
| `\`      | (在行尾时)续行符                                                                                       |
| `\\`     | 反斜杠符号                                                                                             |
| `\'`     | 单引号                                                                                                 |
| `\"`     | 双引号                                                                                                 |
| `\a`     | 执行后电脑有响声                                                                                       |
| `\b`     | 退格(Backspace)                                                                                        |
| `\000`   | 空                                                                                                     |
| `\n`     | 换行                                                                                                   |
| `\v`     | 纵向制表符                                                                                             |
| `\t`     | 横向制表符                                                                                             |
| `\r`     | 回车，将 `\r` 后面的内容移到字符串开头，并逐一替换开头部分的字符，直至将 `\r` 后面的内容完全替换完成。 |
| `\f`     | 换页                                                                                                   |
| `\yyy`   | 八进制数，y 代表 0~7 的字符，例如：`\012 `代表换行。                                                   |
| `\xyy`   | 十六进制数，以` \x` 开头，`y` 代表的字符，例如：`\x0a` 代表换行                                        |
| `\other` | 其它的字符以普通格式输出                                                                               |

### import 与 from...import

在 python 用 `import` 或者 `from...import` 来导入相应的模块。

- 将整个模块(somemodule)导入，格式为：`import somemodule`
- 从某个模块中导入某个函数，格式为：`from somemodule import somefunction`
- 从某个模块中导入多个函数，格式为：`from somemodule import firstfunc, secondfunc, thirdfunc`
- 将某个模块中的全部函数导入，格式为：`from somemodule import *`

导入 sys 模块：

```python
import sys
print('================Python import mode==========================')
print ('命令行参数为:')
for i in sys.argv:
    print (i)
print ('\n python 路径为',sys.path)
```

导入 sys 模块的 argv,path 成员：

```python
from sys import argv,path  #  导入特定的成员
 
print('================python from import===================================')
print('path:',path) # 因为已经导入path成员，所以此处引用时不需要加sys.path
```

## 运算符

Python 包含以下类型的运算符:

- 算术运算符
- 比较（关系）运算符
- 赋值运算符
- 逻辑运算符
- 位运算符
- 成员运算符
- 身份运算符
- 运算符优先级

### 算术运算符

| 运算符 |                  描述                  |
| ----- | ------------------------------------- |
| `+`   | 加：两个对象相加                         |
| `-`   | 减：得到负数或是一个数减去另一个数           |
| `*`   | 乘：两个数相乘或是返回一个被重复若干次的字符串 |
| `/`   | 除：x 除以 y                            |
| `%`   | 取模：返回除法的余数                      |
| `**`  | 幂：返回 x 的 y 次幂                     |
| `//`  | 取整除：往小的方向取整数                   |

```python
print("21 % 10 取模：", 21 % 10)  # 1
print("2 ** 3 幂为：", 2 ** 3)  # 8
print("10 // 5 取整除：", 10 // 5)  # 2
```

### 比较运算符

| 运算符 |           描述            |
| :---: | ------------------------ |
| `==`  | 等于：比较对象是否相等        |
| `!=`  | 不等于：比较两个对象是否不相等 |
|  `>`  | 大于：返回 x 是否大于 y      |
|  `<`  | 小于：返回 x 是否小于 y      |
| `>=`  | 大于等于：返回 x 是否大于等于 y   |
| `<=`  | 小于等于：返回 x 是否小于等于 y   |

> [!info] 所有比较运算符返回 1 表示 True，返回 0 表示 False。

### 赋值运算符

| 运算符 |                                描述                                |
| :---: | ----------------------------------------------------------------- |
|  `=`  | 简单的赋值运算符                                                     |
| `+=`  | 加法赋值运算符                                                       |
| `-=`  | 减法赋值运算符                                                       |
| `*=`  | 乘法赋值运算符                                                       |
| `/=`  | 除法赋值运算符                                                       |
| `%=`  | 取模赋值运算符                                                       |
| `**=` | 幂赋值运算符                                                        |
| `//=` | 取整除赋值运算符                                                     |
| `:=`  | 海象运算符，作用是在表达式中，同时进行赋值和返回赋值的值（Python 3.8 版本新增） |

```python
a = 21
b = 10

c = a + b
print("c = a + b 的值为：", c)  # 31
c += a
print("c += a 的值为：", c)  # 52
c *= a
print("c *= a 的值为：", c)  # 1092
c /= a
print("c /= a 的值为：", c)  # 52.0
c = 2
c %= a
print("c %= a 的值为：", c)  # 2
c **= a
print("c **= a 的值为：", c)  # 2097152
c //= a
print("c //= a 的值为：", c)  # 99864

# 传统写法
n = 10
if n > 5:
    print(n)  # 10

# 使用海象运算符
if (n := 10) > 5:
    print(n)  # 10
```

> [!tip] 海象运算符 `:=` 的优点，允许在表达式内部进行赋值，这可以减少代码的重复，提高代码的可读性和简洁性。

### 位运算符

| 运算符 |                                     描述                                      |
| :---: | ---------------------------------------------------------------------------- |
|  `&`  | 按位与运算符：参与运算的两个值,如果两个相应位都为 1,则该位的结果为 1,否则为 0                |
|  \|   | 按位或运算符：只要对应的二个二进位有一个为 1 时，结果位就为 1。                            |
|  `^`  | 按位异或运算符：当两对应的二进位相异时，结果为 1                                       |
|  `~`  | 按位取反运算符：对数据的每个二进制位取反,即把 1 变为 0,把 0 变为 1。`~x` 类似于 `-x-1`         |
| `<<`  | 左移动运算符：运算数的各二进位全部左移若干位，由 `<<` 右边的数指定移动的位数，高位丢弃，低位补 0 |
| `>>`  | 右移动运算符：把 `>>` 左边的运算数的各二进位全部右移若干位，`>>` 右边的数指定移动的位数        |

```python
a = 60  # 60 = 0011 1100
b = 13  # 13 = 0000 1101

c = a & b  # 12 = 0000 1100
print("a & b 的值为：", c)  # 12

c = a | b  # 61 = 0011 1101
print("a | b 的值为：", c)  # 61

c = a ^ b  # 49 = 0011 0001
print("a ^ b 的值为：", c)  # 49

c = ~a  # -61 = 1100 0011
print("~a 的值为：", c)  # -61

c = a << 2  # 240 = 1111 0000
print("a << 2 的值为：", c)  # 240

c = a >> 2  # 15 = 0000 1111
print("a >> 2 的值为：", c)  # 15
```

### 逻辑运算符

| 运算符 | 逻辑表达式  |                             描述                              |
| :---: | --------- | ------------------------------------------------------------ |
| `and` | `x and y` | 逻辑"与"：如果 x 为 False，x and y 返回 x 的值，否则返回 y 的计算值   |
| `or`  | `x or y`  | 逻辑"或"：如果 x 是 True，它返回 x 的值，否则它返回 y 的计算值        |
| `not` | `not x`   | 逻辑"非"：如果 x 为 True，返回 False 。如果 x 为 False，它返回 True |

```python
a = 10
b = 20

if (a and b):
    print("1 - 变量 a 和 b 都为 true")
else:
    print("1 - 变量 a 和 b 有一个不为 true")

if (a or b):
    print("2 - 变量 a 和 b 都为 true，或其中一个变量为 true")
else:
    print("2 - 变量 a 和 b 都不为 true")

# 修改变量 a 的值
a = 0
if (a and b):
    print("3 - 变量 a 和 b 都为 true")
else:
    print("3 - 变量 a 和 b 有一个不为 true")

if (a or b):
    print("4 - 变量 a 和 b 都为 true，或其中一个变量为 true")
else:
    print("4 - 变量 a 和 b 都不为 true")

if not (a and b):
    print("5 - 变量 a 和 b 都为 false，或其中一个变量为 false")
else:
    print("5 - 变量 a 和 b 都为 true")
```

> [!note] `and` 和 `or` 都具备“逻辑短路”的功能。*类似 Java 中的 `&&` 和 `||` *

需要注意：<font color=red>**`and` 和 `or` 运算符返回值是某个参与计算的值本身！**</font>。具体处理规则如下：

1. `and` 运算符先对左边的表达式或者值进行处理，若参与运算的值不是布尔值，那 Python 会自动转为布尔值，然后再进行逻辑操作。如果左边的结果是“假”，则直接返回<font color=red>**左边的值**</font>，否则返回<font color=red>**右边的值**</font>。
2. `or` 运算符先对左边的表达式或者值进行处理，若参与运算的值不是布尔值，那 Python 会自动转为布尔值，然后再进行逻辑操作。如果左边的结果是“真”，则直接返回<font color=red>**左边的值**</font>，否则返回<font color=red>**右边的值**</font>。

```python
print(2 - 2 and True)  # 0
print('' and True)  # ''
print(True and 8 / 2)  # 4.0
print(3 + 3 and 3 * 4)  # 12

print(7 - 2 or False)  # 5
print('Hello' or 'MooN')  # Hello
print(False or 8 / 2)  # 4.0
print(2 - 2 or 3 * 4)  # 12
```

<font color=red>**`not` 运算符返回值一定是布尔值！**</font>。若参与 `not` 运算的值不是布尔值，那 Python 会自动转为布尔值，然后再进行逻辑操作。

```python
print(not 0)  # True
print(not 3 > 2)  # False
print(not 9 // 4)  # False
print(not 'abc')  # False
```

### 成员运算符

|   运算符   |                      描述                      |
| -------- | --------------------------------------------- |
| `in`     | 如果在指定的序列中找到值返回 True，否则返回 False     |
| `not in` | 如果在指定的序列中没有找到值返回 True，否则返回 False |

```python
myList = [1, 2, 3, 4, 5]
print("整数 10 包含在 list 中：", 10 in myList)  # False
print("整数 b 包含在 list 中：", 20 in myList)  # False
print("整数 2 包含在 list 中：", 2 in myList)  # True
```

### 身份运算符

|   运算符   |             描述             |
| -------- | ---------------------------- |
| `is`     | 判断两个标识符是不是引用自一个对象 |
| `is not` | 判断两个标识符是不是引用自不同对象 |

```python
a = 20
b = 20
print("a is b：", a is b)  # True
print("id(a) == id(b)：", id(a) == id(b))  # True

# 修改变量 b 的值
b = 30
print("a(20) is b(30)：", a is b)  # False
print("a(20) is not b(30)：", a is not b)  # True
```

### 运算符优先级

以下列表是从最高到最低优先级的所有运算符，同一级的运算符具有相同优先级，运算符从左至右分组（除了幂运算是从右至左分组）。运算符均指二元运算，除非特别指出。：

- `(expressions...)`, `[expressions...]`, `{key: value...}`, `{expressions...}` ： 圆括号的表达式
- `x[index]`, `x[index:index]`, `x(arguments...)`, `x.attribute` ： 读取，切片，调用，属性引用
- `await x` ： await 表达式
- `**` ： 乘方(指数)
- `+x`, `-x`, `~x` ： 正，负，按位非 NOT
- `*`, `@`, `/`, `//`, `%` ： 乘，矩阵乘，除，整除，取余
- `+`, `-` ： 加和减
- `<<`, `>>` ： 移位
- `&` ： 按位与 AND
- `^` ： 按位异或 XOR
- `|` ： 按位或 OR
- `in`, `not in`, `is`, `is not`, `<`, `<=`, `>`, `>=`, `!=`, `==` ： 比较运算，包括成员检测和标识号检测
- `not x` ： 逻辑非 NOT
- `and` ： 逻辑与 AND
- `or` ： 逻辑或 OR
- `if else` ： 条件表达式
- `lambda` ： lambda 表达式
- `:=` ： 赋值表达式

## 输入与输出

### print 输出

Python 两种输出值的方式：表达式语句和 `print()` 函数。（还有一种方式是使用文件对象的 `write()` 方法，标准输出文件可以用 `sys.stdout` 引用。）

#### 语法格式

官方文档定义：

```python
print(*objects, sep=' ', end='\n', file=None, flush=False)
```

将 `objects` 打印输出至 file 指定的文本流，以 sep 分隔并在末尾加上 end。sep、end、file 和 flush 必须以关键字参数的形式给出。

所有非关键字参数都会被转换为字符串，就像是执行了 `str()` 一样，并会被写入到流，以 sep 分隔并在末尾加上 end。 sep 和 end 都必须为字符串；它们也可以为 `None`，这意味着使用默认值。如果没有给出 `objects`，则 `print()` 将只写入 end。

file 参数必须是一个具有 `write(string)` 方法的对象；如果参数不存在或为 `None`，则将使用 `sys.stdout`。 由于要打印的参数会被转换为文本字符串，因此 `print()` 不能用于二进制模式的文件对象。 对于这些对象，应改用 `file.write(...)`。

输出缓冲通常由 file 确定。 但是，如果 flush 为真值，流将被强制刷新。

#### 字符串和数值类型直接输出

```python
>>> print(1)  
1  
>>> print("Hello World")  
Hello World
```

#### 变量输出

无论什么类型，数值，布尔，列表，字典等，均可直接输出：

```python
>>> x = 12  
>>> print(x)  
12  
>>> s = 'Hello'  
>>> print(s)  
Hello  
>>> L = [1,2,'a']  
>>> print(L)  
[1, 2, 'a']  
>>> t = (1,2,'a')  
>>> print(t)  
(1, 2, 'a')  
>>> d = {'a':1, 'b':2}  
>>> print(d)  
{'a': 1, 'b': 2}
```

#### 设置分隔符

`sep` 参数，用于设置多个内容之间的分隔符。默认情况下，每个`,`逗号的内容之间都会增加空格进行分隔。

```python
# sep：设置多个内容之间的分隔符，默认是空格
year = 2024
print(year, '年，我要成功')
print(year, '年，我要减肥', sep="")
print(year, '年，我要读100本书', sep="-")
print(year, '年，我要去10个城市旅游', sep="*")
```

输出结果：

```
2024 年，我要成功
2024年，我要减肥
2024-年，我要读100本书
2024*年，我要去10个城市旅游
```

#### 设置结束符

`end` 参数，用于设置结束符，默认结束符 `\n`。

```python
year = 2024
print(year, '年，我要减肥', end="\n\n")
print(year, '年，我要读100本书', end="\t")
print(year, '年，我要去10个城市旅游', end=" ")
print("前面的内容不换行了！")
```

输出结果：

```
2024 年，我要减肥

2024 年，我要读100本书	2024 年，我要去10个城市旅游 前面的内容不换行了！
```

##### 不换行输出

print 默认输出是换行的，如果要实现不换行，只需要在变量末尾加上逗号，增加参数 `end=""`，替换了默认结束符 `\n`。

```python
x = "a"
y = "b"
# 换行输出
print(x)
print(y)

print('---------')
# 不换行输出
print(x, end=" ")
print(y, end=" ")
print(1)
```

以上实例执行结果为：

```
a
b
---------
a b 1
```

### 数据输入

在 Python 中，`print` 语句（函数），可以完成将内容（字面量、变量等）输出到屏幕上。与之对应的还有一个 `input` 语句，用来获取键盘输入。

> Notes: 输入的任何内容，都认为是**字符串类型**。

#### 语法格式

```python
字符串变量 = input("提示信息：")
```

示例：

```python
name = input("请输入你的名字：")
print(name)

age = input("请输入你的年龄：")
# 类型转换
age = int(age)
# print(type(age))
year = 2024
# print(type(year))
birth = year - age
print("你的出生年份是", birth)
```

## 条件控制

Python 条件语句是通过一条或多条语句的执行结果（True 或者 False）来决定执行的代码块。

### 条件判断关键字

- `if`：条件判断语句，当条件为 True 时执行代码块
- `elif`：多条件判断分支（else if）
- `else`：所有条件不满足时执行
- `pass`：空语句，占位用，保证语法完整
- `match`：结构化模式匹配（Python 3.10+，类似 switch）

### if 语句

if 语句基础语法：

```python
if condition_1:
    statement_block_1
elif condition_2:
    statement_block_2
else:
    statement_block_3
```

> [!note] 注意事项：
> 
> 1. Python 中用 `elif` 代替了 `else if`，所以 `if` 语句的关键字为：`if – elif – else`。
> 2. 每个条件后面要使用冒号 `:`，表示接下来是满足条件后要执行的语句块。
> 3. 使用缩进来划分语句块，相同缩进数的语句组成一个语句块。
> 4. 在 Python 中没有类似 `switch...case` 语句，但在 Python3.10 版本后添加了 `match...case` 的功能也类似。（详见 [[Python-基础#match...case]]）

### if 语句嵌套

嵌套 if 语句，可以简单理解为将一个或者多个 `if...elif...else` 结构放在另外一组 `if...elif...else` 结构中。语法如下：

```python
if 表达式1:
    语句
    if 表达式2:
        语句
    elif 表达式3:
        语句
    else:
        语句
elif 表达式4:
    语句
else:
    语句
```

### match...case

Python 3.10 增加了 `match...case` 的条件判断，替代使用多层 if-else 的判断。

`match` 后的对象会依次与 `case` 后的内容进行匹配，如果匹配成功，则执行匹配到的表达式，否则直接跳过，符号 `_` 可以匹配一切（类似最后的 `else`）。

#### 语法格式

```python
match subject:
    case <pattern_1>:
        <action_1>
    case <pattern_2>:
        <action_2>
    case <pattern_3>:
        <action_3>
    case _:
        <action_wildcard>
```

参数说明：

- `match` 语句后跟一个表达式，然后使用 `case` 语句来定义不同的模式。
- `case` 后跟一个模式，可以是具体值、变量、通配符等。
- 可以使用 `if` 关键字在 `case` 中添加条件。
- `_` 通常用作通配符，匹配任何值。

> [!info] 其中 `case _`: 类似于 C 和 Java 中的 `default:`，当其他 `case` 条件都无法匹配时，则匹配此分支，保证永远会匹配成功。

#### 简单的值匹配

```python
def match_example(value):
    match value:
        case 1:
            print("匹配到值为1")
        case 2:
            print("匹配到值为2")
        case _:
            print("匹配到其他值")

match_example(1)  # 输出: 匹配到值为1
match_example(2)  # 输出: 匹配到值为2
match_example(3)  # 输出: 匹配到其他值
```

示例代码 `match` 语句用于匹配 `value` 的不同情况，每个 `case` 语句表示一种可能的匹配情况，`_` 通配符表示其他情况。

#### 使用变量

```python
def match_example(item):
    match item:
        case (x, y) if x == y:
            print(f"匹配到相等的元组: {item}")
        case (x, y):
            print(f"匹配到元组: {item}")
        case _:
            print("匹配到其他情况")

match_example((1, 1))  # 输出: 匹配到相等的元组: (1, 1)
match_example((1, 2))  # 输出: 匹配到元组: (1, 2)
match_example("other")  # 输出: 匹配到其他情况
```

#### 类型匹配

```python
class Circle:
    def __init__(self, radius):
        self.radius = radius

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

def match_shape(shape):
    match shape:
        case Circle(radius=1):
            print("匹配到半径为1的圆")
        case Rectangle(width=1, height=2):
            print("匹配到宽度为1，高度为2的矩形")
        case _:
            print("匹配到其他形状")

match_shape(Circle(radius=1))  # 输出: 匹配到半径为1的圆
match_shape(Rectangle(width=1, height=2))  # 输出: 匹配到宽度为1，高度为2的矩形
match_shape("other")  # 输出: 匹配到其他形状
```

#### 多个匹配条件

一个 case 也可以设置多个匹配条件，条件使用 `|` 隔开。示例：

```python
def check_permission(status):
    match status:
        case 200:
            return "OK - 请求成功"
        case 301 | 302:
            return "Redirect - 重定向"
        case 401 | 403 | 404:
            return "Not allowed - 无权限或未找到"
        case 500 | 502 | 503:
            return "Server Error - 服务器错误"
        case _:
            return "Unknown status - 未知状态码"

for code in [200, 301, 403, 500, 418]:
    print(f"状态码 {code}: {check_permission(code)}")
```

## 循环语句

Python 中的循环语句有 `for` 和 `while`。

### 循环控制关键字与方法

- `for`：迭代循环，用于遍历序列或可迭代对象
- `while`：条件循环，条件为 True 时持续执行
- `break`：立即终止当前循环
- `continue`：跳过本次循环剩余代码，进入下一次迭代
- `else (循环)`：循环正常结束（未被 break）时执行
- `pass`：循环中的占位语句（空操作）
- `range()`：生成整数序列，常与 for 循环配合使用
- `enumerate()`：遍历时同时获取索引和值

### while 循环

while 循环需要注意**冒号和缩进**。另外，在 Python 中没有 `do..while` 循环。

#### 基础语法格式

```python
while 判断条件(condition)：
    执行语句(statements)……
```

#### while 循环使用 else 语句

在 while 语句中增加 else 语句，则当条件语句为 false 时，执行 else 的语句块。语法格式如下：

```python
while <expr>:
    <statement(s)>
else:
    <additional_statement(s)>
```

expr 条件语句为 true 则执行 `statement(s)` 语句块，如果为 `false`，则执行 `additional_statement(s)`。

```python
count = 0
while count < 5:
   print (count, " 小于 5")
   count = count + 1
else:
   print (count, " 大于或等于 5")
```

#### 简单语句组

类似 `if` 语句的语法，如果 `while` 循环体中只有一条语句，可以将该语句与 `while` 写在同一行中。

```python
flag = 1
while (flag): print ('Hello world.')
print ("Good bye!")
```

### for 语句
#### for 基础语句

for 循环可以遍历任何可迭代对象，如列表或者字符串。

```python
for <variable> in <sequence>:
    <statements>
```

示例：

```python
# 循环列表
colors = ["Red", "Blue", "Yellow", "Black"]
for c in colors:
    print(c)

# 用于遍历字符串中的每个字符
word = 'MooNkirA'
for letter in word:
    print(letter)

#  整数范围值可以配合 range() 函数使用
for number in range(1, 6):
    print(number)
```

#### for...else 语句

`for...else` 语句用于当循环执行完毕（即遍历完 iterable 中的所有元素）后，会执行 `else` 子句中的代码。但如果在循环过程中使用 `break` 关键字中断循环，此时不会执行 `else` 子句。

```python
for item in iterable:
    # 循环主体
else:
    # 循环结束后执行的代码
```

示例：

```python
for x in range(6):
    print(x)
else:
    print("Finally finished!")

# for 循环中使用了 break 跳出当前循环体，不会执行 else 子句：
colors = ["Red", "Blue", "Yellow", "Black"]
for c in colors:
    if c == 'Yellow':
        print(f'break after printing {c}')
        break
    print("循环数据 " + c)
else:
    print("没有循环数据!")
print("完成循环!")
```

### break 和 continue 关键字及循环中的 else 子句

- `break` 关键字用于跳出当前 `for` 和 `while` 的循环体。如果从 `for` 或 `while` 循环中终止，任何对应的循环 `else` 块将不执行。
- `continue` 关键字用于跳过当前循环块中的剩余语句，然后继续进行下一轮循环。

`while` 语句代码执行过程：

![](images/20260426095709239.png)

`for` 语句代码执行过程：

![](images/20260426102857349.jpg)

示例：

```python
# continue 示例
n = 5
while n > 0:
    n -= 1
    if n == 2:
        continue
    print(n)
print('循环结束。')

for letter in 'MooNkirA':
    if letter == 'i':  # 字母为 i 时跳过输出
        continue
    print('当前字母 :', letter)

var = 10
while var > 0:
    var = var - 1
    if var == 5:  # 变量为 5 时跳过输出
        continue
    print('当前变量值 :', var)
print("Good bye!")

# break 示例
for letter in 'MooNkirA':
    if letter == 'i':
        break
    print('当前字母为 :', letter)

var = 10
while var > 0:
    print('当前变量值为 :', var)
    var = var - 1
    if var == 5:
        break
print("Good bye!")
```

循环语句可以有 `else` 子句，它在穷尽列表(以 `for` 循环)或条件变为 `false` (以 `while` 循环)导致循环终止时被执行，但循环被 `break` 终止时不执行。

```python
for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(n, '等于', x, '*', n // x)
            break
    else:
        # 循环中没有找到元素
        print(n, ' 是质数')
```

### pass 语句

`pass` 是空语句，不做任何事情，一般用做占位语句，是为了保持程序结构的完整性。

```python
while True:
    pass  # 等待键盘中断 (Ctrl+C)
```

空的类：

```python
class MyEmptyClass:
    pass
```

循环在字母为 i 时 执行 pass 语句块:

```python
for letter in 'MooNkirA':
    if letter == 'i':
        pass
        print('执行 pass 块')
    print('当前字母 :', letter)
print("Good bye!")

"""
当前字母 : M
当前字母 : o
当前字母 : o
当前字母 : N
当前字母 : k
执行 pass 块
当前字母 : i
当前字母 : r
当前字母 : A
Good bye!
"""
```
