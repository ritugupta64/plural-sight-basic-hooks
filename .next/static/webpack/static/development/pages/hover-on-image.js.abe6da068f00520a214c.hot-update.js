webpackHotUpdate("static\\development\\pages\\hover-on-image.js",{

/***/ "./pages/hover-on-image.js":
/*!*********************************!*\
  !*** ./pages/hover-on-image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_hoverComponent_hoverComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/hoverComponent/hoverComponent */ "./src/components/hoverComponent/hoverComponent.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\pages\\hover-on-image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var hoverOnImage = function hoverOnImage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_components_hoverComponent_hoverComponent__WEBPACK_IMPORTED_MODULE_1__["HoverComponent"], {
    primary: "/images/img-1.jpg",
    secondary: "/images/img-2.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (hoverOnImage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/hoverComponent/hoverComponent.js":
/*!*********************************************************!*\
  !*** ./src/components/hoverComponent/hoverComponent.js ***!
  \*********************************************************/
/*! exports provided: HoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverComponent", function() { return HoverComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\src\\components\\hoverComponent\\hoverComponent.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var HoverComponent = function HoverComponent(_ref) {
  _s();

  var primary = _ref.primary,
      secondary = _ref.secondary;
  var imga = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: primary,
    onMouseOver: function onMouseOver() {
      imga.current.src = {
        secondary: secondary
      };
    },
    onMouseOut: function onMouseOut() {
      imga.current.src = {
        primary: primary
      };
    },
    ref: imga,
    width: "100",
    height: "100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

_s(HoverComponent, "RB7D0WgsMkZkuKUJhU6ry7emyQI=");

_c = HoverComponent;


var _c;

$RefreshReg$(_c, "HoverComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob3Zlci1vbi1pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob3ZlckNvbXBvbmVudC9ob3ZlckNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJob3Zlck9uSW1hZ2UiLCJIb3ZlckNvbXBvbmVudCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJpbWdhIiwidXNlUmVmIiwiY3VycmVudCIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBR3pCLFNBQ0UsbUVBQ0UsTUFBQyw0RkFBRDtBQUFnQixXQUFPLHFCQUF2QjtBQUE4QyxhQUFTLHFCQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtELENBUkQ7O0FBVWVBLDJFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQTBCO0FBQUE7O0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUMvQyxNQUFNQyxJQUFJLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUVBLFNBQ0UsbUVBQ0U7QUFDRSxPQUFHLEVBQUVILE9BRFA7QUFFRSxlQUFXLEVBQUUsdUJBQU07QUFDakJFLFVBQUksQ0FBQ0UsT0FBTCxDQUFhQyxHQUFiLEdBQW1CO0FBQUNKLGlCQUFTLEVBQVRBO0FBQUQsT0FBbkI7QUFDRCxLQUpIO0FBS0UsY0FBVSxFQUFFLHNCQUFNO0FBQ2hCQyxVQUFJLENBQUNFLE9BQUwsQ0FBYUMsR0FBYixHQUFtQjtBQUFDTCxlQUFPLEVBQVBBO0FBQUQsT0FBbkI7QUFDRCxLQVBIO0FBUUUsT0FBRyxFQUFFRSxJQVJQO0FBU0UsU0FBSyxFQUFDLEtBVFI7QUFVRSxVQUFNLEVBQUMsS0FWVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQWdCRCxDQW5CRDs7R0FBTUgsYzs7S0FBQUEsYztBQXFCTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaG92ZXItb24taW1hZ2UuanMuYWJlNmRhMDY4ZjAwNTIwYTIxNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtIb3ZlckNvbXBvbmVudH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvaG92ZXJDb21wb25lbnQvaG92ZXJDb21wb25lbnQnXHJcblxyXG5jb25zdCBob3Zlck9uSW1hZ2UgPSAoKSA9PiB7XHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIb3ZlckNvbXBvbmVudCBwcmltYXJ5PXtgL2ltYWdlcy9pbWctMS5qcGdgfSBzZWNvbmRhcnk9e2AvaW1hZ2VzL2ltZy0yLmpwZ2B9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG92ZXJPbkltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIb3ZlckNvbXBvbmVudCA9ICh7cHJpbWFyeSwgc2Vjb25kYXJ5fSkgPT4ge1xyXG4gIGNvbnN0IGltZ2EgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtwcmltYXJ5fVxyXG4gICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XHJcbiAgICAgICAgICBpbWdhLmN1cnJlbnQuc3JjID0ge3NlY29uZGFyeX07XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiB7XHJcbiAgICAgICAgICBpbWdhLmN1cnJlbnQuc3JjID0ge3ByaW1hcnl9O1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgcmVmPXtpbWdhfVxyXG4gICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7SG92ZXJDb21wb25lbnR9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9