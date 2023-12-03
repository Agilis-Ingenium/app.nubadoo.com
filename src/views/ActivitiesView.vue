<script setup>
import ActivitiesTable from "../components/ActivitiesTable.vue"
import PageHeader from "../components/PageHeader.vue"
import AlertError from "../components/AlertError.vue"
import LoadingSpinner from "../components/LoadingSpinner.vue"
</script>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      page : {
         title: "Track Your Activities",
         description: "Store fitness sessions so you can aggregate and analyze data related to physical activities and exercises, such as steps taken, distances covered, and workout intensity."
      },
      items: [],
      loading: true,
      error: ''
    };
  },
  mounted() {
    axios.get('/v1/activities')
      .then(response => {
         this.items = response.data;
         this.loading = false;
      })
      .catch(error => {
        this.error = error.message;
        this.loading = false;
      });
  }
};
</script>

<template>
  <PageHeader :page = page />

    <div v-if="loading">
      <LoadingSpinner />
    </div>
    <div v-else-if="error">
      <AlertError :errorMessage = error />
    </div>
    <div v-else>
      <ActivitiesTable :items = items />
    </div>

</template>