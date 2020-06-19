webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ritgupta5\\pov\\plural-sight-basic-hooks\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    fruit: "",
    price: ""
  }),
      inputState = _useState[0],
      setInputState = _useState[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setInputState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("input", {
    value: inputState.fruit,
    type: "text",
    onChange: handleChange,
    name: "fruit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 1
    }
  }), inputState.fruit, __jsx("input", {
    value: inputState.price,
    type: "text",
    onChange: handleChange,
    name: "price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), inputState.price);
}

_s(HomePage, "a853AJglhi5hVwvl5UYXVw4K5B0=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZVN0YXRlIiwiZnJ1aXQiLCJwcmljZSIsImlucHV0U3RhdGUiLCJzZXRJbnB1dFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFFa0JDLHNEQUFRLENBQUM7QUFBRUMsU0FBSyxFQUFFLEVBQVQ7QUFBYUMsU0FBSyxFQUFFO0FBQXBCLEdBQUQsQ0FGMUI7QUFBQSxNQUVYQyxVQUZXO0FBQUEsTUFFQ0MsYUFGRDs7QUFJbEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQUEsb0JBQ0FBLENBQUMsQ0FBQ0MsTUFERjtBQUFBLFFBQ2hCQyxJQURnQixhQUNoQkEsSUFEZ0I7QUFBQSxRQUNWQyxLQURVLGFBQ1ZBLEtBRFU7QUFFeEJMLGlCQUFhLENBQUMsVUFBQU0sU0FBUztBQUFBLDZDQUNsQkEsU0FEa0IscUdBRXBCRixJQUZvQixFQUViQyxLQUZhO0FBQUEsS0FBVixDQUFiO0FBSUQsR0FORDs7QUFRRixTQUFPLG1FQUNQO0FBQ1EsU0FBSyxFQUFFTixVQUFVLENBQUNGLEtBRDFCO0FBRVEsUUFBSSxFQUFDLE1BRmI7QUFHUSxZQUFRLEVBQUVJLFlBSGxCO0FBSVEsUUFBSSxFQUFDLE9BSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURPLEVBT0FGLFVBQVUsQ0FBQ0YsS0FQWCxFQVFEO0FBQ0UsU0FBSyxFQUFFRSxVQUFVLENBQUNELEtBRHBCO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxZQUFRLEVBQUVHLFlBSFo7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkMsRUFjQUYsVUFBVSxDQUFDRCxLQWRYLENBQVA7QUFpQkM7O0dBN0JRSCxROztLQUFBQSxRO0FBK0JNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTBmODI1Y2RjMzAzNzVkZmQ1N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgXHJcbiAgY29uc3QgW2lucHV0U3RhdGUsIHNldElucHV0U3RhdGVdID0gdXNlU3RhdGUoeyBmcnVpdDogXCJcIiwgcHJpY2U6IFwiXCIgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRJbnB1dFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxucmV0dXJuIDw+XHJcbjxpbnB1dFxyXG4gICAgICAgIHZhbHVlPXtpbnB1dFN0YXRlLmZydWl0fVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIG5hbWU9XCJmcnVpdFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtpbnB1dFN0YXRlLmZydWl0fVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB2YWx1ZT17aW5wdXRTdGF0ZS5wcmljZX1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAvPlxyXG4gICAgICB7aW5wdXRTdGF0ZS5wcmljZX1cclxuPC8+XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9