<script setup>
import WidgetSaveButton from "../components/WidgetSaveButton.vue";
import WidgetCancelButton from "../components/WidgetCancelButton.vue";

const props = defineProps({
  activity: Object,
});

const emit = defineEmits(["add-activity"]);
</script>

<template>
  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <div
      class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        New Activity
      </h3>
    </div>

    <form class="p-4 md:p-5">
      <div class="grid gap-4 mb-4 grid-cols-2">
        <!-- userId -->
        <div class="col-span-2">
          <label
            for="userId"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >User ID</label
          >
          <input
            id="userId"
            v-model="activity.userId"
            type="text"
            name="userId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- activityDate -->
        <div class="col-span-2">
          <label
            for="activityDate"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Activity Date</label
          >
          <input
            id="activityDate"
            v-model="activity.activityDate"
            type="text"
            name="activityDate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- activityType -->
        <div class="col-span-2">
          <label
            for="activityType"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Activity Type</label
          >
          <input
            id="activityType"
            v-model="activity.activityType"
            type="text"
            name="activityType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- workoutIntensity -->
        <div class="col-span-2">
          <label
            for="workoutIntensity"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Workout Intensity</label
          >
          <input
            id="workoutIntensity"
            v-model="activity.workoutIntensity"
            type="text"
            name="workoutIntensity"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- distanceKm -->
        <div class="col-span-2">
          <label
            for="distanceKm"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Distance (Km)</label
          >
          <input
            id="distanceKm"
            v-model="activity.distanceKm"
            type="text"
            name="distanceKm"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- durationMinutes -->
        <div class="col-span-2">
          <label
            for="durationMinutes"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Duration (Minutes)</label
          >
          <input
            id="durationMinutes"
            v-model="activity.durationMinutes"
            type="text"
            name="durationMinutes"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>
      </div>
    </form>
    <div
      class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
    >
      <WidgetSaveButton class="mx-3" @click="$emit('add-activity', activity)" />
      <a :href="'/activities/list'">
        <WidgetCancelButton />
      </a>
    </div>
  </div>
</template>
