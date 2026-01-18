import { mockUser } from '~/server/utils/mockData'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: '用户名和密码不能为空'
    })
  }

  // 演示模式：直接比较密码
  if (username !== mockUser.username || password !== 'admin123') {
    throw createError({
      statusCode: 401,
      message: '用户名或密码错误'
    })
  }

  return {
    id: mockUser.id,
    username: mockUser.username,
    email: mockUser.email,
    role: mockUser.role
  }
})
