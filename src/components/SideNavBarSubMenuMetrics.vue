<template>
  <ul id="dropdown-pages" class="hidden py-2 space-y-2">
    <li>
      <router-link to="/metrics/weight">
        <div
          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          Weight
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/metrics/heart">
        <div
          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          Heart
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/metrics/sleep">
        <div
          class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        >
          Sleep
        </div>
      </router-link>
    </li>
  </ul>
</template>
