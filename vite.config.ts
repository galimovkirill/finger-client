import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import typescript2 from 'rollup-plugin-typescript2';

export default defineConfig({
    publicDir: false,
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true
        }),
        typescript2({
            check: false,
            tsconfigOverride: {
                compilerOptions: {
                    outDir: 'dist',
                    sourceMap: true,
                    declaration: true,
                    declarationMap: true
                }
            },
            exclude: ['vite.config.ts']
        })
    ],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'FingerUi',
            fileName: 'finger-ui'
        },
        rollupOptions: {
            external: ['vue', 'vue-router', '@vueuse/core'],
            output: {
                assetFileNames: (assetInfo) => {
                    return assetInfo.name || '';
                },
                exports: 'named',
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
});
