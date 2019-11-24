/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import Officers from "./Officers/Officers.js";
import Supervisors from "./Supervisors/Supervisors.js";
import Admins from "./Admins/Admins.js";
import Customers from "./Customers/Customers.js";
import Exchangerates from "./ExchangeRates/Exchangerates.js";

Vue.use(Vuex)


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules : {
      officers : Officers,
      supervisors : Supervisors,
      admins : Admins,
      customers : Customers,
      exchangerates: Exchangerates,
    }
    // strict: process.env.NODE_ENV !== 'production'
})
