
import navbarSearchAndPinList from '@/layouts/components/navbarSearchAndPinList'
import themeConfig from '@/../themeConfig.js'
import colors from '@/../themeConfig.js'

const state = {
    comments : [],
    notifications : [],
    allNotifications : [],
    searchedData : [],
    totalSearchPages : 0,
    allNotificationsCount : 0,
    allNotificationsDetail : {},
    totalNotifications : 0,
    averageRate : 0,
    salaryRate : 0,
    rootUrl : '/',
    isSidebarActive: true,
    breakpoint: null,
    sidebarWidth: "default",
    reduceButton: themeConfig.sidebarCollapsed,
    bodyOverlay: false,
    sidebarItemsMin: false,
    theme: themeConfig.theme || 'light',
    navbarSearchAndPinList: navbarSearchAndPinList,
    AppActiveUser: {},
    faqs : '',
    themePrimaryColor: colors.primary,

    starredPages: navbarSearchAndPinList.data.filter((page) => page.highlightAction),
    userRole: null,

    // Can be used to get current window with
    // Note: Above breakpoint state is for internal use of sidebar component
    windowWidth: null,
}

export default state
