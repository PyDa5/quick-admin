/**
 * 功能：获取用户菜单
 */
class Menu{  // 单个菜单
    // 菜单
    constructor(title, code=null, icon=null, id=null){
        this.title = title
        this.code = code
        this.icon = icon
        this.id = id
        this.sub = []
    }

    // 添加子菜单
    add_item(title, path, code=null, icon=null, id=null){
        if(code == null){
            code = title
        }
        if(icon == null){
            icon = 'el-icon-menu'
        }
        if(id == null){
            id = title
        }
        this.sub.push({
            title,
            path,
            code,
            icon,
            id
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
    add_menu(title, code=null, icon=null, id=null){
        if(code == null){
            code = title
        }
        if(icon == null){
            icon = 'el-icon-menu'
        }
        if(id == null){
            id = title
        }
        const menu = new Menu(title, code, icon, id)
        this._menus.push(menu)
        return menu
    }
}

const userMenus = new UserMenus()

function getUserMenus(){  // 发请求获取用户菜单
    // 发请求

    // 从请求中获取菜单数据
    userMenus.add_menu('Demo')
    .add_item('demo', '/demo')
    .add_item('demo2', '/index')

}

getUserMenus()
userMenus = userMenus.get()

export {
    userMenus
}