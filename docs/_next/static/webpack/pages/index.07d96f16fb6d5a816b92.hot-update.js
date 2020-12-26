webpackHotUpdate_N_E("pages/index",{

/***/ "./src/problems.js":
/*!*************************!*\
  !*** ./src/problems.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Problems; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Problems_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Problems.module.css */ \"./styles/Problems.module.css\");\n/* harmony import */ var _styles_Problems_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Problems_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_problems_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/problems.json */ \"./data/problems.json\");\nvar _data_problems_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/problems.json */ \"./data/problems.json\", 1);\n\n\n\nvar _jsxFileName = \"/home/william/src/aoc-syllabus/src/problems.js\",\n    _s = $RefreshSig$();\n\n\n\n\nvar problems = _data_problems_json__WEBPACK_IMPORTED_MODULE_3__;\nfunction Problems() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      filterInput = _useState[0],\n      setFilterInput = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"Year\"),\n      sortKey = _useState2[0],\n      setSortKey = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      ascending = _useState3[0],\n      setAscending = _useState3[1];\n\n  var filtered = problems.filter(function (problem) {\n    return problem.Title.toLowerCase().includes(filterInput.toLowerCase());\n  }).sort(function (p1, p2) {\n    var cmp = p1[sortKey] - p2[sortKey];\n    var cmp2 = p1[sortKey].localeCompare(p2[sortKey]);\n    return (ascending ? 1 : -1) * (!isNaN(cmp) ? cmp : 2 * p1[sortKey].localeCompare(p2[sortKey]) - 1);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _styles_Problems_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n      children: \"List of Advent of Code problems, filterable by title, year, topics etc.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      children: [\"Filter: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: filterInput,\n        onChange: function onChange(x) {\n          return setFilterInput(x.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 24\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: Object.keys(problems[0]).map(function (key) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                className: sortKey === key ? _styles_Problems_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.selected : _styles_Problems_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,\n                onClick: function onClick() {\n                  if (sortKey == key) {\n                    setAscending(!ascending);\n                  } else {\n                    setAscending(true);\n                  }\n\n                  return setSortKey(key);\n                },\n                children: [key, \" \", sortKey === key ? ascending ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                  className: \"down arrow\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 52\n                }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n                  className: \"up arrow\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 82\n                }, _this) : \"\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 64\n              }, _this)\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 50\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, this), filtered.map(function (problem) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            className: _styles_Problems_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,\n            children: Object.keys(problem).map(function (key) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: key == \"Title\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: \"https://adventofcode.com/2020/day/20\",\n                  children: problem[key]\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 39,\n                  columnNumber: 70\n                }, _this) : problem[key]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 50\n              }, _this);\n            })\n          }, problem.Title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this), filtered.length === 0 ? \"No results\" : \"\"]\n  }, void 0, true);\n}\n\n_s(Problems, \"1k1oshqhHUkiWQqw33BavTKAnqM=\");\n\n_c = Problems;\n\nvar _c;\n\n$RefreshReg$(_c, \"Problems\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3Byb2JsZW1zLmpzPzc1MmEiXSwibmFtZXMiOlsicHJvYmxlbXMiLCJkYXRhIiwiUHJvYmxlbXMiLCJ1c2VTdGF0ZSIsImZpbHRlcklucHV0Iiwic2V0RmlsdGVySW5wdXQiLCJzb3J0S2V5Iiwic2V0U29ydEtleSIsImFzY2VuZGluZyIsInNldEFzY2VuZGluZyIsImZpbHRlcmVkIiwiZmlsdGVyIiwicHJvYmxlbSIsIlRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInNvcnQiLCJwMSIsInAyIiwiY21wIiwiY21wMiIsImxvY2FsZUNvbXBhcmUiLCJpc05hTiIsInN0eWxlcyIsImRlc2NyaXB0aW9uIiwieCIsInRhcmdldCIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInNlbGVjdGVkIiwiYnV0dG9uIiwicm93IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyxnREFBakI7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDeEJDLFdBRHdCO0FBQUEsTUFDWEMsY0FEVzs7QUFBQSxtQkFFREYsc0RBQVEsQ0FBQyxNQUFELENBRlA7QUFBQSxNQUV4QkcsT0FGd0I7QUFBQSxNQUVmQyxVQUZlOztBQUFBLG1CQUdHSixzREFBUSxDQUFDLElBQUQsQ0FIWDtBQUFBLE1BR3hCSyxTQUh3QjtBQUFBLE1BR2JDLFlBSGE7O0FBSy9CLE1BQU1DLFFBQVEsR0FBR1YsUUFBUSxDQUFDVyxNQUFULENBQWdCLFVBQUFDLE9BQU8sRUFBSTtBQUN4QyxXQUFPQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsV0FBZCxHQUE0QkMsUUFBNUIsQ0FBcUNYLFdBQVcsQ0FBQ1UsV0FBWixFQUFyQyxDQUFQO0FBQ0gsR0FGZ0IsRUFFZEUsSUFGYyxD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QUFBQSxtQkFEaUI7QUFBQSxTQUFwQixDQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRyxFQXdCRkgsUUFBUSxDQUFDeUIsTUFBVCxLQUFvQixDQUFwQixHQUF3QixZQUF4QixHQUF1QyxFQXhCckM7QUFBQSxrQkFBUDtBQTBCSDs7R0F2Q3VCakMsUTs7S0FBQUEsUSIsImZpbGUiOiIuL3NyYy9wcm9ibGVtcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Byb2JsZW1zLm1vZHVsZS5jc3MnO1xuaW1wb3J0ICogYXMgZGF0YSBmcm9tICcuLi9kYXRhL3Byb2JsZW1zLmpzb24nO1xuXG5jb25zdCBwcm9ibGVtcyA9IGRhdGEuZGVmYXVsdDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvYmxlbXMoKSB7XG4gICAgY29uc3QgW2ZpbHRlcklucHV0LCBzZXRGaWx0ZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbc29ydEtleSwgc2V0U29ydEtleV0gPSB1c2VTdGF0ZShcIlllYXJcIik7XG4gICAgY29uc3QgW2FzY2VuZGluZywgc2V0QXNjZW5kaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3QgZmlsdGVyZWQgPSBwcm9ibGVtcy5maWx0ZXIocHJvYmxlbSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9ibGVtLlRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVySW5wdXQudG9Mb3dlckNhc2UoKSk7XG4gICAgfSkuc29ydCgocDEsIHAyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNtcCA9IHAxW3NvcnRLZXldIC0gcDJbc29ydEtleV07XG4gICAgICAgIGNvbnN0IGNtcDIgPSBwMVtzb3J0S2V5XS5sb2NhbGVDb21wYXJlKHAyW3NvcnRLZXldKTtcbiAgICAgICAgcmV0dXJuIChhc2NlbmRpbmcgPyAxIDogLTEpICogKCFpc05hTihjbXApID8gY21wIDogKDIgKiBwMVtzb3J0S2V5XS5sb2NhbGVDb21wYXJlKHAyW3NvcnRLZXldKSAtIDEpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiA8PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICBMaXN0IG9mIEFkdmVudCBvZiBDb2RlIHByb2JsZW1zLCBmaWx0ZXJhYmxlIGJ5IHRpdGxlLCB5ZWFyLCB0b3BpY3MgZXRjLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxsYWJlbD5GaWx0ZXI6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtmaWx0ZXJJbnB1dH0gb25DaGFuZ2U9eyh4KSA9PiBzZXRGaWx0ZXJJbnB1dCh4LnRhcmdldC52YWx1ZSl9Lz48L2xhYmVsPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAge09iamVjdC5rZXlzKHByb2JsZW1zWzBdKS5tYXAoa2V5ID0+IDx0aCBrZXk9e2tleX0+PGJ1dHRvbiBjbGFzc05hbWU9e3NvcnRLZXk9PT1rZXkgPyBzdHlsZXMuc2VsZWN0ZWQgOiBzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRLZXkgPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFzY2VuZGluZyghYXNjZW5kaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRBc2NlbmRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRTb3J0S2V5KGtleSk7XG4gICAgICAgICAgICB9fT57a2V5fSB7c29ydEtleT09PWtleSA/IChhc2NlbmRpbmcgPyA8aSBjbGFzc05hbWU9XCJkb3duIGFycm93XCIvPiA6IDxpIGNsYXNzTmFtZT1cInVwIGFycm93XCIvPikgOiBcIlwifTwvYnV0dG9uPjwvdGg+KX1cbiAgICAgICAgPC90cj5cbiAgICAgICAge2ZpbHRlcmVkLm1hcChwcm9ibGVtID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e3Byb2JsZW0uVGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHByb2JsZW0pLm1hcChrZXkgPT4gPHRkPntrZXk9PVwiVGl0bGVcIiA/IDxhIGhyZWY9XCJodHRwczovL2FkdmVudG9mY29kZS5jb20vMjAyMC9kYXkvMjBcIj57cHJvYmxlbVtrZXldfTwvYT4gOiBwcm9ibGVtW2tleV19PC90ZD4pfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtmaWx0ZXJlZC5sZW5ndGggPT09IDAgPyBcIk5vIHJlc3VsdHNcIiA6IFwiXCJ9XG4gICAgPC8+XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/problems.js\n");

/***/ })

})