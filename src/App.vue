<script setup>
import MainLayoutTopNavBar from "./components/MainLayoutTopNavBar.vue";
import MainLayoutSideNavBar from "./components/MainLayoutSideNavBar.vue";
</script>

<script>
export default {
  name: "app",
};
</script>

<template>
  <!-- Tooltip to indicate unimplemented things -->
  <div
    id="tooltip-default"
    role="tooltip"
    class="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
  >
    Not yet implement.
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
  <!---->

  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <MainLayoutTopNavBar></MainLayoutTopNavBar>
    <MainLayoutSideNavBar></MainLayoutSideNavBar>
    <main class="p-4 md:ml-64 h-auto pt-20">
      <RouterView />
    </main>
  </div>
</template>
