import Vue from 'vue'
import App from './App'
import store from './store'
import ApiService from './common/api.service'

ApiService.init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
