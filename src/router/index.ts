import { createRouter, createWebHistory } from 'vue-router';
import docsRoutes from './docs';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/login',
            name: 'Login',
            meta: {
                layout: 'centered'
            },
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'Register',
            meta: {
                layout: 'centered'
            },
            component: () => import('@/views/RegisterView.vue')
        },
        ...docsRoutes
    ]
});

declare module 'vue-router' {
    interface RouteMeta {
        layout?: 'centered' | 'docs';
    }
}

export default router;
