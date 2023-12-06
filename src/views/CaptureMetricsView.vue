<script setup>
import PageHeader from "../components/PageHeader.vue";
import CaptureMetricsForm from "../components/CaptureMetricsForm.vue";

const page = {
  title: "Capture Your Metrics",
  description:
    "Set your sights high and watch your journey unfold! Explore our Goals feature to define your aspirations, track your progress, and celebrate milestones. Whether you're reaching for personal triumphs or professional achievements, this is your space to dream big and turn your goals into glorious realities.",
};
</script>

<template>
  <PageHeader :page="page" />
  <CaptureMetricsForm />
</template>
