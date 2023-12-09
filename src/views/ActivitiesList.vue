<script setup>
import {
  prettyDate,
  sportyEmoji,
  intensityPercentage,
} from "../components/helpers";
import WidgetGauge from "../components/WidgetGauge.vue";
import AlertMessage from "../components/AlertMessage.vue";
import WidegtDeleteButton from "../components/WidgetDeleteButton.vue";
import WidgetViewButton from "../components/WidgetViewButton.vue";
import PageHeader from "../components/PageHeader.vue";
</script>

<script>
import ActivitiesDataService from "../services/ActivitiesDataService";

export default {
  name: "ActivitiesList",
  data() {
    return {
      activities: [],
      currentActivity: null,
      currentIndex: -1,
      error: "",
      page: {
        title: "Track Your Activities",
        description:
          "Store fitness sessions so you can aggregate and analyze data related to physical activities and exercises, such as steps taken, distances covered, and workout intensity.",
        breadcrumbs: ["Activities", "List"],
      },
    };
  },

  mounted() {
    this.retrieveActivities();
  },

  methods: {
    retrieveActivities() {
      ActivitiesDataService.getAll()
        .then((response) => {
          this.activities = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },

    deleteActivity(activityId, index) {
      ActivitiesDataService.delete(activityId)
        .then((response) => {
          console.log(response.data);
          this.activities.splice(index, 1);
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

  <div v-if="this.error">
    <AlertError :errorMessage="this.error" />
  </div>

  <div v-else-if="this.activities.length == 0">
    <AlertMessage alertMessage="No activities found" />
  </div>

  <div v-else class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
          v-for="(activity, index) in this.activities"
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
            <a
              :href="'/activities/view/' + activity.activityId"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              <WidgetViewButton />
            </a>
          </td>
          <td class="px-6 py-4">
            <a @click="deleteActivity(activity.activityId, index)">
              <WidegtDeleteButton />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
