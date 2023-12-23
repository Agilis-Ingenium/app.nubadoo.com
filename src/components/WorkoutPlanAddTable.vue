<script setup>
import WidgetSaveButton from "../components/WidgetSaveButton.vue";
import WidgetCancelButton from "../components/WidgetCancelButton.vue";
import { ref } from "vue";
import { VMarkdownEditor } from "vue3-markdown";
import "vue3-markdown/dist/style.css";
import VueTailwindDatePicker from "vue-tailwind-datepicker";

const props = defineProps({
  workoutPlan: Object,
});

const emit = defineEmits(["add-workout-plan"]);

const content = ref("");

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
        New Workout Plan
      </h3>
    </div>

    <form class="p-4 md:p-5">
      <div class="grid gap-4 mb-4 grid-cols-2">
        <!-- UserID -->
        <div class="col-span-2">
          <label
            for="UserId"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >User ID</label
          >
          <select
            id="userId"
            v-model="workoutPlan.userId"
            name="userId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="1" selected>User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
          </select>
        </div>

        <!-- planName -->
        <div class="col-span-2">
          <label
            for="planName"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Plan Name</label
          >
          <input
            id="planName"
            v-model="workoutPlan.planName"
            type="text"
            name="planName"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required
            mexlength="255"
          />
        </div>

        <!-- schedule -->
        <div class="col-span-2">
          <label
            for="schedule"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Schedule</label
          >

          <select
            id="schedule"
            v-model="workoutPlan.schedule"
            name="schedule"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="weekly" selected>weekly</option>
            <option value="bi-weekly">bi-weekly</option>
            <option value="monthly">monthly</option>
            <option value="alternative">alternative days</option>
            <option value="random">random</option>
          </select>
        </div>

        <!-- planDate -->
        <div class="col-span-2">
          <label
            for="planDate"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Plan Date</label
          >
          <div class="w-4/12">
            <VueTailwindDatePicker
              v-model="workoutPlan.planDate"
              as-single
              :formatter="formatter"
            />
          </div>
        </div>

        <!-- goal -->
        <div class="col-span-2">
          <label
            for="goal"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Goal</label
          >
          <select
            id="userId"
            v-model="workoutPlan.goal"
            name="userId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="Weight Loss">Weight Loss</option>
            <option value="Cardiovascular Health">Cardiovascular Health</option>
            <option value="Flexibility Improvement">
              Flexibility Improvement
            </option>
            <option value="Life Achievement">Life Achievement</option>
          </select>
        </div>

        <!-- duration -->
        <div class="col-span-2">
          <label
            for="duration"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Duration</label
          >
          <input
            id="goal"
            v-model="workoutPlan.duration"
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="0"
            name="duration"
          />
        </div>

        <!-- description -->
        <div class="col-span-2">
          <label
            for="description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Description</label
          >
          <input
            id="description"
            v-model="workoutPlan.description"
            type="text"
            name="description"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
            mexlength="150"
          />
        </div>

        <!-- content -->
        <div class="col-span-2">
          <label
            for="content"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Content</label
          >
          <VMarkdownEditor v-model="workoutPlan.content" locale="en" />
        </div>
      </div>
    </form>
    <div
      class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
    >
      <WidgetSaveButton
        class="mx-3"
        @click="$emit('add-workout-plan', workoutPlan)"
      />
      <a :href="'/workout-plans/list'">
        <WidgetCancelButton />
      </a>
    </div>
  </div>
</template>
