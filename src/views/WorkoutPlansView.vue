<script setup>
import PageHeader from "../components/PageHeader.vue"
import WorkoutPlansTable from "../components/WorkoutPlansTable.vue"

const page = {
  title: "Your Workout Plans",
  description: "Access and manage your personalized workout plans designed to meet your fitness goals efficiently. This page offers a tailored experience, allowing you to view, create, and organize workout routines that suit your preferences and fitness aspirations. Stay motivated and track your progress with 'Your Workout Plans'."
}

// use static data to develop the table component
const items = [
    {
        "planId": 1,
        "userId": 1,
        "planName": "Weight Training Plan",
        "schedule": "weekly",
        "planDate": "2023-09-29T23:00:00.000Z",
        "goal": "Weight Loss",
        "duration": "4 Weeks",
        "description": "A comprehensive plan focused on cardio exercises, strength training, and a balanced diet."
    },
    {
        "planId": 2,
        "userId": 1,
        "planName": "Cardio Workout Plan",
        "schedule": "daily",
        "planDate": "2023-09-30T23:00:00.000Z",
        "goal": "Cardiovascular Health",
        "duration": "6 Days",
        "description": "A high-intensity cardio plan targeting overall cardiovascular health."
    },
    {
        "planId": 3,
        "userId": 1,
        "planName": "Flexibility Plan",
        "schedule": "bi-weekly",
        "planDate": "2023-09-30T23:00:00.000Z",
        "goal": "Flexibility Improvement",
        "duration": "2 Weeks",
        "description": "Focuses on yoga-based routines to enhance flexibility and reduce stiffness."
    },
    {
        "planId": 4,
        "userId": 1,
        "planName": "Strength Training Plan",
        "schedule": "monthly",
        "planDate": "2023-10-02T23:00:00.000Z",
        "goal": "Muscle Gain",
        "duration": "1 Month",
        "description": "Intense strength training regimen to stimulate muscle growth and strength."
    }
]
</script>

<template>
    <PageHeader :page = page />
    <WorkoutPlansTable :items = items />
</template>




Workout Plan 2
Goal: Muscle Gain
Duration: 8 weeks
Description: High-intensity workouts targeting different muscle groups, including resistance training and increased protein intake.
Workout Plan 3
Goal: Endurance Building
Duration: 6 weeks
Description: Emphasizes aerobic exercises, interval training, and gradual endurance enhancement techniques.
Workout Plan 4
Goal: Flexibility Improvement
Duration: 3 weeks
Description: Yoga-based routine combining stretches, poses, and breathing exercises to improve flexibility and reduce stiffness.