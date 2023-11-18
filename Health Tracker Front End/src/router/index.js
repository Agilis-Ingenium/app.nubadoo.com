import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import FitnessGoalsView from '../views/FitnessGoalsView.vue'
import FoodItemsView from '../views/FoodItemsView.vue'
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
      path: '/fitness-goals',
      name: 'FitnessGoals',
      component: FitnessGoalsView
    },
    {
      path: '/food-items',
      name: 'FoodItems',
      component: FoodItemsView
    },
    {
      path: '/:catchAll(.*)*',
      name: 'PageNotFound',
      component: PageNotFoundView
    }
  ]
})

export default router
