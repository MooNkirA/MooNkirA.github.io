## 函数（Function）

函数是组织好的，可重复使用的，用来实现单一，或相关联功能的代码段。函数能提高应用的模块性，和代码的重复利用率。Python 提供了许多内建函数，也可以创建自定义函数。

## 函数的定义语法

定义函数使用 `def` 关键字，默认情况下，参数值和参数名称是按函数声明中定义的顺序匹配起来的。一般格式如下：

```python
def 函数名（参数列表）:
    函数体
```

示例：

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b
# 调用函数
print(max(4, 5))
```

## 函数的定义规则

![](images/20260426103457244.png)

用户自定义函数，有以下基本的规则：

- 函数代码块以 `def` 关键词开头，后接函数标识符名称和圆括号 `()`。
- 任何传入参数和自变量必须放在圆括号中间，圆括号之间可以用于定义参数。
- 函数的第一行语句可以选择性地使用文档字符串—用于存放函数说明。
- 函数内容以冒号 `:` 起始，并且缩进。
- `return [表达式]` 结束函数，选择性地返回一个值给调用方，不带表达式的 `return` 相当于返回 `None`。

## 函数的调用

在定义函数的基本结构（名称、函数里包含的参数和代码块结构）完成以后，可以通过另一个函数调用执行，也可以直接从 Python 命令提示符执行。

```python
# 定义函数
def max(a, b):
    if a > b:
        return a
    else:
        return b
# 调用函数
print(max(4, 5))
```

## 函数的参数

调用函数时可使用几种参数方式：

- 必需参数
- 关键字参数
- 默认参数
- 不定长参数

### 必需参数

**必需参数**须以正确的顺序传入函数。调用时的数量必须和声明时的一样，否则会出现语法错误。

```python
def printme(str):
    print(str)
    return

# 调用 printme 函数，不加参数会报错
printme()
# TypeError: printme() missing 1 required positional argument: 'str'
```

### 关键字参数

关键字参数和函数调用关系紧密，函数调用使用关键字参数来确定传入的参数值，允许函数调用时参数的顺序与声明时不一致，因为 Python 解释器能够用参数名匹配参数值。

```python
def printinfo(name, age):
    print("名字: ", name)
    print("年龄: ", age)
    return
# 使用关键字参数方式调用函数
printinfo(age=50, name="MooN")
```

### 参数默认值 (可选参数)

默认参数：定义函数时，通过 `形参名=值` 的形式，为参数指定一个默认值。调用函数时，如果没有传递参数，则会使用默认参数；如果传递了参数，则用**传入的值覆盖默认值**。以下实例中如果没有传入 age 参数，则使用默认值：

```python
def printinfo(name, age=25):
    print("名字: ", name)
    print("年龄: ", age)
    return

printinfo(age=23, name="MooNkirA")
# 调用函数，使用默认参数
printinfo(name="N") # 年龄: 25
```

> [!Important] 注意：<font color=red>**默认参数必须要放在必选参数的后面。或者某个形参，一旦设置了默认值，那它后面的所有形参，也必须要写默认值！**</font>

### 可变参数

> [!note] 有时可能需要一个函数能处理比当初声明时更多的参数，这些参数叫做**可变参数**。声明时不会命名

#### 元组类型的可变参数

**元组类型的不定长参数**：定义函数时，在形参名前加星号 `*`，会以元组(tuple)的形式导入，可以接收<font color=red>**任意数量的位置参数**</font>。如果在函数调用时没有指定参数，它就是一个空元组。也可以不向函数传递未命名的变量。

```python
def functionname([formal_args,] *var_args_tuple ):
    "函数_文档字符串"
    function_suite
    return [expression]
```

示例：

```python
def printinfo(arg1, *vartuple):
    print("输出: ")
    print(arg1)
    for var in vartuple:
        print(var)
    return

# 函数调用时没有指定参数，它就是一个空元组。
printinfo(10)
printinfo(70, 60, 50)
```

#### 字典类型的可变参数

**字典类型的不定长参数**：定义函数时，在形参名前加两个星号 `**`，会以字典(dict)的形式导入，可以接收<font color=red>**任意数量的关键字参数**</font>。

```python
def functionname([formal_args,] **var_args_dict ):
    "函数_文档字符串"
    function_suite
    return [expression]
