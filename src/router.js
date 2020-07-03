import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/logout',
            component: () => import('./views/Logout.vue')
        },
        {
            path: '/payments',
            component: () => import('./views/Payments.vue')
        }
    ]
})