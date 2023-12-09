import App from "./App.vue";
import router from "./router";
import "./index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

const app = createApp(App);
app.config.productionTip = false;

app.use(createPinia());
app.use(router);

app.mount("#app");
