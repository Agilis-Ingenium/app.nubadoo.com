<script setup>
import WorkoutPlanCardColourfulBadge from "./WorkoutPlanCardColourfulBadge.vue";
import { prettyDate } from "./helpers";
import WidgetDeleteButton from "./WidgetDeleteButton.vue";
import WidgetViewButton from "./WidgetViewButton.vue";

const props = defineProps({
  workoutPlans: Array,
});

const emit = defineEmits(["delete-workout-plan"]);
</script>

<template>
  <div class="grid gap-8 lg:grid-cols-2">
    <article
      v-for="(plan, index) in workoutPlans"
      :key="plan.planId"
      class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-between items-center mb-5 text-gray-500">
        <WorkoutPlanCardColourfulBadge
          :text="plan.goal"
          :plan-id="plan.planId"
        />
        <span class="text-sm">Added: {{ prettyDate(plan.planDate) }}</span>
      </div>
      <h2
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ plan.planName }}
      </h2>
      <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
        {{ plan.description }}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <WorkoutPlanCardColourfulBadge
            :text="plan.duration"
            :planId="plan.planId + 1"
          />
        </div>
        <div class="content-end">
          <router-link class="mr-3" :to="'/workout-plans/view/' + plan.planId">
            <WidgetViewButton />
          </router-link>
          <WidgetDeleteButton
            @click="$emit('delete-workout-plan', plan.planId, index)"
          />
        </div>
      </div>
    </article>
  </div>
</template>
