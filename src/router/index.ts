import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/HomeView.vue')
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
        }
    ]
});

declare module 'vue-router' {
    interface RouteMeta {
        layout?: 'centered';
    }
}

export default router;
