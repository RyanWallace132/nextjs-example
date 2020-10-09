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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ryanc\\devmountain\\wr4\\nextjs-example\\components\\Prices.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

class Prices extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      currency: 'USD'
    });
  }

  render() {
    let list = '';

    if (this.state.currency === 'USD') {
      list = __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 20
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
      list = __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 20
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
      list = __jsx("li", {
        className: "list-group-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
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
      className: "jsx-3772297235",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx("ul", {
      className: "jsx-3772297235" + " " + "list-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, list), __jsx("br", {
      className: "jsx-3772297235",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }), __jsx("select", {
      className: "select-option",
      onChange: e => this.setState({
        currency: e.target.value
      }),
      className: "jsx-3772297235" + " " + "form-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx("option", {
      value: "USD",
      className: "jsx-3772297235",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, "USD"), __jsx("option", {
      value: "GBP",
      className: "jsx-3772297235",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, "GBP"), __jsx("option", {
      value: "EUR",
      className: "jsx-3772297235",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, "EUR")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3772297235",
      __self: this
    }, "select.jsx-3772297235{background-color:#f2f2f2;}select.jsx-3772297235:hover{cursor:pointer;}select.jsx-3772297235:focus{border-color:black;background-color:#f2f2f2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccnlhbmNcXGRldm1vdW50YWluXFx3cjRcXG5leHRqcy1leGFtcGxlXFxjb21wb25lbnRzXFxQcmljZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NvQixBQUcwQyxBQUlYLEFBSUssZUFIdkIsSUFJNkIsTUFSN0IsbUJBU0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxyeWFuY1xcZGV2bW91bnRhaW5cXHdyNFxcbmV4dGpzLWV4YW1wbGVcXGNvbXBvbmVudHNcXFByaWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgbGlzdCA9ICcnO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBCaXRjb2luIFJhdGUgRm9yIHt0aGlzLnByb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259OiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9PC9zcGFuPiA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpIHtcclxuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIEJpdGNvaW4gUmF0ZSBGb3Ige3RoaXMucHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn06IDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5HQlAuY29kZX08L3NwYW4+IDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkdCUC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufTogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuRVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdC1vcHRpb25cIiBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW5jeTogZS50YXJnZXQudmFsdWV9KX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVNEXCIgPlVTRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCUFwiID5HQlA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIiA+RVVSPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdDpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxlY3Q6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\ryanc\\\\devmountain\\\\wr4\\\\nextjs-example\\\\components\\\\Prices.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjdXJyZW5jeSIsInJlbmRlciIsImxpc3QiLCJzdGF0ZSIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsTUFBTixTQUFxQkMsNENBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7QUFBQTtBQUFBOztBQUFBLDZHQUN6QjtBQUNKQyxjQUFRLEVBQUU7QUFETixLQUR5QjtBQUFBOztBQUtqQ0MsUUFBTSxHQUFFO0FBQ0osUUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsUUFBRyxLQUFLQyxLQUFMLENBQVdILFFBQVgsS0FBd0IsS0FBM0IsRUFBaUM7QUFDN0JFLFVBQUksR0FBRztBQUFJLGlCQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFDZSxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEbEMsUUFDZ0Q7QUFBTSxhQUFLLEVBQUMscUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkUsSUFBdEQsQ0FEaEQsT0FDbUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRyxJQUE1QixDQURuSCxDQUFQO0FBR0gsS0FKRCxNQUlPLElBQUcsS0FBS04sS0FBTCxDQUFXSCxRQUFYLEtBQXdCLEtBQTNCLEVBQWtDO0FBQ3JDRSxVQUFJLEdBQUc7QUFBSSxpQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ2UsS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJILFdBRGxDLFFBQ2dEO0FBQU0sYUFBSyxFQUFDLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJGLElBQXRELENBRGhELE9BQ21IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUssR0FBZixDQUFtQkQsSUFBNUIsQ0FEbkgsQ0FBUDtBQUdILEtBSk0sTUFJQSxJQUFHLEtBQUtOLEtBQUwsQ0FBV0gsUUFBWCxLQUF3QixLQUEzQixFQUFpQztBQUNwQ0UsVUFBSSxHQUFJO0FBQUksaUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNjLEtBQUtFLEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSixXQURqQyxRQUMrQztBQUFNLGFBQUssRUFBQyxxQkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQW1DLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSCxJQUF0RCxDQUQvQyxPQUNrSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVNLEdBQWYsQ0FBbUJGLElBQTVCLENBRGxILENBQVI7QUFHSDs7QUFDRCxXQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUEsMENBQWMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tQLElBREwsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLEVBS0k7QUFBUSxlQUFTLEVBQUMsZUFBbEI7QUFBa0MsY0FBUSxFQUFFVSxDQUFDLElBQUksS0FBS0MsUUFBTCxDQUFjO0FBQUNiLGdCQUFRLEVBQUVZLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFwQixPQUFkLENBQWpEO0FBQUEsMENBQXNHLGNBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFRLFdBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUk7QUFBUSxXQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQUdJO0FBQVEsV0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosQ0FMSjtBQUFBO0FBQUE7QUFBQSx1ekdBREE7QUEyQkg7O0FBaERnQzs7QUFtRHRCbEIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmEzYTgyYmE4YjNkNDhkMDljN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQgbGlzdCA9ICcnO1xyXG5cclxuICAgICAgICBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnVVNEJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBCaXRjb2luIFJhdGUgRm9yIHt0aGlzLnByb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259OiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj57dGhpcy5wcm9wcy5icGkuVVNELmNvZGV9PC9zcGFuPiA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpIHtcclxuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIEJpdGNvaW4gUmF0ZSBGb3Ige3RoaXMucHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn06IDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaS5HQlAuY29kZX08L3NwYW4+IDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkdCUC5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJyl7XHJcbiAgICAgICAgICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgQml0Y29pbiBSYXRlIEZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufTogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+e3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfTwvc3Bhbj4gPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuRVVSLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHtsaXN0fVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdC1vcHRpb25cIiBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW5jeTogZS50YXJnZXQudmFsdWV9KX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVVNEXCIgPlVTRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCUFwiID5HQlA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIiA+RVVSPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNlbGVjdDpob3ZlcntcclxuICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZWxlY3Q6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcyJdLCJzb3VyY2VSb290IjoiIn0=