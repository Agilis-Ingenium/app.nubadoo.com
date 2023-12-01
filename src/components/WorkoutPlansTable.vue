<script setup>
import WorkoutPlanCard from "./WorkoutPlanCard.vue"

defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="grid gap-8 lg:grid-cols-2">
        <WorkoutPlanCard  v-for="item in items" :key="item.planId" :item="item" />                
    </div>  
</template>