import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/involvement',
      name: 'involvement',
      component: () => import('../views/InvolvementView.vue')
    },
    {
      path: '/mont-belu',
      name: 'mont-belu',
      component: () => import('../views/MontBeluView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/le-panoramique',
      name: 'le-panoramique',
      component: () => import('../views/LePanoramique.vue')
    }
  ]
})

export default router
