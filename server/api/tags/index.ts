import { mockTags } from '~/server/utils/mockData'

export default defineEventHandler(async (event) => {
  const method = event.method

  // 获取标签列表
  if (method === 'GET') {
    return mockTags
  }

  // 创建标签
  if (method === 'POST') {
    await readBody(event)
    return { message: '标签创建成功 (演示模式)' }
  }

  return { error: 'Method not allowed' }
})
