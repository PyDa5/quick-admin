import { createRouter, createWebHashHistory } from 'vue-router'
import { path_route } from '@/utils/route'

// ------------------------------- 配置嵌套路由或者命名不规则路由 -------------------------------
let routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   componet: () => import('../views/Index.vue')
  // },
]

/** 配置简单路由，根据URL匹配组件，组件名称首字母大写
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

// 配置index路由
routes.push({
  path: '/',
  redirect: '/index'
})


// ******************************************* 配置到此结束 *********************************


for(var path in INSTALLED_PAGES){
  var component_name = INSTALLED_PAGES[path]
  path = path.startsWith('/') ? path : '/'+path
  routes.push(path_route(path, component_name))
}


// 创建router
const router = createRouter({
  history: createWebHashHistory(), 
  routes: routes
})

export default router
