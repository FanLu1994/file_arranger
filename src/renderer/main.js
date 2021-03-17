import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import 'bulma/css/bulma.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')


// 路由守卫
router.beforeEach((to,from,next)=>{
  console.log(from)
  console.log(to)
  console.log("从"+from+"到"+to)
  next()
})
