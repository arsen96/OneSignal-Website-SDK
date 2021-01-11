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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/ts-to-es6/src/entries/sdk.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/ts-to-es6/src/context/browser/utils/BrowserSupportsPush.js":
/*!**************************************************************************!*\
  !*** ./build/ts-to-es6/src/context/browser/utils/BrowserSupportsPush.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isMacOSSafariInIframe = exports.isPushNotificationsSupported = void 0;
// This is used by the OneSignalSDK.js shim
// DO NOT add other imports since it is an ES5 target and dead code imports can't be clean up.
// Checks if the browser supports push notifications by checking if specific
//   classes and properties on them exist
function isPushNotificationsSupported() {
    return supportsVapidPush() || supportsSafariPush();
}
exports.isPushNotificationsSupported = isPushNotificationsSupported;
function isMacOSSafariInIframe() {
    // Fallback detection for Safari on macOS in an iframe context
    return window.top !== window && // isContextIframe
        navigator.vendor === "Apple Computer, Inc." && // isSafari
        navigator.platform === "MacIntel"; // isMacOS
}
exports.isMacOSSafariInIframe = isMacOSSafariInIframe;
function supportsSafariPush() {
    return (window.safari && typeof window.safari.pushNotification !== "undefined") ||
        isMacOSSafariInIframe();
}
// Does the browser support the standard Push API
function supportsVapidPush() {
    return typeof PushSubscriptionOptions !== "undefined" &&
        PushSubscriptionOptions.prototype.hasOwnProperty("applicationServerKey");
}
/* Notes on browser results which lead the logic of the functions above */
// Safari
//   macOS - typeof safari.pushNotification == "object"
//         - iframe context - typeof safari == "undefined"
//   iOS -  typeof safari == "undefined"
// Chrome
//   HTTP & HTTPS - typeof PushSubscriptionOptions == "function"
//   HTTP - navigator.serviceWorker == "undefined"
// Firefox
//   Normal - typeof PushSubscriptionOptions == "function"
//     HTTP & HTTPS - typeof PushSubscriptionOptions == "function"
//   ESR - typeof PushSubscriptionOptions == "undefined"



/***/ }),

/***/ "./build/ts-to-es6/src/entries/sdk.js":
/*!********************************************!*\
  !*** ./build/ts-to-es6/src/entries/sdk.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is OneSignalSDK.js (ES5)
 *   * This is an entry point for pages and older service workers.
 *       - Developers are now instructed to use OneSignalSDKWorker.js directly for service workers
 *   * Also we define a ES5 Stub for OneSignal for browsers that do not support push.
 * This is a shim to detect and load either;
 *   * ServiceWorkerSDK (ES6) - OneSignalSDKWorker.js
 *   * PageSDK (ES6)          - OneSignalPageSDKES6.js
 *   * Stub-PageSDK (ES5)     - OneSignalSDK.js (This File)
 */
// NOTE: Careful if adding imports, ES5 targets can't clean up functions never called.
var OneSignalShimLoader_1 = __webpack_require__(/*! ../utils/OneSignalShimLoader */ "./build/ts-to-es6/src/utils/OneSignalShimLoader.js");
OneSignalShimLoader_1.OneSignalShimLoader.start();



/***/ }),

/***/ "./build/ts-to-es6/src/errors/OneSignalError.js":
/*!******************************************************!*\
  !*** ./build/ts-to-es6/src/errors/OneSignalError.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OneSignalError = /** @class */ (function (_super) {
    __extends(OneSignalError, _super);
    function OneSignalError(message) {
        if (message === void 0) { message = ''; }
        var _this = _super.call(this, message) || this;
        // extending Error is weird and does not propagate `message`
        Object.defineProperty(_this, 'message', {
            configurable: true,
            enumerable: false,
            value: message,
            writable: true,
        });
        Object.defineProperty(_this, 'name', {
            configurable: true,
            enumerable: false,
            value: _this.constructor.name,
            writable: true,
        });
        if (Error.hasOwnProperty('captureStackTrace')) {
            Error.captureStackTrace(_this, _this.constructor);
            return _this;
        }
        Object.defineProperty(_this, 'stack', {
            configurable: true,
            enumerable: false,
            value: (new Error(message)).stack,
            writable: true,
        });
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(_this, OneSignalError.prototype);
        return _this;
    }
    return OneSignalError;
}(Error));
exports.default = OneSignalError;



