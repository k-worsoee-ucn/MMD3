import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
