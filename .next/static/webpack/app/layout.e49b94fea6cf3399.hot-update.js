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

/***/ "(app-pages-browser)/./src/containers/navContainer.tsx":
/*!*****************************************!*\
  !*** ./src/containers/navContainer.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/navContainer.module.css */ \"(app-pages-browser)/./src/styles/navContainer.module.css\");\n/* harmony import */ var _styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction NavContainer() {\n    _s();\n    const [navTrueFalse, setNavTrueFalse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const navOpen = ()=>{\n        setNavTrueFalse(!navTrueFalse);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const hamburger = document.querySelectorAll(\".hamburgerSpan\");\n        hamburger.forEach((span)=>{\n            if (navTrueFalse) {\n                span.classList.add(\"active\");\n            } else {\n                span.classList.remove(\"active\");\n            }\n        });\n    }, [\n        navTrueFalse\n    ]);\n    const summary = ()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(window, {\n            duration: 0.8,\n            scrollTo: {\n                y: \"#summarySection\"\n            }\n        });\n    };\n    const about = ()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(window, {\n            duration: 0.8,\n            scrollTo: \"#aboutSection\"\n        });\n    };\n    const skills = ()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(window, {\n            duration: 0.8,\n            scrollTo: \"#skillsSection\"\n        });\n    };\n    const project = ()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(window, {\n            duration: 0.8,\n            scrollTo: \"#projectSection\"\n        });\n    };\n    const contact = ()=>{\n        gsap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].to(window, {\n            duration: 0.8,\n            scrollTo: \"#contactSection\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().navDiv),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().navList), \" \").concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().container)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolioLogo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                href: \"/\",\n                                children: \"oggn's portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().navArea),\n                        style: {\n                            minWidth: navTrueFalse ? \"200px\" : \"0\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"summary\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkList),\n                                onClick: summary,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"about\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkList),\n                                onClick: about,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"skills\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkList),\n                                onClick: skills,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"Skills\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"project\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkList),\n                                onClick: project,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"Project\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"contact\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkList),\n                                onClick: contact,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburgerDiv),\n                        onClick: navOpen,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburgerSpan), \" \").concat(navTrueFalse ? (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburgerSpan), \" \").concat(navTrueFalse ? (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburgerSpan), \" \").concat(navTrueFalse ? (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburgerSpan), \" \").concat(navTrueFalse ? (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(NavContainer, \"/t4rylYO8+ruAm7Kn6wpUBdURGE=\");\n_c = NavContainer;\nvar _c;\n$RefreshReg$(_c, \"NavContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250YWluZXJzL25hdkNvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDZTtBQUNVO0FBQzlCO0FBQ1QsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1NLFVBQVU7UUFDZEQsZ0JBQWdCLENBQUNEO0lBQ25CO0lBRUFMLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsWUFBWUMsU0FBU0MsZ0JBQWdCLENBQUM7UUFDNUNGLFVBQVVHLE9BQU8sQ0FBQyxDQUFDQztZQUNqQixJQUFJUCxjQUFjO2dCQUNoQk8sS0FBS0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDckIsT0FBTztnQkFDTEYsS0FBS0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7WUFDeEI7UUFDRjtJQUNGLEdBQUc7UUFBQ1Y7S0FBYTtJQUVqQixNQUFNVyxVQUFVO1FBQ2RiLDRDQUFJQSxDQUFDYyxFQUFFLENBQUNDLFFBQVE7WUFDZEMsVUFBVTtZQUNWQyxVQUFVO2dCQUNSQyxHQUFHO1lBQ0w7UUFDRjtJQUNGO0lBQ0EsTUFBTUMsUUFBUTtRQUNabkIsNENBQUlBLENBQUNjLEVBQUUsQ0FBQ0MsUUFBUTtZQUNkQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtJQUNGO0lBQ0EsTUFBTUcsU0FBUztRQUNicEIsNENBQUlBLENBQUNjLEVBQUUsQ0FBQ0MsUUFBUTtZQUNkQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtJQUNGO0lBQ0EsTUFBTUksVUFBVTtRQUNkckIsNENBQUlBLENBQUNjLEVBQUUsQ0FBQ0MsUUFBUTtZQUNkQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtJQUNGO0lBQ0EsTUFBTUssVUFBVTtRQUNkdEIsNENBQUlBLENBQUNjLEVBQUUsQ0FBQ0MsUUFBUTtZQUNkQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtJQUNGO0lBQ0EscUJBQ0U7a0JBQ0UsNEVBQUNNO1lBQUlDLFdBQVd6QiwrRUFBWTtzQkFDMUIsNEVBQUMyQjtnQkFBSUYsV0FBVyxHQUFvQnpCLE9BQWpCQSxnRkFBYSxFQUFDLEtBQW1CLE9BQWhCQSxrRkFBZTs7a0NBQ2pELDhEQUFDOEI7a0NBQ0MsNEVBQUNDOzRCQUFHTixXQUFXekIsc0ZBQW1CO3NDQUNoQyw0RUFBQ0gsa0RBQUlBO2dDQUFDNEIsV0FBV3pCLDZFQUFVO2dDQUFFa0MsTUFBSzswQ0FBSTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLMUMsOERBQUNKO3dCQUNDTCxXQUFXekIsZ0ZBQWE7d0JBQ3hCQSxPQUFPOzRCQUFFb0MsVUFBVWpDLGVBQWUsVUFBVTt3QkFBSTs7MENBRWhELDhEQUFDNEI7Z0NBQUdNLElBQUc7Z0NBQVVaLFdBQVd6QixpRkFBYztnQ0FBRXVDLFNBQVN6QjswQ0FDbkQsNEVBQUNqQixrREFBSUE7b0NBQUM0QixXQUFXekIsNkVBQVU7b0NBQUVrQyxNQUFLOzhDQUFxQjs7Ozs7Ozs7Ozs7MENBSXpELDhEQUFDSDtnQ0FBR00sSUFBRztnQ0FBUVosV0FBV3pCLGlGQUFjO2dDQUFFdUMsU0FBU25COzBDQUNqRCw0RUFBQ3ZCLGtEQUFJQTtvQ0FBQzRCLFdBQVd6Qiw2RUFBVTtvQ0FBRWtDLE1BQUs7OENBQXFCOzs7Ozs7Ozs7OzswQ0FJekQsOERBQUNIO2dDQUFHTSxJQUFHO2dDQUFTWixXQUFXekIsaUZBQWM7Z0NBQUV1QyxTQUFTbEI7MENBQ2xELDRFQUFDeEIsa0RBQUlBO29DQUFDNEIsV0FBV3pCLDZFQUFVO29DQUFFa0MsTUFBSzs4Q0FBcUI7Ozs7Ozs7Ozs7OzBDQUl6RCw4REFBQ0g7Z0NBQUdNLElBQUc7Z0NBQVVaLFdBQVd6QixpRkFBYztnQ0FBRXVDLFNBQVNqQjswQ0FDbkQsNEVBQUN6QixrREFBSUE7b0NBQUM0QixXQUFXekIsNkVBQVU7b0NBQUVrQyxNQUFLOzhDQUFxQjs7Ozs7Ozs7Ozs7MENBSXpELDhEQUFDSDtnQ0FBR00sSUFBRztnQ0FBVVosV0FBV3pCLGlGQUFjO2dDQUFFdUMsU0FBU2hCOzBDQUNuRCw0RUFBQzFCLGtEQUFJQTtvQ0FBQzRCLFdBQVd6Qiw2RUFBVTtvQ0FBRWtDLE1BQUs7OENBQXFCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLM0QsOERBQUNQO3dCQUFJRixXQUFXekIscUZBQWtCO3dCQUFFdUMsU0FBU2xDO2tDQUMzQyw0RUFBQ3NCOzRCQUFJRixXQUFXekIsa0ZBQWU7OzhDQUM3Qiw4REFBQ1U7b0NBQ0NlLFdBQVcsR0FDVHRCLE9BRFlILHNGQUFtQixFQUFDLEtBRWpDLE9BRENHLGVBQWVILCtFQUFZLEdBQUc7Ozs7Ozs4Q0FHbEMsOERBQUNVO29DQUNDZSxXQUFXLEdBQ1R0QixPQURZSCxzRkFBbUIsRUFBQyxLQUVqQyxPQURDRyxlQUFlSCwrRUFBWSxHQUFHOzs7Ozs7OENBR2xDLDhEQUFDVTtvQ0FDQ2UsV0FBVyxHQUNUdEIsT0FEWUgsc0ZBQW1CLEVBQUMsS0FFakMsT0FEQ0csZUFBZUgsK0VBQVksR0FBRzs7Ozs7OzhDQUdsQyw4REFBQ1U7b0NBQ0NlLFdBQVcsR0FDVHRCLE9BRFlILHNGQUFtQixFQUFDLEtBRWpDLE9BRENHLGVBQWVILCtFQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2hEO0dBdEh3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvbmF2Q29udGFpbmVyLnRzeD80ODY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvbmF2Q29udGFpbmVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZDb250YWluZXIoKSB7XG4gIGNvbnN0IFtuYXZUcnVlRmFsc2UsIHNldE5hdlRydWVGYWxzZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG5hdk9wZW4gPSAoKSA9PiB7XG4gICAgc2V0TmF2VHJ1ZUZhbHNlKCFuYXZUcnVlRmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oYW1idXJnZXJTcGFuXCIpO1xuICAgIGhhbWJ1cmdlci5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICBpZiAobmF2VHJ1ZUZhbHNlKSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW25hdlRydWVGYWxzZV0pO1xuXG4gIGNvbnN0IHN1bW1hcnkgPSAoKSA9PiB7XG4gICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICBzY3JvbGxUbzoge1xuICAgICAgICB5OiBcIiNzdW1tYXJ5U2VjdGlvblwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICBzY3JvbGxUbzogXCIjYWJvdXRTZWN0aW9uXCIsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHNraWxscyA9ICgpID0+IHtcbiAgICBnc2FwLnRvKHdpbmRvdywge1xuICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgIHNjcm9sbFRvOiBcIiNza2lsbHNTZWN0aW9uXCIsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgIGR1cmF0aW9uOiAwLjgsXG4gICAgICBzY3JvbGxUbzogXCIjcHJvamVjdFNlY3Rpb25cIixcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgICBnc2FwLnRvKHdpbmRvdywge1xuICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgIHNjcm9sbFRvOiBcIiNjb250YWN0U2VjdGlvblwiLFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGUubmF2RGl2fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkxpc3R9ICR7c3R5bGUuY29udGFpbmVyfWB9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLnBvcnRmb2xpb0xvZ299PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgb2dnbidzIHBvcnRmb2xpb1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm5hdkFyZWF9XG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogbmF2VHJ1ZUZhbHNlID8gXCIyMDBweFwiIDogXCIwXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGkgaWQ9XCJzdW1tYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZS5saW5rTGlzdH0gb25DbGljaz17c3VtbWFyeX0+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGUubGlua30gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPlxuICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBpZD1cImFib3V0XCIgY2xhc3NOYW1lPXtzdHlsZS5saW5rTGlzdH0gb25DbGljaz17YWJvdXR9PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGlkPVwic2tpbGxzXCIgY2xhc3NOYW1lPXtzdHlsZS5saW5rTGlzdH0gb25DbGljaz17c2tpbGxzfT5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+XG4gICAgICAgICAgICAgICAgU2tpbGxzXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgaWQ9XCJwcm9qZWN0XCIgY2xhc3NOYW1lPXtzdHlsZS5saW5rTGlzdH0gb25DbGljaz17cHJvamVjdH0+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGUubGlua30gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPlxuICAgICAgICAgICAgICAgIFByb2plY3RcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9e3N0eWxlLmxpbmtMaXN0fSBvbkNsaWNrPXtjb250YWN0fT5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+XG4gICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhhbWJ1cmdlckRpdn0gb25DbGljaz17bmF2T3Blbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGFtYnVyZ2VyfT5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmhhbWJ1cmdlclNwYW59ICR7XG4gICAgICAgICAgICAgICAgICBuYXZUcnVlRmFsc2UgPyBzdHlsZS5hY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5oYW1idXJnZXJTcGFufSAke1xuICAgICAgICAgICAgICAgICAgbmF2VHJ1ZUZhbHNlID8gc3R5bGUuYWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUuaGFtYnVyZ2VyU3Bhbn0gJHtcbiAgICAgICAgICAgICAgICAgIG5hdlRydWVGYWxzZSA/IHN0eWxlLmFjdGl2ZSA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmhhbWJ1cmdlclNwYW59ICR7XG4gICAgICAgICAgICAgICAgICBuYXZUcnVlRmFsc2UgPyBzdHlsZS5hY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsImdzYXAiLCJOYXZDb250YWluZXIiLCJuYXZUcnVlRmFsc2UiLCJzZXROYXZUcnVlRmFsc2UiLCJuYXZPcGVuIiwiaGFtYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNwYW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdW1tYXJ5IiwidG8iLCJ3aW5kb3ciLCJkdXJhdGlvbiIsInNjcm9sbFRvIiwieSIsImFib3V0Iiwic2tpbGxzIiwicHJvamVjdCIsImNvbnRhY3QiLCJuYXYiLCJjbGFzc05hbWUiLCJuYXZEaXYiLCJkaXYiLCJuYXZMaXN0IiwiY29udGFpbmVyIiwidWwiLCJsaSIsInBvcnRmb2xpb0xvZ28iLCJsaW5rIiwiaHJlZiIsIm5hdkFyZWEiLCJtaW5XaWR0aCIsImlkIiwibGlua0xpc3QiLCJvbkNsaWNrIiwiaGFtYnVyZ2VyRGl2IiwiaGFtYnVyZ2VyU3BhbiIsImFjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/containers/navContainer.tsx\n"));

/***/ })

});