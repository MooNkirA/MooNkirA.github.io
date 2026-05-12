## Python 数据模型 (Data model)

Python3 中有 6 种标准数据类型，以及 bool 布尔类型（bool 是 int 的子类，有时单独列出）：

- Number（数字）
- String（字符串）
- bool（布尔类型）
- List（列表）
- Tuple（元组）
- Set（集合）
- Dictionary（字典）

```python
a, b, c, d = 20, 5.5, True, 4+3j
# 内置的 `type()` 函数可以用来查询变量所指的对象类型。
print(type(a), type(b), type(c), type(d))
```

输出结果：

```
<class 'int'> <class 'float'> <class 'bool'> <class 'complex'>
```

> [!note] 内置的 type() 函数可以用来查询变量所指的对象类型。

### 类型判断的方式

在程序中想确定某个变量的数据类型，可以使用以下两个内置函数：

- `type()` 函数：查询变量所指的对象类型。
- `isinstance()` 函数：判断变量是否为指定的对象类型。

```python
a = 20  
print(type(a))  # 结果：<class 'int'>  
print(isinstance(a, int))  # 结果：True
```

从上面的结果对比可知 `isinstance` 和 `type` 的区别在于：

- `type()` 不会判断子类是一种父类类型，只输出类型是什么。
- `isinstance()` 会判断子类是一种父类类型，返回布尔值。

## None (特殊的字面量)

`None` 是特殊的字面量。

1. `None` 是一个特殊的字面量，表示：空值∕无值／无意义
2. `None` 的类型是 `NoneType`
3. `None` 转为布尔值是 `False`
4. `None` 不能参与数学运算，也不能与字符串拼接
5. 若不给函数设置返回值，函数会默认返回 `None`

```python
# None 是一个特殊的字面量，它表示：空值 / 无值 / 无意义
msg = None

# None 的类型是 NoneType
print(type(msg))  # <class 'NoneType'>

# None 转为布尔值是 False
print(bool(msg))  # False

if not msg:
    print('not None 为 True')

# None 不能参与数学运算，也不能与字符串拼接
result1 = msg + 1  # 报错：TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'
result1 = msg + 'hello'  # 报错：TypeError: unsupported operand type(s) for +: 'NoneType' and 'str'
```

## Number（数字）

Python 3.x 的 Number 类型包含 **int、float、bool、complex（复数）**。

> [!Note] 值得注意：Python 3.x <span style="color: red;">**只有一种整数类型 int**</span>，表示为长整型，没有 Python 2.x 中的 Long 类型。

### int(整型)

**整型(int)**，通常被称为是整型或整数，是正或负整数，不带小数点。Python3 整型是没有限制大小的（取决于当前运行环境的硬件的配置的限制），可以当作 Long 类型使用，所以 Python3 没有 Python2 的 Long 类型。

> [!note] 布尔(bool)是整型的子类型。

### bool(布尔)

Python3 中，bool 是 int 的子类，True 和 False 可以和数字相加，`True==1`、`False==0` 会返回 **True**，但可以通过 `is` 来判断对象身份。

```python
print(b == 1)  # 结果：True  
print(c == 0)  # 结果：True  
print(b + 1)  # 结果：2  
print(c + 1)  # 结果：1  
print(1 is True)  # 结果：False  
print(0 is False)  # 结果：False
```

> [!info] `1 is True` 可能会出现 SyntaxWarning。
> 
> Python 检测到在用 `is` 比较一个字面量整数（如 1）和 True，这通常是代码错误。因为 `is` 比较的是对象身份（是否同一个对象），而不是值是否相等。所有Python 建议使用 `==` 来比较值，除非确实需要检查是否是同一个对象。
> 
> 在 Python 2.x 中是没有布尔型的，它用数字 0 表示 False，用 1 表示 True。

### float(浮点型)

浮点型由整数部分与小数部分组成，浮点型也可以使用科学计数法表示。

## String（字符串）

### 格式化输出语法格式

如果希望输出文字信息的同时，一起输出数据，就需要使用到格式化操作符。类似于 C 中的 `printf`，可以格式化输出的内容。

```python
print("格式化字符串" % 变量1)
print("格式化字符串" % (变量1, 变量2, ...))
```

示例：

```python
>>> s = 'Hello'  
>>> x = len(s)  
>>> print("The length of %s is %d" % (s, x))
The length of Hello is 5
```

**格式化输出参数说明**：

1. `%`字符：称为格式化操作符，专门用于处理字符串中的格式。
    - 标记转换说明符的开始。
    - 包含`%`的字符串，被称为格式化字符串。
    - `%`和不同的字符连用，不同类型的数据需要使用不同的格式化字符。
2. 转换标志：`-`表示左对齐；`+`表示在转换值之前要加上正负号；`""（空白字符）`表示正数之前保留空格；`0`表示转换值若位数不够则用 0 填充。示例：

```python
# 指定占位符宽度（左对齐）
>>> print("Name:%-10s Age:%-8d Height:%-8.2f" % ("Aviad", 25, 1.83))
Name:Aviad      Age:25       Height:1.83
# 指定占位符（若位数不够则用0填充）
>>> print("Name:%-10s Age:%08d Height:%08.2f" % ("Aviad", 25, 1.83))
Name:Aviad      Age:00000025 Height:00001.83
```

3. 最小字段宽度：转换后的字符串至少应该具有该值指定的宽度。如果是`*`，则宽度会从值元组中读出。

```python
# 指定占位符宽度
>>> print("Name:%10s Age:%8d Height:%8.2f" % ("Aviad", 25, 1.83))
Name:     Aviad Age:      25 Height:    1.83
```

4. 点(`.`)后跟精度值：如果转换的是实数，精度值就表示出现在小数点后的位数。如果转换的是字符串，那么该数字就表示最大字段宽度。如果是`*`，则从后面的元组中读取字段宽度或精度。

```python
>>> print("His height is %f m" % (1.83))
His height is 1.830000 m
>>> print("His height is %.2f m" % (1.83))
His height is 1.83 m
>>> print("The String is %.2s" % ("abcd"))
The String is ab
# 用*从后面的元组中读取字段宽度或精度，第1个参数是精度
>>> print("His height is %.*f m" % (2, 1.83))
His height is 1.83 m
```

### 字符串格式化转换类型

|  转换类型   |                            含义                            |
| :-------: | --------------------------------------------------------- |
| `%d`,`%i` | 带符号的十进制整数，`%06d`表示输出的整数显示位数，不足的地方使用0补全 |
|   `%o`    | 不带符号的八进制                                             |
|   `%u`    | 不带符号的十进制                                             |
|   `%x`    | 不带符号的十六进制（小写）                                     |
|   `%X`    | 不带符号的十六进制（大写）                                     |
|   `%e`    | 科学计数法表示的浮点数（小写）                                  |
|   `%E`    | 科学计数法表示的浮点数（大写）                                  |
| `%f`,`%F` | 十进制浮点数，`%.2f`表示小数点后只显示两位                       |
|   `%g`    | 如果指数大于 -4 或者小于精度值则和 e 相同，其他情况和 f 相同        |
|   `%G`    | 如果指数大于 -4 或者小于精度值则和 E 相同，其他情况和 F 相同        |
|   `%C`    | 单字符（接受整数或者单字符字符串）                               |
|   `%r`    | 字符串（使用 repr 转换任意 python 对象)                        |
|   `%s`    | 字符串（使用 str 转换任意 python 对象），适配所有类型的变量        |
|   `%%`    | 输出`%`                                                    |

### 格式化操作符辅助指令

|  符号   |                                  功能                                  |
| ------ | --------------------------------------------------------------------- |
| `*`    | 定义宽度或者小数点精度                                                     |
| `-`    | 用做左对齐                                                              |
| `+`    | 在正数前面显示加号( + )                                                   |
| `<sp>` | 在正数前面显示空格                                                        |
| `#`    | 在八进制数前面显示零('0')，在十六进制前面显示'0x'或者'0X'(取决于用的是'x'还是'X') |
| `0`    | 显示的数字前面填充'0'而不是默认的空格                                        |
| `%`    | `%%`输出一个单一的`%`                                                    |
| (var)  | 映射变量(字典参数)                                                        |
| `m.n.` | m 是显示的最小总宽度,n 是小数点后的位数(如果可用的话)                           |

### f-string (推荐的格式化方式)

f-string 是 python3.6 之后版本添加的，称之为**字面量格式化字符串**，是新的格式化字符串的语法。**f-string** 格式化字符串以 `f` 开头，后面跟着字符串，字符串中的表达式用大括号 `{}` 包起来，它会将变量或表达式计算后的值替换到相应位置。*此方式更简单，不用判断变量类型选择使用 `%s` 还是 `%d`。*

```python
name = 'MooN'  
age = 23  
print(f"My name is {name} and I'm {age} years old")
```

在 Python 3.8 的版本可以使用 `=` 符号来拼接运算表达式与结果：

```python
x = 1  
print(f'{x + 1}')  # Python 3.6 结果：2  
y = 1  
print(f'{y + 1 = }')  # Python 3.8 结果：y + 1 = 2
```

