<script setup>
import FoodItemsTable from "../components/FoodItemsTable.vue";
import PageHeader from "../components/PageHeader.vue";
import FoodItemsDataService from "../services/FoodItemsDataService";
</script>

<script>
export default {
  name: "FoodItemsList",
  data() {
    return {
      items: [],
      page: {
        title: "The Community Pantry",
        description:
          "Explore a diverse range of food items shared by the community. Discover an assortment of ingredients and culinary inspirations contributed by members. Engage with a collection of flavors, cuisines, and nutritional options that reflect the rich diversity of our community's food choices.",
        breadcrumbs: ["Food Items", "List"],
        loading: true,
        message: "",
        error: "",
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

    deleteFoodItem(itemId, index) {
      FoodItemsDataService.delete(itemId)
        .then((response) => {
          //console.log(response.data);
          this.items.splice(index, 1);
          this.page.message = this.items.length == 0 ? "No records found." : "";
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
  <FoodItemsTable
    v-if="items.length > 0"
    :food-items="items"
    @delete-food-item="deleteFoodItem"
  />
</template>
