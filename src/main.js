import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Cookies from 'js-cookie'

import './icons' // icon

createApp(App).use(store).use(router).mount("#app");