### 字符串常用内建函数

#### 字符串查找函数

- `index(str, beg=0, end=len(string))`：检测字符串中是否包含子字符串 `str`，返回子串第一次出现的下标；若不存在则抛出异常
    - 参数`str`：需要查找的目标子字符串
    - 参数`beg`：可选，查找的起始下标，默认为 0
    - 参数`end`：可选，查找的结束下标，默认为字符串总长度

```python
s = "hello python"
# 查找子串第一次出现的下标
print(s.index("python"))  # 输出：6
# 指定起始下标查找
print(s.index("l", 3))    # 输出：3
```

- `find(str, beg=0, end=len(string))`：检测字符串中是否包含子字符串 `str`，返回子串第一次出现的下标；若不存在则返回 -1（不会报错）
    - 参数`str`：需要查找的目标子字符串
    - 参数`beg`：可选，查找的起始下标，默认为 0
    - 参数`end`：可选，查找的结束下标，默认为字符串总长度

```python
s = "hello python"
print(s.find("python"))  # 输出：6
print(s.find("java"))    # 输出：-1（不存在返回-1，不报错）
```

- `count(str, beg=0, end=len(string))`：统计子字符串 `str` 在目标字符串中出现的次数
    - 参数`str`：需要统计的子字符串
    - 参数`beg`：可选，统计的起始下标，默认为 0
    - 参数`end`：可选，统计的结束下标，默认为字符串总长度

```python
s = "hello hello python"
print(s.count("hello"))  # 输出：2
# 指定范围统计
print(s.count("l", 0, 5)) # 输出：2
```

#### 字符串替换/分割/拼接函数

- `replace(old, new, count=-1)`：将字符串中的旧子串替换为新子串，返回新字符串。（**此方法会改变原字符串**）
    - 参数`old`：需要被替换的旧子字符串
    - 参数`new`：替换后的新子字符串
    - 参数`count`：可选，替换的最大次数，默认为 -1（替换所有匹配项）

```python
s = "hello python python"
# 替换所有匹配项
print(s.replace("python", "java"))  # 输出：hello java java
# 仅替换1次
print(s.replace("python", "java", 1)) # 输出：hello java python
```

- `split(sep=None, maxsplit=-1)`：按照指定分隔符分割字符串，返回分割后的列表
    - 参数`sep`：可选，分隔符，默认为任意空白字符（空格、换行、制表符）
    - 参数`maxsplit`：可选，最大分割次数，默认为 -1（分割所有）

```python
s = "apple,banana,orange"
# 按逗号分割
print(s.split(","))  # 输出：['apple', 'banana', 'orange']
# 按空格分割
s2 = "hello python world"
print(s2.split())    # 输出：['hello', 'python', 'world']
```

- `join(iterable)`：将可迭代对象（列表、元组等）中的元素，通过字符串连接成一个新字符串
    - 参数`iterable`：可迭代对象，元素必须是字符串类型

```python
# 列表拼接
list1 = ["hello", "python", "world"]
print("-".join(list1))  # 输出：hello-python-world
# 元组拼接
tuple1 = ("a", "b", "c")
print("".join(tuple1))  # 输出：abc
```

#### 字符串空白处理函数

- `strip(chars=None)`：去除字符串**首尾**指定的字符，默认去除空白字符（空格、换行、制表符）
    - 参数`chars`：可选，需要去除的字符集合，默认为空白字符

```python
s = "  hello python  "
print(s.strip())  # 输出：hello python

s2 = "@@@python@@@"
print(s2.strip("@")) # 输出：python
```

- `lstrip(chars=None)`：去除字符串**左侧**指定的字符，默认去除空白字符
    - 参数`chars`：可选，需要去除的字符集合，默认为空白字符

```python
s = "  hello python  "
print(s.lstrip()) # 输出：hello python  
```

- `rstrip(chars=None)`：去除字符串**右侧**指定的字符，默认去除空白字符
    - 参数`chars`：可选，需要去除的字符集合，默认为空白字符

```python
s = "  hello python  "
print(s.rstrip()) # 输出：  hello python
```

#### 字符串大小写转换函数

- `upper()`：将字符串中的所有小写字母转换为大写字母，返回新字符串

```python
s = "hello python"
print(s.upper()) # 输出：HELLO PYTHON
```

- `lower()`：将字符串中的所有大写字母转换为小写字母，返回新字符串

```python
s = "HELLO PYTHON"
print(s.lower()) # 输出：hello python
```

#### 字符串判断类函数

- `startswith(prefix, beg=0, end=len(string))`：判断字符串是否以指定前缀开头，返回布尔值（True/False）
    - 参数`prefix`：需要判断的前缀字符串
    - 参数`beg`：可选，起始下标
    - 参数`end`：可选，结束下标

```python
s = "hello python"
print(s.startswith("hello")) # 输出：True
print(s.startswith("python", 6)) # 输出：True
```

- `endswith(suffix, beg=0, end=len(string))`：判断字符串是否以指定后缀结尾，返回布尔值（True/False）
    - 参数`suffix`：需要判断的后缀字符串
    - 参数`beg`：可选，起始下标
    - 参数`end`：可选，结束下标

```python
s = "hello python"
print(s.endswith("python")) # 输出：True
```

- `isdigit()`：判断字符串是否**全部由数字组成**，返回布尔值

```python
s1 = "123456"
s2 = "123abc"
print(s1.isdigit()) # 输出：True
print(s2.isdigit()) # 输出：False
```

- `isalpha()`：判断字符串是否**全部由字母组成**，返回布尔值

```python
s1 = "python"
s2 = "python123"
print(s1.isalpha()) # 输出：True
print(s2.isalpha()) # 输出：False
```

## 数据类型转换

对数据内置的类型进行转换，一般情况下只需要用到以数据类型作为名称的函数。Python 数据类型转换可以分为两种：

- **隐式类型转换**：自动完成
- **显式类型转换**：需要使用类型函数来转换

### 隐式类型转换

在**隐式类型转换**中，Python 会自动将一种数据类型转换为另一种数据类型，不需要人为干预。例如：

```python
num_int = 123  
num_flo = 1.23  
  
num_new = num_int + num_flo  
  
print("num_int 数据类型为:", type(num_int)) # <class 'int'>  
print("num_flo 数据类型为:", type(num_flo)) # <class 'float'>  
print("num_new 值为:", num_new) # 124.23  
print("num_new 数据类型为:", type(num_new)) # <class 'float'>
```

> [!note] 代码解析：
> 
> - 上面示例对两个不同数据类型的变量 `num_int` 和 `num_flo` 进行相加运算，并存储在变量 `num_new` 中。
> - 然后查看三个变量的数据类型。在输出结果中，分别 `num_int` 是 `整型（integer）` ， `num_flo` 是 `浮点型（float）`。
> - 而新的变量 `num_new` 是 `浮点型（float）`，这是因为 Python 会将较小的数据类型转换为较大的数据类型，以避免数据丢失。

会出现报错的示例：整型数据与字符串类型的数据进行相加。

```python
num_int = 123  
num_str = "456"  
  
print("num_int 数据类型为:", type(num_int))  # <class 'int'>
print("num_str 数据类型为:", type(num_str))  # <class 'str'>
print(num_int + num_str) 
```

程序执行会报以下的异常：

```console
Traceback (most recent call last):
  File "D:\code\python-demo\test.py", line 7, in <module>
    print(num_int + num_str)
          ~~~~~~~~^~~~~~~~~
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

从输出中可以看出，整型和字符串类型运算结果会报错，输出 TypeError。 Python 在这种情况下无法使用隐式转换。但是，Python 为这些类型的情况提供了一种解决方案，称为**显式转换**。

### 显式类型转换

在显式类型转换中，用户将对象的数据类型转换为所需的数据类型。 需要使用 `int()`、`float()`、`str()` 等预定义函数来执行显式类型转换。例如：

```python
num_int = 123
num_str = "456"
  
print("num_int 数据类型为:", type(num_int)) # <class 'int'>
print("类型转换前，num_str 数据类型为:", type(num_str)) # <class 'str'>

num_str = int(num_str)  # 强制转换为整型
print("类型转换后，num_str 数据类型为:", type(num_str)) # <class 'int'>
  
num_sum = num_int + num_str
print("num_int 与 num_str 相加结果为:", num_sum) # 579
print("sum 数据类型为:", type(num_sum)) # <class 'int'>
print("测试第2个参数", int('101', 2)) # 5
```

## List（列表）

### 创建列表

List（列表）是 Python 中最基本的数据结构，用于存储多个数据的容器，列表的数据项不需要具有相同的类型。

创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来。或者使用内置函数 `list()` 创建

```python
list1 = ['red', 'green', 'blue', 'yellow', 'white', 'black']
list2 = list()
```

### 嵌套列表元素

嵌套列表即在列表中包含其它列表

```python
myList = [['a', 'b', 'c'], [1, 2, 3]]
```

### 读取列表

与字符串的索引一样，列表索引从 0 开始，第二个索引是 1，依此类推。通过索引列表可以进行截取、组合等操作。

- 通过 `列表[下标]` 直接获取列表中对应位置的元素(值)，其中正数下标是顺序位置，负数下标是倒序位置。

```python
colorList = ['red', 'green', 'blue', 'yellow', 'white', 'black']
print(colorList[0])
print(colorList[1])
print(colorList[2])

