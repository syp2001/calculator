import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/tailwind.css'
import './assets/colors.css'
import vueDebounce from 'vue-debounce'
 
Vue.use(vueDebounce, {
  listenTo: 'input',
  defaultTime: '3000ms'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
