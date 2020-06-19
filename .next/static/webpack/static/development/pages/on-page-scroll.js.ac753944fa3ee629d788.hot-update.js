webpackHotUpdate("static\\development\\pages\\on-page-scroll.js",{

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
    setInView(isInView());
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
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vblNjcm9sbENvbXBvbmVudC9vblNjcm9sbENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJPblBhZ2VTY3JvbGwiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiaW1nUmVmIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJzZXRJblZpZXciLCJpc0luVmlldyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VTdGF0ZSIsImluVmlldyIsImN1cnJlbnQiLCJyZWFjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBMEI7QUFBQTs7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQzVDLE1BQU1DLE1BQU0sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBQ0NDLHlEQUFTLENBQUMsWUFBTTtBQUVaQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxhQUFsQztBQUNHQyxhQUFTLENBQUNDLFFBQVEsRUFBVCxDQUFUO0FBQ0gsV0FBTSxZQUFNO0FBQ1IsYUFBT0osTUFBTSxDQUFDSyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0gsYUFBckMsQ0FBUDtBQUNILEtBRkQ7QUFHSCxHQVBRLENBQVQ7O0FBRjJDLGtCQVdmSSxzREFBUSxDQUFDLEtBQUQsQ0FYTztBQUFBLE1BV3BDQyxNQVhvQztBQUFBLE1BVzVCSixTQVg0Qjs7QUFhM0MsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNsQixRQUFHUCxNQUFNLENBQUNXLE9BQVYsRUFBa0I7QUFDZixVQUFNQyxLQUFLLEdBQUdaLE1BQU0sQ0FBQ1csT0FBUCxDQUFlRSxxQkFBZixFQUFkO0FBQ0EsYUFBT0QsS0FBSyxDQUFDRSxHQUFOLElBQWEsQ0FBYixJQUFrQkYsS0FBSyxDQUFDRyxNQUFOLElBQWdCWixNQUFNLENBQUNhLFdBQWhEO0FBQ0Y7O0FBQ0QsV0FBTyxLQUFQO0FBQ0osR0FORDs7QUFRQSxNQUFNWCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJDLGFBQVMsQ0FBQyxZQUFNO0FBQ1osYUFBT0MsUUFBUSxFQUFmO0FBQ0gsS0FGUSxDQUFUO0FBR0gsR0FKRDs7QUFNQSxTQUFPLG1FQUNOO0FBQUssT0FBRyxFQUFFRyxNQUFNLEdBQUdaLE9BQUgsR0FBYUMsU0FBN0I7QUFBd0MsU0FBSyxFQUFDLEtBQTlDO0FBQW9ELFVBQU0sRUFBQyxLQUEzRDtBQUFpRSxPQUFHLEVBQUVDLE1BQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFETSxDQUFQO0FBR0gsQ0E5QkQ7O0dBQU1ILFk7O0tBQUFBLFk7QUFnQ04iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG9uLXBhZ2Utc2Nyb2xsLmpzLmFjNzUzOTQ0ZmEzZWU2MjlkNzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBPblBhZ2VTY3JvbGwgPSAoe3ByaW1hcnksIHNlY29uZGFyeX0pID0+IHtcclxuICAgY29uc3QgaW1nUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpXHJcbiAgICAgICAgcmV0dXJuKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgIGlmKGltZ1JlZi5jdXJyZW50KXtcclxuICAgICAgICAgICAgY29uc3QgcmVhY3QgPSBpbWdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYWN0LnRvcCA+PSAwICYmIHJlYWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluVmlldygoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0luVmlldygpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuIFxyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgPGltZyBzcmM9e2luVmlldyA/IHByaW1hcnkgOiBzZWNvbmRhcnl9IHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIgcmVmPXtpbWdSZWZ9Lz5cclxuICAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IHtPblBhZ2VTY3JvbGx9Il0sInNvdXJjZVJvb3QiOiIifQ==