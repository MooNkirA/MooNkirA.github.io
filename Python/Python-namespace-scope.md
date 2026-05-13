## Python 四种作用域（LEGB）概述

### 什么是作用域

作用域（Scope）是 Python 中**变量的可访问范围**，它规定了在程序的哪些部分可以使用某个变量，以及变量的生命周期。Python 采用**静态作用域（词法作用域）**，即变量的作用域在代码编写时就已经确定，而不是在运行时动态决定。其作用是：

- 避免不同模块、不同函数之间的变量名冲突。
- 控制变量的生命周期，节省内存。
- 提高代码的模块化和可维护性。

### LEGB 变量查找规则

Python 中变量的查找严格遵循 **LEGB 规则**，当在某个作用域中引用一个变量时，Python 会按照以下顺序依次查找：

1. **L（Local，局部作用域）**：首先查找当前函数/代码块内部的变量；
2. **E（Enclosing，外层嵌套作用域）**：如果局部没有找到，查找外层嵌套函数的作用域（仅在嵌套函数中存在）；
3. **G（Global，全局作用域）**：如果外层也没有找到，查找当前模块的全局变量；
4. **B（Built-in，内建作用域）**：如果全局也没有找到，查找 Python 内置的变量和函数。

如果以上四个作用域都没有找到该变量，Python 会抛出 `NameError` 异常。

### 四种作用域的定义与范围

| 作用域类型                | 定义与范围                                     | 生命周期                              |
| ----------------------- | -------------------------------------------- | ----------------------------------- |
| 局部作用域(Local)         | 函数内部定义的变量，仅在函数内部可访问               | 函数调用时创建，函数执行结束后销毁        |
| 外层嵌套作用域(Enclosing) | 嵌套函数中，外层函数的作用域，仅在内部函数中可访问   | 外层函数调用时创建，内部函数销毁后销毁    |
| 全局作用域(Global)        | 模块（.py 文件）顶层定义的变量，在整个模块内部可访问 | 模块被导入时创建，程序退出时销毁          |
| 内建作用域(Built-in)      | Python 解释器内置的变量和函数，在所有模块中都可访问  | Python 解释器启动时创建，解释器退出时销毁 |

## 作用域相关语法

### 不同作用域变量的定义

```python
# 1. 全局作用域：模块顶层定义
global_var = "我是全局变量"

def outer_func():
    # 2. 外层嵌套作用域：外层函数内部定义
    enclosing_var = "我是外层变量"
    
    def inner_func():
        # 3. 局部作用域：内部函数内部定义
        local_var = "我是局部变量"
        print(local_var)      # 访问局部变量
        print(enclosing_var)  # 访问外层变量
        print(global_var)     # 访问全局变量
        print(len)            # 访问内建函数（内建作用域）
    
    inner_func()

outer_func()
# 输出：
# 我是局部变量
# 我是外层变量
# 我是全局变量
# <built-in function len>
```

### global 关键字（修改全局变量）

当需要在函数内部**修改全局变量**时，必须使用 `global` 关键字声明该变量。如果不声明，Python 会将其视为局部变量，导致 `UnboundLocalError`。语法格式：

```python
global 变量名1, 变量名2, ...
```

**使用场景**：在函数内部需要修改全局变量的值，或需要在函数内部，向外层全局作用域新增变量。

```python
count = 0  # 全局变量

def increment():
    global count  # 声明 count 是全局变量
    count += 1    # 修改全局变量

increment()
print(count)  # 输出：1（全局变量被修改）
```

### nonlocal 关键字（修改外层非全局变量）

当需要在**嵌套函数内部修改外层函数的变量**时，必须使用 `nonlocal` 关键字声明该变量。`nonlocal` 只能用于嵌套函数中，不能用于修改全局变量。语法格式：

```python
nonlocal 变量名1, 变量名2, ...
```

**使用场景**：在嵌套函数内部需要修改外层函数的变量。

```python
def outer():
    count = 0  # 外层变量
    
    def inner():
        nonlocal count  # 声明 count 是外层变量
        count += 1      # 修改外层变量
        print(count)
    
    return inner

counter = outer()
counter()  # 输出：1
counter()  # 输出：2
counter()  # 输出：3
```

