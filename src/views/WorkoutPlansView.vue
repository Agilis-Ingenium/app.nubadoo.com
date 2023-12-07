<script setup>
import WorkoutPlansTable from "../components/WorkoutPlansTable.vue";
import PageHeader from "../components/PageHeader.vue";
import AlertError from "../components/AlertError.vue";
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      page: {
        title: "Your Workout Plans",
        description:
          "Access and manage your personalized workout plans designed to meet your fitness goals efficiently. This page offers a tailored experience, allowing you to view, create, and organize workout routines that suit your preferences and fitness aspirations. Stay motivated and track your progress with 'Your Workout Plans'.",
      },
      items: [],
      loading: true,
      error: "",
    };
  },
  mounted() {
    axios
      .get("/v1/workout-plans")
      .then((response) => {
        this.items = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
        this.error = error.message;
        this.loading = false;
      });
  },
};
</script>

<template>
  <PageHeader :page="page" />

  <div v-if="loading">
    <WidgetLoadingSpinner />
  </div>
  <div v-else-if="error">
    <AlertError :errorMessage="error" />
  </div>
  <div v-else>
    <WorkoutPlansTable :items="items" />
  </div>
</template>
