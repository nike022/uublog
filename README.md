# ESA Blog Pro

基于阿里云 ESA Pages 的现代化博客系统，使用 Nuxt 3 + TiDB Cloud 构建。

## 功能特性

- 📝 Markdown 文章编辑与渲染
- 🎨 代码语法高亮
- 🏷️ 文章分类和标签
- 👀 浏览量统计
- 🌓 深色模式支持
- 📱 响应式设计

## 技术栈

- **前端框架**: Nuxt 3 + Vue 3
- **数据库**: TiDB Cloud (MySQL 兼容)
- **Markdown**: marked.js
- **代码高亮**: highlight.js
- **样式**: Tailwind CSS

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置数据库

复制 `.env.example` 为 `.env` 并填入 TiDB Cloud 连接信息:

```bash
cp .env.example .env
```

编辑 `.env` 文件:

```env
DATABASE_HOST=your-tidb-host.com
DATABASE_PORT=4000
DATABASE_USER=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=esa_blog
```

### 3. 初始化数据库

在 TiDB Cloud 控制台执行 `server/database/schema.sql` 中的 SQL 语句。

### 4. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 5. 构建生产版本

```bash
npm run build
```

## 项目结构

```
esa-blog-pro/
├── pages/                  # 页面组件
│   ├── index.vue          # 首页（文章列表）
│   └── post/
│       └── [id].vue       # 文章详情页
├── server/                 # 服务端代码
│   ├── api/               # API 路由
│   │   └── posts/         # 文章相关 API
│   ├── database/          # 数据库相关
│   │   └── schema.sql     # 数据库表结构
│   └── utils/
│       └── db.ts          # 数据库连接工具
├── .env.example           # 环境变量示例
└── package.json

```

## API 接口

### 获取文章列表
```
GET /api/posts?page=1&limit=10&status=published
```

### 获取单篇文章
```
GET /api/posts/:id
```

### 创建文章
```
POST /api/posts
```

### 更新文章
```
PUT /api/posts/:id
```

### 删除文章
```
DELETE /api/posts/:id
```

## 部署到 ESA Pages

1. 确保 `esa.jsonc` 配置正确
2. 推送代码到 Git 仓库
3. 在 ESA Pages 控制台关联仓库
4. 配置环境变量
5. 触发部署

## 开发计划

- [ ] 管理后台
- [ ] 用户认证
- [ ] 评论系统
- [ ] 搜索功能
- [ ] RSS 订阅
- [ ] SEO 优化

## 许可证

MIT License
