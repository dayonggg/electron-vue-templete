import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'
import '@/theme/components.less'

Vue.config.productionTip = false
Vue.use(ViewUI, {
  size: 'small'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
