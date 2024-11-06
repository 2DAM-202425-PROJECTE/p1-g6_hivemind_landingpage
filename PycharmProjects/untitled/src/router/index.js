import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../Home.vue'
import Calculator from '../../Calculator.vue'
import Comments from '../../Comments.vue'
import Users from '../../Users.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/calculator', component: Calculator },
  { path: '/comments', component: Comments },
  { path: '/users', component: Users },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router