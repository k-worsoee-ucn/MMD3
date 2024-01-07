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
      path: '/oplevelser',
      name: 'oplevelser',
      component: () => import('../views/OplevelserView.vue')
    },
    {
      path: '/aktiviteter',
      name: 'aktiviteter',
      component: () => import('../views/AktiviteterView.vue')
    },
    {
      path: '/udlejningsvogne',
      name: 'udlejningsvogne',
      component: () => import('../views/UdlejningsvogneView.vue')
    },
    {
      path: '/hytter',
      name: 'hytter',
      component: () => import('../views/HytterView.vue')
    },
    {
      path: '/camping',
      name: 'camping',
      component: () => import('../views/CampingView.vue')
    },
  ]
})

export default router
