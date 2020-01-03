import './css/pure.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Inview from 'vueinview'
Vue.config.productionTip = false
Vue.use(Inview);
Inview.offset(64);
Inview.threshold(0.5);
new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})
