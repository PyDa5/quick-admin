const sysTitle = "QuickAdmin"

const sysMenus = [
    {
        id: 1,
        title: '系统管理',
        sub: [
            {
                icon: 'el-icon-menu',
                title: '修改密码',
                code: 'change_password',
                path: '/account'
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
                path: '/category'
            },
            {
                icon: 'el-icon-menu',
                title: '商品管理',
                code: 'good',
                path: '/good'
            }
        ]

    }
]

export {
    sysTitle, 
    sysMenus
}
