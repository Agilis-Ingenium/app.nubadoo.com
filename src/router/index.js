import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Activities from "../views/Activities.vue";

import FitnessGoalsView from "../views/FitnessGoalsView.vue";
import FoodItemsView from "../views/FoodItemsView.vue";
import WorkoutPlansView from "../views/WorkoutPlansView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";
import MetricsWeightView from "../views/MetricsWeightView.vue";
import CaptureMetricsView from "../views/CaptureMetricsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/activities/:action/:id?",
      name: "Activities",
      component: Activities,
    },
    {
      path: "/fitness-goals",
      name: "FitnessGoals",
      component: FitnessGoalsView,
    },
    {
      path: "/food-items",
      name: "FoodItems",
      component: FoodItemsView,
    },
    {
      path: "/workout-plans",
      name: "WorkoutPlans",
      component: WorkoutPlansView,
    },
    {
      path: "/weight",
      name: "MetricsWeight",
      component: MetricsWeightView,
    },
    {
      path: "/metrics",
      name: "Capture Matrics",
      component: CaptureMetricsView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "PageNotFound",
      component: PageNotFoundView,
    },
  ],
});

export default router;
