import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/tailwind.css'
import './assets/colors.css'
import './postcss.config.ts'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
