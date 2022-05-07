/**
 * 功能：获取用户菜单
 */

import axios from "axios"
import { API_USER_MENUS } from "@/api/api"


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


/**
 * 获取用户菜单，并转换为指定指定格式
 * add_menu(title, code=null, icon=null, id=null)
 * add_item(title, path, code=null, icon=null, id=null)
 */
 let userMenus = new UserMenus()


// ******************************** 配置 ********************************
function getUserMenus(){  // 发请求获取用户菜单
    // 发请求
    // axios.get(API_USER_MENUS)
    // .then(res=>{
    //     console.log(res.data.data)
    // })
    // .catch(err=>{

    // })
    // 从请求中获取菜单数据
    // userMenus.add_menu('Demo')
    // .add_item('demo', '/demo')
    // .add_item('demo2', '/index')
    userMenus.add_menu('Demo')
    .add_item('我的看板', '/index')
    .add_item('demo', '/demo')
    return userMenus.get()
}


export {
    getUserMenus
}