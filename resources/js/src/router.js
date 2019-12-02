

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
                    path: '/add-customer',
                    name: 'Add Customer',
                    component: () => import('./views/pages/Customers/AddCustomer.vue'),
                },
                {
                    path: '/customer-update/:id',
                    name: 'Customer Update',
                    component: () => import('./views/pages/Customers/EditCustomer.vue'),
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
                    path: '/testing',
                    name: 'testing',
                    component: () => import('./views/pages/demo.vue'),
                },
                {
                    path: '/tax-managment',
                    name: 'Tax Managment',
                    component: () => import('./views/pages/tax-managment/TaxManagment.vue'),
                },
            ],
        },
        {
            // =============================================================================
            // CUSTOMER DETAIL LAYOUT ROUTES
            // =============================================================================
            path: '/customer-detail/:id',
            component: () => import('./layouts/main/customerMain.vue'),
            props : true,
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'Company Detail',
                    component: () => import('./views/pages/Customers/CustomerDetail.vue'),
                },
                {
                    path: '/add-employee',
                    name: 'Add Employee',
                    component: () => import('./views/pages/Employees/AddEmployee.vue'),
                },
                {
                    path: '/employees-list',
                    name: 'Employees List',
                    component: () => import('./views/pages/Employees/Employees.vue'),
                },
                {
                    path: '/taxes',
                    name: 'Taxes',
                    component: () => import('./views/pages/Customers/Taxes.vue'),
                },
            ],
        },
        {
            // =============================================================================
            // TAX DETAIL LAYOUT ROUTES
            // =============================================================================
            path: '/tax-collection/:id',
            component: () => import('./layouts/main/TaxDetailMain.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'Tax Detail',
                    component: () => import('./views/pages/Tax/TaxDetail.vue'),
                },
                {
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
                },
                {
                    path: '/add-payroll',
                    name: 'Add Payroll',
                    component: () => import('./views/pages/Payrolls/AddPayroll.vue'),
                },
                {
                    path: '/employees-payrolls',
                    name: 'Employees Payrolls',
                    component: () => import('./views/pages/Payrolls/Payrolls.vue'),
                },
                {
                    path: '/edit-payroll/:id',
                    name: 'Edit Payrolls',
                    component: () => import('./views/pages/Payrolls/EditPayroll.vue'),
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