print(colorList[-1])
print(colorList[-2])
print(colorList[-3])
```

- 通过 `列表[开始下标, 结束下标]` 的形式读取列表从“开始下标”到“结束下标”**以前**范围内的元素。如果“结束下标”为空，则读取“开始下标”往后的全部元素。

```python
colorList = ['red', 'green', 'blue', 'yellow', 'white', 'black']
# 读取第二位
print("list[1]: ", colorList[1])  # list[1]:  green
# 从第一位开始（包含）截取到第5位（不包含）
print(colorList[0:4])  # ['red', 'green', 'blue', 'yellow']
# 从第二位开始（包含）截取到倒数第二位（不包含）
print("list[1:-2]: ", colorList[1:-2])  # list[1:-2]:  ['green', 'blue', 'yellow']
```

> [!info] <span style="color: red;">**值得注意，读取的范围包含开始下标的元素，但不包含结束下标的元素**</span>

### 修改列表元素

`列表[下标] = 值` 通过下标，修改指定位置的元素内容

### 插入列表元素

- `列表对象.append(元素)`：在列表尾部追加一个元素
- `列表对象.insert(下标, 元素)`：在列表指定下标位置插入一个元素
- `列表对象.extend(可迭代对象)`：将可迭代对象拆分后，全部追加到列表尾部

### 删除列表元素

- `列表对象.pop(下标)`：删除指定位置元素，同时返回被删掉的元素
- `列表对象.remove(值)`：删除列表中第一次出现的匹配目标值
- `列表对象.clear()`：清空列表，移除列表里的全部元素
- `del 列表[下标]`：直接删除指定下标位置的元素

### 列表内置函数

- `len(list)`：列表元素个数
- `max(list)`：返回列表元素最大值
- `min(list)`：返回列表元素最小值
- `list(seq)`：将元组转换为列表
- `sum(list)`：对列表中所有元素进行求和，将返回计算值。<span style="color: red;">**注意：列表中存在字符串则不能使用 sum 函数**</span>
- `sorted(list, reverse=布尔值)`：对列表排序(默认从小到大)，不会改变原列表
    - 参数 `reverse` 用于控制排序方式。默认为 `False` 正序，`True` 倒序
    - 返回值：经过排序后的新的列表

### 列表对象方法

- `list.append(obj)`：在列表末尾添加新的对象
- `list.count(obj)`：统计某个元素在列表中出现的次数
- `list.extend(seq)`：在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）
- `list.index(obj)`：从列表中找出某个值第一个匹配项的索引位置(下标)。若列表没有该，会报异常
- `list.insert(index, obj)`：将对象插入列表
- `list.pop([index=-1])`：移除列表中的一个元素（默认最后一个元素），并且返回该元素的值
- `list.remove(obj)`：移除列表中某个值的第一个匹配项
- `list.reverse()`：反转列表中元素顺序，会改变原列表
- `list.sort(key=None, reverse=False)`：对原列表进行排序
- `list.clear()`：清空列表
- `list.copy()`：复制列表

> [!note] 所有的列表方法，都只作用于“当前层”的元素（浅层操作），不会自动进入嵌套的“多层”结构中。

```python
# 1.使用 index 方法，查找指定元素在列表中第一次出现的下标，返回值是：元素下标。
fruits = ['香蕉', '苹果', '橙子', '香蕉']
result = fruits.index('香蕉')
print(result)  # 0

# 2.使用 count 方法，统计某个元素在列表中出现的次数，返回值是：元素出现的次数。
nums = [10, 20, 10, 30, 10, 40, [10, 10, 10]]
result = nums.count(10)
print(result)  # 3

# 3.使用 reverse 方法，对列表进行反转（会改变原列表）。
nums = [23, 11, 32, 30, 17]
nums.reverse()  # [17, 30, 32, 11, 23]
print(nums)

# 4.使用 sort 方法，对列表排序（默认从小到大），若想从大到小，可以将 reverse 参数设为True。
# 4.1 若列表中的元素：都是数字，则按照数字的大小顺序进行排序。
nums = [23, 11, 32, 30, 17]
nums.sort(reverse=True)  # [32, 30, 23, 17, 11]
print(nums)

# 4.2 若列表中的元素：既有数字，又有字符串，那就会报错。
# 运行此段代码会触发类型排序报错
nums = [23, 11, 32, 30, 17, 'MooN']
# nums.sort()
# print(nums)

# 4.3 若列表中的元素：都是字符串，则按照字符串的 Unicode 编码大小进行排序
msg_list = ['MooN', 'KirA', 'abc']
msg_list.sort()
print(msg_list)  # ['KirA', 'MooN', 'abc']
```

### 列表比较

列表比较需要引入 `operator` 模块的 `eq` 方法

```python
import operator

a = [1, 2]
b = [2, 3]
c = [2, 3]
print("operator.eq(a,b): ", operator.eq(a, b))  # operator.eq(a,b):  False
print("operator.eq(c,b): ", operator.eq(c, b))  # operator.eq(c,b):  True
```

## tuple（元组）

### 元组的概述

元组（Tuple）是 Python 中**不可变的有序序列数据类型**，与列表类似，但**元组的元素一旦定义就无法修改、添加、删除**。核心特点如下：

1. 使用小括号 `()` 定义，元素之间用逗号分隔。
2. 单元素元组也必须加**逗号**，否则不是元组
3. 有序性：元素支持下标索引、切片等查询操作（和列表一致）
4. 可存储任意数据类型（数字、字符串、列表、元组（嵌套）等），并且**元素允许重复**
5. 元组是**不可变序列**。元组创建后，内部元素不能被修改。其核心价值是保护数据不被修改
6. 正常情况上，元组一旦创建，元素的个数不能增减。因此元组的**长度固定**
7. 不能修改/删除单个元素，但可以连接生成新元组、删除整个元组

元组适用场景：用于存储**不需要修改的固定数据**。如配置信息、常量、函数多返回值等。

### 创建元组

- 创建空元组：`元组名 = ()` 或 `元组名 = tuple()`

```python
# 方式1：直接定义空元组
t1 = ()
# 方式2：使用 tuple() 函数定义空元组
t2 = tuple()

print(type(t1))  # 输出：<class 'tuple'>
print(type(t2))  # 输出：<class 'tuple'>
```

- 创建普通多元素元组：`元组名 = (元素1, 元素2, 元素3, ...)`

```python
# 可以存储不同数据类型
t3 = (1, "Python", 3.14, True)
# 省略小括号（Python支持，推荐保留括号）
t4 = 10, 20, 30

print(t3)
print(t4)
```

- 创建单元素元组：`元组名 = (元素,)`。需要注意核心细节，<span style="color: red;">**⚠️ 必须在元素后加逗号(`,`)，否则括号会被当作数学运算符，不是元组！**</span>

```python
# 单元素元组正确的创建方式
t5 = (10,)
# 错误：不是元组，是整数
t6 = (10)

print(type(t5))  # 输出：<class 'tuple'>
print(type(t6))  # 输出：<class 'int'>
```

### 查询元组

元组支持查询元素，用法与列表完全一致。

- 下标查询单个元素：`元组名[下标]`。下标从 `0` 开始，支持负下标（-1表示最后一个元素）

```python
t = ("苹果", "香蕉", "橙子", "葡萄")

# 正下标查询
print(t[0])  # 输出：苹果
print(t[2])  # 输出：橙子
# 负下标查询
print(t[-1])  # 输出：葡萄
```

- 切片截取范围元素：`元组名[起始下标:结束下标:步长]`
    - 起始下标：包含，默认0
    - 结束下标：不包含，默认元组长度
    - 步长：默认1，可省略

```python
t = (1, 2, 3, 4, 5, 6, 7, 8)

# 截取下标1~4的元素（不包含5）
print(t[1:5])  # 输出：(2, 3, 4, 5)
# 截取从开头到下标3的元素
print(t[:4])  # 输出：(1, 2, 3, 4)
# 截取全部元素
print(t[:])  # 输出：(1, 2, 3, 4, 5, 6, 7, 8)
# 步长为2，隔一个取一个
print(t[::2])  # 输出：(1, 3, 5, 7)
```

### 修改元组

元组中的元素值是**不允许修改、添加、删除**，直接修改会报错！

```python
t = (1, 2, 3)
t[0] = 100  # 报错：元组对象不支持元素赋值
```

可以通过**元组连接组合**生成一个**新的元组**（原元组不变）。语法：`新元组 = 元组1 + 元组2`

```python
t1 = (1, 2, 3)
t2 = (4, 5, 6)
# 连接生成新元组
t3 = t1 + t2

print(t1)  # 原元组不变：(1, 2, 3)
print(t3)  # 新元组：(1, 2, 3, 4, 5, 6)
```

### 删除元组

元组中的**单个元素不允许删除**。

```python
t = (1, 2, 3)
del t[0]  # 报错：不支持删除元组元素
```

可以使用 `del` 语句**删除整个元组**，删除后元组变量会被销毁。语法：`del 元组名`

```python
t = (1, 2, 3)
print(t)  # 输出：(1, 2, 3)

