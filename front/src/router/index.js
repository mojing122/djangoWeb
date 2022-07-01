import { createRouter, createWebHistory } from 'vue-router'
import TabBar from '../page/TabBar.vue'
import login from '../page/login.vue'
import home from '../page/Home.vue'
import product from '../page/Product.vue'
import cate from '../page/Cate.vue'
import myApp from '../page/myApp.vue'


const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: myApp,
    children: [
        {
          path: '',
          component:home
        },
        {
          path: '/main',
          component:home
        },
        {
          path: '/cate',
          component:cate
        },
        {
        path: '/product',
        component: product
        },
    ]
  },
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
