/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


window.Vue = require('vue');
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax';
import VeeValidate from 'vee-validate';

Vue.use(Vuesax)
Vue.use(VeeValidate);
// Theme Configurations
import '../themeConfig.js'

// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

// Vuesax Admin Filters
import './filters/filters'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS
import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {

        if (!localStorage.getItem('admin')) {
            next({path: '/'})
        } else {
          if(typeof store.getters.userType == 'undefined'){


          store.dispatch('getLoginUser').then(res=>{
          if(to.meta.requiresAdmin == true || store.getters.userType == 'Admin'){
            next();

            }else{
            next({path: '/pages/error-404'})

            }
          });
          }else{
            if(to.meta.requiresAdmin == true || store.getters.userType == 'Admin'){
            next();

            }else{
            next({path: '/pages/error-404'})

            }
          }
        }
    } else {
        next();
    }
})


window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

axios.interceptors.request.use(function (config) {
    if((config.url === 'get-sale-comment')){

    Vue.prototype.$vs.loading.close();
    }else if((config.url === 'get-payroll-comment')){

    Vue.prototype.$vs.loading.close();
    }else if((config.url === 'get-purchase-comment')){

    Vue.prototype.$vs.loading.close();
    }else{
    Vue.prototype.$vs.loading();      
    }
    return config;
  }, function (error) {

    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    setTimeout(function(){
      Vue.prototype.$vs.loading.close();
    },1000)
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });
Vue.config.productionTip = false
new Vue({
	provide(){
		return {
			generatePassword : this.generatePassword,
      loginUser : this.loginUser,
		}
	},
    router,
    store,
    render: h => h(App),
    async created(){
      await this.$store.dispatch('getLoginUser')
    },
    computed : {
      loginUser(){
        return this.$store.getters.userType;
      }
    },
    methods: {
    generatePassword : function() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
    }
}).$mount('#app')
