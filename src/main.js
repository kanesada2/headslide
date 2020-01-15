import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import firebaseConfig from './firebaseconfig'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
const httpLink = new HttpLink({
  uri: 'http://nosada-hasura.herokuapp.com/v1/graphql'
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

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
  apolloProvider,
  render: h => h(App)
})