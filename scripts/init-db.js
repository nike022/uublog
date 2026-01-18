import mysql from 'mysql2/promise'
import { config } from 'dotenv'

config()

const initDatabase = async () => {
  console.log('🔄 连接到 TiDB Cloud...')

  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '4000'),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    ssl: {
      rejectUnauthorized: true
    }
  })

  console.log('✅ 连接成功!')

  try {
    // 创建数据库
    console.log('📦 创建数据库 esa_blog...')
    await connection.execute('CREATE DATABASE IF NOT EXISTS esa_blog')
    await connection.execute('USE esa_blog')
    console.log('✅ 数据库创建成功!')

    // 创建用户表
    console.log('📋 创建 users 表...')
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role ENUM('admin', 'editor', 'author') DEFAULT 'author',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)

    // 创建分类表
    console.log('📋 创建 categories 表...')
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        slug VARCHAR(100) UNIQUE NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // 创建标签表
    console.log('📋 创建 tags 表...')
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS tags (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) UNIQUE NOT NULL,
        slug VARCHAR(50) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    // 创建文章表
    console.log('📋 创建 posts 表...')
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        content TEXT NOT NULL,
        excerpt VARCHAR(500),
        cover_image VARCHAR(255),
        author_id INT NOT NULL,
        category_id INT,
        status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
        is_paid BOOLEAN DEFAULT FALSE,
        price DECIMAL(10, 2) DEFAULT 0,
        view_count INT DEFAULT 0,
        published_at TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE,
        INDEX idx_slug (slug),
        INDEX idx_status (status),
        INDEX idx_published_at (published_at)
      )
    `)

    // 创建文章标签关联表
    console.log('📋 创建 post_tags 表...')
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS post_tags (
        post_id INT NOT NULL,
        tag_id INT NOT NULL,
        PRIMARY KEY (post_id, tag_id),
        FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
        FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
      )
    `)

    // 创建会员表
    console.log('📋 创建 memberships 表...')
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS memberships (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        plan ENUM('free', 'basic', 'pro', 'enterprise') DEFAULT 'free',
        expires_at TIMESTAMP NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `)

    // 创建订单表
    console.log('📋 创建 orders 表...')
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        post_id INT,
        amount DECIMAL(10, 2) NOT NULL,
        status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
        payment_method VARCHAR(50),
        transaction_id VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE SET NULL
      )
    `)

    console.log('✅ 所有表创建成功!')

    // 插入默认管理员 (密码: admin123)
    console.log('👤 创建默认管理员账号...')
    await connection.execute(`
      INSERT INTO users (username, email, password, role)
      VALUES ('admin', 'admin@example.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'admin')
      ON DUPLICATE KEY UPDATE username=username
    `)

    // 插入示例分类
    console.log('📁 创建示例分类...')
    await connection.execute(`
      INSERT INTO categories (name, slug, description) VALUES
      ('技术', 'tech', '技术相关文章'),
      ('生活', 'life', '生活随笔'),
      ('教程', 'tutorial', '教程文章')
      ON DUPLICATE KEY UPDATE name=name
    `)

    // 插入示例标签
    console.log('🏷️  创建示例标签...')
    await connection.execute(`
      INSERT INTO tags (name, slug) VALUES
      ('Vue', 'vue'),
      ('Nuxt', 'nuxt'),
      ('JavaScript', 'javascript'),
      ('TypeScript', 'typescript')
      ON DUPLICATE KEY UPDATE name=name
    `)

    console.log('✅ 初始数据插入成功!')
    console.log('\n🎉 数据库初始化完成!')
    console.log('\n📝 默认管理员账号:')
    console.log('   用户名: admin')
    console.log('   密码: admin123')

  } catch (error) {
    console.error('❌ 初始化失败:', error.message)
    throw error
  } finally {
    await connection.end()
  }
}

initDatabase().catch(console.error)