### global 与 nonlocal 的核心区别

这是新手最容易混淆的知识点，必须明确区分：

| 关键字     | 作用对象       | 使用场景                         | 查找范围                          |
| ---------- | -------------- | ---------------------------- | -------------------------------- |
| `global`   | 全局变量       | 在函数内部修改全局变量           | 直接跳转到全局作用域                   |
| `nonlocal` | 外层非全局变量 | 在嵌套函数内部修改外层函数的变量 | 从外层嵌套作用域开始向上查找，不包括全局作用域 |

**错误示例**：

```python
# 错误1：nonlocal 不能用于修改全局变量
x = 10

def func():
    nonlocal x  # 报错：SyntaxError: no binding for nonlocal 'x' found
    x += 1

# 错误2：global 不能用于修改外层变量
def outer():
    x = 10
    
    def inner():
        global x  # 不会修改外层的 x，而是创建/修改全局的 x
        x += 1
        print("inner x：", x)
    
    inner()
    print("outer x：", x)

outer()
# 输出：
# inner x：11
# outer x：10（外层变量未被修改）
print("全局 x：", x)  # 输出：11（全局变量被修改）
```

## 作用域的注意事项

### 变量遮蔽（Shadowing）问题

当内部作用域定义了与外部作用域同名的变量时，内部变量会**遮蔽**外部变量，即内部作用域只能访问到内部变量，无法直接访问外部同名变量。通常是尽量避免变量名冲突，如果必须同名的话，需注意不要意外遮蔽重要的外部变量（尤其是内建函数）。

```python
# 示例1：局部变量遮蔽全局变量
x = 10  # 全局变量

def func():
    x = 20  # 局部变量，遮蔽了全局变量 x
    print("局部 x：", x)

func()  # 输出：局部 x：20
print("全局 x：", x)  # 输出：全局 x：10（全局变量未被修改）

# 示例2：危险！遮蔽内建函数
len = 10  # 全局变量遮蔽了内建函数 len()
# print(len("hello"))  # 报错：TypeError: 'int' object is not callable

# 恢复内建函数
del len
print(len("hello"))  # 输出：5
```

### 作用域在函数定义时确定，而非调用时

Python 的作用域是**静态作用域**，变量的查找范围在函数**定义时**就已经确定，而不是在函数**调用时**。这意味着即使函数在其他地方被调用，它仍然会使用定义时所在的作用域。

```python
x = 10  # 全局变量

def func():
    print(x)  # 定义时确定：x 来自全局作用域

def another_func():
    x = 20  # 局部变量
    func()  # 调用 func()，但 func() 仍然使用全局的 x

another_func()  # 输出：10（不是 20）
```

### 函数内部变量的提前声明问题（UnboundLocalError）

如果在函数内部**先引用变量，后赋值**，Python 会认为该变量是局部变量，但在引用时还没有赋值，从而抛出 `UnboundLocalError`。

**错误示例**：

```python
x = 10

def func():
    print(x)  # 报错：UnboundLocalError: local variable 'x' referenced before assignment
    x = 20    # 赋值操作导致 Python 将 x 视为局部变量

func()
```

**解决方法**：

1. 如果要使用全局变量，添加 `global` 声明；
2. 如果要使用局部变量，先赋值后引用。

```python
# 解决方法1：使用 global
x = 10

def func():
    global x
    print(x)  # 输出：10
    x = 20

func()

# 解决方法2：先赋值后引用
def func():
    x = 20
    print(x)  # 输出：20

func()
```

### 循环变量的作用域陷阱

在 Python 中，`for` 循环的变量会泄露到循环外部的作用域中（这与很多其他语言不同）。在嵌套函数中使用循环变量时，容易出现闭包变量捕获的陷阱。

