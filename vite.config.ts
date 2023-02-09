import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { plugin as mdPlugin, Mode} from 'vite-plugin-markdown'
import path from 'path'
import vitePluginVue from './plugins/vue-custom-blocks-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mdPlugin({ mode: [Mode.HTML] }), vitePluginVue],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:'@import "./src/assets/styles/style.scss";'
      }
    }
  }
})
