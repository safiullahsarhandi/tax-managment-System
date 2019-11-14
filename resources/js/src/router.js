/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    base: '/',
    routes: [

      {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
        path: '',
        component: () => import('./layouts/main/Main.vue'),
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
          },
          {
            path: '/page2',
            name: 'page2',
            component: () => import('./views/Page2.vue'),
          },
          {
            path: '/customers',
            name: 'Customers',
            component: () => import('./views/pages/Customers/Customers.vue'),
          },
          {
              path : '/add-customer',
              name : 'Add Customer',
              component : () => import('./views/pages/Customers/AddCustomer.vue'),
            },
          {
            path: '/currencies',
            name: 'Currencies',
            component: () => import('./views/pages/Currencies.vue'),
          },
          {
            path: '/exchange-rates',
            name: 'Exhange Rates',
            component: () => import('./views/pages/ExchangeRates.vue'),
          },
          {
            path: '/admins',
            name: 'Admins',
            component: () => import('./views/pages/Admins.vue'),
          },
          {
            path: '/supervisors',
            name: 'Supervisors',
            component: () => import('./views/pages/Supervisors.vue'),
          },
          {
            path: '/officers',
            name: 'Officers',
            component: () => import('./views/pages/Officers.vue'),
          },
          {
            path: '/tax-managment',
            name: 'Tax Managment',
            component: () => import('./views/pages/tax-managment/TaxManagment.vue'),
          },
        ],
      },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
      // =============================================================================
      // PAGES
      // =============================================================================
          {
            path: '/pages/login',
            name: 'pageLogin',
            component: () => import('@/views/pages/Login.vue')
          },
          {
            path: '/pages/error-404',
            name: 'pageError404',
            component: () => import('@/views/pages/Error404.vue')
          },
        ]
      },
      // Redirect to 404 page, if no match found
      {
        path: '*',
        redirect: '/pages/error-404'
      }
    ],
})

export default router
