<script setup>
  defineProps(['label'])
</script>

<template>
    <li>
      <a
        href="#"
        class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <svg
          width="35px"
          height="35px"
          stroke-width="1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <slot></slot>
        </svg>
        <span class="ml-3">{{ label }}</span>
      </a>
    </li>
</template>
