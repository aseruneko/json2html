/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/json2html.ts":
/*!**************************!*\
  !*** ./src/json2html.ts ***!
  \**************************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar FILE_PATH = \"./data.json\";\nvar TARGET_DIV_ID = \"json2html\";\nfunction main() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            readJson(FILE_PATH).then(function (jsonObj) {\n                var htmlElements = makeHtmlElements(jsonObj);\n                appendHtmlElements(htmlElements, TARGET_DIV_ID);\n            });\n            return [2 /*return*/];\n        });\n    });\n}\nfunction readJson(path) {\n    return __awaiter(this, void 0, void 0, function () {\n        var response, data;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch(\"./data.json\")];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    data = _a.sent();\n                    return [2 /*return*/, data];\n            }\n        });\n    });\n}\nfunction jsonObjToData(jsonObj) {\n    var keys = Object.keys(jsonObj);\n    var objects = Object.values(jsonObj);\n    if (typeof jsonObj === \"string\") {\n        return [new Data(jsonObj)];\n    }\n    else {\n        return keys.map(function (key, idx) {\n            var childObj = objects[idx];\n            return new Data(key, jsonObjToData(childObj));\n        });\n    }\n}\nfunction makeHtmlElementIterator(data) {\n    var element = document.createElement(\"div\");\n    element.appendChild(document.createTextNode(data.value()));\n    if (!data.hasData) {\n        return element;\n    }\n    else {\n        data.data.forEach(function (datum) {\n            return element.appendChild(makeHtmlElementIterator(datum));\n        });\n        return element;\n    }\n}\nfunction makeHtmlElements(jsonObj) {\n    var data = jsonObjToData(jsonObj);\n    return data.map(function (datum) { return makeHtmlElementIterator(datum); });\n}\nfunction appendHtmlElements(elements, target) {\n    var targetElement = document.getElementById(target);\n    if (targetElement) {\n        elements.forEach(function (element) {\n            return targetElement.appendChild(element);\n        });\n    }\n}\nvar Data = /** @class */ (function () {\n    function Data(title, data) {\n        if (data === void 0) { data = []; }\n        this.title = title;\n        this.data = data;\n    }\n    Data.prototype.hasData = function () {\n        return this.data.length !== 0;\n    };\n    Data.prototype.value = function () {\n        return this.title;\n    };\n    return Data;\n}());\nmain();\n\n\n//# sourceURL=webpack://json2html/./src/json2html.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/json2html.ts"]();
/******/ 	
/******/ })()
;