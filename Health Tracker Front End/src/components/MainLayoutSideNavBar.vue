<script setup>
import IconSideBarOverview from './icons/IconSideBarOverview.vue'
import IconSideBarActivities from './icons/IconSideBarActivities.vue'
import IconSideBarFitnessGoals from './icons/IconSideBarFitnessGoals.vue'
import IconSideBarFoodItems from './icons/IconSideBarFoodItems.vue'
import IconSideBarMetrics from './icons/IconSideBarMetrics.vue'
import IconSideBarWorkoutPlans from './icons/IconSideBarWorkoutPlans.vue'
import IconSideBarMealLogs from './icons/IconSideBarMealLogs.vue'
import IconSideBarBottomDXPortal from './icons/IconSideBarBottomDXPortal.vue'
import IconSideBarBottomGetSupport from './icons/IconSideBarBottomGetSupport.vue'
import IconSideBarBottomWebsite from './icons/IconSideBarBottomWebsite.vue'
import IconSideBarBottomTermsService from './icons/IconSideBarBottomTermsService.vue'

import SideNavBarMainMenuOption from './SideNavBarMainMenuOption.vue'
import SideNavBarBottomMenuOption from './SideNavBarBottomMenuOption.vue'
</script>

<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav"
    id="drawer-navigation"
  >
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
      <form action="#" method="GET" class="md:hidden mb-2">
        <label for="sidebar-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="sidebar-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search"
          />
        </div>
      </form>
      <ul class="space-y-2">
        <router-link to="/">
          <SideNavBarMainMenuOption label="Progress">
            <IconSideBarOverview />
          </SideNavBarMainMenuOption>
        </router-link>

        <router-link to="/activities">
          <SideNavBarMainMenuOption label="Activities">
            <IconSideBarActivities />
          </SideNavBarMainMenuOption>
        </router-link>

        <router-link to="/fitness-goals">
          <SideNavBarMainMenuOption label="Fitness Goals">
            <IconSideBarFitnessGoals />
          </SideNavBarMainMenuOption>
        </router-link>

        <router-link to="/food-items">
          <SideNavBarMainMenuOption label="Food Items">
            <IconSideBarFoodItems />
          </SideNavBarMainMenuOption>
        </router-link>

        <router-link to="/meal-logs">
          <SideNavBarMainMenuOption label="Meal Logs">
            <IconSideBarMealLogs />
          </SideNavBarMainMenuOption>
        </router-link>

        <router-link to="/metrics">
          <SideNavBarMainMenuOption label="Metrics">
            <IconSideBarMetrics />
          </SideNavBarMainMenuOption>
        </router-link>

        <router-link to="/workout-plans">
          <SideNavBarMainMenuOption label="Workout Plans">
            <IconSideBarWorkoutPlans />
          </SideNavBarMainMenuOption>
        </router-link>
      </ul>
    </div>

    <div
      class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20"
    >
      <SideNavBarBottomMenuOption
        name="website"
        label="Product Website"
        link="https://www.nubadoo.com"
      >
        <IconSideBarBottomWebsite />
      </SideNavBarBottomMenuOption>

      <SideNavBarBottomMenuOption
        name="dx-portal"
        label="DX Portal"
        link="https://developer.nubadoo.com"
      >
        <IconSideBarBottomDXPortal />
      </SideNavBarBottomMenuOption>

      <SideNavBarBottomMenuOption
        name="terms-service"
        label="Terms of Service"
        link="https://www.nubadoo.com/terms"
      >
        <IconSideBarBottomTermsService />
      </SideNavBarBottomMenuOption>

      <SideNavBarBottomMenuOption
        name="get-support"
        label="Get Support"
        link="https://www.nubadoo.com/contact"
      >
        <IconSideBarBottomGetSupport />
      </SideNavBarBottomMenuOption>
    </div>
  </aside>
</template>
