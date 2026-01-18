<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 py-12">
      <div v-if="pending" class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">加载中...</p>
      </div>

      <article v-else-if="data" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <header class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ data.title }}
          </h1>
          <div class="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
            <span>{{ data.author_name }}</span>
            <span class="mx-2">·</span>
            <span>{{ formatDate(data.published_at) }}</span>
            <span v-if="data.category_name" class="mx-2">·</span>
            <span v-if="data.category_name">{{ data.category_name }}</span>
            <span class="mx-2">·</span>
            <span>{{ data.view_count }} 次阅读</span>
          </div>
          <div v-if="data.tags?.length" class="flex gap-2">
            <span
              v-for="tag in data.tags"
              :key="tag.id"
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              #{{ tag.name }}
            </span>
          </div>
        </header>

        <div
          class="prose dark:prose-invert max-w-none"
          v-html="renderedContent"
        ></div>

        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <NuxtLink
            to="/"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← 返回首页
          </NuxtLink>
        </div>
      </article>

      <div v-else class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">文章不存在</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const route = useRoute()
const id = route.params.id

const { data, pending } = await useFetch(`/api/posts/${id}`)

marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  }
})

const renderedContent = computed(() => {
  return data.value?.content ? marked(data.value.content) : ''
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
