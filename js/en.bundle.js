(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactRedux"), require("ReactDOM"), require("Redux"), require("Autosuggest"), require("ReduxThunk"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactRedux", "ReactDOM", "Redux", "Autosuggest", "ReduxThunk"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactRedux"), require("ReactDOM"), require("Redux"), require("Autosuggest"), require("ReduxThunk")) : factory(root["React"], root["ReactRedux"], root["ReactDOM"], root["Redux"], root["Autosuggest"], root["ReduxThunk"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_27__, __WEBPACK_EXTERNAL_MODULE_106__, __WEBPACK_EXTERNAL_MODULE_107__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"map":{"fetchUpdate":{"def":"fetch map*","pending":"fetch map*_PENDING","fulfilled":"fetch map*_FULFILLED","rejected":"fetch map*_REJECTED"},"fetch":{"def":"fetch map (no history update)*","pending":"fetch map (no history update)*_PENDING","fulfilled":"fetch map (no history update)*_FULFILLED","rejected":"fetch map (no history update)*_REJECTED"}},"search":{"suggestions":{"fetch":{"def":"FETCH_SUGGESTIONS","pending":"FETCH_SUGGESTIONS_PENDING","fulfilled":"FETCH_SUGGESTIONS_FULFILLED","rejected":"FETCH_SUGGESTIONS_REJECTED"},"clear":"CLEAR_SUGGESTIONS"},"query":{"update":"UPDATE_QUERY","clear":"CLEAR_QUERY"}},"theme":{"set":"set theme"},"ga":{"navigation":{"external":"external link","internal":"internal link"},"contribution":{"buttonClicked":"contribute button clicked","guidelinesAccepted":"guidelines accepted"},"search":{"unmatchedQuery":"unmatched query","fallbackSearch":"fallback search"}}}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(23);
var isBuffer = __webpack_require__(68);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(_x2, _x3, _x4) {
  var _again = true;_function: while (_again) {
    var object = _x2,
        property = _x3,
        receiver = _x4;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x2 = parent;_x3 = property;_x4 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _baseStyles = __webpack_require__(75);

var _baseStyles2 = _interopRequireDefault(_baseStyles);

var _BurgerIcon = __webpack_require__(72);

var _BurgerIcon2 = _interopRequireDefault(_BurgerIcon);

var _CrossIcon = __webpack_require__(74);

var _CrossIcon2 = _interopRequireDefault(_CrossIcon);

exports['default'] = function (styles) {
  var Menu = function (_Component) {
    _inherits(Menu, _Component);

    function Menu(props) {
      _classCallCheck(this, Menu);

      _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).call(this, props);
      this.state = {
        isOpen: props && typeof props.isOpen !== 'undefined' ? props.isOpen : false
      };
    }

    _createClass(Menu, [{
      key: 'toggleMenu',
      value: function toggleMenu() {
        var _this = this;

        var newState = { isOpen: !this.state.isOpen };

        this.applyWrapperStyles();

        this.setState(newState, function () {
          _this.props.onStateChange(newState);

          // Timeout ensures wrappers are cleared after animation finishes.
          _this.timeoutId && clearTimeout(_this.timeoutId);
          _this.timeoutId = setTimeout(function () {
            _this.timeoutId = null;
            if (!newState.isOpen) {
              _this.applyWrapperStyles(false);
            }
          }, 500);
        });
      }

      // Applies component-specific styles to external wrapper elements.
    }, {
      key: 'applyWrapperStyles',
      value: function applyWrapperStyles() {
        var set = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        if (this.props.bodyClassName) {
          var body = document.querySelector('body');
          body.classList[set ? 'add' : 'remove'](this.props.bodyClassName);
        }

        if (styles.pageWrap && this.props.pageWrapId) {
          this.handleExternalWrapper(this.props.pageWrapId, styles.pageWrap, set);
        }

        if (styles.outerContainer && this.props.outerContainerId) {
          this.handleExternalWrapper(this.props.outerContainerId, styles.outerContainer, set);
        }
      }

      // Sets or unsets styles on DOM elements outside the menu component.
      // This is necessary for correct page interaction with some of the menus.
      // Throws and returns if the required external elements don't exist,
      // which means any external page animations won't be applied.
    }, {
      key: 'handleExternalWrapper',
      value: function handleExternalWrapper(id, wrapperStyles, set) {
        var html = document.querySelector('html');
        var body = document.querySelector('body');
        var wrapper = document.getElementById(id);

        if (!wrapper) {
          console.error("Element with ID '" + id + "' not found");
          return;
        }

        var builtStyles = this.getStyle(wrapperStyles);

        for (var prop in builtStyles) {
          if (builtStyles.hasOwnProperty(prop)) {
            wrapper.style[prop] = set ? builtStyles[prop] : '';
          }
        }

        // Prevent any horizontal scroll.
        [html, body].forEach(function (element) {
          element.style['overflow-x'] = set ? 'hidden' : '';
        });
      }

      // Builds styles incrementally for a given element.
    }, {
      key: 'getStyles',
      value: function getStyles(el, index, inline) {
        var propName = 'bm' + el.replace(el.charAt(0), el.charAt(0).toUpperCase());

        // Set base styles.
        var output = _baseStyles2['default'][el] ? this.getStyle(_baseStyles2['default'][el]) : {};

        // Add animation-specific styles.
        if (styles[el]) {
          output = _extends({}, output, this.getStyle(styles[el], index + 1));
        }

        // Add custom styles.
        if (this.props.styles[propName]) {
          output = _extends({}, output, this.props.styles[propName]);
        }

        // Add element inline styles.
        if (inline) {
          output = _extends({}, output, inline);
        }

        return output;
      }
    }, {
      key: 'getStyle',
      value: function getStyle(style, index) {
        var width = this.props.width;
        if (typeof width !== 'string') width = width + 'px';

        return style(this.state.isOpen, width, this.props.right, index);
      }
    }, {
      key: 'listenForClose',
      value: function listenForClose(e) {
        e = e || window.event;

        if (this.state.isOpen && (e.key === 'Escape' || e.keyCode === 27)) {
          this.toggleMenu();
        }
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        if (!styles) {
          throw new Error('No styles supplied');
        }

        // Allow initial open state to be set by props.
        if (this.props.isOpen) {
          this.toggleMenu();
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.onkeydown = this.listenForClose.bind(this);

        // Allow initial open state to be set by props for animations with wrapper elements.
        if (this.props.isOpen) {
          this.toggleMenu();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.onkeydown = null;

        this.applyWrapperStyles(false);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var _this2 = this;

        if (styles.svg) {
          (function () {
            var morphShape = _reactDom2['default'].findDOMNode(_this2, 'bm-morph-shape');
            var path = styles.svg.lib(morphShape).select('path');

            if (_this2.state.isOpen) {
              // Animate SVG path.
              styles.svg.animate(path);
            } else {
              // Reset path (timeout ensures animation happens off screen).
              setTimeout(function () {
                path.attr('d', styles.svg.pathInitial);
              }, 300);
            }
          })();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (typeof nextProps.isOpen !== 'undefined' && nextProps.isOpen !== this.state.isOpen) {
          this.toggleMenu();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return _react2['default'].createElement('div', null, !this.props.noOverlay && _react2['default'].createElement('div', {
          className: 'bm-overlay ' + this.props.overlayClassName,
          onClick: function onClick() {
            return _this3.toggleMenu();
          },
          style: this.getStyles('overlay')
        }), _react2['default'].createElement('div', {
          id: this.props.id,
          className: 'bm-menu-wrap ' + this.props.className,
          style: this.getStyles('menuWrap')
        }, styles.svg && _react2['default'].createElement('div', { className: 'bm-morph-shape ' + this.props.morphShapeClassName, style: this.getStyles('morphShape') }, _react2['default'].createElement('svg', { width: '100%', height: '100%', viewBox: '0 0 100 800', preserveAspectRatio: 'none' }, _react2['default'].createElement('path', { d: styles.svg.pathInitial }))), _react2['default'].createElement('div', { className: 'bm-menu ' + this.props.menuClassName, style: this.getStyles('menu') }, _react2['default'].createElement('nav', { className: 'bm-item-list ' + this.props.itemListClassName, style: this.getStyles('itemList') }, _react2['default'].Children.map(this.props.children, function (item, index) {
          if (item) {
            var extraProps = {
              key: index,
              style: _this3.getStyles('item', index, item.props.style)
            };
            return _react2['default'].cloneElement(item, extraProps);
          }
        }))), this.props.customCrossIcon !== false && _react2['default'].createElement('div', { style: this.getStyles('closeButton') }, _react2['default'].createElement(_CrossIcon2['default'], {
          onClick: function onClick() {
            return _this3.toggleMenu();
          },
          styles: this.props.styles,
          customIcon: this.props.customCrossIcon,
          className: this.props.crossButtonClassName,
          crossClassName: this.props.crossClassName
        }))), this.props.customBurgerIcon !== false && _react2['default'].createElement(_BurgerIcon2['default'], {
          onClick: function onClick() {
            return _this3.toggleMenu();
          },
          styles: this.props.styles,
          customIcon: this.props.customBurgerIcon,
          className: this.props.burgerButtonClassName,
          barClassName: this.props.burgerBarClassName
        }));
      }
    }]);

    return Menu;
  }(_react.Component);

  Menu.propTypes = {
    bodyClassName: _propTypes2['default'].string,
    burgerBarClassName: _propTypes2['default'].string,
    burgerButtonClassName: _propTypes2['default'].string,
    crossButtonClassName: _propTypes2['default'].string,
    crossClassName: _propTypes2['default'].string,
    customBurgerIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].element, _propTypes2['default'].oneOf([false])]),
    customCrossIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].element, _propTypes2['default'].oneOf([false])]),
    id: _propTypes2['default'].string,
    isOpen: _propTypes2['default'].bool,
    itemListClassName: _propTypes2['default'].string,
    menuClassName: _propTypes2['default'].string,
    morphShapeClassName: _propTypes2['default'].string,
    noOverlay: _propTypes2['default'].bool,
    onStateChange: _propTypes2['default'].func,
    outerContainerId: styles && styles.outerContainer ? _propTypes2['default'].string.isRequired : _propTypes2['default'].string,
    overlayClassName: _propTypes2['default'].string,
    pageWrapId: styles && styles.pageWrap ? _propTypes2['default'].string.isRequired : _propTypes2['default'].string,
    right: _propTypes2['default'].bool,
    styles: _propTypes2['default'].object,
    width: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string])
  };

  Menu.defaultProps = {
    bodyClassName: '',
    burgerBarClassName: '',
    burgerButtonClassName: '',
    className: '',
    crossButtonClassName: '',
    crossClassName: '',
    id: '',
    itemListClassName: '',
    menuClassName: '',
    morphShapeClassName: '',
    noOverlay: false,
    onStateChange: function onStateChange() {},
    outerContainerId: '',
    overlayClassName: '',
    pageWrapId: '',
    styles: {},
    width: 300
  };

  return Menu;
};

module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(89);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list, options);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list, options) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove, transformResult;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    transformResult = options.transform(obj.css);
	    
	    if (transformResult) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = transformResult;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css. 
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Fetch map at given url, and update browser URL unless otherwise specified.
 */
exports.default = function (id) {
  //alert(" fetch map");
  var updateURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var apiURL = '/api/maps/' + id.replace(/^\//, '');
  var type = _actions2.default.map.fetch.def;

  if (updateURL) {
    type = _actions2.default.map.fetchUpdate.def;
  }

  // return {
  //   type: type,
  //   payload: _axios2.default.get(apiURL)
  // };
  //Qingwu Comment
  var promise = new Promise(function(resolve, reject){
      //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
      //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
      var res = new Object();
      res.status = 200;
      res.statusText = "OK";

      res.data = JSON.parse(svg_data);
      setTimeout(function(){
        resolve(res); //代码正常执行！
      }, 2);
  });
  promise.data = svg_data;
  console.log(promise);
  return {
    type: type,
    payload: promise
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(27);

var _reduxThunk = __webpack_require__(107);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxPromiseMiddleware = __webpack_require__(86);

var _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);

var _index = __webpack_require__(61);

var _index2 = _interopRequireDefault(_index);

var _gaMiddleware = __webpack_require__(65);

var _gaMiddleware2 = _interopRequireDefault(_gaMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Used for Redux devtools.
// eslint-disable-next-line no-underscore-dangle


// Redux middleware that allows to pass functions to dispatch methods.
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

// Redux middleware that allows to pass promises within the dispatch object.


var middleware = (0, _redux.applyMiddleware)((0, _reduxPromiseMiddleware2.default)(), _reduxThunk2.default, _gaMiddleware2.default);

exports.default = (0, _redux.createStore)(_index2.default, {}, composeEnhancers(middleware));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (action) {
  // window.open doesn't actually take an argument
  // but it's useful when mocking window on tests.
  var windowRef = window.open(action.payload);
  _store2.default.dispatch(action);

  windowRef.location = action.payload;
  windowRef.focus();
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(2);
var normalizeHeaderName = __webpack_require__(47);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(19);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(19);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// "learn anything - path - to map" -> "/path/to-map"
var titleToURL = exports.titleToURL = function titleToURL(title) {
  var url = '/' + title;

  // Convert dashes to slashes, spaces to dashes, and remove learn-anything
  // from maps that are not the main map.
  url = url.replace(/ - /g, '/').replace(/ /g, '-').replace('learn-anything/', '');

  return url;
};

// "learn anything - path - to map" -> "path - to map"
var cleanTitle = exports.cleanTitle = function cleanTitle(title) {
  return title.replace('learn anything - ', '');
};

// "path - to map" -> "/learn-anything/path/to-map"
var cleanTitleToAbsURL = exports.cleanTitleToAbsURL = function cleanTitleToAbsURL(title) {
  var url = titleToURL(title);

  if (!url.startsWith('learn-anything')) {
    url = '/learn-anything' + url;
  }

  return url;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(71)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(70)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(33);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(2);
var settle = __webpack_require__(39);
var buildURL = __webpack_require__(42);
var parseHeaders = __webpack_require__(48);
var isURLSameOrigin = __webpack_require__(46);
var createError = __webpack_require__(22);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(41);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(44);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(38);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classNames = __webpack_require__(66);

var _classNames2 = _interopRequireDefault(_classNames);

__webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Generic dialog.
var Dialog = function (_Component) {
  _inherits(Dialog, _Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    _this.onKeydown = _this.onKeydown.bind(_this);
    return _this;
  }

  // When clicking outside dialog trigger onReject.


  _createClass(Dialog, [{
    key: 'onClick',
    value: function onClick(event) {
      if (event.target.className.includes('dialog-container')) {
        this.props.onReject();
      }
    }
  }, {
    key: 'onKeydown',
    value: function onKeydown(event) {
      if (event.key === 'Enter' && this.props.acceptOnEnterPress) {
        this.props.onAccept();
      }

      if (event.key === 'Escape') {
        this.props.onReject();
      }
    }

    // Render footer with Reject and Accept buttons.

  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      return _react2.default.createElement(
        'div',
        { className: 'dialog-footer' },
        _react2.default.createElement(
          'a',
          { className: 'dialog-footer--reject', onClick: this.props.onReject },
          this.props.rejectLabel
        ),
        _react2.default.createElement(
          'a',
          { className: 'dialog-footer--accept', onClick: this.props.onAccept },
          this.props.acceptLabel
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classNames2.default)({
        'dialog-container': true,
        'dialog-container--centered': this.props.isCentered
      });

      return _react2.default.createElement(
        'div',
        { className: className, onClick: this.onClick },
        _react2.default.createElement(
          'div',
          { className: 'dialog' },
          _react2.default.createElement(
            'div',
            { className: 'dialog-title' },
            this.props.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'dialog-body' },
            this.props.children
          ),
          this.props.hasFooter ? this.renderFooter() : ''
        )
      );
    }

    // Listen for Enter or Escape keypresses.

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.onkeydown = this.onKeydown;
    }
  }]);

  return Dialog;
}(_react.Component);

exports.default = Dialog;


Dialog.defaultProps = {
  title: '',
  hasFooter: true,
  isCentered: true,

  rejectLabel: "Cancel",
  onReject: function onReject() {},

  acceptLabel: "Okay",
  onAccept: function onAccept() {},
  acceptOnEnterPress: false
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(13);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function () {
  var Snap = undefined;
  try {
    Snap = __webpack_require__(88);
  } finally {
    return Snap;
  }
};

module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _reactRedux = __webpack_require__(10);

var _Sidebar = __webpack_require__(55);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _fetchMap = __webpack_require__(7);

var _fetchMap2 = _interopRequireDefault(_fetchMap);

var _Title = __webpack_require__(12);

var _Pages = __webpack_require__(59);

var Pages = _interopRequireWildcard(_Pages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    title: store.map.title,
    theme: store.theme,
    query: store.search.query,
    suggestions: store.search.suggestions,
    placeholder: store.search.placeholder,
    loading: store.search.loading
  };
}), _dec(_class = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'renderContent',
    value: function renderContent(pathname) {
      switch (pathname) {
        case '/thank-you':
          return Pages.thankYou.call(this);

        default:
          return Pages.map.call(this);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var pathname = window.location.pathname;
      //ga('send', 'pageview', pathname);

      // If the page is loaded on a url different from the root,
      // load the corresponding map.
      if (pathname !== '/' && (0, _Title.titleToURL)(this.props.title) !== pathname) {
        this.props.dispatch((0, _fetchMap2.default)(pathname));
      }

      return React.createElement(
        'div',
        null,
        React.createElement(_Sidebar2.default, { theme: this.props.theme, dispatch: this.props.dispatch }),
        this.renderContent(pathname)
      );
    }
  }]);

  return App;
}(_react.Component)) || _class);
exports.default = App;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// Return the parent node of an element (or the element) with a specific tag.
exports.default = function (el, tag) {
  var node = el;

  while (node !== null) {
    if (node.tagName === tag) {
      return node;
    }
    node = node.parentElement;
  }

  return undefined;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_Night.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_Night.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_PearlWhite.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_PearlWhite.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var bind = __webpack_require__(23);
var Axios = __webpack_require__(35);
var defaults = __webpack_require__(11);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(20);
axios.CancelToken = __webpack_require__(34);
axios.isCancel = __webpack_require__(21);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(49);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(20);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(11);
var utils = __webpack_require__(2);
var InterceptorManager = __webpack_require__(36);
var dispatchRequest = __webpack_require__(37);
var isAbsoluteURL = __webpack_require__(45);
var combineURLs = __webpack_require__(43);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);
var transformData = __webpack_require__(40);
var isCancel = __webpack_require__(21);
var defaults = __webpack_require__(11);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(22);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(2);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearQuery = exports.updateQuery = exports.clearSuggestions = exports.fetchSuggestions = undefined;

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastQueryChangeTime = void 0;
var fetchSuggestions = exports.fetchSuggestions = function fetchSuggestions() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  // Random suggestion
  if (query === '') {
    return {
      type: _actions2.default.search.suggestions.fetch.def,
      payload: _axios2.default.get('/api/maps/?q=')
    };
  }

  /* Suggestions for current query.
   Wait 300ms to be sure that the user stopped writing or that they're
   writing slowly, so we don't fetch useless suggestions. */
  return function (dispatch) {
    return setTimeout(function () {
      var currentTime = new Date();
      /* If this difference is less than 300ms it means that the query changed
       during this interval of time, and in this case we don't need to fetch
       anything. */
      if (currentTime - lastQueryChangeTime >= 300) {
        var cachedSuggestions = JSON.parse(localStorage.getItem('suggestions')) || {};
        var cachedResponse = cachedSuggestions[query.trim()];

        if (cachedResponse) {
          // Age of the cached response in minutes
          var cachedResponseAge = (currentTime - new Date(cachedResponse.date)) / (1000 * 60);

          // If cached suggestion is less than 6 hours old use it, otherwise fetch
          // it again.
          if (cachedResponseAge < 360) {
            dispatch({
              type: _actions2.default.search.suggestions.fetch.def,
              payload: cachedResponse.suggestions
            });
            return;
          }
        }

        // Should check local storage first
        _axios2.default.get('/api/maps/?q=' + query).then(function (result) {
          dispatch({
            type: _actions2.default.search.suggestions.fetch.fulfilled,
            payload: result
          });
        }).catch(function (err) {
          dispatch({
            type: _actions2.default.search.suggestions.fetch.rejected,
            payload: err
          });
        });

        dispatch({ type: _actions2.default.search.suggestions.fetch.pending });
      }
    }, 300);
  };
};

var clearSuggestions = exports.clearSuggestions = function clearSuggestions() {
  return {
    type: _actions2.default.search.suggestions.clear
  };
};

var updateQuery = exports.updateQuery = function updateQuery(query) {
  lastQueryChangeTime = new Date();

  return {
    type: _actions2.default.search.query.update,
    payload: query
  };
};

var clearQuery = exports.clearQuery = function clearQuery() {
  return {
    type: _actions2.default.search.query.clear
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (theme) {
  return {
    type: _actions2.default.theme.set,
    payload: theme
  };
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(100);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumbs = function (_Component) {
  _inherits(Breadcrumbs, _Component);

  function Breadcrumbs() {
    _classCallCheck(this, Breadcrumbs);

    return _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).apply(this, arguments));
  }

  _createClass(Breadcrumbs, [{
    key: 'onClick',
    value: function onClick(splitTitle, index) {
      // Convert splitTitle from ['path', 'to', 'map']
      // to "path/to/map" format.
      var url = splitTitle.slice(0, index + 1).join('/');
      this.props.onCrumbClick(url);
    }
  }, {
    key: 'renderBreadcrumbs',
    value: function renderBreadcrumbs() {
      var _this2 = this;

      // Title is in the form of "path - to - map".
      var splitTitle = this.props.title.split(' - ');

      return splitTitle.map(function (topic, index) {
        return _react2.default.createElement(
          'span',
          { key: index, onClick: _this2.onClick.bind(_this2, splitTitle, index) },
          topic
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'breadcrumbs' },
        this.renderBreadcrumbs()
      );
    }
  }]);

  return Breadcrumbs;
}(_react.Component);

exports.default = Breadcrumbs;


Breadcrumbs.defaultProps = {
  title: '',
  onCrumbClick: function onCrumbClick() {}
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(101);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

var _ContributeDialog = __webpack_require__(56);

var _ContributeDialog2 = _interopRequireDefault(_ContributeDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContributeButton = function (_Component) {
  _inherits(ContributeButton, _Component);

  function ContributeButton(props) {
    _classCallCheck(this, ContributeButton);

    var _this = _possibleConstructorReturn(this, (ContributeButton.__proto__ || Object.getPrototypeOf(ContributeButton)).call(this, props));

    _this.state = { contributeDialog: false };

    _this.showDialog = _this.showDialog.bind(_this);
    _this.dismissDialog = _this.dismissDialog.bind(_this);
    return _this;
  }

  _createClass(ContributeButton, [{
    key: 'showDialog',
    value: function showDialog() {
      _store2.default.dispatch({
        type: _actions2.default.ga.contribution.buttonClicked,
        payload: this.props.title
      });
      this.setState({ contributeDialog: true });
    }
  }, {
    key: 'dismissDialog',
    value: function dismissDialog() {
      this.setState({ contributeDialog: false });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.title) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: this.showDialog,
            className: 'contribute-button',
            type: 'button'
          },
          _react2.default.createElement(
            'span',
            { className: 'contribute-button-text' },
            "Improve this map"
          ),
          _react2.default.createElement('img', { className: 'contribute-button-emoji',
            src: 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f984.png' })
        ),
        _react2.default.createElement(_ContributeDialog2.default, {
          onReject: this.dismissDialog,
          visible: this.state.contributeDialog,
          title: this.props.title
        })
      );
    }
  }]);

  return ContributeButton;
}(_react.Component);

exports.default = ContributeButton;


ContributeButton.defaultProps = {
  title: ''
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAutosuggest = __webpack_require__(106);

var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

var _Search = __webpack_require__(50);

var _fetchMap = __webpack_require__(7);

var _fetchMap2 = _interopRequireDefault(_fetchMap);

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

__webpack_require__(104);

var _UnmatchedDialog = __webpack_require__(57);

var _UnmatchedDialog2 = _interopRequireDefault(_UnmatchedDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Functions for react-autosuggest component.
var renderSuggestion = function renderSuggestion(_ref) {
  var key = _ref.key;
  return _react2.default.createElement(
    'div',
    { className: 'searchbar-suggestion' },
    key
  );
};
var getSuggestionValue = function getSuggestionValue(suggestion) {
  return suggestion.key;
};

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.state = { unmatchedDialog: false };

    // Bind component methods.
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onFormSubmit = _this.onFormSubmit.bind(_this);
    _this.onSuggestionSelected = _this.onSuggestionSelected.bind(_this);
    _this.onSuggestionsFetchRequested = _this.onSuggestionsFetchRequested.bind(_this);
    _this.onSuggestionsClearRequested = _this.onSuggestionsClearRequested.bind(_this);
    _this.dismissUnmatchedDialog = _this.dismissUnmatchedDialog.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'dismissUnmatchedDialog',
    value: function dismissUnmatchedDialog() {
      this.setState({ unmatchedDialog: false });
      this.props.dispatch((0, _Search.clearQuery)());
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      this.props.dispatch((0, _Search.updateQuery)(event.target.value));
    }
  }, {
    key: 'onFormSubmit',
    value: function onFormSubmit(event) {
      // Prevent from submitting form.
      event.preventDefault();

      // You haven't written anything; fetch random map indicated on placeholder
      // and get new placeholder.
      if (this.props.query === '') {
        this.props.dispatch((0, _fetchMap2.default)(this.props.placeholder.id));
        this.props.dispatch((0, _Search.fetchSuggestions)());
        return;
      }

      // There's no suggestion for what you're searching; show unmatched dialog.
      if (this.props.suggestions.length === 0) {
        this.props.dispatch({
          type: _actions2.default.ga.search.unmatchedQuery,
          payload: this.props.query
        });
        this.setState({ unmatchedDialog: true });
        document.activeElement.blur();
      }
    }
  }, {
    key: 'onSuggestionSelected',
    value: function onSuggestionSelected(event, _ref2) {
      var suggestion = _ref2.suggestion;

      // Prevent from submitting form if suggestion is
      // selected pressing enter.
      event.preventDefault();

      this.props.dispatch((0, _fetchMap2.default)(suggestion.id));
      this.props.dispatch((0, _Search.clearQuery)());
    }
  }, {
    key: 'onSuggestionsFetchRequested',
    value: function onSuggestionsFetchRequested(_ref3) {
      var value = _ref3.value;

      this.props.dispatch((0, _Search.fetchSuggestions)(value));
    }
  }, {
    key: 'onSuggestionsClearRequested',
    value: function onSuggestionsClearRequested() {
      this.props.dispatch((0, _Search.clearSuggestions)());
    }
  }, {
    key: 'render',
    value: function render() {
      // If there's no placeholder, fetch it.
      if (this.props.placeholder.id === '') {
        this.props.dispatch((0, _Search.fetchSuggestions)());
      }

      // Props for input field on autosuggest.
      var inputProps = {
        autoFocus: true,
        value: this.props.query,
        onChange: this.onInputChange,
        placeholder: this.props.placeholder.key
      };

      var formClassName = 'searchbar-container';

      // If not on main page show the searchbar in exploring mode.
      if (this.props.title !== '' || this.props.loading) {
        formClassName += ' searchbar-container--exploring';
      }

      return _react2.default.createElement(
        'form',
        { className: formClassName, onSubmit: this.onFormSubmit },
        _react2.default.createElement(_reactAutosuggest2.default, {
          inputProps: inputProps,
          renderSuggestion: renderSuggestion,
          highlightFirstSuggestion: true,
          suggestions: this.props.suggestions,
          getSuggestionValue: getSuggestionValue,
          onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
          onSuggestionsClearRequested: this.onSuggestionsClearRequested,
          onSuggestionSelected: this.onSuggestionSelected
        }),
        _react2.default.createElement(
          'p',
          { className: 'helpText' },
          "Press Enter to open our randomly suggested map.",
          _react2.default.createElement('br', null),
          "Start writing to get a list of existing topics."
        ),
        _react2.default.createElement(_UnmatchedDialog2.default, {
          onReject: this.dismissUnmatchedDialog,
          visible: this.state.unmatchedDialog,
          query: this.props.query
        })
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

exports.default = SearchBar;


SearchBar.defaultProps = {
  title: '',
  query: '',
  placeholder: '',
  suggestions: [],
  dispatch: function dispatch() {},
  loading: false
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBurgerMenu = __webpack_require__(73);

var _setTheme = __webpack_require__(51);

var _setTheme2 = _interopRequireDefault(_setTheme);

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    _this.changeTheme = _this.changeTheme.bind(_this);
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'toggleVisibility',
    value: function toggleVisibility(event) {
      var options = event.target.nextSibling;
      options.classList.toggle('sidebar-menu-options--visible');
    }
  }, {
    key: 'changeTheme',
    value: function changeTheme(event) {
      var theme = event.target.getAttribute('data-theme');
      this.props.dispatch((0, _setTheme2.default)(theme));
    }
  }, {
    key: 'render',
    value: function render() {
      document.body.className = this.props.theme;

      return _react2.default.createElement(
        _reactBurgerMenu.slide,
        { className: 'sidebar-menu', width: 340, right: true },
        _react2.default.createElement(
          'div',
          { className: 'sidebar-menu-block' },
          _react2.default.createElement(
            'div',
            { onClick: this.toggleVisibility, className: 'sidebar-menu-item' },
            "Themes 🖌"
          ),
          _react2.default.createElement(
            'div',
            { className: 'sidebar-menu-options' },
            _react2.default.createElement(
              'div',
              { onClick: this.changeTheme, 'data-theme': 'Night' },
              "Night 🌃"
            ),
            _react2.default.createElement(
              'div',
              { onClick: this.changeTheme, 'data-theme': 'PearlWhite' },
              "Pearl White ⚪"
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'sidebar-menu-block' },
          _react2.default.createElement(
            'div',
            { onClick: this.toggleVisibility, className: 'sidebar-menu-item' },
            "Tips 💡"
          ),
          _react2.default.createElement('div', {
            className: 'sidebar-menu-options',
            dangerouslySetInnerHTML: { __html: "<ul>\n<li>The path below the search bar shows where you are</li>\n<li>You can click on that path to go back to different maps</li>\n<li>Hovering over a node will display a note if it exists</li>\n<li>Help button or hovering over emojis is a great way to get their meanings</li>\n<li>All basics nodes have steps like 1. 2. and so on, if nodes have the same step,\njust choose any you like</li>\n<li>Certain nodes have a prefix like 17: or 15: which stands for the year in which\nthat article or video or paper was writen in</li>\n<li>Nearly all main nodes have a reddit subreddit or stack exchange forum attached\nto them, they&#39;re a great place to ask questions you may have</li>\n<li>You can also join our <a href=\"https://knowledge-map.slack.com/shared_invite/MTgxNTYzMjIzNjM5LTE0OTQzMzA4MDAtYzY1YWY0ZDc0NQ\">community on Slack</a>\nto learn together and help the project evolve</li>\n</ul>\n" }
          })
        )
      );
    }
  }]);

  return Sidebar;
}(_react.Component);

exports.default = Sidebar;


Sidebar.defaultProps = {
  title: '',
  dispatch: function dispatch() {}
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _openNewTab = __webpack_require__(9);

var _openNewTab2 = _interopRequireDefault(_openNewTab);

var _Title = __webpack_require__(12);

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

__webpack_require__(102);

var _Dialog = __webpack_require__(24);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContributeDialog = function (_Component) {
  _inherits(ContributeDialog, _Component);

  function ContributeDialog(props) {
    _classCallCheck(this, ContributeDialog);

    var _this = _possibleConstructorReturn(this, (ContributeDialog.__proto__ || Object.getPrototypeOf(ContributeDialog)).call(this, props));

    _this.redirect = _this.redirect.bind(_this);
    return _this;
  }

  _createClass(ContributeDialog, [{
    key: 'redirect',
    value: function redirect() {
      var mapPath = (0, _Title.cleanTitleToAbsURL)(this.props.mapTitle).replace(/\/$/, '');
      var url = 'https://github.com/nikitavoloboev/learn-anything/edit/master' + mapPath + '.json';

      (0, _openNewTab2.default)({
        type: _actions2.default.ga.contribution.guidelinesAccepted,
        payload: url
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.visible) {
        return null;
      }

      return _react2.default.createElement(
        _Dialog2.default,
        {
          title: "Contribution guidelines",
          acceptLabel: "Continue",
          isCentered: false,
          onReject: this.props.onReject,
          onAccept: this.redirect
        },
        _react2.default.createElement('div', {
          dangerouslySetInnerHTML: { __html: "<p>Thank you for wanting to improve the mind map.</p>\n<p>As all of these maps live on GitHub, changing or adding new content means adding content on GitHub itself. Fortunately the way these maps are represented in code is really simple so adding and changing things should be really easy.</p>\n<p>The changes you make however should follow our guidelines which focus on providing the most efficient paths for learning any topic on Earth.</p>\n<h3 id=\"guidelines\">Guidelines</h3>\n<ul>\n<li>All <strong>maps should feel very similar</strong>.</li>\n<li>They <strong>all have a main node</strong> that most often links to a wiki article. This main node often has a reddit or stack exchange community as well as a GitHub awesome list attached to it if such exist. It can also have GitHub repository of this topic attached if it is a software project. From there you have a <strong>basics node</strong> that gives the most efficient ‘step by step’ path for learning that topic.</li>\n<li>The resources for learning can include anything. Books, courses, videos, interactive visualisations. <strong>It does not matter how popular the resource is, the only thing that matters is that it explains things well and is ideally free.</strong> Certain books are not free and a Goodreads page to them will be provided. The steps represent the order with which the resources should ideally be covered in. Often the same step can have multiple resources. That’s okay.</li>\n<li>Aside from ’basics’ and main node, <strong>you can add additional material</strong> that ‘helps’ learning the content. You can also add some interesting links that are related to the topic. Some examples may include a <strong>help node</strong> with cheat sheets or summaries. An <strong>interesting node</strong> with various interesting links like talks or articles. A <strong>tools node</strong> with various tooling related to the topic. An <strong>articles node</strong> with a list of articles related to the topic. The resources that can be included here should also be of high quality and related to the topic. For articles and talks, it is best to prefix it with the year in which the article, talk was produced in. We abbreviate years for visual clarity so an article prefixed with ’17:’ means that the article was written in 2017.</li>\n<li><strong>From the basics node, the map branches into new topics (usually other maps). The branching has to be very clear.</strong> So for example ‘programming languages’ are under ‘programming’. We understand that knowledge is ultimately a graph and not a tree of branches and we try to show this interconnectedness of everything the best we can.</li>\n</ul>\n<h3 id=\"syntax\">Syntax</h3>\n<p>All maps are stored in JSON format and can be easily edited.</p>\n<pre>\n{\n  \"title\": \"life---hobbies\",\n  \"description\": \"A hobby is a regular activity that is done for enjoyment, typically during one's leisure time.\",\n  \"tag\": \"hobbies\",\n  \"connections\": [\n    ...\n  ],\n  \"key\": \"hobbies\",\n  \"nodes\": [\n    ...\n  ]\n}\n</pre>\n\n<p>This is the top level of a map, here some meta information is specified, like:</p>\n<ul>\n<li><strong>title:</strong> path of the map in the knowledge graph.</li>\n<li><strong>description (optional):</strong> short description of the topic, which will display\nwhen sharing links of the map.</li>\n<li><strong>tag (optional):</strong> custom tag for the search, will be prioritized over the map\nname if specified. For instance, the map called <code>R</code> has an <code>R programming language</code> tag.</li>\n</ul>\n<p>Then there is some other information that is directly used for rendering of maps:</p>\n<ul>\n<li><strong>nodes:</strong> a list of nodes with their respective name and link to resources.</li>\n<li><strong>connections:</strong> a list with the connections between all nodes.</li>\n</ul>\n<h4 id=\"nodes\">Nodes</h4>\n<p>Here is an example of a node:</p>\n<pre>\n{\n  \"text\": \"python\",\n  \"url\": \"http://www.wikiwand.com/en/Python_(programming_language)\",\n  \"fx\": -13.916222252976013,\n  \"fy\": -659.1641376795345,\n  \"category\": \"wiki\",\n  \"note\": \"\",\n  \"nodes\": []\n}\n</pre>\n\n<p>The possible attributes are:</p>\n<ul>\n<li><strong>text:</strong> text that will appear on the node.</li>\n<li><strong>url:</strong> resource tied to that node.</li>\n<li><strong>category:</strong> category that will be used to generate an emoji.</li>\n<li><strong>note:</strong> note that will show when hovering the node.</li>\n<li><strong>fx and fy (optional):</strong> coordinates of the node (you probably don&#39;t want to\nspecify these as it&#39;s pretty complicated to get them at the moment).</li>\n<li><strong>nodes:</strong> a list of subnodes which have the same structure as nodes\n(subnodes are those resources that are listed next to a node, for instance basics always has subnodes).</li>\n</ul>\n<h4 id=\"connections\">Connections</h4>\n<p>Here is an example of a connection:</p>\n<pre>\n{\n  \"source\": \"python\",\n  \"target\": \"basics\",\n  \"curve\": {\n    \"x\": -43.5535,\n    \"y\": 299.545\n  }\n}\n</pre>\n\n<p>Here are the possible attributes:</p>\n<ul>\n<li><strong>source:</strong> text of the node where the connection starts</li>\n<li><strong>target:</strong> text of the node where the connection ends</li>\n<li><strong>curve (optional):</strong> coordinates for generating the curve of the connection\n(same story as the coordinates above, you can leave it as <code>&quot;curve&quot;: {&#39;{}&#39;}</code>)</li>\n</ul>\n<h3 id=\"stuck-\">Stuck?</h3>\n<p>You can head to our <a href=\"https://knowledge-map.slack.com/shared_invite/MTgxNTYzMjIzNjM5LTE0OTQzMzA4MDAtYzY1YWY0ZDc0NQ\">Slack group</a> and we&#39;ll be really happy to help you!</p>\n" },
          className: 'contribute-dialog' })
      );
    }
  }]);

  return ContributeDialog;
}(_react.Component);

exports.default = ContributeDialog;


ContributeDialog.defaultProps = {
  onReject: function onReject() {},
  visible: false,
  mapTitle: ''
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _openNewTab = __webpack_require__(9);

var _openNewTab2 = _interopRequireDefault(_openNewTab);

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

var _Dialog = __webpack_require__(24);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnmatchedDialog = function (_Component) {
  _inherits(UnmatchedDialog, _Component);

  function UnmatchedDialog(props) {
    _classCallCheck(this, UnmatchedDialog);

    var _this = _possibleConstructorReturn(this, (UnmatchedDialog.__proto__ || Object.getPrototypeOf(UnmatchedDialog)).call(this, props));

    _this.redirect = _this.redirect.bind(_this);
    return _this;
  }

  _createClass(UnmatchedDialog, [{
    key: 'redirect',
    value: function redirect() {
      var url = 'https://duckduckgo.com/?q=' + this.props.query;
      (0, _openNewTab2.default)({
        type: _actions2.default.ga.search.fallbackSearch,
        payload: url
      });
      this.props.onReject();
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.visible) {
        return null;
      }

      return _react2.default.createElement(
        _Dialog2.default,
        {
          title: "Map not found",
          acceptLabel: "Search",
          onReject: this.props.onReject,
          onAccept: this.redirect,
          acceptOnEnterPress: true
        },
        _react2.default.createElement(
          'div',
          { className: 'unmatched-dialog' },
          "The topic you're looking for doesn't have a map yet, but you can search it on DuckDuckGo."
        )
      );
    }
  }]);

  return UnmatchedDialog;
}(_react.Component);

exports.default = UnmatchedDialog;


UnmatchedDialog.defaultProps = {
  onReject: function onReject() {},
  visible: false,
  query: ''
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(10);

var _reactMindmap = __webpack_require__(85);

var _reactMindmap2 = _interopRequireDefault(_reactMindmap);

var _fetchMap = __webpack_require__(7);

var _fetchMap2 = _interopRequireDefault(_fetchMap);

var _Breadcrumbs = __webpack_require__(52);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MindMapWrapper = (_dec = (0, _reactRedux.connect)(function (store) {
  return {
    connections: store.map.connections,
    nodes: store.map.nodes,
    title: store.map.title
  };
}), _dec(_class = function (_Component) {
  _inherits(MindMapWrapper, _Component);

  function MindMapWrapper(props) {
    _classCallCheck(this, MindMapWrapper);

    var _this = _possibleConstructorReturn(this, (MindMapWrapper.__proto__ || Object.getPrototypeOf(MindMapWrapper)).call(this, props));

    _this.onCrumbClick = _this.onCrumbClick.bind(_this);
    return _this;
  }

  _createClass(MindMapWrapper, [{
    key: 'onCrumbClick',
    value: function onCrumbClick(url) {
      this.props.dispatch((0, _fetchMap2.default)(url));
    }
  }, {
    key: 'render',
    value: function render() {
      var pathname = window.location.pathname;

      return _react2.default.createElement(
        'div',
        null,
        pathname !== '/thank-you' ? _react2.default.createElement(_Breadcrumbs2.default, {
          title: this.props.title,
          onCrumbClick: this.onCrumbClick
        }) : '',
        _react2.default.createElement(_reactMindmap2.default, {
          connections: this.props.connections,
          nodes: this.props.nodes
        })
      );
    }
  }]);

  return MindMapWrapper;
}(_react.Component)) || _class);
exports.default = MindMapWrapper;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thankYou = thankYou;
exports.map = map;

var _SearchBar = __webpack_require__(54);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _MindMapWrapper = __webpack_require__(58);

var _MindMapWrapper2 = _interopRequireDefault(_MindMapWrapper);

var _ContributeButton = __webpack_require__(53);

var _ContributeButton2 = _interopRequireDefault(_ContributeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function thankYou() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      { className: 'thank-you-text' },
      'Thank you for\xA0',
      React.createElement(
        'a',
        { className: 'patreon-link', href: 'https://www.patreon.com/learnanything' },
        'supporting our project'
      ),
      '!',
      React.createElement('br', null),
      'You are amazing \uD83D\uDC9B'
    ),
    React.createElement(_MindMapWrapper2.default, null)
  );
}

function map() {
  return React.createElement(
    'div',
    null,
    React.createElement(_MindMapWrapper2.default, null)
  );
}

/*
* Qingwu: SearchBar
* React.createElement(_SearchBar2.default, {
      dispatch: this.props.dispatch,
      title: this.props.title,
      query: this.props.query,
      placeholder: this.props.placeholder,
      suggestions: this.props.suggestions,
      loading: this.props.loading
    }),
*
*React.createElement(_ContributeButton2.default, { title: this.props.title })
*
*
* */

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(17);

var _reactRedux = __webpack_require__(10);

var _App = __webpack_require__(28);

var _App2 = _interopRequireDefault(_App);

var _fetchMap = __webpack_require__(7);

var _fetchMap2 = _interopRequireDefault(_fetchMap);

var _store = __webpack_require__(8);

var _store2 = _interopRequireDefault(_store);

var _getParent = __webpack_require__(29);

var _getParent2 = _interopRequireDefault(_getParent);

var _openNewTab = __webpack_require__(9);

var _openNewTab2 = _interopRequireDefault(_openNewTab);

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

__webpack_require__(30);

__webpack_require__(32);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Enable hot reloading
if (false) {
  module.hot.accept();
}

//Qingwu-Comment
window.addEventListener('load', function () {
  // (0, _reactDom.render)(_react2.default.createElement(
  //   _reactRedux.Provider,
  //   { store: _store2.default },
  //   _react2.default.createElement(_App2.default, null)
  // ), document.getElementById('react-app'));

  // var url = "/api/maps/computerscience";
  // _store2.default.dispatch((0, _fetchMap2.default)(url));

  // Catch clicks on links, add GA calls, and change default behavior.
  // If link is internal, fetch new map; if link is external, open in new tab.
  document.body.addEventListener('click', function (e) {
    e.preventDefault();
    // Get the first parent of the target element that is an A tag.
    var t = (0, _getParent2.default)(e.target, 'A');

    // No link
    if (!t || !t.href) {
      return;
    }

    // Internal link clicked.
    if (t.href.includes(window.location.origin)) {
      var url = t.href.replace(window.location.origin, '');

      _store2.default.dispatch({
        type: _actions2.default.ga.navigation.internal,
        payload: url.slice(1)
      });

      if (url.includes('/thank-you') || url.includes('/learn-anything')) {
        setTimeout(function () {
          location.href = url;
        }, 200);
      } else {
        _store2.default.dispatch((0, _fetchMap2.default)(url));
      }

      //  External link clicked.
    } else {
      (0, _openNewTab2.default)({
        type: _actions2.default.ga.navigation.external,
        payload: t.href
      });
    }
  });
});

window.addEventListener('popstate', function () {
  return _store2.default.dispatch((0, _fetchMap2.default)(window.location.pathname, false));
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(27);

var _searchReducer = __webpack_require__(63);

var _searchReducer2 = _interopRequireDefault(_searchReducer);

var _mapReducer = __webpack_require__(62);

var _mapReducer2 = _interopRequireDefault(_mapReducer);

var _themeReducer = __webpack_require__(64);

var _themeReducer2 = _interopRequireDefault(_themeReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Bundled reducers used by store/store.js.
exports.default = (0, _redux.combineReducers)({
  search: _searchReducer2.default,
  map: _mapReducer2.default,
  theme: _themeReducer2.default
});

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Title = __webpack_require__(12);

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  title: '',
  nodes: [],
  connections: [],
  loading: false,
  error: undefined
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.map.fetchUpdate.pending:
    case _actions2.default.map.fetch.pending:
      return _extends({}, state, {
        nodes: [],
        connections: [],
        loading: true,
        error: undefined
      });

    case _actions2.default.map.fetchUpdate.fulfilled:
      {
        // Update URL on the browser
        var url = (0, _Title.titleToURL)(action.payload.data.title);
        history.pushState(null, null, url);
      }
    // Fall through next case.
    case _actions2.default.map.fetch.fulfilled:
      {
        var data = action.payload.data;
        var title = (0, _Title.cleanTitle)(data.title);

        // Set HTML title.
        var titleSplit = title.split(' - ');
        var topic = titleSplit[titleSplit.length - 1];
        document.title = topic + ' - Learn Anything';

        return _extends({}, state, {
          title: title,
          loading: false,
          error: undefined,
          nodes: data.nodes,
          connections: data.connections
        });
      }

    case _actions2.default.map.fetchUpdate.rejected:
    case _actions2.default.map.fetch.rejected:
      {
        // Error fetching map.
        var error = action.payload;

        return _extends({}, state, {
          error: error,
          nodes: [],
          connections: [],
          loading: false
        });
      }

    default:
      return state;
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  query: '',
  suggestions: [],
  placeholder: { key: '', id: '' }
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.search.suggestions.fetch.def:
      {
        return _extends({}, state, {
          suggestions: action.payload
        });
      }

    case _actions2.default.search.suggestions.fetch.fulfilled:
      {
        var query = action.payload.config.url.replace('/api/maps/?q=', '');
        var suggestions = action.payload.data;

        // If no query was passed to the API, it means that a random
        // map was requested for the placeholder.
        if (query === '') {
          return _extends({}, state, {
            placeholder: suggestions[0]
          });
        }

        var cachedSuggestions = JSON.parse(localStorage.getItem('suggestions')) || {};
        cachedSuggestions[query.trim()] = {
          date: new Date(),
          suggestions: suggestions
        };
        localStorage.setItem('suggestions', JSON.stringify(cachedSuggestions));

        return _extends({}, state, {
          suggestions: suggestions
        });
      }

    case _actions2.default.search.suggestions.clear:
      return _extends({}, state, {
        suggestions: []
      });

    case _actions2.default.search.query.update:
      return _extends({}, state, {
        query: action.payload
      });

    case _actions2.default.search.query.clear:
      return _extends({}, state, {
        query: ''
      });

    default:
      return state;
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = localStorage.getItem('theme') || 'PearlWhite';

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions2.default.theme.set:
      localStorage.setItem('theme', action.payload);
      return action.payload;

    default:
      return state;
  }
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getGAObj = function getGAObj(action) {
  var type = action.type.replace(/(\[.*\])|\*.*/g, '');

  switch (action.type) {
    case _actions2.default.theme.set:
      return {
        eventCategory: 'Personalization',
        eventAction: type,
        eventLabel: action.payload
      };

    case _actions2.default.map.fetchUpdate.fulfilled:
    case _actions2.default.map.fetch.fulfilled:
      return {
        eventCategory: 'Search',
        eventAction: type,
        eventLabel: action.payload.data.title
      };

    case _actions2.default.ga.navigation.internal:
    case _actions2.default.ga.navigation.external:
      return {
        eventCategory: 'Navigation',
        eventAction: type,
        eventLabel: action.payload
      };

    case _actions2.default.ga.contribution.buttonClicked:
    case _actions2.default.ga.contribution.guidelinesAccepted:
      return {
        eventCategory: 'Contribution',
        eventAction: type,
        eventLabel: action.payload
      };

    case _actions2.default.ga.search.unmatchedQuery:
    case _actions2.default.ga.search.fallbackSearch:
      return {
        eventCategory: 'Search',
        eventAction: type,
        eventLabel: action.payload
      };

    default:
      return {};
  }
};

var prod = function prod(GAObj) {
  return ga('send', 'event', GAObj);
};
// eslint-disable-next-line no-console
var dev = function dev(GAObj) {
  return console.log(GAObj);
};

exports.default = function () {
  return function (next) {
    return function (action) {
      var GAObj = getGAObj(action);

      // If there's no event category.
      if (!GAObj.eventCategory) {
        return next(action);
      }

      if (process.env.NODE_ENV === 'production') {
        prod(GAObj);
      } else {
        dev(GAObj);
      }

      return next(action);
    };
  };
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * Get an object with classNames as keys and expressions as values.
 *
 * If the values are functions they're gonna be run, otherwise they're gonna
 * be casted to boolean.
 *
 * The booleans represent wether or not a class should be present
 * on the final string.
 */
exports.default = function (classNames) {
  return Object.keys(classNames).filter(function (className) {
    if (typeof classNames[classNames] === 'function') {
      return classNames[className]();
    }

    return classNames[className];
  }).join(' ');
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ┌────────────────────────────────────────────────────────────┐ \\
// │ Eve 0.4.2 - JavaScript Events Library                      │ \\
// ├────────────────────────────────────────────────────────────┤ \\
// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
// └────────────────────────────────────────────────────────────┘ \\

(function (glob) {
    var version = "0.4.2",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function fun() {},
        numsort = function numsort(a, b) {
        return a - b;
    },
        current_event,
        stop,
        events = { n: {} },
        firstDefined = function firstDefined() {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (typeof this[i] != "undefined") {
                return this[i];
            }
        }
    },
        lastDefined = function lastDefined() {
        var i = this.length;
        while (--i) {
            if (typeof this[i] != "undefined") {
                return this[i];
            }
        }
    },

    /*\
     * eve
     [ method ]
      * Fires event with given `name`, given scope and other parameters.
      > Arguments
      - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
     - scope (object) context for the event handlers
     - varargs (...) the rest of arguments will be sent to event handlers
      = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
    \*/
    eve = function eve(name, scope) {
        name = String(name);
        var e = events,
            oldstop = stop,
            args = Array.prototype.slice.call(arguments, 2),
            listeners = eve.listeners(name),
            z = 0,
            f = false,
            l,
            indexed = [],
            queue = {},
            out = [],
            ce = current_event,
            errors = [];
        out.firstDefined = firstDefined;
        out.lastDefined = lastDefined;
        current_event = name;
        stop = 0;
        for (var i = 0, ii = listeners.length; i < ii; i++) {
            if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                    queue[listeners[i].zIndex] = listeners[i];
                }
            }
        }indexed.sort(numsort);
        while (indexed[z] < 0) {
            l = queue[indexed[z++]];
            out.push(l.apply(scope, args));
            if (stop) {
                stop = oldstop;
                return out;
            }
        }
        for (i = 0; i < ii; i++) {
            l = listeners[i];
            if ("zIndex" in l) {
                if (l.zIndex == indexed[z]) {
                    out.push(l.apply(scope, args));
                    if (stop) {
                        break;
                    }
                    do {
                        z++;
                        l = queue[indexed[z]];
                        l && out.push(l.apply(scope, args));
                        if (stop) {
                            break;
                        }
                    } while (l);
                } else {
                    queue[l.zIndex] = l;
                }
            } else {
                out.push(l.apply(scope, args));
                if (stop) {
                    break;
                }
            }
        }
        stop = oldstop;
        current_event = ce;
        return out;
    };
    // Undocumented. Debug only.
    eve._events = events;
    /*\
     * eve.listeners
     [ method ]
      * Internal method which gives you array of all event handlers that will be triggered by the given `name`.
      > Arguments
      - name (string) name of the event, dot (`.`) or slash (`/`) separated
      = (array) array of event handlers
    \*/
    eve.listeners = function (name) {
        var names = name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
            nes = [];
            for (j = 0, jj = es.length; j < jj; j++) {
                e = es[j].n;
                items = [e[names[i]], e[wildcard]];
                k = 2;
                while (k--) {
                    item = items[k];
                    if (item) {
                        nes.push(item);
                        out = out.concat(item.f || []);
                    }
                }
            }
            es = nes;
        }
        return out;
    };

    /*\
     * eve.on
     [ method ]
     **
     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
     | eve.on("*.under.*", f);
     | eve("mouse.under.floor"); // triggers f
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
     > Example:
     | eve.on("mouse", eatIt)(2);
     | eve.on("mouse", scream);
     | eve.on("mouse", catchIt)(1);
     * This will ensure that `catchIt` function will be called before `eatIt`.
     *
     * If you want to put your handler before non-indexed handlers, specify a negative value.
     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
    \*/
    eve.on = function (name, f) {
        name = String(name);
        if (typeof f != "function") {
            return function () {};
        }
        var names = name.split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
            (function (name) {
                var names = name.split(separator),
                    e = events,
                    exist;
                for (var i = 0, ii = names.length; i < ii; i++) {
                    e = e.n;
                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = { n: {} });
                }
                e.f = e.f || [];
                for (i = 0, ii = e.f.length; i < ii; i++) {
                    if (e.f[i] == f) {
                        exist = true;
                        break;
                    }
                }!exist && e.f.push(f);
            })(names[i]);
        }
        return function (zIndex) {
            if (+zIndex == +zIndex) {
                f.zIndex = +zIndex;
            }
        };
    };
    /*\
     * eve.f
     [ method ]
     **
     * Returns function that will fire given event with optional arguments.
     * Arguments that will be passed to the result function will be also
     * concated to the list of final arguments.
     | el.onclick = eve.f("click", 1, 2);
     | eve.on("click", function (a, b, c) {
     |     console.log(a, b, c); // 1, 2, [event object]
     | });
     > Arguments
     - event (string) event name
     - varargs (…) and any other arguments
     = (function) possible event handler function
    \*/
    eve.f = function (event) {
        var attrs = [].slice.call(arguments, 1);
        return function () {
            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
    };
    /*\
     * eve.stop
     [ method ]
     **
     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
    \*/
    eve.stop = function () {
        stop = 1;
    };
    /*\
     * eve.nt
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     > Arguments
     **
     - subname (string) #optional subname of the event
     **
     = (string) name of the event, if `subname` is not specified
     * or
     = (boolean) `true`, if current event’s name contains `subname`
    \*/
    eve.nt = function (subname) {
        if (subname) {
            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
        }
        return current_event;
    };
    /*\
     * eve.nts
     [ method ]
     **
     * Could be used inside event handler to figure out actual name of the event.
     **
     **
     = (array) names of the event
    \*/
    eve.nts = function () {
        return current_event.split(separator);
    };
    /*\
     * eve.off
     [ method ]
     **
     * Removes given function from the list of event listeners assigned to given name.
     * If no arguments specified all the events will be cleared.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
    \*/
    /*\
     * eve.unbind
     [ method ]
     **
     * See @eve.off
    \*/
    eve.off = eve.unbind = function (name, f) {
        if (!name) {
            eve._events = events = { n: {} };
            return;
        }
        var names = name.split(comaseparator);
        if (names.length > 1) {
            for (var i = 0, ii = names.length; i < ii; i++) {
                eve.off(names[i], f);
            }
            return;
        }
        names = name.split(separator);
        var e,
            key,
            splice,
            i,
            ii,
            j,
            jj,
            cur = [events];
        for (i = 0, ii = names.length; i < ii; i++) {
            for (j = 0; j < cur.length; j += splice.length - 2) {
                splice = [j, 1];
                e = cur[j].n;
                if (names[i] != wildcard) {
                    if (e[names[i]]) {
                        splice.push(e[names[i]]);
                    }
                } else {
                    for (key in e) {
                        if (e[has](key)) {
                            splice.push(e[key]);
                        }
                    }
                }
                cur.splice.apply(cur, splice);
            }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
            e = cur[i];
            while (e.n) {
                if (f) {
                    if (e.f) {
                        for (j = 0, jj = e.f.length; j < jj; j++) {
                            if (e.f[j] == f) {
                                e.f.splice(j, 1);
                                break;
                            }
                        }!e.f.length && delete e.f;
                    }
                    for (key in e.n) {
                        if (e.n[has](key) && e.n[key].f) {
                            var funcs = e.n[key].f;
                            for (j = 0, jj = funcs.length; j < jj; j++) {
                                if (funcs[j] == f) {
                                    funcs.splice(j, 1);
                                    break;
                                }
                            }!funcs.length && delete e.n[key].f;
                        }
                    }
                } else {
                    delete e.f;
                    for (key in e.n) {
                        if (e.n[has](key) && e.n[key].f) {
                            delete e.n[key].f;
                        }
                    }
                }
                e = e.n;
            }
        }
    };
    /*\
     * eve.once
     [ method ]
     **
     * Binds given event handler with a given name to only run once then unbind itself.
     | eve.once("login", f);
     | eve("login"); // triggers f
     | eve("login"); // no listeners
     * Use @eve to trigger the listener.
     **
     > Arguments
     **
     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
     - f (function) event handler function
     **
     = (function) same return function as @eve.on
    \*/
    eve.once = function (name, f) {
        var f2 = function f2() {
            eve.unbind(name, f2);
            return f.apply(this, arguments);
        };
        return eve.on(name, f2);
    };
    /*\
     * eve.version
     [ property (string) ]
     **
     * Current version of the library.
    \*/
    eve.version = version;
    eve.toString = function () {
        return "You are running Eve " + version;
    };
    typeof module != "undefined" && module.exports ? module.exports = eve :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return eve;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : glob.eve = eve;
})(undefined);

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(14);
  var warning = __webpack_require__(25);
  var ReactPropTypesSecret = __webpack_require__(16);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(13);
var invariant = __webpack_require__(14);
var ReactPropTypesSecret = __webpack_require__(16);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var emptyFunction = __webpack_require__(13);
var invariant = __webpack_require__(14);
var warning = __webpack_require__(25);

var ReactPropTypesSecret = __webpack_require__(16);
var checkPropTypes = __webpack_require__(69);

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(false, 'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' + 'received %s at index %s.', getPostfixForTypeWarning(checker), i);
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(_x, _x2, _x3) {
  var _again = true;_function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var BurgerIcon = function (_Component) {
  _inherits(BurgerIcon, _Component);

  function BurgerIcon(props) {
    _classCallCheck(this, BurgerIcon);

    _get(Object.getPrototypeOf(BurgerIcon.prototype), 'constructor', this).call(this, props);
    this.state = {
      hover: false
    };
  }

  _createClass(BurgerIcon, [{
    key: 'getLineStyle',
    value: function getLineStyle(index) {
      return {
        position: 'absolute',
        height: '20%',
        left: 0,
        right: 0,
        top: 20 * (index * 2) + '%',
        opacity: this.state.hover ? 0.6 : 1
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var icon = undefined;
      var buttonStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        border: 'none',
        opacity: 0,
        fontSize: 8
      };

      if (this.props.customIcon) {
        var extraProps = {
          className: 'bm-icon',
          style: _extends({ width: '100%', height: '100%' }, this.props.styles.bmIcon)
        };
        icon = _react2['default'].cloneElement(this.props.customIcon, extraProps);
      } else {
        icon = _react2['default'].createElement('span', null, [0, 1, 2].map(function (bar) {
          return _react2['default'].createElement('span', {
            key: bar,
            className: 'bm-burger-bars ' + _this.props.barClassName,
            style: _extends({}, _this.getLineStyle(bar), _this.props.styles.bmBurgerBars)
          });
        }));
      }

      return _react2['default'].createElement('div', {
        className: 'bm-burger-button ' + this.props.className,
        style: _extends({ zIndex: 1 }, this.props.styles.bmBurgerButton)
      }, icon, _react2['default'].createElement('button', {
        onClick: this.props.onClick,
        onMouseOver: function onMouseOver() {
          return _this.setState({ hover: true });
        },
        onMouseOut: function onMouseOut() {
          return _this.setState({ hover: false });
        },
        style: buttonStyle
      }, 'Open Menu'));
    }
  }]);

  return BurgerIcon;
}(_react.Component);

exports['default'] = BurgerIcon;

BurgerIcon.propTypes = {
  barClassName: _propTypes2['default'].string,
  customIcon: _propTypes2['default'].element,
  styles: _propTypes2['default'].object
};

BurgerIcon.defaultProps = {
  barClassName: '',
  className: '',
  styles: {}
};
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  slide: __webpack_require__(83),
  stack: __webpack_require__(84),
  elastic: __webpack_require__(77),
  bubble: __webpack_require__(76),
  push: __webpack_require__(79),
  pushRotate: __webpack_require__(80),
  scaleDown: __webpack_require__(81),
  scaleRotate: __webpack_require__(82),
  fallDown: __webpack_require__(78)
};
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _get = function get(_x, _x2, _x3) {
  var _again = true;_function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(15);

var _propTypes2 = _interopRequireDefault(_propTypes);

var CrossIcon = function (_Component) {
  _inherits(CrossIcon, _Component);

  function CrossIcon() {
    _classCallCheck(this, CrossIcon);

    _get(Object.getPrototypeOf(CrossIcon.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CrossIcon, [{
    key: 'getCrossStyle',
    value: function getCrossStyle(type) {
      return {
        position: 'absolute',
        width: 3,
        height: 14,
        transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var icon;
      var buttonWrapperStyle = {
        position: 'absolute',
        width: 24,
        height: 24,
        right: 8,
        top: 8
      };
      var buttonStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        border: 'none',
        textIndent: -9999,
        background: 'transparent',
        outline: 'none'
      };

      if (this.props.customIcon) {
        var extraProps = {
          className: 'bm-cross',
          style: _extends({ width: '100%', height: '100%' }, this.props.styles.bmCross)
        };
        icon = _react2['default'].cloneElement(this.props.customIcon, extraProps);
      } else {
        icon = _react2['default'].createElement('span', { style: { position: 'absolute', top: '6px', right: '14px' } }, ['before', 'after'].map(function (type, i) {
          return _react2['default'].createElement('span', {
            key: i,
            className: 'bm-cross ' + _this.props.crossClassName,
            style: _extends({}, _this.getCrossStyle(type), _this.props.styles.bmCross)
          });
        }));
      }

      return _react2['default'].createElement('div', {
        className: 'bm-cross-button ' + this.props.className,
        style: _extends({}, buttonWrapperStyle, this.props.styles.bmCrossButton)
      }, icon, _react2['default'].createElement('button', { onClick: this.props.onClick, style: buttonStyle }, 'Close Menu'));
    }
  }]);

  return CrossIcon;
}(_react.Component);

exports['default'] = CrossIcon;

CrossIcon.propTypes = {
  crossClassName: _propTypes2['default'].string,
  customIcon: _propTypes2['default'].element,
  styles: _propTypes2['default'].object
};

CrossIcon.defaultProps = {
  crossClassName: '',
  className: '',
  styles: {}
};
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var styles = {

  overlay: function overlay(isOpen) {
    return {
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: isOpen ? 1 : 0,
      MozTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      MsTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      OTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      WebkitTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      transform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
    };
  },

  menuWrap: function menuWrap(isOpen, width, right) {
    return {
      position: 'fixed',
      right: right ? 0 : 'inherit',
      zIndex: 2,
      width: width,
      height: '100%',
      MozTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      MsTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      OTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transform: isOpen ? '' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transition: 'all 0.5s'
    };
  },

  menu: function menu() {
    return {
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'auto'
    };
  },

  itemList: function itemList() {
    return {
      height: '100%'
    };
  },

  item: function item() {
    return {
      display: 'block',
      outline: 'none'
    };
  }

};

exports['default'] = styles;
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _snapsvgImporter = __webpack_require__(26);

var _snapsvgImporter2 = _interopRequireDefault(_snapsvgImporter);

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  svg: {
    lib: _snapsvgImporter2['default'],
    pathInitial: 'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
    pathOpen: 'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
    animate: function animate(path) {
      var pos = 0;
      var steps = this.pathOpen.split(';');
      var stepsTotal = steps.length;
      var mina = window.mina;

      var nextStep = function nextStep() {
        if (pos > stepsTotal - 1) return;

        path.animate({ path: steps[pos] }, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, function () {
          nextStep();
        });

        pos++;
      };

      nextStep();
    }
  },

  morphShape: function morphShape(isOpen, width, right) {
    return {
      position: 'absolute',
      width: '100%',
      height: '100%',
      right: right ? 'inherit' : 0,
      left: right ? 0 : 'inherit',
      MozTransform: right ? 'rotateY(180deg)' : 'rotateY(0deg)',
      MsTransform: right ? 'rotateY(180deg)' : 'rotateY(0deg)',
      OTransform: right ? 'rotateY(180deg)' : 'rotateY(0deg)',
      WebkitTransform: right ? 'rotateY(180deg)' : 'rotateY(0deg)',
      transform: right ? 'rotateY(180deg)' : 'rotateY(0deg)'
    };
  },

  menuWrap: function menuWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      MsTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      OTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transition: isOpen ? 'transform 0.4s 0s' : 'transform 0.4s'
    };
  },

  menu: function menu(isOpen, width, right) {
    width -= 140;
    return {
      position: 'fixed',
      MozTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      MsTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      OTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      transform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      transition: isOpen ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
      opacity: isOpen ? 1 : 0
    };
  },

  item: function item(isOpen, width, right, nthChild) {
    width -= 140;
    return {
      MozTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      MsTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      OTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      transition: isOpen ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
      opacity: isOpen ? 1 : 0
    };
  },

  closeButton: function closeButton(isOpen, width, right) {
    width -= 140;
    return {
      MozTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      MsTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      OTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      transition: isOpen ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
      opacity: isOpen ? 1 : 0
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _snapsvgImporter = __webpack_require__(26);

var _snapsvgImporter2 = _interopRequireDefault(_snapsvgImporter);

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  svg: {
    lib: _snapsvgImporter2['default'],
    pathInitial: 'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
    pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
    animate: function animate(path) {
      path.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
    }
  },

  morphShape: function morphShape(isOpen, width, right) {
    return {
      position: 'absolute',
      width: 120,
      height: '100%',
      right: right ? 'inherit' : 0,
      left: right ? 0 : 'inherit',
      MozTransform: right ? 'rotateY(180deg)' : '',
      MsTransform: right ? 'rotateY(180deg)' : '',
      OTransform: right ? 'rotateY(180deg)' : '',
      WebkitTransform: right ? 'rotateY(180deg)' : '',
      transform: right ? 'rotateY(180deg)' : ''
    };
  },

  menuWrap: function menuWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      MsTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      OTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      WebkitTransform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transform: isOpen ? 'translate3d(0, 0, 0)' : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transition: 'all 0.3s'
    };
  },

  menu: function menu(isOpen, width, right) {
    return {
      position: 'fixed',
      right: right ? 0 : 'inherit',
      width: 180,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      overflow: 'visible'
    };
  },

  itemList: function itemList(isOpen, width, right) {
    if (right) {
      return {
        position: 'relative',
        left: '-110px',
        width: '170%',
        overflow: 'auto'
      };
    }
  },

  pageWrap: function pageWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
      MsTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
      OTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
      transform: isOpen ? '' : right ? 'translate3d(-100px, 0, 0)' : 'translate3d(100px, 0, 0)',
      transition: isOpen ? 'all 0.3s' : 'all 0.3s 0.1s'
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  menuWrap: function menuWrap(isOpen) {
    return {
      MozTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      MsTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      OTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      WebkitTransform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      transform: isOpen ? '' : 'translate3d(0, -100%, 0)',
      transition: 'all 0.5s ease-in-out'
    };
  },

  pageWrap: function pageWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      MsTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      OTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      transform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      transition: 'all 0.5s'
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      perspective: '1500px',
      perspectiveOrigin: '0% 50%',
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  pageWrap: function pageWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      MsTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      OTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      transform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0)' : 'translate3d(' + width + ', 0, 0)',
      transition: 'all 0.5s'
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  pageWrap: function pageWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
      MsTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
      OTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
      transform: isOpen ? '' : right ? 'translate3d(-' + width + ', 0, 0) rotateY(15deg)' : 'translate3d(' + width + ', 0, 0) rotateY(-15deg)',
      transformOrigin: right ? '100% 50%' : '0% 50%',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s'
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      perspective: '1500px',
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  pageWrap: function pageWrap(isOpen, width) {
    return {
      MozTransform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
      MsTransform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
      OTransform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
      WebkitTransform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
      transform: isOpen ? '' : 'translate3d(0, 0, -' + width + ')',
      transformOrigin: '100%',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s'
    };
  },

  outerContainer: function outerContainer() {
    return {
      perspective: '1500px'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  pageWrap: function pageWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
      MsTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
      OTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
      transform: isOpen ? '' : right ? 'translate3d(-100px, 0, -600px) rotateY(20deg)' : 'translate3d(100px, 0, -600px) rotateY(-20deg)',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s',
      overflow: isOpen ? '' : 'hidden'
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      perspective: '1500px',
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _menuFactory = __webpack_require__(4);

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  menuWrap: function menuWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      MsTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      OTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      WebkitTransform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      transform: isOpen ? '' : right ? 'translate3d(' + width + ', 0, 0)' : 'translate3d(-' + width + ', 0, 0)',
      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
    };
  },

  item: function item(isOpen, width, right, nthChild) {
    return {
      MozTransform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
      MsTransform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
      OTransform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
      WebkitTransform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
      transform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];

/***/ }),
/* 85 */
// create svg element
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = n(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.MindMap = n(require("react")) : t.MindMap = n(t.React);
}(undefined, function (t) {
  return function (t) {
    function n(r) {
      if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }var e = {};return n.m = t, n.c = e, n.i = function (t) {
      return t;
    }, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r });
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return n.d(e, "a", e), e;
    }, n.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }, n.p = "", n(n.s = 5);
  }([function (t, n, e) {
    "use strict";
    var r,
        i,
        o,
        u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return typeof t === "undefined" ? "undefined" : _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
    };!function (e, a) {
      "object" == u(n) && void 0 !== t ? a(n) : (i = [n], r = a, void 0 !== (o = "function" == typeof r ? r.apply(n, i) : r) && (t.exports = o));
    }(0, function (t) {
      function n(t) {
        return function (n, e) {
          return Ir(t(n), e);
        };
      }function e() {
        for (var t, n = 0, e = arguments.length, i = {}; n < e; ++n) {
          if (!(t = arguments[n] + "") || t in i) throw new Error("illegal type: " + t);i[t] = [];
        }return new r(i);
      }function r(t) {
        this._ = t;
      }function i(t, n) {
        return t.trim().split(/^|\s+/).map(function (t) {
          var e = "",
              r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
        });
      }function o(t, n) {
        for (var e, r = 0, i = t.length; r < i; ++r) {
          if ((e = t[r]).name === n) return e.value;
        }
      }function a(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r) {
          if (t[r].name === n) {
            t[r] = Xr, t = t.slice(0, r).concat(t.slice(r + 1));break;
          }
        }return null != e && t.push({ name: n, value: e }), t;
      }function s(t) {
        return function () {
          var n = this.ownerDocument,
              e = this.namespaceURI;return e === Br && n.documentElement.namespaceURI === Br ? n.createElement(t) : n.createElementNS(e, t);
        };
      }function c(t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      }function f(t, n, e) {
        return t = h(t, n, e), function (n) {
          var e = n.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
        };
      }function h(n, e, r) {
        return function (i) {
          var o = t.event;t.event = i;try {
            n.call(this, this.__data__, e, r);
          } finally {
            t.event = o;
          }
        };
      }function l(t) {
        return t.trim().split(/^|\s+/).map(function (t) {
          var n = "",
              e = t.indexOf(".");return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
        });
      }function p(t) {
        return function () {
          var n = this.__on;if (n) {
            for (var e, r = 0, i = -1, o = n.length; r < o; ++r) {
              e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
            }++i ? n.length = i : delete this.__on;
          }
        };
      }function d(t, n, e) {
        var r = Kr.hasOwnProperty(t.type) ? f : h;return function (i, o, u) {
          var a,
              s = this.__on,
              c = r(n, o, u);if (s) for (var f = 0, h = s.length; f < h; ++f) {
            if ((a = s[f]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = c, a.capture = e), void (a.value = n);
          }this.addEventListener(t.type, c, e), a = { type: t.type, name: t.name, value: n, listener: c, capture: e }, s ? s.push(a) : this.__on = [a];
        };
      }function v(n, e, r, i) {
        var o = t.event;n.sourceEvent = t.event, t.event = n;try {
          return e.apply(r, i);
        } finally {
          t.event = o;
        }
      }function g() {}function y() {
        return [];
      }function m(t, n) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
      }function _(t, n, e, r, i, o) {
        for (var u, a = 0, s = n.length, c = o.length; a < c; ++a) {
          (u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new m(t, o[a]);
        }for (; a < s; ++a) {
          (u = n[a]) && (i[a] = u);
        }
      }function w(t, n, e, r, i, o, u) {
        var a,
            s,
            c,
            f = {},
            h = n.length,
            l = o.length,
            p = new Array(h);for (a = 0; a < h; ++a) {
          (s = n[a]) && (p[a] = c = li + u.call(s, s.__data__, a, n), c in f ? i[a] = s : f[c] = s);
        }for (a = 0; a < l; ++a) {
          c = li + u.call(t, o[a], a, o), (s = f[c]) ? (r[a] = s, s.__data__ = o[a], f[c] = null) : e[a] = new m(t, o[a]);
        }for (a = 0; a < h; ++a) {
          (s = n[a]) && f[p[a]] === s && (i[a] = s);
        }
      }function x(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      }function b(t) {
        return function () {
          this.removeAttribute(t);
        };
      }function M(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }function T(t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      }function k(t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      }function A(t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      }function N(t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
        };
      }function C(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }function S(t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      }function U(t, n, e) {
        return function () {
          var r = n.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
        };
      }function E(t, n) {
        return t.style.getPropertyValue(n) || ki(t).getComputedStyle(t, null).getPropertyValue(n);
      }function j(t) {
        return function () {
          delete this[t];
        };
      }function z(t, n) {
        return function () {
          this[t] = n;
        };
      }function D(t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? delete this[t] : this[t] = e;
        };
      }function P(t) {
        return t.trim().split(/^|\s+/);
      }function O(t) {
        return t.classList || new Y(t);
      }function Y(t) {
        this._node = t, this._names = P(t.getAttribute("class") || "");
      }function L(t, n) {
        for (var e = O(t), r = -1, i = n.length; ++r < i;) {
          e.add(n[r]);
        }
      }function q(t, n) {
        for (var e = O(t), r = -1, i = n.length; ++r < i;) {
          e.remove(n[r]);
        }
      }function F(t) {
        return function () {
          L(this, t);
        };
      }function H(t) {
        return function () {
          q(this, t);
        };
      }function I(t, n) {
        return function () {
          (n.apply(this, arguments) ? L : q)(this, t);
        };
      }function R() {
        this.textContent = "";
      }function X(t) {
        return function () {
          this.textContent = t;
        };
      }function B(t) {
        return function () {
          var n = t.apply(this, arguments);this.textContent = null == n ? "" : n;
        };
      }function V() {
        this.innerHTML = "";
      }function $(t) {
        return function () {
          this.innerHTML = t;
        };
      }function Z(t) {
        return function () {
          var n = t.apply(this, arguments);this.innerHTML = null == n ? "" : n;
        };
      }function W() {
        this.nextSibling && this.parentNode.appendChild(this);
      }function G() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }function J() {
        return null;
      }function Q() {
        var t = this.parentNode;t && t.removeChild(this);
      }function K(t, n, e) {
        var r = ki(t),
            i = r.CustomEvent;"function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
      }function tt(t, n) {
        return function () {
          return K(this, t, n);
        };
      }function nt(t, n) {
        return function () {
          return K(this, t, n.apply(this, arguments));
        };
      }function et(t, n) {
        this._groups = t, this._parents = n;
      }function rt() {
        return new et([[document.documentElement]], Li);
      }function it() {
        t.event.stopImmediatePropagation();
      }function ot(t, n) {
        var e = t.document.documentElement,
            r = qi(t).on("dragstart.drag", null);n && (r.on("click.drag", Hi, !0), setTimeout(function () {
          r.on("click.drag", null);
        }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
      }function ut(t, n, e, r, i, o, u, a, s, c) {
        this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = s, this._ = c;
      }function at() {
        return !t.event.button;
      }function st() {
        return this.parentNode;
      }function ct(n) {
        return null == n ? { x: t.event.x, y: t.event.y } : n;
      }function ft(t, n) {
        var e = Object.create(t.prototype);for (var r in n) {
          e[r] = n[r];
        }return e;
      }function ht() {}function lt(t) {
        var n;return t = (t + "").trim().toLowerCase(), (n = Gi.exec(t)) ? (n = parseInt(n[1], 16), new yt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Ji.exec(t)) ? pt(parseInt(n[1], 16)) : (n = Qi.exec(t)) ? new yt(n[1], n[2], n[3], 1) : (n = Ki.exec(t)) ? new yt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = to.exec(t)) ? dt(n[1], n[2], n[3], n[4]) : (n = no.exec(t)) ? dt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = eo.exec(t)) ? mt(n[1], n[2] / 100, n[3] / 100, 1) : (n = ro.exec(t)) ? mt(n[1], n[2] / 100, n[3] / 100, n[4]) : io.hasOwnProperty(t) ? pt(io[t]) : "transparent" === t ? new yt(NaN, NaN, NaN, 0) : null;
      }function pt(t) {
        return new yt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
      }function dt(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new yt(t, n, e, r);
      }function vt(t) {
        return t instanceof ht || (t = lt(t)), t ? (t = t.rgb(), new yt(t.r, t.g, t.b, t.opacity)) : new yt();
      }function gt(t, n, e, r) {
        return 1 === arguments.length ? vt(t) : new yt(t, n, e, null == r ? 1 : r);
      }function yt(t, n, e, r) {
        this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
      }function mt(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new xt(t, n, e, r);
      }function _t(t) {
        if (t instanceof xt) return new xt(t.h, t.s, t.l, t.opacity);if (t instanceof ht || (t = lt(t)), !t) return new xt();if (t instanceof xt) return t;t = t.rgb();var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = Math.min(n, e, r),
            o = Math.max(n, e, r),
            u = NaN,
            a = o - i,
            s = (o + i) / 2;return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= s < .5 ? o + i : 2 - o - i, u *= 60) : a = s > 0 && s < 1 ? 0 : u, new xt(u, a, s, t.opacity);
      }function wt(t, n, e, r) {
        return 1 === arguments.length ? _t(t) : new xt(t, n, e, null == r ? 1 : r);
      }function xt(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
      }function bt(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
      }function Mt(t) {
        if (t instanceof kt) return new kt(t.l, t.a, t.b, t.opacity);if (t instanceof jt) {
          var n = t.h * oo;return new kt(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
        }t instanceof yt || (t = vt(t));var e = St(t.r),
            r = St(t.g),
            i = St(t.b),
            o = At((.4124564 * e + .3575761 * r + .1804375 * i) / ao),
            u = At((.2126729 * e + .7151522 * r + .072175 * i) / so);return new kt(116 * u - 16, 500 * (o - u), 200 * (u - At((.0193339 * e + .119192 * r + .9503041 * i) / co)), t.opacity);
      }function Tt(t, n, e, r) {
        return 1 === arguments.length ? Mt(t) : new kt(t, n, e, null == r ? 1 : r);
      }function kt(t, n, e, r) {
        this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
      }function At(t) {
        return t > po ? Math.pow(t, 1 / 3) : t / lo + fo;
      }function Nt(t) {
        return t > ho ? t * t * t : lo * (t - fo);
      }function Ct(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
      }function St(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
      }function Ut(t) {
        if (t instanceof jt) return new jt(t.h, t.c, t.l, t.opacity);t instanceof kt || (t = Mt(t));var n = Math.atan2(t.b, t.a) * uo;return new jt(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
      }function Et(t, n, e, r) {
        return 1 === arguments.length ? Ut(t) : new jt(t, n, e, null == r ? 1 : r);
      }function jt(t, n, e, r) {
        this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
      }function zt(t) {
        if (t instanceof Pt) return new Pt(t.h, t.s, t.l, t.opacity);t instanceof yt || (t = vt(t));var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            i = (xo * r + _o * n - wo * e) / (xo + _o - wo),
            o = r - i,
            u = (mo * (e - i) - go * o) / yo,
            a = Math.sqrt(u * u + o * o) / (mo * i * (1 - i)),
            s = a ? Math.atan2(u, o) * uo - 120 : NaN;return new Pt(s < 0 ? s + 360 : s, a, i, t.opacity);
      }function Dt(t, n, e, r) {
        return 1 === arguments.length ? zt(t) : new Pt(t, n, e, null == r ? 1 : r);
      }function Pt(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
      }function Ot(t, n) {
        return function (e) {
          return t + e * n;
        };
      }function Yt(t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
          return Math.pow(t + r * n, e);
        };
      }function Lt(t, n) {
        var e = n - t;return e ? Ot(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Ao(isNaN(t) ? n : t);
      }function qt(t) {
        return 1 == (t = +t) ? Ft : function (n, e) {
          return e - n ? Yt(n, e, t) : Ao(isNaN(n) ? e : n);
        };
      }function Ft(t, n) {
        var e = n - t;return e ? Ot(t, e) : Ao(isNaN(t) ? n : t);
      }function Ht(t) {
        return function () {
          return t;
        };
      }function It(t) {
        return function (n) {
          return t(n) + "";
        };
      }function Rt(t) {
        return "none" === t ? zo : (bo || (bo = document.createElement("DIV"), Mo = document.documentElement, To = document.defaultView), bo.style.transform = t, t = To.getComputedStyle(Mo.appendChild(bo), null).getPropertyValue("transform"), Mo.removeChild(bo), t = t.slice(7, -1).split(","), Do(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
      }function Xt(t) {
        return null == t ? zo : (ko || (ko = document.createElementNS("http://www.w3.org/2000/svg", "g")), ko.setAttribute("transform", t), (t = ko.transform.baseVal.consolidate()) ? (t = t.matrix, Do(t.a, t.b, t.c, t.d, t.e, t.f)) : zo);
      }function Bt(t, n, e, r) {
        function i(t) {
          return t.length ? t.pop() + " " : "";
        }function o(t, r, i, o, u, a) {
          if (t !== i || r !== o) {
            var s = u.push("translate(", null, n, null, e);a.push({ i: s - 4, x: Co(t, i) }, { i: s - 2, x: Co(r, o) });
          } else (i || o) && u.push("translate(" + i + n + o + e);
        }function u(t, n, e, o) {
          t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: Co(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
        }function a(t, n, e, o) {
          t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: Co(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
        }function s(t, n, e, r, o, u) {
          if (t !== e || n !== r) {
            var a = o.push(i(o) + "scale(", null, ",", null, ")");u.push({ i: a - 4, x: Co(t, e) }, { i: a - 2, x: Co(n, r) });
          } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
        }return function (n, e) {
          var r = [],
              i = [];return n = t(n), e = t(e), o(n.translateX, n.translateY, e.translateX, e.translateY, r, i), u(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
            for (var n, e = -1, o = i.length; ++e < o;) {
              r[(n = i[e]).i] = n.x(t);
            }return r.join("");
          };
        };
      }function Vt(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2;
      }function $t(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2;
      }function Zt(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1);
      }function Wt(t) {
        return function n(e) {
          function r(n, r) {
            var i = t((n = Dt(n)).h, (r = Dt(r)).h),
                o = Ft(n.s, r.s),
                u = Ft(n.l, r.l),
                a = Ft(n.opacity, r.opacity);return function (t) {
              return n.h = i(t), n.s = o(t), n.l = u(Math.pow(t, e)), n.opacity = a(t), n + "";
            };
          }return e = +e, r.gamma = n, r;
        }(1);
      }function Gt() {
        return $o || (Go(Jt), $o = Wo.now() + Zo);
      }function Jt() {
        $o = 0;
      }function Qt() {
        this._call = this._time = this._next = null;
      }function Kt(t, n, e) {
        var r = new Qt();return r.restart(t, n, e), r;
      }function tn() {
        Gt(), ++Io;for (var t, n = qo; n;) {
          (t = $o - n._time) >= 0 && n._call.call(null, t), n = n._next;
        }--Io;
      }function nn() {
        $o = (Vo = Wo.now()) + Zo, Io = Ro = 0;try {
          tn();
        } finally {
          Io = 0, rn(), $o = 0;
        }
      }function en() {
        var t = Wo.now(),
            n = t - Vo;n > Bo && (Zo -= n, Vo = t);
      }function rn() {
        for (var t, n, e = qo, r = 1 / 0; e;) {
          e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : qo = n);
        }Fo = t, on(r);
      }function on(t) {
        if (!Io) {
          Ro && (Ro = clearTimeout(Ro));var n = t - $o;n > 24 ? (t < 1 / 0 && (Ro = setTimeout(nn, n)), Xo && (Xo = clearInterval(Xo))) : (Xo || (Vo = $o, Xo = setInterval(en, Bo)), Io = 1, Go(nn));
        }
      }function un(t, n) {
        var e = t.__transition;if (!e || !(e = e[n]) || e.state > tu) throw new Error("too late");return e;
      }function an(t, n) {
        var e = t.__transition;if (!e || !(e = e[n]) || e.state > eu) throw new Error("too late");return e;
      }function sn(t, n) {
        var e = t.__transition;if (!e || !(e = e[n])) throw new Error("too late");return e;
      }function cn(t, n, e) {
        function r(t) {
          e.state = nu, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay);
        }function i(r) {
          var c, f, h, l;if (e.state !== nu) return u();for (c in s) {
            if (l = s[c], l.name === e.name) {
              if (l.state === ru) return Jo(i);l.state === iu ? (l.state = uu, l.timer.stop(), l.on.call("interrupt", t, t.__data__, l.index, l.group), delete s[c]) : +c < n && (l.state = uu, l.timer.stop(), delete s[c]);
            }
          }if (Jo(function () {
            e.state === ru && (e.state = iu, e.timer.restart(o, e.delay, e.time), o(r));
          }), e.state = eu, e.on.call("start", t, t.__data__, e.index, e.group), e.state === eu) {
            for (e.state = ru, a = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c) {
              (l = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (a[++f] = l);
            }a.length = f + 1;
          }
        }function o(n) {
          for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = ou, 1), i = -1, o = a.length; ++i < o;) {
            a[i].call(null, r);
          }e.state === ou && (e.on.call("end", t, t.__data__, e.index, e.group), u());
        }function u() {
          e.state = uu, e.timer.stop(), delete s[n];for (var r in s) {
            return;
          }delete t.__transition;
        }var a,
            s = t.__transition;s[n] = e, e.timer = Kt(r, 0, e.time);
      }function fn(t, n) {
        var e, r;return function () {
          var i = an(this, t),
              o = i.tween;if (o !== e) {
            r = e = o;for (var u = 0, a = r.length; u < a; ++u) {
              if (r[u].name === n) {
                r = r.slice(), r.splice(u, 1);break;
              }
            }
          }i.tween = r;
        };
      }function hn(t, n, e) {
        var r, i;if ("function" != typeof e) throw new Error();return function () {
          var o = an(this, t),
              u = o.tween;if (u !== r) {
            i = (r = u).slice();for (var a = { name: n, value: e }, s = 0, c = i.length; s < c; ++s) {
              if (i[s].name === n) {
                i[s] = a;break;
              }
            }s === c && i.push(a);
          }o.tween = i;
        };
      }function ln(t, n, e) {
        var r = t._id;return t.each(function () {
          var t = an(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
        }), function (t) {
          return sn(t, r).value[n];
        };
      }function pn(t) {
        return function () {
          this.removeAttribute(t);
        };
      }function dn(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }function vn(t, n, e) {
        var r, i;return function () {
          var o = this.getAttribute(t);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      }function gn(t, n, e) {
        var r, i;return function () {
          var o = this.getAttributeNS(t.space, t.local);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      }function yn(t, n, e) {
        var r, i, o;return function () {
          var u,
              a = e(this);return null == a ? void this.removeAttribute(t) : (u = this.getAttribute(t), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
        };
      }function mn(t, n, e) {
        var r, i, o;return function () {
          var u,
              a = e(this);return null == a ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a));
        };
      }function _n(t, n) {
        function e() {
          var e = this,
              r = n.apply(e, arguments);return r && function (n) {
            e.setAttributeNS(t.space, t.local, r(n));
          };
        }return e._value = n, e;
      }function wn(t, n) {
        function e() {
          var e = this,
              r = n.apply(e, arguments);return r && function (n) {
            e.setAttribute(t, r(n));
          };
        }return e._value = n, e;
      }function xn(t, n) {
        return function () {
          un(this, t).delay = +n.apply(this, arguments);
        };
      }function bn(t, n) {
        return n = +n, function () {
          un(this, t).delay = n;
        };
      }function Mn(t, n) {
        return function () {
          an(this, t).duration = +n.apply(this, arguments);
        };
      }function Tn(t, n) {
        return n = +n, function () {
          an(this, t).duration = n;
        };
      }function kn(t, n) {
        if ("function" != typeof n) throw new Error();return function () {
          an(this, t).ease = n;
        };
      }function An(t) {
        return (t + "").trim().split(/^|\s+/).every(function (t) {
          var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
        });
      }function Nn(t, n, e) {
        var r,
            i,
            o = An(n) ? un : an;return function () {
          var u = o(this, t),
              a = u.on;a !== r && (i = (r = a).copy()).on(n, e), u.on = i;
        };
      }function Cn(t) {
        return function () {
          var n = this.parentNode;for (var e in this.__transition) {
            if (+e !== t) return;
          }n && n.removeChild(this);
        };
      }function Sn(t, n) {
        var e, r, i;return function () {
          var o = E(this, t),
              u = (this.style.removeProperty(t), E(this, t));return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u);
        };
      }function Un(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }function En(t, n, e) {
        var r, i;return function () {
          var o = E(this, t);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      }function jn(t, n, e) {
        var r, i, o;return function () {
          var u = E(this, t),
              a = e(this);return null == a && (this.style.removeProperty(t), a = E(this, t)), u === a ? null : u === r && a === i ? o : o = n(r = u, i = a);
        };
      }function zn(t, n, e) {
        function r() {
          var r = this,
              i = n.apply(r, arguments);return i && function (n) {
            r.style.setProperty(t, i(n), e);
          };
        }return r._value = n, r;
      }function Dn(t) {
        return function () {
          this.textContent = t;
        };
      }function Pn(t) {
        return function () {
          var n = t(this);this.textContent = null == n ? "" : n;
        };
      }function On(t, n, e, r) {
        this._groups = t, this._parents = n, this._name = e, this._id = r;
      }function Yn(t) {
        return rt().transition(t);
      }function Ln() {
        return ++Su;
      }function qn(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }function Fn(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]);) {
          if (!(t = t.parentNode)) return zu.time = Gt(), zu;
        }return e;
      }function Hn(t) {
        return { type: t };
      }function In() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
      }function Rn() {
        return new In();
      }function Xn() {}function Bn(t, n) {
        var e = new Xn();if (t instanceof Xn) t.each(function (t, n) {
          e.set(n, t);
        });else if (Array.isArray(t)) {
          var r,
              i = -1,
              o = t.length;if (null == n) for (; ++i < o;) {
            e.set(i, t[i]);
          } else for (; ++i < o;) {
            e.set(n(r = t[i], i, t), r);
          }
        } else if (t) for (var u in t) {
          e.set(u, t[u]);
        }return e;
      }function Vn() {}function $n(t, n) {
        var e = new Vn();if (t instanceof Vn) t.each(function (t) {
          e.add(t);
        });else if (t) {
          var r = -1,
              i = t.length;if (null == n) for (; ++r < i;) {
            e.add(t[r]);
          } else for (; ++r < i;) {
            e.add(n(t[r], r, t));
          }
        }return e;
      }function Zn(t) {
        return new Function("d", "return {" + t.map(function (t, n) {
          return JSON.stringify(t) + ": d[" + n + "]";
        }).join(",") + "}");
      }function Wn(t, n) {
        var e = Zn(t);return function (r, i) {
          return n(e(r), i, t);
        };
      }function Gn(t) {
        var n = Object.create(null),
            e = [];return t.forEach(function (t) {
          for (var r in t) {
            r in n || e.push(n[r] = r);
          }
        }), e;
      }function Jn(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;var i,
            o,
            u,
            a,
            s,
            c,
            f,
            h,
            l,
            p = t._root,
            d = { data: r },
            v = t._x0,
            g = t._y0,
            y = t._x1,
            m = t._y1;if (!p) return t._root = d, t;for (; p.length;) {
          if ((c = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (g + m) / 2)) ? g = u : m = u, i = p, !(p = p[h = f << 1 | c])) return i[h] = d, t;
        }if (a = +t._x.call(null, p.data), s = +t._y.call(null, p.data), n === a && e === s) return d.next = p, i ? i[h] = d : t._root = d, t;do {
          i = i ? i[h] = new Array(4) : t._root = new Array(4), (c = n >= (o = (v + y) / 2)) ? v = o : y = o, (f = e >= (u = (g + m) / 2)) ? g = u : m = u;
        } while ((h = f << 1 | c) == (l = (s >= u) << 1 | a >= o));return i[l] = p, i[h] = d, t;
      }function Qn(t) {
        var n,
            e,
            r,
            i,
            o = t.length,
            u = new Array(o),
            a = new Array(o),
            s = 1 / 0,
            c = 1 / 0,
            f = -1 / 0,
            h = -1 / 0;for (e = 0; e < o; ++e) {
          isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (u[e] = r, a[e] = i, r < s && (s = r), r > f && (f = r), i < c && (c = i), i > h && (h = i));
        }for (f < s && (s = this._x0, f = this._x1), h < c && (c = this._y0, h = this._y1), this.cover(s, c).cover(f, h), e = 0; e < o; ++e) {
          Jn(this, u[e], a[e], t[e]);
        }return this;
      }function Kn(t) {
        for (var n = 0, e = t.length; n < e; ++n) {
          this.remove(t[n]);
        }return this;
      }function te(t) {
        return t[0];
      }function ne(t) {
        return t[1];
      }function ee(t, n, e) {
        var r = new re(null == n ? te : n, null == e ? ne : e, NaN, NaN, NaN, NaN);return null == t ? r : r.addAll(t);
      }function re(t, n, e, r, i, o) {
        this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
      }function ie(t) {
        for (var n = { data: t.data }, e = n; t = t.next;) {
          e = e.next = { data: t.data };
        }return n;
      }function oe(t) {
        return t.x + t.vx;
      }function ue(t) {
        return t.y + t.vy;
      }function ae(t) {
        return t.index;
      }function se(t, n) {
        var e = t.get(n);if (!e) throw new Error("missing: " + n);return e;
      }function ce(t) {
        return t.x;
      }function fe(t) {
        return t.y;
      }function he(t) {
        return new le(t);
      }function le(t) {
        if (!(n = _a.exec(t))) throw new Error("invalid format: " + t);var n,
            e = n[1] || " ",
            r = n[2] || ">",
            i = n[3] || "-",
            o = n[4] || "",
            u = !!n[5],
            a = n[6] && +n[6],
            s = !!n[7],
            c = n[8] && +n[8].slice(1),
            f = n[9] || "";"n" === f ? (s = !0, f = "g") : ma[f] || (f = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = u, this.width = a, this.comma = s, this.precision = c, this.type = f;
      }function pe() {
        this.reset();
      }function de(t, n, e) {
        var r = t.s = n + e,
            i = r - n,
            o = r - i;t.t = n - o + (e - i);
      }function ve(t) {
        return t > 1 ? 0 : t < -1 ? Ca : Math.acos(t);
      }function ge(t) {
        return t > 1 ? Sa : t < -1 ? -Sa : Math.asin(t);
      }function ye(t) {
        return function (n, e) {
          var r = ja(n),
              i = ja(e),
              o = t(r * i);return [o * i * za(n), o * za(e)];
        };
      }function me(t) {
        return function (n, e) {
          var r = Da(n * n + e * e),
              i = t(r),
              o = za(i),
              u = ja(i);return [Ea(n * o, r * u), ge(r && e * o / r)];
        };
      }function _e(t) {
        var n = 0,
            e = t.children,
            r = e && e.length;if (r) for (; --r >= 0;) {
          n += e[r].value;
        } else n = 1;t.value = n;
      }function we(t, n) {
        if (t === n) return t;var e = t.ancestors(),
            r = n.ancestors(),
            i = null;for (t = e.pop(), n = r.pop(); t === n;) {
          i = t, t = e.pop(), n = r.pop();
        }return i;
      }function xe(t, n) {
        var e,
            r,
            i,
            o,
            u,
            a = new Ae(t),
            s = +t.value && (a.value = t.value),
            c = [a];for (null == n && (n = Me); e = c.pop();) {
          if (s && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length)) for (e.children = new Array(u), o = u - 1; o >= 0; --o) {
            c.push(r = e.children[o] = new Ae(i[o])), r.parent = e, r.depth = e.depth + 1;
          }
        }return a.eachBefore(ke);
      }function be() {
        return xe(this).eachBefore(Te);
      }function Me(t) {
        return t.children;
      }function Te(t) {
        t.data = t.data.data;
      }function ke(t) {
        var n = 0;do {
          t.height = n;
        } while ((t = t.parent) && t.height < ++n);
      }function Ae(t) {
        this.data = t, this.depth = this.height = 0, this.parent = null;
      }function Ne(t, n) {
        this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n;
      }function Ce(t, n, e, r) {
        function i(n) {
          return t(n = new Date(+n)), n;
        }return i.floor = i, i.ceil = function (e) {
          return t(e = new Date(e - 1)), n(e, 1), t(e), e;
        }, i.round = function (t) {
          var n = i(t),
              e = i.ceil(t);return t - n < e - t ? n : e;
        }, i.offset = function (t, e) {
          return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
        }, i.range = function (e, r, o) {
          var u = [];if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;do {
            u.push(new Date(+e));
          } while ((n(e, o), t(e), e < r));return u;
        }, i.filter = function (e) {
          return Ce(function (n) {
            if (n >= n) for (; t(n), !e(n);) {
              n.setTime(n - 1);
            }
          }, function (t, r) {
            if (t >= t) for (; --r >= 0;) {
              for (; n(t, 1), !e(t);) {}
            }
          });
        }, e && (i.count = function (n, r) {
          return $a.setTime(+n), Za.setTime(+r), t($a), t(Za), Math.floor(e($a, Za));
        }, i.every = function (t) {
          return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
            return r(n) % t == 0;
          } : function (n) {
            return i.count(0, n) % t == 0;
          }) : i : null;
        }), i;
      }function Se(t) {
        return Ce(function (n) {
          n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
        }, function (t, n) {
          t.setDate(t.getDate() + 7 * n);
        }, function (t, n) {
          return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ga) / Qa;
        });
      }function Ue(t) {
        return Ce(function (n) {
          n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
        }, function (t, n) {
          t.setUTCDate(t.getUTCDate() + 7 * n);
        }, function (t, n) {
          return (n - t) / Qa;
        });
      }function Ee(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return n.setFullYear(t.y), n;
        }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
      }function je(t) {
        if (0 <= t.y && t.y < 100) {
          var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return n.setUTCFullYear(t.y), n;
        }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
      }function ze(t) {
        return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
      }function De(t) {
        function n(t, n) {
          return function (e) {
            var r,
                i,
                o,
                u = [],
                a = -1,
                s = 0,
                c = t.length;for (e instanceof Date || (e = new Date(+e)); ++a < c;) {
              37 === t.charCodeAt(a) && (u.push(t.slice(s, a)), null != (i = ls[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), u.push(r), s = a + 1);
            }return u.push(t.slice(s, a)), u.join("");
          };
        }function e(t, n) {
          return function (e) {
            var i = ze(1900);if (r(i, t, e += "", 0) != e.length) return null;if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
              "w" in i || (i.w = "W" in i ? 1 : 0);var o = "Z" in i ? je(ze(i.y)).getUTCDay() : n(ze(i.y)).getDay();i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7;
            }return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, je(i)) : n(i);
          };
        }function r(t, n, e, r) {
          for (var i, o, u = 0, a = n.length, s = e.length; u < a;) {
            if (r >= s) return -1;if (37 === (i = n.charCodeAt(u++))) {
              if (i = n.charAt(u++), !(o = I[i in ls ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0) return -1;
            } else if (i != e.charCodeAt(r++)) return -1;
          }return r;
        }function i(t, n, e) {
          var r = U.exec(n.slice(e));return r ? (t.p = E[r[0].toLowerCase()], e + r[0].length) : -1;
        }function o(t, n, e) {
          var r = D.exec(n.slice(e));return r ? (t.w = P[r[0].toLowerCase()], e + r[0].length) : -1;
        }function u(t, n, e) {
          var r = j.exec(n.slice(e));return r ? (t.w = z[r[0].toLowerCase()], e + r[0].length) : -1;
        }function a(t, n, e) {
          var r = L.exec(n.slice(e));return r ? (t.m = q[r[0].toLowerCase()], e + r[0].length) : -1;
        }function s(t, n, e) {
          var r = O.exec(n.slice(e));return r ? (t.m = Y[r[0].toLowerCase()], e + r[0].length) : -1;
        }function c(t, n, e) {
          return r(t, b, n, e);
        }function f(t, n, e) {
          return r(t, M, n, e);
        }function h(t, n, e) {
          return r(t, T, n, e);
        }function l(t) {
          return N[t.getDay()];
        }function p(t) {
          return A[t.getDay()];
        }function d(t) {
          return S[t.getMonth()];
        }function v(t) {
          return C[t.getMonth()];
        }function g(t) {
          return k[+(t.getHours() >= 12)];
        }function y(t) {
          return N[t.getUTCDay()];
        }function m(t) {
          return A[t.getUTCDay()];
        }function _(t) {
          return S[t.getUTCMonth()];
        }function w(t) {
          return C[t.getUTCMonth()];
        }function x(t) {
          return k[+(t.getUTCHours() >= 12)];
        }var b = t.dateTime,
            M = t.date,
            T = t.time,
            k = t.periods,
            A = t.days,
            N = t.shortDays,
            C = t.months,
            S = t.shortMonths,
            U = Ye(k),
            E = Le(k),
            j = Ye(A),
            z = Le(A),
            D = Ye(N),
            P = Le(N),
            O = Ye(C),
            Y = Le(C),
            L = Ye(S),
            q = Le(S),
            F = { a: l, A: p, b: d, B: v, c: null, d: Ke, e: Ke, H: tr, I: nr, j: er, L: rr, m: ir, M: or, p: g, S: ur, U: ar, w: sr, W: cr, x: null, X: null, y: fr, Y: hr, Z: lr, "%": Nr },
            H = { a: y, A: m, b: _, B: w, c: null, d: pr, e: pr, H: dr, I: vr, j: gr, L: yr, m: mr, M: _r, p: x, S: wr, U: xr, w: br, W: Mr, x: null, X: null, y: Tr, Y: kr, Z: Ar, "%": Nr },
            I = { a: o, A: u, b: a, B: s, c: c, d: Ve, e: Ve, H: Ze, I: Ze, j: $e, L: Je, m: Be, M: We, p: i, S: Ge, U: Fe, w: qe, W: He, x: f, X: h, y: Re, Y: Ie, Z: Xe, "%": Qe };return F.x = n(M, F), F.X = n(T, F), F.c = n(b, F), H.x = n(M, H), H.X = n(T, H), H.c = n(b, H), { format: function format(t) {
            var e = n(t += "", F);return e.toString = function () {
              return t;
            }, e;
          }, parse: function parse(t) {
            var n = e(t += "", Ee);return n.toString = function () {
              return t;
            }, n;
          }, utcFormat: function utcFormat(t) {
            var e = n(t += "", H);return e.toString = function () {
              return t;
            }, e;
          }, utcParse: function utcParse(t) {
            var n = e(t, je);return n.toString = function () {
              return t;
            }, n;
          } };
      }function Pe(t, n, e) {
        var r = t < 0 ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
      }function Oe(t) {
        return t.replace(vs, "\\$&");
      }function Ye(t) {
        return new RegExp("^(?:" + t.map(Oe).join("|") + ")", "i");
      }function Le(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r;) {
          n[t[e].toLowerCase()] = e;
        }return n;
      }function qe(t, n, e) {
        var r = ps.exec(n.slice(e, e + 1));return r ? (t.w = +r[0], e + r[0].length) : -1;
      }function Fe(t, n, e) {
        var r = ps.exec(n.slice(e));return r ? (t.U = +r[0], e + r[0].length) : -1;
      }function He(t, n, e) {
        var r = ps.exec(n.slice(e));return r ? (t.W = +r[0], e + r[0].length) : -1;
      }function Ie(t, n, e) {
        var r = ps.exec(n.slice(e, e + 4));return r ? (t.y = +r[0], e + r[0].length) : -1;
      }function Re(t, n, e) {
        var r = ps.exec(n.slice(e, e + 2));return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
      }function Xe(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
      }function Be(t, n, e) {
        var r = ps.exec(n.slice(e, e + 2));return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
      }function Ve(t, n, e) {
        var r = ps.exec(n.slice(e, e + 2));return r ? (t.d = +r[0], e + r[0].length) : -1;
      }function $e(t, n, e) {
        var r = ps.exec(n.slice(e, e + 3));return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
      }function Ze(t, n, e) {
        var r = ps.exec(n.slice(e, e + 2));return r ? (t.H = +r[0], e + r[0].length) : -1;
      }function We(t, n, e) {
        var r = ps.exec(n.slice(e, e + 2));return r ? (t.M = +r[0], e + r[0].length) : -1;
      }function Ge(t, n, e) {
        var r = ps.exec(n.slice(e, e + 2));return r ? (t.S = +r[0], e + r[0].length) : -1;
      }function Je(t, n, e) {
        var r = ps.exec(n.slice(e, e + 3));return r ? (t.L = +r[0], e + r[0].length) : -1;
      }function Qe(t, n, e) {
        var r = ds.exec(n.slice(e, e + 1));return r ? e + r[0].length : -1;
      }function Ke(t, n) {
        return Pe(t.getDate(), n, 2);
      }function tr(t, n) {
        return Pe(t.getHours(), n, 2);
      }function nr(t, n) {
        return Pe(t.getHours() % 12 || 12, n, 2);
      }function er(t, n) {
        return Pe(1 + Ka.count(es(t), t), n, 3);
      }function rr(t, n) {
        return Pe(t.getMilliseconds(), n, 3);
      }function ir(t, n) {
        return Pe(t.getMonth() + 1, n, 2);
      }function or(t, n) {
        return Pe(t.getMinutes(), n, 2);
      }function ur(t, n) {
        return Pe(t.getSeconds(), n, 2);
      }function ar(t, n) {
        return Pe(ts.count(es(t), t), n, 2);
      }function sr(t) {
        return t.getDay();
      }function cr(t, n) {
        return Pe(ns.count(es(t), t), n, 2);
      }function fr(t, n) {
        return Pe(t.getFullYear() % 100, n, 2);
      }function hr(t, n) {
        return Pe(t.getFullYear() % 1e4, n, 4);
      }function lr(t) {
        var n = t.getTimezoneOffset();return (n > 0 ? "-" : (n *= -1, "+")) + Pe(n / 60 | 0, "0", 2) + Pe(n % 60, "0", 2);
      }function pr(t, n) {
        return Pe(t.getUTCDate(), n, 2);
      }function dr(t, n) {
        return Pe(t.getUTCHours(), n, 2);
      }function vr(t, n) {
        return Pe(t.getUTCHours() % 12 || 12, n, 2);
      }function gr(t, n) {
        return Pe(1 + rs.count(us(t), t), n, 3);
      }function yr(t, n) {
        return Pe(t.getUTCMilliseconds(), n, 3);
      }function mr(t, n) {
        return Pe(t.getUTCMonth() + 1, n, 2);
      }function _r(t, n) {
        return Pe(t.getUTCMinutes(), n, 2);
      }function wr(t, n) {
        return Pe(t.getUTCSeconds(), n, 2);
      }function xr(t, n) {
        return Pe(is.count(us(t), t), n, 2);
      }function br(t) {
        return t.getUTCDay();
      }function Mr(t, n) {
        return Pe(os.count(us(t), t), n, 2);
      }function Tr(t, n) {
        return Pe(t.getUTCFullYear() % 100, n, 2);
      }function kr(t, n) {
        return Pe(t.getUTCFullYear() % 1e4, n, 4);
      }function Ar() {
        return "+0000";
      }function Nr() {
        return "%";
      }function Cr(t) {
        this._context = t;
      }function Sr(t) {
        return t < 0 ? -1 : 1;
      }function Ur(t, n, e) {
        var r = t._x1 - t._x0,
            i = n - t._x1,
            o = (t._y1 - t._y0) / (r || i < 0 && -0),
            u = (e - t._y1) / (i || r < 0 && -0),
            a = (o * i + u * r) / (r + i);return (Sr(o) + Sr(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0;
      }function Er(t, n) {
        var e = t._x1 - t._x0;return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
      }function jr(t, n, e) {
        var r = t._x0,
            i = t._y0,
            o = t._x1,
            u = t._y1,
            a = (o - r) / 3;t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u);
      }function zr(t) {
        this._context = t;
      }function Dr(t) {
        this._context = new Pr(t);
      }function Pr(t) {
        this._context = t;
      }function Or(t, n, e) {
        this.target = t, this.type = n, this.transform = e;
      }function Yr(t, n, e) {
        this.k = t, this.x = n, this.y = e;
      }function Lr() {
        t.event.stopImmediatePropagation();
      }function qr() {
        return !t.event.button;
      }function Fr() {
        var t,
            n,
            e = this;return e instanceof SVGElement ? (e = e.ownerSVGElement || e, t = e.width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [[0, 0], [t, n]];
      }function Hr() {
        return this.__zoom || _s;
      }var Ir = function Ir(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      },
          Rr = function (t) {
        return 1 === t.length && (t = n(t)), { left: function left(n, e, r, i) {
            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
              var o = r + i >>> 1;t(n[o], e) < 0 ? r = o + 1 : i = o;
            }return r;
          }, right: function right(n, e, r, i) {
            for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
              var o = r + i >>> 1;t(n[o], e) > 0 ? i = o : r = o + 1;
            }return r;
          } };
      }(Ir),
          Xr = (Rr.right, Math.sqrt(50), Math.sqrt(10), Math.sqrt(2), { value: function value() {} });r.prototype = e.prototype = { constructor: r, on: function on(t, n) {
          var e,
              r = this._,
              u = i(t + "", r),
              s = -1,
              c = u.length;if (!(arguments.length < 2)) {
            if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++s < c;) {
              if (e = (t = u[s]).type) r[e] = a(r[e], t.name, n);else if (null == n) for (e in r) {
                r[e] = a(r[e], t.name, null);
              }
            }return this;
          }for (; ++s < c;) {
            if ((e = (t = u[s]).type) && (e = o(r[e], t.name))) return e;
          }
        }, copy: function copy() {
          var t = {},
              n = this._;for (var e in n) {
            t[e] = n[e].slice();
          }return new r(t);
        }, call: function call(t, n) {
          if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
            i[o] = arguments[o + 2];
          }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (r = this._[t], o = 0, e = r.length; o < e; ++o) {
            r[o].value.apply(n, i);
          }
        }, apply: function apply(t, n, e) {
          if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
            r[i].value.apply(n, e);
          }
        } };var Br = "http://www.w3.org/1999/xhtml",
          Vr = { svg: "http://www.w3.org/2000/svg", xhtml: Br, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
          $r = function $r(t) {
        var n = t += "",
            e = n.indexOf(":");return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), Vr.hasOwnProperty(n) ? { space: Vr[n], local: t } : t;
      },
          Zr = function Zr(t) {
        var n = $r(t);return (n.local ? c : s)(n);
      },
          Wr = function Wr(t) {
        return function () {
          return this.matches(t);
        };
      };if ("undefined" != typeof document) {
        var Gr = document.documentElement;if (!Gr.matches) {
          var Jr = Gr.webkitMatchesSelector || Gr.msMatchesSelector || Gr.mozMatchesSelector || Gr.oMatchesSelector;Wr = function Wr(t) {
            return function () {
              return Jr.call(this, t);
            };
          };
        }
      }var Qr = Wr,
          Kr = {};if (t.event = null, "undefined" != typeof document) {
        "onmouseenter" in document.documentElement || (Kr = { mouseenter: "mouseover", mouseleave: "mouseout" });
      }var ti = function ti(t, n, e) {
        var r,
            i,
            o = l(t + ""),
            u = o.length;if (!(arguments.length < 2)) {
          for (a = n ? d : p, null == e && (e = !1), r = 0; r < u; ++r) {
            this.each(a(o[r], n, e));
          }return this;
        }var a = this.node().__on;if (a) for (var s, c = 0, f = a.length; c < f; ++c) {
          for (r = 0, s = a[c]; r < u; ++r) {
            if ((i = o[r]).type === s.type && i.name === s.name) return s.value;
          }
        }
      },
          ni = function ni() {
        for (var n, e = t.event; n = e.sourceEvent;) {
          e = n;
        }return e;
      },
          ei = function ei(t, n) {
        var e = t.ownerSVGElement || t;if (e.createSVGPoint) {
          var r = e.createSVGPoint();return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
        }var i = t.getBoundingClientRect();return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
      },
          ri = function ri(t) {
        var n = ni();return n.changedTouches && (n = n.changedTouches[0]), ei(t, n);
      },
          ii = function ii(t) {
        return null == t ? g : function () {
          return this.querySelector(t);
        };
      },
          oi = function oi(t) {
        "function" != typeof t && (t = ii(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
          for (var o, u, a = n[i], s = a.length, c = r[i] = new Array(s), f = 0; f < s; ++f) {
            (o = a[f]) && (u = t.call(o, o.__data__, f, a)) && ("__data__" in o && (u.__data__ = o.__data__), c[f] = u);
          }
        }return new et(r, this._parents);
      },
          ui = function ui(t) {
        return null == t ? y : function () {
          return this.querySelectorAll(t);
        };
      },
          ai = function ai(t) {
        "function" != typeof t && (t = ui(t));for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
          for (var u, a = n[o], s = a.length, c = 0; c < s; ++c) {
            (u = a[c]) && (r.push(t.call(u, u.__data__, c, a)), i.push(u));
          }
        }return new et(r, i);
      },
          si = function si(t) {
        "function" != typeof t && (t = Qr(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
          for (var o, u = n[i], a = u.length, s = r[i] = [], c = 0; c < a; ++c) {
            (o = u[c]) && t.call(o, o.__data__, c, u) && s.push(o);
          }
        }return new et(r, this._parents);
      },
          ci = function ci(t) {
        return new Array(t.length);
      },
          fi = function fi() {
        return new et(this._enter || this._groups.map(ci), this._parents);
      };m.prototype = { constructor: m, appendChild: function appendChild(t) {
          return this._parent.insertBefore(t, this._next);
        }, insertBefore: function insertBefore(t, n) {
          return this._parent.insertBefore(t, n);
        }, querySelector: function querySelector(t) {
          return this._parent.querySelector(t);
        }, querySelectorAll: function querySelectorAll(t) {
          return this._parent.querySelectorAll(t);
        } };var hi = function hi(t) {
        return function () {
          return t;
        };
      },
          li = "$",
          pi = function pi(t, n) {
        if (!t) return p = new Array(this.size()), c = -1, this.each(function (t) {
          p[++c] = t;
        }), p;var e = n ? w : _,
            r = this._parents,
            i = this._groups;"function" != typeof t && (t = hi(t));for (var o = i.length, u = new Array(o), a = new Array(o), s = new Array(o), c = 0; c < o; ++c) {
          var f = r[c],
              h = i[c],
              l = h.length,
              p = t.call(f, f && f.__data__, c, r),
              d = p.length,
              v = a[c] = new Array(d),
              g = u[c] = new Array(d);e(f, h, v, g, s[c] = new Array(l), p, n);for (var y, m, x = 0, b = 0; x < d; ++x) {
            if (y = v[x]) {
              for (x >= b && (b = x + 1); !(m = g[b]) && ++b < d;) {}y._next = m || null;
            }
          }
        }return u = new et(u, r), u._enter = a, u._exit = s, u;
      },
          di = function di() {
        return new et(this._exit || this._groups.map(ci), this._parents);
      },
          vi = function vi(t) {
        for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
          for (var s, c = n[a], f = e[a], h = c.length, l = u[a] = new Array(h), p = 0; p < h; ++p) {
            (s = c[p] || f[p]) && (l[p] = s);
          }
        }for (; a < r; ++a) {
          u[a] = n[a];
        }return new et(u, this._parents);
      },
          gi = function gi() {
        for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
          for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0;) {
            (r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
          }
        }return this;
      },
          yi = function yi(t) {
        function n(n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e;
        }t || (t = x);for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
          for (var u, a = e[o], s = a.length, c = i[o] = new Array(s), f = 0; f < s; ++f) {
            (u = a[f]) && (c[f] = u);
          }c.sort(n);
        }return new et(i, this._parents).order();
      },
          mi = function mi() {
        var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
      },
          _i = function _i() {
        var t = new Array(this.size()),
            n = -1;return this.each(function () {
          t[++n] = this;
        }), t;
      },
          wi = function wi() {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
          for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
            var u = r[i];if (u) return u;
          }
        }return null;
      },
          xi = function xi() {
        var t = 0;return this.each(function () {
          ++t;
        }), t;
      },
          bi = function bi() {
        return !this.node();
      },
          Mi = function Mi(t) {
        for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
          for (var i, o = n[e], u = 0, a = o.length; u < a; ++u) {
            (i = o[u]) && t.call(i, i.__data__, u, o);
          }
        }return this;
      },
          Ti = function Ti(t, n) {
        var e = $r(t);if (arguments.length < 2) {
          var r = this.node();return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
        }return this.each((null == n ? e.local ? M : b : "function" == typeof n ? e.local ? N : A : e.local ? k : T)(e, n));
      },
          ki = function ki(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
      },
          Ai = function Ai(t, n, e) {
        return arguments.length > 1 ? this.each((null == n ? C : "function" == typeof n ? U : S)(t, n, null == e ? "" : e)) : E(this.node(), t);
      },
          Ni = function Ni(t, n) {
        return arguments.length > 1 ? this.each((null == n ? j : "function" == typeof n ? D : z)(t, n)) : this.node()[t];
      };Y.prototype = { add: function add(t) {
          this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
        }, remove: function remove(t) {
          var n = this._names.indexOf(t);n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
        }, contains: function contains(t) {
          return this._names.indexOf(t) >= 0;
        } };var Ci = function Ci(t, n) {
        var e = P(t + "");if (arguments.length < 2) {
          for (var r = O(this.node()), i = -1, o = e.length; ++i < o;) {
            if (!r.contains(e[i])) return !1;
          }return !0;
        }return this.each(("function" == typeof n ? I : n ? F : H)(e, n));
      },
          Si = function Si(t) {
        return arguments.length ? this.each(null == t ? R : ("function" == typeof t ? B : X)(t)) : this.node().textContent;
      },
          Ui = function Ui(t) {
        return arguments.length ? this.each(null == t ? V : ("function" == typeof t ? Z : $)(t)) : this.node().innerHTML;
      },
          Ei = function Ei() {
        return this.each(W);
      },
          ji = function ji() {
        return this.each(G);
      },
          zi = function zi(t) {
        var n = "function" == typeof t ? t : Zr(t);return this.select(function () {
          return this.appendChild(n.apply(this, arguments));
        });
      },
          Di = function Di(t, n) {
        var e = "function" == typeof t ? t : Zr(t),
            r = null == n ? J : "function" == typeof n ? n : ii(n);return this.select(function () {
          return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
        });
      },
          Pi = function Pi() {
        return this.each(Q);
      },
          Oi = function Oi(t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__;
      },
          Yi = function Yi(t, n) {
        return this.each(("function" == typeof n ? nt : tt)(t, n));
      },
          Li = [null];et.prototype = rt.prototype = { constructor: et, select: oi, selectAll: ai, filter: si, data: pi, enter: fi, exit: di, merge: vi, order: gi, sort: yi, call: mi, nodes: _i, node: wi, size: xi, empty: bi, each: Mi, attr: Ti, style: Ai, property: Ni, classed: Ci, text: Si, html: Ui, raise: Ei, lower: ji, append: zi, insert: Di, remove: Pi, datum: Oi, on: ti, dispatch: Yi };var qi = function qi(t) {
        return "string" == typeof t ? new et([[document.querySelector(t)]], [document.documentElement]) : new et([[t]], Li);
      },
          Fi = function Fi(t, n, e) {
        arguments.length < 3 && (e = n, n = ni().changedTouches);for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) {
          if ((r = n[i]).identifier === e) return ei(t, r);
        }return null;
      },
          Hi = function Hi() {
        t.event.preventDefault(), t.event.stopImmediatePropagation();
      },
          Ii = function Ii(t) {
        var n = t.document.documentElement,
            e = qi(t).on("dragstart.drag", Hi, !0);"onselectstart" in n ? e.on("selectstart.drag", Hi, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
      },
          Ri = function Ri(t) {
        return function () {
          return t;
        };
      };ut.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);return t === this._ ? this : t;
      };var Xi = function Xi() {
        function n(t) {
          t.on("mousedown.drag", r).on("touchstart.drag", u).on("touchmove.drag", a).on("touchend.drag touchcancel.drag", s).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }function r() {
          if (!p && d.apply(this, arguments)) {
            var n = c("mouse", g.apply(this, arguments), ri, this, arguments);n && (qi(t.event.view).on("mousemove.drag", i, !0).on("mouseup.drag", o, !0), Ii(t.event.view), it(), l = !1, f = t.event.clientX, h = t.event.clientY, n("start"));
          }
        }function i() {
          if (Hi(), !l) {
            var n = t.event.clientX - f,
                e = t.event.clientY - h;l = n * n + e * e > x;
          }m.mouse("drag");
        }function o() {
          qi(t.event.view).on("mousemove.drag mouseup.drag", null), ot(t.event.view, l), Hi(), m.mouse("end");
        }function u() {
          if (d.apply(this, arguments)) {
            var n,
                e,
                r = t.event.changedTouches,
                i = g.apply(this, arguments),
                o = r.length;for (n = 0; n < o; ++n) {
              (e = c(r[n].identifier, i, Fi, this, arguments)) && (it(), e("start"));
            }
          }
        }function a() {
          var n,
              e,
              r = t.event.changedTouches,
              i = r.length;for (n = 0; n < i; ++n) {
            (e = m[r[n].identifier]) && (Hi(), e("drag"));
          }
        }function s() {
          var n,
              e,
              r = t.event.changedTouches,
              i = r.length;for (p && clearTimeout(p), p = setTimeout(function () {
            p = null;
          }, 500), n = 0; n < i; ++n) {
            (e = m[r[n].identifier]) && (it(), e("end"));
          }
        }function c(e, r, i, o, u) {
          var a,
              s,
              c,
              f = i(r, e),
              h = _.copy();if (v(new ut(n, "beforestart", a, e, w, f[0], f[1], 0, 0, h), function () {
            return null != (t.event.subject = a = y.apply(o, u)) && (s = a.x - f[0] || 0, c = a.y - f[1] || 0, !0);
          })) return function t(l) {
            var p,
                d = f;switch (l) {case "start":
                m[e] = t, p = w++;break;case "end":
                delete m[e], --w;case "drag":
                f = i(r, e), p = w;}v(new ut(n, l, a, e, p, f[0] + s, f[1] + c, f[0] - d[0], f[1] - d[1], h), h.apply, h, [l, o, u]);
          };
        }var f,
            h,
            l,
            p,
            d = at,
            g = st,
            y = ct,
            m = {},
            _ = e("start", "drag", "end"),
            w = 0,
            x = 0;return n.filter = function (t) {
          return arguments.length ? (d = "function" == typeof t ? t : Ri(!!t), n) : d;
        }, n.container = function (t) {
          return arguments.length ? (g = "function" == typeof t ? t : Ri(t), n) : g;
        }, n.subject = function (t) {
          return arguments.length ? (y = "function" == typeof t ? t : Ri(t), n) : y;
        }, n.on = function () {
          var t = _.on.apply(_, arguments);return t === _ ? n : t;
        }, n.clickDistance = function (t) {
          return arguments.length ? (x = (t = +t) * t, n) : Math.sqrt(x);
        }, n;
      },
          Bi = function Bi(t, n, e) {
        t.prototype = n.prototype = e, e.constructor = t;
      },
          Vi = 1 / .7,
          $i = "\\s*([+-]?\\d+)\\s*",
          Zi = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          Wi = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          Gi = /^#([0-9a-f]{3})$/,
          Ji = /^#([0-9a-f]{6})$/,
          Qi = new RegExp("^rgb\\(" + [$i, $i, $i] + "\\)$"),
          Ki = new RegExp("^rgb\\(" + [Wi, Wi, Wi] + "\\)$"),
          to = new RegExp("^rgba\\(" + [$i, $i, $i, Zi] + "\\)$"),
          no = new RegExp("^rgba\\(" + [Wi, Wi, Wi, Zi] + "\\)$"),
          eo = new RegExp("^hsl\\(" + [Zi, Wi, Wi] + "\\)$"),
          ro = new RegExp("^hsla\\(" + [Zi, Wi, Wi, Zi] + "\\)$"),
          io = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Bi(ht, lt, { displayable: function displayable() {
          return this.rgb().displayable();
        }, toString: function toString() {
          return this.rgb() + "";
        } }), Bi(yt, gt, ft(ht, { brighter: function brighter(t) {
          return t = null == t ? Vi : Math.pow(Vi, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
        }, darker: function darker(t) {
          return t = null == t ? .7 : Math.pow(.7, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
        }, rgb: function rgb() {
          return this;
        }, displayable: function displayable() {
          return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
        }, toString: function toString() {
          var t = this.opacity;return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
        } })), Bi(xt, wt, ft(ht, { brighter: function brighter(t) {
          return t = null == t ? Vi : Math.pow(Vi, t), new xt(this.h, this.s, this.l * t, this.opacity);
        }, darker: function darker(t) {
          return t = null == t ? .7 : Math.pow(.7, t), new xt(this.h, this.s, this.l * t, this.opacity);
        }, rgb: function rgb() {
          var t = this.h % 360 + 360 * (this.h < 0),
              n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              r = e + (e < .5 ? e : 1 - e) * n,
              i = 2 * e - r;return new yt(bt(t >= 240 ? t - 240 : t + 120, i, r), bt(t, i, r), bt(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
        }, displayable: function displayable() {
          return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        } }));var oo = Math.PI / 180,
          uo = 180 / Math.PI,
          ao = .95047,
          so = 1,
          co = 1.08883,
          fo = 4 / 29,
          ho = 6 / 29,
          lo = 3 * ho * ho,
          po = ho * ho * ho;Bi(kt, Tt, ft(ht, { brighter: function brighter(t) {
          return new kt(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
        }, darker: function darker(t) {
          return new kt(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
        }, rgb: function rgb() {
          var t = (this.l + 16) / 116,
              n = isNaN(this.a) ? t : t + this.a / 500,
              e = isNaN(this.b) ? t : t - this.b / 200;return t = so * Nt(t), n = ao * Nt(n), e = co * Nt(e), new yt(Ct(3.2404542 * n - 1.5371385 * t - .4985314 * e), Ct(-.969266 * n + 1.8760108 * t + .041556 * e), Ct(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
        } })), Bi(jt, Et, ft(ht, { brighter: function brighter(t) {
          return new jt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
        }, darker: function darker(t) {
          return new jt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
        }, rgb: function rgb() {
          return Mt(this).rgb();
        } }));var vo = 1.78277,
          go = -.29227,
          yo = -.90649,
          mo = 1.97294,
          _o = mo * yo,
          wo = mo * vo,
          xo = vo * go - -.14861 * yo;Bi(Pt, Dt, ft(ht, { brighter: function brighter(t) {
          return t = null == t ? Vi : Math.pow(Vi, t), new Pt(this.h, this.s, this.l * t, this.opacity);
        }, darker: function darker(t) {
          return t = null == t ? .7 : Math.pow(.7, t), new Pt(this.h, this.s, this.l * t, this.opacity);
        }, rgb: function rgb() {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * oo,
              n = +this.l,
              e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
              r = Math.cos(t),
              i = Math.sin(t);return new yt(255 * (n + e * (-.14861 * r + vo * i)), 255 * (n + e * (go * r + yo * i)), 255 * (n + e * (mo * r)), this.opacity);
        } }));var bo,
          Mo,
          To,
          ko,
          Ao = function Ao(t) {
        return function () {
          return t;
        };
      },
          No = function t(n) {
        function e(t, n) {
          var e = r((t = gt(t)).r, (n = gt(n)).r),
              i = r(t.g, n.g),
              o = r(t.b, n.b),
              u = Ft(t.opacity, n.opacity);return function (n) {
            return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = u(n), t + "";
          };
        }var r = qt(n);return e.gamma = t, e;
      }(1),
          Co = function Co(t, n) {
        return t = +t, n -= t, function (e) {
          return t + n * e;
        };
      },
          So = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          Uo = new RegExp(So.source, "g"),
          Eo = function Eo(t, n) {
        var e,
            r,
            i,
            o = So.lastIndex = Uo.lastIndex = 0,
            u = -1,
            a = [],
            s = [];for (t += "", n += ""; (e = So.exec(t)) && (r = Uo.exec(n));) {
          (i = r.index) > o && (i = n.slice(o, i), a[u] ? a[u] += i : a[++u] = i), (e = e[0]) === (r = r[0]) ? a[u] ? a[u] += r : a[++u] = r : (a[++u] = null, s.push({ i: u, x: Co(e, r) })), o = Uo.lastIndex;
        }return o < n.length && (i = n.slice(o), a[u] ? a[u] += i : a[++u] = i), a.length < 2 ? s[0] ? It(s[0].x) : Ht(n) : (n = s.length, function (t) {
          for (var e, r = 0; r < n; ++r) {
            a[(e = s[r]).i] = e.x(t);
          }return a.join("");
        });
      },
          jo = 180 / Math.PI,
          zo = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
          Do = function Do(t, n, e, r, i, o) {
        var u, a, s;return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (s = t * e + n * r) && (e -= t * s, r -= n * s), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, s /= a), t * r < n * e && (t = -t, n = -n, s = -s, u = -u), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * jo, skewX: Math.atan(s) * jo, scaleX: u, scaleY: a };
      },
          Po = Bt(Rt, "px, ", "px)", "deg)"),
          Oo = Bt(Xt, ", ", ")", ")"),
          Yo = Math.SQRT2,
          Lo = function Lo(t, n) {
        var e,
            r,
            i = t[0],
            o = t[1],
            u = t[2],
            a = n[0],
            s = n[1],
            c = n[2],
            f = a - i,
            h = s - o,
            l = f * f + h * h;if (l < 1e-12) r = Math.log(c / u) / Yo, e = function e(t) {
          return [i + t * f, o + t * h, u * Math.exp(Yo * t * r)];
        };else {
          var p = Math.sqrt(l),
              d = (c * c - u * u + 4 * l) / (2 * u * 2 * p),
              v = (c * c - u * u - 4 * l) / (2 * c * 2 * p),
              g = Math.log(Math.sqrt(d * d + 1) - d),
              y = Math.log(Math.sqrt(v * v + 1) - v);r = (y - g) / Yo, e = function e(t) {
            var n = t * r,
                e = Vt(g),
                a = u / (2 * p) * (e * Zt(Yo * n + g) - $t(g));return [i + a * f, o + a * h, u * e / Vt(Yo * n + g)];
          };
        }return e.duration = 1e3 * r, e;
      };Wt(Lt);var qo,
          Fo,
          Ho = Wt(Ft),
          Io = 0,
          Ro = 0,
          Xo = 0,
          Bo = 1e3,
          Vo = 0,
          $o = 0,
          Zo = 0,
          Wo = "object" == ("undefined" == typeof performance ? "undefined" : u(performance)) && performance.now ? performance : Date,
          Go = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
        setTimeout(t, 17);
      };Qt.prototype = Kt.prototype = { constructor: Qt, restart: function restart(t, n, e) {
          if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? Gt() : +e) + (null == n ? 0 : +n), this._next || Fo === this || (Fo ? Fo._next = this : qo = this, Fo = this), this._call = t, this._time = e, on();
        }, stop: function stop() {
          this._call && (this._call = null, this._time = 1 / 0, on());
        } };var Jo = function Jo(t, n, e) {
        var r = new Qt();return n = null == n ? 0 : +n, r.restart(function (e) {
          r.stop(), t(e + n);
        }, n, e), r;
      },
          Qo = e("start", "end", "interrupt"),
          Ko = [],
          tu = 0,
          nu = 1,
          eu = 2,
          ru = 3,
          iu = 4,
          ou = 5,
          uu = 6,
          au = function au(t, n, e, r, i, o) {
        var u = t.__transition;if (u) {
          if (e in u) return;
        } else t.__transition = {};cn(t, e, { name: n, index: r, group: i, on: Qo, tween: Ko, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: tu });
      },
          su = function su(t, n) {
        var e,
            r,
            i,
            o = t.__transition,
            u = !0;if (o) {
          n = null == n ? null : n + "";for (i in o) {
            (e = o[i]).name === n ? (r = e.state > eu && e.state < ou, e.state = uu, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
          }u && delete t.__transition;
        }
      },
          cu = function cu(t) {
        return this.each(function () {
          su(this, t);
        });
      },
          fu = function fu(t, n) {
        var e = this._id;if (t += "", arguments.length < 2) {
          for (var r, i = sn(this.node(), e).tween, o = 0, u = i.length; o < u; ++o) {
            if ((r = i[o]).name === t) return r.value;
          }return null;
        }return this.each((null == n ? fn : hn)(e, t, n));
      },
          hu = function hu(t, n) {
        var e;return ("number" == typeof n ? Co : n instanceof lt ? No : (e = lt(n)) ? (n = e, No) : Eo)(t, n);
      },
          lu = function lu(t, n) {
        var e = $r(t),
            r = "transform" === e ? Oo : hu;return this.attrTween(t, "function" == typeof n ? (e.local ? mn : yn)(e, r, ln(this, "attr." + t, n)) : null == n ? (e.local ? dn : pn)(e) : (e.local ? gn : vn)(e, r, n + ""));
      },
          pu = function pu(t, n) {
        var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = $r(t);return this.tween(e, (r.local ? _n : wn)(r, n));
      },
          du = function du(t) {
        var n = this._id;return arguments.length ? this.each(("function" == typeof t ? xn : bn)(n, t)) : sn(this.node(), n).delay;
      },
          vu = function vu(t) {
        var n = this._id;return arguments.length ? this.each(("function" == typeof t ? Mn : Tn)(n, t)) : sn(this.node(), n).duration;
      },
          gu = function gu(t) {
        var n = this._id;return arguments.length ? this.each(kn(n, t)) : sn(this.node(), n).ease;
      },
          yu = function yu(t) {
        "function" != typeof t && (t = Qr(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
          for (var o, u = n[i], a = u.length, s = r[i] = [], c = 0; c < a; ++c) {
            (o = u[c]) && t.call(o, o.__data__, c, u) && s.push(o);
          }
        }return new On(r, this._parents, this._name, this._id);
      },
          mu = function mu(t) {
        if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a) {
          for (var s, c = n[a], f = e[a], h = c.length, l = u[a] = new Array(h), p = 0; p < h; ++p) {
            (s = c[p] || f[p]) && (l[p] = s);
          }
        }for (; a < r; ++a) {
          u[a] = n[a];
        }return new On(u, this._parents, this._name, this._id);
      },
          _u = function _u(t, n) {
        var e = this._id;return arguments.length < 2 ? sn(this.node(), e).on.on(t) : this.each(Nn(e, t, n));
      },
          wu = function wu() {
        return this.on("end.remove", Cn(this._id));
      },
          xu = function xu(t) {
        var n = this._name,
            e = this._id;"function" != typeof t && (t = ii(t));for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u) {
          for (var a, s, c = r[u], f = c.length, h = o[u] = new Array(f), l = 0; l < f; ++l) {
            (a = c[l]) && (s = t.call(a, a.__data__, l, c)) && ("__data__" in a && (s.__data__ = a.__data__), h[l] = s, au(h[l], n, e, l, h, sn(a, e)));
          }
        }return new On(o, this._parents, n, e);
      },
          bu = function bu(t) {
        var n = this._name,
            e = this._id;"function" != typeof t && (t = ui(t));for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a) {
          for (var s, c = r[a], f = c.length, h = 0; h < f; ++h) {
            if (s = c[h]) {
              for (var l, p = t.call(s, s.__data__, h, c), d = sn(s, e), v = 0, g = p.length; v < g; ++v) {
                (l = p[v]) && au(l, n, e, v, p, d);
              }o.push(p), u.push(s);
            }
          }
        }return new On(o, u, n, e);
      },
          Mu = rt.prototype.constructor,
          Tu = function Tu() {
        return new Mu(this._groups, this._parents);
      },
          ku = function ku(t, n, e) {
        var r = "transform" == (t += "") ? Po : hu;return null == n ? this.styleTween(t, Sn(t, r)).on("end.style." + t, Un(t)) : this.styleTween(t, "function" == typeof n ? jn(t, r, ln(this, "style." + t, n)) : En(t, r, n + ""), e);
      },
          Au = function Au(t, n, e) {
        var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, zn(t, n, null == e ? "" : e));
      },
          Nu = function Nu(t) {
        return this.tween("text", "function" == typeof t ? Pn(ln(this, "text", t)) : Dn(null == t ? "" : t + ""));
      },
          Cu = function Cu() {
        for (var t = this._name, n = this._id, e = Ln(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
          for (var u, a = r[o], s = a.length, c = 0; c < s; ++c) {
            if (u = a[c]) {
              var f = sn(u, n);au(u, t, e, c, a, { time: f.time + f.delay + f.duration, delay: 0, duration: f.duration, ease: f.ease });
            }
          }
        }return new On(r, this._parents, t, e);
      },
          Su = 0,
          Uu = rt.prototype;On.prototype = Yn.prototype = { constructor: On, select: xu, selectAll: bu, filter: yu, merge: mu, selection: Tu, transition: Cu, call: Uu.call, nodes: Uu.nodes, node: Uu.node, size: Uu.size, empty: Uu.empty, each: Uu.each, on: _u, attr: lu, attrTween: pu, style: ku, styleTween: Au, text: Nu, remove: wu, tween: fu, delay: du, duration: vu, ease: gu };var Eu = (function t(n) {
        function e(t) {
          return Math.pow(t, n);
        }return n = +n, e.exponent = t, e;
      }(3), function t(n) {
        function e(t) {
          return 1 - Math.pow(1 - t, n);
        }return n = +n, e.exponent = t, e;
      }(3), function t(n) {
        function e(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
        }return n = +n, e.exponent = t, e;
      }(3), 1.70158),
          ju = (function t(n) {
        function e(t) {
          return t * t * ((n + 1) * t - n);
        }return n = +n, e.overshoot = t, e;
      }(Eu), function t(n) {
        function e(t) {
          return --t * t * ((n + 1) * t + n) + 1;
        }return n = +n, e.overshoot = t, e;
      }(Eu), function t(n) {
        function e(t) {
          return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
        }return n = +n, e.overshoot = t, e;
      }(Eu), 2 * Math.PI),
          zu = (function t(n, e) {
        function r(t) {
          return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
        }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ju);return r.amplitude = function (n) {
          return t(n, e * ju);
        }, r.period = function (e) {
          return t(n, e);
        }, r;
      }(1, .3), function t(n, e) {
        function r(t) {
          return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
        }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ju);return r.amplitude = function (n) {
          return t(n, e * ju);
        }, r.period = function (e) {
          return t(n, e);
        }, r;
      }(1, .3), function t(n, e) {
        function r(t) {
          return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
        }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ju);return r.amplitude = function (n) {
          return t(n, e * ju);
        }, r.period = function (e) {
          return t(n, e);
        }, r;
      }(1, .3), { time: null, delay: 0, duration: 250, ease: qn }),
          Du = function Du(t) {
        var n, e;t instanceof On ? (n = t._id, t = t._name) : (n = Ln(), (e = zu).time = Gt(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
          for (var u, a = r[o], s = a.length, c = 0; c < s; ++c) {
            (u = a[c]) && au(u, t, n, c, a, e || Fn(u, n));
          }
        }return new On(r, this._parents, t, n);
      };rt.prototype.interrupt = cu, rt.prototype.transition = Du;var Pu = (["e", "w"].map(Hn), ["n", "s"].map(Hn), ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Hn), Math.PI, Math.max, Math.PI),
          Ou = 2 * Pu,
          Yu = 1e-6,
          Lu = Ou - Yu;In.prototype = Rn.prototype = { constructor: In, moveTo: function moveTo(t, n) {
          this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
        }, closePath: function closePath() {
          null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
        }, lineTo: function lineTo(t, n) {
          this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
        }, quadraticCurveTo: function quadraticCurveTo(t, n, e, r) {
          this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
        }, bezierCurveTo: function bezierCurveTo(t, n, e, r, i, o) {
          this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o);
        }, arcTo: function arcTo(t, n, e, r, i) {
          t = +t, n = +n, e = +e, r = +r, i = +i;var o = this._x1,
              u = this._y1,
              a = e - t,
              s = r - n,
              c = o - t,
              f = u - n,
              h = c * c + f * f;if (i < 0) throw new Error("negative radius: " + i);if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);else if (h > Yu) if (Math.abs(f * a - s * c) > Yu && i) {
            var l = e - o,
                p = r - u,
                d = a * a + s * s,
                v = l * l + p * p,
                g = Math.sqrt(d),
                y = Math.sqrt(h),
                m = i * Math.tan((Pu - Math.acos((d + h - v) / (2 * g * y))) / 2),
                _ = m / y,
                w = m / g;Math.abs(_ - 1) > Yu && (this._ += "L" + (t + _ * c) + "," + (n + _ * f)), this._ += "A" + i + "," + i + ",0,0," + +(f * l > c * p) + "," + (this._x1 = t + w * a) + "," + (this._y1 = n + w * s);
          } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
        }, arc: function arc(t, n, e, r, i, o) {
          t = +t, n = +n, e = +e;var u = e * Math.cos(r),
              a = e * Math.sin(r),
              s = t + u,
              c = n + a,
              f = 1 ^ o,
              h = o ? r - i : i - r;if (e < 0) throw new Error("negative radius: " + e);null === this._x1 ? this._ += "M" + s + "," + c : (Math.abs(this._x1 - s) > Yu || Math.abs(this._y1 - c) > Yu) && (this._ += "L" + s + "," + c), e && (h < 0 && (h = h % Ou + Ou), h > Lu ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (t - u) + "," + (n - a) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = s) + "," + (this._y1 = c) : h > Yu && (this._ += "A" + e + "," + e + ",0," + +(h >= Pu) + "," + f + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))));
        }, rect: function rect(t, n, e, r) {
          this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z";
        }, toString: function toString() {
          return this._;
        } };var qu = "$";Xn.prototype = Bn.prototype = { constructor: Xn, has: function has(t) {
          return qu + t in this;
        }, get: function get(t) {
          return this[qu + t];
        }, set: function set(t, n) {
          return this[qu + t] = n, this;
        }, remove: function remove(t) {
          var n = qu + t;return n in this && delete this[n];
        }, clear: function clear() {
          for (var t in this) {
            t[0] === qu && delete this[t];
          }
        }, keys: function keys() {
          var t = [];for (var n in this) {
            n[0] === qu && t.push(n.slice(1));
          }return t;
        }, values: function values() {
          var t = [];for (var n in this) {
            n[0] === qu && t.push(this[n]);
          }return t;
        }, entries: function entries() {
          var t = [];for (var n in this) {
            n[0] === qu && t.push({ key: n.slice(1), value: this[n] });
          }return t;
        }, size: function size() {
          var t = 0;for (var n in this) {
            n[0] === qu && ++t;
          }return t;
        }, empty: function empty() {
          for (var t in this) {
            if (t[0] === qu) return !1;
          }return !0;
        }, each: function each(t) {
          for (var n in this) {
            n[0] === qu && t(this[n], n.slice(1), this);
          }
        } };var Fu = Bn.prototype;Vn.prototype = $n.prototype = { constructor: Vn, has: Fu.has, add: function add(t) {
          return t += "", this[qu + t] = t, this;
        }, remove: Fu.remove, clear: Fu.clear, values: Fu.keys, size: Fu.size, empty: Fu.empty, each: Fu.each };var Hu = function Hu(t) {
        function n(t, n) {
          var r,
              i,
              o = e(t, function (t, e) {
            return r ? r(t, e - 1) : (i = t, void (r = n ? Wn(t, n) : Zn(t)));
          });return o.columns = i, o;
        }function e(t, n) {
          function e() {
            if (f >= c) return u;if (i) return i = !1, o;var n,
                e = f;if (34 === t.charCodeAt(e)) {
              for (var r = e; r++ < c;) {
                if (34 === t.charCodeAt(r)) {
                  if (34 !== t.charCodeAt(r + 1)) break;++r;
                }
              }return f = r + 2, n = t.charCodeAt(r + 1), 13 === n ? (i = !0, 10 === t.charCodeAt(r + 2) && ++f) : 10 === n && (i = !0), t.slice(e + 1, r).replace(/""/g, '"');
            }for (; f < c;) {
              var a = 1;if (10 === (n = t.charCodeAt(f++))) i = !0;else if (13 === n) i = !0, 10 === t.charCodeAt(f) && (++f, ++a);else if (n !== s) continue;return t.slice(e, f - a);
            }return t.slice(e);
          }for (var r, i, o = {}, u = {}, a = [], c = t.length, f = 0, h = 0; (r = e()) !== u;) {
            for (var l = []; r !== o && r !== u;) {
              l.push(r), r = e();
            }n && null == (l = n(l, h++)) || a.push(l);
          }return a;
        }function r(n, e) {
          return null == e && (e = Gn(n)), [e.map(u).join(t)].concat(n.map(function (n) {
            return e.map(function (t) {
              return u(n[t]);
            }).join(t);
          })).join("\n");
        }function i(t) {
          return t.map(o).join("\n");
        }function o(n) {
          return n.map(u).join(t);
        }function u(t) {
          return null == t ? "" : a.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t;
        }var a = new RegExp('["' + t + "\n\r]"),
            s = t.charCodeAt(0);return { parse: n, parseRows: e, format: r, formatRows: i };
      },
          Iu = (Hu(","), Hu("\t"), function (t) {
        return function () {
          return t;
        };
      }),
          Ru = function Ru() {
        return 1e-6 * (Math.random() - .5);
      },
          Xu = function Xu(t) {
        var n = +this._x.call(null, t),
            e = +this._y.call(null, t);return Jn(this.cover(n, e), n, e, t);
      },
          Bu = function Bu(t, n) {
        if (isNaN(t = +t) || isNaN(n = +n)) return this;var e = this._x0,
            r = this._y0,
            i = this._x1,
            o = this._y1;if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;else {
          if (!(e > t || t > i || r > n || n > o)) return this;var u,
              a,
              s = i - e,
              c = this._root;switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {case 0:
              do {
                u = new Array(4), u[a] = c, c = u;
              } while ((s *= 2, i = e + s, o = r + s, t > i || n > o));break;case 1:
              do {
                u = new Array(4), u[a] = c, c = u;
              } while ((s *= 2, e = i - s, o = r + s, e > t || n > o));break;case 2:
              do {
                u = new Array(4), u[a] = c, c = u;
              } while ((s *= 2, i = e + s, r = o - s, t > i || r > n));break;case 3:
              do {
                u = new Array(4), u[a] = c, c = u;
              } while ((s *= 2, e = i - s, r = o - s, e > t || r > n));}this._root && this._root.length && (this._root = c);
        }return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
      },
          Vu = function Vu() {
        var t = [];return this.visit(function (n) {
          if (!n.length) do {
            t.push(n.data);
          } while (n = n.next);
        }), t;
      },
          $u = function $u(t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
      },
          Zu = function Zu(t, n, e, r, i) {
        this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
      },
          Wu = function Wu(t, n, e) {
        var r,
            i,
            o,
            u,
            a,
            s,
            c,
            f = this._x0,
            h = this._y0,
            l = this._x1,
            p = this._y1,
            d = [],
            v = this._root;for (v && d.push(new Zu(v, f, h, l, p)), null == e ? e = 1 / 0 : (f = t - e, h = n - e, l = t + e, p = n + e, e *= e); s = d.pop();) {
          if (!(!(v = s.node) || (i = s.x0) > l || (o = s.y0) > p || (u = s.x1) < f || (a = s.y1) < h)) if (v.length) {
            var g = (i + u) / 2,
                y = (o + a) / 2;d.push(new Zu(v[3], g, y, u, a), new Zu(v[2], i, y, g, a), new Zu(v[1], g, o, u, y), new Zu(v[0], i, o, g, y)), (c = (n >= y) << 1 | t >= g) && (s = d[d.length - 1], d[d.length - 1] = d[d.length - 1 - c], d[d.length - 1 - c] = s);
          } else {
            var m = t - +this._x.call(null, v.data),
                _ = n - +this._y.call(null, v.data),
                w = m * m + _ * _;if (w < e) {
              var x = Math.sqrt(e = w);f = t - x, h = n - x, l = t + x, p = n + x, r = v.data;
            }
          }
        }return r;
      },
          Gu = function Gu(t) {
        if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;var n,
            e,
            r,
            i,
            o,
            u,
            a,
            s,
            c,
            f,
            h,
            l,
            p = this._root,
            d = this._x0,
            v = this._y0,
            g = this._x1,
            y = this._y1;if (!p) return this;if (p.length) for (;;) {
          if ((c = o >= (a = (d + g) / 2)) ? d = a : g = a, (f = u >= (s = (v + y) / 2)) ? v = s : y = s, n = p, !(p = p[h = f << 1 | c])) return this;if (!p.length) break;(n[h + 1 & 3] || n[h + 2 & 3] || n[h + 3 & 3]) && (e = n, l = h);
        }for (; p.data !== t;) {
          if (r = p, !(p = p.next)) return this;
        }return (i = p.next) && delete p.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[h] = i : delete n[h], (p = n[0] || n[1] || n[2] || n[3]) && p === (n[3] || n[2] || n[1] || n[0]) && !p.length && (e ? e[l] = p : this._root = p), this) : (this._root = i, this);
      },
          Ju = function Ju() {
        return this._root;
      },
          Qu = function Qu() {
        var t = 0;return this.visit(function (n) {
          if (!n.length) do {
            ++t;
          } while (n = n.next);
        }), t;
      },
          Ku = function Ku(t) {
        var n,
            e,
            r,
            i,
            o,
            u,
            a = [],
            s = this._root;for (s && a.push(new Zu(s, this._x0, this._y0, this._x1, this._y1)); n = a.pop();) {
          if (!t(s = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && s.length) {
            var c = (r + o) / 2,
                f = (i + u) / 2;(e = s[3]) && a.push(new Zu(e, c, f, o, u)), (e = s[2]) && a.push(new Zu(e, r, f, c, u)), (e = s[1]) && a.push(new Zu(e, c, i, o, f)), (e = s[0]) && a.push(new Zu(e, r, i, c, f));
          }
        }return this;
      },
          ta = function ta(t) {
        var n,
            e = [],
            r = [];for (this._root && e.push(new Zu(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
          var i = n.node;if (i.length) {
            var o,
                u = n.x0,
                a = n.y0,
                s = n.x1,
                c = n.y1,
                f = (u + s) / 2,
                h = (a + c) / 2;(o = i[0]) && e.push(new Zu(o, u, a, f, h)), (o = i[1]) && e.push(new Zu(o, f, a, s, h)), (o = i[2]) && e.push(new Zu(o, u, h, f, c)), (o = i[3]) && e.push(new Zu(o, f, h, s, c));
          }r.push(n);
        }for (; n = r.pop();) {
          t(n.node, n.x0, n.y0, n.x1, n.y1);
        }return this;
      },
          na = function na(t) {
        return arguments.length ? (this._x = t, this) : this._x;
      },
          ea = function ea(t) {
        return arguments.length ? (this._y = t, this) : this._y;
      },
          ra = ee.prototype = re.prototype;ra.copy = function () {
        var t,
            n,
            e = new re(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
            r = this._root;if (!r) return e;if (!r.length) return e._root = ie(r), e;for (t = [{ source: r, target: e._root = new Array(4) }]; r = t.pop();) {
          for (var i = 0; i < 4; ++i) {
            (n = r.source[i]) && (n.length ? t.push({ source: n, target: r.target[i] = new Array(4) }) : r.target[i] = ie(n));
          }
        }return e;
      }, ra.add = Xu, ra.addAll = Qn, ra.cover = Bu, ra.data = Vu, ra.extent = $u, ra.find = Wu, ra.remove = Gu, ra.removeAll = Kn, ra.root = Ju, ra.size = Qu, ra.visit = Ku, ra.visitAfter = ta, ra.x = na, ra.y = ea;var ia,
          oa = function oa(t) {
        function n() {
          function t(t, n, e, r, i) {
            var o = t.data,
                a = t.r,
                p = h + a;if (!o) return n > c + p || r < c - p || e > f + p || i < f - p;if (o.index > s.index) {
              var d = c - o.x - o.vx,
                  v = f - o.y - o.vy,
                  g = d * d + v * v;g < p * p && (0 === d && (d = Ru(), g += d * d), 0 === v && (v = Ru(), g += v * v), g = (p - (g = Math.sqrt(g))) / g * u, s.vx += (d *= g) * (p = (a *= a) / (l + a)), s.vy += (v *= g) * p, o.vx -= d * (p = 1 - p), o.vy -= v * p);
            }
          }for (var n, r, s, c, f, h, l, p = i.length, d = 0; d < a; ++d) {
            for (r = ee(i, oe, ue).visitAfter(e), n = 0; n < p; ++n) {
              s = i[n], h = o[s.index], l = h * h, c = s.x + s.vx, f = s.y + s.vy, r.visit(t);
            }
          }
        }function e(t) {
          if (t.data) return t.r = o[t.data.index];for (var n = t.r = 0; n < 4; ++n) {
            t[n] && t[n].r > t.r && (t.r = t[n].r);
          }
        }function r() {
          if (i) {
            var n,
                e,
                r = i.length;for (o = new Array(r), n = 0; n < r; ++n) {
              e = i[n], o[e.index] = +t(e, n, i);
            }
          }
        }var i,
            o,
            u = 1,
            a = 1;return "function" != typeof t && (t = Iu(null == t ? 1 : +t)), n.initialize = function (t) {
          i = t, r();
        }, n.iterations = function (t) {
          return arguments.length ? (a = +t, n) : a;
        }, n.strength = function (t) {
          return arguments.length ? (u = +t, n) : u;
        }, n.radius = function (e) {
          return arguments.length ? (t = "function" == typeof e ? e : Iu(+e), r(), n) : t;
        }, n;
      },
          ua = function ua(t) {
        function n(t) {
          return 1 / Math.min(f[t.source.index], f[t.target.index]);
        }function e(n) {
          for (var e = 0, r = t.length; e < v; ++e) {
            for (var i, o, u, c, f, l, p, d = 0; d < r; ++d) {
              i = t[d], o = i.source, u = i.target, c = u.x + u.vx - o.x - o.vx || Ru(), f = u.y + u.vy - o.y - o.vy || Ru(), l = Math.sqrt(c * c + f * f), l = (l - s[d]) / l * n * a[d], c *= l, f *= l, u.vx -= c * (p = h[d]), u.vy -= f * p, o.vx += c * (p = 1 - p), o.vy += f * p;
            }
          }
        }function r() {
          if (c) {
            var n,
                e,
                r = c.length,
                p = t.length,
                d = Bn(c, l);for (n = 0, f = new Array(r); n < p; ++n) {
              e = t[n], e.index = n, "object" != u(e.source) && (e.source = se(d, e.source)), "object" != u(e.target) && (e.target = se(d, e.target)), f[e.source.index] = (f[e.source.index] || 0) + 1, f[e.target.index] = (f[e.target.index] || 0) + 1;
            }for (n = 0, h = new Array(p); n < p; ++n) {
              e = t[n], h[n] = f[e.source.index] / (f[e.source.index] + f[e.target.index]);
            }a = new Array(p), i(), s = new Array(p), o();
          }
        }function i() {
          if (c) for (var n = 0, e = t.length; n < e; ++n) {
            a[n] = +p(t[n], n, t);
          }
        }function o() {
          if (c) for (var n = 0, e = t.length; n < e; ++n) {
            s[n] = +d(t[n], n, t);
          }
        }var a,
            s,
            c,
            f,
            h,
            l = ae,
            p = n,
            d = Iu(30),
            v = 1;return null == t && (t = []), e.initialize = function (t) {
          c = t, r();
        }, e.links = function (n) {
          return arguments.length ? (t = n, r(), e) : t;
        }, e.id = function (t) {
          return arguments.length ? (l = t, e) : l;
        }, e.iterations = function (t) {
          return arguments.length ? (v = +t, e) : v;
        }, e.strength = function (t) {
          return arguments.length ? (p = "function" == typeof t ? t : Iu(+t), i(), e) : p;
        }, e.distance = function (t) {
          return arguments.length ? (d = "function" == typeof t ? t : Iu(+t), o(), e) : d;
        }, e;
      },
          aa = 10,
          sa = Math.PI * (3 - Math.sqrt(5)),
          ca = function ca(t) {
        function n() {
          r(), d.call("tick", u), a < s && (p.stop(), d.call("end", u));
        }function r() {
          var n,
              e,
              r = t.length;for (a += (f - a) * c, l.each(function (t) {
            t(a);
          }), n = 0; n < r; ++n) {
            e = t[n], null == e.fx ? e.x += e.vx *= h : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= h : (e.y = e.fy, e.vy = 0);
          }
        }function i() {
          for (var n, e = 0, r = t.length; e < r; ++e) {
            if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
              var i = aa * Math.sqrt(e),
                  o = e * sa;n.x = i * Math.cos(o), n.y = i * Math.sin(o);
            }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
          }
        }function o(n) {
          return n.initialize && n.initialize(t), n;
        }var u,
            a = 1,
            s = .001,
            c = 1 - Math.pow(s, 1 / 300),
            f = 0,
            h = .6,
            l = Bn(),
            p = Kt(n),
            d = e("tick", "end");return null == t && (t = []), i(), u = { tick: r, restart: function restart() {
            return p.restart(n), u;
          }, stop: function stop() {
            return p.stop(), u;
          }, nodes: function nodes(n) {
            return arguments.length ? (t = n, i(), l.each(o), u) : t;
          }, alpha: function alpha(t) {
            return arguments.length ? (a = +t, u) : a;
          }, alphaMin: function alphaMin(t) {
            return arguments.length ? (s = +t, u) : s;
          }, alphaDecay: function alphaDecay(t) {
            return arguments.length ? (c = +t, u) : +c;
          }, alphaTarget: function alphaTarget(t) {
            return arguments.length ? (f = +t, u) : f;
          }, velocityDecay: function velocityDecay(t) {
            return arguments.length ? (h = 1 - t, u) : 1 - h;
          }, force: function force(t, n) {
            return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, o(n)), u) : l.get(t);
          }, find: function find(n, e, r) {
            var i,
                o,
                u,
                a,
                s,
                c = 0,
                f = t.length;for (null == r ? r = 1 / 0 : r *= r, c = 0; c < f; ++c) {
              a = t[c], i = n - a.x, o = e - a.y, (u = i * i + o * o) < r && (s = a, r = u);
            }return s;
          }, on: function on(t, n) {
            return arguments.length > 1 ? (d.on(t, n), u) : d.on(t);
          } };
      },
          fa = function fa() {
        function t(t) {
          var n,
              a = i.length,
              s = ee(i, ce, fe).visitAfter(e);for (u = t, n = 0; n < a; ++n) {
            o = i[n], s.visit(r);
          }
        }function n() {
          if (i) {
            var t,
                n,
                e = i.length;for (a = new Array(e), t = 0; t < e; ++t) {
              n = i[t], a[n.index] = +s(n, t, i);
            }
          }
        }function e(t) {
          var n,
              e,
              r,
              i,
              o,
              u = 0;if (t.length) {
            for (r = i = o = 0; o < 4; ++o) {
              (n = t[o]) && (e = n.value) && (u += e, r += e * n.x, i += e * n.y);
            }t.x = r / u, t.y = i / u;
          } else {
            n = t, n.x = n.data.x, n.y = n.data.y;do {
              u += a[n.data.index];
            } while (n = n.next);
          }t.value = u;
        }function r(t, n, e, r) {
          if (!t.value) return !0;var i = t.x - o.x,
              s = t.y - o.y,
              l = r - n,
              p = i * i + s * s;if (l * l / h < p) return p < f && (0 === i && (i = Ru(), p += i * i), 0 === s && (s = Ru(), p += s * s), p < c && (p = Math.sqrt(c * p)), o.vx += i * t.value * u / p, o.vy += s * t.value * u / p), !0;if (!(t.length || p >= f)) {
            (t.data !== o || t.next) && (0 === i && (i = Ru(), p += i * i), 0 === s && (s = Ru(), p += s * s), p < c && (p = Math.sqrt(c * p)));do {
              t.data !== o && (l = a[t.data.index] * u / p, o.vx += i * l, o.vy += s * l);
            } while (t = t.next);
          }
        }var i,
            o,
            u,
            a,
            s = Iu(-30),
            c = 1,
            f = 1 / 0,
            h = .81;return t.initialize = function (t) {
          i = t, n();
        }, t.strength = function (e) {
          return arguments.length ? (s = "function" == typeof e ? e : Iu(+e), n(), t) : s;
        }, t.distanceMin = function (n) {
          return arguments.length ? (c = n * n, t) : Math.sqrt(c);
        }, t.distanceMax = function (n) {
          return arguments.length ? (f = n * n, t) : Math.sqrt(f);
        }, t.theta = function (n) {
          return arguments.length ? (h = n * n, t) : Math.sqrt(h);
        }, t;
      },
          ha = function ha(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;var e,
            r = t.slice(0, e);return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
      },
          la = function la(t) {
        return t = ha(Math.abs(t)), t ? t[1] : NaN;
      },
          pa = function pa(t, n) {
        return function (e, r) {
          for (var i = e.length, o = [], u = 0, a = t[0], s = 0; i > 0 && a > 0 && (s + a + 1 > r && (a = Math.max(1, r - s)), o.push(e.substring(i -= a, i + a)), !((s += a + 1) > r));) {
            a = t[u = (u + 1) % t.length];
          }return o.reverse().join(n);
        };
      },
          da = function da(t) {
        return function (n) {
          return n.replace(/[0-9]/g, function (n) {
            return t[+n];
          });
        };
      },
          va = function va(t, n) {
        t = t.toPrecision(n);t: for (var e, r = t.length, i = 1, o = -1; i < r; ++i) {
          switch (t[i]) {case ".":
              o = e = i;break;case "0":
              0 === o && (o = i), e = i;break;case "e":
              break t;default:
              o > 0 && (o = 0);}
        }return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
      },
          ga = function ga(t, n) {
        var e = ha(t, n);if (!e) return t + "";var r = e[0],
            i = e[1],
            o = i - (ia = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            u = r.length;return o === u ? r : o > u ? r + new Array(o - u + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + ha(t, Math.max(0, n + o - 1))[0];
      },
          ya = function ya(t, n) {
        var e = ha(t, n);if (!e) return t + "";var r = e[0],
            i = e[1];return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
      },
          ma = { "": va, "%": function _(t, n) {
          return (100 * t).toFixed(n);
        }, b: function b(t) {
          return Math.round(t).toString(2);
        }, c: function c(t) {
          return t + "";
        }, d: function d(t) {
          return Math.round(t).toString(10);
        }, e: function e(t, n) {
          return t.toExponential(n);
        }, f: function f(t, n) {
          return t.toFixed(n);
        }, g: function g(t, n) {
          return t.toPrecision(n);
        }, o: function o(t) {
          return Math.round(t).toString(8);
        }, p: function p(t, n) {
          return ya(100 * t, n);
        }, r: ya, s: ga, X: function X(t) {
          return Math.round(t).toString(16).toUpperCase();
        }, x: function x(t) {
          return Math.round(t).toString(16);
        } },
          _a = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;he.prototype = le.prototype, le.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
      };var wa,
          xa,
          ba,
          Ma = function Ma(t) {
        return t;
      },
          Ta = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
          ka = function ka(t) {
        function n(t) {
          function n(t) {
            var n,
                i,
                a,
                f = g,
                w = y;if ("c" === v) w = m(t) + w, t = "";else {
              t = +t;var x = t < 0;if (t = m(Math.abs(t), d), x && 0 == +t && (x = !1), f = (x ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + f, w = w + ("s" === v ? Ta[8 + ia / 3] : "") + (x && "(" === c ? ")" : ""), _) for (n = -1, i = t.length; ++n < i;) {
                if (48 > (a = t.charCodeAt(n)) || a > 57) {
                  w = (46 === a ? o + t.slice(n + 1) : t.slice(n)) + w, t = t.slice(0, n);break;
                }
              }
            }p && !h && (t = r(t, 1 / 0));var b = f.length + t.length + w.length,
                M = b < l ? new Array(l - b + 1).join(e) : "";switch (p && h && (t = r(M + t, M.length ? l - w.length : 1 / 0), M = ""), s) {case "<":
                t = f + t + w + M;break;case "=":
                t = f + M + t + w;break;case "^":
                t = M.slice(0, b = M.length >> 1) + f + t + w + M.slice(b);break;default:
                t = M + f + t + w;}return u(t);
          }t = he(t);var e = t.fill,
              s = t.align,
              c = t.sign,
              f = t.symbol,
              h = t.zero,
              l = t.width,
              p = t.comma,
              d = t.precision,
              v = t.type,
              g = "$" === f ? i[0] : "#" === f && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
              y = "$" === f ? i[1] : /[%p]/.test(v) ? a : "",
              m = ma[v],
              _ = !v || /[defgprs%]/.test(v);return d = null == d ? v ? 6 : 12 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), n.toString = function () {
            return t + "";
          }, n;
        }function e(t, e) {
          var r = n((t = he(t), t.type = "f", t)),
              i = 3 * Math.max(-8, Math.min(8, Math.floor(la(e) / 3))),
              o = Math.pow(10, -i),
              u = Ta[8 + i / 3];return function (t) {
            return r(o * t) + u;
          };
        }var r = t.grouping && t.thousands ? pa(t.grouping, t.thousands) : Ma,
            i = t.currency,
            o = t.decimal,
            u = t.numerals ? da(t.numerals) : Ma,
            a = t.percent || "%";return { format: n, formatPrefix: e };
      };!function (t) {
        wa = ka(t), xa = wa.format, ba = wa.formatPrefix;
      }({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });var Aa = function Aa() {
        return new pe();
      };pe.prototype = { constructor: pe, reset: function reset() {
          this.s = this.t = 0;
        }, add: function add(t) {
          de(Na, t, this.t), de(this, Na.s, this.s), this.s ? this.t += Na.t : this.s = Na.t;
        }, valueOf: function valueOf() {
          return this.s;
        } };var Na = new pe(),
          Ca = Math.PI,
          Sa = Ca / 2,
          Ua = Ca / 180,
          Ea = (Math.abs, Math.atan2),
          ja = Math.cos,
          za = Math.sin,
          Da = Math.sqrt;Aa(), Aa(), Aa(), Aa(), Aa();(Aa(), Aa(), Aa(), ja(30 * Ua), ye(function (t) {
        return Da(2 / (1 + t));
      })).invert = me(function (t) {
        return 2 * ge(t / 2);
      }), ye(function (t) {
        return (t = ve(t)) && t / za(t);
      }).invert = me(function (t) {
        return t;
      });var Pa = function Pa() {
        return this.eachAfter(_e);
      },
          Oa = function Oa(t) {
        var n,
            e,
            r,
            i,
            o = this,
            u = [o];do {
          for (n = u.reverse(), u = []; o = n.pop();) {
            if (t(o), e = o.children) for (r = 0, i = e.length; r < i; ++r) {
              u.push(e[r]);
            }
          }
        } while (u.length);return this;
      },
          Ya = function Ya(t) {
        for (var n, e, r = this, i = [r]; r = i.pop();) {
          if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) {
            i.push(n[e]);
          }
        }return this;
      },
          La = function La(t) {
        for (var n, e, r, i = this, o = [i], u = []; i = o.pop();) {
          if (u.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) {
            o.push(n[e]);
          }
        }for (; i = u.pop();) {
          t(i);
        }return this;
      },
          qa = function qa(t) {
        return this.eachAfter(function (n) {
          for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) {
            e += r[i].value;
          }n.value = e;
        });
      },
          Fa = function Fa(t) {
        return this.eachBefore(function (n) {
          n.children && n.children.sort(t);
        });
      },
          Ha = function Ha(t) {
        for (var n = this, e = we(n, t), r = [n]; n !== e;) {
          n = n.parent, r.push(n);
        }for (var i = r.length; t !== e;) {
          r.splice(i, 0, t), t = t.parent;
        }return r;
      },
          Ia = function Ia() {
        for (var t = this, n = [t]; t = t.parent;) {
          n.push(t);
        }return n;
      },
          Ra = function Ra() {
        var t = [];return this.each(function (n) {
          t.push(n);
        }), t;
      },
          Xa = function Xa() {
        var t = [];return this.eachBefore(function (n) {
          n.children || t.push(n);
        }), t;
      },
          Ba = function Ba() {
        var t = this,
            n = [];return t.each(function (e) {
          e !== t && n.push({ source: e.parent, target: e });
        }), n;
      };Ae.prototype = xe.prototype = { constructor: Ae, count: Pa, each: Oa, eachAfter: La, eachBefore: Ya, sum: qa, sort: Fa, path: Ha, ancestors: Ia, descendants: Ra, leaves: Xa, links: Ba, copy: be }, Ne.prototype = Object.create(Ae.prototype);var Va = Array.prototype,
          $a = (Va.map, Va.slice, new Date()),
          Za = new Date(),
          Wa = Ce(function () {}, function (t, n) {
        t.setTime(+t + n);
      }, function (t, n) {
        return n - t;
      });Wa.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Ce(function (n) {
          n.setTime(Math.floor(n / t) * t);
        }, function (n, e) {
          n.setTime(+n + e * t);
        }, function (n, e) {
          return (e - n) / t;
        }) : Wa : null;
      };var Ga = 6e4,
          Ja = 36e5,
          Qa = 6048e5,
          Ka = (Ce(function (t) {
        t.setTime(1e3 * Math.floor(t / 1e3));
      }, function (t, n) {
        t.setTime(+t + 1e3 * n);
      }, function (t, n) {
        return (n - t) / 1e3;
      }, function (t) {
        return t.getUTCSeconds();
      }), Ce(function (t) {
        t.setTime(Math.floor(t / Ga) * Ga);
      }, function (t, n) {
        t.setTime(+t + n * Ga);
      }, function (t, n) {
        return (n - t) / Ga;
      }, function (t) {
        return t.getMinutes();
      }), Ce(function (t) {
        var n = t.getTimezoneOffset() * Ga % Ja;n < 0 && (n += Ja), t.setTime(Math.floor((+t - n) / Ja) * Ja + n);
      }, function (t, n) {
        t.setTime(+t + n * Ja);
      }, function (t, n) {
        return (n - t) / Ja;
      }, function (t) {
        return t.getHours();
      }), Ce(function (t) {
        t.setHours(0, 0, 0, 0);
      }, function (t, n) {
        t.setDate(t.getDate() + n);
      }, function (t, n) {
        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ga) / 864e5;
      }, function (t) {
        return t.getDate() - 1;
      })),
          ts = Se(0),
          ns = Se(1),
          es = (Se(2), Se(3), Se(4), Se(5), Se(6), Ce(function (t) {
        t.setDate(1), t.setHours(0, 0, 0, 0);
      }, function (t, n) {
        t.setMonth(t.getMonth() + n);
      }, function (t, n) {
        return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
      }, function (t) {
        return t.getMonth();
      }), Ce(function (t) {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      }, function (t, n) {
        t.setFullYear(t.getFullYear() + n);
      }, function (t, n) {
        return n.getFullYear() - t.getFullYear();
      }, function (t) {
        return t.getFullYear();
      }));es.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Ce(function (n) {
          n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
        }, function (n, e) {
          n.setFullYear(n.getFullYear() + e * t);
        }) : null;
      };var rs = (Ce(function (t) {
        t.setUTCSeconds(0, 0);
      }, function (t, n) {
        t.setTime(+t + n * Ga);
      }, function (t, n) {
        return (n - t) / Ga;
      }, function (t) {
        return t.getUTCMinutes();
      }), Ce(function (t) {
        t.setUTCMinutes(0, 0, 0);
      }, function (t, n) {
        t.setTime(+t + n * Ja);
      }, function (t, n) {
        return (n - t) / Ja;
      }, function (t) {
        return t.getUTCHours();
      }), Ce(function (t) {
        t.setUTCHours(0, 0, 0, 0);
      }, function (t, n) {
        t.setUTCDate(t.getUTCDate() + n);
      }, function (t, n) {
        return (n - t) / 864e5;
      }, function (t) {
        return t.getUTCDate() - 1;
      })),
          is = Ue(0),
          os = Ue(1),
          us = (Ue(2), Ue(3), Ue(4), Ue(5), Ue(6), Ce(function (t) {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
      }, function (t, n) {
        t.setUTCMonth(t.getUTCMonth() + n);
      }, function (t, n) {
        return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
      }, function (t) {
        return t.getUTCMonth();
      }), Ce(function (t) {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      }, function (t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n);
      }, function (t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear();
      }, function (t) {
        return t.getUTCFullYear();
      }));us.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Ce(function (n) {
          n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
        }, function (n, e) {
          n.setUTCFullYear(n.getUTCFullYear() + e * t);
        }) : null;
      };var as,
          ss,
          cs,
          fs,
          hs,
          ls = { "-": "", _: " ", 0: "0" },
          ps = /^\s*\d+/,
          ds = /^%/,
          vs = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;!function (t) {
        as = De(t), ss = as.format, cs = as.parse, fs = as.utcFormat, hs = as.utcParse;
      }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });var gs = "%Y-%m-%dT%H:%M:%S.%LZ",
          ys = (Date.prototype.toISOString || fs(gs), +new Date("2000-01-01T00:00:00.000Z") || hs(gs), function (t) {
        return t.match(/.{6}/g).map(function (t) {
          return "#" + t;
        });
      });ys("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ys("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), ys("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), ys("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Ho(Dt(300, .5, 0), Dt(-240, .5, 1)), Ho(Dt(-100, .75, .35), Dt(80, 1.5, .8)), Ho(Dt(260, .75, .35), Dt(80, 1.5, .8)), Dt(), Cr.prototype = { areaStart: function areaStart() {
          this._line = 0;
        }, areaEnd: function areaEnd() {
          this._line = NaN;
        }, lineStart: function lineStart() {
          this._point = 0;
        }, lineEnd: function lineEnd() {
          (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        }, point: function point(t, n) {
          switch (t = +t, n = +n, this._point) {case 0:
              this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
              this._point = 2;default:
              this._context.lineTo(t, n);}
        } }, zr.prototype = { areaStart: function areaStart() {
          this._line = 0;
        }, areaEnd: function areaEnd() {
          this._line = NaN;
        }, lineStart: function lineStart() {
          this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
        }, lineEnd: function lineEnd() {
          switch (this._point) {case 2:
              this._context.lineTo(this._x1, this._y1);break;case 3:
              jr(this, this._t0, Er(this, this._t0));}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
        }, point: function point(t, n) {
          var e = NaN;if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
            switch (this._point) {case 0:
                this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
                this._point = 2;break;case 2:
                this._point = 3, jr(this, Er(this, e = Ur(this, t, n)), e);break;default:
                jr(this, this._t0, e = Ur(this, t, n));}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e;
          }
        } }, (Dr.prototype = Object.create(zr.prototype)).point = function (t, n) {
        zr.prototype.point.call(this, n, t);
      }, Pr.prototype = { moveTo: function moveTo(t, n) {
          this._context.moveTo(n, t);
        }, closePath: function closePath() {
          this._context.closePath();
        }, lineTo: function lineTo(t, n) {
          this._context.lineTo(n, t);
        }, bezierCurveTo: function bezierCurveTo(t, n, e, r, i, o) {
          this._context.bezierCurveTo(n, t, r, e, o, i);
        } };var ms = function ms(t) {
        return function () {
          return t;
        };
      };Yr.prototype = { constructor: Yr, scale: function scale(t) {
          return 1 === t ? this : new Yr(this.k * t, this.x, this.y);
        }, translate: function translate(t, n) {
          return 0 === t & 0 === n ? this : new Yr(this.k, this.x + this.k * t, this.y + this.k * n);
        }, apply: function apply(t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        }, applyX: function applyX(t) {
          return t * this.k + this.x;
        }, applyY: function applyY(t) {
          return t * this.k + this.y;
        }, invert: function invert(t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        }, invertX: function invertX(t) {
          return (t - this.x) / this.k;
        }, invertY: function invertY(t) {
          return (t - this.y) / this.k;
        }, rescaleX: function rescaleX(t) {
          return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
        }, rescaleY: function rescaleY(t) {
          return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
        }, toString: function toString() {
          return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
        } };var _s = new Yr(1, 0, 0),
          ws = function ws() {
        t.event.preventDefault(), t.event.stopImmediatePropagation();
      },
          xs = function xs() {
        function n(t) {
          t.on("wheel.zoom", f).on("mousedown.zoom", h).on("dblclick.zoom", l).on("touchstart.zoom", p).on("touchmove.zoom", d).on("touchend.zoom touchcancel.zoom", g).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").property("__zoom", Hr);
        }function r(t, n) {
          return n = Math.max(x, Math.min(b, n)), n === t.k ? t : new Yr(n, t.x, t.y);
        }function i(t, n, e) {
          var r = n[0] - e[0] * t.k,
              i = n[1] - e[1] * t.k;return r === t.x && i === t.y ? t : new Yr(t.k, r, i);
        }function o(t, n) {
          var e = t.invertX(n[0][0]) - M,
              r = t.invertX(n[1][0]) - T,
              i = t.invertY(n[0][1]) - k,
              o = t.invertY(n[1][1]) - A;return t.translate(r > e ? (e + r) / 2 : Math.min(0, e) || Math.max(0, r), o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o));
        }function u(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }function a(t, n, e) {
          t.on("start.zoom", function () {
            s(this, arguments).start();
          }).on("interrupt.zoom end.zoom", function () {
            s(this, arguments).end();
          }).tween("zoom", function () {
            var t = this,
                r = arguments,
                i = s(t, r),
                o = w.apply(t, r),
                a = e || u(o),
                c = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                f = t.__zoom,
                h = "function" == typeof n ? n.apply(t, r) : n,
                l = C(f.invert(a).concat(c / f.k), h.invert(a).concat(c / h.k));return function (t) {
              if (1 === t) t = h;else {
                var n = l(t),
                    e = c / n[2];t = new Yr(e, a[0] - n[0] * e, a[1] - n[1] * e);
              }i.zoom(null, t);
            };
          });
        }function s(t, n) {
          for (var e, r = 0, i = S.length; r < i; ++r) {
            if ((e = S[r]).that === t) return e;
          }return new c(t, n);
        }function c(t, n) {
          this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = w.apply(t, n);
        }function f() {
          function n() {
            e.wheel = null, e.end();
          }if (_.apply(this, arguments)) {
            var e = s(this, arguments),
                u = this.__zoom,
                a = Math.max(x, Math.min(b, u.k * Math.pow(2, -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500))),
                c = ri(this);if (e.wheel) e.mouse[0][0] === c[0] && e.mouse[0][1] === c[1] || (e.mouse[1] = u.invert(e.mouse[0] = c)), clearTimeout(e.wheel);else {
              if (u.k === a) return;e.mouse = [c, u.invert(c)], su(this), e.start();
            }ws(), e.wheel = setTimeout(n, j), e.zoom("mouse", o(i(r(u, a), e.mouse[0], e.mouse[1]), e.extent));
          }
        }function h() {
          function n() {
            if (ws(), !r.moved) {
              var n = t.event.clientX - c,
                  e = t.event.clientY - f;r.moved = n * n + e * e > z;
            }r.zoom("mouse", o(i(r.that.__zoom, r.mouse[0] = ri(r.that), r.mouse[1]), r.extent));
          }function e() {
            u.on("mousemove.zoom mouseup.zoom", null), ot(t.event.view, r.moved), ws(), r.end();
          }if (!m && _.apply(this, arguments)) {
            var r = s(this, arguments),
                u = qi(t.event.view).on("mousemove.zoom", n, !0).on("mouseup.zoom", e, !0),
                a = ri(this),
                c = t.event.clientX,
                f = t.event.clientY;Ii(t.event.view), Lr(), r.mouse = [a, this.__zoom.invert(a)], su(this), r.start();
          }
        }function l() {
          if (_.apply(this, arguments)) {
            var e = this.__zoom,
                u = ri(this),
                s = e.invert(u),
                c = e.k * (t.event.shiftKey ? .5 : 2),
                f = o(i(r(e, c), u, s), w.apply(this, arguments));ws(), N > 0 ? qi(this).transition().duration(N).call(a, f, u) : qi(this).call(n.transform, f);
          }
        }function p() {
          if (_.apply(this, arguments)) {
            var n,
                e,
                r,
                i,
                o = s(this, arguments),
                u = t.event.changedTouches,
                a = u.length;for (Lr(), e = 0; e < a; ++e) {
              r = u[e], i = Fi(this, u, r.identifier), i = [i, this.__zoom.invert(i), r.identifier], o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i, n = !0);
            }return y && (y = clearTimeout(y), !o.touch1) ? (o.end(), void ((i = qi(this).on("dblclick.zoom")) && i.apply(this, arguments))) : void (n && (y = setTimeout(function () {
              y = null;
            }, E), su(this), o.start()));
          }
        }function d() {
          var n,
              e,
              u,
              a,
              c = s(this, arguments),
              f = t.event.changedTouches,
              h = f.length;for (ws(), y && (y = clearTimeout(y)), n = 0; n < h; ++n) {
            e = f[n], u = Fi(this, f, e.identifier), c.touch0 && c.touch0[2] === e.identifier ? c.touch0[0] = u : c.touch1 && c.touch1[2] === e.identifier && (c.touch1[0] = u);
          }if (e = c.that.__zoom, c.touch1) {
            var l = c.touch0[0],
                p = c.touch0[1],
                d = c.touch1[0],
                v = c.touch1[1],
                g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g,
                m = (m = v[0] - p[0]) * m + (m = v[1] - p[1]) * m;e = r(e, Math.sqrt(g / m)), u = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], a = [(p[0] + v[0]) / 2, (p[1] + v[1]) / 2];
          } else {
            if (!c.touch0) return;u = c.touch0[0], a = c.touch0[1];
          }c.zoom("touch", o(i(e, u, a), c.extent));
        }function g() {
          var n,
              e,
              r = s(this, arguments),
              i = t.event.changedTouches,
              o = i.length;for (Lr(), m && clearTimeout(m), m = setTimeout(function () {
            m = null;
          }, E), n = 0; n < o; ++n) {
            e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
          }r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end();
        }var y,
            m,
            _ = qr,
            w = Fr,
            x = 0,
            b = 1 / 0,
            M = -b,
            T = b,
            k = M,
            A = T,
            N = 250,
            C = Lo,
            S = [],
            U = e("start", "zoom", "end"),
            E = 500,
            j = 150,
            z = 0;return n.transform = function (t, n) {
          var e = t.selection ? t.selection() : t;e.property("__zoom", Hr), t !== e ? a(t, n) : e.interrupt().each(function () {
            s(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end();
          });
        }, n.scaleBy = function (t, e) {
          n.scaleTo(t, function () {
            return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e);
          });
        }, n.scaleTo = function (t, e) {
          n.transform(t, function () {
            var t = w.apply(this, arguments),
                n = this.__zoom,
                a = u(t),
                s = n.invert(a);return o(i(r(n, "function" == typeof e ? e.apply(this, arguments) : e), a, s), t);
          });
        }, n.translateBy = function (t, e, r) {
          n.transform(t, function () {
            return o(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), w.apply(this, arguments));
          });
        }, c.prototype = { start: function start() {
            return 1 == ++this.active && (this.index = S.push(this) - 1, this.emit("start")), this;
          }, zoom: function zoom(t, n) {
            return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this;
          }, end: function end() {
            return 0 == --this.active && (S.splice(this.index, 1), this.index = -1, this.emit("end")), this;
          }, emit: function emit(t) {
            v(new Or(n, t, this.that.__zoom), U.apply, U, [t, this.that, this.args]);
          } }, n.filter = function (t) {
          return arguments.length ? (_ = "function" == typeof t ? t : ms(!!t), n) : _;
        }, n.extent = function (t) {
          return arguments.length ? (w = "function" == typeof t ? t : ms([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), n) : w;
        }, n.scaleExtent = function (t) {
          return arguments.length ? (x = +t[0], b = +t[1], n) : [x, b];
        }, n.translateExtent = function (t) {
          return arguments.length ? (M = +t[0][0], T = +t[1][0], k = +t[0][1], A = +t[1][1], n) : [[M, k], [T, A]];
        }, n.duration = function (t) {
          return arguments.length ? (N = +t, n) : N;
        }, n.interpolate = function (t) {
          return arguments.length ? (C = t, n) : C;
        }, n.on = function () {
          var t = U.on.apply(U, arguments);return t === U ? n : t;
        }, n.clickDistance = function (t) {
          return arguments.length ? (z = (t = +t) * t, n) : Math.sqrt(z);
        }, n;
      };t.forceCollide = oa, t.forceLink = ua, t.forceManyBody = fa, t.forceSimulation = ca, t.select = qi, t.drag = Xi, t.zoom = xs, t.zoomIdentity = _s, Object.defineProperty(t, "__esModule", { value: !0 });
    });
  }, function (t, n, e) {
    "use strict";
    var r = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g,
        i = { "🗺": "mindmap", "🌐": "wiki", "🗂": "stack exchange", "📝": "course", "📖": "free book", "📕": "non-free book", "📄": "paper", "👀": "video", "🖋": "article", "🗃": "blog", "🐙": "github", "👾": "interactive", "🖌": "image", "🎙": "podcast", "📮": "newsletter", "💬": "chat", "🎥": "youtube", "🤖": "reddit", "🔎": "quora", "🔗": void 0 },
        o = {};Object.keys(i).forEach(function (t) {
      o[i[t]] = t;
    });var u = function u(t, n) {
      return '<img class="mindmap-emoji" title="' + n + '" src="https://assets-cdn.github.com/images/icons/emoji/unicode/' + t + '.png">';
    },
        a = function a(t, n) {
      return '<img class="mindmap-emoji" title="' + n + '" src="https://assets-cdn.github.com/images/icons/emoji/' + t + '.png">';
    },
        s = function s(t) {
      return i[t] || "";
    },
        c = function c(t) {
      return t.replace(r, function (t) {
        switch (t) {case "🤖":
            return '<img class="mindmap-emoji reddit-emoji" title="reddit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpOQVZdTCyVamjJPl92KjaDHigNWVM8mOLHPRU4DHoVNJWxCg">';case "🗂":
            return '<img class="mindmap-emoji" title="stackexchange" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/se/se-icon.png?v=93426798a1d4">';case "🐙":
            return a("octocat", "github");case "🔎":
            return '<img class="mindmap-emoji" title="quora" src="https://www.shareicon.net/data/2016/11/03/849470_social_512x512.png">';default:
            var n = 1023 & t.charCodeAt(0),
                e = 1023 & t.charCodeAt(1),
                r = ((n << 10) + e).toString(16);return u("1" + r, s(t));}
      });
    },
        f = function f(t) {
      return c(o[t] || "");
    };t.exports = { matchEmojis: r, emojiToIMG: c, emojiTemplate: u, emojiToCategory: s, categoryToIMG: f };
  }, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });n.getDimensions = function (t, n, e) {
      var r = document.createElement("span"),
          i = {};return r.style.display = "inline-block", r.style.visibility = "hidden", r.className = e, r.innerHTML = t, Object.keys(n).forEach(function (t) {
        r.style[t] = n[t];
      }), document.body.append(r), i.width = r.offsetWidth, i.height = r.offsetHeight, r.remove(), i;
    }, n.getViewBox = function (t) {
      var n = [],
          e = [];if (t.forEach(function (t) {
        n.push(t.fx), e.push(t.fy);
      }), 0 === n.length || 0 === e.length) return "0 0 0 0";var r = [Math.min.apply(Math, n) - 150, Math.min.apply(Math, e) - 150],
          i = [Math.max.apply(Math, n) - r[0] + 150, Math.max.apply(Math, e) - r[1] + 150];return r.join(" ") + " " + i.join(" ");
    };
  }, function (t, n, e) {
    "use strict";
    function r(t) {
      return t && t.__esModule ? t : { default: t };
    }function i(t, n) {
      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
    }function o(t, n) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !n || "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && "function" != typeof n ? t : n;
    }function u(t, n) {
      if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (typeof n === "undefined" ? "undefined" : _typeof(n)));t.prototype = Object.create(n && n.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }Object.defineProperty(n, "__esModule", { value: !0 });var a = function () {
      function t(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }return function (n, e, r) {
        return e && t(n.prototype, e), r && t(n, r), n;
      };
    }(),
        s = e(13),
        c = r(s),
        f = e(0),
        h = e(6),
        l = e(2),
        p = e(8),
        d = r(p),
        v = e(7),
        g = r(v);e(12);var y = function (t) {
      function n(t) {
        i(this, n);var e = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t)),
            r = (0, f.forceSimulation)().force("link", (0, f.forceLink)().id(function (t) {
          return t.text;
        })).force("charge", (0, f.forceManyBody)()).force("collide", (0, f.forceCollide)().radius(100));return e.state = { simulation: r }, e;
      }return u(n, t), a(n, [{ key: "prepareNodes", value: function value() {
          var t = function t(_t2) {
            _t2.html = (0, g.default)(_t2), _t2.nodesHTML = (0, d.default)(_t2.nodes);var n = (0, l.getDimensions)(_t2.html, {}, "mindmap-node");_t2.width = n.width, _t2.height = n.height;var e = (0, l.getDimensions)(_t2.nodesHTML, {}, "mindmap-subnode-text");_t2.nodesWidth = e.width, _t2.nodesHeight = e.height;
          };this.props.nodes.forEach(function (n) {
            return t(n);
          });
        } }, { key: "prepareEditor", value: function value(t, n, e, r) {
          e.attr("class", "mindmap-node mindmap-node--editable").on("dblclick", function (t) {
            t.fx = null, t.fy = null;
          }), e.call((0, h.d3Drag)(this.state.simulation, t, e)), this.state.simulation.alphaTarget(.5).on("tick", function () {
            return (0, h.onTick)(n, e, r);
          });
        } }, { key: "renderMap", value: function value() {
          var t = (0, f.select)(this.refs.mountPoint);t.selectAll("*").remove(), t.append("g").attr("id", "mindmap-subnodes"), this.prepareNodes();var n = (0, h.d3Connections)(t, this.props.connections),
              e = (0, h.d3Nodes)(t, this.props.nodes),
              r = e.nodes,
              i = e.subnodes;r.append("title").text(function (t) {
            return t.note;
          }), this.state.simulation.nodes(this.props.nodes).force("link").links(this.props.connections), this.props.editable && this.prepareEditor(t, n, r, i);for (var o = 0; o < 100; o += 1) {
            this.state.simulation.tick();
          }(0, h.onTick)(n, r, i), t.attr("viewBox", (0, l.getViewBox)(r.data())).call((0, h.d3PanZoom)(t)).on("dblclick.zoom", null);
        } }, { key: "componentDidMount", value: function value() {
          this.renderMap();
        } }, { key: "componentDidUpdate", value: function value() {
          (0, f.zoom)().transform((0, f.select)(this.refs.mountPoint), f.zoomIdentity), this.renderMap();
        } }, { key: "render", value: function value() {
          return c.default.createElement("div", null, c.default.createElement("svg", { className: "mindmap-svg", ref: "mountPoint" }));
        } }]), n;
    }(s.Component);n.default = y, y.defaultProps = { nodes: [], connections: [], editable: !1 }, y.propTypes = { nodes: s.PropTypes.array, connections: s.PropTypes.array, editable: s.PropTypes.bool };
  }, function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e = t[1] || "",
          r = t[3];if (!r) return e;if (n && "function" == typeof btoa) {
        var o = i(r);return [e].concat(r.sources.map(function (t) {
          return "/*# sourceURL=" + r.sourceRoot + t + " */";
        })).concat([o]).join("\n");
      }return [e].join("\n");
    }function i(t) {
      return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
    }t.exports = function (t) {
      var n = [];return n.toString = function () {
        return this.map(function (n) {
          var e = r(n, t);return n[2] ? "@media " + n[2] + "{" + e + "}" : e;
        }).join("");
      }, n.i = function (t, e) {
        "string" == typeof t && (t = [[null, t, ""]]);for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];"number" == typeof o && (r[o] = !0);
        }for (i = 0; i < t.length; i++) {
          var u = t[i];"number" == typeof u[0] && r[u[0]] || (e && !u[2] ? u[2] = e : e && (u[2] = "(" + u[2] + ") and (" + e + ")"), n.push(u));
        }
      }, n;
    };
  }, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var r = e(3),
        i = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r);n.default = i.default;
  }, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), n.d3PanZoom = n.d3Drag = n.onTick = n.d3Nodes = n.d3Connections = void 0;var r = e(0),
        i = e(2),
        o = function o(t, n, e) {
      return t.append("g").selectAll(e).data(n).enter().append(e);
    };n.d3Connections = function (t, n) {
      return o(t, n, "path").attr("class", "mindmap-connection");
    }, n.d3Nodes = function (t, n) {
      var e = t.append("g").selectAll("foreignObject").data(n).enter();return { nodes: e.append("foreignObject").attr("class", "mindmap-node").attr("width", function (t) {
          return t.width + 4;
        }).attr("height", function (t) {
          return t.height;
        }).html(function (t) {
          return t.html;
        }), subnodes: e.append("foreignObject").attr("class", "mindmap-subnodes").attr("width", function (t) {
          return t.nodesWidth + 4;
        }).attr("height", function (t) {
          return t.nodesHeight;
        }).html(function (t) {
          return t.nodesHTML;
        }) };
    }, n.onTick = function (t, n, e) {
      var r = function r(t) {
        return ["M", t.source.x, t.source.y, "Q", t.source.x + (t.curve.x || 0), t.source.y + (t.curve.y || 0), ",", t.target.x, t.target.y].join(" ");
      };t.attr("d", r), n.attr("x", function (t) {
        return t.x - t.width / 2;
      }).attr("y", function (t) {
        return t.y - t.height / 2;
      }), e.attr("x", function (t) {
        return t.x + t.width / 2;
      }).attr("y", function (t) {
        return t.y - t.nodesHeight / 2;
      });
    }, n.d3Drag = function (t, n, e) {
      var o = function o(n) {
        r.event.active || t.alphaTarget(.2).restart(), n.fx = n.x, n.fy = n.y;
      },
          u = function u(t) {
        t.fx = r.event.x, t.fy = r.event.y;
      },
          a = function a() {
        r.event.active || t.alphaTarget(0), n.attr("viewBox", (0, i.getViewBox)(e.data()));
      };return (0, r.drag)().on("start", o).on("drag", u).on("end", a);
    }, n.d3PanZoom = function (t) {
      return (0, r.zoom)().scaleExtent([.3, 5]).on("zoom", function () {
        return t.selectAll("svg > g").attr("transform", r.event.transform);
      });
    };
  }, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var r = e(1);n.default = function (t) {
      var n = 'href="' + t.url + '"',
          e = (0, r.categoryToIMG)(t.category);return t.url || (n = "", e = ""), '<a id="node-' + t.index + '" ' + n + ">" + (t.text || "") + " " + e + "</a>";
    };
  }, function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var r = e(1),
        i = function t() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = arguments[1],
          i = e || "";return !e && n.length > 0 && n[0].color && (i = 'style="border-left-color: ' + n[0].color + '"'), n.map(function (n) {
        var e = 'href="' + n.url + '"',
            o = (0, r.categoryToIMG)(n.category);return n.url || (e = "", o = ""), '<div class="mindmap-subnode-group" ' + i + ">\n      <a " + e + ">" + (n.text || "") + " " + o + "</a>\n      <div>" + t(n.nodes, i) + "</div>\n    </div>";
      }).join("");
    };n.default = i;
  }, function (t, n, e) {
    "use strict";
    t.exports = function (t) {
      var n = "undefined" != typeof window && window.location;if (!n) throw new Error("fixUrls requires window.location");if (!t || "string" != typeof t) return t;var e = n.protocol + "//" + n.host,
          r = e + n.pathname.replace(/\/[^\/]*$/, "/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, n) {
        var i = n.trim().replace(/^"(.*)"$/, function (t, n) {
          return n;
        }).replace(/^'(.*)'$/, function (t, n) {
          return n;
        });if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return t;var o;return o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? e + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")";
      });
    };
  }, function (t, n, e) {
    n = t.exports = e(4)(void 0), n.push([t.i, ".mindmap-svg{height:100vh;width:100%}.mindmap-svg:focus{outline:none}.mindmap-node>a{background:#f5f5f5;border-radius:10px;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);color:#212121;display:inline-block;font-family:Raleway;font-size:22px;margin:0 auto;padding:15px;text-align:center;text-decoration:none;transition:background-color .2s,color .2s ease-out}.mindmap-node>a[href]:hover{background-color:#f57c00;color:#fff;cursor:pointer}.mindmap-node--editable{cursor:all-scroll}.mindmap-node--editable>a{pointer-events:none}.mindmap-subnode-group{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-left:4px solid #9e9e9e;display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:15px;padding:5px}.mindmap-subnode-group a{color:#212121;font-family:Raleway;font-size:16px;padding:2px 5px}.mindmap-connection{fill:transparent;stroke:#9e9e9e;stroke-dasharray:10px 4px;stroke-width:3px}.mindmap-emoji{height:24px;vertical-align:bottom;width:24px}.reddit-emoji{border-radius:50%}", ""]);
  }, function (t, n, e) {
    function r(t, n) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e],
            i = d[r.id];if (i) {
          i.refs++;for (var o = 0; o < i.parts.length; o++) {
            i.parts[o](r.parts[o]);
          }for (; o < r.parts.length; o++) {
            i.parts.push(f(r.parts[o], n));
          }
        } else {
          for (var u = [], o = 0; o < r.parts.length; o++) {
            u.push(f(r.parts[o], n));
          }d[r.id] = { id: r.id, refs: 1, parts: u };
        }
      }
    }function i(t, n) {
      for (var e = [], r = {}, i = 0; i < t.length; i++) {
        var o = t[i],
            u = n.base ? o[0] + n.base : o[0],
            a = o[1],
            s = o[2],
            c = o[3],
            f = { css: a, media: s, sourceMap: c };r[u] ? r[u].parts.push(f) : e.push(r[u] = { id: u, parts: [f] });
      }return e;
    }function o(t, n) {
      var e = g(t.insertInto);if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r = _[_.length - 1];if ("top" === t.insertAt) r ? r.nextSibling ? e.insertBefore(n, r.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild), _.push(n);else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(n);
      }
    }function u(t) {
      t.parentNode.removeChild(t);var n = _.indexOf(t);n >= 0 && _.splice(n, 1);
    }function a(t) {
      var n = document.createElement("style");return t.attrs.type = "text/css", c(n, t.attrs), o(t, n), n;
    }function s(t) {
      var n = document.createElement("link");return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", c(n, t.attrs), o(t, n), n;
    }function c(t, n) {
      Object.keys(n).forEach(function (e) {
        t.setAttribute(e, n[e]);
      });
    }function f(t, n) {
      var e, r, i, o;if (n.transform && t.css) {
        if (!(o = n.transform(t.css))) return function () {};t.css = o;
      }if (n.singleton) {
        var c = m++;e = y || (y = a(n)), r = h.bind(null, e, c, !1), i = h.bind(null, e, c, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (e = s(n), r = p.bind(null, e, n), i = function i() {
        u(e), e.href && URL.revokeObjectURL(e.href);
      }) : (e = a(n), r = l.bind(null, e), i = function i() {
        u(e);
      });return r(t), function (n) {
        if (n) {
          if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;r(t = n);
        } else i();
      };
    }function h(t, n, e, r) {
      var i = e ? "" : r.css;if (t.styleSheet) t.styleSheet.cssText = x(n, i);else {
        var o = document.createTextNode(i),
            u = t.childNodes;u[n] && t.removeChild(u[n]), u.length ? t.insertBefore(o, u[n]) : t.appendChild(o);
      }
    }function l(t, n) {
      var e = n.css,
          r = n.media;if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = e;else {
        for (; t.firstChild;) {
          t.removeChild(t.firstChild);
        }t.appendChild(document.createTextNode(e));
      }
    }function p(t, n, e) {
      var r = e.css,
          i = e.sourceMap,
          o = void 0 === n.convertToAbsoluteUrls && i;(n.convertToAbsoluteUrls || o) && (r = w(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");var u = new Blob([r], { type: "text/css" }),
          a = t.href;t.href = URL.createObjectURL(u), a && URL.revokeObjectURL(a);
    }var d = {},
        v = function (t) {
      var n;return function () {
        return void 0 === n && (n = t.apply(this, arguments)), n;
      };
    }(function () {
      return window && document && document.all && !window.atob;
    }),
        g = function (t) {
      var n = {};return function (e) {
        return void 0 === n[e] && (n[e] = t.call(this, e)), n[e];
      };
    }(function (t) {
      return document.querySelector(t);
    }),
        y = null,
        m = 0,
        _ = [],
        w = e(9);t.exports = function (t, n) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");n = n || {}, n.attrs = "object" == _typeof(n.attrs) ? n.attrs : {}, void 0 === n.singleton && (n.singleton = v()), void 0 === n.insertInto && (n.insertInto = "head"), void 0 === n.insertAt && (n.insertAt = "bottom");var e = i(t, n);return r(e, n), function (t) {
        for (var o = [], u = 0; u < e.length; u++) {
          var a = e[u],
              s = d[a.id];s.refs--, o.push(s);
        }if (t) {
          r(i(t, n), n);
        }for (var u = 0; u < o.length; u++) {
          var s = o[u];if (0 === s.refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }delete d[s.id];
          }
        }
      };
    };var x = function () {
      var t = [];return function (n, e) {
        return t[n] = e, t.filter(Boolean).join("\n");
      };
    }();
  }, function (t, n, e) {
    var r = e(10);"string" == typeof r && (r = [[t.i, r, ""]]);var i = {};i.transform = void 0;e(11)(r, i);r.locals && (t.exports = r.locals);
  }, function (n, e) {
    n.exports = t;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(90)(module)))

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REJECTED = exports.FULFILLED = exports.PENDING = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.default = promiseMiddleware;

var _isPromise = __webpack_require__(87);

var _isPromise2 = _interopRequireDefault(_isPromise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PENDING = exports.PENDING = 'PENDING';
var FULFILLED = exports.FULFILLED = 'FULFILLED';
var REJECTED = exports.REJECTED = 'REJECTED';

var defaultTypes = [PENDING, FULFILLED, REJECTED];

/**
 * @function promiseMiddleware
 * @description
 * @returns {function} thunk
 */
function promiseMiddleware() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypes;

  return function (ref) {
    var dispatch = ref.dispatch;

    return function (next) {
      return function (action) {
        if (action.payload) {
          if (!(0, _isPromise2.default)(action.payload) && !(0, _isPromise2.default)(action.payload.promise)) {
            return next(action);
          }
        } else {
          return next(action);
        }

        // Deconstruct the properties of the original action object to constants
        var type = action.type,
            payload = action.payload,
            meta = action.meta;

        // Assign values for promise type suffixes

        var _promiseTypeSuffixes = _slicedToArray(promiseTypeSuffixes, 3),
            _PENDING = _promiseTypeSuffixes[0],
            _FULFILLED = _promiseTypeSuffixes[1],
            _REJECTED = _promiseTypeSuffixes[2];

        /**
         * @function getAction
         * @description Utility function for creating a rejected or fulfilled
         * flux standard action object.
         * @param {boolean} Is the action rejected?
         * @returns {object} action
         */

        var getAction = function getAction(newPayload, isRejected) {
          return _extends({
            type: type + '_' + (isRejected ? _REJECTED : _FULFILLED)
          }, newPayload === null || typeof newPayload === 'undefined' ? {} : {
            payload: newPayload
          }, meta !== undefined ? { meta: meta } : {}, isRejected ? {
            error: true
          } : {});
        };

        /**
         * Assign values for promise and data variables. In the case the payload
         * is an object with a `promise` and `data` property, the values of those
         * properties will be used. In the case the payload is a promise, the
         * value of the payload will be used and data will be null.
         */
        var promise = void 0;
        var data = void 0;

        if (!(0, _isPromise2.default)(action.payload) && _typeof(action.payload) === 'object') {
          promise = payload.promise;
          data = payload.data;
        } else {
          promise = payload;
          data = undefined;
        }

        /**
         * First, dispatch the pending action. This flux standard action object
         * describes the pending state of a promise and will include any data
         * (for optimistic updates) and/or meta from the original action.
         */
        next(_extends({
          type: type + '_' + _PENDING
        }, data !== undefined ? { payload: data } : {}, meta !== undefined ? { meta: meta } : {}));

        /*
         * @function transformFulfill
         * @description Transforms a fulfilled value into a success object.
         * @returns {object}
         */
        var transformFulfill = function transformFulfill() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var resolvedAction = getAction(value, false);
          return { value: value, action: resolvedAction };
        };

        /*
         * @function handleReject
         * @description Dispatch the rejected action.
         * @returns {void}
         */
        var handleReject = function handleReject(reason) {
          var rejectedAction = getAction(reason, true);
          dispatch(rejectedAction);
        };

        /*
         * @function handleFulfill
         * @description Dispatch the fulfilled action.
         * @param successValue The value from transformFulfill
         * @returns {void}
         */
        var handleFulfill = function handleFulfill(successValue) {
          dispatch(successValue.action);
        };

        /**
         * Second, dispatch a rejected or fulfilled action. This flux standard
         * action object will describe the resolved state of the promise. In
         * the case of a rejected promise, it will include an `error` property.
         *
         * In order to allow proper chaining of actions using `then`, a new
         * promise is constructed and returned. This promise will resolve
         * with two properties: (1) the value (if fulfilled) or reason
         * (if rejected) and (2) the flux standard action.
         *
         * Rejected object:
         * {
         *   reason: ...
         *   action: {
         *     error: true,
         *     type: 'ACTION_REJECTED',
         *     payload: ...
         *   }
         * }
         *
         * Fulfilled object:
         * {
         *   value: ...
         *   action: {
         *     type: 'ACTION_FULFILLED',
         *     payload: ...
         *   }
         * }
         */
        var promiseValue = promise.then(transformFulfill);
        var sideEffects = promiseValue.then(handleFulfill, handleReject);
        return sideEffects.then(function () {
          return promiseValue;
        }, function () {
          return promiseValue;
        });
      };
    };
  };
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.default = isPromise;
function isPromise(value) {
  if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    return value && typeof value.then === 'function';
  }

  return false;
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

window.eve = __webpack_require__(67

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
);var mina = function (eve) {
    var animations = {},
        requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        setTimeout(callback, 16);
    },
        isArray = Array.isArray || function (a) {
        return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
    },
        idgen = 0,
        idprefix = "M" + (+new Date()).toString(36),
        ID = function ID() {
        return idprefix + (idgen++).toString(36);
    },
        diff = function diff(a, b, A, B) {
        if (isArray(a)) {
            res = [];
            for (var i = 0, ii = a.length; i < ii; i++) {
                res[i] = diff(a[i], b, A[i], B);
            }
            return res;
        }
        var dif = (A - a) / (B - b);
        return function (bb) {
            return a + dif * (bb - b);
        };
    },
        timer = Date.now || function () {
        return +new Date();
    },
        sta = function sta(val) {
        var a = this;
        if (val == null) {
            return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
    },
        speed = function speed(val) {
        var a = this;
        if (val == null) {
            return a.spd;
        }
        a.spd = val;
    },
        duration = function duration(val) {
        var a = this;
        if (val == null) {
            return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
    },
        stopit = function stopit() {
        var a = this;
        delete animations[a.id];
        a.update();
        eve("mina.stop." + a.id, a);
    },
        pause = function pause() {
        var a = this;
        if (a.pdif) {
            return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
    },
        resume = function resume() {
        var a = this;
        if (!a.pdif) {
            return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
    },
        update = function update() {
        var a = this,
            res;
        if (isArray(a.start)) {
            res = [];
            for (var j = 0, jj = a.start.length; j < jj; j++) {
                res[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
            }
        } else {
            res = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res);
    },
        frame = function frame() {
        var len = 0;
        for (var i in animations) {
            if (animations.hasOwnProperty(i)) {
                var a = animations[i],
                    b = a.get(),
                    res;
                len++;
                a.s = (b - a.b) / (a.dur / a.spd);
                if (a.s >= 1) {
                    delete animations[i];
                    a.s = 1;
                    len--;
                    (function (a) {
                        setTimeout(function () {
                            eve("mina.finish." + a.id, a);
                        });
                    })(a);
                }
                a.update();
            }
        }len && requestAnimFrame(frame);
    },

    /*\
     * mina
     [ method ]
     **
     * Generic animation of numbers
     **
     - a (number) start _slave_ number
     - A (number) end _slave_ number
     - b (number) start _master_ number (start time in general case)
     - B (number) end _master_ number (end time in gereal case)
     - get (function) getter of _master_ number (see @mina.time)
     - set (function) setter of _slave_ number
     - easing (function) #optional easing function, default is @mina.linear
     = (object) animation descriptor
     o {
     o         id (string) animation id,
     o         start (number) start _slave_ number,
     o         end (number) end _slave_ number,
     o         b (number) start _master_ number,
     o         s (number) animation status (0..1),
     o         dur (number) animation duration,
     o         spd (number) animation speed,
     o         get (function) getter of _master_ number (see @mina.time),
     o         set (function) setter of _slave_ number,
     o         easing (function) easing function, default is @mina.linear,
     o         status (function) status getter/setter,
     o         speed (function) speed getter/setter,
     o         duration (function) duration getter/setter,
     o         stop (function) animation stopper
     o         pause (function) pauses the animation
     o         resume (function) resumes the animation
     o         update (function) calles setter with the right value of the animation
     o }
    \*/
    mina = function mina(a, A, b, B, get, set, easing) {
        var anim = {
            id: ID(),
            start: a,
            end: A,
            b: b,
            s: 0,
            dur: B - b,
            spd: 1,
            get: get,
            set: set,
            easing: easing || mina.linear,
            status: sta,
            speed: speed,
            duration: duration,
            stop: stopit,
            pause: pause,
            resume: resume,
            update: update
        };
        animations[anim.id] = anim;
        var len = 0,
            i;
        for (i in animations) {
            if (animations.hasOwnProperty(i)) {
                len++;
                if (len == 2) {
                    break;
                }
            }
        }len == 1 && requestAnimFrame(frame);
        return anim;
    };
    /*\
     * mina.time
     [ method ]
     **
     * Returns the current time. Equivalent to:
     | function () {
     |     return (new Date).getTime();
     | }
    \*/
    mina.time = timer;
    /*\
     * mina.getById
     [ method ]
     **
     * Returns an animation by its id
     - id (string) animation's id
     = (object) See @mina
    \*/
    mina.getById = function (id) {
        return animations[id] || null;
    };

    /*\
     * mina.linear
     [ method ]
     **
     * Default linear easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.linear = function (n) {
        return n;
    };
    /*\
     * mina.easeout
     [ method ]
     **
     * Easeout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeout = function (n) {
        return Math.pow(n, 1.7);
    };
    /*\
     * mina.easein
     [ method ]
     **
     * Easein easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easein = function (n) {
        return Math.pow(n, .48);
    };
    /*\
     * mina.easeinout
     [ method ]
     **
     * Easeinout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.easeinout = function (n) {
        if (n == 1) {
            return 1;
        }
        if (n == 0) {
            return 0;
        }
        var q = .48 - n / 1.04,
            Q = Math.sqrt(.1734 + q * q),
            x = Q - q,
            X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
            y = -Q - q,
            Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
            t = X + Y + .5;
        return (1 - t) * 3 * t * t + t * t * t;
    };
    /*\
     * mina.backin
     [ method ]
     **
     * Backin easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backin = function (n) {
        if (n == 1) {
            return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
    };
    /*\
     * mina.backout
     [ method ]
     **
     * Backout easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.backout = function (n) {
        if (n == 0) {
            return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
    };
    /*\
     * mina.elastic
     [ method ]
     **
     * Elastic easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.elastic = function (n) {
        if (n == !!n) {
            return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
    };
    /*\
     * mina.bounce
     [ method ]
     **
     * Bounce easing
     - n (number) input 0..1
     = (number) output 0..1
    \*/
    mina.bounce = function (n) {
        var s = 7.5625,
            p = 2.75,
            l;
        if (n < 1 / p) {
            l = s * n * n;
        } else {
            if (n < 2 / p) {
                n -= 1.5 / p;
                l = s * n * n + .75;
            } else {
                if (n < 2.5 / p) {
                    n -= 2.25 / p;
                    l = s * n * n + .9375;
                } else {
                    n -= 2.625 / p;
                    l = s * n * n + .984375;
                }
            }
        }
        return l;
    };
    window.mina = mina;
    return mina;
}(typeof eve == "undefined" ? function () {} : eve);
// Copyright (c) 2013 - 2015 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Snap = function (root) {
    Snap.version = "0.4.0";
    /*\
     * Snap
     [ method ]
     **
     * Creates a drawing surface or wraps existing SVG element.
     **
     - width (number|string) width of surface
     - height (number|string) height of surface
     * or
     - DOM (SVGElement) element to be wrapped into Snap structure
     * or
     - array (array) array of elements (will return set of elements)
     * or
     - query (string) CSS query selector
     = (object) @Element
    \*/
    function Snap(w, h) {
        if (w) {
            if (w.nodeType) {
                return wrap(w);
            }
            if (is(w, "array") && Snap.set) {
                return Snap.set.apply(Snap, w);
            }
            if (w instanceof Element) {
                return w;
            }
            if (h == null) {
                w = glob.doc.querySelector(String(w));
                return wrap(w);
            }
        }
        w = w == null ? "100%" : w;
        h = h == null ? "100%" : h;
        return new Paper(w, h);
    }
    Snap.toString = function () {
        return "Snap v" + this.version;
    };
    Snap._ = {};
    var glob = {
        win: root.window,
        doc: root.window.document
    };
    Snap._.glob = glob;
    var has = "hasOwnProperty",
        Str = String,
        toFloat = parseFloat,
        toInt = parseInt,
        math = Math,
        mmax = math.max,
        mmin = math.min,
        abs = math.abs,
        pow = math.pow,
        PI = math.PI,
        round = math.round,
        E = "",
        S = " ",
        objectToString = Object.prototype.toString,
        ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        reURLValue = /^url\(#?([^)]+)\)$/,
        separator = Snap._.separator = /[,\s]+/,
        whitespace = /[\s]/g,
        commaSpaces = /[\s]*,[\s]*/,
        hsrg = { hs: 1, rg: 1 },
        pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
        tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/ig,
        idgen = 0,
        idprefix = "S" + (+new Date()).toString(36),
        ID = function ID(el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
    },
        xlink = "http://www.w3.org/1999/xlink",
        xmlns = "http://www.w3.org/2000/svg",
        hub = {},
        URL = Snap.url = function (url) {
        return "url('#" + url + "')";
    };

    function $(el, attr) {
        if (attr) {
            if (el == "#text") {
                el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
            }
            if (el == "#comment") {
                el = glob.doc.createComment(attr.text || attr["#text"] || "");
            }
            if (typeof el == "string") {
                el = $(el);
            }
            if (typeof attr == "string") {
                if (el.nodeType == 1) {
                    if (attr.substring(0, 6) == "xlink:") {
                        return el.getAttributeNS(xlink, attr.substring(6));
                    }
                    if (attr.substring(0, 4) == "xml:") {
                        return el.getAttributeNS(xmlns, attr.substring(4));
                    }
                    return el.getAttribute(attr);
                } else if (attr == "text") {
                    return el.nodeValue;
                } else {
                    return null;
                }
            }
            if (el.nodeType == 1) {
                for (var key in attr) {
                    if (attr[has](key)) {
                        var val = Str(attr[key]);
                        if (val) {
                            if (key.substring(0, 6) == "xlink:") {
                                el.setAttributeNS(xlink, key.substring(6), val);
                            } else if (key.substring(0, 4) == "xml:") {
                                el.setAttributeNS(xmlns, key.substring(4), val);
                            } else {
                                el.setAttribute(key, val);
                            }
                        } else {
                            el.removeAttribute(key);
                        }
                    }
                }
            } else if ("text" in attr) {
                el.nodeValue = attr.text;
            }
        } else {
            el = glob.doc.createElementNS(xmlns, el);
        }
        return el;
    }
    Snap._.$ = $;
    Snap._.id = ID;
    function getAttrs(el) {
        var attrs = el.attributes,
            name,
            out = {};
        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].namespaceURI == xlink) {
                name = "xlink:";
            } else {
                name = "";
            }
            name += attrs[i].name;
            out[name] = attrs[i].textContent;
        }
        return out;
    }
    function is(o, type) {
        type = Str.prototype.toLowerCase.call(type);
        if (type == "finite") {
            return isFinite(o);
        }
        if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) {
            return true;
        }
        return type == "null" && o === null || type == (typeof o === "undefined" ? "undefined" : _typeof(o)) && o !== null || type == "object" && o === Object(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
    }
    /*\
     * Snap.format
     [ method ]
     **
     * Replaces construction of type `{<name>}` to the corresponding argument
     **
     - token (string) string to format
     - json (object) object which properties are used as a replacement
     = (string) formatted string
     > Usage
     | // this draws a rectangular shape equivalent to "M10,20h40v50h-40z"
     | paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
     |     x: 10,
     |     y: 20,
     |     dim: {
     |         width: 40,
     |         height: 50,
     |         "negative width": -40
     |     }
     | }));
    \*/
    Snap.format = function () {
        var tokenRegex = /\{([^\}]+)\}/g,
            objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            // matches .xxxxx or ["xxxxx"] to run over object properties
        replacer = function replacer(all, key, obj) {
            var res = obj;
            key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
                name = name || quotedName;
                if (res) {
                    if (name in res) {
                        res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                }
            });
            res = (res == null || res == obj ? all : res) + "";
            return res;
        };
        return function (str, obj) {
            return Str(str).replace(tokenRegex, function (all, key) {
                return replacer(all, key, obj);
            });
        };
    }();
    function clone(obj) {
        if (typeof obj == "function" || Object(obj) !== obj) {
            return obj;
        }
        var res = new obj.constructor();
        for (var key in obj) {
            if (obj[has](key)) {
                res[key] = clone(obj[key]);
            }
        }return res;
    }
    Snap._.clone = clone;
    function repush(array, item) {
        for (var i = 0, ii = array.length; i < ii; i++) {
            if (array[i] === item) {
                return array.push(array.splice(i, 1)[0]);
            }
        }
    }
    function cacher(f, scope, postprocessor) {
        function newf() {
            var arg = Array.prototype.slice.call(arguments, 0),
                args = arg.join("\u2400"),
                cache = newf.cache = newf.cache || {},
                count = newf.count = newf.count || [];
            if (cache[has](args)) {
                repush(count, args);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            count.length >= 1e3 && delete cache[count.shift()];
            count.push(args);
            cache[args] = f.apply(scope, arg);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        return newf;
    }
    Snap._.cacher = cacher;
    function angle(x1, y1, x2, y2, x3, y3) {
        if (x3 == null) {
            var x = x1 - x2,
                y = y1 - y2;
            if (!x && !y) {
                return 0;
            }
            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
        } else {
            return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
        }
    }
    function rad(deg) {
        return deg % 360 * PI / 180;
    }
    function deg(rad) {
        return rad * 180 / PI % 360;
    }
    function x_y() {
        return this.x + S + this.y;
    }
    function x_y_w_h() {
        return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
    }

    /*\
     * Snap.rad
     [ method ]
     **
     * Transform angle to radians
     - deg (number) angle in degrees
     = (number) angle in radians
    \*/
    Snap.rad = rad;
    /*\
     * Snap.deg
     [ method ]
     **
     * Transform angle to degrees
     - rad (number) angle in radians
     = (number) angle in degrees
    \*/
    Snap.deg = deg;
    /*\
     * Snap.sin
     [ method ]
     **
     * Equivalent to `Math.sin()` only works with degrees, not radians.
     - angle (number) angle in degrees
     = (number) sin
    \*/
    Snap.sin = function (angle) {
        return math.sin(Snap.rad(angle));
    };
    /*\
     * Snap.tan
     [ method ]
     **
     * Equivalent to `Math.tan()` only works with degrees, not radians.
     - angle (number) angle in degrees
     = (number) tan
    \*/
    Snap.tan = function (angle) {
        return math.tan(Snap.rad(angle));
    };
    /*\
     * Snap.cos
     [ method ]
     **
     * Equivalent to `Math.cos()` only works with degrees, not radians.
     - angle (number) angle in degrees
     = (number) cos
    \*/
    Snap.cos = function (angle) {
        return math.cos(Snap.rad(angle));
    };
    /*\
     * Snap.asin
     [ method ]
     **
     * Equivalent to `Math.asin()` only works with degrees, not radians.
     - num (number) value
     = (number) asin in degrees
    \*/
    Snap.asin = function (num) {
        return Snap.deg(math.asin(num));
    };
    /*\
     * Snap.acos
     [ method ]
     **
     * Equivalent to `Math.acos()` only works with degrees, not radians.
     - num (number) value
     = (number) acos in degrees
    \*/
    Snap.acos = function (num) {
        return Snap.deg(math.acos(num));
    };
    /*\
     * Snap.atan
     [ method ]
     **
     * Equivalent to `Math.atan()` only works with degrees, not radians.
     - num (number) value
     = (number) atan in degrees
    \*/
    Snap.atan = function (num) {
        return Snap.deg(math.atan(num));
    };
    /*\
     * Snap.atan2
     [ method ]
     **
     * Equivalent to `Math.atan2()` only works with degrees, not radians.
     - num (number) value
     = (number) atan2 in degrees
    \*/
    Snap.atan2 = function (num) {
        return Snap.deg(math.atan2(num));
    };
    /*\
     * Snap.angle
     [ method ]
     **
     * Returns an angle between two or three points
     > Parameters
     - x1 (number) x coord of first point
     - y1 (number) y coord of first point
     - x2 (number) x coord of second point
     - y2 (number) y coord of second point
     - x3 (number) #optional x coord of third point
     - y3 (number) #optional y coord of third point
     = (number) angle in degrees
    \*/
    Snap.angle = angle;
    /*\
     * Snap.len
     [ method ]
     **
     * Returns distance between two points
     > Parameters
     - x1 (number) x coord of first point
     - y1 (number) y coord of first point
     - x2 (number) x coord of second point
     - y2 (number) y coord of second point
     = (number) distance
    \*/
    Snap.len = function (x1, y1, x2, y2) {
        return Math.sqrt(Snap.len2(x1, y1, x2, y2));
    };
    /*\
     * Snap.len2
     [ method ]
     **
     * Returns squared distance between two points
     > Parameters
     - x1 (number) x coord of first point
     - y1 (number) y coord of first point
     - x2 (number) x coord of second point
     - y2 (number) y coord of second point
     = (number) distance
    \*/
    Snap.len2 = function (x1, y1, x2, y2) {
        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    };
    /*\
     * Snap.closestPoint
     [ method ]
     **
     * Returns closest point to a given one on a given path.
     > Parameters
     - path (Element) path element
     - x (number) x coord of a point
     - y (number) y coord of a point
     = (object) in format
     {
        x (number) x coord of the point on the path
        y (number) y coord of the point on the path
        length (number) length of the path to the point
        distance (number) distance from the given point to the path
     }
    \*/
    // Copied from http://bl.ocks.org/mbostock/8027637
    Snap.closestPoint = function (path, x, y) {
        function distance2(p) {
            var dx = p.x - x,
                dy = p.y - y;
            return dx * dx + dy * dy;
        }
        var pathNode = path.node,
            pathLength = pathNode.getTotalLength(),
            precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
            best,
            bestLength,
            bestDistance = Infinity;

        // linear scan for coarse approximation
        for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
            if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
                best = scan, bestLength = scanLength, bestDistance = scanDistance;
            }
        }

        // binary search for precise estimate
        precision *= .5;
        while (precision > .5) {
            var before, after, beforeLength, afterLength, beforeDistance, afterDistance;
            if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
                best = before, bestLength = beforeLength, bestDistance = beforeDistance;
            } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
                best = after, bestLength = afterLength, bestDistance = afterDistance;
            } else {
                precision *= .5;
            }
        }

        best = {
            x: best.x,
            y: best.y,
            length: bestLength,
            distance: Math.sqrt(bestDistance)
        };
        return best;
    };
    /*\
     * Snap.is
     [ method ]
     **
     * Handy replacement for the `typeof` operator
     - o (…) any object or primitive
     - type (string) name of the type, e.g., `string`, `function`, `number`, etc.
     = (boolean) `true` if given value is of given type
    \*/
    Snap.is = is;
    /*\
     * Snap.snapTo
     [ method ]
     **
     * Snaps given value to given grid
     - values (array|number) given array of values or step of the grid
     - value (number) value to adjust
     - tolerance (number) #optional maximum distance to the target value that would trigger the snap. Default is `10`.
     = (number) adjusted value
    \*/
    Snap.snapTo = function (values, value, tolerance) {
        tolerance = is(tolerance, "finite") ? tolerance : 10;
        if (is(values, "array")) {
            var i = values.length;
            while (i--) {
                if (abs(values[i] - value) <= tolerance) {
                    return values[i];
                }
            }
        } else {
            values = +values;
            var rem = value % values;
            if (rem < tolerance) {
                return value - rem;
            }
            if (rem > values - tolerance) {
                return value - rem + values;
            }
        }
        return value;
    };
    // Colour
    /*\
     * Snap.getRGB
     [ method ]
     **
     * Parses color string as RGB object
     - color (string) color string in one of the following formats:
     # <ul>
     #     <li>Color name (<code>red</code>, <code>green</code>, <code>cornflowerblue</code>, etc)</li>
     #     <li>#••• — shortened HTML color: (<code>#000</code>, <code>#fc0</code>, etc.)</li>
     #     <li>#•••••• — full length HTML color: (<code>#000000</code>, <code>#bd2300</code>)</li>
     #     <li>rgb(•••, •••, •••) — red, green and blue channels values: (<code>rgb(200,&nbsp;100,&nbsp;0)</code>)</li>
     #     <li>rgba(•••, •••, •••, •••) — also with opacity</li>
     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>)</li>
     #     <li>rgba(•••%, •••%, •••%, •••%) — also with opacity</li>
     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>)</li>
     #     <li>hsba(•••, •••, •••, •••) — also with opacity</li>
     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
     #     <li>hsba(•••%, •••%, •••%, •••%) — also with opacity</li>
     #     <li>hsl(•••, •••, •••) — hue, saturation and luminosity values: (<code>hsb(0.5,&nbsp;0.25,&nbsp;0.5)</code>)</li>
     #     <li>hsla(•••, •••, •••, •••) — also with opacity</li>
     #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
     #     <li>hsla(•••%, •••%, •••%, •••%) — also with opacity</li>
     # </ul>
     * Note that `%` can be used any time: `rgb(20%, 255, 50%)`.
     = (object) RGB object in the following format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••,
     o     error (boolean) true if string can't be parsed
     o }
    \*/
    Snap.getRGB = cacher(function (colour) {
        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
            return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
        }
        if (colour == "none") {
            return { r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString };
        }
        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = _toHex(colour));
        if (!colour) {
            return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
        }
        var res,
            red,
            green,
            blue,
            opacity,
            t,
            values,
            rgb = colour.match(colourRegExp);
        if (rgb) {
            if (rgb[2]) {
                blue = toInt(rgb[2].substring(5), 16);
                green = toInt(rgb[2].substring(3, 5), 16);
                red = toInt(rgb[2].substring(1, 3), 16);
            }
            if (rgb[3]) {
                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
                green = toInt((t = rgb[3].charAt(2)) + t, 16);
                red = toInt((t = rgb[3].charAt(1)) + t, 16);
            }
            if (rgb[4]) {
                values = rgb[4].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red *= 2.55);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green *= 2.55);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue *= 2.55);
                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            }
            if (rgb[5]) {
                values = rgb[5].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red /= 100);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green /= 100);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue /= 100);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return Snap.hsb2rgb(red, green, blue, opacity);
            }
            if (rgb[6]) {
                values = rgb[6].split(commaSpaces);
                red = toFloat(values[0]);
                values[0].slice(-1) == "%" && (red /= 100);
                green = toFloat(values[1]);
                values[1].slice(-1) == "%" && (green /= 100);
                blue = toFloat(values[2]);
                values[2].slice(-1) == "%" && (blue /= 100);
                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
                return Snap.hsl2rgb(red, green, blue, opacity);
            }
            red = mmin(math.round(red), 255);
            green = mmin(math.round(green), 255);
            blue = mmin(math.round(blue), 255);
            opacity = mmin(mmax(opacity, 0), 1);
            rgb = { r: red, g: green, b: blue, toString: rgbtoString };
            rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
            rgb.opacity = is(opacity, "finite") ? opacity : 1;
            return rgb;
        }
        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
    }, Snap);
    /*\
     * Snap.hsb
     [ method ]
     **
     * Converts HSB values to a hex representation of the color
     - h (number) hue
     - s (number) saturation
     - b (number) value or brightness
     = (string) hex representation of the color
    \*/
    Snap.hsb = cacher(function (h, s, b) {
        return Snap.hsb2rgb(h, s, b).hex;
    });
    /*\
     * Snap.hsl
     [ method ]
     **
     * Converts HSL values to a hex representation of the color
     - h (number) hue
     - s (number) saturation
     - l (number) luminosity
     = (string) hex representation of the color
    \*/
    Snap.hsl = cacher(function (h, s, l) {
        return Snap.hsl2rgb(h, s, l).hex;
    });
    /*\
     * Snap.rgb
     [ method ]
     **
     * Converts RGB values to a hex representation of the color
     - r (number) red
     - g (number) green
     - b (number) blue
     = (string) hex representation of the color
    \*/
    Snap.rgb = cacher(function (r, g, b, o) {
        if (is(o, "finite")) {
            var round = math.round;
            return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
        }
        return "#" + (16777216 | b | g << 8 | r << 16).toString(16).slice(1);
    });
    var _toHex = function toHex(color) {
        var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
            red = "rgb(255, 0, 0)";
        _toHex = cacher(function (color) {
            if (color.toLowerCase() == "red") {
                return red;
            }
            i.style.color = red;
            i.style.color = color;
            var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
            return out == red ? null : out;
        });
        return _toHex(color);
    },
        hsbtoString = function hsbtoString() {
        return "hsb(" + [this.h, this.s, this.b] + ")";
    },
        hsltoString = function hsltoString() {
        return "hsl(" + [this.h, this.s, this.l] + ")";
    },
        rgbtoString = function rgbtoString() {
        return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
    },
        prepareRGB = function prepareRGB(r, g, b) {
        if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
            b = r.b;
            g = r.g;
            r = r.r;
        }
        if (g == null && is(r, string)) {
            var clr = Snap.getRGB(r);
            r = clr.r;
            g = clr.g;
            b = clr.b;
        }
        if (r > 1 || g > 1 || b > 1) {
            r /= 255;
            g /= 255;
            b /= 255;
        }

        return [r, g, b];
    },
        packageRGB = function packageRGB(r, g, b, o) {
        r = math.round(r * 255);
        g = math.round(g * 255);
        b = math.round(b * 255);
        var rgb = {
            r: r,
            g: g,
            b: b,
            opacity: is(o, "finite") ? o : 1,
            hex: Snap.rgb(r, g, b),
            toString: rgbtoString
        };
        is(o, "finite") && (rgb.opacity = o);
        return rgb;
    };
    /*\
     * Snap.color
     [ method ]
     **
     * Parses the color string and returns an object featuring the color's component values
     - clr (string) color string in one of the supported formats (see @Snap.getRGB)
     = (object) Combined RGB/HSB object in the following format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••,
     o     error (boolean) `true` if string can't be parsed,
     o     h (number) hue,
     o     s (number) saturation,
     o     v (number) value (brightness),
     o     l (number) lightness
     o }
    \*/
    Snap.color = function (clr) {
        var rgb;
        if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
            rgb = Snap.hsb2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.opacity = 1;
            clr.hex = rgb.hex;
        } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
            rgb = Snap.hsl2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.opacity = 1;
            clr.hex = rgb.hex;
        } else {
            if (is(clr, "string")) {
                clr = Snap.getRGB(clr);
            }
            if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
                rgb = Snap.rgb2hsl(clr);
                clr.h = rgb.h;
                clr.s = rgb.s;
                clr.l = rgb.l;
                rgb = Snap.rgb2hsb(clr);
                clr.v = rgb.b;
            } else {
                clr = { hex: "none" };
                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
                clr.error = 1;
            }
        }
        clr.toString = rgbtoString;
        return clr;
    };
    /*\
     * Snap.hsb2rgb
     [ method ]
     **
     * Converts HSB values to an RGB object
     - h (number) hue
     - s (number) saturation
     - v (number) value or brightness
     = (object) RGB object in the following format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••
     o }
    \*/
    Snap.hsb2rgb = function (h, s, v, o) {
        if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
            v = h.b;
            s = h.s;
            o = h.o;
            h = h.h;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = v * s;
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = v - C;

        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
    };
    /*\
     * Snap.hsl2rgb
     [ method ]
     **
     * Converts HSL values to an RGB object
     - h (number) hue
     - s (number) saturation
     - l (number) luminosity
     = (object) RGB object in the following format:
     o {
     o     r (number) red,
     o     g (number) green,
     o     b (number) blue,
     o     hex (string) color in HTML/CSS format: #••••••
     o }
    \*/
    Snap.hsl2rgb = function (h, s, l, o) {
        if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
            l = h.l;
            s = h.s;
            h = h.h;
        }
        if (h > 1 || s > 1 || l > 1) {
            h /= 360;
            s /= 100;
            l /= 100;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = 2 * s * (l < .5 ? l : 1 - l);
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = l - C / 2;

        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
    };
    /*\
     * Snap.rgb2hsb
     [ method ]
     **
     * Converts RGB values to an HSB object
     - r (number) red
     - g (number) green
     - b (number) blue
     = (object) HSB object in the following format:
     o {
     o     h (number) hue,
     o     s (number) saturation,
     o     b (number) brightness
     o }
    \*/
    Snap.rgb2hsb = function (r, g, b) {
        b = prepareRGB(r, g, b);
        r = b[0];
        g = b[1];
        b = b[2];

        var H, S, V, C;
        V = mmax(r, g, b);
        C = V - mmin(r, g, b);
        H = C == 0 ? null : V == r ? (g - b) / C : V == g ? (b - r) / C + 2 : (r - g) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        S = C == 0 ? 0 : C / V;
        return { h: H, s: S, b: V, toString: hsbtoString };
    };
    /*\
     * Snap.rgb2hsl
     [ method ]
     **
     * Converts RGB values to an HSL object
     - r (number) red
     - g (number) green
     - b (number) blue
     = (object) HSL object in the following format:
     o {
     o     h (number) hue,
     o     s (number) saturation,
     o     l (number) luminosity
     o }
    \*/
    Snap.rgb2hsl = function (r, g, b) {
        b = prepareRGB(r, g, b);
        r = b[0];
        g = b[1];
        b = b[2];

        var H, S, L, M, m, C;
        M = mmax(r, g, b);
        m = mmin(r, g, b);
        C = M - m;
        H = C == 0 ? null : M == r ? (g - b) / C : M == g ? (b - r) / C + 2 : (r - g) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        L = (M + m) / 2;
        S = C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L);
        return { h: H, s: S, l: L, toString: hsltoString };
    };

    // Transformations
    /*\
     * Snap.parsePathString
     [ method ]
     **
     * Utility method
     **
     * Parses given path string into an array of arrays of path segments
     - pathString (string|array) path string or array of segments (in the last case it is returned straight away)
     = (array) array of segments
    \*/
    Snap.parsePathString = function (pathString) {
        if (!pathString) {
            return null;
        }
        var pth = Snap.path(pathString);
        if (pth.arr) {
            return Snap.path.clone(pth.arr);
        }

        var paramCounts = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
            data = [];
        if (is(pathString, "array") && is(pathString[0], "array")) {
            // rough assumption
            data = Snap.path.clone(pathString);
        }
        if (!data.length) {
            Str(pathString).replace(pathCommand, function (a, b, c) {
                var params = [],
                    name = b.toLowerCase();
                c.replace(pathValues, function (a, b) {
                    b && params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([b].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "o" && params.length == 1) {
                    data.push([b, params[0]]);
                }
                if (name == "r") {
                    data.push([b].concat(params));
                } else while (params.length >= paramCounts[name]) {
                    data.push([b].concat(params.splice(0, paramCounts[name])));
                    if (!paramCounts[name]) {
                        break;
                    }
                }
            });
        }
        data.toString = Snap.path.toString;
        pth.arr = Snap.path.clone(data);
        return data;
    };
    /*\
     * Snap.parseTransformString
     [ method ]
     **
     * Utility method
     **
     * Parses given transform string into an array of transformations
     - TString (string|array) transform string or array of transformations (in the last case it is returned straight away)
     = (array) array of transformations
    \*/
    var parseTransformString = Snap.parseTransformString = function (TString) {
        if (!TString) {
            return null;
        }
        var paramCounts = { r: 3, s: 4, t: 2, m: 6 },
            data = [];
        if (is(TString, "array") && is(TString[0], "array")) {
            // rough assumption
            data = Snap.path.clone(TString);
        }
        if (!data.length) {
            Str(TString).replace(tCommand, function (a, b, c) {
                var params = [],
                    name = b.toLowerCase();
                c.replace(pathValues, function (a, b) {
                    b && params.push(+b);
                });
                data.push([b].concat(params));
            });
        }
        data.toString = Snap.path.toString;
        return data;
    };
    function svgTransform2string(tstr) {
        var res = [];
        tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (all, name, params) {
            params = params.split(/\s*,\s*|\s+/);
            if (name == "rotate" && params.length == 1) {
                params.push(0, 0);
            }
            if (name == "scale") {
                if (params.length > 2) {
                    params = params.slice(0, 2);
                } else if (params.length == 2) {
                    params.push(0, 0);
                }
                if (params.length == 1) {
                    params.push(params[0], 0, 0);
                }
            }
            if (name == "skewX") {
                res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
            } else if (name == "skewY") {
                res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
            } else {
                res.push([name.charAt(0)].concat(params));
            }
            return all;
        });
        return res;
    }
    Snap._.svgTransform2string = svgTransform2string;
    Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
    function transform2matrix(tstr, bbox) {
        var tdata = parseTransformString(tstr),
            m = new Snap.Matrix();
        if (tdata) {
            for (var i = 0, ii = tdata.length; i < ii; i++) {
                var t = tdata[i],
                    tlen = t.length,
                    command = Str(t[0]).toLowerCase(),
                    absolute = t[0] != command,
                    inver = absolute ? m.invert() : 0,
                    x1,
                    y1,
                    x2,
                    y2,
                    bb;
                if (command == "t" && tlen == 2) {
                    m.translate(t[1], 0);
                } else if (command == "t" && tlen == 3) {
                    if (absolute) {
                        x1 = inver.x(0, 0);
                        y1 = inver.y(0, 0);
                        x2 = inver.x(t[1], t[2]);
                        y2 = inver.y(t[1], t[2]);
                        m.translate(x2 - x1, y2 - y1);
                    } else {
                        m.translate(t[1], t[2]);
                    }
                } else if (command == "r") {
                    if (tlen == 2) {
                        bb = bb || bbox;
                        m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    } else if (tlen == 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.rotate(t[1], x2, y2);
                        } else {
                            m.rotate(t[1], t[2], t[3]);
                        }
                    }
                } else if (command == "s") {
                    if (tlen == 2 || tlen == 3) {
                        bb = bb || bbox;
                        m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                    } else if (tlen == 4) {
                        if (absolute) {
                            x2 = inver.x(t[2], t[3]);
                            y2 = inver.y(t[2], t[3]);
                            m.scale(t[1], t[1], x2, y2);
                        } else {
                            m.scale(t[1], t[1], t[2], t[3]);
                        }
                    } else if (tlen == 5) {
                        if (absolute) {
                            x2 = inver.x(t[3], t[4]);
                            y2 = inver.y(t[3], t[4]);
                            m.scale(t[1], t[2], x2, y2);
                        } else {
                            m.scale(t[1], t[2], t[3], t[4]);
                        }
                    }
                } else if (command == "m" && tlen == 7) {
                    m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
                }
            }
        }
        return m;
    }
    Snap._.transform2matrix = transform2matrix;
    Snap._unit2px = unit2px;
    var contains = glob.doc.contains || glob.doc.compareDocumentPosition ? function (a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
    } : function (a, b) {
        if (b) {
            while (b) {
                b = b.parentNode;
                if (b == a) {
                    return true;
                }
            }
        }
        return false;
    };
    function getSomeDefs(el) {
        var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || el.node.parentNode && wrap(el.node.parentNode) || Snap.select("svg") || Snap(0, 0),
            pdefs = p.select("defs"),
            defs = pdefs == null ? false : pdefs.node;
        if (!defs) {
            defs = make("defs", p.node).node;
        }
        return defs;
    }
    function getSomeSVG(el) {
        return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
    }
    Snap._.getSomeDefs = getSomeDefs;
    Snap._.getSomeSVG = getSomeSVG;
    function unit2px(el, name, value) {
        var svg = getSomeSVG(el).node,
            out = {},
            mgr = svg.querySelector(".svg---mgr");
        if (!mgr) {
            mgr = $("rect");
            $(mgr, { x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none" });
            svg.appendChild(mgr);
        }
        function getW(val) {
            if (val == null) {
                return E;
            }
            if (val == +val) {
                return val;
            }
            $(mgr, { width: val });
            try {
                return mgr.getBBox().width;
            } catch (e) {
                return 0;
            }
        }
        function getH(val) {
            if (val == null) {
                return E;
            }
            if (val == +val) {
                return val;
            }
            $(mgr, { height: val });
            try {
                return mgr.getBBox().height;
            } catch (e) {
                return 0;
            }
        }
        function set(nam, f) {
            if (name == null) {
                out[nam] = f(el.attr(nam) || 0);
            } else if (nam == name) {
                out = f(value == null ? el.attr(nam) || 0 : value);
            }
        }
        switch (el.type) {
            case "rect":
                set("rx", getW);
                set("ry", getH);
            case "image":
                set("width", getW);
                set("height", getH);
            case "text":
                set("x", getW);
                set("y", getH);
                break;
            case "circle":
                set("cx", getW);
                set("cy", getH);
                set("r", getW);
                break;
            case "ellipse":
                set("cx", getW);
                set("cy", getH);
                set("rx", getW);
                set("ry", getH);
                break;
            case "line":
                set("x1", getW);
                set("x2", getW);
                set("y1", getH);
                set("y2", getH);
                break;
            case "marker":
                set("refX", getW);
                set("markerWidth", getW);
                set("refY", getH);
                set("markerHeight", getH);
                break;
            case "radialGradient":
                set("fx", getW);
                set("fy", getH);
                break;
            case "tspan":
                set("dx", getW);
                set("dy", getH);
                break;
            default:
                set(name, getW);
        }
        svg.removeChild(mgr);
        return out;
    }
    /*\
     * Snap.select
     [ method ]
     **
     * Wraps a DOM element specified by CSS selector as @Element
     - query (string) CSS selector of the element
     = (Element) the current element
    \*/
    Snap.select = function (query) {
        query = Str(query).replace(/([^\\]):/g, "$1\\:");
        return wrap(glob.doc.querySelector(query));
    };
    /*\
     * Snap.selectAll
     [ method ]
     **
     * Wraps DOM elements specified by CSS selector as set or array of @Element
     - query (string) CSS selector of the element
     = (Element) the current element
    \*/
    Snap.selectAll = function (query) {
        var nodelist = glob.doc.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };

    function add2group(list) {
        if (!is(list, "array")) {
            list = Array.prototype.slice.call(arguments, 0);
        }
        var i = 0,
            j = 0,
            node = this.node;
        while (this[i]) {
            delete this[i++];
        }for (i = 0; i < list.length; i++) {
            if (list[i].type == "set") {
                list[i].forEach(function (el) {
                    node.appendChild(el.node);
                });
            } else {
                node.appendChild(list[i].node);
            }
        }
        var children = node.childNodes;
        for (i = 0; i < children.length; i++) {
            this[j++] = wrap(children[i]);
        }
        return this;
    }
    // Hub garbage collector every 10s
    setInterval(function () {
        for (var key in hub) {
            if (hub[has](key)) {
                var el = hub[key],
                    node = el.node;
                if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
                    delete hub[key];
                }
            }
        }
    }, 1e4);
    function Element(el) {
        if (el.snap in hub) {
            return hub[el.snap];
        }
        var svg;
        try {
            svg = el.ownerSVGElement;
        } catch (e) {}
        /*\
         * Element.node
         [ property (object) ]
         **
         * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
         > Usage
         | // draw a circle at coordinate 10,10 with radius of 10
         | var c = paper.circle(10, 10, 10);
         | c.node.onclick = function () {
         |     c.attr("fill", "red");
         | };
        \*/
        this.node = el;
        if (svg) {
            this.paper = new Paper(svg);
        }
        /*\
         * Element.type
         [ property (string) ]
         **
         * SVG tag name of the given element.
        \*/
        this.type = el.tagName || el.nodeName;
        var id = this.id = ID(this);
        this.anims = {};
        this._ = {
            transform: []
        };
        el.snap = id;
        hub[id] = this;
        if (this.type == "g") {
            this.add = add2group;
        }
        if (this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 }) {
            for (var method in Paper.prototype) {
                if (Paper.prototype[has](method)) {
                    this[method] = Paper.prototype[method];
                }
            }
        }
    }
    /*\
      * Element.attr
      [ method ]
      **
      * Gets or sets given attributes of the element.
      **
      - params (object) contains key-value pairs of attributes you want to set
      * or
      - param (string) name of the attribute
      = (Element) the current element
      * or
      = (string) value of attribute
      > Usage
      | el.attr({
      |     fill: "#fc0",
      |     stroke: "#000",
      |     strokeWidth: 2, // CamelCase...
      |     "fill-opacity": 0.5, // or dash-separated names
      |     width: "*=2" // prefixed values
      | });
      | console.log(el.attr("fill")); // #fc0
      * Prefixed values in format `"+=10"` supported. All four operations
      * (`+`, `-`, `*` and `/`) could be used. Optionally you can use units for `+`
      * and `-`: `"+=2em"`.
     \*/
    Element.prototype.attr = function (params, value) {
        var el = this,
            node = el.node;
        if (!params) {
            if (node.nodeType != 1) {
                return {
                    text: node.nodeValue
                };
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0, ii = attr.length; i < ii; i++) {
                out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
        }
        if (is(params, "string")) {
            if (arguments.length > 1) {
                var json = {};
                json[params] = value;
                params = json;
            } else {
                return eve("snap.util.getattr." + params, el).firstDefined();
            }
        }
        for (var att in params) {
            if (params[has](att)) {
                eve("snap.util.attr." + att, el, params[att]);
            }
        }
        return el;
    };
    /*\
     * Snap.parse
     [ method ]
     **
     * Parses SVG fragment and converts it into a @Fragment
     **
     - svg (string) SVG string
     = (Fragment) the @Fragment
    \*/
    Snap.parse = function (svg) {
        var f = glob.doc.createDocumentFragment(),
            full = true,
            div = glob.doc.createElement("div");
        svg = Str(svg);
        if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
            svg = "<svg>" + svg + "</svg>";
            full = false;
        }
        div.innerHTML = svg;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            if (full) {
                f = svg;
            } else {
                while (svg.firstChild) {
                    f.appendChild(svg.firstChild);
                }
            }
        }
        return new Fragment(f);
    };
    function Fragment(frag) {
        this.node = frag;
    }
    /*\
     * Snap.fragment
     [ method ]
     **
     * Creates a DOM fragment from a given list of elements or strings
     **
     - varargs (…) SVG string
     = (Fragment) the @Fragment
    \*/
    Snap.fragment = function () {
        var args = Array.prototype.slice.call(arguments, 0),
            f = glob.doc.createDocumentFragment();
        for (var i = 0, ii = args.length; i < ii; i++) {
            var item = args[i];
            if (item.node && item.node.nodeType) {
                f.appendChild(item.node);
            }
            if (item.nodeType) {
                f.appendChild(item);
            }
            if (typeof item == "string") {
                f.appendChild(Snap.parse(item).node);
            }
        }
        return new Fragment(f);
    };

    function make(name, parent) {
        var res = $(name);
        parent.appendChild(res);
        var el = wrap(res);
        return el;
    }
    function Paper(w, h) {
        var res,
            desc,
            defs,
            proto = Paper.prototype;
        if (w && w.tagName == "svg") {
            if (w.snap in hub) {
                return hub[w.snap];
            }
            var doc = w.ownerDocument;
            res = new Element(w);
            desc = w.getElementsByTagName("desc")[0];
            defs = w.getElementsByTagName("defs")[0];
            if (!desc) {
                desc = $("desc");
                desc.appendChild(doc.createTextNode("Created with Snap"));
                res.node.appendChild(desc);
            }
            if (!defs) {
                defs = $("defs");
                res.node.appendChild(defs);
            }
            res.defs = defs;
            for (var key in proto) {
                if (proto[has](key)) {
                    res[key] = proto[key];
                }
            }res.paper = res.root = res;
        } else {
            res = make("svg", glob.doc.body);
            $(res.node, {
                height: h,
                version: 1.1,
                width: w,
                xmlns: xmlns
            });
        }
        return res;
    }
    function wrap(dom) {
        if (!dom) {
            return dom;
        }
        if (dom instanceof Element || dom instanceof Fragment) {
            return dom;
        }
        if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
            return new Paper(dom);
        }
        if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
            return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
        }
        return new Element(dom);
    }

    Snap._.make = make;
    Snap._.wrap = wrap;
    /*\
     * Paper.el
     [ method ]
     **
     * Creates an element on paper with a given name and no attributes
     **
     - name (string) tag name
     - attr (object) attributes
     = (Element) the current element
     > Usage
     | var c = paper.circle(10, 10, 10); // is the same as...
     | var c = paper.el("circle").attr({
     |     cx: 10,
     |     cy: 10,
     |     r: 10
     | });
     | // and the same as
     | var c = paper.el("circle", {
     |     cx: 10,
     |     cy: 10,
     |     r: 10
     | });
    \*/
    Paper.prototype.el = function (name, attr) {
        var el = make(name, this.node);
        attr && el.attr(attr);
        return el;
    };
    /*\
     * Element.children
     [ method ]
     **
     * Returns array of all the children of the element.
     = (array) array of Elements
    \*/
    Element.prototype.children = function () {
        var out = [],
            ch = this.node.childNodes;
        for (var i = 0, ii = ch.length; i < ii; i++) {
            out[i] = Snap(ch[i]);
        }
        return out;
    };
    function jsonFiller(root, o) {
        for (var i = 0, ii = root.length; i < ii; i++) {
            var item = {
                type: root[i].type,
                attr: root[i].attr()
            },
                children = root[i].children();
            o.push(item);
            if (children.length) {
                jsonFiller(children, item.childNodes = []);
            }
        }
    }
    /*\
     * Element.toJSON
     [ method ]
     **
     * Returns object representation of the given element and all its children.
     = (object) in format
     o {
     o     type (string) this.type,
     o     attr (object) attributes map,
     o     childNodes (array) optional array of children in the same format
     o }
    \*/
    Element.prototype.toJSON = function () {
        var out = [];
        jsonFiller([this], out);
        return out[0];
    };
    // default
    eve.on("snap.util.getattr", function () {
        var att = eve.nt();
        att = att.substring(att.lastIndexOf(".") + 1);
        var css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
        if (cssAttr[has](css)) {
            return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
        } else {
            return $(this.node, att);
        }
    });
    var cssAttr = {
        "alignment-baseline": 0,
        "baseline-shift": 0,
        "clip": 0,
        "clip-path": 0,
        "clip-rule": 0,
        "color": 0,
        "color-interpolation": 0,
        "color-interpolation-filters": 0,
        "color-profile": 0,
        "color-rendering": 0,
        "cursor": 0,
        "direction": 0,
        "display": 0,
        "dominant-baseline": 0,
        "enable-background": 0,
        "fill": 0,
        "fill-opacity": 0,
        "fill-rule": 0,
        "filter": 0,
        "flood-color": 0,
        "flood-opacity": 0,
        "font": 0,
        "font-family": 0,
        "font-size": 0,
        "font-size-adjust": 0,
        "font-stretch": 0,
        "font-style": 0,
        "font-variant": 0,
        "font-weight": 0,
        "glyph-orientation-horizontal": 0,
        "glyph-orientation-vertical": 0,
        "image-rendering": 0,
        "kerning": 0,
        "letter-spacing": 0,
        "lighting-color": 0,
        "marker": 0,
        "marker-end": 0,
        "marker-mid": 0,
        "marker-start": 0,
        "mask": 0,
        "opacity": 0,
        "overflow": 0,
        "pointer-events": 0,
        "shape-rendering": 0,
        "stop-color": 0,
        "stop-opacity": 0,
        "stroke": 0,
        "stroke-dasharray": 0,
        "stroke-dashoffset": 0,
        "stroke-linecap": 0,
        "stroke-linejoin": 0,
        "stroke-miterlimit": 0,
        "stroke-opacity": 0,
        "stroke-width": 0,
        "text-anchor": 0,
        "text-decoration": 0,
        "text-rendering": 0,
        "unicode-bidi": 0,
        "visibility": 0,
        "word-spacing": 0,
        "writing-mode": 0
    };

    eve.on("snap.util.attr", function (value) {
        var att = eve.nt(),
            attr = {};
        att = att.substring(att.lastIndexOf(".") + 1);
        attr[att] = value;
        var style = att.replace(/-(\w)/gi, function (all, letter) {
            return letter.toUpperCase();
        }),
            css = att.replace(/[A-Z]/g, function (letter) {
            return "-" + letter.toLowerCase();
        });
        if (cssAttr[has](css)) {
            this.node.style[style] = value == null ? E : value;
        } else {
            $(this.node, attr);
        }
    });
    (function (proto) {})(Paper.prototype);

    // simple ajax
    /*\
     * Snap.ajax
     [ method ]
     **
     * Simple implementation of Ajax
     **
     - url (string) URL
     - postData (object|string) data for post request
     - callback (function) callback
     - scope (object) #optional scope of callback
     * or
     - url (string) URL
     - callback (function) callback
     - scope (object) #optional scope of callback
     = (XMLHttpRequest) the XMLHttpRequest object, just in case
    \*/
    Snap.ajax = function (url, postData, callback, scope) {
        var req = new XMLHttpRequest(),
            id = ID();
        if (req) {
            if (is(postData, "function")) {
                scope = callback;
                callback = postData;
                postData = null;
            } else if (is(postData, "object")) {
                var pd = [];
                for (var key in postData) {
                    if (postData.hasOwnProperty(key)) {
                        pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
                    }
                }postData = pd.join("&");
            }
            req.open(postData ? "POST" : "GET", url, true);
            if (postData) {
                req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            if (callback) {
                eve.once("snap.ajax." + id + ".0", callback);
                eve.once("snap.ajax." + id + ".200", callback);
                eve.once("snap.ajax." + id + ".304", callback);
            }
            req.onreadystatechange = function () {
                if (req.readyState != 4) return;
                eve("snap.ajax." + id + "." + req.status, scope, req);
            };
            if (req.readyState == 4) {
                return req;
            }
            req.send(postData);
            return req;
        }
    };
    /*\
     * Snap.load
     [ method ]
     **
     * Loads external SVG file as a @Fragment (see @Snap.ajax for more advanced AJAX)
     **
     - url (string) URL
     - callback (function) callback
     - scope (object) #optional scope of callback
    \*/
    Snap.load = function (url, callback, scope) {
        Snap.ajax(url, function (req) {
            var f = Snap.parse(req.responseText);
            scope ? callback.call(scope, f) : callback(f);
        });
    };
    var getOffset = function getOffset(elem) {
        var box = elem.getBoundingClientRect(),
            doc = elem.ownerDocument,
            body = doc.body,
            docElem = doc.documentElement,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
            left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
        return {
            y: top,
            x: left
        };
    };
    /*\
     * Snap.getElementByPoint
     [ method ]
     **
     * Returns you topmost element under given point.
     **
     = (object) Snap element object
     - x (number) x coordinate from the top left corner of the window
     - y (number) y coordinate from the top left corner of the window
     > Usage
     | Snap.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
    \*/
    Snap.getElementByPoint = function (x, y) {
        var paper = this,
            svg = paper.canvas,
            target = glob.doc.elementFromPoint(x, y);
        if (glob.win.opera && target.tagName == "svg") {
            var so = getOffset(target),
                sr = target.createSVGRect();
            sr.x = x - so.x;
            sr.y = y - so.y;
            sr.width = sr.height = 1;
            var hits = target.getIntersectionList(sr, null);
            if (hits.length) {
                target = hits[hits.length - 1];
            }
        }
        if (!target) {
            return null;
        }
        return wrap(target);
    };
    /*\
     * Snap.plugin
     [ method ]
     **
     * Let you write plugins. You pass in a function with five arguments, like this:
     | Snap.plugin(function (Snap, Element, Paper, global, Fragment) {
     |     Snap.newmethod = function () {};
     |     Element.prototype.newmethod = function () {};
     |     Paper.prototype.newmethod = function () {};
     | });
     * Inside the function you have access to all main objects (and their
     * prototypes). This allow you to extend anything you want.
     **
     - f (function) your plugin body
    \*/
    Snap.plugin = function (f) {
        f(Snap, Element, Paper, glob, Fragment);
    };
    glob.win.Snap = Snap;
    return Snap;
}(window || undefined);

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var elproto = Element.prototype,
        is = Snap.is,
        Str = String,
        unit2px = Snap._unit2px,
        $ = Snap._.$,
        make = Snap._.make,
        getSomeDefs = Snap._.getSomeDefs,
        has = "hasOwnProperty",
        wrap = Snap._.wrap;
    /*\
     * Element.getBBox
     [ method ]
     **
     * Returns the bounding box descriptor for the given element
     **
     = (object) bounding box descriptor:
     o {
     o     cx: (number) x of the center,
     o     cy: (number) x of the center,
     o     h: (number) height,
     o     height: (number) height,
     o     path: (string) path command for the box,
     o     r0: (number) radius of a circle that fully encloses the box,
     o     r1: (number) radius of the smallest circle that can be enclosed,
     o     r2: (number) radius of the largest circle that can be enclosed,
     o     vb: (string) box as a viewbox command,
     o     w: (number) width,
     o     width: (number) width,
     o     x2: (number) x of the right side,
     o     x: (number) x of the left side,
     o     y2: (number) y of the bottom edge,
     o     y: (number) y of the top edge
     o }
    \*/
    elproto.getBBox = function (isWithoutTransform) {
        if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
        }
        var el = this,
            m = new Snap.Matrix();
        if (el.removed) {
            return Snap._.box();
        }
        while (el.type == "use") {
            if (!isWithoutTransform) {
                m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
                el = el.original;
            } else {
                var href = el.attr("xlink:href");
                el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
        }
        var _ = el._,
            pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
        try {
            if (isWithoutTransform) {
                _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
                return Snap._.box(_.bboxwt);
            } else {
                el.realPath = pathfinder(el);
                el.matrix = el.transform().localMatrix;
                _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
                return Snap._.box(_.bbox);
            }
        } catch (e) {
            // Firefox doesn’t give you bbox of hidden element
            return Snap._.box();
        }
    };
    var propString = function propString() {
        return this.string;
    };
    function extractTransform(el, tstr) {
        if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
                tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
                tstr = el.node.getAttribute("patternTransform");
            } else {
                tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
                return new Snap.Matrix();
            }
            tstr = Snap._.svgTransform2string(tstr);
        } else {
            if (!Snap._.rgTransform.test(tstr)) {
                tstr = Snap._.svgTransform2string(tstr);
            } else {
                tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
            }
            if (is(tstr, "array")) {
                tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
        }
        var m = Snap._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
            return m;
        } else {
            el.matrix = m;
        }
    }
    /*\
     * Element.transform
     [ method ]
     **
     * Gets or sets transformation of the element
     **
     - tstr (string) transform string in Snap or SVG format
     = (Element) the current element
     * or
     = (object) transformation descriptor:
     o {
     o     string (string) transform string,
     o     globalMatrix (Matrix) matrix of all transformations applied to element or its parents,
     o     localMatrix (Matrix) matrix of transformations applied only to the element,
     o     diffMatrix (Matrix) matrix of difference between global and local transformations,
     o     global (string) global transformation as string,
     o     local (string) local transformation as string,
     o     toString (function) returns `string` property
     o }
    \*/
    elproto.transform = function (tstr) {
        var _ = this._;
        if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix(),
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ? Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
                ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
                m.add(ms[i]);
            }
            return {
                string: string,
                globalMatrix: global,
                totalMatrix: m,
                localMatrix: local,
                diffMatrix: global.clone().add(local.invert()),
                global: global.toTransformString(),
                total: m.toTransformString(),
                local: localString,
                toString: propString
            };
        }
        if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
        } else {
            extractTransform(this, tstr);
        }

        if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
                $(this.node, { gradientTransform: this.matrix });
            } else if (this.type == "pattern") {
                $(this.node, { patternTransform: this.matrix });
            } else {
                $(this.node, { transform: this.matrix });
            }
        }

        return this;
    };
    /*\
     * Element.parent
     [ method ]
     **
     * Returns the element's parent
     **
     = (Element) the parent element
    \*/
    elproto.parent = function () {
        return wrap(this.node.parentNode);
    };
    /*\
     * Element.append
     [ method ]
     **
     * Appends the given element to current one
     **
     - el (Element|Set) element to append
     = (Element) the parent element
    \*/
    /*\
     * Element.add
     [ method ]
     **
     * See @Element.append
    \*/
    elproto.append = elproto.add = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this;
                el.forEach(function (el) {
                    it.add(el);
                });
                return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
        }
        return this;
    };
    /*\
     * Element.appendTo
     [ method ]
     **
     * Appends the current element to the given one
     **
     - el (Element) parent element to append to
     = (Element) the child element
    \*/
    elproto.appendTo = function (el) {
        if (el) {
            el = wrap(el);
            el.append(this);
        }
        return this;
    };
    /*\
     * Element.prepend
     [ method ]
     **
     * Prepends the given element to the current one
     **
     - el (Element) element to prepend
     = (Element) the parent element
    \*/
    elproto.prepend = function (el) {
        if (el) {
            if (el.type == "set") {
                var it = this,
                    first;
                el.forEach(function (el) {
                    if (first) {
                        first.after(el);
                    } else {
                        it.prepend(el);
                    }
                    first = el;
                });
                return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
        }
        return this;
    };
    /*\
     * Element.prependTo
     [ method ]
     **
     * Prepends the current element to the given one
     **
     - el (Element) parent element to prepend to
     = (Element) the child element
    \*/
    elproto.prependTo = function (el) {
        el = wrap(el);
        el.prepend(this);
        return this;
    };
    /*\
     * Element.before
     [ method ]
     **
     * Inserts given element before the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.before = function (el) {
        if (el.type == "set") {
            var it = this;
            el.forEach(function (el) {
                var parent = el.parent();
                it.node.parentNode.insertBefore(el.node, it.node);
                parent && parent.add();
            });
            this.parent().add();
            return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.after
     [ method ]
     **
     * Inserts given element after the current one
     **
     - el (Element) element to insert
     = (Element) the parent element
    \*/
    elproto.after = function (el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
            this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
    };
    /*\
     * Element.insertBefore
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertBefore = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.insertAfter
     [ method ]
     **
     * Inserts the element after the given one
     **
     - el (Element) element next to whom insert to
     = (Element) the parent element
    \*/
    elproto.insertAfter = function (el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
    };
    /*\
     * Element.remove
     [ method ]
     **
     * Removes element from the DOM
     = (Element) the detached element
    \*/
    elproto.remove = function () {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
    };
    /*\
     * Element.select
     [ method ]
     **
     * Gathers the nested @Element matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Element) result of query selection
    \*/
    elproto.select = function (query) {
        query = Str(query).replace(/([^\\]):/g, "$1\\:");
        return wrap(this.node.querySelector(query));
    };
    /*\
     * Element.selectAll
     [ method ]
     **
     * Gathers nested @Element objects matching the given set of CSS selectors
     **
     - query (string) CSS selector
     = (Set|array) result of query selection
    \*/
    elproto.selectAll = function (query) {
        var nodelist = this.node.querySelectorAll(query),
            set = (Snap.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
        }
        return set;
    };
    /*\
     * Element.asPX
     [ method ]
     **
     * Returns given attribute of the element as a `px` value (not %, em, etc.)
     **
     - attr (string) attribute name
     - value (string) #optional attribute value
     = (Element) result of query selection
    \*/
    elproto.asPX = function (attr, value) {
        if (value == null) {
            value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
    };
    // SIERRA Element.use(): I suggest adding a note about how to access the original element the returned <use> instantiates. It's a part of SVG with which ordinary web developers may be least familiar.
    /*\
     * Element.use
     [ method ]
     **
     * Creates a `<use>` element linked to the current element
     **
     = (Element) the `<use>` element
    \*/
    elproto.use = function () {
        var use,
            id = this.node.id;
        if (!id) {
            id = this.id;
            $(this.node, {
                id: id
            });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
        } else {
            use = make("use", this.node.parentNode);
        }
        $(use.node, {
            "xlink:href": "#" + id
        });
        use.original = this;
        return use;
    };
    function fixids(el) {
        var els = el.selectAll("*"),
            it,
            url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
            ids = [],
            uses = {};
        function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    var attr = {};
                    attr[name] = URL(id);
                    $(it.node, attr);
                });
            }
        }
        function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
                val = val.substring(1);
            } else {
                return;
            }
            if (val) {
                uses[val] = (uses[val] || []).concat(function (id) {
                    it.attr("xlink:href", "#" + id);
                });
            }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
                $(it.node, { id: it.id });
                ids.push({
                    old: oldid,
                    id: it.id
                });
            }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
                for (var j = 0, jj = fs.length; j < jj; j++) {
                    fs[j](ids[i].id);
                }
            }
        }
    }
    /*\
     * Element.clone
     [ method ]
     **
     * Creates a clone of the element and inserts it after the element
     **
     = (Element) the clone
    \*/
    elproto.clone = function () {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
            $(clone.node, { id: clone.id });
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
    };
    /*\
     * Element.toDefs
     [ method ]
     **
     * Moves element to the shared `<defs>` area
     **
     = (Element) the element
    \*/
    elproto.toDefs = function () {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
    };
    /*\
     * Element.toPattern
     [ method ]
     **
     * Creates a `<pattern>` element from the current element
     **
     * To create a pattern you have to specify the pattern rect:
     - x (string|number)
     - y (string|number)
     - width (string|number)
     - height (string|number)
     = (Element) the `<pattern>` element
     * You can use pattern later on as an argument for `fill` attribute:
     | var p = paper.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
     |         fill: "none",
     |         stroke: "#bada55",
     |         strokeWidth: 5
     |     }).pattern(0, 0, 10, 10),
     |     c = paper.circle(200, 200, 100);
     | c.attr({
     |     fill: p
     | });
    \*/
    elproto.pattern = elproto.toPattern = function (x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
    };
    // SIERRA Element.marker(): clarify what a reference point is. E.g., helps you offset the object from its edge such as when centering it over a path.
    // SIERRA Element.marker(): I suggest the method should accept default reference point values.  Perhaps centered with (refX = width/2) and (refY = height/2)? Also, couldn't it assume the element's current _width_ and _height_? And please specify what _x_ and _y_ mean: offsets? If so, from where?  Couldn't they also be assigned default values?
    /*\
     * Element.marker
     [ method ]
     **
     * Creates a `<marker>` element from the current element
     **
     * To create a marker you have to specify the bounding rect and reference point:
     - x (number)
     - y (number)
     - width (number)
     - height (number)
     - refX (number)
     - refY (number)
     = (Element) the `<marker>` element
     * You can specify the marker later as an argument for `marker-start`, `marker-end`, `marker-mid`, and `marker` attributes. The `marker` attribute places the marker at every point along the path, and `marker-mid` places them at every point except the start and end.
    \*/
    // TODO add usage for markers
    elproto.marker = function (x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
            x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
        }
        $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
        });
        p.node.appendChild(this.node);
        return p;
    };
    // animation
    function slice(from, to, f) {
        return function (arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
                res = res[0];
            }
            return f ? f(res) : res;
        };
    }
    var Animation = function Animation(attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
    };
    Snap._.Animation = Animation;
    /*\
     * Snap.animation
     [ method ]
     **
     * Creates an animation object
     **
     - attr (object) attributes of final destination
     - duration (number) duration of the animation, in milliseconds
     - easing (function) #optional one of easing functions of @mina or custom one
     - callback (function) #optional callback function that fires when animation ends
     = (object) animation object
    \*/
    Snap.animation = function (attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
    };
    /*\
     * Element.inAnim
     [ method ]
     **
     * Returns a set of animations that may be able to manipulate the current element
     **
     = (object) in format:
     o {
     o     anim (object) animation object,
     o     mina (object) @mina object,
     o     curStatus (number) 0..1 — status of the animation: 0 — just started, 1 — just finished,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
    \*/
    elproto.inAnim = function () {
        var el = this,
            res = [];
        for (var id in el.anims) {
            if (el.anims[has](id)) {
                (function (a) {
                    res.push({
                        anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                        mina: a,
                        curStatus: a.status(),
                        status: function status(val) {
                            return a.status(val);
                        },
                        stop: function stop() {
                            a.stop();
                        }
                    });
                })(el.anims[id]);
            }
        }return res;
    };
    /*\
     * Snap.animate
     [ method ]
     **
     * Runs generic animation of one number into another with a caring function
     **
     - from (number|array) number or array of numbers
     - to (number|array) number or array of numbers
     - setter (function) caring function that accepts one number argument
     - duration (number) duration, in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function to execute when animation ends
     = (object) animation object in @mina format
     o {
     o     id (string) animation id, consider it read-only,
     o     duration (function) gets or sets the duration of the animation,
     o     easing (function) easing,
     o     speed (function) gets or sets the speed of the animation,
     o     status (function) gets or sets the status of the animation,
     o     stop (function) stops the animation
     o }
     | var rect = Snap().rect(0, 0, 10, 10);
     | Snap.animate(0, 10, function (val) {
     |     rect.attr({
     |         x: val
     |     });
     | }, 1000);
     | // in given context is equivalent to
     | rect.animate({x: 10}, 1000);
    \*/
    Snap.animate = function (from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        var now = mina.time(),
            anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
    };
    /*\
     * Element.stop
     [ method ]
     **
     * Stops all the animations for the current element
     **
     = (Element) the current element
    \*/
    elproto.stop = function () {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
            anims[i].stop();
        }
        return this;
    };
    /*\
     * Element.animate
     [ method ]
     **
     * Animates the given attributes of the element
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     = (Element) the current element
    \*/
    elproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var fkeys = [],
            tkeys = [],
            keys = {},
            from,
            to,
            f,
            eq,
            el = this;
        for (var key in attrs) {
            if (attrs[has](key)) {
                if (el.equal) {
                    eq = el.equal(key, Str(attrs[key]));
                    from = eq.from;
                    to = eq.to;
                    f = eq.f;
                } else {
                    from = +el.attr(key);
                    to = +attrs[key];
                }
                var len = is(from, "array") ? from.length : 1;
                keys[key] = slice(fkeys.length, fkeys.length + len, f);
                fkeys = fkeys.concat(from);
                tkeys = tkeys.concat(to);
            }
        }var now = mina.time(),
            anim = mina(fkeys, tkeys, now, now + ms, mina.time, function (val) {
            var attr = {};
            for (var key in keys) {
                if (keys[has](key)) {
                    attr[key] = keys[key](val);
                }
            }el.attr(attr);
        }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function () {
            delete el.anims[anim.id];
            callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function () {
            delete el.anims[anim.id];
        });
        return el;
    };
    var eldata = {};
    /*\
     * Element.data
     [ method ]
     **
     * Adds or retrieves given value associated with given key. (Don’t confuse
     * with `data-` attributes)
     *
     * See also @Element.removeData
     - key (string) key to store data
     - value (any) #optional value to store
     = (object) @Element
     * or, if value is not specified:
     = (any) value
     > Usage
     | for (var i = 0, i < 5, i++) {
     |     paper.circle(10 + 15 * i, 10, 10)
     |          .attr({fill: "#000"})
     |          .data("i", i)
     |          .click(function () {
     |             alert(this.data("i"));
     |          });
     | }
    \*/
    elproto.data = function (key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0) {
            eve("snap.data.get." + this.id, this, data, null);
            return data;
        }
        if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
                for (var i in key) {
                    if (key[has](i)) {
                        this.data(i, key[i]);
                    }
                }return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
    };
    /*\
     * Element.removeData
     [ method ]
     **
     * Removes value associated with an element by given key.
     * If key is not provided, removes all the data of the element.
     - key (string) #optional key
     = (object) @Element
    \*/
    elproto.removeData = function (key) {
        if (key == null) {
            eldata[this.id] = {};
        } else {
            eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
    };
    /*\
     * Element.outerSVG
     [ method ]
     **
     * Returns SVG code for the element, equivalent to HTML's `outerHTML`.
     *
     * See also @Element.innerSVG
     = (string) SVG code for the element
    \*/
    /*\
     * Element.toString
     [ method ]
     **
     * See @Element.outerSVG
    \*/
    elproto.outerSVG = elproto.toString = toString(1);
    /*\
     * Element.innerSVG
     [ method ]
     **
     * Returns SVG code for the element's contents, equivalent to HTML's `innerHTML`
     = (string) SVG code for the element
    \*/
    elproto.innerSVG = toString();
    function toString(type) {
        return function () {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
                for (var i = 0, ii = attr.length; i < ii; i++) {
                    res += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
                }
            }
            if (chld.length) {
                type && (res += ">");
                for (i = 0, ii = chld.length; i < ii; i++) {
                    if (chld[i].nodeType == 3) {
                        res += chld[i].nodeValue;
                    } else if (chld[i].nodeType == 1) {
                        res += wrap(chld[i]).toString();
                    }
                }
                type && (res += "</" + this.type + ">");
            } else {
                type && (res += "/>");
            }
            return res;
        };
    }
    elproto.toDataURL = function () {
        if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                x: +bb.x.toFixed(3),
                y: +bb.y.toFixed(3),
                width: +bb.width.toFixed(3),
                height: +bb.height.toFixed(3),
                contents: this.outerSVG()
            });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
    };
    /*\
     * Fragment.select
     [ method ]
     **
     * See @Element.select
    \*/
    Fragment.prototype.select = elproto.select;
    /*\
     * Fragment.selectAll
     [ method ]
     **
     * See @Element.selectAll
    \*/
    Fragment.prototype.selectAll = elproto.selectAll;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var objectToString = Object.prototype.toString,
        Str = String,
        math = Math,
        E = "";
    function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
        }
        if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
        } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
        }
    }
    (function (matrixproto) {
        /*\
         * Matrix.add
         [ method ]
         **
         * Adds the given matrix to existing one
         - a (number)
         - b (number)
         - c (number)
         - d (number)
         - e (number)
         - f (number)
         * or
         - matrix (object) @Matrix
        \*/
        matrixproto.add = function (a, b, c, d, e, f) {
            var out = [[], [], []],
                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
                x,
                y,
                z,
                res;

            if (a && a instanceof Matrix) {
                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
            }

            for (x = 0; x < 3; x++) {
                for (y = 0; y < 3; y++) {
                    res = 0;
                    for (z = 0; z < 3; z++) {
                        res += m[x][z] * matrix[z][y];
                    }
                    out[x][y] = res;
                }
            }
            this.a = out[0][0];
            this.b = out[1][0];
            this.c = out[0][1];
            this.d = out[1][1];
            this.e = out[0][2];
            this.f = out[1][2];
            return this;
        };
        /*\
         * Matrix.invert
         [ method ]
         **
         * Returns an inverted version of the matrix
         = (object) @Matrix
        \*/
        matrixproto.invert = function () {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        /*\
         * Matrix.clone
         [ method ]
         **
         * Returns a copy of the matrix
         = (object) @Matrix
        \*/
        matrixproto.clone = function () {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        /*\
         * Matrix.translate
         [ method ]
         **
         * Translate the matrix
         - x (number) horizontal offset distance
         - y (number) vertical offset distance
        \*/
        matrixproto.translate = function (x, y) {
            return this.add(1, 0, 0, 1, x, y);
        };
        /*\
         * Matrix.scale
         [ method ]
         **
         * Scales the matrix
         - x (number) amount to be scaled, with `1` resulting in no change
         - y (number) #optional amount to scale along the vertical axis. (Otherwise `x` applies to both axes.)
         - cx (number) #optional horizontal origin point from which to scale
         - cy (number) #optional vertical origin point from which to scale
         * Default cx, cy is the middle point of the element.
        \*/
        matrixproto.scale = function (x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
            this.add(x, 0, 0, y, 0, 0);
            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
            return this;
        };
        /*\
         * Matrix.rotate
         [ method ]
         **
         * Rotates the matrix
         - a (number) angle of rotation, in degrees
         - x (number) horizontal origin point from which to rotate
         - y (number) vertical origin point from which to rotate
        \*/
        matrixproto.rotate = function (a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
        };
        /*\
         * Matrix.x
         [ method ]
         **
         * Returns x coordinate for given point after transformation described by the matrix. See also @Matrix.y
         - x (number)
         - y (number)
         = (number) x
        \*/
        matrixproto.x = function (x, y) {
            return x * this.a + y * this.c + this.e;
        };
        /*\
         * Matrix.y
         [ method ]
         **
         * Returns y coordinate for given point after transformation described by the matrix. See also @Matrix.x
         - x (number)
         - y (number)
         = (number) y
        \*/
        matrixproto.y = function (x, y) {
            return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function (i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function () {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function () {
            return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
        }
        /*\
         * Matrix.determinant
         [ method ]
         **
         * Finds determinant of the given matrix.
         = (number) determinant
        \*/
        matrixproto.determinant = function () {
            return this.a * this.d - this.b * this.c;
        };
        /*\
         * Matrix.split
         [ method ]
         **
         * Splits matrix into primitive transformations
         = (object) in format:
         o dx (number) translation by x
         o dy (number) translation by y
         o scalex (number) scale by x
         o scaley (number) scale by y
         o shear (number) shear
         o rotate (number) rotation in deg
         o isSimple (boolean) could it be represented via simple transformations
        \*/
        matrixproto.split = function () {
            var out = {};
            // translation
            out.dx = this.e;
            out.dy = this.f;

            // scale and shear
            var row = [[this.a, this.c], [this.b, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);

            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;

            if (this.determinant() < 0) {
                out.scalex = -out.scalex;
            }

            // rotation
            var sin = -row[0][1],
                cos = row[1][1];
            if (cos < 0) {
                out.rotate = Snap.deg(math.acos(cos));
                if (sin < 0) {
                    out.rotate = 360 - out.rotate;
                }
            } else {
                out.rotate = Snap.deg(math.asin(sin));
            }

            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
        };
        /*\
         * Matrix.toTransformString
         [ method ]
         **
         * Returns transform string that represents given matrix
         = (string) transform string
        \*/
        matrixproto.toTransformString = function (shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
                s.scalex = +s.scalex.toFixed(4);
                s.scaley = +s.scaley.toFixed(4);
                s.rotate = +s.rotate.toFixed(4);
                return (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) + (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E);
            } else {
                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
        };
    })(Matrix.prototype);
    /*\
     * Snap.Matrix
     [ method ]
     **
     * Matrix constructor, extend on your own risk.
     * To create matrices use @Snap.matrix.
    \*/
    Snap.Matrix = Matrix;
    /*\
     * Snap.matrix
     [ method ]
     **
     * Utility method
     **
     * Returns a matrix based on the given parameters
     - a (number)
     - b (number)
     - c (number)
     - d (number)
     - e (number)
     - f (number)
     * or
     - svgMatrix (SVGMatrix)
     = (object) @Matrix
    \*/
    Snap.matrix = function (a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
    };
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var has = "hasOwnProperty",
        make = Snap._.make,
        wrap = Snap._.wrap,
        is = Snap.is,
        getSomeDefs = Snap._.getSomeDefs,
        reURLValue = /^url\(#?([^)]+)\)$/,
        $ = Snap._.$,
        URL = Snap.url,
        Str = String,
        separator = Snap._.separator,
        E = "";
    // Attributes event handlers
    eve.on("snap.util.attr.mask", function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value.type == "mask") {
                var mask = value;
            } else {
                mask = make("mask", getSomeDefs(this));
                mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {
                id: mask.id
            });
            $(this.node, {
                mask: URL(mask.id)
            });
        }
    });
    (function (clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
    })(function (value) {
        if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value.type == "clipPath") {
                var clip = value;
            } else {
                clip = make("clipPath", getSomeDefs(this));
                clip.node.appendChild(value.node);
                !clip.node.id && $(clip.node, {
                    id: clip.id
                });
            }
            $(this.node, {
                "clip-path": URL(clip.node.id || clip.id)
            });
        }
    });
    function fillStroke(name) {
        return function (value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
                value = value.node.firstChild;
                getSomeDefs(this).appendChild(value);
                value = wrap(value);
            }
            if (value instanceof Element) {
                if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
                    if (!value.node.id) {
                        $(value.node, {
                            id: value.id
                        });
                    }
                    var fill = URL(value.node.id);
                } else {
                    fill = value.attr(name);
                }
            } else {
                fill = Snap.color(value);
                if (fill.error) {
                    var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                    if (grad) {
                        if (!grad.node.id) {
                            $(grad.node, {
                                id: grad.id
                            });
                        }
                        fill = URL(grad.node.id);
                    } else {
                        fill = value;
                    }
                } else {
                    fill = Str(fill);
                }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
        };
    }
    eve.on("snap.util.attr.fill", fillStroke("fill"));
    eve.on("snap.util.attr.stroke", fillStroke("stroke"));
    var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
    eve.on("snap.util.grad.parse", function parseGrad(string) {
        string = Str(string);
        var tokens = string.match(gradrg);
        if (!tokens) {
            return null;
        }
        var type = tokens[1],
            params = tokens[2],
            stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function (el) {
            return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
            params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function (el) {
            el = el.split(":");
            var out = {
                color: el[0]
            };
            if (el[1]) {
                out.offset = parseFloat(el[1]);
            }
            return out;
        });
        return {
            type: type,
            params: params,
            stops: stops
        };
    });

    eve.on("snap.util.attr.d", function (value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
        }
        $(this.node, { d: value });
    })(-1);
    eve.on("snap.util.attr.#text", function (value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
    })(-1);
    eve.on("snap.util.attr.path", function (value) {
        eve.stop();
        this.attr({ d: value });
    })(-1);
    eve.on("snap.util.attr.class", function (value) {
        eve.stop();
        this.node.className.baseVal = value;
    })(-1);
    eve.on("snap.util.attr.viewBox", function (value) {
        var vb;
        if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
            vb = value.join(" ");
        } else {
            vb = value;
        }
        $(this.node, {
            viewBox: vb
        });
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.transform", function (value) {
        this.transform(value);
        eve.stop();
    })(-1);
    eve.on("snap.util.attr.r", function (value) {
        if (this.type == "rect") {
            eve.stop();
            $(this.node, {
                rx: value,
                ry: value
            });
        }
    })(-1);
    eve.on("snap.util.attr.textpath", function (value) {
        eve.stop();
        if (this.type == "text") {
            var id, tp, node;
            if (!value && this.textPath) {
                tp = this.textPath;
                while (tp.node.firstChild) {
                    this.node.appendChild(tp.node.firstChild);
                }
                tp.remove();
                delete this.textPath;
                return;
            }
            if (is(value, "string")) {
                var defs = getSomeDefs(this),
                    path = wrap(defs.parentNode).path(value);
                defs.appendChild(path.node);
                id = path.id;
                path.attr({ id: id });
            } else {
                value = wrap(value);
                if (value instanceof Element) {
                    id = value.attr("id");
                    if (!id) {
                        id = value.id;
                        value.attr({ id: id });
                    }
                }
            }
            if (id) {
                tp = this.textPath;
                node = this.node;
                if (tp) {
                    tp.attr({ "xlink:href": "#" + id });
                } else {
                    tp = $("textPath", {
                        "xlink:href": "#" + id
                    });
                    while (node.firstChild) {
                        tp.appendChild(node.firstChild);
                    }
                    node.appendChild(tp);
                    this.textPath = wrap(tp);
                }
            }
        }
    })(-1);
    eve.on("snap.util.attr.text", function (value) {
        if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function tuner(chunk) {
                var out = $("tspan");
                if (is(chunk, "array")) {
                    for (var i = 0; i < chunk.length; i++) {
                        out.appendChild(tuner(chunk[i]));
                    }
                } else {
                    out.appendChild(glob.doc.createTextNode(chunk));
                }
                out.normalize && out.normalize();
                return out;
            };
            while (node.firstChild) {
                node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
                node.appendChild(tuned.firstChild);
            }
        }
        eve.stop();
    })(-1);
    function setFontSize(value) {
        eve.stop();
        if (value == +value) {
            value += "px";
        }
        this.node.style.fontSize = value;
    }
    eve.on("snap.util.attr.fontSize", setFontSize)(-1);
    eve.on("snap.util.attr.font-size", setFontSize)(-1);

    eve.on("snap.util.getattr.transform", function () {
        eve.stop();
        return this.transform();
    })(-1);
    eve.on("snap.util.getattr.textpath", function () {
        eve.stop();
        return this.textPath;
    })(-1);
    // Markers
    (function () {
        function getter(end) {
            return function () {
                eve.stop();
                var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
                if (style == "none") {
                    return style;
                } else {
                    return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
                }
            };
        }
        function setter(end) {
            return function (value) {
                eve.stop();
                var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
                if (value == "" || !value) {
                    this.node.style[name] = "none";
                    return;
                }
                if (value.type == "marker") {
                    var id = value.node.id;
                    if (!id) {
                        $(value.node, { id: value.id });
                    }
                    this.node.style[name] = URL(id);
                    return;
                }
            };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
    })();
    eve.on("snap.util.getattr.r", function () {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
        }
    })(-1);
    function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
                out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
                if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                    out.push(chi.firstChild.nodeValue);
                } else {
                    out.push(textExtract(chi));
                }
            }
        }
        return out;
    }
    eve.on("snap.util.getattr.text", function () {
        if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
        }
    })(-1);
    eve.on("snap.util.getattr.#text", function () {
        return this.node.textContent;
    })(-1);
    eve.on("snap.util.getattr.viewBox", function () {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.points", function () {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
            return p.split(separator);
        } else {
            return;
        }
    })(-1);
    eve.on("snap.util.getattr.path", function () {
        var p = $(this.node, "d");
        eve.stop();
        return p;
    })(-1);
    eve.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal;
    })(-1);
    function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
    }
    eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
    eve.on("snap.util.getattr.font-size", getFontSize)(-1);
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var rgNotSpace = /\S+/g,
        rgBadSpace = /[\t\r\n\f]/g,
        rgTrim = /(^\s+|\s+$)/g,
        Str = String,
        elproto = Element.prototype;
    /*\
     * Element.addClass
     [ method ]
     **
     * Adds given class name or list of class names to the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.addClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;

        if (classes.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (!~pos) {
                    curClasses.push(clazz);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.removeClass
     [ method ]
     **
     * Removes given class name or list of class names from the element.
     - value (string) class name or space separated list of class names
     **
     = (Element) original element.
    \*/
    elproto.removeClass = function (value) {
        var classes = Str(value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        if (curClasses.length) {
            j = 0;
            while (clazz = classes[j++]) {
                pos = curClasses.indexOf(clazz);
                if (~pos) {
                    curClasses.splice(pos, 1);
                }
            }

            finalValue = curClasses.join(" ");
            if (className != finalValue) {
                elem.className.baseVal = finalValue;
            }
        }
        return this;
    };
    /*\
     * Element.hasClass
     [ method ]
     **
     * Checks if the element has a given class name in the list of class names applied to it.
     - value (string) class name
     **
     = (boolean) `true` if the element has given class
    \*/
    elproto.hasClass = function (value) {
        var elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
    };
    /*\
     * Element.toggleClass
     [ method ]
     **
     * Add or remove one or more classes from the element, depending on either
     * the class’s presence or the value of the `flag` argument.
     - value (string) class name or space separated list of class names
     - flag (boolean) value to determine whether the class should be added or removed
     **
     = (Element) original element.
    \*/
    elproto.toggleClass = function (value, flag) {
        if (flag != null) {
            if (flag) {
                return this.addClass(value);
            } else {
                return this.removeClass(value);
            }
        }
        var classes = (value || "").match(rgNotSpace) || [],
            elem = this.node,
            className = elem.className.baseVal,
            curClasses = className.match(rgNotSpace) || [],
            j,
            pos,
            clazz,
            finalValue;
        j = 0;
        while (clazz = classes[j++]) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
                curClasses.splice(pos, 1);
            } else {
                curClasses.push(clazz);
            }
        }

        finalValue = curClasses.join(" ");
        if (className != finalValue) {
            elem.className.baseVal = finalValue;
        }
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var operators = {
        "+": function _(x, y) {
            return x + y;
        },
        "-": function _(x, y) {
            return x - y;
        },
        "/": function _(x, y) {
            return x / y;
        },
        "*": function _(x, y) {
            return x * y;
        }
    },
        Str = String,
        reUnit = /[a-z]+$/i,
        reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    eve.on("snap.util.attr", function (val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
                val = op(parseFloat(a), +plus[2]);
            } else {
                a = this.asPX(name);
                val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
                return;
            }
            atr[name] = val;
            this.attr(atr);
        }
    })(-10);
    eve.on("snap.util.equal", function (name, b) {
        var A,
            B,
            a = Str(this.attr(name) || ""),
            el = this,
            bplus = Str(b).match(reAddon);
        if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
                return {
                    from: parseFloat(a),
                    to: op(parseFloat(a), +bplus[2]),
                    f: getUnit(aUnit)
                };
            } else {
                a = this.asPX(name);
                return {
                    from: a,
                    to: op(a, this.asPX(name, bplus[2] + unit)),
                    f: getNumber
                };
            }
        }
    })(-10);
});
// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var proto = Paper.prototype,
        is = Snap.is;
    /*\
     * Paper.rect
     [ method ]
     *
     * Draws a rectangle
     **
     - x (number) x coordinate of the top left corner
     - y (number) y coordinate of the top left corner
     - width (number) width
     - height (number) height
     - rx (number) #optional horizontal radius for rounded corners, default is 0
     - ry (number) #optional vertical radius for rounded corners, default is rx or 0
     = (object) the `rect` element
     **
     > Usage
     | // regular rectangle
     | var c = paper.rect(10, 10, 50, 50);
     | // rectangle with rounded corners
     | var c = paper.rect(40, 40, 50, 50, 10);
    \*/
    proto.rect = function (x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
            ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                width: w,
                height: h
            };
            if (rx != null) {
                attr.rx = rx;
                attr.ry = ry;
            }
        }
        return this.el("rect", attr);
    };
    /*\
     * Paper.circle
     [ method ]
     **
     * Draws a circle
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - r (number) radius
     = (object) the `circle` element
     **
     > Usage
     | var c = paper.circle(50, 50, 40);
    \*/
    proto.circle = function (cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                r: r
            };
        }
        return this.el("circle", attr);
    };

    var preload = function () {
        function onerror() {
            this.parentNode.removeChild(this);
        }
        return function (src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function () {
                f.call(img);
                img.onload = img.onerror = null;
                body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
        };
    }();

    /*\
     * Paper.image
     [ method ]
     **
     * Places an image on the surface
     **
     - src (string) URI of the source image
     - x (number) x offset position
     - y (number) y offset position
     - width (number) width of the image
     - height (number) height of the image
     = (object) the `image` element
     * or
     = (object) Snap element object with type `image`
     **
     > Usage
     | var c = paper.image("apple.png", 10, 10, 80, 80);
    \*/
    proto.image = function (src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
            el.attr(src);
        } else if (src != null) {
            var set = {
                "xlink:href": src,
                preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
                set.x = x;
                set.y = y;
            }
            if (width != null && height != null) {
                set.width = width;
                set.height = height;
            } else {
                preload(src, function () {
                    Snap._.$(el.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    });
                });
            }
            Snap._.$(el.node, set);
        }
        return el;
    };
    /*\
     * Paper.ellipse
     [ method ]
     **
     * Draws an ellipse
     **
     - x (number) x coordinate of the centre
     - y (number) y coordinate of the centre
     - rx (number) horizontal radius
     - ry (number) vertical radius
     = (object) the `ellipse` element
     **
     > Usage
     | var c = paper.ellipse(50, 50, 40, 20);
    \*/
    proto.ellipse = function (cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
        } else if (cx != null) {
            attr = {
                cx: cx,
                cy: cy,
                rx: rx,
                ry: ry
            };
        }
        return this.el("ellipse", attr);
    };
    // SIERRA Paper.path(): Unclear from the link what a Catmull-Rom curveto is, and why it would make life any easier.
    /*\
     * Paper.path
     [ method ]
     **
     * Creates a `<path>` element using the given string as the path's definition
     - pathString (string) #optional path string in SVG format
     * Path string consists of one-letter commands, followed by comma seprarated arguments in numerical form. Example:
     | "M10,20L30,40"
     * This example features two commands: `M`, with arguments `(10, 20)` and `L` with arguments `(30, 40)`. Uppercase letter commands express coordinates in absolute terms, while lowercase commands express them in relative terms from the most recently declared coordinates.
     *
     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a> or <a href="https://developer.mozilla.org/en/SVG/Tutorial/Paths">article about path strings at MDN</a>.</p>
     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
     * * _Catmull-Rom curveto_ is a not standard SVG command and added to make life easier.
     * Note: there is a special case when a path consists of only three commands: `M10,10R…z`. In this case the path connects back to its starting point.
     > Usage
     | var c = paper.path("M10 10L90 90");
     | // draw a diagonal line:
     | // move to 10,10, line to 90,90
    \*/
    proto.path = function (d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
            attr = d;
        } else if (d) {
            attr = { d: d };
        }
        return this.el("path", attr);
    };
    /*\
     * Paper.g
     [ method ]
     **
     * Creates a group element
     **
     - varargs (…) #optional elements to nest within the group
     = (object) the `g` element
     **
     > Usage
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g(c2, c1); // note that the order of elements is different
     * or
     | var c1 = paper.circle(),
     |     c2 = paper.rect(),
     |     g = paper.g();
     | g.add(c2, c1);
    \*/
    /*\
     * Paper.group
     [ method ]
     **
     * See @Paper.g
    \*/
    proto.group = proto.g = function (first) {
        var attr,
            el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.svg
     [ method ]
     **
     * Creates a nested SVG element.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `svg` element
     **
    \*/
    proto.svg = function (x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
            attrs = x;
        } else {
            if (x != null) {
                attrs.x = x;
            }
            if (y != null) {
                attrs.y = y;
            }
            if (width != null) {
                attrs.width = width;
            }
            if (height != null) {
                attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
                attrs.viewBox = [vbx, vby, vbw, vbh];
            }
        }
        return this.el("svg", attrs);
    };
    /*\
     * Paper.mask
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a mask.
     **
     = (object) the `mask` element
     **
    \*/
    proto.mask = function (first) {
        var attr,
            el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
        } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
    };
    /*\
     * Paper.ptrn
     [ method ]
     **
     * Equivalent in behaviour to @Paper.g, except it’s a pattern.
     - x (number) @optional X of the element
     - y (number) @optional Y of the element
     - width (number) @optional width of the element
     - height (number) @optional height of the element
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     **
     = (object) the `pattern` element
     **
    \*/
    proto.ptrn = function (x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
            var attr = x;
        } else {
            attr = { patternUnits: "userSpaceOnUse" };
            if (x) {
                attr.x = x;
            }
            if (y) {
                attr.y = y;
            }
            if (width != null) {
                attr.width = width;
            }
            if (height != null) {
                attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
                attr.viewBox = [vx, vy, vw, vh];
            } else {
                attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
        }
        return this.el("pattern", attr);
    };
    /*\
     * Paper.use
     [ method ]
     **
     * Creates a <use> element.
     - id (string) @optional id of element to link
     * or
     - id (Element) @optional element to link
     **
     = (object) the `use` element
     **
    \*/
    proto.use = function (id) {
        if (id != null) {
            if (id instanceof Element) {
                if (!id.attr("id")) {
                    id.attr({ id: Snap._.id(id) });
                }
                id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
                id = id.substring(1);
            }
            return this.el("use", { "xlink:href": "#" + id });
        } else {
            return Element.prototype.use.call(this);
        }
    };
    /*\
     * Paper.symbol
     [ method ]
     **
     * Creates a <symbol> element.
     - vbx (number) @optional viewbox X
     - vby (number) @optional viewbox Y
     - vbw (number) @optional viewbox width
     - vbh (number) @optional viewbox height
     = (object) the `symbol` element
     **
    \*/
    proto.symbol = function (vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
        }

        return this.el("symbol", attr);
    };
    /*\
     * Paper.text
     [ method ]
     **
     * Draws a text string
     **
     - x (number) x coordinate position
     - y (number) y coordinate position
     - text (string|array) The text string to draw or array of strings to nest within separate `<tspan>` elements
     = (object) the `text` element
     **
     > Usage
     | var t1 = paper.text(50, 50, "Snap");
     | var t2 = paper.text(50, 50, ["S","n","a","p"]);
     | // Text path usage
     | t1.attr({textpath: "M10,10L100,100"});
     | // or
     | var pth = paper.path("M10,10L100,100");
     | t1.attr({textpath: pth});
    \*/
    proto.text = function (x, y, text) {
        var attr = {};
        if (is(x, "object")) {
            attr = x;
        } else if (x != null) {
            attr = {
                x: x,
                y: y,
                text: text || ""
            };
        }
        return this.el("text", attr);
    };
    /*\
     * Paper.line
     [ method ]
     **
     * Draws a line
     **
     - x1 (number) x coordinate position of the start
     - y1 (number) y coordinate position of the start
     - x2 (number) x coordinate position of the end
     - y2 (number) y coordinate position of the end
     = (object) the `line` element
     **
     > Usage
     | var t1 = paper.line(50, 50, 100, 100);
    \*/
    proto.line = function (x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
            attr = x1;
        } else if (x1 != null) {
            attr = {
                x1: x1,
                x2: x2,
                y1: y1,
                y2: y2
            };
        }
        return this.el("line", attr);
    };
    /*\
     * Paper.polyline
     [ method ]
     **
     * Draws a polyline
     **
     - points (array) array of points
     * or
     - varargs (…) points
     = (object) the `polyline` element
     **
     > Usage
     | var p1 = paper.polyline([10, 10, 100, 100]);
     | var p2 = paper.polyline(10, 10, 100, 100);
    \*/
    proto.polyline = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = { points: points };
        }
        return this.el("polyline", attr);
    };
    /*\
     * Paper.polygon
     [ method ]
     **
     * Draws a polygon. See @Paper.polyline
    \*/
    proto.polygon = function (points) {
        if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
            attr = points;
        } else if (points != null) {
            attr = { points: points };
        }
        return this.el("polygon", attr);
    };
    // gradients
    (function () {
        var $ = Snap._.$;
        // gradients' helpers
        function Gstops() {
            return this.selectAll("stop");
        }
        function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {
                offset: +offset + "%"
            };
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            this.node.appendChild(stop);
            return this;
        }
        function GgetBBox() {
            if (this.type == "linearGradient") {
                var x1 = $(this.node, "x1") || 0,
                    x2 = $(this.node, "x2") || 1,
                    y1 = $(this.node, "y1") || 0,
                    y2 = $(this.node, "y2") || 0;
                return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
                var cx = this.node.cx || .5,
                    cy = this.node.cy || .5,
                    r = this.node.r || 0;
                return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
        }
        function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
                return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
                el = gradientLinear.apply(0, grad.params);
            } else {
                el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
                $(el.node, {
                    gradientUnits: "userSpaceOnUse"
                });
            }
            var stops = grad.stops,
                len = stops.length,
                start = 0,
                j = 0;
            function seed(i, end) {
                var step = (end - start) / (i - j);
                for (var k = j; k < i; k++) {
                    stops[k].offset = +(+start + step * (k - j)).toFixed(2);
                }
                j = i;
                start = end;
            }
            len--;
            for (var i = 0; i < len; i++) {
                if ("offset" in stops[i]) {
                    seed(i, stops[i].offset);
                }
            }stops[len].offset = stops[len].offset || 100;
            seed(len, stops[len].offset);
            for (i = 0; i <= len; i++) {
                var stop = stops[i];
                el.addStop(stop.color, stop.offset);
            }
            return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (x1 != null) {
                $(el.node, {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2
                });
            }
            return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
                $(el.node, {
                    cx: cx,
                    cy: cy,
                    r: r
                });
            }
            if (fx != null && fy != null) {
                $(el.node, {
                    fx: fx,
                    fy: fy
                });
            }
            return el;
        }
        /*\
         * Paper.gradient
         [ method ]
         **
         * Creates a gradient element
         **
         - gradient (string) gradient descriptor
         > Gradient Descriptor
         * The gradient descriptor is an expression formatted as
         * follows: `<type>(<coords>)<colors>`.  The `<type>` can be
         * either linear or radial.  The uppercase `L` or `R` letters
         * indicate absolute coordinates offset from the SVG surface.
         * Lowercase `l` or `r` letters indicate coordinates
         * calculated relative to the element to which the gradient is
         * applied.  Coordinates specify a linear gradient vector as
         * `x1`, `y1`, `x2`, `y2`, or a radial gradient as `cx`, `cy`,
         * `r` and optional `fx`, `fy` specifying a focal point away
         * from the center of the circle. Specify `<colors>` as a list
         * of dash-separated CSS color values.  Each color may be
         * followed by a custom offset value, separated with a colon
         * character.
         > Examples
         * Linear gradient, relative from top-left corner to bottom-right
         * corner, from black through red to white:
         | var g = paper.gradient("l(0, 0, 1, 1)#000-#f00-#fff");
         * Linear gradient, absolute from (0, 0) to (100, 100), from black
         * through red at 25% to white:
         | var g = paper.gradient("L(0, 0, 100, 100)#000-#f00:25-#fff");
         * Radial gradient, relative from the center of the element with radius
         * half the width, from black to white:
         | var g = paper.gradient("r(0.5, 0.5, 0.5)#000-#fff");
         * To apply the gradient:
         | paper.circle(50, 50, 40).attr({
         |     fill: g
         | });
         = (object) the `gradient` element
        \*/
        proto.gradient = function (str) {
            return gradient(this.defs, str);
        };
        proto.gradientLinear = function (x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function (cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        /*\
         * Paper.toString
         [ method ]
         **
         * Returns SVG code for the @Paper
         = (string) SVG code for the @Paper
        \*/
        proto.toString = function () {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, { xmlns: "http://www.w3.org/2000/svg" });
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
        };
        /*\
         * Paper.toDataURL
         [ method ]
         **
         * Returns SVG code for the @Paper as Data URI string.
         = (string) Data URI string
        \*/
        proto.toDataURL = function () {
            if (window && window.btoa) {
                return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
        };
        /*\
         * Paper.clear
         [ method ]
         **
         * Removes all child nodes of the paper, except <defs>.
        \*/
        proto.clear = function () {
            var node = this.node.firstChild,
                next;
            while (node) {
                next = node.nextSibling;
                if (node.tagName != "defs") {
                    node.parentNode.removeChild(node);
                } else {
                    proto.clear.call({ node: node });
                }
                node = next;
            }
        };
    })();
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        is = Snap.is,
        clone = Snap._.clone,
        has = "hasOwnProperty",
        p2s = /,?([a-z]),?/gi,
        toFloat = parseFloat,
        math = Math,
        PI = math.PI,
        mmin = math.min,
        mmax = math.max,
        pow = math.pow,
        abs = math.abs;
    function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
            p[ps].sleep = 100;
        } else {
            p[ps] = {
                sleep: 100
            };
        }
        setTimeout(function () {
            for (var key in p) {
                if (p[has](key) && key != ps) {
                    p[key].sleep--;
                    !p[key].sleep && delete p[key];
                }
            }
        });
        return p[ps];
    }
    function box(x, y, width, height) {
        if (x == null) {
            x = y = width = height = 0;
        }
        if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
        }
        return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
        };
    }
    function toString() {
        return this.join(",").replace(p2s, "$1");
    }
    function pathClone(pathArray) {
        var res = clone(pathArray);
        res.toString = toString;
        return res;
    }
    function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
        }
    }
    function getLengthFactory(istotal, subpath) {
        function O(val) {
            return +(+val).toFixed(3);
        }
        return Snap._.cacher(function (path, length, onlystart) {
            if (path instanceof Element) {
                path = path.attr("d");
            }
            path = path2curve(path);
            var x,
                y,
                p,
                l,
                sp = "",
                subpaths = {},
                point,
                len = 0;
            for (var i = 0, ii = path.length; i < ii; i++) {
                p = path[i];
                if (p[0] == "M") {
                    x = +p[1];
                    y = +p[2];
                } else {
                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                    if (len + l > length) {
                        if (subpath && !subpaths.start) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            sp += ["C" + O(point.start.x), O(point.start.y), O(point.m.x), O(point.m.y), O(point.x), O(point.y)];
                            if (onlystart) {
                                return sp;
                            }
                            subpaths.start = sp;
                            sp = ["M" + O(point.x), O(point.y) + "C" + O(point.n.x), O(point.n.y), O(point.end.x), O(point.end.y), O(p[5]), O(p[6])].join();
                            len += l;
                            x = +p[5];
                            y = +p[6];
                            continue;
                        }
                        if (!istotal && !subpath) {
                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                            return point;
                        }
                    }
                    len += l;
                    x = +p[5];
                    y = +p[6];
                }
                sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
        }, null, Snap._.clone);
    }
    var getTotalLength = getLengthFactory(1),
        getPointAtLength = getLengthFactory(),
        getSubpathsAtLength = getLengthFactory(0, 1);
    function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t,
            t13 = pow(t1, 3),
            t12 = pow(t1, 2),
            t2 = t * t,
            t3 = t2 * t,
            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
            ax = t1 * p1x + t * c1x,
            ay = t1 * p1y + t * c1y,
            cx = t1 * c2x + t * p2x,
            cy = t1 * c2y + t * p2y,
            alpha = 90 - math.atan2(mx - nx, my - ny) * 180 / PI;
        // (mx > nx || my < ny) && (alpha += 180);
        return {
            x: x,
            y: y,
            m: { x: mx, y: my },
            n: { x: nx, y: ny },
            start: { x: ax, y: ay },
            end: { x: cx, y: cy },
            alpha: alpha
        };
    }
    function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
    }
    function isPointInsideBBox(bbox, x, y) {
        return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
    }
    function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
    }
    function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
    }
    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
            z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2,
            n = 12,
            Tvalues = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816],
            Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
            sum = 0;
        for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
        }
        return z2 * sum;
    }
    function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
        }
        var t = 1,
            step = t / 2,
            t2 = t - step,
            l,
            e = .01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
            return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
            return;
        }
        var px = nx / denominator,
            py = ny / denominator,
            px2 = +px.toFixed(2),
            py2 = +py.toFixed(2);
        if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
            return;
        }
        return { x: px, y: py };
    }
    function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
    }
    function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
    }
    function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1),
            bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1),
            l2 = bezlen.apply(0, bez2),
            n1 = ~~(l1 / 8),
            n2 = ~~(l2 / 8),
            dots1 = [],
            dots2 = [],
            xy = {},
            res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({ x: p.x, y: p.y, t: i / n1 });
        }
        for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({ x: p.x, y: p.y, t: i / n2 });
        }
        for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
                var di = dots1[i],
                    di1 = dots1[i + 1],
                    dj = dots2[j],
                    dj1 = dots2[j + 1],
                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
                if (is) {
                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                        continue;
                    }
                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                        if (justCount) {
                            res++;
                        } else {
                            res.push({
                                x: is.x,
                                y: is.y,
                                t1: t1,
                                t2: t2
                            });
                        }
                    }
                }
            }
        }
        return res;
    }
    function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
    }
    function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
    }
    function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1,
            y1,
            x2,
            y2,
            x1m,
            y1m,
            x2m,
            y2m,
            bez1,
            bez2,
            res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
                x1 = x1m = pi[1];
                y1 = y1m = pi[2];
            } else {
                if (pi[0] == "C") {
                    bez1 = [x1, y1].concat(pi.slice(1));
                    x1 = bez1[6];
                    y1 = bez1[7];
                } else {
                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                    x1 = x1m;
                    y1 = y1m;
                }
                for (var j = 0, jj = path2.length; j < jj; j++) {
                    var pj = path2[j];
                    if (pj[0] == "M") {
                        x2 = x2m = pj[1];
                        y2 = y2m = pj[2];
                    } else {
                        if (pj[0] == "C") {
                            bez2 = [x2, y2].concat(pj.slice(1));
                            x2 = bez2[6];
                            y2 = bez2[7];
                        } else {
                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                            x2 = x2m;
                            y2 = y2m;
                        }
                        var intr = interHelper(bez1, bez2, justCount);
                        if (justCount) {
                            res += intr;
                        } else {
                            for (var k = 0, kk = intr.length; k < kk; k++) {
                                intr[k].segment1 = i;
                                intr[k].segment2 = j;
                                intr[k].bez1 = bez1;
                                intr[k].bez2 = bez2;
                            }
                            res = res.concat(intr);
                        }
                    }
                }
            }
        }
        return res;
    }
    function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
    }
    function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
            return clone(pth.bbox);
        }
        if (!path) {
            return box();
        }
        path = path2curve(path);
        var x = 0,
            y = 0,
            X = [],
            Y = [],
            p;
        for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
                x = p[1];
                y = p[2];
                X.push(x);
                Y.push(y);
            } else {
                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                X = X.concat(dim.min.x, dim.max.x);
                Y = Y.concat(dim.min.y, dim.max.y);
                x = p[5];
                y = p[6];
            }
        }
        var xmin = mmin.apply(0, X),
            ymin = mmin.apply(0, Y),
            xmax = mmax.apply(0, X),
            ymax = mmax.apply(0, Y),
            bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
    }
    function rectPath(x, y, w, h, r) {
        if (r) {
            return [["M", +x + +r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
        }
        var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res.toString = toString;
        return res;
    }
    function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
            ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
            res = [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
        }
        res.toString = toString;
        return res;
    }
    var unit2px = Snap._unit2px,
        getPath = {
        path: function path(el) {
            return el.attr("path");
        },
        circle: function circle(el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function ellipse(el) {
            var attr = unit2px(el);
            return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function rect(el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function image(el) {
            var attr = unit2px(el);
            return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function line(el) {
            return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function polyline(el) {
            return "M" + el.attr("points");
        },
        polygon: function polygon(el) {
            return "M" + el.attr("points") + "z";
        },
        deflt: function deflt(el) {
            var bbox = el.node.getBBox();
            return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
    };
    function pathToRelative(pathArray) {
        var pth = paths(pathArray),
            lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
            return pathClone(pth.rel);
        }
        if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0;
        if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
                r[0] = lowerCase.call(pa[0]);
                switch (r[0]) {
                    case "a":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] - x).toFixed(3);
                        r[7] = +(pa[7] - y).toFixed(3);
                        break;
                    case "v":
                        r[1] = +(pa[1] - y).toFixed(3);
                        break;
                    case "m":
                        mx = pa[1];
                        my = pa[2];
                    default:
                        for (var j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                        }
                }
            } else {
                r = res[i] = [];
                if (pa[0] == "m") {
                    mx = pa[1] + x;
                    my = pa[2] + y;
                }
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    res[i][k] = pa[k];
                }
            }
            var len = res[i].length;
            switch (res[i][0]) {
                case "z":
                    x = mx;
                    y = my;
                    break;
                case "h":
                    x += +res[i][len - 1];
                    break;
                case "v":
                    y += +res[i][len - 1];
                    break;
                default:
                    x += +res[i][len - 2];
                    y += +res[i][len - 1];
            }
        }
        res.toString = toString;
        pth.rel = pathClone(res);
        return res;
    }
    function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
            return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) {
            // rough assumption
            pathArray = Snap.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
        }
        var res = [],
            x = 0,
            y = 0,
            mx = 0,
            my = 0,
            start = 0,
            pa0;
        if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
                r[0] = pa0.toUpperCase();
                switch (r[0]) {
                    case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +pa[6] + x;
                        r[7] = +pa[7] + y;
                        break;
                    case "V":
                        r[1] = +pa[1] + y;
                        break;
                    case "H":
                        r[1] = +pa[1] + x;
                        break;
                    case "R":
                        var dots = [x, y].concat(pa.slice(1));
                        for (var j = 2, jj = dots.length; j < jj; j++) {
                            dots[j] = +dots[j] + x;
                            dots[++j] = +dots[j] + y;
                        }
                        res.pop();
                        res = res.concat(catmullRom2bezier(dots, crz));
                        break;
                    case "O":
                        res.pop();
                        dots = ellipsePath(x, y, pa[1], pa[2]);
                        dots.push(dots[0]);
                        res = res.concat(dots);
                        break;
                    case "U":
                        res.pop();
                        res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                        r = ["U"].concat(res[res.length - 1].slice(-2));
                        break;
                    case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                    default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                }
            } else if (pa0 == "R") {
                dots = [x, y].concat(pa.slice(1));
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
            } else if (pa0 == "U") {
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
                for (var k = 0, kk = pa.length; k < kk; k++) {
                    r[k] = pa[k];
                }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
                switch (r[0]) {
                    case "Z":
                        x = +mx;
                        y = +my;
                        break;
                    case "H":
                        x = r[1];
                        break;
                    case "V":
                        y = r[1];
                        break;
                    case "M":
                        mx = r[r.length - 2];
                        my = r[r.length - 1];
                    default:
                        x = r[r.length - 2];
                        y = r[r.length - 1];
                }
            }
        }
        res.toString = toString;
        pth.abs = pathClone(res);
        return res;
    }
    function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
    }
    function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3,
            _23 = 2 / 3;
        return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
    }
    function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        var _120 = PI * 120 / 180,
            rad = PI / 180 * (+angle || 0),
            res = [],
            xy,
            rotate = Snap._.cacher(function (x, y, rad) {
            var X = x * math.cos(rad) - y * math.sin(rad),
                Y = x * math.sin(rad) + y * math.cos(rad);
            return { x: X, y: Y };
        });
        if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = x * x / (rx * rx) + y * y / (ry * ry);
            if (h > 1) {
                h = math.sqrt(h);
                rx = h * rx;
                ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));

            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
                f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
                f2 = f2 - PI * 2;
            }
        } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math.cos(f1),
            s1 = math.sin(f1),
            c2 = math.cos(f2),
            s2 = math.sin(f2),
            t = math.tan(df / 4),
            hx = 4 / 3 * rx * t,
            hy = 4 / 3 * ry * t,
            m1 = [x1, y1],
            m2 = [x1 + hx * s1, y1 - hy * c1],
            m3 = [x2 + hx * s2, y2 - hy * c2],
            m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
            return [m2, m3, m4].concat(res);
        } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0, ii = res.length; i < ii; i++) {
                newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
        }
    }
    function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
    }

    // Returns bounding box of cubic bezier curve.
    // Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
    // Original version: NISHIO Hirokazu
    // Modifications: https://github.com/timo22345
    function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [],
            bounds = [[], []],
            a,
            b,
            c,
            t,
            t1,
            t2,
            b2ac,
            sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
            if (i == 0) {
                b = 6 * x0 - 12 * x1 + 6 * x2;
                a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
                c = 3 * x1 - 3 * x0;
            } else {
                b = 6 * y0 - 12 * y1 + 6 * y2;
                a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
                c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
                if (abs(b) < 1e-12) {
                    continue;
                }
                t = -c / b;
                if (0 < t && t < 1) {
                    tvalues.push(t);
                }
                continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
                continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
                tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
                tvalues.push(t2);
            }
        }

        var x,
            y,
            j = tvalues.length,
            jlen = j,
            mt;
        while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
            bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;

        return {
            min: { x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1]) },
            max: { x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1]) }
        };
    }

    function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
            return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path),
            p2 = path2 && pathToAbsolute(path2),
            attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
            attrs2 = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
            processPath = function processPath(path, d, pcom) {
            var nx, ny;
            if (!path) {
                return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
            }
            !(path[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);
            switch (path[0]) {
                case "M":
                    d.X = path[1];
                    d.Y = path[2];
                    break;
                case "A":
                    path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                    break;
                case "S":
                    if (pcom == "C" || pcom == "S") {
                        // In "S" case we have to take into account, if the previous command is C/S.
                        nx = d.x * 2 - d.bx; // And reflect the previous
                        ny = d.y * 2 - d.by; // command's control point relative to the current point.
                    } else {
                        // or some else or nothing
                        nx = d.x;
                        ny = d.y;
                    }
                    path = ["C", nx, ny].concat(path.slice(1));
                    break;
                case "T":
                    if (pcom == "Q" || pcom == "T") {
                        // In "T" case we have to take into account, if the previous command is Q/T.
                        d.qx = d.x * 2 - d.qx; // And make a reflection similar
                        d.qy = d.y * 2 - d.qy; // to case "S".
                    } else {
                        // or something else or nothing
                        d.qx = d.x;
                        d.qy = d.y;
                    }
                    path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                    break;
                case "Q":
                    d.qx = path[1];
                    d.qy = path[2];
                    path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                    break;
                case "L":
                    path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                    break;
                case "H":
                    path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                    break;
                case "V":
                    path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                    break;
                case "Z":
                    path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                    break;
            }
            return path;
        },
            fixArc = function fixArc(pp, i) {
            if (pp[i].length > 7) {
                pp[i].shift();
                var pi = pp[i];
                while (pi.length) {
                    pcoms1[i] = "A"; // if created multiple C:s, their original seg is saved
                    p2 && (pcoms2[i] = "A"); // the same as above
                    pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                }
                pp.splice(i, 1);
                ii = mmax(p.length, p2 && p2.length || 0);
            }
        },
            fixM = function fixM(path1, path2, a1, a2, i) {
            if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                path2.splice(i, 0, ["M", a2.x, a2.y]);
                a1.bx = 0;
                a1.by = 0;
                a1.x = path1[i][1];
                a1.y = path1[i][2];
                ii = mmax(p.length, p2 && p2.length || 0);
            }
        },
            pcoms1 = [],
            // path commands of original path p
        pcoms2 = [],
            // path commands of original path p2
        pfirst = "",
            // temporary holder for original path command
        pcom = ""; // holder for previous path command of original path
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]); // save current path command

            if (pfirst != "C") // C is not saved yet, because it may be result of conversion
                {
                    pcoms1[i] = pfirst; // Save current path command
                    i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
                }
            p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

            if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
            // which may produce multiple C:s
            // so we have to make sure that C is also C in original path

            fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

            if (p2) {
                // the same procedures is done to p2
                p2[i] && (pfirst = p2[i][0]);
                if (pfirst != "C") {
                    pcoms2[i] = pfirst;
                    i && (pcom = pcoms2[i - 1]);
                }
                p2[i] = processPath(p2[i], attrs2, pcom);

                if (pcoms2[i] != "A" && pfirst == "C") {
                    pcoms2[i] = "C";
                }

                fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
            pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
    }
    function mapPath(path, matrix) {
        if (!matrix) {
            return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
                x = matrix.x(pathi[j], pathi[j + 1]);
                y = matrix.y(pathi[j], pathi[j + 1]);
                pathi[j] = x;
                pathi[j + 1] = y;
            }
        }
        return path;
    }

    // http://schepers.cc/getting-to-the-point
    function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [{ x: +crp[i - 2], y: +crp[i - 1] }, { x: +crp[i], y: +crp[i + 1] }, { x: +crp[i + 2], y: +crp[i + 3] }, { x: +crp[i + 4], y: +crp[i + 5] }];
            if (z) {
                if (!i) {
                    p[0] = { x: +crp[iLen - 2], y: +crp[iLen - 1] };
                } else if (iLen - 4 == i) {
                    p[3] = { x: +crp[0], y: +crp[1] };
                } else if (iLen - 2 == i) {
                    p[2] = { x: +crp[0], y: +crp[1] };
                    p[3] = { x: +crp[2], y: +crp[3] };
                }
            } else {
                if (iLen - 4 == i) {
                    p[3] = p[2];
                } else if (!i) {
                    p[0] = { x: +crp[i], y: +crp[i + 1] };
                }
            }
            d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
        }

        return d;
    }

    // export
    Snap.path = paths;

    /*\
     * Snap.path.getTotalLength
     [ method ]
     **
     * Returns the length of the given path in pixels
     **
     - path (string) SVG path string
     **
     = (number) length
    \*/
    Snap.path.getTotalLength = getTotalLength;
    /*\
     * Snap.path.getPointAtLength
     [ method ]
     **
     * Returns the coordinates of the point located at the given length along the given path
     **
     - path (string) SVG path string
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    Snap.path.getPointAtLength = getPointAtLength;
    /*\
     * Snap.path.getSubpath
     [ method ]
     **
     * Returns the subpath of a given path between given start and end lengths
     **
     - path (string) SVG path string
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    Snap.path.getSubpath = function (path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
    };
    /*\
     * Element.getTotalLength
     [ method ]
     **
     * Returns the length of the path in pixels (only works for `path` elements)
     = (number) length
    \*/
    elproto.getTotalLength = function () {
        if (this.node.getTotalLength) {
            return this.node.getTotalLength();
        }
    };
    // SIERRA Element.getPointAtLength()/Element.getTotalLength(): If a <path> is broken into different segments, is the jump distance to the new coordinates set by the _M_ or _m_ commands calculated as part of the path's total length?
    /*\
     * Element.getPointAtLength
     [ method ]
     **
     * Returns coordinates of the point located at the given length on the given path (only works for `path` elements)
     **
     - length (number) length, in pixels, from the start of the path, excluding non-rendering jumps
     **
     = (object) representation of the point:
     o {
     o     x: (number) x coordinate,
     o     y: (number) y coordinate,
     o     alpha: (number) angle of derivative
     o }
    \*/
    elproto.getPointAtLength = function (length) {
        return getPointAtLength(this.attr("d"), length);
    };
    // SIERRA Element.getSubpath(): Similar to the problem for Element.getPointAtLength(). Unclear how this would work for a segmented path. Overall, the concept of _subpath_ and what I'm calling a _segment_ (series of non-_M_ or _Z_ commands) is unclear.
    /*\
     * Element.getSubpath
     [ method ]
     **
     * Returns subpath of a given element from given start and end lengths (only works for `path` elements)
     **
     - from (number) length, in pixels, from the start of the path to the start of the segment
     - to (number) length, in pixels, from the start of the path to the end of the segment
     **
     = (string) path string definition for the segment
    \*/
    elproto.getSubpath = function (from, to) {
        return Snap.path.getSubpath(this.attr("d"), from, to);
    };
    Snap._.box = box;
    /*\
     * Snap.path.findDotsAtSegment
     [ method ]
     **
     * Utility method
     **
     * Finds dot coordinates on the given cubic beziér curve at the given t
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     - t (number) position on the curve (0..1)
     = (object) point information in format:
     o {
     o     x: (number) x coordinate of the point,
     o     y: (number) y coordinate of the point,
     o     m: {
     o         x: (number) x coordinate of the left anchor,
     o         y: (number) y coordinate of the left anchor
     o     },
     o     n: {
     o         x: (number) x coordinate of the right anchor,
     o         y: (number) y coordinate of the right anchor
     o     },
     o     start: {
     o         x: (number) x coordinate of the start of the curve,
     o         y: (number) y coordinate of the start of the curve
     o     },
     o     end: {
     o         x: (number) x coordinate of the end of the curve,
     o         y: (number) y coordinate of the end of the curve
     o     },
     o     alpha: (number) angle of the curve derivative at the point
     o }
    \*/
    Snap.path.findDotsAtSegment = findDotsAtSegment;
    /*\
     * Snap.path.bezierBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given cubic beziér curve
     - p1x (number) x of the first point of the curve
     - p1y (number) y of the first point of the curve
     - c1x (number) x of the first anchor of the curve
     - c1y (number) y of the first anchor of the curve
     - c2x (number) x of the second anchor of the curve
     - c2y (number) y of the second anchor of the curve
     - p2x (number) x of the second point of the curve
     - p2y (number) y of the second point of the curve
     * or
     - bez (array) array of six points for beziér curve
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.bezierBBox = bezierBBox;
    /*\
     * Snap.path.isPointInsideBBox
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside bounding box
     - bbox (string) bounding box
     - x (string) x coordinate of the point
     - y (string) y coordinate of the point
     = (boolean) `true` if point is inside
    \*/
    Snap.path.isPointInsideBBox = isPointInsideBBox;
    Snap.closest = function (x, y, X, Y) {
        var r = 100,
            b = box(x - r / 2, y - r / 2, r, r),
            inside = [],
            getter = X[0].hasOwnProperty("x") ? function (i) {
            return {
                x: X[i].x,
                y: X[i].y
            };
        } : function (i) {
            return {
                x: X[i],
                y: Y[i]
            };
        },
            found = 0;
        while (r <= 1e6 && !found) {
            for (var i = 0, ii = X.length; i < ii; i++) {
                var xy = getter(i);
                if (isPointInsideBBox(b, xy.x, xy.y)) {
                    found++;
                    inside.push(xy);
                    break;
                }
            }
            if (!found) {
                r *= 2;
                b = box(x - r / 2, y - r / 2, r, r);
            }
        }
        if (r == 1e6) {
            return;
        }
        var len = Infinity,
            res;
        for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
                len = l;
                inside[i].len = l;
                res = inside[i];
            }
        }
        return res;
    };
    /*\
     * Snap.path.isBBoxIntersect
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if two bounding boxes intersect
     - bbox1 (string) first bounding box
     - bbox2 (string) second bounding box
     = (boolean) `true` if bounding boxes intersect
    \*/
    Snap.path.isBBoxIntersect = isBBoxIntersect;
    /*\
     * Snap.path.intersection
     [ method ]
     **
     * Utility method
     **
     * Finds intersections of two paths
     - path1 (string) path string
     - path2 (string) path string
     = (array) dots of intersection
     o [
     o     {
     o         x: (number) x coordinate of the point,
     o         y: (number) y coordinate of the point,
     o         t1: (number) t value for segment of path1,
     o         t2: (number) t value for segment of path2,
     o         segment1: (number) order number for segment of path1,
     o         segment2: (number) order number for segment of path2,
     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1,
     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
     o     }
     o ]
    \*/
    Snap.path.intersection = pathIntersection;
    Snap.path.intersectionNumber = pathIntersectionNumber;
    /*\
     * Snap.path.isPointInside
     [ method ]
     **
     * Utility method
     **
     * Returns `true` if given point is inside a given closed path.
     *
     * Note: fill mode doesn’t affect the result of this method.
     - path (string) path string
     - x (number) x of the point
     - y (number) y of the point
     = (boolean) `true` if point is inside the path
    \*/
    Snap.path.isPointInside = isPointInsidePath;
    /*\
     * Snap.path.getBBox
     [ method ]
     **
     * Utility method
     **
     * Returns the bounding box of a given path
     - path (string) path string
     = (object) bounding box
     o {
     o     x: (number) x coordinate of the left top point of the box,
     o     y: (number) y coordinate of the left top point of the box,
     o     x2: (number) x coordinate of the right bottom point of the box,
     o     y2: (number) y coordinate of the right bottom point of the box,
     o     width: (number) width of the box,
     o     height: (number) height of the box
     o }
    \*/
    Snap.path.getBBox = pathBBox;
    Snap.path.get = getPath;
    /*\
     * Snap.path.toRelative
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into relative values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toRelative = pathToRelative;
    /*\
     * Snap.path.toAbsolute
     [ method ]
     **
     * Utility method
     **
     * Converts path coordinates into absolute values
     - path (string) path string
     = (array) path string
    \*/
    Snap.path.toAbsolute = pathToAbsolute;
    /*\
     * Snap.path.toCubic
     [ method ]
     **
     * Utility method
     **
     * Converts path to a new path where all segments are cubic beziér curves
     - pathString (string|array) path string or array of segments
     = (array) array of segments
    \*/
    Snap.path.toCubic = path2curve;
    /*\
     * Snap.path.map
     [ method ]
     **
     * Transform the path string with the given matrix
     - path (string) path string
     - matrix (object) see @Matrix
     = (string) transformed path string
    \*/
    Snap.path.map = mapPath;
    Snap.path.toString = toString;
    Snap.path.clone = pathClone;
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var mmax = Math.max,
        mmin = Math.min;

    // Set
    var Set = function Set(items) {
        this.items = [];
        this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
            for (var i = 0, ii = items.length; i < ii; i++) {
                if (items[i]) {
                    this[this.items.length] = this.items[this.items.length] = items[i];
                    this.length++;
                }
            }
        }
    },
        setproto = Set.prototype;
    /*\
     * Set.push
     [ method ]
     **
     * Adds each argument to the current set
     = (object) original element
    \*/
    setproto.push = function () {
        var item, len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
                len = this.items.length;
                this[len] = this.items[len] = item;
                this.length++;
            }
        }
        return this;
    };
    /*\
     * Set.pop
     [ method ]
     **
     * Removes last element and returns it
     = (object) element
    \*/
    setproto.pop = function () {
        this.length && delete this[this.length--];
        return this.items.pop();
    };
    /*\
     * Set.forEach
     [ method ]
     **
     * Executes given function for each element in the set
     *
     * If the function returns `false`, the loop stops running.
     **
     - callback (function) function to run
     - thisArg (object) context object for the callback
     = (object) Set object
    \*/
    setproto.forEach = function (callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
                return this;
            }
        }
        return this;
    };
    /*\
     * Set.animate
     [ method ]
     **
     * Animates each element in set in sync.
     *
     **
     - attrs (object) key-value pairs of destination attributes
     - duration (number) duration of the animation in milliseconds
     - easing (function) #optional easing function from @mina or custom
     - callback (function) #optional callback function that executes when the animation ends
     * or
     - animation (array) array of animation parameter for each element in set in format `[attrs, duration, easing, callback]`
     > Usage
     | // animate all elements in set to radius 10
     | set.animate({r: 10}, 500, mina.easein);
     | // or
     | // animate first element to radius 10, but second to radius 20 and in different time
     | set.animate([{r: 10}, 500, mina.easein], [{r: 20}, 1500, mina.easein]);
     = (Element) the current element
    \*/
    setproto.animate = function (attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
        }
        if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
        }
        var begin,
            handler = function handler() {
            if (begin) {
                this.b = begin;
            } else {
                begin = this.b;
            }
        },
            cb = 0,
            set = this,
            callbacker = callback && function () {
            if (++cb == set.length) {
                callback.call(this);
            }
        };
        return this.forEach(function (el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
                args[i] && el.animate.apply(el, args[i]);
            } else {
                el.animate(attrs, ms, easing, callbacker);
            }
        });
    };
    setproto.remove = function () {
        while (this.length) {
            this.pop().remove();
        }
        return this;
    };
    /*\
     * Set.bind
     [ method ]
     **
     * Specifies how to handle a specific attribute when applied
     * to a set.
     *
     **
     - attr (string) attribute name
     - callback (function) function to run
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     * or
     - attr (string) attribute name
     - element (Element) specific element in the set to apply the attribute to
     - eattr (string) attribute on the element to bind the attribute to
     = (object) Set object
    \*/
    setproto.bind = function (attr, a, b) {
        var data = {};
        if (typeof a == "function") {
            this.bindings[attr] = a;
        } else {
            var aname = b || attr;
            this.bindings[attr] = function (v) {
                data[aname] = v;
                a.attr(data);
            };
        }
        return this;
    };
    setproto.attr = function (value) {
        var unbound = {};
        for (var k in value) {
            if (this.bindings[k]) {
                this.bindings[k](value[k]);
            } else {
                unbound[k] = value[k];
            }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
        }
        return this;
    };
    /*\
     * Set.clear
     [ method ]
     **
     * Removes all elements from the set
    \*/
    setproto.clear = function () {
        while (this.length) {
            this.pop();
        }
    };
    /*\
     * Set.splice
     [ method ]
     **
     * Removes range of elements from the set
     **
     - index (number) position of the deletion
     - count (number) number of element to remove
     - insertion… (object) #optional elements to insert
     = (object) set elements that were deleted
    \*/
    setproto.splice = function (index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [],
            todel = [],
            args = [],
            i;
        for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
            delete this[i++];
        }
        return new Set(todel);
    };
    /*\
     * Set.exclude
     [ method ]
     **
     * Removes given element from the set
     **
     - element (object) element to remove
     = (boolean) `true` if object was found and removed from the set
    \*/
    setproto.exclude = function (el) {
        for (var i = 0, ii = this.length; i < ii; i++) {
            if (this[i] == el) {
                this.splice(i, 1);
                return true;
            }
        }return false;
    };
    setproto.insertAfter = function (el) {
        var i = this.items.length;
        while (i--) {
            this.items[i].insertAfter(el);
        }
        return this;
    };
    setproto.getBBox = function () {
        var x = [],
            y = [],
            x2 = [],
            y2 = [];
        for (var i = this.items.length; i--;) {
            if (!this.items[i].removed) {
                var box = this.items[i].getBBox();
                x.push(box.x);
                y.push(box.y);
                x2.push(box.x + box.width);
                y2.push(box.y + box.height);
            }
        }x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
        };
    };
    setproto.clone = function (s) {
        s = new Set();
        for (var i = 0, ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
        }
        return s;
    };
    setproto.toString = function () {
        return "Snap\u2018s set";
    };
    setproto.type = "set";
    // export
    Snap.Set = Set;
    Snap.set = function () {
        var set = new Set();
        if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var names = {},
        reUnit = /[a-z]+$/i,
        Str = String;
    names.stroke = names.fill = "colour";
    function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
            case "t":
                return [l, 0, 0];
            case "m":
                return [l, 1, 0, 0, 1, 0, 0];
            case "r":
                if (item.length == 4) {
                    return [l, 0, item[2], item[3]];
                } else {
                    return [l, 0];
                }
            case "s":
                if (item.length == 5) {
                    return [l, 1, 1, item[3], item[4]];
                } else if (item.length == 3) {
                    return [l, 1, 1];
                } else {
                    return [l, 1];
                }
        }
    }
    function equaliseTransform(t1, t2, getBBox) {
        t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
        t1 = Snap.parseTransformString(t1) || [];
        t2 = Snap.parseTransformString(t2) || [];
        var maxlength = Math.max(t1.length, t2.length),
            from = [],
            to = [],
            i = 0,
            j,
            jj,
            tt1,
            tt2;
        for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
                t1 = Snap._.transform2matrix(t1, getBBox());
                t2 = Snap._.transform2matrix(t2, getBBox());
                from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
                to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
                break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
                j in tt1 && (from[i][j] = tt1[j]);
                j in tt2 && (to[i][j] = tt2[j]);
            }
        }
        return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
        };
    }
    function getNumber(val) {
        return val;
    }
    function getUnit(unit) {
        return function (val) {
            return +val.toFixed(3) + unit;
        };
    }
    function getViewBox(val) {
        return val.join(" ");
    }
    function getColour(clr) {
        return Snap.rgb(clr[0], clr[1], clr[2]);
    }
    function getPath(path) {
        var k = 0,
            i,
            ii,
            j,
            jj,
            out,
            a,
            b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
                a[j] = "val[" + k++ + "]";
            }
            out += a + "]";
            b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
    }
    function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
            for (var j = 1, jj = path[i].length; j < jj; j++) {
                out.push(path[i][j]);
            }
        }
        return out;
    }
    function isNumeric(obj) {
        return isFinite(parseFloat(obj));
    }
    function arrayEqual(arr1, arr2) {
        if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
        }
        return arr1.toString() == arr2.toString();
    }
    Element.prototype.equal = function (name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
    };
    eve.on("snap.util.equal", function (name, b) {
        var A,
            B,
            a = Str(this.attr(name) || ""),
            el = this;
        if (isNumeric(a) && isNumeric(b)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getNumber
            };
        }
        if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
                from: [A.r, A.g, A.b, A.opacity],
                to: [B.r, B.g, B.b, B.opacity],
                f: getColour
            };
        }
        if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
                from: A,
                to: B,
                f: getViewBox
            };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (b instanceof Snap.Matrix) {
                b = b.toTransformString();
            }
            if (!Snap._.rgTransform.test(b)) {
                b = Snap._.svgTransform2string(b);
            }
            return equaliseTransform(a, b, function () {
                return el.getBBox(1);
            });
        }
        if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
                from: path2array(A[0]),
                to: path2array(A[1]),
                f: getPath(A[0])
            };
        }
        if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
                from: A,
                to: B,
                f: function f(val) {
                    return val;
                }
            };
        }
        var aUnit = a.match(reUnit),
            bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
                from: parseFloat(a),
                to: parseFloat(b),
                f: getUnit(aUnit)
            };
        } else {
            return {
                from: this.asPX(name),
                to: this.asPX(name, b),
                f: getNumber
            };
        }
    });
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        has = "hasOwnProperty",
        supportsTouch = "createTouch" in glob.doc,
        events = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"],
        touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    },
        getScroll = function getScroll(xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft",
            doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
    },
        preventDefault = function preventDefault() {
        this.returnValue = false;
    },
        preventTouch = function preventTouch() {
        return this.originalEvent.preventDefault();
    },
        stopPropagation = function stopPropagation() {
        this.cancelBubble = true;
    },
        stopTouch = function stopTouch() {
        return this.originalEvent.stopPropagation();
    },
        addEvent = function addEvent(obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
            f = function f(e) {
            var scrollY = getScroll("y", element),
                scrollX = getScroll("x", element);
            if (supportsTouch && touchMap[has](type)) {
                for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                    if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                        var olde = e;
                        e = e.targetTouches[i];
                        e.originalEvent = olde;
                        e.preventDefault = preventTouch;
                        e.stopPropagation = stopTouch;
                        break;
                    }
                }
            }
            var x = e.clientX + scrollX,
                y = e.clientY + scrollY;
            return fn.call(element, e, x, y);
        };

        if (type !== realName) {
            obj.addEventListener(type, f, false);
        }

        obj.addEventListener(realName, f, false);

        return function () {
            if (type !== realName) {
                obj.removeEventListener(type, f, false);
            }

            obj.removeEventListener(realName, f, false);
            return true;
        };
    },
        drag = [],
        dragMove = function dragMove(e) {
        var x = e.clientX,
            y = e.clientY,
            scrollY = getScroll("y"),
            scrollX = getScroll("x"),
            dragi,
            j = drag.length;
        while (j--) {
            dragi = drag[j];
            if (supportsTouch) {
                var i = e.touches && e.touches.length,
                    touch;
                while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                        x = touch.clientX;
                        y = touch.clientY;
                        (e.originalEvent ? e.originalEvent : e).preventDefault();
                        break;
                    }
                }
            } else {
                e.preventDefault();
            }
            var node = dragi.el.node,
                o,
                next = node.nextSibling,
                parent = node.parentNode,
                display = node.style.display;
            // glob.win.opera && parent.removeChild(node);
            // node.style.display = "none";
            // o = dragi.el.paper.getElementByPoint(x, y);
            // node.style.display = display;
            // glob.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
            // o && eve("snap.drag.over." + dragi.el.id, dragi.el, o);
            x += scrollX;
            y += scrollY;
            eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
    },
        dragUp = function dragUp(e) {
        Snap.unmousemove(dragMove).unmouseup(dragUp);
        var i = drag.length,
            dragi;
        while (i--) {
            dragi = drag[i];
            dragi.el._drag = {};
            eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
            eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
    };
    /*\
     * Element.click
     [ method ]
     **
     * Adds a click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unclick
     [ method ]
     **
     * Removes a click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.dblclick
     [ method ]
     **
     * Adds a double click event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.undblclick
     [ method ]
     **
     * Removes a double click event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mousedown
     [ method ]
     **
     * Adds a mousedown event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousedown
     [ method ]
     **
     * Removes a mousedown event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mousemove
     [ method ]
     **
     * Adds a mousemove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmousemove
     [ method ]
     **
     * Removes a mousemove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseout
     [ method ]
     **
     * Adds a mouseout event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseout
     [ method ]
     **
     * Removes a mouseout event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseover
     [ method ]
     **
     * Adds a mouseover event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseover
     [ method ]
     **
     * Removes a mouseover event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.mouseup
     [ method ]
     **
     * Adds a mouseup event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.unmouseup
     [ method ]
     **
     * Removes a mouseup event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchstart
     [ method ]
     **
     * Adds a touchstart event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchstart
     [ method ]
     **
     * Removes a touchstart event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchmove
     [ method ]
     **
     * Adds a touchmove event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchmove
     [ method ]
     **
     * Removes a touchmove event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchend
     [ method ]
     **
     * Adds a touchend event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchend
     [ method ]
     **
     * Removes a touchend event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/

    /*\
     * Element.touchcancel
     [ method ]
     **
     * Adds a touchcancel event handler to the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    /*\
     * Element.untouchcancel
     [ method ]
     **
     * Removes a touchcancel event handler from the element
     - handler (function) handler for the event
     = (object) @Element
    \*/
    for (var i = events.length; i--;) {
        (function (eventName) {
            Snap[eventName] = elproto[eventName] = function (fn, scope) {
                if (Snap.is(fn, "function")) {
                    this.events = this.events || [];
                    this.events.push({
                        name: eventName,
                        f: fn,
                        unbind: addEvent(this.node || document, eventName, fn, scope || this)
                    });
                } else {
                    for (var i = 0, ii = this.events.length; i < ii; i++) {
                        if (this.events[i].name == eventName) {
                            try {
                                this.events[i].f.call(this);
                            } catch (e) {}
                        }
                    }
                }
                return this;
            };
            Snap["un" + eventName] = elproto["un" + eventName] = function (fn) {
                var events = this.events || [],
                    l = events.length;
                while (l--) {
                    if (events[l].name == eventName && (events[l].f == fn || !fn)) {
                        events[l].unbind();
                        events.splice(l, 1);
                        !events.length && delete this.events;
                        return this;
                    }
                }return this;
            };
        })(events[i]);
    }
    /*\
     * Element.hover
     [ method ]
     **
     * Adds hover event handlers to the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     - icontext (object) #optional context for hover in handler
     - ocontext (object) #optional context for hover out handler
     = (object) @Element
    \*/
    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
    };
    /*\
     * Element.unhover
     [ method ]
     **
     * Removes hover event handlers from the element
     - f_in (function) handler for hover in
     - f_out (function) handler for hover out
     = (object) @Element
    \*/
    elproto.unhover = function (f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
    };
    var draggable = [];
    // SIERRA unclear what _context_ refers to for starting, ending, moving the drag gesture.
    // SIERRA Element.drag(): _x position of the mouse_: Where are the x/y values offset from?
    // SIERRA Element.drag(): much of this member's doc appears to be duplicated for some reason.
    // SIERRA Unclear about this sentence: _Additionally following drag events will be triggered: drag.start.<id> on start, drag.end.<id> on end and drag.move.<id> on every move._ Is there a global _drag_ object to which you can assign handlers keyed by an element's ID?
    /*\
     * Element.drag
     [ method ]
     **
     * Adds event handlers for an element's drag gesture
     **
     - onmove (function) handler for moving
     - onstart (function) handler for drag start
     - onend (function) handler for drag end
     - mcontext (object) #optional context for moving handler
     - scontext (object) #optional context for drag start handler
     - econtext (object) #optional context for drag end handler
     * Additionaly following `drag` events are triggered: `drag.start.<id>` on start,
     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element is dragged over another element
     * `drag.over.<id>` fires as well.
     *
     * Start event and start handler are called in specified context or in context of the element with following parameters:
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * Move event and move handler are called in specified context or in context of the element with following parameters:
     o dx (number) shift by x from the start point
     o dy (number) shift by y from the start point
     o x (number) x position of the mouse
     o y (number) y position of the mouse
     o event (object) DOM event object
     * End event and end handler are called in specified context or in context of the element with following parameters:
     o event (object) DOM event object
     = (object) @Element
    \*/
    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
            var origTransform;
            return el.drag(function (dx, dy) {
                this.attr({
                    transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
                });
            }, function () {
                origTransform = this.transform().local;
            });
        }
        function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({ el: el, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope });
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({ el: el, start: start, init: init });
        el.mousedown(init);
        return el;
    };
    /*
     * Element.onDragOver
     [ method ]
     **
     * Shortcut to assign event handler for `drag.over.<id>` event, where `id` is the element's `id` (see @Element.id)
     - f (function) handler for event, first argument would be the element you are dragging over
    \*/
    // elproto.onDragOver = function (f) {
    //     f ? eve.on("snap.drag.over." + this.id, f) : eve.unbind("snap.drag.over." + this.id);
    // };
    /*\
     * Element.undrag
     [ method ]
     **
     * Removes all drag event handlers from the given element
    \*/
    elproto.undrag = function () {
        var i = draggable.length;
        while (i--) {
            if (draggable[i].el == this) {
                this.unmousedown(draggable[i].init);
                draggable.splice(i, 1);
                eve.unbind("snap.drag.*." + this.id);
                eve.unbind("snap.draginit." + this.id);
            }
        }!draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
        return this;
    };
});

// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob) {
    var elproto = Element.prototype,
        pproto = Paper.prototype,
        rgurl = /^\s*url\((.+)\)/,
        Str = String,
        $ = Snap._.$;
    Snap.filter = {};
    /*\
     * Paper.filter
     [ method ]
     **
     * Creates a `<filter>` element
     **
     - filstr (string) SVG fragment of filter provided as a string
     = (object) @Element
     * Note: It is recommended to use filters embedded into the page inside an empty SVG element.
     > Usage
     | var f = paper.filter('<feGaussianBlur stdDeviation="2"/>'),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    pproto.filter = function (filstr) {
        var paper = this;
        if (paper.type != "svg") {
            paper = paper.paper;
        }
        var f = Snap.parse(Str(filstr)),
            id = Snap._.id(),
            width = paper.node.offsetWidth,
            height = paper.node.offsetHeight,
            filter = $("filter");
        $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
    };

    eve.on("snap.util.getattr.filter", function () {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
        }
    });
    eve.on("snap.util.attr.filter", function (value) {
        if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
                $(value.node, { id: value.id });
                id = value.id;
            }
            $(this.node, {
                filter: Snap.url(id)
            });
        }
        if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
        }
    });
    /*\
     * Snap.filter.blur
     [ method ]
     **
     * Returns an SVG markup string for the blur filter
     **
     - x (number) amount of horizontal blur, in pixels
     - y (number) #optional amount of vertical blur, in pixels
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.blur(5, 10)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.blur = function (x, y) {
        if (x == null) {
            x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {
            def: def
        });
    };
    Snap.filter.blur.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.shadow
     [ method ]
     **
     * Returns an SVG markup string for the shadow filter
     **
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - blur (number) #optional amount of blur
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - color (string) #optional color of the shadow
     - opacity (number) #optional `0..1` opacity of the shadow
     * which makes blur default to `4`. Or
     - dx (number) #optional horizontal shift of the shadow, in pixels
     - dy (number) #optional vertical shift of the shadow, in pixels
     - opacity (number) #optional `0..1` opacity of the shadow
     = (string) filter representation
     > Usage
     | var f = paper.filter(Snap.filter.shadow(0, 2, 3)),
     |     c = paper.circle(10, 10, 10).attr({
     |         filter: f
     |     });
    \*/
    Snap.filter.shadow = function (dx, dy, blur, color, opacity) {
        if (typeof blur == "string") {
            color = blur;
            opacity = color;
            blur = 4;
        }
        if (typeof color != "string") {
            opacity = color;
            color = "#000";
        }
        color = color || "#000";
        if (blur == null) {
            blur = 4;
        }
        if (opacity == null) {
            opacity = 1;
        }
        if (dx == null) {
            dx = 0;
            dy = 2;
        }
        if (dy == null) {
            dy = dx;
        }
        color = Snap.color(color);
        return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
        });
    };
    Snap.filter.shadow.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.grayscale
     [ method ]
     **
     * Returns an SVG markup string for the grayscale filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.grayscale = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
        });
    };
    Snap.filter.grayscale.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.sepia
     [ method ]
     **
     * Returns an SVG markup string for the sepia filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.sepia = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
        });
    };
    Snap.filter.sepia.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.saturate
     [ method ]
     **
     * Returns an SVG markup string for the saturate filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.saturate = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {
            amount: 1 - amount
        });
    };
    Snap.filter.saturate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.hueRotate
     [ method ]
     **
     * Returns an SVG markup string for the hue-rotate filter
     **
     - angle (number) angle of rotation
     = (string) filter representation
    \*/
    Snap.filter.hueRotate = function (angle) {
        angle = angle || 0;
        return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
            angle: angle
        });
    };
    Snap.filter.hueRotate.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.invert
     [ method ]
     **
     * Returns an SVG markup string for the invert filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.invert = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        //        <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" color-interpolation-filters="sRGB"/>
        return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
        });
    };
    Snap.filter.invert.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.brightness
     [ method ]
     **
     * Returns an SVG markup string for the brightness filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.brightness = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
            amount: amount
        });
    };
    Snap.filter.brightness.toString = function () {
        return this();
    };
    /*\
     * Snap.filter.contrast
     [ method ]
     **
     * Returns an SVG markup string for the contrast filter
     **
     - amount (number) amount of filter (`0..1`)
     = (string) filter representation
    \*/
    Snap.filter.contrast = function (amount) {
        if (amount == null) {
            amount = 1;
        }
        return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
        });
    };
    Snap.filter.contrast.toString = function () {
        return this();
    };
});

// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Snap.plugin(function (Snap, Element, Paper, glob, Fragment) {
    var box = Snap._.box,
        is = Snap.is,
        firstLetter = /^[^a-z]*([tbmlrc])/i,
        toString = function toString() {
        return "T" + this.dx + "," + this.dy;
    };
    /*\
     * Element.getAlign
     [ method ]
     **
     * Returns shift needed to align the element relatively to given element.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object|string) Object in format `{dx: , dy: }` also has a string representation as a transformation string
     > Usage
     | el.transform(el.getAlign(el2, "top"));
     * or
     | var dy = el.getAlign(el2, "top").dy;
    \*/
    Element.prototype.getAlign = function (el, way) {
        if (way == null && is(el, "string")) {
            way = el;
            el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el),
            bb = this.getBBox(),
            out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
            case "t":
                out.dx = 0;
                out.dy = bx.y - bb.y;
                break;
            case "b":
                out.dx = 0;
                out.dy = bx.y2 - bb.y2;
                break;
            case "m":
                out.dx = 0;
                out.dy = bx.cy - bb.cy;
                break;
            case "l":
                out.dx = bx.x - bb.x;
                out.dy = 0;
                break;
            case "r":
                out.dx = bx.x2 - bb.x2;
                out.dy = 0;
                break;
            default:
                out.dx = bx.cx - bb.cx;
                out.dy = 0;
                break;
        }
        out.toString = toString;
        return out;
    };
    /*\
     * Element.align
     [ method ]
     **
     * Aligns the element relatively to given one via transformation.
     * If no elements specified, parent `<svg>` container will be used.
     - el (object) @optional alignment element
     - way (string) one of six values: `"top"`, `"middle"`, `"bottom"`, `"left"`, `"center"`, `"right"`
     = (object) this element
     > Usage
     | el.align(el2, "top");
     * or
     | el.align("middle");
    \*/
    Element.prototype.align = function (el, way) {
        return this.transform("..." + this.getAlign(el, way));
    };
});

module.exports = Snap;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".breadcrumbs {\n  font-size: 1.2rem;\n  text-align: center; }\n  .breadcrumbs span:hover {\n    cursor: pointer; }\n  .breadcrumbs span::after {\n    content: ' - '; }\n  .breadcrumbs span:last-child {\n    font-weight: bold; }\n    .breadcrumbs span:last-child::after {\n      content: ''; }\n", ""]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".contribute-button {\n  background-color: #f57c00;\n  border: 0;\n  border-radius: 4px;\n  bottom: 10px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  font-weight: bold;\n  padding: 6px 10px;\n  position: absolute;\n  right: 10px;\n  text-align: center;\n  transition: box-shadow .218s, background-color .218s;\n  white-space: nowrap;\n  z-index: 2; }\n  .contribute-button:hover {\n    background: #ef6c00;\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1), 5px 0 13px 0 rgba(0, 0, 0, 0.1), -5px 0 10px 0 rgba(0, 0, 0, 0.1);\n    cursor: pointer; }\n  .contribute-button:focus {\n    outline: none; }\n  @media (max-width: 630px) {\n    .contribute-button {\n      display: none; } }\n\n.contribute-button-emoji {\n  height: 24px; }\n\n.contribute-button-text {\n  color: #f5f5f5;\n  margin-right: 5px;\n  vertical-align: 4px; }\n", ""]);

// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".contribute-dialog b,\n.contribute-dialog h3,\n.contribute-dialog h4 {\n  color: #212121;\n  font-weight: bold; }\n\n.contribute-dialog li {\n  margin-bottom: 10px; }\n\n.contribute-dialog pre {\n  background-color: #424242;\n  color: #f5f5f5;\n  font-family: monospace;\n  overflow: scroll;\n  padding: 10px; }\n\n.contribute-dialog code {\n  background-color: #bdbdbd;\n  border-radius: 2px;\n  font-family: monospace;\n  padding: 2px 4px; }\n", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".dialog-footer--reject,\n.dialog-footer--accept {\n  background-color: #eee;\n  border-radius: 4px;\n  color: #212121;\n  display: inline-block;\n  font-weight: bold;\n  margin: 5px;\n  padding: 10px;\n  transition: background-color .218s; }\n  .dialog-footer--reject:hover,\n  .dialog-footer--accept:hover {\n    background-color: rgba(0, 0, 0, 0.2); }\n\n.dialog-container {\n  background-color: rgba(0, 0, 0, 0.2);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  max-height: 100%;\n  overflow: scroll;\n  padding: 30px 20px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 5; }\n  .dialog-container input {\n    background-color: transparent;\n    border: 0;\n    bottom: -1px;\n    height: 1px;\n    position: absolute;\n    width: 1px; }\n    .dialog-container input:focus {\n      outline: none; }\n\n.dialog-container--centered {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.dialog-container--invisible {\n  display: none; }\n\n.dialog {\n  background-color: #eee;\n  border-radius: 4px;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1), 5px 0 13px 0 rgba(0, 0, 0, 0.1), -5px 0 10px 0 rgba(0, 0, 0, 0.1);\n  color: #212121;\n  font-size: 1rem;\n  margin: 0 auto;\n  max-width: 700px;\n  min-width: 300px;\n  padding: 5px; }\n\n.dialog-title {\n  color: #212121;\n  font-size: 1.3rem;\n  font-weight: bold;\n  padding: 10px; }\n\n.dialog-body {\n  color: #616161;\n  padding: 5px 20px; }\n\n.dialog-footer {\n  text-align: right; }\n", ""]);

// exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".react-autosuggest__suggestion, .react-autosuggest__input {\n  background-color: #e0e0e0;\n  border: 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  color: #616161;\n  display: block;\n  font-size: 2em;\n  margin: 0 auto;\n  max-width: 500px;\n  padding: 10px;\n  transition: box-shadow .218s, background-color .218s, color .218s;\n  width: 100%; }\n  .react-autosuggest__suggestion:focus, .react-autosuggest__input:focus {\n    background-color: #eee;\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1), 5px 0 13px 0 rgba(0, 0, 0, 0.1), -5px 0 10px 0 rgba(0, 0, 0, 0.1);\n    color: #212121;\n    outline: none; }\n\n.searchbar-container {\n  padding: 10px 5px;\n  position: absolute;\n  top: 30%;\n  width: 100%; }\n  .searchbar-container .helpText {\n    line-height: 1.8rem;\n    margin-top: 40px;\n    text-align: center; }\n  .searchbar-container::before {\n    color: #e0e0e0;\n    content: 'I want to learn';\n    display: block;\n    font-size: 3em;\n    font-weight: bold;\n    margin-bottom: 20px;\n    text-align: center; }\n\n.react-autosuggest__suggestions-container {\n  margin: -5px auto;\n  max-height: 210px;\n  max-width: 500px;\n  overflow-y: auto;\n  position: relative; }\n  .react-autosuggest__suggestions-container::before {\n    border-radius: 0 0 5px 5px;\n    bottom: 0;\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1), 5px 0 13px 0 rgba(0, 0, 0, 0.1), -5px 0 10px 0 rgba(0, 0, 0, 0.1);\n    content: '';\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    z-index: -1; }\n\n::-webkit-scrollbar {\n  display: none; }\n\n.searchbar-container--exploring {\n  position: initial; }\n  .searchbar-container--exploring::before {\n    display: none; }\n  .searchbar-container--exploring .react-autosuggest__suggestions-container {\n    left: 50%;\n    position: absolute;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    width: 100%; }\n  .searchbar-container--exploring .helpText {\n    display: none; }\n  @media (max-width: 610px) {\n    .searchbar-container--exploring .react-autosuggest__input {\n      margin: 0;\n      width: calc(100% - 50px); } }\n  @media (max-width: 768px) {\n    .searchbar-container--exploring {\n      z-index: 1; } }\n\n.react-autosuggest__suggestion {\n  background-color: #eee;\n  border-radius: 0;\n  box-shadow: none; }\n  .react-autosuggest__suggestion:first-child {\n    padding-top: 15px; }\n  .react-autosuggest__suggestion:last-child {\n    border-radius: 0 0 5px 5px; }\n  .react-autosuggest__suggestion div {\n    color: #616161; }\n\n.react-autosuggest__suggestion--highlighted {\n  background-color: #bdbdbd; }\n  .react-autosuggest__suggestion--highlighted div {\n    color: #212121; }\n\n.react-autosuggest__suggestions-list {\n  margin: 0;\n  padding: 0; }\n\n@media (max-width: 768px) {\n  body {\n    font-size: 12px; } }\n", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".bm-menu-wrap {\n  z-index: 3 !important; }\n\n.sidebar-menu-block {\n  margin-bottom: 20px; }\n\n.sidebar-menu-item {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: bold; }\n\n.sidebar-menu-options {\n  font-size: 1rem;\n  height: 0;\n  overflow: hidden; }\n  .sidebar-menu-options ul {\n    list-style-type: none;\n    padding: 0; }\n  .sidebar-menu-options div,\n  .sidebar-menu-options li {\n    border-bottom: 1px solid #424242;\n    color: #e0e0e0;\n    cursor: default;\n    padding: 10px;\n    padding-left: 20px;\n    transition: background-color .218s; }\n  .sidebar-menu-options div:not([disabled]) {\n    cursor: pointer; }\n    .sidebar-menu-options div:not([disabled]):hover {\n      background-color: #424242; }\n  .sidebar-menu-options div:last-child,\n  .sidebar-menu-options li:last-child {\n    border-bottom: 0; }\n\n.sidebar-menu-options--visible {\n  height: initial; }\n\n.bm-burger-button {\n  height: 30px;\n  margin: 25px 30px;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 36px; }\n\n.bm-burger-bars {\n  border-radius: 2px; }\n\n.theme-create {\n  padding-top: 30px; }\n\n.bm-cross-button {\n  height: 24px;\n  width: 24px; }\n\n.bm-menu {\n  font-size: 1.15em;\n  padding: 2.5em 1.5em 0; }\n\n.bm-item-list {\n  padding: .8em; }\n\n.bm-overlay {\n  background: rgba(0, 0, 0, 0.2); }\n\n.menu-item {\n  cursor: pointer; }\n\n@media (max-width: 768px) {\n  .bm-burger-button {\n    margin: 20px 30px; } }\n\n@media (max-width: 670px) {\n  .bm-burger-button {\n    margin: 20px 10px; } }\n", ""]);

// exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n  font-family: 'Raleway', sans-serif; }\n\nbody {\n  margin: 0; }\n  @media (max-width: 768px) {\n    body {\n      font-size: 12px; } }\n\nfooter {\n  bottom: 0;\n  padding: 10px;\n  position: absolute;\n  width: 100%; }\n  footer a {\n    margin-right: 20px;\n    text-decoration: none;\n    z-index: -1; }\n    footer a span {\n      font-weight: bold;\n      vertical-align: 4px; }\n\n.thank-you:hover svg {\n  fill: #ff3d00; }\n\n.thank-you:hover span {\n  color: #ff3d00; }\n\n.map:hover svg {\n  fill: #ff9100; }\n\n.map:hover span {\n  color: #ff9100; }\n\n.emoji-reference:hover {\n  cursor: default; }\n  .emoji-reference:hover + .emoji-reference-container {\n    display: block; }\n\n.emoji-reference-container {\n  bottom: 50px;\n  display: none;\n  left: 3%;\n  position: absolute; }\n\n.emoji-reference-table {\n  border-radius: 10px;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1), 5px 0 13px 0 rgba(0, 0, 0, 0.1), -5px 0 10px 0 rgba(0, 0, 0, 0.1);\n  padding: 15px 10px; }\n\n.emoji-reference-icon {\n  height: 24px;\n  padding: 2px;\n  width: 24px; }\n\n.patreon-link {\n  color: #9c27b0; }\n\n.thank-you-text {\n  margin: 0;\n  padding: 20px;\n  text-align: center; }\n  .thank-you-text + span {\n    vertical-align: 6px; }\n\n.twitter:hover g {\n  fill: #1da1f3; }\n\n.twitter:hover span {\n  color: #1da1f3; }\n\n.emoji-reddit {\n  border-radius: 50%; }\n\n.mindmap-svg {\n  height: calc(100vh - 142px); }\n  @media (max-width: 768px) {\n    .mindmap-svg {\n      height: calc(100vh - 134px); } }\n\n.mindmap-node p:hover {\n  background-color: #9e9e9e; }\n\n.mindmap-node p,\n.mindmap-node a {\n  color: #212121;\n  text-decoration: none; }\n\n@media (max-width: 630px) {\n  .twitter,\n  .thank-you,\n  .octocat > span {\n    display: none; } }\n\n@-webkit-keyframes scaleout {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes scaleout {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n.spinner {\n  -webkit-animation: scaleout 1s infinite ease-in-out;\n          animation: scaleout 1s infinite ease-in-out;\n  border-radius: 100%;\n  height: 40px;\n  margin: 100px auto;\n  width: 40px; }\n", ""]);

// exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".Night {\n  background-color: #212121; }\n  .Night .searchbar-container::before {\n    color: #eee; }\n  .Night .react-autosuggest__input:focus {\n    background-color: #fff; }\n  .Night .helpText {\n    color: #eee; }\n  .Night .breadcrumbs span {\n    color: #eee; }\n  .Night .mindmap-connection {\n    stroke: #e0e0e0; }\n  .Night .mindmap-subnode-group a {\n    color: #eee; }\n  .Night .bm-burger-bars {\n    background: #eee; }\n  .Night .bm-menu {\n    background: #bdbdbd; }\n  .Night .bm-item-list {\n    color: #212121; }\n  .Night .bm-cross {\n    background-color: #212121; }\n  .Night .sidebar-menu-item {\n    color: #212121; }\n  .Night .sidebar-menu-options div,\n  .Night .sidebar-menu-options li {\n    border-color: #9e9e9e;\n    color: #424242; }\n  .Night .sidebar-menu-options div:not([disabled]):hover {\n    background-color: #9e9e9e; }\n  .Night .thank-you-text {\n    color: #eee; }\n  .Night footer a svg {\n    fill: #eee; }\n  .Night footer a span {\n    color: #eee; }\n  .Night .octocat:hover svg {\n    fill: #9e9e9e; }\n  .Night .octocat:hover span {\n    color: #9e9e9e; }\n  .Night .emoji-reference:hover svg {\n    fill: #9e9e9e; }\n  .Night .emoji-reference:hover span {\n    color: #9e9e9e; }\n  .Night .emoji-reference-table {\n    background-color: #eee;\n    color: #212121; }\n  .Night .spinner {\n    background-color: #eee; }\n", ""]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".PearlWhite {\n  background-color: #eee; }\n  .PearlWhite .searchbar-container::before {\n    color: #212121; }\n  .PearlWhite .react-autosuggest__input:focus {\n    background-color: #fff; }\n  .PearlWhite .helpText {\n    color: #212121; }\n  .PearlWhite .breadcrumbs span {\n    color: #212121; }\n  .PearlWhite .mindmap-connection {\n    stroke: #212121; }\n  .PearlWhite .mindmap-subnode-group a {\n    color: #212121; }\n  .PearlWhite .bm-burger-bars {\n    background: #212121; }\n  .PearlWhite .bm-menu {\n    background: #212121; }\n  .PearlWhite .bm-cross {\n    background-color: #eee; }\n  .PearlWhite .sidebar-menu-item {\n    color: #eee; }\n  .PearlWhite .sidebar-menu-options div,\n  .PearlWhite .sidebar-menu-options li {\n    border-color: #424242;\n    color: #e0e0e0; }\n  .PearlWhite .sidebar-menu-options a {\n    color: #ff9100; }\n  .PearlWhite .sidebar-menu-options div:not([disabled]):hover {\n    background-color: #424242; }\n  .PearlWhite .thank-you-text {\n    color: #212121; }\n  .PearlWhite footer a svg {\n    fill: #212121; }\n  .PearlWhite footer a span {\n    color: #212121; }\n  .PearlWhite .octocat:hover svg {\n    fill: #757575; }\n  .PearlWhite .octocat:hover span {\n    color: #757575; }\n  .PearlWhite .emoji-reference:hover svg {\n    fill: #757575; }\n  .PearlWhite .emoji-reference:hover span {\n    color: #757575; }\n  .PearlWhite .emoji-reference-table {\n    background-color: #212121;\n    color: #eee; }\n  .PearlWhite .spinner {\n    background-color: #212121; }\n", ""]);

// exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_Breadcrumbs.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_Breadcrumbs.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_ContributeButton.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_ContributeButton.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_ContributeDialog.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_ContributeDialog.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_Dialog.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_Dialog.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_SearchBar.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_SearchBar.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_Sidebar.sass", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./_Sidebar.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_106__;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_107__;

/***/ })
/******/ ]);
});