// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faListAlt, faAddressCard, faArrowAltCircleDown, faArrowAltCircleUp, faCalendarAlt, faBell, faComments, faFileAlt, faSignOutAlt, faStar, faCreditCard, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faListAlt, faAddressCard, faArrowAltCircleDown, faArrowAltCircleUp, faCalendarAlt, faBell, faComments, faFileAlt, faSignOutAlt, faStar, faCreditCard, faMoneyBillAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

sync(store, router)
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
