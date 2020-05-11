import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/home')
const category = () => import('views/category/category')
const cart = () => import('views/cart/cart')
const profile = () => import('views/profile/profile')
const detail = ()=> import('views/detail/detail')

// 安装插件
Vue.use(VueRouter)

// 创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    name: 'home'
  },
  {
    path: '/category',
    component: category,
    name: 'category'
  },
  {
    path: '/cart',
    component: cart,
    name: 'cart'
  },
  {
    path: '/profile',
    component: profile,
    name: 'profile'
  },
  {
    path:'/detail/:itemId',
    component: detail,
    name: 'detail'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导出
export default router
