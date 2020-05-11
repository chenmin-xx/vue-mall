import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueLazyload,{
  loading:require('assets/img/common/placeholder.png'),
  error: require('assets/img/common/error.jpg')
})

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
