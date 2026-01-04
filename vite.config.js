import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 配置
// 如果仓库名是 username.github.io，base 应该是 '/'
// 如果是项目页面，base 应该是 '/repository-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保资源路径正确
    assetsInlineLimit: 4096,
    // 生成 manifest 文件用于调试
    manifest: false,
  },
  // 确保开发和生产环境一致
  server: {
    port: 5173,
  },
})

