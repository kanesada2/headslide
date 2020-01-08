import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Inview from 'vueinview'
import firebase from 'firebase'
import firebaseConfig from './firebaseconfig'
Vue.config.productionTip = false
Vue.use(Inview);
Inview.threshold(0.5);
Vue.prototype.$eventHub = new Vue(); // Global event bus
new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})

firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;