```

示例：

```python
def printinfo(arg1, **vardict):
    print("输出: ")
    print(arg1)
    print(vardict)

# 元组类型的不定长参数
printinfo(1, a=2, b=3)

'''
输出: 
1
{'a': 2, 'b': 3}
'''
```

#### 混合类型的可变参数

> [!Important] 注意事项
> 
> - <font color=red>**可变位置参数、可变关键字参数，可以同时使用，但必须先写可变位置参数!!**</font>
> - 可变位置参数、可变关键字参数，也能<font color=red>**与其他类型的参数一起使用**</font>。

示例：

```python
# 定义函数（使用*args去接收：可变位置参数）
def test1(*args):
    print(args)
# 调用
test1('张三', '男', 18, 172)  # ('张三', '男', 18, 172)

# 定义函数（使用**kwargs去接收：可变关键字参数）
def test2(**kwargs):
    print(kwargs)
# 调用
test2(name='张三', gender='男', age=18, height=172)  # {'name': '张三', 'gender': '男', 'age': 18, 'height': 172}

# 定义函数（同时使用：可变位置参数、可变关键字参数）
def test3(*args, **kwargs):
    print(args, end='  ')
    print(kwargs)
# 调用
test3('MooN', '男', age=23, height=180)  # ('MooN', '男')  {'age': 23, 'height': 180}

# 定义函数（同时使用：可变位置参数、可变关键字参数 和 其他类型）
def test4(a, b, *args, c='镜花水月', **kwargs):
    print(f'a: {a}, b: {b}, c: {c}', end='  ')
    print(args, end='  ')
    print(kwargs)
# 调用
test4('MooNkirA', '男', '运动', '摄影', c='天锁斩月', age=24, height=183)  # a: MooNkirA, b: 男, c: 天锁斩月  ('运动', '摄影')  {'age': 24, 'height': 183}

```

## 参数传递

在 python 中，类型属于对象，对象有不同类型的区分，变量是没有类型的：

### 可变(mutable)与不可变(immutable)对象

在 python 中，strings, tuples, 和 numbers 是不可更改的对象，而 list, dict 等则是可以修改的对象。

- **不可变类型**：变量赋值 `a = 5` 后再赋值 `a = 10`，这里实际是新生成一个 int 值对象 10，再让 a 指向它所在的内存地址，而 5 被丢弃，不是改变 a 的值，相当于新生成了 a。
- **可变类型**：变量赋值 `myList = [1,2,3,4]` 后再赋值 `myList[2]=5` 则是将 myList 的第三个元素值更改，但本身 myList 没有动，只是其内部的一部分值被修改了。

python 函数的参数传递：

- **不可变类型**：类似 C++ 的值传递，如整数、字符串、元组。如 fun(a)，传递的只是 a 的值，没有影响 a 对象本身。如果在 fun(a) 内部修改 a 的值，则是新生成一个 a 的对象。
- **可变类型**：类似 C++ 的引用传递，如 列表，字典。如 fun(la)，则是将 la 真正的传过去，修改后 fun 外部的 la 也会受影响

### 传不可变对象实例

通过 `id()` 函数来查看内存地址变化。以下示例的形参和实参指向的是同一个对象（对象 id 相同），在函数内部修改形参后，形参指向的是不同的 id。

```python
def change(a):
    print(id(a))  # 指向的是同一个对象
    a = 10
    print(id(a))  # 一个新对象

a = 1
print(id(a))
change(a)

'''
以上实例输出结果为：
4379369136
4379369136
4379369424
'''
```

### 传可变对象实例

可变对象在函数里修改了参数，那么在调用这个函数里，原始的参数也被改变了。例如，“传入函数的形参”和“在函数里对参数末尾添加新内容的对象”用的是同一个引用。故输出结果如下：

```python
def changeme(mylist):
    "修改传入的列表"
    mylist.append([1, 2, 3, 4])
    print("函数内取值: ", mylist)
    return

