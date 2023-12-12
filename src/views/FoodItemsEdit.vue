<script setup>
import PageHeader from "../components/PageHeader.vue";
import FoodItemsDataService from "../services/FoodItemsDataService";
import FoodItemViewUpdateTable from "../components/FoodItemViewUpdateTable.vue";
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "FoodItemsView",
  data() {
    return {
      currentFoodItem: null,
      page: {
        title: "The Community Pantry",
        description:
          "Explore a diverse range of food items shared by the community. Discover an assortment of ingredients and culinary inspirations contributed by members. Engage with a collection of flavors, cuisines, and nutritional options that reflect the rich diversity of our community's food choices.",
        breadcrumbs: ["Food Items", "View"],
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
      this.getFoodItem(requestedId);
    } else {
      this.page.error = "Invalid Food Item ID.";
      this.page.loading = false;
    }
  },

  methods: {
    getFoodItem(id) {
      FoodItemsDataService.get(id)
        .then((response) => {
          this.currentFoodItem = response.data;
          this.page.loading = false;
          //console.log(response);
        })
        .catch((error) => {
          this.page.error = error.message;
          this.page.loading = false;
          //console.log(error);
        });
    },

    deleteFoodItem() {
      this.page.loading = true;
      FoodItemsDataService.delete(this.currentFoodItem.foodItemId)
        .then((response) => {
          //console.log(response.data);
          this.page.message = "Record deleted"; // Never able to display- figure out how to
          this.page.loading = false;
          //this.$router.push({ name: "FoodItemsList" });
        })
        .catch((error) => {
          this.page.error = error;
          this.page.loading = false;
          //console.log(error);
        });
    },

    updateFoodItem() {
      this.page.loading = true;

      // Prep a new object without the food item id for posting
      const objectToPost = { ...this.currentFoodItem };
      delete objectToPost["foodItemId"];
      //console.log(objectToPost)

      FoodItemsDataService.update(this.currentFoodItem.foodItemId, objectToPost)
        .then((response) => {
          //console.log(response);
          this.page.loading = false;
          this.page.message = "The food item was updated successfully!";
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
  <FoodItemViewUpdateTable
    v-if="currentFoodItem"
    :foodItem="currentFoodItem"
    @delete-food-item="deleteFoodItem"
    @update-food-item="updateFoodItem"
  />
</template>
