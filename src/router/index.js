import { createRouter, createWebHashHistory } from 'vue-router'
import {INSTALLED_PAGES} from '@/global.config'

function _(component_name){
  // 简单路由映射
  return {
    path: '/'+component_name.slice(0, 1).toUpperCase() + component_name.slice(1),
    name: component_name,
    component: () => import(`../views/${component_name}.vue`)
  }
}

// 全局配置中配置的页面全部引入
var loaded_pages = []
INSTALLED_PAGES.forEach(componet => {
  loaded_pages.push(_(componet))
});

// 其它路由配置
const router = createRouter({
  history: createWebHashHistory(), 
  routes: [
    {
      path: '/',
      redirect: '/index'
    }
  ].concat(loaded_pages)
})

export default router