mylist = [10, 20, 30]
changeme(mylist)  # 函数内取值:  [10, 20, 30, [1, 2, 3, 4]]
print("函数外取值: ", mylist)  # 函数外取值:  [10, 20, 30, [1, 2, 3, 4]]
```

## 全局作用域 vs 局部作用域

作用域是指：**变量能起作用的范围**。即规定「变量在代码里的哪个位置可以正常调用、哪个位置无法使用」。

- **全局作用域**：整个 `.py` 代码文件**最外层**的代码范围。
- **局部作用域**：`def` 定义的**函数内部**的代码范围。

全局变量 VS 局部变量

- **全局变量**：定义在文件最外层（全局作用域），在当前整个 Python 文件的任意位置，都可以正常使用。
- **局部变量**：定义在函数内部（局部作用域），仅能在定义它的当前函数内部使用，函数外部无法访问。

```python
# 全局变量（全局作用域）
a = 100
b = 200

def test():
    # 局部变量（局部作用域）
    c = 'Hello'
    d = 'MooN'
```

`global` 关键字，允许在函数**内部修改全局变量的值**。

```python
count = 100
def modify_demo():
    # 先声明：要操作的是全局变量count
    global count
    print(f"修改前：{count}")
    # 真正修改全局变量本身
    count = 999

modify_demo()
# 全局变量本身被永久改变
print(f"函数执行后全局count：{count}")  # 输出 999
```

** `global` 使用场景**：

- 函数内需要**修改**全局变量的值
- 需要在函数内部，向外层全局作用域新增变量

**全局变量与局部变量注意事项**：

1. 函数**外部永远无法访问**函数内的局部变量，强行调用直接报 `NameError`
2. 仅读取全局变量，**不用加 `global` **；只要要修改，**必须加 `global` **
3. 开发建议：尽量少定义全局变量，容易造成数据污染、代码可读性变差
4. 函数的形参、函数内直接赋值的变量，天生就是局部变量

## 强制关键字参数

声明函数时，参数中可以有单独出现星号 `*` ，则星号 `*` 后的参数必须用关键字传入。例如:

```python
def f(a, b, *, c):
    return a + b + c

# f(1, 2, 3)  # 报错 TypeError: f() takes 2 positional arguments but 3 were given
f(1, 2, c=3)  # 正常调用，* 后参数必须用关键字传入
```

## 强制位置参数

Python 3.8 新增了一个函数形参语法 `/`，用来指明函数形参必须使用指定位置参数，不能使用关键字参数的形式。

```python
def f(a, b, /, c, d, *, e, f):
    print(a, b, c, d, e, f)
```

> [!info] 在以上示例，形参 a 和 b 必须使用指定位置参数，c 或 d 可以是位置形参或关键字形参，而 e 和 f 要求为关键字形参

```python
def f(a, b, /, c, d, *, e, f):
    print(a, b, c, d, e, f)

# 正确调用
f(10, 20, 30, d=40, e=50, f=60)
# 错误调用
f(10, b=20, c=30, d=40, e=50, f=60)  # b 不能使用关键字参数的形式
f(10, 20, 30, 40, 50, f=60)  # e 必须使用关键字参数的形式
```

## 函数参数的组包与解包

### 组包与解包概述

组包与解包的核心作用是：简化函数参数传递，让函数支持**任意数量、任意类型**的参数，提高代码灵活性。

- **组包（Packing）**：在**函数形参**中使用 `*` 或 `**`，将调用函数时传入的**多个零散参数**，打包成一个**元组**或**字典**，方便函数内部统一处理。
- **解包（Unpacking）**：在**函数实参**中使用 `*` 或 `**`，将**容器类型数据**（列表、元组、字符串、字典）拆分成**多个独立的参数**，传递给函数。

涉及的核心符号：

- `*`：处理位置参数、可迭代对象（列表/元组/字符串/range）
- `**`：处理关键字参数、字典

### 参数组包（函数形参中使用）

组包仅用于**定义函数时的形参**，分为**位置参数组包**和**关键字参数组包**。

#### 位置参数组包

- **语法**：`def 函数名(*args):`
- **规则**：
    1. `*` 必须写在形参名前，`args` 是约定俗成的名称（可自定义）
    2. 接收函数调用时传入的**所有多余位置参数**
    3. 打包后的数据类型是**元组（tuple）**
    4. 支持接收 0 个、1 个、多个位置参数

```python
# 定义函数，使用*args组包位置参数
def demo(*args):
    print("组包后的数据类型:", type(args))  # <class 'tuple'>
    print("组包后的数据:", args)

