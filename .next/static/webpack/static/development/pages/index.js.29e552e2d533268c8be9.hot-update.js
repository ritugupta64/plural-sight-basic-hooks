webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

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
    firstName: '',
    lastName: ''
  }),
      inputState = _useState[0],
      setInputState = _useState[1];

  var updateVal = function updateVal(e) {
    setInputState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 8
    }
  }, __jsx("input", {
    type: "text",
    onChange: updateVal,
    onClick: updateVal,
    value: inputState,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 8
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "First Name:", inputState)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 8
    }
  }, __jsx("input", {
    type: "text",
    onChange: updateVal,
    onClick: updateVal,
    value: inputState,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Last Name:", inputState)));
}

_s(HomePage, "YIT/VF69FV1WuG4WMrQMsIs/prE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5wdXRTdGF0ZSIsInNldElucHV0U3RhdGUiLCJ1cGRhdGVWYWwiLCJlIiwicHJldlN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQztBQUMzQ0MsYUFBUyxFQUFDLEVBRGlDO0FBRTNDQyxZQUFRLEVBQUM7QUFGa0MsR0FBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQU1sQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQU87QUFDdkJGLGlCQUFhLENBQUMsVUFBQUcsU0FBUztBQUFBLDZDQUNsQkEsU0FEa0IscUdBRXBCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFGVyxFQUVMSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FGSjtBQUFBLEtBQVYsQ0FBYjtBQUlELEdBTEQ7O0FBTUEsU0FBTyxtRUFHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUNDLFlBQVEsRUFBRUwsU0FEWDtBQUNzQixXQUFPLEVBQUVBLFNBRC9CO0FBQzBDLFNBQUssRUFBRUYsVUFEakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLEVBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBa0JBLFVBQWxCLENBSEQsQ0FIRSxFQVFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQ0MsWUFBUSxFQUFFRSxTQURYO0FBQ3NCLFdBQU8sRUFBRUEsU0FEL0I7QUFDMEMsU0FBSyxFQUFFRixVQURqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsRUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFpQkEsVUFBakIsQ0FIRCxDQVJFLENBQVA7QUFjRDs7R0ExQlFKLFE7O0tBQUFBLFE7QUE0Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yOWU1NTJlMmQ1MzMyNjhjOGJlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBbaW5wdXRTdGF0ZSwgc2V0SW5wdXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaXJzdE5hbWU6JycsXHJcbiAgICBsYXN0TmFtZTonJ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHVwZGF0ZVZhbCA9IChlKSA9PiB7XHJcbiAgICBzZXRJbnB1dFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTplLnRhcmdldC52YWx1ZVxyXG4gICAgfSkpXHJcbiAgfVxyXG4gIHJldHVybiA8PlxyXG4gIHsvKiA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXRTdGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+ICovfVxyXG4gICAgICAgPGRpdj5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbH0gb25DbGljaz17dXBkYXRlVmFsfSB2YWx1ZT17aW5wdXRTdGF0ZX0gLz5cclxuICAgICAgICA8c3Bhbj5GaXJzdCBOYW1lOntpbnB1dFN0YXRlfTwvc3Bhbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdj5cclxuICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e3VwZGF0ZVZhbH0gb25DbGljaz17dXBkYXRlVmFsfSB2YWx1ZT17aW5wdXRTdGF0ZX0gLz5cclxuICAgICAgICA8c3Bhbj5MYXN0IE5hbWU6e2lucHV0U3RhdGV9PC9zcGFuPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgPC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==