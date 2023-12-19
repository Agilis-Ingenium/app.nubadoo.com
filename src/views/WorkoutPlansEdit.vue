<script setup>
import PageHeader from "../components/PageHeader.vue";
import WorkoutPlansDataService from "../services/WorkoutPlansDataService";
import WorkoutPlanViewUpdateTable from "../components/WorkoutPlanViewUpdateTable.vue";
import Swal from "sweetalert2";
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "WorkoutPlansView",
  data() {
    return {
      currentWorkoutPlan: null,
      page: {
        title: "Your Workout Plans",
        description:
          "Access and manage your personalized workout plans designed to meet your fitness goals efficiently. This page offers a tailored experience, allowing you to view, create, and organize workout routines that suit your preferences and fitness aspirations. Stay motivated and track your progress with 'Your Workout Plans'.",
        breadcrumbs: ["Workout Plans", "View"],
        loading: true,
        message: "",
        error: "",
      },
    };
  },

  mounted() {
    this.page.message = "";
    var requestedId = this.$route.params.id;

    // Make sure requested id is just numbers
    if (/^[0-9]*$/.test(requestedId)) {
      this.page.breadcrumbs.push(requestedId);

      // Retrieve record
      this.getWorkoutPlan(requestedId);
    } else {
      this.page.error = "Invalid Workout Plan ID.";
      this.page.loading = false;
    }
  },

  methods: {
    getWorkoutPlan(id) {
      WorkoutPlansDataService.get(id)
        .then((response) => {
          this.currentWorkoutPlan = response.data;
          this.page.loading = false;
          //console.log(response);
        })
        .catch((error) => {
          this.page.error = error.message;
          this.page.loading = false;
          //console.log(error);
        });
    },

    deleteWorkoutPlan() {
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
          WorkoutPlansDataService.delete(this.currentWorkoutPlan.planId)
            .then((response) => {
              //console.log(response.data);
              this.page.message = "Record deleted"; // Never able to display- figure out how to
              this.page.loading = false;
              this.$router.push({ path: "/workout-plans" });
            })
            .catch((error) => {
              this.page.error = error;
              this.page.loading = false;
              //console.log(error);
            });
        }
      });
    },

    updateWorkoutPlan() {
      WorkoutPlansDataService.update(
        this.currentWorkoutPlan.id,
        this.currentWorkoutPlan,
      )
        .then((response) => {
          console.log(response.data);
          this.message = "The workout plan was updated successfully!";
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
  <WorkoutPlanViewUpdateTable
    v-if="currentWorkoutPlan"
    :workout-plan="currentWorkoutPlan"
    @delete-workout-plan="deleteWorkoutPlan"
    @update-workout-plan="updateWorkoutPlan"
  />
</template>
