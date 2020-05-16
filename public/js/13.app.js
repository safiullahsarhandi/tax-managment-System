(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActivityLog.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ActivityLog.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
=======
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
>>>>>>> e449aba40b71df0cd7663f318a2d07e25e319614

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
<<<<<<< HEAD
=======
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
>>>>>>> e449aba40b71df0cd7663f318a2d07e25e319614

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('taxes', ['logs'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    getLogs: 'taxes/getLogs'
  })),
  data: function data() {
    return {
<<<<<<< HEAD
      tax_id: ''
    };
  },
  created: function created() {
    this.tax_id = localStorage.getItem('currentDetail').split('/')[2];
    var data = {
      // type : 'sale',
      tax_id: this.tax_id
    };
    this.getLogs(data);
=======
      searchedRecord: [],
      msg: true,
      activeUserRole: '',
      objectLength: 0,
      currentPage: 1,
      perPage: 20
    };
  },
  created: function created() {
    var self;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function created$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // await this.get_search_data({query: val,page : 0})
            this.activeUserRole = this.$store.state.AppActiveUser.type;
            self = this;

            if (this.searchedData.length == 0) {
              this.changePage();
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  computed: {
    searchedData: function searchedData() {
      this.getData();
      this.searchedDatalength = this.$store.state.searchedData;
      return this.$store.state.searchedData;
    },
    totalSearchPages: function totalSearchPages() {
      return this.$store.state.totalSearchPages;
    }
  },
  methods: {
    getData: function getData() {
      var searchedDatalength = this.$store.state.searchedData;
      this.objectLength = Object.keys(searchedDatalength).length;
    },
    changePage: function changePage() {
      var page,
          val,
          _page,
          _args2 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function changePage$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
              val = this.$route.query.q;

              if (!_.isUndefined(this.$route.query.page) && this.$route.query.page) {
                // alert(this.$route.query.page)
                _page = this.$route.query.page;
              }

              this.$route.query.page;
              this.$store.dispatch('get_search_data', {
                query: val,
                page: this.currentPage
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    records: function records() {
      var _this = this;

      var offset = Math.ceil((this.currentPage - 1) * this.perPage);

      var records = _.filter(this.searchedData, function (value, index) {
        return index >= offset && index < offset + _this.perPage;
      });

      return records;
    },
    makeUrl: function makeUrl(obj) {
      var activeUserRole = this.$store.state.AppActiveUser.type;

      if (obj.table_name == 'tax_customers') {
        // localStorage.setItem('customer', obj.customer_id);
        // localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
        return '/company-detail/' + obj.customer_id;
      } else if (obj.table_name == 'tax_management') {
        // localStorage.setItem('customer', obj.customer_id);
        // localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
        return '/tax-collection/' + obj.tax_id;
      } else if (obj.table_name == 'tax_managers') {
        if (activeUserRole == 'Supervisor') {
          return '/my-team';
        } else if (activeUserRole == 'Super Admin') {
          return '/member-detail/' + obj.manager_id;
        }
      } else if (obj.table_name == 'customers_employees') {
        // localStorage.setItem('customer', obj.tax_customer_id);
        // localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
        return '/employees-list';
      } else if (obj.table_name == 'sales') {
        // localStorage.setItem('customer', obj.customer_id);
        // localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
        return '/sale-detail/' + obj.sale_id;
      } else if (obj.table_name == 'purchases') {
        // localStorage.setItem('customer', obj.customer_id);
        // localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
        return '/purchase-detail/' + obj.purchase_id;
      } else if (obj.table_name == 'employees_payrolls') {
        // localStorage.setItem('customer', obj.customer_id);
        // localStorage.setItem('currentDetail', '/company-detail/'+obj.customer_id);
        return '/payroll-detail/' + obj.payroll_id;
      } else if (obj.table_name == 'currencies') {
        return '/currencies';
      } else if (obj.table_name == 'tax_parameters') {
        return '/tax-parameters';
      }
    },
    goFind: function goFind(path, status, id) {
      if (status == 1) {
        localStorage.setItem('customer', id);
        localStorage.setItem('currentDetail', '/company-detail/' + id);
      }

      this.$router.push(path);
    }
>>>>>>> e449aba40b71df0cd7663f318a2d07e25e319614
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "span.oldVal::before {\n  content: \"Old Value:\" !important;\n  display: block;\n  font-size: 12px;\n}\nspan.newVal::before {\n  content: \"New Value:\" !important;\n  display: block;\n  font-size: 12px;\n}\n", ""]);
=======
exports.push([module.i, ".card-dimension {\n  width: 100% !important;\n  min-height: 100px !important;\n}\r\n\r\n", ""]);
>>>>>>> e449aba40b71df0cd7663f318a2d07e25e319614

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActivityLog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActivityLog.vue?vue&type=template&id=04a25930&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/ActivityLog.vue?vue&type=template&id=04a25930& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    [
<<<<<<< HEAD
      _c(
        "vx-card",
        { attrs: { title: "Activity Log" } },
        [
          _c(
            "vs-table",
            {
              attrs: { data: _vm.logs },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, index) {
                      return _c(
                        "vs-tr",
                        { key: index, attrs: { data: tr } },
                        [
                          _c("vs-td", [_vm._v(_vm._s(tr.type))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.event))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.description))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(tr.created_at))]),
                          _vm._v(" "),
                          _c(
                            "template",
                            { staticClass: "expand-user", slot: "expand" },
                            [
                              _c(
                                "vs-row",
                                [
                                  _c(
                                    "vs-col",
                                    {
                                      attrs: {
                                        "vs-lg": "12",
                                        "vs-md": "12",
                                        "vs-sm": "12",
                                        "vs-xs": "12"
                                      }
                                    },
                                    [
                                      _c("h4", [
                                        _vm._v(
                                          _vm._s(
                                            tr.event == "create"
                                              ? "Created Data History"
                                              : "Updated Data History"
                                          )
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  [
                                    tr.event == "update"
                                      ? _c(
                                          "vs-row",
                                          { staticClass: "mt-base" },
                                          _vm._l(tr.changes, function(
                                            changes,
                                            index2
                                          ) {
                                            return _c(
                                              "vs-col",
                                              {
                                                key: index2,
                                                attrs: {
                                                  "vs-lg": "4",
                                                  "vs-md": "4",
                                                  "vs-sm": "12",
                                                  "vs-xs": "12"
                                                }
                                              },
                                              [
                                                _c("div", [
                                                  _c("h5", [
                                                    _vm._v(
                                                      _vm._s(
                                                        index2
                                                          .split("_")
                                                          .join(" ")
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "bg-dark-gradient flex justify-around rounded-lg text-white"
                                                    },
                                                    [
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "oldVal"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              changes.old_value
                                                            )
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(
                                                        "-> \n                                \t\t\t"
                                                      ),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticClass: "newVal"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              changes.new_value
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ])
                                              ]
                                            )
                                          }),
                                          1
                                        )
                                      : _c(
                                          "vs-row",
                                          { staticClass: "mt-base" },
                                          _vm._l(tr.changes, function(
                                            changes,
                                            index2
                                          ) {
                                            return _c(
                                              "vs-col",
                                              {
                                                key: index2,
                                                attrs: {
                                                  "vs-lg": "4",
                                                  "vs-md": "4",
                                                  "vs-sm": "12",
                                                  "vs-xs": "12"
                                                }
                                              },
                                              [
                                                _c("div", [
                                                  _c("h5", [
                                                    _vm._v(
                                                      _vm._s(
                                                        index2
                                                          .split("_")
                                                          .join(" ")
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass: "rounded-lg"
                                                    },
                                                    [
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            changes || "NA"
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                ])
                                              ]
                                            )
                                          }),
                                          1
                                        )
                                  ]
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("Type")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Event")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Description")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("created / updated at")])
                ],
                1
              )
            ],
            2
          )
=======
      _vm._l(_vm.records(), function(item, indextr) {
        return _c(
          "div",
          [
            item.result.table_name == "tax_customers"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.name_english != null
                              ? "Name(english): " +
                                  item.result.name_english +
                                  " | "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.name_khmer != null
                              ? "Name(Khmer): " + item.result.name_khmer + " | "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.address != null
                              ? "Address: " + item.result.street
                              : ""
                          ) +
                          "\n                " +
                          _vm._s("(Company)") +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          item.result.owner != null
                            ? "Owner Name: " +
                                item.result.owner.name_english +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.owner != null
                            ? "Owner Email: " + item.result.owner.email + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.street != null
                            ? "Street: " + item.result.street + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.sangkat != null
                            ? "Sangkat: " + item.result.sangkat + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.district != null
                            ? "District: " + item.result.district + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.province != null
                            ? "Province: " + item.result.province + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.muncipality != null
                            ? "Muncipality: " + item.result.muncipality + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.industry != null
                            ? "Industry: " + item.result.industry + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.incorporation_date != null
                            ? "Incorporation Date: " +
                                item.result.incorporation_date +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.village != null
                            ? "Village: " + item.result.village + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.telephone != null
                            ? "Telephone: " + item.result.telephone + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.tax_duration != null
                            ? "Tax Duration: " + item.result.tax_duration
                            : ""
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            item.result.table_name == "tax_management"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.title != null
                              ? "Title: " + item.result.title + ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.description != null
                              ? "Description: " + item.result.description
                              : ""
                          ) +
                          "\n                " +
                          _vm._s("(Tax)") +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          item.result.title != null
                            ? "Title: " + item.result.title + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.description != null
                            ? "Description: " + item.result.description + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.duration != null
                            ? "Duration: " + item.result.duration + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.type != null
                            ? "Tax Type: " + item.result.type
                            : ""
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            item.result.table_name == "tax_managers" &&
            _vm.activeUserRole != "Officer"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(_vm.makeUrl(item.result), 0, null)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.full_name != null
                              ? "Tax Manager Name: " +
                                  item.result.full_name +
                                  ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.email != null
                              ? "Email: " + item.result.email
                              : ""
                          ) +
                          "\n                " +
                          _vm._s("(Team Member)") +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          item.result.full_name != null
                            ? "Full Name: " + item.result.full_name + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.email != null
                            ? "Email: " + item.result.email + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.gender != null
                            ? "Gender: " + item.result.gender + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.phone != null
                            ? "Phone: " + item.result.phone + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.address != null
                            ? "Address: " + item.result.address + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.state != null
                            ? "State: " + item.result.state + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.city != null
                            ? "City: " + item.result.city + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.zip_code != null
                            ? "Zip Code: " + item.result.zip_code
                            : ""
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(_vm.makeUrl(item.result), 0, null)
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            item.result.table_name == "customers_employees"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.tax_customer_id
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.name_english != null
                              ? "Name: " + item.result.name_english + ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.name_khmer != null
                              ? "Name(Khmer): " + item.result.name_khmer + ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.nationality != null
                              ? "Nationality: " + item.result.nationality
                              : ""
                          ) +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          item.result.name_english != null
                            ? "Name: " + item.result.name_english + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.employee_num != null
                            ? "Employee Number: " +
                                item.result.employee_num +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.nssf_num != null
                            ? "NSSF Number: " + item.result.nssf_num + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.dob != null
                            ? "Date of birth: " + item.result.dob + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.position != null
                            ? "Position: " + item.result.position + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.joining_date != null
                            ? "Joining Date: " + item.result.joining_date + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.sex != null
                            ? "Sex: " + item.result.sex + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.contract_type != null
                            ? "Contract Type: " +
                                item.result.contract_type +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.spouse != null
                            ? "Spouse: " + item.result.spouse
                            : ""
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.tax_customer_id
                          )
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            item.result.table_name == "sales"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.account_description != null
                              ? "Account Description: " +
                                  item.result.account_description +
                                  ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.accounting_reference != null
                              ? "Accounting Reference: " +
                                  item.result.accounting_reference +
                                  ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.account_code != null
                              ? "Account Code: " + item.result.account_code
                              : ""
                          ) +
                          "\n                " +
                          _vm._s("(Sales)") +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          item.result.account_description != null
                            ? "Account Description: " +
                                item.result.account_description +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.accounting_reference != null
                            ? "Accounting Reference: " +
                                item.result.accounting_reference +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.account_code != null
                            ? "Account Code: " + item.result.account_code + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.signature_date != null
                            ? "Signature Date: " +
                                item.result.signature_date +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.branch_name != null
                            ? "Branch Bame: " + item.result.branch_name + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.tax_period != null
                            ? "Tax Period: " + item.result.tax_period + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.invoice_date != null
                            ? "Invoice Date: " + item.result.invoice_date + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.invoice_num != null
                            ? "Invoice Number: " +
                                item.result.invoice_num +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.description != null
                            ? "Description: " + item.result.description + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.quantity != null
                            ? "Quantity: " + item.result.quantity + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.non_taxable_sales != null
                            ? "Non Taxable Sales: " +
                                item.result.non_taxable_sales +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.vat != null
                            ? "VAT: " + item.result.vat + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.taxable_person_sales != null
                            ? "Taxable Person Sales: " +
                                item.result.taxable_person_sales +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.taxable_person_vat != null
                            ? "Taxable Person VAT: " +
                                item.result.taxable_person_vat +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.cust_sales_vat != null
                            ? "Customer Sales VAT: " +
                                item.result.cust_sales_vat +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.total_taxable_value != null
                            ? "Total Taxable Value: " +
                                item.result.total_taxable_value +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.taxes_subject != null
                            ? "Taxes Subject: " +
                                item.result.taxes_subject +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.comments != null
                            ? "Comments: " + item.result.comments + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.client_response != null
                            ? "Client Response: " +
                                item.result.client_response +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.top_comments != null
                            ? "Top Comments: " + item.result.top_comments
                            : ""
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            item.result.table_name == "purchases"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.branch_name != null
                              ? "Branch Name: " + item.result.branch_name + ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.description != null
                              ? "Description: " + item.result.description + ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.invoice_num != null
                              ? "Invoice Number: " + item.result.invoice_num
                              : ""
                          ) +
                          "\n                " +
                          _vm._s("(Purchases)") +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          item.result.branch_name != null
                            ? "Branch Name: " + item.result.branch_name + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.tax_period != null
                            ? "Tax Period: " + item.result.tax_period + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.invoice_date != null
                            ? "Invoice Date: " + item.result.invoice_date + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.invoice_num != null
                            ? "Invoice Number: " +
                                item.result.invoice_num +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.description != null
                            ? "Description: " + item.result.description + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.quantity != null
                            ? "Quantity: " + item.result.quantity + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.comments != null
                            ? "Comments: " + item.result.comments + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.top_comments != null
                            ? "Top Comments: " + item.result.top_comments + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.client_responses != null
                            ? "Client Responses: " +
                                item.result.client_responses +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.local_purchase_tax_val != null
                            ? "Local Purchase Tax Value: " +
                                item.result.local_purchase_tax_val +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.local_purchase_vat != null
                            ? "Local Purchase VAT: " +
                                item.result.local_purchase_vat +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.imports_taxable_val != null
                            ? "Imports Taxable Value: " +
                                item.result.imports_taxable_val +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.imports_vat != null
                            ? "Imports VAT: " + item.result.imports_vat + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.total_vat != null
                            ? "Total VAT: " + item.result.total_vat + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.subject != null
                            ? "Subject: " + item.result.subject + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.non_taxable_purchases != null
                            ? "Non Taxable Purchases: " +
                                item.result.non_taxable_purchases +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.supplier != null
                            ? "Supplier: " + item.result.supplier + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.vat_tin != null
                            ? "VAT TIN: " + item.result.vat_tin
                            : ""
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            item.result.table_name == "employees_payrolls"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.basic_salary != null
                              ? "Basic Salary: " +
                                  item.result.basic_salary +
                                  ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.bonus != null
                              ? "Bonus: " + item.result.bonus + ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.over_time != null
                              ? "Over Time: " + item.result.over_time
                              : ""
                          ) +
                          "\n                " +
                          _vm._s("(Payrolls)") +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          item.result.basic_salary != null
                            ? "Basic Salary: " + item.result.basic_salary + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.bonus != null
                            ? "Bonus: " + item.result.bonus + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.over_time != null
                            ? "Over Time: " + item.result.over_time + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.commissions != null
                            ? "Commissions: " + item.result.commissions + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.seniority_payment != null
                            ? "Seniority Payment: " +
                                item.result.seniority_payment +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.severance_pay != null
                            ? "Severance Pay: " +
                                item.result.severance_pay +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.maternity_leave != null
                            ? "Maternity Leave: " +
                                item.result.maternity_leave +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.paid_annual_leave != null
                            ? "Paid Annual Leave: " +
                                item.result.paid_annual_leave +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.food_allowance != null
                            ? "Food Allowance: " +
                                item.result.food_allowance +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.transport_allowance != null
                            ? "Transport Allowance: " +
                                item.result.transport_allowance +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.others != null
                            ? "Others: " + item.result.others + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.deduction_advance != null
                            ? "Deduction Advance: " +
                                item.result.deduction_advance +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.salary_adjusment != null
                            ? "Salary Adjusment: " +
                                item.result.salary_adjusment +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.remark != null
                            ? "Remarks: " + item.result.remark
                            : ""
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(
                            _vm.makeUrl(item.result),
                            1,
                            item.result.customer_id
                          )
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            item.result.table_name == "currencies"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(_vm.makeUrl(item.result), 0, null)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.country != null
                              ? "Country: " + item.result.country + ", "
                              : ""
                          ) +
                          "\n                " +
                          _vm._s(
                            item.result.currency != null
                              ? "Currency: " + item.result.currency
                              : ""
                          ) +
                          "\n                " +
                          _vm._s("(Currency)") +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s("Country: " + item.result.country) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s("Currency: " + item.result.currency) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(_vm.makeUrl(item.result), 0, null)
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            item.result.table_name == "tax_parameters"
              ? _c("vx-card", { staticClass: "mt-3 card-dimension" }, [
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-weight": "bold",
                        "font-size": "12px",
                        "letter-spacing": "2px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(_vm.makeUrl(item.result), 0, null)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(
                            item.result.english_description != null
                              ? "Description: " +
                                  item.result.english_description
                              : ""
                          ) +
                          "\n                " +
                          _vm._s("(Tax Parameters)") +
                          "\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(
                          (item.result.english_description = null
                            ? undefined
                            : "")
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.khmer_description != null
                            ? "Khmer Description: " +
                                item.result.khmer_description +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.tax_code != null
                            ? "Tax Code: " + item.result.tax_code + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.rate != null
                            ? "Rate: " + item.result.rate + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.base_tax != null
                            ? "Base Tax: " + item.result.base_tax + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.tax_type != null
                            ? "Tax Type: " + item.result.tax_type + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.effective_date != null
                            ? "Effective Date: " +
                                item.result.effective_date +
                                ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.amount_min != null
                            ? "Minimum Amount: " + item.result.amount_min + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.amount_max != null
                            ? "Maximum Amount: " + item.result.amount_max + ", "
                            : ""
                        ) +
                        "\n                " +
                        _vm._s(
                          item.result.remarks != null
                            ? "Remarks: " + item.result.remarks
                            : ""
                        ) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticStyle: {
                        color: "#1a0dab",
                        "font-size": "11px",
                        "letter-spacing": "1px",
                        "margin-top": "15px"
                      },
                      attrs: { href: "javascript:void(0)" },
                      on: {
                        click: function($event) {
                          _vm.goFind(_vm.makeUrl(item.result), 0, null)
                        }
                      }
                    },
                    [
                      _c("vs-icon", {
                        attrs: {
                          "icon-pack": "feather",
                          icon: "icon-map",
                          color: "primary"
                        }
                      }),
                      _vm._v(
                        " tax-managemet" +
                          _vm._s(_vm.makeUrl(item.result)) +
                          "\n            "
                      )
                    ],
                    1
                  )
                ])
              : _vm._e()
          ],
          1
        )
      }),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.objectLength > 0
        ? _c("vs-pagination", {
            attrs: { total: _vm.totalSearchPages },
            on: {
              input: function($event) {
                return _vm.records()
              }
            },
            model: {
              value: _vm.currentPage,
              callback: function($$v) {
                _vm.currentPage = $$v
              },
              expression: "currentPage"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "vs-row",
        [
          _c("vs-col", [
            _vm.objectLength <= 0
              ? _c(
                  "h1",
                  {
                    staticStyle: {
                      "margin-top": "10%",
                      "text-align": "center",
                      color: "#909090"
                    }
                  },
                  [_vm._v(" No record found! ")]
                )
              : _vm._e()
          ])
>>>>>>> e449aba40b71df0cd7663f318a2d07e25e319614
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/ActivityLog.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/pages/ActivityLog.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActivityLog_vue_vue_type_template_id_04a25930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActivityLog.vue?vue&type=template&id=04a25930& */ "./resources/js/src/views/pages/ActivityLog.vue?vue&type=template&id=04a25930&");
/* harmony import */ var _ActivityLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityLog.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/ActivityLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ActivityLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActivityLog.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ActivityLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActivityLog_vue_vue_type_template_id_04a25930___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActivityLog_vue_vue_type_template_id_04a25930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/ActivityLog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/ActivityLog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/ActivityLog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActivityLog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActivityLog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActivityLog.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActivityLog.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/ActivityLog.vue?vue&type=template&id=04a25930&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/ActivityLog.vue?vue&type=template&id=04a25930& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_template_id_04a25930___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ActivityLog.vue?vue&type=template&id=04a25930& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/ActivityLog.vue?vue&type=template&id=04a25930&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_template_id_04a25930___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ActivityLog_vue_vue_type_template_id_04a25930___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);