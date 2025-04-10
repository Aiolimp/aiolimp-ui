import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// 组件库构建配置
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['packages/**/*.ts', 'packages/**/*.vue'],
      exclude: ['playground/**/*'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'MyUILib',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      // 这里可以配置全局 Tailwind、scss 变量等
    },
  },
});
