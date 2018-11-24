import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@/config/env'

Vue.use(Router)

export default new Router({
    mode: routerMode,
    routes: [
        /** **************************h5商城***************************/
        // 首页
        {
            meta: { title: '首页' },
            path: '/',
            component: (resovle) => { require(['../views/index/h5-index.vue'], resovle) }
        },
        // 首页
        {
            meta: { title: '首页' },
            path: '/index',
            component: (resovle) => { require(['../views/index/h5-index.vue'], resovle) }
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
