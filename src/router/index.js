import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import AddTask from '../views/AddTask'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router