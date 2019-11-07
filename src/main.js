import Vue from 'vue';
import App from './App.vue';
//buefy
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app');