# 删除整个元组
del t
print(t)  # 报错：name 't' is not defined（元组已被销毁）
```

## 序列切片

序列切片的作用是，在不修改原序列的前提下，**截取序列中的一部分元素**，生成新的序列。适用的对象包括：所有**有序不可变/可变序列**。

- 可变序列：列表 `list`
- 不可变序列：元组 `tuple`、字符串 `string`

**核心注意事项**：

1. **切片返回新序列**：原序列不会被修改（列表的切片赋值除外）
2. **适用范围**：仅支持**有序序列**（list/tuple/str），字典、集合不支持
3. **不可变序列**：元组、字符串仅支持**读取切片**，不支持修改/删除
4. **左闭右开**：结束索引对应的元素，**永远不会被包含**在切片结果中

### 切片标准语法

```python
序列[起始索引:结束索引:步长]
```

参数说明：

|   参数   |     含义     |        默认值         |           规则            |
| ------- | ------------ | -------------------- | ------------------------ |
| 起始索引 | 切片开始的位置 | `0`（序列开头）         | 包含该位置元素              |
| 结束索引 | 切片结束的位置 | `len(序列)`（序列末尾） | **不包含**该位置元素        |
| 步长     | 切片的跳跃间隔 | `1`（逐个截取）         | 正数：从左往右；负数：从右往左 |

一些简化写法：

1. 省略步长：`序列[起始索引:结束索引]`
2. 省略起始/结束索引：`序列[:结束索引]` / `序列[起始索引:]`
3. 全省略：`序列[:]`（相当于复制整个序列）

### 切片基础用法

示例测试数据：

```python
# 测试数据
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]   # 列表
my_tuple = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)  # 元组
my_str = "0123456789"                      # 字符串
```

1. `序列[:]` 或 `序列[::]` 截取完整序列（相当于复制序列），生成一个和原序列完全相同的**新序列**。

```python
# 列表切片
print(my_list[:])   # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# 元组切片
print(my_tuple[:])  # (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
# 字符串切片
print(my_str[:])    # 0123456789
```

2. `序列[起始索引:]` 从指定起始索引截取到末尾。从起始位置开始，截取到序列最后一个元素

```python
# 从索引3开始截取
print(my_list[3:])   # [3, 4, 5, 6, 7, 8, 9]
print(my_tuple[3:])  # (3, 4, 5, 6, 7, 8, 9)
print(my_str[3:])    # 3456789
```

3. `序列[:结束索引]` 从开头截取到指定结束索引，值得注意：**不包含**结束索引位置的元素

```python
# 截取到索引5（不含5）
print(my_list[:5])   # [0, 1, 2, 3, 4]
print(my_tuple[:5])  # (0, 1, 2, 3, 4)
print(my_str[:5])    # 01234
```

4. `序列[起始索引:结束索引]` 截取指定区间元素，`[起始, 结束)` 左闭右开区间的元素

```python
# 截取下标2~7（不含7）
print(my_list[2:7])   # [2, 3, 4, 5, 6]
print(my_tuple[2:7])  # (2, 3, 4, 5, 6)
print(my_str[2:7])    # 23456
```

5. `序列[起始索引:结束索引:步长]` 带步长的切片（跳跃截取），按照指定间隔截取元素

```python
# 步长2，隔一个取一个
print(my_list[::2])   # [0, 2, 4, 6, 8]
print(my_tuple[::2])  # (0, 2, 4, 6, 8)
print(my_str[::2])    # 02468

# 区间+步长：下标1~8，步长2
print(my_list[1:8:2]) # [1, 3, 5, 7]
```

6. 负索引切片（从右往左定位）。规则：`-1` 表示最后一个元素，`-2` 表示倒数第二个，以此类推

```python
# 截取最后3个元素
print(my_list[-3:])   # [7, 8, 9]
print(my_tuple[-3:])  # (7, 8, 9)
print(my_str[-3:])    # 789

