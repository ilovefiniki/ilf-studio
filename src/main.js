import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import vuetify from './plugins/vuetify'
//import axios from 'axios'

import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC4XQ_idhY7y3SlXJrwKyCAYFY2gIX0cD0",
  authDomain: "finiki-finance.firebaseapp.com",
  databaseURL: "https://finiki-finance.firebaseio.com",
  projectId: "finiki-finance",
  storageBucket: "finiki-finance.appspot.com",
  messagingSenderId: "590566816584",
  appId: "1:590566816584:web:6fa10782982d48079e517d"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
    //Vue.prototype.$axios() = axios;
  }
})