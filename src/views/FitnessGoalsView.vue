<script setup>
import FitnessGoalGrid from "../components/FitnessGoalGrid.vue"
import PageHeader from "../components/PageHeader.vue"

const page = {
  title: "Your Health Goal Hub",
  description: "Set your sights high and watch your journey unfold! Explore our Goals feature to define your aspirations, track your progress, and celebrate milestones. Whether you're reaching for personal triumphs or professional achievements, this is your space to dream big and turn your goals into glorious realities."
}

// use static data to develop the table component
const items = [
    {
        "goalId": 1,
        "userId": 1,
        "goalType": "weight_loss",
        "targetValue": 10.0,
        "targetDate": "2023-12-28T00:00:00.000Z",
        "achieved": false
    },
    {
        "goalId": 2,
        "userId": 1,
        "goalType": "muscle_gain",
        "targetValue": 5.0,
        "targetDate": "2023-11-30T00:00:00.000Z",
        "achieved": false
    },
    {
        "goalId": 3,
        "userId": 1,
        "goalType": "fitness",
        "targetValue": 10.0,
        "targetDate": "2023-12-31T00:00:00.000Z",
        "achieved": false
    },
    {
        "goalId": 4,
        "userId": 1,
        "goalType": "nutrition",
        "targetValue": 5.0,
        "targetDate": "2023-11-30T00:00:00.000Z",
        "achieved": false
    },
    {
        "goalId": 4,
        "userId": 1,
        "goalType": "health",
        "targetValue": 5.0,
        "targetDate": "2023-11-30T00:00:00.000Z",
        "achieved": false
    },
    {
        "goalId": 4,
        "userId": 1,
        "goalType": "other",
        "targetValue": 5.0,
        "targetDate": "2023-11-30T00:00:00.000Z",
        "achieved": true
    }
]
</script>

<template>
  <PageHeader :page = page />
  <FitnessGoalGrid :items = items />
</template>