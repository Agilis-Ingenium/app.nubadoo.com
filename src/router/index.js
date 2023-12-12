import HomeView from "../views/HomeView.vue";

// activities
import ActivitiesList from "../views/ActivitiesList.vue";
import ActivitiesEdit from "../views/ActivitiesEdit.vue";
import ActivitiesAdd from "../views/ActivitiesAdd.vue";

// fitness-goals
import FitnessGoalsList from "../views/FitnessGoalsList.vue";
import FitnessGoalsEdit from "../views/FitnessGoalsEdit.vue";
import FitnessGoalsAdd from "../views/FitnessGoalsAdd.vue";

// food-items
import FoodItemsList from "../views/FoodItemsList.vue";
import FoodItemsEdit from "../views/FoodItemsEdit.vue";
import FoodItemsAdd from "../views/FoodItemsAdd.vue";

// meal-logs
//import MealLogsList from "../views/MealLogsList.vue";
//import MealLogsEdit from "../views/MealLogsEdit.vue";
//import MealLogsAdd from "../views/MealLogsAdd.vue";

// workout-plans
import WorkoutPlansList from "../views/WorkoutPlansList.vue";
import WorkoutPlansEdit from "../views/WorkoutPlansEdit.vue";
import WorkoutPlansAdd from "../views/WorkoutPlansAdd.vue";

// other
import PageNotFoundView from "../views/PageNotFoundView.vue";

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/activities",
    alias: "/activities/list",
    name: "ActivitiesList",
    component: ActivitiesList,
  },
  {
    path: "/activities/view/:id",
    name: "ActivitiesEdit",
    component: ActivitiesEdit,
  },
  {
    path: "/activities/add",
    name: "ActivitiesAdd",
    component: ActivitiesAdd,
  },

  {
    path: "/fitness-goals",
    alias: "/fitness-goals/list",
    name: "FitnessGoalsList",
    component: FitnessGoalsList,
  },
  {
    path: "/fitness-goals/view/:id?",
    name: "FitnessGoalsEdit",
    component: FitnessGoalsEdit,
  },
  {
    path: "/fitness-goals/add",
    name: "FitnessGoalsAdd",
    component: FitnessGoalsAdd,
  },
  {
    path: "/food-items",
    alias: "/food-items/list",
    name: "FoodItemsList",
    component: FoodItemsList,
  },
  {
    path: "/food-items/view/:id?",
    name: "FoodItemsEdit",
    component: FoodItemsEdit,
  },
  {
    path: "/food-items/add",
    name: "FoodItemsAdd",
    component: FoodItemsAdd,
  },

  {
    path: "/workout-plans",
    alias: "/workout-plans/list",
    name: "WorkoutPlansList",
    component: WorkoutPlansList,
  },
  {
    path: "/workout-plans/view/:id?",
    name: "WorkoutPlansEdit",
    component: WorkoutPlansEdit,
  },
  {
    path: "/workout-plans/add",
    name: "WorkoutPlansAdd",
    component: WorkoutPlansAdd,
  },

  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
