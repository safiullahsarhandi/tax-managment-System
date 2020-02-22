export default [{
        url: "/dashboard",
        name: "Dashboard",
        slug: "home",
        icon: "HomeIcon",
        isMain : false,
    },
    {
        url: "/",
        name: "Customers",
        slug: "customers",
        icon: "UsersIcon",
        isMain : false,
        submenu: [{
                url: "/add-customer",
                name: "Add Customer",
                slug: "add-customer",
                icon: "UserIcon",
            },
            {
                url: "/customers",
                name: "List Of Customers",
                slug: "customers",
                icon: "UsersIcon",
            },
        ]
    },
    {
        url: "/currencies",
        name: "Currencies",
        slug: "currencies",
        icon: "DollarSignIcon",
        isMain : false,
    },
    {
        url: "/exchange-rates",
        name: "Exchange Rates",
        slug: "exchange-rates",
        icon: "ActivityIcon",
        isMain : false,
    },
    {
        url: "/my-team",
        name: "My Team",
        slug: "team-members",
        icon: "UsersIcon",
        isMain : false,
    },
]
