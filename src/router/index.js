import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../components/contact.vue'
import HomaPage from '../components/HomePage.vue'
import About from '../components/About.vue'
import Service from "../components/Service.vue";


const routes = [
  {
    path:'/contact',
    name:'contact',
    component:Contact
  },
  {
    path:'/',
    name:'homepage',
    component: HomaPage
  },
  {
    path:'/about',
    name:'about',
    component: About
  },
  {
    path:'/service',
    name:'service',
    component: Service
  }
]

const router = createRouter({
  history: createWebHistory('/website_basic/'), // 告訴 Router 所有路由的基礎路徑
  routes
})

export default router