import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

createApp(App).use(store).use(router).use(NutUI).mount('#app')
