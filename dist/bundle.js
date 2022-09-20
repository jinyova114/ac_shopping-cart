/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n// 設定 webpack 的進入點\r\n\r\nconsole.log('JS loaded!')\r\n// 打包 webpack => npm run build\r\n\r\n// 縣市物件\r\nconst cities = [\r\n  \"臺北市\",\r\n  \"新北市\",\r\n  \"基隆市\",\r\n  \"新竹市\",\r\n  \"桃園市\",\r\n  \"新竹\",\r\n  \"宜蘭縣\",\r\n  \"臺中市\",\r\n  \"苗栗縣\",\r\n  \"彰化縣\",\r\n  \"南投縣\",\r\n  \"雲林縣\",\r\n  \"高雄市\",\r\n  \"臺南市\",\r\n  \"嘉義市\",\r\n  \"嘉義縣\",\r\n  \"屏東縣\",\r\n  \"澎湖縣\"\r\n];\r\n// 產品資料物件包\r\nconst items = [\r\n  {\r\n    id: 1,\r\n    name: \"破壞補丁修身牛仔褲\",\r\n    img: \"https://i.postimg.cc/vmKjhsfz/Block-jean-1.png\",\r\n    price: \"3999\"\r\n  },\r\n  {\r\n    id: 2,\r\n    name: \"刷色直筒牛仔褲\",\r\n    img: \"https://i.postimg.cc/tTPCDNSm/Block-jean-2.png\",\r\n    price: \"1299\"\r\n  }\r\n];\r\n\r\n// Add DOM Object\r\nconst shoppingCartArea = document.getElementById(\"shopping-cart-area\");\r\nconst shoppingCartItems = document.querySelector(\".shopping-cart-area_items\");\r\nconst form = document.getElementById(\"a-form\");\r\nconst formParts = document.querySelectorAll(\".part\");\r\nconst cityOption = document.getElementById(\"city-option\");\r\nconst stepControl = document.getElementById(\"billing-area_step-control\");\r\nconst steps = stepControl.querySelectorAll(\".step\");\r\nconst btnControl = document.getElementById(\"btn-control-area\");\r\nconst nextBtn = document.querySelector(\".btn-primary\");\r\nconst prevBtn = document.querySelector(\".btn-outline\");\r\n\r\nlet step = 0;\r\nlet itemPriceList = [];\r\n\r\n// Render 縣市選項\r\ncities.forEach((city) => {\r\n  cityOption.innerHTML += `<option value=\"\">${city}</option>`;\r\n});\r\n\r\n// 功能: Render 購物車產品\r\nfunction renderShoppingCart() {\r\n  items.forEach((item) => {\r\n    shoppingCartItems.innerHTML += `\r\n      <div id=\"item-${item.id}\" class=\"item\">\r\n          <img src=\"${item.img}\" class=\"item_image\">\r\n          <div class=\"item_info\">\r\n            <div class=\"item_info_detail\">\r\n              <div class=\"item_info_detail_name\">${item.name}</div>\r\n              <div class=\"item_info_detail_amount-wrapper\">\r\n                <div class=\"amount-minus flex-center cursor-pointer\">-</div>\r\n                <div class=\"amount\">1</div>\r\n                <div class=\"amount-add flex-center cursor-pointer\">+</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"item_info_price\">${item.price}</div>\r\n          </div>\r\n        </div>\r\n    `;\r\n  });\r\n}\r\n\r\n// 功能: 步驟切換\r\nfunction handleBtnControlClicked(e) {\r\n  e.preventDefault();\r\n  const nowStep = steps[step];\r\n  if (e.target.matches(\".btn-primary\") && e.target.innerHTML === \"下一步\") {\r\n    const nextStep = steps[step + 1];\r\n    nowStep.classList.remove(\"active-dark\");\r\n    nowStep.classList.add(\"checked\");\r\n    nextStep.classList.add(\"active-light\");\r\n    formParts[step].classList.toggle(\"d-none\");\r\n    formParts[step + 1].classList.toggle(\"d-none\");\r\n    step += 1;\r\n  } else if (\r\n    e.target.matches(\".btn-outline\") &&\r\n    e.target.innerHTML === \"上一步\"\r\n  ) {\r\n    const prevStep = steps[step - 1];\r\n    nowStep.classList.remove(\"active-light\");\r\n    nowStep.classList.remove(\"active-dark\");\r\n    prevStep.classList.remove(\"checked\");\r\n    prevStep.classList.add(\"active-dark\");\r\n    formParts[step].classList.toggle(\"d-none\");\r\n    formParts[step - 1].classList.toggle(\"d-none\");\r\n    step -= 1;\r\n  }\r\n  setBtnDisabled();\r\n}\r\n\r\nfunction setBtnDisabled() {\r\n  if (step === 0) {\r\n    prevBtn.setAttribute(\"disabled\", \"disabled\");\r\n  } else {\r\n    prevBtn.removeAttribute(\"disabled\");\r\n  }\r\n  if (step === 2) {\r\n    nextBtn.innerHTML = \"確認下單\";\r\n  } else {\r\n    nextBtn.innerHTML = \"下一步\";\r\n  }\r\n}\r\n\r\n// 功能: 購物車品項數量增減\r\nfunction itemAddOrMinus(e) {\r\n  if (e.target.matches(\".amount-add\") || e.target.matches(\".amount-minus\")) {\r\n    const amountBox = e.target.parentNode.children[1];\r\n    const itemInfoBox = e.target.parentNode.parentNode.parentNode;\r\n    let amount = Number(amountBox.innerText);\r\n\r\n    if (e.target.matches(\".amount-add\")) {\r\n      amount += 1;\r\n    } else {\r\n      amount -= 1;\r\n    }\r\n    // 若商品數量為零，從購物籃中移除\r\n    if (amount === 0) {\r\n      const itemBox = itemInfoBox.parentNode;\r\n      itemBox.remove();\r\n    }\r\n    amountBox.innerText = amount;\r\n    // 購物車品項金額增減待完成\r\n  }\r\n}\r\n\r\nbtnControl.addEventListener(\"click\", handleBtnControlClicked);\r\nrenderShoppingCart();\r\nshoppingCartArea.addEventListener(\"click\", itemAddOrMinus);\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });