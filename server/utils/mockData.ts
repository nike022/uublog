// 模拟数据 - 用于演示
export const mockPosts = [
  {
    id: 1,
    title: 'ESA Blog Pro - 现代化博客系统',
    slug: 'esa-blog-pro-introduction',
    content: '# ESA Blog Pro\n\n基于阿里云 ESA Pages 和 Nuxt 3 构建的现代化博客系统。\n\n## 特性\n\n- 🚀 边缘计算加速\n- 📝 Markdown 编辑器\n- 🎨 深色模式支持\n- 📱 响应式设计',
    excerpt: '基于阿里云 ESA Pages 和 Nuxt 3 构建的现代化博客系统,支持边缘计算加速、Markdown 编辑、深色模式等特性。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 1,
    category_name: '技术',
    status: 'published',
    view_count: 128,
    published_at: '2026-01-18T10:00:00Z',
    created_at: '2026-01-18T10:00:00Z'
  },
  {
    id: 2,
    title: 'Nuxt 3 全栈开发实践',
    slug: 'nuxt3-fullstack-practice',
    content: '# Nuxt 3 全栈开发\n\nNuxt 3 提供了完整的全栈开发能力,包括服务端 API、数据库集成、边缘部署等。',
    excerpt: '探索 Nuxt 3 的全栈开发能力,从服务端 API 到边缘部署的完整实践。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 1,
    category_name: '技术',
    status: 'published',
    view_count: 95,
    published_at: '2026-01-17T15:30:00Z',
    created_at: '2026-01-17T15:30:00Z'
  },
  {
    id: 3,
    title: 'Vditor - 强大的 Markdown 编辑器',
    slug: 'vditor-markdown-editor',
    content: '# Vditor 编辑器\n\nVditor 是一款功能强大的 Markdown 编辑器,支持所见即所得、即时渲染、代码高亮等特性。',
    excerpt: 'Vditor 是一款功能强大的 Markdown 编辑器,为内容创作提供极致体验。',
    author_id: 1,
    author_name: 'Admin',
    category_id: 2,
    category_name: '教程',
    status: 'published',
    view_count: 67,
    published_at: '2026-01-16T09:15:00Z',
    created_at: '2026-01-16T09:15:00Z'
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
