<script setup>
import FitnessGoalGrid from "../components/FitnessGoalGrid.vue";
import PageHeader from "../components/PageHeader.vue";
import AlertError from "../components/AlertError.vue";
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue";
import AlertMessage from "../components/AlertMessage.vue";
</script>

<script>
import FitnessGoalsDataService from "../services/FitnessGoalsDataService";

export default {
  name: "FitnessGoalsList",
  data() {
    return {
      fitnessGoals: [],
      currentFitnessGoal: null,
      currentIndex: -1,
      error: "",
      page: {
        title: "Your Health Goal Hub",
        description:
          "Set your sights high and watch your journey unfold! Explore our Goals feature to define your aspirations, track your progress, and celebrate milestones. Whether you're reaching for personal triumphs or professional achievements, this is your space to dream big and turn your goals into glorious realities.",
        breadcrumbs: ["Fitness Goals", "List"],
      },
    };
  },

  mounted() {
    this.retrieveFitnessGoals();
  },

  methods: {
    retrieveFitnessGoals() {
      FitnessGoalsDataService.getAll()
        .then((response) => {
          this.fitnessGoals = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },

    deleteActivity(fitnessGoalId, index) {
      FitnessGoalsDataService.delete(fitnessGoalId)
        .then((response) => {
          console.log(response.data);
          this.activities.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <PageHeader :page="page" />

  <div v-if="error">
    <AlertError :error-message="error" />
  </div>

  <div v-else-if="fitnessGoals.length == 0">
    <AlertMessage alert-message="No fitness goals found." />
  </div>

  <div v-else>
    <FitnessGoalGrid :items="fitnessGoals" />
  </div>
</template>
