<template>
  <div class="layout">
    <el-container v-if="state.showMenu" class="container">
      <el-aside class="aside">
        <div class="head">
          <div>
            <img src="./assets/logo.png" alt="logo">

            <span>{{state.SYSTEM_TITLE}}</span>
          </div>
        </div>
        <div class="line" />
        <el-menu
          :default-openeds="state.defaultOpen"
          background-color="#222832"
          text-color="#fff"
          :router="true"
          :default-active='state.currentPath'
        >
          <el-submenu v-for="menu in state.USER_MENUS" :key="menu.title">
            <template #title>
              <span>{{menu.title}}</span>
            </template>
            <el-menu-item-group v-for="submenu in menu.sub" :key="menu.title+':'+submenu.title">
              <el-menu-item :index="submenu.path">
                <i v-if="submenu.icon != undifined" :class="submenu.icon"/>
                <i v-else class="el-icon-menu"/>
                {{submenu.title}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          
        </el-menu>
      </el-aside>
      <el-container class="content">
        <Header />
        <div class="main">
          <router-view />
        </div>
        <Footer />
      </el-container>
    </el-container>
    <el-container v-else class="container">
      <router-view />
    </el-container>
  </div>
</template>

<script>

import { onUnmounted, reactive } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router'
import { localGet } from '@/utils'

import { SYSTEM_TITLE } from './global.config'

const USER_MENUS = [
    {
        title: '系统管理',
        sub: [
            {
                icon: 'el-icon-menu',
                title: 'Demo',
                code: 'demo',
                path: '/demo'
            }
        ]
    },
    {
        title: '模块管理',
        sub: [
            {
                icon: 'el-icon-menu',
                title: '分类管理',
                code: 'category',
                path: '/category',
            },
            {
                icon: 'el-icon-menu',
                title: '商品管理',
                code: 'good',
                path: '/good',
            }
        ]

    }
]

function getUserMenus(){
  
  return USER_MENUS
}

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const noMenu = ['/login']
    const router = useRouter()
    const state = reactive({
      ...{SYSTEM_TITLE},
      USER_MENUS: getUserMenus(),
      showMenu: true,
      defaultOpen: [],
      currentPath: '/',
      count: {
        number: 1
      }
    })
    // 监听浏览器原生回退事件
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', () => {
        if (!localGet('token')) {
          state.showMenu = false
        }
      }, false);
    }
    
    const unwatch = router.beforeEach((to, from, next) => {
      if (to.path == '/login') {
        // 如果路径是 /login 则正常执行
        next()
      } else {
        // 如果不是 /login，判断是否有 token
        if (!localGet('token')) {
          // 如果没有，则跳至登录页面
          next({ path: '/login' })
        } else {
          // 否则继续执行
          next()
        }
      }
      state.showMenu = !noMenu.includes(to.path)
      state.currentPath = to.path
      // console.log('to.name', to.name)
      document.title =  SYSTEM_TITLE
    })

    onUnmounted(() => {
      unwatch()
    })

    return {
      state
    }
  }
}
</script>

<style scoped>
  .layout {
    min-height: 100vh;
    background-color: #ffffff;
  }
  .container {
    height: 100vh;
  }
  .aside {
    width: 200px!important;
    background-color: #222832;
    overflow: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
  }
  .aside::-webkit-scrollbar {
    display: none;
  }
  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
  }
  .head > div {
    display: flex;
    align-items: center;
  }

  .head img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  .head span {
    font-size: 20px;
    color: #ffffff;
  }
  .line {
    border-top: 1px solid hsla(0,0%,100%,.05);
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  .content {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow: hidden;
  }
  .main {
    height: calc(100vh - 100px);
    overflow: auto;
    padding: 10px;
  }
</style>
<style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .el-menu {
    border-right: none!important;
  }
  .el-submenu {
    border-top: 1px solid hsla(0, 0%, 100%, .05);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  .el-submenu:first-child {
    border-top: none;
  }
  .el-submenu [class^="el-icon-"] {
    vertical-align: -1px!important;
  }
  a {
    color: #409eff;
    text-decoration: none;
  }
  .el-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .el-popper__arrow {
    display: none;
  }
</style>
