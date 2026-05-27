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

- 官网 https://www.python.org/
- Python 官方文档 https://docs.python.org/zh-cn/3/

### Python 的版本

#### 概述

Python 有两个主要版本：**Python 2** 和 **Python 3**。

- **Python 2.x**：是过去的版本（**官方已经停止维护**）。
  - 解释器名称是 `python`。
- **Python 3.x**：现在是主流版本，并且是未来发展的方向。
  - 解释器名称是 `python3`。
  - 相对于 Python 的早期版本，Python 3.x 是一个较大的升级。
  - 在设计时没有考虑向下兼容，以避免带入过多累赘。许多基于早期 Python 版本设计的程序无法在 Python 3.0 上正常执行。

> Tips: <span style="color: red;">**Python 3.0 与 Python 2.0 不兼容的**</span>。新的 Python 程序建议使用 Python 3.x 版本的语法

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

## Python 基础语法

### 标识符

标示符就是在程序中定义的**变量名**、**函数名**。在 Python 里，所有标识符可以包括英文字母、数字以及下划线(`_`)，但不能以数字开头，不能使用保留字符（关键字）。值得注意的是：Python 中的标识符是<span style="color: red;">**区分大小写**</span>的。如果标识符中包含多个名词，Python 官方推荐使用蛇形命名法（即 `user_name`）。

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

等号（`=`）用来给变量赋值。等号（`=`）运算符左边是变量名，等号（`=`）运算符右边是存储在变量中的值。<span style="color: red;">**`=` 两边要留一个空格**</span>。示例如下：

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

<span style="color: red;">**不同类型的变量也可以进行修改、重新赋值，与类型无关**</span>。

```python
money = 10
money = '10元'
print(money)
```

#### 常量

程序在运行的过程中，值永远不会发生改变的变量称之为**常量**。Python 没有专门的常量类型，一般约定<span style="color: red;">**使用大写表示常量**</span>。

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

Python 与其他语言最大的区别就是，**Python 的代码块不使用大括号 `{}` 来控制类，函数以及其他逻辑判断**。python 最具特色的就是<span style="color: red;">**用缩进来写模块**</span>。

<span style="color: red;">**缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行**</span>。以下实例缩进为四个空格:

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

Python 语句中<span style="color: red;">**一般以新行作为语句的结束符**</span>。但是也可以使用斜杠（`\`）将一行的语句分为多行显示，如下所示：

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

注释不是程序，<span style="color: red;">**不能被执行**</span>，其作用只是对程序代码进行解释说明，让别人可以看懂程序代码的作用，能够大大增强程序的可读性。

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

**输出文档说明的内容**：可以使用 `__doc__`（<span style="color: red;">**注意双下划线**</span>）调用函数中的文档字符串属性。

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

> Notes: <span style="color: red;">**`# coding=utf-8` 的 `=` 号两边不要空格**</span>。另外，在第一种语法中，`-*-` 并没有实际意义，只是为了美观才加上去了，因此，第一种语法格式中也可以直接将前后的 `-*-` 去掉（即示例中第三种写法）。

<span style="color: red;">**注意：Python3.X 源码文件默认使用 utf-8 编码，所以可以正常解析中文，无需指定 UTF-8 编码**</span>。但如果使用编辑器(IDE)，同时需要设置 py 文件存储的格式为 UTF-8，否则会出现类似以下错误信息：

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

> Notes: <span style="color: red;">**空行与代码缩进不同，空行并不是 Python 语法的一部分，却是程序代码的一部分。书写时不插入空行，Python 解释器运行也不会出错。但是空行的作用在于分隔两段不同功能或含义的代码，便于日后代码的维护或重构。**</span>

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

需要注意：<span style="color: red;">**`and` 和 `or` 运算符返回值是某个参与计算的值本身！**</span>。具体处理规则如下：

1. `and` 运算符先对左边的表达式或者值进行处理，若参与运算的值不是布尔值，那 Python 会自动转为布尔值，然后再进行逻辑操作。如果左边的结果是“假”，则直接返回<span style="color: red;">**左边的值**</span>，否则返回<span style="color: red;">**右边的值**</span>。
2. `or` 运算符先对左边的表达式或者值进行处理，若参与运算的值不是布尔值，那 Python 会自动转为布尔值，然后再进行逻辑操作。如果左边的结果是“真”，则直接返回<span style="color: red;">**左边的值**</span>，否则返回<span style="color: red;">**右边的值**</span>。

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

