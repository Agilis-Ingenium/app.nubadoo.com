<script setup>
import WidgetSaveButton from "../components/WidgetSaveButton.vue";
import WidgetCancelButton from "../components/WidgetCancelButton.vue";

const props = defineProps({
  foodItem: Object,
});

const emit = defineEmits(["add-food-item"]);
</script>

<template>
  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <div
      class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        New Food Item
      </h3>
    </div>

    <form class="p-4 md:p-5">
      <div class="grid gap-4 mb-4 grid-cols-2">
        <!-- name -->
        <div class="col-span-2">
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Food Name</label
          >
          <input
            id="userId"
            v-model="foodItem.name"
            type="text"
            name="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- calories -->
        <div class="col-span-2">
          <label
            for="calories"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Calories</label
          >
          <input
            id="calories"
            v-model="foodItem.calories"
            type="text"
            name="calories"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- carbohydrates -->
        <div class="col-span-2">
          <label
            for="carbohydrates"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Carbohydrates</label
          >
          <input
            id="carbohydrates"
            v-model="foodItem.carbohydrates"
            type="text"
            name="Carbohydrates"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- proteins -->
        <div class="col-span-2">
          <label
            for="proteins"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Proteins</label
          >
          <input
            id="proteinsd"
            v-model="foodItem.proteins"
            type="text"
            name="uproteins"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- fats -->
        <div class="col-span-2">
          <label
            for="fats"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Fats</label
          >
          <input
            id="fats"
            v-model="foodItem.fats"
            type="text"
            name="fats"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- vitamins -->
        <div class="col-span-2">
          <label
            for="vitamins"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Vitamins</label
          >
          <input
            id="vitamins"
            v-model="foodItem.vitamins"
            type="text"
            name="vitamins"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- minerals -->
        <div class="col-span-2">
          <label
            for="minerals"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Minerals</label
          >
          <input
            id="minerals"
            v-model="foodItem.minerals"
            type="text"
            name="minerals"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>
      </div>
    </form>
    <div
      class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
    >
      <WidgetSaveButton
        class="mx-3"
        @click="$emit('add-food-item', foodItem)"
      />
      <a :href="'/food-items/list'">
        <WidgetCancelButton />
      </a>
    </div>
  </div>
</template>
