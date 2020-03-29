<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/src/components/analyticsData.js":
/*!******************************************************!*\
  !*** ./resources/js/src/components/analyticsData.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
    File Name: analyticsData.vue
    Description: Data shown by charts
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  // LINE CHART
  siteTraffic: {
    series: [{
      name: 'Traffic Rate',
      data: [150, 200, 125, 225, 200, 250]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#7367F0'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#A9A2F6'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  activeUsers: {
    series: [{
      name: 'Active Users',
      data: [750, 1000, 900, 1250, 1000, 1200, 1100]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#28C76F'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#55DD92'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 75, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  newsletter: {
    series: [{
      name: 'Newsletter',
      data: [365, 390, 365, 400, 375, 400]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#FF9F43'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#ffc085'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 75, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  revenueComparisonLine: {
    series: [{
      name: "This Month",
      data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
    }, {
      name: "Last Month",
      data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 8],
        width: [4, 2]
      },
      grid: {
        borderColor: '#e7e7e7'
      },
      legend: {
        show: false
      },
      colors: ['#F97794', '#b8c2cc'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: ['#7367F0', '#b8c2cc'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          },
          formatter: function formatter(val) {
            return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // LINE AREA CHART
  subscribersGained: {
    series: [{
      name: 'Subscribers',
      data: [28, 40, 36, 52, 38, 60, 55]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        tooltip: {
          enabled: false
        },
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        enabled: false,
        x: {
          show: false
        }
      }
    }
  },
  quarterlySales: {
    series: [{
      name: 'Sales',
      data: [10, 15, 7, 12, 3, 16]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        enabled: false,
        x: {
          show: false
        }
      }
    }
  },
  revenueGenerated: {
    series: [{
      name: 'Revenue',
      data: [350, 275, 400, 300, 350, 300, 450]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        enabled: false,
        x: {
          show: false
        }
      }
    }
  },
  ordersRecevied: {
    series: [{
      name: 'Orders',
      data: [10, 15, 8, 15, 7, 12, 8]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // BAR CHART
  salesBar: {
    series: [{
      name: 'Sessions',
      data: [75, 125, 225, 175, 125, 75, 25]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'bar',
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
        }
      },
      states: {
        hover: {
          filter: 'none'
        }
      },
      colors: ['#e6edf7', '#e6edf7', '#7367f0', '#e6edf7', '#e6edf7', '#e6edf7'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          endingShape: 'rounded' // Deprecated
          // borderRadius: '20px', // Coming Soon

        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // RADIAL BAR
  goalOverviewRadialBar: {
    series: [83],
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 110,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%'
          },
          track: {
            background: "#bfc5cc",
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 18,
              color: '#99a2ac',
              fontSize: '4rem'
            }
          }
        }
      },
      colors: ['#00db89'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#00b5b5'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      chart: {
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      }
    }
  },
  supportTrackerRadialBar: {
    chartData: {
      totalTickets: 163,
      openTickets: 103,
      lastResponse: '1d'
    },
    series: [83],
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 15,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: "#fff",
            strokeWidth: '100%'
          },
          dataLabels: {
            value: {
              offsetY: 30,
              color: '#99a2ac',
              fontSize: '2rem'
            }
          }
        }
      },
      colors: ['#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          // enabled: true,
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#7367F0'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      chart: {
        sparkline: {}
      },
      labels: ['Completed Tickets']
    }
  },
  // RADAR
  statisticsRadar: {
    series: [{
      name: 'Visits',
      data: [90, 50, 86, 40, 100, 20]
    }, {
      name: 'Sales',
      data: [70, 75, 70, 76, 20, 85]
    }],
    chartOptions: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      dataLabels: {
        style: {
          colors: ['#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd']
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      },
      legend: {
        show: false
      },
      chart: {
        dropShadow: {
          enabled: true,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: ['#9f8ed7', '#1edec5'],
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: ['#e8e8e8', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
            connectorColors: 'transparent'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#8e9ad6', '#1fcadb'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0
      }
    }
  },
  // SessionsByDevice
  sessionsByDeviceDonut: {
    analyticsData: [{
      device: 'Dekstop',
      icon: 'MonitorIcon',
      color: 'primary',
      sessionsPercentgae: 58.6,
      comparedResultPercentage: 2
    }, {
      device: 'Mobile',
      icon: 'SmartphoneIcon',
      color: 'warning',
      sessionsPercentgae: 34.9,
      comparedResultPercentage: 8
    }, {
      device: 'Tablet',
      icon: 'TabletIcon',
      color: 'danger',
      sessionsPercentgae: 6.5,
      comparedResultPercentage: -5
    }],
    comparedResult: [2, -3, 8],
    series: [58.6, 34.9, 6.5],
    chartOptions: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      chart: {
        offsetY: 30,
        type: 'donut',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
        }
      }
    }
  },
  // Product Orders
  productOrdersRadialBar: {
    analyticsData: [{
      'orderType': 'Finished',
      'counts': 23043,
      color: 'primary'
    }, {
      'orderType': 'Pending',
      'counts': 14658,
      color: 'warning'
    }, {
      'orderType': 'Rejected ',
      'counts': 4758,
      color: 'danger'
    }],
    series: [70, 52, 26],
    chartOptions: {
      labels: ['Finished', 'Pending', 'Rejected'],
      plotOptions: {
        radialBar: {
          size: 165,
          offsetY: 30,
          hollow: {
            size: '20%'
          },
          track: {
            background: "#ebebeb",
            strokeWidth: '100%',
            margin: 15
          },
          dataLabels: {
            show: true,
            name: {
              fontSize: '18px'
            },
            value: {
              fontSize: '16px',
              color: "#636a71",
              offsetY: 11
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function formatter() {
                return 42459;
              }
            }
          }
        }
      },
      responsive: [{
        breakpoint: 576,
        options: {
          plotOptions: {
            radialBar: {
              size: 150,
              hollow: {
                size: '20%'
              },
              track: {
                background: "#ebebeb",
                strokeWidth: '100%',
                margin: 15
              }
            }
          }
        }
      }],
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          // enabled: true,
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      chart: {
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      }
    }
  },
  // Customers
  customersPie: {
    analyticsData: [{
      'customerType': 'New',
      'counts': 890,
      color: 'primary'
    }, {
      'customerType': 'Returning',
      'counts': 258,
      color: 'warning'
    }, {
      'customerType': 'Referrals ',
      'counts': 149,
      color: 'danger'
    }],
    series: [690, 258, 149],
    chartOptions: {
      labels: ['New', 'Returning', 'Referrals'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      chart: {
        type: 'pie',
        offsetY: 30,
        dropShadow: {
          enabled: false,
          blur: 5,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 5
      },
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
        }
      }
    }
  },
  // Sales monthly
  salesLine: {
    series: [{
      name: "Sales",
      data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 20,
          left: 2,
          blur: 6,
          opacity: 0.20
        }
      },
      stroke: {
        curve: 'smooth',
        width: 4
      },
      grid: {
        borderColor: '#ebebeb'
      },
      legend: {
        show: false
      },
      colors: ['#df87f2'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: ['#7367F0'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          },
          formatter: function formatter(val) {
            return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // ClientRetention Bar Chart
  clientRetentionBar: {
    series: [{
      name: 'New Clients',
      data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123]
    }, {
      name: 'Retained Clients',
      data: [-144, -155, -141, -167, -122, -143, -158, -107, -126, -131, -140, -137]
    }],
    chartOptions: {
      grid: {
        borderColor: '#ebebeb',
        padding: {
          left: 0,
          right: 0
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      colors: ['#7367F0', '#EA5455'],
      plotOptions: {
        bar: {
          columnWidth: '10%'
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // OTHER
  browserAnalytics: [{
    id: 1,
    name: 'Google Chrome',
    ratio: 73,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '800'
  }, {
    id: 3,
    name: 'Opera',
    ratio: 8,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '-200'
  }, {
    id: 2,
    name: 'Firefox',
    ratio: 19,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '100'
  }, {
    id: 4,
    name: 'Internet Explorer',
    ratio: 27,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '-450'
  }]
});

/***/ })

}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{136:function(t,s,e){"use strict";e.r(s);var a=e(9),n=e(10),i=e(1);function r(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?r(e,!0).forEach((function(s){c(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(e).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function c(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var l={components:{TheCustomizer:a.a,Slide:n.Slide},data:function(){return{tax_id:"",openComments:!1}},created:function(){this.tax_id=this.$store.state.rootUrl.split("/")[2],this.getCustomer(localStorage.getItem("customer")),this.getSale(this.$route.params.id),this.$store.dispatch("getAverageRate")},computed:o({},Object(i.d)("sales",["sale"]),{},Object(i.d)("customers",["customer"]),{userType:function(){return this.$store.getters.userType},averageRate:function(){return this.$store.state.averageRate},non_taxable_sales:function(){return this.sale.non_taxable_sales*this.averageRate},value_of_exports:function(){return this.sale.vat*this.averageRate},person_vat:function(){return parseFloat(.1*this.sale.taxable_person_sales).toFixed(2)},person_taxable:function(){return parseFloat(this.sale.taxable_person_sales*this.averageRate)},person_taxable_vat:function(){return parseFloat(.1*this.person_taxable).toFixed(2)},customer_vat:function(){return parseFloat(.1*this.sale.cust_sales).toFixed(2)},customer_taxable:function(){return parseFloat(this.sale.cust_sales*this.averageRate)},customer_taxable_vat:function(){return parseFloat(.1*this.customer_taxable).toFixed(2)}}),methods:o({handleToggleDrawer:function(){this.$refs.commentsView.active=!this.$refs.commentsView.active}},Object(i.b)({getSale:"sales/getSale",getCustomer:"customers/getCustomer",statusChange:"taxes/statusUpdateSPP",statusChangeManagment:"taxes/statusChangeManagment"}),{statusUpdate:function(t,s){var e=this,a={id:t,tax_id:this.tax_id,notify:this.$vs.notify,type:"sale"};this.statusChange(a).then((function(t){1!=t.data.status&&("undefined"==t.data.response?e.sale.officer_confirmed=s:e.sale.officer_confirmed=t.data.response)}))},changeManagementStatus:function(t,s,e){var a={id:s,status:t,by:e,tax_id:this.tax_id,notify:this.$vs.notify,tax_type:"sale"};this.statusChangeManagment(a).then((function(t){}))}})},v=(e(84),e(2)),m=Object(v.a)(l,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("vs-row",[e("vs-col",{attrs:{"vs-lg":"9","vs-md":"9","vs-sm":"12"}},[e("vx-card",{attrs:{title:"Sales Detail"}},[e("vs-row",[e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Client TIN:")]),t._v(" "),e("p",[t._v(t._s(t.customer.tin_no))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Client Name:")]),t._v(" "),e("p",[t._v(t._s(t.customer.name_english))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Account Code:")]),t._v(" "),e("p",[t._v(t._s(t.sale.account_code))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Account Description:")]),t._v(" "),e("p",[t._v(t._s(t.sale.account_description))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Accounting Reference:")]),t._v(" "),e("p",[t._v(t._s(t.sale.accounting_reference))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Signature Date:")]),t._v(" "),e("p",[t._v(t._s(t.sale.signature_date))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Branch Name:")]),t._v(" "),e("p",[t._v(t._s(t.sale.branch_name))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Tax Period:")]),t._v(" "),e("p",[t._v(t._s(t.sale.tax_period))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Invoice Date:")]),t._v(" "),e("p",[t._v(t._s(t.sale.invoice_date))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Invoice Number:")]),t._v(" "),e("p",[t._v(t._s(t.sale.invoice_num))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Description:")]),t._v(" "),e("p",[t._v(t._s(t.sale.description))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"4","vs-md":"4","vs-sm":"12"}},[e("h6",[t._v("Quantity:")]),t._v(" "),e("p",[t._v(t._s(t.sale.quantity))])])],1)],1),t._v(" "),e("vx-card",{staticClass:"mt-base",attrs:{title:"Sales Summary"}},[e("vs-row",[e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Non Taxable Sale:")]),t._v(" "),e("p",[t._v(t._s(t.customer.non_taxable_sales||"NA"))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Non taxable sale x Average rate:")]),t._v(" "),e("p",[t._v(t._s(t.non_taxable_sales))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Value Of Exports:")]),t._v(" "),e("p",[t._v(t._s(t.sale.vat||"NA"))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Value Of Exports:")]),t._v(" "),e("p",[t._v(t._s(t.value_of_exports))])]),t._v(" "),e("vs-divider",{attrs:{position:"left"}},[e("h5",[t._v("Sales to Taxable Persons")])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Taxable Value:")]),t._v(" "),e("p",[t._v(t._s(t.sale.taxable_person_sales))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("VAT:")]),t._v(" "),e("p",[t._v(t._s(t.person_vat))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Taxable Value x Average Rate:")]),t._v(" "),e("p",[t._v(t._s(t.person_taxable))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("VAT:")]),t._v(" "),e("p",[t._v(t._s(t.person_taxable_vat))])]),t._v(" "),e("vs-divider",{attrs:{position:"left"}},[e("h5",[t._v("Sales to Customers")])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}}),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Taxable Value:")]),t._v(" "),e("p",[t._v(t._s(t.sale.cust_sales))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("VAT:")]),t._v(" "),e("p",[t._v(t._s(t.customer_vat))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("Taxable Value x Average Rate:")]),t._v(" "),e("p",[t._v(t._s(t.customer_taxable))])]),t._v(" "),e("vs-col",{staticClass:"mt-5",attrs:{"vs-lg":"6","vs-md":"6","vs-sm":"12"}},[e("h6",[t._v("VAT:")]),t._v(" "),e("p",[t._v(t._s(t.customer_taxable_vat))])]),t._v(" "),e("vs-divider",{attrs:{position:"center"}},[e("h5",[t._v("Total Taxable Value:")])]),t._v(" "),e("vs-col",{staticClass:"mt-5 text-center",attrs:{"vs-lg":"12","vs-md":"12","vs-sm":"12"}},[e("p",[t._v(t._s(t.customer_taxable_vat))])])],1)],1)],1),t._v(" "),e("vs-col",{attrs:{"vs-lg":"3","vs-md":"3","vs-xl":"3","vs-sm":"12"}},[e("vx-card",{attrs:{title:"Actions"}},[e("vs-list",[e("vs-list-item",{attrs:{title:"Edit Sale"}},[e("vs-button",{attrs:{to:"/sale-update/"+t.$route.params.id,"icon-pack":"feather",size:"small",icon:"icon-edit"}})],1),t._v(" "),["Admin"==t.userType||"Super Admin"==t.userType?e("vs-list-item",{attrs:{title:"Status"}},[e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-check-circle"},on:{click:function(s){return t.changeManagementStatus("1",t.sale.id,"admin")}}}),t._v(" "),e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-x-circle"},on:{click:function(s){return t.changeManagementStatus("0",t.sale.id,"admin")}}})],1):t._e(),t._v(" "),"Supervisor"==t.userType?e("vs-list-item",{attrs:{title:"Status"}},[e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-check-circle"},on:{click:function(s){return t.changeManagementStatus("1",t.sale.id,"supervisor")}}}),t._v(" "),e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-x-circle"},on:{click:function(s){return t.changeManagementStatus("0",t.sale.id,"supervisor")}}})],1):t._e(),t._v(" "),"Officer"==t.userType?e("vs-list-item",{attrs:{title:"Status"}},[e("vs-switch",{attrs:{"icon-pack":"feather"},on:{click:function(s){return t.statusUpdate(t.sale.sale_id,t.sale.officer_confirmed)}},model:{value:t.sale.officer_confirmed,callback:function(s){t.$set(t.sale,"officer_confirmed",s)},expression:"sale.officer_confirmed"}})],1):t._e()],t._v(" "),e("vs-list-item",{attrs:{title:"View Comments"}},[e("vs-button",{attrs:{"icon-pack":"feather",size:"small",icon:"icon-maximize-2"},on:{click:t.handleToggleDrawer}})],1)],2)],1)],1)],1),t._v(" "),e("the-customizer",{ref:"commentsView",attrs:{object_id:t.$route.params.id,type:"Sale","comments-url":"get-comments"}})],1)}),[],!1,null,null,null);s.default=m.exports},16:function(t,s,e){var a=e(53);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,n);a.locals&&(t.exports=a.locals)},30:function(t,s,e){var a=e(85);"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(5)(a,n);a.locals&&(t.exports=a.locals)},52:function(t,s,e){"use strict";var a=e(16);e.n(a).a},53:function(t,s,e){(t.exports=e(4)(!1)).push([t.i,"#theme-customizer .vs-sidebar {\n  position: fixed;\n  z-index: 52000;\n  width: 400px;\n  max-width: 90vw;\n  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);\n}\n.customizer-btn {\n  position: fixed;\n  top: 50%;\n  right: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  z-index: 50000;\n}\n.customizer-btn .vs-icon {\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n.scroll-area--customizer {\n  height: calc(88% - 5rem);\n}",""])},84:function(t,s,e){"use strict";var a=e(30);e.n(a).a},85:function(t,s,e){(t.exports=e(4)(!1)).push([t.i,".bm-menu {\n  z-index: 99999;\n}\n.bm-burger-button {\n  position: fixed;\n  width: 36px;\n  height: 30px;\n  left: 36px;\n  top: 36px;\n  cursor: pointer;\n}\n.bm-burger-bars {\n  background-color: #373a47;\n}\n.line-style {\n  position: absolute;\n  height: 20%;\n  left: 0;\n  right: 0;\n}\n.cross-style {\n  position: absolute;\n  top: 12px;\n  right: 2px !important;\n  cursor: pointer;\n}\n.bm-cross {\n  background: #bdc3c7;\n}\n.bm-cross-button {\n  height: 24px;\n  width: 24px;\n}\n.bm-menu {\n  height: 100%;\n  /* 100% Full-height */\n  width: 0;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  top: 0;\n  left: 0;\n  background-color: #3f3f41;\n  /* Black*/\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 60px;\n  /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  /*0.5 second transition effect to slide in the sidenav*/\n}\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.3);\n}\n.bm-item-list {\n  color: #b8b7ad;\n  margin-left: 10%;\n  font-size: 20px;\n}\n.bm-item-list > * {\n  display: -webkit-box;\n  display: flex;\n  text-decoration: none;\n  padding: 0.7em;\n}\n.bm-item-list > * > span {\n  margin-left: 10px;\n  font-weight: 700;\n  color: white;\n}",""])},9:function(t,s,e){"use strict";var a=e(8),n={props:{object_id:{type:String,required:!0},type:{type:String,required:!0},commentsUrl:{type:String,required:!0}},watch:{active:function(t,s){if(0==t)clearInterval(this.invterVal);else{var e=this;this.invterVal=setInterval((function(){var t={path:e.commentsUrl,type:e.type,object_id:e.object_id};e.$store.dispatch("getComments",t)}),2e3)}this.scrollToEnd()}},data:function(){return{invterVal:"",active:!1,textMsg:"",settings:{maxScrollbarLength:60,wheelSpeed:.6},chatMsg:[{senderImg:"avatar-s-2.png",msg:"Cake sesame snaps cupcake gingerbread",isSent:!1},{senderImg:"avatar-s-5.png",msg:"Apple pie pie jujubes chupa chups muffin",isSent:!0},{senderImg:"avatar-s-2.png",msg:"Chocolate cake",isSent:!1},{senderImg:"avatar-s-5.png",msg:"Donut sweet pie oat cake dragée fruitcake",isSent:!0},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-2.png",msg:"Liquorice chocolate bar jelly beans icing",isSent:!1},{senderImg:"avatar-s-5.png",msg:"Pudding candy",isSent:!0},{senderImg:"avatar-s-5.png",msg:"Pudding candy",isSent:!0}]}},created:function(){var t={path:this.commentsUrl,type:this.type,object_id:this.object_id};this.$store.dispatch("getComments",t)},computed:{hideScrollToTopLocal:{get:function(){return this.hideScrollToTop},set:function(t){this.$emit("toggleHideScrollToTop",t)}},userType:function(){return this.$store.getters.userType},comments:function(){return this.$store.state.comments}},methods:{commentedBy:function(t){return localStorage.getItem("admin")==t},sendComment:function(t){var s={comment:this.textMsg,object_id:this.object_id,type:this.type,scrollToEnd:this.scrollToEnd,userType:this.userType,loginUser:localStorage.getItem("admin")};""!=this.textMsg.trim()&&(this.$store.dispatch("saveComment",s),this.textMsg="",this.scrollToEnd())},updatePrimaryColor:function(t){this.primaryColor=t,this.$vs.theme({primary:t})},scrollToEnd:function(){var t=this;setTimeout((function(){var s=t.$el.querySelector(".ps-container");s.scrollTop=s.scrollHeight,console.log(s.scrollHeight)}),0)}},components:{VuePerfectScrollbar:e.n(a).a}},i=(e(52),e(2)),r=Object(i.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"theme-customizer"}},[e("vs-sidebar",{staticClass:"items-no-padding",attrs:{"hidden-background":"","position-right":"","click-not-close":""},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},[e("div",{staticClass:"h-full"},[e("div",{staticClass:"customizer-header mt-6 flex items-center justify-between px-6"},[e("div",[e("h4",[t._v("COMMENTS")]),t._v(" "),e("small",[t._v("Comments & Task Reviews")])]),t._v(" "),e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(s){s.stopPropagation(),t.active=!1}}})],1),t._v(" "),e("vs-divider",{staticClass:"mb-0"}),t._v(" "),e("VuePerfectScrollbar",{staticClass:"scroll-area--customizer pt-4 pb-6",attrs:{settings:t.settings}},[e("div",{staticClass:"px-6"},[e("ul",{ref:"chatLog"},t._l(t.comments,(function(s,a){return e("li",{key:a},[e("div",{staticClass:"flex items-start",class:{"flex-row-reverse":t.commentedBy(s.member_id),"mt-4":a}},[e("vs-avatar",{staticClass:"m-0 flex-shrink-0",class:t.commentedBy(s.member_id)?"ml-3":"mr-3",attrs:{text:s.member_info.full_name,size:"40px"}}),t._v(" "),e("div",{staticClass:"msg relative bg-white shadow-md py-3 px-4 rounded-lg max-w-md",class:{"chat-sent-msg bg-primary-gradient text-white":t.commentedBy(s.member_id),"border border-solid d-theme-border-grey-light":!t.commentedBy(s.member_id)}},[e("span",[t._v(t._s(s.comment))])])],1),t._v(" "),e("div",{staticClass:"p-0 text-right"},[t._v(t._s(s.member_info.full_name))]),t._v(" "),e("div",{staticClass:"p-0 text-right"},[t._v(t._s(s.created_at))])])})),0)])]),t._v(" "),e("div",{staticClass:"customizer-footer mt-6 flex items-center justify-between px-6"},[e("vs-input",{staticClass:"w-full",attrs:{placeholder:"Type Here"},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendComment(s)}},model:{value:t.textMsg,callback:function(s){t.textMsg=s},expression:"textMsg"}})],1),t._v(" "),e("vs-divider",{staticClass:"mb-0"})],1)])],1)}),[],!1,null,null,null);s.a=r.exports}}]);
>>>>>>> 9279f5548c37aca60b0d3f76080a42724fcbe98b
