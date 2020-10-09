webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ryanc\\devmountain\\wr4\\nextjs-example\\components\\Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class Prices extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      currency: 'USD'
    });
  }

  render() {
    const list = '';

    if (this.state.currency === 'USD') {
      list = __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }
      }, "Bitcoin Rate For ", this.props.bpi.USD.description, ": ", __jsx("span", {
        className: "badge badge-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 15
        }
      }, this.props.bpi.USD.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, this.props.bpi.USD.rate));
    } else if (this.state.currency === 'GBP') {
      list = __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }
      }, "Bitcoin Rate For ", this.props.bpi.USD.description, ": ", __jsx("span", {
        className: "badge badge-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }
      }, this.props.bpi.GBP.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, this.props.bpi.GBP.rate));
    } else if (this.state.currency === 'EUR') {
      list = __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }
      }, "Bitcoin Rate For ", this.props.bpi.EUR.description, ": ", __jsx("span", {
        className: "badge badge-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, this.props.bpi.EUR.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, this.props.bpi.EUR.rate));
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx("ul", {
      className: "list-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, list));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Prices);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjdXJyZW5jeSIsInJlbmRlciIsImxpc3QiLCJzdGF0ZSIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBQUE7QUFBQTs7QUFBQSw2R0FDekI7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEeUI7QUFBQTs7QUFLakNDLFFBQU0sR0FBRTtBQUNKLFVBQU1DLElBQUksR0FBRyxFQUFiOztBQUVBLFFBQUcsS0FBS0MsS0FBTCxDQUFXSCxRQUFYLEtBQXdCLEtBQTNCLEVBQWlDO0FBQzdCRSxVQUFJLEdBQUk7QUFBSSxpQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ1UsS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJDLFdBRDdCLFFBRU47QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJFLElBRHRCLENBRk0sT0FJWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHLElBQTVCLENBSlksQ0FBUjtBQU1ILEtBUEQsTUFPTyxJQUFHLEtBQUtOLEtBQUwsQ0FBV0gsUUFBWCxLQUF3QixLQUEzQixFQUFrQztBQUNyQ0UsVUFBSSxHQUFJO0FBQUksaUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNVLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CQyxXQUQ3QixRQUVOO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlSyxHQUFmLENBQW1CRixJQUR0QixDQUZNLE9BSVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlSyxHQUFmLENBQW1CRCxJQUE1QixDQUpZLENBQVI7QUFNSCxLQVBNLE1BT0EsSUFBRyxLQUFLTixLQUFMLENBQVdILFFBQVgsS0FBd0IsS0FBM0IsRUFBaUM7QUFDcENFLFVBQUksR0FBSTtBQUFJLGlCQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFDVSxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkosV0FEN0IsUUFFTjtBQUFNLGlCQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkgsSUFEdEIsQ0FGTSxPQUlaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkYsSUFBNUIsQ0FKWSxDQUFSO0FBTUg7O0FBQ0QsV0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0lQLElBREosQ0FESixDQURBO0FBT0g7O0FBckNnQzs7QUF3Q3RCTCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iY2MyYzdlYWE5ZWY0ZDFiYmZlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGN1cnJlbmN5OiAnVVNEJ1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSAnJztcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ1VTRCcpe1xyXG4gICAgICAgICAgICBsaXN0ID0gIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX1cclxuPC9zcGFuPiA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnR0JQJykge1xyXG4gICAgICAgICAgICBsaXN0ID0gIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJwaS5HQlAuY29kZX1cclxuPC9zcGFuPiA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5HQlAucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICBCaXRjb2luIFJhdGUgRm9yIHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfVxyXG48L3NwYW4+IDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkVVUi5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAge2xpc3R9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXMiXSwic291cmNlUm9vdCI6IiJ9