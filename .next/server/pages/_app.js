/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/saga/saga.ts":
/*!**************************!*\
  !*** ./api/saga/saga.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ root),\n/* harmony export */   \"sagaWatcherGetPosts\": () => (/* binding */ sagaWatcherGetPosts),\n/* harmony export */   \"sagaWatcherPost\": () => (/* binding */ sagaWatcherPost)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/action */ \"./store/actions/action.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst takeEveryUp = redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeEvery;\nfunction* sagaWatcherGetPosts() {\n  yield takeEveryUp(_store_actions_action__WEBPACK_IMPORTED_MODULE_2__.REQUEST_POSTS, sagaWorkerGetPosts);\n}\n\nfunction* sagaWorkerGetPosts() {\n  try {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_store_actions_action__WEBPACK_IMPORTED_MODULE_2__.postsLoading)());\n    const payload = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get, `https://simple-blog-api.crew.red/posts`);\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_store_actions_action__WEBPACK_IMPORTED_MODULE_2__.postsSuccess)(payload.data));\n  } catch (e) {\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_store_actions_action__WEBPACK_IMPORTED_MODULE_2__.postsFail)());\n  }\n}\n\nfunction* sagaWatcherPost() {\n  yield takeEveryUp(_store_actions_action__WEBPACK_IMPORTED_MODULE_2__.POST_POSTS, sagaWorkerPosts);\n}\n\nfunction* sagaWorkerPosts({\n  title,\n  body\n}) {\n  try {\n    const payload = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post, `https://simple-blog-api.crew.red/posts`, {\n      title,\n      body\n    });\n    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)((0,_store_actions_action__WEBPACK_IMPORTED_MODULE_2__.postsSuccess)(payload.data));\n  } catch (e) {}\n}\n\nfunction* root() {\n  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(sagaWatcherGetPosts), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(sagaWatcherPost)]);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvc2FnYS9zYWdhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNVyxXQUFnQixHQUFHTix5REFBekI7QUFFTyxVQUFVTyxtQkFBVixHQUFnQztFQUNyQyxNQUFNRCxXQUFXLENBQUNMLGdFQUFELEVBQWdCTyxrQkFBaEIsQ0FBakI7QUFDRDs7QUFFRCxVQUFVQSxrQkFBVixHQUErQjtFQUM3QixJQUFJO0lBQ0YsTUFBTVQsdURBQUcsQ0FBQ0ksbUVBQVksRUFBYixDQUFUO0lBQ0EsTUFBTU0sT0FBTyxHQUFHLE1BQU1aLHdEQUFJLENBQUNGLGlEQUFELEVBQWEsd0NBQWIsQ0FBMUI7SUFDQSxNQUFNSSx1REFBRyxDQUFDRyxtRUFBWSxDQUFDTyxPQUFPLENBQUNFLElBQVQsQ0FBYixDQUFUO0VBQ0QsQ0FKRCxDQUlFLE9BQU9DLENBQVAsRUFBVTtJQUNWLE1BQU1iLHVEQUFHLENBQUNLLGdFQUFTLEVBQVYsQ0FBVDtFQUNEO0FBQ0Y7O0FBRU0sVUFBVVMsZUFBVixHQUE0QjtFQUNqQyxNQUFNUCxXQUFXLENBQUNELDZEQUFELEVBQWFTLGVBQWIsQ0FBakI7QUFDRDs7QUFFRCxVQUFVQSxlQUFWLENBQTBCO0VBQUVDLEtBQUY7RUFBU0M7QUFBVCxDQUExQixFQUE0RTtFQUMxRSxJQUFJO0lBQ0YsTUFBTVAsT0FBTyxHQUFHLE1BQU1aLHdEQUFJLENBQUNGLGtEQUFELEVBQWMsd0NBQWQsRUFBdUQ7TUFBRW9CLEtBQUY7TUFBU0M7SUFBVCxDQUF2RCxDQUExQjtJQUNBLE1BQU1qQix1REFBRyxDQUFDRyxtRUFBWSxDQUFDTyxPQUFPLENBQUNFLElBQVQsQ0FBYixDQUFUO0VBQ0QsQ0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVSxDQUFFO0FBQ2Y7O0FBRWMsVUFBVU0sSUFBVixHQUFpQjtFQUM5QixNQUFNdEIsdURBQUcsQ0FBQyxDQUFDRSx3REFBSSxDQUFDUyxtQkFBRCxDQUFMLEVBQTRCVCx3REFBSSxDQUFDZSxlQUFELENBQWhDLENBQUQsQ0FBVDtBQUNELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0X2pzLy4vYXBpL3NhZ2Evc2FnYS50cz83MzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgeyBSRVFVRVNUX1BPU1RTLCBwb3N0c1N1Y2Nlc3MsIHBvc3RzTG9hZGluZywgcG9zdHNGYWlsLCBQT1NUX1BPU1RTIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb24nO1xyXG5cclxuY29uc3QgdGFrZUV2ZXJ5VXA6IGFueSA9IHRha2VFdmVyeTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogc2FnYVdhdGNoZXJHZXRQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlRXZlcnlVcChSRVFVRVNUX1BPU1RTLCBzYWdhV29ya2VyR2V0UG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2FnYVdvcmtlckdldFBvc3RzKCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBwdXQocG9zdHNMb2FkaW5nKCkpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHlpZWxkIGNhbGwoYXhpb3MuZ2V0LCBgaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHNgKTtcclxuICAgIHlpZWxkIHB1dChwb3N0c1N1Y2Nlc3MocGF5bG9hZC5kYXRhKSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgeWllbGQgcHV0KHBvc3RzRmFpbCgpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogc2FnYVdhdGNoZXJQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VFdmVyeVVwKFBPU1RfUE9TVFMsIHNhZ2FXb3JrZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzYWdhV29ya2VyUG9zdHMoeyB0aXRsZSwgYm9keSB9OiB7IHRpdGxlOiBzdHJpbmc7IGJvZHk6IHN0cmluZyB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB5aWVsZCBjYWxsKGF4aW9zLnBvc3QsIGBodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0c2AsIHsgdGl0bGUsIGJvZHkgfSk7XHJcbiAgICB5aWVsZCBwdXQocG9zdHNTdWNjZXNzKHBheWxvYWQuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGUpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290KCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhzYWdhV2F0Y2hlckdldFBvc3RzKSwgZm9yayhzYWdhV2F0Y2hlclBvc3QpXSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiYWxsIiwiY2FsbCIsImZvcmsiLCJwdXQiLCJ0YWtlRXZlcnkiLCJSRVFVRVNUX1BPU1RTIiwicG9zdHNTdWNjZXNzIiwicG9zdHNMb2FkaW5nIiwicG9zdHNGYWlsIiwiUE9TVF9QT1NUUyIsInRha2VFdmVyeVVwIiwic2FnYVdhdGNoZXJHZXRQb3N0cyIsInNhZ2FXb3JrZXJHZXRQb3N0cyIsInBheWxvYWQiLCJnZXQiLCJkYXRhIiwiZSIsInNhZ2FXYXRjaGVyUG9zdCIsInNhZ2FXb3JrZXJQb3N0cyIsInRpdGxlIiwiYm9keSIsInBvc3QiLCJyb290Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/saga/saga.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/global.css */ \"./style/global.css\");\n/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_global_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_2__]);\n_store_store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\tested\\\\NEXT_example\\\\next_simple_aplication\\\\pages\\\\_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\nconst makeStore = () => _store_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper.withRedux(MyApp));\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsU0FBU0csS0FBVCxDQUFlO0VBQUVDLFNBQUY7RUFBYUM7QUFBYixDQUFmLEVBQW1EO0VBQ2pELG9CQUNFLDhEQUFDLGlEQUFEO0lBQVUsS0FBSyxFQUFFSixvREFBakI7SUFBQSx1QkFDRSw4REFBQyxTQUFELG9CQUFlSSxTQUFmO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFLRDs7QUFDRCxNQUFNQyxTQUFTLEdBQUcsTUFBTUwsb0RBQXhCOztBQUNBLE1BQU1NLE9BQU8sR0FBR0wsaUVBQWEsQ0FBQ0ksU0FBRCxDQUE3QjtBQUVBLGlFQUFlQyxPQUFPLENBQUNDLFNBQVIsQ0FBa0JMLEtBQWxCLENBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfanMvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGUvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIl0sIm5hbWVzIjpbIlByb3ZpZGVyIiwic3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWtlU3RvcmUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/actions/action.ts":
