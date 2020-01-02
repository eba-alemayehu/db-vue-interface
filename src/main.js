/*!

 =========================================================
 * Vue Paper Dashboard - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import BootstrapVue from 'bootstrap-vue'; 

import PaperDashboard from "./plugins/paperDashboard";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {Select, Option} from 'element-ui'

// import vuetify from '@/plugins/vuetify'

Vue.use(PaperDashboard, BootstrapVue, Select, Option);

/* eslint-disable no-new */
new Vue({
  router,
  // vuetify,
  render: h => h(App)
}).$mount("#app");
