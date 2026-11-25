import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const contentSecurityPolicy = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self'",
  "font-src 'self'",
  "connect-src 'none'",
  "worker-src 'none'",
  "base-uri 'none'",
  "form-action 'none'",
].join('; ')

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'static-page-privacy',
      apply: 'build',
      transformIndexHtml() {
        return [
          { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: contentSecurityPolicy } },
          { tag: 'meta', attrs: { name: 'referrer', content: 'no-referrer' } },
          { tag: 'meta', attrs: { 'http-equiv': 'x-dns-prefetch-control', content: 'off' } },
        ]
      },
    },
  ],
  base: '/',
  build: {
    outDir: 'dist',
    // Emit small assets as same-origin files so the page can disallow data: URLs.
    assetsInlineLimit: 0,
  },
  server: {
    port: 5173,
  },
})

