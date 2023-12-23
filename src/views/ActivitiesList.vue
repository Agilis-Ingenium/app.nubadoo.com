<script setup>
import ActivitiesListTable from "../components/ActivitiesListTable.vue";
import PageHeader from "../components/PageHeader.vue";
import ActivitiesDataService from "../services/ActivitiesDataService";
import WidgetAddButton from "../components/WidgetAddButton.vue";
import Swal from "sweetalert2";
</script>

<script>
export default {
  name: "ActivitiesList",
  data() {
    return {
      items: [],
      page: {
        title: "Track Your Activities",
        description:
          "Store fitness sessions so you can aggregate and analyze data related to physical activities and exercises, such as steps taken, distances covered, and workout intensity.",
        breadcrumbs: ["Activities", "List"],
        loading: true,
        message: "",
        error: "",
      },
    };
  },

  mounted() {
    this.retrieveActivities();
  },

  methods: {
    retrieveActivities() {
      ActivitiesDataService.getAll()
        .then((response) => {
          this.page.loading = true;
          this.items = response.data;
          this.page.message = this.items.length == 0 ? "No records found." : "";
          //console.log(response);
          this.page.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.page.error = error;
          this.page.loading = false;
        });
    },

    deleteActivity(itemId, index) {
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
          ActivitiesDataService.delete(itemId)
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
    <router-link to="/activities/add"><WidgetAddButton /></router-link>
  </div>

  <ActivitiesListTable
    v-if="items.length > 0"
    :activities="items"
    @delete-activity="deleteActivity"
  />
</template>
