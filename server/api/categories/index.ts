import { query } from '~/server/utils/db'

export default defineEventHandler(async () => {
  const categories = await query('SELECT * FROM categories ORDER BY name')
  return categories
})
