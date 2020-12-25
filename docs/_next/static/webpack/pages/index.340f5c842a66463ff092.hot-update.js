webpackHotUpdate_N_E("pages/index",{

/***/ "./src/problems.js":
/*!*************************!*\
  !*** ./src/problems.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Problems; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_problems_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/problems.json */ \"./data/problems.json\");\nvar _data_problems_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/problems.json */ \"./data/problems.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/william/src/aoc-syllabus/src/problems.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar problems = _data_problems_json__WEBPACK_IMPORTED_MODULE_3__;\nfunction Problems() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      filterInput = _useState[0],\n      setFilterInput = _useState[1];\n\n  var filtered = problems.filter(function (problem) {\n    return problem.Title.toLowerCase().includes(filterInput.toLowerCase());\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n      children: \"List of Advent of Code problems, filterable by title, year, topics etc.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: [\"Filter: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: filterInput,\n        onChange: function onChange(x) {\n          return setFilterInput(x.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 24\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Title\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Year\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            children: \"Day\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, this), filtered.map(function (problem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: problem.Title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: problem.Year\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n              children: problem.Day\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 17\n            }, _this)]\n          }, problem.Title, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, this), filtered.length === 0 ? \"No results\" : \"\"]\n  }, void 0, true);\n}\n\n_s(Problems, \"O5vIqAGQ7hBEmd/KK9G1fBVtyAk=\");\n\n_c = Problems;\n\nvar _c;\n\n$RefreshReg$(_c, \"Problems\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb2JsZW1zLmpzPzc1MmEiXSwibmFtZXMiOlsicHJvYmxlbXMiLCJkYXRhIiwiUHJvYmxlbXMiLCJ1c2VTdGF0ZSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJmaWx0ZXJlZCIsImZpbHRlciIsInByb2JsZW0iLCJUaXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdHlsZXMiLCJkZXNjcmlwdGlvbiIsIngiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIlllYXIiLCJEYXkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLGdEQUFqQjtBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUN4QkMsV0FEd0I7QUFBQSxNQUNYQyxjQURXOztBQUcvQixNQUFNQyxRQUFRLEdBQUdOLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixVQUFBQyxPQUFPLEVBQUk7QUFDeEMsV0FBT0EsT0FBTyxDQUFDQyxLQUFSLENBQWNDLFdBQWQsR0FBNEJDLFFBQTVCLENBQXFDUCxXQUFXLENBQUNNLFdBQVosRUFBckMsQ0FBUDtBQUNILEdBRmdCLENBQWpCO0FBSUEsc0JBQU87QUFBQSw0QkFDSDtBQUFHLGVBQVMsRUFBRUUsOERBQU0sQ0FBQ0MsV0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERyxlQUlIO0FBQUEsMENBQWU7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFLLEVBQUVULFdBQTFCO0FBQXVDLGdCQUFRLEVBQUUsa0JBQUNVLENBQUQ7QUFBQSxpQkFBT1QsY0FBYyxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRyxlQUtIO0FBQUEsNkJBQ0E7QUFBQSxnQ0FDQTtBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFNQ1YsUUFBUSxDQUFDVyxHQUFULENBQWEsVUFBQVQsT0FBTztBQUFBLDhCQUNqQjtBQUFBLG9DQUNJO0FBQUEsd0JBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQSx3QkFBS0QsT0FBTyxDQUFDVTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFHSTtBQUFBLHdCQUFLVixPQUFPLENBQUNXO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISjtBQUFBLGFBQVNYLE9BQU8sQ0FBQ0MsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFwQixDQU5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRyxFQXFCRkgsUUFBUSxDQUFDYyxNQUFULEtBQW9CLENBQXBCLEdBQXdCLFlBQXhCLEdBQXVDLEVBckJyQztBQUFBLGtCQUFQO0FBdUJIOztHQTlCdUJsQixROztLQUFBQSxRIiwiZmlsZSI6Ii4vc3JjL3Byb2JsZW1zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0ICogYXMgZGF0YSBmcm9tICcuLi9kYXRhL3Byb2JsZW1zLmpzb24nO1xuXG5jb25zdCBwcm9ibGVtcyA9IGRhdGEuZGVmYXVsdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvYmxlbXMoKSB7XG4gICAgY29uc3QgW2ZpbHRlcklucHV0LCBzZXRGaWx0ZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkID0gcHJvYmxlbXMuZmlsdGVyKHByb2JsZW0gPT4geyBcbiAgICAgICAgcmV0dXJuIHByb2JsZW0uVGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJJbnB1dC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBMaXN0IG9mIEFkdmVudCBvZiBDb2RlIHByb2JsZW1zLCBmaWx0ZXJhYmxlIGJ5IHRpdGxlLCB5ZWFyLCB0b3BpY3MgZXRjLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxsYWJlbD5GaWx0ZXI6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmaWx0ZXJJbnB1dH0gb25DaGFuZ2U9eyh4KSA9PiBzZXRGaWx0ZXJJbnB1dCh4LnRhcmdldC52YWx1ZSl9Lz48L2xhYmVsPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgICAgICAgIDx0aD5ZZWFyPC90aD5cbiAgICAgICAgICAgIDx0aD5EYXk8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICB7ZmlsdGVyZWQubWFwKHByb2JsZW0gPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17cHJvYmxlbS5UaXRsZX0+XG4gICAgICAgICAgICAgICAgPHRkPntwcm9ibGVtLlRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntwcm9ibGVtLlllYXJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3Byb2JsZW0uRGF5fTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAge2ZpbHRlcmVkLmxlbmd0aCA9PT0gMCA/IFwiTm8gcmVzdWx0c1wiIDogXCJcIn1cbiAgICA8Lz5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/problems.js\n");

/***/ })

})