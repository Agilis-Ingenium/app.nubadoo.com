<script setup>
import FoodItemsTable from "../components/FoodItemsTable.vue";
import PageHeader from "../components/PageHeader.vue";
import AlertError from "../components/AlertError.vue";
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue";
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      page: {
        title: "The Community Pantry",
        description:
          "Explore a diverse range of food items shared by the community. Discover an assortment of ingredients and culinary inspirations contributed by members. Engage with a collection of flavors, cuisines, and nutritional options that reflect the rich diversity of our community's food choices.",
      },
      items: [],
      loading: true,
      error: "",
    };
  },
  mounted() {
    axios
      .get("/v1/food-items")
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
</script>

<template>
  <PageHeader :page="page" />

  <div v-if="loading">
    <WidgetLoadingSpinner />
  </div>
  <div v-else-if="error">
    <AlertError :errorMessage="error" />
  </div>
  <div v-else>
    <FoodItemsTable :items="items" />
  </div>
</template>
