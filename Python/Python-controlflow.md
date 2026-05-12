## Python Controlflow（控制流）

Python 控制流是**决定程序代码执行顺序**的核心语法，它打破了代码「从上到下逐行执行」的默认规则，让程序可以**按条件选择执行、重复执行、中断执行**，是实现逻辑功能的基础。Python 控制流主要分为 **4 大类**：

1. **顺序执行**（默认基础规则）
2. **分支执行**（条件判断：选着执行）
3. **循环执行**（重复执行）
4. **辅助控制语句**（中断 / 跳过 / 占位）

### 顺序执行

最基础、默认的执行方式：程序**从上到下、逐行执行代码**，无需任何关键字，是所有程序的底层逻辑。

```python
# 顺序执行：先打印1，再打印2，最后打印3
print(1)
print(2)
print(3)
```

### 分支执行（条件判断）

Python 条件语句是通过一条或多条语句的执行结果（True 或者 False）来决定执行的代码块。条件判断核心关键字：

- `if`：条件判断语句，当条件为 True 时执行代码块
- `elif`：多条件判断分支（else if）
- `else`：所有条件不满足时执行
- `match`：结构化模式匹配（Python 3.10+，类似 switch）

### 循环执行

让一段代码**重复执行**，分为「固定次数循环」和「条件循环」。Python 中的循环语句有 `for` 和 `while`。循环控制关键字与方法如下：

- `for`：迭代循环，用于遍历序列或可迭代对象
- `while`：条件循环，条件为 True 时持续执行
- `else (循环)`：循环正常结束（未被 break）时执行
- `range()`：生成整数序列，常与 for 循环配合使用
- `enumerate()`：遍历时同时获取索引和值

### 辅助控制语句

配合循环 / 分支使用，**灵活调整执行流程**，三个核心关键字：

- `break`：立即终止当前循环
- `continue`：跳过本次循环剩余代码，进入下一次迭代
- `pass`：循环中的占位空语句（空操作），保证语法完整

### 总结

1. 控制流核心作用：**改变代码默认的执行顺序**。
2. 三大核心结构：**顺序（基础）+ 分支（判断）+ 循环（重复）**。
3. 辅助语句：`break`（终止循环）、`continue`（跳过单次）、`pass`（占位）。
    
以上 Python 编程的基础骨架，所有复杂逻辑都基于这些控制流实现。

## if 语句

### if 基础语法

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

## match...case 语句

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

## 条件表达式

#### 条件表达式的概念

条件表达式是 Python 中一种**简化版的 `if-else` 分支结构**，允许在一行代码中根据条件判断返回两个值中的一个，因包含三个操作数（条件、真值结果、假值结果）也被称为“三目运算符”。

条件表达式本质是普通 `if-else` 的语法糖，功能完全等价，但仅适用于**单条件、双分支、直接返回值**的场景，无法处理多分支或复杂逻辑块。

**使用场景**：当仅需根据简单条件返回两个不同值时（如变量赋值、函数返回值简化），可替代多行 `if-else` 提高代码简洁性。

#### 条件表达式的语法

```python
真值结果 if 条件表达式 else 假值结果
```

等价于：

```python
if 条件表达式:
    变量 = 真值结果
else:
    变量 = 假值结果
```

#### 条件表达式的使用与注意事项

- **条件表达式的执行顺序（从右到左判断条件）**：会先计算 `if` 右侧的**条件表达式**，若结果为 `True`（或真值），返回 `if` 左侧的**真值结果**；否则返回 `else` 右侧的**假值结果**。

```python
score = 75
result = "及格" if score >= 60 else "不及格"
print(result)  # 输出：及格
```

- **支持嵌套使用（但不建议过度嵌套）**：实现类似多分支 `if-elif-else` 的功能，但嵌套超过 2 层会严重降低可读性，需谨慎使用。

```python
score = 88
level = "优秀" if score >= 90 else "良好" if score >= 80 else "其他"
print(level)  # 输出：良好

# 等价的普通写法（更清晰）
if score >= 90:
    level = "优秀"
elif score >= 80:
    level = "良好"
else:
    level = "其他"
```

