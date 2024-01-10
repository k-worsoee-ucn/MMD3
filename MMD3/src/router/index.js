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
    {
      path: '/myprofile',
      name: 'myprofile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/opretaktivitet',
      name: 'opretaktivitet',
      component: () => import('../views/OpretView.vue')
    },
    {
      path: '/mineaktiviteter',
      name: 'mineaktiviteter',
      component: () => import('../views/MineAktiviteterView.vue')
    },
    {
      path: '/anmeldelser',
      name: 'anmeldelser',
      component: () => import('../views/AnmeldelserView.vue')
    },
    {
      path: '/aktivitet',
      name: 'aktivitet',
      component: () => import('../views/EnkeltAktivitetView.vue')
    },
    {
      path: '/campingaktivitet',
      name: 'campingaktivitet',
      component: () => import('../views/EnkeltCampAktivitetView.vue')
    },
  ]
})

export default router
