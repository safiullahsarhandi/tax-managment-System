(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SearchedRecords.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SearchedRecords.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      searchedRecord: [],
      msg: true,
      activeUserRole: '',
      objectLength: 0
    };
  },
  created: function created() {
    this.activeUserRole = this.$store.state.AppActiveUser.type;
  },
  methods: {
    getData: function getData() {
      var searchedDatalength = this.$store.state.searchedData;
      this.objectLength = Object.keys(searchedDatalength).length;
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
  },
  computed: {
    searchedData: function searchedData() {
      this.getData();
      this.searchedDatalength = this.$store.state.searchedData;
      return this.$store.state.searchedData;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-dimension{\n  width: 100% !important;\n  min-height: 100px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchedRecords.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SearchedRecords.vue?vue&type=template&id=10392441&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SearchedRecords.vue?vue&type=template&id=10392441& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _vm._l(_vm.searchedData, function(item, indextr) {
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
                        "\n\n\t\t\t\t" +
                          _vm._s(
                            item.result.name_english != null
                              ? "Name(english): " +
                                  item.result.name_english +
                                  " | "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.name_khmer != null
                              ? "Name(Khmer): " + item.result.name_khmer + " | "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.address != null
                              ? "Address: " + item.result.street
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s("(Company)") +
                          "\n\n\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(
                          item.result.owner != null
                            ? "Owner Name: " +
                                item.result.owner.name_english +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.owner != null
                            ? "Owner Email: " + item.result.owner.email + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.street != null
                            ? "Street: " + item.result.street + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.sangkat != null
                            ? "Sangkat: " + item.result.sangkat + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.district != null
                            ? "District: " + item.result.district + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.province != null
                            ? "Province: " + item.result.province + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.muncipality != null
                            ? "Muncipality: " + item.result.muncipality + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.industry != null
                            ? "Industry: " + item.result.industry + ", "
                            : ""
                        ) +
                        "\t\t\t\t\t\n\t\t\t\t" +
                        _vm._s(
                          item.result.incorporation_date != null
                            ? "Incorporation Date: " +
                                item.result.incorporation_date +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.village != null
                            ? "Village: " + item.result.village + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.telephone != null
                            ? "Telephone: " + item.result.telephone + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.tax_duration != null
                            ? "Tax Duration: " + item.result.tax_duration
                            : ""
                        ) +
                        "\n\n\t\t\t"
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
                          "\n\t\t\t"
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
                        "\n\n\t\t\t\t" +
                          _vm._s(
                            item.result.title != null
                              ? "Title: " + item.result.title + ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.description != null
                              ? "Description: " + item.result.description
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s("(Tax)") +
                          "\n\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(
                          item.result.title != null
                            ? "Title: " + item.result.title + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.description != null
                            ? "Description: " + item.result.description + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.duration != null
                            ? "Duration: " + item.result.duration + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.type != null
                            ? "Tax Type: " + item.result.type
                            : ""
                        ) +
                        "\n\t\t\t"
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
                          "\n\t\t\t"
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
                        "\n\t\t\t\t\n\t\t\t\t" +
                          _vm._s(
                            item.result.full_name != null
                              ? "Tax Manager Name: " +
                                  item.result.full_name +
                                  ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.email != null
                              ? "Email: " + item.result.email
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s("(Team Member)") +
                          "\n\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(
                          item.result.full_name != null
                            ? "Full Name: " + item.result.full_name + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.email != null
                            ? "Email: " + item.result.email + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.gender != null
                            ? "Gender: " + item.result.gender + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.phone != null
                            ? "Phone: " + item.result.phone + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.address != null
                            ? "Address: " + item.result.address + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.state != null
                            ? "State: " + item.result.state + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.city != null
                            ? "City: " + item.result.city + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.zip_code != null
                            ? "Zip Code: " + item.result.zip_code
                            : ""
                        ) +
                        "\n\t\t\t"
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
                          "\n\t\t\t"
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
                        "\n\n\t\t\t\t" +
                          _vm._s(
                            item.result.name_english != null
                              ? "Name: " + item.result.name_english + ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.name_khmer != null
                              ? "Name(Khmer): " + item.result.name_khmer + ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.nationality != null
                              ? "Nationality: " + item.result.nationality
                              : ""
                          ) +
                          "\n\n\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(
                          item.result.name_english != null
                            ? "Name: " + item.result.name_english + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.employee_num != null
                            ? "Employee Number: " +
                                item.result.employee_num +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.nssf_num != null
                            ? "NSSF Number: " + item.result.nssf_num + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.dob != null
                            ? "Date of birth: " + item.result.dob + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.position != null
                            ? "Position: " + item.result.position + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.joining_date != null
                            ? "Joining Date: " + item.result.joining_date + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.sex != null
                            ? "Sex: " + item.result.sex + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.contract_type != null
                            ? "Contract Type: " +
                                item.result.contract_type +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.spouse != null
                            ? "Spouse: " + item.result.spouse
                            : ""
                        ) +
                        "\n\t\t\t"
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
                          "\n\t\t\t"
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
                        "\n\n\t\t\t\t" +
                          _vm._s(
                            item.result.account_description != null
                              ? "Account Description: " +
                                  item.result.account_description +
                                  ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.accounting_reference != null
                              ? "Accounting Reference: " +
                                  item.result.accounting_reference +
                                  ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.account_code != null
                              ? "Account Code: " + item.result.account_code
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s("(Sales)") +
                          "\n\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(
                          item.result.account_description != null
                            ? "Account Description: " +
                                item.result.account_description +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.accounting_reference != null
                            ? "Accounting Reference: " +
                                item.result.accounting_reference +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.account_code != null
                            ? "Account Code: " + item.result.account_code + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.signature_date != null
                            ? "Signature Date: " +
                                item.result.signature_date +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.branch_name != null
                            ? "Branch Bame: " + item.result.branch_name + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.tax_period != null
                            ? "Tax Period: " + item.result.tax_period + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.invoice_date != null
                            ? "Invoice Date: " + item.result.invoice_date + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.invoice_num != null
                            ? "Invoice Number: " +
                                item.result.invoice_num +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.description != null
                            ? "Description: " + item.result.description + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.quantity != null
                            ? "Quantity: " + item.result.quantity + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.non_taxable_sales != null
                            ? "Non Taxable Sales: " +
                                item.result.non_taxable_sales +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.vat != null
                            ? "VAT: " + item.result.vat + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.taxable_person_sales != null
                            ? "Taxable Person Sales: " +
                                item.result.taxable_person_sales +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.taxable_person_vat != null
                            ? "Taxable Person VAT: " +
                                item.result.taxable_person_vat +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.cust_sales_vat != null
                            ? "Customer Sales VAT: " +
                                item.result.cust_sales_vat +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.total_taxable_value != null
                            ? "Total Taxable Value: " +
                                item.result.total_taxable_value +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.taxes_subject != null
                            ? "Taxes Subject: " +
                                item.result.taxes_subject +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.comments != null
                            ? "Comments: " + item.result.comments + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.client_response != null
                            ? "Client Response: " +
                                item.result.client_response +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.top_comments != null
                            ? "Top Comments: " + item.result.top_comments
                            : ""
                        ) +
                        "\n\n\t\t\t"
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
                          "\n\t\t\t"
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
                        "\n\t\t\t\t" +
                          _vm._s(
                            item.result.branch_name != null
                              ? "Branch Name: " + item.result.branch_name + ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.description != null
                              ? "Description: " + item.result.description + ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.invoice_num != null
                              ? "Invoice Number: " + item.result.invoice_num
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s("(Purchases)") +
                          "\n\n\t\t\t "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(
                          item.result.branch_name != null
                            ? "Branch Name: " + item.result.branch_name + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.tax_period != null
                            ? "Tax Period: " + item.result.tax_period + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.invoice_date != null
                            ? "Invoice Date: " + item.result.invoice_date + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.invoice_num != null
                            ? "Invoice Number: " +
                                item.result.invoice_num +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.description != null
                            ? "Description: " + item.result.description + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.quantity != null
                            ? "Quantity: " + item.result.quantity + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.comments != null
                            ? "Comments: " + item.result.comments + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.top_comments != null
                            ? "Top Comments: " + item.result.top_comments + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.client_responses != null
                            ? "Client Responses: " +
                                item.result.client_responses +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.local_purchase_tax_val != null
                            ? "Local Purchase Tax Value: " +
                                item.result.local_purchase_tax_val +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.local_purchase_vat != null
                            ? "Local Purchase VAT: " +
                                item.result.local_purchase_vat +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.imports_taxable_val != null
                            ? "Imports Taxable Value: " +
                                item.result.imports_taxable_val +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.imports_vat != null
                            ? "Imports VAT: " + item.result.imports_vat + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.total_vat != null
                            ? "Total VAT: " + item.result.total_vat + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.subject != null
                            ? "Subject: " + item.result.subject + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.non_taxable_purchases != null
                            ? "Non Taxable Purchases: " +
                                item.result.non_taxable_purchases +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.supplier != null
                            ? "Supplier: " + item.result.supplier + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.vat_tin != null
                            ? "VAT TIN: " + item.result.vat_tin
                            : ""
                        ) +
                        "\n\t\t\t"
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
                          "\n\t\t\t"
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
                        "\n\n\t\t\t\t" +
                          _vm._s(
                            item.result.basic_salary != null
                              ? "Basic Salary: " +
                                  item.result.basic_salary +
                                  ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.bonus != null
                              ? "Bonus: " + item.result.bonus + ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.over_time != null
                              ? "Over Time: " + item.result.over_time
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s("(Payrolls)") +
                          "\n\n\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\n\t\t\t\t" +
                        _vm._s(
                          item.result.basic_salary != null
                            ? "Basic Salary: " + item.result.basic_salary + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.bonus != null
                            ? "Bonus: " + item.result.bonus + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.over_time != null
                            ? "Over Time: " + item.result.over_time + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.commissions != null
                            ? "Commissions: " + item.result.commissions + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.seniority_payment != null
                            ? "Seniority Payment: " +
                                item.result.seniority_payment +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.severance_pay != null
                            ? "Severance Pay: " +
                                item.result.severance_pay +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.maternity_leave != null
                            ? "Maternity Leave: " +
                                item.result.maternity_leave +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.paid_annual_leave != null
                            ? "Paid Annual Leave: " +
                                item.result.paid_annual_leave +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.food_allowance != null
                            ? "Food Allowance: " +
                                item.result.food_allowance +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.transport_allowance != null
                            ? "Transport Allowance: " +
                                item.result.transport_allowance +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.others != null
                            ? "Others: " + item.result.others + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.deduction_advance != null
                            ? "Deduction Advance: " +
                                item.result.deduction_advance +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.salary_adjusment != null
                            ? "Salary Adjusment: " +
                                item.result.salary_adjusment +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.remark != null
                            ? "Remarks: " + item.result.remark
                            : ""
                        ) +
                        "\n\n\t\t\t"
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
                          "\n\t\t\t"
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
                        "\n\t\t\t\t" +
                          _vm._s(
                            item.result.country != null
                              ? "Country: " + item.result.country + ", "
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s(
                            item.result.currency != null
                              ? "Currency: " + item.result.currency
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s("(Currency)") +
                          "\n\n\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s("Country:  " + item.result.country) +
                        "\n\t\t\t"
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s("Currency: " + item.result.currency) +
                        "\n\t\t\t"
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
                          "\n\t\t\t"
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
                        "\n\t\t\t\t" +
                          _vm._s(
                            item.result.english_description != null
                              ? "Description: " +
                                  item.result.english_description
                              : ""
                          ) +
                          "\n\t\t\t\t" +
                          _vm._s("(Tax Parameters)") +
                          "\n\n\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticStyle: { "font-size": "12px" } }, [
                    _vm._v(
                      "\n\n\t\t\t\t" +
                        _vm._s(
                          (item.result.english_description = null
                            ? undefined
                            : "")
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.khmer_description != null
                            ? "Khmer Description: " +
                                item.result.khmer_description +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.tax_code != null
                            ? "Tax Code: " + item.result.tax_code + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.rate != null
                            ? "Rate: " + item.result.rate + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.base_tax != null
                            ? "Base Tax: " + item.result.base_tax + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.tax_type != null
                            ? "Tax Type: " + item.result.tax_type + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.effective_date != null
                            ? "Effective Date: " +
                                item.result.effective_date +
                                ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.amount_min != null
                            ? "Minimum Amount: " + item.result.amount_min + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.amount_max != null
                            ? "Maximum Amount: " + item.result.amount_max + ", "
                            : ""
                        ) +
                        "\n\t\t\t\t" +
                        _vm._s(
                          item.result.remarks != null
                            ? "Remarks: " + item.result.remarks
                            : ""
                        ) +
                        "\n\n\t\t\t"
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
                          "\n\t\t\t"
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
            [_vm._v("  No record found! ")]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/SearchedRecords.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/SearchedRecords.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchedRecords_vue_vue_type_template_id_10392441___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchedRecords.vue?vue&type=template&id=10392441& */ "./resources/js/src/views/SearchedRecords.vue?vue&type=template&id=10392441&");
/* harmony import */ var _SearchedRecords_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchedRecords.vue?vue&type=script&lang=js& */ "./resources/js/src/views/SearchedRecords.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchedRecords_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchedRecords.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchedRecords_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchedRecords_vue_vue_type_template_id_10392441___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchedRecords_vue_vue_type_template_id_10392441___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/SearchedRecords.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/SearchedRecords.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/SearchedRecords.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchedRecords.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SearchedRecords.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchedRecords.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SearchedRecords.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/SearchedRecords.vue?vue&type=template&id=10392441&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/SearchedRecords.vue?vue&type=template&id=10392441& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_template_id_10392441___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchedRecords.vue?vue&type=template&id=10392441& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SearchedRecords.vue?vue&type=template&id=10392441&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_template_id_10392441___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchedRecords_vue_vue_type_template_id_10392441___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);