# 调用函数，传入任意数量的位置参数
demo()  # 无参数：()
demo(10)  # 1个参数：(10,)
demo(10, 20, 30)  # 多个参数：(10, 20, 30)
demo("Python", 3.14, True)  # 混合类型：('Python', 3.14, True)
```

#### 关键字参数组包

- **语法**：`def 函数名(**kwargs):`
- **规则**：
    1. `**` 必须写在形参名前，`kwargs` 是约定俗成的名称
    2. 接收函数调用时传入的**所有多余关键字参数**
    3. 打包后的数据类型是**字典（dict）**：`键=参数名`，`值=参数值`

```python
# 定义函数，使用**kwargs组包关键字参数
def demo(**kwargs):
    print("组包后的数据类型:", type(kwargs))  # <class 'dict'>
    print("组包后的数据:", kwargs)

# 调用函数，传入任意数量的关键字参数
demo()  # 无参数：{}
demo(name="张三", age=18)  # 多个关键字参数：{'name': '张三', 'age': 18}
demo(subject="Python", score=100)  # {'subject': 'Python', 'score': 100}
```

#### 混合组包

- **语法**：`def 函数名(*args, **kwargs):`
- **规则**：**必须先写 `*args`，再写 `**kwargs`**
- **作用**：接收**任意数量、任意类型**的参数（全能型函数）

```python
def demo(*args, **kwargs):
    print("位置参数组包:", args)  # (10, 20)
    print("关键字参数组包:", kwargs)  # {'name': '李四', 'age': 20}

# 同时传入位置参数+关键字参数
demo(10, 20, name="李四", age=20)
```

### 参数解包（函数实参中使用）

解包仅用于**调用函数**时的实参，将容器拆分为多个独立参数传递。

#### 解包：可迭代对象（列表/元组/字符串/range）

- **语法**：`函数名(*可迭代对象)`
- **规则**：
  1. 适用于列表、元组、字符串、range 等所有可迭代对象
  2. 解包后自动转换为**位置参数**传递给函数
  3. 解包后的参数数量 必须匹配 函数形参数量

**场景1：解包列表/元组**

```python
# 定义需要2个位置参数的函数
def add(a, b):
    return a + b

# 定义列表/元组
num_list = [10, 20]
num_tuple = (30, 40)

# 普通调用
print(add(10, 20))
# 解包调用（*拆分容器为独立参数）
print(add(*num_list))  # 等价 add(10,20)
print(add(*num_tuple))  # 等价 add(30,40)
```

**场景2：解包字符串**

```python
def print_char(a, b, c):
    print(a, b, c)

my_str = "abc"
print_char(*my_str)  # 解包为：a b c
```

**场景3：解包 range 对象**

```python
def get_num(a, b):
    print(a, b)

get_num(*range(1, 3))  # 解包range(1,3)为 1,2
```

**场景4：print 函数解包（高频用法）**

```python
# 直接打印列表：[1,2,3]
print([1,2,3])
# 解包后打印：1 2 3
print(*[1,2,3])
```

#### 解包：字典对象

- **语法**：`函数名(**字典)`
- **规则**：
  1. 仅适用于**字典（dict）**
  2. 解包后自动转换为**关键字参数**（`key=value`）传递给函数
  3. 字典的键必须和函数形参名**完全一致**

```python
# 定义需要关键字参数的函数
def user_info(name, age):
    print(f"姓名：{name}，年龄：{age}")

# 定义字典（键与形参名一致）
user_dict = {"name": "MooN", "age": 18}

# 普通调用
user_info(name="Zero", age=18)
# 解包调用（**拆分字典为关键字参数）
user_info(**user_dict)
```

### 组包 + 解包（进阶，混合使用）

函数定义时**组包**，调用时**解包**，实现参数的灵活传递。

```python
# 定义函数：组包任意参数
def func(*args, **kwargs):
    print("位置参数:", args)
    print("关键字参数:", kwargs)

