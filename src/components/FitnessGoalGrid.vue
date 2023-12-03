<script setup>
import FitnessGoalCard from "./FitnessGoalCard.vue"

defineProps({
    items: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
        <FitnessGoalCard v-for="item in items" :key="item.goalId" :item="item" />
    </div>
</template>