import type { RouteRecordRaw } from "vue-router";

export default [
    {
        path: '/docs',
        name: 'DocsHome',
        component: () => import('@/views/docs/Home.vue')
    },
    {
        path: '/docs/button',
        name: 'DocsButton',
        component: () => import('@/views/docs/Button.vue')
    }
].map(r => ({
    ...r,
    meta: {
        layout: 'docs'
    },
})) as RouteRecordRaw[]