/***/ }),

/***/ "./build/ts-to-es6/src/libraries/Log.js":
/*!**********************************************!*\
  !*** ./build/ts-to-es6/src/libraries/Log.js ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.shouldLog = function () {
        try {
            if (typeof window === "undefined" ||
                typeof window.localStorage === "undefined") {
                return false;
            }
            var level = window.localStorage.getItem("loglevel");
            if (level && level.toLowerCase() === "trace") {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            /* LocalStorage may not be accessible on browser profiles that restrict 3rd party cookies */
            return false;
        }
        ;
    };
    Log.setLevel = function (level) {
        if (typeof window === "undefined" ||
            typeof window.localStorage === "undefined") {
            return;
        }
        try {
            window.localStorage.setItem("loglevel", level);
            Log.proxyMethodsCreated = undefined;
            Log.createProxyMethods();
        }
        catch (e) {
            /* LocalStorage may not be accessible on browser profiles that restrict 3rd party cookies */
            return;
        }
        ;
    };
    Log.createProxyMethods = function () {
        if (typeof Log.proxyMethodsCreated !== "undefined") {
            return;
        }
        else {
            Log.proxyMethodsCreated = true;
        }
        var methods = {
            "log": "debug",
            "trace": "trace",
            "info": "info",
            "warn": "warn",
            "error": "error"
        };
        for (var _i = 0, _a = Object.keys(methods); _i < _a.length; _i++) {
            var nativeMethod = _a[_i];
            var nativeMethodExists = typeof console[nativeMethod] !== "undefined";
            var methodToMapTo = methods[nativeMethod];
            var shouldMap = nativeMethodExists &&
                (("boolean" !== "undefined" && true === true) ||
                    (Log.shouldLog()) ||
                    methodToMapTo === "error");
            if (shouldMap) {
                Log[methodToMapTo] = console[nativeMethod].bind(console);
            }
            else {
                Log[methodToMapTo] = function () { };
            }
        }
    };
    return Log;
}());
exports.default = Log;
Log.createProxyMethods();



/***/ }),

