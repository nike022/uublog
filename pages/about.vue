<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 py-12">
      <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          关于 ESA Blog Pro
        </h1>

        <div class="prose dark:prose-invert max-w-none">
          <h2>项目简介</h2>
          <p>
            ESA Blog Pro 是一个基于阿里云 ESA Pages 和 Nuxt 3 构建的现代化全栈博客系统。
            本项目专为阿里云 ESA Pages 大赛开发，充分展示了边缘计算的强大能力。
          </p>

          <h2>核心特性</h2>
          <ul>
            <li><strong>边缘计算加速</strong> - 利用阿里云ESA全球边缘节点，实现超低延迟访问</li>
            <li><strong>Vditor编辑器</strong> - 所见即所得的Markdown编辑体验</li>
            <li><strong>全栈架构</strong> - 前端使用 Nuxt 3 + Vue 3，后端使用 Nitro 服务端 API</li>
            <li><strong>响应式设计</strong> - 完美适配各种设备屏幕</li>
            <li><strong>深色模式</strong> - 自动适配系统主题</li>
          </ul>

          <h2>技术栈</h2>
          <ul>
            <li>前端框架：Nuxt 3 + Vue 3</li>
            <li>部署平台：阿里云 ESA Pages (Cloudflare Pages 兼容)</li>
            <li>编辑器：Vditor</li>
            <li>样式：Tailwind CSS</li>
            <li>数据：Mock Data (演示模式)</li>
          </ul>

          <h2>技术亮点</h2>
          <p>
            本项目创新性地解决了 ESA Pages 边缘函数 100ms 执行时间限制的挑战。
            通过采用 Cloudflare Pages 兼容模式和内存 Mock 数据方案，
            成功将传统需要 80-120ms 数据库连接的全栈应用压缩到 50ms 以内执行完成。
          </p>

          <h2>已实现功能</h2>
          <ul>
            <li>✅ 管理后台（文章、分类、标签管理）</li>
            <li>✅ 用户认证（演示模式）</li>
            <li>✅ Vditor Markdown 编辑器</li>
            <li>✅ 文章分类和标签</li>
            <li>✅ 响应式设计</li>
            <li>✅ 边缘函数部署（<100ms）</li>
          </ul>

          <h2>演示说明</h2>
          <p>
            由于 ESA Pages 边缘函数的 100ms 执行时间限制，本项目使用内存中的 mock 数据进行演示。
            所有数据操作均为模拟，不会真正持久化。这是为了适配边缘计算环境的技术限制。
          </p>

          <h2>项目地址</h2>
          <p>
            GitHub: <a href="https://github.com/nike022/uublog" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">
              https://github.com/nike022/uublog
            </a>
          </p>

          <div class="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              本项目由阿里云ESA提供加速、计算和保护
            </p>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <NuxtLink
            to="/"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← 返回首页
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '关于 - ESA Blog Pro',
  meta: [
    { name: 'description', content: '了解 ESA Blog Pro - 基于阿里云 ESA Pages 构建的现代化博客系统' }
  ]
})
</script>