<span style="color: red;">**`not` 运算符返回值一定是布尔值！**</span>。若参与 `not` 运算的值不是布尔值，那 Python 会自动转为布尔值，然后再进行逻辑操作。

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

## Python 推导式

### 核心概念

Python 推导式是一种独特的数据处理方式，可以从一个数据序列构建另一个新的数据序列的结构体。它是一种强大且简洁的语法，适用于生成列表、字典、集合和生成器。Python 支持各种数据结构的推导式：

- 列表(list)推导式
- 字典(dict)推导式
- 集合(set)推导式
- 元组(tuple)推导式

> [!note] 在使用推导式时，需要注意可读性，尽量保持表达式简洁，以免影响代码的可读性和可维护性。

### 列表推导式

列表推导式（List Comprehension）是 Python 中**用于快速生成列表的简洁语法糖**，允许通过一行代码完成传统 `for` 循环 + `append()` 方法才能实现的列表创建、转换和过滤操作。它底层由 C 语言实现，执行效率远高于 Python 级别的普通循环。核心优势：

1. **代码简洁**：一行代码替代多行循环，减少冗余。
2. **执行高效**：底层 C 实现，比普通 `for` 循环快 20%-50%。
3. **可读性强**：逻辑清晰，一眼就能看出列表的生成规则。
4. **功能集成**：支持在定义时同时完成转换、过滤和嵌套循环操作。

主要的应用场景：所有需要根据可迭代对象生成新列表的场景，如数据转换、元素过滤、批量计算、嵌套列表处理等。

列表推导式本质是普通 `for` 循环的语法简化，功能完全等价，但代码量更少、可读性更高（合理使用时）。与普通 `for` 循环的比较：

```python
# 普通 for 循环写法
squares = []
for x in range(1, 11):
    squares.append(x ** 2)

# 等价的列表推导式写法
squares = [x ** 2 for x in range(1, 11)]

print(squares)  # 输出：[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

#### 基础语法（仅转换）

```python
[表达式 for 变量 in 可迭代对象]

# 等价写法
result = []
for 变量 in 可迭代对象:
    result.append(表达式)
```

**语法的执行逻辑**：遍历可迭代对象，将每个元素赋值给变量，执行表达式并将结果添加到新列表中。主要用于对可迭代对象的所有元素进行统一转换。

```python
# 示例1：生成 1-5 的立方列表
cubes = [x ** 3 for x in range(1, 6)]
print(cubes)  # 输出：[1, 8, 27, 64, 125]

# 示例2：将字符串列表转为大写
words = ["apple", "banana", "cherry"]
upper_words = [word.upper() for word in words]
print(upper_words)  # 输出：['APPLE', 'BANANA', 'CHERRY']
```

#### 带过滤条件（仅过滤）

```python
[表达式 for 变量 in 可迭代对象 if 条件]

# 等价写法
result = []
for 变量 in 可迭代对象:
    if 条件:
        result.append(表达式)
```

**语法的执行逻辑**：先遍历可迭代对象，对每个元素判断条件，仅当条件为 `True` 时，才执行表达式并将结果添加到新列表中。主要用于从可迭代对象中筛选出符合条件的元素，再进行转换。

```python
# 示例：生成 1-20 中能被 3 整除的数的平方
divisible_by_3_squares = [x ** 2 for x in range(1, 21) if x % 3 == 0]
print(divisible_by_3_squares)  # 输出：[9, 36, 81, 144, 225, 324]
```

#### 带条件表达式（转换所有元素）

```python
[条件表达式 for 变量 in 可迭代对象]

# 等价写法
result = []
for 变量 in 可迭代对象:
    result.append(真值结果 if 条件 else 假值结果)
```

**语法的执行逻辑**：条件表达式格式为 `真值结果 if 条件 else 假值结果`，作用是**对所有元素进行转换**（不会过滤任何元素），根据条件返回不同的结果。主要用于需要对所有元素进行分类转换的场景。

```python
# 示例：将列表中的正数转为 1，负数转为 -1，0 保持不变
nums = [1, -2, 0, 3, -4, 0]
transformed = [1 if x > 0 else -1 if x < 0 else 0 for x in nums]
print(transformed)  # 输出：[1, -1, 0, 1, -1, 0]
```

#### 嵌套循环

```python
[表达式 for 外层变量 in 外层可迭代对象 for 内层变量 in 内层可迭代对象]