/***/ "./build/ts-to-es6/src/utils/OneSignalShimLoader.js":
/*!**********************************************************!*\
  !*** ./build/ts-to-es6/src/utils/OneSignalShimLoader.js ***!
  \**********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OneSignalShimLoader = void 0;
var BrowserSupportsPush_1 = __webpack_require__(/*! ../context/browser/utils/BrowserSupportsPush */ "./build/ts-to-es6/src/context/browser/utils/BrowserSupportsPush.js");
var OneSignalStubES6_1 = __webpack_require__(/*! ./OneSignalStubES6 */ "./build/ts-to-es6/src/utils/OneSignalStubES6.js");
var OneSignalStubES5_1 = __webpack_require__(/*! ./OneSignalStubES5 */ "./build/ts-to-es6/src/utils/OneSignalStubES5.js");
// NOTE: Careful if adding imports, ES5 targets can't clean up functions never called.
// See sdk.ts for what entry points this handles
var OneSignalShimLoader = /** @class */ (function () {
    function OneSignalShimLoader() {
    }
    // NOTE: scripts added won't start executing until
    OneSignalShimLoader.addScriptToPage = function (url) {
        var scriptElement = document.createElement('script');
        scriptElement.src = url;
        scriptElement.async = true;
        document.head.appendChild(scriptElement);
    };
    // Same logic from SdkEnvironment
    OneSignalShimLoader.getPathAndPrefix = function () {
        var buildOrigin = ( true) ? "localhost" || "localhost" : undefined;
        var productionOrigin = "https://cdn.onesignal.com/sdks/";
        if (false) {}
        var isHttps = ( true) ? true : undefined;
        var protocol = isHttps ? "https" : "http";
        var port = isHttps ? 4001 : 4000;
        switch ("development") {
            case "development":
                return protocol + "://" + buildOrigin + ":" + port + "/sdks/Dev-";
            case "staging":
                return "https://" + buildOrigin + "/sdks/Staging-";
            default:
                return productionOrigin;
        }
    };
    OneSignalShimLoader.isServiceWorkerRuntime = function () {
        return (typeof window === "undefined");
    };
    OneSignalShimLoader.addOneSignalPageES6SDKStub = function () {
        var predefinedOneSignal = window.OneSignal;
        var oneSignalIsArray = Array.isArray(predefinedOneSignal);
        // Do NOT replace window.OneSignal if it's something else other than an Array.
        if (!!predefinedOneSignal && !oneSignalIsArray) {
            console.error("window.OneSignal already defined as '" + typeof OneSignal + "'!\n         Please make sure to define as 'window.OneSignal = window.OneSignal || [];'", OneSignal);
            return;
        }
        // Stub out all OneSignal functions with an implementation that save all params.
        // OneSignalPageSDKES6.js will load soon and the function calls will be replayed from pageSdkInit.ts
        // This is done regardless if document.currentScript.async is true as window.OneSignal needs to be available
        //   for those who use script.onload = function() { } to add OneSignalSDK.js
        window.OneSignal = new OneSignalStubES6_1.OneSignalStubES6(predefinedOneSignal);
    };
    // Stub out all functions with default values.
    // OneSignalStubES5 class is bundled into the production OneSignalSDK.js so other .js files are loaded.
    OneSignalShimLoader.addOneSignalPageES5SDKStub = function () {
        console.log("OneSignal: Using fallback ES5 Stub for backwards compatibility.");
        var predefinedOneSignal = window.OneSignal;
        window.OneSignal = new OneSignalStubES5_1.OneSignalStubES5(predefinedOneSignal);
    };
    OneSignalShimLoader.start = function () {
        // Check if someone setup OneSignal before we instructed them to use "OneSignalSDKWorker.js"
        //    instead of "OneSignal.js" for importScripts();
        if (OneSignalShimLoader.isServiceWorkerRuntime()) {
            self.importScripts(OneSignalShimLoader.getPathAndPrefix() + "OneSignalSDKWorker.js?v=" + OneSignalShimLoader.VERSION);
        }
        else if (BrowserSupportsPush_1.isPushNotificationsSupported()) {
            OneSignalShimLoader.addScriptToPage(OneSignalShimLoader.getPathAndPrefix() + "OneSignalPageSDKES6.js?v=" + OneSignalShimLoader.VERSION);
            OneSignalShimLoader.addOneSignalPageES6SDKStub();
        }
        else {
            OneSignalShimLoader.addOneSignalPageES5SDKStub();
        }
    };
    return OneSignalShimLoader;
}());
exports.OneSignalShimLoader = OneSignalShimLoader;
OneSignalShimLoader.VERSION =  false ? undefined : Number(151105);



/***/ }),

