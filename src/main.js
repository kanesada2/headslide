import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import firebaseConfig from './firebaseconfig'
Vue.config.productionTip = false
Vue.prototype.$eventHub = new Vue(); // Global event bus
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;
Vue.prototype.$auth =  {
  loggedIn: false,
  login: function() { this.loggedIn = true },
  logout: function() { this.loggedIn = false }  
}
new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})