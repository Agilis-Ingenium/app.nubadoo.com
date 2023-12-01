<script setup>
defineProps(['link', 'name', 'label'])
</script>

<template>
  <a
    :href="link"
    target="_blank"
    :data-tooltip-target="name"
    class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
  >
    <svg
      width="25px"
      height="25px"
      stroke-width="1"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <slot></slot>
    </svg>
  </a>
  <div
    :id="name"
    role="tooltip"
    class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
  >
    {{ label }}
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>
</template>
