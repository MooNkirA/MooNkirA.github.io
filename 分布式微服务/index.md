# 分布式微服务

分布式系统与微服务架构体系，涵盖 Spring Boot、Spring Cloud、Dubbo、消息队列、分布式事务等。

## 系统架构

- [系统架构 - 基础](系统架构/架构-基础)
- [系统架构 - 缓存](系统架构/架构-缓存)
- [系统架构 - 负载均衡](系统架构/架构-负载均衡)
- [系统架构 - 服务容错](系统架构/架构-服务容错)
- [系统架构 - 全局唯一 ID 及方案](系统架构/架构-全局唯一ID)
- [系统架构 - 分布式锁及实现方案](系统架构/架构-分布式锁)

## Spring Boot

- [Spring Boot 基础使用篇](SpringBoot/Spring-Boot-基础篇)
- [Spring Boot 注解汇总](SpringBoot/Spring-Boot-注解汇总)
- [Spring Boot 项目部署运维篇](SpringBoot/Spring-Boot-部署运维篇)
- [Spring Boot 源码分析](SpringBoot/Spring-Boot-源码分析)
- [Spring Boot 测试与 JUnit](SpringBoot/Spring-Boot-Testing)
- [Spring Boot 整合 Servlet、Filter、Listener](SpringBoot/Spring-Boot-Servlet、Filter、Listener)
- [Spring Boot 关系型数据库技术](SpringBoot/Spring-Boot-SQL-Databases)
- [Spring Boot Actuator 监控](SpringBoot/Spring-Boot-Actuator)
- [Spring Boot 整合 Redis](SpringBoot/Spring-Boot-Redis)
- [Spring Boot 整合 MongoDB](SpringBoot/Spring-Boot-MongoDB)
- [Spring Boot 整合 Elasticsearch](SpringBoot/Spring-Boot-Elasticsearch)
- [Spring Boot 实现缓存功能](SpringBoot/Spring-Boot-Caching)
- [Spring Boot Validation 参数校验](SpringBoot/Spring-Boot-Validation)
- [Spring Boot 发送邮件](SpringBoot/Spring-Boot-Email)
- [Spring Boot 定时任务调度](SpringBoot/Spring-Boot-Task-Scheduling)
- [Spring Boot 消息系统](SpringBoot/Spring-Boot-Messaging)
- [Spring Boot 整合 FreeMarker](SpringBoot/Spring-Boot-FreeMarker)
- [Spring Boot 整合 Solr](SpringBoot/Spring-Boot-Solr)
- [Spring Boot 整合 Spring Cloud](SpringBoot/Spring-Boot-Spring-Cloud)
- [Spring Boot 通用配置项汇总](SpringBoot/Spring-Boot-Application-Properties)
- [Spring Boot 项目搭建模板与规范](SpringBoot/Spring-Boot-项目搭建模板)

## Spring Cloud

- [Spring Cloud 概述](SpringCloud/Spring-Cloud-Overview)

### Spring Cloud Netflix

- [Spring Cloud Netflix Eureka 服务注册和发现](SpringCloud/Spring-Cloud-Netflix-Eureka)
- [Spring Cloud Netflix Ribbon 负载均衡](SpringCloud/Spring-Cloud-Netflix-Ribbon)
- [Spring Cloud Netflix Hystrix 服务容错](SpringCloud/Spring-Cloud-Netflix-Hystrix)
- [Spring Cloud Netflix Zuul 微服务网关](SpringCloud/Spring-Cloud-Netflix-Zuul)

### Spring Cloud Alibaba

- [Spring Cloud Alibaba 概述](SpringCloud/Spring-Cloud-Alibaba)
- [Spring Cloud Alibaba Nacos 服务注册与配置管理](SpringCloud/Spring-Cloud-Alibaba-Nacos)
- [Spring Cloud Alibaba Sentinel 服务容错](SpringCloud/Spring-Cloud-Alibaba-Sentinel)
- [Spring Cloud Alibaba SMS 阿里云短信服务](SpringCloud/Spring-Cloud-Alibaba-SMS)
- [Spring Cloud Alibaba Seata 分布式事务](SpringCloud/Spring-Cloud-Alibaba-Seata)