# 等价写法
result = []
for 外层变量 in 外层可迭代对象:
    for 内层变量 in 内层可迭代对象:
        result.append(表达式)
```

**语法的执行逻辑**：循环顺序与普通嵌套循环完全一致，**外层循环在前，内层循环在后**。主要用于处理嵌套可迭代对象、生成笛卡尔积等。

```python
# 示例1：生成两个列表的笛卡尔积
a = [1, 2]
b = ["x", "y"]
cartesian = [(x, y) for x in a for y in b]
print(cartesian)  # 输出：[(1, 'x'), (1, 'y'), (2, 'x'), (2, 'y')]

# 示例2：扁平化二维列表
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for sublist in nested_list for num in sublist]
print(flattened)  # 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### 嵌套循环 + 多过滤条件

```python
[表达式 for 外层变量 in 外层可迭代对象 if 外层条件 for 内层变量 in 内层可迭代对象 if 内层条件]
```

主要用于对嵌套可迭代对象进行多层过滤。

```python
# 示例：生成笛卡尔积中满足 x + y > 3 的元素
a = [1, 2, 3]
b = [2, 3, 4]
filtered_cartesian = [(x, y) for x in a if x > 1 for y in b if y > 2 and x + y > 5]
print(filtered_cartesian)  # 输出：[(2, 4), (3, 3), (3, 4)]
```

### 元组推导式（生成器表达式）

`(表达式 for 变量 in 可迭代对象 if 条件)` 返回一个**生成器对象**，惰性求值（不会一次性生成所有元素），节省内存。主要用于处理大数据集时，不需要一次性加载所有元素到内存。

```python
# 生成 1-1000000 的平方（不会占用大量内存）
gen = (x ** 2 for x in range(1, 1000001))

# 生成器只能遍历一次
print(next(gen))  # 输出：1
print(next(gen))  # 输出：4

# 也可通过 for 循环遍历
# for num in gen:
#     print(num)
```

### 集合推导式

`{表达式 for 变量 in 可迭代对象 if 条件}` 返回一个**集合**，自动去重。主要用于需要生成无重复元素的集合。

```python
# 生成列表中元素的平方的集合（自动去重）
nums = [1, 2, 2, 3, 3, 3]
square_set = {x ** 2 for x in nums}
print(square_set)  # 输出：{1, 4, 9}
```

### 字典推导式

`{键表达式: 值表达式 for 变量 in 可迭代对象 if 条件}` 返回一个**字典**，键必须唯一（重复键会被后面的覆盖）。主要用于快速生成字典、转换字典格式、反转键值对。

```python
# 示例1：将列表元素作为键，平方作为值
nums = [1, 2, 3, 4]
square_dict = {x: x ** 2 for x in nums}
print(square_dict)  # 输出：{1: 1, 2: 4, 3: 9, 4: 16}

# 示例2：反转字典的键值对
original_dict = {"a": 1, "b": 2, "c": 3}
reversed_dict = {v: k for k, v in original_dict.items()}
print(reversed_dict)  # 输出：{1: 'a', 2: 'b', 3: 'c'}
```

### 列表推导式使用要点与注意事项

#### 执行顺序：从左到右

列表推导式的执行顺序严格按照**从左到右**的顺序：

1. 先执行最左边的 `for` 循环；
2. 再执行该 `for` 循环后面的 `if` 条件；
3. 依次执行后续的 `for` 循环和 `if` 条件；
4. 最后执行最左边的表达式，生成结果元素。

```python
# 执行顺序示例
result = [x * y for x in range(1, 4) if x > 1 for y in range(1, 4) if y < 3]
# 执行步骤：
# 1. 外层循环 x=1 → 不满足 x>1 → 跳过
# 2. 外层循环 x=2 → 满足 x>1 → 内层循环 y=1 → 满足 y<3 → 2*1=2
# 3. 内层循环 y=2 → 满足 y<3 → 2*2=4
# 4. 内层循环 y=3 → 不满足 y<3 → 跳过
# 5. 外层循环 x=3 → 满足 x>1 → 内层循环 y=1 → 满足 y<3 → 3*1=3
# 6. 内层循环 y=2 → 满足 y<3 → 3*2=6
# 7. 内层循环 y=3 → 不满足 y<3 → 跳过
print(result)  # 输出：[2, 4, 3, 6]
```