/*!*********************************!*\
  !*** ./store/actions/action.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"POSTS_FAIL\": () => (/* binding */ POSTS_FAIL),\n/* harmony export */   \"POSTS_LOADING\": () => (/* binding */ POSTS_LOADING),\n/* harmony export */   \"POSTS_SUCCESS\": () => (/* binding */ POSTS_SUCCESS),\n/* harmony export */   \"POST_POSTS\": () => (/* binding */ POST_POSTS),\n/* harmony export */   \"REQUEST_POSTS\": () => (/* binding */ REQUEST_POSTS),\n/* harmony export */   \"postPosts\": () => (/* binding */ postPosts),\n/* harmony export */   \"postsFail\": () => (/* binding */ postsFail),\n/* harmony export */   \"postsLoading\": () => (/* binding */ postsLoading),\n/* harmony export */   \"postsSuccess\": () => (/* binding */ postsSuccess),\n/* harmony export */   \"requestPosts\": () => (/* binding */ requestPosts)\n/* harmony export */ });\nconst POSTS_LOADING = 'POSTS_LOADING';\nconst POSTS_FAIL = 'POSTS_FAIL';\nconst POSTS_SUCCESS = 'POSTS_SUCCESS';\nconst REQUEST_POSTS = 'REQUEST_POSTS';\nconst POST_POSTS = 'POST_POSTS';\nconst postsLoading = () => ({\n  type: POSTS_LOADING\n});\nconst postsFail = () => ({\n  type: POSTS_FAIL\n});\nconst postsSuccess = payload => ({\n  type: POSTS_SUCCESS,\n  payload\n});\nconst requestPosts = () => ({\n  type: REQUEST_POSTS\n});\nconst postPosts = (title, body) => ({\n  type: POST_POSTS,\n  title,\n  body\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL2FjdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRU8sTUFBTUEsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBRUEsTUFBTUMsWUFBWSxHQUFHLE9BQU87RUFBRUMsSUFBSSxFQUFFTjtBQUFSLENBQVAsQ0FBckI7QUFDQSxNQUFNTyxTQUFTLEdBQUcsT0FBTztFQUFFRCxJQUFJLEVBQUVMO0FBQVIsQ0FBUCxDQUFsQjtBQUNBLE1BQU1PLFlBQVksR0FBSUMsT0FBRCxLQUEyQjtFQUNyREgsSUFBSSxFQUFFSixhQUQrQztFQUVyRE87QUFGcUQsQ0FBM0IsQ0FBckI7QUFJQSxNQUFNQyxZQUFZLEdBQUcsT0FBTztFQUFFSixJQUFJLEVBQUVIO0FBQVIsQ0FBUCxDQUFyQjtBQUNBLE1BQU1RLFNBQVMsR0FBRyxDQUFDQyxLQUFELEVBQWdCQyxJQUFoQixNQUFrQztFQUN6RFAsSUFBSSxFQUFFRixVQURtRDtFQUV6RFEsS0FGeUQ7RUFHekRDO0FBSHlELENBQWxDLENBQWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9qcy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLnRzP2YwNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zdHNUeXBlIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBPU1RTX0xPQURJTkcgPSAnUE9TVFNfTE9BRElORyc7XHJcbmV4cG9ydCBjb25zdCBQT1NUU19GQUlMID0gJ1BPU1RTX0ZBSUwnO1xyXG5leHBvcnQgY29uc3QgUE9TVFNfU1VDQ0VTUyA9ICdQT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUE9TVFMgPSAnUkVRVUVTVF9QT1NUUyc7XHJcbmV4cG9ydCBjb25zdCBQT1NUX1BPU1RTID0gJ1BPU1RfUE9TVFMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzTG9hZGluZyA9ICgpID0+ICh7IHR5cGU6IFBPU1RTX0xPQURJTkcgfSk7XHJcbmV4cG9ydCBjb25zdCBwb3N0c0ZhaWwgPSAoKSA9PiAoeyB0eXBlOiBQT1NUU19GQUlMIH0pO1xyXG5leHBvcnQgY29uc3QgcG9zdHNTdWNjZXNzID0gKHBheWxvYWQ6IFBvc3RzVHlwZVtdKSA9PiAoe1xyXG4gIHR5cGU6IFBPU1RTX1NVQ0NFU1MsXHJcbiAgcGF5bG9hZCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0UG9zdHMgPSAoKSA9PiAoeyB0eXBlOiBSRVFVRVNUX1BPU1RTIH0pO1xyXG5leHBvcnQgY29uc3QgcG9zdFBvc3RzID0gKHRpdGxlOiBzdHJpbmcsIGJvZHk6IHN0cmluZykgPT4gKHtcclxuICB0eXBlOiBQT1NUX1BPU1RTLFxyXG4gIHRpdGxlLFxyXG4gIGJvZHksXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiUE9TVFNfTE9BRElORyIsIlBPU1RTX0ZBSUwiLCJQT1NUU19TVUNDRVNTIiwiUkVRVUVTVF9QT1NUUyIsIlBPU1RfUE9TVFMiLCJwb3N0c0xvYWRpbmciLCJ0eXBlIiwicG9zdHNGYWlsIiwicG9zdHNTdWNjZXNzIiwicGF5bG9hZCIsInJlcXVlc3RQb3N0cyIsInBvc3RQb3N0cyIsInRpdGxlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/actions/action.ts\n");

