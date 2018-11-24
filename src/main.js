// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { ToastPlugin, ConfirmPlugin, AlertPlugin, Group, WechatPlugin } from 'vux'
import { getSignature, getShareInfo } from './api/getData'
// import { getTimeStr } from './utils/date.js'
import { shareUrl } from './config/env.js'

import './assets/less/main.less'

Vue.config.productionTip = false

Vue.component('group', Group)

Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AlertPlugin)
Vue.use(WechatPlugin)

// Vue.filter('getTime', (value) => {
//     if (!value) return ''
//     return getTimeStr(value * 1000, 'yyyy-MM-dd hh:mm')
// })

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = `${to.meta.title}`
    } else {
        document.title = 'xxxx'
    }
    next()
})

/* eslint-disable no-new */
let vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
export default vm
