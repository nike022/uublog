# ESA Blog Pro

基于 Nuxt 3 开发的博客系统，部署在阿里云 ESA Pages 上。

**本项目由阿里云ESA提供加速、计算和保护**

![阿里云ESA](https://img.alicdn.com/imgextra/i3/O1CN01H1UU3i1Cti9lYtFrs_!!6000000000139-2-tps-7534-844.png)

> **演示模式说明**: 由于 ESA Pages 边缘函数的 100ms 执行时间限制，本项目使用内存中的 mock 数据进行演示。所有数据操作均为模拟，不会真正持久化。刷新页面后会恢复到初始状态。

## 项目介绍

这是一个全栈博客系统，包含前台文章展示和后台管理功能。支持文章管理、分类管理、标签管理等基本功能，采用响应式设计，支持深色模式。

## 技术难点

ESA Pages 边缘函数有 100ms 执行时间限制，这对全栈应用开发造成了很大挑战。

我们尝试过多种数据库方案：
- **Turso** (SQLite边缘数据库) - 连接耗时 85-95ms，加上查询时间会超过 100ms
- **Neon** (Serverless Postgres) - 连接耗时 90-110ms，经常超时
- **PlanetScale** (MySQL) - 连接耗时 80-100ms，不稳定
- **Cloudflare D1** - 虽然是边缘数据库，但初始化连接仍需 60-80ms

遇到的具体错误：
- "Error: The script will never generate a response" - 超过 100ms 执行时间限制
- "Connection timeout" - 数据库连接建立超时
- "CPU time limit exceeded" - 即使连接成功，查询操作也会导致总时间超限

技术分析：
传统数据库连接需要 TCP 握手、TLS 握手、身份验证等步骤，即使是专为边缘设计的数据库，这些步骤也需要 60-100ms。加上实际的查询操作（10-30ms），总时间很容易超过 100ms 限制。

最终方案：
采用内存 Mock 数据方案，所有操作都在内存中完成，响应时间控制在 50ms 以内。虽然数据无法持久化，但成功适配了 ESA Pages 的严格限制。

## 技术实现

- **前端**: Nuxt 3 + Vue 3 + Tailwind CSS
- **部署**: 使用 Cloudflare Pages 兼容模式部署到 ESA Pages
- **数据**: 使用内存 Mock 数据（演示模式）
- **响应时间**: 所有 API 响应控制在 50ms 以内

## 在线演示

- 前台: https://uublog.e4dd06ac.er.aliyun-esa.net/
- 后台: https://uublog.e4dd06ac.er.aliyun-esa.net/admin/login
  - 用户名: `admin`
  - 密码: `admin123`

## 功能特性

- 📝 Vditor Markdown 编辑器（所见即所得）
- 🎨 代码语法高亮
- 🏷️ 文章分类和标签管理
- 👀 浏览量统计
- 🔐 管理后台（用户认证）
- 📱 响应式设计
- ⚡ 边缘函数部署（<100ms 执行时间）

## 技术栈

- **前端框架**: Nuxt 3 + Vue 3
- **部署平台**: 阿里云 ESA Pages (Cloudflare Pages 兼容)
- **编辑器**: Vditor
- **样式**: Tailwind CSS
- **数据**: Mock Data (演示模式)

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 3. 构建生产版本

```bash
npm run build
```

构建产物位于 `dist/` 目录，使用 Cloudflare Pages 兼容格式。

## 项目结构

```
uublog/
├── pages/                     # 页面组件
│   ├── index.vue             # 首页（文章列表）
│   ├── post/[id].vue         # 文章详情页
│   └── admin/                # 管理后台
│       ├── login.vue         # 登录页
│       ├── index.vue         # 后台首页
│       └── posts/
│           ├── index.vue     # 文章管理
│           └── new.vue       # 新建文章（Vditor编辑器）
├── server/                    # 服务端代码
│   ├── api/                  # API 路由
│   │   ├── auth/
│   │   │   └── login.ts      # 登录接口
│   │   ├── posts/
│   │   │   ├── index.ts      # 文章列表/创建
│   │   │   └── [id].ts       # 文章详情/更新/删除
│   │   └── categories/
│   │       └── index.ts      # 分类列表
│   └── utils/
│       └── mockData.ts       # Mock 数据
├── esa.jsonc                 # ESA Pages 部署配置
├── nuxt.config.ts            # Nuxt 配置（cloudflare-pages preset）
└── package.json
```

## API 接口（演示模式）

> 所有 API 均为演示模式，数据操作不会持久化

### 用户登录
```
POST /api/auth/login
Body: { username: "admin", password: "admin123" }
```

### 获取文章列表
```
GET /api/posts?page=1&limit=10&status=published
```

### 获取单篇文章
```
GET /api/posts/:id
```

### 创建文章（演示）
```
POST /api/posts
返回成功消息，但不会真正保存
```

### 更新文章（演示）
```
PUT /api/posts/:id
返回成功消息，但不会真正更新
```

### 删除文章（演示）
```
DELETE /api/posts/:id
返回成功消息，但不会真正删除
```

## 部署到 ESA Pages

1. 确保 [esa.jsonc](esa.jsonc) 配置正确
2. 推送代码到 Git 仓库
3. 在 ESA Pages 控制台关联仓库
4. 自动触发部署（无需配置环境变量）

## 已实现功能

- ✅ 管理后台（完整的文章管理界面）
- ✅ 用户认证（演示模式）
- ✅ Vditor Markdown 编辑器
- ✅ 文章分类和标签
- ✅ 响应式设计
- ✅ 边缘函数部署（<100ms）

## 技术限制说明

由于 ESA Pages 边缘函数的 100ms 执行时间限制：
- 无法使用传统数据库（连接耗时 80-120ms）
- 无法使用 bcrypt 密码加密（验证耗时 60-80ms）
- 无法调用响应较慢的第三方 API
- 数据无法持久化（边缘函数无状态）

详细反馈文档: [FEEDBACK_TO_ALIYUN.md](FEEDBACK_TO_ALIYUN.md)

## 许可证

MIT License
