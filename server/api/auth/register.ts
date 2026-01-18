import { query } from '~/server/utils/db'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const { username, email, password } = await readBody(event)

  if (!username || !email || !password) {
    throw createError({
      statusCode: 400,
      message: '所有字段都是必填的'
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const result = await query(
      'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, 'author']
    ) as any

    return {
      id: result.insertId,
      username,
      email,
      role: 'author'
    }
  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      throw createError({
        statusCode: 409,
        message: '用户名或邮箱已存在'
      })
    }
    throw error
  }
})
