<script setup>
import WorkoutPlansTable from "../components/WorkoutPlansTable.vue";
import PageHeader from "../components/PageHeader.vue";
import WorkoutPlansDataService from "../services/WorkoutPlansDataService";
import WidgetAddButton from "../components/WidgetAddButton.vue";
import Swal from "sweetalert2";
</script>

<script>
export default {
  name: "WorkoutPlansList",
  data() {
    return {
      items: [],
      page: {
        title: "Your Workout Plans",
        description:
          "Access and manage your personalized workout plans designed to meet your fitness goals efficiently. This page offers a tailored experience, allowing you to view, create, and organize workout routines that suit your preferences and fitness aspirations. Stay motivated and track your progress with 'Your Workout Plans'.",
        breadcrumbs: ["Workout Plans", "List"],
        loading: true,
        message: "",
        error: "",
      },
    };
  },

  mounted() {
    this.retrieveWorkoutPlans();
  },

  methods: {
    retrieveWorkoutPlans() {
      WorkoutPlansDataService.getAll()
        .then((response) => {
          this.page.loading = true;
          this.items = response.data;
          this.page.message = this.items.length == 0 ? "No records found." : "";
          //console.log(response);
          this.page.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.page.error = error;
          this.page.loading = false;
        });
    },

    deleteWorkoutPlan(workoutPlanId, index) {
      Swal.fire({
        title: "DELECTION CONFIRMATION!",
        text: "Are you sure that you want to delete the item?",
        icon: "warning",
        confirmButtonText: "Yes, delete it.",
        cancelButtonText: "No, cancel.",
        showCancelButton: true,
        showCloseButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          WorkoutPlansDataService.delete(workoutPlanId)
            .then((response) => {
              //console.log(response.data);
              this.items.splice(index, 1);
              this.page.message =
                this.items.length == 0 ? "No records found." : "";
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
  },
};
</script>

<template>
  <PageHeader :page="page" />

  <div class="flex md:flex md:flex-grow flex-row justify-end space-x-1">
    <router-link to="/workout-plans/add"><WidgetAddButton /></router-link>
  </div>

  <WorkoutPlansTable
    v-if="items.length > 0"
    :workout-plans="items"
    @delete-workout-plan="deleteWorkoutPlan"
  />
</template>
