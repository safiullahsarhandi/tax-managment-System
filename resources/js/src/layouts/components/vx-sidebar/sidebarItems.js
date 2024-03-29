export default [{
        url: "/dashboard",
        name: "Dashboard",
        slug: "home",
        icon: "HomeIcon",
        isMain : false,
    },
    {
        url: "/customers",
        name: "Customers",
        slug: "customers",
        icon: "UsersIcon",
    },
    {
        url: "/currencies",
        name: "Currencies",
        slug: "currencies",
        icon: "DollarSignIcon",
        isMain : false,
    },
    {
        url: "/",
        name: "Companies",
        slug: "companies",
        icon: "UsersIcon",
        isMain : false,
        submenu: [/*{
                url: "/add-company",
                name: "Add Company",
                slug: "add-company",
                icon: "UserIcon",
                target : '_blank',
            },*/
            {
                url: "/companies",
                name: "List Of Companies",
                slug: "companies",
                icon: "UsersIcon",
            },
        ]
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
    {
        url: "/faqs",
        name: "Faqs",
        slug: "faqs",
        icon: "HelpCircleIcon",
        isMain : false,
    },
    {
        url: "/",
        name: "Reports",
        slug: "Reports",
        icon: "BookOpenIcon",
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
