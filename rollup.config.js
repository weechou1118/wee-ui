import esbuild from 'rollup-plugin-esbuild'
import vue from '@vitejs/plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'
import path from 'path'
import { fileURLToPath } from 'url'
// 代替__dirname的polyfill
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

export default {
  input: 'src/lib/index.ts', // 入口文件地址
  output: {
    globals: {
      vue: 'Vue' // 指明global.Vue即是外部依赖vue
    },
    name: 'wee-ui',
    file: 'dist/lib/wee-ui.js',
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    scss({ include: /.scss$/, scss: dartSass, fileName: 'wee-ui.css' }),
    vue({
      include: /.vue$/
    }),
    esbuild({
      include: /.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirnameNew, 'src') }
      ]
    }),
    nodeResolve()
  ],
  external: ['vue', 'prismjs', 'vite-plugin-markdown']
}