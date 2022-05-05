class Menu{
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

class UserMenus{
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


const userMenus = new UserMenus()

export default userMenus