# 截取倒数第5个 ~ 倒数第2个
print(my_list[-5:-1]) # [5, 6, 7, 8]
```

7. 负步长切片（反转序列）。规则：步长为负数时，**从右往左截取**，最常用场景：反转序列

```python
# 反转整个序列
print(my_list[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
print(my_tuple[::-1])  # (9, 8, 7, 6, 5, 4, 3, 2, 1, 0)
print(my_str[::-1])    # 9876543210

# 反转+区间截取
print(my_list[7:1:-1]) # [7, 6, 5, 4, 3, 2]
```

### 切片高级用法

1. 列表是可变序列，可利用切片批量修改列表元素（**仅列表支持**）。

```python
lst = [1, 2, 3, 4]
lst[1:3] = [99, 88]
print(lst)  # [1, 99, 88, 4]
```

2. 利用切片删除列表部分元素（仅列表支持）

```python
lst = [0,1,2,3,4]
lst[1:3] = []
print(lst) # [0, 3, 4]
```

3. 越界索引不报错。切片索引超出序列范围时，**不会抛出异常**，自动截取有效范围：

```python
print(my_list[0:100])  # [0,1,2,3,4,5,6,7,8,9]
print(my_str[-100:])   # 0123456789
```

## 序列的其他操作

### 概述

Python 的**有序序列**支持 `+`（相加）和 `*`（相乘）运算。仅支持以下类型：

- 列表 `list`
- 元组 `tuple`
- 字符串 `str`

相加、相乘操作的核心特性：

1. 相加、相乘操作**不会修改原序列**，始终返回**新的序列**
2. 操作前后数据类型保持一致（`列表 + 列表 = 新列表`）

### 序列相加操作（拼接）

序列相加：使用 `+` 运算符，将**两个同类型的有序序列拼接**，生成一个全新的序列。其核心规则如下：

1. **必须是同类型序列**才能相加（列表+列表、元组+元组、字符串+字符串）
2. 拼接顺序：**前序列 + 后序列**
3. 无参数限制，可连续拼接多个序列
4. 原序列保持不变，返回新序列

标准语法：

```python
新序列 = 序列1 + 序列2
```

各种类型示例：

```python
# 1. 列表相加（拼接列表）
list1 = [1, 2, 3]
list2 = [4, 5, 6]
new_list = list1 + list2
print("列表相加结果：", new_list)  # [1, 2, 3, 4, 5, 6]
print("原列表是否改变：", list1)  # 原序列不变 [1, 2, 3]

# 2. 元组相加（拼接元组）
tuple1 = (10, 20)
tuple2 = (30, 40)
new_tuple = tuple1 + tuple2
print("元组相加结果：", new_tuple)  # (10, 20, 30, 40)

# 3. 字符串相加（拼接字符串）
str1 = "Hello "
str2 = "Python"
new_str = str1 + str2
print("字符串相加结果：", new_str)  # Hello Python

# 4. 连续多个序列相加
print([1, 2] + [3, 4] + [5, 6])  # 列表连续拼接 [1, 2, 3, 4, 5, 6]
print("a" + "b" + "c")  # 字符串连续拼接 abc
```

错误示例（类型不同禁止相加）：

```python
# 报错：列表和元组类型不同，无法相加  
[1,2] + (3,4)  
# 报错：列表和字符串类型不同，无法相加  
[1,2] + "abc"
```

### 序列相乘操作（重复）

序列相乘：使用 `*` 运算符，将序列与**整数**进行乘法运算，**重复拼接指定次数**，生成新序列。其核心规则如下：

1. 序列只能与 **整数（正整数/0/负整数）** 相乘
2. 正整数：重复对应次数；**0/负数：返回空序列**
3. 支持正向书写：`序列 * 数字`、反向书写：`数字 * 序列`
4. 原序列不变，返回新序列

标准语法：

```python
新序列 = 序列 * 重复次数
新序列 = 重复次数 * 序列
```

各种类型示例：

```python
# 1. 列表相乘（重复列表）
list1 = [1, 2]
print("列表*3：", list1 * 3)  # [1, 2, 1, 2, 1, 2]
print("列表*0：", list1 * 0)  # [] 空列表
print("列表*-2：", list1 * -2)  # [] 空列表

# 2. 元组相乘（重复元组）
tuple1 = (10,)
print("元组*4：", tuple1 * 4)  # (10, 10, 10, 10)

# 3. 字符串相乘（重复字符串）
str1 = "Hi~"
print("字符串*5：", str1 * 5)  # Hi~Hi~Hi~Hi~Hi~

# 4. 反向乘法（效果一致）
print(3 * [1, 2])  # [1, 2, 1, 2, 1, 2]
```

实用场景：初始化序列

```python
# 快速初始化固定长度的空列表
empty_list = [0] * 5
print(empty_list)  # [0, 0, 0, 0, 0]

# 快速初始化固定长度的空字符串
empty_str = " " * 4
print(empty_str)  # "    "
```

#### 可变元素的乘法陷阱

列表中包含**可变对象**（如子列表）时，乘法会复用同一个对象引用：

```python
# 危险写法：所有子列表指向同一个内存地址
list2 = [[0]] * 3
list2[0][0] = 100
print(list2)  # [[100], [100], [100]] （全部被修改）

# 安全写法：生成独立的子列表
list3 = [[0] for _ in range(3)]
list3[0][0] = 100
print(list3)  # [[100], [0], [0]]
```

### 混合运算：相加 + 相乘

运算优先级：**乘法优先级 > 加法优先级**（和数学运算一致）

```python
# 先乘法，后加法
result1 = [1] * 2 + [2] * 3
print(result1)  # [1, 1, 2, 2, 2]

# 字符串混合运算
result2 = "A" * 3 + "B" * 2
print(result2)  # AAABB
```

### 核心知识点总结
#### 序列拼接与重复汇总表

|   操作   | 运算符 | 作用               | 类型要求       | 返回值 |
|:--------:|:------:| ------------------ | -------------- |:------:|
| 序列拼接 |  `+`   | 拼接两个同类型序列 | 同类型有序序列 | 新序列 |
| 序列重复 |  `*`   | 重复序列指定次数   | 序列 + 整数    | 新序列 |

#### 禁止操作汇总（必会报错）

1. **不同类型序列相加**：列表+元组、列表+字符串
2. **序列与非数字相乘**：`序列*字符串`、`序列*浮点数`
3. **无序容器操作**：字典、集合不支持 `+` 和 `*`

```python
# 全部报错
[1,2] + (3,4)
"abc" * 2.5
{1,2} + {3,4}
{"a":1} * 2
```

## Set（集合）

### 核心概念概述

集合是 Python 中**无序、元素唯一、元素必须可哈希**的容器数据类型。分为以下两种：

- `set`（可变集合）：创建后**可以增、删、修改元素**，最常用
- `frozenset`（冻结不可变集合）：创建后**无法改动**，不可增删元素，可哈希，可作为字典 key、普通集合的元素

集合底层基于哈希表实现，**成员判断效率极高**，天生自带自动去重特性。

### 语法格式

#### 创建普通可变集合 set

使用大括号 `{}` 包裹或者内置函数 `set()` 参数传入，集合中的数据序列，即可创建普通的可变集合。

```python
# 直接大括号创建
s = {1, 2, "abc", (3,4)}

# 可迭代对象转集合
s2 = set([1,2,2,3])
```

#### 创建空集合（必记易错）

只能使用内置函数 `set()` 创建空集合，因为使用空的 `{}` 符号，Python 会认为是创建**空的字典容器**。

```python
# ❌ 错误！{} 默认创建空字典，不是集合
wrong = {}
print(type(wrong)) # <class 'dict'>

# ✅ 正确：创建空集合
empty_set = set()
print(type(empty_set)) # <class 'set'>
```

#### 创建冻结不可变集合 frozenset

使用内置函数 `frozenset()` 创建不可变集合。参数传入待填充到集合中的序列对象。

```python
fs = frozenset([1,2,3,3])
print(fs) # frozenset({1,2,3})
```

> [!info] 因为是不可变集合，创建后不能再添加元素，因此极少会创建**空的**不可变集合

### 集合的核心规则

#### 核心通用规则

1. 无序性：元素没有固定下标，每次输出顺序可能不一致
2. 唯一性：自动去除重复元素，容器内元素绝对不重复
3. 元素限制：集合内部元素**必须是不可变、可哈希类型**
4. 不支持下标索引、切片操作
5. 可变集合 `set` 支持原地修改；`frozenset` 只读不可变

#### 高频易错细节

- **空集合定义陷阱**：仅写 `{}` 永远是空字典，空集合只能用 `set()` 创建
- **布尔值与整数的去重冲突（高频大坑）**：
    - Python 中 `True == 1`、`False == 0` 结果为 `True`
    - 集合判定相等就会自动去重，只会保留先存入的元素

```python
s = {1, True, 0, False}
print(s)  # 输出 {0, 1}
```

- **元素类型存入限制**：
    - ✅ 可存入：`int` / `str` / `float` / `tuple` / `frozenset` 等不可变类型
    - ❌ 禁止存入：`list` / `dict` /普通 `set` 等可变、不可哈希类型，直接触发报错

```python
# 报错：unhashable type: 'list'
s = {[1,2]}
```

- **无序不可索引**：无法通过下标取值 `s[0]`，也无法切片
- **frozenset 特殊限制**：无任何增删改元素的方法，只读永久固定

### 集合常用内置全局函数

- `len(set)`：统计集合内元素总个数
    - 参数：传入集合对象
    - 返回值：返回整数类型的元素数量
  
```python
s = {1, 2, 3, 3}
print(len(s))  # 3
```

- `max(set)`：返回集合中最大的元素
  - 参数：传入元素可比较的集合
  - 返回值：集合内最大值元素

```python
s = {5, 1, 9, 3}
print(max(s))  # 9
```

- `min(set)`：返回集合中最小的元素
    - 参数：传入元素可比较的集合
    - 返回值：集合内最小值元素

```python
# 数字集合
s1 = {5, 1, 9, 3}
print(min(s1))  # 输出：1

# 字符串集合（按Unicode编码比较）
s2 = {"banana", "apple", "orange"}
print(min(s2))  # 输出：apple
```

- `set(iterable)`：将可迭代对象转换为可变集合，自动去重
    - 参数`iterable`：列表、元组、字符串等可迭代容器
    - 返回值：返回新的 set 集合

```python
# 列表转集合（去重）
list1 = [1, 2, 2, 3, 3, 3]
s1 = set(list1)
print(s1)  # 输出：{1, 2, 3}

# 字符串转集合
str1 = "hello"
s2 = set(str1)
print(s2)  # 输出：{'e', 'l', 'h', 'o'}

# 空集合创建
empty_set = set()
print(empty_set, type(empty_set))  # 输出：set() <class 'set'>
```

- `frozenset(iterable)`：将可迭代对象转换为冻结不可变集合
    - 参数`iterable`：任意可迭代对象
    - 返回值：返回新的 `frozenset` 冻结集合

```python
# 列表转冻结集合
fs1 = frozenset([1, 2, 2, 3])
print(fs1)  # 输出：frozenset({1, 2, 3})

# 字符串转冻结集合
fs2 = frozenset("python")
print(fs2)  # 输出：frozenset({'h', 't', 'o', 'p', 'y', 'n'})

# 空冻结集合
empty_fs = frozenset()
print(empty_fs)  # 输出：frozenset()
```

### 集合常用实例方法

#### 新增元素

- `set.add(element)`：向集合中**添加单个元素**，原地修改，无返回值；元素已存在则无任何变化
    - 参数`element`：需要添加的任意可哈希元素
    - 返回值：None，原地修改原集合

```python
s = {1,2,3}
s.add(4)
s.add(1) # 重复元素，无变化
print(s) # {1,2,3,4}
```

- `set.update(iterable)`：批量将可迭代对象内的所有元素拆解并入集合，原地修改
    - 参数：可传入1个或多个可迭代对象
    - 返回值：None

```python
s = {1, 2}
s.update([3, 4], (5, 6))
print(s)  # {1,2,3,4,5,6}
```

#### 删除元素
- `set.remove(element)`：删除指定元素；**元素不存在直接报错KeyError**
    - 参数 `element`：需要删除的目标元素
    - 返回值：None

```python
s = {1,2,3}
s.remove(2)
print(s) # {1,3}
```

- `set.discard(element)`：安全删除指定元素；元素不存在**不会报错**，静默跳过
    - 参数 `element`：目标删除元素

```python
s = {1, 2, 3, 4}

# 删除存在的元素
s.discard(2)
print(s)  # 输出：{{1, 3, 4}

# 删除不存在的元素（静默执行，无报错）
s.discard(99)
print(s)  # 输出：{1, 3, 4}
```

- `set.pop()`：随机删除并返回集合中的一个元素（无序特性，弹出位置不确定）；空集合调用直接报错
    - 返回值：被随机删除的元素

```python
s = {10,20,30}
print(s.pop())
```

- `set.clear()`：清空集合内所有元素，变为空集合

```python
s = {10, 20, 30, 40}
print(s)  # 输出：{40, 10, 20, 30}

# 清空集合
s.clear()
print(s)  # 输出：set()
```

#### 查询 & 其他常用方法

- `set.copy()`：浅拷贝当前集合，返回全新的相同集合
  - 返回值：原集合的浅拷贝副本

```python
# 原集合
s1 = {1, 2, 3}

# 拷贝生成新集合
s2 = s1.copy()
print(s2)  # 输出：{1, 2, 3}

# 修改新集合，原集合不受影响
s2.add(4)
print("原集合：", s1)  # 输出：{1, 2, 3}
print("拷贝后的集合：", s2)  # 输出：{1, 2, 3, 4}
```

### 集合的数学运算

#### 基础运算（运算符 & 对应方法）

| 运算类型 | 运算符 | 对应方法                 | 作用                       |
| -------- | ------ | ------------------------ | --------------------- |
| 交集     | `&`    | `intersection()`         | 保留两边共同存在的元素     |
| 并集     | \|     | `union()`                | 合并两边所有不重复元素     |
| 差集     | `-`    | `difference()`           | 仅保留当前集合独有元素     |
| 对称差集 | `^`    | `symmetric_difference()` | 保留两边互不相同的所有元素 |

```python
s1 = {1, 2, 3, 4}
s2 = {3, 4, 5, 6}

# 交集
print(s1 & s2)  # {3, 4}
print(s1.intersection(s2))  # {3, 4}

# 并集
print(s1 | s2)  # {1, 2, 3, 4, 5, 6}

# 差集
print(s1 - s2)  # {1, 2}

# 对称差集
print(s1 ^ s2)  # {1, 2, 5, 6}
```

#### 子集 / 超集相关方法

- `set.issubset(other)`：判断当前集合是否是指定集合的**子集**，即当前集合的**所有元素**都包含在指定集合中；支持传入任意可迭代对象（列表、元组等），会自动转换为集合进行判断
    - 参数 `other`：用于对比的集合或可迭代对象
    - 返回值：布尔值（`True` / `False`），是子集返回 `True`，否则返回 `False`
    - 等价运算符：`<=`

```python
# 基础示例
s1 = {1, 2}
s2 = {1, 2, 3}
s3 = {4, 5}

# 判断s1是否是s2的子集
print(s1.issubset(s2))  # True
# 判断s3是否是s2的子集
print(s3.issubset(s2))  # False
# 传入列表（可迭代对象）
print(s1.issubset([1, 2, 3]))  # True
# 运算符写法
print(s1 <= s2)  # True
```

- `set.issuperset(other)`：判断当前集合是否是指定集合的**超集**，即指定集合的**所有元素**都包含在当前集合中；支持传入任意可迭代对象，自动转换为集合
    - 参数`other`：用于对比的集合或可迭代对象
    - 返回值：布尔值（`True`/`False`），是超集返回`True`，否则返回`False`
    - 等价运算符：`>=`

```python
# 基础示例
s1 = {1, 2, 3}
s2 = {1, 2}
s3 = {4, 5}

# 判断s1是否是s2的超集
print(s1.issuperset(s2)) # True
# 判断s1是否是s3的超集
print(s1.issuperset(s3)) # False
# 传入元组（可迭代对象）
print(s1.issuperset((1,2))) # True
# 运算符写法
print(s1 >= s2)         # True
```

- `set.isdisjoint(other)`：判断当前集合与指定集合**是否没有任何交集**（两个集合完全无共同元素）；无交集返回`True`，有交集返回`False`；支持传入任意可迭代对象
  - 参数`other`：用于对比的集合或可迭代对象
  - 返回值：布尔值（`True`/`False`）

```python
# 基础示例
s1 = {1, 2, 3}
s2 = {1, 2}
s3 = {4, 5}

# 判断s1是否是s2的超集
print(s1.issuperset(s2))  # True
# 判断s1是否是s3的超集
print(s1.issuperset(s3))  # False
# 传入元组（可迭代对象）
print(s1.issuperset((1, 2)))  # True
# 运算符写法
print(s1 >= s2)  # True
```

### 集合的遍历

1. 普通 for 循环遍历

```python
s = {"苹果", "香蕉", "橙子"}
for item in s:
    print(item)
```

2. 带序号遍历。<span style="color: red;">**注意此方式的生成的序号非索引，只是遍历时的顺序编号**</span>

```python
s = {10, 30, 20, 30}
for index, item in enumerate(s):
    print(index, item)

'''
输出结果：
0 10
1 20
2 30
'''
```

### 集合高频使用场景

- **快速去重**

```python
lst = [1, 2, 2, 3, 3, 3]
new_lst = list(set(lst))  # 一行完成去重
```

- **超快速成员是否存在的判断**（性能远高于列表）

```python
s = {1, 2, 3, 4, 5}
print(3 in s)  # True 瞬间完成查询
```

- **多组数据对比筛选**：快速找共同项、独有项、差异项
- **固定常量只读集合**：使用 `frozenset` 保护数据不被意外修改
- **作为字典的不可变键**：普通 set 不能做 key，frozenset 可以

### 集合知识点总结

1. `set` 可变，`frozenset` 不可变
2. 天生去重、无序、元素必须可哈希
3. 大避坑：`{}` 不是空集合、1 和 True 会互斥去重、不能存可变元素
4. 方法修改原集合，运算默认返回新集合
5. 集合数学运算，极大简化数据对比逻辑
6. 去重、成员判断、数据筛选是集合最强的核心场景

## Dict（字典）

### 字典概述

字典（dict）是 Python 中核心的可变、无序（Python 3.7+ 为插入有序）键值对（key-value）数据结构，用于存储具有映射关系的数据集合。

- **键（key）**：字典的索引，具有唯一性（重复赋值会覆盖）、不可哈希性（仅不可变类型可作为 key，如字符串、数字、元组（元素不可变），列表、字典等可变类型不可作为 key）。
- **值（value）**：与键关联的数据，无唯一性限制，可是任意数据类型（包括可变类型如列表、字典）。
- **dict_keys 类型**：`keys()` 方法返回的视图对象（view object），动态反映字典键的变化，不支持索引，但可迭代、转换为列表（`list(dict.keys())`）。
- **dict_values 类型**：`values()` 方法返回的视图对象，动态反映字典值的变化，不支持索引、不可哈希（无法作为字典 key），可迭代、转换为列表。
- **dict_items 类型**：`items()` 方法返回的视图对象，每个元素为 `(key, value)` 元组，动态反映字典键值对的变化，不支持索引，可迭代、转换为列表。
- **视图对象特性**：视图对象不存储数据，仅引用字典的原数据，字典修改后视图对象会同步更新，相比直接生成列表更节省内存。

核心用法（规则）

1. **键的唯一性**：同一字典中键不可重复，重复定义后序键值对会覆盖前序。
2. **键的不可变性**：仅不可哈希（不可变）类型可作为键，保证键的哈希值稳定。
3. **值的任意性**：值无类型、唯一性限制，可存储任意 Python 对象。
4. **动态可修改**：支持增、删、改、查操作，字典长度可动态变化。
5. **插入有序性（Python 3.7+）**：字典会保留键值对的插入顺序，遍历顺序与插入顺序一致（Python 3.6 为实现细节，3.7 正式列为规范）。
6. **内存高效性**：字典基于哈希表实现，键的查找、插入、删除时间复杂度平均为 `O(1)`，远优于列表的 `O(n)`。

### 创建语法

字面量方式（推荐）创建：

```python
empty_dict = {}  # 空的字典
person = {"name": "Moon", "age": 25, "hobbies": ["reading", "coding"]}
```

`dict()` 构造器创建：

```python
empty_dict = dict()
person = dict(name="MooN", age=25)
student = dict([("name", "Zero"), ("age", 23)])
```

字典推导式创建：

```python
num_square = {x: x * x for x in range(1, 4)}
print(num_square)  # {1: 1, 2: 4, 3: 9}
```

fromkeys() 方法创建：

```python
default_dict = dict.fromkeys(["a", "b", "c"], 0)
print(default_dict)  # {'a': 0, 'b': 0, 'c': 0}
```

### 基础操作语法

#### 获取值

根据 key 获取对应的 value

- `dict[key]`：当 key 不存在则抛 KeyError
- `dict.get(key, default)`：当 key 不存在则返回 default 值

#### 修改值

`dict[key] = new_value`：当 key 存在则修改，不存在则新增。

#### 删除键值对

- `del dict[key]`：直接删除 key 的键值对
- `dict.pop(key)`：根据 key 删除键值对，并返回

### 字典的使用注意事项

#### 键相关注意事项

- **禁止使用可变类型作为 key**：列表、字典、集合等可变类型不可哈希，作为 key 会抛 `TypeError: unhashable type: 'list'`。

```python
# 错误示例
# bad_dict = {[1,2]: "test"}  # 抛 TypeError
# 正确示例
good_dict = {(1,2): "test"}  # 元组（元素不可变）可作为 key
```

- **重复键会覆盖**：定义字典时若出现重复 key，后序值会覆盖前序值，无任何提示。
 
```python
dup_dict = {"name": "Bob", "name": "Alice"}
print(dup_dict)  # 输出: {"name": "Alice"}
```

- **key 为数值类型时，等值不同类型会视为不同 key**：如 `1`（int）和 `1.0`（float）哈希值不同，是两个独立 key。
 
```python
num_dict = {1: "int", 1.0: "float"}
print(num_dict)  # 输出: {1: 'int', 1.0: 'float'}
```

#### 操作字典注意事项

- 使用 `dict[key]` **直接访问不存在的 key 会报错抛出 `KeyError` **，推荐使用 `get()` 方法避免报错。

```python
person = {"name": "Alice"}
# print(person["age"])  # 抛 KeyError
print(person.get("age", 0))  # 输出: 0（默认值）
```

- **遍历字典时修改字典长度会报错**：遍历字典（如 `for k in dict`）时直接删除/新增键值对，会触发 `RuntimeError: dictionary changed size during iteration`。

```python
# 错误示例
# person = {"name": "Alice", "age": 25, "gender": "female"}
# for k in person:
#     if k == "age":
#         del person[k]  # 抛 RuntimeError

# 正确示例：遍历字典的键列表（固定长度）
person = {"name": "Alice", "age": 25, "gender": "female"}
for k in list(person.keys()):
    if k == "age":
        del person[k]
print(person)  # 输出: {'name': 'Alice', 'gender': 'female'}
```

- **fromkeys() 方法的浅拷贝陷阱**：`dict.fromkeys(keys, value)` 中若 value 为可变类型（如列表），所有 key 会共享同一个 value 引用，修改一个会影响全部。

```python
# 陷阱示例
bad_dict = dict.fromkeys(["a", "b"], [])
bad_dict["a"].append(1)
print(bad_dict)  # 输出: {'a': [1], 'b': [1]}
# 正确示例
good_dict = {k: [] for k in ["a", "b"]}
good_dict["a"].append(1)
print(good_dict)  # 输出: {'a': [1], 'b': []}
```

- **字典拷贝的深浅问题**：`copy()` 方法为浅拷贝，仅复制字典的表层结构，嵌套字典/列表仍为引用传递；需深拷贝需使用 `copy.deepcopy()`。

```python
import copy
original = {"name": "Alice", "hobbies": ["reading"]}
# 浅拷贝
shallow = original.copy()
shallow["hobbies"].append("coding")
print(original["hobbies"])  # 输出: ['reading', 'coding']（原字典被修改）
# 深拷贝
deep = copy.deepcopy(original)
deep["hobbies"].append("running")
print(original["hobbies"])  # 输出: ['reading', 'coding']（原字典无变化）
```

- **视图对象不可哈希**：`dict.keys()`、`dict.values()`、`dict.items()` 返回的视图对象不可作为字典 key，需转换为元组/列表后使用。

```python
# 错误示例
# view_dict = {person.keys(): "keys"}  # 抛 TypeError
# 正确示例
view_dict = {tuple(person.keys()): "keys"}
```

#### 性能相关注意事项

1. **字典的哈希冲突**：极端情况下哈希冲突会导致查找效率降至 `O(n)`，需避免使用哈希值易冲突的 key（如大量连续整数）。
2. **大字典的遍历效率**：遍历大字典时，优先使用视图对象（`keys()` / `items()`）而非转换为列表，减少内存占用。

### 字典常用函数与方法

#### 字典内置函数

- `len(dict)`：返回字典中键值对的数量（长度）。
    - 参数 `dict`：目标字典对象。
    - 返回值：整数，字典的键值对个数。

```python
person = {"name": "Alice", "age": 25}
print(len(person))  # 输出: 2
```

- `hash(key)`：判断一个对象是否可作为字典 key（返回哈希值则可，抛 TypeError 则不可）。
    - 参数 `key`：待判断的对象。
    - 返回值：整数（对象的哈希值），若对象不可哈希则抛 TypeError。

```python
print(hash("name"))  # 输出: （不同环境值不同，如 -9223372036854775791）
# print(hash([1,2]))  # 抛 TypeError: unhashable type: 'list'
```

- `sorted(dict, key=None, reverse=False)`：对字典的键进行排序，返回排序后的键列表；结合 `items()` 可对键/值排序。
    - 参数`dict`：目标字典（实际遍历其键）；
    - 参数 `key`：排序依据的函数（如 `lambda k: dict[k]` 按值排序）；
    - 参数`reverse`：布尔值，是否降序（默认 False 升序）。
    - 返回值：列表，排序后的键/键值对元组。

```python
person = {"age": 25, "name": "Alice", "score": 90}
# 按键升序
print(sorted(person))  # 输出: ['age', 'name', 'score']
# 按值降序
print(sorted(person.items(), key=lambda x: x[1], reverse=True))  # 输出: [('score', 90), ('age', 25), ('name', 'Alice')]
```

- `type(dict)`：判断对象是否为字典类型。
    - 参数 `dict`：待判断对象。
    - 返回值：类型对象（`dict` 则为 `<class 'dict'>`）。

```python
print(type({}))  # 输出: <class 'dict'>
```

#### 字典内置方法

- `dict.clear()`：清空字典中所有键值对，使字典变为空字典（原地修改，无返回值）。

```python
person = {"name": "Alice"}
person.clear()
print(person)  # 输出: {}
```

- `dict.copy()`：创建字典的浅拷贝（表层键值对复制，嵌套对象为引用）。
    - 返回值：新的字典对象，与原字典表层数据独立，嵌套数据共享引用。

```python
original = {"a": 1, "b": [2,3]}
new = original.copy()
new["a"] = 10
new["b"].append(4)
print(original)  # 输出: {'a': 1, 'b': [2, 3, 4]}（嵌套列表被修改）
```

- `dict.fromkeys(iterable, value=None)`：创建新字典，以可迭代对象中的元素为键，所有键默认关联同一个值（默认 None）。
    - 参数 `iterable`：可迭代对象（如列表、元组、字符串），元素为字典的键；
    - 参数 `value`：可选，所有键对应的默认值（默认 None）。
    - 返回值：新字典对象。

```python
keys = ["a", "b", "c"]
new_dict = dict.fromkeys(keys, 0)
print(new_dict)  # 输出: {'a': 0, 'b': 0, 'c': 0}
```

- `dict.get(key, default=None)`：获取指定键对应的值，若键不存在则返回默认值（避免 KeyError）。
    - 参数 `key`：要查找的键；
    - 参数 `default`：可选，键不存在时返回的默认值（默认 None）。
    - 返回值：键对应的值（存在）或默认值（不存在）。

```python
person = {"name": "Alice"}
print(person.get("age"))  # 输出: None
print(person.get("age", 0))  # 输出: 0
```

- `dict.items()`：返回字典的键值对视图对象（dict_items），动态反映字典变化。
    - 返回值：dict_items 对象，每个元素为 `(key, value)` 元组。

```python
person = {"name": "Alice", "age": 25}
items = person.items()
print(items)  # 输出: dict_items([('name', 'Alice'), ('age', 25)])
print(list(items))  # 转换为列表: [('name', 'Alice'), ('age', 25)]
```

- `dict.keys()`：返回字典的键视图对象（dict_keys），动态反映字典键的变化。
    - 返回值：dict_keys 对象，包含字典所有键。

```python
person = {"name": "Alice", "age": 25}
keys = person.keys()
print(keys)  # 输出: dict_keys(['name', 'age'])
print(list(keys))  # 转换为列表: ['name', 'age']
```

- `dict.values()`：返回字典的值视图对象（dict_values），动态反映字典值的变化。
    - 返回值：dict_values 对象，包含字典所有值。

```python
person = {"name": "Alice", "age": 25}
values = person.values()
print(values)  # 输出: dict_values(['Alice', 25])
print(list(values))  # 转换为列表: ['Alice', 25]
```

- `dict.pop(key, default=None)`：删除指定键对应的键值对，并返回该键的值；若键不存在，未指定 default 则抛 KeyError，指定则返回 default。
    - 参数 `key`：要删除的键；
    - 参数 `default`：可选，键不存在时返回的默认值。
    - 返回值：被删除键对应的值（存在）或默认值（不存在）。

```python
person = {"name": "Alice", "age": 25}
age = person.pop("age")
print(age)  # 输出: 25
# print(person.pop("gender"))  # 抛 KeyError
print(person.pop("gender", "unknown"))  # 输出: unknown
```

- `dict.popitem()`：删除并返回字典中最后插入的键值对（Python 3.7+）；若字典为空则抛 KeyError（无参数，无法指定默认值）。
    - 返回值：`(key, value)` 元组，被删除的键值对。

```python
person = {"name": "Alice", "age": 25}
last_item = person.popitem()
print(last_item)  # 输出: ('age', 25)
print(person)  # 输出: {'name': 'Alice'}
```

- `dict.setdefault(key, default=None)`：获取指定键的值，若键不存在则新增该键并赋值为 default，返回该值（存在则返回原值，不存在则返回 default）。
    - 参数 `key`：要查找/新增的键；
    - 参数 `default`：可选，键不存在时的赋值（默认 None）。
    - 返回值：键对应的值（存在）或 default（不存在）。

```python
person = {"name": "Alice"}
age = person.setdefault("age", 25)
print(age)  # 输出: 25
print(person)  # 输出: {'name': 'Alice', 'age': 25}
gender = person.setdefault("gender", "female")
print(gender)  # 输出: female
print(person)  # 输出: {'name': 'Alice', 'age': 25, 'gender': 'female'}
```

- `dict.update(other)`：将另一个字典/可迭代键值对的内容更新到当前字典（原地修改），已存在的键会被覆盖，不存在的键会新增。
    - 参数 `other`：字典对象、键值对元组列表（如 `[(k1, v1), (k2, v2)]`）或关键字参数（如 `name="Bob"`）。
    - 返回值：None。

```python
person = {"name": "Alice"}
# 字典更新
person.update({"age": 25, "gender": "female"})
print(person)  # 输出: {'name': 'Alice', 'age': 25, 'gender': 'female'}
# 键值对列表更新
person.update([("score", 90), ("age", 26)])
print(person)  # 输出: {'name': 'Alice', 'age': 26, 'gender': 'female', 'score': 90}
# 关键字参数更新
person.update(name="Bob")
print(person)  # 输出: {'name': 'Bob', 'age': 26, 'gender': 'female', 'score': 90}
```

### 字典的遍历方式

#### 遍历字典的键（最常用）

```python
person = {"name": "Alice", "age": 25, "gender": "female"}
# 方式1：直接遍历字典（默认遍历键）
for k in person:
    print(k)  # 输出: name, age, gender（分行）

# 方式2：通过 keys() 遍历（语义更清晰）
for k in person.keys():
    print(k)  # 输出同上
```

#### 遍历字典的值

```python
person = {"name": "Alice", "age": 25, "gender": "female"}
# 通过 values() 遍历
for v in person.values():
    print(v)  # 输出: Alice, 25, female（分行）
```

#### 遍历字典的键值对

```python
person = {"name": "Alice", "age": 25, "gender": "female"}
# 方式1：通过 items() 遍历（推荐）
for k, v in person.items():
    print(f"{k}: {v}")
# 输出：
# name: Alice
# age: 25
# gender: female

# 方式2：通过键遍历并取值（效率低，不推荐）
for k in person:
    print(f"{k}: {person[k]}")  # 输出同上
```

#### 遍历并修改字典（安全方式）

```python
# 需求：将所有值为数字的键值对，值加 1
person = {"age": 25, "score": 90, "name": "Alice"}
# 遍历键的列表（固定长度），避免遍历中修改字典长度报错
for k in list(person.keys()):
    if isinstance(person[k], (int, float)):
        person[k] += 1
print(person)  # 输出: {'age': 26, 'score': 91, 'name': 'Alice'}
```

#### 按指定顺序遍历

```python
person = {"age": 25, "name": "Alice", "score": 90}
# 按键升序遍历
for k in sorted(person):
    print(f"{k}: {person[k]}")
# 输出：
# age: 25
# name: Alice
# score: 90

# 按值降序遍历
for k, v in sorted(person.items(), key=lambda x: x[1], reverse=True):
    print(f"{k}: {v}")
# 输出：
# score: 90
# age: 25
# name: Alice
```

## 类型转换

### 类型转换函数汇总表

|                    函数                     |                    描述                     |
| ------------------------------------------ | ------------------------------------------- |
| `int(x [, base])`                          | 将 x 转换为一个整数                              |
| `float(x)`                                 | 将 x 转换到一个浮点数                            |
| `complex(real [, imag])`                   | 创建一个复数                                  |
| `str(x)`                                   | 将对象 x 转换为字符串                          |
| `repr(x)`                                  | 将对象 x 转换为表达式字符串                     |
| `eval(str)`                                | 用来计算在字符串中的有效 Python 表达式,并返回一个对象 |
| `tuple(s)`                                 | 将序列 s 转换为一个元组                         |
| `list(s)`                                  | 将序列 s 转换为一个列表                         |
| `set(s)`                                   | 转换为可变集合                                |
| `dict(d)`                                  | 创建一个字典。d 必须是一个 (key, value)元组序列。 |
| `frozenset(s)`                             | 转换为不可变集合                               |
| `chr(x)`                                   | 将一个整数转换为一个字符                        |
| `ord(x)`                                   | 将一个字符转换为它的整数值                       |
| `hex(x)`                                   | 将一个整数转换为一个十六进制字符串                |
| `oct(x)`                                   | 将一个整数转换为一个八进制字符串                  |
| `bool(x)`                                  | 将对象 x 转换为布尔值（True 或 False）          |
| `bytes(source[._encoding[.errors]])`       | 将对象转换为不可变字节序列                       |
| `bytearray([source[._encoding[.errors]]])` | 将对象转换为可变字节数组                        |
| `memoryview(obj)`                          | 返回给定参数的内存视图对象（不复制数据）            |
| `bin(x)`                                   | 将一个整数转换为一个二进制字符串                  |
| `ascii(x)`                                 | 返回对象的 ASCII 表示，非 ASCII 字符会被转义      |

```python
print("整数 12.5 转 bool:", bool(12.5))  # True
print("整数 2 转 bool:", bool(2))  # True
print("整数 0 转 bool:", bool(0))  # False
print("整数 -3 转 bool:", bool(-3))  # True

print("字符类型 '0' 转 bool:", bool('0'))  # True
print("字符类型 'abc' 转 bool:", bool('abc'))  # True
print("空字符 转 bool:", bool(''))  # False
```

### List 列表转换

`list(iterable)`：将可迭代对象**拆解转换**为有序可变列表；不传参数返回空列表。转换字典时默认仅提取字典的 `key`；**传入整数、布尔等非可迭代类型，会直接抛出 `TypeError` **。

- 参数`iterable`：可选参数，接收任意可迭代对象（字符串、元组、集合、range、字典等），省略则创建空列表
- 返回值：返回一个全新、独立的`list`类型有序可变容器

```python
# 各类容器转列表示例
t = (1, 2, 3)
s = {4, 5, 6}
d = {"name": "张三", "age": 18}

print(list())                # 创建空列表：[]
print(list(t))               # 元组转列表：[1, 2, 3]
print(list("hello"))         # 字符串拆转列表：['h', 'e', 'l', 'l', 'o']
print(list(s))               # 集合转列表（顺序随机）
print(list(d))               # 字典转列表，仅保留键：['name', 'age']
```

### Tuple 元组转换

`tuple(iterable)`：将可迭代对象转换为**不可变有序元组**，完整保留原始元素顺序；不传参数返回空元组。传入非可迭代对象会触发 `TypeError`；转换字典默认仅提取字典的键。

- 参数`iterable`：可选参数，任意可迭代容器，省略则创建空元组
- 返回值：返回全新的 `tuple` 类型不可变有序序列

```python
# 各类容器转元组示例
l = [10, 20, 30]
str_text = "python"

print(tuple())               # 创建空元组：()
print(tuple(l))              # 列表转元组：(10, 20, 30)
print(tuple(str_text))       # 字符串转元组：('p','y','t','h','o','n')
print(tuple({"a":1, "b":2})) # 字典转元组：('a','b')
```

### Set 集合转换

`set(iterable)`：将可迭代对象转为无序可变集合，**自动全局去重**；不传参数返回空集合（注意：不是字典）。高频坑点：`1` 与 `True`、`0` 与 `False` 会被判定相等自动去重；传入非可迭代对象直接报错 `TypeError`；转换字典仅保留 key。

- 参数 `iterable`：可选参数，任意可迭代对象，省略则创建空 `set`
- 返回值：返回去重后的全新 `set` 无序可变集合

```python
# 各类容器转集合示例
list_dup = [1, 2, 2, 3, 3, 3]
tuple_bool = (True, 1, 0, False)

print(set())                 # 创建空集合：set()
print(set(list_dup))         # 列表自动去重：{1, 2, 3}
print(set(tuple_bool))       # 布尔整数去重坑点：{0, 1}
print(set("aabbcc"))         # 字符串去重：{'a','b','c'}
```

### String 字符串转换

`str(object)`：万能字符串强制转换函数，将任意 Python 对象转为对应的字符串文本形式；几乎兼容所有对象，极少触发异常。容器转字符串时，直接转为容器完整字面文本，**不会拆分内部元素**。

- 参数 `object`：可选参数，任意 Python 数据对象，不传参数返回空字符串
- 返回值：返回转换完成的全新字符串

```python
# 任意对象转字符串示例
num = 123
bool_val = False
list_data = [1, 2, 3]

print(str())                 # 空字符串：""
print(str(num))              # 数字转字符串："123"
print(str(bool_val))         # 布尔值转字符串："False"
print(str(list_data))        # 列表整体转字符串："[1, 2, 3]"
```

### Dict 字典转换

`dict(iterable / **kwargs)`：字典创建与转换函数，生成键值对映射容器。支持三种创建方式：空字典、关键字参数、二元键值对可迭代对象；**字典键必须为不可变可哈希类型**，传入不符合二元结构的内容，会抛出`ValueError`。

- 参数：两种传参模式，① 嵌套长度为2的可迭代对象；② 任意数量关键字键值对；无参创建空字典
- 返回值：返回全新的键值对 `dict` 字典对象

```python
# 字典的多种转换&创建方式
# 1. 创建空字典
print(dict())

# 2. 关键字参数快速创建字典
d1 = dict(name="李四", age=20)
print(d1)

# 3. 嵌套二元列表/元组转为字典
key_value_list = [("a", 1), ("b", 2)]
d2 = dict(key_value_list)
print(d2) # {'a': 1, 'b': 2}
```

### 类型转换总结

> [!note] 类型转换注意
> 
> - `bool(x)` 类型转换，对于整数类型 `0` 则为 False，其他的整数都为 True；对于空字符串则为 False，其他均为 True。
> - 有序 -> 无序转换：列表/元组/字符串转集合后，**顺序丢失 + 自动去重**
> - 字典转换共性：字典转list/tuple/set，默认只会提取 `key`，无法直接保留 value
> - 可变限制：list/set 为可变类型，**不能转为字典 key、frozenset 元素**
