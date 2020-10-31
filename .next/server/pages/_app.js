module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aQU0");
/* harmony import */ var _config_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Eug");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("W+0S");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var css_checkbox_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("u24X");
/* harmony import */ var css_checkbox_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(css_checkbox_library__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function MyApp({
  Component,
  pageProps
}) {
  return __jsx("div", null, __jsx(_src_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx("script", {
    src: "https://www.paypal.com/sdk/js?currency=BRL&client-id=ARuGewmbIlEYZSE25t-LR0ahoXhC4jmIY8DZzEodpiKK13o-zx90Dr3I0RERs5kbzGR3twzhNfpCkI_Z"
  }, " // Required. Replace SB_CLIENT_ID with your sandbox client ID."), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,700",
    rel: "stylesheet"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
  }), __jsx(Component, pageProps));
}

/***/ }),

/***/ "1o4v":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bg-4ec2da93217d852c1d5a47e1d1b45230.png";

/***/ }),

/***/ "9Eug":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fnYr");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MQhX");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);


i18next__WEBPACK_IMPORTED_MODULE_0___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        'hello': 'hello'
      }
    },
    'pt-BR': {
      translations: {
        'hello': 'ola'
      }
    }
  },
  fallbackLng: 'pt-BR',
  debug: true,
  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',
  keySeparator: false,
  // we use content as keys
  interpolation: {
    escapeValue: false
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "MQhX":
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "aQU0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

  @font-face {
    font-family: 'Gilroy';
    src: url('/fonts/Gilroy-Black_0.ttf');
  }

  @font-face {
    font-family: 'Gilroy-Medium';
    src: url('/fonts/Gilroy-Medium_0.ttf');
  }

  @font-face {
    font-family: 'Gilroy-Regular';
    src: url('/fonts/Gilroy-Regular_0.ttf');
  }

  @font-face {
    font-family: 'Gilroy-SemiBold';
    src: url('/fonts/Gilroy-SemiBold_0.ttf');
  }

  @font-face {
    font-family: 'Gilroy-Bold';
    src: url('/fonts/Gilroy-Bold_0.ttf');
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url('/fonts/Roboto-Regular.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  html {
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: white;
    background: url(${__webpack_require__("1o4v")}) no-repeat -700px 102px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
 }
  label {
    margin: 10px 0;
    cursor: pointer;
    text-indent: -9999px;
    width: 42px;
    height: 16px;
    background: white;
    display: block;
    border: 1px solid white;
    position: relative;
 }
  label:after {
    content: '';
    position: absolute;
    left: 5px;
    width: 10px;
    height: 24px;
    top: -6px;
    border: 1px solid white;
    background: #afafaf;
    transition: 0.3s;
 }
  input:checked + label {
    background: white;
 }
  input:checked + label:after {
    background: #46b5f1 !important;
 }
  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
 }
  label:active:after {
    width: 10px;
 }

  #__next {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  #slider {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
  }

  .slide-in {
    animation: slide-in 0.5s forwards;
    -webkit-animation: slide-in 0.5s forwards;
  }

  .slide-out {
    animation: slide-out 0.5s forwards;
    -webkit-animation: slide-out 0.5s forwards;
  }
      
  @keyframes slide-in {
    100% { transform: translateX(0%); }
  }

  @-webkit-keyframes slide-in {
    100% { -webkit-transform: translateX(0%); }
  }
      
  @keyframes slide-out {
    0% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }

  @-webkit-keyframes slide-out {
    0% { -webkit-transform: translateX(0%); }
    100% { -webkit-transform: translateX(100%); }
  }

  .fade-out {
    animation: fadeOut ease 3s;
    -webkit-animation: fadeOut ease 3s;
    -moz-animation: fadeOut ease 3s;
    -o-animation: fadeOut ease 3s;
    -ms-animation: fadeOut ease 3s;
  }
  @keyframes fadeOut {
    0% {
      opacity:1;
    }
    50% {
      opacity:1;
    }
    80% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity:1;
    }
    50% {
      opacity:1;
    }
    80% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  .MuiDialog-paperFullWidth {
    width: calc(100vw - (100vw / 4));
  }

`);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fnYr":
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "u24X":
/***/ (function(module, exports) {



/***/ })

/******/ });