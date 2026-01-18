# ESA Blog Pro 部署指南

## 准备工作

已完成的功能:
- ✅ 数据库配置和初始化
- ✅ 用户认证系统(登录/注册)
- ✅ 管理后台登录页面
- ✅ 文章管理列表页面
- ✅ 文章发布/编辑页面(集成 Vditor 编辑器)
- ✅ 前台文章展示页面

## 第一步: 上传到 GitHub

1. 在 GitHub 创建新仓库 `esa-blog-pro`

2. 在项目目录执行以下命令:

```bash
cd C:\Users\18352\Downloads\esa-blog-pro
git init
git add .
git commit -m "Initial commit: ESA Blog Pro 完整功能"
git branch -M main
git remote add origin https://github.com/你的用户名/esa-blog-pro.git
git push -u origin main
```

## 第二步: 部署到 ESA Pages

1. 登录 ESA 控制台: https://esa.console.aliyun.com/

2. 进入 **边缘计算 > 函数和Pages**

3. 点击 **创建** > **导入 Github 仓库**

4. 授权 GitHub 账号并选择 `esa-blog-pro` 仓库

5. 配置构建信息:
   - **生产分支**: main
   - **安装命令**: npm install
   - **构建命令**: npm run build
   - **静态资源目录**: ./.output/public
   - **Node.js 版本**: 18.x

6. **重要!** 配置环境变量:
   点击 **环境变量** 添加以下变量:
   ```
   DATABASE_HOST=gateway01.ap-southeast-1.prod.aws.tidbcloud.com
   DATABASE_PORT=4000
   DATABASE_USER=5mkaYweECCHnFyo.root
   DATABASE_PASSWORD=POepAihnoqYW0g7I
   DATABASE_NAME=esa_blog
   ```

7. 点击 **开始部署**

## 第三步: 等待构建完成

构建过程大约需要 3-5 分钟。完成后会生成一个 ESA 域名,格式如:
```
https://esa-blog-pro.xxxxx.er.aliyun-esa.net
```

## 第四步: 测试功能

1. **访问前台首页**:
   ```
   https://你的域名.er.aliyun-esa.net
   ```

2. **登录管理后台**:
   ```
   https://你的域名.er.aliyun-esa.net/admin/login

   用户名: admin
   密码: admin123
   ```

3. **测试发布文章**:
   - 登录后台
   - 点击"新建文章"
   - 使用 Vditor 编辑器编写文章
   - 保存并发布
   - 返回前台查看文章

## 第五步: 提交到天池比赛

部署成功并测试通过后,按照 [SUBMISSION.txt](SUBMISSION.txt) 的格式提交作品:

1. 复制 ESA 分配的域名
2. 复制 GitHub 仓库地址
3. 填写作品介绍
4. 在天池比赛页面提交

## 常见问题

### Q: 构建失败怎么办?
A: 检查以下几点:
- 环境变量是否正确配置
- Node.js 版本是否选择 18.x
- 构建命令是否正确

### Q: 数据库连接失败?
A: 检查:
- TiDB Cloud 集群是否正常运行
- 环境变量中的数据库凭据是否正确
- IP 白名单是否允许所有 IP (0.0.0.0/0)

### Q: 页面显示 404?
A: 确保:
- `esa.jsonc` 中的 `notFoundStrategy` 设置为 `singlePageApplication`
- 静态资源目录配置正确

### Q: Vditor 编辑器不显示?
A: 这是正常的,Vditor 的样式需要在生产环境才能正确加载

## 下一步优化

部署成功后,可以考虑:
- 绑定自定义域名
- 添加 CDN 加速
- 优化 SEO
- 添加评论系统
- 集成图片上传
- 开发商业增强版功能

## 技术支持

如有问题,请查看:
- [README.md](README.md) - 项目说明
- [DATABASE_SETUP.md](DATABASE_SETUP.md) - 数据库配置
- ESA Pages 官方文档
