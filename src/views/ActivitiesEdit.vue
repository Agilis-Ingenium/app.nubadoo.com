<script setup>
import WidegtDeleteButton from "../components/WidgetDeleteButton.vue";
import WidgetViewButton from "../components/WidgetViewButton.vue";
import PageHeader from "../components/PageHeader.vue";
</script>

<script>
import ActivitiesDataService from "../services/ActivitiesDataService";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ActivitiesView",
  data() {
    return {
      currentActivity: null,
      message: "",
      page: {
        title: "Track Your Activities",
        description:
          "Store fitness sessions so you can aggregate and analyze data related to physical activities and exercises, such as steps taken, distances covered, and workout intensity.",
        breadcrumbs: ["Activities", "View", "NUMBER HERE"],
      },
    };
  },

  mounted() {
    this.message = "";
    this.getActivity(this.$route.params.id);
  },

  methods: {
    getActivity(id) {
      ActivitiesDataService.get(id)
        .then((response) => {
          this.currentActivity = response.data;
        })
        .catch((error) => {
          this.error = error.message;
          this.loading = false;
          console.log(error);
        });
    },

    deleteActivity() {
      ActivitiesDataService.delete(this.currentActivity.activityId)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ path: "/activities/list" });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateActivity() {
      ActivitiesDataService.update(
        this.currentActivity.id,
        this.currentActivity,
      )
        .then((response) => {
          console.log(response.data);
          this.message = "The activity was updated successfully!";
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

  <div v-if="currentActivity">
    <h4>Activity</h4>
    <label>Activity ID</label>
    <input v-model="currentActivity.activityId" />
    <br />
    <label>User ID</label>
    <input v-model="currentActivity.userId" />
    <br />
    <label>Activity Type</label>
    <input v-model="currentActivity.activityType" />
    <br />
    <label>Activity Date</label>
    <input v-model="currentActivity.activityDate" />
    <br />
    <label>Activity Intensity</label>
    <input v-model="currentActivity.workoutIntensity" />
    <br />
    <label>Duration (Minutes)</label>
    <input v-model="currentActivity.durationMinutes" />
    <br />
    <label>Distance (Kilometers)</label>
    <input v-model="currentActivity.distanceKm" />
    <a @click="deleteActivity"><WidegtDeleteButton /></a>
    <button @click="updateActivity">Update</button>
  </div>

  <!--- ERROR, MESSAGE -->
  <div v-else>
    <p>The workout activity record was not found!!</p>
  </div>
</template>
