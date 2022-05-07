// 配置系统标题(必须)
const SYSTEM_TITLE = "QuickAdmin"

// 配置路由对应的HEADER标题
const ROUTES_HEADER = {
    '/index': '我的看板',
    '/login': '登陆界面',
    '/demo': '演示界面',

    // 订单管理
    '/order/import': '订单导入'
}

// 配置Header回退功能
const CAN_BACK_PAGES = [
    '/demo'
]

// 配置登陆接口(用于请求拦截器重定向)
const LOGIN_URL = '/login'

// 暴露接口
export {
    SYSTEM_TITLE, 
    // Header相关
    ROUTES_HEADER,
    CAN_BACK_PAGES
}
