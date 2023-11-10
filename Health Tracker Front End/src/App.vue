<script setup>
import MainLayoutTopNavBar from './components/MainLayoutTopNavBar.vue'
import MainLayoutSideNavBar from './components/MainLayoutSideNavBar.vue'
import MainLayoutMainArea from './components/MainLayoutMainArea.vue'
</script>

<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <MainLayoutTopNavBar></MainLayoutTopNavBar>
    <MainLayoutSideNavBar></MainLayoutSideNavBar>
    <MainLayoutMainArea></MainLayoutMainArea>
  </div>

  <!--
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>


  <RouterView />
    -->
</template>
