// 配置系统标题(必须)
const SYSTEM_TITLE = "QuickAdmin"

// 配置需要加载的页面
const INSTALLED_PAGES = [
    // 登陆
    'login',
    // 订单管理
    'index',
    'demo',
]

// 配置路由对应的HEADER标题
const ROUTES_HEADER = {
    '/index': '工作台',
    '/login': '登陆界面',
    '/demo': '演示界面'
}

// 配置Header回退功能
const CAN_BACK_PAGES = [
    '/demo'
]

// 配置登陆接口(用于请求拦截器重定向)
const LOGIN_URL = '/login'

// 配置系统菜单(在APP.vue中请求)
const SYSTEM_MENUS = [
    {
        title: '系统管理',
        sub: [
            {
                icon: 'el-icon-menu',
                title: 'Demo',
                code: 'demo',
                path: '/demo'
            }
        ]
    },
    {
        title: '模块管理',
        sub: [
            {
                icon: 'el-icon-menu',
                title: '分类管理',
                code: 'category',
                path: '/category',
            },
            {
                icon: 'el-icon-menu',
                title: '商品管理',
                code: 'good',
                path: '/good',
            }
        ]

    }
]

// 暴露接口
export {
    SYSTEM_TITLE, 
    SYSTEM_MENUS,
    INSTALLED_PAGES,
    // Header相关
    ROUTES_HEADER,
    CAN_BACK_PAGES
}
