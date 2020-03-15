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
        submenu: [/*{
                url: "/add-customer",
                name: "Add Customer",
                slug: "add-customer",
                icon: "UserIcon",
            },*/
            {
                url: "/customers",
                name: "List Of Customers",
                slug: "customers",
                icon: "UsersIcon",
            },
        ]





        // submenu: [
        //         {
        //             url: "/monthly",
        //             name: "Monthly",
        //             slug: "monthly",
        //             icon: "UserIcon",
        //             submenu: [{
        //                     url: "/add-customer/monthly",
        //                     name: "Add Customer",
        //                     slug: "add-customer",
        //                     icon: "UserIcon",
        //                 },
        //                 {
        //                     url: "/customers/monthly",
        //                     name: "List Of Customers",
        //                     slug: "customers",
        //                     icon: "UsersIcon",
        //                 },
        //             ]
        //         },
        //         {
        //             url: "/yearly",
        //             name: "Yearly",
        //             slug: "yearly",
        //             icon: "UserIcon",
        //             submenu: [{
        //                     url: "/add-customer/yearly",
        //                     name: "Add Customer",
        //                     slug: "add-customer",
        //                     icon: "UserIcon",
        //                 },
        //                 {
        //                     url: "/customers/yearly",
        //                     name: "List Of Customers",
        //                     slug: "customers",
        //                     icon: "UsersIcon",
        //                 },
        //             ]
        //         }
        //     ]


        // submenu: [{
        //     url: "/add-customer",
        //     name: "Add Customer",
        //     slug: "add-customer",
        //     icon: "UserIcon",
        // },
        // {
        //     url: "/customers",
        //     name: "List Of Customers",
        //     slug: "customers",
        //     icon: "UsersIcon",
        // }
        // ],
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
        url: "/team-members",
        name: "Team Members",
        slug: "team-members",
        icon: "UsersIcon",
        isMain : false,
    },
    {
        url: "/tax-parameters",
        name: "Tax Parameters",
        slug: "tax-parameters",
        icon: "PercentIcon",
        isMain : false,
    },
    // {
    //     url: "/manage-team",
    //     name: "Our Team",
    //     slug: "our-team",
    //     icon: "UsersIcon",
    //     isMain : false,
    //     submenu: [{
    //         url: "/admins",
    //         name: "Admins",
    //         slug: "admins",
    //         icon: "UserIcon",
    //     },{
    //         url: "/supervisors",
    //         name: "Supervisors",
    //         slug: "supervisors",
    //         icon: "UserIcon",
    //     },{
    //         url: "/officers",
    //         name: "Officers",
    //         slug: "officers",
    //         icon: "UserIcon",
    //     } ],
    // },
    /*{
        url: "/page2",
        name: "Page 2",
        slug: "page2",
        icon: "FileIcon",
    },*/
]
