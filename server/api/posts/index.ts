import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const method = event.method

  // 获取文章列表
  if (method === 'GET') {
    const { page = 1, limit = 10, status = 'published' } = getQuery(event)
    const offset = (Number(page) - 1) * Number(limit)

    let whereClause = 'WHERE p.status = ?'
    let params: any[] = [status, Number(limit), offset]

    if (status === 'all') {
      whereClause = 'WHERE 1=1'
      params = [Number(limit), offset]
    }

    const posts = await query(
      `SELECT p.*, u.username as author_name, c.name as category_name
       FROM posts p
       LEFT JOIN users u ON p.author_id = u.id
       LEFT JOIN categories c ON p.category_id = c.id
       ${whereClause}
       ORDER BY p.created_at DESC
       LIMIT ? OFFSET ?`,
      params
    )

    const countWhere = status === 'all' ? '' : 'WHERE status = ?'
    const countParams = status === 'all' ? [] : [status]

    const [{ total }] = await query(
      `SELECT COUNT(*) as total FROM posts ${countWhere}`,
      countParams
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
    const { title, slug, content, excerpt, category_id, author_id = 1, status = 'draft' } = body

    const publishedAt = status === 'published' ? new Date() : null

    const result = await query(
      `INSERT INTO posts (title, slug, content, excerpt, category_id, author_id, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, slug, content, excerpt, category_id, author_id, status, publishedAt]
    ) as any

    return {
      id: result.insertId,
      message: '文章创建成功'
    }
  }

  return { error: 'Method not allowed' }
})
