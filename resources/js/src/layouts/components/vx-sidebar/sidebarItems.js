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
        url: "/",
        name: "Dashboard",
        slug: "home",
        icon: "HomeIcon",
    },
    {
        url: "/",
        name: "Customers",
        slug: "customers",
        icon: "UsersIcon",
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
    },
    {
        url: "/exchange-rates",
        name: "Exchange Rates",
        slug: "exchange-rates",
        icon: "ActivityIcon",
    },
    {
        url: "/tax-managment",
        name: "Tax Managment",
        slug: "tax-mangment",
        icon: "FileIcon",
    },
    {
        url: "/manage-team",
        name: "Our Team",
        slug: "our-team",
        icon: "UsersIcon",
        submenu: [{
            url: "/admins",
            name: "Admins",
            slug: "admins",
            icon: "UserIcon",
        },{
            url: "/supervisors",
            name: "Supervisors",
            slug: "supervisors",
            icon: "UserIcon",
        },{
            url: "/officers",
            name: "Officers",
            slug: "officers",
            icon: "UserIcon",
        } ],
    },
    /*{
        url: "/page2",
        name: "Page 2",
        slug: "page2",
        icon: "FileIcon",
    },*/
]
