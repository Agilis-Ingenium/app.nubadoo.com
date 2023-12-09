<script setup>
import MainLayoutBreadcrumbs from "./MainLayoutBreadcrumbs.vue";
import WidgetLoadingSpinner from "../components/WidgetLoadingSpinner.vue";
import AlertMessage from "../components/AlertMessage.vue";
import AlertError from "../components/AlertError.vue";

defineProps({
  page: {
    title: {
      type: String,
      required: false,
      default: "Page Title",
    },
    description: {
      type: String,
      required: false,
      default: "Page description...",
    },
    breadcrumbs: {
      type: Array,
      required: false,
      default: ["Breadcrumbs"],
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    message: {
      type: String,
      required: false,
      default: "",
    },
    type: Object,
    required: true,
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

  <!-- Loading Spinner (supersedes error and messgae)-->
  <div v-if="page.loading">
    <WidgetLoadingSpinner />
  </div>

  <!-- Message (show if no error or loading) -->
  <div v-else-if="page.message && !page.error">
    <AlertMessage :alert-message="page.message" />
  </div>

  <!-- Error (supercedes message )-->
  <div v-else-if="page.error">
    <AlertError :error-message="page.error" />
  </div>
</template>