```python
# 示例：循环变量的作用域泄露
for i in range(3):
    pass
print(i)  # 输出：2（循环变量泄露到全局作用域）

# 闭包中的循环变量陷阱
def create_funcs():
    funcs = []
    for i in range(3):
        funcs.append(lambda: i)  # 所有 lambda 都捕获变量 i 的引用
    return funcs

funcs = create_funcs()
print(funcs[0]())  # 输出：2
print(funcs[1]())  # 输出：2
print(funcs[2]())  # 输出：2（循环结束后 i=2）

# 解决方法：用默认参数绑定当前值
def create_funcs():
    funcs = []
    for i in range(3):
        funcs.append(lambda i=i: i)  # 默认参数在定义时绑定当前值
    return funcs

funcs = create_funcs()
print(funcs[0]())  # 输出：0
print(funcs[1]())  # 输出：1
print(funcs[2]())  # 输出：2
```

### 不要滥用全局变量

全局变量在整个模块内部都可访问，虽然使用方便，但会带来以下问题：

- 降低代码的可读性和可维护性（难以追踪变量的修改）。
- 增加代码的耦合度（函数依赖全局变量，难以独立测试）。
- 容易出现变量名冲突和意外修改。

**最佳实践**：

- 尽量使用局部变量，将变量的作用域限制在最小范围内。
- 如果需要在函数之间共享数据，使用参数传递或返回值。
- 仅在必要时使用全局变量（如配置常量），且命名使用大写字母。

## 作用域扩展知识

### 模块级作用域

每个 Python 模块（.py 文件）都有自己独立的全局作用域，不同模块之间的全局变量互不干扰。当一个模块被导入时，它的全局变量会成为模块对象的属性。

```python
# module1.py
x = 10  # module1 的全局变量

def func():
    print(x)
```

```python
# main.py
import module1

print(module1.x)  # 输出：10
module1.func()    # 输出：10

# 修改 module1 的全局变量
module1.x = 100
module1.func()    # 输出：100

# 不会创建 main 的全局变量 x
print(x)  # 报错：NameError: name 'x' is not defined
```

### 类作用域的特殊性

类作用域是 Python 中一种特殊的作用域，**不属于 LEGB 规则的一部分**。在类内部定义的变量（类属性），在类的方法中不能直接通过 LEGB 规则访问，必须通过 `self` 或类名来访问。

```python
class MyClass:
    class_var = "我是类变量"  # 类作用域
    
    def method(self):
        # 错误：不能直接访问类变量
        # print(class_var)  # 报错：NameError: name 'class_var' is not defined
        
        # 正确：通过 self 或类名访问
        print(self.class_var)    # 输出：我是类变量
        print(MyClass.class_var) # 输出：我是类变量
```

### 闭包与作用域的关系

闭包（Closure）是指**引用了外层函数变量的内部函数**，它会保留外层函数的作用域，即使外层函数已经执行结束。闭包的实现依赖于 Python 的作用域机制和变量捕获。主要用于实现工厂函数、装饰器、状态保持等。

```python
def make_counter():
    count = 0  # 外层变量
    
    def counter():
        nonlocal count
        count += 1
        return count
    
    return counter  # 返回内部函数（闭包）

# 外层函数执行结束，但 count 变量被闭包保留
c1 = make_counter()
print(c1())  # 输出：1
print(c1())  # 输出：2

# 每个闭包都有独立的作用域
c2 = make_counter()
print(c2())  # 输出：1
print(c1())  # 输出：3（c1 的 count 不受 c2 影响）
```

### 作用域与垃圾回收

Python 的垃圾回收机制基于引用计数，当一个对象的引用计数变为 0 时，会被自动回收。作用域决定了变量的生命周期，当作用域销毁时，该作用域内的变量引用会被释放，从而可能导致对象的引用计数减少。

- 局部作用域：函数执行结束后，局部变量的引用被释放。
- 外层嵌套作用域：当内部函数（闭包）销毁后，外层变量的引用才会被释放。
- 全局作用域：程序退出时才会释放所有全局变量的引用。

## Python 命名空间（Namespace）

命名空间是 Python 中用于**隔离同名变量**的核心机制，本质上是一个**字典（dict）**，其中**键是变量名（字符串），值是变量对应的对象**。核心作用：

- 解决命名冲突问题：不同命名空间中可以存在同名变量，互不干扰。
- 实现变量的作用域控制：通过限制命名空间的访问范围，实现变量的作用域。

Python 中存在四种命名空间，分别对应四种作用域：

### 局部命名空间（Local Namespace）

