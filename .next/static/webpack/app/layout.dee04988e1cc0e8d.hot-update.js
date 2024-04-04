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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/navContainer.module.css */ \"(app-pages-browser)/./src/styles/navContainer.module.css\");\n/* harmony import */ var _styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction NavContainer() {\n    _s();\n    const [navTrueFalse, setNavTrueFalse] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const navOpen = ()=>{\n        setNavTrueFalse(!navTrueFalse);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const hamburger = document.querySelectorAll(\".hamburgerSpan\");\n        hamburger.forEach((span)=>{\n            if (navTrueFalse) {\n                span.classList.add(\"active\");\n            } else {\n                span.classList.remove(\"active\");\n            }\n        });\n    }, [\n        navTrueFalse\n    ]);\n    const summary = document.getElementById(\"summarySection\");\n    const about = document.getElementById(\"aboutSection\");\n    const skills = document.getElementById(\"skillsSection\");\n    const project = document.getElementById(\"projectSection\");\n    const contact = document.getElementById(\"contactSection\");\n    const summaryFunc = ()=>{\n        if (summary) {\n            window.scrollTo({\n                top: summary.offsetTop,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const aboutFunc = ()=>{\n        if (about) {\n            window.scrollTo({\n                top: about.offsetTop,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const skillsFunc = ()=>{\n        if (skills) {\n            window.scrollTo({\n                top: skills.offsetTop,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const projectFunc = ()=>{\n        window.scrollTo({\n            top: project.offsetTop,\n            behavior: \"smooth\"\n        });\n    };\n    const contactFunc = ()=>{\n        window.scrollTo({\n            top: contact.offsetTop,\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().navDiv),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().navList), \" \").concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().portfolioLogo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                href: \"/\",\n                                children: \"oggn's portfolio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().navArea),\n                        style: {\n                            minWidth: navTrueFalse ? \"200px\" : \"0\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"summary\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkList),\n                                onClick: summaryFunc,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"about\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkList),\n                                onClick: aboutFunc,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"skills\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkList),\n                                onClick: skillsFunc,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"Skills\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"project\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkList),\n                                onClick: projectFunc,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"Project\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: \"contact\",\n                                className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().linkList),\n                                onClick: contactFunc,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                                    href: \"javascript:void(0)\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburgerDiv),\n                        onClick: navOpen,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburger),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburgerSpan), \" \").concat(navTrueFalse ? (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburgerSpan), \" \").concat(navTrueFalse ? (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburgerSpan), \" \").concat(navTrueFalse ? (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"\".concat((_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().hamburgerSpan), \" \").concat(navTrueFalse ? (_styles_navContainer_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/oggn/Desktop/portfolio/src/containers/navContainer.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(NavContainer, \"/t4rylYO8+ruAm7Kn6wpUBdURGE=\");\n_c = NavContainer;\nvar _c;\n$RefreshReg$(_c, \"NavContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250YWluZXJzL25hdkNvbnRhaW5lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNlO0FBQ1U7QUFDdkMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1LLFVBQVU7UUFDZEQsZ0JBQWdCLENBQUNEO0lBQ25CO0lBRUFKLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU8sWUFBWUMsU0FBU0MsZ0JBQWdCLENBQUM7UUFDNUNGLFVBQVVHLE9BQU8sQ0FBQyxDQUFDQztZQUNqQixJQUFJUCxjQUFjO2dCQUNoQk8sS0FBS0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDckIsT0FBTztnQkFDTEYsS0FBS0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7WUFDeEI7UUFDRjtJQUNGLEdBQUc7UUFBQ1Y7S0FBYTtJQUVqQixNQUFNVyxVQUFVUCxTQUFTUSxjQUFjLENBQUM7SUFDeEMsTUFBTUMsUUFBUVQsU0FBU1EsY0FBYyxDQUFDO0lBQ3RDLE1BQU1FLFNBQVNWLFNBQVNRLGNBQWMsQ0FBQztJQUN2QyxNQUFNRyxVQUFVWCxTQUFTUSxjQUFjLENBQUM7SUFDeEMsTUFBTUksVUFBVVosU0FBU1EsY0FBYyxDQUFDO0lBRXhDLE1BQU1LLGNBQWM7UUFDbEIsSUFBSU4sU0FBUztZQUNYTyxPQUFPQyxRQUFRLENBQUM7Z0JBQ2RDLEtBQUtULFFBQVFVLFNBQVM7Z0JBQ3RCQyxVQUFVO1lBQ1o7UUFDRjtJQUNGO0lBQ0EsTUFBTUMsWUFBWTtRQUNoQixJQUFJVixPQUFPO1lBQ1RLLE9BQU9DLFFBQVEsQ0FBQztnQkFDZEMsS0FBS1AsTUFBTVEsU0FBUztnQkFDcEJDLFVBQVU7WUFDWjtRQUNGO0lBQ0Y7SUFDQSxNQUFNRSxhQUFhO1FBQ2pCLElBQUlWLFFBQVE7WUFDVkksT0FBT0MsUUFBUSxDQUFDO2dCQUNkQyxLQUFLTixPQUFPTyxTQUFTO2dCQUNyQkMsVUFBVTtZQUNaO1FBQ0Y7SUFDRjtJQUNBLE1BQU1HLGNBQWM7UUFDbEJQLE9BQU9DLFFBQVEsQ0FBQztZQUNkQyxLQUFLTCxRQUFRTSxTQUFTO1lBQ3RCQyxVQUFVO1FBQ1o7SUFDRjtJQUNBLE1BQU1JLGNBQWM7UUFDbEJSLE9BQU9DLFFBQVEsQ0FBQztZQUNkQyxLQUFLSixRQUFRSyxTQUFTO1lBQ3RCQyxVQUFVO1FBQ1o7SUFDRjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDSztZQUFJQyxXQUFXOUIsK0VBQVk7c0JBQzFCLDRFQUFDZ0M7Z0JBQUlGLFdBQVcsR0FBb0I5QixPQUFqQkEsZ0ZBQWEsRUFBQyxLQUFtQixPQUFoQkEsa0ZBQWU7O2tDQUNqRCw4REFBQ21DO2tDQUNDLDRFQUFDQzs0QkFBR04sV0FBVzlCLHNGQUFtQjtzQ0FDaEMsNEVBQUNILGtEQUFJQTtnQ0FBQ2lDLFdBQVc5Qiw2RUFBVTtnQ0FBRXVDLE1BQUs7MENBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzFDLDhEQUFDSjt3QkFDQ0wsV0FBVzlCLGdGQUFhO3dCQUN4QkEsT0FBTzs0QkFBRXlDLFVBQVV2QyxlQUFlLFVBQVU7d0JBQUk7OzBDQUVoRCw4REFBQ2tDO2dDQUFHTSxJQUFHO2dDQUFVWixXQUFXOUIsaUZBQWM7Z0NBQUU0QyxTQUFTekI7MENBQ25ELDRFQUFDdEIsa0RBQUlBO29DQUFDaUMsV0FBVzlCLDZFQUFVO29DQUFFdUMsTUFBSzs4Q0FBcUI7Ozs7Ozs7Ozs7OzBDQUl6RCw4REFBQ0g7Z0NBQUdNLElBQUc7Z0NBQVFaLFdBQVc5QixpRkFBYztnQ0FBRTRDLFNBQVNuQjswQ0FDakQsNEVBQUM1QixrREFBSUE7b0NBQUNpQyxXQUFXOUIsNkVBQVU7b0NBQUV1QyxNQUFLOzhDQUFxQjs7Ozs7Ozs7Ozs7MENBSXpELDhEQUFDSDtnQ0FBR00sSUFBRztnQ0FBU1osV0FBVzlCLGlGQUFjO2dDQUFFNEMsU0FBU2xCOzBDQUNsRCw0RUFBQzdCLGtEQUFJQTtvQ0FBQ2lDLFdBQVc5Qiw2RUFBVTtvQ0FBRXVDLE1BQUs7OENBQXFCOzs7Ozs7Ozs7OzswQ0FJekQsOERBQUNIO2dDQUFHTSxJQUFHO2dDQUFVWixXQUFXOUIsaUZBQWM7Z0NBQUU0QyxTQUFTakI7MENBQ25ELDRFQUFDOUIsa0RBQUlBO29DQUFDaUMsV0FBVzlCLDZFQUFVO29DQUFFdUMsTUFBSzs4Q0FBcUI7Ozs7Ozs7Ozs7OzBDQUl6RCw4REFBQ0g7Z0NBQUdNLElBQUc7Z0NBQVVaLFdBQVc5QixpRkFBYztnQ0FBRTRDLFNBQVNoQjswQ0FDbkQsNEVBQUMvQixrREFBSUE7b0NBQUNpQyxXQUFXOUIsNkVBQVU7b0NBQUV1QyxNQUFLOzhDQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzNELDhEQUFDUDt3QkFBSUYsV0FBVzlCLHFGQUFrQjt3QkFBRTRDLFNBQVN4QztrQ0FDM0MsNEVBQUM0Qjs0QkFBSUYsV0FBVzlCLGtGQUFlOzs4Q0FDN0IsOERBQUNTO29DQUNDcUIsV0FBVyxHQUNUNUIsT0FEWUYsc0ZBQW1CLEVBQUMsS0FFakMsT0FEQ0UsZUFBZUYsK0VBQVksR0FBRzs7Ozs7OzhDQUdsQyw4REFBQ1M7b0NBQ0NxQixXQUFXLEdBQ1Q1QixPQURZRixzRkFBbUIsRUFBQyxLQUVqQyxPQURDRSxlQUFlRiwrRUFBWSxHQUFHOzs7Ozs7OENBR2xDLDhEQUFDUztvQ0FDQ3FCLFdBQVcsR0FDVDVCLE9BRFlGLHNGQUFtQixFQUFDLEtBRWpDLE9BRENFLGVBQWVGLCtFQUFZLEdBQUc7Ozs7Ozs4Q0FHbEMsOERBQUNTO29DQUNDcUIsV0FBVyxHQUNUNUIsT0FEWUYsc0ZBQW1CLEVBQUMsS0FFakMsT0FEQ0UsZUFBZUYsK0VBQVksR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTaEQ7R0FqSXdCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9uYXZDb250YWluZXIudHN4PzQ4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9uYXZDb250YWluZXIubW9kdWxlLmNzc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2Q29udGFpbmVyKCkge1xuICBjb25zdCBbbmF2VHJ1ZUZhbHNlLCBzZXROYXZUcnVlRmFsc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBuYXZPcGVuID0gKCkgPT4ge1xuICAgIHNldE5hdlRydWVGYWxzZSghbmF2VHJ1ZUZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGFtYnVyZ2VyU3BhblwiKTtcbiAgICBoYW1idXJnZXIuZm9yRWFjaCgoc3BhbikgPT4ge1xuICAgICAgaWYgKG5hdlRydWVGYWxzZSkge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtuYXZUcnVlRmFsc2VdKTtcblxuICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW1tYXJ5U2VjdGlvblwiKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0U2VjdGlvblwiKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3Qgc2tpbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJza2lsbHNTZWN0aW9uXCIpIGFzIEhUTUxFbGVtZW50O1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0U2VjdGlvblwiKSBhcyBIVE1MRWxlbWVudDtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFNlY3Rpb25cIikgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3Qgc3VtbWFyeUZ1bmMgPSAoKSA9PiB7XG4gICAgaWYgKHN1bW1hcnkpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogc3VtbWFyeS5vZmZzZXRUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhYm91dEZ1bmMgPSAoKSA9PiB7XG4gICAgaWYgKGFib3V0KSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IGFib3V0Lm9mZnNldFRvcCxcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNraWxsc0Z1bmMgPSAoKSA9PiB7XG4gICAgaWYgKHNraWxscykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBza2lsbHMub2Zmc2V0VG9wLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJvamVjdEZ1bmMgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogcHJvamVjdC5vZmZzZXRUb3AsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgY29udGFjdEZ1bmMgPSAoKSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgIHRvcDogY29udGFjdC5vZmZzZXRUb3AsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGUubmF2RGl2fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLm5hdkxpc3R9ICR7c3R5bGUuY29udGFpbmVyfWB9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlLnBvcnRmb2xpb0xvZ299PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgb2dnbidzIHBvcnRmb2xpb1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLm5hdkFyZWF9XG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogbmF2VHJ1ZUZhbHNlID8gXCIyMDBweFwiIDogXCIwXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bGkgaWQ9XCJzdW1tYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZS5saW5rTGlzdH0gb25DbGljaz17c3VtbWFyeUZ1bmN9PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT17c3R5bGUubGlua0xpc3R9IG9uQ2xpY2s9e2Fib3V0RnVuY30+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGUubGlua30gaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgaWQ9XCJza2lsbHNcIiBjbGFzc05hbWU9e3N0eWxlLmxpbmtMaXN0fSBvbkNsaWNrPXtza2lsbHNGdW5jfT5cbiAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzdHlsZS5saW5rfSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+XG4gICAgICAgICAgICAgICAgU2tpbGxzXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgaWQ9XCJwcm9qZWN0XCIgY2xhc3NOYW1lPXtzdHlsZS5saW5rTGlzdH0gb25DbGljaz17cHJvamVjdEZ1bmN9PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cbiAgICAgICAgICAgICAgICBQcm9qZWN0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPXtzdHlsZS5saW5rTGlzdH0gb25DbGljaz17Y29udGFjdEZ1bmN9PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlLmxpbmt9IGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGFtYnVyZ2VyRGl2fSBvbkNsaWNrPXtuYXZPcGVufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oYW1idXJnZXJ9PlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUuaGFtYnVyZ2VyU3Bhbn0gJHtcbiAgICAgICAgICAgICAgICAgIG5hdlRydWVGYWxzZSA/IHN0eWxlLmFjdGl2ZSA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlLmhhbWJ1cmdlclNwYW59ICR7XG4gICAgICAgICAgICAgICAgICBuYXZUcnVlRmFsc2UgPyBzdHlsZS5hY3RpdmUgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5oYW1idXJnZXJTcGFufSAke1xuICAgICAgICAgICAgICAgICAgbmF2VHJ1ZUZhbHNlID8gc3R5bGUuYWN0aXZlIDogXCJcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGUuaGFtYnVyZ2VyU3Bhbn0gJHtcbiAgICAgICAgICAgICAgICAgIG5hdlRydWVGYWxzZSA/IHN0eWxlLmFjdGl2ZSA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiTmF2Q29udGFpbmVyIiwibmF2VHJ1ZUZhbHNlIiwic2V0TmF2VHJ1ZUZhbHNlIiwibmF2T3BlbiIsImhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzcGFuIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3VtbWFyeSIsImdldEVsZW1lbnRCeUlkIiwiYWJvdXQiLCJza2lsbHMiLCJwcm9qZWN0IiwiY29udGFjdCIsInN1bW1hcnlGdW5jIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJvZmZzZXRUb3AiLCJiZWhhdmlvciIsImFib3V0RnVuYyIsInNraWxsc0Z1bmMiLCJwcm9qZWN0RnVuYyIsImNvbnRhY3RGdW5jIiwibmF2IiwiY2xhc3NOYW1lIiwibmF2RGl2IiwiZGl2IiwibmF2TGlzdCIsImNvbnRhaW5lciIsInVsIiwibGkiLCJwb3J0Zm9saW9Mb2dvIiwibGluayIsImhyZWYiLCJuYXZBcmVhIiwibWluV2lkdGgiLCJpZCIsImxpbmtMaXN0Iiwib25DbGljayIsImhhbWJ1cmdlckRpdiIsImhhbWJ1cmdlclNwYW4iLCJhY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/containers/navContainer.tsx\n"));

/***/ })

});