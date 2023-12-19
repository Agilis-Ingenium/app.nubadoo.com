<script setup>
import { foodImage } from "./helpers/food-items-helpers";
import WidgetDeleteButton from "./WidgetDeleteButton.vue";
import WidgetViewButton from "./WidgetViewButton.vue";

const props = defineProps({
  foodItems: Array,
});

const emit = defineEmits(["delete-food-item"]);
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-16 py-3">
            <span class="sr-only">Image</span>
          </th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Calories</th>
          <th scope="col" class="px-6 py-3">Carbs&nbsp;&nbsp;&nbsp;</th>
          <th scope="col" class="px-6 py-3">Proteins</th>
          <th scope="col" class="px-6 py-3">Fats&nbsp;&nbsp;&nbsp;&nbsp;</th>
          <!--
          <th scope="col" class="px-6 py-3">Vitamins</th>
          <th scope="col" class="px-6 py-3">Minerals</th>
          -->
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(foodItem, index) in foodItems"
          :key="foodItem.foodItemId"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <td class="p-4">
            <img
              :src="foodImage(foodItem.name)"
              class="w-16 md:w-32 max-w-full max-h-full"
              :alt="foodItem.name"
            />
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ foodItem.name }}
          </td>
          <td class="px-6 py-4 text-gray-900 dark:text-white">
            {{ foodItem.calories }}
          </td>

          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ foodItem.carbohydrates }}
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ foodItem.proteins }}
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ foodItem.fats }}
          </td>
          <!--
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ foodItem.vitamins }}
          </td>
          <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {{ foodItem.minerals }}
          </td>
        -->
          <td class="px-6 py-4">
            <div class="flex items-center">
              <a :href="'/food-items/view/' + foodItem.foodItemId">
                <WidgetViewButton />
              </a>
              <div class="ms-3">
                <WidgetDeleteButton
                  @click="$emit('delete-food-item', foodItem.foodItemId, index)"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
