// MAIN COLORS - VUESAX THEME COLORS
/*element.style {
    background: linear-gradient(30deg, #0b586a 0%, #d08683 100%);
}*/
let colors = {
    primary: '#d08683',
    success: '#28C76F',
    danger: '#EA5455',
    warning: '#FF9F43',
    dark: '#0b586a',
}

import Vue from 'vue'
import Vuesax from 'vuesax'
Vue.use(Vuesax, { theme:{ colors } });


// CONFIGS
const themeConfig = {
    theme: 'semi-dark',                                // options[String]: 'light'(default), 'dark', 'semi-dark'
    sidebarCollapsed: false,                // options[Boolean]: true, false(default)
    navbarColor: "#fff",                      // options[String]: HEX color / rgb / rgba / Valid HTML Color name - (default: #fff)
    navbarType: "floating",                    // options[String]: floating(default) / static / sticky / hidden
    footerType: "static",                      // options[String]: static(default) / sticky / hidden
    routerTransition: 'zoom-fade',        // options[String]: zoom-fade / slide-fade / fade-bottom / fade / zoom-out / none(default)
    disableCustomizer: false,                // options[Boolean]: true, false(default)
    hideScrollToTop: false,                    // options[Boolean]: true, false(default)
    disableThemeTour: false,                    // options[Boolean]: true, false(default)

  // NOTE: themeTour will be disabled in screens < 1200. Please refer docs for more info.
}

export default themeConfig
