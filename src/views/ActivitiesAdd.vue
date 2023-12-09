<script>
import ActivitiesDataService from "../services/ActivitiesDataService";

export default {
  name: "add-activity",
  data() {
    return {
      activity: {
        activityId: null,
        userId: null,
        activityType: null,
        activityDate: null,
        activityIntensity: null,
        durationMinutes: null,
        distanceKm: null,
      },
      submitted: false,
    };
  },

  methods: {
    saveActivity() {
      var data = {
        activityId: this.activity.activityId,
        userId: this.activity.userId,
        activityType: this.activity.activityType,
        activityDate: this.activity.activityDate,
        activityIntensity: this.activity.activityIntensity,
        durationMinutes: this.activity.durationMinutes,
        distanceKm: this.activity.distanceKm,
      };

      ActivitiesDataService.create(data)
        .then((response) => {
          this.activity.activityId = response.data.activityId;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    newActivity() {
      this.submitted = false;
      this.currentActivity = {};
    },
  },
};
</script>

<template>
  <div v-if="currentActivity">
    <h4>Activity</h4>
    <label>Activity ID</label>
    <input v-model="currentActivity.activityId" />
    <br />
    <label>User ID</label>
    <input v-model="currentActivity.userId" />
    <br />
    <label>Activity Type</label>
    <input v-model="currentActivity.activityType" />
    <br />
    <label>Activity Date</label>
    <input v-model="currentActivity.activityDate" />
    <br />
    <label>Activity Intensity</label>
    <input v-model="currentActivity.workoutIntensity" />
    <br />
    <label>Duration (Minutes)</label>
    <input v-model="currentActivity.durationMinutes" />
    <br />
    <label>Distance (Kilometers)</label>
    <input v-model="currentActivity.distanceKm" />
    <button @click="saveTutorial" class="btn btn-success">Submit</button>
  </div>

  <div v-else>
    <h4>You submitted successfully!</h4>
    <button class="btn btn-success" @click="newActivity">Add</button>
  </div>
</template>

<!--  FORM WITH WIDGETS

<script setup>
import WidgetActivitiesDropDown from "./WidgetActivitiesDropDown.vue";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import WidgetInteger from "./WidgetInteger.vue";
import { ref } from "vue";

const dateValue = ref("");
</script>

<template>
  <form class="w-full">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Date
        </label>
        <p
          id="helper-text-explanation"
          class="mb-2 text-sm text-gray-500 dark:text-gray-400"
        >
          On which date did you workout?
        </p>
        <div class="w-64">
          <VueTailwindDatePicker
            v-model="dateValue"
            as-single
            @select-month="onSelectSomething($event)"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Activity Type
        </label>
        <p
          id="helper-text-explanation"
          class="mb-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Specify the type of activity you engaged in during your workout
          session:
        </p>
        <WidgetActivitiesDropDown />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-5">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Distance
        </label>
        <p
          id="helper-text-explanation"
          class="mb-2 text-sm text-gray-500 dark:text-gray-400"
        >
          What distance in kilometers did you cover in the workout?
        </p>
        <WidgetInteger />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          City
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          placeholder="Albuquerque"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          State
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>New Mexico</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-zip"
        >
          Zip
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="text"
          placeholder="90210"
        />
      </div>
    </div>
  </form>
</template>

-->
