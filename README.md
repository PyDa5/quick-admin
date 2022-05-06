## 功能
用于Django的Admin管理后台
## 使用
* 1、页面配置：在views中创建.vue文件 => view.py
* 2、路由配置：在router中配置路由 =>urls.py
* 3、菜单配置：src/api/menus中的getUserMenus写用户菜单逻辑，获取用户菜单  => admin.py
* 4、跨域配置：vite.config.js
* 5、切换皮肤：main.js
* 6、拦截器/中间件：src/utils/axios.js  => middleware
