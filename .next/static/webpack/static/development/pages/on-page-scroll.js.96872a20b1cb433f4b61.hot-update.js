webpackHotUpdate("static\\development\\pages\\on-page-scroll.js",{

/***/ "./pages/on-page-scroll.js":
/*!*********************************!*\
  !*** ./pages/on-page-scroll.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/onScrollComponent/onScrollComponent */ "./src/components/onScrollComponent/onScrollComponent.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\pages\\on-page-scroll.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var hoverOnImage = function hoverOnImage() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_src_components_onScrollComponent_onScrollComponent__WEBPACK_IMPORTED_MODULE_1__["OnPageScroll"], {
    primary: "/images/img-1.jpg",
    secondary: "/images/img-2.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
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

/***/ "./src/components/onScrollComponent/onScrollComponent.js":
/*!***************************************************************!*\
  !*** ./src/components/onScrollComponent/onScrollComponent.js ***!
  \***************************************************************/
/*! exports provided: OnPageScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnPageScroll", function() { return OnPageScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\src\\components\\onScrollComponent\\onScrollComponent.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var OnPageScroll = function OnPageScroll(_ref) {
  _s();

  var primary = _ref.primary,
      secondary = _ref.secondary;
  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', scrollHandler);
    return function () {
      return window.removeEventListener('scroll', scrollHandler);
    };
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState[0],
      setInView = _useState[1];

  var isInView = function isInView() {
    if (imgRef.current) {
      var react = imgRef.current.getBoundingClientRect();
      return react.top >= 0 && react.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandler = function scrollHandler() {
    setInView(function () {
      return isInView();
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: inView ? primary : secondary,
    width: "200",
    height: "200",
    ref: imgRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }));
};

_s(OnPageScroll, "pPtXsvG91j2Z3c25lC/eAVbkzMw=");

_c = OnPageScroll;


var _c;

$RefreshReg$(_c, "OnPageScroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vbi1wYWdlLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vblNjcm9sbENvbXBvbmVudC9vblNjcm9sbENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJob3Zlck9uSW1hZ2UiLCJPblBhZ2VTY3JvbGwiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiaW1nUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlU3RhdGUiLCJpblZpZXciLCJzZXRJblZpZXciLCJpc0luVmlldyIsImN1cnJlbnQiLCJyZWFjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FDRSxtRUFDRSxNQUFDLGdHQUFEO0FBQ0UsV0FBTyxFQUFDLG1CQURWO0FBRUUsYUFBUyxFQUFDLG1CQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBUUQsQ0FURDs7QUFXZUEsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBOztBQUdBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQTBCO0FBQUE7O0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUM1QyxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFyQjtBQUNDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsYUFBbEM7QUFDQSxXQUFNLFlBQU07QUFDUixhQUFPRixNQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxhQUFyQyxDQUFQO0FBQ0gsS0FGRDtBQUdILEdBTFEsQ0FBVDs7QUFGMkMsa0JBU2ZFLHNEQUFRLENBQUMsS0FBRCxDQVRPO0FBQUEsTUFTcENDLE1BVG9DO0FBQUEsTUFTNUJDLFNBVDRCOztBQVczQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ2xCLFFBQUdWLE1BQU0sQ0FBQ1csT0FBVixFQUFrQjtBQUNmLFVBQU1DLEtBQUssR0FBR1osTUFBTSxDQUFDVyxPQUFQLENBQWVFLHFCQUFmLEVBQWQ7QUFDQSxhQUFPRCxLQUFLLENBQUNFLEdBQU4sSUFBYSxDQUFiLElBQWtCRixLQUFLLENBQUNHLE1BQU4sSUFBZ0JaLE1BQU0sQ0FBQ2EsV0FBaEQ7QUFDRjs7QUFDRCxXQUFPLEtBQVA7QUFDSixHQU5EOztBQVFBLE1BQU1YLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN4QkksYUFBUyxDQUFDLFlBQU07QUFDWixhQUFPQyxRQUFRLEVBQWY7QUFDSCxLQUZRLENBQVQ7QUFHSCxHQUpEOztBQU1BLFNBQU8sbUVBQ047QUFBSyxPQUFHLEVBQUVGLE1BQU0sR0FBR1YsT0FBSCxHQUFhQyxTQUE3QjtBQUF3QyxTQUFLLEVBQUMsS0FBOUM7QUFBb0QsVUFBTSxFQUFDLEtBQTNEO0FBQWlFLE9BQUcsRUFBRUMsTUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURNLENBQVA7QUFHSCxDQTVCRDs7R0FBTUgsWTs7S0FBQUEsWTtBQThCTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb24tcGFnZS1zY3JvbGwuanMuOTY4NzJhMjBiMWNiNDMzZjRiNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgT25QYWdlU2Nyb2xsIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL29uU2Nyb2xsQ29tcG9uZW50L29uU2Nyb2xsQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBob3Zlck9uSW1hZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxPblBhZ2VTY3JvbGxcclxuICAgICAgICBwcmltYXJ5PVwiL2ltYWdlcy9pbWctMS5qcGdcIlxyXG4gICAgICAgIHNlY29uZGFyeT1cIi9pbWFnZXMvaW1nLTIuanBnXCJcclxuICAgICAgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3Zlck9uSW1hZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IE9uUGFnZVNjcm9sbCA9ICh7cHJpbWFyeSwgc2Vjb25kYXJ5fSkgPT4ge1xyXG4gICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xyXG4gICAgICAgIHJldHVybigpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgICBpZihpbWdSZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWN0ID0gaW1nUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZWFjdC50b3AgPj0gMCAmJiByZWFjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICBzZXRJblZpZXcoKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNJblZpZXcoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiBcclxuICAgIHJldHVybiA8PlxyXG4gICAgIDxpbWcgc3JjPXtpblZpZXcgPyBwcmltYXJ5IDogc2Vjb25kYXJ5fSB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiIHJlZj17aW1nUmVmfS8+XHJcbiAgICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCB7T25QYWdlU2Nyb2xsfSJdLCJzb3VyY2VSb290IjoiIn0=