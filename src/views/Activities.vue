<script setup>
import PageHeader from "../components/PageHeader.vue";

import AlertError from "../components/AlertError.vue";
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue";

import ActivitiesList from "../components/ActivitiesList.vue";
import ActivitiesAdd from "../components/ActivitiesAdd.vue";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      page: {
        title: "Track Your Activities",
        description:
          "Store fitness sessions so you can aggregate and analyze data related to physical activities and exercises, such as steps taken, distances covered, and workout intensity.",
        breadcrumbs: [
          "Activities",
          this.$route.params.action[0].toUpperCase() +
            this.$route.params.action.slice(1).toLowerCase(),
          this.$route.params.id,
        ],
      },
      items: [],
      loading: true,
      error: "",
      record: true,
    };
  },
  mounted() {
    axios
      .get("/v1/activities")
      .then((response) => {
        this.items = response.data;
        this.loading = false;
      })
      .catch((error) => {
        this.error = error.message;
        this.loading = false;
      });
  },
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("deleteButton").click();
});
</script>

<template>
  <PageHeader :page="page" />

  <!-- Loading -->
  <div v-if="loading">
    <WidgetLoadingSpinner />
  </div>

  <!-- Error -->
  <div v-else-if="error">
    <AlertError :errorMessage="error" />
  </div>

  <!-- View -->
  <div v-if="$route.params.action == 'view'">
    <ActivitiesView />
  </div>

  <!-- Edit -->
  <div v-else-if="$route.params.action == 'edit'">
    <ActivitiesEdit />
  </div>

  <!-- Add -->
  <div v-else-if="$route.params.action == 'add'">
    <ActivitiesAdd />
  </div>

  <!-- Activities List -->
  <div v-else-if="$route.params.action == 'list'">
    <ActivitiesList :items="this.items" />
  </div>
</template>
