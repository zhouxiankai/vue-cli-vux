/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: api域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
let baseUrl
let shareUrl
let mockUrl = '/'
let routerMode = 'history'
let imgBaseUrl

if (process.env.NODE_ENV === 'development') {
    // shareUrl = ''
    // baseUrl = ''
    // imgBaseUrl = ''
} else if (process.env.NODE_ENV === 'production') {
    // shareUrl = ''
    // baseUrl = ''
    // imgBaseUrl = ''
}

export {
    baseUrl,
    mockUrl,
    routerMode,
    imgBaseUrl,
    shareUrl
}
