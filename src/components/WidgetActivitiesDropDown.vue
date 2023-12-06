<script setup>
import { ref, onMounted } from "vue";
import { initDropdowns } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const items = ref([
  {
    activity: "yoga",
    emoji: "🧘",
  },
  {
    activity: "running",
    emoji: "🏃‍♂️",
  },
  {
    activity: "swimming",
    emoji: "🏊",
  },
  {
    activity: "bicycling",
    emoji: "🚴",
  },
  {
    activity: "walking",
    emoji: "🚶‍♂️",
  },
  {
    activity: "dance",
    emoji: "💃",
  },
  {
    activity: "tennis",
    emoji: "🚶🎾",
  },
  {
    activity: "hiking",
    emoji: "🥾",
  },
  {
    activity: "weightlifting",
    emoji: "🏋",
  },
  {
    activity: "jogging",
    emoji: "👟",
  },
  {
    activity: "power walking",
    emoji: "🏃",
  },
  {
    activity: "gardening",
    emoji: "🏡",
  },
  {
    activity: "inline skating",
    emoji: "⛸️",
  },
  {
    activity: "gymnastics",
    emoji: "🤸",
  },
  {
    activity: "bymnastics",
    emoji: "🤸",
  },
  {
    activity: "water aerobics",
    emoji: "🤽",
  },
  {
    activity: "strength training",
    emoji: "💪",
  },
  {
    activity: "pilates",
    emoji: "🧎🏼‍♀️",
  },
  {
    activity: "aerobic exercise",
    emoji: "🫁",
  },
  {
    activity: "other",
    emoji: "⚽",
  },
  {
    activity: "unknown",
    emoji: "😂",
  },
]);
</script>

<template>
  <button
    id="dropdownActivitiesButton"
    data-dropdown-toggle="dropdownActivities"
    data-dropdown-placement="bottom"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    Activities
    <svg
      class="w-2.5 h-2.5 ms-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>
  <div
    id="dropdownActivities"
    class="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
  >
    <ul
      class="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownActivitieButton"
    >
      <li v-for="item in items" class="p-3">
        <input
          id="{{ item.activity }}"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          for="{{ item.activity }}"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {{ item.emoji }}
          {{ item.activity }}
        </label>
      </li>
    </ul>
  </div>
</template>
