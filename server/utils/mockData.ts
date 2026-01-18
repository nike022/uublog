// 模拟数据 - 用于演示
export const mockPosts = [
  {
    id: 1,
    title: 'ESA Blog Pro - 现代化博客系统',
    slug: 'esa-blog-pro-introduction',
    content: `# ESA Blog Pro

基于阿里云 ESA Pages 和 Nuxt 3 构建的现代化博客系统。

## 核心特性

- 🚀 **边缘计算加速** - 利用阿里云ESA全球边缘节点，实现超低延迟访问
- 📝 **Vditor编辑器** - 所见即所得的Markdown编辑体验
- 🎨 **深色模式** - 自动适配系统主题，保护眼睛
- 📱 **响应式设计** - 完美适配各种设备屏幕

## 技术架构

\`\`\`javascript
// Nuxt 3 + Nitro 边缘函数
export default defineEventHandler(async (event) => {
  const posts = await fetchPosts()
  return posts
})
\`\`\`

## 性能优化

通过使用 Cloudflare Pages 兼容模式，所有API响应时间控制在 **50ms** 以内。

> 💡 提示：本项目完全适配ESA Pages的100ms边缘函数限制。`,
    excerpt: '基于阿里云 ESA Pages 和 Nuxt 3 构建的现代化博客系统,支持边缘计算加速、Markdown 编辑、深色模式等特性。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 1,
    category_name: '技术',
    status: 'published',
    view_count: 256,
    published_at: '2026-01-18T10:00:00Z',
    created_at: '2026-01-18T10:00:00Z'
  },
  {
    id: 2,
    title: 'Nuxt 3 全栈开发实践指南',
    slug: 'nuxt3-fullstack-practice',
    content: `# Nuxt 3 全栈开发实践

Nuxt 3 提供了完整的全栈开发能力，让你可以用一套代码构建前后端。

## 服务端API

在 \`server/api\` 目录下创建API路由：

\`\`\`typescript
// server/api/posts/index.ts
export default defineEventHandler(async (event) => {
  const posts = await db.query('SELECT * FROM posts')
  return posts
})
\`\`\`

## 前端调用

使用 \`$fetch\` 或 \`useFetch\` 调用API：

\`\`\`vue
<script setup>
const { data: posts } = await useFetch('/api/posts')
</script>
\`\`\`

## 部署选项

| 平台 | 特点 | 适用场景 |
|------|------|----------|
| ESA Pages | 边缘计算 | 全球加速 |
| Vercel | 零配置 | 快速部署 |
| Cloudflare | Workers | 边缘函数 |

## 最佳实践

1. **使用TypeScript** - 提供类型安全
2. **组件化开发** - 提高代码复用性
3. **性能优化** - 利用SSR和边缘缓存
4. **安全防护** - 输入验证和XSS防护`,
    excerpt: '探索 Nuxt 3 的全栈开发能力,从服务端 API 到边缘部署的完整实践指南。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 1,
    category_name: '技术',
    status: 'published',
    view_count: 189,
    published_at: '2026-01-17T15:30:00Z',
    created_at: '2026-01-17T15:30:00Z'
  },
  {
    id: 3,
    title: 'Vditor - 强大的 Markdown 编辑器',
    slug: 'vditor-markdown-editor',
    content: `# Vditor 编辑器完全指南

Vditor 是一款功能强大的 Markdown 编辑器，支持所见即所得、即时渲染、代码高亮等特性。

## 主要功能

### 1. 所见即所得

支持三种编辑模式：
- **所见即所得** (WYSIWYG)
- **即时渲染** (IR)
- **分屏预览** (SV)

### 2. 代码高亮

\`\`\`python
def hello_world():
    print("Hello, ESA Blog Pro!")
    return True
\`\`\`

### 3. 数学公式

支持 LaTeX 数学公式渲染（需要配置）。

### 4. 图表支持

支持 Mermaid 流程图、时序图等。

## 集成方法

\`\`\`bash
npm install vditor
\`\`\`

\`\`\`javascript
import Vditor from 'vditor'
import 'vditor/dist/index.css'

const vditor = new Vditor('vditor', {
  height: 360,
  toolbarConfig: {
    pin: true,
  },
  cache: {
    enable: false,
  }
})
\`\`\`

## 使用技巧

> **提示**: 使用快捷键可以大幅提升编辑效率
> - \`Ctrl + B\`: 加粗
> - \`Ctrl + I\`: 斜体
> - \`Ctrl + K\`: 插入链接`,
    excerpt: 'Vditor 是一款功能强大的 Markdown 编辑器,为内容创作提供极致体验。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 2,
    category_name: '教程',
    status: 'published',
    view_count: 142,
    published_at: '2026-01-16T09:15:00Z',
    created_at: '2026-01-16T09:15:00Z'
  },
  {
    id: 4,
    title: '边缘计算：下一代Web应用的基础设施',
    slug: 'edge-computing-future',
    content: `# 边缘计算：下一代Web应用的基础设施

边缘计算将计算能力推向网络边缘，为用户提供更快的响应速度。

## 什么是边缘计算？

边缘计算是一种分布式计算架构，将数据处理和存储放在靠近数据源的位置。

### 核心优势

1. **超低延迟** - 就近处理，响应时间<50ms
2. **全球加速** - 利用全球CDN节点
3. **高可用性** - 分布式架构，单点故障不影响全局
4. **成本优化** - 减少回源流量

## ESA Pages 边缘函数

阿里云ESA Pages提供强大的边缘函数能力：

\`\`\`javascript
// 边缘函数示例
export default {
  async fetch(request) {
    const url = new URL(request.url)

    // 边缘缓存
    const cache = caches.default
    let response = await cache.match(request)

    if (!response) {
      response = await fetch(request)
      await cache.put(request, response.clone())
    }

    return response
  }
}
\`\`\`

## 应用场景

- 🌐 **全球化应用** - 为全球用户提供一致的低延迟体验
- 🛡️ **安全防护** - 在边缘层面进行DDoS防护和WAF
- 🎯 **个性化内容** - 基于地理位置的内容分发
- 📊 **实时分析** - 边缘数据聚合和分析

## 技术挑战

### 1. 执行时间限制

边缘函数通常有严格的执行时间限制（如ESA Pages的100ms）。

**解决方案**：
- 使用内存缓存
- 优化算法复杂度
- 异步处理耗时操作

### 2. 无状态特性

边缘函数是无状态的，每次请求都是独立的执行环境。

**解决方案**：
- 使用边缘KV存储
- 利用CDN缓存
- 设计无状态API

## 未来展望

边缘计算将成为Web应用的标准基础设施，为用户提供更快、更安全、更可靠的服务。`,
    excerpt: '深入探讨边缘计算的原理、优势和应用场景，以及如何利用ESA Pages构建高性能Web应用。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 1,
    category_name: '技术',
    status: 'published',
    view_count: 203,
    published_at: '2026-01-15T14:20:00Z',
    created_at: '2026-01-15T14:20:00Z'
  },
  {
    id: 5,
    title: 'Tailwind CSS 实战技巧',
    slug: 'tailwind-css-tips',
    content: `# Tailwind CSS 实战技巧

Tailwind CSS 是一个功能类优先的 CSS 框架，让你无需离开 HTML 就能快速构建现代化界面。

## 为什么选择 Tailwind？

### 传统CSS的问题

\`\`\`css
/* 传统方式 */
.button {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
\`\`\`

### Tailwind方式

\`\`\`html
<!-- Tailwind方式 -->
<button class="bg-blue-500 text-white px-4 py-2 rounded-md">
  按钮
</button>
\`\`\`

## 常用技巧

### 1. 响应式设计

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  响应式容器
</div>
\`\`\`

### 2. 深色模式

\`\`\`html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  自动适配深色模式
</div>
\`\`\`

### 3. 悬停效果

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 transition">
  悬停变色
</button>
\`\`\`

## 性能优化

Tailwind CSS 使用 PurgeCSS 自动移除未使用的样式：

\`\`\`javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}',
  ],
}
\`\`\`

## 最佳实践

1. **使用 @apply 提取重复样式**
2. **配置自定义颜色和间距**
3. **利用 JIT 模式提升开发体验**
4. **组件化复用样式**`,
    excerpt: '掌握 Tailwind CSS 的实战技巧，快速构建现代化、响应式的用户界面。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 2,
    category_name: '教程',
    status: 'published',
    view_count: 167,
    published_at: '2026-01-14T11:45:00Z',
    created_at: '2026-01-14T11:45:00Z'
  },
  {
    id: 6,
    title: 'Vue 3 Composition API 深度解析',
    slug: 'vue3-composition-api',
    content: `# Vue 3 Composition API 深度解析

Composition API 是 Vue 3 最重要的新特性，提供了更灵活的代码组织方式。

## 为什么需要 Composition API？

### Options API 的局限

\`\`\`javascript
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
\`\`\`

### Composition API 的优势

\`\`\`javascript
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => count.value++

    return { count, increment }
  }
}
\`\`\`

## 核心API

### 1. ref 和 reactive

\`\`\`javascript
import { ref, reactive } from 'vue'

// ref - 基本类型
const count = ref(0)
count.value++

// reactive - 对象类型
const state = reactive({
  count: 0,
  name: 'Vue'
})
state.count++
\`\`\`

### 2. computed

\`\`\`javascript
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)
\`\`\`

### 3. watch 和 watchEffect

\`\`\`javascript
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

// watch - 明确指定监听源
watch(count, (newVal, oldVal) => {
  console.log(\`count changed from \${oldVal} to \${newVal}\`)
})

// watchEffect - 自动追踪依赖
watchEffect(() => {
  console.log(\`count is \${count.value}\`)
})
\`\`\`

## 组合式函数 (Composables)

\`\`\`javascript
// useCounter.js
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement }
}

// 使用
import { useCounter } from './useCounter'

const { count, increment } = useCounter()
\`\`\`

## 最佳实践

1. **逻辑复用** - 使用组合式函数
2. **类型安全** - 配合 TypeScript
3. **性能优化** - 合理使用 computed 和 watch
4. **代码组织** - 按功能而非选项组织代码`,
    excerpt: '深入理解 Vue 3 Composition API，掌握现代化的 Vue 开发方式。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 1,
    category_name: '技术',
    status: 'published',
    view_count: 198,
    published_at: '2026-01-13T16:30:00Z',
    created_at: '2026-01-13T16:30:00Z'
  }
]

export const mockCategories = [
  { id: 1, name: '技术', slug: 'tech', description: '技术相关文章' },
  { id: 2, name: '教程', slug: 'tutorial', description: '教程文章' },
  { id: 3, name: '生活', slug: 'life', description: '生活随笔' }
]

export const mockTags = [
  { id: 1, name: 'Vue', slug: 'vue' },
  { id: 2, name: 'Nuxt', slug: 'nuxt' },
  { id: 3, name: 'JavaScript', slug: 'javascript' }
]

export const mockUser = {
  id: 1,
  username: 'admin',
  email: 'admin@example.com',
  password: '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', // admin123
  role: 'admin'
}
