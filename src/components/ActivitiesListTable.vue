<script setup>
import WidgetDeleteButton from "../components/WidgetDeleteButton.vue";
import WidgetViewButton from "../components/WidgetViewButton.vue";
import {
  prettyDate,
  sportyEmoji,
  intensityPercentage,
} from "../components/helpers";
import WidgetGauge from "../components/WidgetGauge.vue";

const props = defineProps({
  activities: Array,
});

const emit = defineEmits(["delete-activity"]);
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
          <th scope="col" class="px-6 py-3">Activity Date</th>
          <th scope="col" class="px-6 py-3" colspan="2">Actvity Type</th>
          <th scope="col" class="px-6 py-3">Distance</th>
          <th scope="col" class="px-6 py-3">Duration</th>
          <th scope="col" class="px-6 py-3" colspan="2">Workout Intensity</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(activity, index) in activities"
          :key="activity.activityId"
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
        >
          <td class="px-6 py-4">
            {{ prettyDate(activity.activityDate) }}
          </td>
          <td class="px-6 py-4">
            <h2 class="text-4xl font-bold dark:text-white">
              {{ sportyEmoji(activity.activityType) }}
            </h2>
          </td>
          <td class="px-6 py-4">
            {{ activity.activityType }}
          </td>
          <td class="px-6 py-4">
            {{ activity.distanceKm }}
            {{ activity.distanceKm != null ? "km" : "" }}
          </td>
          <td class="px-6 py-4">
            {{ activity.durationMinutes }}
            {{ activity.durationMinutes != null ? "min" : "" }}
          </td>
          <td class="px-6 py-4">
            <WidgetGauge
              :percentage="intensityPercentage(activity.workoutIntensity)"
            />
          </td>
          <td class="px-6 py-4">
            {{ activity.workoutIntensity }}
          </td>
          <td class="px-6 py-4">
            <a :href="'/activities/view/' + activity.activityId">
              <WidgetViewButton />
            </a>
          </td>
          <td class="px-6 py-4">
            <WidgetDeleteButton
              @click="$emit('delete-activity', activity.activityId, index)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