# 定义容器数据
my_list = [1, 2, 3]
my_dict = {"a": 10, "b": 20}

# 调用函数：解包容器传递参数
func(*my_list, **my_dict)
# 位置参数: (1, 2, 3)
# 关键字参数: {'a': 10, 'b': 20}
```

### 混合函数参数完整顺序规则（必记）

当函数中**同时存在普通参数、`*args`、默认参数、`**kwargs`** 时，必须严格遵循以下顺序：

```python
def 函数名(普通位置参数, *args, 默认参数, **kwargs):
```

正确示例：

```python
def demo(a, b, *args, c=10, **kwargs):  
    print(a, b)  
    print(args)  
    print(c)  
    print(kwargs)  
  
demo(1, 2, 3, 4, c=20, name="MooN")
```

错误示例（顺序颠倒会报错）：

```python
# 报错：参数顺序错误
def demo(**kwargs, *args):
    pass
```

### 核心知识点总结

1. **组包**：用于函数形参，`*args` 打包成**元组**（不可变），`**kwargs` 打包成**字典**
2. **解包**：用于调用函数的实参，`*` 拆可迭代对象为**位置参数**，`**` 拆字典为**关键字参数**
3. **不可变限制**：组包后的 `args` 是元组，无法修改
4. **匹配规则**：解包后的参数数量/名称，必须与函数形参匹配
5. **通用场景**：`*args` 和 `**kwargs` 是编写**通用函数、装饰器**的核心语法

## 函数返回值

### 核心概念概述

函数返回值：函数执行完毕后返回给调用者的结果。通过返回值，函数可以将内部计算或处理的结果传递给外部代码使用，实现数据的“输出”功能。

### return 语句的作用

`return` 是 Python 中用于指定函数返回值的关键字，其核心作用包括：

- 终止函数的执行。一旦执行到 `return`，函数立即停止，后续代码不再运行。
- 将 `return` 后面的表达式结果返回给函数调用者。

**基本语法**：

```python
def 函数名(参数列表):
    # 函数体
    return 表达式  # 表达式的结果即为返回值
```

**无返回值的两种写法**:

```python
# 写法1：无 return 语句
def func1():
    print("仅执行操作，无显式返回")

# 写法2：return 后无表达式
def func2():
    print("执行操作后返回")
    return  # 等价于 return None
```

示例：

```python
def sum(arg1, arg2):
    total = arg1 + arg2
    print("函数内 : ", total)
    return total

# 调用 sum 函数
total = sum(10, 20)
print("函数外 : ", total)
```

### 默认返回值（None）

以下场景函数会默认返回 `None`（Python 中表示“空值”的特殊对象）：

1. 函数中没有显式使用 `return` 语句。
2. `return` 后无任何表达式。
3. 显式写 `return None`。

> [!note] 注意：不要混淆 `return None` 和无返回值的情况

**显式返回 `None` 的使用场景**：函数执行失败或无需返回有效结果时，显式返回 `None` 便于调用者判断。

```python
def divide(a, b):
    if b == 0:
        print("除数不能为0")
        return None  # 显式返回 None 表示失败
    return a / b

result = divide(10, 0)
if result is None:
    print("计算失败")
else:
    print(f"结果: {result}")
```

### 返回值的使用要点及注意事项

#### return 会立即终止函数执行

函数中一旦执行到 `return`，后续的所有代码都不会被执行。一般使用场景是，在条件判断中**提前终止函数**（如参数校验失败时直接返回）。

```python
def check_positive(num):
    if num <= 0:
        return "参数必须为正数"  # 条件满足时直接返回，后续代码不执行
    return f"{num} 是正数"

print(check_positive(-5))  # 输出：参数必须为正数
print(check_positive(10))  # 输出：10 是正数
```

#### 函数中可以有多个 return 语句

多个 `return` 通常配合条件判断使用，不同分支返回不同结果。

```python
def calculate_score(score):
    if score >= 90:
        return "优秀"
    elif score >= 80:
        return "良好"
    elif score >= 60:
        return "及格"
    else:
        return "不及格"