### 核心组件

- [Spring Cloud OpenFeign 服务调用](SpringCloud/Spring-Cloud-OpenFeign)
- [Spring Cloud Consul 注册中心](SpringCloud/Spring-Cloud-Consul)
- [Spring Cloud Gateway 服务网关](SpringCloud/Spring-Cloud-Gateway)
- [Spring Cloud Sleuth 链路跟踪](SpringCloud/Spring-Cloud-Sleuth)
- [Spring Cloud Stream 事件驱动消息](SpringCloud/Spring-Cloud-Stream)
- [Spring Cloud Config 分布式配置管理](SpringCloud/Spring-Cloud-Config)
- [Spring Cloud Bus 消息总线](SpringCloud/Spring-Cloud-Bus)
- [Spring Cloud Security 分布式认证授权](SpringCloud/Spring-Cloud-Security)

## Dubbo

- [Dubbo 基础](Dubbo/Dubbo-基础)
- [Dubbo 高级特性与用法](Dubbo/Dubbo-高级功能)
- [Dubbo 注册中心](Dubbo/Dubbo-注册中心)
- [Dubbo Admin 控制台](Dubbo/Dubbo-Admin)
- [Dubbo 源码分析](Dubbo/Dubbo-源码分析)

## 中间件

### 消息中间件

- [消息中间件概述](消息中件间/消息中间件-Overview)
- [ActiveMQ](消息中件间/ActiveMQ)
- [RabbitMQ](消息中件间/RabbitMQ)
- [RocketMQ](消息中件间/RocketMQ)
- [Kafka](消息中件间/Kafka)

### 服务注册中心

- [分布式服务注册中心概述](服务注册中心/分布式服务注册中心-概述)
- [Zookeeper 基础](服务注册中心/Zookeeper-基础)
- [Zookeeper 常用客户端](服务注册中心/Zookeeper-客户端)
- [Zookeeper 应用场景](服务注册中心/Zookeeper-应用场景)

### 配置中心

- [分布式配置中心概述](配置中心/分布式配置中心概述)
- [Apollo 分布式配置中心](配置中心/Apollo)

### ElasticStack

- [ElasticStack 基础笔记](ElasticStack/ElasticStack)
- [ElasticSearch 分布式全文搜索引擎](ElasticStack/ElasticSearch)

### Nginx

- [Nginx 安装部署](Nginx/Nginx-安装部署)
- [Nginx 基础](Nginx/Nginx-基础)

## 分布式专题

### 分布式事务

- [分布式事务基础理论](分布式事务/分布式事务基础理论)
- [Seata - 2PC 分布式事务解决方案](分布式事务/Seata-2PC分布式事务解决方案)
- [Hmily - TCC 分布式事务解决方案](分布式事务/Hmily-TCC分布式事务解决方案)
- [RocketMQ - 可靠消息最终一致性事务解决方案](分布式事务/RocketMQ-可靠消息最终一致性事务解决方案)

### 任务调度

- [分布式任务调度概述](任务调度/Task-Scheduling)
- [Quartz 开源作业调度框架](任务调度/Quartz)
- [Elastic-Job 分布式调度解决方案](任务调度/ElasticJob)
- [XXL-JOB 分布式任务调度平台](任务调度/XXL-JOB)

### 链路追踪

- [分布式链路追踪综合概述](分布式链路追踪/链路追踪综合概述)
- [Zipkin - 分布式链路调用监控系统](分布式链路追踪/Zipkin)
- [SkyWalking - 分布式链路追踪和可视化一体化解决方案](分布式链路追踪/SkyWalking)

### 微服务监控

- [Prometheus - 系统监控与告警工具](微服务监控/Prometheus)

### 分库分表

- [分库分表综合概述](分库分表/分库分表综合概述)
- [ShardingSphere](分库分表/ShardingSphere)
- [ShardingSphere-JDBC](分库分表/ShardingSphere-JDBC)
- [MyCat2 - 数据库中间件](分库分表/Mycat)

### 分布式文件系统

- [分布式文件系统概述](分布式文件系统/Distributed-File-System-Overview)
- [FastDFS 分布式文件系统](分布式文件系统/FastDFS)
