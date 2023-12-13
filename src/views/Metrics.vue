<script setup>
import PageHeader from "../components/PageHeader.vue";
import MetricsDataService from "../services/MetricsDataService";
import { VueTable } from "@harv46/vue-table";
import "@harv46/vue-table/dist/style.css";
import WidgetDeleteButton from "../components/WidgetDeleteButton.vue";
import WidgetEditButton from "../components/WidgetEditButton.vue";
</script>

<script>
export default {
  name: "ActivitiesList",
  data() {
    return {
      items: [],
      page: {
        title: "Capture Your Metrics",
        description:
          "Set your sights high and watch your journey unfold! Explore our Goals feature to define your aspirations, track your progress, and celebrate milestones. Whether you're reaching for personal triumphs or professional achievements, this is your space to dream big and turn your goals into glorious realities.",
        breadcrumbs: ["Metrics", "View"],
        loading: true,
        message: "",
        error: "",
      },
    };
  },

  mounted() {
    this.retrieveMetrics();
  },

  methods: {
    retrieveMetrics() {
      MetricsDataService.getAll()
        .then((response) => {
          this.page.loading = true;
          this.items = response.data;
          this.page.message = this.items.length == 0 ? "No records found." : "";
          console.log(response.data);
          this.page.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.page.error = error;
          this.page.loading = false;
        });
    },

    deleteMetric(itemId) {
      MetricsDataService.delete(itemId)
        .then((response) => {
          //console.log(response.data);
          this.items.splice(index, 1);
          this.page.message = this.items.length == 0 ? "No records found." : "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

const headers_weight = ["Date", "Weight", "Height", "BMI", "Blood Sugar"];
const keys_weight = ["createdAt", "weight", "height", "bmi", "bloodSugar"];

const headers_heart = [
  "Date",
  "Diastolic Blood Pressure",
  "Systolic Blood Pressure",
  "Heart Rate",
];
const keys_heart = [
  "createdAt",
  "diastolicBloodPressure",
  "systolicBloodPressure",
  "heartRate",
];

const headers_sleep = ["Date", "Sleep Duration (Hours)", "Sleep Quality"];
const keys_sleeo = ["createdAt", "sleepDuration", "sleepQuality"];
</script>

<template>
  <PageHeader :page="page" />

  <!-- WEIGHT -->
  <div v-if="$route.params.type == 'weight'">
    <h4 class="my-3 text-2xl font-bold dark:text-white">Weight</h4>
    <div v-if="$route.params.action == 'list' || $route.params.action == ''">
      <VueTable
        :headers="headers_weight"
        :data="this.items"
        :keys="keys_weight"
      />
    </div>
    <div v-if="$route.params.action == 'view'"></div>
    <div v-if="$route.params.action == 'add'"></div>
  </div>

  <!-- HEART -->
  <div v-if="$route.params.type == 'heart'">
    <h4 class="my-3 text-2xl font-bold dark:text-white">Heart</h4>
    <div v-if="$route.params.action == 'list' || $route.params.action == ''">
      <VueTable :headers="headers_heart" :data="this.items" :keys="keys_heart">
        <template #th>
          <th>Actions</th>
        </template>
        <template #td="{ item }">
          <td class="flex">
            <div class="mx-3 my-3">
              <WidgetDeleteButton @click="deleteMetric(item.metricId)" />
            </div>
            <div class="mx-3 my-3">
              <WidgetEditButton @click="edit(item)" />
            </div>
          </td>
        </template>
      </VueTable>
    </div>
    <div v-if="$route.params.action == 'view'"></div>
    <div v-if="$route.params.action == 'add'"></div>
  </div>

  <!-- SLEEP -->
  <div v-if="$route.params.type == 'sleep'">
    <h4 class="my-3 text-2xl font-bold dark:text-white">Sleep</h4>
    <div v-if="$route.params.action == 'list' || $route.params.action == ''">
      <VueTable
        :headers="headers_sleep"
        :data="this.items"
        :keys="keys_sleeo"
      />
    </div>
    <div v-if="$route.params.action == 'view'"></div>
    <div v-if="$route.params.action == 'add'"></div>
  </div>
</template>
