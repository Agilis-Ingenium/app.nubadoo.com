<script setup>
import FoodItemsTable from "../components/FoodItemsTable.vue";
import AlertMessage from "../components/AlertMessage.vue";
import AlertError from "../components/AlertError.vue";
import PageHeader from "../components/PageHeader.vue";
</script>

<script>
import FoodItemsDataService from "../services/FoodItemsDataService";

export default {
  name: "FoodItemsList",
  data() {
    return {
      foodItems: [],
      currentFoodItem: null,
      currentIndex: -1,
      error: "",
      loading: true,
      page: {
        title: "The Community Pantry",
        description:
          "Explore a diverse range of food items shared by the community. Discover an assortment of ingredients and culinary inspirations contributed by members. Engage with a collection of flavors, cuisines, and nutritional options that reflect the rich diversity of our community's food choices.",
        breadcrumbs: ["Food Items", "List"],
      },
    };
  },

  mounted() {
    this.retrieveFoodItems();
  },

  methods: {
    retrieveFoodItems() {
      FoodItemsDataService.getAll()
        .then((response) => {
          this.foodItems = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
          this.loading = false;
        });
    },

    deleteActivity(foodItemId, index) {
      FoodItemsDataService.delete(foodItemId)
        .then((response) => {
          console.log(response.data);
          this.foodItems.splice(index, 1);
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

  <div v-if="loading">
    <WidgetLoadingSpinner />
  </div>

  <div v-if="error">
    <AlertError :error-message="error" />
  </div>

  <div v-else-if="foodItems.length == 0">
    <AlertMessage alert-message="No food items found." />
  </div>

  <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <FoodItemsTable :items="foodItems" />
  </div>
</template>
