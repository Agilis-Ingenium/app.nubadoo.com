<script setup>
import PageHeader from "../components/PageHeader.vue";
import ActivitiesDataService from "../services/ActivitiesDataService";
import ActivityAddTable from "../components/ActivityAddTable.vue";
</script>

<script>
export default {
  name: "ActivityAdd",
  data() {
    return {
      activity: {
        activityId: null,
        userId: null,
        activityType: null,
        activityDate: null,
        activityIntensity: null,
        durationMinutes: null,
        distanceKm: null,
      },
      page: {
        title: "Track Your Activities",
        description:
          "Store fitness sessions so you can aggregate and analyze data related to physical activities and exercises, such as steps taken, distances covered, and workout intensity.",
        breadcrumbs: ["Activities", "Add"],
        loading: true,
        message: "",
        error: "",
      },
      submitted: false,
    };
  },

  mounted() {
    this.newActivity();
  },

  methods: {
    saveActivity() {
      //console.log(this.activity);
      this.page.loading = true;
      var data = {
        userId: this.activity.userId,
        activityType: this.activity.activityType,
        activityDate: this.activity.activityDate[0],
        workoutIntensity: this.activity.workoutIntensity,
        durationMinutes: this.activity.durationMinutes,
        distanceKm: this.activity.distanceKm,
      };
      //console.log(data);
      ActivitiesDataService.create(data)
        .then((response) => {
          this.submitted = true;
          this.page.loading = false;

          if (
            response.data.activityId === undefined ||
            response.data.activityId === null
          ) {
            this.page.error = "Something went wrong";
          } else {
            this.activity.activityId = response.data.activityId;
            this.page.message = "Activity saved successfully.";
            this.page.error = "";
          }
        })
        .catch((error) => {
          console.log(error);
          this.page.error = error;
        });
    },

    newActivity() {
      this.submitted = false;
      this.activity = {};
      this.page.loading = false;
      this.page.error = "";
      this.page.message = "";
    },
  },
};
</script>

<template>
  <PageHeader :page="page" />
  <ActivityAddTable :activity="activity" @add-activity="saveActivity" />
</template>