/***/ "./build/ts-to-es6/src/utils/OneSignalStub.js":
/*!****************************************************!*\
  !*** ./build/ts-to-es6/src/utils/OneSignalStub.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OneSignalStub = void 0;
// NOTE: This is used with the OneSignalSDK.js shim
// Careful if adding imports, ES5 targets can't clean up functions never called.
var OneSignalStub = /** @class */ (function () {
    function OneSignalStub(omitStubsFor) {
        var _this = this;
        this.VERSION =  false ? undefined : Number(151105);
        this.log = {
            setLevel: function (level) {
                _this.currentLogLevel = level;
            }
        };
        this.setupStubFunctions(OneSignalStub.FUNCTION_LIST_TO_STUB, this.stubFunction, omitStubsFor);
        this.setupStubFunctions(OneSignalStub.FUNCTION_LIST_WITH_PROMISE_TO_STUB, this.stubPromiseFunction, omitStubsFor);
    }
    OneSignalStub.prototype.setupStubFunctions = function (stubList, stubFunction, omitStubsFor) {
        var _this = this;
        var _loop_1 = function (functionName) {
            if (omitStubsFor.indexOf(functionName) > -1)
                return "continue";
            var functionNameWithStub = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return stubFunction(_this, functionName, args);
            };
            Object.defineProperty(this_1, functionName, { value: functionNameWithStub });
        };
        var this_1 = this;
        for (var _i = 0, stubList_1 = stubList; _i < stubList_1.length; _i++) {
            var functionName = stubList_1[_i];
            _loop_1(functionName);
        }
    };
    return OneSignalStub;
}());
exports.OneSignalStub = OneSignalStub;
OneSignalStub.FUNCTION_LIST_TO_STUB = [
    "on",
    "off",
    "once",
    "push"
];
OneSignalStub.FUNCTION_LIST_WITH_PROMISE_TO_STUB = [
    "init",
    "_initHttp",
    "isPushNotificationsEnabled",
    "showHttpPrompt",
    "registerForPushNotifications",
    "setDefaultNotificationUrl",
    "setDefaultTitle",
    "syncHashedEmail",
    "getTags",
    "sendTag",
    "sendTags",
    "deleteTag",
    "deleteTags",
    "addListenerForNotificationOpened",
    "getIdsAvailable",
    "setSubscription",
    "showHttpPermissionRequest",
    "showNativePrompt",
    "showSlidedownPrompt",
    "showCategorySlidedown",
    "getNotificationPermission",
    "getUserId",
    "getRegistrationId",
    "getSubscription",
    "sendSelfNotification",
    "setEmail",
    "logoutEmail",
    "setExternalUserId",
    "removeExternalUserId",
    "getExternalUserId",
    "provideUserConsent",
    "isOptedOut",
    "getEmailId",
    "sendOutcome"
];



/***/ }),

/***/ "./build/ts-to-es6/src/utils/OneSignalStubES5.js":
/*!*******************************************************!*\
  !*** ./build/ts-to-es6/src/utils/OneSignalStubES5.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneSignalStubES5 = void 0;
// NOTE: This is used with the OneSignalSDK.js shim
// Careful if adding imports, ES5 targets can't clean up functions never called.
var OneSignalStub_1 = __webpack_require__(/*! ./OneSignalStub */ "./build/ts-to-es6/src/utils/OneSignalStub.js");
var ProcessOneSignalPushCalls_1 = __webpack_require__(/*! ./ProcessOneSignalPushCalls */ "./build/ts-to-es6/src/utils/ProcessOneSignalPushCalls.js");
var Log_1 = __importDefault(__webpack_require__(/*! ../libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js"));
var OneSignalStubES5 = /** @class */ (function (_super) {
    __extends(OneSignalStubES5, _super);
    function OneSignalStubES5(stubOneSignal) {
        var _this = _super.call(this, Object.getOwnPropertyNames(OneSignalStubES5.prototype)) || this;
        window.OneSignal = _this;
        _this.playPushes(stubOneSignal);
        return _this;
    }
    // @Override
    OneSignalStubES5.prototype.isPushNotificationsSupported = function () {
        return false;
    };
    // @Override
    OneSignalStubES5.prototype.isPushNotificationsEnabled = function () {
        return OneSignalStubES5.newPromiseIfDefined(function (resolve) { resolve(false); });
    };
    // Implementation here so the passed in function is run and does not get dropped.
    // @Override
    OneSignalStubES5.prototype.push = function (item) {
        ProcessOneSignalPushCalls_1.ProcessOneSignalPushCalls.processItem(this, item);
    };
    // By default do nothing unless the function is listed above.
    // @Override
    OneSignalStubES5.prototype.stubFunction = function (_thisObj, _functionName, _args) { };
    // Never resolve promises as no logic will be run from this ES5 stub for them.
    // @Override
    OneSignalStubES5.prototype.stubPromiseFunction = function (_thisObj, _functionName, _args) {
        return OneSignalStubES5.newPromiseIfDefined(function (_resolve, _reject) { });
    };
    // Safely does NOT create a Promise if running on old ES5 browsers and it wasn't polyfilled.
    OneSignalStubES5.newPromiseIfDefined = function (executor) {
        if (typeof (Promise) === "undefined")
            return undefined;
        else
            return new Promise(executor);
    };
    OneSignalStubES5.prototype.playPushes = function (toProcessArray) {
        if (!toProcessArray)
            return;
        for (var _i = 0, toProcessArray_1 = toProcessArray; _i < toProcessArray_1.length; _i++) {
            var item = toProcessArray_1[_i];
            try {
                this.push(item);
            }
            catch (e) {
                Log_1.default.error(e);
            }
        }
    };
    return OneSignalStubES5;
}(OneSignalStub_1.OneSignalStub));
exports.OneSignalStubES5 = OneSignalStubES5;



/***/ }),