- **真值结果和假值结果可以是任意表达式**：`if` 左侧和 `else` 右侧的内容不仅可以是变量、常量，还可以是函数调用、算术运算、列表推导式等任意合法的 Python 表达式。

```python
a, b = 10, 3
max_minus_min = (a - b) if a > b else (b - a)
print(max_minus_min)  # 输出：7

# 示例2：根据条件调用不同函数
def func1():
    return "执行了 func1"

def func2():
    return "执行了 func2"

flag = True
output = func1() if flag else func2()
print(output)  # 输出：执行了 func1
```

- **注意优先级（条件表达式优先级较低）**：条件表达式的优先级**低于算术运算、比较运算、逻辑运算**，仅高于赋值运算。若需改变执行顺序，需使用**圆括号**包裹。

```python
# 示例1：无括号时的默认优先级
x = 5
y = 3
# 等价于：z = (x + 1) if (x > y) else (y + 1)
z = x + 1 if x > y else y + 1
print(z)  # 输出：6

# 示例2：使用圆括号改变优先级
# 等价于：z = x + (1 if x > y else y) + 1
z = x + (1 if x > y else y) + 1
print(z)  # 输出：7
```

- **避免在条件表达式中写副作用代码**：副作用代码指会改变程序状态的代码（如修改全局变量、打印信息、文件读写等）。虽然 Python 允许在条件表达式中写，但会降低代码可读性和可维护性，建议在条件表达式中返回值，副作用代码放在普通 `if-else` 中。

```python
# 反例（不推荐）
count = 0
flag = True
# 条件表达式中修改全局变量 count
result = (count := count + 1, "成功") if flag else (count, "失败")
print(result)  # 输出：(1, '成功')
print(count)   # 输出：1

# 正例（推荐）
count = 0
flag = True
if flag:
    count += 1
    result = "成功"
else:
    result = "失败"
print(result)  # 输出：成功
print(count)   # 输出：1
```

#### 条件表达式的类型注解

Python 3.5+ 支持类型注解，条件表达式的类型注解需标注在整个表达式的赋值目标上，或函数的返回值类型上（若条件表达式作为函数返回值）。

```python
# 示例1：变量赋值时的类型注解
score: int = 75
result: str = "及格" if score >= 60 else "不及格"
print(result)  # 输出：及格

# 示例2：函数返回值时的类型注解
def get_level(score: int) -> str:
    return "优秀" if score >= 90 else "良好" if score >= 80 else "其他"

print(get_level(88))  # 输出：良好
```

#### and-or 组合的旧写法（已不推荐）

在 Python 2.5 引入条件表达式之前，开发者常用 `真值结果 and 条件表达式 or 假值结果` 的组合模拟三目运算符，但这种写法**存在缺陷**：当 `真值结果` 本身为假值（如 `0`、`""`、`None`、`[]`）时，即使条件为 `True`，也会返回 `假值结果`。

> [!failure] 仅在维护 Python 2.5 之前的旧代码时可能遇到，新代码禁止使用。

```python
# 缺陷示例：真值结果为 0（假值）
score = 0
# 期望返回 "零分"，但实际返回 "非零分"
result = "零分" and score == 0 or "非零分"
print(result)  # 输出：非零分

# 正确的条件表达式写法
result = "零分" if score == 0 else "非零分"
print(result)  # 输出：零分
```

## while 循环

while 循环需要注意**冒号和缩进**。另外，在 Python 中没有 `do..while` 循环。

### 基础语法格式

```python
while 判断条件(condition)：
    执行语句(statements)……
```

### while 循环使用 else 语句

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

### 简单语句组

类似 `if` 语句的语法，如果 `while` 循环体中只有一条语句，可以将该语句与 `while` 写在同一行中。

```python
flag = 1
while (flag): print ('Hello world.')
print ("Good bye!")
```

## for 语句

### for 基础语句

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

### for...else 语句

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

## break 和 continue 关键字

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

## 循环中的 else 子句

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

## pass 语句

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

## 