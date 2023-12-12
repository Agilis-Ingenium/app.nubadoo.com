<script setup>
import PageHeader from "../components/PageHeader.vue";
import FitnessGoalsDataService from "../services/FitnessGoalsDataService";
import FitnessGoalAddTable from "../components/FitnessGoalAddTable.vue";
</script>

<script>
export default {
  name: "FitnessGoalAdd",
  data() {
    return {
      fitnessGoal: {
        goalId: null,
        userId: null,
        goalType: null,
        targetValue: null,
        targetDate: null,
        achieved: null,
      },
      page: {
        title: "Your Health Goal Hub",
        description:
          "Set your sights high and watch your journey unfold! Explore our Goals feature to define your aspirations, track your progress, and celebrate milestones. Whether you're reaching for personal triumphs or professional achievements, this is your space to dream big and turn your goals into glorious realities.",
        breadcrumbs: ["Fitness Goals", "Add"],
        loading: true,
        message: "",
        error: "",
      },
      submitted: false,
    };
  },

  mounted() {
    this.newFitnessGoal();
  },

  methods: {
    saveFitnessGoal() {
      this.page.loading = true;
      var data = {
        userId: this.fitnessGoal.userId,
        goalType: this.fitnessGoal.goalType,
        targetValue: this.fitnessGoal.targetValue,
        targetDate: this.fitnessGoal.targetDate,
        achieved: this.fitnessGoal.achieved,
      };

      FitnessGoalsDataService.create(data)
        .then((response) => {
          this.submitted = true;
          this.page.loading = false;

          if (
            response.data.goalId === undefined ||
            response.data.goalId === null
          ) {
            this.page.error = "Something went wrong";
          } else {
            this.fitnessGoal.goalId = response.data.goalId;
            this.page.message = "Fitness Goal saved successfully.";
            this.page.error = "";
          }
        })
        .catch((error) => {
          console.log(error);
          this.page.error = error;
        });
    },

    newFitnessGoal() {
      this.submitted = false;
      this.fitnessGoal = {};
      this.page.loading = false;
      this.page.error = "";
      this.page.message = "";
    },
  },
};
</script>

<template>
  <PageHeader :page="page" />
  <FitnessGoalAddTable
    :fitness-goal="fitnessGoal"
    @add-fitness-goal="saveFitnessGoal"
  />
</template>
