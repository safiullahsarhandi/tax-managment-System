

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
        path: '/home',
        component: () => import('./layouts/main/Main.vue'),
        meta: { 
            requiresAuth: false
        },
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          
          //  {
          //     path: '/',
          //     name: 'login',
          //     component: () => import('@/views/pages/Login.vue').then(m => m.default),
          //     meta: { 
          //           requiresAuth: false
          //     }
          // },
          {
            path: '/home',
            name: 'home',
            component: () => import('./views/Home.vue'),
            meta: { 
              requiresAuth: true
            }
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
            meta: { 
              requiresAuth: true
            }
          },
          {
              path : '/add-customer',
              name : 'Add Customer',
              component : () => import('./views/pages/Customers/AddCustomer.vue'),
              meta: { 
                requiresAuth: true
              }
            },
            {
              path : '/customer-update/:id',
              name : 'Customer Update',
              component : () => import('./views/pages/Customers/EditCustomer.vue'),
              meta: { 
                requiresAuth: true
              }
            },
          {
            path: '/sales',
            name: 'Sales',
            component: () => import('./views/pages/Sales/Sales.vue'),
             meta: { 
                requiresAuth: true
              }
          },
          {
              path : '/add-sales',
              name : 'Add Sales',
              component : () => import('./views/pages/Sales/AddSale.vue'),
               meta: { 
                requiresAuth: true
              }
            },
            {
              path : '/sale-update/:id',
              name : 'Sale Update',
              component : () => import('./views/pages/Sales/EditSale.vue'),
              meta: { 
                requiresAuth: true
              }
            },

          {
            path: '/purchases',
            name: 'Purchases',
            component: () => import('./views/pages/Purchases/Purchases.vue'),
             meta: { 
                requiresAuth: true
              }
          },
          {
              path : '/add-purchase',
              name : 'Add Purchase',
              component : () => import('./views/pages/Purchases/AddPurchase.vue'),
               meta: { 
                requiresAuth: true
              }
            },

            {
              path : '/purchase-update/:id',
              name : 'Purchase Update',
              component : () => import('./views/pages/Purchases/EditPurchase.vue'),
              meta: { 
                requiresAuth: true
              }
            },

          {
            path: '/currencies',
            name: 'Currencies',
            component: () => import('./views/pages/Currencies.vue'),
             meta: { 
                requiresAuth: true
              }
          },
          {
            path: '/exchange-rates',
            name: 'Exhange Rates',
            component: () => import('./views/pages/ExchangeRates.vue'),
             meta: { 
                requiresAuth: true
              }
          },
          {
            path: '/admins',
            name: 'Admins',
            component: () => import('./views/pages/Admins.vue'),
             meta: { 
                requiresAuth: true
              }
          },
          {
            path: '/supervisors',
            name: 'Supervisors',
            component: () => import('./views/pages/Supervisors.vue'),
             meta: { 
                requiresAuth: true
              }
          },
          {
            path: '/officers',
            name: 'Officers',
            component: () => import('./views/pages/Officers.vue'),
             meta: { 
                requiresAuth: true
              }
          },
          {
            path: '/testing',
            name: 'testing',
            component: () => import('./views/pages/demo.vue'),
             meta: { 
                requiresAuth: true
              }
          },
          {
            path: '/tax-managment',
            name: 'Tax Managment',
            component: () => import('./views/pages/tax-managment/TaxManagment.vue'),
             meta: { 
                requiresAuth: true
              }
          },
        ],
      },
      {
    // =============================================================================
    // CUSTOMER DETAIL LAYOUT ROUTES
    // =============================================================================
        path: '/customer-detail/:id',
        component: () => import('./layouts/main/customerMain.vue'),
         meta: { 
            requiresAuth: true
        },
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          {
            path: '/',
            name: 'Company Detail',
            component: () => import('./views/pages/Customers/CustomerDetail.vue'),
            meta: { 
              requiresAuth: true
            }
          },
          {
            path: '/add-employee',
            name: 'Add Employee',
            component: () => import('./views/pages/Employees/AddEmployee.vue'),
            meta: { 
              requiresAuth: true
            }
          },
          {
            path: '/employees-list',
            name: 'Employees List',
            component: () => import('./views/pages/Employees/Employees.vue'),
            meta: { 
              requiresAuth: true
            }
          },
          {
            path: '/taxes',
            name: 'Taxes',
            component: () => import('./views/pages/Customers/Taxes.vue'),
            meta: { 
              requiresAuth: true
            }
          },
          /*{
            path: '/add-sale',
            name: 'Add Sale',
            component: () => import('./views/pages/Sales/AddSale.vue'),
          },
          {
            path: '/sales-list',
            name: 'Sales List',
            component: () => import('./views/pages/Sales/Sales.vue'),
          },
          {
            path: '/add-purchase',
            name: 'Add Purchase',
            component: () => import('./views/pages/Purchases/AddPurchase.vue'),
          },
          {
            path: '/purchases-list',
            name: 'Purchases List',
            component: () => import('./views/pages/Purchases/Purchases.vue'),
          },*/
        ],
      },
      {
    // =============================================================================
    // TAX DETAIL LAYOUT ROUTES
    // =============================================================================
        path: '/tax-collection/:id',
        component: () => import('./layouts/main/TaxDetailMain.vue'),
        meta: { 
          requiresAuth: true
        },
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          {
            path: '/',
            name: 'Tax Detail',
            component: () => import('./views/pages/Tax/TaxDetail.vue'),
            meta: { 
              requiresAuth: true
            }
          },
          {
            path: '/add-sale',
            name: 'Add Sale',
            component: () => import('./views/pages/Sales/AddSale.vue'),
            meta: { 
              requiresAuth: true
            }
          },
          {
            path: '/sales-list',
            name: 'Sales List',
            component: () => import('./views/pages/Sales/Sales.vue'),
            meta: { 
              requiresAuth: true
            }
          },
          {
            path: '/add-purchase',
            name: 'Add Purchase',
            component: () => import('./views/pages/Purchases/AddPurchase.vue'),
            meta: { 
              requiresAuth: true
            }
          },
          {
            path: '/purchases-list',
            name: 'Purchases List',
            component: () => import('./views/pages/Purchases/Purchases.vue'),
            meta: { 
              requiresAuth: true
            }
          },
        ],
      },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        meta: { 
            requiresAuth: false
        },
        children: [
      // =============================================================================
      // PAGES
      // =============================================================================
          {
            path: '/',
            name: 'login',
            component: () => import('@/views/pages/Login.vue'),
            meta: { 
              requiresAuth: false
            }
          },
          {
            path: '/pages/error-404',
            name: 'pageError404',
            component: () => import('@/views/pages/Error404.vue'),
            meta: { 
              requiresAuth: false
            }
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
