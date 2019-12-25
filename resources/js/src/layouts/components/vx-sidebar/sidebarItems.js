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
        }
        ],
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
