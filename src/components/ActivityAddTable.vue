<script setup>
import WidgetSaveButton from "../components/WidgetSaveButton.vue";
import WidgetCancelButton from "../components/WidgetCancelButton.vue";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import { ref } from "vue";

const props = defineProps({
  activity: Object,
});

const emit = defineEmits(["add-activity"]);

const formatter = ref({
  date: "YYYY-MM-DD",
  month: "MMM",
});
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
        <!---TO DO: Should be post header with auth.-->
        <div class="col-span-2">
          <label
            for="userId"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >User ID</label
          >
          <select
            id="userId"
            v-model="activity.userId"
            name="userId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="1" selected>User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
          </select>
        </div>

        <!-- activityDate -->
        <div class="col-span-2">
          <label
            for="activityDate"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Activity Date</label
          >
          <div class="w-4/12">
            <VueTailwindDatePicker
              v-model="activity.activityDate"
              as-single
              :formatter="formatter"
            />
          </div>
        </div>

        <!-- activityType -->
        <div class="col-span-2">
          <label
            for="activityType"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Activity Type</label
          >
          <select
            id="activityType"
            v-model="activity.activityType"
            name="activityType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="yoga">Yoga</option>
            <option value="running">Running</option>
            <option value="swimming">Swimming</option>
            <option value="bicycling">Bicycling</option>
            <option value="walking">Walking</option>
            <option value="dance">Dance</option>
            <option value="tennis">Tennis</option>
            <option value="hiking">Hiking</option>
            <option value="weightlifting">Weightlifting</option>
            <option value="jogging">Jogging</option>
            <option value="gardening">Gardening</option>
            <option value="inline skating">Inline skating</option>
            <option value="gymnastics">Gymnastics</option>
            <option value="bymnastics">Bymnastics</option>
            <option value="water aerobics">Water aerobics</option>
            <option value="strength training">Strength training</option>
            <option value="pilates">Pilates</option>
            <option value="aerobic exercise">Aerobic exercise</option>
            <option value="other">Other</option>
            <option value="default">Default</option>
          </select>
        </div>

        <!-- workoutIntensity -->
        <div class="col-span-2">
          <label
            for="workoutIntensity"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Workout Intensity</label
          >
          <select
            id="activityType"
            v-model="activity.workoutIntensity"
            name="activityType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="low">Low</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="low-to-moderate">Low to Moderate</option>
            <option value="moderate-intensity">Moderate Intensity</option>
            <option value="high">High</option>
            <option value="high-intensity">High Intensity</option>
            <option value="very high">Very High</option>
            <option value="extreme">Extreme</option>
            <option value="Varied">Varied</option>
          </select>
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
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="0"
            name="distanceKm"
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
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="0"
            name="durationMinutes"
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
