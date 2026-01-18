<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">新建文章</h1>
        <NuxtLink
          to="/admin/posts"
          class="text-gray-600 hover:text-gray-800 dark:text-gray-400"
        >
          返回列表
        </NuxtLink>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              文章标题
            </label>
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="请输入文章标题"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              文章摘要
            </label>
            <textarea
              v-model="form.excerpt"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="请输入文章摘要"
            ></textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                分类
              </label>
              <select
                v-model="form.category_id"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option :value="null">无分类</option>
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                  {{ cat.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                状态
              </label>
              <select
                v-model="form.status"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="draft">草稿</option>
                <option value="published">发布</option>
                <option value="archived">归档</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              文章内容
            </label>
            <div id="vditor" class="border border-gray-300 dark:border-gray-600 rounded-lg"></div>
          </div>
        </div>

        <div class="flex gap-4">
          <button
            type="submit"
            :disabled="loading"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition disabled:opacity-50"
          >
            {{ loading ? '保存中...' : '保存文章' }}
          </button>
          <button
            type="button"
            @click="navigateTo('/admin/posts')"
            class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition"
          >
            取消
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/dist/index.css'

const loading = ref(false)
let vditor: Vditor | null = null

const form = ref({
  title: '',
  slug: '',
  content: '',
  excerpt: '',
  category_id: null as number | null,
  status: 'draft' as 'draft' | 'published' | 'archived'
})

const categories = ref([])

const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const handleSubmit = async () => {
  loading.value = true

  try {
    form.value.content = vditor?.getValue() || ''
    form.value.slug = generateSlug(form.value.title)

    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const body = {
      ...form.value,
      author_id: user.id || 1
    }

    await $fetch('/api/posts', {
      method: 'POST',
      body
    })

    navigateTo('/admin/posts')
  } catch (error: any) {
    alert(error.data?.message || '保存失败')
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  const user = localStorage.getItem('user')
  if (!user) {
    navigateTo('/admin/login')
    return
  }

  const { data: cats } = await useFetch('/api/categories')
  categories.value = cats.value || []

  vditor = new Vditor('vditor', {
    height: 600,
    mode: 'ir',
    placeholder: '请输入文章内容...',
    theme: 'classic',
    cache: {
      enable: false
    },
    toolbar: [
      'emoji',
      'headings',
      'bold',
      'italic',
      'strike',
      '|',
      'line',
      'quote',
      'list',
      'ordered-list',
      'check',
      '|',
      'code',
      'inline-code',
      'insert-before',
      'insert-after',
      '|',
      'upload',
      'link',
      'table',
      '|',
      'undo',
      'redo',
      '|',
      'fullscreen',
      'edit-mode',
      'preview',
      'outline'
    ]
  })
})

onBeforeUnmount(() => {
  vditor?.destroy()
})
</script>
