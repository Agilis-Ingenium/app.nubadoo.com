<script setup>
import WorkoutPlansTable from "../components/WorkoutPlansTable.vue"
import PageHeader from "../components/PageHeader.vue"
import AlertError from "../components/AlertError.vue"
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue"
</script>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      page : {
        title: "Your Workout Plans",
        description: "Access and manage your personalized workout plans designed to meet your fitness goals efficiently. This page offers a tailored experience, allowing you to view, create, and organize workout routines that suit your preferences and fitness aspirations. Stay motivated and track your progress with 'Your Workout Plans'."
    },
      items: [],
      loading: true,
      error: ''
    };
  },
  mounted() {
    axios.get('/v1/workout-plans')
      .then(response => {
         this.items2 = response.data;
         this.loading = false;
      })
      .catch(error => {
        this.error = error.message;
        this.loading = false;
      });
  }
};


/* use static data to develop the table component */
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

    <div v-if="loading">
      <WidgetLoadingSpinner />
    </div>
    <div v-else-if="error">
      <AlertError :errorMessage = error />
    </div>
    <div v-else>
      <WorkoutPlansTable :items = items />
    </div>
</template>