import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./mock-data.js";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

let data = {
  movies: mock,
  favorites: [],
  favsEmpty: true,
  notEmpty: false,
  clicked: true
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
