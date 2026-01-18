import { mockCategories } from '~/server/utils/mockData'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const method = event.method

  // 创建分类
  if (method === 'POST') {
    await readBody(event)
    return { message: '分类创建成功 (演示模式)' }
  }

  // 更新分类
  if (method === 'PUT') {
    await readBody(event)
    return { message: '分类更新成功 (演示模式)' }
  }

  // 删除分类
  if (method === 'DELETE') {
    return { message: '分类删除成功 (演示模式)' }
  }

  return { error: 'Method not allowed' }
})