#### 变量作用域

Python 3 中，列表推导式的变量拥有**独立的局部作用域**，不会污染外部变量。这与 Python 2 不同（Python 2 中会覆盖外部变量）。

```python
x = 100  # 外部变量
result = [x for x in range(5)]
print(x)  # 输出：100（Python 3 中外部变量未被修改）
# 若在 Python 2 中会输出：4
```

#### 多个过滤条件

可以在 `for` 子句后添加多个 `if` 条件，逻辑上为**与（and）**关系：

```python
# 筛选 1-100 中能被 2、3、5 同时整除的数
result = [x for x in range(1, 101) if x % 2 == 0 if x % 3 == 0 if x % 5 == 0]
print(result)  # 输出：[30, 60, 90]
```

#### 嵌套条件表达式

在表达式位置可以使用嵌套的条件表达式，实现多分支转换：

```python
# 根据分数转换为等级
scores = [95, 82, 73, 61, 58, 45]
grades = [
    "优秀" if score >= 90 else
    "良好" if score >= 80 else
    "及格" if score >= 60 else
    "不及格"
    for score in scores
]
print(grades)  # 输出：['优秀', '良好', '及格', '及格', '不及格', '不及格']
```

#### 使用函数作为表达式

对于复杂的转换逻辑，可以将逻辑封装为函数，在列表推导式中调用：

```python
def process_string(s):
    """去除字符串两端空格，转为小写，长度大于 5 则截断"""
    s = s.strip().lower()
    return s[:5] if len(s) > 5 else s

words = ["  Apple  ", "Banana", "  Cherry Pie  ", "Date"]
processed = [process_string(word) for word in words]
print(processed)  # 输出：['apple', 'banan', 'cherr', 'date']
```

#### 空列表推导式

如果可迭代对象为空，或者所有元素都不满足过滤条件，会返回空列表：

```python
print([x for x in []])  # 输出：[]
print([x for x in range(5) if x > 10])  # 输出：[]
```

#### 使用建议

- 列表推导式与高阶函数 `map()`、`filter()` 功能类似，但在大多数场景下更直观易读。选择建议如下：
    - 简单转换：两者均可，`map()` 略快，但列表推导式更直观。
    - 带条件的转换：优先使用列表推导式，代码更简洁。
    - 多个可迭代对象并行处理：`map()` 更方便。
- 严格区分两种条件用法：

| 用法类型   | 语法位置                 | 语法要求                   | 作用                     | 结果长度变化             |
| ---------- | ------------------------ | -------------------------- | ------------------------ | ------------------------ |
| 过滤条件   | `for` 子句之后           | 只能有 `if`，不能有 `else` | 过滤元素，不满足的丢弃   | 小于等于原可迭代对象长度 |
| 条件表达式 | 表达式位置（`for` 之前） | 必须同时有 `if` 和 `else`  | 转换元素，所有元素都保留 | 等于原可迭代对象长度     |

- 不要过度嵌套。列表推导式最多支持**两层嵌套**，超过两层会严重降低代码可读性和可维护性。此时应使用普通 `for` 循环代替。

```python
# 反例：三层嵌套，可读性差
nested_3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
flattened = [num for sublist1 in nested_3d for sublist2 in sublist1 for num in sublist2]

# 正例（推荐）：普通循环实现三层扁平化，更清晰
flattened = []
for sublist1 in nested_3d:
    for sublist2 in sublist1:
        for num in sublist2:
            flattened.append(num)

print(flattened)  # 输出：[1, 2, 3, 4, 5, 6, 7, 8]
```

- 避免在列表推导式中写副作用代码：副作用代码指会改变程序状态的代码（如 `print()`、修改全局变量、文件读写等）。虽然 Python 语法允许，但会严重降低代码可读性和可维护性。

```python
# 反例（不推荐）
count = 0
# 列表推导式中修改全局变量
result = [count := count + 1 for _ in range(5)]
print(count)  # 输出：5

# 正例（推荐）
count = 0
result = []
for _ in range(5):
    count += 1
    result.append(count)
print(count)  # 输出：5
```

## 浅拷贝与深拷贝

### 核心概念

#### 回顾 Python 对象与引用机制

