"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_user_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/user.module.scss */ \"./style/user.module.scss\");\n/* harmony import */ var _style_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_user_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction User(param) {\n    let { user  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { query  } = router;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        keywords: user.name,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_style_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default().block),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Пользователь number \".concat(query.id)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\NEXT\\\\next\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Name User: \".concat(user.name)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\NEXT\\\\next\\\\pages\\\\users\\\\[id].js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\NEXT\\\\next\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                variant: \"contained\",\n                children: \"Contained\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\NEXT\\\\next\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\NEXT\\\\next\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUztBQUNVO0FBQ3BCOztBQUV4QixTQUFTSSxLQUFLLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSOztJQUMzQixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxNQUFLLEVBQUUsR0FBR0Q7SUFDbEIscUJBQ0UsOERBQUNKLGlFQUFhQTtRQUFDTSxVQUFVSCxLQUFLSSxJQUFJOzswQkFDaEMsOERBQUNDO2dCQUFJQyxXQUFXVixzRUFBVzs7a0NBQ3pCLDhEQUFDWTtrQ0FBSSx1QkFBZ0MsT0FBVE4sTUFBTU8sRUFBRTs7Ozs7O2tDQUNwQyw4REFBQ0o7a0NBQUssY0FBd0IsT0FBVkwsS0FBS0ksSUFBSTs7Ozs7Ozs7Ozs7OzBCQUUvQiw4REFBQ04saURBQU1BO2dCQUFDWSxTQUFROzBCQUFZOzs7Ozs7Ozs7Ozs7QUFHbEMsQ0FBQztHQVp1Qlg7O1FBQ1BKLGtEQUFTQTs7O0tBREZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGUvdXNlci5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lclwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xuICByZXR1cm4gKFxuICAgIDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXt1c2VyLm5hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJsb2NrfT5cbiAgICAgICAgPGgxPntg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMIG51bWJlciAke3F1ZXJ5LmlkfWB9PC9oMT5cbiAgICAgICAgPGRpdj57YE5hbWUgVXNlcjogJHt1c2VyLm5hbWV9YH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+Q29udGFpbmVkPC9CdXR0b24+XG4gICAgPC9NYWluQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWBcbiAgKTtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHVzZXIgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZSIsIk1haW5Db250YWluZXIiLCJCdXR0b24iLCJVc2VyIiwidXNlciIsInJvdXRlciIsInF1ZXJ5Iiwia2V5d29yZHMiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvY2siLCJoMSIsImlkIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});