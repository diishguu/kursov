import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import App2 from './pages/App2.vue'
import App3 from './pages/App3.vue'
import App4 from './pages/App4.vue';
import App5 from './pages/App5.vue';


const routes = [
    {
        path: '/',
        component: Home
    },

    {
        path: '/home',
        component: Home
    },

    {
        path: '/app2',
        component: App2
    },
    {
        path: '/app3',
        component: App3
    },
    {
        path: '/app4',
        component: App4
    },
    {
        path: '/app5',
        component: App5
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router