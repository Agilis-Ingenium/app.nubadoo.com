<script setup>
defineProps({
  alertMessage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
    role="alert"
  >
    <span class="font-medium">MESSAGE:</span> {{ alertMessage }}
  </div>
</template>
