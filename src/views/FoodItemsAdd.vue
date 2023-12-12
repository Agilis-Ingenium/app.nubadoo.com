<script setup>
import PageHeader from "../components/PageHeader.vue";
import FoodItemsDataService from "../services/FoodItemsDataService";
import FoodItemAddTable from "../components/FoodItemAddTable.vue";
</script>

<script>
export default {
  name: "FoodItemAdd",
  data() {
    return {
      foodItem: {
        foodItemId: null,
        name: null,
        calories: null,
        carbohydrates: null,
        proteins: null,
        fats: null,
        vitamins: null,
        minerals: null,
      },
      page: {
        title: "The Community Pantry",
        description:
          "Explore a diverse range of food items shared by the community. Discover an assortment of ingredients and culinary inspirations contributed by members. Engage with a collection of flavors, cuisines, and nutritional options that reflect the rich diversity of our community's food choices.",
        breadcrumbs: ["Food Items", "Add"],
        loading: true,
        message: "",
        error: "",
      },
      submitted: false,
    };
  },
  mounted() {
    this.newFoodItem();
  },

  methods: {
    saveFoodItem() {
      this.page.loading = true;
      var data = {
        foodItemId: this.foodItem.foodItemId,
        name: this.foodItem.name,
        calories: this.foodItem.calories,
        carbohydrates: this.foodItem.carbohydrates,
        proteins: this.foodItem.proteins,
        fats: this.foodItem.fats,
        vitamins: this.foodItem.vitamins,
        minerals: this.foodItem.minerals,
      };
      FoodItemsDataService.create(data)
        .then((response) => {
          this.submitted = true;
          this.page.loading = false;

          if (
            response.data.foodItemId === undefined ||
            response.data.foodItemId === null
          ) {
            this.page.error = "Something went wrong";
          } else {
            this.foodItem.foodItemId = response.data.foodItemId;
            this.page.message = "Food Item saved successfully.";
            this.page.error = "";
          }
        })
        .catch((error) => {
          console.log(error);
          this.page.error = error;
        });
    },

    newFoodItem() {
      this.submitted = false;
      this.foodItem = {};
      this.page.loading = false;
      this.page.error = "";
      this.page.message = "";
    },
  },
};
</script>

<template>
  <PageHeader :page="page" />
  <FoodItemAddTable :food-item="foodItem" @add-food-item="saveFoodItem" />
</template>
