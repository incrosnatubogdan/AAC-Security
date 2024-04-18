import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import materialKit from "./material-kit";
// import VueCompareImage from 'vue3-compare-image'

import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App);

app.use(createPinia());
app.use(VueFullPage)
app.use(router);
app.use(materialKit);
app.mount("#app");