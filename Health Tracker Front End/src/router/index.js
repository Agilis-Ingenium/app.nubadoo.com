import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/activities',
      name: 'Activities',
      component: ActivitiesView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'PageNotFound',
      component: PageNotFoundView
    }
  ]
})

export default router
