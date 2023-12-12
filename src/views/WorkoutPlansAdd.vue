<script setup>
import PageHeader from "../components/PageHeader.vue";
import WorkoutPlansDataService from "../services/WorkoutPlansDataService";
import WorkoutPlanAddTable from "../components/WorkoutPlanAddTable.vue";
</script>

<script>
export default {
  name: "WorkoutPlanAdd",
  data() {
    return {
      workoutPlan: {
        panId: null,
      },
      page: {
        title: "Your Workout Plans",
        description:
          "Access and manage your personalized workout plans designed to meet your fitness goals efficiently. This page offers a tailored experience, allowing you to view, create, and organize workout routines that suit your preferences and fitness aspirations. Stay motivated and track your progress with 'Your Workout Plans'.",
        breadcrumbs: ["Workout Plans", "Add"],
        loading: true,
        message: "",
        error: "",
      },
      submitted: false,
    };
  },

  mounted() {
    this.newWorkoutPlan();
  },

  methods: {
    saveWorkoutPlan() {
      this.page.loading = true;
      var data = {
        planId: this.workoutPlan.planId,
      };
      WorkoutPlansDataService.create(data)
        .then((response) => {
          this.submitted = true;
          this.page.loading = false;

          if (
            response.data.planId === undefined ||
            response.data.planyId === null
          ) {
            this.page.error = "Something went wrong";
          } else {
            this.workoutPlan.planId = response.data.planId;
            this.page.message = "Workout Plan saved successfully.";
            this.page.error = "";
          }
        })
        .catch((error) => {
          console.log(error);
          this.page.error = error;
        });
    },

    newWorkoutPlan() {
      this.submitted = false;
      this.workoutPlan = {};
      this.page.loading = false;
      this.page.error = "";
      this.page.message = "";
    },
  },
};
</script>

<template>
  <PageHeader :page="page" />
  <WorkoutPlanAddTable
    :workoutPlan="workoutPlan"
    @add-workout-plan="saveWorkoutPlan"
  />
</template>
