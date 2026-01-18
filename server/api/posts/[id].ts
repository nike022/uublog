import { mockPosts, mockTags } from '~/server/utils/mockData'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const method = event.method

  // 获取单篇文章
  if (method === 'GET') {
    const post = mockPosts.find(p => p.id === Number(id))

    if (!post) {
      throw createError({
        statusCode: 404,
        message: '文章不存在'
      })
    }

    return { ...post, tags: mockTags }
  }

  // 更新文章
  if (method === 'PUT') {
    await readBody(event)
    return { message: '文章更新成功 (演示模式)' }
  }

  // 删除文章
  if (method === 'DELETE') {
    return { message: '文章删除成功 (演示模式)' }
  }

  return { error: 'Method not allowed' }
})