在 Python 中，**变量不是存储数据的容器，而是指向对象的引用**。当执行 `a = [1, 2, 3]` 时，会先在内存中创建列表对象 `[1, 2, 3]`，然后让变量 `a` 指向这个对象的内存地址。这意味着：

- 多个变量可以指向同一个对象。
- 通过一个变量修改对象时，所有指向该对象的变量都会看到变化。
- 拷贝的本质是**创建一个新的对象**，而不是创建一个新的引用。

#### 什么是拷贝

拷贝是指**创建一个与原对象内容相同但内存地址不同的新对象**。当需要修改一个对象，同时又不想影响原对象时，就需要使用拷贝。Python 中的拷贝分为两种：

- **浅拷贝（Shallow Copy）**：只拷贝对象的第一层，嵌套的子对象仍然是引用。
- **深拷贝（Deep Copy）**：递归拷贝对象的所有层级，包括所有嵌套的子对象。

#### 浅拷贝定义

浅拷贝会创建一个新的容器对象，但容器中的元素仍然是原对象中元素的引用。

- 新对象与原对象是不同的内存地址。
- 修改新对象的**第一层元素**不会影响原对象。
- 修改新对象的**嵌套子对象**会影响原对象（因为子对象是共享的引用）。

主要使用场景：当对象的所有元素都是不可变对象（如数字、字符串、元组），或者不需要修改嵌套子对象时，使用浅拷贝更高效。

#### 深拷贝定义

深拷贝会递归创建一个新的容器对象，并且递归拷贝所有嵌套的子对象。

- 新对象与原对象是完全独立的两个对象。
- 修改新对象的任何层级元素都不会影响原对象。

主要使用场景：当对象包含可变的嵌套子对象，并且需要完全独立的副本时，必须使用深拷贝。

#### 赋值操作与拷贝的本质区别

赋值操作（`b = a`）只是让变量 `b` 指向变量 `a` 所指的同一个对象，没有创建任何新对象；而拷贝（浅拷贝/深拷贝）会创建一个新的对象，只是内容与原对象相同。

| 操作类型 | 是否创建新对象 | 第一层元素 | 嵌套子对象 | 性能 |
| ------- | ---------- | --------- | -------- | ---- |
| 赋值     | ❌ 否      | 共享引用   | 共享引用   | 最快 |
| 浅拷贝   | ✅ 是      | 独立       | 共享引用   | 较快 |
| 深拷贝   | ✅ 是      | 独立       | 独立       | 最慢 |

```python
a = [1, 2, 3]
b = a  # 赋值
c = a.copy()  # 浅拷贝

print(id(a) == id(b))  # 输出：True（同一个对象）
print(id(a) == id(c))  # 输出：False（不同对象）
```

### 拷贝的语法

#### 通用的浅拷贝的语法

- `copy.copy(x)`：返回任意对象的浅拷贝。这是最<span style="color: red;">**通用的浅拷贝**</span>方式，适用于所有可拷贝的对象。*注意：需要引入 `copy` 模块 *
    - 参数 `x`：需要拷贝的任意对象。
    - 返回值：对象 `x` 的浅拷贝。

```python
import copy

original = [1, 2, [3, 4]]
shallow_copy = copy.copy(original)

print(id(original) == id(shallow_copy))  # 输出：False
print(id(original[2]) == id(shallow_copy[2]))  # 输出：True
```

#### 深拷贝的语法

Python 中唯一通用的深拷贝方式是使用 `copy` 模块的 `deepcopy()` 函数。

- `copy.deepcopy(x, memo=None)`：返回任意对象的深拷贝。函数会递归拷贝所有嵌套的子对象，处理循环引用。
    - 参数 `x`：需要拷贝的任意对象。
    - 参数 `memo`：可选，字典类型，用于记录已经拷贝过的对象，避免循环引用导致的无限递归。
    - 返回值：对象 `x` 的深拷贝对象。

```python
import copy

original = [1, 2, [3, 4]]
deep_copy = copy.deepcopy(original)

print(id(original) == id(deep_copy))  # 输出：False
print(id(original[2]) == id(deep_copy[2]))  # 输出：False（嵌套子对象也被拷贝）
```

#### 其他浅拷贝方式

Python 提供了多种实现浅拷贝的方法，适用于不同类型的对象。

