import { query } from '~/server/utils/db'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: '用户名和密码不能为空'
    })
  }

  const [user] = await query(
    'SELECT * FROM users WHERE username = ?',
    [username]
  ) as any

  if (!user) {
    throw createError({
      statusCode: 401,
      message: '用户名或密码错误'
    })
  }

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) {
    throw createError({
      statusCode: 401,
      message: '用户名或密码错误'
    })
  }

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role
  }
})
