<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 导航菜单 -->
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-6">
        <div class="flex gap-6 py-4">
          <NuxtLink to="/admin/posts" class="text-gray-600 hover:text-blue-600">文章管理</NuxtLink>
          <NuxtLink to="/admin/categories" class="text-blue-600 font-medium">分类管理</NuxtLink>
          <NuxtLink to="/admin/tags" class="text-gray-600 hover:text-blue-600">标签管理</NuxtLink>
        </div>
      </div>
    </nav>

    <div class="p-6">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">分类管理</h1>
        <button @click="showCreateModal = true" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          新建分类
        </button>
      </div>

      <div class="bg-white rounded-lg shadow">
        <table class="w-full">
          <thead class="bg-gray-50 border-b">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">名称</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="category in categories" :key="category.id">
              <td class="px-6 py-4">{{ category.id }}</td>
              <td class="px-6 py-4">{{ category.name }}</td>
              <td class="px-6 py-4">{{ category.slug }}</td>
              <td class="px-6 py-4">
                <button @click="editCategory(category)" class="text-blue-600 hover:text-blue-800 mr-3">编辑</button>
                <button @click="deleteCategory(category.id)" class="text-red-600 hover:text-red-800">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 创建/编辑模态框 -->
    <div v-if="showCreateModal || showEditModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 class="text-xl font-bold mb-4">{{ showEditModal ? '编辑分类' : '新建分类' }}</h2>
        <form @submit.prevent="showEditModal ? updateCategory() : createCategory()">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">名称</label>
            <input v-model="form.name" type="text" required class="w-full border rounded px-3 py-2">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Slug</label>
            <input v-model="form.slug" type="text" required class="w-full border rounded px-3 py-2">
          </div>
          <div class="flex justify-end gap-2">
            <button type="button" @click="closeModal" class="px-4 py-2 border rounded hover:bg-gray-50">取消</button>
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">保存</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const categories = ref([])
const showCreateModal = ref(false)
const showEditModal = ref(false)
const form = ref({ id: null, name: '', slug: '' })

const fetchCategories = async () => {
  const data = await $fetch('/api/categories')
  categories.value = data
}

const createCategory = async () => {
  try {
    await $fetch('/api/categories', {
      method: 'POST',
      body: form.value
    })
    alert('分类创建成功 (演示模式)')
    closeModal()
    await fetchCategories()
  } catch (error) {
    alert('创建失败')
  }
}

const editCategory = (category) => {
  form.value = { ...category }
  showEditModal.value = true
}

const updateCategory = async () => {
  try {
    await $fetch(`/api/categories/${form.value.id}`, {
      method: 'PUT',
      body: form.value
    })
    alert('分类更新成功 (演示模式)')
    closeModal()
    await fetchCategories()
  } catch (error) {
    alert('更新失败')
  }
}

const deleteCategory = async (id) => {
  if (!confirm('确定要删除这个分类吗？')) return

  try {
    await $fetch(`/api/categories/${id}`, {
      method: 'DELETE'
    })
    alert('分类删除成功 (演示模式)')
    await fetchCategories()
  } catch (error) {
    alert('删除失败')
  }
}

const closeModal = () => {
  showCreateModal.value = false
  showEditModal.value = false
  form.value = { id: null, name: '', slug: '' }
}

onMounted(() => {
  fetchCategories()
})
</script>