print(calculate_score(85))  # 输出：良好
```

#### 多个返回值

Python 支持通过 `return` 返回多个值，本质是返回一个**元组**（也可返回列表、字典等容器）。

- **返回元组（默认方式）**：需要同时返回多个关联结果（如计算两个数的和、差、积）。

```python
def calculate(a, b):
    sum_ab = a + b
    diff_ab = a - b
    product_ab = a * b
    return sum_ab, diff_ab, product_ab  # 等价于 return (sum_ab, diff_ab, product_ab)

# 调用时可直接解包接收
s, d, p = calculate(10, 3)
print(f"和: {s}, 差: {d}, 积: {p}")  # 输出：和: 13, 差: 7, 积: 30

# 也可接收为元组
result = calculate(5, 2)
print(result)  # 输出：(7, 3, 10)
```

- **返回列表**：返回的多个值需要后续修改（列表是可变对象）。

```python
def get_even_numbers(n):
    return [i for i in range(n) if i % 2 == 0]

evens = get_even_numbers(10)
evens.append(10)  # 可修改返回的列表
print(evens)  # 输出：[0, 2, 4, 6, 8, 10]
```

- **返回字典**：返回的多个值需要通过键名明确标识（提高可读性）。

```python
def get_user_info():
    return {
        "name": "张三",
        "age": 25,
        "city": "广州"
    }

user = get_user_info()
print(user["name"])  # 输出：张三
```

#### 返回函数（闭包）

Python 中函数也可以作为返回值返回（通常用于实现闭包或工厂函数）。

示例：根据参数动态生成不同的处理函数（如根据配置生成不同的计算函数）。

```python
def create_multiplier(factor):
    # 定义内部函数，使用外部函数的 factor 变量
    def multiplier(n):
        return n * factor
    return multiplier  # 返回内部函数

# 生成两个不同的乘法函数
double = create_multiplier(2)
triple = create_multiplier(3)

print(double(5))   # 输出：10
print(triple(5))   # 输出：15
```

### 返回值类型注解

Python 3.5+ 支持类型注解，可通过 `-> 类型` 标注函数的返回值类型（仅为提示，不强制检查）。其核心作用是，提高代码可读性，便于 IDE 进行类型检查和提示。

```python
def add(a: int, b: int) -> int:
    """
    计算两个整数的和
    :param a: 第一个整数
    :param b: 第二个整数
    :return: 两数之和（整数类型）
    """
    return a + b

# 调用时 IDE 会提示返回值为 int 类型
result = add(3, 5)
print(result)  # 输出：8
```

## 匿名函数

可以使用 lambda 来创建匿名函数。所谓匿名，即不再使用 `def` 语句这样标准的形式定义一个函数。

- lambda 只是一个表达式，函数体比 `def` 简单很多。
- lambda 的主体是一个表达式，而不是一个代码块。仅仅能在 lambda 表达式中封装有限的逻辑进去。
- lambda 函数拥有自己的命名空间，且不能访问自己参数列表之外或全局命名空间里的参数。
- 虽然 lambda 函数看起来只能写一行，却不等同于 C 或 C++ 的内联函数，内联函数的目的是调用小函数时不占用栈内存从而减少函数调用的开销，提高代码的执行速度。

lambda 函数的语法只包含一个语句，语法格式：

```python
lambda [arg1 [, arg2, ...argn]]:expression
```

示例：

```python
sum = lambda arg1, arg2: arg1 + arg2
# 调用 lambda 函数 sum
print("相加后的值为 : ", sum(10, 20))
```

还可以将<u>**匿名函数封装在一个函数内，并以返回值的形式返回**</u>，这样可以使用同样的代码来创建多个匿名函数。

```python
def myfunc(n):
    return lambda a: a * n

mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(11))  # 22
print(mytripler(11))  # 33
```

### 生成器函数

#### yield 关键字

`yield` 是生成器函数的关键字，用于“暂停”函数执行并返回一个值，下次调用时从暂停处继续执行（与 `return` 不同，`yield` 不会终止函数）。


