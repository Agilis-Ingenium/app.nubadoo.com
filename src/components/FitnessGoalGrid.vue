<script setup>
import {
  randomEncourgement,
  capitaliseAndFormat,
  convertImageSlug,
  goalStatement,
} from "./helpers/fitness-goal-helpers";
import { prettyDate } from "./helpers.js";
import WidgetDeleteButton from "./WidgetDeleteButton.vue";
import WidgetViewButton from "./WidgetViewButton.vue";

const props = defineProps({
  goals: Array,
});

const emit = defineEmits(["delete-fitness-goal"]);
</script>

<template>
  <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
    <div
      v-for="(goal, index) in goals"
      :key="goal.goalId"
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-end px-4 pt-4"></div>
      <div class="flex flex-col items-center pb-10">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          :src="convertImageSlug(goal.goalType)"
          alt="Goal type image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {{ capitaliseAndFormat(goal.goalType) }}
        </h5>
        <span
          v-if="!goal.achieved"
          class="text-sm text-gray-500 dark:text-gray-400 content-center px-8 text-center"
          ><br />{{ goalStatement(goal) }}<br />by
          {{ prettyDate(goal.targetDate) }}</span
        >
        <span
          v-if="goal.achieved"
          class="text-4xl font-extrabold dark:text-white content-center px-8 text-center"
          ><br />🏆&#x1f389;🥇<br
        /></span>
        <span
          v-if="goal.achieved"
          class="text-2xl dark:text-white content-center px-8 text-center"
          ><br />Well Done!</span
        >
        <div v-if="!goal.achieved" class="flex mt-4 md:mt-6">
          <router-link class="pr-3" :to="'/fitness-goals/view/' + goal.goalId">
            <WidgetViewButton />
          </router-link>
          <WidgetDeleteButton
            @click="$emit('delete-fitness-goal', goal.goalId, index)"
          />
        </div>
        <div class="flex mt-4 md:mt-5"></div>
        <figure v-if="!goal.achieved">
          <blockquote
            class="text-l italic font-semibold text-gray-900 dark:text-white"
          >
            <p>{{ randomEncourgement() }}</p>
          </blockquote>
        </figure>
      </div>
    </div>
  </div>
</template>
