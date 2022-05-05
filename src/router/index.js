/**
 * 模块： 路由配置
 * 时间： 2022-5-5 13:01:37
 * 说明：
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { path_route } from '@/utils/route'


/**
 * 功能： 配置嵌套路由或者命名不规则的路由
 * 示例：
 *  {
 *    path: '/',
 *    name: 'index',
 *    componet: () => import('../views/Index.vue')
 *  },
 */
let routes = [

]


/**功能：配置简单路由
 * 根据URL匹配组件，组件名称首字母大写
 * :path URL路径
 * :name URL名称
 * :component: () => import('../views/${path}.vue)
 */
 const INSTALLED_PAGES = {
  'login': '登陆',
  'index': '首页',
  'demo': 'Demo',
  'order/import': '订单导入'
}


// 配置index根路由
routes.push({
  path: '/',
  redirect: '/index'
})


// ******************************************* 配置到此结束 *********************************
// path_route生成路由
for(var path in INSTALLED_PAGES){
  var component_name = INSTALLED_PAGES[path]
  path = path.startsWith('/') ? path : '/'+path
  console.log(path_route(path, component_name))
  routes.push(path_route(path, component_name))
}

// 创建router
const router = createRouter({
  history: createWebHashHistory(), 
  routes: routes
})

export default router
