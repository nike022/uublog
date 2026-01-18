import { mockUser } from '~/server/utils/mockData'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: '用户名和密码不能为空'
    })
  }

  // 使用模拟用户数据
  if (username !== mockUser.username) {
    throw createError({
      statusCode: 401,
      message: '用户名或密码错误'
    })
  }

  const isValid = await bcrypt.compare(password, mockUser.password)

  if (!isValid) {
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
