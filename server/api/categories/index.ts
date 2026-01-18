import { mockCategories } from '~/server/utils/mockData'

export default defineEventHandler(async () => {
  return mockCategories
})