/***/ "./build/ts-to-es6/src/utils/OneSignalStubES6.js":
/*!*******************************************************!*\
  !*** ./build/ts-to-es6/src/utils/OneSignalStubES6.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneSignalStubES6 = void 0;
// NOTE: This is used with the OneSignalSDK.js shim
// Careful if adding imports, ES5 targets can't clean up functions never called.
var OneSignalStub_1 = __webpack_require__(/*! ./OneSignalStub */ "./build/ts-to-es6/src/utils/OneSignalStub.js");
var OneSignalStubES6 = /** @class */ (function (_super) {
    __extends(OneSignalStubES6, _super);
    function OneSignalStubES6(preExistingArray) {
        var _this = _super.call(this, Object.getOwnPropertyNames(OneSignalStubES6.prototype)) || this;
        // This array will contain calls made on windows.OneSignal (w/ push or direct method calls)
        //   AFTER OneSignalSDK.js was loaded, BUT before OneSignalPageSDKES6.js was loaded.
        _this.directFunctionCallsArray = new Array();
        _this.preExistingArray = preExistingArray;
        return _this;
    }
    // @Override
    OneSignalStubES6.prototype.isPushNotificationsSupported = function () {
        return true;
    };
    // @Override
    // Save function name and params to be called later when the full SDK loads
    OneSignalStubES6.prototype.stubFunction = function (thisObj, functionName, args) {
        thisObj.directFunctionCallsArray.push({ functionName: functionName, args: args, delayedPromise: undefined });
    };
    // @Override
    // Save function name, params, and a delayed Promise to be called later when the full SDK loads
    OneSignalStubES6.prototype.stubPromiseFunction = function (thisObj, functionName, args) {
        var delayedPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            delayedPromise = { resolve: resolve, reject: reject };
        });
        thisObj.directFunctionCallsArray.push({ functionName: functionName, delayedPromise: delayedPromise, args: args });
        return promise;
    };
    return OneSignalStubES6;
}(OneSignalStub_1.OneSignalStub));
exports.OneSignalStubES6 = OneSignalStubES6;



/***/ }),

/***/ "./build/ts-to-es6/src/utils/ProcessOneSignalPushCalls.js":
/*!****************************************************************!*\
  !*** ./build/ts-to-es6/src/utils/ProcessOneSignalPushCalls.js ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessOneSignalPushCalls = void 0;
var OneSignalError_1 = __importDefault(__webpack_require__(/*! ../errors/OneSignalError */ "./build/ts-to-es6/src/errors/OneSignalError.js"));
var ProcessOneSignalPushCalls = /** @class */ (function () {
    function ProcessOneSignalPushCalls() {
    }
    ProcessOneSignalPushCalls.processItem = function (oneSignalInstance, item) {
        if (typeof (item) === "function")
            item();
        else if (Array.isArray(item)) {
            if (item.length == 0)
                throw new OneSignalError_1.default("Empty array is not valid!");
            var functionName = item.shift();
            if (functionName == null || typeof (functionName) === "undefined")
                throw new OneSignalError_1.default("First element in array must be the OneSignal function name");
            var oneSignalFunction = oneSignalInstance[functionName.toString()];
            if (typeof (oneSignalFunction) !== "function")
                throw new OneSignalError_1.default("No OneSignal function with the name '" + functionName + "'");
            oneSignalFunction.apply(oneSignalInstance, item);
        }
        else
            throw new OneSignalError_1.default("Only accepts function and Array types!");
    };
    return ProcessOneSignalPushCalls;
}());
exports.ProcessOneSignalPushCalls = ProcessOneSignalPushCalls;



/***/ })

/******/ });
//# sourceMappingURL=OneSignalSDK.js.map