##### 切片操作（适用于序列类型浅拷贝）

```python
新对象 = 原对象[:]
```

适用于**列表、字符串、元组**等序列类型对象的浅拷贝。

```python
# 示例：列表切片浅拷贝
original = [1, 2, [3, 4]]
shallow_copy = original[:]

print(id(original) == id(shallow_copy))  # 输出：False（新对象）
print(id(original[2]) == id(shallow_copy[2]))  # 输出：True（嵌套子对象共享）
```

##### 工厂函数（浅拷贝）

```python
新对象 = 类型构造函数(原对象)
```

适用于 `list()`、`dict()`、`set()` 等内置容器类型对象的浅拷贝。。

```python
# 示例：字典工厂函数浅拷贝
original = {"a": 1, "b": [2, 3]}
shallow_copy = dict(original)

print(id(original) == id(shallow_copy))  # 输出：False
print(id(original["b"]) == id(shallow_copy["b"]))  # 输出：True
```

##### 对象的 copy 方法（浅拷贝）

- `list.copy()`：Python 3.3+ 新增，返回列表的浅拷贝对象。
- `dict.copy()`：返回字典的浅拷贝对象。
- `set.copy()`：返回集合的浅拷贝对象。

```python
# 示例：列表 copy() 方法浅拷贝
original = [1, 2, [3, 4]]
shallow_copy = original.copy()

print(id(original) == id(shallow_copy))  # 输出：False
print(id(original[2]) == id(shallow_copy[2]))  # 输出：True
```

### 拷贝的使用要点及注意事项

#### 不可变对象的拷贝特性

对于**不可变对象**（如 `int`、`float`、`str`、`tuple`），无论浅拷贝和深拷贝都**不会创建新对象**，而是直接返回原对象的引用。这是 Python 的优化机制，因为不可变对象无法被修改，不需要创建副本。

**特殊情况**：如果元组中包含**可变的子对象**，深拷贝会递归拷贝这些可变子对象，因此深拷贝后的元组与原元组是不同的对象。

```python
import copy

# 示例1：不可变对象的拷贝（返回原引用）
a = "hello"
b = copy.copy(a)
c = copy.deepcopy(a)
print(id(a) == id(b) == id(c))  # 输出：True

# 示例2：包含可变子对象的元组
original = (1, 2, [3, 4])
shallow_copy = copy.copy(original)
deep_copy = copy.deepcopy(original)

print(id(original) == id(shallow_copy))  # 输出：True（浅拷贝返回原元组）
print(id(original) == id(deep_copy))  # 输出：False（深拷贝创建新元组）
print(id(original[2]) == id(deep_copy[2]))  # 输出：False（可变子对象被拷贝）
```

#### 可变对象的拷贝特性（重点）

对于**可变对象**（如 `list`、`dict`、`set`），浅拷贝只拷贝第一层，深拷贝递归拷贝所有层。修改不同层级的元素会产生不同的结果：

```python
import copy

original = [1, 2, [3, 4]]
shallow_copy = copy.copy(original)
deep_copy = copy.deepcopy(original)

# 1. 修改第一层元素：只影响自身
shallow_copy[0] = 100
deep_copy[0] = 200
print("修改第一层后：")
print("原对象：", original)  # 输出：[1, 2, [3, 4]]（不受影响）
print("浅拷贝：", shallow_copy)  # 输出：[100, 2, [3, 4]]
print("深拷贝：", deep_copy)  # 输出：[200, 2, [3, 4]]

# 2. 修改嵌套子对象：浅拷贝会影响原对象，深拷贝不会
shallow_copy[2].append(5)
deep_copy[2].append(6)
print("\n修改嵌套子对象后：")
print("原对象：", original)  # 输出：[1, 2, [3, 4, 5]]（被浅拷贝影响）
print("浅拷贝：", shallow_copy)  # 输出：[100, 2, [3, 4, 5]]
print("深拷贝：", deep_copy)  # 输出：[200, 2, [3, 4, 6]]（独立）
```

#### 深拷贝的例外情况

以下类型的对象，`deepcopy()` 不会创建新对象，而是直接返回原对象的引用：

- 模块对象
- 函数对象
- 类对象
- 线程对象
- 文件对象
- 套接字对象

因为这些对象的状态与系统环境紧密相关，无法被安全地拷贝。

