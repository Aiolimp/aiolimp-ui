import vuePlugin from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'packages/index.ts',
  output: [
    { format: 'es', file: 'dist/index.esm.js' },
    { format: 'cjs', file: 'dist/index.cjs.js' }
  ],
  plugins: [
    nodeResolve(),
    vuePlugin(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: false,
      declaration: true,
      declarationDir: 'dist'
    }),
    postcss({
      plugins: [cssnano()],
      extract: 'style.css'
    })
  ],
  external: ['vue']
}