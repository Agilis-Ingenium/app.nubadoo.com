<script setup>
import ActivitiesTable from "../components/ActivitiesTable.vue"
import PageHeader from "../components/PageHeader.vue"
import AlertError from "../components/AlertError.vue"
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue"
import IconRecord from "../components/icons/IconRecord.vue"
import ActivitiesAdd from "../components/ActivitiesAdd.vue"
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
      error: '',
      record: true
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

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('deleteButton').click();
});
</script>

<template>
  <PageHeader :page = page />

    <div v-if="loading">
      <WidgetLoadingSpinner />
    </div>
    <div v-else-if="error">
      <AlertError :errorMessage = error />
    </div>
    <div v-else-if=record>
      <div class="text-right rtl:text-left">
          <button type="button" v-on:click='record=false' class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">  
                  <IconRecord />&nbsp;&nbsp;&nbsp;Record an Activity
          </button>
      </div>
      <ActivitiesTable :items = this.items />
    </div>
    <div v-else>
        <ActivitiesAdd />      
    </div>
</template>