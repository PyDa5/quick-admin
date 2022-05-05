import { createRouter, createWebHashHistory } from 'vue-router'
import { INSTALLED_PAGES } from '@/global.config'
import { simple_route} from '@/utils/route'

// ------------------------------- 配置嵌套路由或者命名不规则路由 -------------------------------
let routes = [
  // {
  //   path: '/',
  //   name: 'index',
  //   componet: () => import('../views/Index.vue')
  // },
]

// 自动配置简单路由
INSTALLED_PAGES.forEach(component_name => {
  routes.push(simple_route(component_name))
});

// 配置默认路由
routes.push({
  path: '/',
  redirect: '/index'
})

// 创建router
const router = createRouter({
  history: createWebHashHistory(), 
  routes: routes
})

export default router
