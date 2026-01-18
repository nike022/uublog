<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- 导航菜单 -->
    <nav class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex gap-6 py-4">
          <NuxtLink to="/admin/posts" class="text-blue-600 dark:text-blue-400 font-medium">文章管理</NuxtLink>
          <NuxtLink to="/admin/categories" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">分类管理</NuxtLink>
          <NuxtLink to="/admin/tags" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">标签管理</NuxtLink>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">文章管理</h1>
        <div class="flex gap-4">
          <NuxtLink
            to="/admin/posts/new"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            新建文章
          </NuxtLink>
          <button
            @click="handleLogout"
            class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition"
          >
            退出登录
          </button>
        </div>
      </div>

      <div v-if="pending" class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">加载中...</p>
      </div>

      <div v-else class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">标题</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">状态</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">分类</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">浏览量</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">发布时间</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr v-for="post in data?.posts || []" :key="post.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td class="px-6 py-4 text-gray-900 dark:text-white">{{ post.title }}</td>
              <td class="px-6 py-4">
                <span
                  :class="{
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': post.status === 'published',
                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': post.status === 'draft',
                    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200': post.status === 'archived'
                  }"
                  class="px-2 py-1 rounded text-xs"
                >
                  {{ statusText[post.status] }}
                </span>
              </td>
              <td class="px-6 py-4 text-gray-600 dark:text-gray-400">{{ post.category_name || '-' }}</td>
              <td class="px-6 py-4 text-gray-600 dark:text-gray-400">{{ post.view_count }}</td>
              <td class="px-6 py-4 text-gray-600 dark:text-gray-400">{{ formatDate(post.published_at) }}</td>
              <td class="px-6 py-4">
                <div class="flex gap-2">
                  <NuxtLink
                    :to="`/admin/posts/${post.id}`"
                    class="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                  >
                    编辑
                  </NuxtLink>
                  <button
                    @click="handleDelete(post.id)"
                    class="text-red-600 hover:text-red-800 dark:text-red-400"
                  >
                    删除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, pending, refresh } = await useFetch('/api/posts', {
  query: { status: 'all', limit: 100 }
})

const statusText = {
  published: '已发布',
  draft: '草稿',
  archived: '已归档'
}

const formatDate = (date: string) => {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('zh-CN')
}

const handleDelete = async (id: number) => {
  if (!confirm('确定要删除这篇文章吗?')) return

  try {
    await $fetch(`/api/posts/${id}`, { method: 'DELETE' })
    refresh()
  } catch (error) {
    alert('删除失败')
  }
}

const handleLogout = () => {
  localStorage.removeItem('user')
  navigateTo('/admin/login')
}

onMounted(() => {
  const user = localStorage.getItem('user')
  if (!user) {
    navigateTo('/admin/login')
  }
})
</script>
