<script setup>
import { foodImage } from "./helpers/food-items-helpers"
import WidgetDeleteButton from "./WidgetDeleteButton.vue"
import axios from 'axios'
import AlertError from "../components/AlertError.vue"
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue"

defineProps({
    items: {
        type: Array,
        required: true
    }
})

function Delete(id, index, items) {

   if(confirm("Are you sure that you really want to delete this food item from the community pantry?")){

            axios.delete('/v1/food-items/'+id)
            .then(resp => {
                items.splice(index, 1);
                //this.items = items
            })
            .catch(error => {
                console.log(error);
                this.error = error;
            })
   }
}
</script>

<template>
    <div v-if="loading">
      <WidgetLoadingSpinner />
    </div>
    <div v-if="error">
      <AlertError :errorMessage = error />
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-16 py-3">
                        <span class="sr-only">Image</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Calories
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Carbohydrates
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Proteins
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Fats
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Vitamins
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Minerals
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="item.foodItemId" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="p-4">
                        <img :src="foodImage(item.name)" class="w-16 md:w-32 max-w-full max-h-full" :alt="item.name">
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4 text-gray-900 dark:text-white">
                        {{ item.calories }}
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {{ item.carbohydrates }}
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {{ item.proteins }}
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {{ item.fats }}
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {{ item.vitamins }}
                    </td>
                    <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {{ item.minerals }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center">
                            <a class="ms-3" href="javascript:;" v-on:click="Delete(item.foodItemId, index, this.items)">
                                <WidgetDeleteButton />
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>