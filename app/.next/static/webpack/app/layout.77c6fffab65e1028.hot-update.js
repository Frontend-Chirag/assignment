"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b79cb0be471c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3R5bGVzL2dsb2JhbC5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzP2I2ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiNzljYjBiZTQ3MWNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./styles/global.css\n"));

/***/ }),

/***/ "(app-client)/./public/profile.avif":
/*!*****************************!*\
  !*** ./public/profile.avif ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/profile.02943842.avif\",\"height\":750,\"width\":500,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.02943842.avif&w=5&q=70\",\"blurWidth\":5,\"blurHeight\":8});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vcHVibGljL3Byb2ZpbGUuYXZpZiIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsQ0FBQyxvTUFBb00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVibGljL3Byb2ZpbGUuYXZpZj9hNWRkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9wcm9maWxlLjAyOTQzODQyLmF2aWZcIixcImhlaWdodFwiOjc1MCxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZtZWRpYSUyRnByb2ZpbGUuMDI5NDM4NDIuYXZpZiZ3PTUmcT03MFwiLFwiYmx1cldpZHRoXCI6NSxcImJsdXJIZWlnaHRcIjo4fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./public/profile.avif\n"));

/***/ }),

/***/ "(app-client)/./components/UserProfile.jsx":
/*!************************************!*\
  !*** ./components/UserProfile.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"(app-client)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ \"(app-client)/./styles/global.css\");\n/* harmony import */ var _public_profile_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/profile.avif */ \"(app-client)/./public/profile.avif\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst UserProfile = (param)=>{\n    let { userWidth } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: userWidth ? \"fullwidth\" : \"nav-Width\",\n        sx: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            gap: \"2rem\",\n            color: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: userWidth ? \"full-Avatar\" : \"nav-Avatar\",\n                src: _public_profile_avif__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\UserProfile.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"h6\",\n                children: \"Jordan\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\UserProfile.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\next-assignment\\\\components\\\\UserProfile.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2RDtBQUNuQztBQUNJO0FBQ2U7QUFFN0MsTUFBTUssY0FBYztRQUFDLEVBQUNDLFNBQVMsRUFBQztJQUU5QixxQkFDRSw4REFBQ0wscURBQVNBO1FBQUVNLFdBQVdELFlBQVksY0FBYztRQUFhRSxJQUFJO1lBQUVDLFNBQVM7WUFBT0MsZ0JBQWU7WUFBZ0JDLFlBQVk7WUFBU0MsS0FBSTtZQUFRQyxPQUFNO1FBQU87OzBCQUMvSiw4REFBQ2IscURBQU1BO2dCQUFDTyxXQUFXRCxZQUFZLGdCQUFlO2dCQUFjUSxLQUFLViw0REFBT0E7Ozs7OzswQkFDeEUsOERBQUNGLHFEQUFVQTtnQkFBQ2EsU0FBUTswQkFBSzs7Ozs7Ozs7Ozs7O0FBRy9CO0tBUk1WO0FBVU4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qc3g/OGJkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ29udGFpbmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCBwcm9maWxlIGZyb20gJy4uL3B1YmxpYy9wcm9maWxlLmF2aWYnO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoe3VzZXJXaWR0aH0pID0+IHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciAgY2xhc3NOYW1lPXt1c2VyV2lkdGggPyAnZnVsbHdpZHRoJyA6ICduYXYtV2lkdGgnfSBzeD17eyBkaXNwbGF5OiAnZmxleCcsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nLGFsaWduSXRlbXM6ICdjZW50ZXInLGdhcDonMnJlbScsIGNvbG9yOid3aGl0ZSd9fT5cclxuICAgICAgPEF2YXRhciBjbGFzc05hbWU9e3VzZXJXaWR0aCA/ICdmdWxsLUF2YXRhcic6ICduYXYtQXZhdGFyJ30gc3JjPXtwcm9maWxlfT48L0F2YXRhcj5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPkpvcmRhbjwvVHlwb2dyYXBoeT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGUiXSwibmFtZXMiOlsiQXZhdGFyIiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIlJlYWN0IiwicHJvZmlsZSIsIlVzZXJQcm9maWxlIiwidXNlcldpZHRoIiwiY2xhc3NOYW1lIiwic3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZ2FwIiwiY29sb3IiLCJzcmMiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/UserProfile.jsx\n"));

/***/ })

});