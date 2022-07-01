import { createRouter, createWebHistory } from 'vue-router'
import TabBar from '../page/TabBar.vue'

const routes = [
  {
    path: '',
    name: 'l',
    component: TabBar
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
