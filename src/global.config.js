// 系统标题(必须)
const SYSTEM_TITLE = "QuickAdmin"

// 加载的页面
const INSTALLED_PAGES = [
    // 登陆
    'login',
    // 订单管理
    'index',
    'demo',
    // 系统设置
]

// 登陆接口(用于请求拦截器重定向)
const LOGIN_URL = '/login'

// 系统菜单
const SYSTEM_MENUS = [
    {
        id: 1,
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
        id: 2,
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
    INSTALLED_PAGES
}
