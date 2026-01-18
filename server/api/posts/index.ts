import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method

  // 获取文章列表
  if (method === 'GET') {
    const { page = 1, limit = 10, status = 'published' } = getQuery(event)
    const offset = (Number(page) - 1) * Number(limit)

    const posts = await query(
      `SELECT p.*, u.username as author_name, c.name as category_name
       FROM posts p
       LEFT JOIN users u ON p.author_id = u.id
       LEFT JOIN categories c ON p.category_id = c.id
       WHERE p.status = ?
       ORDER BY p.published_at DESC
       LIMIT ? OFFSET ?`,
      [status, Number(limit), offset]
    )

    const [{ total }] = await query(
      'SELECT COUNT(*) as total FROM posts WHERE status = ?',
      [status]
    ) as any

    return {
      posts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total
      }
    }
  }

  // 创建文章
  if (method === 'POST') {
    const body = await readBody(event)
    const { title, slug, content, excerpt, category_id, author_id = 1 } = body

    const result = await query(
      `INSERT INTO posts (title, slug, content, excerpt, category_id, author_id, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, 'published', NOW())`,
      [title, slug, content, excerpt, category_id, author_id]
    ) as any

    return {
      id: result.insertId,
      message: '文章创建成功'
    }
  }

  return { error: 'Method not allowed' }
})
