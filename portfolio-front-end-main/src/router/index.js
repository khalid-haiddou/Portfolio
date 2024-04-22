import { createRouter, createWebHistory } from 'vue-router'
import Info from '../views/DashBoard/InformationPersonnelle.vue'
import Experiences from '../views/DashBoard/Experiences.vue'
import Education from '../views/DashBoard/Education.vue'
import Projects from '../views/DashBoard/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'Info',
    component: Info
  },
  {
    path: '/Experiences',
    name: 'Experiences',
    component: Experiences
  },
  {
    path: '/Educations',
    name: 'Educations',
    component: Education
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
