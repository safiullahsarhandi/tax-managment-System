/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
    {
        url: "#",
        name: "Overview",
        slug: "home",
        icon: "HomeIcon",
        isMain : true,
    },
    {
        url: "/taxes",
        name: "Taxes",
        slug: "taxes",
        icon: "DollarSignIcon",
        isMain : false,
    },
    {
        url: "/employees",
        name: "Employees",
        slug: "customer-employees",
        icon: "UsersIcon",
        isMain : false,
        submenu: [{
            url: "/add-employee",
            name: "Add Employee",
            slug: "add-employee",
            icon: "UserIcon",
        },{
            url: "/employees-list",
            name: "List Of Employees",
            slug: "employees-list",
            icon: "UserIcon",
        }],
    },
    /*{
        url: "/",
        name: "Sales",
        slug: "customer-sales",
        icon: "DollarSignIcon",
        submenu: [{
            url: "/add-sale",
            name: "Add Sale",
            slug: "add-sale",
            icon: "UserIcon",
        },{
            url: "/sales-list",
            name: "List Of Sales",
            slug: "sales-list",
            icon: "UserIcon",
        }],
    },
    {
        url: "/",
        name: "purchases",
        slug: "customer-purchases",
        icon: "TruckIcon",
        submenu: [{
            url: "/add-purchase",
            name: "Add purchase",
            slug: "add-purchase",
            icon: "UserIcon",
        },{
            url: "/purchases-list",
            name: "List Of Purchases",
            slug: "purchases-list",
            icon: "UserIcon",
        }],
    },
    {
        url: "/employees",
        name: "Employees",
        slug: "customer-employees",
        icon: "UsersIcon",
        submenu: [{
            url: "/add-employee",
            name: "Add Employees",
            slug: "add-employee",
            icon: "UserIcon",
        },{
            url: "/employees-list",
            name: "List Of Employees",
            slug: "employees-list",
            icon: "UserIcon",
        }],
    },
    {
        url: "/payrolls",
        name: "Payrolls",
        slug: "employees-payrolls",
        icon: "ActivityIcon",
        submenu: [{
            url: "/add-payroll",
            name: "Add Payroll",
            slug: "add-payroll",
            icon: "UserIcon",
        },{
            url: "/employees-payrolls",
            name: "List Of Payroll",
            slug: "employees-list",
            icon: "UserIcon",
        }],
    },
    {
        url: "/reports",
        name: "Reports",
        slug: "reports",
        icon: "BookOpenIcon",
    }*/
    /*{
        url: "/page2",
        name: "Page 2",
        slug: "page2",
        icon: "FileIcon",
    },*/
]
