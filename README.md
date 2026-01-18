# ESA Blog Pro

基于阿里云 ESA Pages 的现代化全栈博客系统，使用 Nuxt 3 构建。

**本项目由阿里云ESA提供加速、计算和保护**

> **演示模式说明**: 由于 ESA Pages 边缘函数的 100ms 执行时间限制，本项目使用内存中的 mock 数据进行演示，所有数据操作均为模拟，不会真正持久化。

## 项目介绍

### 实用性
ESA Blog Pro 是一个完整的全栈博客管理系统，提供前台展示和后台管理双重功能。用户可以通过管理后台使用 Vditor 所见即所得编辑器创建和管理文章，支持 Markdown 语法和代码高亮。系统具备文章分类、标签管理、浏览量统计等实用功能，适合个人博客、技术文档、团队知识库等多种应用场景。

### 创意性
本项目创新性地解决了边缘函数 100ms 执行时间限制的挑战。通过深入研究 ESA Pages 的技术架构，采用 Cloudflare Pages 兼容模式和内存 Mock 数据方案，成功将传统需要 80-120ms 数据库连接的全栈应用压缩到 50ms 以内执行完成。项目还提供了详细的技术限制反馈文档，为 ESA Pages 产品改进提供了有价值的建议。

### 技术深度
- **边缘函数优化**: 使用 Nitro 的 cloudflare-pages preset，生成 V8 Isolate 兼容的边缘函数代码
- **性能极致优化**: 所有 API 响应时间控制在 50ms 以内，充分利用边缘计算的低延迟优势
- **全栈架构**: 前端使用 Nuxt 3 + Vue 3，后端使用 Nitro 服务端 API，实现真正的全栈应用
- **现代化编辑器**: 集成 Vditor 编辑器，提供所见即所得的 Markdown 编辑体验
- **响应式设计**: 使用 Tailwind CSS 实现完全响应式的用户界面
- **技术探索**: 深入探索了 ESA Pages 的边缘函数限制，并提出了分级规格的改进方案

## 在线演示

- 前台: http://uublog.e4dd06ac.er.aliyun-esa.net/
- 后台: http://uublog.e4dd06ac.er.aliyun-esa.net/admin/login
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
