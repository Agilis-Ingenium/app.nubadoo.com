<script setup>
import WidgetDeleteButton from "../components/WidgetDeleteButton.vue";
import WidgetEditButton from "../components/WidgetEditButton.vue";
import WidgetBackButton from "../components/WidgetBackButton.vue";

const props = defineProps({
  activity: Object,
});

const emit = defineEmits(["delete-activity", "update-activity"]);
</script>

<template>
  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <div
      class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        View Activity ID: {{ activity.activityId }}
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
            type="text"
            name="userId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
            :value="activity.userId"
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
            type="text"
            name="activityDate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
            :value="activity.activityDate"
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
            type="text"
            name="workoutIntensity"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
            :value="activity.workoutIntensity"
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
            type="text"
            name="distanceKm"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
            :value="activity.distanceKm"
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
            type="text"
            name="durationMinutes"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
            :value="activity.durationMinutes"
          />
        </div>
      </div>
    </form>
    <div
      class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
    >
      <WidgetDeleteButton @click="$emit('delete-activity')" />
      <WidgetEditButton
        class="mx-3"
        @click="$emit('update-activity', activity)"
      />
      <router-link to="/activities/list">
        <WidgetBackButton />
      </router-link>
    </div>
  </div>
</template>
