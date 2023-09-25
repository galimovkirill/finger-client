import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
    publicDir: false,
    build: {
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, 'src/components/index.ts'),
            name: 'FingerUi',
            fileName: (format) => `finger-ui.${format}.ts`
        },
        rollupOptions: {
            external: ['vue', 'vue-router', '@vueuse/core'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
});
