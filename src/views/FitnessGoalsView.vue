<script setup>
import FitnessGoalGrid from "../components/FitnessGoalGrid.vue";
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
        title: "Your Health Goal Hub",
        description:
          "Set your sights high and watch your journey unfold! Explore our Goals feature to define your aspirations, track your progress, and celebrate milestones. Whether you're reaching for personal triumphs or professional achievements, this is your space to dream big and turn your goals into glorious realities.",
      },
      items: [],
      loading: true,
      error: "",
    };
  },
  mounted() {
    axios
      .get("/v1/fitness-goals")
      .then((response) => {
        this.items = response.data;
        this.loading = false;
      })
      .catch((error) => {
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
    <FitnessGoalGrid :items="items" />
  </div>
</template>
