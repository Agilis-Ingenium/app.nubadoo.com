<script setup>
import { prettyDate, sportyEmoji, intensityPercentage } from './helpers'
import Gauge from "./Gauge.vue"

defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                <tr  v-for="item in items" :key="item.activityId" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td class="px-6 py-4">
                        {{ prettyDate(item.activityDate) }}
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
                        <Gauge :percentage = intensityPercentage(item.workoutIntensity) />
                    </td>
                    <td class="px-6 py-4">
                       {{ item.workoutIntensity }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>