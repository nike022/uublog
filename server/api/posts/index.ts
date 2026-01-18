import { mockPosts } from '~/server/utils/mockData'

export default defineEventHandler(async (event) => {
  const method = event.method

  // 获取文章列表
  if (method === 'GET') {
    const { page = 1, limit = 10, status = 'published' } = getQuery(event)

    // 使用模拟数据
    const filteredPosts = status === 'all'
      ? mockPosts
      : mockPosts.filter(p => p.status === status)

    return {
      posts: filteredPosts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: filteredPosts.length
      }
    }
  }

  // 创建文章 (演示版本返回成功)
  if (method === 'POST') {
    const body = await readBody(event)
    return {
      id: mockPosts.length + 1,
      message: '文章创建成功 (演示模式)'
    }
  }

  return { error: 'Method not allowed' }
})
