<script setup>
import MainLayoutBreadcrumbs from "./MainLayoutBreadcrumbs.vue";

defineProps({
  page: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    breadcrumbs: {
      type: Array,
      required: false,
    },
  },
});
</script>

<template>
  <MainLayoutBreadcrumbs :breadcrumbs="page.breadcrumbs" />
  <div class="mx-auto max-w-1xl lg:mx-0 pb-5">
    <h2 class="text-4xl font-bold tracking-tight text-black sm:text-6xl">
      {{ page.title }}
    </h2>
    <p
      v-if="page.description != null"
      class="mt-6 text-lg leading-8 text-gray-600"
    >
      {{ page.description }}
    </p>
  </div>
</template>
