<script setup>
defineProps({
    errorMessage: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span class="font-medium">ERROR:</span>  {{ errorMessage }}
    </div>
</template>