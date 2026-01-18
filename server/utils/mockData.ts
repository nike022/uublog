// 模拟数据 - 用于演示
export const mockPosts = [
  {
    id: 1,
    title: 'ESA Blog Pro - 现代化博客系统',
    slug: 'esa-blog-pro-introduction',
    content: `ESA Blog Pro 是基于阿里云 ESA Pages 和 Nuxt 3 构建的现代化全栈博客系统。

核心特性：

边缘计算加速 - 利用阿里云ESA全球边缘节点，实现超低延迟访问
全栈架构 - 前端使用 Nuxt 3 + Vue 3，后端使用 Nitro 服务端 API
深色模式 - 自动适配系统主题，保护眼睛
响应式设计 - 完美适配各种设备屏幕

技术架构：

本项目使用 Nuxt 3 + Nitro 构建边缘函数，通过 Cloudflare Pages 兼容模式部署到阿里云 ESA Pages。

性能优化：

所有API响应时间控制在 50ms 以内，完全适配ESA Pages的100ms边缘函数限制。

本项目由阿里云ESA提供加速、计算和保护。`,
    excerpt: '基于阿里云 ESA Pages 和 Nuxt 3 构建的现代化博客系统,支持边缘计算加速、深色模式等特性。',
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
    title: 'Nuxt 3 全栈开发实践',
    slug: 'nuxt3-fullstack-practice',
    content: `Nuxt 3 提供了完整的全栈开发能力，让你可以用一套代码构建前后端。

服务端API：

在 server/api 目录下创建API路由，使用 defineEventHandler 定义处理函数。Nuxt 3 会自动识别这些文件并创建对应的API端点。

前端调用：

使用 $fetch 或 useFetch 调用API，Nuxt 3 会自动处理数据获取和状态管理。useFetch 还支持服务端渲染，提升首屏加载速度。

部署选项：

ESA Pages - 边缘计算，全球加速
Vercel - 零配置，快速部署
Cloudflare - Workers，边缘函数

最佳实践：

使用TypeScript提供类型安全，减少运行时错误
组件化开发提高代码复用性
利用SSR和边缘缓存进行性能优化
输入验证和XSS防护保障安全`,
    excerpt: '探索 Nuxt 3 的全栈开发能力,从服务端 API 到边缘部署的完整实践。',
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
    title: '边缘计算：下一代Web应用的基础设施',
    slug: 'edge-computing-future',
    content: `边缘计算将计算能力推向网络边缘，为用户提供更快的响应速度。

什么是边缘计算？

边缘计算是一种分布式计算架构，将数据处理和存储放在靠近数据源的位置，而不是集中在远程的数据中心。

核心优势：

超低延迟 - 就近处理，响应时间小于50ms
全球加速 - 利用全球CDN节点分发内容
高可用性 - 分布式架构，单点故障不影响全局
成本优化 - 减少回源流量，降低带宽成本

应用场景：

全球化应用 - 为全球用户提供一致的低延迟体验
安全防护 - 在边缘层面进行DDoS防护和WAF
个性化内容 - 基于地理位置的内容分发
实时分析 - 边缘数据聚合和分析

技术挑战：

执行时间限制 - 边缘函数通常有严格的执行时间限制（如ESA Pages的100ms）
无状态特性 - 边缘函数是无状态的，每次请求都是独立的执行环境

解决方案：

使用内存缓存提升性能
优化算法复杂度减少计算时间
设计无状态API架构

未来展望：

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