- **对应作用域**：局部作用域
- **创建时机**：函数被调用时创建
- **销毁时机**：函数执行结束后销毁
- **包含内容**：函数内部定义的变量、参数、内部函数等
- **特点**：每次函数调用都会创建一个全新的局部命名空间，不同调用之间互不干扰

```python
def func(a, b):
    c = a + b
    # 查看当前局部命名空间
    print(locals())  # 输出：{'a': 1, 'b': 2, 'c': 3}

func(1, 2)
```

### 外层嵌套命名空间（Enclosing Namespace）

- **对应作用域**：外层嵌套作用域
- **创建时机**：外层函数被调用时创建
- **销毁时机**：所有引用该命名空间的内部函数（闭包）都被销毁后销毁
- **包含内容**：外层函数内部定义的变量、参数、内部函数等
- **特点**：被内部函数引用时会被保留，即使外层函数执行结束

```python
def outer(a):
    b = 10
    
    def inner():
        print(a + b)
    
    # 查看外层命名空间（通过闭包的 __closure__ 属性）
    print(inner.__closure__)  # 输出包含 a 和 b 的 cell 对象元组
    return inner

f = outer(5)
```

### 全局命名空间（Global Namespace）

- **对应作用域**：全局作用域
- **创建时机**：模块被导入时创建
- **销毁时机**：程序退出时销毁
- **包含内容**：模块顶层定义的变量、函数、类、导入的模块等
- **特点**：每个模块有自己独立的全局命名空间，不同模块之间互不干扰

```python
# 查看当前模块的全局命名空间（部分内容）
print(globals().keys())  # 输出包含 '__name__', '__doc__', 'global_var' 等键
```

### 内建命名空间（Built-in Namespace）

- **对应作用域**：内建作用域
- **创建时机**：Python 解释器启动时创建
- **销毁时机**：Python 解释器退出时销毁
- **包含内容**：Python 内置的函数（如 `len()`、`print()`）、异常（如 `NameError`）、常量（如 `True`、`False`）等
- **特点**：所有模块共享同一个内建命名空间

内建命名空间实际上是 `__builtins__` 模块的命名空间。在全局作用域中，`__builtins__` 是 `builtins` 模块的引用；在函数内部，`__builtins__` 是一个字典，包含所有内置函数和变量。

```python
# 全局作用域中 __builtins__ 是模块
print(__builtins__)  # 输出：<module 'builtins' (built-in)>
# 查看内建命名空间的内容
print(dir(__builtins__))  # 输出所有内置函数和变量的列表

# 函数内部 __builtins__ 是字典
def func():
    print(type(__builtins__))  # 输出：<class 'dict'>

func()
```

### 命名空间的查找顺序（LEGB 规则的本质）

当引用一个变量时，Python 会按照以下顺序**依次查找四个命名空间**，找到第一个匹配的变量后立即停止。如果四个命名空间都没有找到该变量，Python 会抛出 `NameError` 异常。

1. 局部命名空间
2. 外层嵌套命名空间
3. 全局命名空间
4. 内建命名空间

```python
x = "全局"  # 全局命名空间

def outer():
    x = "外层"  # 外层命名空间
    
    def inner():
        x = "局部"  # 局部命名空间
        print(x)  # 查找顺序：局部 → 找到 "局部"
    
    inner()

outer()  # 输出：局部
```

### 命名空间的访问与操作

Python 提供了三个内置函数，用于访问和操作命名空间：

#### globals 函数

`globals()`：返回当前所有全局命名空间的字典（键值对）。Python 的命名空间是**动态的**，可以运行时通过该字典动态添加、修改、删除全局变量。

```python
# 添加全局变量
globals()["new_var"] = "我是动态添加的全局变量"
print(new_var)  # 输出：我是动态添加的全局变量
# 修改全局变量
globals()["new_var"] = 100
print(new_var)  # 输出：100
# 删除全局变量
del globals()["new_var"]
# print(new_var)  # 报错：NameError

# 动态添加实例属性
class Person:
    pass

p = Person()
p.name = "张三"  # 动态添加到实例的命名空间
print(p.name)  # 输出：张三
```

#### locals 函数

`locals()`：返回当前局部命名空间的字典（键值对）。使用要点：