/***/ }),

/***/ "./store/slice.ts":
/*!************************!*\
  !*** ./store/slice.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDataUser\": () => (/* binding */ addDataUser),\n/* harmony export */   \"changeStopAvtorized\": () => (/* binding */ changeStopAvtorized),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getDataSliceInfo\": () => (/* binding */ getDataSliceInfo)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  name: '',\n  DT: [],\n  dataAvtorized: {\n    email: '',\n    password: ''\n  },\n  avtorizedStop: true\n};\nconst getDataSliceInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'globalInfo',\n  initialState,\n  reducers: {\n    addDataUser(state, action) {\n      state.dataAvtorized = action.payload;\n    },\n\n    changeStopAvtorized(state, action) {\n      state.avtorizedStop = action.payload;\n    }\n\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataSliceInfo.reducer);\nconst {\n  addDataUser,\n  changeStopAvtorized\n} = getDataSliceInfo.actions;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQWNBLE1BQU1DLFlBQTZCLEdBQUc7RUFDcENDLElBQUksRUFBRSxFQUQ4QjtFQUVwQ0MsRUFBRSxFQUFFLEVBRmdDO0VBR3BDQyxhQUFhLEVBQUU7SUFDYkMsS0FBSyxFQUFFLEVBRE07SUFFYkMsUUFBUSxFQUFFO0VBRkcsQ0FIcUI7RUFPcENDLGFBQWEsRUFBRTtBQVBxQixDQUF0QztBQVVPLE1BQU1DLGdCQUFnQixHQUFHUiw2REFBVyxDQUFDO0VBQzFDRSxJQUFJLEVBQUUsWUFEb0M7RUFFMUNELFlBRjBDO0VBRzFDUSxRQUFRLEVBQUU7SUFDUkMsV0FBVyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0I7TUFDekJELEtBQUssQ0FBQ1AsYUFBTixHQUFzQlEsTUFBTSxDQUFDQyxPQUE3QjtJQUNELENBSE87O0lBSVJDLG1CQUFtQixDQUFDSCxLQUFELEVBQVFDLE1BQVIsRUFBZ0I7TUFDakNELEtBQUssQ0FBQ0osYUFBTixHQUFzQkssTUFBTSxDQUFDQyxPQUE3QjtJQUNEOztFQU5PO0FBSGdDLENBQUQsQ0FBcEM7QUFhUCxpRUFBZUwsZ0JBQWdCLENBQUNPLE9BQWhDO0FBQ08sTUFBTTtFQUFFTCxXQUFGO0VBQWVJO0FBQWYsSUFBdUNOLGdCQUFnQixDQUFDUSxPQUE5RCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfanMvLi9zdG9yZS9zbGljZS50cz9hNmZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5pbnRlcmZhY2UgSURhdGFVc2VySW5mbyB7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR2xvYmFsSW5mb1N0YXRlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgRFQ6IGFueVtdO1xyXG4gIGRhdGFBdnRvcml6ZWQ6IElEYXRhVXNlckluZm87XHJcbiAgYXZ0b3JpemVkU3RvcDogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBHbG9iYWxJbmZvU3RhdGUgPSB7XHJcbiAgbmFtZTogJycsXHJcbiAgRFQ6IFtdLFxyXG4gIGRhdGFBdnRvcml6ZWQ6IHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9LFxyXG4gIGF2dG9yaXplZFN0b3A6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNsaWNlSW5mbyA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnZ2xvYmFsSW5mbycsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGREYXRhVXNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmRhdGFBdnRvcml6ZWQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VTdG9wQXZ0b3JpemVkKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuYXZ0b3JpemVkU3RvcCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERhdGFTbGljZUluZm8ucmVkdWNlcjtcclxuZXhwb3J0IGNvbnN0IHsgYWRkRGF0YVVzZXIsIGNoYW5nZVN0b3BBdnRvcml6ZWQgfSA9IGdldERhdGFTbGljZUluZm8uYWN0aW9ucztcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibmFtZSIsIkRUIiwiZGF0YUF2dG9yaXplZCIsImVtYWlsIiwicGFzc3dvcmQiLCJhdnRvcml6ZWRTdG9wIiwiZ2V0RGF0YVNsaWNlSW5mbyIsInJlZHVjZXJzIiwiYWRkRGF0YVVzZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJjaGFuZ2VTdG9wQXZ0b3JpemVkIiwicmVkdWNlciIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slice.ts\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice */ \"./store/slice.ts\");\n/* harmony import */ var _api_saga_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/saga/saga */ \"./api/saga/saga.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([redux_saga__WEBPACK_IMPORTED_MODULE_1__, _api_saga_saga__WEBPACK_IMPORTED_MODULE_3__]);\n([redux_saga__WEBPACK_IMPORTED_MODULE_1__, _api_saga_saga__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst sagaMiddleware = (0,redux_saga__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: _slice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  middleware: getDefaultMiddleware => getDefaultMiddleware({\n    thunk: false\n  }).concat(sagaMiddleware)\n});\nsagaMiddleware.run(_api_saga_saga__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNSSxjQUFjLEdBQUdILHNEQUFvQixFQUEzQztBQUVPLE1BQU1JLEtBQUssR0FBR0wsZ0VBQWMsQ0FBQztFQUNsQ00sT0FBTyxFQUFFSiw4Q0FEeUI7RUFFbENLLFVBQVUsRUFBR0Msb0JBQUQsSUFDVkEsb0JBQW9CLENBQUM7SUFDbkJDLEtBQUssRUFBRTtFQURZLENBQUQsQ0FBcEIsQ0FFR0MsTUFGSCxDQUVVTixjQUZWO0FBSGdDLENBQUQsQ0FBNUI7QUFRUEEsY0FBYyxDQUFDTyxHQUFmLENBQW1CUixzREFBbkI7QUFPQSxpRUFBZUUsS0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9qcy8uL3N0b3JlL3N0b3JlLnRzPzEyZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIEVuaGFuY2VkU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlLCB7IFRhc2sgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vc2xpY2UnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vYXBpL3NhZ2Evc2FnYSc7XHJcblxyXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXHJcbiAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxyXG4gICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xyXG4gICAgICB0aHVuazogZmFsc2UsXHJcbiAgICB9KS5jb25jYXQoc2FnYU1pZGRsZXdhcmUpLFxyXG59KTtcclxuXHJcbnNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcblxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XHJcbmV4cG9ydCB0eXBlIEFwcFN0b3JlID0gRW5oYW5jZWRTdG9yZTxSb290U3RhdGU+ICYge1xyXG4gIHNhZ2FUYXNrPzogVGFzaztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInJvb3RSZWR1Y2VyIiwicm9vdFNhZ2EiLCJzYWdhTWlkZGxld2FyZSIsInN0b3JlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInRodW5rIiwiY29uY2F0IiwicnVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "./style/global.css":
/*!**************************!*\
  !*** ./style/global.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();