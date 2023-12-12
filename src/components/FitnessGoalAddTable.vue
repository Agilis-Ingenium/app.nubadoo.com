<script setup>
import WidgetSaveButton from "../components/WidgetSaveButton.vue";
import WidgetCancelButton from "../components/WidgetCancelButton.vue";

const props = defineProps({
  fitnessGoal: Object,
});

const emit = defineEmits(["add-fitness-goal"]);
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
        <div class="col-span-2">
          <label
            for="userId"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >User ID</label
          >
          <input
            id="userId"
            v-model="fitnessGoal.userId"
            type="text"
            name="userId"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- goalType -->
        <div class="col-span-2">
          <label
            for="goalType"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Goal Type</label
          >
          <input
            id="goalType"
            v-model="fitnessGoal.goalType"
            type="text"
            name="goalType"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
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
            type="text"
            name="targetValue"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- targetDate -->
        <div class="col-span-2">
          <label
            for="targetDate"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Target Date</label
          >
          <input
            id="targetDate"
            v-model="fitnessGoal.targetDate"
            type="text"
            name="targetDate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- achieved -->
        <div class="col-span-2">
          <label
            for="achieved"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Achieved</label
          >
          <input
            id="achieved"
            v-model="fitnessGoal.achieved"
            type="text"
            name="achieved"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
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
      <a :href="'/fitness-goals/list'">
        <WidgetCancelButton />
      </a>
    </div>
  </div>
</template>
