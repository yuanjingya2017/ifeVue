import Vue from 'vue'
import App from './App.vue'
import router from './_config/router'

Vue.config.productionTip = false
console.log(router, '====router')
new Vue({
  render: h => h(App),
  router
}).$mount('#app')