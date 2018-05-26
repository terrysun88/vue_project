// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import VueGoogleCharts from 'vue-google-charts'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

/* eslint-disable no-new */
const v = new Vue({
  el: '#app',
  store: store,
  components: { App },
  template: '<App/>'
})

v.$store.dispatch('getStocks')
