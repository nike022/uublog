<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        ESA Blog Pro
      </h1>

      <div v-if="pending" class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">加载中...</p>
      </div>

      <div v-else class="grid gap-8">
        <article
          v-for="post in data?.posts"
          :key="post.id"
          class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <NuxtLink :to="`/post/${post.id}`" class="block p-6">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {{ post.title }}
            </h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ post.excerpt }}
            </p>
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-500">
              <span>{{ post.author_name }}</span>
              <span class="mx-2">·</span>
              <span>{{ formatDate(post.published_at) }}</span>
              <span v-if="post.category_name" class="mx-2">·</span>
              <span v-if="post.category_name">{{ post.category_name }}</span>
            </div>
          </NuxtLink>
        </article>
      </div>

      <div v-if="data?.pagination" class="mt-8 flex justify-center">
        <p class="text-gray-600 dark:text-gray-400">
          共 {{ data.pagination.total }} 篇文章
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, pending } = await useFetch('/api/posts')

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
