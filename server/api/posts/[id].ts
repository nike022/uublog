import { query } from '~/server/utils/db'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const method = event.method

  // 获取单篇文章
  if (method === 'GET') {
    const [post] = await query(
      `SELECT p.*, u.username as author_name, c.name as category_name
       FROM posts p
       LEFT JOIN users u ON p.author_id = u.id
       LEFT JOIN categories c ON p.category_id = c.id
       WHERE p.id = ?`,
      [id]
    ) as any

    if (!post) {
      throw createError({
        statusCode: 404,
        message: '文章不存在'
      })
    }

    // 增加浏览量
    await query('UPDATE posts SET view_count = view_count + 1 WHERE id = ?', [id])

    // 获取文章标签
    const tags = await query(
      `SELECT t.* FROM tags t
       INNER JOIN post_tags pt ON t.id = pt.tag_id
       WHERE pt.post_id = ?`,
      [id]
    )

    return { ...post, tags }
  }

  // 更新文章
  if (method === 'PUT') {
    const body = await readBody(event)
    const { title, content, excerpt, category_id, status } = body

    await query(
      `UPDATE posts
       SET title = ?, content = ?, excerpt = ?, category_id = ?, status = ?
       WHERE id = ?`,
      [title, content, excerpt, category_id, status, id]
    )

    return { message: '文章更新成功' }
  }

  // 删除文章
  if (method === 'DELETE') {
    await query('DELETE FROM posts WHERE id = ?', [id])
    return { message: '文章删除成功' }
  }

  return { error: 'Method not allowed' }
})
