<script setup>
import FitnessGoalGrid from "../components/FitnessGoalGrid.vue";
import PageHeader from "../components/PageHeader.vue";
import FitnessGoalsDataService from "../services/FitnessGoalsDataService";
import WidgetAddButton from "../components/WidgetAddButton.vue";
import Swal from "sweetalert2";
</script>

<script>
export default {
  name: "FitnessGoalsList",
  data() {
    return {
      items: [],
      page: {
        title: "Your Health Goal Hub",
        description:
          "Set your sights high and watch your journey unfold! Explore our Goals feature to define your aspirations, track your progress, and celebrate milestones. Whether you're reaching for personal triumphs or professional achievements, this is your space to dream big and turn your goals into glorious realities.",
        breadcrumbs: ["Fitness Goals", "List"],
        loading: true,
        message: "",
        error: "",
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
          this.page.loading = true;
          this.items = response.data;
          this.page.message = this.items.length == 0 ? "No records found." : "";
          console.log(response);
          this.page.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.page.error = error;
          this.page.loading = false;
        });
    },

    deleteFitnessGoal(itemId, index) {
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
          FitnessGoalsDataService.delete(itemId)
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
    <router-link to="/fitness-goals/add"><WidgetAddButton /></router-link>
  </div>

  <FitnessGoalGrid
    v-if="items.length > 0"
    :goals="items"
    @delete-fitness-goal="deleteFitnessGoal"
  />
</template>