```python
import copy
import math

# 模块对象的深拷贝
m1 = math
# m2 = copy.deepcopy(m1) # TypeError: cannot pickle 'module' object

# 函数对象的深拷贝
def func():
    pass

f1 = func
f2 = copy.deepcopy(f1)
print(id(f1) == id(f2))  # 输出：True
```

#### 循环引用的处理

当对象之间存在循环引用（A 引用 B，B 又引用 A）时，`deepcopy()` 会自动处理，<span style="color: red;">**不会陷入无限递归**</span>。它通过 `memo` 参数记录已经拷贝过的对象，遇到重复对象时直接返回已拷贝的引用。

```python
import copy

# 创建循环引用
a = [1, 2]
b = [3, a]
a.append(b)

# 深拷贝循环引用对象
deep_copy = copy.deepcopy(a)

print(a[2][1] is a)  # 输出：True（原对象循环引用）
print(deep_copy[2][1] is deep_copy)  # 输出：True（深拷贝后保持循环引用结构）
print(id(a) != id(deep_copy))  # 输出：True（是不同的对象）
```

#### 自定义对象的拷贝

对于自定义类的对象，默认情况下：

- 浅拷贝会创建一个新的对象实例，但所有属性仍然是原对象属性的引用；
- 深拷贝会创建一个新的对象实例，并且递归拷贝所有属性。

如果需要自定义拷贝行为，可以实现 `__copy__()` 和 `__deepcopy__()` 方法。

```python
import copy

class Person:
    def __init__(self, name, friends):
        self.name = name
        self.friends = friends  # 列表类型（可变）

    def __repr__(self):
        return f"Person(name='{self.name}', friends={self.friends})"

# 默认拷贝行为
p1 = Person("张三", ["李四", "王五"])
p2 = copy.copy(p1)
p3 = copy.deepcopy(p1)

p2.name = "张小三"  # 修改第一层属性（字符串不可变）
p2.friends.append("赵六")  # 修改嵌套可变属性

print("原对象：", p1)  # 输出：Person(name='张三', friends=['李四', '王五', '赵六'])（friends 被浅拷贝影响）
print("浅拷贝：", p2)  # 输出：Person(name='张小三', friends=['李四', '王五', '赵六'])
print("深拷贝：", p3)  # 输出：Person(name='张三', friends=['李四', '王五'])（完全独立）
```

#### 字典的 update 方法与拷贝的区别

`dict.update()` 方法是将另一个字典的键值对更新到当前字典中，不会创建新字典。而 `dict.copy()` 会创建一个新的字典。

```python
original = {"a": 1, "b": 2}
update_copy = {}
update_copy.update(original)  # 不是拷贝，是更新
shallow_copy = original.copy()  # 浅拷贝

print(id(original) == id(update_copy))  # 输出：False（update_copy 是新字典）
print(id(original) == id(shallow_copy))  # 输出：False
```

### 应用场景

1. **函数参数传递**：当函数需要修改参数对象，但又不想影响原对象时，传递拷贝后的对象。
2. **数据备份**：在对数据进行修改前，创建一个备份，防止原数据被意外破坏。
3. **多线程编程**：当多个线程需要共享数据时，拷贝数据后再处理，避免竞争条件。
4. **原型模式**：通过拷贝已有对象来创建新对象，避免重复初始化的开销。

#### 性能差异与选择建议

**性能**：赋值 > 浅拷贝 > 深拷贝。深拷贝需要递归遍历所有嵌套对象，对于大对象或复杂对象，性能开销会非常大。**选择建议**如下：

- 如果对象的所有元素都是不可变的，使用赋值即可。
- 如果对象只有第一层是可变的，或者不需要修改嵌套子对象，使用浅拷贝。
- 如果对象包含可变的嵌套子对象，并且需要完全独立的副本，使用深拷贝。

#### 常见错误与陷阱

1. **把赋值当成拷贝**：这是新手最常见的错误，赋值只是创建新的引用，不会创建新对象。
2. **以为浅拷贝会拷贝所有层级**：修改嵌套子对象时发现原对象也被修改，就是因为浅拷贝只拷贝第一层。
3. **对不可变对象进行不必要的拷贝**：浪费性能，因为不可变对象的拷贝不会创建新对象。
4. **深拷贝大对象导致性能问题**：对于包含大量数据的对象，深拷贝可能会占用大量内存和时间。