- 在函数内部调用时返回局部命名空间；
- 在全局作用域调用时与 `globals()` 完全相同；
- **修改该字典不会影响实际的局部变量**（Python 解释器的优化机制）。

```python
def func():
    a = 1
    local_dict = locals()
    local_dict["a"] = 100  # 尝试修改局部变量
    print(a)  # 输出：1（实际局部变量未被修改）

func()
```

#### vars 函数

- `vars([object])`：返回对象的命名空间字典。
    - 参数 `object`：可选，任意对象；如果不提供，等价于 `locals()`。
    - 返回值：对象的 `__dict__` 属性（命名空间字典）。
    - 使用要点：
        - 对于模块、类、实例等有 `__dict__` 属性的对象，返回其 `__dict__`；
        - 对于没有 `__dict__` 属性的对象（如 int、str），会抛出 `TypeError`。

```python
# 1. 不提供参数：等价于 locals()
print(vars() is locals())  # 输出：True

# 2. 模块对象
import math
print(vars(math)["pi"])  # 输出：3.141592653589793

# 3. 类对象
class MyClass:
    class_var = 10

print(vars(MyClass)["class_var"])  # 输出：10

# 4. 实例对象
obj = MyClass()
obj.instance_var = 20
print(vars(obj))  # 输出：{'instance_var': 20}
```

### 其他命名空间

#### 包命名空间

Python 的包（Package）也有自己的命名空间，对应包的 `__init__.py` 文件的全局命名空间。当导入包时，包的命名空间会被创建，包中的模块和子包会成为包命名空间的属性。

```python
# 导入包
import numpy as np

# 访问包命名空间中的模块
print(np.array)  # 输出：<built-in function array>
```

#### 类与实例的命名空间

- 类有自己的命名空间（`类名.__dict__`），存储类属性和方法。
- 每个实例有自己的命名空间（`实例名.__dict__`），存储实例属性。

当访问实例的属性时，会先查找实例的命名空间，再查找类的命名空间。

```python
class MyClass:
    class_var = "类变量"
    
    def __init__(self):
        self.instance_var = "实例变量"

obj = MyClass()

# 实例命名空间
print(vars(obj))  # 输出：{'instance_var': '实例变量'}

# 类命名空间
print(vars(MyClass))  # 输出包含 'class_var', '__init__' 等键
```

## 命名空间与作用域小结

### 作用域与命名空间的关系

- 作用域是变量的**可访问范围**。
- 命名空间（Namespace）是**存储变量名与对象映射关系的字典**。

两者是**一一对应**的关系：每个作用域都有一个独立的命名空间，变量的查找本质上是在对应命名空间的字典中查找键值对。

### 作用域与命名空间的对比

命名空间与作用域是最容易混淆的两个概念，必须明确区分：

| 维度     | 命名空间（Namespace）                                        | 作用域（Scope）                   |
| -------- | ------------------------------------------------------------ | --------------------------------- |
| 定义     | 存储变量名与对象映射关系的**字典**                           | 变量的**可访问范围**              |
| 本质     | 数据结构（dict）                                             | 语法规则                          |
| 关注点   | 变量名与对象的映射                                           | 变量的可见性                      |
| 数量     | 程序运行时可以有多个命名空间（每个函数调用一个局部命名空间） | 同一时间只有四个作用域（L/E/G/B） |
| 生命周期 | 随函数调用/模块导入创建，随执行结束/程序退出销毁             | 由代码的语法结构决定，静态存在    |
| 关系     | 每个作用域对应一个命名空间                                   | 作用域规定了可以访问哪些命名空间  |

**通俗对比**：

- 命名空间 = 装着变量的“盒子”，每个盒子有自己的标签。
- 作用域 = 能打开哪些盒子的“权限”。

当要找一个变量时，会按照权限顺序打开盒子查找。

### 全局变量与局部变量注意事项

1. 函数**外部永远无法访问**函数内的局部变量，强行调用直接报 `NameError`
2. 仅读取全局变量，**不用加 `global` **；只要要修改，**必须加 `global` **
3. 开发建议：尽量少定义全局变量，容易造成数据污染、代码可读性变差
4. 函数的形参、函数内直接赋值的变量，天生就是局部变量
