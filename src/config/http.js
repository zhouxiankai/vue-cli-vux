/**
 * http配置
 */

import axios from 'axios'
import store from '../store'
import router from '../router'
// import {baseUrl} from '../config/env'
import vm from '../main.js'

// axios 配置
const http = axios.create({
    // baseURL: baseUrl,
    timeout: 1000 * 1000, // 1 秒
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
})

// http request 拦截器
http.interceptors.request.use(
    config => {
        config.headers['from'] = 1
        if (store.state.user.token) {
            const token = '' || store.state.user.token
            config.headers['Authorization'] = token
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// http response 拦截器
http.interceptors.response.use(
    response => {
        if (response.data.code === 500) {
            //vm.$vux.toast.text(response.data.error)
        }

        return response
    },
    error => {
        if (error.response.status === 401) {

        } else {
            vm.$vux.toast.text(error.response.data.error)
        }

        return Promise.reject(error)
    }
)

export default http
