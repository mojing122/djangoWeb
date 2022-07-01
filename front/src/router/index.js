import { createRouter, createWebHistory } from 'vue-router'
import TabBar from '../page/TabBar.vue'
import login from '../page/login.vue'

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: TabBar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
