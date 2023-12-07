<script setup>
import WorkoutPlanCardColourfulBadge from "./WorkoutPlanCardColourfulBadge.vue";
import { prettyDate } from "./helpers";
import WidgetDeleteButton from "./WidgetDeleteButton.vue";
import AlertError from "../components/AlertError.vue";
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue";
import axios from "axios";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});

function Delete(id, index, items) {
  if (
    confirm("Are you sure that you really want to delete this workout plan?")
  ) {
    axios
      .delete("/v1/workout-plans/" + id)
      .then((resp) => {
        items.splice(index, 1);
        this.items = items;
      })
      .catch((error) => {
        console.log(error);
        this.error = error;
      });
  }
}
</script>

<template>
  <div v-if="loading">
    <WidgetLoadingSpinner />
  </div>
  <div v-if="error">
    <AlertError :errorMessage="error" />
  </div>
  <div class="grid gap-8 lg:grid-cols-2">
    <article
      v-for="(item, index) in items"
      :key="item.planId"
      :item="item"
      class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-between items-center mb-5 text-gray-500">
        <WorkoutPlanCardColourfulBadge
          :text="item.goal"
          :planId="item.planId"
        />
        <span class="text-sm">Added: {{ prettyDate(item.planDate) }}</span>
      </div>
      <h2
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        <a href="#">{{ item.planName }}</a>
      </h2>
      <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
        {{ item.description }}
      </p>
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <WorkoutPlanCardColourfulBadge
            :text="item.duration"
            :planId="item.planId + 1"
          />
        </div>
        <a
          href="javascript:;"
          v-on:click="Delete(item.planId, index, this.items)"
        >
          <WidgetDeleteButton />
        </a>
      </div>
    </article>
  </div>
</template>
