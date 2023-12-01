<script setup>
//import ActivitiesTable from "../components/ActivitiesTable.vue"
import PageHeader from "../components/PageHeader.vue"

const page = {
  title: "Track Your Weight",
  description: "This page provides you with a visual representation of your weight journey using an interactive chart. You can easily adjust and manage your previously recorded weight entries here. Take control of your progress and explore your weight data effortlessly!."
}

// use static data to develop the table component
const items = [
  {
    "userId": 1,
    "date": "2023-09-01",
    "weight": 160
  },
  {
    "userId": 1,
    "date": "2023-09-15",
    "weight": 158
  },
  {
    "userId": 1,
    "date": "2023-10-01",
    "weight": 155
  },
  {
    "userId": 1,
    "date": "2023-10-15",
    "weight": 152
  }
]
</script>

<template>
  <PageHeader :page = page />
</template>