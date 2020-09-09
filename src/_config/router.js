import VueRouter from 'vue-router'
import Vue from 'vue'

import test from '@/pages/test/index'
import indexPage from '@/pages/index'
Vue.use(VueRouter)
const routes =[
    {
        path: '/',
        name: 'index',
        component: indexPage
    }, {
        path: '/test',
        name: 'test',
        component: test
    }
]
const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes
})
export default router