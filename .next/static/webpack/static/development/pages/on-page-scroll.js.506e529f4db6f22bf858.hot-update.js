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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(HoverComponent, {
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

/***/ "./src/components/hoverComponent/hoverComponent.js":
false,

/***/ "./src/components/onScrollComponent/onScrollComponent.js":
/*!***************************************************************!*\
  !*** ./src/components/onScrollComponent/onScrollComponent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\src\\components\\onScrollComponent\\onScrollComponent.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var onPageScroll = function onPageScroll(_ref) {
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

_s(onPageScroll, "pPtXsvG91j2Z3c25lC/eAVbkzMw=");

/* harmony default export */ __webpack_exports__["default"] = (onPageScroll);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vbi1wYWdlLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vblNjcm9sbENvbXBvbmVudC9vblNjcm9sbENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJob3Zlck9uSW1hZ2UiLCJvblBhZ2VTY3JvbGwiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiaW1nUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlU3RhdGUiLCJpblZpZXciLCJzZXRJblZpZXciLCJpc0luVmlldyIsImN1cnJlbnQiLCJyZWFjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsU0FDRSxtRUFDRSxNQUFDLGNBQUQ7QUFDRSxXQUFPLEVBQUMsbUJBRFY7QUFFRSxhQUFTLEVBQUMsbUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFRRCxDQVREOztBQVdlQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7QUFHQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEwQjtBQUFBOztBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDNUMsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBckI7QUFDQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0EsV0FBTSxZQUFNO0FBQ1IsYUFBT0YsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckMsQ0FBUDtBQUNILEtBRkQ7QUFHSCxHQUxRLENBQVQ7O0FBRjJDLGtCQVNmRSxzREFBUSxDQUFDLEtBQUQsQ0FUTztBQUFBLE1BU3BDQyxNQVRvQztBQUFBLE1BUzVCQyxTQVQ0Qjs7QUFXM0MsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNsQixRQUFHVixNQUFNLENBQUNXLE9BQVYsRUFBa0I7QUFDZixVQUFNQyxLQUFLLEdBQUdaLE1BQU0sQ0FBQ1csT0FBUCxDQUFlRSxxQkFBZixFQUFkO0FBQ0EsYUFBT0QsS0FBSyxDQUFDRSxHQUFOLElBQWEsQ0FBYixJQUFrQkYsS0FBSyxDQUFDRyxNQUFOLElBQWdCWixNQUFNLENBQUNhLFdBQWhEO0FBQ0Y7O0FBQ0QsV0FBTyxLQUFQO0FBQ0osR0FORDs7QUFRQSxNQUFNWCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJJLGFBQVMsQ0FBQyxZQUFNO0FBQ1osYUFBT0MsUUFBUSxFQUFmO0FBQ0gsS0FGUSxDQUFUO0FBR0gsR0FKRDs7QUFNQSxTQUFPLG1FQUNOO0FBQUssT0FBRyxFQUFFRixNQUFNLEdBQUdWLE9BQUgsR0FBYUMsU0FBN0I7QUFBd0MsU0FBSyxFQUFDLEtBQTlDO0FBQW9ELFVBQU0sRUFBQyxLQUEzRDtBQUFpRSxPQUFHLEVBQUVDLE1BQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETSxDQUFQO0FBR0gsQ0E1QkQ7O0dBQU1ILFk7O0FBOEJTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcb24tcGFnZS1zY3JvbGwuanMuNTA2ZTUyOWY0ZGI2ZjIyYmY4NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgb25QYWdlU2Nyb2xsIH0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL29uU2Nyb2xsQ29tcG9uZW50L29uU2Nyb2xsQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBob3Zlck9uSW1hZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIb3ZlckNvbXBvbmVudFxyXG4gICAgICAgIHByaW1hcnk9XCIvaW1hZ2VzL2ltZy0xLmpwZ1wiXHJcbiAgICAgICAgc2Vjb25kYXJ5PVwiL2ltYWdlcy9pbWctMi5qcGdcIlxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvdmVyT25JbWFnZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3Qgb25QYWdlU2Nyb2xsID0gKHtwcmltYXJ5LCBzZWNvbmRhcnl9KSA9PiB7XHJcbiAgIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgIGlmKGltZ1JlZi5jdXJyZW50KXtcclxuICAgICAgICAgICAgY29uc3QgcmVhY3QgPSBpbWdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYWN0LnRvcCA+PSAwICYmIHJlYWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluVmlldygoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0luVmlldygpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuIFxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgPGltZyBzcmM9e2luVmlldyA/IHByaW1hcnkgOiBzZWNvbmRhcnl9IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgcmVmPXtpbWdSZWZ9Lz5cclxuICAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25QYWdlU2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==