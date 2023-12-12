<script setup>
import PageHeader from "../components/PageHeader.vue";
import FitnessGoalsDataService from "../services/FitnessGoalsDataService";
import FitnessGoalViewUpdateTable from "../components/FitnessGoalViewUpdateTable.vue";
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "FitnessGoalsEdit",
  data() {
    return {
      currentFitnessGoal: {},
      message: "",
      page: {
        title: "Your Health Goal Hub",
        description:
          "Set your sights high and watch your journey unfold! Explore our Goals feature to define your aspirations, track your progress, and celebrate milestones. Whether you're reaching for personal triumphs or professional achievements, this is your space to dream big and turn your goals into glorious realities.",
        breadcrumbs: ["Fitness Goals", "View"],
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
      this.getFitnessGoal(requestedId);
    } else {
      this.page.error = "Invalid Fitness Goal ID.";
      this.page.loading = false;
    }
  },

  methods: {
    getFitnessGoal(id) {
      FitnessGoalsDataService.get(id)
        .then((response) => {
          console.log(response.data);
          this.currentFitnessGoal = response.data;
          this.page.loading = false;
        })
        .catch((error) => {
          this.page.error = error.message;
          this.page.loading = false;
          //console.log(error);
        });
    },

    deleteFitnessGoal() {
      this.page.loading = true;
      FitnessGoalsDataService.delete(this.currentFitnessGoal.goalId)
        .then((response) => {
          //console.log(response.data);
          this.page.message = "Record deleted"; // Never able to display- figure out how to
          this.page.loading = false;
          this.$router.push({ name: "FitnessGoalsList" });
        })
        .catch((error) => {
          this.page.error = error;
          this.page.loading = false;
          //console.log(error);
        });
    },

    updateFitnessGoal() {
      this.page.loading = true;

      // Prep a new object without the fitness goal id for posting
      const objectToPost = { ...this.currentFitnessGoal };
      delete objectToPost["fitnessGoalId"];
      //console.log(objectToPost)

      FitnessGoalsDataService.update(
        this.currentFitnessGoal.fitnessGoalId,
        objectToPost,
      )
        .then((response) => {
          //console.log(response);
          this.page.loading = false;
          this.page.message = "The afitness goal was updated successfully!";
        })
        .catch((error) => {
          //console.log(error);
          this.page.error = error;
          this.page.loading = false;
        });
    },
  },
};
</script>

<template>
  <PageHeader :page="page" />
  <FitnessGoalViewUpdateTable
    v-if="currentFitnessGoal"
    :fitnessGoal="currentFitnessGoal"
    @delete-fitness-goal="deleteFitnessGoal"
    @update-fitness-goal="updateFitnessGoal"
  />
</template>
