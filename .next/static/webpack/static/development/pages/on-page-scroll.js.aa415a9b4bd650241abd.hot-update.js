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
var _this = undefined,
    _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\pages\\on-page-scroll.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var onPageScroll = function onPageScroll() {
  _s();

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
    return {};
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("img", {
    src: "/images/img-1.jpg",
    width: "200",
    height: "200",
    ref: imgRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-2.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-3.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-4.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-1.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-2.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-3.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: "/images/img-4.jpg",
    width: "200",
    height: "200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9vbi1wYWdlLXNjcm9sbC5qcyJdLCJuYW1lcyI6WyJvblBhZ2VTY3JvbGwiLCJpbWdSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1c2VTdGF0ZSIsImluVmlldyIsInNldEluVmlldyIsImlzSW5WaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXJCO0FBQ0NDLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxhQUFsQztBQUNBLFdBQU0sWUFBTTtBQUNSLGFBQU9GLE1BQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELGFBQXJDLENBQVA7QUFDSCxLQUZEO0FBR0gsR0FMUSxDQUFUOztBQUZ1QixrQkFTS0Usc0RBQVEsQ0FBQyxLQUFELENBVGI7QUFBQSxNQVNoQkMsTUFUZ0I7QUFBQSxNQVNSQyxTQVRROztBQVd2QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFdBQU8sRUFBUDtBQUdILEdBSkQ7O0FBTUEsU0FBTyxtRUFDTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQXNELE9BQUcsRUFBRVYsTUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURNLEVBRU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZNLEVBR047QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSE0sRUFJTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSk0sRUFLTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMTSxFQU1OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOTSxFQU9OO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBNLEVBUU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJNLEVBU047QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVE0sRUFVTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVk0sRUFXTjtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixTQUFLLEVBQUMsS0FBbkM7QUFBeUMsVUFBTSxFQUFDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYTSxFQVlOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaTSxFQWFOO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLFNBQUssRUFBQyxLQUFuQztBQUF5QyxVQUFNLEVBQUMsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJNLEVBY047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRNLEVBZU47QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsU0FBSyxFQUFDLEtBQW5DO0FBQXlDLFVBQU0sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZk0sRUFnQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCTSxDQUFQO0FBa0JILENBbkNEOztHQUFNRCxZOztBQXFDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG9uLXBhZ2Utc2Nyb2xsLmpzLmFhNDE1YTliNGJkNjUwMjQxYWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBvblBhZ2VTY3JvbGwgPSAoKSA9PiB7XHJcbiAgIGNvbnN0IGltZ1JlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICByZXR1cm4gPD5cclxuICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1nLTEuanBnXCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIiByZWY9e2ltZ1JlZn0vPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0yLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0zLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy00LmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0xLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0yLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy0zLmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZy00LmpwZ1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCIvPlxyXG4gICAgIDxici8+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgb25QYWdlU2Nyb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==