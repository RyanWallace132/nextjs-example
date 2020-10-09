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
      __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 14
        }
      }, "Bitcoin Rate For ", this.props.bpi.USD.description, ": ", __jsx("span", {
        class: "badge badge-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 68
        }
      }, this.props.bpi.USD.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 135
        }
      }, this.props.bpi.USD.rate));
    } else if (this.state.currency === 'GBP') {
      __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      }, "Bitcoin Rate For ", this.props.bpi.GBP.description, ": ", __jsx("span", {
        class: "badge badge-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 68
        }
      }, this.props.bpi.GBP.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 135
        }
      }, this.props.bpi.GBP.rate));
    } else if (this.state.currency === 'EUR') {
      __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 14
        }
      }, "Bitcoin Rate For ", this.props.bpi.EUR.description, ": ", __jsx("span", {
        class: "badge badge-primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 68
        }
      }, this.props.bpi.EUR.code), " ", __jsx("strong", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 135
        }
      }, this.props.bpi.EUR.rate));
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx("ul", {
      className: "list-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjdXJyZW5jeSIsInJlbmRlciIsImxpc3QiLCJzdGF0ZSIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFLLENBQUNDLFNBQTNCLENBQXFDO0FBQUE7QUFBQTs7QUFBQSw2R0FDekI7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEeUI7QUFBQTs7QUFLakNDLFFBQU0sR0FBRTtBQUNKLFVBQU1DLElBQUksR0FBRyxFQUFiOztBQUVBLFFBQUcsS0FBS0MsS0FBTCxDQUFXSCxRQUFYLEtBQXdCLEtBQTNCLEVBQWlDO0FBQzVCO0FBQUksaUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNxQixLQUFLSSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEeEMsUUFDc0Q7QUFBTSxhQUFLLEVBQUMscUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkUsSUFBdEQsQ0FEdEQsT0FDeUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRyxJQUE1QixDQUR6SDtBQUdKLEtBSkQsTUFJTyxJQUFHLEtBQUtOLEtBQUwsQ0FBV0gsUUFBWCxLQUF3QixLQUEzQixFQUFrQztBQUNwQztBQUFJLGlCQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFDcUIsS0FBS0ksS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJILFdBRHhDLFFBQ3NEO0FBQU0sYUFBSyxFQUFDLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJGLElBQXRELENBRHRELE9BQ3lIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUssR0FBZixDQUFtQkQsSUFBNUIsQ0FEekg7QUFHSixLQUpNLE1BSUEsSUFBRyxLQUFLTixLQUFMLENBQVdILFFBQVgsS0FBd0IsS0FBM0IsRUFBaUM7QUFDbkM7QUFBSSxpQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ3FCLEtBQUtJLEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSixXQUR4QyxRQUNzRDtBQUFNLGFBQUssRUFBQyxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1DLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSCxJQUF0RCxDQUR0RCxPQUN5SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVNLEdBQWYsQ0FBbUJGLElBQTVCLENBRHpIO0FBR0o7O0FBQ0QsV0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tQLElBREwsQ0FESixDQURBO0FBT0g7O0FBNUJnQzs7QUErQnRCTCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMmQ0MGQ1MmNiNWZiZTFlOTk0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGN1cnJlbmN5OiAnVVNEJ1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSAnJztcclxuXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ1VTRCcpe1xyXG4gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRlc2NyaXB0aW9ufTogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdHQlAnKSB7XHJcbiAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBCaXRjb2luIFJhdGUgRm9yIHt0aGlzLnByb3BzLmJwaS5HQlAuZGVzY3JpcHRpb259OiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuR0JQLmNvZGV9PC9zcGFuPiA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5HQlAucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0VVUicpe1xyXG4gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufTogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuRVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==