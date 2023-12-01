<script setup>
import MainLayoutTopNavBar from './components/MainLayoutTopNavBar.vue'
import MainLayoutSideNavBar from './components/MainLayoutSideNavBar.vue'
import MainLayoutBreadcrumbs from './components/MainLayoutBreadcrumbs.vue'
</script>

<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <MainLayoutTopNavBar></MainLayoutTopNavBar>
    <MainLayoutSideNavBar></MainLayoutSideNavBar>
    <main class="p-4 md:ml-64 h-auto pt-20">
      <MainLayoutBreadcrumbs />
      <RouterView />
    </main>
  </div>
</template>
