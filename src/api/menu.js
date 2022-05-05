/**
 * 功能：获取用户菜单
 */
class Menu{  // 单个菜单
    // 菜单
    constructor(title){
        this.title = title
        this.sub = []
    }

    // 添加子菜单
    add_item(title, path, code=null, icon=null){
        if(code == null){
        code = title
        }
        if(icon == null){
        icon = 'el-icon-menu'
        }
        this.sub.push({
            title,
            path,
            code,
            icon
        })
        return this
    }
}

class UserMenus{ // 用户所有菜单
    // 导航栏
    constructor(){
        this._menus = []
    }

    get(){
        return this._menus
    }

    // 添加菜单
    add_menu(title){
        const menu = new Menu(title)
        this._menus.push(menu)
        return menu
    }
}

function getUserMenus(){  // 发请求获取用户菜单
    return [
        {
            pk: 1,
            menu_name: 'Demo',
            menu_code: 'demo',
            icon: null,
            submenu:[
                {

                }
            ]

        }
    ]
}

function convertUserMenus(data){  // 把服务端菜单数据格式化为客户端的数据
    return data
}


const userMenus = new UserMenus()

userMenus.add_menu('Demo')
.add_item('demo', '/demo')
.add_item('demo2', '/index')


export {
    userMenus
}