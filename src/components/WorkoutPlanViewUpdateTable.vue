<script setup>
import WidgetDeleteButton from "../components/WidgetDeleteButton.vue";
import WidgetEditButton from "../components/WidgetEditButton.vue";
import WidgetBackButton from "../components/WidgetBackButton.vue";

const props = defineProps({
  workoutPlan: Object,
});

const emit = defineEmits(["delete-workout-plan", "update-workout-plan"]);
</script>

<template>
  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
    <div
      class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
    >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        View Workout Plan ID: {{ workoutPlan.planId }}
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
          <input
            id="userId"
            v-model="workoutPlan.userId"
            type="text"
            name="userID"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
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
            required=""
          />
        </div>

        <!-- schedule -->
        <div class="col-span-2">
          <label
            for="schedule"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Schedule</label
          >
          <input
            id="schedule"
            v-model="workoutPlan.schedule"
            type="text"
            name="schedule"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- planDate -->
        <div class="col-span-2">
          <label
            for="planDate"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Plan Date</label
          >
          <input
            id="planDate"
            v-model="workoutPlan.planDate"
            type="text"
            name="planDate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- goal -->
        <div class="col-span-2">
          <label
            for="goal"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Goal</label
          >
          <input
            id="goal"
            v-model="workoutPlan.goal"
            type="text"
            name="goal"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>

        <!-- duration -->
        <div class="col-span-2">
          <label
            for="duration"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Durationl</label
          >
          <input
            id="goal"
            v-model="workoutPlan.duration"
            type="text"
            name="duration"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
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
          />
        </div>

        <!-- content -->
        <div class="col-span-2">
          <label
            for="content"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Content</label
          >
          <input
            id="content"
            v-model="workoutPlan.content"
            type="text"
            name="content"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-4/12 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            required=""
          />
        </div>
      </div>
    </form>
    <div
      class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
    >
      <WidgetDeleteButton @click="$emit('delete-workout-plan')" />
      <WidgetEditButton
        class="mx-3"
        @click="$emit('update-workout-plan', workoutPlan)"
      />
      <a :href="'/workout-plans'">
        <WidgetBackButton />
      </a>
    </div>
  </div>
</template>
