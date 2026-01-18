# TiDB Cloud 数据库配置指南

## 第一步: 注册 TiDB Cloud 账号

1. 访问 https://tidbcloud.com/
2. 点击右上角 "Sign Up" 注册账号
3. 可以使用 GitHub 账号快速登录

## 第二步: 创建免费集群

1. 登录后,点击 "Create Cluster"
2. 选择 **Serverless Tier** (免费版)
3. 配置选项:
   - **Cluster Name**: `esa-blog-pro`
   - **Cloud Provider**: 选择 `AWS`
   - **Region**: 选择 `ap-southeast-1 (Singapore)` (距离中国最近,速度最快)
4. 点击 "Create" 创建集群 (大约需要 1-2 分钟)

## 第三步: 获取连接信息

1. 集群创建完成后,点击集群名称进入详情页
2. 点击 "Connect" 按钮
3. 选择 "Standard Connection" 标签
4. 你会看到类似这样的连接信息:

```
Host: gateway01.ap-southeast-1.prod.aws.tidbcloud.com
Port: 4000
User: xxxxxx.root
Password: (点击 "Generate Password" 生成密码,务必保存!)
```

**重要**:
- 点击 "Generate Password" 生成密码后,**立即复制保存**,密码只显示一次!
- 如果忘记密码,需要重新生成

## 第四步: 配置项目环境变量

1. 在项目根目录创建 `.env` 文件:

```bash
cd C:\Users\18352\Downloads\esa-blog-pro
copy .env.example .env
```

2. 编辑 `.env` 文件,填入你的数据库连接信息:

```env
DATABASE_HOST=gateway01.ap-southeast-1.prod.aws.tidbcloud.com
DATABASE_PORT=4000
DATABASE_USER=你的用户名.root
DATABASE_PASSWORD=你生成的密码
DATABASE_NAME=esa_blog
```

## 第五步: 初始化数据库

1. 在 TiDB Cloud 控制台,点击 "SQL Editor" 或 "Chat2Query"
2. 复制 `server/database/schema.sql` 文件的全部内容
3. 粘贴到 SQL Editor 中
4. 点击 "Run" 执行 SQL 语句
5. 等待执行完成,应该会看到成功创建了 7 个表

## 第六步: 验证数据库连接

执行以下命令测试数据库连接:

```bash
cd C:\Users\18352\Downloads\esa-blog-pro
npm run dev
```

如果看到服务器启动成功,说明数据库连接正常!

## 常见问题

### Q: 连接超时怎么办?
A: 检查 TiDB Cloud 的 IP 白名单设置,确保允许所有 IP 访问 (0.0.0.0/0)

### Q: 密码忘记了怎么办?
A: 在 TiDB Cloud 控制台重新生成密码,然后更新 `.env` 文件

### Q: 免费版有什么限制?
A:
- 存储: 5GB
- 请求: 每月 5000 万次
- 对于博客系统完全够用!

## 下一步

数据库配置完成后,我们将创建管理后台和集成 Vditor 编辑器。
