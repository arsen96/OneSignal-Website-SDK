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
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/ts-to-es6/src/entries/pageSdkInit.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/ts-to-es6/src/Environment.js":
/*!********************************************!*\
  !*** ./build/ts-to-es6/src/Environment.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Environment; });
/* harmony import */ var _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers/SdkEnvironment */ "./build/ts-to-es6/src/managers/SdkEnvironment.js");
/* harmony import */ var _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/WindowEnvironmentKind */ "./build/ts-to-es6/src/models/WindowEnvironmentKind.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_2__);



class Environment {
    /**
     * True if not in a service worker environment.
     */
    static isBrowser() {
        return typeof window !== 'undefined';
    }
    static isSafari() {
        return Environment.isBrowser() && bowser__WEBPACK_IMPORTED_MODULE_2___default.a.safari;
    }
    static version() {
        return ( false ? undefined : Number(151105));
    }
    static get TRADITIONAL_CHINESE_LANGUAGE_TAG() {
        return ['tw', 'hant'];
    }
    static get SIMPLIFIED_CHINESE_LANGUAGE_TAG() {
        return ['cn', 'hans'];
    }
    /* Specifications: https://tools.ietf.org/html/bcp47 */
    static getLanguage() {
        let languageTag = navigator.language;
        if (languageTag) {
            languageTag = languageTag.toLowerCase();
            let languageSubtags = languageTag.split('-');
            if (languageSubtags[0] == 'zh') {
                // The language is zh-?
                // We must categorize the language as either zh-Hans (simplified) or zh-Hant (traditional); OneSignal only supports these two Chinese variants
                for (let traditionalSubtag of Environment.TRADITIONAL_CHINESE_LANGUAGE_TAG) {
                    if (languageSubtags.indexOf(traditionalSubtag) !== -1) {
                        return 'zh-Hant';
                    }
                }
                for (let simpleSubtag of Environment.SIMPLIFIED_CHINESE_LANGUAGE_TAG) {
                    if (languageSubtags.indexOf(simpleSubtag) !== -1) {
                        return 'zh-Hans';
                    }
                }
                return 'zh-Hant'; // Return Chinese traditional by default
            }
            else {
                // Return the language subtag (it can be three characters, so truncate it down to 2 just to be sure)
                return languageSubtags[0].substring(0, 2);
            }
        }
        else {
            return 'en';
        }
    }
    static supportsServiceWorkers() {
        const env = _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowEnv();
        switch (env) {
            case _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["WindowEnvironmentKind"].ServiceWorker:
                return true;
            default:
                return typeof navigator !== "undefined" &&
                    'serviceWorker' in navigator;
        }
    }
    /*
      Returns the MD5 hash of all stylesheets within the src/stylesheets
      directory.
     */
    static getSdkStylesVersionHash() {
        return (typeof __SRC_STYLESHEETS_MD5_HASH__ === "undefined" ? '2' : __SRC_STYLESHEETS_MD5_HASH__);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/Event.js":
/*!**************************************!*\
  !*** ./build/ts-to-es6/src/Event.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Environment */ "./build/ts-to-es6/src/Environment.js");
/* harmony import */ var _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managers/SdkEnvironment */ "./build/ts-to-es6/src/managers/SdkEnvironment.js");
/* harmony import */ var _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/WindowEnvironmentKind */ "./build/ts-to-es6/src/models/WindowEnvironmentKind.js");
/* harmony import */ var _libraries_Log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js");
/* harmony import */ var _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/shared/utils/Utils */ "./build/ts-to-es6/src/context/shared/utils/Utils.js");






const SILENT_EVENTS = [
    'notifyButtonHovering',
    'notifyButtonHover',
    'notifyButtonButtonClick',
    'notifyButtonLauncherClick',
    'animatedElementHiding',
    'animatedElementHidden',
    'animatedElementShowing',
    'animatedElementShown',
    'activeAnimatedElementActivating',
    'activeAnimatedElementActive',
    'activeAnimatedElementInactivating',
    'activeAnimatedElementInactive',
    'dbRetrieved',
    'dbSet',
    'testEvent'
];
const RETRIGGER_REMOTE_EVENTS = [
    'onesignal.prompt.custom.clicked',
    'onesignal.prompt.native.permissionchanged',
    'onesignal.subscription.changed',
    'onesignal.internal.subscriptionset',
    'dbRebuilt',
    'initialize',
    'subscriptionSet',
    'sendWelcomeNotification',
    'subscriptionChange',
    'notificationPermissionChange',
    'dbSet',
    'register',
    'notificationDisplay',
    'notificationDismiss',
    'notificationClick',
    'permissionPromptDisplay',
    'testWouldDisplay',
    'testInitOptionDisabled',
    'popupWindowTimeout'
];
const LEGACY_EVENT_MAP = {
    'notificationPermissionChange': 'onesignal.prompt.native.permissionchanged',
    'subscriptionChange': 'onesignal.subscription.changed',
    'customPromptClick': 'onesignal.prompt.custom.clicked',
};
class Event {
    /**
     * Triggers the specified event with optional custom data.
     * @param eventName The string event name to be emitted.
     * @param data Any JavaScript variable to be passed with the event.
     * @param remoteTriggerEnv If this method is being called in a different environment (e.g. was triggered in iFrame but now retriggered on main host), this is the string of the original environment for logging purposes.
     */
    static trigger(eventName, data, remoteTriggerEnv = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!_context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["default"].contains(SILENT_EVENTS, eventName)) {
                let displayData = data;
                let env = _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["default"].capitalize(_managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_2__["default"].getWindowEnv().toString());
                if (remoteTriggerEnv) {
                    env = `${env} ⬸ ${_context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["default"].capitalize(remoteTriggerEnv)}`;
                }
                if (displayData || displayData === false) {
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].debug(`(${env}) » %c${eventName}:`, _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["default"].getConsoleStyle('event'), displayData);
                }
                else {
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].debug(`(${env}) » %c${eventName}`, _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["default"].getConsoleStyle('event'));
                }
            }
            // Actually fire the event that can be listened to via OneSignal.on()
            if (_Environment__WEBPACK_IMPORTED_MODULE_1__["default"].isBrowser()) {
                if (eventName === OneSignal.EVENTS.SDK_INITIALIZED) {
                    if (OneSignal.initialized)
                        return;
                    else
                        OneSignal.initialized = true;
                }
                yield OneSignal.emitter.emit(eventName, data);
            }
            if (LEGACY_EVENT_MAP.hasOwnProperty(eventName)) {
                let legacyEventName = LEGACY_EVENT_MAP[eventName];
                Event._triggerLegacy(legacyEventName, data);
            }
            // If this event was triggered in an iFrame or Popup environment, also trigger it on the host page
            if (_Environment__WEBPACK_IMPORTED_MODULE_1__["default"].isBrowser() &&
                (_managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_2__["default"].getWindowEnv() === _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].OneSignalSubscriptionPopup ||
                    _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_2__["default"].getWindowEnv() === _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].OneSignalProxyFrame)) {
                const creator = opener || parent;
                if (!creator) {
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].error(`Could not send event '${eventName}' back to host page because no creator (opener or parent) found!`);
                }
                else {
                    // But only if the event matches certain events
                    if (_context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["default"].contains(RETRIGGER_REMOTE_EVENTS, eventName)) {
                        if (_managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_2__["default"].getWindowEnv() === _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].OneSignalSubscriptionPopup) {
                            OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, { eventName: eventName, eventData: data });
                        }
                        else {
                            OneSignal.proxyFrame.retriggerRemoteEvent(eventName, data);
                        }
                    }
                }
            }
        });
    }
    /**
     * Fires the event to be listened to via window.addEventListener().
     * @param eventName The string event name.
     * @param data Any JavaScript variable to be passed with the event.
     * @private
     */
    static _triggerLegacy(eventName, data) {
        const event = new CustomEvent(eventName, {
            bubbles: true, cancelable: true, detail: data
        });
        // Fire the event that listeners can listen to via 'window.addEventListener()'
        window.dispatchEvent(event);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/OneSignal.js":
/*!*******************************************************!*\
  !*** ./build/ts-to-es6/src/OneSignal.js + 74 modules ***!
  \*******************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/Environment.js because of ./build/ts-to-es6/src/utils/OneSignalUtils.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/Event.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/OneSignalApiBase.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/OneSignalApiSW.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/context/shared/utils/Utils.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/errors/InvalidArgumentError.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/errors/InvalidStateError.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/errors/NotImplementedError.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/errors/OneSignalApiError.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/errors/OneSignalError.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/helpers/ServiceWorkerHelper.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/helpers/page/ServiceWorkerHelper.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/helpers/shared/OutcomesHelper.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/libraries/Emitter.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/libraries/Log.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/managers/SdkEnvironment.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/DeliveryPlatformKind.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/DeviceRecord.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/EmailProfile.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/EnvironmentKind.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/IntegrationKind.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/Outcomes.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/PermissionPromptType.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/PushDeviceRecord.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/RawPushSubscription.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/Session.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/Subscription.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/SubscriptionStateKind.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/WindowEnvironmentKind.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/services/Database.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/services/IndexedDb.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/utils.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/utils/BrowserUtils.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/utils/OneSignalUtils.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/utils/PermissionUtils.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/bowser/src/bowser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/jsonp/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/tslib/tslib.es6.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

// EXTERNAL MODULE: ./node_modules/bowser/src/bowser.js
var bowser = __webpack_require__("./node_modules/bowser/src/bowser.js");
var bowser_default = /*#__PURE__*/__webpack_require__.n(bowser);

// EXTERNAL MODULE: ./build/ts-to-es6/src/Environment.js
var Environment = __webpack_require__("./build/ts-to-es6/src/Environment.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/errors/InvalidArgumentError.js
var InvalidArgumentError = __webpack_require__("./build/ts-to-es6/src/errors/InvalidArgumentError.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/errors/InvalidStateError.js
var InvalidStateError = __webpack_require__("./build/ts-to-es6/src/errors/InvalidStateError.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/errors/OneSignalError.js
var OneSignalError = __webpack_require__("./build/ts-to-es6/src/errors/OneSignalError.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/NotSubscribedError.js

var NotSubscribedError_NotSubscribedReason;
(function (NotSubscribedReason) {
    NotSubscribedReason[NotSubscribedReason["Unknown"] = 0] = "Unknown";
    NotSubscribedReason[NotSubscribedReason["NoDeviceId"] = 1] = "NoDeviceId";
    NotSubscribedReason[NotSubscribedReason["NoEmailSet"] = 2] = "NoEmailSet";
    NotSubscribedReason[NotSubscribedReason["OptedOut"] = 3] = "OptedOut";
})(NotSubscribedError_NotSubscribedReason || (NotSubscribedError_NotSubscribedReason = {}));
class NotSubscribedError_NotSubscribedError extends OneSignalError["default"] {
    constructor(reason) {
        switch (reason) {
            case NotSubscribedError_NotSubscribedReason.Unknown || NotSubscribedError_NotSubscribedReason.NoDeviceId:
                super('This operation can only be performed after the user is subscribed.');
                break;
            case NotSubscribedError_NotSubscribedReason.NoEmailSet:
                super('No email is currently set.');
                break;
            case NotSubscribedError_NotSubscribedReason.OptedOut:
                super('The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.');
                break;
        }
        this.reason = NotSubscribedError_NotSubscribedReason[reason];
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, NotSubscribedError_NotSubscribedError.prototype);
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/SdkInitError.js

var SdkInitError_SdkInitErrorKind;
(function (SdkInitErrorKind) {
    SdkInitErrorKind[SdkInitErrorKind["InvalidAppId"] = 0] = "InvalidAppId";
    SdkInitErrorKind[SdkInitErrorKind["AppNotConfiguredForWebPush"] = 1] = "AppNotConfiguredForWebPush";
    SdkInitErrorKind[SdkInitErrorKind["MissingSubdomain"] = 2] = "MissingSubdomain";
    SdkInitErrorKind[SdkInitErrorKind["WrongSiteUrl"] = 3] = "WrongSiteUrl";
    SdkInitErrorKind[SdkInitErrorKind["MultipleInitialization"] = 4] = "MultipleInitialization";
    SdkInitErrorKind[SdkInitErrorKind["MissingSafariWebId"] = 5] = "MissingSafariWebId";
    SdkInitErrorKind[SdkInitErrorKind["Unknown"] = 6] = "Unknown";
})(SdkInitError_SdkInitErrorKind || (SdkInitError_SdkInitErrorKind = {}));
class SdkInitError_SdkInitError extends OneSignalError["default"] {
    constructor(reason, extra) {
        switch (reason) {
            case SdkInitError_SdkInitErrorKind.InvalidAppId:
                super('OneSignal: This app ID does not match any existing app. Double check your app ID.');
                break;
            case SdkInitError_SdkInitErrorKind.AppNotConfiguredForWebPush:
                super('OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://goo.gl/01h7fZ).');
                break;
            case SdkInitError_SdkInitErrorKind.MissingSubdomain:
                super('OneSignal: Non-HTTPS pages require a subdomain of OneSignal to be chosen on your dashboard. See step 1.4 on our setup guide (https://goo.gl/xip6JB).');
                break;
            case SdkInitError_SdkInitErrorKind.WrongSiteUrl:
                if (extra && extra.siteUrl) {
                    super(`OneSignal: This web push config can only be used on ${new URL(extra.siteUrl).origin}. Your current origin is ${location.origin}.`);
                }
                else {
                    super('OneSignal: This web push config can not be used on the current site.');
                }
                break;
            case SdkInitError_SdkInitErrorKind.MultipleInitialization:
                super('OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.');
                break;
            case SdkInitError_SdkInitErrorKind.MissingSafariWebId:
                super('OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.');
                break;
            case SdkInitError_SdkInitErrorKind.Unknown:
                super('OneSignal: An unknown initialization error occurred.');
                break;
        }
        this.reason = SdkInitError_SdkInitErrorKind[reason];
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, SdkInitError_SdkInitError.prototype);
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/Event.js
var Event = __webpack_require__("./build/ts-to-es6/src/Event.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/LimitStore.js
/*
 LimitStore.put('colorado', 'rocky');
 ["rocky"]
 LimitStore.put('colorado', 'mountain');
 ["rocky", "mountain"]
 LimitStore.put('colorado', 'national');
 ["mountain", "national"]
 LimitStore.put('colorado', 'park');
 ["national", "park"]
 */
class LimitStore {
    static put(key, value) {
        if (LimitStore.store[key] === undefined) {
            LimitStore.store[key] = [null, null];
        }
        LimitStore.store[key].push(value);
        if (LimitStore.store[key].length == LimitStore.LIMIT + 1) {
            LimitStore.store[key].shift();
        }
        return LimitStore.store[key];
    }
    static get(key) {
        if (LimitStore.store[key] === undefined) {
            LimitStore.store[key] = [null, null];
        }
        return LimitStore.store[key];
    }
    static getFirst(key) {
        return LimitStore.get(key)[0];
    }
    static getLast(key) {
        return LimitStore.get(key)[1];
    }
    static remove(key) {
        delete LimitStore.store[key];
    }
    static isEmpty(key) {
        let values = LimitStore.get(key);
        return values[0] === null && values[1] === null;
    }
}
LimitStore.store = {};
LimitStore.LIMIT = 2;


// EXTERNAL MODULE: ./build/ts-to-es6/src/errors/OneSignalApiError.js
var OneSignalApiError = __webpack_require__("./build/ts-to-es6/src/errors/OneSignalApiError.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/errors/NotImplementedError.js
var NotImplementedError = __webpack_require__("./build/ts-to-es6/src/errors/NotImplementedError.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/DeliveryPlatformKind.js
var DeliveryPlatformKind = __webpack_require__("./build/ts-to-es6/src/models/DeliveryPlatformKind.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/DeviceRecord.js
var DeviceRecord = __webpack_require__("./build/ts-to-es6/src/models/DeviceRecord.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/models/EmailDeviceRecord.js



/**
 * Describes an email device record.
 */
class EmailDeviceRecord_EmailDeviceRecord extends DeviceRecord["DeviceRecord"] {
    /**
     * @param email Omitting this parameter does not void the record's identifier.
     */
    constructor(email, identifierAuthHash, pushDeviceRecordId) {
        super();
        this.email = email;
        this.identifierAuthHash = identifierAuthHash;
        this.pushDeviceRecordId = pushDeviceRecordId;
        this.deliveryPlatform = DeliveryPlatformKind["DeliveryPlatformKind"].Email;
    }
    serialize() {
        const serializedBundle = super.serialize();
        if (this.email) {
            serializedBundle.identifier = this.email;
        }
        if (this.identifierAuthHash) {
            serializedBundle.identifier_auth_hash = this.identifierAuthHash;
        }
        if (this.pushDeviceRecordId) {
            serializedBundle.device_player_id = this.pushDeviceRecordId;
        }
        return serializedBundle;
    }
    deserialize(_) { throw new NotImplementedError["default"](); }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/OneSignalApiBase.js
var OneSignalApiBase = __webpack_require__("./build/ts-to-es6/src/OneSignalApiBase.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/context/shared/utils/Utils.js + 1 modules
var Utils = __webpack_require__("./build/ts-to-es6/src/context/shared/utils/Utils.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/libraries/Log.js
var Log = __webpack_require__("./build/ts-to-es6/src/libraries/Log.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/OneSignalApiShared.js






class OneSignalApiShared_OneSignalApiShared {
    static getPlayer(appId, playerId) {
        Utils["default"].enforceAppId(appId);
        Utils["default"].enforcePlayerId(playerId);
        return OneSignalApiBase["default"].get(`players/${playerId}?app_id=${appId}`);
    }
    static updatePlayer(appId, playerId, options) {
        Utils["default"].enforceAppId(appId);
        Utils["default"].enforcePlayerId(playerId);
        return OneSignalApiBase["default"].put(`players/${playerId}`, Object.assign({ app_id: appId }, options));
    }
    static sendNotification(appId, playerIds, titles, contents, url, icon, data, buttons) {
        var params = {
            app_id: appId,
            contents: contents,
            include_player_ids: playerIds,
            isAnyWeb: true,
            data: data,
            web_buttons: buttons
        };
        if (titles) {
            params.headings = titles;
        }
        if (url) {
            params.url = url;
        }
        if (icon) {
            params.chrome_web_icon = icon;
            params.firefox_icon = icon;
        }
        Utils["default"].trimUndefined(params);
        return OneSignalApiBase["default"].post('notifications', params);
    }
    static createUser(deviceRecord) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const serializedDeviceRecord = deviceRecord.serialize();
            Utils["default"].enforceAppId(serializedDeviceRecord.app_id);
            const response = yield OneSignalApiBase["default"].post(`players`, serializedDeviceRecord);
            if (response && response.success)
                return response.id;
            return null;
        });
    }
    static createEmailRecord(appConfig, emailProfile, pushDeviceRecordId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Utils["default"].enforceAppId(appConfig.appId);
            const emailRecord = new EmailDeviceRecord_EmailDeviceRecord(emailProfile.emailAddress, emailProfile.identifierAuthHash, pushDeviceRecordId);
            emailRecord.appId = appConfig.appId;
            const response = yield OneSignalApiBase["default"].post(`players`, emailRecord.serialize());
            if (response && response.success) {
                return response.id;
            }
            else {
                return null;
            }
        });
    }
    static updateEmailRecord(appConfig, emailProfile, pushDeviceRecordId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Utils["default"].enforceAppId(appConfig.appId);
            Utils["default"].enforcePlayerId(emailProfile.emailId);
            const emailRecord = new EmailDeviceRecord_EmailDeviceRecord(emailProfile.emailAddress, emailProfile.identifierAuthHash, pushDeviceRecordId);
            emailRecord.appId = appConfig.appId;
            const response = yield OneSignalApiBase["default"].put(`players/${emailProfile.emailId}`, emailRecord.serialize());
            if (response && response.success) {
                return response.id;
            }
            else {
                return null;
            }
        });
    }
    static logoutEmail(appConfig, emailProfile, deviceId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Utils["default"].enforceAppId(appConfig.appId);
            Utils["default"].enforcePlayerId(deviceId);
            const response = yield OneSignalApiBase["default"].post(`players/${deviceId}/email_logout`, {
                app_id: appConfig.appId,
                parent_player_id: emailProfile.emailId,
                identifier_auth_hash: emailProfile.identifierAuthHash ? emailProfile.identifierAuthHash : undefined
            });
            if (response && response.success) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    static updateUserSession(userId, deviceRecord) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const serializedDeviceRecord = deviceRecord.serialize();
                Utils["default"].enforceAppId(serializedDeviceRecord.app_id);
                Utils["default"].enforcePlayerId(userId);
                const response = yield OneSignalApiBase["default"].post(`players/${userId}/on_session`, serializedDeviceRecord);
                if (response.id) {
                    // A new user ID can be returned
                    return response.id;
                }
                else {
                    return userId;
                }
            }
            catch (e) {
                if (e && Array.isArray(e.errors) && e.errors.length > 0 &&
                    Utils["default"].contains(e.errors[0], 'app_id not found')) {
                    throw new OneSignalApiError["OneSignalApiError"](OneSignalApiError["OneSignalApiErrorKind"].MissingAppId);
                }
                else
                    throw e;
            }
        });
    }
    static sendOutcome(data) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].info("Outcome payload:", data);
            try {
                yield OneSignalApiBase["default"].post("outcomes/measure", data);
            }
            catch (e) {
                Log["default"].error("sendOutcome", e);
            }
        });
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/services/Database.js + 2 modules
var Database = __webpack_require__("./build/ts-to-es6/src/services/Database.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/utils.js
var utils = __webpack_require__("./build/ts-to-es6/src/utils.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/CustomLink.js



class CustomLink_CustomLink {
    static initialize(config) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!config || !config.enabled) {
                return;
            }
            Log["default"].info("Inititalize CustomLink");
            const sdkStylesLoadResult = yield OneSignal.context.dynamicResourceLoader.loadSdkStylesheet();
            if (sdkStylesLoadResult !== 0 /* Loaded */) {
                Log["default"].debug('Not initializing custom link button because styles failed to load.');
                return;
            }
            const containerElements = document.querySelectorAll(CustomLink_CustomLink.containerSelector);
            containerElements.forEach((element) => {
                if (!CustomLink_CustomLink.isInitialized(element)) {
                    CustomLink_CustomLink.injectMarkup(element, config);
                }
            });
            const isPushEnabled = yield OneSignal.privateIsPushNotificationsEnabled();
            const isOptedOut = yield OneSignal.internalIsOptedOut();
            const subscribeElements = document.querySelectorAll(CustomLink_CustomLink.subscribeSelector);
            subscribeElements.forEach((element) => CustomLink_CustomLink.initSubscribeElement(element, config, isPushEnabled, isOptedOut));
            const explanationElements = document.querySelectorAll(CustomLink_CustomLink.explanationSelector);
            explanationElements.forEach((element) => CustomLink_CustomLink.initExplanationElement(element, config, isPushEnabled));
        });
    }
    static injectMarkup(container, config) {
        if (!config.text) {
            Log["default"].error("CustomLink: required property 'text' is missing in the config");
            return;
        }
        // Clearing out the contents of the container first
        container.innerHTML = '';
        if (config.text.explanation) {
            const explanation = document.createElement("p");
            Object(utils["addCssClass"])(explanation, CustomLink_CustomLink.explanationClass);
            container.appendChild(explanation);
        }
        if (config.text.subscribe) {
            const subscribe = document.createElement("button");
            Object(utils["addCssClass"])(subscribe, CustomLink_CustomLink.subscribeClass);
            container.appendChild(subscribe);
        }
        CustomLink_CustomLink.markAsInitialized(container);
    }
    static initSubscribeElement(element, config, isPushEnabled, isOptedOut) {
        if (config.text && config.text.subscribe) {
            if (!isPushEnabled) {
                element.textContent = config.text.subscribe;
            }
        }
        if (config.text && config.text.unsubscribe) {
            if (isPushEnabled) {
                element.textContent = config.text.unsubscribe;
            }
        }
        CustomLink_CustomLink.setResetClass(element);
        CustomLink_CustomLink.setStateClass(element, isPushEnabled);
        CustomLink_CustomLink.setStyleClass(element, config);
        CustomLink_CustomLink.setSizeClass(element, config);
        CustomLink_CustomLink.setCustomColors(element, config);
        if (config.unsubscribeEnabled !== true) {
            Object(utils["addCssClass"])(element, "hide");
        }
        element.setAttribute(CustomLink_CustomLink.subscriptionStateAttribute, isPushEnabled.toString());
        element.setAttribute(CustomLink_CustomLink.optedOutAttribute, isOptedOut.toString());
        if (!CustomLink_CustomLink.isInitialized(element)) {
            element.addEventListener("click", () => {
                Log["default"].info("CustomLink: subscribe clicked");
                CustomLink_CustomLink.handleClick(element);
            });
            CustomLink_CustomLink.markAsInitialized(element);
        }
    }
    static handleClick(element) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const state = element.getAttribute(CustomLink_CustomLink.subscriptionStateAttribute) === "true";
            const optedOut = element.getAttribute(CustomLink_CustomLink.optedOutAttribute) === "true";
            if (state) {
                const isPushEnabled = yield OneSignal.privateIsPushNotificationsEnabled();
                if (isPushEnabled) {
                    yield OneSignal.setSubscription(false);
                }
            }
            else {
                if (!optedOut) {
                    const autoAccept = !OneSignal.environmentInfo.requiresUserInteraction;
                    const options = { autoAccept };
                    yield OneSignal.registerForPushNotifications(options);
                }
                else {
                    yield OneSignal.setSubscription(true);
                }
            }
        });
    }
    static initExplanationElement(element, config, isPushEnabled) {
        if (config.text && config.text.explanation) {
            element.textContent = config.text.explanation;
        }
        CustomLink_CustomLink.setResetClass(element);
        CustomLink_CustomLink.setStateClass(element, isPushEnabled);
        CustomLink_CustomLink.setSizeClass(element, config);
        if (config.unsubscribeEnabled !== true) {
            Object(utils["addCssClass"])(element, "hide");
        }
    }
    // Using stricter HTMLElement class for element parameter to access style property
    static setCustomColors(element, config) {
        if (config.style === "button" && config.color && config.color.button && config.color.text) {
            element.style.backgroundColor = config.color.button;
            element.style.color = config.color.text;
        }
        else if (config.style === "link" && config.color && config.color.text) {
            element.style.color = config.color.text;
        }
    }
    static setStateClass(element, subscribed) {
        const oldClassName = subscribed ? "state-unsubscribed" : "state-subscribed";
        const newClassName = subscribed ? "state-subscribed" : "state-unsubscribed";
        if (Object(utils["hasCssClass"])(element, oldClassName)) {
            Object(utils["removeCssClass"])(element, oldClassName);
        }
        if (!Object(utils["hasCssClass"])(element, newClassName)) {
            Object(utils["addCssClass"])(element, newClassName);
        }
    }
    static setStyleClass(element, config) {
        if (!config || !config.style) {
            return;
        }
        const newClassName = config.style;
        if (!Object(utils["hasCssClass"])(element, newClassName)) {
            Object(utils["addCssClass"])(element, newClassName);
        }
    }
    static setSizeClass(element, config) {
        if (!config || !config.size) {
            return;
        }
        const newClassName = config.size;
        if (!Object(utils["hasCssClass"])(element, newClassName)) {
            Object(utils["addCssClass"])(element, newClassName);
        }
    }
    static setResetClass(element) {
        const newClassName = CustomLink_CustomLink.resetClass;
        if (!Object(utils["hasCssClass"])(element, newClassName)) {
            Object(utils["addCssClass"])(element, newClassName);
        }
    }
    static markAsInitialized(element) {
        element.setAttribute(CustomLink_CustomLink.initializedAttribute, "true");
    }
    static isInitialized(element) {
        return element.getAttribute(CustomLink_CustomLink.initializedAttribute) === "true";
    }
}
CustomLink_CustomLink.initializedAttribute = "data-cl-initialized";
CustomLink_CustomLink.subscriptionStateAttribute = "data-cl-state";
CustomLink_CustomLink.optedOutAttribute = "data-cl-optedout";
CustomLink_CustomLink.containerClass = "onesignal-customlink-container";
CustomLink_CustomLink.containerSelector = `.${CustomLink_CustomLink.containerClass}`;
CustomLink_CustomLink.subscribeClass = "onesignal-customlink-subscribe";
CustomLink_CustomLink.subscribeSelector = `.${CustomLink_CustomLink.subscribeClass}`;
CustomLink_CustomLink.explanationClass = "onesignal-customlink-explanation";
CustomLink_CustomLink.explanationSelector = `.${CustomLink_CustomLink.explanationClass}`;
CustomLink_CustomLink.resetClass = "onesignal-reset";
/* harmony default export */ var src_CustomLink = (CustomLink_CustomLink);


// EXTERNAL MODULE: ./build/ts-to-es6/src/utils/OneSignalUtils.js
var OneSignalUtils = __webpack_require__("./build/ts-to-es6/src/utils/OneSignalUtils.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/utils/BrowserUtils.js
var BrowserUtils = __webpack_require__("./build/ts-to-es6/src/utils/BrowserUtils.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/PromptsHelper.js
class PromptsHelper {
    static isCategorySlidedownConfigured(context) {
        const { promptOptions } = context.appConfig.userConfig;
        if (!promptOptions || !promptOptions.slidedown || !promptOptions.slidedown.categories) {
            return false;
        }
        return (!!promptOptions.slidedown.categories.tags && promptOptions.slidedown.categories.tags.length > 0);
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/models/NotificationPermission.js
var NotificationPermission;
(function (NotificationPermission) {
    /**
     * The user has not granted notification permissions and may have just dismissed the notification permission prompt.
     */
    NotificationPermission["Default"] = "default";
    /**
     * The user has granted notification permissions.
     */
    NotificationPermission["Granted"] = "granted";
    /**
     * The user has blocked notifications.
     */
    NotificationPermission["Denied"] = "denied";
})(NotificationPermission || (NotificationPermission = {}));


// EXTERNAL MODULE: ./build/ts-to-es6/src/managers/SdkEnvironment.js
var SdkEnvironment = __webpack_require__("./build/ts-to-es6/src/managers/SdkEnvironment.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/PermissionManager.js







/**
 * A permission manager to consolidate the different quirks of obtaining and evaluating permissions
 * across Safari, Chrome, and Firefox.
 */
class PermissionManager_PermissionManager {
    static get STORED_PERMISSION_KEY() {
        return 'storedNotificationPermission';
    }
    /**
     * Returns an interpreted version of the browser's notification permission.
     *
     * On some environments, it isn't possible to obtain the actual notification
     * permission. For example, starting with Chrome 62+, cross-origin iframes and
     * insecure origins can no longer accurately detect the default notification
     * permission state.
     *
     * For cross-origin iframes, returned permissions are correct except that
     * "denied" is returned instead of "default".
     *
     * For insecure origins, returned permissions are always "denied". This
     * differs from cross-origin iframes where the cross-origin iframes are
     * acurrate if returning "granted", but insecure origins will always return
     * "denied" regardless of the actual permission.
     *
     * This method therefore returns the notification permission best suited for
     * our SDK, and it may not always be accurate. On most environments (i.e. not
     * Chrome 62+), the returned permission will be accurate.
     *
     * @param safariWebId The Safari web ID necessary to access the permission
     * state on Safari.
     */
    getNotificationPermission(safariWebId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const reportedPermission = yield this.getReportedNotificationPermission(safariWebId);
            if (yield this.isPermissionEnvironmentAmbiguous(reportedPermission))
                return yield this.getInterpretedAmbiguousPermission(reportedPermission);
            return reportedPermission;
        });
    }
    /**
     * Returns the browser's actual notification permission as reported without any modifications.
     *
     * One challenge is determining the frame context our permission query needs to run in:
     *
     *   - For a regular top-level HTTPS site, query our current top-level frame
     *
     *   - For a custom web push setup in a child HTTPS iframe, query our current child iframe (even
     *     though the returned permission is ambiguous on Chrome 62+ if our origin is different from
     *     that of the top-level frame)
     *
     *   - For a regular HTTP site, query OneSignal's child subdomain.os.tc or subdomain.onesignal.com
     *     iframe
     *
     *   - For a regular HTTP site embedded in a child iframe, still query the nested child's
     *     OneSignal subdomain.os.tc or subdomain.onesignal.com iframe
     *
     * This simplifies into determining whether the web push setup is using OneSignal's subdomain. If
     * not, we assume the current frame context, regardless of whether it is a child or top-level
     * frame, is the current context to run the permission query in.
     *
     * @param safariWebId The Safari web ID necessary to access the permission state on Safari.
     */
    getReportedNotificationPermission(safariWebId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (bowser_default.a.safari)
                return PermissionManager_PermissionManager.getSafariNotificationPermission(safariWebId);
            // Is this web push setup using subdomain.os.tc or subdomain.onesignal.com?
            if (OneSignalUtils["default"].isUsingSubscriptionWorkaround())
                return yield this.getOneSignalSubdomainNotificationPermission(safariWebId);
            else {
                const reportedPermission = this.getW3cNotificationPermission();
                if (yield this.isPermissionEnvironmentAmbiguous(reportedPermission)) {
                    return yield this.getInterpretedAmbiguousPermission(reportedPermission);
                }
                return this.getW3cNotificationPermission();
            }
        });
    }
    /**
     * Returns the Safari browser's notification permission as reported by the browser.
     *
     * @param safariWebId The Safari web ID necessary to access the permission state on Safari.
     */
    static getSafariNotificationPermission(safariWebId) {
        if (safariWebId)
            return window.safari.pushNotification.permission(safariWebId).permission;
        throw new InvalidArgumentError["InvalidArgumentError"]('safariWebId', InvalidArgumentError["InvalidArgumentReason"].Empty);
    }
    /**
     * Returns the notification permission as reported by the browser for non-Safari browsers. This
     * includes Chrome, Firefox, Opera, Yandex, and every browser following the Notification API
     * standard.
     */
    getW3cNotificationPermission() {
        return Notification.permission;
    }
    /**
     * Returns the notification permission as reported by the browser for the OneSignal subdomain
     * iframe.
     *
     * @param safariWebId The Safari web ID necessary to access the permission state on Safari.
     */
    getOneSignalSubdomainNotificationPermission(safariWebId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, { safariWebId: safariWebId }, (reply) => {
                    const remoteNotificationPermission = reply.data;
                    resolve(remoteNotificationPermission);
                });
            });
        });
    }
    /**
     * To interpret the browser's reported notification permission, we need to know whether we're in
     * an environment where the returned permission should be treated ambiguously.
     *
     * The reported permission should only be treated ambiguously if:
     *
     *   - We're not on Safari or Firefox (Chromium, Chrome, Opera, and Yandex will all eventually
     *     share the same Chrome 62+ codebase)
     *
     *   - And the reported permission is "denied"
     *
     *   - And the current frame context is either a cross-origin iframe or insecure
     */
    isPermissionEnvironmentAmbiguous(permission) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // For testing purposes, allows changing the browser user agent
            const browser = OneSignalUtils["default"].redetectBrowserUserAgent();
            return (!browser.safari &&
                !browser.firefox &&
                permission === NotificationPermission.Denied &&
                (this.isCurrentFrameContextCrossOrigin() ||
                    (yield SdkEnvironment["default"].isFrameContextInsecure()) ||
                    OneSignalUtils["default"].isUsingSubscriptionWorkaround() ||
                    SdkEnvironment["default"].isInsecureOrigin()));
        });
    }
    /**
     * Returns true if we're a cross-origin iframe.
     *
     * This means:
     *
     *   - We're not the top-level frame
     *   - We're unable to access to the top-level frame's origin, or we can access the origin but it
     *     is different. On most browsers, accessing the top-level origin should throw an exception.
     */
    isCurrentFrameContextCrossOrigin() {
        let topFrameOrigin;
        try {
            // Accessing a cross-origin top-level frame's origin should throw an error
            topFrameOrigin = window.top.location.origin;
        }
        catch (e) {
            // We're in a cross-origin child iframe
            return true;
        }
        return window.top !== window &&
            topFrameOrigin !== window.location.origin;
    }
    /**
     * To workaround Chrome 62+'s permission ambiguity for "denied" permissions,
     * we assume the permission is "default" until we actually record the
     * permission being "denied" or "granted".
     *
     * This allows our best-effort approach to subscribe new users, and upon
     * subscribing, if we discover the actual permission to be denied, we record
     * this for next time.
     *
     * @param reportedPermission The notification permission as reported by the
     * browser without any modifications.
     */
    getInterpretedAmbiguousPermission(reportedPermission) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            switch (reportedPermission) {
                case NotificationPermission.Denied:
                    const storedPermission = this.getStoredPermission();
                    if (storedPermission) {
                        // If we've recorded the last known actual browser permission, return that
                        return storedPermission;
                    }
                    else {
                        // If we don't have any stored permission, assume default
                        return NotificationPermission.Default;
                    }
                default:
                    return reportedPermission;
            }
        });
    }
    getStoredPermission() {
        return LocalStorage_LocalStorage.getStoredPermission();
    }
    setStoredPermission(permission) {
        LocalStorage_LocalStorage.setStoredPermission(permission);
    }
    updateStoredPermission() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // TODO verify if `OneSignal.config.safariWebId` should be passed as a parameter
            const permission = yield this.getNotificationPermission();
            return this.setStoredPermission(permission);
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/utils/LocalStorage.js


const LocalStorage_IS_OPTED_OUT = "isOptedOut";
const LocalStorage_IS_PUSH_NOTIFICATIONS_ENABLED = "isPushNotificationsEnabled";
const LocalStorage_PAGE_VIEWS = "os_pageViews";
class LocalStorage_LocalStorage {
    static getIsOptedOut() {
        return localStorage.getItem(LocalStorage_IS_OPTED_OUT) === "true";
    }
    static getIsPushNotificationsEnabled() {
        return localStorage.getItem(LocalStorage_IS_PUSH_NOTIFICATIONS_ENABLED) === "true";
    }
    static setIsOptedOut(value) {
        localStorage.setItem(LocalStorage_IS_OPTED_OUT, value.toString());
    }
    static setIsPushNotificationsEnabled(value) {
        localStorage.setItem(LocalStorage_IS_PUSH_NOTIFICATIONS_ENABLED, value.toString());
    }
    static setStoredPermission(value) {
        localStorage.setItem(PermissionManager_PermissionManager.STORED_PERMISSION_KEY, value);
    }
    static getStoredPermission() {
        var permission = localStorage.getItem(PermissionManager_PermissionManager.STORED_PERMISSION_KEY) || "default";
        switch (permission) {
            case "granted":
                return NotificationPermission.Granted;
            case "denied":
                return NotificationPermission.Denied;
            default:
                return NotificationPermission.Default;
        }
    }
    static setLocalPageViewCount(count) {
        localStorage.setItem(LocalStorage_PAGE_VIEWS, count.toString());
    }
    static getLocalPageViewCount() {
        return Number(localStorage.getItem(LocalStorage_PAGE_VIEWS));
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/EventHelper.js











class EventHelper_EventHelper {
    static onNotificationPermissionChange() {
        EventHelper_EventHelper.checkAndTriggerSubscriptionChanged();
    }
    static onInternalSubscriptionSet(optedOut) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            LimitStore.put('subscription.optedOut', optedOut);
        });
    }
    static checkAndTriggerSubscriptionChanged() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            OneSignalUtils["OneSignalUtils"].logMethodCall('checkAndTriggerSubscriptionChanged');
            const context = OneSignal.context;
            const subscriptionState = yield context.subscriptionManager.getSubscriptionState();
            const isPushEnabled = yield OneSignal.privateIsPushNotificationsEnabled();
            const appState = yield Database["default"].getAppState();
            const { lastKnownPushEnabled } = appState;
            const didStateChange = (lastKnownPushEnabled === null ||
                isPushEnabled !== lastKnownPushEnabled);
            if (!didStateChange)
                return;
            Log["default"].info(`The user's subscription state changed from ` +
                `${lastKnownPushEnabled === null ? '(not stored)' : lastKnownPushEnabled} ⟶ ${subscriptionState.subscribed}`);
            LocalStorage_LocalStorage.setIsPushNotificationsEnabled(isPushEnabled);
            appState.lastKnownPushEnabled = isPushEnabled;
            yield Database["default"].setAppState(appState);
            EventHelper_EventHelper.triggerSubscriptionChanged(isPushEnabled);
        });
    }
    static _onSubscriptionChanged(newSubscriptionState) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            EventHelper_EventHelper.onSubscriptionChanged_showWelcomeNotification(newSubscriptionState);
            EventHelper_EventHelper.onSubscriptionChanged_sendCategorySlidedownTags(newSubscriptionState);
            EventHelper_EventHelper.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate();
            EventHelper_EventHelper.onSubscriptionChanged_updateCustomLink();
        });
    }
    static onSubscriptionChanged_sendCategorySlidedownTags(isSubscribed) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (isSubscribed !== true) {
                return;
            }
            const { context } = OneSignal;
            if (PromptsHelper.isCategorySlidedownConfigured(context)) {
                yield OneSignal.context.tagManager.sendTags(false);
            }
        });
    }
    static onSubscriptionChanged_showWelcomeNotification(isSubscribed) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (OneSignal.__doNotShowWelcomeNotification) {
                Log["default"].debug('Not showing welcome notification because user has previously subscribed.');
                return;
            }
            if (isSubscribed === true) {
                const { deviceId } = yield Database["default"].getSubscription();
                const { appId } = yield Database["default"].getAppConfig();
                let welcome_notification_opts = OneSignal.config.userConfig.welcomeNotification;
                let welcome_notification_disabled = welcome_notification_opts !== undefined && welcome_notification_opts['disable'] === true;
                let title = welcome_notification_opts !== undefined &&
                    welcome_notification_opts['title'] !== undefined &&
                    welcome_notification_opts['title'] !== null
                    ? welcome_notification_opts['title']
                    : '';
                let message = welcome_notification_opts !== undefined &&
                    welcome_notification_opts['message'] !== undefined &&
                    welcome_notification_opts['message'] !== null &&
                    welcome_notification_opts['message'].length > 0
                    ? welcome_notification_opts['message']
                    : 'Thanks for subscribing!';
                let unopenableWelcomeNotificationUrl = new URL(location.href).origin + '?_osp=do_not_open';
                let url = welcome_notification_opts && welcome_notification_opts['url'] && welcome_notification_opts['url'].length > 0
                    ? welcome_notification_opts['url']
                    : unopenableWelcomeNotificationUrl;
                title = BrowserUtils["BrowserUtils"].decodeHtmlEntities(title);
                message = BrowserUtils["BrowserUtils"].decodeHtmlEntities(message);
                if (!welcome_notification_disabled) {
                    Log["default"].debug('Sending welcome notification.');
                    OneSignalApiShared_OneSignalApiShared.sendNotification(appId, [deviceId], { en: title }, { en: message }, url, null, { __isOneSignalWelcomeNotification: true }, undefined);
                    Event["default"].trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, {
                        title: title,
                        message: message,
                        url: url
                    });
                }
            }
        });
    }
    static onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!OneSignal.config.userConfig.notifyButton)
                return;
            const displayPredicate = OneSignal.config.userConfig.notifyButton.displayPredicate;
            if (displayPredicate && typeof displayPredicate === "function" && OneSignal.notifyButton) {
                const predicateResult = yield displayPredicate();
                if (predicateResult !== false) {
                    Log["default"].debug('Showing notify button because display predicate returned true.');
                    OneSignal.notifyButton.launcher.show();
                }
                else {
                    Log["default"].debug('Hiding notify button because display predicate returned false.');
                    OneSignal.notifyButton.launcher.hide();
                }
            }
        });
    }
    static onSubscriptionChanged_updateCustomLink() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (OneSignal.config.userConfig.promptOptions) {
                yield CustomLink_CustomLink.initialize(OneSignal.config.userConfig.promptOptions.customlink);
            }
        });
    }
    static triggerSubscriptionChanged(to) {
        Event["default"].trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, to);
    }
    /**
     * When notifications are clicked, because the site isn't open, the notification is stored in the database. The next
     * time the page opens, the event is triggered if its less than 5 minutes (usually page opens instantly from click).
     *
     * This method is fired for both HTTPS and HTTP sites, so for HTTP sites, the host URL needs to be used, not the
     * subdomain.onesignal.com URL.
     */
    static fireStoredNotificationClicks(url = document.URL) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            function fireEventWithNotification(clickedNotificationInfo) {
                return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                    // Remove the notification from the recently clicked list
                    // Once this page processes this retroactively provided clicked event, nothing should get the same event
                    const appState = yield Database["default"].getAppState();
                    appState.clickedNotifications[clickedNotificationInfo.url] = null;
                    yield Database["default"].setAppState(appState);
                    /* Clicked notifications look like:
                    {
                      "url": "https://notify.tech",
                      "data": {
                        "id": "f44dfcc7-e8cd-47c6-af7e-e2b7ac68afca",
                        "heading": "Example Notification",
                        "content": "This is an example notification.",
                        "icon": "https://onesignal.com/images/notification_logo.png"
                        (there would be a URL field here if it was set)
                      },
                      "timestamp": 1490998270607
                    }
                    */
                    const { data: notification, timestamp } = clickedNotificationInfo;
                    if (timestamp) {
                        const minutesSinceNotificationClicked = (Date.now() - timestamp) / 1000 / 60;
                        if (minutesSinceNotificationClicked > 5)
                            return;
                    }
                    Event["default"].trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, notification);
                });
            }
            const appState = yield Database["default"].getAppState();
            /* Is the flag notificationClickHandlerMatch: origin enabled?
        
               If so, this means we should provide a retroactive notification.clicked event as long as there exists any recently clicked
               notification that matches this site's origin.
        
               Otherwise, the default behavior is to only provide a retroactive notification.clicked event if this page's URL exactly
               matches the notification's URL.
            */
            const notificationClickHandlerMatch = yield Database["default"].get('Options', 'notificationClickHandlerMatch');
            if (notificationClickHandlerMatch === 'origin') {
                for (const clickedNotificationUrl of Object.keys(appState.clickedNotifications)) {
                    // Using notificationClickHandlerMatch: 'origin', as long as the notification's URL's origin matches our current tab's origin,
                    // fire the clicked event
                    if (new URL(clickedNotificationUrl).origin === location.origin) {
                        const clickedNotification = appState.clickedNotifications[clickedNotificationUrl];
                        yield fireEventWithNotification(clickedNotification);
                    }
                }
            }
            else {
                /*
                  If a user is on https://site.com, document.URL and location.href both report the page's URL as https://site.com/.
                  This causes checking for notifications for the current URL to fail, since there is a notification for https://site.com,
                  but there is no notification for https://site.com/.
          
                  As a workaround, if there are no notifications for https://site.com/, we'll do a check for https://site.com.
                */
                var pageClickedNotifications = appState.clickedNotifications[url];
                if (pageClickedNotifications) {
                    yield fireEventWithNotification(pageClickedNotifications);
                }
                else if (!pageClickedNotifications && url.endsWith('/')) {
                    var urlWithoutTrailingSlash = url.substring(0, url.length - 1);
                    pageClickedNotifications = appState.clickedNotifications[urlWithoutTrailingSlash];
                    if (pageClickedNotifications) {
                        yield fireEventWithNotification(pageClickedNotifications);
                    }
                }
            }
        });
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/models/WindowEnvironmentKind.js
var WindowEnvironmentKind = __webpack_require__("./build/ts-to-es6/src/models/WindowEnvironmentKind.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/LegacyManager.js


/**
 * Creates method proxies for once-supported methods.
 */
class LegacyManager_LegacyManager {
    static promiseStub() {
        return {
            then: LegacyManager_LegacyManager.promiseStub,
            catch: LegacyManager_LegacyManager.promiseStub
        };
    }
    static ensureBackwardsCompatibility(oneSignal) {
        LegacyManager_LegacyManager.environmentPolyfill(oneSignal);
        LegacyManager_LegacyManager.postmams(oneSignal);
        oneSignal.syncHashedEmail = LegacyManager_LegacyManager.promiseStub;
    }
    static environmentPolyfill(oneSignal) {
        oneSignal.environment = {};
        oneSignal.environment.getEnv = function () { return ''; };
        oneSignal.environment.isPopup = function () {
            return SdkEnvironment["default"].getWindowEnv() === WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionPopup;
        };
        oneSignal.environment.isIframe = function () {
            return SdkEnvironment["default"].getWindowEnv() === WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalProxyFrame;
        };
    }
    static postmams(oneSignal) {
        const postmamMessageFunc = function message() {
            this.messenger.message.apply(this.messenger, arguments);
        };
        const postmamPostMessageFunc = function postMessage() {
            this.messenger.postMessage.apply(this.messenger, arguments);
        };
        function assignPostmamLegacyFunctions(postmamLikeObject) {
            postmamLikeObject.message = postmamMessageFunc;
            postmamLikeObject.postMessage = postmamPostMessageFunc;
        }
        if (oneSignal.proxyFrame) {
            oneSignal.iframePostmam = oneSignal.proxyFrame;
            assignPostmamLegacyFunctions(oneSignal.iframePostmam);
        }
        if (oneSignal.subscriptionPopup) {
            oneSignal.popupPostmam = oneSignal.subscriptionPopup;
            assignPostmamLegacyFunctions(oneSignal.popupPostmam);
        }
        if (oneSignal.subscriptionModal) {
            oneSignal.modalPostmam = oneSignal.subscriptionModal;
            assignPostmamLegacyFunctions(oneSignal.modalPostmam);
        }
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/modules/TimedLocalStorage.js
/**
 * LocalStorage with expiring keys.
 *
 * Used when synchronous data access is required, like when clicking the notify button to show the
 * popup conditionally based on a storage value. IndexedDb and cross-frame communication is
 * asynchronous and loses the direct user action privilege required to show a popup.
 */
class TimedLocalStorage {
    /**
     * Performs a feature test to determine whether LocalStorage is accessible. For example, a user's
     * browser preferences set to prevent saving website data will disable LocalStorage.
     */
    static isLocalStorageSupported() {
        try {
            if (typeof localStorage === "undefined") {
                return false;
            }
            localStorage.getItem("test");
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Sets a key in LocalStorage with an expiration time measured in minutes.
     */
    static setItem(key, value, expirationInMinutes) {
        if (!TimedLocalStorage.isLocalStorageSupported()) {
            return;
        }
        const expirationInMilliseconds = typeof expirationInMinutes !== "undefined" ?
            expirationInMinutes * 60 * 1000 :
            0;
        const record = {
            value: JSON.stringify(value),
            timestamp: typeof expirationInMinutes !== "undefined" ?
                new Date().getTime() + expirationInMilliseconds :
                undefined,
        };
        localStorage.setItem(key, JSON.stringify(record));
    }
    /**
     * Retrieves a key from LocalStorage if the expiration time when the key was set hasn't already
     * expired.
     */
    static getItem(key) {
        if (!TimedLocalStorage.isLocalStorageSupported()) {
            return null;
        }
        const record = localStorage.getItem(key);
        let parsedRecord;
        try {
            parsedRecord = JSON.parse(record);
        }
        catch (e) {
            return null;
        }
        if (parsedRecord === null) {
            return null;
        }
        if (parsedRecord.timestamp &&
            new Date().getTime() >= parsedRecord.timestamp) {
            localStorage.removeItem(key);
            return null;
        }
        let parsedRecordValue = parsedRecord.value;
        try {
            parsedRecordValue = JSON.parse(parsedRecord.value);
        }
        catch (e) {
            return parsedRecordValue;
        }
        return parsedRecordValue;
    }
    /**
     * Removes an item from LocalStorage.
     */
    static removeItem(key) {
        if (!TimedLocalStorage.isLocalStorageSupported()) {
            return null;
        }
        localStorage.removeItem(key);
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/models/SubscriptionStateKind.js
var SubscriptionStateKind = __webpack_require__("./build/ts-to-es6/src/models/SubscriptionStateKind.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/PushDeviceRecord.js
var PushDeviceRecord = __webpack_require__("./build/ts-to-es6/src/models/PushDeviceRecord.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/utils/PermissionUtils.js
var PermissionUtils = __webpack_require__("./build/ts-to-es6/src/utils/PermissionUtils.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/PushPermissionNotGrantedError.js

var PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason;
(function (PushPermissionNotGrantedErrorReason) {
    PushPermissionNotGrantedErrorReason[PushPermissionNotGrantedErrorReason["Blocked"] = 0] = "Blocked";
    PushPermissionNotGrantedErrorReason[PushPermissionNotGrantedErrorReason["Dismissed"] = 1] = "Dismissed";
    PushPermissionNotGrantedErrorReason[PushPermissionNotGrantedErrorReason["Default"] = 2] = "Default";
})(PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason || (PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason = {}));
class PushPermissionNotGrantedError_PushPermissionNotGrantedError extends OneSignalError["default"] {
    constructor(reason) {
        switch (reason) {
            case PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Dismissed:
                super('The user dismissed the permission prompt.');
                break;
            case PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Blocked:
                super('Notification permissions are blocked.');
                break;
            case PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Default:
                super('Notification permissions have not been granted yet.');
                break;
        }
        this.reason = reason;
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, PushPermissionNotGrantedError_PushPermissionNotGrantedError.prototype);
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/models/RawPushSubscription.js
var RawPushSubscription = __webpack_require__("./build/ts-to-es6/src/models/RawPushSubscription.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/Session.js
var Session = __webpack_require__("./build/ts-to-es6/src/models/Session.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/helpers/page/ServiceWorkerHelper.js
var ServiceWorkerHelper = __webpack_require__("./build/ts-to-es6/src/helpers/page/ServiceWorkerHelper.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/context/browser/models/Browser.js
var Browser;
(function (Browser) {
    Browser["Safari"] = "safari";
    Browser["Firefox"] = "firefox";
    Browser["Chrome"] = "chrome";
    Browser["Opera"] = "opera";
    Browser["Edge"] = "edge";
    Browser["Other"] = "other";
})(Browser || (Browser = {}));


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/SubscriptionHelper.js
















class SubscriptionHelper_SubscriptionHelper {
    static registerForPush() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const isPushEnabled = LocalStorage_LocalStorage.getIsPushNotificationsEnabled();
            return yield SubscriptionHelper_SubscriptionHelper.internalRegisterForPush(isPushEnabled);
        });
    }
    static internalRegisterForPush(isPushEnabled) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            let subscription = null;
            /*
              Within the same page navigation (the same session), do not register for
              push if the user is already subscribed, otherwise the user will have its
              session count incremented on each page refresh. However, if the user is
              not subscribed, subscribe.
            */
            if (isPushEnabled && !context.pageViewManager.isFirstPageView()) {
                Log["default"].debug('Not registering for push because the user is subscribed and this is not the first page view.');
                Log["default"].debug("But we want to rekindle their session.");
                const deviceId = yield MainHelper_MainHelper.getDeviceId();
                if (deviceId) {
                    const deviceRecord = yield MainHelper_MainHelper.createDeviceRecord(OneSignal.config.appId, true);
                    yield OneSignal.context.sessionManager.upsertSession(deviceId, deviceRecord, Session["SessionOrigin"].PageRefresh);
                }
                else {
                    Log["default"].error("Should have been impossible to have push as enabled but no device id.");
                }
                return null;
            }
            if (typeof OneSignal !== "undefined") {
                if (OneSignal._isRegisteringForPush)
                    return null;
                else
                    OneSignal._isRegisteringForPush = true;
            }
            switch (SdkEnvironment["default"].getWindowEnv()) {
                case WindowEnvironmentKind["WindowEnvironmentKind"].Host:
                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionModal:
                    try {
                        const rawSubscription = yield context.subscriptionManager.subscribe(0 /* ResubscribeExisting */);
                        subscription = yield context.subscriptionManager.registerSubscription(rawSubscription);
                        context.pageViewManager.incrementPageViewCount();
                        yield PermissionUtils["PermissionUtils"].triggerNotificationPermissionChanged();
                        yield EventHelper_EventHelper.checkAndTriggerSubscriptionChanged();
                    }
                    catch (e) {
                        Log["default"].info(e);
                    }
                    break;
                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionPopup:
                    /*
                      This is the code for the HTTP popup.
                     */
                    const windowCreator = opener || parent;
                    let rawSubscription;
                    // Update the stored permission first, so we know the real value even if the user closes the
                    // popup
                    yield context.permissionManager.updateStoredPermission();
                    try {
                        /* If the user doesn't grant permissions, a PushPermissionNotGrantedError will be thrown here. */
                        rawSubscription = yield context.subscriptionManager.subscribe(1 /* SubscribeNew */);
                        // Update the permission to granted
                        yield context.permissionManager.updateStoredPermission();
                    }
                    catch (e) {
                        // Update the permission to denied or default
                        yield context.permissionManager.updateStoredPermission();
                        if (e instanceof PushPermissionNotGrantedError_PushPermissionNotGrantedError) {
                            switch (e.reason) {
                                case PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Blocked:
                                    yield context.permissionManager.updateStoredPermission();
                                    /* Force update false, because the iframe installs a native
                                    permission change handler that will be triggered when the user
                                    clicks out of the popup back to the parent page */
                                    OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                        permission: NotificationPermission.Denied,
                                        forceUpdatePermission: false
                                    });
                                    break;
                                case PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Dismissed:
                                    /* Force update true because default permissions (before
                                    prompting) -> default permissions (after prompting) isn't a
                                    change, but we still want to be notified about it */
                                    OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, {
                                        permission: NotificationPermission.Default,
                                        forceUpdatePermission: true
                                    });
                                    break;
                            }
                        }
                        /*
                          Popup native permission request was blocked or dismissed
                          Close the window
                        */
                        if (windowCreator) {
                            window.close();
                            return null;
                        }
                    }
                    OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, {
                        rawPushSubscription: rawSubscription.serialize()
                    }, (message) => {
                        if (message.data.progress === true) {
                            Log["default"].debug('Got message from host page that remote reg. is in progress, closing popup.');
                            if (windowCreator) {
                                window.close();
                            }
                        }
                        else {
                            Log["default"].debug('Got message from host page that remote reg. could not be finished.');
                        }
                    });
                    break;
                default:
                    if (typeof OneSignal !== "undefined")
                        OneSignal._isRegisteringForPush = false;
                    throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].UnsupportedEnvironment);
            }
            if (typeof OneSignal !== "undefined")
                OneSignal._isRegisteringForPush = false;
            return subscription;
        });
    }
    static getRawPushSubscriptionForSafari(safariWebId) {
        const subscription = new RawPushSubscription["RawPushSubscription"]();
        const { deviceToken: existingDeviceToken } = window.safari.pushNotification.permission(safariWebId);
        subscription.existingSafariDeviceToken = existingDeviceToken;
        return subscription;
    }
    static getRawPushSubscriptionFromServiceWorkerRegistration() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const registration = yield ServiceWorkerHelper["default"].getRegistration();
            if (!registration) {
                return null;
            }
            const swSubscription = yield registration.pushManager.getSubscription();
            if (!swSubscription) {
                return null;
            }
            return RawPushSubscription["RawPushSubscription"].setFromW3cSubscription(swSubscription);
        });
    }
    static getRawPushSubscriptionWhenUsingSubscriptionWorkaround() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // we would need to message service worker to get it. we'll get it from inside if necessary
            return null;
        });
    }
    static getRawPushSubscription(environmentInfo, safariWebId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (environmentInfo.browserType === Browser.Safari) {
                return SubscriptionHelper_SubscriptionHelper.getRawPushSubscriptionForSafari(safariWebId);
            }
            if (environmentInfo.isUsingSubscriptionWorkaround) {
                return SubscriptionHelper_SubscriptionHelper.getRawPushSubscriptionWhenUsingSubscriptionWorkaround();
            }
            if (environmentInfo.isBrowserAndSupportsServiceWorkers) {
                return yield SubscriptionHelper_SubscriptionHelper.getRawPushSubscriptionFromServiceWorkerRegistration();
            }
            return null;
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/config/index.js
const SERVER_CONFIG_DEFAULTS_SESSION = {
    reportingThreshold: 30,
    enableOnSessionForUnsubcribed: false,
    enableOnFocus: true,
};
const SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS = {
    pageViews: 1,
    timeDelay: 0
};
const SERVER_CONFIG_DEFAULTS_SLIDEDOWN = {
    actionMessage: "We'd like to show you notifications for the latest news and updates.",
    acceptButton: "Allow",
    cancelButton: "Cancel",
    categoryDefaults: {
        updateMessage: "Update your push notification subscription preferences.",
        positiveUpdateButton: "Save Preferences",
        negativeUpdateButton: "Cancel"
    },
    savingText: "Saving...",
};


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/MainHelper.js















class MainHelper_MainHelper {
    static getCurrentNotificationType() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const currentPermission = yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId);
            if (currentPermission === NotificationPermission.Default) {
                return SubscriptionStateKind["SubscriptionStateKind"].Default;
            }
            if (currentPermission === NotificationPermission.Denied) {
                // Due to this issue https://github.com/OneSignal/OneSignal-Website-SDK/issues/289 we cannot reliably detect
                // "default" permission in HTTP context. Browser reports denied for both "default" and "denied" statuses.
                // Returning SubscriptionStateKind.Default for this case.
                return (OneSignalUtils["OneSignalUtils"].isUsingSubscriptionWorkaround()) ?
                    SubscriptionStateKind["SubscriptionStateKind"].Default :
                    SubscriptionStateKind["SubscriptionStateKind"].NotSubscribed;
            }
            const existingUser = yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
            if (currentPermission === NotificationPermission.Granted && existingUser) {
                const isPushEnabled = yield OneSignal.privateIsPushNotificationsEnabled();
                return isPushEnabled ? SubscriptionStateKind["SubscriptionStateKind"].Subscribed : SubscriptionStateKind["SubscriptionStateKind"].MutedByApi;
            }
            return SubscriptionStateKind["SubscriptionStateKind"].Default;
        });
    }
    /**
     * If the user has manually opted out of notifications (OneSignal.setSubscription), returns -2; otherwise returns 1.
     * @param isOptedIn The result of OneSignal.getSubscription().
     */
    static getNotificationTypeFromOptIn(isOptedIn) {
        if (isOptedIn == true || isOptedIn == null) {
            return SubscriptionStateKind["SubscriptionStateKind"].Subscribed;
        }
        else {
            return SubscriptionStateKind["SubscriptionStateKind"].MutedByApi;
        }
    }
    /**
     * Returns true if a LocalStorage entry exists for noting the user dismissed the native prompt.
     */
    static wasHttpsNativePromptDismissed() {
        return TimedLocalStorage.getItem('onesignal-notification-prompt') === 'dismissed';
    }
    /**
     * Stores a flag in sessionStorage that we've already shown the HTTP slidedown to this user and that we should not
     * show it again until they open a new window or tab to the site.
     */
    static markHttpSlidedownShown() {
        sessionStorage.setItem('ONESIGNAL_HTTP_PROMPT_SHOWN', 'true');
    }
    /**
     * Returns true if the HTTP slidedown was already shown inside the same session.
     */
    static isHttpPromptAlreadyShown() {
        return sessionStorage.getItem('ONESIGNAL_HTTP_PROMPT_SHOWN') == 'true';
    }
    static checkAndTriggerNotificationPermissionChanged() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const previousPermission = yield Database["default"].get('Options', 'notificationPermission');
            const currentPermission = yield OneSignal.getNotificationPermission();
            if (previousPermission !== currentPermission) {
                yield PermissionUtils["PermissionUtils"].triggerNotificationPermissionChanged();
                yield Database["default"].put('Options', {
                    key: 'notificationPermission',
                    value: currentPermission
                });
            }
        });
    }
    static getNotificationIcons() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const appId = yield MainHelper_MainHelper.getAppId();
            if (!appId) {
                throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].MissingAppId);
            }
            const url = `${SdkEnvironment["default"].getOneSignalApiUrl().toString()}/apps/${appId}/icon`;
            const response = yield fetch(url);
            const data = yield response.json();
            if (data.errors) {
                Log["default"].error(`API call %c${url}`, Utils["Utils"].getConsoleStyle('code'), 'failed with:', data.errors);
                throw new Error('Failed to get notification icons.');
            }
            return data;
        });
    }
    static getSlidedownPermissionMessageOptions(promptOptions) {
        if (!promptOptions || !promptOptions.slidedown) {
            const actionMessage = !!promptOptions ? promptOptions.actionMessage :
                SERVER_CONFIG_DEFAULTS_SLIDEDOWN.actionMessage;
            const acceptButtonText = !!promptOptions ? promptOptions.acceptButtonText :
                SERVER_CONFIG_DEFAULTS_SLIDEDOWN.acceptButton;
            const cancelButtonText = !!promptOptions ? promptOptions.cancelButtonText :
                SERVER_CONFIG_DEFAULTS_SLIDEDOWN.cancelButton;
            return {
                enabled: false,
                autoPrompt: false,
                actionMessage,
                acceptButtonText,
                cancelButtonText,
            };
        }
        // slidedown prompt options are defined
        const { categories } = promptOptions.slidedown;
        if (!!categories) {
            categories.positiveUpdateButton = Utils["Utils"].getValueOrDefault(categories.positiveUpdateButton, SERVER_CONFIG_DEFAULTS_SLIDEDOWN.categoryDefaults.positiveUpdateButton);
            categories.negativeUpdateButton = Utils["Utils"].getValueOrDefault(categories.negativeUpdateButton, SERVER_CONFIG_DEFAULTS_SLIDEDOWN.categoryDefaults.negativeUpdateButton);
            categories.updateMessage = Utils["Utils"].getValueOrDefault(categories.updateMessage, SERVER_CONFIG_DEFAULTS_SLIDEDOWN.categoryDefaults.updateMessage);
        }
        return {
            enabled: promptOptions.slidedown.enabled,
            autoPrompt: promptOptions.slidedown.autoPrompt,
            actionMessage: promptOptions.slidedown.actionMessage || SERVER_CONFIG_DEFAULTS_SLIDEDOWN.actionMessage,
            acceptButtonText: promptOptions.slidedown.acceptButtonText || SERVER_CONFIG_DEFAULTS_SLIDEDOWN.acceptButton,
            cancelButtonText: promptOptions.slidedown.cancelButtonText || SERVER_CONFIG_DEFAULTS_SLIDEDOWN.cancelButton,
            categories
        };
    }
    static getFullscreenPermissionMessageOptions(promptOptions) {
        if (!promptOptions) {
            return null;
        }
        if (!promptOptions.fullscreen) {
            return promptOptions;
        }
        return {
            autoAcceptTitle: promptOptions.fullscreen.autoAcceptTitle,
            actionMessage: promptOptions.fullscreen.actionMessage,
            exampleNotificationTitleDesktop: promptOptions.fullscreen.title,
            exampleNotificationTitleMobile: promptOptions.fullscreen.title,
            exampleNotificationMessageDesktop: promptOptions.fullscreen.message,
            exampleNotificationMessageMobile: promptOptions.fullscreen.message,
            exampleNotificationCaption: promptOptions.fullscreen.caption,
            acceptButtonText: promptOptions.fullscreen.acceptButton,
            cancelButtonText: promptOptions.fullscreen.cancelButton,
        };
    }
    static getPromptOptionsQueryString() {
        let promptOptions = MainHelper_MainHelper.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
        let promptOptionsStr = '';
        if (promptOptions) {
            let hash = MainHelper_MainHelper.getPromptOptionsPostHash();
            for (let key of Object.keys(hash)) {
                var value = hash[key];
                promptOptionsStr += '&' + key + '=' + value;
            }
        }
        return promptOptionsStr;
    }
    static getPromptOptionsPostHash() {
        let promptOptions = MainHelper_MainHelper.getFullscreenPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
        if (promptOptions) {
            var legacyParams = {
                exampleNotificationTitleDesktop: 'exampleNotificationTitle',
                exampleNotificationMessageDesktop: 'exampleNotificationMessage',
                exampleNotificationTitleMobile: 'exampleNotificationTitle',
                exampleNotificationMessageMobile: 'exampleNotificationMessage'
            };
            for (let legacyParamKey of Object.keys(legacyParams)) {
                let legacyParamValue = legacyParams[legacyParamKey];
                if (promptOptions[legacyParamKey]) {
                    promptOptions[legacyParamValue] = promptOptions[legacyParamKey];
                }
            }
            var allowedPromptOptions = [
                'autoAcceptTitle',
                'siteName',
                'autoAcceptTitle',
                'subscribeText',
                'showGraphic',
                'actionMessage',
                'exampleNotificationTitle',
                'exampleNotificationMessage',
                'exampleNotificationCaption',
                'acceptButtonText',
                'cancelButtonText',
                'timeout'
            ];
            var hash = {};
            for (var i = 0; i < allowedPromptOptions.length; i++) {
                var key = allowedPromptOptions[i];
                var value = promptOptions[key];
                var encoded_value = encodeURIComponent(value);
                if (value || value === false || value === '') {
                    hash[key] = encoded_value;
                }
            }
        }
        return hash;
    }
    static triggerCustomPromptClicked(clickResult) {
        Event["default"].trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, {
            result: clickResult
        });
    }
    static getAppId() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (OneSignal.config.appId) {
                return Promise.resolve(OneSignal.config.appId);
            }
            else {
                const appId = yield Database["default"].get('Ids', 'appId');
                return appId;
            }
        });
    }
    static createDeviceRecord(appId, includeSubscription = false) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            let subscription;
            if (includeSubscription) {
                // TODO: refactor to replace config with dependency injection
                const rawSubscription = yield SubscriptionHelper_SubscriptionHelper.getRawPushSubscription(OneSignal.environmentInfo, OneSignal.config.safariWebId);
                if (rawSubscription) {
                    subscription = rawSubscription;
                }
            }
            const deviceRecord = new PushDeviceRecord["PushDeviceRecord"](subscription);
            deviceRecord.appId = appId;
            deviceRecord.subscriptionState = yield MainHelper_MainHelper.getCurrentNotificationType();
            return deviceRecord;
        });
    }
    static getDeviceId() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const subscription = yield OneSignal.database.getSubscription();
            return subscription.deviceId || undefined;
        });
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/libraries/Emitter.js
var Emitter = __webpack_require__("./build/ts-to-es6/src/libraries/Emitter.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/Postmam.js







/**
 * Establishes a cross-domain MessageChannel between the current browsing context (this page) and another (an iFrame, popup, or parent page).
 */
class Postmam_Postmam {
    /**
     * Initializes Postmam with settings but does not establish a connection a channel or set up any message listeners.
     * @param windowReference The window to postMessage() the initial MessageChannel port to.
     * @param sendToOrigin The origin that will receive the initial postMessage with the transferred message channel port object.
     * @param receiveFromOrigin The origin to allow incoming messages from. If messages do not come from this origin they will be discarded. Only affects the initial handshake.
     * @remarks The initiating (client) page must call this after the page has been loaded so that the other page has a chance to receive the initial handshake message. The receiving (server) page must set up a message listener to catch the initial handshake message.
     */
    constructor(windowReference, sendToOrigin, receiveFromOrigin) {
        this.windowReference = windowReference;
        this.sendToOrigin = sendToOrigin;
        this.receiveFromOrigin = receiveFromOrigin;
        if (!window || !window.postMessage) {
            throw new Error('Must pass in a valid window reference supporting postMessage():' + windowReference);
        }
        if (!sendToOrigin || !receiveFromOrigin) {
            throw new Error('Invalid origin. Must be set.');
        }
        this.emitter = new Emitter["default"]();
        this.channel = new MessageChannel();
        this.messagePort = null;
        this.isListening = false;
        this.isConnected = false;
        this.replies = {};
    }
    static get HANDSHAKE_MESSAGE() {
        return "onesignal.postmam.handshake";
    }
    static get CONNECTED_MESSAGE() {
        return "onesignal.postmam.connected";
    }
    /**
     * Opens a message event listener to listen for a Postmam handshake from another browsing context. This listener is closed as soon as the connection is established.
     */
    listen() {
        Log["default"].debug('(Postmam) Called listen().');
        if (this.isListening) {
            Log["default"].debug('(Postmam) Already listening for Postmam connections.');
            return;
        }
        if (!Environment["default"].isBrowser()) {
            return;
        }
        this.isListening = true;
        Log["default"].debug('(Postmam) Listening for Postmam connections.', this);
        // One of the messages will contain our MessageChannel port
        window.addEventListener('message', this.onWindowMessagePostmanConnectReceived.bind(this));
    }
    startPostMessageReceive() {
        window.addEventListener('message', this.onWindowPostMessageReceived.bind(this));
    }
    stopPostMessageReceive() {
        window.removeEventListener('message', this.onWindowPostMessageReceived);
    }
    destroy() {
        this.stopPostMessageReceive();
        this.emitter.removeAllListeners();
    }
    onWindowPostMessageReceived(e) {
        // Discard messages from unexpected origins; messages come frequently from other origins
        if (!this.isSafeOrigin(e.origin)) {
            // Log.debug(`(Postmam) Discarding message because ${e.origin} is not an allowed origin:`, e.data);
            return;
        }
        //Log.debug(`(Postmam) (onWindowPostMessageReceived) (${SdkEnvironment.getWindowEnv().toString()}):`, e);
        let { id: messageId, command: messageCommand, data: messageData, source: messageSource } = e.data;
        if (messageCommand === Postmam_Postmam.CONNECTED_MESSAGE) {
            this.emitter.emit('connect');
            this.isConnected = true;
            return;
        }
        let messageBundle = {
            id: messageId,
            command: messageCommand,
            data: messageData,
            source: messageSource
        };
        let messageBundleWithReply = Object.assign({ reply: this.reply.bind(this, messageBundle) }, messageBundle);
        if (this.replies.hasOwnProperty(messageId)) {
            Log["default"].info('(Postmam) This message is a reply.');
            let replyFn = this.replies[messageId].bind(window);
            let replyFnReturnValue = replyFn(messageBundleWithReply);
            if (replyFnReturnValue === false) {
                delete this.replies[messageId];
            }
        }
        else {
            this.emitter.emit(messageCommand, messageBundleWithReply);
        }
    }
    onWindowMessagePostmanConnectReceived(e) {
        const env = SdkEnvironment["default"].getWindowEnv().toString();
        Log["default"].debug(`(Postmam) (${env}) Window postmessage for Postman connect received:`, e);
        // Discard messages from unexpected origins; messages come frequently from other origins
        if (!this.isSafeOrigin(e.origin)) {
            // Log.debug(`(Postmam) Discarding message because ${e.origin} is not an allowed origin:`, e.data)
            return;
        }
        var { handshake } = e.data;
        if (handshake !== Postmam_Postmam.HANDSHAKE_MESSAGE) {
            Log["default"].info('(Postmam) Got a postmam message, but not our expected handshake:', e.data);
            // This was not our expected handshake message
            return;
        }
        else {
            Log["default"].info('(Postmam) Got our expected Postmam handshake message (and connecting...):', e.data);
            // This was our expected handshake message
            // Remove our message handler so we don't get spammed with cross-domain messages
            window.removeEventListener('message', this.onWindowMessagePostmanConnectReceived);
            // Get the message port
            this.messagePort = e.ports[0];
            this.messagePort.addEventListener('message', this.onMessageReceived.bind(this), false);
            Log["default"].info('(Postmam) Removed previous message event listener for handshakes, replaced with main message listener.');
            this.messagePort.start();
            this.isConnected = true;
            Log["default"].info(`(Postmam) (${env}) Connected.`);
            this.message(Postmam_Postmam.CONNECTED_MESSAGE);
            this.emitter.emit('connect');
        }
    }
    /**
     * Establishes a message channel with a listening Postmam on another browsing context.
     * @remarks Only call this if listen() is called on another page.
     */
    connect() {
        Log["default"].info(`(Postmam) (${SdkEnvironment["default"].getWindowEnv().toString()}) Establishing a connection to ${this.sendToOrigin}.`);
        this.messagePort = this.channel.port1;
        this.messagePort.addEventListener('message', this.onMessageReceived.bind(this), false);
        this.messagePort.start();
        this.windowReference.postMessage({
            handshake: Postmam_Postmam.HANDSHAKE_MESSAGE
        }, this.sendToOrigin, [this.channel.port2]);
    }
    onMessageReceived(e) {
        //Log.debug(`(Postmam) (${SdkEnvironment.getWindowEnv().toString()}):`, e.data);
        if (!e.data) {
            Log["default"].debug(`(${SdkEnvironment["default"].getWindowEnv().toString()}) Received an empty Postmam message:`, e);
            return;
        }
        let { id: messageId, command: messageCommand, data: messageData, source: messageSource } = e.data;
        if (messageCommand === Postmam_Postmam.CONNECTED_MESSAGE) {
            this.emitter.emit('connect');
            this.isConnected = true;
            return;
        }
        let messageBundle = {
            id: messageId,
            command: messageCommand,
            data: messageData,
            source: messageSource
        };
        let messageBundleWithReply = Object.assign({ reply: this.reply.bind(this, messageBundle) }, messageBundle);
        if (this.replies.hasOwnProperty(messageId)) {
            let replyFn = this.replies[messageId].bind(window);
            let replyFnReturnValue = replyFn(messageBundleWithReply);
            if (replyFnReturnValue === false) {
                delete this.replies[messageId];
            }
        }
        else {
            this.emitter.emit(messageCommand, messageBundleWithReply);
        }
    }
    reply(originalMessageBundle, data, onReply) {
        const messageBundle = {
            id: originalMessageBundle.id,
            command: originalMessageBundle.command,
            data: data,
            source: SdkEnvironment["default"].getWindowEnv().toString(),
            isReply: true
        };
        if (typeof onReply === 'function') {
            this.replies[messageBundle.id] = onReply;
        }
        this.messagePort.postMessage(messageBundle);
    }
    /**
     * Sends via window.postMessage.
     */
    postMessage(command, data, onReply) {
        if (!command || command == '') {
            throw new Error("(Postmam) Postmam command must not be empty.");
        }
        if (typeof data === 'function') {
            Log["default"].debug('You passed a function to data, did you mean to pass null?');
            return;
        }
        const messageBundle = {
            id: OneSignalUtils["OneSignalUtils"].getRandomUuid(),
            command: command,
            data: data,
            source: SdkEnvironment["default"].getWindowEnv().toString()
        };
        if (typeof onReply === 'function') {
            this.replies[messageBundle.id] = onReply;
        }
        this.windowReference.postMessage(messageBundle, '*');
    }
    /**
     * Sends via MessageChannel.port.postMessage
     */
    message(command, data, onReply) {
        if (!command || command == '') {
            throw new Error("(Postmam) Postmam command must not be empty.");
        }
        if (typeof data === 'function') {
            Log["default"].debug('You passed a function to data, did you mean to pass null?');
            return;
        }
        const messageBundle = {
            id: OneSignalUtils["OneSignalUtils"].getRandomUuid(),
            command: command,
            data: data,
            source: SdkEnvironment["default"].getWindowEnv().toString()
        };
        if (typeof onReply === 'function') {
            this.replies[messageBundle.id] = onReply;
        }
        this.messagePort.postMessage(messageBundle);
    }
    /**
     * If the provided Site URL on the dashboard, which restricts the post message origin, uses the https:// protocol
     * Then relax the postMessage restriction to also allow the http:// protocol for the same domain.
     */
    generateSafeOrigins(inputOrigin) {
        // Trims trailing slashes and other undesirable artifacts
        const safeOrigins = [];
        try {
            const url = new URL(inputOrigin);
            let reducedHost = url.host;
            if (url.host.indexOf('www.') === 0) {
                reducedHost = url.host.replace('www.', '');
            }
            if (url.protocol === 'https:') {
                safeOrigins.push(`https://${reducedHost}`);
                safeOrigins.push(`https://www.${reducedHost}`);
            }
            else if (url.protocol === 'http:') {
                safeOrigins.push(`http://${reducedHost}`);
                safeOrigins.push(`http://www.${reducedHost}`);
                safeOrigins.push(`https://${reducedHost}`);
                safeOrigins.push(`https://www.${reducedHost}`);
            }
        }
        catch (ex) {
            // Invalid URL: Users can enter '*' or 'https://*.google.com' which is invalid.
        }
        return safeOrigins;
    }
    isSafeOrigin(messageOrigin) {
        if (!OneSignal.config) {
            var subdomain = "x";
        }
        else {
            var subdomain = OneSignal.config.subdomain;
        }
        const otherAllowedOrigins = this.generateSafeOrigins(this.receiveFromOrigin);
        return ( // messageOrigin === '' || TODO: See if messageOrigin can be blank
        messageOrigin === 'https://onesignal.com' ||
            messageOrigin === `https://${subdomain || ''}.onesignal.com` ||
            messageOrigin === `https://${subdomain || ''}.os.tc` ||
            messageOrigin === `https://${subdomain || ''}.os.tc:3001` ||
            (messageOrigin === SdkEnvironment["default"].getOneSignalApiUrl().origin) ||
            this.receiveFromOrigin === '*' ||
            Utils["Utils"].contains(otherAllowedOrigins, messageOrigin));
    }
    on(...args) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return this.emitter.on.apply(this.emitter, args);
        });
    }
    off(...args) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return this.emitter.off.apply(this.emitter, args);
        });
    }
    once(...args) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return this.emitter.once.apply(this.emitter, args);
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/modules/frames/SubscriptionModalHost.js







/**
 * The actual OneSignal proxy frame contents / implementation, that is loaded
 * into the iFrame URL as subdomain.onesignal.com/webPushIFrame or
 * subdomain.os.tc/webPushIFrame. *
 */
class SubscriptionModalHost_SubscriptionModalHost {
    constructor(appId, registrationOptions) {
        this.appId = appId;
        this.registrationOptions = registrationOptions;
    }
    /**
     * Loads the messenger on the iFrame to communicate with the host page and
     * assigns init options to an iFrame-only initialization of OneSignal.
     *
     * Our main host page will wait for all iFrame scripts to complete since the
     * host page uses the iFrame onload event to begin sending handshake messages
     * to the iFrame.
     *
     * There is no load timeout here; the iFrame initializes it scripts and waits
     * forever for the first handshake message.
     */
    load() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const isPushEnabled = yield OneSignal.isPushNotificationsEnabled();
            const notificationPermission = yield OneSignal.getNotificationPermission();
            this.url = SdkEnvironment["default"].getOneSignalApiUrl();
            this.url.pathname = 'webPushModal';
            this.url.search = `${MainHelper_MainHelper.getPromptOptionsQueryString()}&id=${this.appId}&httpsPrompt=true&pushEnabled=${isPushEnabled}&permissionBlocked=${notificationPermission === 'denied'}&promptType=modal`;
            Log["default"].info(`Loading iFrame for HTTPS subscription modal at ${this.url.toString()}`);
            this.modal = this.createHiddenSubscriptionDomModal(this.url.toString());
            this.establishCrossOriginMessaging();
        });
    }
    createHiddenSubscriptionDomModal(url) {
        let iframeContainer = document.createElement('div');
        iframeContainer.setAttribute('id', 'OneSignal-iframe-modal');
        iframeContainer.setAttribute('style', 'display:none !important');
        iframeContainer.innerHTML = '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed;' +
            ' top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: flex;' +
            ' align-items: center; justify-content: center;"></div>';
        document.body.appendChild(iframeContainer);
        let iframeContainerStyle = document.createElement('style');
        iframeContainerStyle.innerHTML = `@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} }`;
        document.getElementsByTagName('head')[0].appendChild(iframeContainerStyle);
        let iframe = document.createElement("iframe");
        iframe.className = "OneSignal-permission-iframe";
        iframe.setAttribute('frameborder', '0');
        iframe.width = OneSignal._windowWidth.toString();
        iframe.height = OneSignal._windowHeight.toString();
        iframe.src = url;
        document.getElementById("notif-permission").appendChild(iframe);
        return iframe;
    }
    removeFrame() {
        const existingInstance = document.querySelector('#OneSignal-iframe-modal');
        if (existingInstance) {
            existingInstance.remove();
        }
    }
    showSubscriptionDomModal() {
        const iframeContainer = document.getElementById('OneSignal-iframe-modal');
        iframeContainer.setAttribute('style', '');
    }
    establishCrossOriginMessaging() {
        this.messenger = new Postmam_Postmam(this.modal, this.url.origin, this.url.origin);
        this.messenger.startPostMessageReceive();
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_LOADED, this.onModalLoaded.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED, this.onModalAccepted.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED, this.onModalRejected.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onModalClosing.bind(this));
    }
    onModalLoaded(_) {
        this.showSubscriptionDomModal();
        Event["default"].trigger('modalLoaded');
    }
    onModalAccepted(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug('User accepted the HTTPS modal prompt.', location.origin);
            OneSignal._sessionInitAlreadyRunning = false;
            this.dispose();
            MainHelper_MainHelper.triggerCustomPromptClicked('granted');
            Log["default"].debug('Calling setSubscription(true)');
            yield SubscriptionHelper_SubscriptionHelper.registerForPush();
            yield OneSignal.setSubscription(true);
        });
    }
    onModalRejected(_) {
        Log["default"].debug('User rejected the HTTPS modal prompt.');
        OneSignal._sessionInitAlreadyRunning = false;
        this.dispose();
        MainHelper_MainHelper.triggerCustomPromptClicked('denied');
    }
    onModalClosing(_) {
        Log["default"].info('Detected modal is closing.');
        this.dispose();
    }
    dispose() {
        if (this.messenger) {
            // Removes all events
            this.messenger.destroy();
        }
        this.removeFrame();
    }
    /**
     * Shortcut method to messenger.message().
     */
    message() {
        this.messenger.message.apply(this.messenger, arguments);
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/helpers/ServiceWorkerHelper.js + 2 modules
var helpers_ServiceWorkerHelper = __webpack_require__("./build/ts-to-es6/src/helpers/ServiceWorkerHelper.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/libraries/WorkerMessenger.js







/**
 * NOTE: This file contains a mix of code that runs in ServiceWorker and Page contexts
*/
var WorkerMessenger_WorkerMessengerCommand;
(function (WorkerMessengerCommand) {
    WorkerMessengerCommand["WorkerVersion"] = "GetWorkerVersion";
    WorkerMessengerCommand["Subscribe"] = "Subscribe";
    WorkerMessengerCommand["SubscribeNew"] = "SubscribeNew";
    WorkerMessengerCommand["AmpSubscriptionState"] = "amp-web-push-subscription-state";
    WorkerMessengerCommand["AmpSubscribe"] = "amp-web-push-subscribe";
    WorkerMessengerCommand["AmpUnsubscribe"] = "amp-web-push-unsubscribe";
    WorkerMessengerCommand["NotificationDisplayed"] = "notification.displayed";
    WorkerMessengerCommand["NotificationClicked"] = "notification.clicked";
    WorkerMessengerCommand["NotificationDismissed"] = "notification.dismissed";
    WorkerMessengerCommand["RedirectPage"] = "command.redirect";
    WorkerMessengerCommand["SessionUpsert"] = "os.session.upsert";
    WorkerMessengerCommand["SessionDeactivate"] = "os.session.deactivate";
    WorkerMessengerCommand["AreYouVisible"] = "os.page_focused_request";
    WorkerMessengerCommand["AreYouVisibleResponse"] = "os.page_focused_response";
    WorkerMessengerCommand["SetLogging"] = "os.set_sw_logging";
})(WorkerMessenger_WorkerMessengerCommand || (WorkerMessenger_WorkerMessengerCommand = {}));
class WorkerMessenger_WorkerMessengerReplyBuffer {
    constructor() {
        this.replies = {};
    }
    addListener(command, callback, onceListenerOnly) {
        const record = { callback, onceListenerOnly };
        const replies = this.replies[command.toString()];
        if (replies)
            replies.push(record);
        else
            this.replies[command.toString()] = [record];
    }
    findListenersForMessage(command) {
        return this.replies[command.toString()] || [];
    }
    deleteListenerRecords(command) {
        this.replies[command.toString()] = null;
    }
    deleteAllListenerRecords() {
        this.replies = {};
    }
    deleteListenerRecord(command, targetRecord) {
        const listenersForCommand = this.replies[command.toString()];
        if (listenersForCommand == null)
            return;
        for (let listenerRecordIndex = listenersForCommand.length - 1; listenerRecordIndex >= 0; listenerRecordIndex--) {
            const listenerRecord = listenersForCommand[listenerRecordIndex];
            if (listenerRecord === targetRecord) {
                listenersForCommand.splice(listenerRecordIndex, 1);
            }
        }
    }
}
/**
* A Promise-based PostMessage helper to ease back-and-forth replies between
* service workers and window frames.
*/
class WorkerMessenger_WorkerMessenger {
    constructor(context, replies = new WorkerMessenger_WorkerMessengerReplyBuffer()) {
        this.context = context;
        this.replies = replies;
    }
    /**
     * Broadcasts a message from a service worker to all clients, including uncontrolled clients.
     */
    broadcast(command, payload) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (SdkEnvironment["default"].getWindowEnv() !== WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker)
                return;
            const clients = yield self.clients.matchAll({ type: 'window', includeUncontrolled: true });
            for (const client of clients) {
                Log["default"].debug(`[Worker Messenger] [SW -> Page] Broadcasting '${command.toString()}' to window client ${client.url}.`);
                client.postMessage({
                    command: command,
                    payload: payload
                });
            }
        });
    }
    /*
      For pages:
  
        Sends a postMessage() to the service worker controlling the page.
  
        Waits until the service worker is controlling the page before sending the
        message.
     */
    unicast(command, payload, windowClient) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const env = SdkEnvironment["default"].getWindowEnv();
            if (env === WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker) {
                if (!windowClient) {
                    throw new InvalidArgumentError["InvalidArgumentError"]('windowClient', InvalidArgumentError["InvalidArgumentReason"].Empty);
                }
                else {
                    Log["default"].debug(`[Worker Messenger] [SW -> Page] Unicasting '${command.toString()}' to window client ${windowClient.url}.`);
                    windowClient.postMessage({
                        command: command,
                        payload: payload
                    });
                }
            }
            else {
                if (!(yield this.isWorkerControllingPage())) {
                    Log["default"].debug("[Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration);
                }
                yield this.waitUntilWorkerControlsPage();
                Log["default"].debug(`[Worker Messenger] [Page -> SW] Unicasting '${command.toString()}' to service worker.`);
                this.directPostMessageToSW(command, payload);
            }
        });
    }
    directPostMessageToSW(command, payload) {
        Log["default"].debug(`[Worker Messenger] [Page -> SW] Direct command '${command.toString()}' to service worker.`);
        navigator.serviceWorker.controller.postMessage({
            command: command,
            payload: payload
        });
    }
    /**
     * Due to https://github.com/w3c/ServiceWorker/issues/1156, listen() must
     * synchronously add self.addEventListener('message') if we are running in the
     * service worker.
     *
     * @param listenIfPageUncontrolled If true, begins listening for service
     * worker messages even if the service worker does not control this page. This
     * parameter is set to true on HTTPS iframes expecting service worker messages
     * that live under an HTTP page.
     */
    listen(listenIfPageUncontrolled) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!Environment["default"].supportsServiceWorkers())
                return;
            const env = SdkEnvironment["default"].getWindowEnv();
            if (env === WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker) {
                self.addEventListener('message', this.onWorkerMessageReceivedFromPage.bind(this));
                Log["default"].debug('[Worker Messenger] Service worker is now listening for messages.');
            }
            else
                yield this.listenForPage(listenIfPageUncontrolled);
        });
    }
    /**
     * Listens for messages for the service worker.
     *
     * Waits until the service worker is controlling the page before listening for
     * messages.
     */
    listenForPage(listenIfPageUncontrolled) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!listenIfPageUncontrolled) {
                if (!(yield this.isWorkerControllingPage())) {
                    Log["default"].debug(`(${location.origin}) [Worker Messenger] The page is not controlled by the service worker yet. Waiting...`, self.registration);
                }
                yield this.waitUntilWorkerControlsPage();
                Log["default"].debug(`(${location.origin}) [Worker Messenger] The page is now controlled by the service worker.`);
            }
            navigator.serviceWorker.addEventListener('message', this.onPageMessageReceivedFromServiceWorker.bind(this));
            Log["default"].debug(`(${location.origin}) [Worker Messenger] Page is now listening for messages.`);
        });
    }
    onWorkerMessageReceivedFromPage(event) {
        const data = event.data;
        /* If this message doesn't contain our expected fields, discard the message */
        /* The payload may be null. AMP web push sends commands to our service worker in the format:
    
           { command: "amp-web-push-subscription-state", payload: null }
           { command: "amp-web-push-unsubscribe", payload: null }
           { command: "amp-web-push-subscribe", payload: null }
    
        */
        if (!data || !data.command) {
            return;
        }
        const listenerRecords = this.replies.findListenersForMessage(data.command);
        const listenersToRemove = [];
        const listenersToCall = [];
        Log["default"].debug(`[Worker Messenger] Service worker received message:`, event.data);
        for (let listenerRecord of listenerRecords) {
            if (listenerRecord.onceListenerOnly) {
                listenersToRemove.push(listenerRecord);
            }
            listenersToCall.push(listenerRecord);
        }
        for (let i = listenersToRemove.length - 1; i >= 0; i--) {
            const listenerRecord = listenersToRemove[i];
            this.replies.deleteListenerRecord(data.command, listenerRecord);
        }
        for (let listenerRecord of listenersToCall) {
            listenerRecord.callback.apply(null, [data.payload]);
        }
    }
    /*
    Occurs when the page receives a message from the service worker.
  
    A map of callbacks is checked to see if anyone is listening to the specific
    message topic. If no one is listening to the message, it is discarded;
    otherwise, the listener callback is executed.
    */
    onPageMessageReceivedFromServiceWorker(event) {
        const data = event.data;
        /* If this message doesn't contain our expected fields, discard the message */
        if (!data || !data.command) {
            return;
        }
        const listenerRecords = this.replies.findListenersForMessage(data.command);
        const listenersToRemove = [];
        const listenersToCall = [];
        Log["default"].debug(`[Worker Messenger] Page received message:`, event.data);
        for (let listenerRecord of listenerRecords) {
            if (listenerRecord.onceListenerOnly) {
                listenersToRemove.push(listenerRecord);
            }
            listenersToCall.push(listenerRecord);
        }
        for (let i = listenersToRemove.length - 1; i >= 0; i--) {
            const listenerRecord = listenersToRemove[i];
            this.replies.deleteListenerRecord(data.command, listenerRecord);
        }
        for (let listenerRecord of listenersToCall) {
            listenerRecord.callback.apply(null, [data.payload]);
        }
    }
    /*
      Subscribes a callback to be notified every time a service worker sends a
      message to the window frame with the specific command.
     */
    on(command, callback) {
        this.replies.addListener(command, callback, false);
    }
    /*
    Subscribes a callback to be notified the next time a service worker sends a
    message to the window frame with the specific command.
  
    The callback is executed once at most.
    */
    once(command, callback) {
        this.replies.addListener(command, callback, true);
    }
    /**
      Unsubscribe a callback from being notified about service worker messages
      with the specified command.
     */
    off(command) {
        if (command) {
            this.replies.deleteListenerRecords(command);
        }
        else {
            this.replies.deleteAllListenerRecords();
        }
    }
    /*
      Service worker postMessage() communication relies on the property
      navigator.serviceWorker.controller to be non-null. The controller property
      references the active service worker controlling the page. Without this
      property, there is no service worker to message.
  
      The controller property is set when a service worker has successfully
      registered, installed, and activated a worker, and when a page isn't loaded
      in a hard refresh mode bypassing the cache.
  
      It's possible for a service worker to take a second page load to be fully
      activated.
     */
    isWorkerControllingPage() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const env = SdkEnvironment["default"].getWindowEnv();
            if (env === WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker)
                return !!self.registration.active;
            else {
                const workerState = yield this.context.serviceWorkerManager.getActiveState();
                return workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerA ||
                    workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerB;
            }
        });
    }
    /**
     * For pages, waits until one of our workers is activated.
     *
     * For service workers, waits until the registration is active.
     */
    waitUntilWorkerControlsPage() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                if (yield this.isWorkerControllingPage())
                    resolve();
                else {
                    const env = SdkEnvironment["default"].getWindowEnv();
                    if (env === WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker) {
                        self.addEventListener('activate', (_e) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                            if (yield this.isWorkerControllingPage())
                                resolve();
                        }));
                    }
                    else {
                        navigator.serviceWorker.addEventListener('controllerchange', (_e) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                            if (yield this.isWorkerControllingPage())
                                resolve();
                        }));
                    }
                }
            }));
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/services/DynamicResourceLoader.js



class DynamicResourceLoader_DynamicResourceLoader {
    constructor() {
        this.cache = {};
    }
    getCache() {
        // Cache is private; return a cloned copy just for testing
        return Object.assign({}, this.cache);
    }
    loadSdkStylesheet() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const pathForEnv = SdkEnvironment["default"].getOneSignalResourceUrlPath();
            const cssFileForEnv = SdkEnvironment["default"].getOneSignalCssFileName();
            return yield this.loadIfNew(0 /* Stylesheet */, new URL(`${pathForEnv}/${cssFileForEnv}?v=${Environment["default"].getSdkStylesVersionHash()}`));
        });
    }
    loadFetchPolyfill() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.loadIfNew(1 /* Script */, new URL('https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js'));
        });
    }
    /**
     * Attempts to load a resource by adding it to the document's <head>.
     * Caches any previous load attempt's result and does not retry loading a previous resource.
     */
    loadIfNew(type, url) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // Load for first time
            if (!this.cache[url.toString()]) {
                this.cache[url.toString()] = DynamicResourceLoader_DynamicResourceLoader.load(type, url);
            }
            // Resource is loading; multiple calls can be made to this while the same resource is loading
            // Waiting on the Promise is what we want here
            return yield this.cache[url.toString()];
        });
    }
    /**
     * Attempts to load a resource by adding it to the document's <head>.
     * Each call creates a new DOM element and fetch attempt.
     */
    static load(type, url) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield new Promise((resolve, reject) => {
                    switch (type) {
                        case 1 /* Script */:
                            var domElement = document.createElement('script');
                            domElement.setAttribute('type', 'text/javascript');
                            domElement.setAttribute('async', 'async');
                            domElement.setAttribute('src', url.toString());
                            break;
                        case 0 /* Stylesheet */:
                            var domElement = document.createElement('link');
                            domElement.setAttribute('rel', 'stylesheet');
                            domElement.setAttribute('href', url.toString());
                            break;
                    }
                    domElement.onerror = reject;
                    domElement.onload = resolve;
                    document.querySelector('head').appendChild(domElement);
                });
                return 0 /* Loaded */;
            }
            catch (e) {
                return 1 /* Failed */;
            }
        });
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/models/IntegrationKind.js
var IntegrationKind = __webpack_require__("./build/ts-to-es6/src/models/IntegrationKind.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/Subscription.js
var Subscription = __webpack_require__("./build/ts-to-es6/src/models/Subscription.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/bell/AnimatedElement.js




class AnimatedElement_AnimatedElement {
    /**
     * Abstracts common DOM operations like hiding and showing transitionable elements into chainable promises.
     * @param selector {string} The CSS selector of the element.
     * @param showClass {string} The CSS class name to add to show the element.
     * @param hideClass {string} The CSS class name to remove to hide the element.
     * @param state {string} The current state of the element, defaults to 'shown'.
     * @param targetTransitionEvents {string} An array of properties (e.g. ['transform', 'opacity']) to look for on transitionend of show() and hide() to know the transition is complete. As long as one matches, the transition is considered complete.
     * @param nestedContentSelector {string} The CSS selector targeting the nested element within the current element. This nested element will be used for content getters and setters.
     */
    constructor(selector, showClass, hideClass, state = 'shown', targetTransitionEvents = ['opacity', 'transform'], nestedContentSelector, transitionCheckTimeout = 500) {
        this.selector = selector;
        this.showClass = showClass;
        this.hideClass = hideClass;
        this.state = state;
        this.targetTransitionEvents = targetTransitionEvents;
        this.nestedContentSelector = nestedContentSelector;
        this.transitionCheckTimeout = transitionCheckTimeout;
    }
    /**
     * Asynchronously shows an element by applying its {showClass} CSS class.
     *
     * Returns a promise that is resolved with this element when it has completed its transition.
     */
    show() {
        if (!this.hidden) {
            return Promise.resolve(this);
        }
        else
            return new Promise((resolve) => {
                this.state = 'showing';
                Event["default"].trigger(AnimatedElement_AnimatedElement.EVENTS.SHOWING, this);
                const element = this.element;
                if (!element) {
                    Log["default"].error(`(show) could not find animated element with selector ${this.selector}`);
                }
                else {
                    if (this.hideClass)
                        Object(utils["removeCssClass"])(element, this.hideClass);
                    if (this.showClass)
                        Object(utils["addCssClass"])(element, this.showClass);
                }
                if (this.targetTransitionEvents.length == 0) {
                    return resolve(this);
                }
                else {
                    var timerId = setTimeout(() => {
                        Log["default"].debug(`Element did not completely show (state: ${this.state}).`);
                    }, this.transitionCheckTimeout);
                    Object(utils["once"])(this.element, 'transitionend', (event, destroyListenerFn) => {
                        if (event.target === this.element &&
                            Object(utils["contains"])(this.targetTransitionEvents, event.propertyName)) {
                            clearTimeout(timerId);
                            // Uninstall the event listener for transitionend
                            destroyListenerFn();
                            this.state = 'shown';
                            Event["default"].trigger(AnimatedElement_AnimatedElement.EVENTS.SHOWN, this);
                            return resolve(this);
                        }
                    }, true);
                }
            });
    }
    /**
     * Asynchronously hides an element by applying its {hideClass} CSS class.
     * @returns {Promise} Returns a promise that is resolved with this element when it has completed its transition.
     */
    hide() {
        if (!this.shown) {
            return Promise.resolve(this);
        }
        else
            return new Promise((resolve) => {
                this.state = 'hiding';
                Event["default"].trigger(AnimatedElement_AnimatedElement.EVENTS.HIDING, this);
                const element = this.element;
                if (!element) {
                    Log["default"].error(`(hide) could not find animated element with selector ${this.selector}`);
                }
                else {
                    if (this.showClass)
                        Object(utils["removeCssClass"])(element, this.showClass);
                    if (this.hideClass)
                        Object(utils["addCssClass"])(element, this.hideClass);
                }
                if (this.targetTransitionEvents.length == 0) {
                    return resolve(this);
                }
                else {
                    Object(utils["once"])(this.element, 'transitionend', (event, destroyListenerFn) => {
                        var timerId = setTimeout(() => {
                            Log["default"].debug(`Element did not completely hide (state: ${this.state}).`);
                        }, this.transitionCheckTimeout);
                        if (event.target === this.element &&
                            Object(utils["contains"])(this.targetTransitionEvents, event.propertyName)) {
                            clearTimeout(timerId);
                            // Uninstall the event listener for transitionend
                            destroyListenerFn();
                            this.state = 'hidden';
                            Event["default"].trigger(AnimatedElement_AnimatedElement.EVENTS.HIDDEN, this);
                            return resolve(this);
                        }
                    }, true);
                }
            });
    }
    /**
     * Asynchronously waits for an element to finish transitioning to being shown.
     * @returns {Promise} Returns a promise that is resolved with this element when it has completed its transition.
     */
    waitUntilShown() {
        if (this.state === 'shown')
            return Promise.resolve(this);
        else
            return new Promise((resolve) => {
                OneSignal_OneSignal.emitter.once(AnimatedElement_AnimatedElement.EVENTS.SHOWN, (event) => {
                    if (event === this) {
                        return resolve(this);
                    }
                });
            });
    }
    /**
     * Asynchronously waits for an element to finish transitioning to being hidden.
     * @returns {Promise} Returns a promise that is resolved with this element when it has completed its transition.
     */
    waitUntilHidden() {
        if (this.state === 'hidden')
            return Promise.resolve(this);
        else
            return new Promise((resolve) => {
                OneSignal_OneSignal.emitter.once(AnimatedElement_AnimatedElement.EVENTS.HIDDEN, (event) => {
                    if (event === this) {
                        return resolve(this);
                    }
                });
            });
    }
    static get EVENTS() {
        return {
            SHOWING: 'animatedElementShowing',
            SHOWN: 'animatedElementShown',
            HIDING: 'animatedElementHiding',
            HIDDEN: 'animatedElementHidden',
        };
    }
    /**
     * Returns the native element's innerHTML property.
     * @returns {string} Returns the native element's innerHTML property.
     */
    get content() {
        if (!this.element) {
            return "";
        }
        if (this.nestedContentSelector) {
            const innerElement = this.element.querySelector(this.nestedContentSelector);
            return innerElement ? innerElement.innerHTML : "";
        }
        else {
            return this.element.innerHTML;
        }
    }
    /**
     * Sets the native element's innerHTML property.
     * @param value {string} The HTML to set to the element.
     */
    set content(value) {
        if (!this.element) {
            return;
        }
        if (this.nestedContentSelector) {
            const nestedContent = this.element.querySelector(this.nestedContentSelector);
            if (nestedContent) {
                nestedContent.innerHTML = value;
            }
        }
        else {
            this.element.innerHTML = value;
        }
    }
    /**
     * Returns the native {Element} via document.querySelector().
     * @returns {Element | null} Returns the native {Element} via document.querySelector() or {null} if not found.
     */
    get element() {
        return document.querySelector(this.selector);
    }
    /* States an element can be in */
    /**
     * Synchronously returns the last known state of the element.
     * @returns {boolean} Returns true if the element was last known to be transitioning to being shown.
     */
    get showing() {
        return this.state === 'showing';
    }
    /**
     * Synchronously returns the last known state of the element.
     * @returns {boolean} Returns true if the element was last known to be already shown.
     */
    get shown() {
        return this.state === 'shown';
    }
    /**
     * Synchronously returns the last known state of the element.
     * @returns {boolean} Returns true if the element was last known to be transitioning to hiding.
     */
    get hiding() {
        return this.state === 'hiding';
    }
    /**
     * Synchronously returns the last known state of the element.
     * @returns {boolean} Returns true if the element was last known to be already hidden.
     */
    get hidden() {
        return this.state === 'hidden';
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/bell/ActiveAnimatedElement.js





class ActiveAnimatedElement_ActiveAnimatedElement extends AnimatedElement_AnimatedElement {
    /**
     * Abstracts common DOM operations like hiding and showing transitionable elements into chainable promises.
     * @param selector {string} The CSS selector of the element.
     * @param showClass {string} The CSS class name to add to show the element.
     * @param hideClass {string} The CSS class name to remove to hide the element.
     * @param activeClass {string} The CSS class name to add to activate the element.
     * @param inactiveClass {string} The CSS class name to remove to inactivate the element.
     * @param state {string} The current state of the element, defaults to 'shown'.
     * @param activeState {string} The current state of the element, defaults to 'active'.
     * @param targetTransitionEvents {string} An array of properties (e.g. ['transform', 'opacity']) to look for on transitionend of show() and hide() to know the transition is complete. As long as one matches, the transition is considered complete.
     * @param nestedContentSelector {string} The CSS selector targeting the nested element within the current element. This nested element will be used for content getters and setters.
     */
    constructor(selector, showClass, hideClass, activeClass, inactiveClass, state = 'shown', activeState = 'active', targetTransitionEvents = ['opacity', 'transform'], nestedContentSelector) {
        super(selector, showClass, hideClass, state, targetTransitionEvents);
        this.selector = selector;
        this.showClass = showClass;
        this.hideClass = hideClass;
        this.activeClass = activeClass;
        this.inactiveClass = inactiveClass;
        this.state = state;
        this.activeState = activeState;
        this.targetTransitionEvents = targetTransitionEvents;
        this.nestedContentSelector = nestedContentSelector;
    }
    /**
     * Asynchronously activates an element by applying its {activeClass} CSS class.
     * @returns {Promise} Returns a promise that is resolved with this element when it has completed its transition.
     */
    activate() {
        if (!this.inactive || !this.shown) {
            return Promise.resolve(this);
        }
        else
            return new Promise((resolve) => {
                this.activeState = 'activating';
                Event["default"].trigger(ActiveAnimatedElement_ActiveAnimatedElement.EVENTS.ACTIVATING, this);
                const element = this.element;
                if (!element) {
                    Log["default"].error("Could not find active animated element");
                }
                else {
                    if (this.inactiveClass)
                        Object(utils["removeCssClass"])(element, this.inactiveClass);
                    if (this.activeClass)
                        Object(utils["addCssClass"])(element, this.activeClass);
                }
                if (this.shown) {
                    if (this.targetTransitionEvents.length == 0) {
                        return resolve(this);
                    }
                    else {
                        var timerId = setTimeout(() => {
                            Log["default"].debug(`Element did not completely activate (state: ${this.state}, activeState: ${this.activeState}).`);
                        }, this.transitionCheckTimeout);
                        Object(utils["once"])(this.element, 'transitionend', (event, destroyListenerFn) => {
                            if (event.target === this.element &&
                                Object(utils["contains"])(this.targetTransitionEvents, event.propertyName)) {
                                clearTimeout(timerId);
                                // Uninstall the event listener for transitionend
                                destroyListenerFn();
                                this.activeState = 'active';
                                Event["default"].trigger(ActiveAnimatedElement_ActiveAnimatedElement.EVENTS.ACTIVE, this);
                                return resolve(this);
                            }
                        }, true);
                    }
                }
                else {
                    Log["default"].debug(`Ending activate() transition (alternative).`);
                    this.activeState = 'active';
                    Event["default"].trigger(ActiveAnimatedElement_ActiveAnimatedElement.EVENTS.ACTIVE, this);
                    return resolve(this);
                }
            });
    }
    /**
     * Asynchronously activates an element by applying its {activeClass} CSS class.
     * @returns {Promise} Returns a promise that is resolved with this element when it has completed its transition.
     */
    inactivate() {
        if (!this.active) {
            return Promise.resolve(this);
        }
        else
            return new Promise((resolve) => {
                this.activeState = 'inactivating';
                Event["default"].trigger(ActiveAnimatedElement_ActiveAnimatedElement.EVENTS.INACTIVATING, this);
                const element = this.element;
                if (!element) {
                    Log["default"].error("Could not find active animated element");
                }
                else {
                    if (this.activeClass)
                        Object(utils["removeCssClass"])(element, this.activeClass);
                    if (this.inactiveClass)
                        Object(utils["addCssClass"])(element, this.inactiveClass);
                }
                if (this.shown) {
                    if (this.targetTransitionEvents.length == 0) {
                        return resolve(this);
                    }
                    else {
                        var timerId = setTimeout(() => {
                            Log["default"].debug(`Element did not completely inactivate (state: ${this.state}, activeState: ${this.activeState}).`);
                        }, this.transitionCheckTimeout);
                        Object(utils["once"])(this.element, 'transitionend', (event, destroyListenerFn) => {
                            if (event.target === this.element &&
                                Object(utils["contains"])(this.targetTransitionEvents, event.propertyName)) {
                                clearTimeout(timerId);
                                // Uninstall the event listener for transitionend
                                destroyListenerFn();
                                this.activeState = 'inactive';
                                Event["default"].trigger(ActiveAnimatedElement_ActiveAnimatedElement.EVENTS.INACTIVE, this);
                                return resolve(this);
                            }
                        }, true);
                    }
                }
                else {
                    this.activeState = 'inactive';
                    Event["default"].trigger(ActiveAnimatedElement_ActiveAnimatedElement.EVENTS.INACTIVE, this);
                    return resolve(this);
                }
            });
    }
    /**
     * Asynchronously waits for an element to finish transitioning to being active.
     * @returns {Promise} Returns a promise that is resolved with this element when it has completed its transition.
     */
    waitUntilActive() {
        if (this.active)
            return Promise.resolve(this);
        else
            return new Promise((resolve) => {
                OneSignal_OneSignal.emitter.once(ActiveAnimatedElement_ActiveAnimatedElement.EVENTS.ACTIVE, (event) => {
                    if (event === this) {
                        return resolve(this);
                    }
                });
            });
    }
    /**
     * Asynchronously waits for an element to finish transitioning to being inactive.
     * @returns {Promise} Returns a promise that is resolved with this element when it has completed its transition.
     */
    waitUntilInactive() {
        if (this.inactive)
            return Promise.resolve(this);
        else
            return new Promise((resolve) => {
                OneSignal_OneSignal.emitter.once(ActiveAnimatedElement_ActiveAnimatedElement.EVENTS.INACTIVE, (event) => {
                    if (event === this) {
                        return resolve(this);
                    }
                });
            });
    }
    static get EVENTS() {
        return Object.assign(Object.assign({}, AnimatedElement_AnimatedElement.EVENTS), {
            ACTIVATING: 'activeAnimatedElementActivating',
            ACTIVE: 'activeAnimatedElementActive',
            INACTIVATING: 'activeAnimatedElementInactivating',
            INACTIVE: 'activeAnimatedElementInactive',
        });
    }
    /**
     * Synchronously returns the last known state of the element.
     * @returns {boolean} Returns true if the element was last known to be transitioning to being activated.
     */
    get activating() {
        return this.activeState === 'activating';
    }
    /**
     * Synchronously returns the last known state of the element.
     * @returns {boolean} Returns true if the element was last known to be already active.
     */
    get active() {
        return this.activeState === 'active';
    }
    /**
     * Synchronously returns the last known state of the element.
     * @returns {boolean} Returns true if the element was last known to be transitioning to inactive.
     */
    get inactivating() {
        return this.activeState === 'inactivating';
    }
    /**
     * Synchronously returns the last known state of the element.
     * @returns {boolean} Returns true if the element was last known to be already inactive.
     */
    get inactive() {
        return this.activeState === 'inactive';
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/bell/Badge.js

class Badge_Badge extends ActiveAnimatedElement_ActiveAnimatedElement {
    constructor() {
        super('.onesignal-bell-launcher-badge', 'onesignal-bell-launcher-badge-opened', null, 'onesignal-bell-launcher-badge-active', null, 'hidden');
    }
    increment() {
        // If it IS a number (is not not a number)
        if (!isNaN(this.content)) {
            let badgeNumber = +this.content; // Coerce to int
            badgeNumber += 1;
            this.content = badgeNumber.toString();
        }
    }
    show() {
        const promise = super.show();
        OneSignal.notifyButton.setCustomColorsIfSpecified();
        return promise;
    }
    decrement() {
        // If it IS a number (is not not a number)
        if (!isNaN(this.content)) {
            let badgeNumber = +this.content; // Coerce to int
            badgeNumber -= 1;
            if (badgeNumber > 0)
                this.content = badgeNumber.toString();
            else
                this.content = '';
        }
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/bell/Message.js




class Message_Message extends AnimatedElement_AnimatedElement {
    constructor(bell) {
        super('.onesignal-bell-launcher-message', 'onesignal-bell-launcher-message-opened', undefined, 'hidden', ['opacity', 'transform'], '.onesignal-bell-launcher-message-body');
        this.bell = bell;
        this.contentType = '';
        this.queued = [];
    }
    static get TIMEOUT() {
        return 2500;
    }
    static get TYPES() {
        return {
            TIP: 'tip',
            MESSAGE: 'message',
            QUEUED: 'queued' // This message was a user-queued message
        };
    }
    display(type, content, duration = 0) {
        Log["default"].debug(`Calling %cdisplay(${type}, ${content}, ${duration}).`, Object(utils["getConsoleStyle"])('code'));
        return (this.shown ? this.hide() : Object(utils["nothing"])())
            .then(() => {
            this.content = Object(utils["decodeHtmlEntities"])(content);
            this.contentType = type;
        })
            .then(() => {
            return this.show();
        })
            .then(() => Object(utils["delay"])(duration))
            .then(() => {
            return this.hide();
        })
            .then(() => {
            // Reset back to normal content type so stuff can show a gain
            this.content = this.getTipForState();
            this.contentType = 'tip';
        });
    }
    getTipForState() {
        if (this.bell.state === Bell_Bell.STATES.UNSUBSCRIBED)
            return this.bell.options.text['tip.state.unsubscribed'];
        else if (this.bell.state === Bell_Bell.STATES.SUBSCRIBED)
            return this.bell.options.text['tip.state.subscribed'];
        else if (this.bell.state === Bell_Bell.STATES.BLOCKED)
            return this.bell.options.text['tip.state.blocked'];
        return "";
    }
    enqueue(message) {
        this.queued.push(Object(utils["decodeHtmlEntities"])(message));
        return new Promise((resolve) => {
            if (this.bell.badge.shown) {
                this.bell.badge.hide()
                    .then(() => this.bell.badge.increment())
                    .then(() => this.bell.badge.show())
                    .then(resolve);
            }
            else {
                this.bell.badge.increment();
                if (this.bell.initialized)
                    this.bell.badge.show().then(resolve);
                else
                    resolve();
            }
        });
    }
    dequeue(message) {
        let dequeuedMessage = this.queued.pop(message);
        return new Promise((resolve) => {
            if (this.bell.badge.shown) {
                this.bell.badge.hide()
                    .then(() => this.bell.badge.decrement())
                    .then((numMessagesLeft) => {
                    if (numMessagesLeft > 0) {
                        return this.bell.badge.show();
                    }
                    else {
                        return Promise.resolve(this);
                    }
                })
                    .then(resolve(dequeuedMessage));
            }
            else {
                this.bell.badge.decrement();
                resolve(dequeuedMessage);
            }
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/bell/Button.js







class Button_Button extends ActiveAnimatedElement_ActiveAnimatedElement {
    constructor(bell) {
        super('.onesignal-bell-launcher-button', undefined, undefined, 'onesignal-bell-launcher-button-active', undefined, 'shown', '');
        this.bell = bell;
        this.events = {
            mouse: 'bell.launcher.button.mouse'
        };
        const element = this.element;
        if (element) {
            element.addEventListener('touchstart', () => {
                this.onHovering();
                this.onTap();
            }, { passive: true });
            element.addEventListener('mouseenter', () => {
                this.onHovering();
            });
            element.addEventListener('mouseleave', () => {
                this.onHovered();
            });
            element.addEventListener('touchmove', () => {
                this.onHovered();
            }, { passive: true });
            element.addEventListener('mousedown', () => {
                this.onTap();
            });
            element.addEventListener('mouseup', () => {
                this.onEndTap();
            });
            element.addEventListener('click', () => {
                this.onHovered();
                this.onClick();
            });
        }
    }
    onHovering() {
        if (LimitStore.isEmpty(this.events.mouse) || LimitStore.getLast(this.events.mouse) === 'out') {
            Event["default"].trigger(Bell_Bell.EVENTS.HOVERING);
        }
        LimitStore.put(this.events.mouse, 'over');
    }
    onHovered() {
        LimitStore.put(this.events.mouse, 'out');
        Event["default"].trigger(Bell_Bell.EVENTS.HOVERED);
    }
    onTap() {
        this.pulse();
        this.activate();
        this.bell.badge.activate();
    }
    onEndTap() {
        this.inactivate();
        this.bell.badge.inactivate();
    }
    onClick() {
        Event["default"].trigger(Bell_Bell.EVENTS.BELL_CLICK);
        Event["default"].trigger(Bell_Bell.EVENTS.LAUNCHER_CLICK);
        if (this.bell.message.shown && this.bell.message.contentType == Message_Message.TYPES.MESSAGE) {
            // A message is being shown, it'll disappear soon
            return;
        }
        var optedOut = LimitStore.getLast('subscription.optedOut');
        if (this.bell.unsubscribed) {
            if (optedOut) {
                // The user is manually opted out, but still "really" subscribed
                this.bell.launcher.activateIfInactive().then(() => {
                    this.bell.showDialogProcedure();
                });
            }
            else {
                // The user is actually subscribed, register him for notifications
                OneSignal_OneSignal.registerForPushNotifications();
                this.bell._ignoreSubscriptionState = true;
                OneSignal_OneSignal.emitter.once(OneSignal_OneSignal.EVENTS.SUBSCRIPTION_CHANGED, () => {
                    this.bell.message.display(Message_Message.TYPES.MESSAGE, this.bell.options.text['message.action.subscribed'], Message_Message.TIMEOUT).then(() => {
                        this.bell._ignoreSubscriptionState = false;
                        this.bell.launcher.inactivate();
                    });
                });
            }
        }
        else if (this.bell.subscribed) {
            this.bell.launcher.activateIfInactive().then(() => {
                this.bell.showDialogProcedure();
            });
        }
        else if (this.bell.blocked) {
            if (Object(utils["isUsingSubscriptionWorkaround"])()) {
                // Show the HTTP popup so users can re-allow notifications
                OneSignal_OneSignal.registerForPushNotifications();
            }
            else {
                this.bell.launcher.activateIfInactive().then(() => {
                    this.bell.showDialogProcedure();
                });
            }
        }
        return this.bell.message.hide();
    }
    pulse() {
        Object(utils["removeDomElement"])('.pulse-ring');
        if (this.element) {
            Object(utils["addDomElement"])(this.element, 'beforeend', '<div class="pulse-ring"></div>');
        }
        this.bell.setCustomColorsIfSpecified();
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/bell/Dialog.js






class Dialog_Dialog extends AnimatedElement_AnimatedElement {
    constructor(bell) {
        super('.onesignal-bell-launcher-dialog', 'onesignal-bell-launcher-dialog-opened', undefined, 'hidden', ['opacity', 'transform'], '.onesignal-bell-launcher-dialog-body');
        this.bell = bell;
        this.subscribeButtonId = '#onesignal-bell-container .onesignal-bell-launcher #subscribe-button';
        this.unsubscribeButtonId = '#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button';
        this.notificationIcons = null;
    }
    show() {
        return this.updateBellLauncherDialogBody()
            .then(() => super.show());
    }
    get subscribeButtonSelectorId() {
        return 'subscribe-button';
    }
    get unsubscribeButtonSelectorId() {
        return 'unsubscribe-button';
    }
    get subscribeButton() {
        return this.element ? this.element.querySelector('#' + this.subscribeButtonSelectorId) : null;
    }
    get unsubscribeButton() {
        return this.element ? this.element.querySelector('#' + this.unsubscribeButtonSelectorId) : null;
    }
    updateBellLauncherDialogBody() {
        return OneSignal.getSubscription().then((currentSetSubscription) => {
            if (this.nestedContentSelector) {
                Object(utils["clearDomElementChildren"])(this.nestedContentSelector);
            }
            let contents = 'Nothing to show.';
            var footer = '';
            if (this.bell.options.showCredit) {
                footer = `<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>`;
            }
            if (this.bell.state === Bell_Bell.STATES.SUBSCRIBED && currentSetSubscription === true ||
                this.bell.state === Bell_Bell.STATES.UNSUBSCRIBED && currentSetSubscription === false) {
                let notificationIconHtml = '';
                let imageUrl = Object(utils["getPlatformNotificationIcon"])(this.notificationIcons);
                if (imageUrl != 'default-icon') {
                    notificationIconHtml = `<div class="push-notification-icon"><img src="${imageUrl}"></div>`;
                }
                else {
                    notificationIconHtml = `<div class="push-notification-icon push-notification-icon-default"></div>`;
                }
                let buttonHtml = '';
                if (this.bell.state !== Bell_Bell.STATES.SUBSCRIBED)
                    buttonHtml = `<button type="button" class="action" id="${this.subscribeButtonSelectorId}">${this.bell.options.text['dialog.main.button.subscribe']}</button>`;
                else
                    buttonHtml = `<button type="button" class="action" id="${this.unsubscribeButtonSelectorId}">${this.bell.options.text['dialog.main.button.unsubscribe']}</button>`;
                contents = `<h1>${this.bell.options.text['dialog.main.title']}</h1><div class="divider"></div><div class="push-notification">${notificationIconHtml}<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">${buttonHtml}</div>${footer}`;
            }
            else if (this.bell.state === Bell_Bell.STATES.BLOCKED) {
                let imageUrl = null;
                if (bowser_default.a.chrome) {
                    if (!bowser_default.a.mobile && !bowser_default.a.tablet)
                        imageUrl = '/bell/chrome-unblock.jpg';
                }
                else if (bowser_default.a.firefox)
                    imageUrl = '/bell/firefox-unblock.jpg';
                else if (bowser_default.a.safari)
                    imageUrl = '/bell/safari-unblock.jpg';
                else if (bowser_default.a.msedge)
                    imageUrl = '/bell/edge-unblock.png';
                let instructionsHtml = '';
                if (imageUrl) {
                    imageUrl = SdkEnvironment["default"].getOneSignalApiUrl().origin + imageUrl;
                    instructionsHtml = `<a href="${imageUrl}" target="_blank"><img src="${imageUrl}"></a></div>`;
                }
                if ((bowser_default.a.mobile || bowser_default.a.tablet) && bowser_default.a.chrome) {
                    instructionsHtml = `<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>⋮</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>`;
                }
                contents = `<h1>${this.bell.options.text['dialog.blocked.title']}</h1><div class="divider"></div><div class="instructions"><p>${this.bell.options.text['dialog.blocked.message']}</p>${instructionsHtml}</div>${footer}`;
            }
            if (this.nestedContentSelector) {
                Object(utils["addDomElement"])(this.nestedContentSelector, 'beforeend', contents);
            }
            if (this.subscribeButton) {
                this.subscribeButton.addEventListener('click', () => {
                    /*
                      The welcome notification should only be shown if the user is
                      subscribing for the first time and resubscribing via the notify
                      button.
          
                      If permission is already granted, __doNotShowWelcomeNotification is
                      set to true to prevent showing a notification, but we actually want
                      a notification shown in this resubscription case.
                     */
                    OneSignal.__doNotShowWelcomeNotification = false;
                    Event["default"].trigger(Bell_Bell.EVENTS.SUBSCRIBE_CLICK);
                });
            }
            if (this.unsubscribeButton) {
                this.unsubscribeButton.addEventListener('click', () => Event["default"].trigger(Bell_Bell.EVENTS.UNSUBSCRIBE_CLICK));
            }
            this.bell.setCustomColorsIfSpecified();
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/bell/Launcher.js





class Launcher_Launcher extends ActiveAnimatedElement_ActiveAnimatedElement {
    constructor(bell) {
        super('.onesignal-bell-launcher', 'onesignal-bell-launcher-active', undefined, undefined, 'onesignal-bell-launcher-inactive', 'hidden', 'active');
        this.bell = bell;
        this.wasInactive = false;
    }
    resize(size) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.element) {
                // Notify button doesn't exist
                throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].MissingDomElement);
            }
            // If the size is the same, do nothing and resolve an empty promise
            if ((size === 'small' && Object(utils["hasCssClass"])(this.element, 'onesignal-bell-launcher-sm')) ||
                (size === 'medium' && Object(utils["hasCssClass"])(this.element, 'onesignal-bell-launcher-md')) ||
                (size === 'large' && Object(utils["hasCssClass"])(this.element, 'onesignal-bell-launcher-lg'))) {
                return Promise.resolve(this);
            }
            Object(utils["removeCssClass"])(this.element, 'onesignal-bell-launcher-sm');
            Object(utils["removeCssClass"])(this.element, 'onesignal-bell-launcher-md');
            Object(utils["removeCssClass"])(this.element, 'onesignal-bell-launcher-lg');
            if (size === 'small') {
                Object(utils["addCssClass"])(this.element, 'onesignal-bell-launcher-sm');
            }
            else if (size === 'medium') {
                Object(utils["addCssClass"])(this.element, 'onesignal-bell-launcher-md');
            }
            else if (size === 'large') {
                Object(utils["addCssClass"])(this.element, 'onesignal-bell-launcher-lg');
            }
            else {
                throw new Error('Invalid OneSignal bell size ' + size);
            }
            if (!this.shown) {
                return this;
            }
            else {
                return yield new Promise((resolve) => {
                    // Once the launcher has finished shrinking down
                    if (this.targetTransitionEvents.length == 0) {
                        return resolve(this);
                    }
                    else {
                        var timerId = setTimeout(() => {
                            Log["default"].debug(`Launcher did not completely resize (state: ${this.state}, activeState: ${this.activeState}).`);
                        }, this.transitionCheckTimeout);
                        Object(utils["once"])(this.element, 'transitionend', (event, destroyListenerFn) => {
                            if (event.target === this.element &&
                                Object(utils["contains"])(this.targetTransitionEvents, event.propertyName)) {
                                clearTimeout(timerId);
                                // Uninstall the event listener for transitionend
                                destroyListenerFn();
                                return resolve(this);
                            }
                        }, true);
                    }
                });
            }
        });
    }
    activateIfInactive() {
        if (this.inactive) {
            this.wasInactive = true;
            return this.activate();
        }
        else
            return Object(utils["nothing"])();
    }
    inactivateIfWasInactive() {
        if (this.wasInactive) {
            this.wasInactive = false;
            return this.inactivate();
        }
        else
            return Object(utils["nothing"])();
    }
    clearIfWasInactive() {
        this.wasInactive = false;
    }
    inactivate() {
        return this.bell.message.hide()
            .then(() => {
            if (this.bell.badge.content.length > 0) {
                return this.bell.badge.hide()
                    .then(() => Promise.all([super.inactivate(), this.resize('small')]))
                    .then(() => this.bell.badge.show());
            }
            else {
                return Promise.all([super.inactivate(), this.resize('small')]);
            }
        });
    }
    activate() {
        if (this.bell.badge.content.length > 0) {
            return this.bell.badge.hide()
                .then(() => Promise.all([super.activate(), this.resize(this.bell.options.size)]));
        }
        else {
            return Promise.all([super.activate(), this.resize(this.bell.options.size)]);
        }
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/bell/Bell.js













var Bell_logoSvg = `<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>`;
class Bell_Bell {
    constructor(config, launcher) {
        this.state = Bell_Bell.STATES.UNINITIALIZED;
        this._ignoreSubscriptionState = false;
        this.hovering = false;
        this.initialized = false;
        this.DEFAULT_SIZE = "medium";
        this.DEFAULT_POSITION = "bottom-right";
        this.DEFAULT_THEME = "default";
        this.options = {
            enable: config.enable || false,
            size: config.size || this.DEFAULT_SIZE,
            position: config.position || this.DEFAULT_POSITION,
            theme: config.theme || this.DEFAULT_THEME,
            showLauncherAfter: config.showLauncherAfter || 10,
            showBadgeAfter: config.showBadgeAfter || 300,
            text: this.setDefaultTextOptions(config.text || {}),
            prenotify: config.prenotify,
            showCredit: config.showCredit,
            colors: config.colors,
            offset: config.offset,
        };
        if (launcher) {
            this._launcher = launcher;
        }
        if (!this.options.enable)
            return;
        this.validateOptions(this.options);
        this.state = Bell_Bell.STATES.UNINITIALIZED;
        this._ignoreSubscriptionState = false;
        this.installEventHooks();
        this.updateState();
    }
    static get EVENTS() {
        return {
            STATE_CHANGED: 'notifyButtonStateChange',
            LAUNCHER_CLICK: 'notifyButtonLauncherClick',
            BELL_CLICK: 'notifyButtonButtonClick',
            SUBSCRIBE_CLICK: 'notifyButtonSubscribeClick',
            UNSUBSCRIBE_CLICK: 'notifyButtonUnsubscribeClick',
            HOVERING: 'notifyButtonHovering',
            HOVERED: 'notifyButtonHover'
        };
    }
    static get STATES() {
        return {
            UNINITIALIZED: 'uninitialized',
            SUBSCRIBED: 'subscribed',
            UNSUBSCRIBED: 'unsubscribed',
            BLOCKED: 'blocked',
        };
    }
    static get TEXT_SUBS() {
        return {
            'prompt.native.grant': {
                default: 'Allow',
                chrome: 'Allow',
                firefox: 'Always Receive Notifications',
                safari: 'Allow'
            }
        };
    }
    showDialogProcedure() {
        if (!this.dialog.shown) {
            this.dialog.show()
                .then(() => {
                Object(utils["once"])(document, 'click', (e, destroyEventListener) => {
                    let wasDialogClicked = this.dialog.element.contains(e.target);
                    if (wasDialogClicked) {
                    }
                    else {
                        destroyEventListener();
                        if (this.dialog.shown) {
                            this.dialog.hide()
                                .then(() => {
                                this.launcher.inactivateIfWasInactive();
                            });
                        }
                    }
                }, true);
            });
        }
    }
    validateOptions(options) {
        if (!options.size || !Object(utils["contains"])(['small', 'medium', 'large'], options.size))
            throw new Error(`Invalid size ${options.size} for notify button. Choose among 'small', 'medium', or 'large'.`);
        if (!options.position || !Object(utils["contains"])(['bottom-left', 'bottom-right'], options.position))
            throw new Error(`Invalid position ${options.position} for notify button. Choose either 'bottom-left', or 'bottom-right'.`);
        if (!options.theme || !Object(utils["contains"])(['default', 'inverse'], options.theme))
            throw new Error(`Invalid theme ${options.theme} for notify button. Choose either 'default', or 'inverse'.`);
        if (!options.showLauncherAfter || options.showLauncherAfter < 0)
            throw new Error(`Invalid delay duration of ${this.options.showLauncherAfter} for showing the notify button. Choose a value above 0.`);
        if (!options.showBadgeAfter || options.showBadgeAfter < 0)
            throw new Error(`Invalid delay duration of ${this.options.showBadgeAfter} for showing the notify button's badge. Choose a value above 0.`);
    }
    setDefaultTextOptions(text) {
        const finalText = {
            'tip.state.unsubscribed': text['tip.state.unsubscribed'] || 'Subscribe to notifications',
            'tip.state.subscribed': text['tip.state.subscribed'] || "You're subscribed to notifications",
            'tip.state.blocked': text['tip.state.blocked'] || "You've blocked notifications",
            'message.prenotify': text['message.prenotify'] || "Click to subscribe to notifications",
            'message.action.subscribed': text['message.action.subscribed'] || "Thanks for subscribing!",
            'message.action.resubscribed': text['message.action.resubscribed'] || "You're subscribed to notifications",
            'message.action.subscribing': text['message.action.subscribing'] || "Click <strong>{{prompt.native.grant}}</strong> to receive notifications",
            'message.action.unsubscribed': text['message.action.unsubscribed'] || "You won't receive notifications again",
            'dialog.main.title': text['dialog.main.title'] || 'Manage Site Notifications',
            'dialog.main.button.subscribe': text['dialog.main.button.subscribe'] || 'SUBSCRIBE',
            'dialog.main.button.unsubscribe': text['dialog.main.button.unsubscribe'] || 'UNSUBSCRIBE',
            'dialog.blocked.title': text['dialog.blocked.title'] || 'Unblock Notifications',
            'dialog.blocked.message': text['dialog.blocked.message'] || 'Follow these instructions to allow notifications:',
        };
        return finalText;
    }
    installEventHooks() {
        // Install event hooks
        OneSignal_OneSignal.emitter.on(Bell_Bell.EVENTS.SUBSCRIBE_CLICK, () => {
            this.dialog.subscribeButton.disabled = true;
            this._ignoreSubscriptionState = true;
            OneSignal_OneSignal.setSubscription(true)
                .then(() => {
                this.dialog.subscribeButton.disabled = false;
                return this.dialog.hide();
            })
                .then(() => {
                return this.message.display(Message_Message.TYPES.MESSAGE, this.options.text['message.action.resubscribed'], Message_Message.TIMEOUT);
            })
                .then(() => {
                this._ignoreSubscriptionState = false;
                this.launcher.clearIfWasInactive();
                return this.launcher.inactivate();
            })
                .then(() => {
                return this.updateState();
            });
        });
        OneSignal_OneSignal.emitter.on(Bell_Bell.EVENTS.UNSUBSCRIBE_CLICK, () => {
            this.dialog.unsubscribeButton.disabled = true;
            OneSignal_OneSignal.setSubscription(false)
                .then(() => {
                this.dialog.unsubscribeButton.disabled = false;
                return this.dialog.hide();
            })
                .then(() => {
                this.launcher.clearIfWasInactive();
                return this.launcher.activate();
            })
                .then(() => {
                return this.message.display(Message_Message.TYPES.MESSAGE, this.options.text['message.action.unsubscribed'], Message_Message.TIMEOUT);
            })
                .then(() => {
                return this.updateState();
            });
        });
        OneSignal_OneSignal.emitter.on(Bell_Bell.EVENTS.HOVERING, () => {
            this.hovering = true;
            this.launcher.activateIfInactive();
            // If there's already a message being force shown, do not override
            if (this.message.shown || this.dialog.shown) {
                this.hovering = false;
                return;
            }
            // If the message is a message and not a tip, don't show it (only show tips)
            // Messages will go away on their own
            if (this.message.contentType === Message_Message.TYPES.MESSAGE) {
                this.hovering = false;
                return;
            }
            new Promise(resolve => {
                // If a message is being shown
                if (this.message.queued.length > 0) {
                    return this.message.dequeue().then((msg) => {
                        this.message.content = msg;
                        this.message.contentType = Message_Message.TYPES.QUEUED;
                        resolve();
                    });
                }
                else {
                    this.message.content = Object(utils["decodeHtmlEntities"])(this.message.getTipForState());
                    this.message.contentType = Message_Message.TYPES.TIP;
                    resolve();
                }
            }).then(() => {
                return this.message.show();
            })
                .then(() => {
                this.hovering = false;
            });
        });
        OneSignal_OneSignal.emitter.on(Bell_Bell.EVENTS.HOVERED, () => {
            // If a message is displayed (and not a tip), don't control it. Visitors have no control over messages
            if (this.message.contentType === Message_Message.TYPES.MESSAGE) {
                return;
            }
            if (!this.dialog.hidden) {
                // If the dialog is being brought up when clicking button, don't shrink
                return;
            }
            if (this.hovering) {
                this.hovering = false;
                // Hovering still being true here happens on mobile where the message could still be showing (i.e. animating) when a HOVERED event fires
                // In other words, you tap on mobile, HOVERING fires, and then HOVERED fires immediately after because of the way mobile click events work
                // Basically only happens if HOVERING and HOVERED fire within a few milliseconds of each other
                this.message.waitUntilShown()
                    .then(() => Object(utils["delay"])(Message_Message.TIMEOUT))
                    .then(() => this.message.hide())
                    .then(() => {
                    if (this.launcher.wasInactive && this.dialog.hidden) {
                        this.launcher.inactivate();
                        this.launcher.wasInactive = false;
                    }
                });
            }
            if (this.message.shown) {
                this.message.hide()
                    .then(() => {
                    if (this.launcher.wasInactive && this.dialog.hidden) {
                        this.launcher.inactivate();
                        this.launcher.wasInactive = false;
                    }
                });
            }
        });
        OneSignal_OneSignal.emitter.on(OneSignal_OneSignal.EVENTS.SUBSCRIPTION_CHANGED, (isSubscribed) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (isSubscribed == true) {
                if (this.badge.shown && this.options.prenotify) {
                    this.badge.hide();
                }
                if (this.dialog.notificationIcons === null) {
                    const icons = yield MainHelper_MainHelper.getNotificationIcons();
                    this.dialog.notificationIcons = icons;
                }
            }
            OneSignal_OneSignal.getNotificationPermission((permission) => {
                let bellState;
                if (isSubscribed) {
                    bellState = Bell_Bell.STATES.SUBSCRIBED;
                }
                else if (permission === NotificationPermission.Denied) {
                    bellState = Bell_Bell.STATES.BLOCKED;
                }
                else {
                    bellState = Bell_Bell.STATES.UNSUBSCRIBED;
                }
                this.setState(bellState, this._ignoreSubscriptionState);
            });
        }));
        OneSignal_OneSignal.emitter.on(Bell_Bell.EVENTS.STATE_CHANGED, (state) => {
            if (!this.launcher.element) {
                // Notify button doesn't exist
                return;
            }
            if (state.to === Bell_Bell.STATES.SUBSCRIBED) {
                this.launcher.inactivate();
            }
            else if (state.to === Bell_Bell.STATES.UNSUBSCRIBED ||
                Bell_Bell.STATES.BLOCKED) {
                this.launcher.activate();
            }
        });
        OneSignal_OneSignal.emitter.on(OneSignal_OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, () => {
            this.updateState();
        });
    }
    addDefaultClasses() {
        // Add default classes
        const container = this.container;
        if (this.options.position === 'bottom-left') {
            if (container) {
                Object(utils["addCssClass"])(container, 'onesignal-bell-container-bottom-left');
            }
            Object(utils["addCssClass"])(this.launcher.selector, 'onesignal-bell-launcher-bottom-left');
        }
        else if (this.options.position === 'bottom-right') {
            if (container) {
                Object(utils["addCssClass"])(container, 'onesignal-bell-container-bottom-right');
            }
            Object(utils["addCssClass"])(this.launcher.selector, 'onesignal-bell-launcher-bottom-right');
        }
        else {
            throw new Error('Invalid OneSignal notify button position ' + this.options.position);
        }
        if (this.options.theme === 'default') {
            Object(utils["addCssClass"])(this.launcher.selector, 'onesignal-bell-launcher-theme-default');
        }
        else if (this.options.theme === 'inverse') {
            Object(utils["addCssClass"])(this.launcher.selector, 'onesignal-bell-launcher-theme-inverse');
        }
        else {
            throw new Error('Invalid OneSignal notify button theme ' + this.options.theme);
        }
    }
    create() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.options.enable)
                return;
            const sdkStylesLoadResult = yield OneSignal_OneSignal.context.dynamicResourceLoader.loadSdkStylesheet();
            if (sdkStylesLoadResult !== 0 /* Loaded */) {
                Log["default"].debug('Not showing notify button because styles failed to load.');
                return;
            }
            // Remove any existing bell
            if (this.container) {
                Object(utils["removeDomElement"])('#onesignal-bell-container');
            }
            // Insert the bell container
            Object(utils["addDomElement"])('body', 'beforeend', '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>');
            if (this.container) {
                // Insert the bell launcher
                Object(utils["addDomElement"])(this.container, 'beforeend', '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>');
            }
            // Insert the bell launcher button
            Object(utils["addDomElement"])(this.launcher.selector, 'beforeend', '<div class="onesignal-bell-launcher-button"></div>');
            // Insert the bell launcher badge
            Object(utils["addDomElement"])(this.launcher.selector, 'beforeend', '<div class="onesignal-bell-launcher-badge"></div>');
            // Insert the bell launcher message
            Object(utils["addDomElement"])(this.launcher.selector, 'beforeend', '<div class="onesignal-bell-launcher-message"></div>');
            Object(utils["addDomElement"])(this.message.selector, 'beforeend', '<div class="onesignal-bell-launcher-message-body"></div>');
            // Insert the bell launcher dialog
            Object(utils["addDomElement"])(this.launcher.selector, 'beforeend', '<div class="onesignal-bell-launcher-dialog"></div>');
            Object(utils["addDomElement"])(this.dialog.selector, 'beforeend', '<div class="onesignal-bell-launcher-dialog-body"></div>');
            // Install events
            // Add visual elements
            Object(utils["addDomElement"])(this.button.selector, 'beforeend', Bell_logoSvg);
            const isPushEnabled = yield OneSignal_OneSignal.isPushNotificationsEnabled();
            const notOptedOut = yield OneSignal_OneSignal.getSubscription();
            const doNotPrompt = yield MainHelper_MainHelper.wasHttpsNativePromptDismissed();
            // Resize to small instead of specified size if enabled, otherwise there's a jerking motion where the bell, at a different size than small, jerks sideways to go from large -> small or medium -> small
            let resizeTo = (isPushEnabled ? 'small' : (this.options.size || this.DEFAULT_SIZE));
            yield this.launcher.resize(resizeTo);
            this.addDefaultClasses();
            this.applyOffsetIfSpecified();
            this.setCustomColorsIfSpecified();
            this.patchSafariSvgFilterBug();
            Log["default"].info('Showing the notify button.');
            yield (isPushEnabled ? this.launcher.inactivate() : Object(utils["nothing"])())
                .then(() => OneSignal_OneSignal.getSubscription())
                .then((isNotOptedOut) => {
                if ((isPushEnabled || !isNotOptedOut) && this.dialog.notificationIcons === null) {
                    return MainHelper_MainHelper.getNotificationIcons().then((icons) => {
                        this.dialog.notificationIcons = icons;
                    });
                }
                else
                    return Object(utils["nothing"])();
            })
                .then(() => Object(utils["delay"])(this.options.showLauncherAfter || 0))
                .then(() => {
                if (Object(utils["isUsingSubscriptionWorkaround"])() &&
                    notOptedOut &&
                    doNotPrompt !== true && !isPushEnabled &&
                    (OneSignal_OneSignal.config.userConfig.promptOptions.autoPrompt === true) &&
                    !MainHelper_MainHelper.isHttpPromptAlreadyShown()) {
                    Log["default"].debug('Not showing notify button because slidedown will be shown.');
                    return Object(utils["nothing"])();
                }
                else {
                    return this.launcher.show();
                }
            })
                .then(() => {
                return Object(utils["delay"])(this.options.showBadgeAfter || 0);
            })
                .then(() => {
                if (this.options.prenotify && !isPushEnabled && OneSignal_OneSignal._isNewVisitor) {
                    return this.message.enqueue(this.options.text['message.prenotify'])
                        .then(() => this.badge.show());
                }
                else
                    return Object(utils["nothing"])();
            })
                .then(() => this.initialized = true);
        });
    }
    patchSafariSvgFilterBug() {
        if (!(bowser_default.a.safari && Number(bowser_default.a.version) >= 9.1)) {
            let bellShadow = `drop-shadow(0 2px 4px rgba(34,36,38,0.35));`;
            let badgeShadow = `drop-shadow(0 2px 4px rgba(34,36,38,0));`;
            let dialogShadow = `drop-shadow(0px 2px 2px rgba(34,36,38,.15));`;
            this.graphic.setAttribute('style', `filter: ${bellShadow}; -webkit-filter: ${bellShadow};`);
            this.badge.element.setAttribute('style', `filter: ${badgeShadow}; -webkit-filter: ${badgeShadow};`);
            this.dialog.element.setAttribute('style', `filter: ${dialogShadow}; -webkit-filter: ${dialogShadow};`);
        }
        if (bowser_default.a.safari) {
            this.badge.element.setAttribute('style', `display: none;`);
        }
    }
    applyOffsetIfSpecified() {
        let offset = this.options.offset;
        if (offset) {
            const element = this.launcher.element;
            if (!element) {
                Log["default"].error("Could not find bell dom element");
                return;
            }
            // Reset styles first
            element.style.cssText = '';
            if (offset.bottom) {
                element.style.cssText += `bottom: ${offset.bottom};`;
            }
            if (this.options.position === 'bottom-right') {
                if (offset.right) {
                    element.style.cssText += `right: ${offset.right};`;
                }
            }
            else if (this.options.position === 'bottom-left') {
                if (offset.left) {
                    element.style.cssText += `left: ${offset.left};`;
                }
            }
        }
    }
    setCustomColorsIfSpecified() {
        // Some common vars first
        let dialogButton = this.dialog.element.querySelector('button.action');
        let pulseRing = this.button.element.querySelector('.pulse-ring');
        // Reset added styles first
        this.graphic.querySelector('.background').style.cssText = '';
        let foregroundElements = this.graphic.querySelectorAll('.foreground');
        for (let i = 0; i < foregroundElements.length; i++) {
            let element = foregroundElements[i];
            element.style.cssText = '';
        }
        this.graphic.querySelector('.stroke').style.cssText = '';
        this.badge.element.style.cssText = '';
        if (dialogButton) {
            dialogButton.style.cssText = '';
            dialogButton.style.cssText = '';
        }
        if (pulseRing) {
            pulseRing.style.cssText = '';
        }
        // Set new styles
        if (this.options.colors) {
            let colors = this.options.colors;
            if (colors['circle.background']) {
                this.graphic.querySelector('.background').style.cssText += `fill: ${colors['circle.background']}`;
            }
            if (colors['circle.foreground']) {
                let foregroundElements = this.graphic.querySelectorAll('.foreground');
                for (let i = 0; i < foregroundElements.length; i++) {
                    let element = foregroundElements[i];
                    element.style.cssText += `fill: ${colors['circle.foreground']}`;
                }
                this.graphic.querySelector('.stroke').style.cssText += `stroke: ${colors['circle.foreground']}`;
            }
            if (colors['badge.background']) {
                this.badge.element.style.cssText += `background: ${colors['badge.background']}`;
            }
            if (colors['badge.bordercolor']) {
                this.badge.element.style.cssText += `border-color: ${colors['badge.bordercolor']}`;
            }
            if (colors['badge.foreground']) {
                this.badge.element.style.cssText += `color: ${colors['badge.foreground']}`;
            }
            if (dialogButton) {
                if (colors['dialog.button.background']) {
                    this.dialog.element.querySelector('button.action').style.cssText += `background: ${colors['dialog.button.background']}`;
                }
                if (colors['dialog.button.foreground']) {
                    this.dialog.element.querySelector('button.action').style.cssText += `color: ${colors['dialog.button.foreground']}`;
                }
                if (colors['dialog.button.background.hovering']) {
                    this.addCssToHead('onesignal-background-hover-style', `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: ${colors['dialog.button.background.hovering']} !important; }`);
                }
                if (colors['dialog.button.background.active']) {
                    this.addCssToHead('onesignal-background-active-style', `#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: ${colors['dialog.button.background.active']} !important; }`);
                }
            }
            if (pulseRing) {
                if (colors['pulse.color']) {
                    this.button.element.querySelector('.pulse-ring').style.cssText = `border-color: ${colors['pulse.color']}`;
                }
            }
        }
    }
    addCssToHead(id, css) {
        let existingStyleDom = document.getElementById(id);
        if (existingStyleDom)
            return;
        let styleDom = document.createElement('style');
        styleDom.id = id;
        styleDom.type = 'text/css';
        styleDom.appendChild(document.createTextNode(css));
        document.head.appendChild(styleDom);
    }
    /**
     * Updates the current state to the correct new current state. Returns a promise.
     */
    updateState() {
        Promise.all([
            OneSignal_OneSignal.privateIsPushNotificationsEnabled(),
            OneSignal_OneSignal.privateGetNotificationPermission()
        ])
            .then(([isEnabled, permission]) => {
            this.setState(isEnabled ? Bell_Bell.STATES.SUBSCRIBED : Bell_Bell.STATES.UNSUBSCRIBED);
            if (permission === NotificationPermission.Denied) {
                this.setState(Bell_Bell.STATES.BLOCKED);
            }
        });
    }
    /**
     * Updates the current state to the specified new state.
     * @param newState One of ['subscribed', 'unsubscribed'].
     */
    setState(newState, silent = false) {
        let lastState = this.state;
        this.state = newState;
        if (lastState !== newState && !silent) {
            Event["default"].trigger(Bell_Bell.EVENTS.STATE_CHANGED, { from: lastState, to: newState });
            // Update anything that should be changed here in the new state
        }
        // Update anything that should be reset to the same state
    }
    get container() {
        return document.querySelector('#onesignal-bell-container');
    }
    get graphic() {
        return this.button.element.querySelector('svg');
    }
    get launcher() {
        if (!this._launcher)
            this._launcher = new Launcher_Launcher(this);
        return this._launcher;
    }
    get button() {
        if (!this._button)
            this._button = new Button_Button(this);
        return this._button;
    }
    get badge() {
        if (!this._badge)
            this._badge = new Badge_Badge();
        return this._badge;
    }
    get message() {
        if (!this._message)
            this._message = new Message_Message(this);
        return this._message;
    }
    get dialog() {
        if (!this._dialog)
            this._dialog = new Dialog_Dialog(this);
        return this._dialog;
    }
    get subscribed() {
        return this.state === Bell_Bell.STATES.SUBSCRIBED;
    }
    get unsubscribed() {
        return this.state === Bell_Bell.STATES.UNSUBSCRIBED;
    }
    get blocked() {
        return this.state === Bell_Bell.STATES.BLOCKED;
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/models/Path.js

/**
 * Represents a normalized path.
 *
 * Paths spaces are trimmed.
 * Paths without file names will never contain trailing slashes, except for empty paths.
 */
class Path_Path {
    constructor(path) {
        if (!path)
            throw new InvalidArgumentError["InvalidArgumentError"]('path', InvalidArgumentError["InvalidArgumentReason"].Empty);
        this.path = path.trim();
    }
    getQueryString() {
        // If there are no ? characters, return null
        // If there are multiple ?, return the substring starting after the first ? all the way to the end
        const indexOfDelimiter = this.path.indexOf('?');
        if (indexOfDelimiter === -1) {
            return null;
        }
        if (this.path.length > indexOfDelimiter) {
            // Return the substring *after the first ? to the end
            return this.path.substring(indexOfDelimiter + 1);
        }
        else {
            // The last character is ?
            return null;
        }
    }
    getWithoutQueryString() {
        return this.path.split(Path_Path.QUERY_STRING)[0];
    }
    getFileName() {
        return this.getWithoutQueryString().split('\\').pop().split('/').pop();
    }
    getFileNameWithQuery() {
        return this.path.split('\\').pop().split('/').pop();
    }
    getFullPath() {
        return this.path;
    }
    getPathWithoutFileName() {
        const newPath = this.getWithoutQueryString();
        const fileNameIndex = newPath.lastIndexOf(this.getFileName());
        let pathWithoutFileName = newPath.substring(0, fileNameIndex);
        pathWithoutFileName = pathWithoutFileName.replace(/[\\\/]$/, '');
        return pathWithoutFileName;
    }
}
Path_Path.QUERY_STRING = '?';


// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/ServiceWorkerRegistrationError.js

class ServiceWorkerRegistrationError_ServiceWorkerRegistrationError extends OneSignalError["default"] {
    constructor(status, statusText) {
        super(`Registration of a Service Worker failed.`);
        this.status = status;
        this.statusText = statusText;
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, ServiceWorkerRegistrationError_ServiceWorkerRegistrationError.prototype);
    }
}
/* harmony default export */ var errors_ServiceWorkerRegistrationError = (ServiceWorkerRegistrationError_ServiceWorkerRegistrationError);


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/ServiceWorkerManager.js















class ServiceWorkerManager_ServiceWorkerManager {
    constructor(context, config) {
        this.context = context;
        this.config = config;
    }
    // Gets details on the service-worker (if any) that controls the current page
    static getRegistration() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield helpers_ServiceWorkerHelper["default"].getRegistration();
        });
    }
    getActiveState() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /*
              Note: This method can only be called on a secure origin. On an insecure
              origin, it'll throw on getRegistration().
            */
            /*
              We want to find out if the *current* page is currently controlled by an
              active service worker.
        
              There are three ways (sort of) to do this:
                - getRegistration()
                - getRegistrations()
                - navigator.serviceWorker.ready
        
              We want to use getRegistration(), since it will not return a value if the
              page is not currently controlled by an active service worker.
        
              getRegistrations() returns all service worker registrations under the
              origin (i.e. registrations in nested folders).
        
              navigator.serviceWorker.ready will hang indefinitely and never resolve if
              no registration is active.
            */
            const integration = yield SdkEnvironment["default"].getIntegration();
            if (integration === IntegrationKind["IntegrationKind"].InsecureProxy) {
                /* Service workers are not accessible on insecure origins */
                return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].Indeterminate;
            }
            else if (integration === IntegrationKind["IntegrationKind"].SecureProxy) {
                /* If the site setup is secure proxy, we're either on the top frame without access to the
                registration, or the child proxy frame that does have access to the registration. */
                const env = SdkEnvironment["default"].getWindowEnv();
                switch (env) {
                    case WindowEnvironmentKind["WindowEnvironmentKind"].Host:
                    case WindowEnvironmentKind["WindowEnvironmentKind"].CustomIframe:
                        /* Both these top-ish frames will need to ask the proxy frame to access the service worker
                        registration */
                        const proxyFrameHost = OneSignal.proxyFrameHost;
                        if (!proxyFrameHost) {
                            /* On init, this function may be called. Return a null state for now */
                            return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].Indeterminate;
                        }
                        else {
                            return yield proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE);
                        }
                    case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionPopup:
                        /* This is a top-level frame, so it can access the service worker registration */
                        break;
                    case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionModal:
                        throw new NotImplementedError["default"]();
                }
            }
            const workerRegistration = yield ServiceWorkerManager_ServiceWorkerManager.getRegistration();
            if (!workerRegistration) {
                /*
                  A site may have a service worker nested at /folder1/folder2/folder3, while the user is
                  currently on /folder1. The nested service worker does not control /folder1 though. Although
                  the nested service worker can receive push notifications without issue, it cannot perform
                  other SDK operations like checking whether existing tabs are optn eo the site on /folder1
                  (used to prevent opening unnecessary new tabs on notification click.)
          
                  Because we rely on being able to communicate with the service worker for SDK operations, we
                  only say we're active if the service worker directly controls this page.
                 */
                return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].None;
            }
            else if (workerRegistration.installing) {
                /*
                  Workers that are installing block for a while, since we can't use them until they're done
                  installing.
                 */
                return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].Installing;
            }
            else if (!workerRegistration.active) {
                /*
                  Workers that are waiting won't be our service workers, since we use clients.claim() and
                  skipWaiting() to bypass the install and waiting stages.
                 */
                return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].ThirdParty;
            }
            // At this point, there is an active service worker registration controlling this page.
            // We are now; 1. Getting the filename of the SW; 2. Checking if it is ours or a 3rd parties.
            const swFileName = ServiceWorkerManager_ServiceWorkerManager.activeSwFileName(workerRegistration);
            const workerState = this.swActiveStateByFileName(swFileName);
            /*
              Our service worker registration can be both active and in the controlling scope of the current
              page, but if the page was hard refreshed to bypass the cache (e.g. Ctrl + Shift + R), a
              service worker will not control the page.
        
              For a third-party service worker, if it does not call clients.claim(), even if its
              registration is both active and in the controlling scope of the current page,
              navigator.serviceWorker.controller will still be null on the first page visit. So we only
              check if the controller is null for our worker, which we know uses clients.claim().
             */
            if (!navigator.serviceWorker.controller && (workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerA ||
                workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerB))
                return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].Bypassed;
            return workerState;
        });
    }
    // Get the file name of the active ServiceWorker
    static activeSwFileName(workerRegistration) {
        if (!workerRegistration.active)
            return null;
        const workerScriptPath = new URL(workerRegistration.active.scriptURL).pathname;
        const swFileName = new Path_Path(workerScriptPath).getFileName();
        // If the current service worker is Akamai's
        if (swFileName == "akam-sw.js") {
            // Check if its importing a ServiceWorker under it's "othersw" query param
            const searchParams = new URLSearchParams(new URL(workerRegistration.active.scriptURL).search);
            const importedSw = searchParams.get("othersw");
            if (importedSw) {
                Log["default"].debug("Found a ServiceWorker under Akamai's akam-sw.js?othersw=", importedSw);
                return new Path_Path(new URL(importedSw).pathname).getFileName();
            }
        }
        return swFileName;
    }
    // Check if the ServiceWorker file name is ours or a third party's
    swActiveStateByFileName(fileName) {
        if (!fileName)
            return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].None;
        if (fileName == this.config.workerAPath.getFileName())
            return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerA;
        if (fileName == this.config.workerBPath.getFileName())
            return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerB;
        return helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].ThirdParty;
    }
    getWorkerVersion() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                if (OneSignalUtils["default"].isUsingSubscriptionWorkaround()) {
                    const proxyFrameHost = OneSignal.proxyFrameHost;
                    if (!proxyFrameHost) {
                        /* On init, this function may be called. Return a null state for now */
                        resolve(NaN);
                    }
                    else {
                        const proxyWorkerVersion = yield proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION);
                        resolve(proxyWorkerVersion);
                    }
                }
                else {
                    this.context.workerMessenger.once(WorkerMessenger_WorkerMessengerCommand.WorkerVersion, workerVersion => {
                        resolve(workerVersion);
                    });
                    this.context.workerMessenger.unicast(WorkerMessenger_WorkerMessengerCommand.WorkerVersion);
                }
            }));
        });
    }
    shouldInstallWorker() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!Environment["default"].supportsServiceWorkers())
                return false;
            if (!OneSignal.config)
                return false;
            if (OneSignal.config.subdomain) {
                // No, if configured to use our subdomain (AKA HTTP setup) AND this is on their page (HTTP or HTTPS).
                // But since safari does not need subscription workaround, installing SW for session tracking.
                if (OneSignal.environmentInfo.browserType !== "safari" &&
                    SdkEnvironment["default"].getWindowEnv() === WindowEnvironmentKind["WindowEnvironmentKind"].Host) {
                    return false;
                }
            }
            const workerState = yield this.getActiveState();
            // If there isn't a SW or it isn't OneSignal's only install our SW if notification permissions are enabled
            // This prevents an unnessary install which saves bandwidth
            if (workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].None || workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].ThirdParty) {
                const permission = yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.config.safariWebId);
                return permission === "granted";
            }
            return this.workerNeedsUpdate();
        });
    }
    /**
     * Performs a service worker update by swapping out the current service worker
     * with a content-identical but differently named alternate service worker
     * file.
     */
    workerNeedsUpdate() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].info("[Service Worker Update] Checking service worker version...");
            let workerVersion;
            try {
                workerVersion = yield Utils["Utils"].timeoutPromise(this.getWorkerVersion(), 2000);
            }
            catch (e) {
                Log["default"].info("[Service Worker Update] Worker did not reply to version query; assuming older version and updating.");
                return true;
            }
            if (workerVersion !== Environment["default"].version()) {
                Log["default"].info(`[Service Worker Update] Updating service worker from ${workerVersion} --> ${Environment["default"].version()}.`);
                return true;
            }
            Log["default"].info(`[Service Worker Update] Service worker version is current at ${workerVersion} (no update required).`);
            return false;
        });
    }
    /**
     * Installs a newer version of the OneSignal service worker.
     *
     * We have a couple different models of installing service workers:
     *
     * a) Originally, we provided users with two worker files:
     * OneSignalSDKWorker.js and OneSignalSDKUpdaterWorker.js. Two workers were
     * provided so each could be swapped with the other when the worker needed to
     * update. The contents of both workers were identical; only the filenames
     * were different, which is enough to update the worker.
     *
     * b) With AMP web push, users are to specify only the first worker file
     * OneSignalSDKWorker.js, with an app ID parameter ?appId=12345. AMP web push
     * is vendor agnostic and doesn't know about OneSignal, so all relevant
     * information has to be passed to the service worker, which is the only
     * vendor-specific file. So the service worker being installed is always
     * OneSignalSDKWorker.js?appId=12345 and never OneSignalSDKUpdaterWorker.js.
     * If AMP web push sees another worker like OneSignalSDKUpdaterWorker.js, or
     * even the same OneSignalSDKWorker.js without the app ID query parameter, the
     * user is considered unsubscribed.
     *
     * c) Due to b's restriction, we must always install
     * OneSignalSDKWorker.js?appId=xxx. We also have to appropriately handle
     * legacy cases:
     *
     *    c-1) Where developers have OneSignalSDKWorker.js or
     *    OneSignalSDKUpdaterWorker.js alternatingly installed
     *
     *    c-2) Where developers running progressive web apps force-register
     *    OneSignalSDKWorker.js
     *
     * Actually, users can customize the file names of Worker A / Worker B, but
     * it's up to them to be consistent with their naming. For AMP web push, users
     * can specify the full string to expect for the service worker. They can add
     * additional query parameters, but this must then stay consistent.
     *
     * Installation Procedure
     * ----------------------
     *
     * Worker A is always installed. If Worker A is already installed, Worker B is
     * installed first, and then Worker A is installed again. This is necessary
     * because AMP web push requires Worker A to be installed for the user to be
     * considered subscribed.
     */
    installWorker() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!(yield this.shouldInstallWorker())) {
                return;
            }
            const preInstallWorkerState = yield this.getActiveState();
            yield this.installAlternatingWorker();
            yield new Promise((resolve) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                const postInstallWorkerState = yield this.getActiveState();
                Log["default"].debug("installWorker - Comparing pre and post states", preInstallWorkerState, postInstallWorkerState);
                if (preInstallWorkerState !== postInstallWorkerState &&
                    postInstallWorkerState !== helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].Installing) {
                    resolve();
                }
                else {
                    Log["default"].debug("installWorker - Awaiting on navigator.serviceWorker's 'controllerchange' event");
                    navigator.serviceWorker.addEventListener('controllerchange', (e) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                        const postInstallWorkerState = yield this.getActiveState();
                        if (postInstallWorkerState !== preInstallWorkerState &&
                            postInstallWorkerState !== helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].Installing) {
                            resolve();
                        }
                        else {
                            Log["default"].error("installWorker - SW's 'controllerchange' fired but no state change!");
                        }
                    }));
                }
            }));
            if ((yield this.getActiveState()) === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerB) {
                // If the worker is Worker B, reinstall Worker A
                yield this.installAlternatingWorker();
            }
            yield this.establishServiceWorkerChannel();
        });
    }
    establishServiceWorkerChannel() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const workerMessenger = this.context.workerMessenger;
            workerMessenger.off();
            workerMessenger.on(WorkerMessenger_WorkerMessengerCommand.NotificationDisplayed, data => {
                Log["default"].debug(location.origin, 'Received notification display event from service worker.');
                Event["default"].trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, data);
            });
            workerMessenger.on(WorkerMessenger_WorkerMessengerCommand.NotificationClicked, (data) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                let clickedListenerCallbackCount;
                if (SdkEnvironment["default"].getWindowEnv() === WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalProxyFrame) {
                    clickedListenerCallbackCount = yield new Promise(resolve => {
                        const proxyFrame = OneSignal.proxyFrame;
                        if (proxyFrame) {
                            proxyFrame.messenger.message(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, OneSignal.EVENTS.NOTIFICATION_CLICKED, (reply) => {
                                let callbackCount = reply.data;
                                resolve(callbackCount);
                            });
                        }
                    });
                }
                else
                    clickedListenerCallbackCount = OneSignal.emitter.numberOfListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED);
                if (clickedListenerCallbackCount === 0) {
                    /*
                      A site's page can be open but not listening to the
                      notification.clicked event because it didn't call
                      addListenerForNotificationOpened(). In this case, if there are no
                      detected event listeners, we should save the event, instead of firing
                      it without anybody receiving it.
            
                      Or, since addListenerForNotificationOpened() only works once (you have
                      to call it again each time), maybe it was only called once and the
                      user isn't receiving the notification.clicked event for subsequent
                      notifications on the same browser tab.
            
                      Example: notificationClickHandlerMatch: 'origin', tab is clicked,
                               event fires without anybody listening, calling
                               addListenerForNotificationOpened() returns no results even
                               though a notification was just clicked.
                    */
                    Log["default"].debug('notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval.');
                    /* For empty notifications without a URL, use the current document's URL */
                    let url = data.url;
                    if (!data.url) {
                        // Least likely to modify, since modifying this property changes the page's URL
                        url = location.href;
                    }
                    yield Database["default"].put('NotificationOpened', { url: url, data: data, timestamp: Date.now() });
                }
                else
                    Event["default"].trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, data);
            }));
            workerMessenger.on(WorkerMessenger_WorkerMessengerCommand.RedirectPage, data => {
                Log["default"].debug(`${SdkEnvironment["default"].getWindowEnv().toString()} Picked up command.redirect to ${data}, forwarding to host page.`);
                const proxyFrame = OneSignal.proxyFrame;
                if (proxyFrame) {
                    proxyFrame.messenger.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, data);
                }
            });
            workerMessenger.on(WorkerMessenger_WorkerMessengerCommand.NotificationDismissed, data => {
                Event["default"].trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, data);
            });
            const isHttps = OneSignalUtils["default"].isHttps();
            const isSafari = OneSignalUtils["default"].isSafari();
            workerMessenger.on(WorkerMessenger_WorkerMessengerCommand.AreYouVisible, (incomingPayload) => {
                // For https sites in Chrome and Firefox service worker (SW) can get correct value directly.
                // For Safari, unfortunately, we need this messaging workaround because SW always gets false.
                if (isHttps && isSafari) {
                    const payload = {
                        timestamp: incomingPayload.timestamp,
                        focused: document.hasFocus(),
                    };
                    workerMessenger.directPostMessageToSW(WorkerMessenger_WorkerMessengerCommand.AreYouVisibleResponse, payload);
                }
                else {
                    const httpPayload = { timestamp: incomingPayload.timestamp };
                    const proxyFrame = OneSignal.proxyFrame;
                    if (proxyFrame) {
                        proxyFrame.messenger.message(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, httpPayload);
                    }
                }
            });
        });
    }
    /**
     * Installs the OneSignal service worker.
     *
     * Depending on the existing worker, the alternate swap worker may be
     * installed or, for 3rd party workers, the existing worker may be uninstalled
     * before installing ours.
     */
    installAlternatingWorker() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const workerState = yield this.getActiveState();
            if (workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].ThirdParty) {
                Log["default"].info(`[Service Worker Installation] 3rd party service worker detected.`);
            }
            const workerFullPath = helpers_ServiceWorkerHelper["default"].getServiceWorkerHref(workerState, this.config);
            const installUrlQueryParams = Utils["Utils"].encodeHashAsUriComponent({
                appId: this.context.appConfig.appId
            });
            const fullWorkerPath = `${workerFullPath}?${installUrlQueryParams}`;
            const scope = `${OneSignalUtils["default"].getBaseUrl()}${this.config.registrationOptions.scope}`;
            Log["default"].info(`[Service Worker Installation] Installing service worker ${fullWorkerPath} ${scope}.`);
            try {
                yield navigator.serviceWorker.register(fullWorkerPath, { scope });
            }
            catch (error) {
                Log["default"].error(`[Service Worker Installation] Installing service worker failed ${error}`);
                // Try accessing the service worker path directly to find out what the problem is and report it to OneSignal api.
                // If we are inside the popup and service worker fails to register, it's not developer's fault.
                // No need to report it to the api then.
                const env = SdkEnvironment["default"].getWindowEnv();
                if (env === WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionPopup)
                    throw error;
                const response = yield fetch(fullWorkerPath);
                if (response.status === 403 || response.status === 404)
                    throw new errors_ServiceWorkerRegistrationError(response.status, response.statusText);
                throw error;
            }
            Log["default"].debug(`[Service Worker Installation] Service worker installed.`);
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/modules/frames/SubscriptionPopupHost.js







/**
 * Manager for an instance of the OneSignal proxy frame, for use from the main
 * page (not the iFrame itself).
 *
 * This is loaded as subdomain.onesignal.com/webPushIFrame or
 * subdomain.os.tc/webPushIFrame. *
 */
class SubscriptionPopupHost_SubscriptionPopupHost {
    /**
     *
     * @param origin The URL object describing the origin to load.
     */
    constructor(origin, options) {
        this.url = origin;
        this.url.pathname = 'subscribe';
        this.options = options || {};
    }
    /**
     * Opens a new Window to subscribe the user.
     */
    load() {
        // Instead of using URL query parameters, which are confusing and unsightly,
        // post the data invisible
        const postData = Object.assign(Object.assign({}, MainHelper_MainHelper.getPromptOptionsPostHash()), {
            promptType: 'popup',
            parentHostname: encodeURIComponent(location.hostname)
        });
        if (this.options.autoAccept) {
            postData.autoAccept = true;
        }
        Log["default"].info(`Opening a popup to ${this.url.toString()} with POST data:`, postData);
        this.popupWindow = this.openWindowViaPost(this.url.toString(), postData, null);
        this.establishCrossOriginMessaging();
        this.loadPromise = {};
        this.loadPromise.promise = new Promise((resolve, reject) => {
            this.loadPromise.resolver = resolve;
            this.loadPromise.rejector = reject;
        });
        // This can throw a TimeoutError, which should go up the stack
        return this.loadPromise.promise;
    }
    // Arguments :
    //  verb : 'GET'|'POST'
    //  target : an optional opening target (a name, or "_blank"), defaults to "_self"
    openWindowViaPost(url, data, overrides) {
        var form = document.createElement("form");
        form.action = url;
        form.method = 'POST';
        form.target = "onesignal-http-popup";
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
        var thisWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var thisHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var childWidth = OneSignal._windowWidth;
        var childHeight = OneSignal._windowHeight;
        var left = ((thisWidth / 2) - (childWidth / 2)) + dualScreenLeft;
        var top = ((thisHeight / 2) - (childHeight / 2)) + dualScreenTop;
        if (overrides) {
            if (overrides.childWidth) {
                childWidth = overrides.childWidth;
            }
            if (overrides.childHeight) {
                childHeight = overrides.childHeight;
            }
            if (overrides.left) {
                left = overrides.left;
            }
            if (overrides.top) {
                top = overrides.top;
            }
        }
        const windowRef = window.open('about:blank', "onesignal-http-popup", `'scrollbars=yes, width=${childWidth}, height=${childHeight}, top=${top}, left=${left}`);
        if (data) {
            for (var key in data) {
                var input = document.createElement("textarea");
                input.name = key;
                input.value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
                form.appendChild(input);
            }
        }
        form.style.display = 'none';
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        return windowRef;
    }
    establishCrossOriginMessaging() {
        this.messenger = new Postmam_Postmam(this.popupWindow, this.url.toString(), this.url.toString());
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, this.onBeginMessagePortCommunications.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_LOADED, this.onPopupLoaded.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_ACCEPTED, this.onPopupAccepted.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_REJECTED, this.onPopupRejected.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onPopupClosing.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT, this.onSetSessionCount.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.WINDOW_TIMEOUT, this.onWindowTimeout.bind(this));
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, this.onFinishingRegistrationRemotely.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this));
        this.messenger.startPostMessageReceive();
    }
    dispose() {
        // Removes all events
        this.messenger.destroy();
    }
    onBeginMessagePortCommunications(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug(`(${SdkEnvironment["default"].getWindowEnv().toString()}) Successfully established cross-origin messaging with the popup window.`);
            this.messenger.connect();
            return false;
        });
    }
    onPopupLoaded(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            this.loadPromise.resolver();
            Event["default"].trigger('popupLoad');
        });
    }
    onPopupAccepted(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            MainHelper_MainHelper.triggerCustomPromptClicked('granted');
        });
    }
    onPopupRejected(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            MainHelper_MainHelper.triggerCustomPromptClicked('denied');
        });
    }
    onPopupClosing(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].info('Popup window is closing, running cleanup events.');
            Event["default"].trigger(OneSignal.EVENTS.POPUP_CLOSING);
            this.dispose();
        });
    }
    onSetSessionCount(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug(SdkEnvironment["default"].getWindowEnv().toString() + " Marking current session as a continuing browsing session.");
            const { sessionCount } = message.data;
            const context = OneSignal.context;
            context.pageViewManager.setPageViewCount(sessionCount);
        });
    }
    onWindowTimeout(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug(SdkEnvironment["default"].getWindowEnv().toString() + " Popup window timed out and was closed.");
            Event["default"].trigger(OneSignal.EVENTS.POPUP_WINDOW_TIMEOUT);
        });
    }
    onFinishingRegistrationRemotely(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug(location.origin, SdkEnvironment["default"].getWindowEnv().toString() + " Finishing HTTP popup registration inside the iFrame, sent from popup.");
            message.reply({ progress: true });
            const { rawPushSubscription } = message.data;
            if (this.messenger) {
                this.messenger.stopPostMessageReceive();
            }
            const subscriptionManager = OneSignal.context.subscriptionManager;
            yield subscriptionManager.registerSubscription(rawPushSubscription);
            yield EventHelper_EventHelper.checkAndTriggerSubscriptionChanged();
            yield MainHelper_MainHelper.checkAndTriggerNotificationPermissionChanged();
        });
    }
    onRemoteRetriggerEvent(message) {
        // e.g. { eventName: 'subscriptionChange', eventData: true}
        let { eventName, eventData } = message.data;
        Event["default"].trigger(eventName, eventData, message.source);
        return false;
    }
    /**
     * Shortcut method to messenger.message().
     */
    message() {
        if (this.messenger) {
            this.messenger.message.apply(this.messenger, arguments);
        }
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/utils/Encoding.js
/**
 * Used for VAPID, converts the VAPID public key into a byte format the browser accepts.
 */
function base64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
/**
 * Used for VAPID, converts a browser-provided ArrayBuffer of the applicationServerKey back to its string form.
 */
function arrayBufferToBase64(arrayBuffer) {
    var base64 = '';
    var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var bytes = new Uint8Array(arrayBuffer);
    var byteLength = bytes.byteLength;
    var byteRemainder = byteLength % 3;
    var mainLength = byteLength - byteRemainder;
    var a, b, c, d;
    var chunk;
    // Main loop deals with bytes in chunks of 3
    for (var i = 0; i < mainLength; i = i + 3) {
        // Combine the three bytes into a single integer
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        // Use bitmasks to extract 6-bit segments from the triplet
        a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
        b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
        c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
        d = chunk & 63; // 63       = 2^6 - 1
        // Convert the raw binary segments to the appropriate ASCII encoding
        base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
    }
    // Deal with the remaining bytes and padding
    if (byteRemainder == 1) {
        chunk = bytes[mainLength];
        a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
        // Set the 4 least significant bits to zero
        b = (chunk & 3) << 4; // 3   = 2^2 - 1
        base64 += encodings[a] + encodings[b] + '==';
    }
    else if (byteRemainder == 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
        a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
        b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4
        // Set the 2 least significant bits to zero
        c = (chunk & 15) << 2; // 15    = 2^4 - 1
        base64 += encodings[a] + encodings[b] + encodings[c] + '=';
    }
    return base64;
}
/**
 * From: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
 */
function base64Encode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
function base64Decode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/MetricsManager.js


class MetricsManager_MetricEvent {
    getPropertiesAsJson() {
        /* Origin and URL are available from the service worker as well */
        return {
            origin: location.origin,
            url: location.href,
            sdkVersion: Environment["default"].version()
        };
    }
}
class MetricsManager_MetricEngagement {
}
var MetricsManager_ApiUsageMetricKind;
(function (ApiUsageMetricKind) {
    ApiUsageMetricKind["HttpPermissionRequest"] = "HttpPermissionRequest";
    ApiUsageMetricKind["SyncHashedEmail"] = "SyncHashedEmail";
})(MetricsManager_ApiUsageMetricKind || (MetricsManager_ApiUsageMetricKind = {}));
class MetricsManager_ApiUsageMetricEvent extends MetricsManager_MetricEvent {
    constructor(apiName) {
        super();
        this.apiName = apiName;
    }
    getEventName() {
        return 'api-usage';
    }
    getPropertiesAsJson() {
        return Object.assign({ api: this.apiName.toString() }, super.getPropertiesAsJson());
    }
}
class MetricsManager_PageViewMetricEngagement extends MetricsManager_MetricEngagement {
    constructor() {
        super();
    }
    getProfileName() {
        return "all_websites";
    }
    getDateUtc() {
        const date = new Date();
        return `${date.getUTCMonth() + 1}_${date.getUTCDate()}_${date.getUTCFullYear()}`;
    }
    getOperationData() {
        const payload = {
            $add: {},
            $ignore_time: true
        };
        payload[`$add`][`pageview_${this.getDateUtc()}`] = 1;
        return payload;
    }
}
class MetricsManager_MetricsManager {
    constructor(isFeatureEnabled, mixpanelReportingToken) {
        this.isFeatureEnabled = isFeatureEnabled;
        this.mixpanelReportingToken = mixpanelReportingToken;
    }
    static get MIXPANEL_REPORTING_URL() {
        return 'https://api.mixpanel.com';
    }
    isEnabled() {
        return this.isFeatureEnabled && !!this.mixpanelReportingToken;
    }
    reportEvent(event) {
        if (!this.isEnabled()) {
            return Promise.resolve(null);
        }
        const queryParamsData = {
            event: event.getEventName(),
            properties: Object.assign({ token: this.mixpanelReportingToken }, event.getPropertiesAsJson())
        };
        const queryParams = base64Encode(JSON.stringify(queryParamsData));
        const requestOptions = {
            method: 'GET',
            headers: new Headers(),
            cache: 'no-cache',
        };
        return fetch(`${MetricsManager_MetricsManager.MIXPANEL_REPORTING_URL}/track/?data=${queryParams}`, requestOptions);
    }
    reportEngagement(engagement) {
        if (!this.isEnabled()) {
            return Promise.resolve(null);
        }
        let queryParamsData = {
            $token: this.mixpanelReportingToken,
            $distinct_id: engagement.getProfileName(),
        };
        queryParamsData = Object.assign(Object.assign({}, queryParamsData), engagement.getOperationData());
        const queryParams = base64Encode(JSON.stringify(queryParamsData));
        const requestOptions = {
            method: 'GET',
            headers: new Headers(),
            cache: 'no-cache',
        };
        return fetch(`${MetricsManager_MetricsManager.MIXPANEL_REPORTING_URL}/engage/?data=${queryParams}`, requestOptions);
    }
    shouldCollectPageView() {
        const date = new Date();
        return ((date.getUTCMonth() + 1) <= 2 &&
            date.getUTCDate() <= 10 &&
            date.getUTCFullYear() <= 2018 &&
            (date.getUTCMonth() + 1) >= 2 &&
            date.getUTCDate() >= 8 &&
            date.getUTCFullYear() >= 2018);
    }
    reportPageView() {
        // Collect for a couple days from feature release date
        if (this.shouldCollectPageView()) {
            this.reportEngagement(new MetricsManager_PageViewMetricEngagement());
        }
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/DeprecatedApiError.js


var DeprecatedApiError_DeprecatedApiReason;
(function (DeprecatedApiReason) {
    DeprecatedApiReason[DeprecatedApiReason["HttpPermissionRequest"] = 0] = "HttpPermissionRequest";
    DeprecatedApiReason[DeprecatedApiReason["SyncHashedEmail"] = 1] = "SyncHashedEmail";
})(DeprecatedApiError_DeprecatedApiReason || (DeprecatedApiError_DeprecatedApiReason = {}));
class DeprecatedApiError_DeprecatedApiError extends OneSignalError["default"] {
    constructor(reason) {
        switch (reason) {
            case DeprecatedApiError_DeprecatedApiReason.HttpPermissionRequest:
                super('The HTTP permission request has been deprecated. Please remove any custom popups from your code.');
                this.reportUsage(MetricsManager_ApiUsageMetricKind.HttpPermissionRequest);
                break;
            case DeprecatedApiError_DeprecatedApiReason.SyncHashedEmail:
                super('API syncHashedEmail() has been deprecated and will be removed in a future SDK release.' +
                    ' Please remove any usages from your code.');
                this.reportUsage(MetricsManager_ApiUsageMetricKind.SyncHashedEmail);
                break;
        }
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, DeprecatedApiError_DeprecatedApiError.prototype);
    }
    reportUsage(apiKind) {
        if (typeof OneSignal !== 'undefined' && OneSignal.context && OneSignal.context.metricsManager) {
            OneSignal.context.metricsManager.reportEvent(new MetricsManager_ApiUsageMetricEvent(apiKind));
        }
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/InitHelper.js




























class InitHelper_InitHelper {
    /** Main methods */
    static internalInit() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug('Called %cinternalInit()', Object(utils["getConsoleStyle"])('code'));
            // Always check for an updated service worker
            yield OneSignal.context.serviceWorkerManager.installWorker();
            const sessionManager = OneSignal.context.sessionManager;
            OneSignal.emitter.on(OneSignal.EVENTS.SESSION_STARTED, sessionManager.sendOnSessionUpdateFromPage.bind(sessionManager));
            OneSignal.context.pageViewManager.incrementPageViewCount();
            if (document.visibilityState !== 'visible') {
                InitHelper_InitHelper.postponeSessionInitUntilPageIsInFocus();
                return;
            }
            yield InitHelper_InitHelper.sessionInit();
        });
    }
    static postponeSessionInitUntilPageIsInFocus() {
        Object(utils["once"])(document, 'visibilitychange', (_, destroyEventListener) => {
            if (document.visibilityState === 'visible') {
                destroyEventListener();
                InitHelper_InitHelper.sessionInit();
            }
        }, true);
    }
    static sessionInit() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug(`Called %csessionInit()`, Object(utils["getConsoleStyle"])('code'));
            if (OneSignal._sessionInitAlreadyRunning) {
                Log["default"].debug('Returning from sessionInit because it has already been called.');
                return;
            }
            OneSignal._sessionInitAlreadyRunning = true;
            try {
                yield InitHelper_InitHelper.doInitialize();
            }
            catch (err) {
                if (err instanceof SdkInitError_SdkInitError) {
                    return;
                }
                throw err;
            }
            /**
             * We don't want to resubscribe if the user is opted out, and we can't check on HTTP, because the promise will
             * prevent the popup from opening.
             */
            const isOptedOut = yield OneSignal.internalIsOptedOut();
            // saves isOptedOut to localStorage. used for require user interaction functionality
            LocalStorage_LocalStorage.setIsOptedOut(!!isOptedOut);
            /**
             * Auto-resubscribe is working only on HTTPS (and in safari)
             * Should be called before autoprompting to make sure user gets a chance to be re-subscribed first.
             */
            if (!OneSignalUtils["OneSignalUtils"].isUsingSubscriptionWorkaround()) {
                yield InitHelper_InitHelper.handleAutoResubscribe(isOptedOut);
            }
            const isSubscribed = yield OneSignal.privateIsPushNotificationsEnabled();
            // saves isSubscribed to localStorage. used for require user interaction functionality
            LocalStorage_LocalStorage.setIsPushNotificationsEnabled(!!isSubscribed);
            if (OneSignal.config.userConfig.promptOptions.autoPrompt && !isOptedOut && !isSubscribed) {
                /*
                * Chrome 63 on Android permission prompts are permanent without a dismiss option. To avoid
                * permanent blocks, we want to replace sites automatically showing the native browser request
                * with a slide prompt first.
                * Same for Safari 12.1+ & Firefox 72+. It requires user interaction to request notification permissions.
                * It simply wouldn't work to try to show native prompt from script.
                */
                const { environmentInfo } = OneSignal;
                const { browserType, browserVersion, requiresUserInteraction } = environmentInfo;
                const forceSlidedownOverNative = ((browserType === "chrome" && Number(browserVersion) >= 63 && (bowser_default.a.tablet || bowser_default.a.mobile)) ||
                    requiresUserInteraction);
                const categoryOptions = OneSignal.context.appConfig.userConfig.promptOptions.slidedown.categories;
                yield OneSignal.context.promptsManager.internalShowAutoPrompt({
                    forceSlidedownOverNative,
                    categoryOptions
                });
            }
            OneSignal._sessionInitAlreadyRunning = false;
            yield Event["default"].trigger(OneSignal.EVENTS.SDK_INITIALIZED);
        });
    }
    static registerForPushNotifications(options = {}) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (options && options.modalPrompt) {
                /* Show the HTTPS fullscreen modal permission message. */
                OneSignal.subscriptionModalHost = new SubscriptionModalHost_SubscriptionModalHost(OneSignal.config.appId, options);
                yield OneSignal.subscriptionModalHost.load();
                return;
            }
            if (OneSignalUtils["OneSignalUtils"].isUsingSubscriptionWorkaround()) {
                if (options.httpPermissionRequest) {
                    /*
                     * Do not throw an error because it may cause the parent event handler to
                     * throw and stop processing the rest of their code. Typically, for this
                     * prompt sequence, a custom modal is being shown thanking the user for
                     * granting permissions. Throwing an error might cause the modal to stay
                     * on screen and not close.
                     *
                     * Only log an error for HTTP sites. A few HTTPS sites are mistakenly be
                     * using this API instead of the parameter-less version to register for
                     * push notifications.
                     */
                    Log["default"].error(new DeprecatedApiError_DeprecatedApiError(DeprecatedApiError_DeprecatedApiReason.HttpPermissionRequest));
                    return;
                }
                yield InitHelper_InitHelper.loadSubscriptionPopup(options);
                return;
            }
            /*
             * We don't want to resubscribe if the user is opted out, and we can't check on HTTP, because the promise will
             * prevent the popup from opening.
             */
            const isOptedOut = LocalStorage_LocalStorage.getIsOptedOut();
            if (!isOptedOut) {
                yield SubscriptionHelper_SubscriptionHelper.registerForPush();
            }
        });
    }
    /**
     * This event occurs after init.
     * For HTTPS sites, this event is called after init.
     * For HTTP sites, this event is called after the iFrame is created,
     *    and a message is received from the iFrame signaling cross-origin messaging is ready.
     * @private
     */
    static onSdkInitialized() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const wasUserResubscribed = yield InitHelper_InitHelper.processExpiringSubscriptions();
            /**
             * If user's subscription was expiring and we processed it, our backend would get a player#create request.
             * If user was not subscribed before and autoPrompting is on, user would get subscribed through player#create if
             *  he clicks allow in an automatic prompt.
             * If user has granted notification permissions but cleared the data and autoResubscribe is on, we will
             *  resubscribe with autoResubscribe flag.
             * In all other cases we would send an on_session request.
             */
            const isExistingUser = yield OneSignal.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
            if (isExistingUser) {
                OneSignal.context.sessionManager.setupSessionEventListeners();
                if (!wasUserResubscribed) {
                    yield OneSignal.context.updateManager.sendOnSessionUpdate();
                }
            }
            else if (!OneSignal.config.userConfig.promptOptions.autoPrompt &&
                !OneSignal.config.userConfig.autoResubscribe) {
                yield OneSignal.context.updateManager.sendOnSessionUpdate();
            }
            yield Event["default"].trigger(OneSignal.EVENTS.SDK_INITIALIZED_PUBLIC);
        });
    }
    static loadSubscriptionPopup(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /**
             * Users may be subscribed to either .onesignal.com or .os.tc. By this time
             * that they are subscribing to the popup, the Proxy Frame has already been
             * loaded and the user's subscription status has been obtained. We can then
             * use the Proxy Frame present now and check its URL to see whether the user
             * is finally subscribed to .onesignal.com or .os.tc.
             */
            OneSignal.subscriptionPopupHost = new SubscriptionPopupHost_SubscriptionPopupHost(OneSignal.proxyFrameHost.url, options);
            yield OneSignal.subscriptionPopupHost.load();
        });
    }
    /** Helper methods */
    static storeInitialValues() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const isPushEnabled = yield OneSignal.privateIsPushNotificationsEnabled();
            const notificationPermission = yield OneSignal.privateGetNotificationPermission();
            const isOptedOut = yield OneSignal.internalIsOptedOut();
            LimitStore.put('subscription.optedOut', isOptedOut);
            yield Database["default"].put('Options', { key: 'isPushEnabled', value: isPushEnabled });
            yield Database["default"].put('Options', {
                key: 'notificationPermission',
                value: notificationPermission
            });
        });
    }
    static setWelcomeNotificationFlag() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /*
             * If the user has already granted permission, the user has previously
             * already subscribed. Don't show welcome notifications if the user is
             * automatically resubscribed.
             */
            const permission = yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId);
            if (permission === NotificationPermission.Granted) {
                OneSignal.__doNotShowWelcomeNotification = true;
            }
        });
    }
    static establishServiceWorkerChannel() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (navigator.serviceWorker &&
                window.location.protocol === 'https:' &&
                !(yield SdkEnvironment["default"].isFrameContextInsecure())) {
                try {
                    const registration = yield ServiceWorkerManager_ServiceWorkerManager.getRegistration();
                    if (registration && registration.active) {
                        yield OneSignal.context.serviceWorkerManager.establishServiceWorkerChannel();
                    }
                }
                catch (e) {
                    Log["default"].error(e);
                }
            }
        });
    }
    /** Entry method for any environment that sets expiring subscriptions. */
    static processExpiringSubscriptions() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            Log["default"].debug("Checking subscription expiration...");
            const isSubscriptionExpiring = yield context.subscriptionManager.isSubscriptionExpiring();
            if (!isSubscriptionExpiring) {
                Log["default"].debug("Subscription is not considered expired.");
                return false;
            }
            const integrationKind = yield SdkEnvironment["default"].getIntegration();
            const windowEnv = SdkEnvironment["default"].getWindowEnv();
            Log["default"].debug("Subscription is considered expiring. Current Integration:", integrationKind);
            switch (integrationKind) {
                /*
                  Resubscribe via the service worker.
          
                  For Secure, we can definitely resubscribe via the current page, but for SecureProxy, we
                  used to not be able to subscribe for push within secure child frames. The common supported
                  and safe way is to resubscribe via the service worker.
                 */
                case IntegrationKind["IntegrationKind"].Secure:
                    const rawPushSubscription = yield context.subscriptionManager.subscribe(1 /* SubscribeNew */);
                    yield context.subscriptionManager.registerSubscription(rawPushSubscription);
                    break;
                case IntegrationKind["IntegrationKind"].SecureProxy:
                    if (windowEnv === WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalProxyFrame) {
                        yield this.registerSubscriptionInProxyFrame(context);
                    }
                    else {
                        const proxyFrame = OneSignal.proxyFrameHost;
                        yield proxyFrame.runCommand(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS);
                    }
                    break;
                case IntegrationKind["IntegrationKind"].InsecureProxy:
                    /*
                      We can't really do anything here except remove a value checked by
                      isPushNotificationsEnabled to simulate unsubscribing.
                     */
                    yield Database["default"].remove("Ids", "registrationId");
                    Log["default"].debug("Unsubscribed expiring HTTP subscription by removing registration ID.");
                    break;
            }
            return true;
        });
    }
    static registerSubscriptionInProxyFrame(context) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const newSubscription = yield new Promise(resolve => {
                context.workerMessenger.once(WorkerMessenger_WorkerMessengerCommand.SubscribeNew, subscription => {
                    resolve(Subscription["Subscription"].deserialize(subscription));
                });
                context.workerMessenger.unicast(WorkerMessenger_WorkerMessengerCommand.SubscribeNew, context.appConfig);
            });
            Log["default"].debug("Finished registering brand new subscription:", newSubscription);
            return newSubscription;
        });
    }
    static doInitialize() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const promises = [];
            // Store initial values of notification permission, user ID, and manual subscription status
            // This is done so that the values can be later compared to see if anything changed
            // This is done here for HTTPS, it is done after the call to _addSessionIframe in sessionInit for HTTP sites,
            // since the iframe is needed for communication
            promises.push(InitHelper_InitHelper.storeInitialValues());
            promises.push(InitHelper_InitHelper.installNativePromptPermissionChangedHook());
            promises.push(InitHelper_InitHelper.setWelcomeNotificationFlag());
            promises.push(InitHelper_InitHelper.establishServiceWorkerChannel());
            promises.push(InitHelper_InitHelper.showNotifyButton());
            promises.push(InitHelper_InitHelper.showPromptsFromWebConfigEditor());
            try {
                yield Promise.all(promises);
            }
            catch (e) {
                Log["default"].error(e);
                throw new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.Unknown);
            }
        });
    }
    static showNotifyButton() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (Environment["default"].isBrowser() && !OneSignal.notifyButton) {
                OneSignal.config.userConfig.notifyButton = OneSignal.config.userConfig.notifyButton || {};
                if (OneSignal.config.userConfig.bell) {
                    // If both bell and notifyButton, notifyButton's options take precedence
                    OneSignal.config.userConfig.bell = Object.assign(Object.assign({}, OneSignal.config.userConfig.bell), OneSignal.config.userConfig.notifyButton);
                    OneSignal.config.userConfig.notifyButton = Object.assign(Object.assign({}, OneSignal.config.userConfig.notifyButton), OneSignal.config.userConfig.bell);
                }
                const displayPredicate = OneSignal.config.userConfig.notifyButton.displayPredicate;
                if (displayPredicate && typeof displayPredicate === 'function') {
                    OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, () => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                        const predicateValue = yield Promise.resolve(OneSignal.config.userConfig.notifyButton.displayPredicate());
                        if (predicateValue !== false) {
                            OneSignal.notifyButton = new Bell_Bell(OneSignal.config.userConfig.notifyButton);
                            OneSignal.notifyButton.create();
                        }
                        else {
                            Log["default"].debug('Notify button display predicate returned false so not showing the notify button.');
                        }
                    }));
                }
                else {
                    OneSignal.notifyButton = new Bell_Bell(OneSignal.config.userConfig.notifyButton);
                    OneSignal.notifyButton.create();
                }
            }
        });
    }
    static updateEmailSessionCount() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            /* Both HTTP and HTTPS pages can update email session by API request without origin/push feature restrictions */
            if (context.pageViewManager.isFirstPageView()) {
                const emailProfile = yield Database["default"].getEmailProfile();
                if (emailProfile.emailId) {
                    const emailDeviceRecord = new EmailDeviceRecord_EmailDeviceRecord(emailProfile.emailAddress, emailProfile.identifierAuthHash);
                    emailDeviceRecord.appId = context.appConfig.appId;
                    yield OneSignalApiShared_OneSignalApiShared.updateUserSession(emailProfile.emailId, emailDeviceRecord);
                }
            }
        });
    }
    static showPromptsFromWebConfigEditor() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const config = OneSignal.config;
            if (config.userConfig.promptOptions) {
                yield CustomLink_CustomLink.initialize(config.userConfig.promptOptions.customlink);
            }
        });
    }
    static installNativePromptPermissionChangedHook() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (navigator.permissions && !(bowser_default.a.firefox && Number(bowser_default.a.version) <= 45)) {
                OneSignal._usingNativePermissionHook = true;
                // If the browser natively supports hooking the subscription prompt permission change event,
                // use it instead of our SDK method
                const permissionStatus = yield navigator.permissions.query({ name: 'notifications' });
                permissionStatus.onchange = function () {
                    Object(utils["triggerNotificationPermissionChanged"])();
                };
            }
        });
    }
    static saveInitOptions() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            let opPromises = [];
            const persistNotification = OneSignal.config.userConfig.persistNotification;
            opPromises.push(Database["default"].put('Options', {
                key: 'persistNotification',
                value: persistNotification != null ? persistNotification : true
            }));
            let webhookOptions = OneSignal.config.userConfig.webhooks;
            ['notification.displayed', 'notification.clicked', 'notification.dismissed'].forEach(event => {
                if (webhookOptions && webhookOptions[event]) {
                    opPromises.push(Database["default"].put('Options', { key: `webhooks.${event}`, value: webhookOptions[event] }));
                }
                else {
                    opPromises.push(Database["default"].put('Options', { key: `webhooks.${event}`, value: false }));
                }
            });
            if (webhookOptions && webhookOptions.cors) {
                opPromises.push(Database["default"].put('Options', { key: `webhooks.cors`, value: true }));
            }
            else {
                opPromises.push(Database["default"].put('Options', { key: `webhooks.cors`, value: false }));
            }
            if (OneSignal.config.userConfig.notificationClickHandlerMatch) {
                opPromises.push(Database["default"].put('Options', {
                    key: 'notificationClickHandlerMatch',
                    value: OneSignal.config.userConfig.notificationClickHandlerMatch
                }));
            }
            else {
                opPromises.push(Database["default"].put('Options', { key: 'notificationClickHandlerMatch', value: 'exact' }));
            }
            if (OneSignal.config.userConfig.notificationClickHandlerAction) {
                opPromises.push(Database["default"].put('Options', {
                    key: 'notificationClickHandlerAction',
                    value: OneSignal.config.userConfig.notificationClickHandlerAction
                }));
            }
            else {
                opPromises.push(Database["default"].put('Options', { key: 'notificationClickHandlerAction', value: 'navigate' }));
            }
            return Promise.all(opPromises);
        });
    }
    static initSaveState(overridingPageTitle) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const appId = yield MainHelper_MainHelper.getAppId();
            const config = OneSignal.config;
            yield Database["default"].put('Ids', { type: 'appId', id: appId });
            const pageTitle = overridingPageTitle || config.siteName || document.title || 'Notification';
            yield Database["default"].put('Options', { key: 'pageTitle', value: pageTitle });
            Log["default"].info(`OneSignal: Set pageTitle to be '${pageTitle}'.`);
        });
    }
    static handleAutoResubscribe(isOptedOut) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].info("handleAutoResubscribe", { autoResubscribe: OneSignal.config.userConfig.autoResubscribe, isOptedOut });
            if (OneSignal.config.userConfig.autoResubscribe && !isOptedOut) {
                const currentPermission = yield OneSignal.context.permissionManager.getNotificationPermission(OneSignal.context.appConfig.safariWebId);
                if (currentPermission == NotificationPermission.Granted) {
                    yield SubscriptionHelper_SubscriptionHelper.registerForPush();
                }
            }
        });
    }
    static polyfillSafariFetch() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // If Safari - add 'fetch' pollyfill if it isn't already added.
            if (bowser_default.a.safari && typeof window.fetch == 'undefined') {
                Log["default"].debug('Loading fetch polyfill for Safari..');
                try {
                    yield new DynamicResourceLoader_DynamicResourceLoader().loadFetchPolyfill();
                    Log["default"].debug('Done loading fetch polyfill.');
                }
                catch (e) {
                    Log["default"].debug('Error loading fetch polyfill:', e);
                }
            }
        });
    }
    static errorIfInitAlreadyCalled() {
        if (OneSignal._initCalled)
            throw new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.MultipleInitialization);
        OneSignal._initCalled = true;
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/TestHelper.js






class TestHelper_TestHelper {
    /**
     * Creates an expiring local storage entry to note that the user does not want to be disturbed.
     */
    static markHttpsNativePromptDismissed() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /**
             * Note: LocalStorage is set both on subdomain.onesignal.com and the main site.
             *
             * When checking whether the prompt was previously dismissed, certain code cannot be
             * asynchronous otherwise the browser treats it like a blocked popup, so LocalStorage is
             * synchronous while IndexedDb access / PostMessage querying across origins are both
             * asynchronous.
             */
            if (Object(utils["isUsingSubscriptionWorkaround"])()) {
                try {
                    yield new Promise((resolve, reject) => {
                        OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, {}, reply => {
                            if (reply.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                                resolve();
                            }
                            else {
                                reject();
                            }
                        });
                    });
                }
                catch (e) {
                    Log["default"].debug("Proxy Frame possibly didn't not receive MARK_PROMPT_DISMISSED message", e || "");
                }
            }
            let dismissCount = yield Database["default"].get('Options', 'promptDismissCount');
            if (!dismissCount) {
                dismissCount = 0;
            }
            /**
             * This will be run twice for HTTP sites, since we share IndexedDb, so we don't run it for HTTP sites.
             */
            if (!Object(utils["isUsingSubscriptionWorkaround"])()) {
                dismissCount += 1;
            }
            let dismissDays = 3;
            if (dismissCount == 2) {
                dismissDays = 7;
            }
            else if (dismissCount > 2) {
                dismissDays = 30;
            }
            Log["default"].debug(`(${SdkEnvironment["default"].getWindowEnv().toString()}) OneSignal: User dismissed the native notification prompt; reprompt after ${dismissDays} days.`);
            yield Database["default"].put('Options', { key: 'promptDismissCount', value: dismissCount });
            const dismissMinutes = dismissDays * 24 * 60;
            return TimedLocalStorage.setItem('onesignal-notification-prompt', 'dismissed', dismissMinutes);
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/PageViewManager.js




class PageViewManager_PageViewManager {
    constructor() {
        this.incrementedPageViewCount = false;
    }
    getPageViewCount() {
        try {
            /*
              sessionStorage may be supported by the browser but may not be available
              as an API in incognito mode and in cases where the user disables
              third-party cookies on some browsers.
             */
            const pageViewCountStr = sessionStorage.getItem(PageViewManager_PageViewManager.SESSION_STORAGE_KEY_NAME);
            const pageViewCount = pageViewCountStr ? parseInt(pageViewCountStr) : 0;
            if (isNaN(pageViewCount)) {
                return 0;
            }
            else {
                return pageViewCount;
            }
        }
        catch (e) {
            /*
              If we're in incognito mode or sessionStorage is otherwise unsupported,
              pretend we're starting our first session.
             */
            return 0;
        }
    }
    setPageViewCount(sessionCount) {
        try {
            sessionStorage.setItem(PageViewManager_PageViewManager.SESSION_STORAGE_KEY_NAME, sessionCount.toString());
            if (SdkEnvironment["default"].getWindowEnv() === WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionPopup) {
                // If we're setting sessionStorage and we're in an Popup, we need to also set sessionStorage on the
                // main page
                if (OneSignal.subscriptionPopup) {
                    OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT);
                }
            }
        }
        catch (e) {
            /*
              If sessionStorage isn't available, don't error.
             */
        }
    }
    /**
     * Increments:
     *    - session pageView count AND
     *    - total pageView count
     *
     * at most once for the current page view.
     *
     * A flag is set to prevent incrementing the session count more than once for
     * the current page view. If the page is refreshed, this in-memory variable
     * will be automatically reset. Because of this, regardless of the number of
     * times this method is called on the current page view, the page view count
     * will only be incremented once.
     *
     * LocalStorage pageView count added for use in Delayed Prompts feature. This
     * pageView count persists even past sessions since it is saved to local stor-
     * age (as opposed to Session Storage which persists only for that tab)
     */
    incrementPageViewCount() {
        if (this.incrementedPageViewCount) {
            // For this method, we don't want to increment the session count more than
            // once per pageview
            return;
        }
        const newCountSingleTab = this.getPageViewCount() + 1;
        const newCountAcrossTabs = this.getLocalPageViewCount() + 1;
        this.setPageViewCount(newCountSingleTab);
        this.setLocalPageViewCount(newCountAcrossTabs);
        this.incrementedPageViewCount = true;
        Log["default"].debug(`Incremented page view count: newCountSingleTab: ${newCountSingleTab},
      newCountAccrossTabs: ${newCountAcrossTabs}.`);
    }
    simulatePageNavigationOrRefresh() {
        this.incrementedPageViewCount = false;
    }
    /**
     * Returns true if this page is running OneSignal for the first time and has
     * not been navigated or refreshed.
     */
    isFirstPageView() {
        return this.getPageViewCount() === 1;
    }
    /**
     * Returns Page Views saved to Local Storage (Persists Longer than Single Session)
     */
    getLocalPageViewCount() {
        return LocalStorage_LocalStorage.getLocalPageViewCount();
    }
    /**
     * Sets Page Views to Local Storage
     */
    setLocalPageViewCount(count) {
        LocalStorage_LocalStorage.setLocalPageViewCount(count);
    }
}
PageViewManager_PageViewManager.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count";


// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/SubscriptionError.js

var SubscriptionError_SubscriptionErrorReason;
(function (SubscriptionErrorReason) {
    SubscriptionErrorReason[SubscriptionErrorReason["InvalidSafariSetup"] = 0] = "InvalidSafariSetup";
    SubscriptionErrorReason[SubscriptionErrorReason["Blocked"] = 1] = "Blocked";
    SubscriptionErrorReason[SubscriptionErrorReason["Dismissed"] = 2] = "Dismissed";
})(SubscriptionError_SubscriptionErrorReason || (SubscriptionError_SubscriptionErrorReason = {}));
class SubscriptionError_SubscriptionError extends OneSignalError["default"] {
    constructor(reason) {
        switch (reason) {
            case SubscriptionError_SubscriptionErrorReason.InvalidSafariSetup:
                super('The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.');
                break;
            case SubscriptionError_SubscriptionErrorReason.Blocked:
                super('Notification permissions are blocked.');
                break;
            case SubscriptionError_SubscriptionErrorReason.Dismissed:
                super('The notification permission prompt was dismissed.');
                break;
        }
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, SubscriptionError_SubscriptionError.prototype);
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/SubscriptionManager.js


























class SubscriptionManager_SubscriptionManager {
    constructor(context, config) {
        this.context = context;
        this.config = config;
    }
    static isSafari() {
        return Environment["default"].isSafari();
    }
    /**
     * Subscribes for a web push subscription.
     *
     * This method is aware of different subscription environments like subscribing from a webpage,
     * service worker, or OneSignal HTTP popup and will select the correct method. This is intended to
     * be the single public API for obtaining a raw web push subscription (i.e. what the browser
     * returns from a successful subscription).
     */
    subscribe(subscriptionStrategy) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const env = SdkEnvironment["default"].getWindowEnv();
            switch (env) {
                case WindowEnvironmentKind["WindowEnvironmentKind"].CustomIframe:
                case WindowEnvironmentKind["WindowEnvironmentKind"].Unknown:
                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalProxyFrame:
                    throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].UnsupportedEnvironment);
            }
            let rawPushSubscription;
            switch (env) {
                case WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker:
                    rawPushSubscription = yield this.subscribeFcmFromWorker(subscriptionStrategy);
                    break;
                case WindowEnvironmentKind["WindowEnvironmentKind"].Host:
                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionModal:
                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionPopup:
                    /*
                      Check our notification permission before subscribing.
            
                      - If notifications are blocked, we can't subscribe.
                      - If notifications are granted, the user should be completely resubscribed.
                      - If notifications permissions are untouched, the user will be prompted and then
                        subscribed.
            
                      Subscribing is only possible on the top-level frame, so there's no permission ambiguity
                      here.
                    */
                    if ((yield OneSignal.privateGetNotificationPermission()) === NotificationPermission.Denied)
                        throw new PushPermissionNotGrantedError_PushPermissionNotGrantedError(PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Blocked);
                    if (SubscriptionManager_SubscriptionManager.isSafari()) {
                        rawPushSubscription = yield this.subscribeSafari();
                        /* Now that permissions have been granted, install the service worker */
                        Log["default"].info("Installing SW on Safari");
                        try {
                            yield this.context.serviceWorkerManager.installWorker();
                            Log["default"].info("SW on Safari successfully installed");
                        }
                        catch (e) {
                            Log["default"].error("SW on Safari failed to install.");
                        }
                    }
                    else {
                        rawPushSubscription = yield this.subscribeFcmFromPage(subscriptionStrategy);
                    }
                    break;
                default:
                    throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].UnsupportedEnvironment);
            }
            return rawPushSubscription;
        });
    }
    /**
     * Creates a device record from the provided raw push subscription and forwards this device record
     * to OneSignal to create or update the device ID.
     *
     * @param rawPushSubscription The raw push subscription obtained from calling subscribe(). This
     * can be null, in which case OneSignal's device record is set to unsubscribed.
     *
     * @param subscriptionState Describes whether the device record is subscribed, unsubscribed, or in
     * another state. By default, this is set from the availability of rawPushSubscription (exists:
     * Subscribed, null: Unsubscribed). Other use cases may result in creation of a device record that
     * warrants a special subscription state. For example, a device ID can be retrieved by providing
     * an identifier, and a new device record will be created if the identifier didn't exist. These
     * records are marked with a special subscription state for tracking purposes.
     */
    registerSubscription(pushSubscription, subscriptionState) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /*
              This may be called after the RawPushSubscription has been serialized across a postMessage
              frame. This means it will only have object properties and none of the functions. We have to
              recreate the RawPushSubscription.
        
              Keep in mind pushSubscription can be null in cases where resubscription isn't possible
              (blocked permission).
            */
            if (pushSubscription) {
                pushSubscription = RawPushSubscription["RawPushSubscription"].deserialize(pushSubscription);
            }
            const deviceRecord = PushDeviceRecord["PushDeviceRecord"].createFromPushSubscription(this.config.appId, pushSubscription, subscriptionState);
            let newDeviceId = undefined;
            if (yield this.isAlreadyRegisteredWithOneSignal()) {
                yield this.context.updateManager.sendPlayerUpdate(deviceRecord);
            }
            else {
                newDeviceId = yield this.context.updateManager.sendPlayerCreate(deviceRecord);
                if (newDeviceId) {
                    yield this.associateSubscriptionWithEmail(newDeviceId);
                }
            }
            const subscription = yield Database["default"].getSubscription();
            subscription.deviceId = newDeviceId;
            subscription.optedOut = false;
            if (pushSubscription) {
                if (SubscriptionManager_SubscriptionManager.isSafari()) {
                    subscription.subscriptionToken = pushSubscription.safariDeviceToken;
                }
                else {
                    subscription.subscriptionToken = pushSubscription.w3cEndpoint ? pushSubscription.w3cEndpoint.toString() : null;
                }
            }
            else {
                subscription.subscriptionToken = null;
            }
            yield Database["default"].setSubscription(subscription);
            if (SdkEnvironment["default"].getWindowEnv() !== WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker) {
                Event["default"].trigger(OneSignal.EVENTS.REGISTERED);
            }
            if (typeof OneSignal !== "undefined") {
                OneSignal._sessionInitAlreadyRunning = false;
            }
            return subscription;
        });
    }
    /**
     * Used before subscribing for push, we request notification permissions
     * before installing the service worker to prevent non-subscribers from
     * querying our server for an updated service worker every 24 hours.
     */
    static requestPresubscribeNotificationPermission() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield SubscriptionManager_SubscriptionManager.requestNotificationPermission();
        });
    }
    unsubscribe(strategy) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (strategy === 0 /* DestroySubscription */) {
                throw new NotImplementedError["default"]();
            }
            else if (strategy === 1 /* MarkUnsubscribed */) {
                if (SdkEnvironment["default"].getWindowEnv() === WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker) {
                    const { deviceId } = yield Database["default"].getSubscription();
                    yield OneSignalApiShared_OneSignalApiShared.updatePlayer(this.context.appConfig.appId, deviceId, {
                        notification_types: SubscriptionStateKind["SubscriptionStateKind"].MutedByApi
                    });
                    yield Database["default"].put('Options', { key: 'optedOut', value: true });
                }
                else {
                    throw new NotImplementedError["default"]();
                }
            }
            else {
                throw new NotImplementedError["default"]();
            }
        });
    }
    /**
     * Calls Notification.requestPermission(), but returns a Promise instead of
     * accepting a callback like the actual Notification.requestPermission();
     *
     * window.Notification.requestPermission: The callback was deprecated since Gecko 46 in favor of a Promise
     */
    static requestNotificationPermission() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const results = yield window.Notification.requestPermission();
            // TODO: Clean up our custom NotificationPermission enum
            //         in favor of TS union type NotificationPermission instead of converting
            return NotificationPermission[results];
        });
    }
    /**
     * Called after registering a subscription with OneSignal to associate this subscription with an
     * email record if one exists.
     */
    associateSubscriptionWithEmail(newDeviceId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const emailProfile = yield Database["default"].getEmailProfile();
            if (!emailProfile.emailId) {
                return;
            }
            // Update the push device record with a reference to the new email ID and email address
            yield OneSignalApiShared_OneSignalApiShared.updatePlayer(this.config.appId, newDeviceId, {
                parent_player_id: emailProfile.emailId,
                email: emailProfile.emailAddress
            });
        });
    }
    isAlreadyRegisteredWithOneSignal() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const { deviceId } = yield Database["default"].getSubscription();
            return !!deviceId;
        });
    }
    subscribeSafariPromptPermission() {
        return new Promise(resolve => {
            window.safari.pushNotification.requestPermission(`${SdkEnvironment["default"].getOneSignalApiUrl().toString()}/safari`, this.config.safariWebId, {
                app_id: this.config.appId
            }, response => {
                if (response.deviceToken) {
                    resolve(response.deviceToken.toLowerCase());
                }
                else {
                    resolve(null);
                }
            });
        });
    }
    subscribeSafari() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const pushSubscriptionDetails = new RawPushSubscription["RawPushSubscription"]();
            if (!this.config.safariWebId) {
                throw new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.MissingSafariWebId);
            }
            const { deviceToken: existingDeviceToken } = window.safari.pushNotification.permission(this.config.safariWebId);
            pushSubscriptionDetails.existingSafariDeviceToken = existingDeviceToken;
            if (!existingDeviceToken) {
                /*
                  We're about to show the Safari native permission request. It can fail for a number of
                  reasons, e.g.:
                    - Setup-related reasons when developers just starting to get set up
                      - Address bar URL doesn't match safari certificate allowed origins (case-sensitive)
                      - Safari web ID doesn't match provided web ID
                      - Browsing in a Safari private window
                      - Bad icon DPI
          
                  but shouldn't fail for sites that have already gotten Safari working.
          
                  We'll show the permissionPromptDisplay event if the Safari user isn't already subscribed,
                  otherwise an already subscribed Safari user would not see the permission request again.
                 */
                Event["default"].trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
            }
            const deviceToken = yield this.subscribeSafariPromptPermission();
            PermissionUtils["PermissionUtils"].triggerNotificationPermissionChanged();
            if (deviceToken) {
                pushSubscriptionDetails.setFromSafariSubscription(deviceToken);
            }
            else {
                throw new SubscriptionError_SubscriptionError(SubscriptionError_SubscriptionErrorReason.InvalidSafariSetup);
            }
            return pushSubscriptionDetails;
        });
    }
    subscribeFcmFromPage(subscriptionStrategy) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /*
              Before installing the service worker, request notification permissions. If
              the visitor doesn't grant permissions, this saves bandwidth bleeding from
              an unused install service worker periodically fetching an updated version
              from our CDN.
            */
            /*
              Trigger the permissionPromptDisplay event to the best of our knowledge.
            */
            if (SdkEnvironment["default"].getWindowEnv() !== WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker &&
                Notification.permission === NotificationPermission.Default) {
                yield Event["default"].trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED);
                const permission = yield SubscriptionManager_SubscriptionManager.requestPresubscribeNotificationPermission();
                /*
                  Notification permission changes are already broadcast by the page's
                  notificationpermissionchange handler. This means that allowing or
                  denying the permission prompt will cause double events. However, the
                  native event handler does not broadcast an event for dismissing the
                  prompt, because going from "default" permissions to "default"
                  permissions isn't a change. We specifically broadcast "default" to "default" changes.
                 */
                if (permission === NotificationPermission.Default)
                    yield PermissionUtils["PermissionUtils"].triggerNotificationPermissionChanged(true);
                // If the user did not grant push permissions, throw and exit
                switch (permission) {
                    case NotificationPermission.Default:
                        Log["default"].debug('Exiting subscription and not registering worker because the permission was dismissed.');
                        OneSignal._sessionInitAlreadyRunning = false;
                        OneSignal._isRegisteringForPush = false;
                        throw new PushPermissionNotGrantedError_PushPermissionNotGrantedError(PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Dismissed);
                    case NotificationPermission.Denied:
                        Log["default"].debug('Exiting subscription and not registering worker because the permission was blocked.');
                        OneSignal._sessionInitAlreadyRunning = false;
                        OneSignal._isRegisteringForPush = false;
                        throw new PushPermissionNotGrantedError_PushPermissionNotGrantedError(PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Blocked);
                }
            }
            /* Now that permissions have been granted, install the service worker */
            try {
                yield this.context.serviceWorkerManager.installWorker();
            }
            catch (err) {
                if (err instanceof errors_ServiceWorkerRegistrationError) {
                    if (err.status === 403) {
                        yield this.context.subscriptionManager.registerFailedSubscription(SubscriptionStateKind["SubscriptionStateKind"].ServiceWorkerStatus403, this.context);
                    }
                    else if (err.status === 404) {
                        yield this.context.subscriptionManager.registerFailedSubscription(SubscriptionStateKind["SubscriptionStateKind"].ServiceWorkerStatus404, this.context);
                    }
                }
                throw err;
            }
            Log["default"].debug('Waiting for the service worker to activate...');
            const workerRegistration = yield navigator.serviceWorker.ready;
            Log["default"].debug('Service worker is ready to continue subscribing.');
            return yield this.subscribeWithVapidKey(workerRegistration.pushManager, subscriptionStrategy);
        });
    }
    subscribeFcmFromWorker(subscriptionStrategy) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /*
              We're running inside of the service worker.
        
              Check to make sure our registration is activated, otherwise we can't
              subscribe for push.
        
              HACK: Firefox doesn't set self.registration.active in the service worker
              context. From a non-service worker context, like
              navigator.serviceWorker.getRegistration().active, the property actually is
              set, but it's just not set within the service worker context.
        
              Because of this, we're not able to check for this property on Firefox.
             */
            const swRegistration = self.registration;
            if (!swRegistration.active && !bowser_default.a.firefox) {
                throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].ServiceWorkerNotActivated);
                /*
                  Or should we wait for the service worker to be ready?
          
                  await new Promise(resolve => self.onactivate = resolve);
                 */
            }
            /*
              Check to make sure push permissions have been granted.
             */
            const pushPermission = yield swRegistration.pushManager.permissionState({ userVisibleOnly: true });
            if (pushPermission === 'denied') {
                throw new PushPermissionNotGrantedError_PushPermissionNotGrantedError(PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Blocked);
            }
            else if (pushPermission === 'prompt') {
                throw new PushPermissionNotGrantedError_PushPermissionNotGrantedError(PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Default);
            }
            return yield this.subscribeWithVapidKey(swRegistration.pushManager, subscriptionStrategy);
        });
    }
    /**
     * Returns the correct VAPID key to use for subscription based on the browser type.
     *
     * If the VAPID key isn't present, undefined is returned instead of null.
     */
    getVapidKeyForBrowser() {
        // Specifically return undefined instead of null if the key isn't available
        let key = undefined;
        if (bowser_default.a.firefox) {
            /*
              Firefox uses VAPID for application identification instead of
              authentication, and so all apps share an identification key.
             */
            key = this.config.onesignalVapidPublicKey;
        }
        else {
            /*
              Chrome and Chrome-like browsers including Opera and Yandex use VAPID for
              authentication, and so each app uses a uniquely generated key.
             */
            key = this.config.vapidPublicKey;
        }
        if (key) {
            return base64ToUint8Array(key).buffer;
        }
        else {
            return undefined;
        }
    }
    /**
     * Uses the browser's PushManager interface to actually subscribe for a web push subscription.
     *
     * @param pushManager An instance of the browser's push manager, either from the page or from the
     * service worker.
     *
     * @param subscriptionStrategy Given an existing push subscription, describes whether the existing
     * push subscription is resubscribed as-is leaving it unchanged, or unsubscribed to make room for
     * a new push subscription.
     */
    subscribeWithVapidKey(pushManager, subscriptionStrategy) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /*
              Always try subscribing using VAPID by providing an applicationServerKey, except for cases
              where the user is already subscribed, handled below.
             */
            const existingPushSubscription = yield pushManager.getSubscription();
            /* Depending on the subscription strategy, handle existing subscription in various ways */
            switch (subscriptionStrategy) {
                case 0 /* ResubscribeExisting */:
                    if (!existingPushSubscription)
                        break;
                    if (existingPushSubscription.options) {
                        Log["default"].debug("[Subscription Manager] An existing push subscription exists and it's options is not null.");
                    }
                    else {
                        Log["default"].debug('[Subscription Manager] An existing push subscription exists and options is null. ' +
                            'Unsubscribing from push first now.');
                        /*
                          NOTE: Only applies to rare edge case of migrating from senderId to a VAPID subscription
                          There isn't a great solution if PushSubscriptionOptions (supported on Chrome 54+) isn't
                          supported.
              
                          We want to subscribe the user, but we don't know whether the user was subscribed via
                          GCM's manifest.json or FCM's VAPID.
              
                          This bug (https://bugs.chromium.org/p/chromium/issues/detail?id=692577) shows that a
                          mismatched sender ID error is possible if you subscribe via FCM's VAPID while the user
                          was originally subscribed via GCM's manifest.json (fails silently).
              
                          Because of this, we should unsubscribe the user from push first and then resubscribe
                          them.
                        */
                        /* We're unsubscribing, so we want to store the created at timestamp */
                        yield SubscriptionManager_SubscriptionManager.doPushUnsubscribe(existingPushSubscription);
                    }
                    break;
                case 1 /* SubscribeNew */:
                    /* Since we want a new subscription every time with this strategy, just unsubscribe. */
                    if (existingPushSubscription) {
                        yield SubscriptionManager_SubscriptionManager.doPushUnsubscribe(existingPushSubscription);
                    }
                    break;
            }
            // Actually subscribe the user to push
            const [newPushSubscription, isNewSubscription] = yield SubscriptionManager_SubscriptionManager.doPushSubscribe(pushManager, this.getVapidKeyForBrowser());
            // Update saved create and expired times
            yield SubscriptionManager_SubscriptionManager.updateSubscriptionTime(isNewSubscription, newPushSubscription.expirationTime);
            // Create our own custom object from the browser's native PushSubscription object
            const pushSubscriptionDetails = RawPushSubscription["RawPushSubscription"].setFromW3cSubscription(newPushSubscription);
            if (existingPushSubscription) {
                pushSubscriptionDetails.existingW3cPushSubscription =
                    RawPushSubscription["RawPushSubscription"].setFromW3cSubscription(existingPushSubscription);
            }
            return pushSubscriptionDetails;
        });
    }
    static updateSubscriptionTime(updateCreatedAt, expirationTime) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const bundle = yield Database["default"].getSubscription();
            if (updateCreatedAt) {
                bundle.createdAt = new Date().getTime();
            }
            bundle.expirationTime = expirationTime;
            yield Database["default"].setSubscription(bundle);
        });
    }
    static doPushUnsubscribe(pushSubscription) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug('[Subscription Manager] Unsubscribing existing push subscription.');
            const result = yield pushSubscription.unsubscribe();
            Log["default"].debug(`[Subscription Manager] Unsubscribing existing push subscription result: ${result}`);
            return result;
        });
    }
    // Subscribes the ServiceWorker for a pushToken.
    // If there is an error doing so unsubscribe from existing and try again
    //    - This handles subscribing to new server VAPID key if it has changed.
    // return type - [PushSubscription, createdNewPushSubscription(boolean)]
    static doPushSubscribe(pushManager, applicationServerKey) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!applicationServerKey) {
                throw new Error("Missing required 'applicationServerKey' to subscribe for push notifications!");
            }
            const subscriptionOptions = {
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
            };
            Log["default"].debug('[Subscription Manager] Subscribing to web push with these options:', subscriptionOptions);
            try {
                const existingSubscription = yield pushManager.getSubscription();
                return [yield pushManager.subscribe(subscriptionOptions), !existingSubscription];
            }
            catch (e) {
                if (e.name == "InvalidStateError") {
                    // This exception is thrown if the key for the existing applicationServerKey is different,
                    //    so we must unregister first.
                    // In Chrome, e.message contains will be the following in this case for reference;
                    // Registration failed - A subscription with a different applicationServerKey (or gcm_sender_id) already exists;
                    //    to change the applicationServerKey, unsubscribe then resubscribe.
                    Log["default"].warn("[Subscription Manager] Couldn't re-subscribe due to applicationServerKey changing, " +
                        "unsubscribe and attempting to subscribe with new key.", e);
                    const subscription = yield pushManager.getSubscription();
                    if (subscription) {
                        yield SubscriptionManager_SubscriptionManager.doPushUnsubscribe(subscription);
                    }
                    return [yield pushManager.subscribe(subscriptionOptions), true];
                }
                else
                    throw e; // If some other error, bubble the exception up
            }
        });
    }
    isSubscriptionExpiring() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const integrationKind = yield SdkEnvironment["default"].getIntegration();
            const windowEnv = SdkEnvironment["default"].getWindowEnv();
            switch (integrationKind) {
                case IntegrationKind["IntegrationKind"].Secure:
                    return yield this.isSubscriptionExpiringForSecureIntegration();
                case IntegrationKind["IntegrationKind"].SecureProxy:
                    if (windowEnv === WindowEnvironmentKind["WindowEnvironmentKind"].Host) {
                        const proxyFrameHost = OneSignal.proxyFrameHost;
                        if (!proxyFrameHost) {
                            throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].NoProxyFrame);
                        }
                        else {
                            return yield proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE);
                        }
                    }
                    else {
                        return yield this.isSubscriptionExpiringForSecureIntegration();
                    }
                case IntegrationKind["IntegrationKind"].InsecureProxy:
                    /* If we're in an insecure frame context, check the stored expiration since we can't access
                    the actual push subscription. */
                    const { expirationTime } = yield Database["default"].getSubscription();
                    if (!expirationTime) {
                        /* If an existing subscription does not have a stored expiration time, do not
                        treat it as expired. The subscription may have been created before this feature was added,
                        or the browser may not assign any expiration time. */
                        return false;
                    }
                    /* The current time (in UTC) is past the expiration time (also in UTC) */
                    return new Date().getTime() >= expirationTime;
            }
        });
    }
    isSubscriptionExpiringForSecureIntegration() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const serviceWorkerState = yield this.context.serviceWorkerManager.getActiveState();
            if (!(serviceWorkerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerA ||
                serviceWorkerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerB)) {
                /* If the service worker isn't activated, there's no subscription to look for */
                return false;
            }
            const serviceWorkerRegistration = yield ServiceWorkerManager_ServiceWorkerManager.getRegistration();
            if (!serviceWorkerRegistration)
                return false;
            // It's possible to get here in Safari 11.1+ version
            //   since they released support for service workers but not push api.
            if (!serviceWorkerRegistration.pushManager)
                return false;
            const pushSubscription = yield serviceWorkerRegistration.pushManager.getSubscription();
            // Not subscribed to web push
            if (!pushSubscription)
                return false;
            // No push subscription expiration time
            if (!pushSubscription.expirationTime)
                return false;
            let { createdAt: subscriptionCreatedAt } = yield Database["default"].getSubscription();
            if (!subscriptionCreatedAt) {
                /* If we don't have a record of when the subscription was created, set it into the future to
                guarantee expiration and obtain a new subscription */
                const ONE_YEAR = 1000 * 60 * 60 * 24 * 365;
                subscriptionCreatedAt = new Date().getTime() + ONE_YEAR;
            }
            const midpointExpirationTime = subscriptionCreatedAt + ((pushSubscription.expirationTime - subscriptionCreatedAt) / 2);
            return !!pushSubscription.expirationTime && (
            /* The current time (in UTC) is past the expiration time (also in UTC) */
            new Date().getTime() >= pushSubscription.expirationTime ||
                new Date().getTime() >= midpointExpirationTime);
        });
    }
    /**
     * Returns an object describing the user's actual push subscription state and opt-out status.
     */
    getSubscriptionState() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /* Safari should always return Secure because HTTP doesn't apply on Safari */
            if (SubscriptionManager_SubscriptionManager.isSafari()) {
                return this.getSubscriptionStateForSecure();
            }
            const windowEnv = SdkEnvironment["default"].getWindowEnv();
            switch (windowEnv) {
                case WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker:
                    const pushSubscription = yield self.registration.pushManager.getSubscription();
                    const { optedOut } = yield Database["default"].getSubscription();
                    return {
                        subscribed: !!pushSubscription,
                        optedOut: !!optedOut
                    };
                default:
                    /* Regular browser window environments */
                    const integration = yield SdkEnvironment["default"].getIntegration();
                    switch (integration) {
                        case IntegrationKind["IntegrationKind"].Secure:
                            return this.getSubscriptionStateForSecure();
                        case IntegrationKind["IntegrationKind"].SecureProxy:
                            switch (windowEnv) {
                                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalProxyFrame:
                                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionPopup:
                                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionModal:
                                    return this.getSubscriptionStateForSecure();
                                default:
                                    /* Re-run this command in the proxy frame */
                                    const proxyFrameHost = OneSignal.proxyFrameHost;
                                    const pushSubscriptionState = yield proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE);
                                    return pushSubscriptionState;
                            }
                        case IntegrationKind["IntegrationKind"].InsecureProxy:
                            return yield this.getSubscriptionStateForInsecure();
                        default:
                            throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].UnsupportedEnvironment);
                    }
            }
        });
    }
    getSubscriptionStateForSecure() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const { deviceId, optedOut } = yield Database["default"].getSubscription();
            if (SubscriptionManager_SubscriptionManager.isSafari()) {
                const subscriptionState = window.safari.pushNotification.permission(this.config.safariWebId);
                const isSubscribedToSafari = !!(subscriptionState.permission === "granted" &&
                    subscriptionState.deviceToken &&
                    deviceId);
                return {
                    subscribed: isSubscribedToSafari,
                    optedOut: !!optedOut,
                };
            }
            const workerState = yield this.context.serviceWorkerManager.getActiveState();
            const workerRegistration = yield ServiceWorkerManager_ServiceWorkerManager.getRegistration();
            const notificationPermission = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId);
            const isWorkerActive = (workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerA ||
                workerState === helpers_ServiceWorkerHelper["ServiceWorkerActiveState"].WorkerB);
            if (!workerRegistration) {
                /* You can't be subscribed without a service worker registration */
                return {
                    subscribed: false,
                    optedOut: !!optedOut,
                };
            }
            /*
             * Removing pushSubscription from this method due to inconsistent behavior between browsers.
             * Doesn't matter for re-subscribing, worker is present and active.
             * Previous implementation for reference:
             * const pushSubscription = await workerRegistration.pushManager.getSubscription();
             * const isPushEnabled = !!(
             *   pushSubscription &&
             *   deviceId &&
             *   notificationPermission === NotificationPermission.Granted &&
             *   isWorkerActive
             * );
             */
            const isPushEnabled = !!(deviceId &&
                notificationPermission === NotificationPermission.Granted &&
                isWorkerActive);
            return {
                subscribed: isPushEnabled,
                optedOut: !!optedOut,
            };
        });
    }
    getSubscriptionStateForInsecure() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /* For HTTP, we need to rely on stored values; we never have access to the actual data */
            const { deviceId, subscriptionToken, optedOut } = yield Database["default"].getSubscription();
            const notificationPermission = yield this.context.permissionManager.getNotificationPermission(this.context.appConfig.safariWebId);
            const isPushEnabled = !!(deviceId &&
                subscriptionToken &&
                notificationPermission === NotificationPermission.Granted);
            return {
                subscribed: isPushEnabled,
                optedOut: !!optedOut,
            };
        });
    }
    /**
     * Broadcasting to the server the fact user tried to subscribe but there was an error during service worker registration.
     * Do it only once for the first page view.
     * @param subscriptionState Describes what went wrong with the service worker installation.
     */
    registerFailedSubscription(subscriptionState, context) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (context.pageViewManager.isFirstPageView()) {
                context.subscriptionManager.registerSubscription(new RawPushSubscription["RawPushSubscription"](), subscriptionState);
                context.pageViewManager.incrementPageViewCount();
            }
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/ContextHelper.js




class ContextHelper_ContextHelper {
    static getServiceWorkerManager(context) {
        const config = context.appConfig;
        const envPrefix = SdkEnvironment["default"].getBuildEnvPrefix();
        const serviceWorkerManagerConfig = {
            workerAPath: new Path_Path(`/${envPrefix}OneSignalSDKWorker.js`),
            workerBPath: new Path_Path(`/${envPrefix}OneSignalSDKUpdaterWorker.js`),
            registrationOptions: { scope: '/' }
        };
        if (config.userConfig) {
            if (config.userConfig.path) {
                serviceWorkerManagerConfig.workerAPath =
                    new Path_Path(`${config.userConfig.path}${envPrefix}${config.userConfig.serviceWorkerPath}`);
                serviceWorkerManagerConfig.workerBPath =
                    new Path_Path(`${config.userConfig.path}${envPrefix}${config.userConfig.serviceWorkerUpdaterPath}`);
            }
            if (config.userConfig.serviceWorkerParam) {
                serviceWorkerManagerConfig.registrationOptions = config.userConfig.serviceWorkerParam;
            }
        }
        return new ServiceWorkerManager_ServiceWorkerManager(context, serviceWorkerManagerConfig);
    }
    static getSubscriptionManager(context) {
        const config = context.appConfig;
        const subscriptionManagerConfig = {
            safariWebId: config.safariWebId,
            appId: config.appId,
            vapidPublicKey: config.vapidPublicKey,
            onesignalVapidPublicKey: config.onesignalVapidPublicKey,
        };
        return new SubscriptionManager_SubscriptionManager(context, subscriptionManagerConfig);
    }
}
/* harmony default export */ var helpers_ContextHelper = (ContextHelper_ContextHelper);


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/UpdateManager.js










class UpdateManager_UpdateManager {
    constructor(context) {
        this.context = context;
        this.onSessionSent = context.pageViewManager.getPageViewCount() > 1;
    }
    getDeviceId() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const { deviceId } = yield Database["default"].getSubscription();
            if (!deviceId) {
                throw new NotSubscribedError_NotSubscribedError(NotSubscribedError_NotSubscribedReason.NoDeviceId);
            }
            return deviceId;
        });
    }
    createDeviceRecord() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return MainHelper_MainHelper.createDeviceRecord(this.context.appConfig.appId);
        });
    }
    sendPlayerUpdate(deviceRecord) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const existingUser = yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
            if (!existingUser) {
                Log["default"].debug("Not sending the update because user is not registered with OneSignal (no device id)");
                return;
            }
            const deviceId = yield this.getDeviceId();
            if (!deviceRecord) {
                deviceRecord = yield this.createDeviceRecord();
            }
            if (this.onSessionSent) {
                yield OneSignalApiShared_OneSignalApiShared.updatePlayer(this.context.appConfig.appId, deviceId, Object.assign({ notification_types: SubscriptionStateKind["SubscriptionStateKind"].Subscribed }, deviceRecord.serialize()));
            }
            else {
                yield this.sendOnSessionUpdate(deviceRecord);
            }
        });
    }
    // If user has been subscribed before, send the on_session update to our backend on the first page view.
    sendOnSessionUpdate(deviceRecord) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (this.onSessionSent) {
                return;
            }
            if (!this.context.pageViewManager.isFirstPageView()) {
                return;
            }
            const existingUser = yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
            if (!existingUser) {
                Log["default"].debug("Not sending the on session because user is not registered with OneSignal (no device id)");
                return;
            }
            const deviceId = yield this.getDeviceId();
            if (!deviceRecord) {
                deviceRecord = yield this.createDeviceRecord();
            }
            if (deviceRecord.subscriptionState !== SubscriptionStateKind["SubscriptionStateKind"].Subscribed &&
                OneSignal.config.enableOnSession !== true) {
                return;
            }
            try {
                // Not sending on_session here but from SW instead.
                // Not awaiting here on purpose
                this.context.sessionManager.upsertSession(deviceId, deviceRecord, Session["SessionOrigin"].PlayerOnSession);
                this.onSessionSent = true;
            }
            catch (e) {
                Log["default"].error(`Failed to update user session. Error "${e.message}" ${e.stack}`);
            }
        });
    }
    sendPlayerCreate(deviceRecord) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const deviceId = yield OneSignalApiShared_OneSignalApiShared.createUser(deviceRecord);
                if (deviceId) {
                    Log["default"].info("Subscribed to web push and registered with OneSignal", deviceRecord, deviceId);
                    this.onSessionSent = true;
                    // Not awaiting here on purpose
                    this.context.sessionManager.upsertSession(deviceId, deviceRecord, Session["SessionOrigin"].PlayerCreate);
                    return deviceId;
                }
                Log["default"].error(`Failed to create user.`);
                return undefined;
            }
            catch (e) {
                Log["default"].error(`Failed to create user. Error "${e.message}" ${e.stack}`);
                return undefined;
            }
        });
    }
    onSessionAlreadyCalled() {
        return this.onSessionSent;
    }
    sendExternalUserIdUpdate(externalUserId, authHash) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const deviceId = yield this.getDeviceId();
            if (!authHash) {
                authHash = yield Database["default"].getExternalUserIdAuthHash();
            }
            const payload = {
                external_user_id: Utils["default"].getValueOrDefault(externalUserId, ""),
                external_user_id_auth_hash: Utils["default"].getValueOrDefault(authHash, undefined)
            };
            return yield OneSignalApiShared_OneSignalApiShared.updatePlayer(this.context.appConfig.appId, deviceId, payload);
        });
    }
    sendOutcomeDirect(appId, notificationIds, outcomeName, value) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Object(utils["logMethodCall"])("sendOutcomeDirect");
            const deviceRecord = yield this.createDeviceRecord();
            const outcomeRequestData = {
                app_id: appId,
                id: outcomeName,
                device_type: deviceRecord.deliveryPlatform,
                notification_ids: notificationIds,
                direct: true,
            };
            if (value !== undefined) {
                outcomeRequestData.weight = value;
            }
            yield OneSignalApiShared_OneSignalApiShared.sendOutcome(outcomeRequestData);
        });
    }
    sendOutcomeInfluenced(appId, notificationIds, outcomeName, value) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Object(utils["logMethodCall"])("sendOutcomeInfluenced");
            const deviceRecord = yield this.createDeviceRecord();
            const outcomeRequestData = {
                app_id: appId,
                id: outcomeName,
                device_type: deviceRecord.deliveryPlatform,
                notification_ids: notificationIds,
                direct: false,
            };
            if (value !== undefined) {
                outcomeRequestData.weight = value;
            }
            yield OneSignalApiShared_OneSignalApiShared.sendOutcome(outcomeRequestData);
        });
    }
    sendOutcomeUnattributed(appId, outcomeName, value) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Object(utils["logMethodCall"])("sendOutcomeUnattributed");
            const deviceRecord = yield this.createDeviceRecord();
            const outcomeRequestData = {
                app_id: appId,
                id: outcomeName,
                device_type: deviceRecord.deliveryPlatform,
            };
            if (value !== undefined) {
                outcomeRequestData.weight = value;
            }
            yield OneSignalApiShared_OneSignalApiShared.sendOutcome(outcomeRequestData);
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/AlreadySubscribedError.js

class AlreadySubscribedError_AlreadySubscribedError extends OneSignalError["default"] {
    constructor() {
        super('This operation can only be performed when the user is not subscribed.');
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, AlreadySubscribedError_AlreadySubscribedError.prototype);
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/PermissionMessageDismissedError.js

class PermissionMessageDismissedError_PermissionMessageDismissedError extends OneSignalError["default"] {
    constructor() {
        super('The permission message was previously dismissed.');
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, PermissionMessageDismissedError_PermissionMessageDismissedError.prototype);
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/models/PermissionPromptType.js
var PermissionPromptType = __webpack_require__("./build/ts-to-es6/src/models/PermissionPromptType.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/slidedown/LoadingIndicator.js
function getLoadingIndicatorWithColor(color) {
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="24px" height="24px" fill="${color}"> <g transform="rotate(0 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.916s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(30 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.833s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(60 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/> </rect> </g> <g transform="rotate(90 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.666s"/> </rect> </g> <g transform="rotate(120 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.583s"/> </rect> </g> <g transform="rotate(150 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.5s"/> </rect> </g> <g transform="rotate(180 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.416s"/> </rect> </g> <g transform="rotate(210 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.333s"/> </rect> </g> <g transform="rotate(240 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.25s"/> </rect> </g> <g transform="rotate(270 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.166s"/> </rect> </g> <g transform="rotate(300 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="-0.083s"/> </rect> </g> <g transform="rotate(330 50 50)"> <rect x="46" y="6" rx="36.8" ry="4.8" width="8" height="24" > <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" repeatCount="indefinite" begin="0s"/> </rect> </g> </svg>`;
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/slidedown/RetryIndicator.js
function getRetryIndicator(color = "#FFFFFF") {
    return `<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.711 2.652a5.489 5.489 0 00-4.044 4.05 5.513 5.513 0 00.104 2.968.167.167 0 00.25.089l.893-.588a.667.667 0 011.02.692l-.61 2.937a.667.667 0 01-.786.52L.6 12.713a.667.667 0 01-.232-1.21l.933-.615a.166.166 0 00.063-.2 7.167 7.167 0 018.828-9.516.833.833 0 01-.507 1.587 5.489 5.489 0 00-2.974-.108zM15.75 3.542c.09.096.15.216.172.346a.667.667 0 01-.301.681l-.898.564a.166.166 0 00-.066.2 7.167 7.167 0 01-8.77 9.514.835.835 0 01-.154-1.544.831.831 0 01.646-.048 5.5 5.5 0 006.856-6.949.167.167 0 00-.176-.114.164.164 0 00-.071.026l-.962.604a.667.667 0 01-1.005-.713l.667-2.924a.667.667 0 01.8-.502l2.925.667c.129.03.246.096.336.192z" fill="${color}"/></svg>`;
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/slidedown/constants.js
const SLIDEDOWN_CSS_CLASSES = {
    allowButton: "onesignal-slidedown-allow-button",
    body: "slidedown-body",
    buttonIndicatorHolder: "onesignal-button-indicator-holder",
    cancelButton: "onesignal-slidedown-cancel-button",
    container: "onesignal-slidedown-container",
    dialog: "onesignal-slidedown-dialog",
    footer: "slidedown-footer",
    reset: "onesignal-reset",
    savingStateButton: "onesignal-saving-state-button",
    slideUp: 'slide-up',
    slideDown: 'slide-down',
    closeSlidedown: 'close-slidedown',
    icon: 'slidedown-body-icon',
    message: 'slidedown-body-message',
    defaultIcon: 'default-icon',
    loadingContainer: "onesignal-loading-container",
    clearfix: "clearfix"
};
const SLIDEDOWN_CSS_IDS = {
    allowButton: "onesignal-slidedown-allow-button",
    body: "slidedown-body",
    buttonIndicatorHolder: "onesignal-button-indicator-holder",
    cancelButton: "onesignal-slidedown-cancel-button",
    container: "onesignal-slidedown-container",
    dialog: "onesignal-slidedown-dialog",
    footer: "slidedown-footer",
    normalSlidedown: "normal-slidedown",
    loadingContainer: "onesignal-loading-container",
};
const SLIDEDOWN_BUTTON_CLASSES = {
    alignRight: 'align-right',
    primary: 'primary',
    secondary: 'secondary',
    slidedownButton: 'slidedown-button'
};
const TAGGING_CONTAINER_CSS_CLASSES = {
    categoryLabelInput: "onesignal-category-label-input",
    categoryLabelText: "onesignal-category-label-text",
    categoryLabel: "onesignal-category-label",
    checkmark: "onesignal-checkmark",
    taggingContainer: "tagging-container",
    taggingContainerCol: "tagging-container-col",
    loadingMessage: "onesignal-loading-message"
};
const TAGGING_CONTAINER_CSS_IDS = {
    taggingContainer: "tagging-container",
};
const DEFAULT_ICON = `data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg'` +
    ` viewBox='0 0 40 40'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath fill-rule='evenodd'` +
    ` clip-rule='evenodd' d='M33.232 28.434a2.5 2.5 0 001.768.733 1.667 1.667 0 010 ` +
    `3.333H5a1.667 1.667 0 110-3.333 2.5 2.5 0 002.5-2.5v-8.104A13.262 13.262 0 0118.333` +
    ` 5.122V1.667a1.666 1.666 0 113.334 0v3.455A13.262 13.262 0 0132.5 18.563v8.104a2.5` +
    ` 2.5 0 00.732 1.767zM16.273 35h7.454a.413.413 0 01.413.37 4.167 4.167 0 11-8.28 0` +
    ` .417.417 0 01.413-.37z' fill='%23BDC4CB'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath` +
    ` id='clip0'%3E%3Cpath fill='%23fff' d='M0 0h40v40H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E`;
const COLORS = {
    greyLoadingIndicator: "#95A1AC",
    whiteLoadingIndicator: "#FFFFFF"
};
const TAGGING_CONTAINER_STRINGS = {
    fetchingPreferences: "Fetching your preferences"
};


// CONCATENATED MODULE: ./build/ts-to-es6/src/slidedown/SlidedownElement.js


function SlidedownElement_getSlidedownElement(dialogProps) {
    const { icon, messageText, positiveButtonText, negativeButtonText } = dialogProps;
    const finalIcon = icon === SLIDEDOWN_CSS_CLASSES.defaultIcon ? DEFAULT_ICON : icon;
    const finalIconClass = icon === SLIDEDOWN_CSS_CLASSES.defaultIcon ? SLIDEDOWN_CSS_CLASSES.defaultIcon : '';
    const normalSlidedown = document.createElement("div");
    const slidedownBody = document.createElement("div");
    const bodyMessage = document.createElement("div");
    const slidedownBodyIcon = document.createElement("div");
    const loadingContainer = document.createElement("div");
    const slidedownFooter = document.createElement("div");
    const positiveButton = document.createElement("button");
    const negativeButton = document.createElement("button");
    const clearfix = document.createElement("div");
    const clearfix2 = document.createElement("div");
    const image = document.createElement("img");
    Object(utils["addCssClass"])(slidedownBody, SLIDEDOWN_CSS_CLASSES.body);
    Object(utils["addCssClass"])(slidedownBodyIcon, SLIDEDOWN_CSS_CLASSES.icon);
    Object(utils["addCssClass"])(bodyMessage, SLIDEDOWN_CSS_CLASSES.message);
    Object(utils["addCssClass"])(slidedownFooter, SLIDEDOWN_CSS_CLASSES.footer);
    Object(utils["addCssClass"])(clearfix, SLIDEDOWN_CSS_CLASSES.clearfix);
    Object(utils["addCssClass"])(clearfix2, SLIDEDOWN_CSS_CLASSES.clearfix);
    Object(utils["addCssClass"])(positiveButton, SLIDEDOWN_BUTTON_CLASSES.alignRight);
    Object(utils["addCssClass"])(positiveButton, SLIDEDOWN_BUTTON_CLASSES.primary);
    Object(utils["addCssClass"])(positiveButton, SLIDEDOWN_BUTTON_CLASSES.slidedownButton);
    Object(utils["addCssClass"])(negativeButton, SLIDEDOWN_BUTTON_CLASSES.alignRight);
    Object(utils["addCssClass"])(negativeButton, SLIDEDOWN_BUTTON_CLASSES.secondary);
    Object(utils["addCssClass"])(negativeButton, SLIDEDOWN_BUTTON_CLASSES.slidedownButton);
    normalSlidedown.id = SLIDEDOWN_CSS_IDS.normalSlidedown;
    slidedownBody.id = SLIDEDOWN_CSS_IDS.body;
    loadingContainer.id = SLIDEDOWN_CSS_IDS.loadingContainer;
    positiveButton.id = SLIDEDOWN_CSS_IDS.allowButton;
    negativeButton.id = SLIDEDOWN_CSS_IDS.cancelButton;
    slidedownFooter.id = SLIDEDOWN_CSS_IDS.footer;
    if (finalIconClass) {
        Object(utils["addCssClass"])(image, finalIconClass);
    }
    image.setAttribute("alt", "notification icon");
    image.setAttribute("src", finalIcon || '');
    bodyMessage.innerText = messageText || '';
    positiveButton.innerText = positiveButtonText || '';
    negativeButton.innerText = negativeButtonText || '';
    slidedownBodyIcon.appendChild(image);
    slidedownBody.appendChild(slidedownBodyIcon);
    slidedownBody.appendChild(bodyMessage);
    slidedownBody.appendChild(clearfix);
    slidedownBody.appendChild(loadingContainer);
    slidedownFooter.appendChild(positiveButton);
    slidedownFooter.appendChild(negativeButton);
    slidedownFooter.appendChild(clearfix2);
    normalSlidedown.appendChild(slidedownBody);
    normalSlidedown.appendChild(slidedownFooter);
    return normalSlidedown;
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/slidedown/Slidedown.js











class Slidedown_Slidedown {
    constructor(options) {
        if (!options) {
            options = MainHelper_MainHelper.getSlidedownPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
        }
        this.options = options;
        this.categoryOptions = options.categories;
        this.options.actionMessage = options.actionMessage.substring(0, 90);
        this.options.acceptButtonText = options.acceptButtonText.substring(0, 16);
        this.options.cancelButtonText = options.cancelButtonText.substring(0, 16);
        this.notificationIcons = null;
        this.isShowingFailureState = false;
        if (!!this.categoryOptions) {
            this.categoryOptions.positiveUpdateButton = this.categoryOptions.positiveUpdateButton.substring(0, 16),
                this.categoryOptions.negativeUpdateButton = this.categoryOptions.negativeUpdateButton.substring(0, 16),
                this.categoryOptions.updateMessage = this.categoryOptions.updateMessage.substring(0, 90),
                // NOTE: will be configurable in the future
                this.categoryOptions.savingButtonText = SERVER_CONFIG_DEFAULTS_SLIDEDOWN.savingText;
            this.categoryOptions.errorButtonText = this.categoryOptions.positiveUpdateButton;
        }
    }
    static get EVENTS() {
        return {
            ALLOW_CLICK: 'popoverAllowClick',
            CANCEL_CLICK: 'popoverCancelClick',
            SHOWN: 'popoverShown',
            CLOSED: 'popoverClosed',
        };
    }
    create(isInUpdateMode) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // TODO: dynamically change btns depending on if its first or repeat display of slidedown (subscribe vs update)
            if (this.notificationIcons === null) {
                const icons = yield MainHelper_MainHelper.getNotificationIcons();
                this.notificationIcons = icons;
                // Remove any existing container
                if (this.container.className.includes(SLIDEDOWN_CSS_CLASSES.container)) {
                    Object(utils["removeDomElement"])(`#${SLIDEDOWN_CSS_IDS.container}`);
                }
                const positiveButtonText = isInUpdateMode && !!this.categoryOptions ?
                    this.categoryOptions.positiveUpdateButton : this.options.acceptButtonText;
                const negativeButtonText = isInUpdateMode && !!this.categoryOptions ?
                    this.categoryOptions.negativeUpdateButton : this.options.cancelButtonText;
                const messageText = isInUpdateMode && !!this.categoryOptions ?
                    this.categoryOptions.updateMessage : this.options.actionMessage;
                const icon = this.getPlatformNotificationIcon();
                const slidedownElement = SlidedownElement_getSlidedownElement({
                    messageText,
                    icon,
                    positiveButtonText,
                    negativeButtonText
                });
                const slidedownContainer = document.createElement("div");
                const dialogContainer = document.createElement("div");
                // Insert the container
                slidedownContainer.id = SLIDEDOWN_CSS_IDS.container;
                Object(utils["addCssClass"])(slidedownContainer, SLIDEDOWN_CSS_CLASSES.container);
                Object(utils["addCssClass"])(slidedownContainer, SLIDEDOWN_CSS_CLASSES.reset);
                Object(utils["getDomElementOrStub"])('body').appendChild(slidedownContainer);
                // Insert the dialog
                dialogContainer.id = SLIDEDOWN_CSS_IDS.dialog;
                Object(utils["addCssClass"])(dialogContainer, SLIDEDOWN_CSS_CLASSES.dialog);
                dialogContainer.appendChild(slidedownElement);
                this.container.appendChild(dialogContainer);
                // Animate it in depending on environment
                Object(utils["addCssClass"])(this.container, bowser_default.a.mobile ? SLIDEDOWN_CSS_CLASSES.slideUp : SLIDEDOWN_CSS_CLASSES.slideDown);
                // Add click event handlers
                this.allowButton.addEventListener('click', this.onSlidedownAllowed.bind(this));
                this.cancelButton.addEventListener('click', this.onSlidedownCanceled.bind(this));
                Event["default"].trigger(Slidedown_Slidedown.EVENTS.SHOWN);
            }
        });
    }
    onSlidedownAllowed(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Event["default"].trigger(Slidedown_Slidedown.EVENTS.ALLOW_CLICK);
        });
    }
    onSlidedownCanceled(_) {
        Event["default"].trigger(Slidedown_Slidedown.EVENTS.CANCEL_CLICK);
        this.close();
    }
    close() {
        Object(utils["addCssClass"])(this.container, SLIDEDOWN_CSS_CLASSES.closeSlidedown);
        Object(utils["once"])(this.dialog, 'animationend', (event, destroyListenerFn) => {
            if (event.target === this.dialog &&
                (event.animationName === 'slideDownExit' || event.animationName === 'slideUpExit')) {
                // Uninstall the event listener for animationend
                Object(utils["removeDomElement"])(`#${SLIDEDOWN_CSS_IDS.container}`);
                destroyListenerFn();
                Event["default"].trigger(Slidedown_Slidedown.EVENTS.CLOSED);
            }
        }, true);
    }
    /**
     * only used with Category Slidedown
     */
    setSaveState(state) {
        if (!this.categoryOptions) {
            Log["default"].debug("Slidedown private category options are not defined");
            return;
        }
        if (state) {
            // note: savingButtonText is hardcoded in constructor. TODO: pull from config & set defaults for future release
            this.allowButton.disabled = true;
            this.allowButton.textContent = null;
            this.allowButton.insertAdjacentElement('beforeend', this.getTextSpan(this.categoryOptions.savingButtonText));
            this.allowButton.insertAdjacentElement('beforeend', this.getIndicatorHolder());
            Object(utils["addDomElement"])(this.buttonIndicatorHolder, 'beforeend', getLoadingIndicatorWithColor(COLORS.whiteLoadingIndicator));
            Object(utils["addCssClass"])(this.allowButton, 'disabled');
            Object(utils["addCssClass"])(this.allowButton, SLIDEDOWN_CSS_CLASSES.savingStateButton);
        }
        else {
            // positiveUpdateButton should be defined as written in MainHelper.getSlidedownPermissionMessageOptions
            this.allowButton.textContent = this.categoryOptions.positiveUpdateButton;
            Object(utils["removeDomElement"])(`#${SLIDEDOWN_CSS_CLASSES.buttonIndicatorHolder}`);
            this.allowButton.disabled = false;
            Object(utils["removeCssClass"])(this.allowButton, 'disabled');
            Object(utils["removeCssClass"])(this.allowButton, SLIDEDOWN_CSS_CLASSES.savingStateButton);
        }
    }
    setFailureState(state) {
        if (!this.categoryOptions) {
            Log["default"].debug("Slidedown private category options are not defined");
            return;
        }
        if (state) {
            // note: errorButtonText is hardcoded in constructor. TODO: pull from config & set defaults for future release
            this.allowButton.textContent = null;
            this.allowButton.insertAdjacentElement('beforeend', this.getTextSpan(this.categoryOptions.errorButtonText));
            this.allowButton.insertAdjacentElement('beforeend', this.getIndicatorHolder());
            Object(utils["addDomElement"])(this.buttonIndicatorHolder, 'beforeend', getRetryIndicator());
            Object(utils["addCssClass"])(this.allowButton, 'onesignal-error-state-button');
        }
        else {
            Object(utils["removeDomElement"])('#onesignal-button-indicator-holder');
            Object(utils["removeCssClass"])(this.allowButton, 'onesignal-error-state-button');
        }
        this.isShowingFailureState = state;
    }
    getPlatformNotificationIcon() {
        return Object(utils["getPlatformNotificationIcon"])(this.notificationIcons);
    }
    getIndicatorHolder() {
        const indicatorHolder = document.createElement("div");
        indicatorHolder.id = SLIDEDOWN_CSS_IDS.buttonIndicatorHolder;
        Object(utils["addCssClass"])(indicatorHolder, SLIDEDOWN_CSS_CLASSES.buttonIndicatorHolder);
        return indicatorHolder;
    }
    getTextSpan(text) {
        const textHolder = document.createElement("span");
        textHolder.textContent = text;
        return textHolder;
    }
    get container() {
        return Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.container}`);
    }
    get dialog() {
        return Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.dialog}`);
    }
    get allowButton() {
        return Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.allowButton}`);
    }
    get cancelButton() {
        return Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.cancelButton}`);
    }
    get buttonIndicatorHolder() {
        return Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.buttonIndicatorHolder}`);
    }
    get slidedownFooter() {
        return Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.footer}`);
    }
}
function Slidedown_manageNotifyButtonStateWhileSlidedownShows() {
    const notifyButton = OneSignal.notifyButton;
    if (notifyButton &&
        notifyButton.options.enable &&
        OneSignal.notifyButton.launcher.state !== 'hidden') {
        OneSignal.notifyButton.launcher.waitUntilShown()
            .then(() => {
            OneSignal.notifyButton.launcher.hide();
        });
    }
    OneSignal.emitter.once(Slidedown_Slidedown.EVENTS.CLOSED, () => {
        if (OneSignal.notifyButton &&
            OneSignal.notifyButton.options.enable) {
            OneSignal.notifyButton.launcher.show();
        }
    });
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/models/Prompts.js
var DelayedPromptType;
(function (DelayedPromptType) {
    DelayedPromptType["Native"] = "native";
    DelayedPromptType["Slidedown"] = "slidedown";
})(DelayedPromptType || (DelayedPromptType = {}));


// CONCATENATED MODULE: ./build/ts-to-es6/src/context/browser/utils/BrowserSupportsPush.js
// This is used by the OneSignalSDK.js shim
// DO NOT add other imports since it is an ES5 target and dead code imports can't be clean up.
// Checks if the browser supports push notifications by checking if specific
//   classes and properties on them exist
function isPushNotificationsSupported() {
    return supportsVapidPush() || supportsSafariPush();
}
function isMacOSSafariInIframe() {
    // Fallback detection for Safari on macOS in an iframe context
    return window.top !== window && // isContextIframe
        navigator.vendor === "Apple Computer, Inc." && // isSafari
        navigator.platform === "MacIntel"; // isMacOS
}
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


// CONCATENATED MODULE: ./build/ts-to-es6/src/context/browser/helpers/EnvironmentInfoHelper.js





/**
 * EnvironmentInfoHelper is used to save page ("browser") context environment information to
 * the OneSignal object upon initialization
 */
class EnvironmentInfoHelper_EnvironmentInfoHelper {
    static getEnvironmentInfo() {
        return {
            browserType: this.getBrowser(),
            browserVersion: this.getBrowserVersion(),
            isHttps: this.isHttps(),
            isUsingSubscriptionWorkaround: this.isUsingSubscriptionWorkaround(),
            isBrowserAndSupportsServiceWorkers: this.supportsServiceWorkers(),
            requiresUserInteraction: this.requiresUserInteraction(),
            osVersion: this.getOsVersion(),
            canTalkToServiceWorker: this.canTalkToServiceWorker()
        };
    }
    static getBrowser() {
        if (bowser_default.a.chrome) {
            return Browser.Chrome;
        }
        if (bowser_default.a.msedge) {
            return Browser.Edge;
        }
        if (bowser_default.a.opera) {
            return Browser.Opera;
        }
        if (bowser_default.a.firefox) {
            return Browser.Firefox;
        }
        // use existing safari detection to be consistent
        if (this.isMacOSSafari()) {
            return Browser.Safari;
        }
        return Browser.Other;
    }
    // NOTE: Returns false in a ServiceWorker context
    static isMacOSSafari() {
        if (typeof window.safari !== "undefined") {
            return true;
        }
        return isMacOSSafariInIframe();
    }
    static getBrowserVersion() {
        return Utils["default"].parseVersionString(bowser_default.a.version);
    }
    static isHttps() {
        return window ? (window.location && window.location.protocol === 'https:') : false;
    }
    static isUsingSubscriptionWorkaround() {
        return OneSignalUtils["OneSignalUtils"].isUsingSubscriptionWorkaround();
    }
    static supportsServiceWorkers() {
        return (window.navigator && 'serviceWorker' in window.navigator);
    }
    static requiresUserInteraction() {
        // Firefox 72+ requires user-interaction
        if (this.getBrowser() === "firefox" && this.getBrowserVersion() >= 72) {
            return true;
        }
        // Safari 12.1+ requires user-interaction
        if (this.getBrowser() === "safari" && this.getBrowserVersion() >= 12.1) {
            return true;
        }
        return false;
    }
    static getOsVersion() {
        return bowser_default.a.osversion;
    }
    static canTalkToServiceWorker() {
        return !!window.isSecureContext;
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/utils/AwaitableTimeout.js
// timeout with option to await on it
function awaitableTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/utils/TagUtils.js

class TagUtils_TagUtils {
    static convertTagsApiToBooleans(tags) {
        const convertedTags = {};
        Object.keys(tags).forEach(key => {
            convertedTags[key] = tags[key] === "1" ? true : false;
        });
        return convertedTags;
    }
    static convertTagsBooleansToApi(tags) {
        const convertedTags = {};
        Object.keys(tags).forEach(key => {
            convertedTags[key] = tags[key] === true ? "1" : "0";
        });
        return convertedTags;
    }
    /**
     * Used in determining what Tag/Category preferences changed in order
     * to only update what is necessary
     * @param  {TagsObject} localTags - tags from taggingContainer with values of type "number"
     * @param  {TagsObject} remoteTags - remote player tags with values of type "number"
     * @returns array of keys of corresponding different values (finds difference)
     */
    static getObjectDifference(localTags, remoteTags) {
        const finalTags = {};
        // Going off local tags since it's our categories. Trying to find only changed tags and returning those
        // as a final object.
        Object.keys(localTags).forEach(key => {
            // only if user's tag value did not change, skip it
            if (remoteTags[key] === localTags[key]) {
                return;
            }
            finalTags[key] = localTags[key];
        });
        return finalTags;
    }
    static markAllTagsAsSpecified(categoryArray, checked) {
        categoryArray.forEach(category => {
            category.checked = checked;
        });
    }
    static isTagObjectEmpty(tags) {
        return Object.keys(tags).length === 0;
    }
    /**
     * Uses configured categories and remote player tags to calculate which boxes should be checked
     * @param  {TagCategory[]} categories
     * @param  {TagsObjectWithBoolean} existingPlayerTags?
     */
    static getCheckedTagCategories(categories, existingPlayerTags) {
        if (!existingPlayerTags) {
            return categories;
        }
        const isExistingPlayerTagsEmpty = TagUtils_TagUtils.isTagObjectEmpty(existingPlayerTags);
        if (isExistingPlayerTagsEmpty) {
            const categoriesCopy = Object(utils["deepCopy"])(categories);
            TagUtils_TagUtils.markAllTagsAsSpecified(categoriesCopy, true);
            return categoriesCopy;
        }
        const categoriesCopy = Object(utils["deepCopy"])(categories);
        return categoriesCopy.map(category => {
            const existingTagValue = existingPlayerTags[category.tag];
            category.checked = TagUtils_TagUtils.getCheckedStatusForTagValue(existingTagValue);
            return category;
        });
    }
    static getCheckedStatusForTagValue(tagValue) {
        // If user does not have tag assigned to them, consider it selected
        if (tagValue === undefined) {
            return true;
        }
        return tagValue;
    }
    static limitCategoriesToMaxCount(categories, max) {
        const categoriesCopy = Object(utils["deepCopy"])(categories);
        categoriesCopy.tags = categories.tags.slice(0, max);
        return categoriesCopy;
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/slidedown/TaggingContainer.js




class TaggingContainer_TaggingContainer {
    mount(remoteTagCategories, existingPlayerTags) {
        const taggingContainer = this.generateHtml(remoteTagCategories, existingPlayerTags);
        const body = Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.body}`);
        body.appendChild(taggingContainer);
        if (this.taggingContainer) {
            this.taggingContainer.addEventListener('change', this.toggleCheckedTag);
        }
        const allowButton = Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.allowButton}`);
        allowButton.disabled = false;
        Object(utils["removeCssClass"])(allowButton, 'disabled');
        Object(utils["removeDomElement"])(`#${SLIDEDOWN_CSS_IDS.loadingContainer}`);
    }
    load() {
        const loadingContainer = Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.loadingContainer}`);
        const allowButton = Object(utils["getDomElementOrStub"])(`#${SLIDEDOWN_CSS_IDS.allowButton}`);
        const loadingMessageContainer = document.createElement("div");
        Object(utils["addCssClass"])(loadingContainer, `${SLIDEDOWN_CSS_CLASSES.loadingContainer}`);
        Object(utils["addCssClass"])(loadingMessageContainer, TAGGING_CONTAINER_CSS_CLASSES.loadingMessage);
        Object(utils["addCssClass"])(allowButton, 'disabled');
        Object(utils["addDomElement"])(loadingContainer, 'beforeend', getLoadingIndicatorWithColor(COLORS.greyLoadingIndicator));
        loadingMessageContainer.innerText = TAGGING_CONTAINER_STRINGS.fetchingPreferences;
        loadingContainer.appendChild(loadingMessageContainer);
        allowButton.disabled = true;
    }
    generateHtml(remoteTagCategories, existingPlayerTags) {
        const checkedTagCategories = TagUtils_TagUtils.getCheckedTagCategories(remoteTagCategories, existingPlayerTags);
        const firstColumnArr = checkedTagCategories.filter(elem => checkedTagCategories.indexOf(elem) % 2 === 0);
        const secondColumnArr = checkedTagCategories.filter(elem => checkedTagCategories.indexOf(elem) % 2);
        const firstColumnContainer = document.createElement("div");
        const secondColumnContainer = document.createElement("div");
        const taggingContainer = document.createElement("div");
        Object(utils["addCssClass"])(firstColumnContainer, TAGGING_CONTAINER_CSS_CLASSES.taggingContainerCol);
        Object(utils["addCssClass"])(secondColumnContainer, TAGGING_CONTAINER_CSS_CLASSES.taggingContainerCol);
        Object(utils["addCssClass"])(taggingContainer, TAGGING_CONTAINER_CSS_CLASSES.taggingContainer);
        taggingContainer.id = TAGGING_CONTAINER_CSS_IDS.taggingContainer;
        firstColumnArr.forEach(elem => {
            firstColumnContainer.appendChild(this.getCategoryLabelElement(elem));
        });
        secondColumnArr.forEach(elem => {
            secondColumnContainer.appendChild(this.getCategoryLabelElement(elem));
        });
        taggingContainer.appendChild(firstColumnContainer);
        taggingContainer.appendChild(secondColumnContainer);
        return taggingContainer;
    }
    getCategoryLabelElement(tagCategory) {
        const { label } = tagCategory;
        const labelElement = document.createElement("label");
        const labelSpan = document.createElement("span");
        const inputElement = document.createElement("input");
        const checkmarkSpan = document.createElement("span");
        const clear = document.createElement("div");
        const wrappingDiv = document.createElement("div");
        Object(utils["addCssClass"])(labelElement, TAGGING_CONTAINER_CSS_CLASSES.categoryLabel);
        Object(utils["addCssClass"])(labelSpan, TAGGING_CONTAINER_CSS_CLASSES.categoryLabelText);
        Object(utils["addCssClass"])(inputElement, TAGGING_CONTAINER_CSS_CLASSES.categoryLabelInput);
        Object(utils["addCssClass"])(checkmarkSpan, TAGGING_CONTAINER_CSS_CLASSES.checkmark);
        labelElement.title = label;
        labelSpan.innerText = label;
        inputElement.type = "checkbox";
        inputElement.value = tagCategory.tag;
        inputElement.checked = !!tagCategory.checked;
        labelElement.appendChild(labelSpan);
        labelElement.appendChild(inputElement);
        labelElement.appendChild(checkmarkSpan);
        clear.setAttribute("style", "clear:both");
        wrappingDiv.appendChild(labelElement);
        wrappingDiv.appendChild(clear);
        return wrappingDiv;
    }
    get taggingContainer() {
        const selector = `#${SLIDEDOWN_CSS_IDS.body} > div.${TAGGING_CONTAINER_CSS_CLASSES.taggingContainer}`;
        return Object(utils["getDomElementOrStub"])(selector);
    }
    toggleCheckedTag(e) {
        const target = e.target;
        if (target && target.getAttribute("type") === "checkbox") {
            const isChecked = target.checked;
            target.setAttribute("checked", isChecked.toString());
        }
    }
    static getValuesFromTaggingContainer() {
        const selector = `#${SLIDEDOWN_CSS_IDS.body} > div.${TAGGING_CONTAINER_CSS_CLASSES.taggingContainer}` +
            `> div > div > label > input[type=checkbox]`;
        const inputNodeArr = document.querySelectorAll(selector);
        const tags = {};
        inputNodeArr.forEach(node => {
            tags[node.value] = node.checked;
        });
        return tags;
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/PromptsManager.js























class PromptsManager_PromptsManager {
    constructor(context) {
        this.isAutoPromptShowing = false;
        this.context = context;
        this.eventHooksInstalled = false;
    }
    checkIfAutoPromptShouldBeShown(options = { force: false }) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /*
            Only show the slidedown if:
            - Notifications aren't already enabled
            - The user isn't manually opted out (if the user was manually opted out, we don't want to prompt the user)
            */
            if (this.isAutoPromptShowing) {
                throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].RedundantPermissionMessage, {
                    permissionPromptType: PermissionPromptType["PermissionPromptType"].SlidedownPermissionMessage
                });
            }
            const doNotPrompt = MainHelper_MainHelper.wasHttpsNativePromptDismissed();
            if (doNotPrompt && !options.force && !options.isInUpdateMode) {
                Log["default"].info(new PermissionMessageDismissedError_PermissionMessageDismissedError());
                return false;
            }
            const permission = yield OneSignal.privateGetNotificationPermission();
            if (permission === NotificationPermission.Denied) {
                Log["default"].info(new PushPermissionNotGrantedError_PushPermissionNotGrantedError(PushPermissionNotGrantedError_PushPermissionNotGrantedErrorReason.Blocked));
                return false;
            }
            const isEnabled = yield OneSignal.privateIsPushNotificationsEnabled();
            if (isEnabled && !options.isInUpdateMode) {
                throw new AlreadySubscribedError_AlreadySubscribedError();
            }
            const notOptedOut = yield OneSignal.privateGetSubscription();
            if (!notOptedOut) {
                throw new NotSubscribedError_NotSubscribedError(NotSubscribedError_NotSubscribedReason.OptedOut);
            }
            return true;
        });
    }
    internalShowAutoPrompt(options = { force: false, forceSlidedownOverNative: false }) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            OneSignalUtils["default"].logMethodCall("internalShowAutoPrompt", options);
            if (!OneSignal.config || !OneSignal.config.userConfig || !OneSignal.config.userConfig.promptOptions) {
                Log["default"].error("OneSignal config was not initialized correctly. Aborting.");
                return;
            }
            const { forceSlidedownOverNative } = options;
            // user config prompt options
            const userPromptOptions = OneSignal.config.userConfig.promptOptions;
            if (!userPromptOptions.native.enabled && !userPromptOptions.slidedown.enabled) {
                Log["default"].error("No suitable prompt type enabled.");
                return;
            }
            const nativePromptOptions = this.getDelayedPromptOptions(userPromptOptions, DelayedPromptType.Native);
            const isPageViewConditionMetForNative = this.isPageViewConditionMet(nativePromptOptions);
            const slidedownPromptOptions = this.getDelayedPromptOptions(userPromptOptions, DelayedPromptType.Slidedown);
            const isPageViewConditionMetForSlidedown = this.isPageViewConditionMet(slidedownPromptOptions);
            const conditionMetWithNativeOptions = nativePromptOptions.enabled && isPageViewConditionMetForNative;
            const conditionMetWithSlidedownOptions = slidedownPromptOptions.enabled && isPageViewConditionMetForSlidedown;
            const forceSlidedownWithNativeOptions = forceSlidedownOverNative && conditionMetWithNativeOptions;
            // show native prompt
            if (conditionMetWithNativeOptions && !forceSlidedownWithNativeOptions) {
                this.internalShowDelayedPrompt(DelayedPromptType.Native, nativePromptOptions.timeDelay || 0);
                return;
            }
            // show slidedown prompt
            if (conditionMetWithSlidedownOptions || forceSlidedownWithNativeOptions) {
                const { timeDelay } = conditionMetWithSlidedownOptions ? slidedownPromptOptions : nativePromptOptions;
                this.internalShowDelayedPrompt(DelayedPromptType.Slidedown, timeDelay || 0, options);
            }
        });
    }
    internalShowDelayedPrompt(type, timeDelaySeconds, options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            OneSignalUtils["default"].logMethodCall("internalShowDelayedPrompt");
            if (typeof timeDelaySeconds !== "number") {
                Log["default"].error("internalShowDelayedPrompt: timeDelay not a number");
                return;
            }
            const { requiresUserInteraction } = EnvironmentInfoHelper_EnvironmentInfoHelper.getEnvironmentInfo();
            if (requiresUserInteraction && type === DelayedPromptType.Native) {
                type = DelayedPromptType.Slidedown;
            }
            if (timeDelaySeconds > 0) {
                yield awaitableTimeout(timeDelaySeconds * 1000);
            }
            switch (type) {
                case DelayedPromptType.Native:
                    this.internalShowNativePrompt();
                    break;
                case DelayedPromptType.Slidedown:
                    this.internalShowSlidedownPrompt(options);
                    break;
                default:
                    Log["default"].error("Invalid Delayed Prompt type");
            }
        });
    }
    internalShowNativePrompt() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            OneSignalUtils["default"].logMethodCall("internalShowNativePrompt");
            if (this.isAutoPromptShowing) {
                Log["default"].debug("Already showing autoprompt. Abort showing a native prompt.");
                return;
            }
            this.isAutoPromptShowing = true;
            MainHelper_MainHelper.markHttpSlidedownShown();
            yield InitHelper_InitHelper.registerForPushNotifications();
            this.isAutoPromptShowing = false;
            TestHelper_TestHelper.markHttpsNativePromptDismissed();
        });
    }
    internalShowSlidedownPrompt(options = { force: false }) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            OneSignalUtils["default"].logMethodCall("internalShowSlidedownPrompt");
            const { categoryOptions, isInUpdateMode } = options;
            if (this.isAutoPromptShowing) {
                Log["default"].debug("Already showing slidedown. Abort.");
                return;
            }
            try {
                const showPrompt = yield this.checkIfAutoPromptShouldBeShown(options);
                if (!showPrompt) {
                    return;
                }
            }
            catch (e) {
                Log["default"].warn("checkIfAutoPromptShouldBeShown returned an error", e);
                return;
            }
            MainHelper_MainHelper.markHttpSlidedownShown();
            const sdkStylesLoadResult = yield this.context.dynamicResourceLoader.loadSdkStylesheet();
            if (sdkStylesLoadResult !== 0 /* Loaded */) {
                Log["default"].debug('Not showing slidedown permission message because styles failed to load.');
                return;
            }
            const slideDownOptions = MainHelper_MainHelper.getSlidedownPermissionMessageOptions(OneSignal.config.userConfig.promptOptions);
            if (!this.eventHooksInstalled) {
                this.installEventHooksForSlidedown();
            }
            OneSignal.slidedown = new Slidedown_Slidedown(slideDownOptions);
            try {
                if (PromptsHelper.isCategorySlidedownConfigured(this.context)) {
                    // show slidedown with tagging container
                    yield OneSignal.slidedown.create(isInUpdateMode);
                    let tagsForComponent = {};
                    const taggingContainer = new TaggingContainer_TaggingContainer();
                    const tagCategoryArray = categoryOptions.tags;
                    if (isInUpdateMode) {
                        taggingContainer.load();
                        // updating. pull remote tags.
                        const existingTags = yield OneSignal.getTags();
                        this.context.tagManager.storeRemotePlayerTags(existingTags);
                        tagsForComponent = TagUtils_TagUtils.convertTagsApiToBooleans(existingTags);
                    }
                    else {
                        // first subscription
                        TagUtils_TagUtils.markAllTagsAsSpecified(tagCategoryArray, true);
                    }
                    taggingContainer.mount(tagCategoryArray, tagsForComponent);
                }
            }
            catch (e) {
                Log["default"].error("OneSignal: Attempted to create tagging container with error", e);
            }
            yield OneSignal.slidedown.create();
            Log["default"].debug('Showing Slidedown.');
        });
    }
    // Wrapper for existing method `internalShowSlidedownPrompt`. Inserts information about
    // provided categories, then calls `internalShowSlidedownPrompt`.
    internalShowCategorySlidedown(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const promptOptions = yield this.context.appConfig.userConfig.promptOptions;
            const categoryOptions = promptOptions.slidedown.categories;
            if (!PromptsHelper.isCategorySlidedownConfigured(this.context)) {
                Log["default"].error(`OneSignal: no categories to display. Check your configuration on the ` +
                    `OneSignal dashboard or your custom code initialization.`);
                return;
            }
            yield this.internalShowSlidedownPrompt(Object.assign(Object.assign({}, options), { categoryOptions }));
        });
    }
    installEventHooksForSlidedown() {
        this.eventHooksInstalled = true;
        Slidedown_manageNotifyButtonStateWhileSlidedownShows();
        OneSignal.emitter.on(Slidedown_Slidedown.EVENTS.SHOWN, () => {
            this.isAutoPromptShowing = true;
        });
        OneSignal.emitter.on(Slidedown_Slidedown.EVENTS.CLOSED, () => {
            this.isAutoPromptShowing = false;
        });
        OneSignal.emitter.on(Slidedown_Slidedown.EVENTS.ALLOW_CLICK, () => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const { slidedown } = OneSignal;
            if (slidedown.isShowingFailureState) {
                slidedown.setFailureState(false);
            }
            const tags = TaggingContainer_TaggingContainer.getValuesFromTaggingContainer();
            this.context.tagManager.storeTagValuesToUpdate(tags);
            // use local storage permission to get around user-gesture sync requirement
            const isPushEnabled = LocalStorage_LocalStorage.getIsPushNotificationsEnabled();
            if (isPushEnabled) {
                OneSignal.slidedown.setSaveState(true);
                // Sync Category Slidedown tags (isInUpdateMode = true)
                try {
                    yield this.context.tagManager.sendTags(true);
                }
                catch (e) {
                    Log["default"].error("Failed to update tags", e);
                    // Display tag update error
                    OneSignal.slidedown.setSaveState(false);
                    OneSignal.slidedown.setFailureState(true);
                    return;
                }
            }
            else {
                const autoAccept = !OneSignal.environmentInfo.requiresUserInteraction;
                const options = { autoAccept, slidedown: true };
                InitHelper_InitHelper.registerForPushNotifications(options);
            }
            if (OneSignal.slidedown) {
                OneSignal.slidedown.close();
            }
            Log["default"].debug("Setting flag to not show the slidedown to the user again.");
            TestHelper_TestHelper.markHttpsNativePromptDismissed();
        }));
        OneSignal.emitter.once(Slidedown_Slidedown.EVENTS.CANCEL_CLICK, () => {
            Log["default"].debug("Setting flag to not show the slidedown to the user again.");
            TestHelper_TestHelper.markHttpsNativePromptDismissed();
        });
    }
    isPageViewConditionMet(options) {
        if (!options || typeof options.pageViews === "undefined") {
            return false;
        }
        if (!options.autoPrompt || !options.enabled) {
            return false;
        }
        const localPageViews = this.context.pageViewManager.getLocalPageViewCount();
        return localPageViews >= options.pageViews;
    }
    getDelayedPromptOptions(promptOptions, type) {
        const promptOptionsForSpecificType = promptOptions[type];
        if (!promptOptions || !promptOptionsForSpecificType) {
            return {
                enabled: false,
                autoPrompt: false,
                timeDelay: SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.timeDelay,
                pageViews: SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.pageViews
            };
        }
        return {
            enabled: promptOptionsForSpecificType.enabled,
            autoPrompt: promptOptionsForSpecificType.autoPrompt,
            timeDelay: promptOptionsForSpecificType.timeDelay,
            pageViews: promptOptionsForSpecificType.pageViews
        };
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/sessionManager/page/SessionManager.js









class SessionManager_SessionManager {
    constructor(context) {
        this.onSessionSent = false;
        this.context = context;
    }
    notifySWToUpsertSession(deviceId, deviceRecord, sessionOrigin) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const isHttps = OneSignalUtils["OneSignalUtils"].isHttps();
            const payload = {
                deviceId,
                deviceRecord: deviceRecord.serialize(),
                sessionThreshold: this.context.appConfig.sessionThreshold || 0,
                enableSessionDuration: !!this.context.appConfig.enableSessionDuration,
                sessionOrigin,
                isHttps,
                isSafari: OneSignalUtils["OneSignalUtils"].isSafari(),
                outcomesConfig: this.context.appConfig.userConfig.outcomes,
            };
            if (this.context.environmentInfo.isBrowserAndSupportsServiceWorkers &&
                !this.context.environmentInfo.isUsingSubscriptionWorkaround) {
                Log["default"].debug("Notify SW to upsert session");
                yield this.context.workerMessenger.unicast(WorkerMessenger_WorkerMessengerCommand.SessionUpsert, payload);
            }
            else if (this.context.environmentInfo.canTalkToServiceWorker &&
                this.context.environmentInfo.isUsingSubscriptionWorkaround) {
                Log["default"].debug("Notify iframe to notify SW to upsert session");
                yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_UPSERT, payload);
            }
            else { // http w/o our iframe
                // we probably shouldn't even be here
                Log["default"].debug("Notify upsert: do nothing");
            }
        });
    }
    notifySWToDeactivateSession(deviceId, deviceRecord, sessionOrigin) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const isHttps = OneSignalUtils["OneSignalUtils"].isHttps();
            const payload = {
                deviceId,
                deviceRecord: deviceRecord ? deviceRecord.serialize() : undefined,
                sessionThreshold: this.context.appConfig.sessionThreshold,
                enableSessionDuration: this.context.appConfig.enableSessionDuration,
                sessionOrigin,
                isHttps,
                isSafari: OneSignalUtils["OneSignalUtils"].isSafari(),
                outcomesConfig: this.context.appConfig.userConfig.outcomes,
            };
            if (this.context.environmentInfo.isBrowserAndSupportsServiceWorkers &&
                !this.context.environmentInfo.isUsingSubscriptionWorkaround) {
                Log["default"].debug("Notify SW to deactivate session");
                yield this.context.workerMessenger.unicast(WorkerMessenger_WorkerMessengerCommand.SessionDeactivate, payload);
            }
            else if (this.context.environmentInfo.canTalkToServiceWorker &&
                this.context.environmentInfo.isUsingSubscriptionWorkaround) {
                Log["default"].debug("Notify SW to deactivate session");
                yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, payload);
            }
            else { // http w/o our iframe
                // we probably shouldn't even be here
                Log["default"].debug("Notify deactivate: do nothing");
            }
        });
    }
    handleVisibilityChange() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const visibilityState = document.visibilityState;
            const [deviceId, deviceRecord] = yield Promise.all([
                MainHelper_MainHelper.getDeviceId(),
                MainHelper_MainHelper.createDeviceRecord(this.context.appConfig.appId, true)
            ]);
            if (visibilityState === "visible") {
                this.setupOnFocusAndOnBlurForSession();
                Log["default"].debug("handleVisibilityChange", "visible", `hasFocus: ${document.hasFocus()}`);
                if (document.hasFocus()) {
                    yield this.notifySWToUpsertSession(deviceId, deviceRecord, Session["SessionOrigin"].VisibilityVisible);
                }
                return;
            }
            if (visibilityState === "hidden") {
                Log["default"].debug("handleVisibilityChange", "hidden");
                if (OneSignal.cache.focusHandler && OneSignal.cache.isFocusEventSetup) {
                    window.removeEventListener("focus", OneSignal.cache.focusHandler, true);
                    OneSignal.cache.isFocusEventSetup = false;
                }
                if (OneSignal.cache.blurHandler && OneSignal.cache.isBlurEventSetup) {
                    window.removeEventListener("blur", OneSignal.cache.blurHandler, true);
                    OneSignal.cache.isBlurEventSetup = false;
                }
                // TODO: (iryna) need to send deactivate from here?
                const [deviceId, deviceRecord] = yield Promise.all([
                    MainHelper_MainHelper.getDeviceId(),
                    MainHelper_MainHelper.createDeviceRecord(this.context.appConfig.appId)
                ]);
                yield this.notifySWToDeactivateSession(deviceId, deviceRecord, Session["SessionOrigin"].VisibilityHidden);
                return;
            }
            // it should never be anything else at this point
            Log["default"].warn("Unhandled visibility state happened", visibilityState);
        });
    }
    handleOnBeforeUnload() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // don't have much time on before unload
            // have to skip adding device record to the payload
            const isHttps = OneSignalUtils["OneSignalUtils"].isHttps();
            const payload = {
                sessionThreshold: this.context.appConfig.sessionThreshold,
                enableSessionDuration: this.context.appConfig.enableSessionDuration,
                sessionOrigin: Session["SessionOrigin"].BeforeUnload,
                isHttps,
                isSafari: OneSignalUtils["OneSignalUtils"].isSafari(),
                outcomesConfig: this.context.appConfig.userConfig.outcomes,
            };
            if (isHttps) {
                Log["default"].debug("Notify SW to deactivate session (beforeunload)");
                this.context.workerMessenger.directPostMessageToSW(WorkerMessenger_WorkerMessengerCommand.SessionDeactivate, payload);
            }
            else {
                Log["default"].debug("Notify iframe to notify SW to deactivate session (beforeunload)");
                yield OneSignal.proxyFrameHost.runCommand(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, payload);
            }
        });
    }
    handleOnFocus(e) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug("handleOnFocus", e);
            /**
             * Firefox has 2 focus events with different targets (document and window).
             * While Chrome only has one on window.
             * Target check is important to avoid double-firing of the event.
             */
            if (e.target !== window) {
                return;
            }
            const [deviceId, deviceRecord] = yield Promise.all([
                MainHelper_MainHelper.getDeviceId(),
                MainHelper_MainHelper.createDeviceRecord(this.context.appConfig.appId, true)
            ]);
            yield this.notifySWToUpsertSession(deviceId, deviceRecord, Session["SessionOrigin"].Focus);
        });
    }
    handleOnBlur(e) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug("handleOnBlur", e);
            /**
             * Firefox has 2 focus events with different targets (document and window).
             * While Chrome only has one on window.
             * Target check is important to avoid double-firing of the event.
             */
            if (e.target !== window) {
                return;
            }
            const [deviceId, deviceRecord] = yield Promise.all([
                MainHelper_MainHelper.getDeviceId(),
                MainHelper_MainHelper.createDeviceRecord(this.context.appConfig.appId)
            ]);
            yield this.notifySWToDeactivateSession(deviceId, deviceRecord, Session["SessionOrigin"].Blur);
        });
    }
    upsertSession(deviceId, deviceRecord, sessionOrigin) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const sessionPromise = this.notifySWToUpsertSession(deviceId, deviceRecord, sessionOrigin);
            if (this.context.environmentInfo.isBrowserAndSupportsServiceWorkers ||
                this.context.environmentInfo.isUsingSubscriptionWorkaround) {
                if (!this.context.environmentInfo.canTalkToServiceWorker) {
                    this.onSessionSent = sessionOrigin === Session["SessionOrigin"].PlayerCreate;
                    OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED);
                }
                else {
                    this.setupSessionEventListeners();
                }
            }
            else if (!this.context.environmentInfo.isBrowserAndSupportsServiceWorkers &&
                !this.context.environmentInfo.isUsingSubscriptionWorkaround) {
                this.onSessionSent = sessionOrigin === Session["SessionOrigin"].PlayerCreate;
                OneSignal.emitter.emit(OneSignal.EVENTS.SESSION_STARTED);
            }
            yield sessionPromise;
        });
    }
    setupSessionEventListeners() {
        // Only want these events if it's using subscription workaround
        if (!this.context.environmentInfo.isBrowserAndSupportsServiceWorkers &&
            !this.context.environmentInfo.isUsingSubscriptionWorkaround) {
            Log["default"].debug("Not setting session event listeners. No service worker possible.");
            return;
        }
        if (!this.context.environmentInfo.canTalkToServiceWorker) {
            Log["default"].debug("Not setting session event listeners. Can't talk to ServiceWorker due being hosted on an HTTP page.");
            return;
        }
        // Page lifecycle events https://developers.google.com/web/updates/2018/07/page-lifecycle-api
        this.setupOnFocusAndOnBlurForSession();
        // To make sure we add these event listeners only once.
        if (!OneSignal.cache.isVisibilityChangeEventSetup) {
            // tracks switching to a different tab, fully covering page with another window, screen lock/unlock
            document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this), true);
            OneSignal.cache.isVisibilityChangeEventSetup = true;
        }
        if (!OneSignal.cache.isBeforeUnloadEventSetup) {
            // tracks closing of a tab / reloading / navigating away
            window.addEventListener("beforeunload", (e) => {
                this.handleOnBeforeUnload();
                // deleting value to not show confirmation dialog
                delete e.returnValue;
            }, true);
            OneSignal.cache.isBeforeUnloadEventSetup = true;
        }
    }
    setupOnFocusAndOnBlurForSession() {
        Log["default"].debug("setupOnFocusAndOnBlurForSession");
        if (!OneSignal.cache.focusHandler) {
            OneSignal.cache.focusHandler = this.handleOnFocus.bind(this);
        }
        if (!OneSignal.cache.isFocusEventSetup) {
            window.addEventListener("focus", OneSignal.cache.focusHandler, true);
            OneSignal.cache.isFocusEventSetup = true;
        }
        if (!OneSignal.cache.blurHandler) {
            OneSignal.cache.blurHandler = this.handleOnBlur.bind(this);
        }
        if (!OneSignal.cache.isBlurEventSetup) {
            window.addEventListener("blur", OneSignal.cache.blurHandler, true);
            OneSignal.cache.isBlurEventSetup = true;
        }
    }
    static setupSessionEventListenersForHttp() {
        if (!OneSignal.context || !OneSignal.context.sessionManager) {
            Log["default"].error("OneSignal.context not available for http to setup session event listeners.");
            return;
        }
        OneSignal.context.sessionManager.setupSessionEventListeners();
    }
    // If user has been subscribed before, send the on_session update to our backend on the first page view.
    sendOnSessionUpdateFromPage(deviceRecord) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (this.onSessionSent) {
                return;
            }
            if (!this.context.pageViewManager.isFirstPageView()) {
                return;
            }
            const existingUser = yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
            if (!existingUser) {
                Log["default"].debug("Not sending the on session because user is not registered with OneSignal (no device id)");
                return;
            }
            const deviceId = yield MainHelper_MainHelper.getDeviceId();
            if (!deviceRecord) {
                deviceRecord = yield MainHelper_MainHelper.createDeviceRecord(this.context.appConfig.appId);
            }
            if (deviceRecord.subscriptionState !== SubscriptionStateKind["SubscriptionStateKind"].Subscribed &&
                OneSignal.config.enableOnSession !== true) {
                return;
            }
            try {
                const newPlayerId = yield OneSignalApiShared_OneSignalApiShared.updateUserSession(deviceId, deviceRecord);
                this.onSessionSent = true;
                // If the returned player id is different, save the new id.
                if (newPlayerId !== deviceId) {
                    const subscription = yield Database["default"].getSubscription();
                    subscription.deviceId = newPlayerId;
                    yield Database["default"].setSubscription(subscription);
                }
            }
            catch (e) {
                Log["default"].error(`Failed to update user session. Error "${e.message}" ${e.stack}`);
            }
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/tagManager/page/TagManager.js



/**
 * Manages tags for the TaggingContainer
 */
class TagManager_TagManager {
    constructor(context) {
        // local tags from tagging container
        this.tagsFromTaggingContainer = {};
        this.remoteTags = {};
        this.context = context;
    }
    /**
     * @returns Promise resolving TagsObject if successful, {} if no change detected, null if failed
     */
    sendTags() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].info("Category Slidedown Local Tags:", this.tagsFromTaggingContainer);
            const localTagsConvertedToApi = TagUtils_TagUtils.convertTagsBooleansToApi(this.tagsFromTaggingContainer);
            const finalTagsObject = TagUtils_TagUtils.getObjectDifference(localTagsConvertedToApi, this.remoteTags);
            const shouldSendUpdate = !TagUtils_TagUtils.isTagObjectEmpty(finalTagsObject);
            if (shouldSendUpdate) {
                return yield OneSignal.sendTags(finalTagsObject);
            }
            Log["default"].warn("OneSignal: no change detected in Category preferences. Skipping tag update.");
            // no change detected, return {}
            return finalTagsObject;
        });
    }
    /**
     * @param  {TagsObject} tags - values of type "boolean"
     * @returns void
     */
    storeTagValuesToUpdate(tags) {
        this.tagsFromTaggingContainer = tags;
    }
    /**
     * @param  {TagsObject} remoteTags - values of type "number"
     * @returns void
     */
    storeRemotePlayerTags(remoteTags) {
        this.context.tagManager.remoteTags = remoteTags;
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/models/Context.js










class Context_Context {
    constructor(appConfig) {
        this.appConfig = appConfig;
        if (typeof OneSignal !== "undefined" && !!OneSignal.environmentInfo) {
            this.environmentInfo = OneSignal.environmentInfo;
        }
        this.subscriptionManager = helpers_ContextHelper.getSubscriptionManager(this);
        this.serviceWorkerManager = helpers_ContextHelper.getServiceWorkerManager(this);
        this.pageViewManager = new PageViewManager_PageViewManager();
        this.permissionManager = new PermissionManager_PermissionManager();
        this.workerMessenger = new WorkerMessenger_WorkerMessenger(this);
        this.updateManager = new UpdateManager_UpdateManager(this);
        this.sessionManager = new SessionManager_SessionManager(this);
        this.tagManager = new TagManager_TagManager(this);
        this.promptsManager = new PromptsManager_PromptsManager(this);
        this.dynamicResourceLoader = new DynamicResourceLoader_DynamicResourceLoader();
        this.metricsManager = new MetricsManager_MetricsManager(appConfig.metrics.enable, appConfig.metrics.mixpanelReportingToken);
    }
}


// EXTERNAL MODULE: ./node_modules/jsonp/index.js
var jsonp = __webpack_require__("./node_modules/jsonp/index.js");
var jsonp_default = /*#__PURE__*/__webpack_require__.n(jsonp);

// EXTERNAL MODULE: ./build/ts-to-es6/src/OneSignalApiSW.js
var OneSignalApiSW = __webpack_require__("./build/ts-to-es6/src/OneSignalApiSW.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/OneSignalApi.js






class OneSignalApi_OneSignalApi {
    static getPlayer(appId, playerId) {
        return OneSignalApiShared_OneSignalApiShared.getPlayer(appId, playerId);
    }
    static updatePlayer(appId, playerId, options) {
        return OneSignalApiShared_OneSignalApiShared.updatePlayer(appId, playerId, options);
    }
    static sendNotification(appId, playerIds, titles, contents, url, icon, data, buttons) {
        return OneSignalApiShared_OneSignalApiShared.sendNotification(appId, playerIds, titles, contents, url, icon, data, buttons);
    }
    static jsonpLib(url, fn) {
        jsonp_default()(url, null, fn);
    }
    static downloadServerAppConfig(appId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (SdkEnvironment["default"].getWindowEnv() !== WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker) {
                return yield new Promise((resolve, reject) => {
                    // Due to CloudFlare's algorithms, the .js extension is required for proper caching. Don't remove it!
                    OneSignalApi_OneSignalApi.jsonpLib(`${SdkEnvironment["default"].getOneSignalApiUrl().toString()}/sync/${appId}/web`, (err, data) => {
                        if (err)
                            reject(err);
                        else {
                            if (data.success)
                                resolve(data);
                            else // For JSONP, we return a 200 even for errors, there's a success: false param
                                reject(data);
                        }
                    });
                });
            }
            else {
                return yield OneSignalApiSW["default"].downloadServerAppConfig(appId);
            }
        });
    }
    static createUser(deviceRecord) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield OneSignalApiShared_OneSignalApiShared.createUser(deviceRecord);
        });
    }
    static createEmailRecord(appConfig, emailProfile, pushDeviceRecordId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield OneSignalApiShared_OneSignalApiShared.createEmailRecord(appConfig, emailProfile, pushDeviceRecordId);
        });
    }
    static updateEmailRecord(appConfig, emailProfile, pushDeviceRecordId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield OneSignalApiShared_OneSignalApiShared.updateEmailRecord(appConfig, emailProfile, pushDeviceRecordId);
        });
    }
    static logoutEmail(appConfig, emailProfile, deviceId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield OneSignalApiShared_OneSignalApiShared.logoutEmail(appConfig, emailProfile, deviceId);
        });
    }
    static updateUserSession(userId, deviceRecord) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield OneSignalApiShared_OneSignalApiShared.updateUserSession(userId, deviceRecord);
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/models/AppConfig.js
var ConfigIntegrationKind;
(function (ConfigIntegrationKind) {
    ConfigIntegrationKind["TypicalSite"] = "typical";
    ConfigIntegrationKind["WordPress"] = "wordpress";
    ConfigIntegrationKind["Shopify"] = "shopify";
    ConfigIntegrationKind["Blogger"] = "blogger";
    ConfigIntegrationKind["Magento"] = "magento";
    ConfigIntegrationKind["Drupal"] = "drupal";
    ConfigIntegrationKind["SquareSpace"] = "squarespace";
    ConfigIntegrationKind["Joomla"] = "joomla";
    ConfigIntegrationKind["Weebly"] = "weebly";
    ConfigIntegrationKind["Wix"] = "wix";
    ConfigIntegrationKind["Custom"] = "custom";
})(ConfigIntegrationKind || (ConfigIntegrationKind = {}));
var NotificationClickMatchBehavior;
(function (NotificationClickMatchBehavior) {
    NotificationClickMatchBehavior["Exact"] = "exact";
    NotificationClickMatchBehavior["Origin"] = "origin";
})(NotificationClickMatchBehavior || (NotificationClickMatchBehavior = {}));
var NotificationClickActionBehavior;
(function (NotificationClickActionBehavior) {
    NotificationClickActionBehavior["Navigate"] = "navigate";
    NotificationClickActionBehavior["Focus"] = "focus";
})(NotificationClickActionBehavior || (NotificationClickActionBehavior = {}));


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/ConfigHelper.js










var ConfigHelper_IntegrationConfigurationKind;
(function (IntegrationConfigurationKind) {
    /**
     * Configuration comes from the dashboard only.
     */
    IntegrationConfigurationKind[IntegrationConfigurationKind["Dashboard"] = 0] = "Dashboard";
    /**
     * Configuration comes from user-provided JavaScript code only.
     */
    IntegrationConfigurationKind[IntegrationConfigurationKind["JavaScript"] = 1] = "JavaScript";
})(ConfigHelper_IntegrationConfigurationKind || (ConfigHelper_IntegrationConfigurationKind = {}));
const ConfigHelper_MAX_CATEGORIES = 10;
class ConfigHelper_ConfigHelper {
    static getAppConfig(userConfig, downloadServerAppConfig) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!userConfig || !userConfig.appId || !OneSignalUtils["default"].isValidUuid(userConfig.appId))
                    throw new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.InvalidAppId);
                const serverConfig = yield downloadServerAppConfig(userConfig.appId);
                const appConfig = this.getMergedConfig(userConfig, serverConfig);
                this.checkRestrictedOrigin(appConfig);
                return appConfig;
            }
            catch (e) {
                if (e) {
                    if (e.code === 1)
                        throw new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.InvalidAppId);
                    else if (e.code === 2)
                        throw new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.AppNotConfiguredForWebPush);
                }
                throw e;
            }
        });
    }
    static checkRestrictedOrigin(appConfig) {
        if (appConfig.restrictedOriginEnabled) {
            if (SdkEnvironment["default"].getWindowEnv() !== WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker) {
                if (window.top === window &&
                    !Utils["default"].contains(window.location.hostname, ".os.tc") &&
                    !Utils["default"].contains(window.location.hostname, ".onesignal.com") &&
                    !this.doesCurrentOriginMatchConfigOrigin(appConfig.origin)) {
                    throw new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.WrongSiteUrl, {
                        siteUrl: appConfig.origin
                    });
                }
            }
        }
    }
    static doesCurrentOriginMatchConfigOrigin(configOrigin) {
        try {
            return location.origin === new URL(configOrigin).origin;
        }
        catch (e) {
            return false;
        }
    }
    static getIntegrationCapabilities(integration) {
        switch (integration) {
            case ConfigIntegrationKind.Custom:
            case ConfigIntegrationKind.WordPress:
                return { configuration: ConfigHelper_IntegrationConfigurationKind.JavaScript };
            default:
                return { configuration: ConfigHelper_IntegrationConfigurationKind.Dashboard };
        }
    }
    static getMergedConfig(userConfig, serverConfig) {
        const configIntegrationKind = this.getConfigIntegrationKind(serverConfig);
        const subdomain = this.getSubdomainForConfigIntegrationKind(configIntegrationKind, userConfig, serverConfig);
        const allowLocalhostAsSecureOrigin = (serverConfig.config.setupBehavior ?
            serverConfig.config.setupBehavior.allowLocalhostAsSecureOrigin :
            userConfig.allowLocalhostAsSecureOrigin);
        const isUsingSubscriptionWorkaround = OneSignalUtils["default"].internalIsUsingSubscriptionWorkaround(subdomain, allowLocalhostAsSecureOrigin);
        const mergedUserConfig = this.getUserConfigForConfigIntegrationKind(configIntegrationKind, userConfig, serverConfig, isUsingSubscriptionWorkaround);
        return {
            appId: serverConfig.app_id,
            subdomain,
            siteName: serverConfig.config.siteInfo.name,
            origin: serverConfig.config.origin,
            httpUseOneSignalCom: serverConfig.config.http_use_onesignal_com,
            restrictedOriginEnabled: serverConfig.features.restrict_origin && serverConfig.features.restrict_origin.enable,
            metrics: {
                enable: serverConfig.features.metrics.enable,
                mixpanelReportingToken: serverConfig.features.metrics.mixpanel_reporting_token
            },
            safariWebId: serverConfig.config.safari_web_id,
            vapidPublicKey: serverConfig.config.vapid_public_key,
            onesignalVapidPublicKey: serverConfig.config.onesignal_vapid_public_key,
            userConfig: mergedUserConfig,
            // default confirmed deliveries feature to off
            receiveReceiptsEnable: serverConfig.features.receive_receipts_enable || false,
            enableOnSession: Utils["default"].valueOrDefault(serverConfig.features.enable_on_session, SERVER_CONFIG_DEFAULTS_SESSION.enableOnSessionForUnsubcribed),
            sessionThreshold: Utils["default"].valueOrDefault(serverConfig.features.session_threshold, SERVER_CONFIG_DEFAULTS_SESSION.reportingThreshold),
            enableSessionDuration: Utils["default"].valueOrDefault(serverConfig.features.web_on_focus_enabled, SERVER_CONFIG_DEFAULTS_SESSION.enableOnFocus)
        };
    }
    static getConfigIntegrationKind(serverConfig) {
        if (serverConfig.config.integration)
            return serverConfig.config.integration.kind;
        return ConfigIntegrationKind.Custom;
    }
    static getCustomLinkConfig(serverConfig) {
        const initialState = {
            enabled: false,
            style: "button",
            size: "medium",
            unsubscribeEnabled: false,
            text: {
                explanation: "",
                subscribe: "",
                unsubscribe: "",
            },
            color: {
                button: "",
                text: "",
            }
        };
        if (!serverConfig || !serverConfig.config ||
            !serverConfig.config.staticPrompts || !serverConfig.config.staticPrompts.customlink ||
            !serverConfig.config.staticPrompts.customlink.enabled) {
            return initialState;
        }
        const customlink = serverConfig.config.staticPrompts.customlink;
        return {
            enabled: customlink.enabled,
            style: customlink.style,
            size: customlink.size,
            unsubscribeEnabled: customlink.unsubscribeEnabled,
            text: customlink.text ? {
                subscribe: customlink.text.subscribe,
                unsubscribe: customlink.text.unsubscribe,
                explanation: customlink.text.explanation,
            } : initialState.text,
            color: customlink.color ? {
                button: customlink.color.button,
                text: customlink.color.text,
            } : initialState.color,
        };
    }
    /**
     * Used for Custom Code Integration Type
     * @param  {AppUserConfigPromptOptions|undefined} promptOptions
     * @param  {ServerAppConfigPrompt} defaultsFromServer
     * @param  {AppUserConfig} wholeUserConfig
     * @param  {boolean=false} isUsingSubscriptionWorkaround
     * @returns AppUserConfigPromptOptions
     */
    static injectDefaultsIntoPromptOptions(promptOptions, defaultsFromServer, wholeUserConfig, isUsingSubscriptionWorkaround = false) {
        let customlinkUser = { enabled: false };
        if (promptOptions && promptOptions.customlink) {
            customlinkUser = promptOptions.customlink;
        }
        const customlinkDefaults = defaultsFromServer.customlink;
        const promptOptionsConfig = Object.assign(Object.assign({}, promptOptions), { customlink: {
                enabled: Utils["default"].getValueOrDefault(customlinkUser.enabled, customlinkDefaults.enabled),
                style: Utils["default"].getValueOrDefault(customlinkUser.style, customlinkDefaults.style),
                size: Utils["default"].getValueOrDefault(customlinkUser.size, customlinkDefaults.size),
                unsubscribeEnabled: Utils["default"].getValueOrDefault(customlinkUser.unsubscribeEnabled, customlinkDefaults.unsubscribeEnabled),
                text: {
                    subscribe: Utils["default"].getValueOrDefault(customlinkUser.text ? customlinkUser.text.subscribe : undefined, customlinkDefaults.text.subscribe),
                    unsubscribe: Utils["default"].getValueOrDefault(customlinkUser.text ? customlinkUser.text.unsubscribe : undefined, customlinkDefaults.text.unsubscribe),
                    explanation: Utils["default"].getValueOrDefault(customlinkUser.text ? customlinkUser.text.explanation : undefined, customlinkDefaults.text.explanation),
                },
                color: {
                    button: Utils["default"].getValueOrDefault(customlinkUser.color ? customlinkUser.color.button : undefined, customlinkDefaults.color.button),
                    text: Utils["default"].getValueOrDefault(customlinkUser.color ? customlinkUser.color.text : undefined, customlinkDefaults.color.text),
                },
            } });
        if (promptOptionsConfig.slidedown) {
            promptOptionsConfig.slidedown.enabled = !!promptOptionsConfig.slidedown.enabled;
            promptOptionsConfig.slidedown.autoPrompt = promptOptionsConfig.slidedown.hasOwnProperty("autoPrompt") ?
                !!promptOptionsConfig.slidedown.enabled && !!promptOptionsConfig.slidedown.autoPrompt :
                !!promptOptionsConfig.slidedown.enabled;
            promptOptionsConfig.slidedown.pageViews = Utils["default"].getValueOrDefault(promptOptionsConfig.slidedown.pageViews, SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.pageViews);
            promptOptionsConfig.slidedown.timeDelay = Utils["default"].getValueOrDefault(promptOptionsConfig.slidedown.timeDelay, SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.timeDelay);
            if (promptOptionsConfig.slidedown.categories) {
                const { categories } = promptOptionsConfig.slidedown;
                promptOptionsConfig.slidedown.categories = TagUtils_TagUtils.limitCategoriesToMaxCount(categories, ConfigHelper_MAX_CATEGORIES);
            }
        }
        else {
            promptOptionsConfig.slidedown = MainHelper_MainHelper.getSlidedownPermissionMessageOptions(promptOptionsConfig);
            promptOptionsConfig.slidedown.enabled = false;
            promptOptionsConfig.slidedown.autoPrompt = false;
            promptOptionsConfig.slidedown.pageViews = SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.pageViews;
            promptOptionsConfig.slidedown.timeDelay = SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.timeDelay;
        }
        if (promptOptionsConfig.native) {
            promptOptionsConfig.native.enabled = !!promptOptionsConfig.native.enabled;
            promptOptionsConfig.native.autoPrompt = promptOptionsConfig.native.hasOwnProperty("autoPrompt") ?
                !!promptOptionsConfig.native.enabled && !!promptOptionsConfig.native.autoPrompt :
                !!promptOptionsConfig.native.enabled;
            promptOptionsConfig.native.pageViews = Utils["default"].getValueOrDefault(promptOptionsConfig.native.pageViews, SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.pageViews);
            promptOptionsConfig.native.timeDelay = Utils["default"].getValueOrDefault(promptOptionsConfig.native.timeDelay, SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.timeDelay);
        }
        else {
            promptOptionsConfig.native = {
                enabled: false,
                autoPrompt: false,
                pageViews: SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.pageViews,
                timeDelay: SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.timeDelay
            };
        }
        /**
         * If autoRegister is true, show native prompt for https and slidedown for http ignoring any other related
         * prompt options.
         */
        if (wholeUserConfig.autoRegister === true) {
            if (isUsingSubscriptionWorkaround) {
                // disable native prompt
                promptOptionsConfig.native.enabled = false;
                promptOptionsConfig.native.autoPrompt = false;
                // enable slidedown & make it autoPrompt
                promptOptionsConfig.slidedown.enabled = true;
                promptOptionsConfig.slidedown.autoPrompt = true;
            }
            else {
                //enable native prompt & make it autoPrompt
                promptOptionsConfig.native.enabled = true;
                promptOptionsConfig.native.autoPrompt = true;
                //leave slidedown settings without change
            }
        }
        promptOptionsConfig.autoPrompt = promptOptionsConfig.native.autoPrompt ||
            promptOptionsConfig.slidedown.autoPrompt;
        return promptOptionsConfig;
    }
    /**
     * Used only with Dashboard Configuration
     * @param  {ServerAppConfig} serverConfig
     * @returns AppUserConfigPromptOptions
     */
    static getPromptOptionsForDashboardConfiguration(serverConfig) {
        const staticPrompts = serverConfig.config.staticPrompts;
        const native = staticPrompts.native ? {
            enabled: staticPrompts.native.enabled,
            autoPrompt: staticPrompts.native.enabled && staticPrompts.native.autoPrompt !== false,
            pageViews: Utils["default"].getValueOrDefault(staticPrompts.native.pageViews, SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.pageViews),
            timeDelay: Utils["default"].getValueOrDefault(staticPrompts.native.timeDelay, SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.timeDelay)
        } : {
            enabled: false,
            autoPrompt: false,
            pageViews: SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.pageViews,
            timeDelay: SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.timeDelay
        };
        let categories = undefined;
        if (staticPrompts.slidedown.categories) {
            categories = TagUtils_TagUtils.limitCategoriesToMaxCount(staticPrompts.slidedown.categories, ConfigHelper_MAX_CATEGORIES);
        }
        const slidedown = {
            enabled: staticPrompts.slidedown.enabled,
            // for backwards compatibility if not specifically false, then assume true for autoPrompt on slidedown
            autoPrompt: staticPrompts.slidedown.enabled &&
                staticPrompts.slidedown.autoPrompt !== false,
            pageViews: Utils["default"].getValueOrDefault(staticPrompts.slidedown.pageViews, SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.pageViews),
            timeDelay: Utils["default"].getValueOrDefault(staticPrompts.slidedown.timeDelay, SERVER_CONFIG_DEFAULTS_PROMPT_DELAYS.timeDelay),
            actionMessage: staticPrompts.slidedown.actionMessage,
            acceptButtonText: staticPrompts.slidedown.acceptButton,
            cancelButtonText: staticPrompts.slidedown.cancelButton,
            categories,
        };
        return {
            autoPrompt: native.autoPrompt || slidedown.autoPrompt,
            native,
            slidedown,
            fullscreen: {
                enabled: staticPrompts.fullscreen.enabled,
                actionMessage: staticPrompts.fullscreen.actionMessage,
                acceptButton: staticPrompts.fullscreen.acceptButton,
                cancelButton: staticPrompts.fullscreen.cancelButton,
                title: staticPrompts.fullscreen.title,
                message: staticPrompts.fullscreen.message,
                caption: staticPrompts.fullscreen.caption,
                autoAcceptTitle: staticPrompts.fullscreen.autoAcceptTitle,
            },
            customlink: this.getCustomLinkConfig(serverConfig),
        };
    }
    static getUserConfigForConfigIntegrationKind(configIntegrationKind, userConfig, serverConfig, isUsingSubscriptionWorkaround = false) {
        const integrationCapabilities = this.getIntegrationCapabilities(configIntegrationKind);
        switch (integrationCapabilities.configuration) {
            case ConfigHelper_IntegrationConfigurationKind.Dashboard:
                /*
                  Ignores code-based initialization configuration and uses dashboard configuration only.
                 */
                return {
                    appId: serverConfig.app_id,
                    autoRegister: false,
                    autoResubscribe: serverConfig.config.autoResubscribe,
                    path: serverConfig.config.serviceWorker.path,
                    serviceWorkerPath: serverConfig.config.serviceWorker.workerName,
                    serviceWorkerUpdaterPath: serverConfig.config.serviceWorker.updaterWorkerName,
                    serviceWorkerParam: { scope: serverConfig.config.serviceWorker.registrationScope },
                    subdomainName: serverConfig.config.siteInfo.proxyOrigin,
                    promptOptions: this.getPromptOptionsForDashboardConfiguration(serverConfig),
                    welcomeNotification: {
                        disable: !serverConfig.config.welcomeNotification.enable,
                        title: serverConfig.config.welcomeNotification.title,
                        message: serverConfig.config.welcomeNotification.message,
                        url: serverConfig.config.welcomeNotification.url
                    },
                    notifyButton: {
                        enable: serverConfig.config.staticPrompts.bell.enabled,
                        displayPredicate: serverConfig.config.staticPrompts.bell.hideWhenSubscribed ?
                            () => {
                                return OneSignal.isPushNotificationsEnabled()
                                    .then((isPushEnabled) => {
                                    /* The user is subscribed, so we want to return "false" to hide the notify button */
                                    return !isPushEnabled;
                                });
                            } :
                            null,
                        size: serverConfig.config.staticPrompts.bell.size,
                        position: serverConfig.config.staticPrompts.bell.location,
                        showCredit: false,
                        offset: {
                            bottom: `${serverConfig.config.staticPrompts.bell.offset.bottom}px`,
                            left: `${serverConfig.config.staticPrompts.bell.offset.left}px`,
                            right: `${serverConfig.config.staticPrompts.bell.offset.right}px`
                        },
                        colors: {
                            'circle.background': serverConfig.config.staticPrompts.bell.color.main,
                            'circle.foreground': serverConfig.config.staticPrompts.bell.color.accent,
                            'badge.background': 'black',
                            'badge.foreground': 'white',
                            'badge.bordercolor': 'black',
                            'pulse.color': serverConfig.config.staticPrompts.bell.color.accent,
                            'dialog.button.background.hovering': serverConfig.config.staticPrompts.bell.color.main,
                            'dialog.button.background.active': serverConfig.config.staticPrompts.bell.color.main,
                            'dialog.button.background': serverConfig.config.staticPrompts.bell.color.main,
                            'dialog.button.foreground': 'white',
                        },
                        text: {
                            'tip.state.unsubscribed': serverConfig.config.staticPrompts.bell.tooltip.unsubscribed,
                            'tip.state.subscribed': serverConfig.config.staticPrompts.bell.tooltip.subscribed,
                            'tip.state.blocked': serverConfig.config.staticPrompts.bell.tooltip.blocked,
                            'message.prenotify': serverConfig.config.staticPrompts.bell.tooltip.unsubscribed,
                            'message.action.subscribing': serverConfig.config.staticPrompts.bell.message.subscribing,
                            'message.action.subscribed': serverConfig.config.staticPrompts.bell.message.subscribing,
                            'message.action.resubscribed': serverConfig.config.staticPrompts.bell.message.subscribing,
                            'message.action.unsubscribed': serverConfig.config.staticPrompts.bell.message.unsubscribing,
                            'dialog.main.title': serverConfig.config.staticPrompts.bell.dialog.main.title,
                            'dialog.main.button.subscribe': serverConfig.config.staticPrompts.bell.dialog.main.subscribeButton,
                            'dialog.main.button.unsubscribe': serverConfig.config.staticPrompts.bell.dialog.main.unsubscribeButton,
                            'dialog.blocked.title': serverConfig.config.staticPrompts.bell.dialog.blocked.title,
                            'dialog.blocked.message': serverConfig.config.staticPrompts.bell.dialog.blocked.message,
                        },
                    },
                    persistNotification: serverConfig.config.notificationBehavior ?
                        serverConfig.config.notificationBehavior.display.persist : undefined,
                    webhooks: {
                        cors: serverConfig.config.webhooks.corsEnable,
                        'notification.displayed': serverConfig.config.webhooks.notificationDisplayedHook,
                        'notification.clicked': serverConfig.config.webhooks.notificationClickedHook,
                        'notification.dismissed': serverConfig.config.webhooks.notificationDismissedHook,
                    },
                    notificationClickHandlerMatch: serverConfig.config.notificationBehavior ?
                        serverConfig.config.notificationBehavior.click.match : undefined,
                    notificationClickHandlerAction: serverConfig.config.notificationBehavior ?
                        serverConfig.config.notificationBehavior.click.action : undefined,
                    allowLocalhostAsSecureOrigin: serverConfig.config.setupBehavior ?
                        serverConfig.config.setupBehavior.allowLocalhostAsSecureOrigin : undefined,
                    requiresUserPrivacyConsent: userConfig.requiresUserPrivacyConsent,
                    outcomes: {
                        direct: serverConfig.config.outcomes.direct,
                        indirect: {
                            enabled: serverConfig.config.outcomes.indirect.enabled,
                            influencedTimePeriodMin: serverConfig.config.outcomes.indirect.notification_attribution.minutes_since_displayed,
                            influencedNotificationsLimit: serverConfig.config.outcomes.indirect.notification_attribution.limit,
                        },
                        unattributed: serverConfig.config.outcomes.unattributed,
                    }
                };
            case ConfigHelper_IntegrationConfigurationKind.JavaScript:
                /*
                  Ignores dashboard configuration and uses code-based configuration only.
                  Except injecting some default values for prompts.
                */
                const config = Object.assign(Object.assign(Object.assign(Object.assign({}, userConfig), { promptOptions: this.injectDefaultsIntoPromptOptions(userConfig.promptOptions, serverConfig.config.staticPrompts, userConfig, isUsingSubscriptionWorkaround) }), {
                    serviceWorkerParam: typeof OneSignal !== 'undefined' && !!OneSignal.SERVICE_WORKER_PARAM
                        ? OneSignal.SERVICE_WORKER_PARAM
                        : { scope: '/' },
                    serviceWorkerPath: typeof OneSignal !== 'undefined' && !!OneSignal.SERVICE_WORKER_PATH
                        ? OneSignal.SERVICE_WORKER_PATH
                        : 'OneSignalSDKWorker.js',
                    serviceWorkerUpdaterPath: typeof OneSignal !== 'undefined' && !!OneSignal.SERVICE_WORKER_UPDATER_PATH
                        ? OneSignal.SERVICE_WORKER_UPDATER_PATH
                        : 'OneSignalSDKUpdaterWorker.js',
                    path: !!userConfig.path ? userConfig.path : '/'
                }), { outcomes: {
                        direct: serverConfig.config.outcomes.direct,
                        indirect: {
                            enabled: serverConfig.config.outcomes.indirect.enabled,
                            influencedTimePeriodMin: serverConfig.config.outcomes.indirect.notification_attribution.minutes_since_displayed,
                            influencedNotificationsLimit: serverConfig.config.outcomes.indirect.notification_attribution.limit,
                        },
                        unattributed: serverConfig.config.outcomes.unattributed,
                    } });
                if (userConfig.hasOwnProperty("autoResubscribe")) {
                    config.autoResubscribe = !!userConfig.autoResubscribe;
                }
                else if (userConfig.hasOwnProperty("autoRegister")) {
                    config.autoResubscribe = !!userConfig.autoRegister;
                }
                else {
                    config.autoResubscribe = !!serverConfig.config.autoResubscribe;
                }
                return config;
        }
    }
    /**
     * Describes how to merge a dashboard-set subdomain with a/lack of user-supplied subdomain.
     */
    static getSubdomainForConfigIntegrationKind(configIntegrationKind, userConfig, serverConfig) {
        const integrationCapabilities = this.getIntegrationCapabilities(configIntegrationKind);
        const userValue = userConfig.subdomainName;
        let serverValue = '';
        switch (integrationCapabilities.configuration) {
            case ConfigHelper_IntegrationConfigurationKind.Dashboard:
                serverValue = serverConfig.config.siteInfo.proxyOriginEnabled ?
                    serverConfig.config.siteInfo.proxyOrigin :
                    undefined;
                break;
            case ConfigHelper_IntegrationConfigurationKind.JavaScript:
                serverValue = serverConfig.config.subdomain;
                break;
        }
        if (serverValue && !this.shouldUseServerConfigSubdomain(userValue, integrationCapabilities)) {
            return undefined;
        }
        else {
            return serverValue;
        }
    }
    static shouldUseServerConfigSubdomain(userProvidedSubdomain, capabilities) {
        switch (capabilities.configuration) {
            case ConfigHelper_IntegrationConfigurationKind.Dashboard:
                /*
                  Dashboard config using the new web config editor always takes precedence.
                 */
                return true;
            case ConfigHelper_IntegrationConfigurationKind.JavaScript:
                /*
                 * An HTTPS site may be using either a native push integration or a fallback
                 * subdomain integration. Our SDK decides the integration based on whether
                 * init option subdomainName appears and the site's protocol.
                 *
                 * To avoid having developers write JavaScript to customize the SDK,
                 * configuration properties like subdomainName are downloaded on page start.
                 *
                 * New developers setting up web push can omit subdomainName, but existing
                 * developers already having written code to configure OneSignal aren't
                 * removing their code.
                 *
                 * When an HTTPS site is configured with a subdomain on the server-side, we do
                 * not apply it even though we've downloaded this configuration unless the
                 * user also declares it manually in their initialization code.
                 */
                switch (location.protocol) {
                    case 'https:':
                        return !!userProvidedSubdomain;
                    case 'http:':
                        return true;
                    default:
                        return false;
                }
        }
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/ConfigManager.js



/**
 * Handles downloading settings from OneSignal and performing any other initialization-related tasks.
 */
class ConfigManager_ConfigManager {
    /**
     * Downloads configuration from the OneSignal dashboard, merges it with user-supplied configuration from JavaScript
     * code, and returns Web SDK-specific configuration.
     */
    getAppConfig(userConfig) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield ConfigHelper_ConfigHelper.getAppConfig(userConfig, OneSignalApi_OneSignalApi.downloadServerAppConfig);
        });
    }
    /**
     * Merges configuration downloaded from the OneSignal dashboard with user-provided JavaScript configuration to produce
     * a final web SDK-specific configuration.
     */
    getMergedConfig(userConfig, serverConfig) {
        return ConfigHelper_ConfigHelper.getMergedConfig(userConfig, serverConfig);
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/modules/frames/RemoteFrame.js






class RemoteFrame_RemoteFrame {
    constructor(initOptions) {
        this.options = {
            appId: initOptions.appId,
            subdomain: initOptions.subdomainName,
            origin: initOptions.origin,
            siteName: initOptions.siteName,
            metrics: {
                enable: false,
                mixpanelReportingToken: null
            },
            userConfig: {}
        };
    }
    /**
     * Loads the messenger on the iFrame to communicate with the host page and
     * assigns init options to an iFrame-only initialization of OneSignal.
     *
     * Our main host page will wait for all iFrame scripts to complete since the
     * host page uses the iFrame onload event to begin sending handshake messages
     * to the iFrame.
     *
     * There is no load timeout here; the iFrame initializes it scripts and waits
     * forever for the first handshake message.
     */
    initialize() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const creator = window.opener || window.parent;
            if (creator == window) {
                document.write(`<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and must be opened as a result of a subscription call.</span>`);
                return Promise.resolve();
            }
            // The rest of our SDK isn't refactored enough yet to accept typed objects
            // Within this class, we can use them, but when we assign them to
            // OneSignal.config, assign the simple string versions
            const rasterizedOptions = Object.assign({}, this.options);
            rasterizedOptions.appId = rasterizedOptions.appId;
            /* This is necessary, otherwise the subdomain is lost after ConfigManager.getAppConfig */
            rasterizedOptions.subdomainName = rasterizedOptions.subdomain;
            rasterizedOptions.origin = rasterizedOptions.origin;
            OneSignal.config = rasterizedOptions || {};
            const appConfig = yield new ConfigManager_ConfigManager().getAppConfig(rasterizedOptions);
            OneSignal.environmentInfo = EnvironmentInfoHelper_EnvironmentInfoHelper.getEnvironmentInfo();
            OneSignal.context = new Context_Context(appConfig);
            OneSignal.context.workerMessenger.listen(true);
            OneSignal.initialized = true;
            this.loadPromise = {};
            this.loadPromise.promise = new Promise((resolve, reject) => {
                this.loadPromise.resolver = resolve;
                this.loadPromise.rejector = reject;
            });
            this.establishCrossOriginMessaging();
            return this.loadPromise.promise;
        });
    }
    establishCrossOriginMessaging() { }
    dispose() {
        // Removes all events
        this.messenger.destroy();
    }
    finishInitialization() {
        this.loadPromise.resolver();
    }
    subscribe() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // Do not register OneSignalSDKUpdaterWorker.js for HTTP popup sites; the file does not exist
            const isPushEnabled = LocalStorage_LocalStorage.getIsPushNotificationsEnabled();
            const windowCreator = opener || parent;
            if (!isPushEnabled) {
                SubscriptionHelper_SubscriptionHelper.registerForPush();
            }
            else {
                if (windowCreator) {
                    window.close();
                }
            }
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/modules/frames/ProxyFrame.js











/**
 * The actual OneSignal proxy frame contents / implementation, that is loaded
 * into the iFrame URL as subdomain.onesignal.com/webPushIFrame or
 * subdomain.os.tc/webPushIFrame. *
 */
class ProxyFrame_ProxyFrame extends RemoteFrame_RemoteFrame {
    /**
     * Loads the messenger on the iFrame to communicate with the host page and
     * assigns init options to an iFrame-only initialization of OneSignal.
     *
     * Our main host page will wait for all iFrame scripts to complete since the
     * host page uses the iFrame onload event to begin sending handshake messages
     * to the iFrame.
     *
     * There is no load timeout here; the iFrame initializes it scripts and waits
     * forever for the first handshake message.
     */
    initialize() {
        const promise = super.initialize();
        Event["default"].trigger('httpInitialize');
        return promise;
    }
    establishCrossOriginMessaging() {
        if (this.messenger) {
            this.messenger.destroy();
        }
        this.messenger = new Postmam_Postmam(window, this.options.origin, this.options.origin);
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, this.onProxyFrameInitializing.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, this.onRemoteNotificationPermission.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, this.onRemoteDatabaseGet.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET_ALL, this.onRemoteDatabaseGetAll.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, this.onRemoteDatabasePut.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, this.onRemoteDatabaseRemove.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, this.onUnsubscribeFromPush.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, this.onMarkPromptDismissed.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, this.onIsSubscribed.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, this.onUnsubscribeProxyFrame.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, this.onServiceWorkerState.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_WORKER_VERSION, this.onWorkerVersion.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.SUBSCRIPTION_EXPIRATION_STATE, this.onSubscriptionExpirationState.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.PROCESS_EXPIRING_SUBSCRIPTIONS, this.onProcessExpiringSubscriptions.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_SUBSCRIPTION_STATE, this.onGetSubscriptionState.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.SESSION_UPSERT, this.onSessionUpsert.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.SESSION_DEACTIVATE, this.onSessionDeactivate.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, this.onAreYouVisibleRequest.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_RESPONSE, this.onAreYouVisibleResponse.bind(this));
        this.messenger.listen();
    }
    retriggerRemoteEvent(eventName, eventData) {
        this.messenger.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, { eventName, eventData });
    }
    onMessengerConnect(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug(`(${SdkEnvironment["default"].getWindowEnv().toString()}) Successfully established cross-origin communication.`);
            this.finishInitialization();
            return false;
        });
    }
    onProxyFrameInitializing(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].info(`(${SdkEnvironment["default"].getWindowEnv().toString()}) The iFrame has just received initOptions from the host page!`);
            const config = Object.assign(Object.assign(Object.assign({}, message.data.hostInitOptions), OneSignal.config), { pageUrl: message.data.pageUrl });
            OneSignal.config = config;
            InitHelper_InitHelper.installNativePromptPermissionChangedHook();
            // 3/30/16: For HTTP sites, put the host page URL as default URL if one doesn't exist already
            const defaultUrl = yield Database["default"].get('Options', 'defaultUrl');
            if (!defaultUrl) {
                yield Database["default"].put('Options', { key: 'defaultUrl', value: new URL(OneSignal.config.pageUrl).origin });
            }
            /**
             * When a user is on http://example.com and receives a notification, we want to open a new window only if the
             * notification's URL is different from http://example.com. The service worker, which only controls
             * subdomain.onesignal.com, doesn't know that the host URL is http://example.com. Although defaultUrl above
             * sets the HTTP's origin, this can be modified if users call setDefaultTitle(). lastKnownHostUrl therefore
             * stores the last visited full page URL.
             */
            yield Database["default"].put('Options', { key: 'lastKnownHostUrl', value: OneSignal.config.pageUrl });
            yield InitHelper_InitHelper.initSaveState();
            yield InitHelper_InitHelper.storeInitialValues();
            yield InitHelper_InitHelper.saveInitOptions();
            if (navigator.serviceWorker && window.location.protocol === 'https:') {
                try {
                    const context = OneSignal.context;
                    context.serviceWorkerManager.establishServiceWorkerChannel();
                }
                catch (e) {
                    Log["default"].error(`Error interacting with Service Worker inside an HTTP-hosted iFrame:`, e);
                }
            }
            message.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
        });
    }
    onRemoteNotificationPermission(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            const permission = yield context.permissionManager.getReportedNotificationPermission(context.appConfig.safariWebId);
            message.reply(permission);
            return false;
        });
    }
    onRemoteDatabaseGet(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // retrievals is an array of key-value pairs e.g. [{table: 'Ids', keys:
            // 'someId'}, {table: 'Ids', keys: 'someId'}]
            const retrievals = message.data;
            const retrievalOpPromises = [];
            for (let retrieval of retrievals) {
                const { table, key } = retrieval;
                retrievalOpPromises.push(Database["default"].get(table, key));
            }
            const results = yield Promise.all(retrievalOpPromises);
            message.reply(results);
            return false;
        });
    }
    onRemoteDatabaseGetAll(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const table = message.data.table;
            const results = yield Database["default"].getAll(table);
            message.reply(results);
            return false;
        });
    }
    onRemoteDatabasePut(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // insertions is an array of key-value pairs e.g. [table: {'Options': keypath: {key: persistNotification, value: '...'}}, {table: 'Ids', keypath: {type: 'userId', id: '...'}]
            // It's formatted that way because our IndexedDB database is formatted that way
            const insertions = message.data;
            let insertionOpPromises = [];
            for (let insertion of insertions) {
                let { table, keypath } = insertion;
                insertionOpPromises.push(Database["default"].put(table, keypath));
            }
            yield Promise.all(insertionOpPromises);
            message.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
            return false;
        });
    }
    onRemoteDatabaseRemove(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // removals is an array of key-value pairs e.g. [table: {'Options': keypath: {key: persistNotification, value: '...'}}, {table: 'Ids', keypath: {type: 'userId', id: '...'}]
            // It's formatted that way because our IndexedDB database is formatted that way
            const removals = message.data;
            let removalOpPromises = [];
            for (let removal of removals) {
                let { table, keypath } = removal;
                removalOpPromises.push(Database["default"].remove(table, keypath));
            }
            yield Promise.all(removalOpPromises);
            message.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
            return false;
        });
    }
    onUnsubscribeFromPush(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug('(Reposted from iFrame -> Host) User unsubscribed but permission granted. Re-prompting the user for push.');
            try {
                yield Object(utils["unsubscribeFromPush"])();
                message.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
            }
            catch (e) {
                Log["default"].debug('Failed to unsubscribe from push remotely:', e);
            }
        });
    }
    onMarkPromptDismissed(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug('(Reposted from iFrame -> Host) Marking prompt as dismissed.');
            yield TestHelper_TestHelper.markHttpsNativePromptDismissed();
            message.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
            return false;
        });
    }
    onIsSubscribed(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const isSubscribed = yield OneSignal.isPushNotificationsEnabled();
            message.reply(isSubscribed);
            return false;
        });
    }
    onUnsubscribeProxyFrame(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const isSubscribed = yield OneSignal.isPushNotificationsEnabled();
            if (isSubscribed) {
                /*
                  Set a flag to prevent a notification from being sent from OneSignal's
                  side. The subscription stored locally on the browser is live and
                  messageable, but we can't query it or unsubscribe from it since we're on
                  an insecure origin. The most we can do is have our SDK delete the stored
                  information to pretend we're not subscribed on both the client SDK side
                  and the server side.
                */
                // Set a flag remotely to prevent notifications from being sent
                yield OneSignal.setSubscription(false);
                // Orphan the subscription by removing data stored about it
                // This causes our SDK to think we're no longer subscribed on this frame
                yield OneSignal.database.rebuild();
            }
            message.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
            return false;
        });
    }
    onServiceWorkerState(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            const result = yield context.serviceWorkerManager.getActiveState();
            message.reply(result);
            return false;
        });
    }
    onWorkerVersion(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            const result = yield context.serviceWorkerManager.getWorkerVersion();
            message.reply(result);
            return false;
        });
    }
    onSubscriptionExpirationState(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            const result = yield context.subscriptionManager.isSubscriptionExpiring();
            message.reply(result);
            return false;
        });
    }
    onProcessExpiringSubscriptions(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            const result = yield InitHelper_InitHelper.processExpiringSubscriptions();
            message.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE);
            return false;
        });
    }
    onGetSubscriptionState(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            const result = yield context.subscriptionManager.getSubscriptionState();
            message.reply(result);
            return false;
        });
    }
    onSessionUpsert(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            const payload = message.data;
            context.workerMessenger.directPostMessageToSW(WorkerMessenger_WorkerMessengerCommand.SessionUpsert, payload);
            message.reply(true);
        });
    }
    onSessionDeactivate(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const context = OneSignal.context;
            const payload = message.data;
            context.workerMessenger.directPostMessageToSW(WorkerMessenger_WorkerMessengerCommand.SessionDeactivate, payload);
            message.reply(true);
        });
    }
    onAreYouVisibleRequest(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug("onAreYouVisibleRequest iframe", message);
        });
    }
    onAreYouVisibleResponse(message) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug("onAreYouVisibleResponse iframe", message);
            const context = OneSignal.context;
            const payload = message.data;
            context.workerMessenger.directPostMessageToSW(WorkerMessenger_WorkerMessengerCommand.AreYouVisibleResponse, payload);
            message.reply(true);
        });
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/modules/frames/SubscriptionModal.js


/**
 * The actual OneSignal proxy frame contents / implementation, that is loaded
 * into the iFrame URL as subdomain.onesignal.com/webPushIFrame or
 * subdomain.os.tc/webPushIFrame. *
 */
class SubscriptionModal_SubscriptionModal extends RemoteFrame_RemoteFrame {
    constructor(initOptions) {
        super(initOptions);
    }
    establishCrossOriginMessaging() {
        if (this.messenger) {
            this.messenger.destroy();
        }
        this.messenger = new Postmam_Postmam(window.parent, this.options.origin, this.options.origin);
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/modules/frames/SubscriptionPopup.js




/**
 * The actual OneSignal proxy frame contents / implementation, that is loaded
 * into the iFrame URL as subdomain.onesignal.com/webPushIFrame or
 * subdomain.os.tc/webPushIFrame. *
 */
class SubscriptionPopup_SubscriptionPopup extends RemoteFrame_RemoteFrame {
    constructor(initOptions) {
        super(initOptions);
    }
    /**
     * Loads the messenger on the iFrame to communicate with the host page and
     * assigns init options to an iFrame-only initialization of OneSignal.
     *
     * Our main host page will wait for all iFrame scripts to complete since the
     * host page uses the iFrame onload event to begin sending handshake messages
     * to the iFrame.
     *
     * There is no load timeout here; the iFrame initializes it scripts and waits
     * forever for the first handshake message.
     */
    // initialize() is implemented by base RemoteFrame class
    establishCrossOriginMessaging() {
        this.messenger = new Postmam_Postmam(window.opener, this.options.origin, this.options.origin);
        this.messenger.once(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnected.bind(this));
        // The host page will receive this event, and then call connect()
        this.messenger.postMessage(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, null);
        this.messenger.listen();
    }
    onMessengerConnected(_) {
        Log["default"].debug(`(${SdkEnvironment["default"].getWindowEnv().toString()}) The host page is now ready to receive commands from the HTTP popup.`);
        this.finishInitialization();
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/HttpHelper.js










class HttpHelper_HttpHelper {
    // Http only - Only called from iframe's init.js
    static initHttp(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug(`Called %cinitHttp(${JSON.stringify(options, null, 4)})`, Object(utils["getConsoleStyle"])('code'));
            switch (SdkEnvironment["default"].getWindowEnv()) {
                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalProxyFrame:
                    OneSignal.proxyFrame = new ProxyFrame_ProxyFrame(options);
                    yield OneSignal.proxyFrame.initialize();
                    /**
                     * Our Rails-side subscription popup/modal depends on
                     * OneSignal.iframePostmam, OneSignal.popupPostmam, and
                     * OneSignal.modalPostmam, which don't exist anymore.
                     */
                    LegacyManager_LegacyManager.ensureBackwardsCompatibility(OneSignal);
                    break;
                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionPopup:
                    OneSignal.subscriptionPopup = new SubscriptionPopup_SubscriptionPopup(options);
                    yield OneSignal.subscriptionPopup.initialize();
                    /**
                     * Our Rails-side subscription popup/modal depends on
                     * OneSignal.iframePostmam, OneSignal.popupPostmam, and
                     * OneSignal.modalPostmam, which don't exist anymore.
                     */
                    LegacyManager_LegacyManager.ensureBackwardsCompatibility(OneSignal);
                    Event["default"].trigger('httpInitialize');
                    break;
                case WindowEnvironmentKind["WindowEnvironmentKind"].OneSignalSubscriptionModal:
                    OneSignal.subscriptionModal = new SubscriptionModal_SubscriptionModal(options);
                    /*
                      WARNING: Do not await on modal initialization; the modal uses direct
                      postmessage and does not establish a "connection" to wait on
                    */
                    /*
                      WARNING: The establishCrossOriginMessaging() statement is necessary.
                      The common base class implementation of initialize() does an
                      asynchronous download of settings, but the modal needs the 'messenger'
                      variable (created by calling establishCrossOriginmessaging()) to exist
                      immediately. The hacky way to solve this for now is to force this part
                      of the initialization earlier.
                    */
                    OneSignal.subscriptionModal.establishCrossOriginMessaging();
                    OneSignal.subscriptionModal.initialize();
                    /* Our Rails-side subscription popup/modal depends on
                     * OneSignal.iframePostmam, OneSignal.popupPostmam, and
                     * OneSignal.modalPostmam, which don't exist anymore.
                     */
                    LegacyManager_LegacyManager.ensureBackwardsCompatibility(OneSignal);
                    Event["default"].trigger('httpInitialize');
                    break;
                default:
                    Log["default"].error("Unsupported HTTP initialization branch.");
                    break;
            }
        });
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/models/EnvironmentKind.js
var EnvironmentKind = __webpack_require__("./build/ts-to-es6/src/models/EnvironmentKind.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/modules/frames/ProxyFrameHost.js






/**
 * Manager for an instance of the OneSignal proxy frame, for use from the main
 * page (not the iFrame itself).
 *
 * This is loaded as subdomain.onesignal.com/webPushIFrame or
 * subdomain.os.tc/webPushIFrame. *
 */
class ProxyFrameHost_ProxyFrameHost {
    /**
     *
     * @param origin The URL object describing the origin to load.
     */
    constructor(origin) {
        this.url = origin;
        this.url.pathname = 'webPushIframe';
    }
    /**
     * How long to wait to load the proxy frame before timing out.
     */
    static get LOAD_TIMEOUT_MS() {
        return 15000;
    }
    /**
     * Creates and loads an iFrame on the DOM, replacing any existing iFrame of
     * the same URL.
     *
     * Rejects with a TimeoutError if the frame doesn't load within a specified time.
     */
    load() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            /*
              This class removes existing iFrames with the same URL. This prevents
              multiple iFrames to the same origin, which can cause issues with
              cross-origin messaging.
            */
            Log["default"].debug('Opening an iFrame to', this.url.toString());
            this.removeFrame();
            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            iframe.src = this.url.toString();
            iframe.sandbox = 'allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation';
            this.loadPromise = {};
            this.loadPromise.promise = new Promise((resolve, reject) => {
                this.loadPromise.resolver = resolve;
                this.loadPromise.rejector = reject;
            });
            document.body.appendChild(iframe);
            iframe.onload = this.onFrameLoad.bind(this);
            this.element = iframe;
            // Display a timeout warning if frame doesn't load in time, but don't prevent it from loading if the network is just slow
            Object(utils["timeoutPromise"])(this.loadPromise.promise, ProxyFrameHost_ProxyFrameHost.LOAD_TIMEOUT_MS).catch(() => {
                if (window === window.top) {
                    Log["default"].warn(`OneSignal: Loading the required iFrame ${this.url.toString()} timed out. Check that the Site URL onesignal.com dashboard web config is ${location.origin}. Only the Site URL specified there is allowed to use load the iFrame.`);
                }
            });
            return this.loadPromise.promise;
        });
    }
    removeFrame() {
        if (!Environment["default"].isBrowser())
            return;
        const existingInstance = document.querySelector(`iframe[src='${this.url.toString()}']`);
        if (existingInstance)
            existingInstance.remove();
    }
    onFrameLoad(_) {
        this.establishCrossOriginMessaging();
    }
    establishCrossOriginMessaging() {
        if (this.messenger) {
            // Remove all previous events; window message events should not go to any previous listeners
            this.messenger.destroy();
        }
        this.messenger = new Postmam_Postmam(this.element.contentWindow, this.url.toString(), this.url.toString());
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, this.onRemoteNotificationPermissionChanged.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.REQUEST_HOST_URL, this.onRequestHostUrl.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, this.onServiceWorkerCommandRedirect.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, this.onGetEventListenerCount.bind(this));
        this.messenger.on(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_REQUEST, this.onAreYouVisibleRequest.bind(this));
        this.messenger.connect();
    }
    dispose() {
        // Removes all events
        if (this.messenger) {
            this.messenger.destroy();
        }
        this.removeFrame();
    }
    onMessengerConnect(_) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug(`Successfully established cross-origin communication for iFrame at ${this.url.toString()}`);
            this.messenger.message(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, {
                hostInitOptions: Object(utils["deepCopy"])(OneSignal.config),
                pageUrl: window.location.href,
            }, (reply) => {
                if (reply.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                    this.loadPromise.resolver();
                    // This needs to be initialized so that isSubscribed() can be called to
                    // determine whether the user is subscribed to Frame A or B
                    //Event.trigger(OneSignal.EVENTS.SDK_INITIALIZED);
                }
                return false;
            });
        });
    }
    onRemoteRetriggerEvent(message) {
        // e.g. { eventName: 'subscriptionChange', eventData: true}
        let { eventName, eventData } = message.data;
        Event["default"].trigger(eventName, eventData, message.source);
        return false;
    }
    onRemoteNotificationPermissionChanged(message) {
        let { forceUpdatePermission } = message.data;
        Object(utils["triggerNotificationPermissionChanged"])(forceUpdatePermission);
        return false;
    }
    onRequestHostUrl(message) {
        message.reply(location.href);
        return false;
    }
    onServiceWorkerCommandRedirect(message) {
        const url = message.data;
        if (url && url.startsWith("http")) {
            window.location.href = url;
        }
        return false;
    }
    onGetEventListenerCount(message) {
        const eventName = message.data;
        Log["default"].debug('(Reposted from iFrame -> Host) Getting event listener count for ', eventName);
        message.reply(OneSignal.emitter.numberOfListeners(eventName));
        return false;
    }
    isSubscribed() {
        return new Promise(resolve => {
            this.messenger.message(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, null, (reply) => {
                resolve(reply.data);
            });
        });
    }
    unsubscribeFromPush() {
        return new Promise(resolve => {
            this.messenger.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, null, (_reply) => { resolve(); });
        });
    }
    getProxyServiceWorkerActiveState() {
        return new Promise((resolve, reject) => {
            this.message(OneSignal.POSTMAM_COMMANDS.SERVICE_WORKER_STATE, null, (reply) => {
                resolve(reply.data);
            });
        });
    }
    runCommand(command, payload = null) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve, _reject) => {
                this.message(command, payload, (reply) => {
                    resolve(reply.data);
                });
            });
            return result;
        });
    }
    onAreYouVisibleRequest(event) {
        Log["default"].debug("onAreYouVisibleRequest page", event);
        const response = {
            timestamp: event.data.timestamp,
            focused: document.hasFocus(),
        };
        this.message(OneSignal.POSTMAM_COMMANDS.ARE_YOU_VISIBLE_RESPONSE, response);
    }
    /**
     * Shortcut method to messenger.message().
     */
    message(..._) {
        this.messenger.message.apply(this.messenger, arguments);
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/managers/AltOriginManager.js





class AltOriginManager_AltOriginManager {
    constructor() {
    }
    /*
    * This loads all possible iframes that a site could be subscribed to
    * (os.tc & onesignal.com) then checks to see we are subscribed to any.
    * If we find what we are subscribed to both unsubscribe from onesignal.com.
    * This method prefers os.tc over onesignal.com where possible.
    */
    static discoverAltOrigin(appConfig) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const iframeUrls = AltOriginManager_AltOriginManager.getOneSignalProxyIframeUrls(appConfig);
            const allProxyFrameHosts = [];
            for (const iframeUrl of iframeUrls) {
                const proxyFrameHost = new ProxyFrameHost_ProxyFrameHost(iframeUrl);
                // A TimeoutError could happen here; it gets rejected out of this entire loop
                yield proxyFrameHost.load();
                allProxyFrameHosts.push(proxyFrameHost);
            }
            const subscribedProxyFrameHosts = yield AltOriginManager_AltOriginManager.subscribedProxyFrameHosts(allProxyFrameHosts);
            yield AltOriginManager_AltOriginManager.removeDuplicatedAltOriginSubscription(subscribedProxyFrameHosts);
            let preferredProxyFrameHost;
            if (subscribedProxyFrameHosts.length === 0) {
                // Use the first (preferred) host (os.tc in this case) if not subscribed to any
                preferredProxyFrameHost = allProxyFrameHosts[0];
            }
            else {
                // Otherwise if their was one or more use the highest preferred one in the list
                preferredProxyFrameHost = subscribedProxyFrameHosts[0];
            }
            // Remove all other unneeded iframes from the page
            for (const proxyFrameHost of allProxyFrameHosts) {
                if (preferredProxyFrameHost !== proxyFrameHost) {
                    proxyFrameHost.dispose();
                }
            }
            return preferredProxyFrameHost;
        });
    }
    static subscribedProxyFrameHosts(proxyFrameHosts) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const subscribed = [];
            for (const proxyFrameHost of proxyFrameHosts) {
                if (yield proxyFrameHost.isSubscribed()) {
                    subscribed.push(proxyFrameHost);
                }
            }
            return subscribed;
        });
    }
    /*
    * If the user is subscribed to more than OneSignal subdomain (AKA HTTP setup)
    * unsubscribe them from ones lower in the list.
    * Example: Such as being being subscribed to mysite.os.tc & mysite.onesignal.com
    */
    static removeDuplicatedAltOriginSubscription(subscribedProxyFrameHosts) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            // Not subscribed or subscribed to just one domain, nothing to do, no duplicates
            if (subscribedProxyFrameHosts.length < 2) {
                return;
            }
            // At this point we have 2+ subscriptions
            // Keep only the first (highest priority) domain and unsubscribe the rest.
            const toUnsubscribeProxyFrameHosts = subscribedProxyFrameHosts.slice(1);
            for (const dupSubscribedHost of toUnsubscribeProxyFrameHosts) {
                yield dupSubscribedHost.unsubscribeFromPush();
            }
        });
    }
    /**
     * Only used for sites using a OneSignal subdomain (AKA HTTP setup).
     *
     * Returns the array of possible URL in which the push subscription and
     * IndexedDb site data will be stored.
     *
     * This URL was typically subdomain.onesignal.com, until we switched
     * to subdomain.os.tc for a shorter origin to fit into Mac's native
     * notifications on Chrome 59+.
     *
     * Because a user may be subscribed to subdomain.onesignal.com or
     * subdomain.os.tc, we have to load both in certain scenarios to determine
     * which the user is subscribed to; hence, this method returns an array of
     * possible URLs.
     *
     * Order of URL is in priority order of one should be used.
     */
    static getCanonicalSubscriptionUrls(config, buildEnv = SdkEnvironment["default"].getApiEnv()) {
        const subscriptionDomain = AltOriginManager_AltOriginManager.getWildcardLegacySubscriptionDomain(buildEnv);
        const legacyDomainUrl = new URL(`https://${config.subdomain}.${subscriptionDomain}`);
        // Staging and Dev don't support going through the os.tc domain
        if (buildEnv !== EnvironmentKind["EnvironmentKind"].Production) {
            return [legacyDomainUrl];
        }
        // Use os.tc as a first pick
        const urls = [new URL(`https://${config.subdomain}.os.tc`)];
        if (config.httpUseOneSignalCom) {
            urls.push(legacyDomainUrl);
        }
        return urls;
    }
    /**
     * Get the wildcard part of the legacy subscription domain.
     * Examples: onesignal.com, staging.onesignal.com, or localhost
     */
    static getWildcardLegacySubscriptionDomain(buildEnv) {
        const apiUrl = SdkEnvironment["default"].getOneSignalApiUrl(buildEnv);
        // Prod and Dev support domains like *.onesignal.com and *.localhost 
        let envSubdomainParts = 2;
        if (buildEnv === EnvironmentKind["EnvironmentKind"].Staging) {
            // Allow up to 3 parts so *.staging.onesignal.com works.
            envSubdomainParts = 3;
        }
        return Utils["Utils"].lastParts(apiUrl.host, ".", envSubdomainParts);
    }
    /**
     * Returns the URL of the OneSignal proxy iFrame helper.
     */
    static getOneSignalProxyIframeUrls(config) {
        const urls = AltOriginManager_AltOriginManager.getCanonicalSubscriptionUrls(config);
        for (const url of urls) {
            url.pathname = 'webPushIframe';
        }
        return urls;
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/services/IndexedDb.js
var IndexedDb = __webpack_require__("./build/ts-to-es6/src/services/IndexedDb.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/utils/ValidatorUtils.js
class ValidatorUtils {
    static isValidUrl(url, options) {
        if (options && options.allowNull && url === null)
            return true;
        else if (options && options.allowEmpty && (url === null || url === undefined))
            return true;
        else {
            try {
                const parsedUrl = new URL(url);
                if (options && options.requireHttps) {
                    return parsedUrl.protocol === 'https:';
                }
                else
                    return true;
            }
            catch (e) {
                return false;
            }
        }
    }
    static isValidBoolean(bool, options) {
        if (options && options.allowNull && bool === null)
            return true;
        else
            return bool === true || bool === false;
    }
    static isValidArray(array, options) {
        if (options && options.allowNull && array === null)
            return true;
        else if (options && options.allowEmpty && (array === null || array === undefined))
            return true;
        else
            return array instanceof Array;
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/models/EmailProfile.js
var EmailProfile = __webpack_require__("./build/ts-to-es6/src/models/EmailProfile.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/utils/ProcessOneSignalPushCalls.js

class ProcessOneSignalPushCalls_ProcessOneSignalPushCalls {
    static processItem(oneSignalInstance, item) {
        if (typeof (item) === "function")
            item();
        else if (Array.isArray(item)) {
            if (item.length == 0)
                throw new OneSignalError["default"]("Empty array is not valid!");
            const functionName = item.shift();
            if (functionName == null || typeof (functionName) === "undefined")
                throw new OneSignalError["default"]("First element in array must be the OneSignal function name");
            const oneSignalFunction = oneSignalInstance[functionName.toString()];
            if (typeof (oneSignalFunction) !== "function")
                throw new OneSignalError["default"](`No OneSignal function with the name '${functionName}'`);
            oneSignalFunction.apply(oneSignalInstance, item);
        }
        else
            throw new OneSignalError["default"]("Only accepts function and Array types!");
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/helpers/shared/OutcomesHelper.js
var OutcomesHelper = __webpack_require__("./build/ts-to-es6/src/helpers/shared/OutcomesHelper.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/Outcomes.js
var Outcomes = __webpack_require__("./build/ts-to-es6/src/models/Outcomes.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/OneSignal.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OneSignal_OneSignal; });








































class OneSignal_OneSignal {
    /**
     * Pass in the full URL of the default page you want to open when a notification is clicked.
     * @PublicApi
     */
    static setDefaultNotificationUrl(url) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!ValidatorUtils.isValidUrl(url, { allowNull: true }))
                throw new InvalidArgumentError["InvalidArgumentError"]('url', InvalidArgumentError["InvalidArgumentReason"].Malformed);
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('setDefaultNotificationUrl', url);
            const appState = yield Database["default"].getAppState();
            appState.defaultNotificationUrl = url;
            yield Database["default"].setAppState(appState);
        });
    }
    /**
     * Sets the default title to display on notifications. Will default to the site name provided
     * on the dashboard if you don't call this.
     * @remarks Either DB value defaultTitle or pageTitle is used when showing a notification title.
     * @PublicApi
     */
    static setDefaultTitle(title) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('setDefaultTitle', title);
            const appState = yield Database["default"].getAppState();
            appState.defaultNotificationTitle = title;
            yield Database["default"].setAppState(appState);
        });
    }
    /**
     * @PublicApi
     */
    static setEmail(email, options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!email) {
                throw new InvalidArgumentError["InvalidArgumentError"]('email', InvalidArgumentError["InvalidArgumentReason"].Empty);
            }
            if (!Object(utils["isValidEmail"])(email)) {
                throw new InvalidArgumentError["InvalidArgumentError"]('email', InvalidArgumentError["InvalidArgumentReason"].Malformed);
            }
            const isIdentifierAuthHashDefined = options && !!options.identifierAuthHash;
            const isEmailAuthHashDefined = options && !!options.emailAuthHash;
            const authHash = isIdentifierAuthHashDefined ? options.identifierAuthHash :
                (isEmailAuthHashDefined ? options.emailAuthHash : undefined);
            if (!!authHash) {
                if (isIdentifierAuthHashDefined && isEmailAuthHashDefined) {
                    Log["default"].error("Both `emailAuthHash` and `identifierAuthHash` provided.");
                    throw new InvalidArgumentError["InvalidArgumentError"]('options', InvalidArgumentError["InvalidArgumentReason"].Malformed);
                }
                // identifierAuthHash / emailAuthHash are expected to be a 64 character SHA-256 hex hash
                const isIdentifierAuthHashMalformed = isIdentifierAuthHashDefined && options.identifierAuthHash.length !== 64;
                const isEmailAuthHashIsMalformed = isEmailAuthHashDefined && options.emailAuthHash.length !== 64;
                if (isIdentifierAuthHashMalformed) {
                    throw new InvalidArgumentError["InvalidArgumentError"]('options.identifierAuthHash', InvalidArgumentError["InvalidArgumentReason"].Malformed);
                }
                if (isEmailAuthHashIsMalformed) {
                    throw new InvalidArgumentError["InvalidArgumentError"]('options.emailAuthHash', InvalidArgumentError["InvalidArgumentReason"].Malformed);
                }
            }
            Object(utils["logMethodCall"])('setEmail', email, options);
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            const appConfig = yield Database["default"].getAppConfig();
            const { deviceId } = yield Database["default"].getSubscription();
            const existingEmailProfile = yield Database["default"].getEmailProfile();
            const newEmailProfile = new EmailProfile["EmailProfile"](existingEmailProfile.emailId, email, authHash);
            const isExistingEmailSaved = !!existingEmailProfile.emailId;
            if (isExistingEmailSaved) {
                // If we already have a saved email player ID, make a PUT call to update the existing email record
                newEmailProfile.emailId = yield OneSignalApi_OneSignalApi.updateEmailRecord(appConfig, newEmailProfile, deviceId);
            }
            else {
                // Otherwise, make a POST call to create a new email record
                newEmailProfile.emailId = yield OneSignalApi_OneSignalApi.createEmailRecord(appConfig, newEmailProfile, deviceId);
            }
            // If we are subscribed to web push
            const isExistingPushRecordSaved = deviceId;
            // And if we previously saved an email ID and it's different from the new returned ID
            const emailPreviouslySavedAndDifferent = !isExistingEmailSaved ||
                existingEmailProfile.emailId !== newEmailProfile.emailId;
            // Or if we previously saved an email and the email changed
            const emailPreviouslySavedAndChanged = !existingEmailProfile.emailAddress ||
                newEmailProfile.emailAddress !== existingEmailProfile.emailAddress;
            if (!!deviceId && isExistingPushRecordSaved && (emailPreviouslySavedAndDifferent || emailPreviouslySavedAndChanged)) {
                const authHash = yield OneSignal_OneSignal.database.getExternalUserIdAuthHash();
                // Then update the push device record with a reference to the new email ID and email address
                yield OneSignalApi_OneSignalApi.updatePlayer(appConfig.appId, deviceId, {
                    parent_player_id: newEmailProfile.emailId,
                    email: newEmailProfile.emailAddress,
                    external_user_id_auth_hash: authHash
                });
            }
            // email record update / create call returned successfully
            if (!!newEmailProfile.emailId) {
                yield Database["default"].setEmailProfile(newEmailProfile);
            }
            return newEmailProfile.emailId;
        });
    }
    /**
     * @PublicApi
     */
    static logoutEmail() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            const appConfig = yield Database["default"].getAppConfig();
            const emailProfile = yield Database["default"].getEmailProfile();
            const { deviceId } = yield Database["default"].getSubscription();
            if (!emailProfile.emailId) {
                Log["default"].warn(new NotSubscribedError_NotSubscribedError(NotSubscribedError_NotSubscribedReason.NoEmailSet));
                return;
            }
            if (!deviceId) {
                Log["default"].warn(new NotSubscribedError_NotSubscribedError(NotSubscribedError_NotSubscribedReason.NoDeviceId));
                return;
            }
            if (!(yield OneSignalApi_OneSignalApi.logoutEmail(appConfig, emailProfile, deviceId))) {
                Log["default"].warn("Failed to logout email.");
                return;
            }
            yield Database["default"].setEmailProfile(new EmailProfile["EmailProfile"]());
        });
    }
    /**
     * Returns true if the current browser supports web push.
     * @PublicApi
     */
    static isPushNotificationsSupported() {
        Object(utils["logMethodCall"])('isPushNotificationsSupported');
        /*
          Push notification support is checked in the initial entry code. If in an unsupported environment, a stubbed empty
          version of the SDK will be loaded instead. This file will only be loaded if push notifications are supported.
         */
        return true;
    }
    static initializeConfig(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const appConfig = yield new ConfigManager_ConfigManager().getAppConfig(options);
            Log["default"].debug(`OneSignal: Final web app config: %c${JSON.stringify(appConfig, null, 4)}`, Object(utils["getConsoleStyle"])('code'));
            // TODO: environmentInfo is explicitly dependent on existence of OneSignal.config. Needs refactor.
            // Workaround to temp assign config so that it can be used in context.
            OneSignal_OneSignal.config = appConfig;
            OneSignal_OneSignal.environmentInfo = EnvironmentInfoHelper_EnvironmentInfoHelper.getEnvironmentInfo();
            OneSignal_OneSignal.context = new Context_Context(appConfig);
            OneSignal_OneSignal.config = OneSignal_OneSignal.context.appConfig;
        });
    }
    /**
     * Initializes the SDK, called by the developer.
     * @PublicApi
     */
    static init(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Object(utils["logMethodCall"])('init');
            yield InitHelper_InitHelper.polyfillSafariFetch();
            InitHelper_InitHelper.errorIfInitAlreadyCalled();
            yield OneSignal_OneSignal.initializeConfig(options);
            if (!OneSignal_OneSignal.config) {
                throw new Error("OneSignal config not initialized!");
            }
            if (bowser_default.a.safari && !OneSignal_OneSignal.config.safariWebId) {
                /**
                 * Don't throw an error for missing Safari config; many users set up
                 * support on Chrome/Firefox and don't intend to support Safari but don't
                 * place conditional initialization checks.
                 */
                Log["default"].warn(new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.MissingSafariWebId));
                return;
            }
            if (OneSignal_OneSignal.config.userConfig.requiresUserPrivacyConsent) {
                const providedConsent = yield Database["default"].getProvideUserConsent();
                if (!providedConsent) {
                    OneSignal_OneSignal.pendingInit = true;
                    return;
                }
            }
            yield OneSignal_OneSignal.delayedInit();
        });
    }
    static delayedInit() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            OneSignal_OneSignal.pendingInit = false;
            // Ignore Promise as doesn't return until the service worker becomes active.
            OneSignal_OneSignal.context.workerMessenger.listen();
            function __init() {
                return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                    if (OneSignal_OneSignal.__initAlreadyCalled)
                        return;
                    OneSignal_OneSignal.__initAlreadyCalled = true;
                    OneSignal_OneSignal.emitter.on(OneSignal_OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, EventHelper_EventHelper.onNotificationPermissionChange);
                    OneSignal_OneSignal.emitter.on(OneSignal_OneSignal.EVENTS.SUBSCRIPTION_CHANGED, EventHelper_EventHelper._onSubscriptionChanged);
                    OneSignal_OneSignal.emitter.on(OneSignal_OneSignal.EVENTS.SDK_INITIALIZED, InitHelper_InitHelper.onSdkInitialized);
                    if (OneSignalUtils["default"].isUsingSubscriptionWorkaround()) {
                        /**
                         * The user may have forgot to choose a subdomain in his web app setup.
                         *
                         * Or, the user may have an HTTP & HTTPS site while using an HTTPS-only
                         * config on both variants. This would cause the HTTPS site to work
                         * perfectly, while causing errors and preventing web push from working
                         * on the HTTP site.
                         */
                        if (!OneSignal_OneSignal.config || !OneSignal_OneSignal.config.subdomain)
                            throw new SdkInitError_SdkInitError(SdkInitError_SdkInitErrorKind.MissingSubdomain);
                        /**
                         * We'll need to set up page activity tracking events on the main page but we can do so
                         * only after the main initialization in the iframe is successful and a new session
                         * is initiated.
                         */
                        OneSignal_OneSignal.emitter.on(OneSignal_OneSignal.EVENTS.SESSION_STARTED, SessionManager_SessionManager.setupSessionEventListenersForHttp);
                        /**
                         * The iFrame may never load (e.g. OneSignal might be down), in which
                         * case the rest of the SDK's initialization will be blocked. This is a
                         * good thing! We don't want to access IndexedDb before we know which
                         * origin to store data on.
                         */
                        OneSignal_OneSignal.proxyFrameHost = yield AltOriginManager_AltOriginManager.discoverAltOrigin(OneSignal_OneSignal.config);
                    }
                    window.addEventListener('focus', () => {
                        // Checks if permission changed every time a user focuses on the page,
                        //     since a user has to click out of and back on the page to check permissions
                        MainHelper_MainHelper.checkAndTriggerNotificationPermissionChanged();
                    });
                    yield InitHelper_InitHelper.initSaveState();
                    yield InitHelper_InitHelper.saveInitOptions();
                    if (SdkEnvironment["default"].getWindowEnv() === WindowEnvironmentKind["WindowEnvironmentKind"].CustomIframe)
                        yield Event["default"].trigger(OneSignal_OneSignal.EVENTS.SDK_INITIALIZED);
                    else
                        yield InitHelper_InitHelper.internalInit();
                });
            }
            if (document.readyState === 'complete' || document.readyState === 'interactive')
                yield __init();
            else {
                Log["default"].debug('OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing' +
                    ' initialization...');
                window.addEventListener('DOMContentLoaded', () => { __init(); });
                document.onreadystatechange = () => {
                    if (document.readyState === 'complete' || document.readyState === 'interactive')
                        __init();
                };
            }
        });
    }
    /**
     * Call after user accepts your user consent agreement
     * @PublicApi
     */
    static provideUserConsent(consent) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Database["default"].setProvideUserConsent(consent);
            if (consent && OneSignal_OneSignal.pendingInit)
                yield OneSignal_OneSignal.delayedInit();
        });
    }
    /**
     * Prompts the user to subscribe using the remote local notification workaround for HTTP sites.
     * @PublicApi
     */
    static showHttpPermissionRequest(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log["default"].debug('Called showHttpPermissionRequest(), redirecting to HTTP prompt.');
            OneSignal_OneSignal.showHttpPrompt(options).catch(e => Log["default"].info(e));
        });
    }
    /**
     * Shows a sliding modal prompt on the page for users to trigger the HTTP popup window to subscribe.
     * @PublicApi
     */
    static showHttpPrompt(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            yield OneSignal_OneSignal.context.promptsManager.internalShowSlidedownPrompt(options);
        });
    }
    /**
     * Shows a native browser prompt.
     * @PublicApi
     */
    static showNativePrompt() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            yield OneSignal_OneSignal.context.promptsManager.internalShowNativePrompt();
        });
    }
    /**
     * Shows a sliding modal prompt on the page for users.
     * @PublicApi
     */
    static showSlidedownPrompt(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            yield OneSignal_OneSignal.context.promptsManager.internalShowSlidedownPrompt(options);
        });
    }
    static showCategorySlidedown(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            const isPushEnabled = LocalStorage_LocalStorage.getIsPushNotificationsEnabled();
            yield OneSignal_OneSignal.context.promptsManager.internalShowCategorySlidedown(Object.assign(Object.assign({}, options), { isInUpdateMode: isPushEnabled }));
        });
    }
    /**
     * Prompts the user to subscribe.
     * @PublicApi
     */
    static registerForPushNotifications(options) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!OneSignal_OneSignal.initialized) {
                yield new Promise((resolve, _reject) => {
                    OneSignal_OneSignal.emitter.once(OneSignal_OneSignal.EVENTS.SDK_INITIALIZED, () => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                        yield InitHelper_InitHelper.registerForPushNotifications(options);
                        return resolve();
                    }));
                });
            }
            else
                return yield InitHelper_InitHelper.registerForPushNotifications(options);
        });
    }
    /**
     * Returns a promise that resolves to the browser's current notification permission as
     *    'default', 'granted', or 'denied'.
     * @param callback A callback function that will be called when the browser's current notification permission
     *           has been obtained, with one of 'default', 'granted', or 'denied'.
     * @PublicApi
     */
    static getNotificationPermission(onComplete) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            return OneSignal_OneSignal.privateGetNotificationPermission(onComplete);
        });
    }
    static privateGetNotificationPermission(onComplete) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const permission = yield OneSignal_OneSignal.context.permissionManager.getNotificationPermission(OneSignal_OneSignal.config.safariWebId);
            if (onComplete)
                onComplete(permission);
            return permission;
        });
    }
    /**
     * @PublicApi
     */
    static getTags(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('getTags', callback);
            const { appId } = yield Database["default"].getAppConfig();
            const { deviceId } = yield Database["default"].getSubscription();
            if (!deviceId) {
                // TODO: Throw an error here in future v2; for now it may break existing client implementations.
                Log["default"].info(new NotSubscribedError_NotSubscribedError(NotSubscribedError_NotSubscribedReason.NoDeviceId));
                return null;
            }
            const { tags } = yield OneSignalApi_OneSignalApi.getPlayer(appId, deviceId);
            Object(utils["executeCallback"])(callback, tags);
            return tags;
        });
    }
    /**
     * @PublicApi
     */
    static sendTag(key, value, callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const tag = {};
            tag[key] = value;
            return yield OneSignal_OneSignal.sendTags(tag, callback);
        });
    }
    /**
     * @PublicApi
     */
    static sendTags(tags, callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('sendTags', tags, callback);
            if (!tags || Object.keys(tags).length === 0) {
                // TODO: Throw an error here in future v2; for now it may break existing client implementations.
                Log["default"].info(new InvalidArgumentError["InvalidArgumentError"]('tags', InvalidArgumentError["InvalidArgumentReason"].Empty));
                return null;
            }
            // Our backend considers false as removing a tag, so convert false -> "false" to allow storing as a value
            Object.keys(tags).forEach(key => {
                if (tags[key] === false)
                    tags[key] = "false";
            });
            const { appId } = yield Database["default"].getAppConfig();
            const emailProfile = yield Database["default"].getEmailProfile();
            if (emailProfile.emailId) {
                const emailOptions = {
                    tags,
                    identifier_auth_hash: emailProfile.identifierAuthHash
                };
                yield OneSignalApi_OneSignalApi.updatePlayer(appId, emailProfile.emailId, emailOptions);
            }
            const { deviceId } = yield Database["default"].getSubscription();
            if (!deviceId) {
                yield Object(utils["awaitSdkEvent"])(OneSignal_OneSignal.EVENTS.REGISTERED);
            }
            // After the user subscribes, he will have a device ID, so get it again
            const { deviceId: newDeviceId } = yield Database["default"].getSubscription();
            const authHash = yield Database["default"].getExternalUserIdAuthHash();
            const options = { tags };
            if (!!authHash) {
                options.external_user_id_auth_hash = authHash;
            }
            yield OneSignalApi_OneSignalApi.updatePlayer(appId, newDeviceId, options);
            Object(utils["executeCallback"])(callback, tags);
            return tags;
        });
    }
    /**
     * @PublicApi
     */
    static deleteTag(tag) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield OneSignal_OneSignal.deleteTags([tag]);
        });
    }
    /**
     * @PublicApi
     */
    static deleteTags(tags, callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('deleteTags', tags, callback);
            if (!ValidatorUtils.isValidArray(tags))
                throw new InvalidArgumentError["InvalidArgumentError"]('tags', InvalidArgumentError["InvalidArgumentReason"].Malformed);
            if (tags.length === 0) {
                // TODO: Throw an error here in future v2; for now it may break existing client implementations.
                Log["default"].info(new InvalidArgumentError["InvalidArgumentError"]('tags', InvalidArgumentError["InvalidArgumentReason"].Empty));
            }
            const tagsToSend = {};
            for (const tag of tags) {
                tagsToSend[tag] = '';
            }
            const deletedTags = yield OneSignal_OneSignal.sendTags(tagsToSend);
            if (deletedTags) {
                const deletedTagKeys = Object.keys(deletedTags);
                Object(utils["executeCallback"])(callback, deletedTagKeys);
                return deletedTagKeys;
            }
            return [];
        });
    }
    /**
     * @PublicApi
     */
    static setExternalUserId(externalUserId, authHash) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])("setExternalUserId");
            if (!!authHash) {
                if (authHash.length !== 64) {
                    throw new InvalidArgumentError["InvalidArgumentError"]('options.identifierAuthHash', InvalidArgumentError["InvalidArgumentReason"].Malformed);
                }
            }
            const isExistingUser = yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
            if (!isExistingUser) {
                yield Object(utils["awaitSdkEvent"])(OneSignal_OneSignal.EVENTS.REGISTERED);
            }
            const response = yield OneSignal_OneSignal.context.updateManager.sendExternalUserIdUpdate(externalUserId, authHash);
            if (response && response.success) {
                OneSignal_OneSignal.database.setExternalUserId(externalUserId, authHash);
            }
        });
    }
    /**
    * @PublicApi
    */
    static getExternalUserId() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])("getExternalUserId");
            return yield OneSignal_OneSignal.database.getExternalUserId();
        });
    }
    /**
     * @PublicApi
     */
    static removeExternalUserId() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])("removeExternalUserId");
            const isExistingUser = yield this.context.subscriptionManager.isAlreadyRegisteredWithOneSignal();
            if (!isExistingUser) {
                Log["default"].warn("User is not subscribed, cannot remove external user id.");
                return;
            }
            yield OneSignal_OneSignal.context.updateManager.sendExternalUserIdUpdate(undefined),
                yield OneSignal_OneSignal.database.setExternalUserId(undefined);
        });
    }
    /**
     * @PublicApi
     */
    static addListenerForNotificationOpened(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('addListenerForNotificationOpened', callback);
            OneSignal_OneSignal.emitter.once(OneSignal_OneSignal.EVENTS.NOTIFICATION_CLICKED, notification => {
                Object(utils["executeCallback"])(callback, notification);
            });
            if (OneSignal_OneSignal.config) {
                EventHelper_EventHelper.fireStoredNotificationClicks(OneSignal_OneSignal.config.pageUrl || OneSignal_OneSignal.config.userConfig.pageUrl);
            }
        });
    }
    /**
     * @PublicApi
     * @Deprecated
     */
    static getIdsAvailable(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('getIdsAvailable', callback);
            const { deviceId, subscriptionToken } = yield Database["default"].getSubscription();
            const bundle = {
                userId: deviceId,
                registrationId: subscriptionToken
            };
            Object(utils["executeCallback"])(callback, bundle);
            return bundle;
        });
    }
    /**
     * Returns a promise that resolves to true if all required conditions
     * for push messaging are met; otherwise resolves to false.
     * @param callback A callback function that will be called when the current subscription status has been obtained.
     * @PublicApi
     */
    static isPushNotificationsEnabled(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            return OneSignal_OneSignal.privateIsPushNotificationsEnabled(callback);
        });
    }
    static privateIsPushNotificationsEnabled(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Object(utils["logMethodCall"])('isPushNotificationsEnabled', callback);
            const context = OneSignal_OneSignal.context;
            const subscriptionState = yield context.subscriptionManager.getSubscriptionState();
            Object(utils["executeCallback"])(callback, subscriptionState.subscribed && !subscriptionState.optedOut);
            return subscriptionState.subscribed && !subscriptionState.optedOut;
        });
    }
    /**
     * @PublicApi
     */
    static setSubscription(newSubscription) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('setSubscription', newSubscription);
            const appConfig = yield Database["default"].getAppConfig();
            const { appId } = appConfig;
            const subscription = yield Database["default"].getSubscription();
            const { deviceId } = subscription;
            if (!appConfig.appId)
                throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].MissingAppId);
            if (!ValidatorUtils.isValidBoolean(newSubscription))
                throw new InvalidArgumentError["InvalidArgumentError"]('newSubscription', InvalidArgumentError["InvalidArgumentReason"].Malformed);
            if (!deviceId) {
                // TODO: Throw an error here in future v2; for now it may break existing client implementations.
                Log["default"].info(new NotSubscribedError_NotSubscribedError(NotSubscribedError_NotSubscribedReason.NoDeviceId));
                return;
            }
            const options = {
                notification_types: MainHelper_MainHelper.getNotificationTypeFromOptIn(newSubscription)
            };
            const authHash = yield Database["default"].getExternalUserIdAuthHash();
            if (!!authHash) {
                options.external_user_id_auth_hash = authHash;
            }
            subscription.optedOut = !newSubscription;
            yield OneSignalApi_OneSignalApi.updatePlayer(appId, deviceId, options);
            yield Database["default"].setSubscription(subscription);
            EventHelper_EventHelper.onInternalSubscriptionSet(subscription.optedOut);
            EventHelper_EventHelper.checkAndTriggerSubscriptionChanged();
        });
    }
    /**
     * @PendingPublicApi
     */
    static isOptedOut(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            return OneSignal_OneSignal.internalIsOptedOut(callback);
        });
    }
    static internalIsOptedOut(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Object(utils["logMethodCall"])('isOptedOut', callback);
            const { optedOut } = yield Database["default"].getSubscription();
            Object(utils["executeCallback"])(callback, optedOut);
            return optedOut;
        });
    }
    /**
     * Returns a promise that resolves once the manual subscription override has been set.
     * @private
     * @PendingPublicApi
     */
    static optOut(doOptOut, callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('optOut', doOptOut, callback);
            if (!ValidatorUtils.isValidBoolean(doOptOut))
                throw new InvalidArgumentError["InvalidArgumentError"]('doOptOut', InvalidArgumentError["InvalidArgumentReason"].Malformed);
            yield OneSignal_OneSignal.setSubscription(!doOptOut);
            Object(utils["executeCallback"])(callback);
        });
    }
    /**
     * Returns a promise that resolves to the stored OneSignal email ID if one is set; otherwise null.
     * @param callback A function accepting one parameter for the OneSignal email ID.
     * @PublicApi
     */
    static getEmailId(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('getEmailId', callback);
            const emailProfile = yield Database["default"].getEmailProfile();
            const emailId = emailProfile.emailId;
            Object(utils["executeCallback"])(callback, emailId);
            return emailId;
        });
    }
    /**
     * Returns a promise that resolves to the stored OneSignal user ID if one is set; otherwise null.
     * @param callback A function accepting one parameter for the OneSignal user ID.
     * @PublicApi
     */
    static getUserId(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('getUserId', callback);
            const subscription = yield Database["default"].getSubscription();
            const deviceId = subscription.deviceId;
            Object(utils["executeCallback"])(callback, deviceId);
            return deviceId;
        });
    }
    /**
     * Returns a promise that resolves to the stored push token if one is set; otherwise null.
     * @PublicApi
     */
    static getRegistrationId(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('getRegistrationId', callback);
            const subscription = yield Database["default"].getSubscription();
            const subscriptionToken = subscription.subscriptionToken;
            Object(utils["executeCallback"])(callback, subscriptionToken);
            return subscriptionToken;
        });
    }
    /**
     * Returns a promise that resolves to false if setSubscription(false) is "in effect". Otherwise returns true.
     * This means a return value of true does not mean the user is subscribed, only that the user did not call
     * setSubcription(false).
     * @private
     * @PublicApi (given to customers)
     */
    static getSubscription(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            return yield OneSignal_OneSignal.privateGetSubscription(callback);
        });
    }
    static privateGetSubscription(callback) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Object(utils["logMethodCall"])('getSubscription', callback);
            const subscription = yield Database["default"].getSubscription();
            const subscriptionStatus = !subscription.optedOut;
            Object(utils["executeCallback"])(callback, subscriptionStatus);
            return subscriptionStatus;
        });
    }
    /**
     * @PublicApi
     */
    static sendSelfNotification(title = 'OneSignal Test Message', message = 'This is an example notification.', url = `${new URL(location.href).origin}?_osp=do_not_open`, icon, data, buttons) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(utils["awaitOneSignalInitAndSupported"])();
            Object(utils["logMethodCall"])('sendSelfNotification', title, message, url, icon, data, buttons);
            const appConfig = yield Database["default"].getAppConfig();
            const subscription = yield Database["default"].getSubscription();
            if (!appConfig.appId)
                throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].MissingAppId);
            if (!(yield OneSignal_OneSignal.isPushNotificationsEnabled()))
                throw new NotSubscribedError_NotSubscribedError(NotSubscribedError_NotSubscribedReason.NoDeviceId);
            if (!ValidatorUtils.isValidUrl(url))
                throw new InvalidArgumentError["InvalidArgumentError"]('url', InvalidArgumentError["InvalidArgumentReason"].Malformed);
            if (!ValidatorUtils.isValidUrl(icon, { allowEmpty: true, requireHttps: true }))
                throw new InvalidArgumentError["InvalidArgumentError"]('icon', InvalidArgumentError["InvalidArgumentReason"].Malformed);
            if (subscription.deviceId) {
                yield OneSignalApi_OneSignalApi.sendNotification(appConfig.appId, [subscription.deviceId], { en: title }, { en: message }, url, icon, data, buttons);
            }
        });
    }
    /**
     * Used to load OneSignal asynchronously from a webpage
     * Allows asynchronous function queuing while the SDK loads in the browser with <script src="..." async/>
     * @PublicApi
     * @param item - Ether a function or an arry with a OneSignal function name followed by it's parameters
     * @Example
     *  OneSignal.push(["functionName", param1, param2]);
     *  OneSignal.push(function() { OneSignal.functionName(param1, param2); });
     */
    static push(item) {
        ProcessOneSignalPushCalls_ProcessOneSignalPushCalls.processItem(OneSignal_OneSignal, item);
    }
    /**
     * Used to subscribe to OneSignal events such as "subscriptionChange"
     * Fires each time the event occurs
     * @param event - Event name to subscribe to
     * @param listener - Listener to fire when event happens
     * @PublicApi
     */
    static on(event, listener) {
        return this.emitter.on(event, listener);
    }
    /**
     * Used to un-subscribe from OneSignal events such as "subscriptionChange"
     * @param event - Event name to un-subscribe from
     * @param listener - Event listener to remove from the collection for a specified event
     * @PublicApi
     */
    static off(event, listener) {
        return this.emitter.off(event, listener);
    }
    /**
     * Used to subscribe to OneSignal events such as "subscriptionChange"
     * Fires only once
     * @param event - Event name to subscribe to
     * @param listener - Listener to fire when event happens
     * @PublicApi
     */
    static once(event, listener) {
        return this.emitter.once(event, listener);
    }
    static sendOutcome(outcomeName, outcomeWeight) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const config = OneSignal_OneSignal.config.userConfig.outcomes;
            if (!config) {
                Log["default"].error(`Could not send ${outcomeName}. No outcomes config found.`);
                return;
            }
            const outcomesHelper = new OutcomesHelper["default"](OneSignal_OneSignal.config.appId, config, outcomeName, false);
            if (typeof outcomeWeight !== "undefined" && typeof outcomeWeight !== "number") {
                Log["default"].error("Outcome weight can only be a number if present.");
                return;
            }
            if (!(yield outcomesHelper.beforeOutcomeSend())) {
                return;
            }
            const outcomeAttribution = yield outcomesHelper.getAttribution();
            yield outcomesHelper.send({
                type: outcomeAttribution.type,
                notificationIds: outcomeAttribution.notificationIds,
                weight: outcomeWeight
            });
        });
    }
    static sendUniqueOutcome(outcomeName) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const config = OneSignal_OneSignal.config.userConfig.outcomes;
            if (!config) {
                Log["default"].error(`Could not send ${outcomeName}. No outcomes config found.`);
                return;
            }
            const outcomesHelper = new OutcomesHelper["default"](OneSignal_OneSignal.config.appId, config, outcomeName, true);
            if (!(yield outcomesHelper.beforeOutcomeSend())) {
                return;
            }
            const outcomeAttribution = yield outcomesHelper.getAttribution();
            if (outcomeAttribution.type === Outcomes["OutcomeAttributionType"].NotSupported) {
                Log["default"].warn("You are on a free plan. Please upgrade to use this functionality.");
                return;
            }
            // all notifs in attribution window
            const { notificationIds } = outcomeAttribution;
            // only new notifs that ought to be attributed
            const newNotifsToAttributeWithOutcome = yield outcomesHelper.getNotifsToAttributeWithUniqueOutcome(notificationIds);
            if (!outcomesHelper.shouldSendUnique(outcomeAttribution, newNotifsToAttributeWithOutcome)) {
                Log["default"].warn(`'${outcomeName}' was already reported for all notifications.`);
                return;
            }
            yield outcomesHelper.send({
                type: outcomeAttribution.type,
                notificationIds: newNotifsToAttributeWithOutcome,
            });
        });
    }
}
OneSignal_OneSignal.VERSION = Environment["default"].version();
OneSignal_OneSignal._VERSION = Environment["default"].version();
OneSignal_OneSignal.sdkEnvironment = SdkEnvironment["default"];
OneSignal_OneSignal._notificationOpenedCallbacks = [];
OneSignal_OneSignal._idsAvailable_callback = [];
OneSignal_OneSignal._defaultLaunchURL = null;
OneSignal_OneSignal.config = null;
OneSignal_OneSignal._sessionInitAlreadyRunning = false;
OneSignal_OneSignal._isNotificationEnabledCallback = [];
OneSignal_OneSignal._subscriptionSet = true;
OneSignal_OneSignal.modalUrl = null;
OneSignal_OneSignal._windowWidth = 650;
OneSignal_OneSignal._windowHeight = 568;
OneSignal_OneSignal._isNewVisitor = false;
OneSignal_OneSignal._channel = null;
OneSignal_OneSignal.timedLocalStorage = TimedLocalStorage;
OneSignal_OneSignal.initialized = false;
OneSignal_OneSignal.notifyButton = null;
OneSignal_OneSignal.store = LimitStore;
OneSignal_OneSignal.environment = Environment["default"];
OneSignal_OneSignal.database = Database["default"];
OneSignal_OneSignal.event = Event["default"];
OneSignal_OneSignal.browser = bowser_default.a;
OneSignal_OneSignal.slidedown = null;
OneSignal_OneSignal.log = Log["default"];
OneSignal_OneSignal.api = OneSignalApi_OneSignalApi;
OneSignal_OneSignal.indexedDb = IndexedDb["default"];
OneSignal_OneSignal.mainHelper = MainHelper_MainHelper;
OneSignal_OneSignal.subscriptionHelper = SubscriptionHelper_SubscriptionHelper;
OneSignal_OneSignal.httpHelper = HttpHelper_HttpHelper;
OneSignal_OneSignal.eventHelper = EventHelper_EventHelper;
OneSignal_OneSignal.initHelper = InitHelper_InitHelper;
OneSignal_OneSignal.testHelper = TestHelper_TestHelper;
OneSignal_OneSignal.pendingInit = true;
OneSignal_OneSignal.emitter = new Emitter["default"]();
OneSignal_OneSignal.cache = {};
/**
 * The additional path to the worker file.
 *
 * Usually just the filename (in case the file is named differently), but also supports cases where the folder
 * is different.
 *
 * However, the init options 'path' should be used to specify the folder path instead since service workers will not
 * auto-update correctly on HTTPS site load if the config init options 'path' is not set.
 */
OneSignal_OneSignal.SERVICE_WORKER_UPDATER_PATH = 'OneSignalSDKUpdaterWorker.js';
OneSignal_OneSignal.SERVICE_WORKER_PATH = 'OneSignalSDKWorker.js';
/**
 * By default, the service worker is expected to be accessible at the root scope. If the service worker is only
 * available with in a sub-directory, SERVICE_WORKER_PARAM must be changed to the sub-directory (with a trailing
 * slash). This would allow pages to function correctly as not to block the service worker ready call, which would
 * hang indefinitely if we requested root scope registration but the service was only available in a child scope.
 */
OneSignal_OneSignal.SERVICE_WORKER_PARAM = { scope: '/' };
OneSignal_OneSignal._LOGGING = false;
OneSignal_OneSignal.LOGGING = false;
OneSignal_OneSignal._usingNativePermissionHook = false;
OneSignal_OneSignal._initCalled = false;
OneSignal_OneSignal.__initAlreadyCalled = false;
OneSignal_OneSignal.checkAndWipeUserSubscription = function () { };
OneSignal_OneSignal.DeviceRecord = DeviceRecord["DeviceRecord"];
OneSignal_OneSignal.EmailDeviceRecord = EmailDeviceRecord_EmailDeviceRecord;
OneSignal_OneSignal.notificationPermission = NotificationPermission;
/**
 * Used by Rails-side HTTP popup. Must keep the same name.
 * @InternalApi
 */
OneSignal_OneSignal._initHttp = HttpHelper_HttpHelper.initHttp;
/**
 * Used by Rails-side HTTP popup. Must keep the same name.
 * @InternalApi
 */
OneSignal_OneSignal._initPopup = () => OneSignal_OneSignal.subscriptionPopup.subscribe();
OneSignal_OneSignal.POSTMAM_COMMANDS = {
    CONNECTED: 'connect',
    REMOTE_NOTIFICATION_PERMISSION: 'postmam.remoteNotificationPermission',
    REMOTE_DATABASE_GET: 'postmam.remoteDatabaseGet',
    REMOTE_DATABASE_GET_ALL: 'postmam.remoteDatabaseGetAll',
    REMOTE_DATABASE_PUT: 'postmam.remoteDatabasePut',
    REMOTE_DATABASE_REMOVE: 'postmam.remoteDatabaseRemove',
    REMOTE_OPERATION_COMPLETE: 'postman.operationComplete',
    REMOTE_RETRIGGER_EVENT: 'postmam.remoteRetriggerEvent',
    MODAL_LOADED: 'postmam.modalPrompt.loaded',
    MODAL_PROMPT_ACCEPTED: 'postmam.modalPrompt.accepted',
    MODAL_PROMPT_REJECTED: 'postmam.modalPrompt.canceled',
    POPUP_LOADED: 'postmam.popup.loaded',
    POPUP_ACCEPTED: 'postmam.popup.accepted',
    POPUP_REJECTED: 'postmam.popup.canceled',
    POPUP_CLOSING: 'postman.popup.closing',
    REMOTE_NOTIFICATION_PERMISSION_CHANGED: 'postmam.remoteNotificationPermissionChanged',
    IFRAME_POPUP_INITIALIZE: 'postmam.iframePopupInitialize',
    UNSUBSCRIBE_FROM_PUSH: 'postmam.unsubscribeFromPush',
    SET_SESSION_COUNT: 'postmam.setSessionCount',
    REQUEST_HOST_URL: 'postmam.requestHostUrl',
    WINDOW_TIMEOUT: 'postmam.windowTimeout',
    FINISH_REMOTE_REGISTRATION: 'postmam.finishRemoteRegistration',
    FINISH_REMOTE_REGISTRATION_IN_PROGRESS: 'postmam.finishRemoteRegistrationInProgress',
    POPUP_BEGIN_MESSAGEPORT_COMMS: 'postmam.beginMessagePortComms',
    SERVICEWORKER_COMMAND_REDIRECT: 'postmam.command.redirect',
    MARK_PROMPT_DISMISSED: 'postmam.markPromptDismissed',
    IS_SUBSCRIBED: 'postmam.isSubscribed',
    UNSUBSCRIBE_PROXY_FRAME: 'postman.unsubscribeProxyFrame',
    GET_EVENT_LISTENER_COUNT: 'postmam.getEventListenerCount',
    SERVICE_WORKER_STATE: 'postmam.serviceWorkerState',
    GET_WORKER_VERSION: 'postmam.getWorkerVersion',
    SUBSCRIPTION_EXPIRATION_STATE: 'postmam.subscriptionExpirationState',
    PROCESS_EXPIRING_SUBSCRIPTIONS: 'postmam.processExpiringSubscriptions',
    GET_SUBSCRIPTION_STATE: 'postmam.getSubscriptionState',
    SESSION_UPSERT: 'postmam.sessionUpsert',
    SESSION_DEACTIVATE: 'postmam.sessionDeactivate',
    ARE_YOU_VISIBLE_REQUEST: 'postmam.areYouVisibleRequest',
    ARE_YOU_VISIBLE_RESPONSE: 'postmam.areYouVisibleResponse',
};
OneSignal_OneSignal.EVENTS = {
    /**
     * Occurs when the user clicks the "Continue" or "No Thanks" button on the HTTP popup or HTTPS modal prompt.
     * For HTTP sites (and HTTPS sites using the modal prompt), this event is fired before the native permission
     * prompt is shown. This event is mostly used for HTTP sites.
     */
    CUSTOM_PROMPT_CLICKED: 'customPromptClick',
    /**
     * Occurs when the user clicks "Allow" or "Block" on the native permission prompt on Chrome, Firefox, or Safari.
     * This event is used for both HTTP and HTTPS sites and occurs after the user actually grants notification
     * permissions for the site. Occurs before the user is actually subscribed to push notifications.
     */
    NATIVE_PROMPT_PERMISSIONCHANGED: 'notificationPermissionChange',
    /**
     * Occurs after the user is officially subscribed to push notifications. The service worker is fully registered
     * and activated and the user is eligible to receive push notifications at any point after this.
     */
    SUBSCRIPTION_CHANGED: 'subscriptionChange',
    /**
     * Occurs after a POST call to OneSignal's server to send the welcome notification has completed. The actual
     * notification arrives shortly after.
     */
    WELCOME_NOTIFICATION_SENT: 'sendWelcomeNotification',
    /**
     * Occurs when a notification is displayed.
     */
    NOTIFICATION_DISPLAYED: 'notificationDisplay',
    /**
     * Occurs when a notification is dismissed by the user either clicking 'X' or clearing all notifications
     * (available in Android). This event is NOT called if the user clicks the notification's body or any of the
     * action buttons.
     */
    NOTIFICATION_DISMISSED: 'notificationDismiss',
    /**
     * New event replacing legacy addNotificationOpenedHandler(). Used when the notification was clicked.
     */
    NOTIFICATION_CLICKED: 'notificationClick',
    /**
     * Occurs after the document ready event fires and, for HTTP sites, the iFrame to subdomain.onesignal.com has
     * loaded.
     * Before this event, IndexedDB access is not possible for HTTP sites.
     */
    SDK_INITIALIZED: 'initializeInternal',
    /**
     * Occurs after the SDK finishes its final internal initialization. The final initialization event.
     */
    SDK_INITIALIZED_PUBLIC: 'initialize',
    /**
     * Occurs after the user subscribes to push notifications and a new user entry is created on OneSignal's server,
     * and also occurs when the user begins a new site session and the last_session and last_active is updated on
     * OneSignal's server.
     */
    REGISTERED: 'register',
    /**
     * Occurs as the HTTP popup is closing.
     */
    POPUP_CLOSING: 'popupClose',
    /**
     * Occurs when the native permission prompt is displayed.
     */
    PERMISSION_PROMPT_DISPLAYED: 'permissionPromptDisplay',
    /**
     * For internal testing only. Used for all sorts of things.
     */
    TEST_INIT_OPTION_DISABLED: 'testInitOptionDisabled',
    TEST_WOULD_DISPLAY: 'testWouldDisplay',
    POPUP_WINDOW_TIMEOUT: 'popupWindowTimeout',
    SESSION_STARTED: "os.sessionStarted",
};
LegacyManager_LegacyManager.ensureBackwardsCompatibility(OneSignal_OneSignal);
Log["default"].info(`%cOneSignal Web SDK loaded (version ${OneSignal_OneSignal._VERSION},
  ${SdkEnvironment["default"].getWindowEnv().toString()} environment).`, Object(utils["getConsoleStyle"])('bold'));
Log["default"].debug(`Current Page URL: ${typeof location === "undefined" ? "NodeJS" : location.href}`);
Log["default"].debug(`Browser Environment: ${bowser_default.a.name} ${bowser_default.a.version}`);



/***/ }),

/***/ "./build/ts-to-es6/src/OneSignalApiBase.js":
/*!*************************************************!*\
  !*** ./build/ts-to-es6/src/OneSignalApiBase.js ***!
  \*************************************************/
/*! exports provided: OneSignalApiBase, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSignalApiBase", function() { return OneSignalApiBase; });
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Environment */ "./build/ts-to-es6/src/Environment.js");
/* harmony import */ var _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers/SdkEnvironment */ "./build/ts-to-es6/src/managers/SdkEnvironment.js");
/* harmony import */ var _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/shared/utils/Utils */ "./build/ts-to-es6/src/context/shared/utils/Utils.js");
/* harmony import */ var _errors_OneSignalApiError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors/OneSignalApiError */ "./build/ts-to-es6/src/errors/OneSignalApiError.js");
/* harmony import */ var _libraries_Log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js");





class OneSignalApiBase {
    static get(action, data, headers) {
        return OneSignalApiBase.call('GET', action, data, headers);
    }
    static post(action, data, headers) {
        return OneSignalApiBase.call('POST', action, data, headers);
    }
    static put(action, data, headers) {
        return OneSignalApiBase.call('PUT', action, data, headers);
    }
    static delete(action, data, headers) {
        return OneSignalApiBase.call('DELETE', action, data, headers);
    }
    static call(method, action, data, headers) {
        if (method === "GET") {
            if (action.indexOf("players") > -1 && action.indexOf("app_id=") === -1) {
                console.error("Calls to player api are not permitted without app_id");
                return Promise.reject(new _errors_OneSignalApiError__WEBPACK_IMPORTED_MODULE_3__["OneSignalApiError"](_errors_OneSignalApiError__WEBPACK_IMPORTED_MODULE_3__["OneSignalApiErrorKind"].MissingAppId));
            }
        }
        else {
            if (action.indexOf("players") > -1 && (!data || !data["app_id"])) {
                console.error("Calls to player api are not permitted without app_id");
                return Promise.reject(new _errors_OneSignalApiError__WEBPACK_IMPORTED_MODULE_3__["OneSignalApiError"](_errors_OneSignalApiError__WEBPACK_IMPORTED_MODULE_3__["OneSignalApiErrorKind"].MissingAppId));
            }
        }
        let callHeaders = new Headers();
        callHeaders.append("Origin", _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_1__["default"].getOrigin());
        callHeaders.append('SDK-Version', `onesignal/web/${_Environment__WEBPACK_IMPORTED_MODULE_0__["default"].version()}`);
        callHeaders.append('Content-Type', 'application/json;charset=UTF-8');
        if (headers) {
            for (let key of Object.keys(headers)) {
                callHeaders.append(key, headers[key]);
            }
        }
        const contents = {
            method: method || 'NO_METHOD_SPECIFIED',
            headers: callHeaders,
            cache: 'no-cache'
        };
        if (data)
            contents.body = JSON.stringify(data);
        let status;
        return fetch(_managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_1__["default"].getOneSignalApiUrl(undefined, action).toString() + '/' + action, contents)
            .then(response => {
            status = response.status;
            return response.json();
        })
            .then(json => {
            if (status >= 200 && status < 300)
                return json;
            else {
                let error = OneSignalApiBase.identifyError(json);
                if (error === 'no-user-id-error') {
                    // TODO: This returns undefined
                }
                else {
                    return Promise.reject(json);
                }
            }
        })
            .catch(err => {
            _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].warn(`Could not complete request to /${action}`, err);
            return Promise.reject(err);
        });
    }
    static identifyError(error) {
        if (!error || !error.errors) {
            return 'no-error';
        }
        let errors = error.errors;
        if (_context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].contains(errors, 'No user with this id found') ||
            _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].contains(errors, 'Could not find app_id for given player id.')) {
            return 'no-user-id-error';
        }
        return 'unknown-error';
    }
}
/* harmony default export */ __webpack_exports__["default"] = (OneSignalApiBase);



/***/ }),

/***/ "./build/ts-to-es6/src/OneSignalApiSW.js":
/*!***********************************************!*\
  !*** ./build/ts-to-es6/src/OneSignalApiSW.js ***!
  \***********************************************/
/*! exports provided: OneSignalApiSW, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSignalApiSW", function() { return OneSignalApiSW; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _OneSignalApiBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneSignalApiBase */ "./build/ts-to-es6/src/OneSignalApiBase.js");
/* harmony import */ var _models_SubscriptionStateKind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/SubscriptionStateKind */ "./build/ts-to-es6/src/models/SubscriptionStateKind.js");
/* harmony import */ var _libraries_Log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js");
/* harmony import */ var _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/shared/utils/Utils */ "./build/ts-to-es6/src/context/shared/utils/Utils.js");
/* harmony import */ var _models_Outcomes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Outcomes */ "./build/ts-to-es6/src/models/Outcomes.js");






class OneSignalApiSW {
    static downloadServerAppConfig(appId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].enforceAppId(appId);
            return yield new Promise((resolve, _reject) => {
                resolve(_OneSignalApiBase__WEBPACK_IMPORTED_MODULE_1__["OneSignalApiBase"].get(`sync/${appId}/web`, null));
            });
        });
    }
    /**
     * Given a GCM or Firefox subscription endpoint or Safari device token, returns the user ID from OneSignal's server.
     * Used if the user clears his or her IndexedDB database and we need the user ID again.
     */
    static getUserIdFromSubscriptionIdentifier(appId, deviceType, identifier) {
        // Calling POST /players with an existing identifier returns us that player ID
        _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].enforceAppId(appId);
        return _OneSignalApiBase__WEBPACK_IMPORTED_MODULE_1__["OneSignalApiBase"].post("players", {
            app_id: appId,
            device_type: deviceType,
            identifier: identifier,
            notification_types: _models_SubscriptionStateKind__WEBPACK_IMPORTED_MODULE_2__["SubscriptionStateKind"].TemporaryWebRecord,
        }).then((response) => {
            if (response && response.id) {
                return response.id;
            }
            else {
                return null;
            }
        }).catch(e => {
            _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].debug("Error getting user ID from subscription identifier:", e);
            return null;
        });
    }
    static updatePlayer(appId, playerId, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const funcToExecute = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield _OneSignalApiBase__WEBPACK_IMPORTED_MODULE_1__["OneSignalApiBase"].put(`players/${playerId}`, Object.assign({ app_id: appId }, options));
            });
            return yield _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].enforceAppIdAndPlayerId(appId, playerId, funcToExecute);
        });
    }
    static updateUserSession(userId, serializedDeviceRecord) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const funcToExecute = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const response = yield _OneSignalApiBase__WEBPACK_IMPORTED_MODULE_1__["OneSignalApiBase"].post(`players/${userId}/on_session`, serializedDeviceRecord);
                if (response.id) {
                    // A new user ID can be returned
                    return response.id;
                }
                else {
                    return userId;
                }
            });
            return yield _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].enforceAppIdAndPlayerId(serializedDeviceRecord.app_id, userId, funcToExecute);
        });
    }
    ;
    static sendSessionDuration(appId, deviceId, sessionDuration, deviceType, attribution) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const funcToExecute = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const payload = {
                    app_id: appId,
                    type: 1,
                    state: "ping",
                    active_time: sessionDuration,
                    device_type: deviceType,
                };
                switch (attribution.type) {
                    case _models_Outcomes__WEBPACK_IMPORTED_MODULE_5__["OutcomeAttributionType"].Direct:
                        payload.direct = true;
                        payload.notification_ids = attribution.notificationIds;
                        break;
                    case _models_Outcomes__WEBPACK_IMPORTED_MODULE_5__["OutcomeAttributionType"].Indirect:
                        payload.direct = false;
                        payload.notification_ids = attribution.notificationIds;
                        break;
                    default:
                        break;
                }
                yield _OneSignalApiBase__WEBPACK_IMPORTED_MODULE_1__["OneSignalApiBase"].post(`players/${deviceId}/on_focus`, payload);
            });
            _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].enforceAppIdAndPlayerId(appId, deviceId, funcToExecute);
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (OneSignalApiSW);



/***/ }),

/***/ "./build/ts-to-es6/src/context/shared/utils/Utils.js":
/*!***********************************************************************!*\
  !*** ./build/ts-to-es6/src/context/shared/utils/Utils.js + 1 modules ***!
  \***********************************************************************/
/*! exports provided: Utils, default */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/errors/OneSignalApiError.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/errors/OneSignalError.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/tslib/tslib.es6.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/errors/OneSignalError.js
var OneSignalError = __webpack_require__("./build/ts-to-es6/src/errors/OneSignalError.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/errors/TimeoutError.js

class TimeoutError_TimeoutError extends OneSignalError["default"] {
    constructor(message = "The asynchronous operation has timed out.") {
        super(message);
        this.message = message;
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, TimeoutError_TimeoutError.prototype);
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/errors/OneSignalApiError.js
var OneSignalApiError = __webpack_require__("./build/ts-to-es6/src/errors/OneSignalApiError.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/context/shared/utils/Utils.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils_Utils; });



class Utils_Utils {
    /**
     * Returns true if match is in string; otherwise, returns false.
     */
    static contains(indexOfAble, match) {
        if (!indexOfAble)
            return false;
        return indexOfAble.indexOf(match) !== -1;
    }
    static getConsoleStyle(style) {
        if (style == 'code') {
            return `padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;`;
        }
        else if (style == 'bold') {
            return `font-weight: 600;color: rgb(51, 51, 51);`;
        }
        else if (style == 'alert') {
            return `font-weight: 600;color: red;`;
        }
        else if (style == 'event') {
            return `color: green;`;
        }
        else if (style == 'postmessage') {
            return `color: orange;`;
        }
        else if (style == 'serviceworkermessage') {
            return `color: purple;`;
        }
        else {
            return '';
        }
    }
    /**
     * Returns the current object without keys that have undefined values.
     * Regardless of whether the return result is used, the passed-in object is destructively modified.
     * Only affects keys that the object directly contains (i.e. not those inherited via the object's prototype).
     * @param object
     */
    static trimUndefined(object) {
        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                if (object[property] === undefined) {
                    delete object[property];
                }
            }
        }
        return object;
    }
    /**
     * Capitalizes the first letter of the string.
     * @returns {string} The string with the first letter capitalized.
     */
    static capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    static isNullOrUndefined(value) {
        return typeof value === 'undefined' || value === null;
    }
    static valueOrDefault(value, defaultValue) {
        if (typeof value === "undefined" || value === null) {
            return defaultValue;
        }
        return value;
    }
    /**
     * JSON.stringify() but converts functions to "[Function]" so they aren't lost.
     * Helps when logging method calls.
     */
    static stringify(obj) {
        return JSON.stringify(obj, (_, value) => {
            if (typeof value === 'function') {
                return "[Function]";
            }
            else {
                return value;
            }
        }, 4);
    }
    static encodeHashAsUriComponent(hash) {
        let uriComponent = '';
        const keys = Object.keys(hash);
        for (var key of keys) {
            const value = hash[key];
            uriComponent += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        return uriComponent;
    }
    static timeoutPromise(promise, milliseconds) {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new TimeoutError_TimeoutError());
            }, milliseconds);
        });
        return Promise.race([promise, timeoutPromise]);
    }
    static getValueOrDefault(value, defaultValue) {
        if (value !== undefined && value !== null) {
            return value;
        }
        return defaultValue;
    }
    /**
     * This is similar to ECMAScript2107 String.prototype.padStart.
     * Switch to this after updating TypeScript and can confirm it gets transpiled down to ES6
     * @param str - String to pad left
     * @param targetLength - Length to make the string
     * @param padString - String value of length one to pad with.
     * @returns {string} - Resulting string padded
     */
    static padStart(str, targetLength, padString) {
        let result = str;
        while (result.length < targetLength) {
            result = padString + result;
        }
        return result;
    }
    /**
     * Returns trimmed version number
     * e.g: "10.01.30" becomes "10.01"
     * @param version - version number we want to check
     */
    static parseVersionString(version) {
        const osVersionParts = version.toString().split(".");
        const majorVersion = Utils_Utils.padStart(osVersionParts[0], 2, "0");
        let minorVersion;
        if (osVersionParts[1]) {
            minorVersion = Utils_Utils.padStart(osVersionParts[1], 2, "0");
        }
        else {
            minorVersion = "00";
        }
        return Number(`${majorVersion}.${minorVersion}`);
    }
    /**
     * Gives back the last x number of parts providing a string with a delimiter.
     * Example: lastParts("api.staging.onesignal.com", ".", 3) will return "staging.onesignal.com"
     */
    static lastParts(subject, delimiter, maxParts) {
        const parts = subject.split(delimiter);
        const skipParts = Math.max(parts.length - maxParts, 0);
        return parts.slice(skipParts).join(delimiter);
    }
    /**
     * Checks if a version is number is greater than or equal (AKA at least) to a specific compare
     *   to version.
     * Limited to only checking for major and minor version values, patch versions are ignored
     * @param toCheck - Version we want to check
     * @param compareTo - Version we want to be at or higher
     * @returns {string} - Returns true if toCheck >= compareTo
     */
    static isVersionAtLeast(toCheck, compareTo) {
        return this.parseVersionString(toCheck) >= compareTo;
    }
    static enforceAppId(appId) {
        if (!appId) {
            throw new Error("App id cannot be empty");
        }
    }
    static enforcePlayerId(playerId) {
        if (!playerId) {
            throw new Error("Player id cannot be empty");
        }
    }
    static enforceAppIdAndPlayerId(appId, playerId, funcToExecute) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Utils_Utils.enforceAppId(appId);
            Utils_Utils.enforcePlayerId(playerId);
            try {
                return yield funcToExecute();
            }
            catch (e) {
                if (e && Array.isArray(e.errors) && e.errors.length > 0 &&
                    Utils_Utils.contains(e.errors[0], "app_id not found")) {
                    throw new OneSignalApiError["OneSignalApiError"](OneSignalApiError["OneSignalApiErrorKind"].MissingAppId);
                }
                else
                    throw e;
            }
        });
    }
    static sortArrayOfObjects(arrayToSort, predicateForProperty, descending = false, doItInPlace = true) {
        const internalArrayToSort = doItInPlace ? arrayToSort : arrayToSort.slice();
        internalArrayToSort.sort((a, b) => {
            const propertyA = predicateForProperty(a);
            const propertyB = predicateForProperty(b);
            if (propertyA > propertyB) {
                return !!descending ? -1 : 1;
            }
            if (propertyA < propertyB) {
                return !!descending ? 1 : -1;
            }
            return 0;
        });
        return internalArrayToSort;
    }
}
/* harmony default export */ var utils_Utils = __webpack_exports__["default"] = (Utils_Utils);



/***/ }),

/***/ "./build/ts-to-es6/src/entries/pageSdkInit.js":
/*!****************************************************************!*\
  !*** ./build/ts-to-es6/src/entries/pageSdkInit.js + 1 modules ***!
  \****************************************************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/libraries/Log.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/utils.js because of ./build/ts-to-es6/src/OneSignal.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./build/ts-to-es6/src/libraries/Log.js
var Log = __webpack_require__("./build/ts-to-es6/src/libraries/Log.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/utils.js
var utils = __webpack_require__("./build/ts-to-es6/src/utils.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/utils/ReplayCallsOnOneSignal.js

class ReplayCallsOnOneSignal_ReplayCallsOnOneSignal {
    static doReplay(stubOneSignal) {
        if (!stubOneSignal)
            return;
        if (Array.isArray(stubOneSignal)) {
            ReplayCallsOnOneSignal_ReplayCallsOnOneSignal.processAsArray(stubOneSignal);
        }
        else if (stubOneSignal.constructor && stubOneSignal.constructor.name === "OneSignalStubES6") {
            ReplayCallsOnOneSignal_ReplayCallsOnOneSignal.processAsES6Stub(stubOneSignal);
        }
        else {
            Log["default"].error("window.OneSignal is an unexpected type! Should be an Array, OneSignalStubES6, or undefined.");
        }
    }
    static processAsArray(stubOneSignal) {
        for (const item of stubOneSignal) {
            try {
                OneSignal.push(item);
            }
            catch (e) {
                // Catch and log error here so other elements still run
                Log["default"].error(e);
            }
        }
    }
    static processAsES6Stub(stubOneSignal) {
        // Transfer properties set;
        if (stubOneSignal.SERVICE_WORKER_PATH)
            OneSignal.SERVICE_WORKER_PATH = stubOneSignal.SERVICE_WORKER_PATH;
        if (stubOneSignal.SERVICE_WORKER_UPDATER_PATH)
            OneSignal.SERVICE_WORKER_UPDATER_PATH = stubOneSignal.SERVICE_WORKER_UPDATER_PATH;
        if (stubOneSignal.currentLogLevel)
            OneSignal.log.setLevel(stubOneSignal.currentLogLevel);
        if (stubOneSignal.SERVICE_WORKER_PARAM)
            OneSignal.SERVICE_WORKER_PARAM = stubOneSignal.SERVICE_WORKER_PARAM;
        // 1. Process any array defined BEFORE stubOneSignal was loaded
        if (stubOneSignal.preExistingArray) {
            ReplayCallsOnOneSignal_ReplayCallsOnOneSignal.processAsArray(stubOneSignal.preExistingArray);
        }
        // 2. Process any array defined AFTER stubOneSignal was loaded
        //    Runs methods in order, including firing any promises
        for (const item of stubOneSignal.directFunctionCallsArray) {
            const functionToCall = OneSignal[item.functionName];
            const retValue = functionToCall.apply(OneSignal, item.args);
            if (item.delayedPromise && retValue instanceof Promise) {
                retValue.then(function (...args) {
                    if (item.delayedPromise && item.delayedPromise.resolve) {
                        item.delayedPromise.resolve.apply(null, args);
                    }
                }).catch(function (...args) {
                    if (item.delayedPromise && item.delayedPromise.reject) {
                        item.delayedPromise.reject.apply(null, args);
                    }
                });
            }
        }
    }
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/entries/pageSdkInit.js
/**
 * This is OneSignalPageSDKES6.js (ES6)
 * Loaded from OneSignalSDK.js only if the browser supports push.
 */



function pageSdkInit_oneSignalSdkInit() {
    Object(utils["incrementSdkLoadCount"])();
    if (Object(utils["getSdkLoadCount"])() > 1) {
        Log["default"].warn(`OneSignal: The web push SDK is included more than once. For optimal performance, please include our ` +
            `SDK only once on your page.`);
        Log["default"].debug(`OneSignal: Exiting from SDK initialization to prevent double-initialization errors. ` +
            `Occurred ${Object(utils["getSdkLoadCount"])()} times.`);
        return;
    }
    // We're running in the host page, iFrame of the host page, or popup window
    // Load OneSignal's web SDK
    const predefinedOneSignal = window.OneSignal;
    window.OneSignal = __webpack_require__(/*! ../OneSignal */ "./build/ts-to-es6/src/OneSignal.js").default;
    ReplayCallsOnOneSignal_ReplayCallsOnOneSignal.doReplay(predefinedOneSignal);
}
// Only if running on page in browser
if (typeof window !== "undefined")
    pageSdkInit_oneSignalSdkInit();



/***/ }),

/***/ "./build/ts-to-es6/src/errors/InvalidArgumentError.js":
/*!************************************************************!*\
  !*** ./build/ts-to-es6/src/errors/InvalidArgumentError.js ***!
  \************************************************************/
/*! exports provided: InvalidArgumentReason, InvalidArgumentError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidArgumentReason", function() { return InvalidArgumentReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidArgumentError", function() { return InvalidArgumentError; });
/* harmony import */ var _OneSignalError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneSignalError */ "./build/ts-to-es6/src/errors/OneSignalError.js");

var InvalidArgumentReason;
(function (InvalidArgumentReason) {
    InvalidArgumentReason[InvalidArgumentReason["Empty"] = 0] = "Empty";
    InvalidArgumentReason[InvalidArgumentReason["Malformed"] = 1] = "Malformed";
    InvalidArgumentReason[InvalidArgumentReason["EnumOutOfRange"] = 2] = "EnumOutOfRange";
})(InvalidArgumentReason || (InvalidArgumentReason = {}));
class InvalidArgumentError extends _OneSignalError__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(argName, reason) {
        switch (reason) {
            case InvalidArgumentReason.Empty:
                super(`Supply a non-empty value to '${argName}'.`);
                break;
            case InvalidArgumentReason.Malformed:
                super(`The value for '${argName}' was malformed.`);
                break;
            case InvalidArgumentReason.EnumOutOfRange:
                super(`The value for '${argName}' was out of range of the expected input enum.`);
                break;
        }
        this.argument = argName;
        this.reason = InvalidArgumentReason[reason];
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, InvalidArgumentError.prototype);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/errors/InvalidStateError.js":
/*!*********************************************************!*\
  !*** ./build/ts-to-es6/src/errors/InvalidStateError.js ***!
  \*********************************************************/
/*! exports provided: InvalidStateReason, InvalidStateError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidStateReason", function() { return InvalidStateReason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidStateError", function() { return InvalidStateError; });
/* harmony import */ var _OneSignalError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneSignalError */ "./build/ts-to-es6/src/errors/OneSignalError.js");
/* harmony import */ var _models_PermissionPromptType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/PermissionPromptType */ "./build/ts-to-es6/src/models/PermissionPromptType.js");


var InvalidStateReason;
(function (InvalidStateReason) {
    InvalidStateReason[InvalidStateReason["MissingAppId"] = 0] = "MissingAppId";
    InvalidStateReason[InvalidStateReason["RedundantPermissionMessage"] = 1] = "RedundantPermissionMessage";
    InvalidStateReason[InvalidStateReason["PushPermissionAlreadyGranted"] = 2] = "PushPermissionAlreadyGranted";
    InvalidStateReason[InvalidStateReason["UnsupportedEnvironment"] = 3] = "UnsupportedEnvironment";
    InvalidStateReason[InvalidStateReason["MissingDomElement"] = 4] = "MissingDomElement";
    InvalidStateReason[InvalidStateReason["ServiceWorkerNotActivated"] = 5] = "ServiceWorkerNotActivated";
    InvalidStateReason[InvalidStateReason["NoProxyFrame"] = 6] = "NoProxyFrame";
})(InvalidStateReason || (InvalidStateReason = {}));
class InvalidStateError extends _OneSignalError__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(reason, extra) {
        switch (reason) {
            case InvalidStateReason.MissingAppId:
                super(`Missing required app ID.`);
                break;
            case InvalidStateReason.RedundantPermissionMessage:
                let extraInfo = '';
                if (extra && extra.permissionPromptType)
                    extraInfo = `(${_models_PermissionPromptType__WEBPACK_IMPORTED_MODULE_1__["PermissionPromptType"][extra.permissionPromptType]})`;
                super(`Another permission message ${extraInfo} is being displayed.`);
                break;
            case InvalidStateReason.PushPermissionAlreadyGranted:
                super(`Push permission has already been granted.`);
                break;
            case InvalidStateReason.UnsupportedEnvironment:
                super(`The current environment does not support this operation.`);
                break;
            case InvalidStateReason.ServiceWorkerNotActivated:
                super(`The service worker must be activated first.`);
                break;
            case InvalidStateReason.NoProxyFrame:
                super(`No proxy frame.`);
                break;
        }
        this.description = InvalidStateReason[reason];
        this.reason = reason;
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, InvalidStateError.prototype);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/errors/NotImplementedError.js":
/*!***********************************************************!*\
  !*** ./build/ts-to-es6/src/errors/NotImplementedError.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotImplementedError; });
/* harmony import */ var _OneSignalError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneSignalError */ "./build/ts-to-es6/src/errors/OneSignalError.js");

class NotImplementedError extends _OneSignalError__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super('This code is not implemented yet.');
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, NotImplementedError.prototype);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/errors/OneSignalApiError.js":
/*!*********************************************************!*\
  !*** ./build/ts-to-es6/src/errors/OneSignalApiError.js ***!
  \*********************************************************/
/*! exports provided: OneSignalApiErrorKind, OneSignalApiError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSignalApiErrorKind", function() { return OneSignalApiErrorKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSignalApiError", function() { return OneSignalApiError; });
/* harmony import */ var _OneSignalError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneSignalError */ "./build/ts-to-es6/src/errors/OneSignalError.js");

var OneSignalApiErrorKind;
(function (OneSignalApiErrorKind) {
    OneSignalApiErrorKind[OneSignalApiErrorKind["MissingAppId"] = 0] = "MissingAppId";
})(OneSignalApiErrorKind || (OneSignalApiErrorKind = {}));
class OneSignalApiError extends _OneSignalError__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(reason) {
        switch (reason) {
            case OneSignalApiErrorKind.MissingAppId:
                super('The API call is missing an app ID.');
                break;
        }
        /**
         * Important! Required to make sure the correct error type is detected during instanceof checks.
         * Same applies to all derived classes.
         * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
         */
        Object.setPrototypeOf(this, OneSignalApiError.prototype);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/errors/OneSignalError.js":
/*!******************************************************!*\
  !*** ./build/ts-to-es6/src/errors/OneSignalError.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OneSignalError; });
class OneSignalError extends Error {
    constructor(message = '') {
        super(message);
        // extending Error is weird and does not propagate `message`
        Object.defineProperty(this, 'message', {
            configurable: true,
            enumerable: false,
            value: message,
            writable: true,
        });
        Object.defineProperty(this, 'name', {
            configurable: true,
            enumerable: false,
            value: this.constructor.name,
            writable: true,
        });
        if (Error.hasOwnProperty('captureStackTrace')) {
            Error.captureStackTrace(this, this.constructor);
            return;
        }
        Object.defineProperty(this, 'stack', {
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
        Object.setPrototypeOf(this, OneSignalError.prototype);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/helpers/ServiceWorkerHelper.js":
/*!************************************************************************!*\
  !*** ./build/ts-to-es6/src/helpers/ServiceWorkerHelper.js + 2 modules ***!
  \************************************************************************/
/*! exports provided: default, ServiceWorkerActiveState */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/OneSignalApiSW.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/errors/InvalidStateError.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/helpers/page/ServiceWorkerHelper.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/helpers/shared/OutcomesHelper.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/PushDeviceRecord.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/RawPushSubscription.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/Session.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/services/Database.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/utils/OneSignalUtils.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/tslib/tslib.es6.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/OneSignalApiSW.js
var OneSignalApiSW = __webpack_require__("./build/ts-to-es6/src/OneSignalApiSW.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/libraries/sw/Log.js
class Log {
    static debug(...args) {
        if (!!self.shouldLog) {
            console.debug(...args);
        }
    }
    static trace(...args) {
        if (!!self.shouldLog) {
            console.trace(...args);
        }
    }
    static info(...args) {
        if (!!self.shouldLog) {
            console.info(...args);
        }
    }
    static warn(...args) {
        if (!!self.shouldLog) {
            console.warn(...args);
        }
    }
    static error(...args) {
        if (!!self.shouldLog) {
            console.error(...args);
        }
    }
}


// EXTERNAL MODULE: ./build/ts-to-es6/src/models/Session.js
var Session = __webpack_require__("./build/ts-to-es6/src/models/Session.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/errors/InvalidStateError.js
var InvalidStateError = __webpack_require__("./build/ts-to-es6/src/errors/InvalidStateError.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/utils/OneSignalUtils.js
var OneSignalUtils = __webpack_require__("./build/ts-to-es6/src/utils/OneSignalUtils.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/services/Database.js + 2 modules
var Database = __webpack_require__("./build/ts-to-es6/src/services/Database.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/PushDeviceRecord.js
var PushDeviceRecord = __webpack_require__("./build/ts-to-es6/src/models/PushDeviceRecord.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/RawPushSubscription.js
var RawPushSubscription = __webpack_require__("./build/ts-to-es6/src/models/RawPushSubscription.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/helpers/page/ServiceWorkerHelper.js
var page_ServiceWorkerHelper = __webpack_require__("./build/ts-to-es6/src/helpers/page/ServiceWorkerHelper.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/helpers/shared/OutcomesHelper.js
var OutcomesHelper = __webpack_require__("./build/ts-to-es6/src/helpers/shared/OutcomesHelper.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/sw/CancelableTimeout.js


const CancelableTimeout_doNothing = () => {
    Log.debug("Do nothing");
};
function CancelableTimeout_cancelableTimeout(callback, delayInSeconds) {
    const delayInMilliseconds = delayInSeconds * 1000;
    let timerId;
    let clearTimeoutHandle = undefined;
    const promise = new Promise((resolve, reject) => {
        let startedExecution = false;
        timerId = self.setTimeout(() => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            startedExecution = true;
            try {
                yield callback();
                resolve();
            }
            catch (e) {
                Log.error("Failed to execute callback", e);
                reject();
            }
        }), delayInMilliseconds);
        clearTimeoutHandle = () => {
            Log.debug("Cancel called");
            self.clearTimeout(timerId);
            if (!startedExecution) {
                resolve();
            }
        };
    });
    if (!clearTimeoutHandle) {
        Log.warn("clearTimeoutHandle was not assigned.");
        return {
            promise,
            cancel: CancelableTimeout_doNothing,
        };
    }
    return {
        promise,
        cancel: clearTimeoutHandle,
    };
}


// CONCATENATED MODULE: ./build/ts-to-es6/src/helpers/ServiceWorkerHelper.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceWorkerHelper_ServiceWorkerHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWorkerActiveState", function() { return ServiceWorkerHelper_ServiceWorkerActiveState; });












class ServiceWorkerHelper_ServiceWorkerHelper {
    static getRegistration() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield page_ServiceWorkerHelper["default"].getRegistration();
        });
    }
    static getServiceWorkerHref(workerState, config) {
        let workerFullPath = "";
        // Determine which worker to install
        if (workerState === ServiceWorkerHelper_ServiceWorkerActiveState.WorkerA)
            workerFullPath = config.workerBPath.getFullPath();
        else if (workerState === ServiceWorkerHelper_ServiceWorkerActiveState.WorkerB ||
            workerState === ServiceWorkerHelper_ServiceWorkerActiveState.ThirdParty ||
            workerState === ServiceWorkerHelper_ServiceWorkerActiveState.None)
            workerFullPath = config.workerAPath.getFullPath();
        else if (workerState === ServiceWorkerHelper_ServiceWorkerActiveState.Bypassed) {
            /*
              if the page is hard refreshed bypassing the cache, no service worker
              will control the page.
      
              It doesn't matter if we try to reinstall an existing worker; still no
              service worker will control the page after installation.
             */
            throw new InvalidStateError["InvalidStateError"](InvalidStateError["InvalidStateReason"].UnsupportedEnvironment);
        }
        return new URL(workerFullPath, OneSignalUtils["OneSignalUtils"].getBaseUrl()).href;
    }
    static upsertSession(sessionThresholdInSeconds, sendOnFocusEnabled, deviceRecord, deviceId, sessionOrigin, outcomesConfig) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (!deviceId) {
                Log.error("No deviceId provided for new session.");
                return;
            }
            if (!deviceRecord.app_id) {
                Log.error("No appId provided for new session.");
                return;
            }
            const existingSession = yield Database["default"].getCurrentSession();
            if (!existingSession) {
                const appId = deviceRecord.app_id;
                const session = Object(Session["initializeNewSession"])({ deviceId, appId, deviceType: deviceRecord.device_type });
                // if there is a record about a clicked notification in our database, attribute session to it.
                const clickedNotification = yield Database["default"].getLastNotificationClicked(appId);
                if (clickedNotification) {
                    session.notificationId = clickedNotification.notificationId;
                }
                yield Database["default"].upsertSession(session);
                yield ServiceWorkerHelper_ServiceWorkerHelper.sendOnSessionCallIfNecessary(sessionOrigin, deviceRecord, deviceId, session);
                return;
            }
            if (existingSession.status === Session["SessionStatus"].Active) {
                Log.debug("Session already active", existingSession);
                return;
            }
            if (!existingSession.lastDeactivatedTimestamp) {
                Log.debug("Session is in invalid state", existingSession);
                // TODO: possibly recover by re-starting session if deviceId is present?
                return;
            }
            const currentTimestamp = new Date().getTime();
            const timeSinceLastDeactivatedInSeconds = ServiceWorkerHelper_ServiceWorkerHelper.timeInSecondsBetweenTimestamps(currentTimestamp, existingSession.lastDeactivatedTimestamp);
            if (timeSinceLastDeactivatedInSeconds <= sessionThresholdInSeconds) {
                existingSession.status = Session["SessionStatus"].Active;
                existingSession.lastActivatedTimestamp = currentTimestamp;
                existingSession.lastDeactivatedTimestamp = null;
                yield Database["default"].upsertSession(existingSession);
                return;
            }
            // If failed to report/clean-up last time, we can attempt to try again here.
            // TODO: Possibly check that it's not unreasonably long.
            // TODO: Or couple with periodic ping for better results.
            yield ServiceWorkerHelper_ServiceWorkerHelper.finalizeSession(existingSession, sendOnFocusEnabled, outcomesConfig);
            const session = Object(Session["initializeNewSession"])({ deviceId, appId: deviceRecord.app_id, deviceType: deviceRecord.device_type });
            yield Database["default"].upsertSession(session);
            yield ServiceWorkerHelper_ServiceWorkerHelper.sendOnSessionCallIfNecessary(sessionOrigin, deviceRecord, deviceId, session);
        });
    }
    static deactivateSession(thresholdInSeconds, sendOnFocusEnabled, outcomesConfig) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const existingSession = yield Database["default"].getCurrentSession();
            if (!existingSession) {
                Log.debug("No active session found. Cannot deactivate.");
                return undefined;
            }
            /**
             * For 2 subsequent deactivate requests we need to make sure there is an active finalization timeout.
             * Timer gets cleaned up before figuring out it's activate or deactivate.
             * No update needed for the session, early return.
             */
            if (existingSession.status === Session["SessionStatus"].Inactive) {
                return CancelableTimeout_cancelableTimeout(() => ServiceWorkerHelper_ServiceWorkerHelper.finalizeSession(existingSession, sendOnFocusEnabled, outcomesConfig), thresholdInSeconds);
            }
            /**
             * Can only be active or expired at this point, but more statuses may come in in the future.
             * For anything but active, logging a warning and doing early return.
             */
            if (existingSession.status !== Session["SessionStatus"].Active) {
                Log.warn(`Session in invalid state ${existingSession.status}. Cannot deactivate.`);
                return undefined;
            }
            const currentTimestamp = new Date().getTime();
            const timeSinceLastActivatedInSeconds = ServiceWorkerHelper_ServiceWorkerHelper.timeInSecondsBetweenTimestamps(currentTimestamp, existingSession.lastActivatedTimestamp);
            existingSession.lastDeactivatedTimestamp = currentTimestamp;
            existingSession.accumulatedDuration += timeSinceLastActivatedInSeconds;
            existingSession.status = Session["SessionStatus"].Inactive;
            const cancelableFinalize = CancelableTimeout_cancelableTimeout(() => ServiceWorkerHelper_ServiceWorkerHelper.finalizeSession(existingSession, sendOnFocusEnabled, outcomesConfig), thresholdInSeconds);
            yield Database["default"].upsertSession(existingSession);
            return cancelableFinalize;
        });
    }
    /**
     * Sends on_session call on each new session initialization except the case
     * when player create call occurs, e.g. first subscribed or re-subscribed cases after clearing cookies,
     * since player#create call updates last_session field on player.
     */
    static sendOnSessionCallIfNecessary(sessionOrigin, deviceRecord, deviceId, session) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (sessionOrigin === Session["SessionOrigin"].PlayerCreate) {
                return;
            }
            if (!deviceRecord.identifier) {
                const subscription = yield self.registration.pushManager.getSubscription();
                if (subscription) {
                    const rawPushSubscription = RawPushSubscription["RawPushSubscription"].setFromW3cSubscription(subscription);
                    const fullDeviceRecord = new PushDeviceRecord["PushDeviceRecord"](rawPushSubscription).serialize();
                    deviceRecord.identifier = fullDeviceRecord.identifier;
                }
            }
            const newPlayerId = yield OneSignalApiSW["OneSignalApiSW"].updateUserSession(deviceId, deviceRecord);
            // If the returned player id is different, save the new id to indexed db and update session
            if (newPlayerId !== deviceId) {
                session.deviceId = newPlayerId;
                yield Promise.all([
                    Database["default"].setDeviceId(newPlayerId),
                    Database["default"].upsertSession(session),
                    Database["default"].resetSentUniqueOutcomes()
                ]);
            }
        });
    }
    static finalizeSession(session, sendOnFocusEnabled, outcomesConfig) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            Log.debug("Finalize session", `started: ${new Date(session.startTimestamp)}`, `duration: ${session.accumulatedDuration}s`);
            if (sendOnFocusEnabled) {
                Log.debug(`send on_focus reporting session duration -> ${session.accumulatedDuration}s`);
                const attribution = yield OutcomesHelper["default"].getAttribution(outcomesConfig);
                Log.debug("send on_focus with attribution", attribution);
                yield OneSignalApiSW["OneSignalApiSW"].sendSessionDuration(session.appId, session.deviceId, session.accumulatedDuration, session.deviceType, attribution);
            }
            yield Promise.all([
                Database["default"].cleanupCurrentSession(),
                Database["default"].removeAllNotificationClicked()
            ]);
            Log.debug("Finalize session finished", `started: ${new Date(session.startTimestamp)}`);
        });
    }
    static timeInSecondsBetweenTimestamps(timestamp1, timestamp2) {
        if (timestamp1 <= timestamp2) {
            return 0;
        }
        return Math.floor((timestamp1 - timestamp2) / 1000);
    }
}
var ServiceWorkerHelper_ServiceWorkerActiveState;
(function (ServiceWorkerActiveState) {
    /**
     * OneSignalSDKWorker.js, or the equivalent custom file name, is active.
     */
    ServiceWorkerActiveState["WorkerA"] = "Worker A (Main)";
    /**
     * OneSignalSDKUpdaterWorker.js, or the equivalent custom file name, is
     * active.
     *
     * We no longer need to use this filename. We can update Worker A by appending
     * a random query parameter to A.
     */
    ServiceWorkerActiveState["WorkerB"] = "Worker B (Updater)";
    /**
     * A service worker is active, but it is neither OneSignalSDKWorker.js nor
     * OneSignalSDKUpdaterWorker.js (or the equivalent custom file names as
     * provided by user config).
     */
    ServiceWorkerActiveState["ThirdParty"] = "3rd Party";
    /**
     * A service worker is currently installing and we can't determine its final state yet. Wait until
     * the service worker is finished installing by checking for a controllerchange property..
     */
    ServiceWorkerActiveState["Installing"] = "Installing";
    /**
     * No service worker is installed.
     */
    ServiceWorkerActiveState["None"] = "None";
    /**
     * A service worker is active but not controlling the page. This can occur if
     * the page is hard-refreshed bypassing the cache, which also bypasses service
     * workers.
     */
    ServiceWorkerActiveState["Bypassed"] = "Bypassed";
    /**
     * Service workers are not supported in this environment. This status is used
     * on HTTP pages where it isn't possible to know whether a service worker is
     * installed or not or in any of the other states.
     */
    ServiceWorkerActiveState["Indeterminate"] = "Indeterminate";
})(ServiceWorkerHelper_ServiceWorkerActiveState || (ServiceWorkerHelper_ServiceWorkerActiveState = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/helpers/page/ServiceWorkerHelper.js":
/*!*****************************************************************!*\
  !*** ./build/ts-to-es6/src/helpers/page/ServiceWorkerHelper.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceWorkerHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _libraries_Log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js");


class ServiceWorkerHelper {
    // Gets details on the service-worker (if any) that controls the current page
    static getRegistration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // location.href is used for <base> tag compatibility when it is set to a different origin
                return yield navigator.serviceWorker.getRegistration(location.href);
            }
            catch (e) {
                // This could be null in an HTTP context or error if the user doesn't accept cookies
                _libraries_Log__WEBPACK_IMPORTED_MODULE_1__["default"].warn("[Service Worker Status] Error Checking service worker registration", location.href, e);
                return null;
            }
        });
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/helpers/shared/OutcomesHelper.js":
/*!**************************************************************!*\
  !*** ./build/ts-to-es6/src/helpers/shared/OutcomesHelper.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OutcomesHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Outcomes */ "./build/ts-to-es6/src/models/Outcomes.js");
/* harmony import */ var _services_Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/Database */ "./build/ts-to-es6/src/services/Database.js");
/* harmony import */ var _libraries_Log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js");
/* harmony import */ var _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/shared/utils/Utils */ "./build/ts-to-es6/src/context/shared/utils/Utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./build/ts-to-es6/src/utils.js");






const SEND_OUTCOME = "sendOutcome";
const SEND_UNIQUE_OUTCOME = "sendUniqueOutcome";
class OutcomesHelper {
    /**
     * @param  {string} appId
     * @param  {OutcomesConfig} config - refers specifically to outcomes config
     * @param  {boolean} isUnique
     * @param  {string} outcomeName
     */
    constructor(appId, config, outcomeName, isUnique) {
        this.outcomeName = outcomeName;
        this.config = config;
        this.appId = appId;
        this.isUnique = isUnique;
    }
    /**
     * Returns `OutcomeAttribution` object which includes
     *    1) attribution type
     *    2) notification ids
     *
     * Note: this just looks at notifications that fall within the attribution window and
     *       does not check if they have been previously attributed (used in both sendOutcome & sendUniqueOutcome)
     * @returns Promise
     */
    getAttribution() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield OutcomesHelper.getAttribution(this.config);
        });
    }
    /**
     * Performs logging of method call and returns whether Outcomes are supported
     * @param  {boolean} isUnique
     * @returns Promise
     */
    beforeOutcomeSend() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const outcomeMethodString = this.isUnique ? SEND_UNIQUE_OUTCOME : SEND_OUTCOME;
            Object(_utils__WEBPACK_IMPORTED_MODULE_5__["logMethodCall"])(outcomeMethodString, this.outcomeName);
            if (!this.config) {
                _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].debug("Outcomes feature not supported by main application yet.");
                return false;
            }
            if (!this.outcomeName) {
                _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].error("Outcome name is required");
                return false;
            }
            yield Object(_utils__WEBPACK_IMPORTED_MODULE_5__["awaitOneSignalInitAndSupported"])();
            const isSubscribed = yield OneSignal.privateIsPushNotificationsEnabled();
            if (!isSubscribed) {
                _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].warn("Reporting outcomes is supported only for subscribed users.");
                return false;
            }
            return true;
        });
    }
    /**
     * Returns array of notification ids outcome is currently attributed with
     * @param  {string} outcomeName
     * @returns Promise
     */
    getAttributedNotifsByUniqueOutcomeName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sentOutcomes = yield _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].getAll("SentUniqueOutcome");
            return sentOutcomes
                .filter(o => o.outcomeName === this.outcomeName)
                .reduce((acc, curr) => {
                const notificationIds = curr.notificationIds || [];
                return [...acc, ...notificationIds];
            }, []);
        });
    }
    /**
     * Returns array of new notifications that have never been attributed to the outcome
     * @param  {string} outcomeName
     * @param  {string[]} notificationIds
     */
    getNotifsToAttributeWithUniqueOutcome(notificationIds) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const previouslyAttributedArr = yield this.getAttributedNotifsByUniqueOutcomeName();
            return notificationIds.filter(id => (previouslyAttributedArr.indexOf(id) === -1));
        });
    }
    shouldSendUnique(outcomeAttribution, notifArr) {
        // we should only send if type is unattributed OR there are notifs to attribute
        if (outcomeAttribution.type === _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__["OutcomeAttributionType"].Unattributed) {
            return true;
        }
        return notifArr.length > 0;
    }
    saveSentUniqueOutcome(newNotificationIds) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const outcomeName = this.outcomeName;
            const existingSentOutcome = yield _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].get("SentUniqueOutcome", outcomeName);
            const currentSession = yield _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentSession();
            const existingNotificationIds = !!existingSentOutcome ? existingSentOutcome.notificationIds : [];
            const notificationIds = [...existingNotificationIds, ...newNotificationIds];
            const timestamp = currentSession ? currentSession.startTimestamp : null;
            yield _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].put("SentUniqueOutcome", {
                outcomeName,
                notificationIds,
                sentDuringSession: timestamp
            });
        });
    }
    wasSentDuringSession() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sentOutcome = yield _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].get("SentUniqueOutcome", this.outcomeName);
            if (!sentOutcome) {
                return false;
            }
            const session = yield _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].getCurrentSession();
            const sessionExistsAndWasPreviouslySent = session && sentOutcome.sentDuringSession === session.startTimestamp;
            const sessionWasClearedButWasPreviouslySent = !session && !!sentOutcome.sentDuringSession;
            return sessionExistsAndWasPreviouslySent || sessionWasClearedButWasPreviouslySent;
        });
    }
    send(outcomeProps) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { type, notificationIds, weight } = outcomeProps;
            switch (type) {
                case _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__["OutcomeAttributionType"].Direct:
                    if (this.isUnique) {
                        yield this.saveSentUniqueOutcome(notificationIds);
                    }
                    yield OneSignal.context.updateManager.sendOutcomeDirect(this.appId, notificationIds, this.outcomeName, weight);
                    return;
                case _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__["OutcomeAttributionType"].Indirect:
                    if (this.isUnique) {
                        yield this.saveSentUniqueOutcome(notificationIds);
                    }
                    yield OneSignal.context.updateManager.sendOutcomeInfluenced(this.appId, notificationIds, this.outcomeName, weight);
                    return;
                case _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__["OutcomeAttributionType"].Unattributed:
                    if (this.isUnique) {
                        if (yield this.wasSentDuringSession()) {
                            _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].warn(`(Unattributed) unique outcome was already sent during this session`);
                            return;
                        }
                        yield this.saveSentUniqueOutcome([]);
                    }
                    yield OneSignal.context.updateManager.sendOutcomeUnattributed(this.appId, this.outcomeName, weight);
                    return;
                default:
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].warn("You are on a free plan. Please upgrade to use this functionality.");
                    return;
            }
        });
    }
    // statics
    /**
     * Static method: returns `OutcomeAttribution` object which includes
     *    1) attribution type
     *    2) notification ids
     *
     * Note: this just looks at notifications that fall within the attribution window and
     *       does not check if they have been previously attributed (used in both sendOutcome & sendUniqueOutcome)
     * @param  {OutcomesConfig} config
     * @returns Promise
     */
    static getAttribution(config) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /**
             * Flow:
             * 1. check if the url was opened as a result of a notif;
             * 2. if so, send an api call reporting direct notification outcome
             *    (currently takes into account the match strategy selected in the app's settings);
             * 3. else check all received notifs within timeframe from config;
             * 4. send an api call reporting an influenced outcome for each matching notification
             *    respecting the limit from config too;
             * 5. if no influencing notification found, report unattributed outcome to the api.
             */
            /* direct notifications */
            if (config.direct && config.direct.enabled) {
                const clickedNotifications = yield _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].getAll("NotificationClicked");
                if (clickedNotifications.length > 0) {
                    return {
                        type: _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__["OutcomeAttributionType"].Direct,
                        notificationIds: [clickedNotifications[0].notificationId]
                    };
                }
            }
            /* influencing notifications */
            if (config.indirect && config.indirect.enabled) {
                const timeframeMs = config.indirect.influencedTimePeriodMin * 60 * 1000;
                const beginningOfTimeframe = new Date(new Date().getTime() - timeframeMs);
                const maxTimestamp = beginningOfTimeframe.getTime();
                const allReceivedNotification = yield _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].getAll("NotificationReceived");
                _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].debug(`\tFound total of ${allReceivedNotification.length} received notifications`);
                if (allReceivedNotification.length > 0) {
                    const max = config.indirect.influencedNotificationsLimit;
                    /**
                     * To handle correctly the case when user got subscribed to a new app id
                     * we check the appId on notifications to match the current app.
                     */
                    const allReceivedNotificationSorted = _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].sortArrayOfObjects(allReceivedNotification, (notif) => notif.timestamp, true, false);
                    const matchingNotificationIds = allReceivedNotificationSorted
                        .filter(notif => notif.timestamp >= maxTimestamp)
                        .slice(0, max)
                        .map(notif => notif.notificationId);
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].debug(`\tTotal of ${matchingNotificationIds.length} received notifications are within reporting window.`);
                    // Deleting all unmatched received notifications
                    const notificationIdsToDelete = allReceivedNotificationSorted
                        .filter(notif => matchingNotificationIds.indexOf(notif.notificationId) === -1)
                        .map(notif => notif.notificationId);
                    notificationIdsToDelete.forEach(id => _services_Database__WEBPACK_IMPORTED_MODULE_2__["default"].remove("NotificationReceived", id));
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_3__["default"].debug(`\t${notificationIdsToDelete.length} received notifications will be deleted.`);
                    if (matchingNotificationIds.length > 0) {
                        return {
                            type: _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__["OutcomeAttributionType"].Indirect,
                            notificationIds: matchingNotificationIds,
                        };
                    }
                }
            }
            /* unattributed outcome report */
            if (config.unattributed && config.unattributed.enabled) {
                return {
                    type: _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__["OutcomeAttributionType"].Unattributed,
                    notificationIds: []
                };
            }
            return {
                type: _models_Outcomes__WEBPACK_IMPORTED_MODULE_1__["OutcomeAttributionType"].NotSupported,
                notificationIds: [],
            };
        });
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/libraries/Emitter.js":
/*!**************************************************!*\
  !*** ./build/ts-to-es6/src/libraries/Emitter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Emitter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Source: https://github.com/pazguille/emitter-es6
 */
/**
 * Creates a new instance of Emitter.
 * @class
 * @returns {Object} emitter - An instance of Emitter.
 * @example
 * var emitter = new Emitter();
 */
class Emitter {
    constructor() {
        this._events = {};
    }
    /**
     * Adds a listener to the collection for a specified event.
     */
    on(event, listener) {
        this._events[event] = this._events[event] || [];
        this._events[event].push(listener);
        return this;
    }
    /**
     * Adds a one time listener to the collection for a specified event. It will
     * execute only once.
     */
    once(event, listener) {
        const that = this;
        function fn() {
            that.off(event, fn);
            listener.apply(this, arguments);
        }
        fn.listener = listener;
        this.on(event, fn);
        return this;
    }
    /**
     * Removes a listener from the collection for a specified event.
     */
    off(event, listener) {
        const listeners = this._events[event];
        if (listeners !== undefined) {
            for (let j = 0; j < listeners.length; j += 1) {
                if (listeners[j] === listener || listeners[j].listener === listener) {
                    listeners.splice(j, 1);
                    break;
                }
            }
            if (listeners.length === 0)
                this.removeAllListeners(event);
        }
        return this;
    }
    /**
     * Removes all listeners from the collection for a specified event.
     */
    removeAllListeners(event) {
        try {
            if (event)
                delete this._events[event];
            else
                this._events = {};
        }
        catch (e) { }
        return this;
    }
    /**
     * Returns all listeners from the collection for a specified event.
     * @public
     * @function
     * @name Emitter#listeners
     * @param {String} event - Event name.
     * @returns {Array}
     * @example
     * me.listeners('ready');
     */
    listeners(event) {
        try {
            return this._events[event];
        }
        catch (e) {
            return undefined;
        }
    }
    /**
     * Returns number of listeners from the collection for a specified event.
     * @public
     * @function
     * @name Emitter#numberOfListeners
     * @param {String} event - Event name.
     * @returns {number}
     * @example
     * me.numberOfListeners('ready');
     */
    numberOfListeners(event) {
        const listeners = this.listeners(event);
        if (listeners)
            return listeners.length;
        return 0;
    }
    /**
     * Execute each item in the listener collection in order with the specified data.
     * @param event - String of the event name
     * @param args - Variable number of args to pass to the functions subscribe to the event
     */
    emit(...args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const event = args.shift();
            let listeners = this._events[event];
            if (listeners !== undefined) {
                listeners = listeners.slice(0);
                const len = listeners.length;
                for (let i = 0; i < len; i += 1)
                    yield listeners[i].apply(this, args);
            }
            return this;
        });
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/libraries/Log.js":
/*!**********************************************!*\
  !*** ./build/ts-to-es6/src/libraries/Log.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
class Log {
    static shouldLog() {
        try {
            if (typeof window === "undefined" ||
                typeof window.localStorage === "undefined") {
                return false;
            }
            const level = window.localStorage.getItem("loglevel");
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
    }
    static setLevel(level) {
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
    }
    static createProxyMethods() {
        if (typeof Log.proxyMethodsCreated !== "undefined") {
            return;
        }
        else {
            Log.proxyMethodsCreated = true;
        }
        const methods = {
            "log": "debug",
            "trace": "trace",
            "info": "info",
            "warn": "warn",
            "error": "error"
        };
        for (const nativeMethod of Object.keys(methods)) {
            const nativeMethodExists = typeof console[nativeMethod] !== "undefined";
            const methodToMapTo = methods[nativeMethod];
            const shouldMap = nativeMethodExists &&
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
    }
}
Log.createProxyMethods();



/***/ }),

/***/ "./build/ts-to-es6/src/managers/SdkEnvironment.js":
/*!********************************************************!*\
  !*** ./build/ts-to-es6/src/managers/SdkEnvironment.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SdkEnvironment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/EnvironmentKind */ "./build/ts-to-es6/src/models/EnvironmentKind.js");
/* harmony import */ var _models_TestEnvironmentKind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/TestEnvironmentKind */ "./build/ts-to-es6/src/models/TestEnvironmentKind.js");
/* harmony import */ var _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/WindowEnvironmentKind */ "./build/ts-to-es6/src/models/WindowEnvironmentKind.js");
/* harmony import */ var _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors/InvalidArgumentError */ "./build/ts-to-es6/src/errors/InvalidArgumentError.js");
/* harmony import */ var _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/IntegrationKind */ "./build/ts-to-es6/src/models/IntegrationKind.js");
/* harmony import */ var _helpers_ServiceWorkerHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/ServiceWorkerHelper */ "./build/ts-to-es6/src/helpers/ServiceWorkerHelper.js");
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Environment */ "./build/ts-to-es6/src/Environment.js");
/* harmony import */ var _utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/OneSignalUtils */ "./build/ts-to-es6/src/utils/OneSignalUtils.js");









const RESOURCE_HTTP_PORT = 4000;
const RESOURCE_HTTPS_PORT = 4001;
const API_URL_PORT = 3001;
const TURBINE_API_URL_PORT = 18080;
const TURBINE_ENDPOINTS = ["outcomes", "on_focus"];
class SdkEnvironment {
    /**
     * Returns development, staging, or production.
     *
     * The magic constants used to detect the environment is set or unset when
     * building the SDK.
     */
    static getBuildEnv() {
        if (false) {}
        switch ("development") {
            case "development":
                return _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Development;
            case "staging":
                return _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Staging;
            case "production":
                return _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Production;
            default:
                return _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Production;
        }
    }
    /**
     * Returns development staging, or production.
     *
     * Refers to which API environment should be used. These constants are set when building the SDK
     */
    static getApiEnv() {
        if (false) {}
        switch ("development") {
            case "development":
                return _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Development;
            case "staging":
                return _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Staging;
            case "production":
                return _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Production;
            default:
                return _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Production;
        }
    }
    /**
     * Determines whether the current frame context executing this function is part of a:
     *
     *  a) HTTP site using a proxy subscription origin
     *
     *  b) or, HTTPS site using a proxy subscription origin
     *
     *  c) or, HTTPS site using its own origin for subscribing
     *
     * The determination affects permissions and subscription:
     *
     *  a) Because the parent (top frame) of the proxy origin frame is HTTP, the entire context is
     *  insecure. In the proxy origin frame, notification permissions are always "denied", access to
     *  the service worker's registration throws a security error, and no service worker controls the
     *  proxy origin frame.
     *
     *  b) The context is secure. In the proxy origin frame, notification permissions are "granted" if
     *  actually granted otherwise "denied" if either unprompted or blocked. The service worker
     *  controls the proxy origin frame and access to the service worker's registration is allowed.
     *  Requesting permissions from child frames is not allowed. Subscribing from child frames wasn't
     *  allowed but is now allowed.
     *
     *  c) All features are allowed.
     *
     * @param usingProxyOrigin Using a subdomain of os.tc or onesignal.com for subscribing to push.
     */
    static getIntegration(usingProxyOrigin) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (_Environment__WEBPACK_IMPORTED_MODULE_7__["default"].isSafari()) {
                /* HTTP doesn't apply to Safari sites */
                return _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].Secure;
            }
            const isTopFrame = (window === window.top);
            const isHttpsProtocol = window.location.protocol === "https:";
            // For convenience, try to look up usingProxyOrigin instead of requiring it to be passed in
            if (usingProxyOrigin === undefined) {
                if (typeof OneSignal !== "undefined" && OneSignal.context && OneSignal.context.appConfig) {
                    usingProxyOrigin = !!OneSignal.context.appConfig.subdomain;
                }
                else {
                    throw new _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentError"]("usingProxyOrigin", _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentReason"].Empty);
                }
            }
            /*
              Executing from the top frame, we can easily determine whether we're HTTPS or HTTP.
        
              Executing from a child frame of any depth, we can check the current frame's protocol. If it's
              HTTP it's definitely insecure. If it's HTTPS, we attempt to call
              ServiceWorkerContainer.getRegistration and see if the call throws an error or succeeds. If the
              call throws an error, we can assume some parent frame in the chain above us is insecure.
             */
            if (isTopFrame) {
                if (isHttpsProtocol) {
                    return usingProxyOrigin ?
                        _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].SecureProxy :
                        _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].Secure;
                }
                else {
                    // If localhost and allowLocalhostAsSecureOrigin, it's still considered secure
                    if (_utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_8__["default"].isLocalhostAllowedAsSecureOrigin() &&
                        (location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
                        return _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].Secure;
                    }
                    /* The case of HTTP and not using a proxy origin isn't possible, because the SDK will throw
                    an initialization error stating a proxy origin is required for HTTP sites. */
                    return _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].InsecureProxy;
                }
            }
            else {
                if (isHttpsProtocol) {
                    /* Check whether any parent frames are insecure */
                    const isFrameContextInsecure = yield SdkEnvironment.isFrameContextInsecure();
                    if (isFrameContextInsecure) {
                        return _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].InsecureProxy;
                    }
                    else {
                        return usingProxyOrigin ?
                            _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].SecureProxy :
                            _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].Secure;
                    }
                }
                else {
                    /*
                    Because this frame is insecure, the entire chain is insecure.
            
                    The case of HTTP and not using a proxy origin isn't possible, because the SDK will throw an
                    initialization error stating a proxy origin is required for HTTP sites. */
                    return _models_IntegrationKind__WEBPACK_IMPORTED_MODULE_5__["IntegrationKind"].InsecureProxy;
                }
            }
        });
    }
    /**
     * From a child frame, returns true if the current frame context is insecure.
     *
     * This is used to check if isPushNotificationsEnabled() should grab the service worker
     * registration. In an HTTPS iframe of an HTTP page, getting the service worker registration would
     * throw an error.
     *
     * This method can trigger console warnings due to using ServiceWorkerContainer.getRegistration in
     * an insecure frame.
     */
    static isFrameContextInsecure() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If we are the top frame, or service workers aren't available, don't run this check
            if (window === window.top ||
                !('serviceWorker' in navigator) ||
                typeof navigator.serviceWorker.getRegistration === 'undefined') {
                return false;
            }
            // Will be null if there was an issue retrieving a status
            const registrationResult = yield _helpers_ServiceWorkerHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getRegistration();
            return !registrationResult;
        });
    }
    static isInsecureOrigin() {
        return window.location.protocol === "http:";
    }
    static getOrigin() {
        if (_Environment__WEBPACK_IMPORTED_MODULE_7__["default"].isBrowser()) {
            return window.location.origin;
        }
        else if (typeof self !== "undefined" && typeof ServiceWorkerGlobalScope !== "undefined") {
            return self.registration.scope;
        }
        return "Unknown";
    }
    /**
     * Describes the current frame context.
     */
    static getWindowEnv() {
        if (typeof window === "undefined") {
            if (typeof self !== "undefined" && typeof ServiceWorkerGlobalScope !== "undefined") {
                return _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].ServiceWorker;
            }
            else {
                return _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].Unknown;
            }
        }
        else {
            // If the window is the root top-most level
            if (window === window.top) {
                if (location.href.indexOf("initOneSignal") !== -1 ||
                    (location.pathname === '/subscribe' &&
                        location.search === '') &&
                        (location.hostname.endsWith('.onesignal.com') ||
                            location.hostname.endsWith('.os.tc') ||
                            (location.hostname.indexOf('.localhost') !== -1 &&
                                SdkEnvironment.getBuildEnv() === _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Development))) {
                    return _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].OneSignalSubscriptionPopup;
                }
                else {
                    return _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].Host;
                }
            }
            else if (location.pathname === '/webPushIframe') {
                return _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].OneSignalProxyFrame;
            }
            else if (location.pathname === '/webPushModal') {
                return _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].OneSignalSubscriptionModal;
            }
            else {
                return _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].CustomIframe;
            }
        }
    }
    /**
     * Describes whether the SDK is built in tests mode or not.
     *
     * This method is overriden when tests are run.
     */
    static getTestEnv() {
        return  false ?
            undefined :
            _models_TestEnvironmentKind__WEBPACK_IMPORTED_MODULE_2__["TestEnvironmentKind"].None;
    }
    /**
     * Returns build-specific prefixes used for operations like registering the
     * service worker.
     *
     * For example, in staging the registered service worker filename is
     * Staging-OneSignalSDKWorker.js.
     */
    static getBuildEnvPrefix(buildEnv = SdkEnvironment.getBuildEnv()) {
        switch (buildEnv) {
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Development:
                return 'Dev-';
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Staging:
                return 'Staging-';
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Production:
                return '';
            default:
                throw new _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentError"]('buildEnv', _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentReason"].EnumOutOfRange);
        }
    }
    /**
     * Returns the URL object representing the components of OneSignal's API
     * endpoint.
     */
    static getOneSignalApiUrl(buildEnv = SdkEnvironment.getApiEnv(), action) {
        const apiOrigin = ( true) ? "onesignal.com" || "localhost" : undefined;
        switch (buildEnv) {
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Development:
                if (SdkEnvironment.isTurbineEndpoint(action)) {
                    return new URL(`https://${apiOrigin}:${TURBINE_API_URL_PORT}/api/v1`);
                }
                return new URL(`https://${apiOrigin}:${API_URL_PORT}/api/v1`);
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Staging:
                return new URL(`https://${apiOrigin}/api/v1`);
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Production:
                return new URL('https://onesignal.com/api/v1');
            default:
                throw new _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentError"]('buildEnv', _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentReason"].EnumOutOfRange);
        }
    }
    static getOneSignalResourceUrlPath(buildEnv = SdkEnvironment.getBuildEnv()) {
        const buildOrigin = ( true) ? "localhost" || "localhost" : undefined;
        const isHttps = ( true) ? true : undefined;
        let origin;
        const protocol = isHttps ? "https" : "http";
        const port = isHttps ? RESOURCE_HTTPS_PORT : RESOURCE_HTTP_PORT;
        switch (buildEnv) {
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Development:
                origin = `${protocol}://${buildOrigin}:${port}`;
                break;
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Staging:
                origin = `https://${buildOrigin}`;
                break;
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Production:
                origin = "https://onesignal.com";
                break;
            default:
                throw new _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentError"]('buildEnv', _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentReason"].EnumOutOfRange);
        }
        return new URL(`${origin}/sdks`);
    }
    static getOneSignalCssFileName(buildEnv = SdkEnvironment.getBuildEnv()) {
        const baseFileName = "OneSignalSDKStyles.css";
        switch (buildEnv) {
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Development:
                return `Dev-${baseFileName}`;
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Staging:
                return `Staging-${baseFileName}`;
            case _models_EnvironmentKind__WEBPACK_IMPORTED_MODULE_1__["EnvironmentKind"].Production:
                return baseFileName;
            default:
                throw new _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentError"]('buildEnv', _errors_InvalidArgumentError__WEBPACK_IMPORTED_MODULE_4__["InvalidArgumentReason"].EnumOutOfRange);
        }
    }
    static isTurbineEndpoint(action) {
        if (!action) {
            return false;
        }
        return TURBINE_ENDPOINTS.some(turbine_endpoint => action.indexOf(turbine_endpoint) > -1);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/models/DeliveryPlatformKind.js":
/*!************************************************************!*\
  !*** ./build/ts-to-es6/src/models/DeliveryPlatformKind.js ***!
  \************************************************************/
/*! exports provided: DeliveryPlatformKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPlatformKind", function() { return DeliveryPlatformKind; });
var DeliveryPlatformKind;
(function (DeliveryPlatformKind) {
    DeliveryPlatformKind[DeliveryPlatformKind["ChromeLike"] = 5] = "ChromeLike";
    DeliveryPlatformKind[DeliveryPlatformKind["Safari"] = 7] = "Safari";
    DeliveryPlatformKind[DeliveryPlatformKind["Firefox"] = 8] = "Firefox";
    DeliveryPlatformKind[DeliveryPlatformKind["Edge"] = 12] = "Edge";
    DeliveryPlatformKind[DeliveryPlatformKind["Email"] = 11] = "Email";
})(DeliveryPlatformKind || (DeliveryPlatformKind = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/models/DeviceRecord.js":
/*!****************************************************!*\
  !*** ./build/ts-to-es6/src/models/DeviceRecord.js ***!
  \****************************************************/
/*! exports provided: DeviceRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRecord", function() { return DeviceRecord; });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Environment */ "./build/ts-to-es6/src/Environment.js");
/* harmony import */ var _errors_NotImplementedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/NotImplementedError */ "./build/ts-to-es6/src/errors/NotImplementedError.js");
/* harmony import */ var _DeliveryPlatformKind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeliveryPlatformKind */ "./build/ts-to-es6/src/models/DeliveryPlatformKind.js");
/* harmony import */ var _utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/OneSignalUtils */ "./build/ts-to-es6/src/utils/OneSignalUtils.js");





/**
 * Describes the fields of a OneSignal "player" device record.
 *
 * This is used when creating or modifying push and email records.
 */
class DeviceRecord {
    constructor() {
        // TODO: Possible implementation for appId initialization
        // this.appId = OneSignal.context.appConfig.appId;
        this.language = _Environment__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguage();
        this.timezone = new Date().getTimezoneOffset() * -60;
        const browserVersion = parseInt(String(bowser__WEBPACK_IMPORTED_MODULE_0___default.a.version), 10);
        this.browserVersion = isNaN(browserVersion) ? -1 : browserVersion;
        this.deviceModel = navigator.platform;
        this.sdkVersion = _Environment__WEBPACK_IMPORTED_MODULE_1__["default"].version().toString();
        this.deliveryPlatform = this.getDeliveryPlatform();
        // Unimplemented properties are appId, subscriptionState, and subscription
    }
    isSafari() {
        return bowser__WEBPACK_IMPORTED_MODULE_0___default.a.safari && window.safari !== undefined && window.safari.pushNotification !== undefined;
    }
    getDeliveryPlatform() {
        // For testing purposes, allows changing the browser user agent
        const browser = _utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_4__["OneSignalUtils"].redetectBrowserUserAgent();
        if (this.isSafari()) {
            return _DeliveryPlatformKind__WEBPACK_IMPORTED_MODULE_3__["DeliveryPlatformKind"].Safari;
        }
        else if (browser.firefox) {
            return _DeliveryPlatformKind__WEBPACK_IMPORTED_MODULE_3__["DeliveryPlatformKind"].Firefox;
        }
        else if (browser.msedge) {
            return _DeliveryPlatformKind__WEBPACK_IMPORTED_MODULE_3__["DeliveryPlatformKind"].Edge;
        }
        else {
            return _DeliveryPlatformKind__WEBPACK_IMPORTED_MODULE_3__["DeliveryPlatformKind"].ChromeLike;
        }
    }
    testArsen() {
        console.log("Arsen");
    }
    serialize() {
        const serializedBundle = {
            device_type: this.deliveryPlatform,
            language: this.language,
            timezone: this.timezone,
            device_os: this.browserVersion,
            device_model: this.deviceModel,
            sdk: this.sdkVersion,
            notification_types: this.subscriptionState,
        };
        if (this.appId) {
            serializedBundle.app_id = this.appId;
        }
        return serializedBundle;
    }
    deserialize(_) { throw new _errors_NotImplementedError__WEBPACK_IMPORTED_MODULE_2__["default"](); }
}



/***/ }),

/***/ "./build/ts-to-es6/src/models/EmailProfile.js":
/*!****************************************************!*\
  !*** ./build/ts-to-es6/src/models/EmailProfile.js ***!
  \****************************************************/
/*! exports provided: EmailProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailProfile", function() { return EmailProfile; });
class EmailProfile {
    constructor(emailId, emailAddress, identifierAuthHash) {
        this.emailId = emailId;
        this.emailAddress = emailAddress;
        this.identifierAuthHash = identifierAuthHash;
    }
    serialize() {
        return {
            identifierAuthHash: this.identifierAuthHash,
            emailAddress: this.emailAddress,
            emailId: this.emailId,
        };
    }
    static deserialize(bundle) {
        return new EmailProfile(bundle.emailId, bundle.emailAddress, bundle.identifierAuthHash);
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/models/EnvironmentKind.js":
/*!*******************************************************!*\
  !*** ./build/ts-to-es6/src/models/EnvironmentKind.js ***!
  \*******************************************************/
/*! exports provided: EnvironmentKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentKind", function() { return EnvironmentKind; });
/**
 * Build Environment Kind
 */
var EnvironmentKind;
(function (EnvironmentKind) {
    EnvironmentKind["Development"] = "Development";
    EnvironmentKind["Staging"] = "Staging";
    EnvironmentKind["Production"] = "Production";
})(EnvironmentKind || (EnvironmentKind = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/models/IntegrationKind.js":
/*!*******************************************************!*\
  !*** ./build/ts-to-es6/src/models/IntegrationKind.js ***!
  \*******************************************************/
/*! exports provided: IntegrationKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationKind", function() { return IntegrationKind; });
var IntegrationKind;
(function (IntegrationKind) {
    /**
     * An secure HTTPS site using its own origin for subscribing.
     */
    IntegrationKind["Secure"] = "Secure";
    /**
     * A secure HTTPS site using a proxy subscription origin (e.g. subdomain.os.tc or
     * subdomain.onesignal.com).
     */
    IntegrationKind["SecureProxy"] = "Secure Proxy";
    /**
     * An insecure HTTP site using a proxy subscription origin (e.g. subdomain.os.tc or
     * subdomain.onesignal.com).
     */
    IntegrationKind["InsecureProxy"] = "Insecure Proxy";
})(IntegrationKind || (IntegrationKind = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/models/Outcomes.js":
/*!************************************************!*\
  !*** ./build/ts-to-es6/src/models/Outcomes.js ***!
  \************************************************/
/*! exports provided: OutcomeAttributionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcomeAttributionType", function() { return OutcomeAttributionType; });
var OutcomeAttributionType;
(function (OutcomeAttributionType) {
    OutcomeAttributionType[OutcomeAttributionType["Direct"] = 1] = "Direct";
    OutcomeAttributionType[OutcomeAttributionType["Indirect"] = 2] = "Indirect";
    OutcomeAttributionType[OutcomeAttributionType["Unattributed"] = 3] = "Unattributed";
    OutcomeAttributionType[OutcomeAttributionType["NotSupported"] = 4] = "NotSupported";
})(OutcomeAttributionType || (OutcomeAttributionType = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/models/PermissionPromptType.js":
/*!************************************************************!*\
  !*** ./build/ts-to-es6/src/models/PermissionPromptType.js ***!
  \************************************************************/
/*! exports provided: PermissionPromptType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionPromptType", function() { return PermissionPromptType; });
var PermissionPromptType;
(function (PermissionPromptType) {
    /**
     * The "main" browser native permission request dialog when prompting for local or push notification permissions.
     */
    PermissionPromptType[PermissionPromptType["HttpsPermissionRequest"] = 'HTTPS permission request'] = "HttpsPermissionRequest";
    /**
     * The "popup" to subdomain.onesignal.com.
     */
    PermissionPromptType[PermissionPromptType["FullscreenHttpPermissionMessage"] = 'fullscreen HTTP permission message'] = "FullscreenHttpPermissionMessage";
    /**
     * The full-screen HTTPS modal with a dimmed backdrop.
     */
    PermissionPromptType[PermissionPromptType["FullscreenHttpsPermissionMessage"] = 'fullscreen HTTPS permission message'] = "FullscreenHttpsPermissionMessage";
    /**
     * The "sliding down" prompt.
     */
    PermissionPromptType[PermissionPromptType["SlidedownPermissionMessage"] = 'slidedown permission message'] = "SlidedownPermissionMessage";
    /**
     * The "notify button".
     */
    PermissionPromptType[PermissionPromptType["SubscriptionBell"] = 'subscription bell'] = "SubscriptionBell";
})(PermissionPromptType || (PermissionPromptType = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/models/PushDeviceRecord.js":
/*!********************************************************!*\
  !*** ./build/ts-to-es6/src/models/PushDeviceRecord.js ***!
  \********************************************************/
/*! exports provided: PushDeviceRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushDeviceRecord", function() { return PushDeviceRecord; });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors_NotImplementedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/NotImplementedError */ "./build/ts-to-es6/src/errors/NotImplementedError.js");
/* harmony import */ var _SubscriptionStateKind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscriptionStateKind */ "./build/ts-to-es6/src/models/SubscriptionStateKind.js");
/* harmony import */ var _DeviceRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceRecord */ "./build/ts-to-es6/src/models/DeviceRecord.js");




/**
 * Describes a push notification device record.
 */
class PushDeviceRecord extends _DeviceRecord__WEBPACK_IMPORTED_MODULE_3__["DeviceRecord"] {
    /**
     * @param subscription Omitting this parameter does not void the record's identifier.
     */
    constructor(subscription) {
        super();
        this.subscription = subscription;
    }
    serialize() {
        const serializedBundle = super.serialize();
        if (this.subscription) {
            serializedBundle.identifier = bowser__WEBPACK_IMPORTED_MODULE_0___default.a.safari ?
                this.subscription.safariDeviceToken :
                this.subscription.w3cEndpoint ? this.subscription.w3cEndpoint.toString() : null;
            serializedBundle.web_auth = this.subscription.w3cAuth;
            serializedBundle.web_p256 = this.subscription.w3cP256dh;
        }
        return serializedBundle;
    }
    static createFromPushSubscription(appId, rawPushSubscription, subscriptionState) {
        const pushRegistration = new PushDeviceRecord(rawPushSubscription);
        pushRegistration.appId = appId;
        pushRegistration.subscriptionState = rawPushSubscription ?
            _SubscriptionStateKind__WEBPACK_IMPORTED_MODULE_2__["SubscriptionStateKind"].Subscribed :
            _SubscriptionStateKind__WEBPACK_IMPORTED_MODULE_2__["SubscriptionStateKind"].NotSubscribed;
        if (subscriptionState) {
            pushRegistration.subscriptionState = subscriptionState;
        }
        return pushRegistration;
    }
    deserialize(_) { throw new _errors_NotImplementedError__WEBPACK_IMPORTED_MODULE_1__["default"](); }
}



/***/ }),

/***/ "./build/ts-to-es6/src/models/RawPushSubscription.js":
/*!***********************************************************!*\
  !*** ./build/ts-to-es6/src/models/RawPushSubscription.js ***!
  \***********************************************************/
/*! exports provided: RawPushSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawPushSubscription", function() { return RawPushSubscription; });
class RawPushSubscription {
    /**
     * Returns true if an existing recorded W3C or Safari subscription is
     * identical to the current subscription.
     */
    isNewSubscription() {
        if (this.existingW3cPushSubscription) {
            if (!!this.existingW3cPushSubscription.w3cEndpoint !== !!this.w3cEndpoint) {
                return true;
            }
            if (!!this.existingW3cPushSubscription.w3cEndpoint && !!this.w3cEndpoint &&
                this.existingW3cPushSubscription.w3cEndpoint.toString() !== this.w3cEndpoint.toString()) {
                return true;
            }
            if (this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh) {
                return true;
            }
            if (this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth) {
                return true;
            }
            return false;
        }
        else if (this.existingSafariDeviceToken) {
            return this.existingSafariDeviceToken !== this.safariDeviceToken;
        }
        return true;
    }
    /**
     * Given a native W3C browser push subscription, takes the endpoint, p256dh,
     * and auth.
     *
     * @param pushSubscription A native browser W3C push subscription.
     */
    static setFromW3cSubscription(pushSubscription) {
        const rawPushSubscription = new RawPushSubscription();
        if (pushSubscription) {
            rawPushSubscription.w3cEndpoint = new URL(pushSubscription.endpoint);
            // Retrieve p256dh and auth for encrypted web push protocol
            if (pushSubscription.getKey) {
                // p256dh and auth are both ArrayBuffer
                let p256dh = null;
                try {
                    p256dh = pushSubscription.getKey('p256dh');
                }
                catch (e) {
                    // User is most likely running < Chrome < 50
                }
                let auth = null;
                try {
                    auth = pushSubscription.getKey('auth');
                }
                catch (e) {
                    // User is most likely running < Firefox 45
                }
                if (p256dh) {
                    // Base64 encode the ArrayBuffer (not URL-Safe, using standard Base64)
                    let p256dh_base64encoded = btoa(String.fromCharCode.apply(null, new Uint8Array(p256dh)));
                    rawPushSubscription.w3cP256dh = p256dh_base64encoded;
                }
                if (auth) {
                    // Base64 encode the ArrayBuffer (not URL-Safe, using standard Base64)
                    let auth_base64encoded = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));
                    rawPushSubscription.w3cAuth = auth_base64encoded;
                }
            }
        }
        return rawPushSubscription;
    }
    /**
     * Given a native browser Safari push subscription, sets the device token
     * property.
     *
     * @param safariDeviceToken A native browser Safari push subscription.
     */
    setFromSafariSubscription(safariDeviceToken) {
        this.safariDeviceToken = safariDeviceToken;
    }
    serialize() {
        const serializedBundle = {
            /* Old Parameters */
            w3cEndpoint: this.w3cEndpoint ? this.w3cEndpoint.toString() : null,
            w3cP256dh: this.w3cP256dh,
            w3cAuth: this.w3cAuth,
            safariDeviceToken: this.safariDeviceToken,
            existingPushSubscription: this.existingW3cPushSubscription ? this.existingW3cPushSubscription.serialize() : null,
            existingSafariDeviceToken: this.existingSafariDeviceToken
        };
        return serializedBundle;
    }
    // TODO: had a hard to debug bug here due to "any" type bypassing typescript validation.
    // Check the usage and maybe change with strict type
    static deserialize(bundle) {
        const subscription = new RawPushSubscription();
        if (!bundle) {
            return subscription;
        }
        try {
            subscription.w3cEndpoint = new URL(bundle.w3cEndpoint);
        }
        catch (e) {
            // w3cEndpoint will be null for Safari
        }
        subscription.w3cP256dh = bundle.w3cP256dh;
        subscription.w3cAuth = bundle.w3cAuth;
        subscription.existingW3cPushSubscription = undefined;
        if (bundle.existingW3cPushSubscription) {
            subscription.existingW3cPushSubscription = RawPushSubscription.deserialize(bundle.existingW3cPushSubscription);
        }
        else if (bundle.existingPushSubscription) {
            subscription.existingW3cPushSubscription = RawPushSubscription.deserialize(bundle.existingPushSubscription);
        }
        subscription.safariDeviceToken = bundle.safariDeviceToken;
        subscription.existingSafariDeviceToken = bundle.existingSafariDeviceToken;
        return subscription;
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/models/Session.js":
/*!***********************************************!*\
  !*** ./build/ts-to-es6/src/models/Session.js ***!
  \***********************************************/
/*! exports provided: SessionStatus, SessionOrigin, ONESIGNAL_SESSION_KEY, initializeNewSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStatus", function() { return SessionStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionOrigin", function() { return SessionOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONESIGNAL_SESSION_KEY", function() { return ONESIGNAL_SESSION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeNewSession", function() { return initializeNewSession; });
var SessionStatus;
(function (SessionStatus) {
    SessionStatus["Active"] = "active";
    SessionStatus["Inactive"] = "inactive";
    SessionStatus["Expired"] = "expired";
})(SessionStatus || (SessionStatus = {}));
var SessionOrigin;
(function (SessionOrigin) {
    SessionOrigin[SessionOrigin["PlayerCreate"] = 1] = "PlayerCreate";
    SessionOrigin[SessionOrigin["PlayerOnSession"] = 2] = "PlayerOnSession";
    SessionOrigin[SessionOrigin["VisibilityVisible"] = 3] = "VisibilityVisible";
    SessionOrigin[SessionOrigin["VisibilityHidden"] = 4] = "VisibilityHidden";
    SessionOrigin[SessionOrigin["BeforeUnload"] = 5] = "BeforeUnload";
    SessionOrigin[SessionOrigin["PageRefresh"] = 6] = "PageRefresh";
    SessionOrigin[SessionOrigin["Focus"] = 7] = "Focus";
    SessionOrigin[SessionOrigin["Blur"] = 8] = "Blur";
})(SessionOrigin || (SessionOrigin = {}));
const ONESIGNAL_SESSION_KEY = "oneSignalSession";
function initializeNewSession(options) {
    const currentTimestamp = new Date().getTime();
    const sessionKey = options && options.sessionKey || ONESIGNAL_SESSION_KEY;
    const notificationId = (options && options.notificationId) || null;
    return {
        sessionKey,
        appId: options.appId,
        deviceId: options.deviceId,
        deviceType: options.deviceType,
        startTimestamp: currentTimestamp,
        accumulatedDuration: 0,
        notificationId,
        status: SessionStatus.Active,
        lastDeactivatedTimestamp: null,
        lastActivatedTimestamp: currentTimestamp,
    };
}



/***/ }),

/***/ "./build/ts-to-es6/src/models/Subscription.js":
/*!****************************************************!*\
  !*** ./build/ts-to-es6/src/models/Subscription.js ***!
  \****************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
class Subscription {
    serialize() {
        return {
            deviceId: this.deviceId,
            subscriptionToken: this.subscriptionToken,
            optedOut: this.optedOut,
            createdAt: this.createdAt,
            expirationTime: this.expirationTime,
        };
    }
    static deserialize(bundle) {
        const subscription = new Subscription();
        subscription.deviceId = bundle.deviceId;
        subscription.subscriptionToken = bundle.subscriptionToken;
        subscription.optedOut = bundle.optedOut;
        subscription.createdAt = bundle.createdAt;
        subscription.expirationTime = bundle.expirationTime;
        return subscription;
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/models/SubscriptionStateKind.js":
/*!*************************************************************!*\
  !*** ./build/ts-to-es6/src/models/SubscriptionStateKind.js ***!
  \*************************************************************/
/*! exports provided: SubscriptionStateKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionStateKind", function() { return SubscriptionStateKind; });
var SubscriptionStateKind;
(function (SubscriptionStateKind) {
    SubscriptionStateKind[SubscriptionStateKind["Default"] = 0] = "Default";
    SubscriptionStateKind[SubscriptionStateKind["Subscribed"] = 1] = "Subscribed";
    SubscriptionStateKind[SubscriptionStateKind["MutedByApi"] = -2] = "MutedByApi";
    SubscriptionStateKind[SubscriptionStateKind["NotSubscribed"] = -10] = "NotSubscribed";
    SubscriptionStateKind[SubscriptionStateKind["TemporaryWebRecord"] = -20] = "TemporaryWebRecord";
    SubscriptionStateKind[SubscriptionStateKind["PermissionRevoked"] = -21] = "PermissionRevoked";
    SubscriptionStateKind[SubscriptionStateKind["PushSubscriptionRevoked"] = -22] = "PushSubscriptionRevoked";
    SubscriptionStateKind[SubscriptionStateKind["ServiceWorkerStatus403"] = -23] = "ServiceWorkerStatus403";
    SubscriptionStateKind[SubscriptionStateKind["ServiceWorkerStatus404"] = -24] = "ServiceWorkerStatus404";
})(SubscriptionStateKind || (SubscriptionStateKind = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/models/TestEnvironmentKind.js":
/*!***********************************************************!*\
  !*** ./build/ts-to-es6/src/models/TestEnvironmentKind.js ***!
  \***********************************************************/
/*! exports provided: TestEnvironmentKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestEnvironmentKind", function() { return TestEnvironmentKind; });
var TestEnvironmentKind;
(function (TestEnvironmentKind) {
    TestEnvironmentKind["None"] = "None";
    TestEnvironmentKind["UnitTesting"] = "Unit Testing";
})(TestEnvironmentKind || (TestEnvironmentKind = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/models/WindowEnvironmentKind.js":
/*!*************************************************************!*\
  !*** ./build/ts-to-es6/src/models/WindowEnvironmentKind.js ***!
  \*************************************************************/
/*! exports provided: WindowEnvironmentKind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowEnvironmentKind", function() { return WindowEnvironmentKind; });
var WindowEnvironmentKind;
(function (WindowEnvironmentKind) {
    /**
     * A service worker environment.
     */
    WindowEnvironmentKind["ServiceWorker"] = "ServiceWorker";
    /**
     * The top-level frame to the "main" client's site.
     */
    WindowEnvironmentKind["Host"] = "Host";
    /**
     * Our subscription popup for alt-origin sites.
     */
    WindowEnvironmentKind["OneSignalSubscriptionPopup"] = "Popup";
    /**
     * Our subscription modal for HTTPS sites, which loads in an iFrame.
     */
    WindowEnvironmentKind["OneSignalSubscriptionModal"] = "Modal";
    /**
     * Our subscription helper iFrame.
     */
    WindowEnvironmentKind["OneSignalProxyFrame"] = "ProxyFrame";
    /**
     * A custom iFrame on the site.
     */
    WindowEnvironmentKind["CustomIframe"] = "CustomFrame";
    /**
     * An unknown window context type not matching any of the above.
     */
    WindowEnvironmentKind["Unknown"] = "Unknown";
})(WindowEnvironmentKind || (WindowEnvironmentKind = {}));



/***/ }),

/***/ "./build/ts-to-es6/src/services/Database.js":
/*!**************************************************************!*\
  !*** ./build/ts-to-es6/src/services/Database.js + 2 modules ***!
  \**************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/context/shared/utils/Utils.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/libraries/Emitter.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/libraries/Log.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/managers/SdkEnvironment.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/EmailProfile.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/Session.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/Subscription.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/TestEnvironmentKind.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/models/WindowEnvironmentKind.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/services/IndexedDb.js because of ./build/ts-to-es6/src/OneSignal.js */
/*! ModuleConcatenation bailout: Cannot concat with ./build/ts-to-es6/src/utils/OneSignalUtils.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/tslib/tslib.es6.js because of ./build/ts-to-es6/src/entries/pageSdkInit.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/libraries/Emitter.js
var Emitter = __webpack_require__("./build/ts-to-es6/src/libraries/Emitter.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/services/IndexedDb.js
var IndexedDb = __webpack_require__("./build/ts-to-es6/src/services/IndexedDb.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/models/AppState.js
class AppState {
}



// CONCATENATED MODULE: ./build/ts-to-es6/src/models/ServiceWorkerState.js
class ServiceWorkerState {
}



// EXTERNAL MODULE: ./build/ts-to-es6/src/models/Subscription.js
var Subscription = __webpack_require__("./build/ts-to-es6/src/models/Subscription.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/TestEnvironmentKind.js
var TestEnvironmentKind = __webpack_require__("./build/ts-to-es6/src/models/TestEnvironmentKind.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/WindowEnvironmentKind.js
var WindowEnvironmentKind = __webpack_require__("./build/ts-to-es6/src/models/WindowEnvironmentKind.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/EmailProfile.js
var EmailProfile = __webpack_require__("./build/ts-to-es6/src/models/EmailProfile.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/models/Session.js
var Session = __webpack_require__("./build/ts-to-es6/src/models/Session.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/managers/SdkEnvironment.js
var SdkEnvironment = __webpack_require__("./build/ts-to-es6/src/managers/SdkEnvironment.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/utils/OneSignalUtils.js
var OneSignalUtils = __webpack_require__("./build/ts-to-es6/src/utils/OneSignalUtils.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/context/shared/utils/Utils.js + 1 modules
var Utils = __webpack_require__("./build/ts-to-es6/src/context/shared/utils/Utils.js");

// EXTERNAL MODULE: ./build/ts-to-es6/src/libraries/Log.js
var Log = __webpack_require__("./build/ts-to-es6/src/libraries/Log.js");

// CONCATENATED MODULE: ./build/ts-to-es6/src/services/Database.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Database_Database; });














var Database_DatabaseEventName;
(function (DatabaseEventName) {
    DatabaseEventName[DatabaseEventName["SET"] = 0] = "SET";
})(Database_DatabaseEventName || (Database_DatabaseEventName = {}));
class Database_Database {
    constructor(databaseName) {
        this.databaseName = databaseName;
        this.emitter = new Emitter["default"]();
        this.database = new IndexedDb["default"](this.databaseName);
    }
    static resetInstance() {
        Database_Database.databaseInstance = null;
    }
    static get singletonInstance() {
        if (!Database_Database.databaseInstanceName) {
            Database_Database.databaseInstanceName = "ONE_SIGNAL_SDK_DB";
        }
        if (!Database_Database.databaseInstance) {
            Database_Database.databaseInstance = new Database_Database(Database_Database.databaseInstanceName);
        }
        return Database_Database.databaseInstance;
    }
    static applyDbResultFilter(table, key, result) {
        switch (table) {
            case "Options":
                if (result && key)
                    return result.value;
                else if (result && !key)
                    return result;
                else
                    return null;
            case "Ids":
                if (result && key)
                    return result.id;
                else if (result && !key)
                    return result;
                else
                    return null;
            case "NotificationOpened":
                if (result && key)
                    return { data: result.data, timestamp: result.timestamp };
                else if (result && !key)
                    return result;
                else
                    return null;
            default:
                if (result)
                    return result;
                else
                    return null;
        }
    }
    shouldUsePostmam() {
        return SdkEnvironment["default"].getWindowEnv() !== WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker &&
            OneSignalUtils["default"].isUsingSubscriptionWorkaround() &&
            SdkEnvironment["default"].getTestEnv() === TestEnvironmentKind["TestEnvironmentKind"].None;
    }
    /**
     * Asynchronously retrieves the value of the key at the table (if key is specified), or the entire table
     * (if key is not specified).
     * If on an iFrame or popup environment, retrieves from the correct IndexedDB database using cross-domain messaging.
     * @param table The table to retrieve the value from.
     * @param key The key in the table to retrieve the value of. Leave blank to get the entire table.
     * @returns {Promise} Returns a promise that fulfills when the value(s) are available.
     */
    get(table, key) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (this.shouldUsePostmam()) {
                return yield new Promise((resolve) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{
                            table: table,
                            key: key
                        }], (reply) => {
                        const result = reply.data[0];
                        resolve(result);
                    });
                }));
            }
            else {
                const result = yield this.database.get(table, key);
                const cleanResult = Database_Database.applyDbResultFilter(table, key, result);
                return cleanResult;
            }
        });
    }
    getAll(table) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (this.shouldUsePostmam()) {
                return yield new Promise((resolve) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET_ALL, {
                        table: table
                    }, (reply) => {
                        const result = reply.data;
                        resolve(result);
                    });
                }));
            }
            else {
                const result = yield this.database.getAll(table);
                return result;
            }
        });
    }
    /**
     * Asynchronously puts the specified value in the specified table.
     * @param table
     * @param keypath
     */
    put(table, keypath) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise((resolve, reject) => Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
                if (SdkEnvironment["default"].getWindowEnv() !== WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker &&
                    OneSignalUtils["default"].isUsingSubscriptionWorkaround() &&
                    SdkEnvironment["default"].getTestEnv() === TestEnvironmentKind["TestEnvironmentKind"].None) {
                    OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{ table: table, keypath: keypath }], (reply) => {
                        if (reply.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                            resolve();
                        }
                        else {
                            reject(`(Database) Attempted remote IndexedDB put(${table}, ${keypath}),` +
                                `but did not get success response.`);
                        }
                    });
                }
                else {
                    yield this.database.put(table, keypath);
                    resolve();
                }
            }));
            this.emitter.emit(Database_Database.EVENTS.SET, keypath);
        });
    }
    /**
     * Asynchronously removes the specified key from the table, or if the key is not specified, removes all
     * keys in the table.
     * @returns {Promise} Returns a promise containing a key that is fulfilled when deletion is completed.
     */
    remove(table, keypath) {
        if (SdkEnvironment["default"].getWindowEnv() !== WindowEnvironmentKind["WindowEnvironmentKind"].ServiceWorker &&
            OneSignalUtils["default"].isUsingSubscriptionWorkaround() &&
            SdkEnvironment["default"].getTestEnv() === TestEnvironmentKind["TestEnvironmentKind"].None) {
            return new Promise((resolve, reject) => {
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{ table: table, keypath: keypath }], (reply) => {
                    if (reply.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                        resolve();
                    }
                    else {
                        reject(`(Database) Attempted remote IndexedDB remove(${table}, ${keypath}),` +
                            `but did not get success response.`);
                    }
                });
            });
        }
        else {
            return this.database.remove(table, keypath);
        }
    }
    getAppConfig() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const config = {};
            const appIdStr = yield this.get("Ids", "appId");
            config.appId = appIdStr;
            config.subdomain = yield this.get("Options", "subdomain");
            config.vapidPublicKey = yield this.get("Options", "vapidPublicKey");
            return config;
        });
    }
    getExternalUserId() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.get("Ids", "externalUserId");
        });
    }
    getExternalUserIdAuthHash() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.get("Ids", "externalUserIdAuthHash");
        });
    }
    setExternalUserId(externalUserId, authHash) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const emptyString = "";
            const externalIdToSave = Utils["default"].getValueOrDefault(externalUserId, emptyString);
            const authHashToSave = Utils["default"].getValueOrDefault(authHash, emptyString);
            if (externalIdToSave === emptyString) {
                yield this.remove("Ids", "externalUserId");
            }
            else {
                yield this.put("Ids", { type: "externalUserId", id: externalIdToSave });
            }
            if (authHashToSave === emptyString) {
                yield this.remove("Ids", "externalUserIdAuthHash");
            }
            else {
                yield this.put("Ids", { type: "externalUserIdAuthHash", id: authHashToSave });
            }
        });
    }
    setAppConfig(appConfig) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (appConfig.appId)
                yield this.put("Ids", { type: "appId", id: appConfig.appId });
            if (appConfig.subdomain)
                yield this.put("Options", { key: "subdomain", value: appConfig.subdomain });
            if (appConfig.httpUseOneSignalCom === true)
                yield this.put("Options", { key: "httpUseOneSignalCom", value: true });
            else if (appConfig.httpUseOneSignalCom === false)
                yield this.put("Options", { key: "httpUseOneSignalCom", value: false });
            if (appConfig.vapidPublicKey)
                yield this.put("Options", { key: "vapidPublicKey", value: appConfig.vapidPublicKey });
        });
    }
    getAppState() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const state = new AppState();
            state.defaultNotificationUrl = yield this.get("Options", "defaultUrl");
            state.defaultNotificationTitle = yield this.get("Options", "defaultTitle");
            state.lastKnownPushEnabled = yield this.get("Options", "isPushEnabled");
            state.clickedNotifications = yield this.get("NotificationOpened");
            return state;
        });
    }
    setAppState(appState) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (appState.defaultNotificationUrl)
                yield this.put("Options", { key: "defaultUrl", value: appState.defaultNotificationUrl });
            if (appState.defaultNotificationTitle || appState.defaultNotificationTitle === "")
                yield this.put("Options", { key: "defaultTitle", value: appState.defaultNotificationTitle });
            if (appState.lastKnownPushEnabled != null)
                yield this.put("Options", { key: "isPushEnabled", value: appState.lastKnownPushEnabled });
            if (appState.clickedNotifications) {
                const clickedNotificationUrls = Object.keys(appState.clickedNotifications);
                for (const url of clickedNotificationUrls) {
                    const notificationDetails = appState.clickedNotifications[url];
                    if (notificationDetails) {
                        yield this.put("NotificationOpened", {
                            url: url,
                            data: notificationDetails.data,
                            timestamp: notificationDetails.timestamp
                        });
                    }
                    else if (notificationDetails === null) {
                        // If we get an object like:
                        // { "http://site.com/page": null}
                        // It means we need to remove that entry
                        yield this.remove("NotificationOpened", url);
                    }
                }
            }
        });
    }
    getServiceWorkerState() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const state = new ServiceWorkerState();
            state.workerVersion = yield this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION");
            state.updaterWorkerVersion = yield this.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION");
            return state;
        });
    }
    setServiceWorkerState(state) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (state.workerVersion)
                yield this.put("Ids", { type: "WORKER1_ONE_SIGNAL_SW_VERSION", id: state.workerVersion });
            if (state.updaterWorkerVersion)
                yield this.put("Ids", { type: "WORKER2_ONE_SIGNAL_SW_VERSION", id: state.updaterWorkerVersion });
        });
    }
    getSubscription() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const subscription = new Subscription["Subscription"]();
            subscription.deviceId = yield this.get("Ids", "userId");
            subscription.subscriptionToken = yield this.get("Ids", "registrationId");
            // The preferred database key to store our subscription
            const dbOptedOut = yield this.get("Options", "optedOut");
            // For backwards compatibility, we need to read from this if the above is not found
            const dbNotOptedOut = yield this.get("Options", "subscription");
            const createdAt = yield this.get("Options", "subscriptionCreatedAt");
            const expirationTime = yield this.get("Options", "subscriptionExpirationTime");
            if (dbOptedOut != null) {
                subscription.optedOut = dbOptedOut;
            }
            else {
                if (dbNotOptedOut == null) {
                    subscription.optedOut = false;
                }
                else {
                    subscription.optedOut = !dbNotOptedOut;
                }
            }
            subscription.createdAt = createdAt;
            subscription.expirationTime = expirationTime;
            return subscription;
        });
    }
    setDeviceId(deviceId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield this.put("Ids", { type: "userId", id: deviceId });
        });
    }
    setSubscription(subscription) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (subscription.deviceId) {
                yield this.setDeviceId(subscription.deviceId);
            }
            if (typeof subscription.subscriptionToken !== "undefined") {
                // Allow null subscriptions to be set
                yield this.put("Ids", { type: "registrationId", id: subscription.subscriptionToken });
            }
            if (subscription.optedOut != null) { // Checks if null or undefined, allows false
                yield this.put("Options", { key: "optedOut", value: subscription.optedOut });
            }
            if (subscription.createdAt != null) {
                yield this.put("Options", { key: "subscriptionCreatedAt", value: subscription.createdAt });
            }
            if (subscription.expirationTime != null) {
                yield this.put("Options", { key: "subscriptionExpirationTime", value: subscription.expirationTime });
            }
            else {
                yield this.remove("Options", "subscriptionExpirationTime");
            }
        });
    }
    getEmailProfile() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const profileJson = yield this.get("Ids", "emailProfile");
            if (profileJson) {
                return EmailProfile["EmailProfile"].deserialize(profileJson);
            }
            else {
                return new EmailProfile["EmailProfile"]();
            }
        });
    }
    setEmailProfile(emailProfile) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            if (emailProfile) {
                yield this.put("Ids", { type: "emailProfile", id: emailProfile.serialize() });
            }
        });
    }
    setProvideUserConsent(consent) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield this.put("Options", { key: "userConsent", value: consent });
        });
    }
    getProvideUserConsent() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.get("Options", "userConsent");
        });
    }
    getSession(sessionKey) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.get("Sessions", sessionKey);
        });
    }
    setSession(session) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield this.put("Sessions", session);
        });
    }
    removeSession(sessionKey) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield this.remove("Sessions", sessionKey);
        });
    }
    getLastNotificationClicked(appId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            let allClickedNotifications = [];
            try {
                allClickedNotifications = yield this.getAll("NotificationClicked");
            }
            catch (e) {
                Log["default"].error("Database.getNotificationClickedByUrl", e);
            }
            const predicate = (notification) => notification.appId === appId;
            return allClickedNotifications.find(predicate) || null;
        });
    }
    getNotificationClickedByUrl(url, appId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            let allClickedNotifications = [];
            try {
                allClickedNotifications = yield this.getAll("NotificationClicked");
            }
            catch (e) {
                Log["default"].error("Database.getNotificationClickedByUrl", e);
            }
            const predicate = (notification) => {
                if (notification.appId !== appId) {
                    return false;
                }
                return new URL(url).origin === new URL(notification.url).origin;
            };
            return allClickedNotifications.find(predicate) || null;
        });
    }
    getNotificationClickedById(notificationId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.get("NotificationClicked", notificationId);
        });
    }
    getNotificationReceivedById(notificationId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.get("NotificationReceived", notificationId);
        });
    }
    removeNotificationClickedById(notificationId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield this.remove("NotificationClicked", notificationId);
        });
    }
    removeAllNotificationClicked() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield this.remove("NotificationClicked");
        });
    }
    resetSentUniqueOutcomes() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            const outcomes = yield this.getAll("SentUniqueOutcome");
            const promises = outcomes.map(o => {
                o.sentDuringSession = null;
                return Database_Database.put("SentUniqueOutcome", o);
            });
            yield Promise.all(promises);
        });
    }
    /**
     * Asynchronously removes the Ids, NotificationOpened, and Options tables from the database and recreates them
     * with blank values.
     * @returns {Promise} Returns a promise that is fulfilled when rebuilding is completed, or rejects with an error.
     */
    static rebuild() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return Promise.all([
                Database_Database.singletonInstance.remove("Ids"),
                Database_Database.singletonInstance.remove("NotificationOpened"),
                Database_Database.singletonInstance.remove("Options"),
                Database_Database.singletonInstance.remove("NotificationReceived"),
                Database_Database.singletonInstance.remove("NotificationClicked"),
                Database_Database.singletonInstance.remove("SentUniqueOutcome")
            ]);
        });
    }
    // START: Static mappings to instance methods
    static on(...args) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return Database_Database.singletonInstance.emitter.on.apply(Database_Database.singletonInstance.emitter, args);
        });
    }
    static getCurrentSession() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getSession(Session["ONESIGNAL_SESSION_KEY"]);
        });
    }
    static upsertSession(session) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Database_Database.singletonInstance.setSession(session);
        });
    }
    static cleanupCurrentSession() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Database_Database.singletonInstance.removeSession(Session["ONESIGNAL_SESSION_KEY"]);
        });
    }
    static setEmailProfile(emailProfile) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.setEmailProfile(emailProfile);
        });
    }
    static getEmailProfile() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getEmailProfile();
        });
    }
    static setSubscription(subscription) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.setSubscription(subscription);
        });
    }
    static getSubscription() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getSubscription();
        });
    }
    static setProvideUserConsent(consent) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.setProvideUserConsent(consent);
        });
    }
    static getProvideUserConsent() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getProvideUserConsent();
        });
    }
    static setServiceWorkerState(workerState) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.setServiceWorkerState(workerState);
        });
    }
    static getServiceWorkerState() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getServiceWorkerState();
        });
    }
    static setAppState(appState) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.setAppState(appState);
        });
    }
    static getAppState() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getAppState();
        });
    }
    static setAppConfig(appConfig) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.setAppConfig(appConfig);
        });
    }
    static getAppConfig() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getAppConfig();
        });
    }
    static getExternalUserId() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getExternalUserId();
        });
    }
    static getExternalUserIdAuthHash() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getExternalUserIdAuthHash();
        });
    }
    static getLastNotificationClicked(appId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getLastNotificationClicked(appId);
        });
    }
    static removeNotificationClickedById(notificationId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.removeNotificationClickedById(notificationId);
        });
    }
    static removeAllNotificationClicked() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.removeAllNotificationClicked();
        });
    }
    static resetSentUniqueOutcomes() {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.resetSentUniqueOutcomes();
        });
    }
    static getNotificationClickedByUrl(url, appId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getNotificationClickedByUrl(url, appId);
        });
    }
    static getNotificationClickedById(notificationId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getNotificationClickedById(notificationId);
        });
    }
    static getNotificationReceivedById(notificationId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getNotificationReceivedById(notificationId);
        });
    }
    static setExternalUserId(externalUserId, authHash) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Database_Database.singletonInstance.setExternalUserId(externalUserId, authHash);
        });
    }
    static setDeviceId(deviceId) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            yield Database_Database.singletonInstance.setDeviceId(deviceId);
        });
    }
    static remove(table, keypath) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.remove(table, keypath);
        });
    }
    static put(table, keypath) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.put(table, keypath);
        });
    }
    static get(table, key) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.get(table, key);
        });
    }
    static getAll(table) {
        return Object(tslib_es6["__awaiter"])(this, void 0, void 0, function* () {
            return yield Database_Database.singletonInstance.getAll(table);
        });
    }
}
/* End Temp Database Proxy */
Database_Database.EVENTS = Database_DatabaseEventName;



/***/ }),

/***/ "./build/ts-to-es6/src/services/IndexedDb.js":
/*!***************************************************!*\
  !*** ./build/ts-to-es6/src/services/IndexedDb.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexedDb; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _libraries_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libraries/Emitter */ "./build/ts-to-es6/src/libraries/Emitter.js");
/* harmony import */ var _libraries_Log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js");
/* harmony import */ var _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/shared/utils/Utils */ "./build/ts-to-es6/src/context/shared/utils/Utils.js");




const DATABASE_VERSION = 3;
class IndexedDb {
    constructor(databaseName) {
        this.databaseName = databaseName;
        this.emitter = new _libraries_Emitter__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    open(databaseName) {
        return new Promise(resolve => {
            let request = undefined;
            try {
                // Open algorithm: https://www.w3.org/TR/IndexedDB/#h-opening
                request = indexedDB.open(databaseName, DATABASE_VERSION);
            }
            catch (e) {
                // Errors should be thrown on the request.onerror event, but just in case Firefox throws additional errors
                // for profile schema too high
            }
            if (!request) {
                return null;
            }
            request.onerror = this.onDatabaseOpenError;
            request.onblocked = this.onDatabaseOpenBlocked;
            request.onupgradeneeded = this.onDatabaseUpgradeNeeded;
            request.onsuccess = () => {
                this.database = request.result;
                this.database.onerror = this.onDatabaseError;
                this.database.onversionchange = this.onDatabaseVersionChange;
                resolve(this.database);
            };
        });
    }
    ensureDatabaseOpen() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.openLock) {
                this.openLock = this.open(this.databaseName);
            }
            return yield this.openLock;
        });
    }
    onDatabaseOpenError(event) {
        // Prevent the error from bubbling: https://bugzilla.mozilla.org/show_bug.cgi?id=1331103#c3
        /**
         * To prevent error reporting tools like Sentry.io from picking up errors that
         * the site owner can't do anything about and use up their quota, hide database open
         * errors.
         */
        event.preventDefault();
        const error = event.target.error;
        if (_context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_3__["default"].contains(error.message, 'The operation failed for reasons unrelated to the database itself and not covered by any other error code') ||
            _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_3__["default"].contains(error.message, 'A mutation operation was attempted on a database that did not allow mutations')) {
            _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6");
        }
        else {
            _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].warn('OneSignal: Fatal error opening IndexedDb database:', error);
        }
    }
    /**
     * Error events bubble. Error events are targeted at the request that generated the error, then the event bubbles to
     * the transaction, and then finally to the database object. If you want to avoid adding error handlers to every
     * request, you can instead add a single error handler on the database object.
     */
    onDatabaseError(event) {
        _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('IndexedDb: Generic database error', event.target.errorCode);
    }
    /**
     * Occurs when the upgradeneeded should be triggered because of a version change but the database is still in use
     * (that is, not closed) somewhere, even after the versionchange event was sent.
     */
    onDatabaseOpenBlocked() {
        _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('IndexedDb: Blocked event');
    }
    /**
     * Occurs when a database structure change (IDBOpenDBRequest.onupgradeneeded event or IDBFactory.deleteDatabase) was
     * requested elsewhere (most probably in another window/tab on the same computer).
     *
     * versionchange Algorithm: https://www.w3.org/TR/IndexedDB/#h-versionchange-transaction-steps
     *
     * Ref: https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/onversionchange
     */
    onDatabaseVersionChange(_) {
        _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('IndexedDb: versionchange event');
    }
    /**
     * Occurs when a new version of the database needs to be created, or has not been created before, or a new version
     * of the database was requested to be opened when calling window.indexedDB.open.
     *
     * Ref: https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded
     */
    onDatabaseUpgradeNeeded(event) {
        _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].debug('IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event).');
        const db = event.target.result;
        if (event.oldVersion < 1) {
            db.createObjectStore("Ids", { keyPath: "type" });
            db.createObjectStore("NotificationOpened", { keyPath: "url" });
            db.createObjectStore("Options", { keyPath: "key" });
        }
        if (event.oldVersion < 2) {
            db.createObjectStore("Sessions", { keyPath: "sessionKey" });
            db.createObjectStore("NotificationReceived", { keyPath: "notificationId" });
            db.createObjectStore("NotificationClicked", { keyPath: "notificationId" });
        }
        if (event.oldVersion < 3) {
            db.createObjectStore("SentUniqueOutcome", { keyPath: "outcomeName" });
        }
        // Wrap in conditional for tests
        if (typeof OneSignal !== "undefined") {
            OneSignal._isNewVisitor = true;
        }
    }
    /**
     * Asynchronously retrieves the value of the key at the table (if key is specified), or the entire table (if key is not specified).
     * @param table The table to retrieve the value from.
     * @param key The key in the table to retrieve the value of. Leave blank to get the entire table.
     * @returns {Promise} Returns a promise that fulfills when the value(s) are available.
     */
    get(table, key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const database = yield this.ensureDatabaseOpen();
            if (key) {
                // Return a table-key value
                return yield new Promise((resolve, reject) => {
                    const request = database.transaction(table).objectStore(table).get(key);
                    request.onsuccess = () => {
                        resolve(request.result);
                    };
                    request.onerror = () => {
                        reject(request.error);
                    };
                });
            }
            else {
                // Return all values in table
                return yield new Promise((resolve, reject) => {
                    let jsonResult = {};
                    let cursor = database.transaction(table).objectStore(table).openCursor();
                    cursor.onsuccess = (event) => {
                        const cursorResult = event.target.result;
                        if (cursorResult) {
                            let cursorResultKey = cursorResult.key;
                            jsonResult[cursorResultKey] = cursorResult.value;
                            cursorResult.continue();
                        }
                        else {
                            resolve(jsonResult);
                        }
                    };
                    cursor.onerror = () => {
                        reject(cursor.error);
                    };
                });
            }
        });
    }
    getAll(table) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const database = yield this.ensureDatabaseOpen();
                let cursor = database.transaction(table).objectStore(table).openCursor();
                const result = [];
                cursor.onsuccess = (event) => {
                    const cursorResult = event.target.result;
                    if (cursorResult) {
                        result.push(cursorResult.value);
                        cursorResult.continue();
                    }
                    else {
                        resolve(result);
                    }
                };
                cursor.onerror = () => {
                    reject(cursor.error);
                };
            }));
        });
    }
    /**
     * Asynchronously puts the specified value in the specified table.
     */
    put(table, key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.ensureDatabaseOpen();
            return yield new Promise((resolve, reject) => {
                try {
                    let request = this.database.transaction([table], 'readwrite').objectStore(table).put(key);
                    request.onsuccess = () => {
                        resolve(key);
                    };
                    request.onerror = (e) => {
                        _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Database PUT Transaction Error:', e);
                        reject(e);
                    };
                }
                catch (e) {
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Database PUT Error:', e);
                    reject(e);
                }
            });
        });
    }
    /**
     * Asynchronously removes the specified key from the table, or if the key is not specified, removes all keys in the table.
     * @returns {Promise} Returns a promise containing a key that is fulfilled when deletion is completed.
     */
    remove(table, key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const database = yield this.ensureDatabaseOpen();
            return new Promise((resolve, reject) => {
                try {
                    const store = database.transaction([table], "readwrite").objectStore(table);
                    // If key is present remove a single key from a table.
                    // Otherwise wipe the table
                    const request = key ? store.delete(key) : store.clear();
                    request.onsuccess = () => {
                        resolve(key);
                    };
                    request.onerror = (e) => {
                        _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Database REMOVE Transaction Error:', e);
                        reject(e);
                    };
                }
                catch (e) {
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_2__["default"].error('Database REMOVE Error:', e);
                    reject(e);
                }
            });
        });
    }
}



/***/ }),

/***/ "./build/ts-to-es6/src/utils.js":
/*!**************************************!*\
  !*** ./build/ts-to-es6/src/utils.js ***!
  \**************************************/
/*! exports provided: isArray, decodeHtmlEntities, removeDomElement, awaitOneSignalInitAndSupported, isUsingSubscriptionWorkaround, triggerNotificationPermissionChanged, stringify, executeCallback, logMethodCall, isValidEmail, addDomElement, clearDomElementChildren, addCssClass, removeCssClass, hasCssClass, getConsoleStyle, delay, nothing, timeoutPromise, when, contains, trimUndefined, getRandomUuid, isValidUuid, getUrlQueryParam, wipeIndexedDb, capitalize, unsubscribeFromPush, wait, substringAfter, once, getSdkLoadCount, awaitSdkEvent, incrementSdkLoadCount, getPlatformNotificationIcon, getDomElementOrStub, deepCopy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeHtmlEntities", function() { return decodeHtmlEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDomElement", function() { return removeDomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitOneSignalInitAndSupported", function() { return awaitOneSignalInitAndSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsingSubscriptionWorkaround", function() { return isUsingSubscriptionWorkaround; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerNotificationPermissionChanged", function() { return triggerNotificationPermissionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeCallback", function() { return executeCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logMethodCall", function() { return logMethodCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEmail", function() { return isValidEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDomElement", function() { return addDomElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDomElementChildren", function() { return clearDomElementChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCssClass", function() { return addCssClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCssClass", function() { return removeCssClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCssClass", function() { return hasCssClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConsoleStyle", function() { return getConsoleStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return nothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutPromise", function() { return timeoutPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimUndefined", function() { return trimUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomUuid", function() { return getRandomUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidUuid", function() { return isValidUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlQueryParam", function() { return getUrlQueryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wipeIndexedDb", function() { return wipeIndexedDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeFromPush", function() { return unsubscribeFromPush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substringAfter", function() { return substringAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSdkLoadCount", function() { return getSdkLoadCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitSdkEvent", function() { return awaitSdkEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementSdkLoadCount", function() { return incrementSdkLoadCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlatformNotificationIcon", function() { return getPlatformNotificationIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomElementOrStub", function() { return getDomElementOrStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCopy", function() { return deepCopy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers/SdkEnvironment */ "./build/ts-to-es6/src/managers/SdkEnvironment.js");
/* harmony import */ var _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/WindowEnvironmentKind */ "./build/ts-to-es6/src/models/WindowEnvironmentKind.js");
/* harmony import */ var _services_Database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/Database */ "./build/ts-to-es6/src/services/Database.js");
/* harmony import */ var _libraries_Log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js");
/* harmony import */ var _utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/OneSignalUtils */ "./build/ts-to-es6/src/utils/OneSignalUtils.js");
/* harmony import */ var _utils_PermissionUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PermissionUtils */ "./build/ts-to-es6/src/utils/PermissionUtils.js");
/* harmony import */ var _utils_BrowserUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/BrowserUtils */ "./build/ts-to-es6/src/utils/BrowserUtils.js");
/* harmony import */ var _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/shared/utils/Utils */ "./build/ts-to-es6/src/context/shared/utils/Utils.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_9__);










function isArray(variable) {
    return Object.prototype.toString.call(variable) === '[object Array]';
}
function decodeHtmlEntities(text) {
    return _utils_BrowserUtils__WEBPACK_IMPORTED_MODULE_7__["BrowserUtils"].decodeHtmlEntities(text);
}
function removeDomElement(selector) {
    var els = document.querySelectorAll(selector);
    if (els.length > 0) {
        for (let i = 0; i < els.length; i++) {
            const parentNode = els[i].parentNode;
            if (parentNode) {
                parentNode.removeChild(els[i]);
            }
        }
    }
}
/**
 * Helper method for public APIs that waits until OneSignal is initialized, rejects if push notifications are
 * not supported, and wraps these tasks in a Promise.
 */
function awaitOneSignalInitAndSupported() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            if (!OneSignal.initialized)
                OneSignal.emitter.once(OneSignal.EVENTS.SDK_INITIALIZED, resolve);
            else
                resolve();
        });
    });
}
/**
 * Returns true if web push subscription occurs on a subdomain of OneSignal.
 * If true, our main IndexedDB is stored on the subdomain of onesignal.com, and not the user's site.
 * @remarks
 *   This method returns true if:
 *     - The browser is not Safari
 *         - Safari uses a different method of subscription and does not require our workaround
 *     - The init parameters contain a subdomain (even if the protocol is HTTPS)
 *         - HTTPS users using our subdomain workaround still have the main IndexedDB stored on our subdomain
 *        - The protocol of the current webpage is http:
 *   Exceptions are:
 *     - Safe hostnames like localhost and 127.0.0.1
 *          - Because we don't want users to get the wrong idea when testing on localhost that direct permission is supported on HTTP, we'll ignore these exceptions. HTTPS will always be required for direct permission
 *        - We are already in popup or iFrame mode, or this is called from the service worker
 */
function isUsingSubscriptionWorkaround() {
    return _utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_5__["OneSignalUtils"].isUsingSubscriptionWorkaround();
}
function triggerNotificationPermissionChanged(updateIfIdentical = false) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return _utils_PermissionUtils__WEBPACK_IMPORTED_MODULE_6__["PermissionUtils"].triggerNotificationPermissionChanged(updateIfIdentical);
    });
}
/**
 * JSON.stringify() but converts functions to "[Function]" so they aren't lost.
 * Helps when logging method calls.
 */
function stringify(obj) {
    return _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].stringify(obj);
}
function executeCallback(callback, ...args) {
    if (callback) {
        return callback.apply(null, args);
    }
}
function logMethodCall(methodName, ...args) {
    return _utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_5__["OneSignalUtils"].logMethodCall(methodName, ...args);
}
function isValidEmail(email) {
    return !!email &&
        !!email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
}
function addDomElement(targetSelectorOrElement, addOrder, elementHtml) {
    let targetElement;
    if (typeof targetSelectorOrElement === 'string') {
        targetElement = document.querySelector(targetSelectorOrElement);
    }
    else {
        targetElement = targetSelectorOrElement;
    }
    if (targetElement) {
        targetElement.insertAdjacentHTML(addOrder, elementHtml);
        return;
    }
    throw new Error(`${targetSelectorOrElement} must be a CSS selector string or DOM Element object.`);
}
function clearDomElementChildren(targetSelectorOrElement) {
    if (typeof targetSelectorOrElement === 'string') {
        const element = document.querySelector(targetSelectorOrElement);
        if (element === null) {
            throw new Error(`Cannot find element with selector "${targetSelectorOrElement}"`);
        }
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    else if (typeof targetSelectorOrElement === 'object') {
        while (targetSelectorOrElement.firstChild) {
            targetSelectorOrElement.removeChild(targetSelectorOrElement.firstChild);
        }
    }
    else
        throw new Error(`${targetSelectorOrElement} must be a CSS selector string or DOM Element object.`);
}
function addCssClass(targetSelectorOrElement, cssClass) {
    if (typeof targetSelectorOrElement === 'string') {
        const element = document.querySelector(targetSelectorOrElement);
        if (element === null) {
            throw new Error(`Cannot find element with selector "${targetSelectorOrElement}"`);
        }
        element.classList.add(cssClass);
    }
    else if (typeof targetSelectorOrElement === 'object') {
        targetSelectorOrElement.classList.add(cssClass);
    }
    else {
        throw new Error(`${targetSelectorOrElement} must be a CSS selector string or DOM Element object.`);
    }
}
function removeCssClass(targetSelectorOrElement, cssClass) {
    if (typeof targetSelectorOrElement === 'string') {
        const element = document.querySelector(targetSelectorOrElement);
        if (element === null) {
            throw new Error(`Cannot find element with selector "${targetSelectorOrElement}"`);
        }
        element.classList.remove(cssClass);
    }
    else if (typeof targetSelectorOrElement === 'object') {
        targetSelectorOrElement.classList.remove(cssClass);
    }
    else {
        throw new Error(`${targetSelectorOrElement} must be a CSS selector string or DOM Element object.`);
    }
}
function hasCssClass(targetSelectorOrElement, cssClass) {
    if (typeof targetSelectorOrElement === 'string') {
        const element = document.querySelector(targetSelectorOrElement);
        if (element === null) {
            throw new Error(`Cannot find element with selector "${targetSelectorOrElement}"`);
        }
        return element.classList.contains(cssClass);
    }
    else if (typeof targetSelectorOrElement === 'object') {
        return targetSelectorOrElement.classList.contains(cssClass);
    }
    else {
        throw new Error(`${targetSelectorOrElement} must be a CSS selector string or DOM Element object.`);
    }
}
/**
 * var DEVICE_TYPES = {
 *  CHROME: 5,
 *  SAFARI: 7,
 *  FIREFOX: 8,
 *  EDGE: 12,
 *  UNKNOWN: -99
 * };
 */
function getConsoleStyle(style) {
    return _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].getConsoleStyle(style);
}
/**
 * Returns a promise for the setTimeout() method.
 * @param durationMs
 * @returns {Promise} Returns a promise that resolves when the timeout is complete.
 */
function delay(durationMs) {
    return new Promise((resolve) => {
        setTimeout(resolve, durationMs);
    });
}
function nothing() {
    return Promise.resolve();
}
function timeoutPromise(promise, milliseconds) {
    return _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].timeoutPromise(promise, milliseconds);
}
function when(condition, promiseIfTrue, promiseIfFalse) {
    if (promiseIfTrue === undefined)
        promiseIfTrue = nothing();
    if (promiseIfFalse === undefined)
        promiseIfFalse = nothing();
    return (condition ? promiseIfTrue : promiseIfFalse);
}
/**
 * Returns true if match is in string; otherwise, returns false.
 */
function contains(indexOfAble, match) {
    return _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].contains(indexOfAble, match);
}
/**
 * Returns the current object without keys that have undefined values.
 * Regardless of whether the return result is used, the passed-in object is destructively modified.
 * Only affects keys that the object directly contains (i.e. not those inherited via the object's prototype).
 * @param object
 */
function trimUndefined(object) {
    return _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].trimUndefined(object);
}
function getRandomUuid() {
    return _utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_5__["OneSignalUtils"].getRandomUuid();
}
/**
 * Returns true if the UUID is a string of 36 characters;
 * @param uuid
 * @returns {*|boolean}
 */
function isValidUuid(uuid) {
    return _utils_OneSignalUtils__WEBPACK_IMPORTED_MODULE_5__["OneSignalUtils"].isValidUuid(uuid);
}
function getUrlQueryParam(name) {
    let url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness
    name = name.replace(/[\[\]]/g, "\\$&").toLowerCase(); // This is just to avoid case sensitiveness for query parameter name
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
/**
 * Wipe OneSignal-related IndexedDB data on the "correct" computed origin, but OneSignal must be initialized first to use.
 */
function wipeIndexedDb() {
    _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].warn('OneSignal: Wiping IndexedDB data.');
    return Promise.all([
        _services_Database__WEBPACK_IMPORTED_MODULE_3__["default"].remove('Ids'),
        _services_Database__WEBPACK_IMPORTED_MODULE_3__["default"].remove('NotificationOpened'),
        _services_Database__WEBPACK_IMPORTED_MODULE_3__["default"].remove('Options')
    ]);
}
/**
 * Capitalizes the first letter of the string.
 * @returns {string} The string with the first letter capitalized.
 */
function capitalize(text) {
    return _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_8__["Utils"].capitalize(text);
}
/**
 * Unsubscribe from push notifications without removing the active service worker.
 */
function unsubscribeFromPush() {
    _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].warn('OneSignal: Unsubscribing from push.');
    if (_managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_1__["default"].getWindowEnv() !== _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_2__["WindowEnvironmentKind"].ServiceWorker) {
        return self.registration.pushManager.getSubscription()
            .then((subscription) => {
            if (subscription) {
                return subscription.unsubscribe();
            }
            else
                throw new Error('Cannot unsubscribe because not subscribed.');
        });
    }
    else {
        if (isUsingSubscriptionWorkaround()) {
            return new Promise((resolve, reject) => {
                _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].debug("Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame.");
                OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, null, (reply) => {
                    _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].debug("Unsubscribe from push succesfully remotely executed.");
                    if (reply.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE) {
                        resolve();
                    }
                    else {
                        reject('Failed to remotely unsubscribe from push.');
                    }
                });
            });
        }
        else {
            if (!navigator.serviceWorker || !navigator.serviceWorker.controller)
                return Promise.resolve();
            return navigator.serviceWorker.ready
                .then(registration => registration.pushManager)
                .then(pushManager => pushManager.getSubscription())
                .then((subscription) => {
                if (subscription) {
                    return subscription.unsubscribe();
                }
                else {
                    return Promise.resolve();
                }
            });
        }
    }
}
function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
/**
 * Returns the part of the string after the first occurence of the specified search.
 * @param string The entire string.
 * @param search The text returned will be everything *after* search.
 * e.g. substringAfter('A white fox', 'white') => ' fox'
 */
function substringAfter(string, search) {
    return string.substr(string.indexOf(search) + search.length);
}
function once(targetSelectorOrElement, event, task, manualDestroy = false) {
    if (!event) {
        _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].error('Cannot call on() with no event: ', event);
    }
    if (!task) {
        _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].error('Cannot call on() with no task: ', task);
    }
    if (typeof targetSelectorOrElement === 'string') {
        let els = document.querySelectorAll(targetSelectorOrElement);
        if (els.length > 0) {
            for (let i = 0; i < els.length; i++)
                once(els[i], event, task);
        }
    }
    else if (isArray(targetSelectorOrElement)) {
        for (let i = 0; i < targetSelectorOrElement.length; i++)
            once(targetSelectorOrElement[i], event, task);
    }
    else if (typeof targetSelectorOrElement === 'object') {
        var taskWrapper = (function () {
            var internalTaskFunction = function (e) {
                var destroyEventListener = function () {
                    targetSelectorOrElement.removeEventListener(e.type, taskWrapper);
                };
                if (!manualDestroy) {
                    destroyEventListener();
                }
                task(e, destroyEventListener);
            };
            return internalTaskFunction;
        })();
        targetSelectorOrElement.addEventListener(event, taskWrapper);
    }
    else
        throw new Error(`${targetSelectorOrElement} must be a CSS selector string or DOM Element object.`);
}
/**
 * Returns the number of times the SDK has been loaded into the browser.
 * Expects a browser environment, otherwise this call will fail.
 */
function getSdkLoadCount() {
    return window.__oneSignalSdkLoadCount || 0;
}
function awaitSdkEvent(eventName) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return yield new Promise(resolve => {
            OneSignal.emitter.once(eventName, (event) => {
                resolve(event);
            });
        });
    });
}
/**
 * Increments the counter describing the number of times the SDK has been loaded into the browser.
 * Expects a browser environment, otherwise this call will fail.
 */
function incrementSdkLoadCount() {
    window.__oneSignalSdkLoadCount = getSdkLoadCount() + 1;
}
function getPlatformNotificationIcon(notificationIcons) {
    if (!notificationIcons)
        return 'default-icon';
    if (bowser__WEBPACK_IMPORTED_MODULE_9___default.a.safari && notificationIcons.safari)
        return notificationIcons.safari;
    else if (bowser__WEBPACK_IMPORTED_MODULE_9___default.a.firefox && notificationIcons.firefox)
        return notificationIcons.firefox;
    return notificationIcons.chrome ||
        notificationIcons.firefox ||
        notificationIcons.safari ||
        'default-icon';
}
function getDomElementOrStub(selector) {
    const foundElement = document.querySelector(selector);
    if (!foundElement) {
        _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].debug(`No instance of ${selector} found. Returning stub.`);
        return document.createElement('div');
    }
    return foundElement;
}
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}



/***/ }),

/***/ "./build/ts-to-es6/src/utils/BrowserUtils.js":
/*!***************************************************!*\
  !*** ./build/ts-to-es6/src/utils/BrowserUtils.js ***!
  \***************************************************/
/*! exports provided: BrowserUtils, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserUtils", function() { return BrowserUtils; });
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Environment */ "./build/ts-to-es6/src/Environment.js");

class BrowserUtils {
    static decodeHtmlEntities(text) {
        if (_Environment__WEBPACK_IMPORTED_MODULE_0__["default"].isBrowser()) {
            if (!BrowserUtils.decodeTextArea) {
                BrowserUtils.decodeTextArea = document.createElement("textarea");
            }
        }
        if (BrowserUtils.decodeTextArea) {
            BrowserUtils.decodeTextArea.innerHTML = text;
            return BrowserUtils.decodeTextArea.value;
        }
        else {
            // Not running in a browser environment, text cannot be decoded
            return text;
        }
    }
}
BrowserUtils.decodeTextArea = null;
/* harmony default export */ __webpack_exports__["default"] = (BrowserUtils);



/***/ }),

/***/ "./build/ts-to-es6/src/utils/OneSignalUtils.js":
/*!*****************************************************!*\
  !*** ./build/ts-to-es6/src/utils/OneSignalUtils.js ***!
  \*****************************************************/
/*! exports provided: OneSignalUtils, default */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSignalUtils", function() { return OneSignalUtils; });
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/src/bowser.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../managers/SdkEnvironment */ "./build/ts-to-es6/src/managers/SdkEnvironment.js");
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Environment */ "./build/ts-to-es6/src/Environment.js");
/* harmony import */ var _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/WindowEnvironmentKind */ "./build/ts-to-es6/src/models/WindowEnvironmentKind.js");
/* harmony import */ var _libraries_Log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libraries/Log */ "./build/ts-to-es6/src/libraries/Log.js");
/* harmony import */ var _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/shared/utils/Utils */ "./build/ts-to-es6/src/context/shared/utils/Utils.js");






class OneSignalUtils {
    static getBaseUrl() {
        return location.origin;
    }
    static isLocalhostAllowedAsSecureOrigin() {
        return (OneSignal.config &&
            OneSignal.config.userConfig &&
            OneSignal.config.userConfig.allowLocalhostAsSecureOrigin === true);
    }
    /**
     * Returns true if web push subscription occurs on a subdomain of OneSignal.
     * If true, our main IndexedDB is stored on the subdomain of onesignal.com, and not the user"s site.
     * @remarks
     *   This method returns true if:
     *     - The browser is not Safari
     *         - Safari uses a different method of subscription and does not require our workaround
     *     - The init parameters contain a subdomain (even if the protocol is HTTPS)
     *         - HTTPS users using our subdomain workaround still have the main IndexedDB stored on our subdomain
     *        - The protocol of the current webpage is http:
     *   Exceptions are:
     *     - Safe hostnames like localhost and 127.0.0.1
     *          - Because we don"t want users to get the wrong idea when testing on localhost that direct permission is supported on HTTP, we"ll ignore these exceptions. HTTPS will always be required for direct permission
     *        - We are already in popup or iFrame mode, or this is called from the service worker
     */
    static isUsingSubscriptionWorkaround() {
        const windowEnv = _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_1__["default"].getWindowEnv();
        if (!OneSignal.config) {
            throw new Error(`(${windowEnv.toString()}) isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists.`);
        }
        if (bowser__WEBPACK_IMPORTED_MODULE_0___default.a.safari) {
            return false;
        }
        const allowLocalhostAsSecureOrigin = this.isLocalhostAllowedAsSecureOrigin();
        return OneSignalUtils.internalIsUsingSubscriptionWorkaround(OneSignal.config.subdomain, allowLocalhostAsSecureOrigin);
    }
    static internalIsUsingSubscriptionWorkaround(subdomain, allowLocalhostAsSecureOrigin) {
        if (bowser__WEBPACK_IMPORTED_MODULE_0___default.a.safari) {
            return false;
        }
        if (allowLocalhostAsSecureOrigin === true &&
            (location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
            return false;
        }
        const windowEnv = _managers_SdkEnvironment__WEBPACK_IMPORTED_MODULE_1__["default"].getWindowEnv();
        return ((windowEnv === _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].Host || windowEnv === _models_WindowEnvironmentKind__WEBPACK_IMPORTED_MODULE_3__["WindowEnvironmentKind"].CustomIframe) &&
            (!!subdomain || location.protocol === "http:"));
    }
    static redetectBrowserUserAgent() {
        // During testing, the browser object may be initialized before the userAgent is injected
        if (bowser__WEBPACK_IMPORTED_MODULE_0___default.a.name === "" && bowser__WEBPACK_IMPORTED_MODULE_0___default.a.version === "") {
            return bowser__WEBPACK_IMPORTED_MODULE_0___default.a._detect(navigator.userAgent);
        }
        return bowser__WEBPACK_IMPORTED_MODULE_0___default.a;
    }
    /**
     * Returns true if the UUID is a string of 36 characters;
     * @param uuid
     * @returns {*|boolean}
     */
    static isValidUuid(uuid) {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(uuid);
    }
    static getRandomUuid() {
        let uuidStr = '';
        const crypto = typeof window === 'undefined' ? global.crypto : window.crypto || window.msCrypto;
        if (crypto) {
            uuidStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (crypto.getRandomValues(new Uint8Array(1))[0] % 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        }
        else {
            uuidStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        }
        return uuidStr;
    }
    static logMethodCall(methodName, ...args) {
        return _libraries_Log__WEBPACK_IMPORTED_MODULE_4__["default"].debug(`Called %c${methodName}(${args.map(_context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].stringify).join(', ')})`, _context_shared_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].getConsoleStyle('code'), '.');
    }
    static isHttps() {
        if (OneSignalUtils.isSafari()) {
            return window.location.protocol === "https:";
        }
        return !OneSignalUtils.isUsingSubscriptionWorkaround();
    }
    static isSafari() {
        return _Environment__WEBPACK_IMPORTED_MODULE_2__["default"].isBrowser() && typeof window.safari !== "undefined";
    }
}
/* harmony default export */ __webpack_exports__["default"] = (OneSignalUtils);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./build/ts-to-es6/src/utils/PermissionUtils.js":
/*!******************************************************!*\
  !*** ./build/ts-to-es6/src/utils/PermissionUtils.js ***!
  \******************************************************/
/*! exports provided: PermissionUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionUtils", function() { return PermissionUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_Database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Database */ "./build/ts-to-es6/src/services/Database.js");
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Event */ "./build/ts-to-es6/src/Event.js");



class PermissionUtils {
    static triggerNotificationPermissionChanged(updateIfIdentical = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newPermission = yield OneSignal.privateGetNotificationPermission();
            const previousPermission = yield _services_Database__WEBPACK_IMPORTED_MODULE_1__["default"].get('Options', 'notificationPermission');
            const shouldBeUpdated = newPermission !== previousPermission || updateIfIdentical;
            if (!shouldBeUpdated) {
                return;
            }
            yield _services_Database__WEBPACK_IMPORTED_MODULE_1__["default"].put('Options', { key: 'notificationPermission', value: newPermission });
            _Event__WEBPACK_IMPORTED_MODULE_2__["default"].trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, { to: newPermission });
        });
    }
}



/***/ }),

/***/ "./node_modules/bowser/src/bowser.js":
/*!*******************************************!*\
  !*** ./node_modules/bowser/src/bowser.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js")(name, definition)
  else {}
}(this, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)os/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr\/|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/chrome.+? edge/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
      result.android = t
    } else if (!result.windowsphone && !result.msedge && iosdevice) {
      result[iosdevice] = t
      result.ios = t
    } else if (mac) {
      result.mac = t
    } else if (xbox) {
      result.xbox = t
    } else if (windows) {
      result.windows = t
    } else if (linux) {
      result.linux = t
    }

    function getWindowsVersion (s) {
      switch (s) {
        case 'NT': return 'NT'
        case 'XP': return 'XP'
        case 'NT 5.0': return '2000'
        case 'NT 5.1': return 'XP'
        case 'NT 5.2': return '2003'
        case 'NT 6.0': return 'Vista'
        case 'NT 6.1': return '7'
        case 'NT 6.2': return '8'
        case 'NT 6.3': return '8.1'
        case 'NT 10.0': return '10'
        default: return undefined
      }
    }

    // OS version extraction
    var osVersion = '';
    if (result.windows) {
      osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (result.mac) {
      osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = !result.windows && osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser
});


/***/ }),

/***/ "./node_modules/jsonp/index.js":
/*!*************************************!*\
  !*** ./node_modules/jsonp/index.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=OneSignalPageSDKES6.js.map