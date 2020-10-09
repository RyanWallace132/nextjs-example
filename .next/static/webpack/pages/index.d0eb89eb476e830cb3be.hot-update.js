webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Prices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Prices */ "./components/Prices.js");
var _jsxFileName = "C:\\Users\\ryanc\\devmountain\\wr4\\nextjs-example\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Index = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, "Welcome to BitzPrice"), __jsx(_components_Prices__WEBPACK_IMPORTED_MODULE_3__["default"], {
  bpi: props.bpi,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 13
  }
})));

_c = Index;

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  return {
    bpi: data.bpi
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImJwaSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVBLE1BQU1BLEtBQUssR0FBSUMsS0FBRCxJQUNWLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBRUksTUFBQywwREFBRDtBQUFRLEtBQUcsRUFBRUEsS0FBSyxDQUFDQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkosQ0FESixDQURKOztLQUFNRixLOztBQVNOQSxLQUFLLENBQUNHLGVBQU4sR0FBd0Isa0JBQWdCO0FBQ3BDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3RCLG1EQURzQixDQUF2QjtBQUVBLFFBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFFQSxTQUFPO0FBQ0hMLE9BQUcsRUFBRUksSUFBSSxDQUFDSjtBQURQLEdBQVA7QUFHSCxDQVJEOztBQVVlRixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMGViODllYjQ3NmU4MzBjYjNiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5pbXBvcnQgUHJpY2VzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpY2VzJ1xyXG5cclxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gQml0elByaWNlPC9oMT5cclxuICAgICAgICAgICAgPFByaWNlcyBicGk9e3Byb3BzLmJwaX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbilcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaFxyXG4gICAgKCdodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS5qc29uJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBicGk6IGRhdGEuYnBpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=