export default [
    {
        url: "/",
        name: "Back",
        slug: "home",
        icon: "HomeIcon",
        isMain : false,
    },
    {
        url: "/",
        name: "Overview",
        slug: "home",
        icon: "HomeIcon",
        isMain : true,
    },
    {
        url: "/",
        name: "Sales",
        slug: "customer-sales",
        icon: "DollarSignIcon",
        isMain : false,
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
        isMain : false,
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
        url: "/payrolls",
        name: "Payrolls",
        slug: "employees-payrolls",
        icon: "ActivityIcon",
        isMain : false,
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
        isMain : false,
    },
    /*{
        url: "/tax-team",
        name: "Tax Team",
        slug: "tax-team",
        icon: "BookOpenIcon",
        isMain : false,
    },*/
    /*{
        url: "/page2",
        name: "Page 2",
        slug: "page2",
        icon: "FileIcon",
    },*/
]
