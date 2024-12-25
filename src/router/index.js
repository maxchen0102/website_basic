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
  history: createWebHistory(),
  routes
})

export default router