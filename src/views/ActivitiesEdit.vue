<script setup>
import PageHeader from "../components/PageHeader.vue";
import ActivitiesDataService from "../services/ActivitiesDataService";
import ActivityViewUpdateTable from "../components/ActivityViewUpdateTable.vue";
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ActivitiesView",
  data() {
    return {
      currentActivity: null,
      page: {
        title: "Track Your Activities",
        description:
          "Store fitness sessions so you can aggregate and analyze data related to physical activities and exercises, such as steps taken, distances covered, and workout intensity.",
        breadcrumbs: ["Activities", "View"],
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
      this.getActivity(requestedId);
    } else {
      this.page.error = "Invalid Activity ID.";
      this.page.loading = false;
    }
  },

  methods: {
    getActivity(id) {
      ActivitiesDataService.get(id)
        .then((response) => {
          this.currentActivity = response.data;
          this.page.loading = false;
          //console.log(response);
        })
        .catch((error) => {
          this.page.error = error.message;
          this.page.loading = false;
          //console.log(error);
        });
    },

    deleteActivity() {
      this.page.loading = true;
      ActivitiesDataService.delete(this.currentActivity.activityId)
        .then((response) => {
          //console.log(response.data);
          this.page.message = "Record deleted"; // Never able to display- figure out how to
          this.page.loading = false;
          this.$router.push({ name: "ActivitiesList" });
        })
        .catch((error) => {
          this.page.error = error;
          this.page.loading = false;
          //console.log(error);
        });
    },

    updateActivity() {
      this.page.loading = true;

      // Prep a new object without the activity id for posting
      const objectToPost = { ...this.currentActivity };
      delete objectToPost["activityId"];
      //console.log(objectToPost)

      ActivitiesDataService.update(
        this.currentActivity.activityId,
        objectToPost,
      )
        .then((response) => {
          //console.log(response);
          this.page.loading = false;
          this.page.message = "The activity was updated successfully!";
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
  <ActivityViewUpdateTable
    v-if="currentActivity"
    :activity="currentActivity"
    @delete-activity="deleteActivity"
    @update-activity="updateActivity"
  />
</template>
