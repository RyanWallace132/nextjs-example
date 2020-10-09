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
      }, this.props.bpi.USD.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, this.props.bpi.USD.rate));
    } else if (this.state.currency === 'EUR') {
      list = __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }
      }, "Bitcoin Rate For ", this.props.bpi.USD.description, ": ", __jsx("span", {
        className: "badge badge-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, this.props.bpi.USD.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }
      }, this.props.bpi.USD.rate));
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
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjdXJyZW5jeSIsInJlbmRlciIsImxpc3QiLCJzdGF0ZSIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBQUE7QUFBQTs7QUFBQSw2R0FDekI7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEeUI7QUFBQTs7QUFLakNDLFFBQU0sR0FBRTtBQUNKLFVBQU1DLElBQUksR0FBRyxFQUFiOztBQUVBLFFBQUcsS0FBS0MsS0FBTCxDQUFXSCxRQUFYLEtBQXdCLEtBQTNCLEVBQWlDO0FBQzdCRSxVQUFJLEdBQUk7QUFBSSxpQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ1UsS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJDLFdBRDdCLFFBRU47QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJFLElBRHRCLENBRk0sT0FJWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHLElBQTVCLENBSlksQ0FBUjtBQU1ILEtBUEQsTUFPTyxJQUFHLEtBQUtOLEtBQUwsQ0FBV0gsUUFBWCxLQUF3QixLQUEzQixFQUFrQztBQUNyQ0UsVUFBSSxHQUFJO0FBQUksaUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNVLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CQyxXQUQ3QixRQUVOO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRSxJQUR0QixDQUZNLE9BSVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRyxJQUE1QixDQUpZLENBQVI7QUFNSCxLQVBNLE1BT0EsSUFBRyxLQUFLTixLQUFMLENBQVdILFFBQVgsS0FBd0IsS0FBM0IsRUFBaUM7QUFDcENFLFVBQUksR0FBSTtBQUFJLGlCQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFDVSxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEN0IsUUFFTjtBQUFNLGlCQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkUsSUFEdEIsQ0FGTSxPQUlaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkcsSUFBNUIsQ0FKWSxDQUFSO0FBTUg7O0FBQ0QsV0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FEQTtBQU9IOztBQXJDZ0M7O0FBd0N0QloscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmViODZlNjlmNmU3ZDQ1Y2M4MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCBsaXN0ID0gJyc7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKXtcclxuICAgICAgICAgICAgbGlzdCA9ICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgIEJpdGNvaW4gUmF0ZSBGb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9XHJcbjwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpIHtcclxuICAgICAgICAgICAgbGlzdCA9ICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgIEJpdGNvaW4gUmF0ZSBGb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgOiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9XHJcbjwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0VVUicpe1xyXG4gICAgICAgICAgICBsaXN0ID0gIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX1cclxuPC9zcGFuPiA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==