import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    base: '/',
    routes: [{
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/dashboard',
            component: () => import('./layouts/main/Main.vue'),
            meta: {
                requiresAuth: true,
                requiresAdmin: true,

            },
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: () => import('./views/Page2.vue'),
                    meta: {
                        requiresAuth: true,
                    }
                },
                {
                    path: '/customers',
                    name: 'Customers',
                    component: () => import('./views/pages/Companies/Customers.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                {
                    path: '/companies',
                    name: 'Companies',
                    component: () => import('./views/pages/Companies/Companies.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                {
                    path: '/add-company',
                    name: 'Add Company',
                    component: () => import('./views/pages/Companies/AddCompany.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                {
                    path: '/add-customer-table-view',
                    name: 'Add Customer',
                    component: () => import('./views/pages/Companies/AddCustomerTableView.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                {
                    path: '/company-update/:id',
                    name: 'Company Update',
                    component: () => import('./views/pages/Companies/EditCompany.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                {
                    path: '/currencies',
                    name: 'Currencies',
                    component: () => import('./views/pages/Currencies.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                {
                    path: '/exchange-rates',
                    name: 'Exhange Rates',
                    component: () => import('./views/pages/ExchangeRates.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                /*{
                    path: '/admins',
                    name: 'Admins',
                    component: () => import('./views/pages/Admins.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,

                    }
                },
                {
                    path: '/supervisors',
                    name: 'Supervisors',
                    component: () => import('./views/pages/Supervisors.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/officers',
                    name: 'Officers',
                    component: () => import('./views/pages/Officers.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },*/
                {
                    path: '/testing',
                    name: 'testing',
                    component: () => import('./views/pages/demo.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/tax-managment',
                    name: 'Tax Managment',
                    component: () => import('./views/pages/tax-managment/TaxManagment.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/team-members',
                    name: 'Team Members',
                    component: () => import('./views/pages/Admins.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: false,
                        
                    }
                },
                {
                    path: '/tax-parameters',
                    name: 'Tax Parameters',
                    component: () => import('./views/pages/TaxParameters.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: false,
                        
                    }
                },
                {
                    path: '/faqs',
                    name: 'Faqs',
                    component: () => import('./views/pages/Faqs.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                        
                    }
                },
                {
                    path: '/member-detail/:id',
                    name: 'Member Detail',
                    component: () => import('./views/pages/MemberDetail.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/notifications/',
                    name: 'Notifications',
                    component: () => import('./views/pages/Notifications.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/searched-record/',
                    name: 'searched-record',
                    props: true,
                    component: () => import('./views/SearchedRecords.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: false,
                    }
                },
                {
                    path: '/my-team',
                    name: 'My Team',
                    component: () => import('./views/pages/MyTeam.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: false,
                        requiresSupervisor: true,
                    }
                },
            ],
        },
        {
            // =============================================================================
            // CUSTOMER DETAIL LAYOUT ROUTES
            // =============================================================================
            path: '/company-detail/:id',
            name: 'Company Detail',
            component: () => import('./layouts/main/CompanyMain.vue'),
            props: true,
            meta : {
                        requiresAuth : true,
                        requiresAdmin: true,
                    },
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'Company Detail',
                    component: () => import('./views/pages/Companies/CompanyDetail.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/company-log',
                    name: 'CompanyLog',
                    component: () => import('./views/pages/Companies/CompanyLog.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/add-employee',
                    name: 'Add Employee',
                    component: () => import('./views/pages/Employees/AddEmployee.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/employees-list',
                    name: 'Employees List',
                    component: () => import('./views/pages/Employees/Employees.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/taxes',
                    name: 'Taxes',
                    component: () => import('./views/pages/Companies/Taxes.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
            ],
        },
        {
            // =============================================================================
            // TAX DETAIL LAYOUT ROUTES
            // =============================================================================
            path: '/tax-collection/:id',
            component: () => import('./layouts/main/TaxDetailMain.vue'),
            meta: {
                requiresAuth: true,
                requiresAdmin: true,
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
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/add-sale',
                    name: 'Add Sale',
                    component: () => import('./views/pages/Sales/AddSale.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/sale-update/:id',
                    name: 'Update Sale',
                    component: () => import('./views/pages/Sales/EditSale.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/sale-detail/:id',
                    name: 'Sale Detail',
                    component: () => import('./views/pages/Sales/SaleDetail.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    },
                    
                },
                {
                    path: '/sales-list',
                    name: 'Sales List',
                    component: () => import('./views/pages/Sales/Sales.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/un-reviewed-sales',
                    name: 'Un Reviewed Sales',
                    component: () => import('./views/pages/Sales/PendingSales.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/add-purchase',
                    name: 'Add Purchase',
                    component: () => import('./views/pages/Purchases/AddPurchase.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                 {
                    path: '/purchase-update/:id',
                    name: 'Update Purchase',
                    component: () => import('./views/pages/Purchases/EditPurchase.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/purchases-list',
                    name: 'Purchases List',
                    component: () => import('./views/pages/Purchases/Purchases.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/purchase-detail/:id',
                    name: 'Purchase Detail',
                    component: () => import('./views/pages/Purchases/PurchaseDetail.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/un-reviewed-purchases',
                    name: 'Un Reviewed Purchases',
                    component: () => import('./views/pages/Purchases/PendingPurchases.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/add-payroll',
                    name: 'Add Payroll',
                    component: () => import('./views/pages/Payrolls/AddPayroll.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/employees-payrolls',
                    name: 'Employees Payrolls',
                    component: () => import('./views/pages/Payrolls/Payrolls.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/un-reviewed-payrolls',
                    name: 'Un Reviewed Payrolls',
                    component: () => import('./views/pages/Payrolls/PendingPayrolls.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/edit-payroll/:id',
                    name: 'Edit Payrolls',
                    component: () => import('./views/pages/Payrolls/EditPayroll.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/payroll-detail/:id',
                    name: 'Payroll Detail',
                    component: () => import('./views/pages/Payrolls/PayrollDetail.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },
                {
                    path: '/activity-log/',
                    name: 'Activity Log',
                    component: () => import('./views/pages/ActivityLog.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: false,
                    }
                },
                /*{
                    path: '/tax-team',
                    name: 'Tax Team',
                    component: () => import('./views/pages/Tax/TaxTeam.vue'),
                    meta: {
                        requiresAuth: true,
                        requiresAdmin: true,
                    }
                },*/
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
                    path: '/',
                    name: 'pageLogin',
                    component: () => import('@/views/pages/Login.vue'),
                    meta: {
                        requiresAdmin: false,
                        requiresAuth : false,
                    }
                },
                {
                    path: '/forgot-password',
                    name: 'ForgotPassword',
                    component: () => import('@/views/pages/ForgotPassword.vue'),
                    meta: {
                        requiresAdmin: false,
                        requiresAuth : false,
                    }
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
