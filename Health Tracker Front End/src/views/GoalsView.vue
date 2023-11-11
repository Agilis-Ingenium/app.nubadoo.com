<script setup>
//import ActivitiesTable from "../components/ActivitiesTable.vue"
import PageHeader from "../components/PageHeader.vue"

const page = {
  title: "Keep Your ",
  description: "Store fitness sessions so you can aggregate and analyze data related to physical activities and exercises, such as steps taken, distances covered, and workout intensity."
}

// use static data to develop the table component
const items = [
   {
      "activityId":1,
      "userId":1,
      "activityType":"yoga",
      "durationMinutes":30,
      "distanceKm":null,
      "workoutIntensity":"low",
      "activityDate":"2023-09-14T23:00:00.000Z"
   },
   {
      "activityId":2,
      "userId":1,
      "activityType":"running",
      "durationMinutes":45,
      "distanceKm":5.0,
      "workoutIntensity":"moderate",
      "activityDate":"2023-09-13T23:00:00.000Z"
   },
   {
      "activityId":3,
      "userId":1,
      "activityType":"swimming",
      "durationMinutes":60,
      "distanceKm":2.0,
      "workoutIntensity":"high",
      "activityDate":"2023-09-12T23:00:00.000Z"
   },
   {
      "activityId":4,
      "userId":1,
      "activityType":"strength training",
      "durationMinutes":60,
      "distanceKm":null,
      "workoutIntensity":"high-intensity",
      "activityDate":"2023-09-11T23:00:00.000Z"
   },
   {
      "activityId":5,
      "userId":1,
      "activityType":"aerobic exercise",
      "durationMinutes":30,
      "distanceKm":10.0,
      "workoutIntensity":"high",
      "activityDate":"2023-09-10T23:00:00.000Z"
   },
   {
      "activityId":6,
      "userId":1,
      "activityType":"walking",
      "durationMinutes":45,
      "distanceKm":4.0,
      "workoutIntensity":"moderate",
      "activityDate":"2023-09-09T23:00:00.000Z"
   },
   {
      "activityId":7,
      "userId":1,
      "activityType":"bicycling",
      "durationMinutes":60,
      "distanceKm":20.0,
      "workoutIntensity":"moderate",
      "activityDate":"2023-09-08T23:00:00.000Z"
   },
   {
      "activityId":8,
      "userId":1,
      "activityType":"weightlifting",
      "durationMinutes":45,
      "distanceKm":null,
      "workoutIntensity":"moderate-intensity",
      "activityDate":"2023-09-07T23:00:00.000Z"
   },
   {
      "activityId":9,
      "userId":1,
      "activityType":"yoga",
      "durationMinutes":30,
      "distanceKm":null,
      "workoutIntensity":"low",
      "activityDate":"2023-09-06T23:00:00.000Z"
   }
]
</script>

<template>
  <PageHeader :page = page />
  <ActivitiesTable :items = items />
</template>