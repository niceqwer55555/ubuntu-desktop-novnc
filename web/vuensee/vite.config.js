import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';

const port = parseInt(process.env.DOCKER_DEV_PORT, 10)
export default defineConfig({
  port,
  base: '',
  plugins: [
    vue()
  ],
  build: {
    terserOptions: {
      format: {
        comments: /^!/
      }
    },
    rollupOptions: {
      external: ['vue-i18n'],
    }
  },
  optimizeDeps: {
    include: [
      '@novnc/novnc/core/input/keysym',
      '@novnc/novnc/core/input/keysymdef',
      '@novnc/novnc/core/util/browser'
    ]
  }
})



// export default config
// export default defineConfig
