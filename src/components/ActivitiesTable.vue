<script setup>
import { prettyDate, sportyEmoji, intensityPercentage } from './helpers'
import WidgetGauge from "./WidgetGauge.vue"
import axios from 'axios';
import AlertError from "./AlertError.vue"
import AlertMessage from "./AlertMessage.vue"
import WidegtDeleteButton from './WidgetDeleteButton.vue';

const items = defineProps({
  items: Object
})

function DeleteActivity(id, index, items) {

   if(confirm("Are you sure that you really want to delete the activity entry?")){

            axios.delete('/v1/activities/'+id)
            .then(resp => {
                items.splice(index, 1);
                this.items = items
            })
            .catch(error => {
                console.log(error);
                this.error = error;
            })
   }
}
</script>
<template>
    <div v-if="this.error">
      <AlertError :errorMessage = this.error />
    </div>
    <div v-else-if="this.items.length == 0">
      <AlertMessage alertMessage = 'No activities found' />
    </div>
    <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Activity Date
                    </th>
                    <th scope="col" class="px-6 py-3" colspan="2">
                        Actvity Type
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Distance
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Duration
                    </th>
                    <th scope="col" class="px-6 py-3" colspan="2">
                        Workout Intensity
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in this.items" :key="item.activityId" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td class="px-6 py-4">
                       {{prettyDate(item.activityDate)}}
                    </td>
                    <td class="px-6 py-4">
                        <h2 class="text-4xl font-bold dark:text-white">{{ sportyEmoji(item.activityType) }}</h2>
                    </td>
                    <td class="px-6 py-4">
                        {{item.activityType}}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.distanceKm }} {{((item.distanceKm !=null) ? 'km' : '')}}
                    </td>
                    <td class="px-6 py-4">
                        {{ item.durationMinutes }} {{((item.durationMinutes !=null) ? 'min' : '')}}
                    </td>
                    <td class="px-6 py-4">
                        <WidgetGauge :percentage = intensityPercentage(item.workoutIntensity) />
                    </td>
                    <td class="px-6 py-4">
                       {{ item.workoutIntensity }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                    <td class="px-6 py-4">
                        <a  href="javascript:;" v-on:click="DeleteActivity(item.activityId, index, this.items)">
                            <WidegtDeleteButton />
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>