import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Reverence from '../views/Reverence.vue';
import SabreLaserView from '../views/SabreLaserView.vue';
import MarcheBlessesView from '../views/MarcheBlessesView.vue';
import EstampieView from '../views/EstampieView.vue';
import EnduranceView from '../views/EnduranceView.vue';
import CommandViewVue from '@/views/CommandView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reverence',
      name: 'reverence',
      component: Reverence
    },
    {
      path: '/sabre-laser',
      name: 'sabreLaser',
      component: SabreLaserView
    },
    {
      path: '/marche-des-blesses-de-guerre',
      name: 'marche',
      component: MarcheBlessesView
    },
    {
      path: '/estampie',
      name: 'estampie',
      component: EstampieView
    },
    {
      path: '/endurance',
      name: 'endurance',
      component: EnduranceView
    },
    {
      path: '/commander',
      name: 'commander',
      component: CommandViewVue
    }
  ]
})

export default router
