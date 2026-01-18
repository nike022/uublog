import { mockTags } from '~/server/utils/mockData'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const method = event.method

  // 更新标签
  if (method === 'PUT') {
    await readBody(event)
    return { message: '标签更新成功 (演示模式)' }
  }

  // 删除标签
  if (method === 'DELETE') {
    return { message: '标签删除成功 (演示模式)' }
  }

  return { error: 'Method not allowed' }
})
