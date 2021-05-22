import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//font awsome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
//css files
require("@/assets/styles/style.css")
require("@/assets/styles/normalize.css")

import Embed from 'v-video-embed'

// global register
Vue.use(Embed);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
