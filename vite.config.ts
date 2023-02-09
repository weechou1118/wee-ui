import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { plugin as mdPlugin, Mode} from 'vite-plugin-markdown'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mdPlugin({ mode: [Mode.HTML, Mode.TOC, Mode.VUE] })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:'@import "./src/assets/styles/style.scss";'
      }
    }
  }
})
