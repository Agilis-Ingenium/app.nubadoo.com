<script setup>
import WidgetSaveButton from "../components/WidgetSaveButton.vue";
import WidgetCancelButton from "../components/WidgetCancelButton.vue";
import VueTailwindDatePicker from "vue-tailwind-datepicker";
import { ref } from "vue";

const props = defineProps({
  fitnessGoal: Object,
});

const emit = defineEmits(["add-fitness-goal"]);

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
        New Fitness Goal
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
            v-model="fitnessGoal.userId"
            name="userId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="1" selected>User 1</option>
            <option value="2">User 2</option>
            <option value="3">User 3</option>
          </select>
        </div>

        <!-- goalType -->
        <div class="col-span-2">
          <label
            for="goalType"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Goal Type</label
          >
          <select
            id="goalType"
            v-model="fitnessGoal.goalType"
            name="goalType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option value="weight_loss" selected>Weight Loss</option>
            <option value="muscle_gain">Muscle Gain</option>
            <option value="fitness">Fitness</option>
            <option value="nutrition">Nutrition</option>
            <option value="health">Health</option>
            <option value="other">Other</option>
          </select>
        </div>

        <!-- targetValue -->
        <div class="col-span-2">
          <label
            for="targetValue"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Target Value</label
          >
          <input
            id="targetValue"
            v-model="fitnessGoal.targetValue"
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="0"
            name="targetValue"
          />
        </div>

        <!-- targetDate -->
        <div class="col-span-2">
          <label
            for="targetDate"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Target Date</label
          >
          <div class="w-4/12">
            <VueTailwindDatePicker
              v-model="fitnessGoal.targetDate"
              as-single
              :formatter="formatter"
            />
          </div>
        </div>

        <!-- achieved -->
        <div class="col-span-2">
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class="sr-only peer"
              v-model="fitnessGoal.achieved"
            />
            <div
              class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
            ></div>
            <span
              class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Achieved</span
            >
          </label>
        </div>
      </div>
    </form>
    <div
      class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
    >
      <WidgetSaveButton
        class="mx-3"
        @click="$emit('add-fitness-goal', fitnessGoal)"
      />
      <a :href="'/fitness-goals'">
        <WidgetCancelButton />
      </a>
    </div>
  </div>
</template>
