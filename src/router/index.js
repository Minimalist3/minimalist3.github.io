import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: About
    },
  //  {
  //    path: '/contact',
  //    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  //  },
    {
      path: '/projects',
      component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
    },
    { 
      path: '/:pathMatch(.*)*',
      component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
    },
  ],
  linkActiveClass: 'active'
})

export default router
