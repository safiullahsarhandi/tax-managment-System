
export default [
    {
        url: "/companies",
        name: "Back",
        slug: "home",
        icon: "ArrowLeftCircleIcon",
        isMain : false,
    },
    {
        url: "/",
        name: "Taxes",
        slug: "taxes",
        icon: "DollarSignIcon",
        isMain : true,
    },
    /*{
        url: "/taxes",
        name: "Taxes",
        slug: "taxes",
        icon: "DollarSignIcon",
        isMain : false,
    },*/
    {
        url: "/employees",
        name: "Employees",
        slug: "customer-employees",
        icon: "UsersIcon",
        isMain : false,
        submenu: [{
            url: "/employees-list",
            name: "List Of Employees",
            slug: "employees-list",
            icon: "UserIcon",
        }],
    },
    {
        url: "/company-log",
        name: "Company Log",
        slug: "CompanyLog",
        icon: "ActivityIcon",
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
