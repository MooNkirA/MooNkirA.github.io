## Vibe Coding 简介

> Vibe 含义  n.（非正式）感应，氛围；

Vibe Coding，可以简理解为：**用自然语言（人话）和 AI 聊天，让 AI 帮你生成代码、修改代码、优化代码的编程方式**。但真正的 Vibe Coding 不仅仅是让 AI 写几行代码那么简单，而是一种全新的开发思维和工作流程。

Vibe Coding 用正式的语言来解释是：**以自然语言提示驱动大型语言模型（LLM），由 AI 直接生成并迭代代码的意图驱动型开发模式**。在这种模式下：

- 用户负责"想清楚要做什么"（表达意图）
- AI 负责"把它做出来"（实现逻辑）
- 用户与 AI 一起迭代优化（协作进化）

## Vibe Coding 辅助工具

### 数据库服务

对于 Vibe Coding 开发者来说，开发小型项目或者练手的项目时，强烈推荐 [[Supabase]] 作为数据库。它是一个开源的数据库服务，提供了免费额度，而且功能非常强大：

- 提供 PostgreSQL 数据库（功能强大的关系型数据库）
- 内置用户认证功能（注册、登录、密码重置等）
- 提供文件存储功能，可以存图片、视频等
- 实时数据同步，数据变化时自动更新
- 友好的可视化界面，不用写 SQL 也能管理数据

并且 Supabase 的文档非常详细，配合 AI 工具使用特别方便。只需要“Supabase 做一个用户注册功能”一句话，AI 就能写代码完成开发。除了 Supabase，其他一些有免费额度的数据库服务选择：

- PlanetScale：MySQL 数据库
- MongoDBAtlas：NoSQL 数据库

### 代码小抄 - 代码片段管理

> 官网：https://www.codecopy.cn/

这是一个简单易用的代码分享工具，可以快速、跨设备地自由分享代码。完全免费，无论电脑或手机的都有不错的阅读体验。更多优点如下：

- 界面很像常用的代码编辑器，可以新增、删除代码片段
- 支持多种分享范围（公开、加密、仅个人可见）
- 支持多种分享方式（复制链接、QQ 分享、手机扫码、微信小程序等）
- 还有代码库功能，可以查看并学习其他人分享的优质代码
- 支持在线运行代码、AI 智能代码分析和纠错


## AI 编程规范（待整理、移动）

### Spring Boot 项目 CLAUDE.md 模板

`CLAUDE.md` 是每次对话都加载的项目级上下文，配合 Skills 使用效果最佳。

```markdown
# 项目名称

## 技术栈

- Spring Boot 4.x / Java 25
- PostgreSQL + JPA/Hibernate
- Spring Security + JWT
- Redis 缓存
- Docker + Kubernetes

## 关键命令

-`./mvnw spring-boot:run` — 启动开发服务器
-`./mvnw test` — 运行测试
-`./mvnw clean package -DskipTests` — 打包

## 代码规范

- 构造器注入（不用 @Autowired 字段注入）
- Service 层不加 @Transactional（只在需要的方法上加）
- Entity 不直接暴露给 API（用 DTO 转换）
- 日志用 SLF4J，不用 System.out

## Skills

本项目已安装以下 Skills：

- spring-boot-rest-api：REST API 开发
- spring-boot-testing：测试编写
- code-reviewer：代码审查
```

### 推荐的 Spring Boot + Agent Skills 工作流

#### 6.1 标准工作流

```plaintext
1. 探索阶段：让 Agent 读取代码库，理解架构  
2. 规划阶段：使用 /plan 模式，Agent 输出实现方案  
3. 编码阶段：Agent 按规划逐步实现（自动加载匹配的 Skills）  
4. 验证阶段：运行测试，确认通过  
5. 提交阶段：Git commit + push
```

#### 6.2 多 Agent 协作模式

对于复杂 Spring Boot 项目，可以按角色分配不同 Skills：

| Agent 角色 | 职责                     | 推荐 Skill                       |
| ---------- | ------------------------ | -------------------------------- |
| 架构师     | 设计微服务架构、模块拆分 | Java Architect                   |
| 开发者     | 编写具体代码             | Spring Boot Engineer / Dr JSkill |
| 测试工程师 | 编写和运行测试           | TDD Mastery                      |
| 安全审计   | 安全漏洞扫描             | Security Hardening               |
| 代码审查   | 代码质量把关             | Code Reviewer                    |

