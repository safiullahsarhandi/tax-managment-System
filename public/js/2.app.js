(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placeholder: {
      type: String,
      "default": 'Search..'
    },
    data: {
      type: Object,
      required: true
    },
    showAction: {
      type: Boolean,
      "default": false
    },
    inputClassses: {
      type: [String, Object, Array]
    },
    autoFocus: {
      type: Boolean,
      "default": false
    },
    showPinned: {
      type: Boolean,
      "default": false
    },
    backgroundOverlay: {
      type: Boolean,
      "default": false
    },
    searchLimit: {
      type: Number,
      "default": 10
    }
  },
  data: function data() {
    return {
      searchQuery: '',
      filteredData: [],
      currentSelected: -1,
      inputFocused: false,
      insideSuggestions: false
    };
  },
  watch: {
    // UPDATE SUGGESTIONS LIST
    // searchQuery(val) {
    // 	// console.log(val);
    // 	// return false;
    // 	if(val == '') {
    // 		this.inputInit();
    // 		if(this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);
    // 	}else {
    // 		if(this.backgroundOverlay && !this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', true);
    // 		// let exactEle = this.data.data.filter((item) => {
    // 		// 	return item.label.toLowerCase().startsWith(this.searchQuery.toLowerCase())
    // 		// });
    // 		// let containEle = this.data.data.filter((item) => {
    // 		// 	return !item.label.toLowerCase().startsWith(this.searchQuery.toLowerCase()) && item.label.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1
    // 		// });
    // 		// this.filteredData = exactEle.concat(containEle).slice(0,this.searchLimit)
    // 		if(val.length >= 3){
    // 			axios.post('search-data', {query: val}).then(res=>{
    // 				var response = res.data.response;
    // 				let self = this;
    // 				_.forEach(response, function(value, keys) {
    // 					_.forEach(value, function(val, key) {
    // 						// if(val.table_name)
    // 						console.log(val.table_name);
    // 						var lbl = 'lebel';
    // 						var url = '/';
    // 						self.data.data.push({index: key, label: lbl, url: url, labelIcon: 'HomeIcon', highlightAction: false})
    // 					});							
    // 				});
    // 				console.log(self.data.data);
    // 			});
    // 		}
    // 		if(!this.filteredData[0]) this.currentSelected = -1
    // 	}
    // 	// ADD: No result found
    // 	if(!this.filteredData.length && this.searchQuery) {
    // 		this.filteredData = [{
    // 			highlightAction: false,
    // 			index: -1,
    // 			label: 'No results found.',
    // 			labelIcon: 'AlertCircleIcon',
    // 			url: null,
    // 		}]
    // 	}
    // },
    autoFocus: function autoFocus(val) {
      if (val) this.focusInput();else this.searchQuery = '';
    },
    filteredData: function filteredData() {
      this.currentSelected = 0; // Prevent selecting if first item in list dont have url e.g. 'No Reult'

      if (this.filteredData[0]) {
        if (!this.filteredData[0].url) {
          this.currentSelected = -1;
        }
      }
    }
  },
  computed: {
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    actionClasses: function actionClasses() {
      var _this = this;

      return function (isHighlighted) {
        if (isHighlighted) return "stroke-current text-".concat(_this.data.highlightColor);
      };
    }
  },
  methods: {
    getSearchedData: function getSearchedData() {
      var _this2 = this;

      if (this.searchQuery != '') {
        var val = this.searchQuery;
      } else if (!_.isUndefined(this.$route.query.q) && this.$route.query.q) {
        var val = this.$route.query.q;
      }

      if (!val) {
        this.inputInit();
        if (this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);
      } else {
        var self = this;
        this.$store.dispatch('get_search_data', {
          query: val,
          page: 1
        }).then(function (res) {
          if (self.$route.path != '/searched-record') {
            self.$router.push({
              path: '/searched-record',
              query: {
                q: val
              }
            });
          } else {
            _this2.$router.replace({
              name: 'searched-record',
              query: _objectSpread(_objectSpread({}, _this2.$route.query), {}, {
                q: val
              })
            });
          }
        });
      }
    },
    escPressed: function escPressed() {
      this.$emit('closeSearchbar');
      this.searchQuery = '';
      this.filteredData = [];
    },
    inputInit: function inputInit() {
      if (this.showPinned) {
        var starredData = this.data.data.filter(function (item) {
          return item.highlightAction;
        });
        this.filteredData = starredData;
      } else {
        this.filteredData = [];
      }
    },
    updateInputFocus: function updateInputFocus() {
      var _this3 = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (val) {
        if (this.searchQuery == '') this.inputInit();
        setTimeout(function () {
          _this3.inputFocused = true;
        }, 100);
      } else {
        if (this.insideSuggestions) return;
        setTimeout(function () {
          _this3.inputFocused = false;
        }, 100);
        this.escPressed();
      }
    },
    suggestionSelected: function suggestionSelected() {
      if (this.bodyOverlay && this.filteredData[0].url) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);

      if (this.filteredData.length) {
        if (this.filteredData[0].url) {
          this.searchQuery = '';
          if (this.currentSelected >= 0) this.$emit('selected', this.filteredData[this.currentSelected]);else this.$emit('selected', this.filteredData[0]);
          this.filteredData = [];
        }
      }
    },
    actionClicked: function actionClicked() {
      this.$emit('actionClicked', this.filteredData[this.currentSelected]);
      if (!this.filteredData[this.currentSelected].highlightAction) this.filteredData.splice(this.currentSelected, 1);
    },
    increaseIndex: function increaseIndex() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!val && this.currentSelected > 0) this.currentSelected--;else if (val && this.currentSelected < this.filteredData.length - 1 && this.filteredData[this.currentSelected + 1].index > -1) this.currentSelected++;
      this.fixScrolling();
    },
    focusInput: function focusInput() {
      this.$refs.input.$el.querySelector('input').focus();
    },
    fixScrolling: function fixScrolling() {
      if (this.currentSelected > 0) {
        var liH = this.$refs.option[this.currentSelected].clientHeight;
        var ulH = this.$refs.scrollContainer.clientHeight;

        if (ulH - liH * this.currentSelected < liH) {
          this.$refs.scrollContainer.scrollTop = Math.round((this.currentSelected + 1 - ulH / liH + 1) * liH);
        }
      }
    }
  },
  mounted: function mounted() {
    if (this.autoFocus) this.focusInput();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/vx-auto-suggest/VxAutoSuggest.vue */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "the-navbar",
  props: {
    navbarColor: {
      type: String,
      "default": "#fff"
    }
  },
  data: function data() {
    return {
      changepassword: false,
      current_password: null,
      new_password: null,
      confirm_password: null,
      activeUser: '',
      activeUserRole: '',
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      searchQuery: '',
      showFullSearch: false,
      unreadNotifications: [],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      autoFocusSearch: false,
      showBookmarkPagesDropdown: false
    };
  },
  watch: {
    '$route': function $route() {
      if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false;
    }
  },
  computed: {
    notifications: function notifications() {
      return this.$store.state.notifications;
    },
    totalNotifications: function totalNotifications() {
      return this.$store.state.totalNotifications;
    },
    // HELPER
    sidebarWidth: function sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    breakpoint: function breakpoint() {
      return this.$store.state.breakpoint;
    },
    // NAVBAR STYLE
    classObj: function classObj() {
      if (this.sidebarWidth == "default") return "navbar-default";else if (this.sidebarWidth == "reduced") return "navbar-reduced";else if (this.sidebarWidth) return "navbar-full";
    },
    // BOOKMARK & SEARCH
    data: function data() {
      return this.$store.state.navbarSearchAndPinList;
    },
    starredPages: function starredPages() {
      return this.$store.state.starredPages;
    },
    starredPagesLimited: {
      get: function get() {
        return this.starredPages.slice(0, 10);
      },
      set: function set(list) {
        this.$store.dispatch('arrangeStarredPagesLimited', list);
      }
    },
    starredPagesMore: {
      get: function get() {
        return this.starredPages.slice(10);
      },
      set: function set(list) {
        this.$store.dispatch('arrangeStarredPagesMore', list);
      }
    }
  },
  created: function created() {
    this.activeUser = this.$store.state.AppActiveUser.full_name;
    this.activeUserRole = this.$store.state.AppActiveUser.type;
    this.$store.dispatch('getNotifications');
  },
  methods: {
    clickMe: function clickMe(e) {
      alert(e);
    },
    goToDestination: function goToDestination(notification) {
      // alert(notification.click_action);
      if (notification.click_action !== this.$route.path) {
        this.$store.dispatch('markAsRead', notification);
        this.$router.push(notification.click_action);
      }
    },
    changePasswordPopUp: function changePasswordPopUp(e, scope) {
      this.current_password = null;
      this.new_password = null;
      this.confirm_password = null;
      this.changepassword = true;
    },
    changePassword: function changePassword() {
      var _this = this;

      this.$validator.validateAll('changePassword').then(function (result) {
        if (result) {
          var manager_id = _this.$store.state.AppActiveUser.manager_id;
          var data = {
            'id': manager_id,
            'current_password': _this.current_password,
            'new_password': _this.new_password,
            'confirm_password': _this.confirm_password
          };
          axios.post('change-password', data).then(function (res) {
            _this.$vs.loading.close();

            if (res.data.status == true) {
              _this.changepassword = false; // document.getElementById('changePassword').reset();

              _this.$vs.notify({
                position: 'top-right',
                color: 'success',
                text: res.data.msg
              });
            } else {
              _this.$vs.notify({
                position: 'top-right',
                color: 'danger',
                text: res.data.msg
              });
            }
          });
        }
      });
    },
    logout: function logout() {
      var _this2 = this;

      axios.get('logout').then(function (res) {
        if (res.data.status == 'success') {
          _this2.$vs.notify({
            position: 'center-top',
            color: 'success',
            text: res.data.msg
          });

          localStorage.removeItem('admin');
          localStorage.removeItem('tokenSentToServer');

          _this2.$store.commit('setLoginUser', {});

          _this2.$router.push({
            name: 'pageLogin'
          });
        }
      });
    },
    showSidebar: function showSidebar() {
      this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
    },
    selected: function selected(item) {
      this.$router.push(item.url);
      this.showFullSearch = false;
    },
    actionClicked: function actionClicked(item) {
      // e.stopPropogation();
      this.$store.dispatch('updateStarredPage', {
        index: item.index,
        val: !item.highlightAction
      });
    },
    showNavbarSearch: function showNavbarSearch() {
      this.showFullSearch = true;
    },
    showSearchbar: function showSearchbar() {
      this.showFullSearch = true;
    },
    elapsedTime: function elapsedTime(startTime) {
      var x = new Date(startTime);
      var now = new Date();
      var timeDiff = now - x;
      timeDiff /= 1000;
      var seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);
      var minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);
      var hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);
      var days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);
      var years = timeDiff;

      if (years > 0) {
        return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
      } else if (days > 0) {
        return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
      } else if (hours > 0) {
        return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? "".concat(seconds, " sec ago") : 'just now');
      }

      return 'Just Now';
    },
    outside: function outside() {
      this.showBookmarkPagesDropdown = false;
    }
  },
  directives: {
    'click-outside': {
      bind: function bind(el, binding) {
        var bubble = binding.modifiers.bubble;

        var handler = function handler(e) {
          if (bubble || !el.contains(e.target) && el !== e.target) {
            binding.value(e);
          }
        };

        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler);
      },
      unbind: function unbind(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  },
  components: {
    VxAutoSuggest: _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VxSidebarGroup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarGroup.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue");
/* harmony import */ var _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebarItem.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-sidebar',
  props: {
    sidebarItems: {
      type: Array,
      required: true
    },
    title: {
      type: String
    },
    logo: {
      type: String
    },
    parent: {
      type: String
    },
    openGroupHover: {
      type: Boolean,
      "default": false
    },
    reduceNotRebound: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      clickNotClose: false,
      // disable close sidebar on outside click
      reduce: false,
      // determines if sidebar is reduce - component property
      showCloseButton: false,
      // show close button in smaller devices
      isMouseEnter: false,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 1,
        swipeEasing: true
      },
      windowWidth: window.innerWidth,
      //width of windows
      showShadowBottom: false
    };
  },
  computed: {
    isSidebarActive: {
      get: function get() {
        return this.$store.state.isSidebarActive;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', val);
      }
    },
    reduceSidebar: function reduceSidebar() {
      return Boolean(this.reduce && this.reduceButton);
    },
    reduceButton: {
      get: function get() {
        return this.$store.state.reduceButton;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
      }
    },
    sidebarItemsMin: function sidebarItemsMin() {
      return this.$store.state.sidebarItemsMin;
    },
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (sidebarItem) {
        var path = _this.$route.fullPath;
        var open = false;

        var func = function func(sidebarItem) {
          if (sidebarItem.submenu) {
            sidebarItem.submenu.forEach(function (item) {
              if (path == item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(sidebarItem);
        return open;
      };
    }
  },
  watch: {
    reduce: function reduce(val) {
      if (val == true) {
        this.$store.dispatch('updateSidebarWidth', 'reduced');
      } else {
        this.$store.dispatch('updateSidebarWidth', 'default');
      }

      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    },
    reduceButton: function reduceButton() {
      this.setSidebarWidth();
    },
    '$route': function $route() {
      if (this.isSidebarActive && this.showCloseButton) this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
    }
  },
  methods: {
    sidebarMouseEntered: function sidebarMouseEntered() {
      if (this.reduce) this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
      this.isMouseEnter = true;
    },
    sidebarMouseLeave: function sidebarMouseLeave() {
      if (this.reduce) {
        this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', true);
      }

      this.isMouseEnter = false;
    },
    toggleReduce: function toggleReduce(val) {
      this.reduceButton = val;
      this.setSidebarWidth();
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        if (this.windowWidth < 992) this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'md');else this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'lg');
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
        if (this.reduceButton) this.reduce = false; // this.reduceButton = false;

        this.showCloseButton = true;
        this.clickNotClose = false;
        this.$store.dispatch('updateSidebarWidth', 'no-sidebar');
        this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
      } else {
        this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'xl');
        if (this.reduceButton) this.reduce = true;else this.reduce = false;
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
        if (this.reduceButton && !this.isMouseEnter) this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', true);else this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
        this.clickNotClose = true;
        this.showCloseButton = false;
        if (this.reduceSidebar) this.$store.dispatch('updateSidebarWidth', 'reduced');else this.$store.dispatch('updateSidebarWidth', 'default');
      }
    },
    psSectionScroll: function psSectionScroll() {
      if (this.$refs.mainSidebarPs.$el.scrollTop > 0) this.showShadowBottom = true;else this.showShadowBottom = false;
    },
    onSwipeLeft: function onSwipeLeft() {
      if (this.isSidebarActive && this.showCloseButton) this.isSidebarActive = false;
    },
    onSwipeRightSidebarSwipeArea: function onSwipeRightSidebarSwipeArea() {
      if (!this.isSidebarActive && this.showCloseButton) this.isSidebarActive = true;
    }
  },
  components: {
    VxSidebarGroup: _VxSidebarGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VxSidebarItem: _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      window.addEventListener('resize', _this2.handleWindowResize);
    });
    this.setSidebarWidth();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarItem.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vx-sidebar-group',
  props: {
    openHover: {
      "default": false,
      type: Boolean
    },
    open: {
      "default": false,
      type: Boolean
    },
    group: {
      type: Object
    },
    groupIndex: {
      type: Number
    }
  },
  data: function data() {
    return {
      maxHeight: '0px',
      openItems: false
    };
  },
  computed: {
    sidebarItemsMin: function sidebarItemsMin() {
      return this.$store.state.sidebarItemsMin;
    },
    styleItems: function styleItems() {
      return {
        maxHeight: this.maxHeight
      };
    },
    itemIcon: function itemIcon() {
      return function (index) {
        if (!((index.match(/\./g) || []).length > 1)) return "CircleIcon";
      };
    },
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (sidebarItem) {
        var path = _this.$route.fullPath;
        var open = false;

        var func = function func(sidebarItem) {
          if (sidebarItem.submenu) {
            sidebarItem.submenu.forEach(function (item) {
              if (path == item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(sidebarItem);
        return open;
      };
    }
  },
  watch: {
    // OPEN & CLOSES DROPDOWN ON ROUTE CHANGE
    '$route': function $route() {
      var _this2 = this;

      if (this.sidebarItemsMin) return;
      var scrollHeight = this.scrollHeight;

      if (this.openItems && !this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = "".concat(0, "px");
        }, 50);
      } else if (this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = 'none';
        }, 300);
      }
    },
    maxHeight: function maxHeight() {
      this.openItems = this.maxHeight != '0px';
    },
    // OPEN AND CLOSES DROPDOWN MENU ON SIDEBAR COLLAPSE AND DEFAULT VIEW
    '$store.state.sidebarItemsMin': function $storeStateSidebarItemsMin(val) {
      var _this3 = this;

      var scrollHeight = this.$refs.items.scrollHeight;

      if (!val && this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = 'none';
        }, 300);
      } else {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = '0px';
        }, 50);
      }

      if (val && this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = '0px';
        }, 250);
      }
    }
  },
  methods: {
    clickGroup: function clickGroup() {
      var _this4 = this;

      if (!this.openHover) {
        var thisScrollHeight = this.$refs.items.scrollHeight;

        if (this.maxHeight == '0px') {
          this.maxHeight = "".concat(thisScrollHeight, "px");
          setTimeout(function () {
            _this4.maxHeight = 'none';
          }, 300);
        } else {
          this.maxHeight = "".concat(thisScrollHeight, "px");
          setTimeout(function () {
            _this4.maxHeight = "".concat(0, "px");
          }, 50);
        }

        this.$parent.$children.map(function (child) {
          if (child.isGroupActive) {
            if (child !== _this4 && !child.open && child.maxHeight != '0px') {
              setTimeout(function () {
                child.maxHeight = "".concat(0, "px");
              }, 50);
            }
          }
        });
      }
    },
    mouseover: function mouseover() {
      if (this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        var scrollHeight = 0;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    }
  },
  components: {
    VxSidebarItem: _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.openItems = this.open;

    if (this.open) {
      this.maxHeight = 'none';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VxSidebarItem',
  props: {
    icon: {
      "default": "",
      type: String
    },
    iconSmall: {
      "default": false,
      type: Boolean
    },
    iconPack: {
      "default": 'material-icons',
      type: String
    },
    href: {
      "default": '#',
      type: String
    },
    to: {
      "default": null,
      type: String
    },
    index: {
      "default": null,
      type: [String, Number]
    },
    featherIcon: {
      "default": true,
      type: Boolean
    },
    target: {
      "default": '_self',
      type: String
    },
    isDisabled: {
      "default": false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      activeLink: false
    };
  },
  watch: {
    '$route': function $route() {
      this.CheckIsActive();
    }
  },
  methods: {
    CheckIsActive: function CheckIsActive() {
      if (this.to) {
        if (this.to == this.$router.path && this.to) this.activeLink = true;else this.activeLink = false; // if (this.$route.path.slice(1).includes(this.to.slice(1)) && this.to.slice(1)) this.activeLink = true
        // else this.activeLink = false
      }
    }
  },
  updated: function updated() {
    this.CheckIsActive();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: vxAutoSuggest.scss\n    Description: Styles for vx-auto-suggest component. Imported in VxAutoSuggest.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vx-auto-suggest {\n  position: relative;\n}\n.vx-auto-suggest .vs-input .vs-con-input .vs-inputx {\n  z-index: 10;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion {\n  padding: 0.8rem 1rem;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion.vx-auto-suggest__current-selected {\n  background: #F1F1F1;\n}\n.navbar-sticky .vx-auto-suggest .auto-suggest-suggestions-list {\n  margin-left: 0.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: vxSidebar.scss\n  Description: Styles for vx-sidebar component. Imported in VxSidebar.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\nlinear-gradient(30deg, #0b586a 0%, #d08683 100%)\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.main-menu-sidebar {\n  white-space: nowrap;\n}\n.main-menu-sidebar .vs-sidebar--background {\n  z-index: 51000;\n}\n.main-menu-sidebar .vs-sidebar {\n  z-index: 51000;\n  position: fixed;\n}\n.main-menu-sidebar .vs-sidebar .vs-sidebar--items {\n  padding: 0;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce {\n  max-width: 80px;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce:hover:not(.vs-sidebar-reduceNotRebound):not(.vs-sidebar-reduceNotHoverExpand) .vs-sidebar-group .group-header i {\n  display: block;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce .vs-sidebar-group .group-header i {\n  display: none;\n}\n.main-menu-sidebar .header-sidebar {\n  padding: 20px 19px 16px 23px;\n  width: 100%;\n}\n.main-menu-sidebar .header-sidebar .logo img {\n  padding: 4px 0;\n}\n.main-menu-sidebar .header-sidebar .logo .logo-text {\n  font-size: 22px;\n  font-weight: 600;\n  color: #7367F0;\n  -webkit-animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n          animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n}\n.main-menu-sidebar .header-sidebar .feather-icon svg {\n  color: #7367F0;\n}\n.main-menu-sidebar .shadow-bottom {\n  position: absolute;\n  z-index: 2;\n  height: 60px;\n  width: 100%;\n  pointer-events: none;\n  margin-top: -1.3rem;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n  background: linear-gradient(white 41%, rgba(255, 255, 255, 0.11) 95%, rgba(255, 255, 255, 0) 100%);\n}\n.main-menu-sidebar .scroll-area--main-sidebar {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: calc(100vh - 69px);\n}\n.main-menu-sidebar .scroll-area--main-sidebar > .vs-sidebar-group {\n  padding: 0 15px;\n}\n.main-menu-sidebar .scroll-area--main-sidebar > .vs-sidebar--item {\n  padding: 0 15px;\n}\n.main-menu-sidebar .navigation-header {\n  font-size: 0.9rem;\n  display: block;\n  margin-top: 2rem;\n  margin-bottom: 0.8rem;\n  margin-left: 2.2rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #999;\n}\n.main-menu-sidebar .feather-icon {\n  color: #565656;\n  margin-right: 14px;\n}\n.main-menu-sidebar .feather-icon .feather {\n  width: 20px;\n  height: 20px;\n}\n.main-menu-sidebar .con-vs-chip {\n  min-height: 24px;\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);\n}\n.main-menu-sidebar .con-vs-chip .vs-chip--text {\n  color: #fff;\n  font-size: 0.8rem;\n}\n.main-menu-sidebar .vs-sidebar--item {\n  transition: none;\n  overflow: visible !important;\n}\n.main-menu-sidebar .vs-sidebar--item:hover a {\n  color: inherit;\n}\n.main-menu-sidebar .vs-sidebar--item:hover a > * {\n  transform: translateX(5px);\n}\n.main-menu-sidebar .vs-sidebar--item.vs-sidebar-item-active {\n  border-right: none !important;\n  font-weight: 400;\n  z-index: 1;\n  position: relative;\n}\n.main-menu-sidebar .vs-sidebar--item a {\n  font-size: 1rem;\n  transition: none;\n  border-radius: 4px;\n  opacity: unset;\n  color: #626262;\n  padding: 10px 15px;\n}\n.main-menu-sidebar .vs-sidebar--item a > * {\n  transition: transform 0.25s ease;\n}\n.main-menu-sidebar .vs-sidebar--item a span {\n  font-size: 15px;\n}\n.main-menu-sidebar .vs-sidebar--item.disabled-item a span {\n  color: #e2e2e2;\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n  font-weight: 400;\n  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active .feather-icon {\n  color: #fff;\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active span {\n  color: #fff;\n}\n#sidebar-demo .vs-sidebar {\n  z-index: 52000;\n}\n#sidebar-demo .vs-sidebar-staticPosition {\n  z-index: 10000;\n}\n#sidebar-demo #parentx-demo-7 .parentx:not(.show-custom-sidebar) .vs-sidebar {\n  display: none;\n  z-index: 1 !important;\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active {\n  background: linear-gradient(30deg, rgba(var(--vs-primary), 1), rgba(var(--vs-dark), 0.7)) !important;\n  box-shadow: 0px 0px 10px 1px rgba(var(--vs-dark), 0.7) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: vxSidebarGroup.scss\n  Description: Styles for vx-sidebar-group component. Imported in VxSidebarGroup.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vs-sidebar-group {\n  overflow: hidden;\n}\n.vs-sidebar-group .group-header {\n  transition: all 0.5s ease;\n  font-size: 15px;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n.vs-sidebar-group .group-header .feather-grp-header-arrow {\n  position: absolute !important;\n  right: 8px;\n  top: 12px;\n  transition: all 0.2s ease-out;\n  transform: rotate(0deg);\n  display: inline-block;\n}\n.vs-sidebar-group .group-header .feather-grp-header-arrow.rotate90 {\n  transform: rotate(90deg);\n}\n.vs-sidebar-group .group-header > * {\n  transition: all 0.25s ease;\n}\n.vs-sidebar-group .group-header:hover > * {\n  transform: translateX(5px);\n}\n.vs-sidebar-group .group-header .con-vs-chip {\n  margin-bottom: 0;\n}\n.vs-sidebar-group .vs-icon {\n  font-size: 1.5rem;\n}\n.vs-sidebar-group:hover > .group-header {\n  transform: unset;\n}\n.vs-sidebar-group .vs-sidebar-group .group-header {\n  padding-left: 20px;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .group-header {\n  cursor: pointer;\n  background: #f6f6f6;\n  border-radius: 6px;\n  margin-bottom: 7px;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items {\n  padding-left: 0;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item span {\n  padding-left: 2rem;\n  padding: 0;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item:last-child {\n  border-bottom: 0px;\n}\n.vs-sidebar-group.vs-sidebar-group-open .vs-sidebar-group {\n  overflow: visible;\n}\n.vs-sidebar-group.vs-sidebar-group-active > .group-header {\n  background: #f6f6f6;\n  border-radius: 6px;\n}\n.vs-sidebar-group .vs-sidebar-group-items {\n  opacity: 0;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a {\n  padding: 10px 15px 10px 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a .feather-icon {\n  margin-right: 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item:last-child a {\n  margin-bottom: 0;\n}\n.vs-sidebar-group .vs-sidebar-group-items li:last-child {\n  padding-bottom: 7px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group span .feather-icon {\n  margin-right: 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group .feather-icon {\n  margin-right: 0px;\n}\n.vs-sidebar-group.disabled-item span {\n  color: #e2e2e2;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#navbar .con-vs-popup .vs-popup {\n  width: 460px !important;\n}\ndiv#page-click-loader {\n  background: transparent;\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  z-index: 99999;\n  right: 16px;\n}\n@media screen and (max-width: 768px) {\ndiv#page-click-loader {\n    right: 1px;\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vx-auto-suggest" }, [
    _c(
      "div",
      { staticClass: "flex items-center relative" },
      [
        _c("vs-input", {
          ref: "input",
          staticClass: "z-50",
          class: _vm.inputClassses,
          attrs: {
            placeholder: _vm.placeholder,
            "icon-pack": "feather",
            icon: "icon-search",
            "icon-no-border": ""
          },
          on: {
            keyup: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                return _vm.escPressed($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.getSearchedData()
              }
            ]
          },
          model: {
            value: _vm.searchQuery,
            callback: function($$v) {
              _vm.searchQuery = $$v
            },
            expression: "searchQuery"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "ul",
      {
        ref: "scrollContainer",
        staticClass:
          "auto-suggest-suggestions-list z-50 rounded-lg mt-2 shadow-lg overflow-hidden",
        class: { hidden: !_vm.inputFocused },
        attrs: { tabindex: "-1" },
        on: {
          mouseenter: function($event) {
            _vm.insideSuggestions = true
          },
          mouseleave: function($event) {
            _vm.insideSuggestions = false
          },
          focus: _vm.updateInputFocus,
          blur: function($event) {
            return _vm.updateInputFocus(false)
          }
        }
      },
      _vm._l(_vm.filteredData, function(suggestion, index) {
        return _c(
          "li",
          {
            key: index,
            ref: "option",
            refInFor: true,
            staticClass:
              "auto-suggest__suggestion flex items-center justify-between py-3 cursor-pointer",
            class: {
              "vx-auto-suggest__current-selected": _vm.currentSelected == index,
              "pointer-events-none": suggestion.index < 0
            },
            on: {
              mouseenter: function($event) {
                _vm.currentSelected = index
              },
              click: _vm.suggestionSelected
            }
          },
          [
            _c(
              "div",
              { staticClass: "flex items-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-4",
                  attrs: { icon: suggestion.labelIcon, svgClasses: "h-5 w-5" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(suggestion.label))])
              ],
              1
            ),
            _vm._v(" "),
            _vm.showAction
              ? _c("feather-icon", {
                  attrs: {
                    icon: _vm.data.actionIcon,
                    svgClasses: [
                      _vm.actionClasses(suggestion.highlightAction),
                      "h-5 w-5"
                    ]
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.actionClicked($event)
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "footer",
    { staticClass: "the-footer flex-wrap justify-between", class: _vm.classes },
    [
      _c("span", [
        _vm._v(
          "COPYRIGHT @ " +
            _vm._s(new Date().getFullYear()) +
            ", All rights Reserved"
        )
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "md:flex hidden items-center" })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "relative", attrs: { id: "navbar" } },
    [
      _c("div", {
        staticClass: "vs-con-loading__container",
        attrs: { id: "page-click-loader" }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-navbar-wrapper" },
        [
          _c(
            "vs-navbar",
            {
              staticClass: "vx-navbar navbar-custom",
              class: _vm.classObj,
              attrs: { color: _vm.navbarColor }
            },
            [
              _c("feather-icon", {
                staticClass: "sm:inline-flex xl:hidden cursor-pointer mr-1",
                attrs: { icon: "MenuIcon" },
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.showSidebar($event)
                  }
                }
              }),
              _vm._v(" "),
              _vm.breakpoint != "md"
                ? [
                    _c(
                      "ul",
                      { staticClass: "vx-navbar__starred-pages" },
                      [
                        _c(
                          "draggable",
                          {
                            staticClass: "flex cursor-move",
                            attrs: { group: { name: "pinList" } },
                            model: {
                              value: _vm.starredPagesLimited,
                              callback: function($$v) {
                                _vm.starredPagesLimited = $$v
                              },
                              expression: "starredPagesLimited"
                            }
                          },
                          _vm._l(_vm.starredPagesLimited, function(page) {
                            return _c(
                              "li",
                              { key: page.url, staticClass: "starred-page" },
                              [
                                _c(
                                  "vx-tooltip",
                                  {
                                    attrs: {
                                      text: page.label,
                                      position: "bottom",
                                      delay: ".3s"
                                    }
                                  },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "p-2 cursor-pointer",
                                      attrs: {
                                        svgClasses: "h-6 w-6",
                                        icon: page.labelIcon
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.$router.push(page.url)
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.starredPagesMore.length
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "vx-navbar__starred-pages--more-dropdown"
                          },
                          [
                            _c(
                              "vs-dropdown",
                              {
                                attrs: {
                                  "vs-custom-content": "",
                                  "vs-trigger-click": ""
                                }
                              },
                              [
                                _c("feather-icon", {
                                  staticClass: "cursor-pointer p-2",
                                  attrs: {
                                    icon: "ChevronDownIcon",
                                    svgClasses: "h-4 w-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-dropdown-menu", [
                                  _c(
                                    "ul",
                                    {
                                      staticClass:
                                        "vx-navbar__starred-pages-more--list"
                                    },
                                    [
                                      _c(
                                        "draggable",
                                        {
                                          staticClass: "cursor-move",
                                          attrs: { group: { name: "pinList" } },
                                          model: {
                                            value: _vm.starredPagesMore,
                                            callback: function($$v) {
                                              _vm.starredPagesMore = $$v
                                            },
                                            expression: "starredPagesMore"
                                          }
                                        },
                                        _vm._l(_vm.starredPagesMore, function(
                                          page
                                        ) {
                                          return _c(
                                            "li",
                                            {
                                              key: page.url,
                                              staticClass:
                                                "starred-page--more flex items-center cursor-pointer",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    page.url
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass: "ml-2 mr-1",
                                                attrs: {
                                                  svgClasses: "h-5 w-5",
                                                  icon: page.labelIcon
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass: "px-2 pt-2 pb-1"
                                                },
                                                [_vm._v(_vm._s(page.label))]
                                              )
                                            ],
                                            1
                                          )
                                        }),
                                        0
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "bookmark-container",
                        staticStyle: { width: "32%" }
                      },
                      [
                        _c("vx-auto-suggest", {
                          attrs: {
                            autoFocus: false,
                            data: _vm.navbarSearchAndPinList,
                            inputClassses: "w-full",
                            "show-action": "",
                            "show-pinned": "",
                            "background-overlay": ""
                          },
                          on: {
                            selected: _vm.selected,
                            actionClicked: _vm.actionClicked
                          }
                        })
                      ],
                      1
                    )
                  ]
                : _vm._e(),
              _vm._v(" "),
              _c("vs-spacer"),
              _vm._v(" "),
              _c(
                "vs-dropdown",
                {
                  ref: "notificationDropdown",
                  staticClass: "cursor-pointer ml-4",
                  attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer mt-1 sm:mr-6 mr-2",
                    attrs: { icon: "BellIcon", badge: _vm.totalNotifications }
                  }),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown-menu",
                    {
                      staticClass:
                        "notification-dropdown dropdown-custom vx-navbar-dropdown"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "notification-top text-center p-5 bg-primary text-white"
                        },
                        [
                          _c("h3", { staticClass: "text-white" }, [
                            _vm._v(_vm._s(_vm.totalNotifications) + " New")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "opacity-75" }, [
                            _vm._v("App Notifications")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "VuePerfectScrollbar",
                        {
                          ref: "mainSidebarPs",
                          staticClass:
                            "scroll-area--nofications-dropdown p-0 mb-10",
                          attrs: { settings: _vm.settings }
                        },
                        [
                          _c(
                            "ul",
                            { staticClass: "bordered-items" },
                            _vm._l(_vm.notifications, function(ntf, index) {
                              return _c(
                                "li",
                                {
                                  key: index,
                                  staticClass:
                                    "flex justify-between px-4 py-4 notification cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.goToDestination(ntf)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "flex items-start" },
                                    [
                                      _c("feather-icon", {
                                        attrs: {
                                          icon: ntf.is_checked
                                            ? "EyeIcon"
                                            : "EyeOffIcon",
                                          svgClasses: [
                                            ntf.is_checked
                                              ? "text-primary"
                                              : "text-dark",
                                            "stroke-current mr-1 h-6 w-6"
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "mx-2" }, [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "font-medium block notification-title",
                                            class: [
                                              ntf.is_checked
                                                ? "text-primary"
                                                : "text-dark"
                                            ]
                                          },
                                          [_vm._v(_vm._s(ntf.notification))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "small",
                                          {
                                            class: [
                                              { "text-dark": !ntf.is_checked }
                                            ]
                                          },
                                          [_vm._v(_vm._s(ntf.description))]
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "small",
                                    { staticClass: "mt-1 whitespace-no-wrap" },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.elapsedTime(ntf.created_at))
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("router-link", { attrs: { to: "/notifications" } }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "\n                    checkout-footer\n                    fixed\n                    bottom-0\n                    rounded-b-lg\n                    text-primary\n                    w-full\n                    p-2\n                    font-semibold\n                    text-center\n                    border\n                    border-b-0\n                    border-l-0\n                    border-r-0\n                    border-solid\n                    d-theme-border-grey-light\n                    cursor-pointer"
                          },
                          [_c("span", [_vm._v("View All Notifications")])]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "the-navbar__user-meta flex items-center" },
                [
                  _c(
                    "div",
                    { staticClass: "text-right leading-tight hidden sm:block" },
                    [
                      _c("p", { staticClass: "font-semibold" }, [
                        _vm._v(_vm._s(_vm.activeUser))
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v(_vm._s(_vm.activeUserRole))])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass: "cursor-pointer",
                      attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "con-img ml-3" },
                        [_c("vs-avatar", [_vm._v("Admin")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        { staticClass: "vx-navbar-dropdown" },
                        [
                          _c("ul", { staticStyle: { "min-width": "14rem" } }, [
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.changePasswordPopUp()
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "KeyIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Change Passowrd")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                                on: {
                                  click: function($event) {
                                    return _vm.logout()
                                  }
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "LogOutIcon",
                                    svgClasses: "w-4 h-4"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "ml-2" }, [
                                  _vm._v("Logout")
                                ])
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { active: _vm.changepassword, title: "Change Password" },
          on: {
            "update:active": function($event) {
              _vm.changepassword = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "changePassword",
              attrs: {
                autocomplete: "off",
                "data-vv-scope": "changePassword",
                id: "changePassword"
              },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.changePassword($event, "changePassword")
                }
              }
            },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: {
                              type: "password",
                              name: "current_password",
                              "label-placeholder": "Current Password",
                              "data-vv-scope": "changePassword"
                            },
                            model: {
                              value: _vm.current_password,
                              callback: function($$v) {
                                _vm.current_password = $$v
                              },
                              expression: "current_password"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has(
                                    "changePassword.current_password"
                                  ),
                                  expression:
                                    "errors.has('changePassword.current_password')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "changePassword.current_password"
                                  )
                                )
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:6",
                                expression: "'required|min:6'"
                              }
                            ],
                            ref: "password",
                            attrs: {
                              type: "password",
                              name: "password",
                              "label-placeholder": "New Password",
                              "data-vv-scope": "changePassword"
                            },
                            model: {
                              value: _vm.new_password,
                              callback: function($$v) {
                                _vm.new_password = $$v
                              },
                              expression: "new_password"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has(
                                    "changePassword.password"
                                  ),
                                  expression:
                                    "errors.has('changePassword.password')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("changePassword.password")
                                )
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-2" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min:6|confirmed:password",
                                expression:
                                  "'required|min:6|confirmed:password'"
                              }
                            ],
                            attrs: {
                              type: "password",
                              name: "confirm_password",
                              "label-placeholder": "Confirm Password",
                              "data-vv-scope": "changePassword",
                              "data-vv-as": "password"
                            },
                            model: {
                              value: _vm.confirm_password,
                              callback: function($$v) {
                                _vm.confirm_password = $$v
                              },
                              expression: "confirm_password"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has(
                                    "changePassword.confirm_password"
                                  ),
                                  expression:
                                    "errors.has('changePassword.confirm_password')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "changePassword.confirm_password"
                                  )
                                )
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-col",
                    {
                      staticClass: "mt-2",
                      attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12" }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "float-right mt-2",
                          attrs: { button: "submit", type: "gradient" }
                        },
                        [_vm._v("Change Password")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "parentx" },
    [
      _c(
        "vs-sidebar",
        {
          directives: [
            {
              name: "hammer",
              rawName: "v-hammer:swipe.left",
              value: _vm.onSwipeLeft,
              expression: "onSwipeLeft",
              arg: "swipe",
              modifiers: { left: true }
            }
          ],
          ref: "mainSidebar",
          staticClass: "sidebarx main-menu-sidebar items-no-padding",
          attrs: {
            parent: _vm.parent,
            hiddenBackground: _vm.clickNotClose,
            reduce: _vm.reduce,
            "default-index": "-1",
            "click-not-close": _vm.clickNotClose,
            "reduce-not-rebound": _vm.reduceNotRebound
          },
          model: {
            value: _vm.isSidebarActive,
            callback: function($$v) {
              _vm.isSidebarActive = $$v
            },
            expression: "isSidebarActive"
          }
        },
        [
          _c(
            "div",
            {
              on: {
                mouseenter: _vm.sidebarMouseEntered,
                mouseleave: _vm.sidebarMouseLeave
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "header-sidebar flex items-end justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c("div", { staticClass: "logo flex items-center" }, [
                    _c("img", {
                      staticClass: "w-6/12 m-auto",
                      attrs: { src: _vm.logo }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mb-3" },
                    [
                      _vm.showCloseButton
                        ? [
                            _c("feather-icon", {
                              staticClass: "m-0 cursor-pointer",
                              attrs: { icon: "XIcon" },
                              on: {
                                click: function($event) {
                                  return _vm.$store.commit(
                                    "TOGGLE_IS_SIDEBAR_ACTIVE",
                                    false
                                  )
                                }
                              }
                            })
                          ]
                        : !_vm.showCloseButton && !_vm.sidebarItemsMin
                        ? [
                            _c("feather-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.reduce,
                                  expression: "!reduce"
                                }
                              ],
                              staticClass: "mr-0 cursor-pointer",
                              attrs: {
                                icon: "DiscIcon",
                                "svg-classes": "stroke-current",
                                id: "btnSidebarToggler"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleReduce(true)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.reduce,
                                  expression: "reduce"
                                }
                              ],
                              staticClass: "mr-0 cursor-pointer",
                              attrs: {
                                icon: "CircleIcon",
                                "svg-classes": "stroke-current",
                                id: "btnSidebarToggler"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleReduce(false)
                                }
                              }
                            })
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showShadowBottom,
                    expression: "showShadowBottom"
                  }
                ],
                staticClass: "shadow-bottom"
              }),
              _vm._v(" "),
              _c(
                "VuePerfectScrollbar",
                {
                  ref: "mainSidebarPs",
                  staticClass: "scroll-area--main-sidebar pt-2",
                  attrs: { settings: _vm.settings },
                  on: { "ps-scroll-y": _vm.psSectionScroll }
                },
                [
                  _vm._l(_vm.sidebarItems, function(sidebarItem, index) {
                    return [
                      sidebarItem.header && !_vm.sidebarItemsMin
                        ? _c(
                            "span",
                            {
                              key: "header-" + index,
                              staticClass: "navigation-header truncate"
                            },
                            [_vm._v(_vm._s(sidebarItem.header))]
                          )
                        : !sidebarItem.header
                        ? [
                            !sidebarItem.submenu
                              ? _c(
                                  "vx-sidebar-item",
                                  {
                                    key: "sidebarItem-" + index,
                                    ref: "sidebarLink",
                                    refInFor: true,
                                    attrs: {
                                      index: index,
                                      to:
                                        sidebarItem.slug != "external"
                                          ? sidebarItem.isMain
                                            ? _vm.$store.state.rootUrl
                                            : sidebarItem.url
                                          : "",
                                      href:
                                        sidebarItem.slug == "external"
                                          ? sidebarItem.url
                                          : "",
                                      icon: sidebarItem.icon,
                                      target: sidebarItem.target,
                                      isDisabled: sidebarItem.isDisabled
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: !_vm.sidebarItemsMin,
                                            expression: "!sidebarItemsMin"
                                          }
                                        ],
                                        staticClass: "truncate"
                                      },
                                      [_vm._v(_vm._s(sidebarItem.name))]
                                    ),
                                    _vm._v(" "),
                                    sidebarItem.tag &&
                                    (_vm.isMouseEnter || !_vm.reduce)
                                      ? _c(
                                          "vs-chip",
                                          {
                                            staticClass: "ml-auto",
                                            attrs: {
                                              color: sidebarItem.tagColor
                                            }
                                          },
                                          [_vm._v(_vm._s(sidebarItem.tag))]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : [
                                  _c("vx-sidebar-group", {
                                    key: "group-" + index,
                                    ref: "sidebarGrp",
                                    refInFor: true,
                                    attrs: {
                                      openHover: _vm.openGroupHover,
                                      group: sidebarItem,
                                      groupIndex: index,
                                      open: _vm.isGroupActive(sidebarItem)
                                    }
                                  })
                                ]
                          ]
                        : _vm._e()
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      !_vm.isSidebarActive
        ? _c("div", {
            directives: [
              {
                name: "hammer",
                rawName: "v-hammer:swipe.right",
                value: _vm.onSwipeRightSidebarSwipeArea,
                expression: "onSwipeRightSidebarSwipeArea",
                arg: "swipe",
                modifiers: { right: true }
              }
            ],
            staticClass: "sidebar-swipe-area",
            attrs: { id: "sidebar-swipe-area" }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vs-sidebar-group",
      class: [
        { "vs-sidebar-group-open": _vm.openItems },
        { "vs-sidebar-group-active": _vm.open },
        { "disabled-item pointer-events-none": _vm.group.isDisabled }
      ],
      on: { mouseover: _vm.mouseover, mouseout: _vm.mouseout }
    },
    [
      _c(
        "div",
        { staticClass: "group-header w-full", on: { click: _vm.clickGroup } },
        [
          _c(
            "span",
            { staticClass: "flex items-center w-full" },
            [
              _vm.group.icon || this.groupIndex > Math.floor(this.groupIndex)
                ? _c("feather-icon", {
                    attrs: {
                      icon: _vm.group.icon || "CircleIcon",
                      svgClasses: { "w-3 h-3": this.groupIndex % 1 != 0 }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.sidebarItemsMin,
                      expression: "!sidebarItemsMin"
                    }
                  ],
                  staticClass: "truncate mr-3 select-none"
                },
                [_vm._v(_vm._s(_vm.group.name))]
              ),
              _vm._v(" "),
              _vm.group.tag && !_vm.sidebarItemsMin
                ? _c(
                    "vs-chip",
                    {
                      staticClass: "ml-auto mr-4",
                      attrs: { color: _vm.group.tagColor }
                    },
                    [_vm._v(_vm._s(_vm.group.tag))]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("feather-icon", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.sidebarItemsMin,
                expression: "!sidebarItemsMin"
              }
            ],
            class: [{ rotate90: _vm.openItems }, "feather-grp-header-arrow"],
            attrs: { icon: "ChevronRightIcon", "svg-classes": "w-4 h-4" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "vs-sidebar--tooltip" }, [
            _vm._v(_vm._s(_vm.group.name))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          ref: "items",
          staticClass: "vs-sidebar-group-items",
          style: _vm.styleItems
        },
        _vm._l(_vm.group.submenu, function(groupItem, index) {
          return _c(
            "li",
            { key: index },
            [
              groupItem.submenu
                ? _c("vx-sidebar-group", {
                    attrs: {
                      group: groupItem,
                      groupIndex: Number(_vm.groupIndex + "." + index),
                      open: _vm.isGroupActive(groupItem),
                      openHover: _vm.openHover
                    }
                  })
                : _c(
                    "vx-sidebar-item",
                    {
                      attrs: {
                        index: _vm.groupIndex + "." + index,
                        to: groupItem.url,
                        icon: _vm.itemIcon(_vm.groupIndex + "." + index),
                        "icon-small": "",
                        target: groupItem.target
                      }
                    },
                    [
                      _c("span", { staticClass: "truncate" }, [
                        _vm._v(_vm._s(groupItem.name))
                      ]),
                      _vm._v(" "),
                      groupItem.tag
                        ? _c(
                            "vs-chip",
                            {
                              staticClass: "ml-auto",
                              attrs: { color: groupItem.tagColor }
                            },
                            [_vm._v(_vm._s(groupItem.tag))]
                          )
                        : _vm._e()
                    ],
                    1
                  )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vs-sidebar--item",
      class: [
        { "vs-sidebar-item-active": _vm.activeLink },
        { "disabled-item pointer-events-none": _vm.isDisabled }
      ]
    },
    [
      _vm.to
        ? _c(
            "router-link",
            {
              class: [{ "router-link-active": _vm.activeLink }],
              attrs: { to: _vm.to, target: _vm.target, exact: "" }
            },
            [
              !_vm.featherIcon
                ? _c("vs-icon", {
                    attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                  })
                : _c("feather-icon", {
                    class: { "w-3 h-3": _vm.iconSmall },
                    attrs: { icon: _vm.icon }
                  }),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
        : _c(
            "a",
            { attrs: { target: _vm.target, href: _vm.href } },
            [
              !_vm.featherIcon
                ? _c("vs-icon", {
                    attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                  })
                : _c("feather-icon", {
                    class: { "w-3 h-3": _vm.iconSmall },
                    attrs: { icon: _vm.icon }
                  }),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
/* harmony import */ var _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=287afc22& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=287afc22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=template&id=71a5bfd2& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&");
/* harmony import */ var _TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=template&id=71a5bfd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=template&id=1f949f14& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&");
/* harmony import */ var _VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=template&id=1f949f14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=template&id=72f1234e& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&");
/* harmony import */ var _VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=template&id=72f1234e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarItem.vue?vue&type=template&id=16eca1ae& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&");
/* harmony import */ var _VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarItem.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarItem.vue?vue&type=template&id=16eca1ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);