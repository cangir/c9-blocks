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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 410);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 26);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 5 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 44),
    getValue = __webpack_require__(/*! ./_getValue */ 47);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 7 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 21);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 8 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 5);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 9 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ 56);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 11 */
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 12 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 13),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 15);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 13 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 14),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 35),
    objectToString = __webpack_require__(/*! ./_objectToString */ 36);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 14 */
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 15 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 16 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 12);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 17 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 39),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 40),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 41),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 42),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 43);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 18 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 4),
    isKey = __webpack_require__(/*! ./_isKey */ 25),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ 64),
    toString = __webpack_require__(/*! ./toString */ 19);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 19 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 67);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 20 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 21 */
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 22 */
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 5),
    root = __webpack_require__(/*! ./_root */ 3);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 23 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 48),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 55),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 57),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 58),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 59);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 24 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 18),
    toKey = __webpack_require__(/*! ./_toKey */ 16);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 25 */
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 4),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 12);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 26 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ 34)))

/***/ }),
/* 27 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 13),
    isObject = __webpack_require__(/*! ./isObject */ 6);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 28 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 29 */,
/* 30 */
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 24);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 35 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 36 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 40 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 41 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 42 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 43 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 7);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 44 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 27),
    isMasked = __webpack_require__(/*! ./_isMasked */ 45),
    isObject = __webpack_require__(/*! ./isObject */ 6),
    toSource = __webpack_require__(/*! ./_toSource */ 28);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 45 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ 46);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 46 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 3);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 47 */
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 48 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ 49),
    ListCache = __webpack_require__(/*! ./_ListCache */ 17),
    Map = __webpack_require__(/*! ./_Map */ 22);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 49 */
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ 50),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ 51),
    hashGet = __webpack_require__(/*! ./_hashGet */ 52),
    hashHas = __webpack_require__(/*! ./_hashHas */ 53),
    hashSet = __webpack_require__(/*! ./_hashSet */ 54);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 50 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 51 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 52 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 53 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 54 */
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 55 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 56 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 57 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 58 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 59 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 9);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 65);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 65 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ 66);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 66 */
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 23);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 67 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 14),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 20),
    isArray = __webpack_require__(/*! ./isArray */ 4),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 12);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 68 */,
/* 69 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */
/*!*********************************************!*\
  !*** ./src/stores/twitter/prepare-query.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = prepareQuery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs__ = __webpack_require__(/*! qs */ 419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_qs__);


function prepareQuery(type, data) {
    var additionalData = __WEBPACK_IMPORTED_MODULE_0_qs___default.a.stringify(data, { encode: false });
    var query = '/c9-blocks/get_twitter_' + type + '/' + (additionalData ? '?' + additionalData : '');

    return query;
}

/***/ }),
/* 229 */
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var util = __webpack_require__(/*! ./utils */ 69);

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = util.assign(
    {
        'default': Format.RFC3986,
        formatters: {
            RFC1738: function (value) {
                return replace.call(value, percentTwenties, '+');
            },
            RFC3986: function (value) {
                return String(value);
            }
        }
    },
    Format
);


/***/ }),
/* 230 */
/*!***************************************!*\
  !*** ./src/stores/twitter/actions.js ***!
  \***************************************/
/*! exports provided: apiFetch, setTwitterFeed, setTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["apiFetch"] = apiFetch;
/* harmony export (immutable) */ __webpack_exports__["setTwitterFeed"] = setTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["setTwitterProfile"] = setTwitterProfile;
function apiFetch(request) {
	return {
		type: "API_FETCH",
		request: request
	};
}

function setTwitterFeed(query, feed) {
	return {
		type: "SET_TWITTER_FEED",
		query: query,
		feed: feed
	};
}

function setTwitterProfile(query, profile) {
	return {
		type: "SET_TWITTER_PROFILE",
		query: query,
		profile: profile
	};
}

/***/ }),
/* 231 */
/*!*********************************************************!*\
  !*** ./node_modules/babel-runtime/regenerator/index.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 424);


/***/ }),
/* 232 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */
/*!********************************!*\
  !*** ./src/update-category.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_c9_feather_logo_icon__ = __webpack_require__(/*! ../assets/c9-feather-logo-icon */ 411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_deregister_blocks__ = __webpack_require__(/*! ./update-category/deregister-blocks */ 412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update_category_deregister_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__update_category_deregister_blocks__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_filters__ = __webpack_require__(/*! ./update-category/register-filters */ 413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_category_register_filters___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__update_category_register_filters__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_category_register_styles__ = __webpack_require__(/*! ./update-category/register-styles */ 414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_category_register_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__update_category_register_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_category_register_stores__ = __webpack_require__(/*! ./update-category/register-stores */ 415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sidebar__ = __webpack_require__(/*! ./components/sidebar */ 426);
/**
 * WordPress dependencies
 */
var updateCategory = wp.blocks.updateCategory;

/**
 * Icon
 */



if (updateCategory) {
  updateCategory("c9-blocks", { icon: __WEBPACK_IMPORTED_MODULE_0__assets_c9_feather_logo_icon__["a" /* default */] });
}







/***/ }),
/* 411 */
/*!****************************************!*\
  !*** ./assets/c9-feather-logo-icon.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _wp$components = wp.components,
    G = _wp$components.G,
    Path = _wp$components.Path,
    SVG = _wp$components.SVG;


var Icon = wp.element.createElement(
	SVG,
	{ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 234.92 174.65" },
	wp.element.createElement(
		"defs",
		null,
		wp.element.createElement(
			"style",
			null,
			".cls-1{fill-rule:evenodd;fill:url(#linear-gradient);}"
		),
		wp.element.createElement(
			"linearGradient",
			{
				id: "linear-gradient",
				x1: "79.12",
				y1: "23.81",
				x2: "166.4",
				y2: "158.22",
				gradientUnits: "userSpaceOnUse"
			},
			wp.element.createElement("stop", { offset: "0", stopColor: "#61cae5" }),
			wp.element.createElement("stop", { offset: "0.12", stopColor: "#64c6e1" }),
			wp.element.createElement("stop", { offset: "0.25", stopColor: "#6dbad3" }),
			wp.element.createElement("stop", { offset: "0.39", stopColor: "#7ba7bd" }),
			wp.element.createElement("stop", { offset: "0.54", stopColor: "#8f8b9f" }),
			wp.element.createElement("stop", { offset: "0.68", stopColor: "#a96877" }),
			wp.element.createElement("stop", { offset: "0.83", stopColor: "#c93d48" }),
			wp.element.createElement("stop", { offset: "0.92", stopColor: "#df1f26" })
		)
	),
	wp.element.createElement(
		"title",
		null,
		"c9-feather-logo-icon"
	),
	wp.element.createElement(
		G,
		{ id: "Layer_2", "data-name": "Layer 2" },
		wp.element.createElement(
			G,
			{ id: "logo_gradient", "data-name": "logo gradient" },
			wp.element.createElement(Path, {
				className: "cls-1",
				d: "M47,138.06C40.37,123.9,40.84,36.41,83.54,22.4c0,0-15.64,7.29-10.12,27.45,7.2-13.68,20.33-37.22,57.77-43.46,24-2.89-13.15,1.1-6,22.22.24-8.88,59.41-45,108-19.81C246.43,104.69,177,110.06,177,110.06h0s14.95,2.38,23.83-.5c-9.12,39.84-63.13,42.14-63.13,42.14s20.51,5.11,34.92,2.47c-49.45,32.4-116.86-4.86-116.86-4.86-.27.08-.83-.43-1.58-1.31l112-78a25.09,25.09,0,1,0-6-6.27L79.9,120.4l-2.23-3.25-30.59,21M183.72,33.74a16.25,16.25,0,1,1-18.84,13.17,16.24,16.24,0,0,1,18.84-13.17ZM54.17,148l-.39-.55.43.52,0,0Zm-34.43-6.55,8.45-5.5,5.5,8.44-8.44,5.5-5.51-8.44Zm-4.37,14.87-5.5-8.44,8.45-5.5,5.5,8.44-8.45,5.5ZM5.5,162.79,0,154.34l8.45-5.5,5.5,8.44L5.5,162.79Zm46.86-13.87L13.41,174.65,6.46,164.31,45,139.3l7.33,9.62Z"
			})
		)
	)
);

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 412 */
/*!**************************************************!*\
  !*** ./src/update-category/deregister-blocks.js ***!
  \**************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

var unregisterBlockType = wp.blocks.unregisterBlockType;


var loadBlocksEditor = null;

if ("undefined" !== typeof window._wpLoadBlockEditor) {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if ("undefined" !== typeof window._wpLoadGutenbergEditor) {
	// Using WP core Gutenberg
	loadBlocksEditor = window._wpLoadGutenbergEditor;
}

if (loadBlocksEditor) {
	loadBlocksEditor.then(function () {
		unregisterBlockType("core/verse");
		// unregisterBlockType("core/columns");
	});
}

/***/ }),
/* 413 */
/*!*************************************************!*\
  !*** ./src/update-category/register-filters.js ***!
  \*************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

var addFilter = wp.hooks.addFilter;


function formatClassName(className) {
	var result = className.replace("wp-block-c9-blocks", "c9");
	return result;
}

addFilter("c9-blocks.editor.className", "c9-blocks/format-classname", formatClassName);
addFilter("c9-blocks.blocks.className", "c9-blocks/format-classname", formatClassName);

/***/ }),
/* 414 */
/*!************************************************!*\
  !*** ./src/update-category/register-styles.js ***!
  \************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// const { registerBlockStyle } = wp.blocks;

var loadBlocksEditor = null;

if ("undefined" !== typeof window._wpLoadBlockEditor) {
	// Using Gutenberg plugin
	loadBlocksEditor = window._wpLoadBlockEditor;
} else if ("undefined" !== typeof window._wpLoadGutenbergEditor) {
	// Using WP core Gutenberg
	loadBlocksEditor = window._wpLoadGutenbergEditor;
}

if (loadBlocksEditor) {
	loadBlocksEditor.then(function () {
		// registerBlockStyle("core/button", {
		// 	name: "custom-button-style",
		// 	label: "My Button Style"
		// });
	});
}

/***/ }),
/* 415 */
/*!************************************************!*\
  !*** ./src/update-category/register-stores.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_twitter__ = __webpack_require__(/*! ../stores/twitter */ 416);


/***/ }),
/* 416 */
/*!*************************************!*\
  !*** ./src/stores/twitter/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer__ = __webpack_require__(/*! ./reducer */ 417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__(/*! ./selectors */ 418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(/*! ./actions */ 230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controls__ = __webpack_require__(/*! ./controls */ 422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resolvers__ = __webpack_require__(/*! ./resolvers */ 423);






var registerStore = wp.data.registerStore;


registerStore("c9-blocks/twitter", {
	reducer: __WEBPACK_IMPORTED_MODULE_0__reducer__["a" /* default */],
	selectors: __WEBPACK_IMPORTED_MODULE_1__selectors__,
	actions: __WEBPACK_IMPORTED_MODULE_2__actions__,
	controls: __WEBPACK_IMPORTED_MODULE_3__controls__,
	resolvers: __WEBPACK_IMPORTED_MODULE_4__resolvers__
});

/***/ }),
/* 417 */
/*!***************************************!*\
  !*** ./src/stores/twitter/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { feeds: {}, profiles: {} };
	var action = arguments[1];

	switch (action.type) {
		case "SET_TWITTER_FEED":
			if (!state.feeds[action.query] && action.feed) {
				state.feeds[action.query] = action.feed;
			}
			break;
		case "SET_TWITTER_PROFILE":
			if (!state.profiles[action.query] && action.profile) {
				state.profiles[action.query] = action.profile;
			}
			break;
		// no default
	}

	return state;
}

/* harmony default export */ __webpack_exports__["a"] = (reducer);

/***/ }),
/* 418 */
/*!*****************************************!*\
  !*** ./src/stores/twitter/selectors.js ***!
  \*****************************************/
/*! exports provided: getTwitterFeed, getTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getTwitterFeed"] = getTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["getTwitterProfile"] = getTwitterProfile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 228);


function getTwitterFeed(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("feed", data);

	return state.feeds[query];
}

function getTwitterProfile(state, data) {
	var query = Object(__WEBPACK_IMPORTED_MODULE_0__prepare_query__["a" /* default */])("profile", data);

	return state.profiles[query];
}

/***/ }),
/* 419 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ 420);
var parse = __webpack_require__(/*! ./parse */ 421);
var formats = __webpack_require__(/*! ./formats */ 229);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 420 */
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 69);
var formats = __webpack_require__(/*! ./formats */ 229);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) { // eslint-disable-line func-name-matching
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint'; // eslint-disable-line valid-typeof
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = obj.join(',');
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix,
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 421 */
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ 69);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (val && options.comma && val.indexOf(',') > -1) {
            val = val.split(',');
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 422 */
/*!****************************************!*\
  !*** ./src/stores/twitter/controls.js ***!
  \****************************************/
/*! exports provided: API_FETCH */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["API_FETCH"] = API_FETCH;
var _wp = wp,
    apiFetch = _wp.apiFetch;


function API_FETCH(_ref) {
	var request = _ref.request;

	return apiFetch(request).then(function (fetchedData) {
		if (fetchedData && fetchedData.success && fetchedData.response) {
			return fetchedData.response;
		}
		return false;
	});
}

/***/ }),
/* 423 */
/*!*****************************************!*\
  !*** ./src/stores/twitter/resolvers.js ***!
  \*****************************************/
/*! exports provided: getTwitterFeed, getTwitterProfile */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getTwitterFeed"] = getTwitterFeed;
/* harmony export (immutable) */ __webpack_exports__["getTwitterProfile"] = getTwitterProfile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(/*! ./actions */ 230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prepare_query__ = __webpack_require__(/*! ./prepare-query */ 228);


var _marked = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTwitterFeed),
    _marked2 = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(getTwitterProfile);




function getTwitterFeed(data) {
	var query, feed;
	return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTwitterFeed$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					query = Object(__WEBPACK_IMPORTED_MODULE_2__prepare_query__["a" /* default */])("feed", data);
					_context.next = 3;
					return __WEBPACK_IMPORTED_MODULE_1__actions__["apiFetch"]({ path: query });

				case 3:
					feed = _context.sent;
					return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__actions__["setTwitterFeed"](query, feed));

				case 5:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}

function getTwitterProfile(data) {
	var query, profile;
	return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function getTwitterProfile$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					query = Object(__WEBPACK_IMPORTED_MODULE_2__prepare_query__["a" /* default */])("profile", data);
					_context2.next = 3;
					return __WEBPACK_IMPORTED_MODULE_1__actions__["apiFetch"]({ path: query });

				case 3:
					profile = _context2.sent;
					return _context2.abrupt("return", __WEBPACK_IMPORTED_MODULE_1__actions__["setTwitterProfile"](query, profile));

				case 5:
				case "end":
					return _context2.stop();
			}
		}
	}, _marked2, this);
}

/***/ }),
/* 424 */
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 425);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 425 */
/*!********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 426 */
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_appender__ = __webpack_require__(/*! ../color-appender */ 427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_c9_feather_logo_gray_svg__ = __webpack_require__(/*! ../../../assets/c9-feather-logo-gray.svg */ 433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templates_modal__ = __webpack_require__(/*! ../templates-modal */ 434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__editor_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Internal dependencies
 */




/**
 * Styles
 */


/**
 * WordPress dependencies
 */
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    Dashicon = _wp$components.Dashicon;

var Sidebar = function (_Component) {
	_inherits(Sidebar, _Component);

	function Sidebar() {
		_classCallCheck(this, Sidebar);

		var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));

		_this.closeMenu = function () {
			_this.setState({ isModalOpen: false });
		};

		_this.state = {
			isModalOpen: false,
			loading: false
		};
		return _this;
	}

	_createClass(Sidebar, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var isModalOpen = this.state.isModalOpen;


			return wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					PluginSidebarMoreMenuItem,
					{
						icon: wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__assets_c9_feather_logo_gray_svg__["a" /* default */], { style: { width: "20px", margin: "0 10px 0 6px" } }),
						target: "c9-blocks"
					},
					__("COVERT NINE Blocks", "c9-blocks")
				),
				wp.element.createElement(
					PluginSidebar,
					{
						name: "c9-blocks",
						id: "c9-blocks",
						title: __("COVERT NINE Blocks", "c9-blocks")
					},
					wp.element.createElement(
						PanelBody,
						{ className: "plugin-c9-panel" },
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ loading: true });
									_this2.setState({ isModalOpen: "section-templates" });
									_this2.setState({ loading: false });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-schedule" }),
							__("Section Templates", "c9-blocks")
						),
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "page-templates" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-editor-code" }),
							__("Page Templates", "c9-blocks")
						),
						wp.element.createElement(
							Button,
							{
								className: "plugin-c9-panel-button",
								isDefault: true,
								isLarge: true,
								onClick: function onClick() {
									_this2.setState({ isModalOpen: "saved-blocks" });
								}
							},
							wp.element.createElement("span", { className: "dashicons dashicons-admin-settings" }),
							__("Saved Blocks", "c9-blocks")
						)
					),
					wp.element.createElement(
						PanelBody,
						null,
						wp.element.createElement(
							"h5",
							{ className: "components-base-control__label" },
							wp.element.createElement(
								"b",
								null,
								"Color Palette"
							)
						),
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__color_appender__["a" /* default */], null)
					)
				),
				isModalOpen ? wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__templates_modal__["a" /* TemplatesModal */], {
					close: this.closeMenu,
					title: "Templates",
					icon: wp.element.createElement(Dashicon, { icon: "schedule" }),
					onRequestClose: function onRequestClose() {
						return _this2.setState({ isModalOpen: false });
					},
					initial: isModalOpen
				}) : ""
			);
		}
	}]);

	return Sidebar;
}(Component);

registerPlugin("c9-blocks", {
	icon: wp.element.createElement(
		"div",
		{ className: "c9-plugin-icon" },
		wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__assets_c9_feather_logo_gray_svg__["a" /* default */], null)
	),
	render: Sidebar
});

/***/ }),
/* 427 */
/*!************************************************!*\
  !*** ./src/components/color-appender/index.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_palette__ = __webpack_require__(/*! ../custom-palette */ 428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_get__ = __webpack_require__(/*! lodash/get */ 30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_get__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-undef */
/* eslint-disable camelcase */

/**
 * Internal dependencies
 */


/**
 * Styles
 */


/**
 * WordPress dependencies
 */
var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    sprintf = _wp$i18n.sprintf;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;

/**
 * External Dependencies.
 */



var ColorAppender = function (_Component) {
	_inherits(ColorAppender, _Component);

	function ColorAppender() {
		_classCallCheck(this, ColorAppender);

		var _this = _possibleConstructorReturn(this, (ColorAppender.__proto__ || Object.getPrototypeOf(ColorAppender)).apply(this, arguments));

		_this.saveConfig = _this.saveConfig.bind(_this);
		_this.saveC9Colors = _this.saveC9Colors.bind(_this);
		_this.saveColors = _this.saveColors.bind(_this);
		_this.c9ColorUniqueID = -1;
		_this.state = {
			isSaving: false,
			c9Colors: c9_blocks_params.colors ? JSON.parse(c9_blocks_params.colors) : { palette: [], override: false },
			origColors: c9_blocks_params.orig_colors ? c9_blocks_params.orig_colors[0] : [],
			colors: ""
		};
		return _this;
	}

	/**
  * Retrieves base theme colors and initiates the unique id assigner for custom colors.
  */


	_createClass(ColorAppender, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			if (!this.state.colors) {
				this.setState({ colors: this.props.baseColors });
			}

			this.c9ColorUniqueID = this.state.c9Colors ? this.state.c9Colors.palette.length : 0;
		}

		/**
   * Stores current color configuration to plugin settings.
   */

	}, {
		key: "saveConfig",
		value: function saveConfig() {
			var _this2 = this;

			if (false === this.state.isSaving) {
				this.setState({ isSaving: true });
				var config = this.state.c9Colors;
				var settingModel = new wp.api.models.Settings({
					c9_blocks_colors: JSON.stringify(config)
				});
				// eslint-disable-next-line no-unused-vars
				settingModel.save().then(function (response) {
					_this2.setState({ isSaving: false, c9Colors: config });
					c9_blocks_params.colors = JSON.stringify(config);
					_this2.props.updateSettings({ colors: _this2.state.colors });
				});
			}
		}

		/**
   * Updates the C9 Colors palette.
   *
   * @param {Object} value Color configuration.
   * @param {number} index Location to update.
   */

	}, {
		key: "saveC9Colors",
		value: function saveC9Colors(value, index) {
			var c9Colors = this.state.c9Colors;

			c9Colors.palette[index] = Object.assign({}, c9Colors[index], value);
			this.setState({
				c9Colors: c9Colors
			});
		}

		/**
   * Updates the overall colors palette.
   *
   * @param {Object} value Color configuration.
   * @param {number} index Location to update.
   */

	}, {
		key: "saveColors",
		value: function saveColors(value, index) {
			var colors = this.state.colors;

			colors[index] = value;

			this.setState({ colors: colors });
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    c9Colors = _state.c9Colors,
			    colors = _state.colors,
			    origColors = _state.origColors;


			var nonEditables = [];
			var editables = [];

			Array.from(this.state.colors).map(function (curr) {
				if (undefined !== curr.slug && "covertnine-palette" === curr.slug.substr(0, 18)) {
					editables.push(curr);
				} else {
					nonEditables.push(curr);
				}
			});

			return wp.element.createElement(
				"div",
				{ className: "c9-block-default-palette" },
				colors && wp.element.createElement(
					"div",
					{ className: "components-color-palette" },
					wp.element.createElement(
						"p",
						{ className: "components-base-control__label" },
						"Theme Colors."
					),
					nonEditables.map(function (curr) {
						return wp.element.createElement(
							"div",
							{
								key: curr.slug,
								className: "components-color-palette__item-wrapper"
							},
							wp.element.createElement(
								Tooltip,
								{
									text: curr.name ||
									// translators: %s: color hex code e.g: "#f00".
									sprintf(__("Color code: %s"), curr.color)
								},
								wp.element.createElement(
									"div",
									{
										className: "components-color-palette__item",
										style: { color: curr.color }
									},
									wp.element.createElement(Dashicon, { icon: "lock" })
								)
							)
						);
					})
				),
				wp.element.createElement("hr", null),
				colors && wp.element.createElement(
					"div",
					{ className: "components-color-palette" },
					wp.element.createElement(
						"p",
						{ className: "components-base-control__label" },
						"C9 Block Colors."
					),
					editables.map(function (curr, index) {
						return wp.element.createElement(
							"div",
							{
								key: curr.slug,
								className: "components-color-palette__item-wrapper"
							},
							wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__custom_palette__["a" /* default */], {
								nameValue: curr.name ? curr.name : __("Color") + " " + index + 1,
								colorValue: curr.color ? curr.color : "#ffffff",
								onSave: function onSave(value, title) {
									_this3.saveC9Colors({ color: value, name: title, slug: curr.slug }, index);
									_this3.saveColors({ color: value, name: title, slug: curr.slug }, (nonEditables.length ? nonEditables.length : 0) + index);
									_this3.saveConfig();
								}
							})
						);
					}),
					0 < c9Colors.palette.length && wp.element.createElement(
						"div",
						{ className: "c9-colors-remove-last" },
						wp.element.createElement(
							Tooltip,
							{ text: __("Remove Last Color") },
							wp.element.createElement(
								Button,
								{
									type: "button",
									isDestructive: true,
									onClick: function onClick() {
										c9Colors.palette.pop();
										colors.pop();
										_this3.c9ColorUniqueID -= 1;
										_this3.setState({ c9Colors: c9Colors });
										_this3.setState({ colors: colors });
										_this3.saveConfig();
									},
									"aria-label": __("Remove Last Color")
								},
								wp.element.createElement(Dashicon, { icon: "editor-removeformatting" })
							)
						)
					)
				),
				wp.element.createElement(
					"div",
					{ className: "c9-colors-add-new" },
					wp.element.createElement(
						Button,
						{
							type: "button",
							isPrimary: true,
							disabled: this.state.isSaving,
							onClick: function onClick() {
								if (_this3.state.isSaving) {
									return;
								}
								if (undefined === c9Colors.palette) {
									c9Colors.palette = [];
								}
								var id = _this3.c9ColorUniqueID;
								c9Colors.palette.push({
									color: "#888888",
									name: __("Color") + " " + id,
									slug: "covertnine-palette-" + id
								});
								colors.push({
									color: "#888888",
									name: __("Color") + " " + id,
									slug: "covertnine-palette-" + id
								});
								_this3.c9ColorUniqueID += 1;
								_this3.setState({ c9Colors: c9Colors });
								_this3.setState({ colors: colors });
								_this3.saveConfig();
							},
							"aria-label": __("Add Color")
						},
						__("Add Color")
					)
				),
				undefined !== c9Colors.palette && undefined !== c9Colors.palette[0] && wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(ToggleControl, {
						label: __("Use only C9 Blocks Colors?"),
						checked: undefined !== c9Colors.override ? c9Colors.override : false,
						onChange: function onChange(value) {
							var newColors = void 0;
							var newC9Colors = _this3.state.c9Colors;
							if (true === value) {
								newColors = newC9Colors.palette;
								newC9Colors.override = true;
							} else {
								newC9Colors.override = false;
								newColors = [].concat(_toConsumableArray(origColors), _toConsumableArray(newC9Colors.palette));
							}
							_this3.setState({ c9Colors: newC9Colors });
							_this3.setState({ colors: newColors });
							_this3.saveConfig();
						}
					})
				)
			);
		}
	}]);

	return ColorAppender;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (compose([withSelect(function (select) {
	var _select = select("core/block-editor"),
	    getSettings = _select.getSettings;

	var settings = getSettings();
	return {
		baseColors: __WEBPACK_IMPORTED_MODULE_2_lodash_get___default()(settings, ["colors"], [])
	};
}), withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/block-editor"),
	    updateSettings = _dispatch.updateSettings;

	return {
		updateSettings: updateSettings
	};
})])(ColorAppender));

/***/ }),
/* 428 */
/*!************************************************!*\
  !*** ./src/components/custom-palette/index.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Styles
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Popover = _wp$components.Popover,
    ColorIndicator = _wp$components.ColorIndicator,
    ColorPicker = _wp$components.ColorPicker,
    TextControl = _wp$components.TextControl,
    Tooltip = _wp$components.Tooltip;

var CustomPalette = function (_Component) {
	_inherits(CustomPalette, _Component);

	function CustomPalette() {
		_classCallCheck(this, CustomPalette);

		var _this = _possibleConstructorReturn(this, (CustomPalette.__proto__ || Object.getPrototypeOf(CustomPalette)).apply(this, arguments));

		_this.toggleVisible = function () {
			_this.setState({ isVisible: true });
		};

		_this.toggleClose = function () {
			if (true === _this.state.isVisible) {
				_this.setState({ isVisible: false });
				_this.props.onSave(_this.state.color, _this.state.name);
			}
		};

		_this.changeColor = function (value) {
			_this.setState({ color: value });
		};

		_this.state = {
			isVisible: false,
			color: "",
			name: ""
		};
		return _this;
	}

	/**
  * Inits the color and name of color passed in.
  */


	_createClass(CustomPalette, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.setState({ color: this.props.colorValue, name: this.props.nameValue });
		}

		/**
   * Enable visibility.
   */


		/**
   * Disable visibility.
   */


		/**
   * Update current color.
   */

	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return wp.element.createElement(
				"div",
				{ className: "c9-custom-color-settings-container" },
				this.state.isVisible && wp.element.createElement(
					Popover,
					{
						position: "top left",
						className: "popover-color",
						onClose: this.toggleClose
					},
					wp.element.createElement(ColorPicker, {
						color: undefined === this.state.color || "" === this.state.color ? this.props.colorValue : this.state.color,
						onChangeComplete: function onChangeComplete(color) {
							return _this2.changeColor(color.hex);
						},
						disableAlpha: true
					}),
					wp.element.createElement(TextControl, {
						label: __("Name:"),
						value: undefined === this.state.name || "" === this.state.name ? this.props.nameValue : this.state.name,
						onChange: function onChange(value) {
							return _this2.setState({ name: value });
						}
					})
				),
				this.state.isVisible && wp.element.createElement(
					Tooltip,
					{ text: __("Edit Color") },
					wp.element.createElement(
						Button,
						{
							className: "c9-color-icon-indicate",
							onClick: this.toggleClose
						},
						wp.element.createElement(ColorIndicator, {
							className: "c9-advanced-color-indicate",
							colorValue: "transparent" === this.state.color || undefined === this.state.color || "" === this.state.color ? this.props.colorDefault : this.state.color
						})
					)
				),
				!this.state.isVisible && wp.element.createElement(
					Tooltip,
					{ text: __("Edit Color") },
					wp.element.createElement(
						Button,
						{
							className: "c9-color-icon-indicate",
							onClick: this.toggleVisible
						},
						wp.element.createElement(ColorIndicator, {
							className: "c9-advanced-color-indicate",
							colorValue: "transparent" === this.state.color || undefined === this.state.color || "" === this.state.color ? this.props.colorDefault : this.state.color
						})
					)
				)
			);
		}
	}]);

	return CustomPalette;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (CustomPalette);

/***/ }),
/* 429 */
/*!***************************************************!*\
  !*** ./src/components/custom-palette/editor.scss ***!
  \***************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 430);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 11)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 430 */
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/custom-palette/editor.scss ***!
  \******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 10)(false);
// Module
exports.push([module.i, ".c9-custom-color-settings-container{display:flex;align-items:center}.c9-custom-color-settings-container .c9-color-icon-indicate{position:relative;transform:scale(1);transition:transform 0.1s ease;border-radius:50%;padding:0}.c9-custom-color-settings-container .c9-color-icon-indicate:hover{transform:scale(1.2)}.c9-custom-color-settings-container .c9-color-icon-indicate .component-color-indicator.c9-advanced-color-indicate{width:28px;height:28px;border-radius:50%;margin:0}.components-popover.popover-color>.components-popover__content>.components-base-control{padding:0 10px}\n", ""]);


/***/ }),
/* 431 */
/*!***************************************************!*\
  !*** ./src/components/color-appender/editor.scss ***!
  \***************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 432);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 11)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 432 */
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/color-appender/editor.scss ***!
  \******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 10)(false);
// Module
exports.push([module.i, ".c9-block-default-palette .components-color-palette__item{display:flex;align-items:center;justify-content:center}.c9-block-default-palette .components-color-palette__item-wrapper{transform:scale(1.1)}.c9-block-default-palette .components-color-palette__item-wrapper:hover{transform:scale(1.1)}.c9-block-default-palette .components-color-palette__item svg{color:#646464}.c9-colors-remove-last{display:inline-block;height:28px;width:28px;margin-right:14px;margin-bottom:14px}.c9-colors-remove-last .components-button{border-radius:50%;height:100%;width:100%;padding:0;display:flex;align-items:center;justify-content:center}.c9-colors-add-new{margin-bottom:16px}\n", ""]);


/***/ }),
/* 433 */
/*!*****************************************!*\
  !*** ./assets/c9-feather-logo-gray.svg ***!
  \*****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("g", {
  "data-name": "Layer 2"
}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
  d: "M47 138.06C40.37 123.9 40.84 36.41 83.54 22.4c0 0-15.64 7.29-10.12 27.45 7.2-13.68 20.33-37.22 57.77-43.46 24-2.89-13.15 1.1-6 22.22.24-8.88 59.41-45 108-19.81C246.43 104.69 177 110.06 177 110.06s14.95 2.38 23.83-.5c-9.12 39.84-63.13 42.14-63.13 42.14s20.51 5.11 34.92 2.47c-49.45 32.4-116.86-4.86-116.86-4.86-.27.08-.83-.43-1.58-1.31l112-78a25.09 25.09 0 10-6-6.27L79.9 120.4l-2.23-3.25-30.59 21M183.72 33.74a16.25 16.25 0 11-18.84 13.17 16.24 16.24 0 0118.84-13.17zM54.17 148l-.39-.55.43.52zm-34.43-6.55l8.45-5.5 5.5 8.44-8.44 5.5-5.51-8.44zm-4.37 14.87l-5.5-8.44 8.45-5.5 5.5 8.44-8.45 5.5zm-9.87 6.47L0 154.34l8.45-5.5 5.5 8.44-8.45 5.51zm46.86-13.87l-38.95 25.73-6.95-10.34L45 139.3l7.33 9.62z",
  fill: "#121212",
  fillRule: "evenodd",
  "data-name": "logo dark grey"
}));

var SvgC9FeatherLogoGray = function SvgC9FeatherLogoGray(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", _extends({
    viewBox: "0 0 234.92 174.65"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["a"] = (SvgC9FeatherLogoGray);

/***/ }),
/* 434 */
/*!*************************************************!*\
  !*** ./src/components/templates-modal/index.js ***!
  \*************************************************/
/*! exports provided: TemplatesModal */
/*! exports used: TemplatesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesModalWithSelect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(/*! babel-runtime/regenerator */ 231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase__ = __webpack_require__(/*! lodash/startCase */ 435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_button__ = __webpack_require__(/*! ./layout-button */ 452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_button__ = __webpack_require__(/*! ./section-button */ 453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__templates_markup__ = __webpack_require__(/*! ./templates-markup */ 454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__large_modal__ = __webpack_require__(/*! ../large-modal */ 491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__editor_scss__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Internal dependencies
 */






/**
 * Styles
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    TabPanel = _wp$components.TabPanel,
    Tooltip = _wp$components.Tooltip,
    Icon = _wp$components.Icon,
    Spinner = _wp$components.Spinner;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    withSelect = _wp$data.withSelect;
var rawHandler = wp.blocks.rawHandler;

var apiFetch = wp.apiFetch;

var TemplatesModal = function (_Component) {
	_inherits(TemplatesModal, _Component);

	function TemplatesModal() {
		_classCallCheck(this, TemplatesModal);

		var _this = _possibleConstructorReturn(this, (TemplatesModal.__proto__ || Object.getPrototypeOf(TemplatesModal)).apply(this, arguments));

		_this.getReusableBlocks = _this.getReusableBlocks.bind(_this);

		_this.state = {
			activeTab: _this.props.initial,
			reusables: [],
			sections: [],
			layouts: [],
			loading: true
		};

		_this.getReusableBlocks();
		return _this;
	}

	_createClass(TemplatesModal, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var self = this;
			setTimeout(function () {
				var canUserUseUnfilteredHTML = self.state.canUserUseUnfilteredHTML;

				// define section and layout templates

				var sections = Object.assign({}, self.markupToBlock(__WEBPACK_IMPORTED_MODULE_4__templates_markup__["a" /* default */].sections, canUserUseUnfilteredHTML));

				self.setState({ sections: sections });

				var layouts = Object.assign({}, self.markupToBlock(__WEBPACK_IMPORTED_MODULE_4__templates_markup__["a" /* default */].layouts, canUserUseUnfilteredHTML));

				self.setState({ layouts: layouts, loading: false });
			}, 0);
		}

		/**
   * Retrieves reusable blocks and update state.
   */

	}, {
		key: "getReusableBlocks",
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
				var canUserUseUnfilteredHTML, postType, reusables, blocks;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								canUserUseUnfilteredHTML = this.props.canUserUseUnfilteredHTML;
								_context.next = 3;
								return apiFetch({ path: "/wp/v2/types/wp_block" });

							case 3:
								postType = _context.sent;
								_context.next = 6;
								return apiFetch({ path: "/wp/v2/" + postType.rest_base });

							case 6:
								reusables = _context.sent;
								blocks = reusables.map(function (item) {
									return {
										name: item.title.raw,
										content: rawHandler({
											HTML: item.content.raw,
											mode: "BLOCKS",
											canUserUseUnfilteredHTML: canUserUseUnfilteredHTML
										})
									};
								});


								this.setState({
									reusables: blocks
								});

							case 9:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getReusableBlocks() {
				return _ref.apply(this, arguments);
			}

			return getReusableBlocks;
		}()

		/**
   * Returns updated template object based on given new template.
   *
   * @param {Object} templateObj Original template object with markup.
   * @param {boolean} canUserUseUnfilteredHTML Self implied.
   *
   * @return {Object} Updated template object with markup converted to blocks.
   */

	}, {
		key: "markupToBlock",
		value: function markupToBlock(templateObj, canUserUseUnfilteredHTML) {
			var blockObj = Object.assign({}, templateObj);
			// eslint-disable-next-line no-unused-vars
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = Object.keys(blockObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var key = _step.value;

					blockObj[key] = rawHandler({
						HTML: blockObj[key].markup,
						mode: "BLOCKS",
						canUserUseUnfilteredHTML: canUserUseUnfilteredHTML
					});
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			return blockObj;
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    resetBlocks = _props.resetBlocks,
			    canUserUseUnfilteredHTML = _props.canUserUseUnfilteredHTML;
			var _state = this.state,
			    sections = _state.sections,
			    layouts = _state.layouts,
			    loading = _state.loading;

			// convert above to React DOM elements

			var sectionItems = Object.keys(sections).map(function (k) {
				return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__section_button__["a" /* default */], {
					close: function close() {
						var sections = _this2.state.sections;

						sections[k] = rawHandler({
							HTML: __WEBPACK_IMPORTED_MODULE_4__templates_markup__["a" /* default */].sections[k].markup,
							mode: "BLOCKS",
							canUserUseUnfilteredHTML: canUserUseUnfilteredHTML
						});

						_this2.setState({ sections: sections });
					},
					icon: __WEBPACK_IMPORTED_MODULE_4__templates_markup__["a" /* default */].sections[k].icon,
					label: __(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default()(k), "c9-blocks"),
					section: sections[k]
				});
			});

			var layoutItems = Object.keys(layouts).map(function (k) {
				return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__layout_button__["a" /* default */], {
					icon: __WEBPACK_IMPORTED_MODULE_4__templates_markup__["a" /* default */].layouts[k].icon,
					label: __(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default()(k), "c9-blocks"),
					layout: layouts[k]
				});
			});

			return wp.element.createElement(
				__WEBPACK_IMPORTED_MODULE_5__large_modal__["a" /* default */],
				this.props,
				wp.element.createElement(
					TabPanel,
					{
						className: "c9-template-tabs c9-component-modal-tab-panel",
						tabs: [{
							name: "section-templates",
							title: wp.element.createElement(
								Tooltip,
								{
									text: __("Simple sections to construct your page.", "c9-blocks")
								},
								wp.element.createElement(
									"span",
									null,
									__("Sections")
								)
							),
							className: "c9-template-tabs-tab"
						}, {
							name: "page-templates",
							title: wp.element.createElement(
								Tooltip,
								{
									text: __("Pre-designed ready to use pages.", "c9-blocks")
								},
								wp.element.createElement(
									"span",
									null,
									__("Pages")
								)
							),
							className: "c9-template-tabs-tab"
						}, {
							name: "saved-blocks",
							title: wp.element.createElement(
								Tooltip,
								{ text: __("My Templates.", "c9-blocks") },
								wp.element.createElement(
									"span",
									null,
									__("Saved Blocks")
								)
							),
							className: "c9-template-tabs-tab"
						}],
						initialTabName: this.props.initial,
						onSelect: function onSelect(tabName) {
							return _this2.setState({ activeTab: tabName });
						}
					},
					function (tab) {
						if (loading) {
							return wp.element.createElement(
								"div",
								{ className: "c9-loading-wrapper" },
								wp.element.createElement(Spinner, null)
							);
						}

						switch (tab.name) {
							case "section-templates":
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-section-options" },
										sectionItems,
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
							case "page-templates":
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-layout-options" },
										layoutItems,
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
							default:
								return wp.element.createElement(
									Fragment,
									null,
									wp.element.createElement(
										"p",
										null,
										tab.title
									),
									wp.element.createElement(
										"div",
										{ className: "c9-section-options" },
										_this2.state.reusables.map(function (obj) {
											return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__section_button__["a" /* default */], {
												icon: "wordpress",
												label: __(obj.name, "c9-blocks"),
												section: obj.content
											});
										}),
										wp.element.createElement(
											"button",
											{
												onClick: function onClick() {
													resetBlocks([]);
												},
												className: "btn btn-danger"
											},
											wp.element.createElement(Icon, { icon: "trash" }),
											wp.element.createElement(
												"span",
												null,
												__("Clear page", "c9-blocks")
											)
										)
									)
								);
						}
					}
				)
			);
		}
	}]);

	return TemplatesModal;
}(Component);

var TemplatesModalWithSelect = compose([withSelect(function (select, _ref2) {
	var clientId = _ref2.clientId;

	var _select = select("core/editor"),
	    getBlock = _select.getBlock,
	    canUserUseUnfilteredHTML = _select.canUserUseUnfilteredHTML;

	var block = getBlock(clientId);
	return {
		block: block,
		canUserUseUnfilteredHTML: canUserUseUnfilteredHTML()
	};
}), withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    resetBlocks = _dispatch.resetBlocks;

	return {
		resetBlocks: resetBlocks
	};
})])(TemplatesModal);



/***/ }),
/* 435 */
/*!******************************************!*\
  !*** ./node_modules/lodash/startCase.js ***!
  \******************************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ 436),
    upperFirst = __webpack_require__(/*! ./upperFirst */ 445);

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),
/* 436 */
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ 437),
    deburr = __webpack_require__(/*! ./deburr */ 438),
    words = __webpack_require__(/*! ./words */ 441);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 437 */
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 438 */
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ 439),
    toString = __webpack_require__(/*! ./toString */ 19);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 439 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ 440);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 440 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 441 */
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ 442),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ 443),
    toString = __webpack_require__(/*! ./toString */ 19),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ 444);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 442 */
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 443 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 444 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 445 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ 446);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 446 */
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ 447),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ 232),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ 449),
    toString = __webpack_require__(/*! ./toString */ 19);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 447 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ 448);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 448 */
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 449 */
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ 450),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ 232),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ 451);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 450 */
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 451 */
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 452 */
/*!*********************************************************!*\
  !*** ./src/components/templates-modal/layout-button.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var withDispatch = wp.data.withDispatch;


var LayoutButton = function LayoutButton(_ref) {
	var label = _ref.label,
	    icon = _ref.icon,
	    layout = _ref.layout,
	    resetBlocks = _ref.resetBlocks,
	    insertBlocks = _ref.insertBlocks;

	return wp.element.createElement(
		"button",
		{
			onClick: function onClick() {
				resetBlocks([]);
				insertBlocks(layout);
			}
		},
		wp.element.createElement(Icon, { icon: icon }),
		wp.element.createElement(
			"span",
			null,
			label
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    resetBlocks = _dispatch.resetBlocks,
	    insertBlocks = _dispatch.insertBlocks;

	return {
		resetBlocks: resetBlocks,
		insertBlocks: insertBlocks
	};
})(LayoutButton));

/***/ }),
/* 453 */
/*!**********************************************************!*\
  !*** ./src/components/templates-modal/section-button.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var withDispatch = wp.data.withDispatch;


var SectionButton = function SectionButton(_ref) {
	var label = _ref.label,
	    icon = _ref.icon,
	    section = _ref.section,
	    insertBlocks = _ref.insertBlocks,
	    close = _ref.close;

	return wp.element.createElement(
		"button",
		{
			onClick: function onClick() {
				insertBlocks(section);
				close();
			}
		},
		wp.element.createElement(Icon, { icon: icon }),
		wp.element.createElement(
			"span",
			null,
			label
		)
	);
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
	var _dispatch = dispatch("core/editor"),
	    insertBlocks = _dispatch.insertBlocks;

	return {
		insertBlocks: insertBlocks
	};
})(SectionButton));

/***/ }),
/* 454 */
/*!************************************************************!*\
  !*** ./src/components/templates-modal/templates-markup.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_templates_3_col_streaming_audio_albums__ = __webpack_require__(/*! ./section-templates/3-col-streaming-audio-albums */ 455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_templates_full_screen_video_headline_with_follow_button__ = __webpack_require__(/*! ./section-templates/full-screen-video-headline-with-follow-button */ 456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__section_templates_header_2_col_flat_color_with_title_heading_logo__ = __webpack_require__(/*! ./section-templates/header-2-col-flat-color-with-title-heading-logo */ 457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_templates_header_featured_video_carousel__ = __webpack_require__(/*! ./section-templates/header-featured-video-carousel */ 458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__section_templates_header_video_background_with_title_heading__ = __webpack_require__(/*! ./section-templates/header-video-background-with-title-heading */ 459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__section_templates_hero_header_audio_embed__ = __webpack_require__(/*! ./section-templates/hero-header-audio-embed */ 460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__section_templates_hero_spotify_embed_with_image_carousel__ = __webpack_require__(/*! ./section-templates/hero-spotify-embed-with-image-carousel */ 461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__section_templates_large_gallery_carousel__ = __webpack_require__(/*! ./section-templates/large-gallery-carousel */ 462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__section_templates_logo_gallery_slider_carousel__ = __webpack_require__(/*! ./section-templates/logo-gallery-slider-carousel */ 463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__section_templates_section_2_col_about_with_image_carousel__ = __webpack_require__(/*! ./section-templates/section-2-col-about-with-image-carousel */ 464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__section_templates_section_2_col_call_to_action_video_background_big_heading__ = __webpack_require__(/*! ./section-templates/section-2-col-call-to-action-video-background-big-heading */ 465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__section_templates_section_2_col_history_about__ = __webpack_require__(/*! ./section-templates/section-2-col-history-about */ 466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__section_templates_section_2_col_service_list_with_2_testimonials__ = __webpack_require__(/*! ./section-templates/section-2-col-service-list-with-2-testimonials */ 467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__section_templates_section_embed_google_map_location_address__ = __webpack_require__(/*! ./section-templates/section-embed-google-map-location-address */ 468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__section_templates_section_event_header_with_video_bg_tickets_button__ = __webpack_require__(/*! ./section-templates/section-event-header-with-video-bg-tickets-button */ 469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__section_templates_section_event_information_2_col__ = __webpack_require__(/*! ./section-templates/section-event-information-2-col */ 470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__section_templates_section_faq_2_col_with_small_toggles__ = __webpack_require__(/*! ./section-templates/section-faq-2-col-with-small-toggles */ 471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__section_templates_section_faq_with_toggles__ = __webpack_require__(/*! ./section-templates/section-faq-with-toggles */ 472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__section_templates_section_header_with_3_col_modules__ = __webpack_require__(/*! ./section-templates/section-header-with-3-col-modules */ 473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__section_templates_section_header_with_video_hero_button__ = __webpack_require__(/*! ./section-templates/section-header-with-video-hero-button */ 474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__section_templates_section_lineup_header_with_tickets_button__ = __webpack_require__(/*! ./section-templates/section-lineup-header-with-tickets-button */ 475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__section_templates_section_lineup_header_with_white_background_tickets_btn__ = __webpack_require__(/*! ./section-templates/section-lineup-header-with-white-background-tickets-btn */ 476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__section_templates_section_mission_statement_2_col_with_img__ = __webpack_require__(/*! ./section-templates/section-mission-statement-2-col-with-img */ 477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__section_templates_section_price_menu_3_col_v1__ = __webpack_require__(/*! ./section-templates/section-price-menu-3-col-v1 */ 478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__section_templates_section_price_menu_3_col_v2__ = __webpack_require__(/*! ./section-templates/section-price-menu-3-col-v2 */ 479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__section_templates_section_testimonial_with_large_img_background__ = __webpack_require__(/*! ./section-templates/section-testimonial-with-large-img-background */ 480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__section_templates_single_profile_or_bio__ = __webpack_require__(/*! ./section-templates/single-profile-or-bio */ 481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__section_templates_testimonial_centered__ = __webpack_require__(/*! ./section-templates/testimonial-centered */ 482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__section_templates_video_background_page_title__ = __webpack_require__(/*! ./section-templates/video-background-page-title */ 483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__page_templates_landing_page_about_corporate__ = __webpack_require__(/*! ./page-templates/landing-page-about-corporate */ 484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__page_templates_landing_page_about__ = __webpack_require__(/*! ./page-templates/landing-page-about */ 485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__page_templates_landing_page_event__ = __webpack_require__(/*! ./page-templates/landing-page-event */ 486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__page_templates_landing_page_launch_release__ = __webpack_require__(/*! ./page-templates/landing-page-launch-release */ 487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__page_templates_landing_page_media__ = __webpack_require__(/*! ./page-templates/landing-page-media */ 488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__page_templates_landing_page_price_menu__ = __webpack_require__(/*! ./page-templates/landing-page-price-menu */ 489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__page_templates_landing_page_service__ = __webpack_require__(/*! ./page-templates/landing-page-service */ 490);
// sections






























// pages








var templateMarkups = {
	layouts: {
		landingPageAboutCorporate: __WEBPACK_IMPORTED_MODULE_29__page_templates_landing_page_about_corporate__["a" /* default */],
		landingPageAbout: __WEBPACK_IMPORTED_MODULE_30__page_templates_landing_page_about__["a" /* default */],
		landingPageEvent: __WEBPACK_IMPORTED_MODULE_31__page_templates_landing_page_event__["a" /* default */],
		landingPageLaunchRelease: __WEBPACK_IMPORTED_MODULE_32__page_templates_landing_page_launch_release__["a" /* default */],
		landingPageMedia: __WEBPACK_IMPORTED_MODULE_33__page_templates_landing_page_media__["a" /* default */],
		landingPagePriceMenu: __WEBPACK_IMPORTED_MODULE_34__page_templates_landing_page_price_menu__["a" /* default */],
		landingPageService: __WEBPACK_IMPORTED_MODULE_35__page_templates_landing_page_service__["a" /* default */]
	},
	sections: {
		threeColStreamingAudioAlbums: __WEBPACK_IMPORTED_MODULE_0__section_templates_3_col_streaming_audio_albums__["a" /* default */],
		fullScreenVideoHeadlineWithFollowButton: __WEBPACK_IMPORTED_MODULE_1__section_templates_full_screen_video_headline_with_follow_button__["a" /* default */],
		header2ColFlatColorWithTitleHeadingLogo: __WEBPACK_IMPORTED_MODULE_2__section_templates_header_2_col_flat_color_with_title_heading_logo__["a" /* default */],
		headerFeaturedVideoCarousel: __WEBPACK_IMPORTED_MODULE_3__section_templates_header_featured_video_carousel__["a" /* default */],
		headerVideoBackgroundWithTitleHeading: __WEBPACK_IMPORTED_MODULE_4__section_templates_header_video_background_with_title_heading__["a" /* default */],
		heroHeaderAudioEmbed: __WEBPACK_IMPORTED_MODULE_5__section_templates_hero_header_audio_embed__["a" /* default */],
		heroSpotifyEmbedWithImageCarousel: __WEBPACK_IMPORTED_MODULE_6__section_templates_hero_spotify_embed_with_image_carousel__["a" /* default */],
		largeGalleryCarousel: __WEBPACK_IMPORTED_MODULE_7__section_templates_large_gallery_carousel__["a" /* default */],
		logoGallerySliderCarousel: __WEBPACK_IMPORTED_MODULE_8__section_templates_logo_gallery_slider_carousel__["a" /* default */],
		section2ColAboutWithImageCarousel: __WEBPACK_IMPORTED_MODULE_9__section_templates_section_2_col_about_with_image_carousel__["a" /* default */],
		section2ColCallToActionVideoBackgroundBigHeading: __WEBPACK_IMPORTED_MODULE_10__section_templates_section_2_col_call_to_action_video_background_big_heading__["a" /* default */],
		section2ColHistoryAbout: __WEBPACK_IMPORTED_MODULE_11__section_templates_section_2_col_history_about__["a" /* default */],
		section2ColServiceListWith2Testimonials: __WEBPACK_IMPORTED_MODULE_12__section_templates_section_2_col_service_list_with_2_testimonials__["a" /* default */],
		sectionEmbedGoogleMapLocationAddress: __WEBPACK_IMPORTED_MODULE_13__section_templates_section_embed_google_map_location_address__["a" /* default */],
		sectionEventHeaderWithVideoBgTicketsButton: __WEBPACK_IMPORTED_MODULE_14__section_templates_section_event_header_with_video_bg_tickets_button__["a" /* default */],
		sectionEventInformation2Col: __WEBPACK_IMPORTED_MODULE_15__section_templates_section_event_information_2_col__["a" /* default */],
		sectionFaq2ColWithSmallToggles: __WEBPACK_IMPORTED_MODULE_16__section_templates_section_faq_2_col_with_small_toggles__["a" /* default */],
		sectionFaqWithToggles: __WEBPACK_IMPORTED_MODULE_17__section_templates_section_faq_with_toggles__["a" /* default */],
		sectionHeaderWith3ColModules: __WEBPACK_IMPORTED_MODULE_18__section_templates_section_header_with_3_col_modules__["a" /* default */],
		sectionHeaderWithVideoHeroButton: __WEBPACK_IMPORTED_MODULE_19__section_templates_section_header_with_video_hero_button__["a" /* default */],
		sectionLineupHeaderWithTicketsButton: __WEBPACK_IMPORTED_MODULE_20__section_templates_section_lineup_header_with_tickets_button__["a" /* default */],
		sectionLineupHeaderWithWhiteBackgroundTicketsBtn: __WEBPACK_IMPORTED_MODULE_21__section_templates_section_lineup_header_with_white_background_tickets_btn__["a" /* default */],
		sectionMissionStatement2ColWithImg: __WEBPACK_IMPORTED_MODULE_22__section_templates_section_mission_statement_2_col_with_img__["a" /* default */],
		sectionPriceMenu3ColV1: __WEBPACK_IMPORTED_MODULE_23__section_templates_section_price_menu_3_col_v1__["a" /* default */],
		sectionPriceMenu3ColV2: __WEBPACK_IMPORTED_MODULE_24__section_templates_section_price_menu_3_col_v2__["a" /* default */],
		sectionTestimonialWithLargeImgBackground: __WEBPACK_IMPORTED_MODULE_25__section_templates_section_testimonial_with_large_img_background__["a" /* default */],
		singleProfileOrBio: __WEBPACK_IMPORTED_MODULE_26__section_templates_single_profile_or_bio__["a" /* default */],
		testimonialCentered: __WEBPACK_IMPORTED_MODULE_27__section_templates_testimonial_centered__["a" /* default */],
		videoBackgroundPageTitle: __WEBPACK_IMPORTED_MODULE_28__section_templates_video_background_page_title__["a" /* default */]
	}
};

/* harmony default export */ __webpack_exports__["a"] = (templateMarkups);

/***/ }),
/* 455 */
/*!******************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/3-col-streaming-audio-albums.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":12,"minScreenHeight":10,"containerMargin":{"linked":true,"unit":"px","top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"},"containerPadding":{"linked":true,"top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"}} -->\n<div class="c9-grid c9-scroll" style="min-height:10vh"><!-- wp:c9-blocks/column-container {"columns":3,"columnsGap":1,"layout":"c9-3-col-equal","overlayHue":"#313131","overlayOpacity":10,"containerMargin":{"linked":false,"top":"-1","bottom":"5","left":"-1","right":"-1","icon":"editor-unlink"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container c9-column-container p-5 mb-5 c9-scroll c9-layout-columns-3 c9-3-col-equal"><div class="c9-overlay-container" style="background-color:rgba(49,49,49,1);mix-blend-mode:overlay"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"top"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top"><div class="c9-column-innner"><!-- wp:image -->\n<figure class="wp-block-image"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/rentedworld-1024x1024.jpg" alt=""/><figcaption>Album Title</figcaption></figure>\n<!-- /wp:image -->\n\n<!-- wp:core-embed/spotify {"url":"https://open.spotify.com/album/49Q3EfStlDspsaOo8VAgtW?si=SbvtFo4UQJ-jga-s4f16RA","type":"rich","providerNameSlug":"spotify","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/album/49Q3EfStlDspsaOo8VAgtW?si=SbvtFo4UQJ-jga-s4f16RA\n</div></figure>\n<!-- /wp:core-embed/spotify --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"top"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top"><div class="c9-column-innner"><!-- wp:image -->\n<figure class="wp-block-image"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/a2481748509_10-1-1024x1024.jpg" alt=""/><figcaption>Album Title</figcaption></figure>\n<!-- /wp:image -->\n\n<!-- wp:core-embed/spotify {"url":"https://open.spotify.com/album/1nzDVfQopF9YBkpPAfUck3?si=lCYs7A3mRhuW34qG0YB_YA","type":"rich","providerNameSlug":"spotify","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/album/1nzDVfQopF9YBkpPAfUck3?si=lCYs7A3mRhuW34qG0YB_YA\n</div></figure>\n<!-- /wp:core-embed/spotify --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"top"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top"><div class="c9-column-innner"><!-- wp:image -->\n<figure class="wp-block-image"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/the-menzingers-3.jpg" alt=""/><figcaption>Album Title</figcaption></figure>\n<!-- /wp:image -->\n\n<!-- wp:core-embed/spotify {"url":"https://open.spotify.com/album/76xp2axlbmffPMsZaGIWVX?si=dibc0qi2Stu5OrD8AIuP7g","type":"rich","providerNameSlug":"spotify","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/album/76xp2axlbmffPMsZaGIWVX?si=dibc0qi2Stu5OrD8AIuP7g\n</div></figure>\n<!-- /wp:core-embed/spotify --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 456 */
/*!***********************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/full-screen-video-headline-with-follow-button.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":18,\"containerHue\":\"#0c162f\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"multiply\",\"minScreenHeight\":56,\"containerVideoURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/pizza-rain.mp4\"} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-video\" style=\"min-height:56vh;background-color:rgba(12,22,47,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-18\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:56vh\"><source src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/pizza-rain.mp4\" type=\"video/mp4\"/></video></div></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideright\",\"verticalAlign\":\"center\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"What else\\u003cbr\\u003edo you want?\",\"tagLevel\":6,\"displayLevel\":\"1\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-txl display-1 font-weight-bold\" style=\"color:#ffffff\">What else<br>do you want?</h6></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"FOLLOW US\",\"tagLevel\":5,\"textColor\":\"#00d084\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h font-weight-bold\" style=\"color:#00d084\">FOLLOW US</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:button {\"textColor\":\"very-light-gray\",\"align\":\"center\",\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button aligncenter is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-light-gray-color\" href=\"#\">If you daRe</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 457 */
/*!*************************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/header-2-col-flat-color-with-title-heading-logo.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":10,"containerHue":"#109ef1","minScreenHeight":50} -->\n<div class="c9-grid p-5 c9-scroll" style="min-height:50vh;background-color:rgba(16,158,241,1)"><!-- wp:c9-blocks/column-container {"align":"wide","columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"bottom"} -->\n<div class="container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Company Name","type":"c9-txl display-","textColor":"#ffffff","weight":"normal"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-normal" style="color:#ffffff">Company Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"Mutually Making Weird Words Meaningless","tagLevel":2,"displayLevel":"3","type":"c9-sh subhead-h","textColor":"#8ed1fc","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h2 class="c9-sh subhead-h3" style="color:#8ed1fc">Mutually Making Weird Words Meaningless</h2></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {"customTextColor":"#ffffff","customFontSize":15} -->\n<p style="color:#ffffff;font-size:15px" class="has-text-color">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:image {"align":"center","width":92,"height":69} -->\n<div class="wp-block-image"><figure class="aligncenter is-resized"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/feather-logo-white.png" alt="" width="92" height="69"/></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 458 */
/*!********************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/header-featured-video-carousel.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":8,"bgImgAttach":true,"overlayOpacity":4,"blendMode":"screen","minScreenHeight":10} -->\n<div class="c9-grid p-5 c9-fixed" style="min-height:10vh"><!-- wp:c9-blocks/column-container {"align":"full","columns":2,"layout":"c9-2-col-equal","containerWidth":"container-fluid","verticalAlign":"center","containerImgURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/dark-design-graphic-1820770.jpg","overlayHue":"#00ffd9","overlayOpacity":9,"blendMode":"darken","minScreenHeight":80,"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"focalPoint":{"x":0.8986175115207373,"y":0.4861111111111111}} -->\n<div class="container-fluid alignfull c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal c9-columns-has-background" style="min-height:80vh"><div class="c9-image-container" style="background-position:89.86175115207374% 48.61111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/dark-design-graphic-1820770.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(0,255,217,.9);mix-blend-mode:darken"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/carousel {"instanceId":3} -->\n<div id="c9-carousel-indicator-3" class="c9-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-3" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-3" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-3" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item active"><!-- wp:video {"id":7693} -->\n<figure class="wp-block-video"><video controls src="//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-1640698.mp4"></video></figure>\n<!-- /wp:video --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:video {"id":7841} -->\n<figure class="wp-block-video"><video controls src="//cortex.covertnine.com/wp-content/uploads/2019/08/inking.mp4"></video></figure>\n<!-- /wp:video --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:video {"id":7656} -->\n<figure class="wp-block-video"><video controls src="//cortex.covertnine.com/wp-content/uploads/2019/08/concert-video.mp4.mp4"></video></figure>\n<!-- /wp:video --></div>\n<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-3" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-3" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/carousel --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Music Videos","textColor":"#ffffff","textAlign":"center","weight":"bold"} -->\n<div class="section-heading c9-heading text-center"><h1 class="c9-h font-weight-bold" style="color:#ffffff">Music Videos</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"DIRECTED BY: GUY MCVIDEOFACE","tagLevel":6,"textColor":"#abb8c3","textAlign":"center","weight":"bold"} -->\n<div class="section-heading c9-heading text-center"><h6 class="c9-h font-weight-bold" style="color:#abb8c3">DIRECTED BY: GUY MCVIDEOFACE</h6></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":20} -->\n<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"textColor":"very-light-gray","align":"center","className":"is-style-outline"} -->\n<div class="wp-block-button aligncenter is-style-outline"><a class="wp-block-button__link has-text-color has-very-light-gray-color" href="#">SUBSCRIBE</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 459 */
/*!********************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/header-video-background-with-title-heading.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":4,"containerHue":"#313131","overlayHue":"#313131","overlayOpacity":9,"blendMode":"multiply","minScreenHeight":80,"videoType":"embed","containerVideoID":"dBxRw49NOiY"} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-video" style="min-height:80vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><div id="player-dBxRw49NOiY-4" class="c9-video" video-id="dBxRw49NOiY" style="min-height:80vh"></div></div></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.9);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column","verticalAlign":"bottom","containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-bottom one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"bottom"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Video Collection","type":"c9-txl display-","textColor":"#ffffff","weight":"bold"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-txl font-weight-bold" style="color:#ffffff">Video Collection</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"Carousels, Grids, Backgrounds","type":"c9-sh subhead-h","textColor":"#eeeeee","weight":"light"} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-sh font-weight-light" style="color:#eeeeee">Carousels, Grids, Backgrounds</h1></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 460 */
/*!*************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/hero-header-audio-embed.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":2,"containerImgURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web.jpg","overlayHue":"#00d084","blendMode":"normal","minScreenHeight":70} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:70vh"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(0,208,132,.5);mix-blend-mode:normal"></div><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":4,"layout":"c9-2-col-equal","verticalAlign":"center"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Listen Now","subheading":"For Free","addSubheading":true,"displayLevel":"4","textColor":"#eeeeee","weight":"light","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h h4 font-weight-light" style="color:#eeeeee">Listen Now</h1><div class="c9-h h4"><small class="text-muted">&nbsp;For Free</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:core-embed/spotify {"url":"https://open.spotify.com/playlist/37i9dQZF1DXbcP8BbYEQaO?si=2mMF8Ca1RFKbMMxh_aU71Q","type":"rich","providerNameSlug":"spotify","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/playlist/37i9dQZF1DXbcP8BbYEQaO?si=2mMF8Ca1RFKbMMxh_aU71Q\n</div></figure>\n<!-- /wp:core-embed/spotify --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:image {"align":"center","width":119,"height":89} -->\n<div class="wp-block-image"><figure class="aligncenter is-resized"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/feather-logo-white.png" alt="" width="119" height="89"/></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 461 */
/*!****************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/hero-spotify-embed-with-image-carousel.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":17,"containerImgURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/music-bg.jpg","overlayHue":"#7a0002","overlayOpacity":10,"blendMode":"multiply","minScreenHeight":78} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:78vh"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/music-bg.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(122,0,2,1);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"wide","columns":2,"layout":"c9-2-col-equal","verticalAlign":"center"} -->\n<div class="container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"top"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Listen","subheading":"Spotify Playlist","addSubheading":true,"displayLevel":"3","textColor":"#ffffff","weight":"bold","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h h3 font-weight-bold" style="color:#ffffff">Listen</h1><div class="c9-h h3"><small class="text-muted">&nbsp;Spotify Playlist</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:core-embed/spotify {"url":"https://open.spotify.com/playlist/37i9dQZF1DXd0ZFXhY0CRF?","type":"rich","providerNameSlug":"spotify","className":"wp-embed-aspect-9-16 wp-has-aspect-ratio"} -->\n<figure class="wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\nhttps://open.spotify.com/playlist/37i9dQZF1DXd0ZFXhY0CRF?\n</div></figure>\n<!-- /wp:core-embed/spotify --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":5,"url":["//cortex.covertnine.com/wp-content/uploads/2019/08/edu-lauton-TyQ-0lPp6e4-unsplash-1024x696.jpg","//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash-1024x683.jpg","//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash-1024x683.jpg"],"id":[7817,7662,7819]} -->\n<div id="c9-image-carousel-indicator-5" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-5" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-5" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-5" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/edu-lauton-TyQ-0lPp6e4-unsplash-1024x696.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash-1024x683.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash-1024x683.jpg" class="d-block w-100"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-5" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-5" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 462 */
/*!************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/large-gallery-carousel.js ***!
  \************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":14,"containerImgURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/anton-malanin-q323Yb-9Pu8-unsplash.jpg","containerHue":"#313131","overlayHue":"#eeeeee","overlayOpacity":9,"blendMode":"lighten","minScreenHeight":90} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-background" style="min-height:90vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/anton-malanin-q323Yb-9Pu8-unsplash.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(238,238,238,.9);mix-blend-mode:lighten"></div><!-- wp:c9-blocks/column-container {"align":"narrow","columns":1,"layout":"one-column","containerWidth":"container-narrow","verticalAlign":"center"} -->\n<div class="container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/image-carousel {"instanceId":10,"url":["//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg","//cortex.covertnine.com/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg","//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg"],"id":[7535,7536,7534],"captionTitle":["Image Caption","No Caption","Now this is podcracing!"],"captionContent":["Optional Image Subheading Below","No Comment",null]} -->\n<div id="c9-image-carousel-indicator-10" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-10" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-10" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-10" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Image Caption</h5><p>Optional Image Subheading Below</p></div></div><div class="carousel-item"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>No Caption</h5><p>No Comment</p></div></div><div class="carousel-item"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg" class="d-block w-100"/><div class="carousel-caption d-none d-md-block"><h5>Now this is podcracing!</h5></div></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-10" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-10" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 463 */
/*!******************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/logo-gallery-slider-carousel.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":15} -->\n<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Our Brands","subheading":"2000 - 2010","textAlign":"center"} -->\n<div class="section-heading c9-heading text-center"><h1 class="c9-h">Our Brands</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/carousel {"instanceId":3,"autoSlide":false} -->\n<div id="c9-carousel-indicator-3" class="c9-carousel carousel slide" data-ride="carousel" data-interval="false" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-carousel-indicator-3" data-slide-to="0" class="active"></li><li data-target="#c9-carousel-indicator-3" data-slide-to="1"></li><li data-target="#c9-carousel-indicator-3" data-slide-to="2"></li></ol><div class="carousel-inner"><!-- wp:c9-blocks/carousel-slide {"id":0,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item active"><!-- wp:gallery {"ids":[7437,7438,7439,7440],"columns":4,"imageCrop":false} -->\n<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-8.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-7.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-6.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-5.jpg" alt=""/></figure></li></ul>\n<!-- /wp:gallery --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":1,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:gallery {"ids":[7440,7439,7438,7437],"columns":4,"imageCrop":false} -->\n<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-5.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-6.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-7.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-8.jpg" alt=""/></figure></li></ul>\n<!-- /wp:gallery --></div>\n<!-- /wp:c9-blocks/carousel-slide -->\n\n<!-- wp:c9-blocks/carousel-slide {"id":2,"slideActive":0,"slides":3} -->\n<div class="c9-carousel-slide carousel-item"><!-- wp:gallery {"columns":4,"imageCrop":false} -->\n<ul class="wp-block-gallery columns-4"><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-5.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-6.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-7.jpg" alt=""/></figure></li><li class="blocks-gallery-item"><figure><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/logo-8.jpg" alt=""/></figure></li></ul>\n<!-- /wp:gallery --></div>\n<!-- /wp:c9-blocks/carousel-slide --></div><a class="carousel-control-prev" href="#c9-carousel-indicator-3" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-carousel-indicator-3" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/carousel --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 464 */
/*!*****************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-2-col-about-with-image-carousel.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":18} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"containerWidth\":\"container-narrow\",\"verticalAlign\":\"center\"} -->\n<div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:separator -->\n<hr class=\"wp-block-separator\"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\\u003cbr\\u003e\\u003cbr\\u003eCollaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\\u003cbr\\u003e\\u003cbr\\u003eBring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. \xA0Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\\u003cbr\\u003e\\u003cbr\\u003eCapitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. \\u003cbr\\u003e\\u003cbr\\u003eNanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\\u003cbr\\u003e\\u003cbr\\u003ePodcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\",\"tagLevel\":5,\"displayLevel\":\"6\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h h6\">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br><br>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. \xA0Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. <br><br>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.<br><br>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":28} -->\n<div style=\"height:28px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:image {\"align\":\"center\",\"width\":29,\"height\":49} -->\n<div class=\"wp-block-image\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/C9-logo-gradient-transparent.png\" alt=\"\" width=\"29\" height=\"49\"/></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":5,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/chris-fuller-FXCTFXpMfn0-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/jacob-mejicanos-Fbl6bWYl1IY-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/alec-favale-MZJOBxOXbt0-unsplash-e1567213350812-698x1024.jpg\"],\"id\":[7801,7802,7800],\"captionTitle\":[\"Person Name\",\"Person Name\",null],\"captionContent\":[null,null,null]} -->\n<div id=\"c9-image-carousel-indicator-5\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-5\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-5\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-5\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/chris-fuller-FXCTFXpMfn0-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Person Name</h5></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/jacob-mejicanos-Fbl6bWYl1IY-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Person Name</h5></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/alec-favale-MZJOBxOXbt0-unsplash-e1567213350812-698x1024.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-5\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-5\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 465 */
/*!***********************************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-2-col-call-to-action-video-background-big-heading.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":41,\"containerHue\":\"#0c162f\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"multiply\",\"minScreenHeight\":56,\"containerVideoURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\"} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-video\" style=\"min-height:56vh;background-color:rgba(12,22,47,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-41\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:56vh\"><source src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\" type=\"video/mp4\"/></video></div></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideright\",\"verticalAlign\":\"center\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"We\\u003cbr\\u003ethink\\u003cbr\\u003ereal good\",\"tagLevel\":6,\"displayLevel\":\"1\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-txl display-1 font-weight-bold\" style=\"color:#ffffff\">We<br>think<br>real good</h6></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Ready to get started?\",\"tagLevel\":5,\"textColor\":\"#109ef1\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h font-weight-bold\" style=\"color:#109ef1\">Ready to get started?</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":30} -->\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {\"textColor\":\"very-light-gray\",\"align\":\"center\",\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button aligncenter is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-light-gray-color\" href=\"#\">A dudeBro You Can Trust</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 466 */
/*!*****************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-2-col-history-about.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":21,"rows":2,"containerHue":"#f4f4f4","minScreenHeight":60,"containerMargin":{"linked":true,"unit":"px","top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"}} -->\n<div class="c9-grid p-5 c9-scroll" style="min-height:60vh;background-color:rgba(244,244,244,1)"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"bottom"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"History","subheading":"short version","addSubheading":true,"tagLevel":3,"type":"c9-txl display-","textAlign":"center","weight":"bold"} -->\n<div class="section-heading c9-heading text-center"><h3 class="c9-txl font-weight-bold">History</h3><div class="c9-txl display-3"><small class="text-muted">&nbsp;short version</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal","verticalAlign":"top","containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-top c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 467 */
/*!************************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-2-col-service-list-with-2-testimonials.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":33,\"rows\":4,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"what we do\",\"tagLevel\":2,\"type\":\"c9-txl display-\",\"textAlign\":\"center\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h2 class=\"c9-txl display-2 font-weight-bold\">what we do</h2></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Marketing Consulting\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Marketing Consulting</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Web Design \\u0026amp; Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Web Design &amp; Development</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"WordPress Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">WordPress Development</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Marketing Consulting\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Marketing Consulting</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Digital Marketing Snake Oil\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Digital Marketing Snake Oil</h3></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Content Strategy Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Content Strategy Development</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Print \\u0026amp; Packaging\xA0Design\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Print &amp; Packaging\xA0Design</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Media Buying\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Media Buying</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Content Management\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Content Management</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Brand Identity\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Brand Identity</h3></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideright\",\"verticalAlign\":\"center\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"A Testimonial\",\"tagLevel\":4,\"displayLevel\":\"1\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-h h1\">A Testimonial</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p><cite>Dude McDudeface, President</cite></blockquote>\n<!-- /wp:quote --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p><cite>Dude McDudeface, President</cite></blockquote>\n<!-- /wp:quote --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Another Testimonial\",\"tagLevel\":4} -->\n<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-h\">Another Testimonial</h4></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 468 */
/*!*******************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-embed-google-map-location-address.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":45,"containerHue":"#f4f4f4","minScreenHeight":64} -->\n<div class="c9-grid p-5 c9-scroll" style="min-height:64vh;background-color:rgba(244,244,244,1)"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal","verticalAlign":"center","overlayHue":"#ffffff","minScreenHeight":10,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"}} -->\n<div class="container c9-column-container my-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal" style="min-height:10vh"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,.5);mix-blend-mode:overlay"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:html -->\n<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.925326227983!2d-87.63594088430501!3d41.8299060764073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c14278e92f5%3A0x2f864f668f4a90b8!2sGuaranteed%20Rate%20Field!5e0!3m2!1sen!2sus!4v1567193833384!5m2!1sen!2sus" width="600" height="350" frameborder="0" style="border:0;" allowfullscreen=""></iframe>\n<!-- /wp:html --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:paragraph {"align":"center"} -->\n<p style="text-align:center"><strong>Headquarters</strong> (Not the bar)<br>2999 N. Chicago Ave.<br>Chicago, Illinois 60666</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {"align":"center"} -->\n<p style="text-align:center">555-666-4000</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 469 */
/*!***************************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-event-header-with-video-bg-tickets-button.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":12,"containerImgURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web.jpg","containerHue":"#313131","overlayHue":"#313131","overlayOpacity":7,"blendMode":"multiply","minScreenHeight":60,"containerMargin":{"linked":true,"unit":"px","top":"-1","bottom":"-1","left":"-1","right":"-1","icon":"admin-links"},"focalPoint":{"x":0.5529953917050692,"y":0.4722222222222222},"containerVideoURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-video.mp4.mp4"} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video" style="min-height:60vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-12" class="c9-video-custom" playsinline autoplay muted loop style="min-height:60vh"><source src="//cortex.covertnine.com/wp-content/uploads/2019/08/concert-video.mp4.mp4" type="video/mp4"/></video></div></div><div class="c9-image-container" style="background-position:55.29953917050692% 47.22222222222222%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.7);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Event Name","displayLevel":"1","textColor":"#ffffff","textAlign":"center"} -->\n<div class="section-heading c9-heading text-center"><h1 class="c9-h" style="color:#ffffff">Event Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"September 13-15 | Welles Park","tagLevel":4,"type":"c9-sh subhead-h","textColor":"#ffffff","textAlign":"center","weight":"light"} -->\n<div class="section-heading c9-heading text-center"><h4 class="c9-sh font-weight-light" style="color:#ffffff">September 13-15 | Welles Park</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":42} -->\n<div style="height:42px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"textColor":"vivid-green-cyan","align":"center","className":"is-style-outline"} -->\n<div class="wp-block-button aligncenter is-style-outline"><a class="wp-block-button__link has-text-color has-vivid-green-cyan-color" href="#">get tickets</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:image {"align":"center","width":188,"height":159} -->\n<div class="wp-block-image"><figure class="aligncenter is-resized"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/C9-RECORDS-placeholder.png" alt="" width="188" height="159"/></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 470 */
/*!*********************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-event-information-2-col.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":16} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"containerWidth\":\"container-narrow\",\"overlayHue\":\"#efefef\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container-narrow c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(239,239,239,.5);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading -->\n<h2>Event Information</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>General Admission Only</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Doors open at 6PM. Performance begins at 7:30PM.<br><br>This show is for AGES 17 AND OLDER. Valid Photo ID is required for age restricted shows. Forms of valid ID are current and non-expired Driver's License, State ID, or Passport. Blah blah blah standing room only venue, all tickets are General Admission unless otherwise stated.&nbsp;<br><br>*All support acts are subject to change without notice.*</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"width\":212,\"height\":282} -->\n<figure class=\"wp-block-image is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/event-page-template-gutenberg-poster-768x1024.jpg\" alt=\"\" width=\"212\" height=\"282\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:spacer {\"height\":31} -->\n<div style=\"height:31px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:heading {\"level\":5} -->\n<h5>September 29, 2020</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Credit Card Stadium</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:spacer {\"height\":20} -->\n<div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Venue Name\",\"tagLevel\":5,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-sh font-weight-light\">Venue Name</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"4320 Westward Way\\u003cbr\\u003eChicago, IL 60666\",\"tagLevel\":6,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-sh font-weight-light\">4320 Westward Way<br>Chicago, IL 60666</h6></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 471 */
/*!**************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-faq-2-col-with-small-toggles.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":0,"containerHue":"#f4f4f4","minScreenHeight":64} -->\n<div class="c9-grid p-5 c9-scroll" style="min-height:64vh;background-color:rgba(244,244,244,1)"><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-equal","verticalAlign":"center","minScreenHeight":10} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:image {"align":"center","width":275,"height":412} -->\n<div class="wp-block-image"><figure class="aligncenter is-resized"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/EVENT-VERT2-683x1024.jpg" alt="" width="275" height="412"/><figcaption>Merch store open 10am-6pm daily</figcaption></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Venue Limitations","tagLevel":5} -->\n<div class="section-heading c9-heading text-left"><h5 class="c9-h">Venue Limitations</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/toggles {"toggleCount":5,"instanceId":3,"className":"is-style-toggles-small"} -->\n<div class="c9-toggles is-style-toggles-small accordion" id="accordion-3"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-3" data-toggle="collapse" data-target="#c9-toggles-collapse1-3"><div class="mb-0"><span class="c9-toggles-toggle-label">Can I bring water?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-3" data-parent="#accordion-3"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-3" data-toggle="collapse" data-target="#c9-toggles-collapse2-3"><div class="mb-0"><span class="c9-toggles-toggle-label">When do doors open?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-3" data-parent="#accordion-3"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-3" data-toggle="collapse" data-target="#c9-toggles-collapse3-3"><div class="mb-0"><span class="c9-toggles-toggle-label">What weapons can I bring?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-3" data-parent="#accordion-3"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-3" data-toggle="collapse" data-target="#c9-toggles-collapse4-3"><div class="mb-0"><span class="c9-toggles-toggle-label">Can we leave?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-3" data-parent="#accordion-3"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":5,"id":3} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading5-3" data-toggle="collapse" data-target="#c9-toggles-collapse5-3"><div class="mb-0"><span class="c9-toggles-toggle-label">What time is it?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse5-3" data-parent="#accordion-3"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle --></div>\n<!-- /wp:c9-blocks/toggles --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 472 */
/*!**************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-faq-with-toggles.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":0,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="c9-grid p-5 my-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"FAQ Toggles","subheading":"with image carousels","addSubheading":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-h">FAQ Toggles</h1><div class="c9-h h1"><small class="text-muted">&nbsp;with image carousels</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/toggles {"toggleCount":5,"instanceId":4} -->\n<div class="c9-toggles accordion" id="accordion-4"><!-- wp:c9-blocks/toggles-toggle {"toggleNumber":1,"id":4} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading1-4" data-toggle="collapse" data-target="#c9-toggles-collapse1-4"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>1. </strong>How long is the consultation?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse1-4" data-parent="#accordion-4"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":2,"id":4} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading2-4" data-toggle="collapse" data-target="#c9-toggles-collapse2-4"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>2. </strong>Is the consultation required?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse2-4" data-parent="#accordion-4"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":3,"id":4} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading3-4" data-toggle="collapse" data-target="#c9-toggles-collapse3-4"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>3. </strong>Do you work for non-profits?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse3-4" data-parent="#accordion-4"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":4,"id":4} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading4-4" data-toggle="collapse" data-target="#c9-toggles-collapse4-4"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>4. </strong>What does an image carousel look like?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse4-4" data-parent="#accordion-4"><div><!-- wp:c9-blocks/image-carousel {"instanceId":1,"url":["//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing-1024x682.jpg","//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg","//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg"],"id":[7547,7535,7534]} -->\n<div id="c9-image-carousel-indicator-1" class="c9-image-carousel carousel slide" data-ride="carousel" data-interval="5000" data-wrap="true"><ol class="carousel-indicators"><li data-target="#c9-image-carousel-indicator-1" data-slide-to="0" class="active"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="1"></li><li data-target="#c9-image-carousel-indicator-1" data-slide-to="2"></li></ol><div class="carousel-inner"><div class="carousel-item active"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing-1024x682.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg" class="d-block w-100"/></div><div class="carousel-item"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg" class="d-block w-100"/></div></div><a class="carousel-control-prev" href="#c9-image-carousel-indicator-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#c9-image-carousel-indicator-1" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {"toggleNumber":5,"id":4} -->\n<div class="c9-toggles-toggle"><div class="c9-toggles-item-heading" id="c9-toggles-heading5-4" data-toggle="collapse" data-target="#c9-toggles-collapse5-4"><div class="mb-0"><span class="c9-toggles-toggle-label"><strong>5. </strong>Can we read the whole thing?</span><span class="c9-toggles-item-collapse"><span class="fas fa-angle-right"></span></span></div></div><div class="c9-toggles-item-content collapse" id="c9-toggles-collapse5-4" data-parent="#accordion-4"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle --></div>\n<!-- /wp:c9-blocks/toggles --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 473 */
/*!***********************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-header-with-3-col-modules.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":15,"rows":2,"containerImgURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg","containerHue":"#313131","bgImgAttach":true,"overlayHue":"#313131","overlayOpacity":9,"blendMode":"multiply","minScreenHeight":90} -->\n<div class="c9-grid p-5 c9-fixed c9-grid-has-background" style="min-height:90vh;background-color:rgba(49,49,49,1)"><div class="c9-image-container" style="background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.9);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":1,"layout":"one-column"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-1 one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer {"height":155} -->\n<div style="height:155px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Service Offering","subheading":"Landing Page Template","addSubheading":true,"displayLevel":"5","type":"c9-txl display-","textColor":"#eeeeee","weight":"light","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-txl display-5 font-weight-light" style="color:#eeeeee">Service Offering</h1><div class="c9-txl display-5"><small class="text-muted">&nbsp;Landing Page Template</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer -->\n<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {"columns":3,"columnsGap":1,"layout":"c9-3-col-equal","verticalAlign":"center","overlayHue":"#eeeeee","overlayOpacity":10,"blendMode":"normal","minScreenHeight":1,"containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-center c9-3-col-equal" style="min-height:1vh"><div class="c9-overlay-container" style="background-color:rgba(238,238,238,1);mix-blend-mode:normal"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 1</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Bring to the table win-win survival strategies to ensure proactive domination.&nbsp;</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 2</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>At the end of the day, going forward, a new normal that has evolved into lots of boring shit.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:heading {"level":3} -->\n<h3>Step 3</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 474 */
/*!***************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-header-with-video-hero-button.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":31} -->\n<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"align":"wide","columns":2,"layout":"c9-2-col-equal","containerMargin":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container alignwide c9-column-container my-5 c9-scroll c9-layout-columns-2 c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Music Video","type":"c9-txl display-","textAlign":"center","weight":"light"} -->\n<div class="section-heading c9-heading text-center"><h1 class="c9-txl font-weight-light">Music Video</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"RELEASED 2020 • MIDDLESTONE RECORDS","tagLevel":6,"textColor":"#abb8c3","textAlign":"center"} -->\n<div class="section-heading c9-heading text-center"><h6 class="c9-h" style="color:#abb8c3">RELEASED 2020 • MIDDLESTONE RECORDS</h6></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":42} -->\n<div style="height:42px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"align":"center"} -->\n<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">Subscribe</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:video {"id":7693} -->\n<figure class="wp-block-video"><video controls src="//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-1640698.mp4"></video></figure>\n<!-- /wp:video --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 475 */
/*!*******************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-lineup-header-with-tickets-button.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":20,"containerImgURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash.jpg","overlayHue":"#abb8c3","overlayOpacity":4,"blendMode":"multiply","minScreenHeight":75,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"focalPoint":{"x":0.5299539170506913,"y":0.4236111111111111}} -->\n<div class="c9-grid p-5 my-5 c9-scroll c9-grid-has-background" style="min-height:75vh"><div class="c9-image-container" style="background-position:52.995391705069125% 42.36111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(171,184,195,.4);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Talent Name","displayLevel":"3","type":"c9-txl display-","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-txl display-3">Talent Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"Supporting Talent Name, Local Group Name","tagLevel":4,"type":"c9-sh subhead-h","weight":"light","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h4 class="c9-sh subhead-h4 font-weight-light">Supporting Talent Name, Local Group Name</h4></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer {"height":30} -->\n<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"$19 / ADVANCED","tagLevel":5,"textAlign":"center"} -->\n<div class="section-heading c9-heading text-center"><h5 class="c9-h">$19 / ADVANCED</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":30} -->\n<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"align":"center","className":"is-style-squared"} -->\n<div class="wp-block-button aligncenter is-style-squared"><a class="wp-block-button__link">Get Tickets</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 476 */
/*!*********************************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-lineup-header-with-white-background-tickets-btn.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":27,"containerImgURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-event-page-template-band.jpg","overlayHue":"#cf2e2e","blendMode":"multiply","minScreenHeight":85,"containerMargin":{"linked":true,"unit":"px","top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"},"focalPoint":{"x":0.4700460829493088,"y":0.3541666666666667}} -->\n<div class="c9-grid p-5 my-5 c9-scroll c9-grid-has-background" style="min-height:85vh"><div class="c9-image-container" style="background-position:47.004608294930875% 35.41666666666667%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-event-page-template-band.jpg);background-repeat:no-repeat;background-size:cover"></div><div class="c9-overlay-container" style="background-color:rgba(207,46,46,.5);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"bottom","overlayHue":"#ffffff","overlayOpacity":10,"minScreenHeight":5,"containerMargin":{"linked":false,"top":"-1","bottom":"5","left":"5","right":"5","icon":"editor-unlink"},"containerPadding":{"linked":true,"top":"5","bottom":"5","left":"5","right":"5","icon":"admin-links"}} -->\n<div class="container c9-column-container p-5 mb-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft" style="min-height:5vh"><div class="c9-overlay-container" style="background-color:rgba(255,255,255,1);mix-blend-mode:overlay"></div><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Talent Name","displayLevel":"3","type":"c9-txl display-","textColor":"#313131","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h1 class="c9-txl display-3" style="color:#313131">Talent Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {"heading":"Supporting Talent Name, Local Group Name","tagLevel":4,"type":"c9-sh subhead-h","textColor":"#abb8c3","weight":"light","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h4 class="c9-sh subhead-h4 font-weight-light" style="color:#abb8c3">Supporting Talent Name, Local Group Name</h4></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:spacer {"height":30} -->\n<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"$19 / ADVANCED","tagLevel":5,"textColor":"#313131","textAlign":"center"} -->\n<div class="section-heading c9-heading text-center"><h5 class="c9-h" style="color:#313131">$19 / ADVANCED</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":30} -->\n<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"backgroundColor":"light-green-cyan","align":"center","className":"is-style-squared"} -->\n<div class="wp-block-button aligncenter is-style-squared"><a class="wp-block-button__link has-background has-light-green-cyan-background-color">Get Tickets</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 477 */
/*!******************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-mission-statement-2-col-with-img.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":9,"containerHue":"#eeeeee","minScreenHeight":67} -->\n<div class="c9-grid p-5 c9-scroll" style="min-height:67vh;background-color:rgba(238,238,238,1)"><!-- wp:c9-blocks/column-container {"align":"wide","columns":2,"layout":"c9-2-col-wideleft","verticalAlign":"center","minScreenHeight":10} -->\n<div class="container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft" style="min-height:10vh"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:separator -->\n<hr class="wp-block-separator"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {"heading":"Sustainable Food Mission","tagLevel":3,"displayLevel":"1","textAlign":"center","weight":"light","overrideStyle":true} -->\n<div class="section-heading c9-heading text-center"><h3 class="c9-h h1 font-weight-light">Sustainable Food Mission</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {"height":26} -->\n<div style="height:26px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.","tagLevel":4,"displayLevel":"5","type":"c9-sh subhead-h","textAlign":"center","weight":"light","overrideStyle":true} -->\n<div class="section-heading c9-heading text-center"><h4 class="c9-sh subhead-h5 font-weight-light">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don\'t let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:separator -->\n<hr class="wp-block-separator"/>\n<!-- /wp:separator -->\n\n<!-- wp:spacer {"height":55} -->\n<div style="height:55px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {"align":"center","className":"is-style-squared"} -->\n<div class="wp-block-button aligncenter is-style-squared"><a class="wp-block-button__link" href="#">Get involved</a></div>\n<!-- /wp:button -->\n\n<!-- wp:spacer {"height":55} -->\n<div style="height:55px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:image -->\n<figure class="wp-block-image"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/mission-bio-web-683x1024.jpg" alt=""/></figure>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 478 */
/*!*****************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-price-menu-3-col-v1.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":5,\"rows\":2,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":7,\"blendMode\":\"multiply\",\"minScreenHeight\":80,\"focalPoint\":{\"x\":0.5345622119815668,\"y\":1}} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:80vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:53.45622119815668% 100%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.7);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"verticalAlign\":\"center\",\"minScreenHeight\":43} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\" style=\"min-height:43vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Brunch\",\"subheading\":\"Available on weekends and holidays\",\"addSubheading\":true,\"displayLevel\":\"5\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-txl display-5\" style=\"color:#ffffff\">Brunch</h1><div class=\"c9-txl display-5\"><small class=\"text-muted\">&nbsp;Available on weekends and holidays</small></div></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-wideright\",\"verticalAlign\":\"bottom\",\"overlayHue\":\"#ffffff\",\"overlayOpacity\":10,\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-wideright\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,1);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Small Plates\",\"subheading\":\"served all day\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Small Plates</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;served all day</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Nachos\",\"subheading\":\"$16\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Nachos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$16</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Tacos\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Tacos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Plate of 3 small tacos. Like the tiniest tacos you\u2019ve ever seen for fourteen big ones</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Charcuterie\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Charcuterie</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Beef Tips\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Beef Tips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">At this far into the fake menu we ran out of ideas</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Mac \\u0026amp; Cheese\",\"subheading\":\"$10\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Mac &amp; Cheese</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$10</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/image-carousel {\"instanceId\":8,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\"],\"id\":[7340,7342,7341]} -->\n<div id=\"c9-image-carousel-indicator-8\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-8\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-8\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-8\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-8\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-8\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Entrees\",\"subheading\":\"7am-noon\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Entrees</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;7am-noon</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"NY Strip\",\"subheading\":\"$26\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">NY Strip</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$26</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Grilled Chicken\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Grilled Chicken</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Pork Loin\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Pork Loin</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Kielbasa\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Kielbasa</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Sausages are pretty good. Not quite sure what this kind is though</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Lamb Chops\",\"subheading\":\"$22\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Lamb Chops</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$22</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">How dare you think about eating these tiny baby animals</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Veggie Burger\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Burger</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Like those fake meat burgers. This is the real deal</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Veggie Lasagna\",\"subheading\":\"$17\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Lasagna</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$17</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Made with things that aren\u2019t meat</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":9,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg\"],\"id\":[7369,7335,7334],\"captionTitle\":[\"Brunch Cocktails\",\"Charcuterie Plate\",\"Now this is podracing\"],\"captionContent\":[\"Get hammered right after church!\",\"I mean it's mostly fruit but it's close\",null]} -->\n<div id=\"c9-image-carousel-indicator-9\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-9\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-9\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-9\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Brunch Cocktails</h5><p>Get hammered right after church!</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Charcuterie Plate</h5><p>I mean it's mostly fruit but it's close</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Now this is podracing</h5></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-9\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-9\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:spacer {\"height\":47} -->\n<div style=\"height:47px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Sides\",\"subheading\":\"add for $1.00 - $6.00\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Sides</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;add for $1.00 - $6.00</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Chips\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Chips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Side Salad\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Side Salad</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Peanuts\",\"subheading\":\"$1\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Peanuts</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$1</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Yogurt\",\"subheading\":\"$2\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Yogurt</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$2</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Cereal\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Cereal</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"French Fries\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">French Fries</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Steak Bites\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Steak Bites</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":20} -->\n<div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/vertical-tabs {\"tabActive\":\"tab-saturday\",\"tabsData\":[{\"slug\":\"tab-saturday\",\"title\":\"Saturday\"},{\"slug\":\"tab-sunday\",\"title\":\"Sunday\"}],\"instanceId\":3,\"verticalAlign\":\"center\"} -->\n<div class=\"c9-vertical-tabs row\" data-tab-active=\"tab-saturday\"><div class=\"col-xs-12 col-sm-3\"><div class=\"nav flex-column nav-pills\" role=\"tablist\"><a data-toggle=\"pill\" role=\"tab\" href=\"#tab-tab-saturday-3\" class=\"nav-link active\" id=\"tab-button-tab-saturday\">Saturday</a><a data-toggle=\"pill\" role=\"tab\" href=\"#tab-tab-sunday-3\" class=\"nav-link\" id=\"tab-button-tab-sunday\">Sunday</a></div></div><div class=\"col-xs-12 col-sm-9\"><div class=\"c9-tabs-content tab-content align-self-center\"><!-- wp:c9-blocks/vertical-tabs-tab {\"slug\":\"tab-saturday\",\"tabActive\":\"tab-saturday\",\"id\":3} -->\n<div class=\"c9-vertical-tabs-tab tab-pane fade show active\" role=\"tabpanel\" id=\"tab-tab-saturday-3\" aria-labelledby=\"tab-saturday\"><!-- wp:heading {\"level\":6} -->\n<h6>Saturday Brunch Specials</h6>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Chef will make something and your server will tell you what it is and you will pay $25</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Bottomless mimosas and we\u2019ll make the newest hire clean up the $30</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/vertical-tabs-tab -->\n\n<!-- wp:c9-blocks/vertical-tabs-tab {\"slug\":\"tab-sunday\",\"tabActive\":\"tab-saturday\",\"id\":3} -->\n<div class=\"c9-vertical-tabs-tab tab-pane fade\" role=\"tabpanel\" id=\"tab-tab-sunday-3\" aria-labelledby=\"tab-sunday\"><!-- wp:heading {\"level\":6} -->\n<h6>Sunday Brunch Specials</h6>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Chef will make osmething and your server will tell you what it is and you will pay $25</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Ditch church and prove it for 10% off your total</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>\n<!-- /wp:c9-blocks/vertical-tabs --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 479 */
/*!*****************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-price-menu-3-col-v2.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":13,\"rows\":2,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"normal\",\"minScreenHeight\":80,\"focalPoint\":{\"x\":0.4700460829493088,\"y\":0.8641975308641975}} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:80vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:47.004608294930875% 86.41975308641975%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:normal\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"verticalAlign\":\"center\",\"minScreenHeight\":43} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\" style=\"min-height:43vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Dinner\",\"subheading\":\"New Fall Menu\",\"addSubheading\":true,\"displayLevel\":\"5\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-txl display-5\" style=\"color:#ffffff\">Dinner</h1><div class=\"c9-txl display-5\"><small class=\"text-muted\">&nbsp;New Fall Menu</small></div></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-equal\",\"verticalAlign\":\"bottom\",\"overlayHue\":\"#ffffff\",\"overlayOpacity\":10,\"blendMode\":\"multiply\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-equal\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,1);mix-blend-mode:multiply\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Small Plates\",\"subheading\":\"served all day\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Small Plates</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;served all day</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Nachos\",\"subheading\":\"$16\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Nachos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$16</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Charcuterie\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Charcuterie</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Beef Tips\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Beef Tips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">At this far into the fake menu we ran out of ideas</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Mac \\u0026amp; Cheese\",\"subheading\":\"$10\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Mac &amp; Cheese</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$10</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Bacon Stick\",\"subheading\":\"$40\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Bacon Stick</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$40</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">This is $40 of bacon on a stick. Prepare your veins for cholesterol</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/image-carousel {\"instanceId\":16,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\"],\"id\":[7340,7342,7341]} -->\n<div id=\"c9-image-carousel-indicator-16\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-16\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-16\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-16\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-16\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-16\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Entrees\",\"subheading\":\"7am-noon\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Entrees</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;7am-noon</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"NY Strip\",\"subheading\":\"$26\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">NY Strip</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$26</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Grilled Chicken\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Grilled Chicken</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Pork Loin\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Pork Loin</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Kielbasa\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Kielbasa</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Sausages are pretty good. Not quite sure what this kind is though</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Lamb Chops\",\"subheading\":\"$22\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Lamb Chops</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$22</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">How dare you think about eating these tiny baby animals</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Veggie Burger\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Burger</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Like those fake meat burgers. This is the real deal</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Veggie Lasagna\",\"subheading\":\"$17\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Lasagna</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$17</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Made with things that aren\u2019t meat</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Flatbread Pizza\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Flatbread Pizza</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Made with tomatoes, meat, and mystery sauce</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":17,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\"],\"id\":[7339,7336,7337],\"captionTitle\":[\"Chernobyl Burger\",\"Side Salad\",\"Chernobyl Fruit\"],\"captionContent\":[\"For all you vegans out there\",\"This thing is full of weirdness\",\"Good for stronk bones\"]} -->\n<div id=\"c9-image-carousel-indicator-17\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-17\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-17\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-17\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Burger</h5><p>For all you vegans out there</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Side Salad</h5><p>This thing is full of weirdness</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Fruit</h5><p>Good for stronk bones</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-17\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-17\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:spacer {\"height\":27} -->\n<div style=\"height:27px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Sides\",\"subheading\":\"add for $1.00 - $6.00\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Sides</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;add for $1.00 - $6.00</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Chips\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Chips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Side Salad\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Side Salad</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"French Fries\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">French Fries</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Steak Bites\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Steak Bites</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 480 */
/*!***********************************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/section-testimonial-with-large-img-background.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":25,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash.jpg\",\"bgImgAttach\":true,\"overlayHue\":\"#cf2e2e\",\"overlayOpacity\":6,\"blendMode\":\"darken\",\"minScreenHeight\":75,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.5299539170506913,\"y\":0.4236111111111111}} -->\n<div class=\"c9-grid p-5 c9-fixed c9-grid-has-background\" style=\"min-height:75vh\"><div class=\"c9-image-container\" style=\"background-position:52.995391705069125% 42.36111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(207,46,46,.6);mix-blend-mode:darken\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"bottom\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"\\u0022Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\\u0022\",\"tagLevel\":5,\"displayLevel\":\"5\",\"textColor\":\"#eeeeee\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h h5 font-weight-bold\" style=\"color:#eeeeee\">\"Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\"</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":106} -->\n<div style=\"height:106px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Person Name\",\"displayLevel\":\"3\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-3\" style=\"color:#ffffff\">Person Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Title\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#ffffff\",\"weight\":\"light\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh subhead-h4 font-weight-light\" style=\"color:#ffffff\">Title</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":106} -->\n<div style=\"height:106px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 481 */
/*!***********************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/single-profile-or-bio.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":25} -->\n<div class="c9-grid p-5 c9-scroll" style="min-height:20vh"><!-- wp:c9-blocks/column-container {"columns":2,"columnsGap":4,"layout":"c9-2-col-equal","verticalAlign":"center"} -->\n<div class="container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal"><div class="c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column"><!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Name","tagLevel":3,"displayLevel":"4","overrideStyle":true} -->\n<div class="section-heading c9-heading text-left"><h3 class="c9-h h4">Name</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph -->\n<p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <a href="#">Dramatically maintain</a> clicks-and-mortar.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:spacer {"height":31} -->\n<div style="height:31px" aria-hidden="true" class="wp-block-spacer"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {"heading":"Runway heading towards","tagLevel":5,"type":"c9-sh subhead-h","textAlign":"center","weight":"light"} -->\n<div class="section-heading c9-heading text-center"><h5 class="c9-sh font-weight-light">Runway heading towards</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:button {"align":"center"} -->\n<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="#">Button</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class="c9-block-layout-column c9-column text-left"><div class="c9-column-innner"><!-- wp:image {"align":"center"} -->\n<div class="wp-block-image"><figure class="aligncenter"><img src="//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-testimonial-1024x1024.jpeg" alt="girl in tesitmonial from WordPress Gutenberg Block"/></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 482 */
/*!**********************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/testimonial-centered.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "<!-- wp:c9-blocks/grid {\"instanceId\":14} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"overlayHue\":\"#e4f7ff\",\"overlayOpacity\":10,\"blendMode\":\"normal\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container-narrow c9-column-container p-5 my-5 c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(228,247,255,1);mix-blend-mode:normal\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"\\u0022Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\\u0022\",\"tagLevel\":5,\"displayLevel\":\"4\",\"textColor\":\"#313131\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h h4\" style=\"color:#313131\">\"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\"</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Dude McDudeface, Chief Officer of Cool\",\"tagLevel\":6,\"displayLevel\":\"5\",\"textAlign\":\"center\",\"weight\":\"light\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h6 class=\"c9-h h5 font-weight-light\">Dude McDudeface, Chief Officer of Cool</h6></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->"
});

/***/ }),
/* 483 */
/*!*****************************************************************************************!*\
  !*** ./src/components/templates-modal/section-templates/video-background-page-title.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: '<!-- wp:c9-blocks/grid {"instanceId":9,"containerHue":"#313131","overlayHue":"#313131","overlayOpacity":6,"blendMode":"multiply","minScreenHeight":30,"containerVideoURL":"//cortex.covertnine.com/wp-content/uploads/2019/08/inking.mp4"} -->\n<div class="c9-grid p-5 c9-scroll c9-grid-has-video" style="min-height:30vh;background-color:rgba(49,49,49,1)"><div class="c9-video-container"><div class="c9-embed-container"><video id="containerVideo-9" class="c9-video-custom" playsinline autoplay muted loop style="min-height:30vh"><source src="//cortex.covertnine.com/wp-content/uploads/2019/08/inking.mp4" type="video/mp4"/></video></div></div><div class="c9-overlay-container" style="background-color:rgba(49,49,49,.6);mix-blend-mode:multiply"></div><!-- wp:c9-blocks/column-container {"align":"full","columns":1,"layout":"one-column","containerWidth":"container-fluid","verticalAlign":"center"} -->\n<div class="container-fluid alignfull c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column"><div class="c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column"><!-- wp:c9-blocks/column {"verticalAlign":"center"} -->\n<div class="c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center"><div class="c9-column-innner"><!-- wp:c9-blocks/heading {"heading":"Page Title","type":"c9-txl display-","textColor":"#ffffff","textAlign":"center","weight":"bold"} -->\n<div class="section-heading c9-heading text-center"><h1 class="c9-txl font-weight-bold" style="color:#ffffff">Page Title</h1></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->'
});

/***/ }),
/* 484 */
/*!***************************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/landing-page-about-corporate.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "\n\t<!-- wp:c9-blocks/grid {\"instanceId\":9,\"containerHue\":\"#109ef1\",\"minScreenHeight\":50} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:50vh;background-color:rgba(16,158,241,1)\"><!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"bottom\"} -->\n\t<div class=\"container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Company Name\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"weight\":\"normal\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl font-weight-normal\" style=\"color:#ffffff\">Company Name</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Mutually Making Weird Words Meaningless\",\"tagLevel\":2,\"displayLevel\":\"3\",\"type\":\"c9-sh subhead-h\",\"textColor\":\"#8ed1fc\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h2 class=\"c9-sh subhead-h3\" style=\"color:#8ed1fc\">Mutually Making Weird Words Meaningless</h2></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:paragraph {\"customTextColor\":\"#ffffff\",\"customFontSize\":15} -->\n\t<p style=\"color:#ffffff;font-size:15px\" class=\"has-text-color\">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:image {\"align\":\"center\",\"width\":92,\"height\":69} -->\n\t<div class=\"wp-block-image\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/feather-logo-white.png\" alt=\"\" width=\"92\" height=\"69\"/></figure></div>\n\t<!-- /wp:image --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":10} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"overlayHue\":\"#e4f7ff\",\"overlayOpacity\":10,\"blendMode\":\"normal\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container-narrow c9-column-container p-5 my-5 c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(228,247,255,1);mix-blend-mode:normal\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\",\"tagLevel\":5,\"displayLevel\":\"4\",\"textColor\":\"#313131\",\"textAlign\":\"center\",\"overrideStyle\":true,\"className\":\"text-center\"} -->\n\t<div class=\"section-heading c9-heading text-center text-center\"><h5 class=\"c9-h h4\" style=\"color:#313131\">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Dude McDudeface, Chief Officer of Cool\",\"tagLevel\":6,\"displayLevel\":\"5\",\"textAlign\":\"center\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-center\"><h6 class=\"c9-h h5 font-weight-light\">Dude McDudeface, Chief Officer of Cool</h6></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":11} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"containerWidth\":\"container-narrow\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:separator -->\n\t<hr class=\"wp-block-separator\"/>\n\t<!-- /wp:separator -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br><br>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.  Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. <br><br>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.<br><br>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\",\"tagLevel\":5,\"displayLevel\":\"6\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h h6\">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br><br>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.  Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. <br><br>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.<br><br>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":28} -->\n\t<div style=\"height:28px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:image {\"align\":\"center\",\"width\":29,\"height\":49} -->\n\t<div class=\"wp-block-image aligncenter is-resized\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/C9-logo-gradient-transparent.png\" alt=\"\" width=\"29\" height=\"49\"/></figure></div>\n\t<!-- /wp:image --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":2,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/chris-fuller-FXCTFXpMfn0-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/jacob-mejicanos-Fbl6bWYl1IY-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/alec-favale-MZJOBxOXbt0-unsplash-e1567213350812-698x1024.jpg\"],\"id\":[7801,7802,7800],\"captionTitle\":[\"Person Name\",\"Person Name\",null],\"captionContent\":[null,null,null]} -->\n\t<div id=\"c9-image-carousel-indicator-2\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/chris-fuller-FXCTFXpMfn0-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Person Name</h5></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/jacob-mejicanos-Fbl6bWYl1IY-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Person Name</h5></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/alec-favale-MZJOBxOXbt0-unsplash-e1567213350812-698x1024.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":12,\"rows\":2,\"containerHue\":\"#f4f4f4\",\"minScreenHeight\":60,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:60vh;background-color:rgba(244,244,244,1)\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"bottom\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"History\",\"subheading\":\"short version\",\"addSubheading\":true,\"tagLevel\":3,\"type\":\"c9-txl display-\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-txl font-weight-bold\">History</h3><div class=\"c9-txl display-3\"><small class=\"text-muted\">&nbsp;short version</small></div></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"top\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-top c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n\t<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":13,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash.jpg\",\"bgImgAttach\":true,\"overlayHue\":\"#cf2e2e\",\"overlayOpacity\":6,\"blendMode\":\"darken\",\"minScreenHeight\":75,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.5299539170506913,\"y\":0.4236111111111111}} -->\n\t<div class=\"c9-grid p-5 c9-fixed c9-grid-has-background\" style=\"min-height:75vh\"><div class=\"c9-image-container\" style=\"background-position:52.995391705069125% 42.36111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(207,46,46,.6);mix-blend-mode:darken\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"bottom\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\",\"tagLevel\":5,\"textColor\":\"#eeeeee\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-bold\" style=\"color:#eeeeee\">Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":106} -->\n\t<div style=\"height:106px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Person Name\",\"displayLevel\":\"3\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-3\" style=\"color:#ffffff\">Person Name</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Title\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#ffffff\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh subhead-h4 font-weight-light\" style=\"color:#ffffff\">Title</h4></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":106} -->\n\t<div style=\"height:106px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n\t<p></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":14,\"rows\":4,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"what we do\",\"tagLevel\":2,\"type\":\"c9-txl display-\",\"textAlign\":\"center\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-center\"><h2 class=\"c9-txl display-2 font-weight-bold\">what we do</h2></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Marketing Consulting\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Marketing Consulting</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Web Design &amp; Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Web Design &amp; Development</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"WordPress Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">WordPress Development</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Marketing Consulting\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Marketing Consulting</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Digital Marketing Snake Oil\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Digital Marketing Snake Oil</h3></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Content Strategy Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Content Strategy Development</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Print &amp; Packaging Design\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Print &amp; Packaging Design</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Media Buying\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Media Buying</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Content Management\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Content Management</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Brand Identity\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Brand Identity</h3></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideright\",\"verticalAlign\":\"center\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"A Testimonial\",\"tagLevel\":4,\"displayLevel\":\"1\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-h h1\">A Testimonial</h4></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:quote -->\n\t<blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p><cite>Dude McDudeface, President</cite></blockquote>\n\t<!-- /wp:quote --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:quote -->\n\t<blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p><cite>Dude McDudeface, President</cite></blockquote>\n\t<!-- /wp:quote --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Another Testimonial\",\"tagLevel\":4} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-h\">Another Testimonial</h4></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":15,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"FAQ Toggles\",\"subheading\":\"with image carousels\",\"addSubheading\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h\">FAQ Toggles</h1><div class=\"c9-h h1\"><small class=\"text-muted\">&nbsp;with image carousels</small></div></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/toggles {\"toggleCount\":5,\"instanceId\":1} -->\n\t<div class=\"c9-toggles accordion\" id=\"accordion-1\"><!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":1,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading1-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse1-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>1. </strong>How long is the consultation?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse1-1\" data-parent=\"#accordion-1\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":2,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading2-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse2-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>2. </strong>Is the consultation required?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse2-1\" data-parent=\"#accordion-1\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":3,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading3-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse3-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>3. </strong>Do you work for non-profits?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse3-1\" data-parent=\"#accordion-1\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":4,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading4-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse4-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>4. </strong>What does an image carousel look like?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse4-1\" data-parent=\"#accordion-1\"><div><!-- wp:c9-blocks/image-carousel {\"instanceId\":3,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\"],\"id\":[7547,7535,7534]} -->\n\t<div id=\"c9-image-carousel-indicator-3\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/image-carousel --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":5,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading5-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse5-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>5. </strong>Can we read the whole thing?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse5-1\" data-parent=\"#accordion-1\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle --></div>\n\t<!-- /wp:c9-blocks/toggles --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":16,\"containerHue\":\"#0c162f\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"multiply\",\"minScreenHeight\":56,\"containerVideoURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\"} -->\n\t<div class=\"c9-grid p-5 c9-scroll c9-grid-has-video\" style=\"min-height:56vh;background-color:rgba(12,22,47,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-16\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:56vh\"><source src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\" type=\"video/mp4\"/></video></div></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideright\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"We<br>think<br>real good\",\"tagLevel\":6,\"displayLevel\":\"1\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-txl display-1 font-weight-bold\" style=\"color:#ffffff\">We<br>think<br>real good</h6></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Ready to get started?\",\"tagLevel\":5,\"textColor\":\"#109ef1\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h font-weight-bold\" style=\"color:#109ef1\">Ready to get started?</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":30} -->\n\t<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:button {\"textColor\":\"very-light-gray\",\"align\":\"center\",\"className\":\"is-style-outline\"} -->\n\t<div class=\"wp-block-button aligncenter is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-light-gray-color\" href=\"#\">A dudeBro You Can Trust</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":17,\"containerHue\":\"#f4f4f4\",\"minScreenHeight\":64} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:64vh;background-color:rgba(244,244,244,1)\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\",\"overlayHue\":\"#ffffff\",\"minScreenHeight\":10,\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container my-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\" style=\"min-height:10vh\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,.5);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:html -->\n\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.925326227983!2d-87.63594088430501!3d41.8299060764073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c14278e92f5%3A0x2f864f668f4a90b8!2sGuaranteed%20Rate%20Field!5e0!3m2!1sen!2sus!4v1567193833384!5m2!1sen!2sus\" width=\"600\" height=\"350\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n\t<!-- /wp:html --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:paragraph {\"align\":\"center\"} -->\n\t<p style=\"text-align:center\"><strong>Headquarters</strong> (Not the bar)<br>2999 N. Chicago Ave.<br>Chicago, Illinois 60666</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t<p style=\"text-align:center\">555-666-4000</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n"
});

/***/ }),
/* 485 */
/*!*****************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/landing-page-about.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "\n\t<!-- wp:c9-blocks/grid {\"instanceId\":9,\"containerHue\":\"#109ef1\",\"minScreenHeight\":50} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:50vh;background-color:rgba(16,158,241,1)\"><!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"bottom\"} -->\n\t<div class=\"container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Company Name\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"weight\":\"normal\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl font-weight-normal\" style=\"color:#ffffff\">Company Name</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Mutually Making Weird Words Meaningless\",\"tagLevel\":2,\"displayLevel\":\"3\",\"type\":\"c9-sh subhead-h\",\"textColor\":\"#8ed1fc\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h2 class=\"c9-sh subhead-h3\" style=\"color:#8ed1fc\">Mutually Making Weird Words Meaningless</h2></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:paragraph {\"customTextColor\":\"#ffffff\",\"customFontSize\":15} -->\n\t<p style=\"color:#ffffff;font-size:15px\" class=\"has-text-color\">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:image {\"align\":\"center\",\"width\":92,\"height\":69} -->\n\t<div class=\"wp-block-image\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/feather-logo-white.png\" alt=\"\" width=\"92\" height=\"69\"/></figure></div>\n\t<!-- /wp:image --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":10} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"overlayHue\":\"#e4f7ff\",\"overlayOpacity\":10,\"blendMode\":\"normal\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container-narrow c9-column-container p-5 my-5 c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(228,247,255,1);mix-blend-mode:normal\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\",\"tagLevel\":5,\"displayLevel\":\"4\",\"textColor\":\"#313131\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h h4\" style=\"color:#313131\">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Dude McDudeface, Chief Officer of Cool\",\"tagLevel\":6,\"displayLevel\":\"5\",\"textAlign\":\"center\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-center\"><h6 class=\"c9-h h5 font-weight-light\">Dude McDudeface, Chief Officer of Cool</h6></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":11} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"containerWidth\":\"container-narrow\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:separator -->\n\t<hr class=\"wp-block-separator\"/>\n\t<!-- /wp:separator -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br><br>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. <br><br>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.<br><br>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\",\"tagLevel\":5,\"displayLevel\":\"6\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h h6\">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br><br>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.<br><br>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. <br><br>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.<br><br>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":28} -->\n\t<div style=\"height:28px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:image {\"align\":\"center\",\"width\":29,\"height\":49} -->\n\t<div class=\"wp-block-image\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/C9-logo-gradient-transparent.png\" alt=\"\" width=\"29\" height=\"49\"/></figure></div>\n\t<!-- /wp:image --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":2,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/chris-fuller-FXCTFXpMfn0-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/jacob-mejicanos-Fbl6bWYl1IY-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/alec-favale-MZJOBxOXbt0-unsplash-e1567213350812-698x1024.jpg\"],\"id\":[7801,7802,7800],\"captionTitle\":[\"Person Name\",\"Person Name\",null],\"captionContent\":[null,null,null]} -->\n\t<div id=\"c9-image-carousel-indicator-2\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/chris-fuller-FXCTFXpMfn0-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Person Name</h5></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/jacob-mejicanos-Fbl6bWYl1IY-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Person Name</h5></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/alec-favale-MZJOBxOXbt0-unsplash-e1567213350812-698x1024.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":12,\"rows\":2,\"containerHue\":\"#f4f4f4\",\"minScreenHeight\":60,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:60vh;background-color:rgba(244,244,244,1)\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"bottom\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"History\",\"subheading\":\"short version\",\"addSubheading\":true,\"tagLevel\":3,\"type\":\"c9-txl display-\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-txl font-weight-bold\">History</h3><div class=\"c9-txl display-3\"><small class=\"text-muted\">&nbsp;short version</small></div></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"top\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-top c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n\t<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":13,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash.jpg\",\"bgImgAttach\":true,\"overlayHue\":\"#cf2e2e\",\"overlayOpacity\":6,\"blendMode\":\"darken\",\"minScreenHeight\":75,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.5299539170506913,\"y\":0.4236111111111111}} -->\n\t<div class=\"c9-grid p-5 c9-fixed c9-grid-has-background\" style=\"min-height:75vh\"><div class=\"c9-image-container\" style=\"background-position:52.995391705069125% 42.36111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(207,46,46,.6);mix-blend-mode:darken\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"bottom\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\",\"tagLevel\":5,\"textColor\":\"#eeeeee\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-bold\" style=\"color:#eeeeee\">Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":106} -->\n\t<div style=\"height:106px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Person Name\",\"displayLevel\":\"3\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-3\" style=\"color:#ffffff\">Person Name</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Title\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#ffffff\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh subhead-h4 font-weight-light\" style=\"color:#ffffff\">Title</h4></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":106} -->\n\t<div style=\"height:106px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n\t<p></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":14,\"rows\":4,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"what we do\",\"tagLevel\":2,\"type\":\"c9-txl display-\",\"textAlign\":\"center\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-center\"><h2 class=\"c9-txl display-2 font-weight-bold\">what we do</h2></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Marketing Consulting\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Marketing Consulting</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Web Design &amp; Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Web Design &amp; Development</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"WordPress Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">WordPress Development</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Marketing Consulting\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Marketing Consulting</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Digital Marketing Snake Oil\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"right\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-right\"><h3 class=\"c9-sh font-weight-light\">Digital Marketing Snake Oil</h3></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Content Strategy Development\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Content Strategy Development</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Print &amp; PackagingDesign\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Print &amp; PackagingDesign</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Media Buying\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Media Buying</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Content Management\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Content Management</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Brand Identity\",\"tagLevel\":3,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-sh font-weight-light\">Brand Identity</h3></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideright\",\"verticalAlign\":\"center\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"A Testimonial\",\"tagLevel\":4,\"displayLevel\":\"1\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-h h1\">A Testimonial</h4></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:quote -->\n\t<blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p><cite>Dude McDudeface, President</cite></blockquote>\n\t<!-- /wp:quote --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:quote -->\n\t<blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p><cite>Dude McDudeface, President</cite></blockquote>\n\t<!-- /wp:quote --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Another Testimonial\",\"tagLevel\":4} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-h\">Another Testimonial</h4></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":15,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"FAQ Toggles\",\"subheading\":\"with image carousels\",\"addSubheading\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h\">FAQ Toggles</h1><div class=\"c9-h h1\"><small class=\"text-muted\">&nbsp;with image carousels</small></div></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/toggles {\"toggleCount\":5,\"instanceId\":1} -->\n\t<div class=\"c9-toggles accordion\" id=\"accordion-1\"><!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":1,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading1-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse1-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>1. </strong>How long is the consultation?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse1-1\" data-parent=\"#accordion-1\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":2,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading2-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse2-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>2. </strong>Is the consultation required?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse2-1\" data-parent=\"#accordion-1\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":3,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading3-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse3-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>3. </strong>Do you work for non-profits?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse3-1\" data-parent=\"#accordion-1\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":4,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading4-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse4-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>4. </strong>What does an image carousel look like?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse4-1\" data-parent=\"#accordion-1\"><div><!-- wp:c9-blocks/image-carousel {\"instanceId\":3,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\"],\"id\":[7547,7535,7534]} -->\n\t<div id=\"c9-image-carousel-indicator-3\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/image-carousel --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":5,\"id\":1} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading5-1\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse5-1\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>5. </strong>Can we read the whole thing?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse5-1\" data-parent=\"#accordion-1\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle --></div>\n\t<!-- /wp:c9-blocks/toggles --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":16,\"containerHue\":\"#0c162f\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"multiply\",\"minScreenHeight\":56,\"containerVideoURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\"} -->\n\t<div class=\"c9-grid p-5 c9-scroll c9-grid-has-video\" style=\"min-height:56vh;background-color:rgba(12,22,47,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-16\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:56vh\"><source src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\" type=\"video/mp4\"/></video></div></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideright\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideright\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"We<br>think<br>real good\",\"tagLevel\":6,\"displayLevel\":\"1\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-txl display-1 font-weight-bold\" style=\"color:#ffffff\">We<br>think<br>real good</h6></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Ready to get started?\",\"tagLevel\":5,\"textColor\":\"#109ef1\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h font-weight-bold\" style=\"color:#109ef1\">Ready to get started?</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":30} -->\n\t<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:button {\"textColor\":\"very-light-gray\",\"align\":\"center\",\"className\":\"is-style-outline\"} -->\n\t<div class=\"wp-block-button aligncenter is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-light-gray-color\" href=\"#\">A dudeBro You Can Trust</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":17,\"containerHue\":\"#f4f4f4\",\"minScreenHeight\":64} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:64vh;background-color:rgba(244,244,244,1)\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\",\"overlayHue\":\"#ffffff\",\"minScreenHeight\":10,\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container my-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\" style=\"min-height:10vh\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,.5);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:html -->\n\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.925326227983!2d-87.63594088430501!3d41.8299060764073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c14278e92f5%3A0x2f864f668f4a90b8!2sGuaranteed%20Rate%20Field!5e0!3m2!1sen!2sus!4v1567193833384!5m2!1sen!2sus\" width=\"600\" height=\"350\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n\t<!-- /wp:html --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:paragraph {\"align\":\"center\"} -->\n\t<p style=\"text-align:center\"><strong>Headquarters</strong> (Not the bar)<br>2999 N. Chicago Ave.<br>Chicago, Illinois 60666</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph {\"align\":\"center\"} -->\n\t<p style=\"text-align:center\">555-666-4000</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n"
});

/***/ }),
/* 486 */
/*!*****************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/landing-page-event.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "\n<!-- wp:c9-blocks/grid {\"instanceId\":0,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":7,\"blendMode\":\"multiply\",\"minScreenHeight\":60,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.5529953917050692,\"y\":0.4722222222222222},\"containerVideoURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-video.mp4.mp4\"} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video\" style=\"min-height:60vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-0\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:60vh\"><source src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-video.mp4.mp4\" type=\"video/mp4\"/></video></div></div><div class=\"c9-image-container\" style=\"background-position:55.29953917050692% 47.22222222222222%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.7);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"center\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Event Name\",\"displayLevel\":\"1\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\"} -->\n<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\" style=\"color:#ffffff\">Event Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"September 13-15 | Welles Park\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-center\"><h4 class=\"c9-sh font-weight-light\" style=\"color:#ffffff\">September 13-15 | Welles Park</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":42} -->\n<div style=\"height:42px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {\"textColor\":\"vivid-green-cyan\",\"align\":\"center\",\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button aligncenter is-style-outline\"><a class=\"wp-block-button__link has-text-color has-vivid-green-cyan-color\" href=\"#\">get tickets</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:image {\"align\":\"center\",\"width\":188,\"height\":159} -->\n<div class=\"wp-block-image\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/C9-RECORDS-placeholder.png\" alt=\"\" width=\"188\" height=\"159\"/></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":1} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"containerWidth\":\"container-narrow\",\"overlayHue\":\"#efefef\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container-narrow c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(239,239,239,.5);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading -->\n<h2>Event Information</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>General Admission Only</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Doors open at 6PM. Performance begins at 7:30PM.<br><br>This show is for AGES 17 AND OLDER. Valid Photo ID is required for age restricted shows. Forms of valid ID are current and non-expired Driver's License, State ID, or Passport. Blah blah blah standing room only venue, all tickets are General Admission unless otherwise stated.&nbsp;<br><br>*All support acts are subject to change without notice.*</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"width\":212,\"height\":282} -->\n<figure class=\"wp-block-image is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/event-page-template-gutenberg-poster-768x1024.jpg\" alt=\"\" width=\"212\" height=\"282\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:spacer {\"height\":31} -->\n<div style=\"height:31px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:heading {\"level\":5} -->\n<h5>September 29, 2020</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Credit Card Stadium</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:spacer {\"height\":20} -->\n<div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Venue Name\",\"tagLevel\":5,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-sh font-weight-light\">Venue Name</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"4320 Westward Way<br>Chicago, IL 60666\",\"tagLevel\":6,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-sh font-weight-light\">4320 Westward Way<br>Chicago, IL 60666</h6></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:separator -->\n<hr class=\"wp-block-separator\"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Lineup Friday\",\"tagLevel\":3,\"textAlign\":\"center\"} -->\n<div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-h\">Lineup Friday</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":2,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash.jpg\",\"overlayHue\":\"#abb8c3\",\"overlayOpacity\":4,\"blendMode\":\"multiply\",\"minScreenHeight\":75,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.5299539170506913,\"y\":0.4236111111111111}} -->\n<div class=\"c9-grid p-5 my-5 c9-scroll c9-grid-has-background\" style=\"min-height:75vh\"><div class=\"c9-image-container\" style=\"background-position:52.995391705069125% 42.36111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(171,184,195,.4);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Talent Name\",\"displayLevel\":\"3\",\"type\":\"c9-txl display-\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-3\">Talent Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Supporting Talent Name, Local Group Name\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh subhead-h4 font-weight-light\">Supporting Talent Name, Local Group Name</h4></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:spacer {\"height\":30} -->\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"$19 / ADVANCED\",\"tagLevel\":5,\"textAlign\":\"center\"} -->\n<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h\">$19 / ADVANCED</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":30} -->\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {\"align\":\"center\",\"className\":\"is-style-squared\"} -->\n<div class=\"wp-block-button aligncenter is-style-squared\"><a class=\"wp-block-button__link\">Get Tickets</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:spacer -->\n<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:separator -->\n<hr class=\"wp-block-separator\"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Lineup Saturday\",\"tagLevel\":3,\"textAlign\":\"center\"} -->\n<div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-h\">Lineup Saturday</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":3,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-event-page-template-band.jpg\",\"overlayHue\":\"#cf2e2e\",\"blendMode\":\"multiply\",\"minScreenHeight\":85,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.4700460829493088,\"y\":0.3541666666666667}} -->\n<div class=\"c9-grid p-5 my-5 c9-scroll c9-grid-has-background\" style=\"min-height:85vh\"><div class=\"c9-image-container\" style=\"background-position:47.004608294930875% 35.41666666666667%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-event-page-template-band.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(207,46,46,.5);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"bottom\",\"overlayHue\":\"#ffffff\",\"overlayOpacity\":10,\"minScreenHeight\":5,\"containerMargin\":{\"linked\":false,\"top\":\"-1\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"editor-unlink\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container c9-column-container p-5 mb-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft\" style=\"min-height:5vh\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,1);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Talent Name\",\"displayLevel\":\"3\",\"type\":\"c9-txl display-\",\"textColor\":\"#313131\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-3\" style=\"color:#313131\">Talent Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Supporting Talent Name, Local Group Name\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#abb8c3\",\"weight\":\"light\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh subhead-h4 font-weight-light\" style=\"color:#abb8c3\">Supporting Talent Name, Local Group Name</h4></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:spacer {\"height\":30} -->\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"$19 / ADVANCED\",\"tagLevel\":5,\"textColor\":\"#313131\",\"textAlign\":\"center\"} -->\n<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h\" style=\"color:#313131\">$19 / ADVANCED</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":30} -->\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {\"backgroundColor\":\"light-green-cyan\",\"align\":\"center\",\"className\":\"is-style-squared\"} -->\n<div class=\"wp-block-button aligncenter is-style-squared\"><a class=\"wp-block-button__link has-background has-light-green-cyan-background-color\">Get Tickets</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:spacer -->\n<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:separator -->\n<hr class=\"wp-block-separator\"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Lineup Sunday\",\"tagLevel\":3,\"textAlign\":\"center\"} -->\n<div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-h\">Lineup Sunday</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":4,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/artist-event-name-wordpress-block.jpg\",\"overlayHue\":\"#cf2e2e\",\"overlayOpacity\":6,\"blendMode\":\"darken\",\"minScreenHeight\":75,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.5299539170506913,\"y\":0.4236111111111111}} -->\n<div class=\"c9-grid p-5 my-5 c9-scroll c9-grid-has-background\" style=\"min-height:75vh\"><div class=\"c9-image-container\" style=\"background-position:52.995391705069125% 42.36111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/artist-event-name-wordpress-block.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(207,46,46,.6);mix-blend-mode:darken\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"bottom\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-bottom c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Talent Name\",\"displayLevel\":\"3\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-3\" style=\"color:#ffffff\">Talent Name</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Supporting Talent Name, Local Group Name\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#ffffff\",\"weight\":\"light\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh subhead-h4 font-weight-light\" style=\"color:#ffffff\">Supporting Talent Name, Local Group Name</h4></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:spacer {\"height\":30} -->\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"$19 / ADVANCED\",\"tagLevel\":5,\"textColor\":\"#eeeeee\",\"textAlign\":\"center\"} -->\n<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h\" style=\"color:#eeeeee\">$19 / ADVANCED</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":30} -->\n<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {\"backgroundColor\":\"light-green-cyan\",\"align\":\"center\",\"className\":\"is-style-squared\"} -->\n<div class=\"wp-block-button aligncenter is-style-squared\"><a class=\"wp-block-button__link has-background has-light-green-cyan-background-color\">Get Tickets</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":5,\"minScreenHeight\":50} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:50vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"top\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Listen\",\"subheading\":\"Spotify Playlist\",\"addSubheading\":true,\"displayLevel\":\"3\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h h3\">Listen</h1><div class=\"c9-h h3\"><small class=\"text-muted\">&nbsp;Spotify Playlist</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:core-embed/spotify {\"url\":\"https://open.spotify.com/playlist/37i9dQZF1DXd0ZFXhY0CRF?\",\"type\":\"rich\",\"providerNameSlug\":\"spotify\",\"className\":\"wp-embed-aspect-9-16 wp-has-aspect-ratio\"} -->\n<figure class=\"wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">\nhttps://open.spotify.com/playlist/37i9dQZF1DXd0ZFXhY0CRF?\n</div></figure>\n<!-- /wp:core-embed/spotify --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"align\":\"center\",\"width\":267,\"height\":401} -->\n<div class=\"wp-block-image\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-event-block-spotify-img-680x1024.jpg\" alt=\"\" width=\"267\" height=\"401\"/><figcaption>Your Host... she looks like a Jennifer</figcaption></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":6,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/music-bg.jpg\",\"overlayHue\":\"#7a0002\",\"overlayOpacity\":10,\"blendMode\":\"multiply\",\"minScreenHeight\":78} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:78vh\"><div class=\"c9-image-container\" style=\"background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/music-bg.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(122,0,2,1);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\"} -->\n<div class=\"container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"top\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Listen\",\"subheading\":\"Spotify Playlist\",\"addSubheading\":true,\"displayLevel\":\"3\",\"textColor\":\"#ffffff\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h h3 font-weight-bold\" style=\"color:#ffffff\">Listen</h1><div class=\"c9-h h3\"><small class=\"text-muted\">&nbsp;Spotify Playlist</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:core-embed/spotify {\"url\":\"https://open.spotify.com/playlist/37i9dQZF1DXd0ZFXhY0CRF?\",\"type\":\"rich\",\"providerNameSlug\":\"spotify\",\"className\":\"wp-embed-aspect-9-16 wp-has-aspect-ratio\"} -->\n<figure class=\"wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">\nhttps://open.spotify.com/playlist/37i9dQZF1DXd0ZFXhY0CRF?\n</div></figure>\n<!-- /wp:core-embed/spotify --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":0,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/edu-lauton-TyQ-0lPp6e4-unsplash-1024x696.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash-1024x683.jpg\"],\"id\":[7817,7662,7819]} -->\n<div id=\"c9-image-carousel-indicator-0\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/edu-lauton-TyQ-0lPp6e4-unsplash-1024x696.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:block -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":7,\"containerHue\":\"#f4f4f4\",\"minScreenHeight\":64} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:64vh;background-color:rgba(244,244,244,1)\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\",\"minScreenHeight\":10} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\" style=\"min-height:10vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:image {\"align\":\"center\",\"width\":275,\"height\":412} -->\n<div class=\"wp-block-image\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/EVENT-VERT2-683x1024.jpg\" alt=\"\" width=\"275\" height=\"412\"/><figcaption>Merch store open 10am-6pm daily</figcaption></figure></div>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Venue Limitations\",\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Venue Limitations</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/toggles {\"toggleCount\":5,\"instanceId\":7,\"className\":\"is-style-toggles-small\"} -->\n<div class=\"c9-toggles is-style-toggles-small accordion\" id=\"accordion-7\"><!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":1,\"id\":7} -->\n<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading1-7\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse1-7\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\">Can I bring water?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse1-7\" data-parent=\"#accordion-7\"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":2,\"id\":7} -->\n<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading2-7\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse2-7\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\">When do doors open?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse2-7\" data-parent=\"#accordion-7\"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":3,\"id\":7} -->\n<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading3-7\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse3-7\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\">What weapons can I bring?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse3-7\" data-parent=\"#accordion-7\"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":4,\"id\":7} -->\n<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading4-7\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse4-7\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\">Can we leave?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse4-7\" data-parent=\"#accordion-7\"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle -->\n\n<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":5,\"id\":7} -->\n<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading5-7\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse5-7\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\">What time is it?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse5-7\" data-parent=\"#accordion-7\"><div><!-- wp:paragraph -->\n<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. </p>\n<!-- /wp:paragraph --></div></div></div>\n<!-- /wp:c9-blocks/toggles-toggle --></div>\n<!-- /wp:c9-blocks/toggles --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":8,\"containerHue\":\"#f4f4f4\",\"minScreenHeight\":64} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:64vh;background-color:rgba(244,244,244,1)\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\",\"overlayHue\":\"#ffffff\",\"minScreenHeight\":10,\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"}} -->\n<div class=\"container c9-column-container my-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\" style=\"min-height:10vh\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,.5);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:html -->\n<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.925326227983!2d-87.63594088430501!3d41.8299060764073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c14278e92f5%3A0x2f864f668f4a90b8!2sGuaranteed%20Rate%20Field!5e0!3m2!1sen!2sus!4v1567193833384!5m2!1sen!2sus\" width=\"600\" height=\"350\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n<!-- /wp:html --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:paragraph {\"align\":\"center\"} -->\n<p style=\"text-align:center\"><strong>Tombstone Music Hall</strong><br>2999 N. Chicago Ave.<br>Chicago, Illinois 60666</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p style=\"text-align:center\">555-666-4000</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n"
});

/***/ }),
/* 487 */
/*!**************************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/landing-page-launch-release.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "\n<!-- wp:c9-blocks/grid {\"instanceId\":0,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"multiply\",\"minScreenHeight\":84,\"containerVideoURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-video.mp4.mp4\"} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video\" style=\"min-height:84vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-0\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:84vh\"><source src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-video.mp4.mp4\" type=\"video/mp4\"/></video></div></div><div class=\"c9-image-container\" style=\"background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":2,\"columnsGap\":1,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"center\",\"minScreenHeight\":34} -->\n<div class=\"container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\" style=\"min-height:34vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Launch Release\",\"displayLevel\":\"5\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"weight\":\"bold\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-5 font-weight-bold\" style=\"color:#ffffff\">Launch Release</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Streaming Special\",\"tagLevel\":2,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#eeeeee\"} -->\n<div class=\"section-heading c9-heading text-left\"><h2 class=\"c9-sh\" style=\"color:#eeeeee\">Streaming Special</h2></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.\",\"tagLevel\":5,\"displayLevel\":\"5\",\"type\":\"c9-sh subhead-h\",\"textColor\":\"#ffffff\",\"weight\":\"light\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-sh subhead-h5 font-weight-light\" style=\"color:#ffffff\">Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</h5></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"$19 PRE-ORDER\",\"tagLevel\":5,\"textColor\":\"#00d084\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h font-weight-bold\" style=\"color:#00d084\">$19 PRE-ORDER</h5></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:button {\"textColor\":\"very-light-gray\",\"align\":\"center\",\"className\":\"is-style-outline\"} -->\n<div class=\"wp-block-button aligncenter is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-light-gray-color\" href=\"#\">stream NOW</a></div>\n<!-- /wp:button --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":1,\"overlayHue\":\"#161616\",\"overlayOpacity\":9,\"blendMode\":\"normal\",\"minScreenHeight\":90} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:90vh\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(22,22,22,.9);mix-blend-mode:normal\"></div><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"verticalAlign\":\"center\"} -->\n<div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":0,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\"],\"id\":[7535,7536,7534],\"captionTitle\":[\"Image Caption\",\"No Caption\",\"Now this is podcracing!\"],\"captionContent\":[\"Optional Image Subheading Below\",\"No Comment\",null]} -->\n<div id=\"c9-image-carousel-indicator-0\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Image Caption</h5><p>Optional Image Subheading Below</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>No Caption</h5><p>No Comment</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Now this is podcracing!</h5></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":3,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container-narrow c9-column-container p-5 c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:spacer {\"height\":32} -->\n<div style=\"height:32px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:gallery {\"columns\":5} -->\n<ul class=\"wp-block-gallery columns-5 is-cropped\"><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/jacob-mejicanos-Fbl6bWYl1IY-unsplash-683x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/corporate-about-landing-page/jacob-mejicanos-fbl6bwyl1iy-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/chris-fuller-FXCTFXpMfn0-unsplash-683x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/corporate-about-landing-page/chris-fuller-fxctfxpmfn0-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/alec-favale-MZJOBxOXbt0-unsplash-e1567213350812-698x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/corporate-about-landing-page/alec-favale-mzjobxoxbt0-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/backpack-beautiful-woman-brunette-2380115-683x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/backpack-beautiful-woman-brunette-2380115/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/whereslugo-croTkGSyM64-unsplash-819x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/whereslugo-crotkgsym64-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/victor-rodriguez-UrfpprfDB0k-unsplash-680x1024.jpg\" alt=\"\"  data-link=\"http://gutenberg-stock-test.local/about-landing-page/victor-rodriguez-urfpprfdb0k-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/tony-reid-PGdMhonLLZk-unsplash-1024x576.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/tony-reid-pgdmhonllzk-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/steven-roe-MYB2driCp2k-unsplash-683x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/steven-roe-myb2dricp2k-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/start-digital-cY41oSRhyBA-unsplash-1024x683.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/start-digital-cy41osrhyba-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/music-bg-1024x683.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/event-ticket-landing-page/music-bg/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/amos-bar-zeev-hVk6pIFbW9o-unsplash-1024x683.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/corporate-about-landing-page/amos-bar-zeev-hvk6pifbw9o-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/vladyslava-andriyenko-hiUA0SG6Pa8-unsplash-copy-725x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/event-ticket-landing-page/vladyslava-andriyenko-hiua0sg6pa8-unsplash-copy/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/anton-malanin-q323Yb-9Pu8-unsplash-1024x576.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/section-templates/anton-malanin-q323yb-9pu8-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/joel-fulgencio-pS4KCaG2y-s-unsplash-768x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/joel-fulgencio-ps4kcag2y-s-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/ryan-tang-ANJHXftvvJ8-unsplash-683x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/ryan-tang-anjhxftvvj8-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/char-beck-AY8Rh-K5b4g-unsplash-1024x683.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/char-beck-ay8rh-k5b4g-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/amsterdam-bar-illuminated-1426620-662x1024.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/amsterdam-bar-illuminated-1426620/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/architecture-buildings-china-1366957-1024x683.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/architecture-buildings-china-1366957/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/alexander-popov-3InMDrsuYrk-unsplash-1024x683.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/alexander-popov-3inmdrsuyrk-unsplash/\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/art-blur-camera-722421-1024x728.jpg\" alt=\"\" data-link=\"http://gutenberg-stock-test.local/about-landing-page/art-blur-camera-722421/\"/></figure></li></ul>\n<!-- /wp:gallery -->\n\n<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Learn more\",\"subheading\":\"read the details in these blog posts\",\"addSubheading\":true} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h\">Learn more</h1><div class=\"c9-h h1\"><small class=\"text-muted\">&nbsp;read the details in these blog posts</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/post-grid {\"postsToShow\":3,\"columns\":3,\"align\":\"wide\",\"imageSize\":\"c9-feature-medium-wide\"} /-->\n"
});

/***/ }),
/* 488 */
/*!*****************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/landing-page-media.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "\n\t<!-- wp:c9-blocks/grid {\"instanceId\":1,\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":9,\"blendMode\":\"multiply\",\"minScreenHeight\":80,\"videoType\":\"embed\",\"containerVideoID\":\"dBxRw49NOiY\"} -->\n\t<div class=\"c9-grid p-5 c9-scroll c9-grid-has-video\" style=\"min-height:80vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><div id=\"player-dBxRw49NOiY-1\" class=\"c9-video\" video-id=\"dBxRw49NOiY\" style=\"min-height:80vh\"></div></div></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.9);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"verticalAlign\":\"bottom\",\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-bottom one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"bottom\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Video Collection\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl font-weight-bold\" style=\"color:#ffffff\">Video Collection</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Carousels, Grids, Backgrounds\",\"type\":\"c9-sh subhead-h\",\"textColor\":\"#eeeeee\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-sh font-weight-light\" style=\"color:#eeeeee\">Carousels, Grids, Backgrounds</h1></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\n\t<!-- wp:c9-blocks/grid {\"instanceId\":2,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web.jpg\",\"overlayHue\":\"#00d084\",\"blendMode\":\"normal\",\"minScreenHeight\":70} -->\n\t<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:70vh\"><div class=\"c9-image-container\" style=\"background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(0,208,132,.5);mix-blend-mode:normal\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"columnsGap\":4,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Listen Now\",\"subheading\":\"For Free\",\"addSubheading\":true,\"displayLevel\":\"4\",\"textColor\":\"#eeeeee\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h h4 font-weight-light\" style=\"color:#eeeeee\">Listen Now</h1><div class=\"c9-h h4\"><small class=\"text-muted\">&nbsp;For Free</small></div></div>\n\t<!-- /wp:c9-blocks/heading -->\n\n\t<!-- wp:core-embed/spotify {\"url\":\"https://open.spotify.com/playlist/37i9dQZF1DXbcP8BbYEQaO?si=2mMF8Ca1RFKbMMxh_aU71Q\",\"type\":\"rich\",\"providerNameSlug\":\"spotify\",\"className\":\"wp-embed-aspect-9-16 wp-has-aspect-ratio\"} -->\n\t<figure class=\"wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">\n\thttps://open.spotify.com/playlist/37i9dQZF1DXbcP8BbYEQaO?si=2mMF8Ca1RFKbMMxh_aU71Q\n\t</div></figure>\n\t<!-- /wp:core-embed/spotify --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:image {\"align\":\"center\",\"width\":119,\"height\":89} -->\n\t<div class=\"wp-block-image\"><figure class=\"aligncenter is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/feather-logo-white.png\" alt=\"\" width=\"119\" height=\"89\"/></figure></div>\n\t<!-- /wp:image --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\n\t<!-- wp:c9-blocks/grid {\"instanceId\":3} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"overlayHue\":\"#e4f7ff\",\"overlayOpacity\":10,\"blendMode\":\"normal\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container-narrow c9-column-container p-5 my-5 c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(228,247,255,1);mix-blend-mode:normal\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\",\"tagLevel\":5,\"displayLevel\":\"4\",\"textColor\":\"#313131\",\"textAlign\":\"center\",\"overrideStyle\":true,\"className\":\"text-center\"} -->\n\t<div class=\"section-heading c9-heading text-center text-center\"><h5 class=\"c9-h h4\" style=\"color:#313131\">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Dude McDudeface, Chief Officer of Cool\",\"tagLevel\":6,\"displayLevel\":\"5\",\"textAlign\":\"center\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-center\"><h6 class=\"c9-h h5 font-weight-light\">Dude McDudeface, Chief Officer of Cool</h6></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\n\t<!-- wp:c9-blocks/grid {\"instanceId\":4,\"bgImgAttach\":true,\"overlayOpacity\":4,\"blendMode\":\"screen\",\"minScreenHeight\":10} -->\n\t<div class=\"c9-grid p-5 c9-fixed\" style=\"min-height:10vh\"><!-- wp:c9-blocks/column-container {\"align\":\"full\",\"columns\":2,\"layout\":\"c9-2-col-equal\",\"containerWidth\":\"container-fluid\",\"verticalAlign\":\"center\",\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/dark-design-graphic-1820770.jpg\",\"overlayHue\":\"#00ffd9\",\"overlayOpacity\":9,\"blendMode\":\"darken\",\"minScreenHeight\":80,\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.8986175115207373,\"y\":0.4861111111111111}} -->\n\t<div class=\"container-fluid alignfull c9-column-container p-5 c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal c9-columns-has-background\" style=\"min-height:80vh\"><div class=\"c9-image-container\" style=\"background-position:89.86175115207374% 48.61111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/dark-design-graphic-1820770.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(0,255,217,.9);mix-blend-mode:darken\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/carousel {\"instanceId\":0} -->\n\t<div id=\"c9-carousel-indicator-0\" class=\"c9-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><!-- wp:c9-blocks/carousel-slide {\"id\":0,\"slideActive\":2,\"slides\":3} -->\n\t<div class=\"c9-carousel-slide carousel-item active\"><!-- wp:video -->\n\t<figure class=\"wp-block-video\"><video controls src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-1640698.mp4\"></video></figure>\n\t<!-- /wp:video --></div>\n\t<!-- /wp:c9-blocks/carousel-slide -->\n\n\t<!-- wp:c9-blocks/carousel-slide {\"id\":1,\"slideActive\":2,\"slides\":3} -->\n\t<div class=\"c9-carousel-slide carousel-item\"><!-- wp:video -->\n\t<figure class=\"wp-block-video\"><video controls src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/inking.mp4\"></video></figure>\n\t<!-- /wp:video --></div>\n\t<!-- /wp:c9-blocks/carousel-slide -->\n\n\t<!-- wp:c9-blocks/carousel-slide {\"id\":2,\"slideActive\":2,\"slides\":3} -->\n\t<div class=\"c9-carousel-slide carousel-item\"><!-- wp:video -->\n\t<figure class=\"wp-block-video\"><video controls src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-video.mp4.mp4\"></video></figure>\n\t<!-- /wp:video --></div>\n\t<!-- /wp:c9-blocks/carousel-slide --></div><a class=\"carousel-control-prev\" href=\"#c9-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/carousel --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Music Videos\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h font-weight-bold\" style=\"color:#ffffff\">Music Videos</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\n\t<!-- wp:c9-blocks/heading {\"heading\":\"DIRECTED BY: GUY MCVIDEOFACE\",\"tagLevel\":6,\"textColor\":\"#abb8c3\",\"textAlign\":\"center\",\"weight\":\"bold\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h6 class=\"c9-h font-weight-bold\" style=\"color:#abb8c3\">DIRECTED BY: GUY MCVIDEOFACE</h6></div>\n\t<!-- /wp:c9-blocks/heading -->\n\n\t<!-- wp:spacer {\"height\":20} -->\n\t<div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\n\t<!-- wp:button {\"textColor\":\"very-light-gray\",\"align\":\"center\",\"className\":\"is-style-outline\"} -->\n\t<div class=\"wp-block-button aligncenter is-style-outline\"><a class=\"wp-block-button__link has-text-color has-very-light-gray-color\" href=\"#\">SUBSCRIBE</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\n\t<!-- wp:separator -->\n\t<hr class=\"wp-block-separator\"/>\n\t<!-- /wp:separator -->\n\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Streaming Albums\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h font-weight-light\">Streaming Albums</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\n\t<!-- wp:separator -->\n\t<hr class=\"wp-block-separator\"/>\n\t<!-- /wp:separator -->\n\n\t<!-- wp:spacer {\"height\":20} -->\n\t<div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\n\t<!-- wp:c9-blocks/grid {\"instanceId\":5,\"minScreenHeight\":10,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"-1\",\"bottom\":\"-1\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid c9-scroll\" style=\"min-height:10vh\"><!-- wp:c9-blocks/column-container {\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-equal\",\"overlayHue\":\"#313131\",\"overlayOpacity\":10,\"containerMargin\":{\"linked\":false,\"top\":\"-1\",\"bottom\":\"5\",\"left\":\"-1\",\"right\":\"-1\",\"icon\":\"editor-unlink\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 mb-5 c9-scroll c9-layout-columns-3 c9-3-col-equal\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,1);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"top\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top\"><div class=\"c9-column-innner\"><!-- wp:image -->\n\t<figure class=\"wp-block-image\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/rentedworld-1024x1024.jpg\" alt=\"\"/><figcaption>Album Title</figcaption></figure>\n\t<!-- /wp:image -->\n\n\t<!-- wp:core-embed/spotify {\"url\":\"https://open.spotify.com/album/49Q3EfStlDspsaOo8VAgtW?si=SbvtFo4UQJ-jga-s4f16RA\",\"type\":\"rich\",\"providerNameSlug\":\"spotify\",\"className\":\"wp-embed-aspect-9-16 wp-has-aspect-ratio\"} -->\n\t<figure class=\"wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">\n\thttps://open.spotify.com/album/49Q3EfStlDspsaOo8VAgtW?si=SbvtFo4UQJ-jga-s4f16RA\n\t</div></figure>\n\t<!-- /wp:core-embed/spotify --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"top\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top\"><div class=\"c9-column-innner\"><!-- wp:image -->\n\t<figure class=\"wp-block-image\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/a2481748509_10-1-1024x1024.jpg\" alt=\"\"/><figcaption>Album Title</figcaption></figure>\n\t<!-- /wp:image -->\n\n\t<!-- wp:core-embed/spotify {\"url\":\"https://open.spotify.com/album/1nzDVfQopF9YBkpPAfUck3?si=lCYs7A3mRhuW34qG0YB_YA\",\"type\":\"rich\",\"providerNameSlug\":\"spotify\",\"className\":\"wp-embed-aspect-9-16 wp-has-aspect-ratio\"} -->\n\t<figure class=\"wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">\n\thttps://open.spotify.com/album/1nzDVfQopF9YBkpPAfUck3?si=lCYs7A3mRhuW34qG0YB_YA\n\t</div></figure>\n\t<!-- /wp:core-embed/spotify --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\n\t<!-- wp:c9-blocks/column {\"verticalAlign\":\"top\"} -->\n\t<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-top\"><div class=\"c9-column-innner\"><!-- wp:image -->\n\t<figure class=\"wp-block-image\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/the-menzingers-3.jpg\" alt=\"\"/><figcaption>Album Title</figcaption></figure>\n\t<!-- /wp:image -->\n\n\t<!-- wp:core-embed/spotify {\"url\":\"https://open.spotify.com/album/76xp2axlbmffPMsZaGIWVX?si=dibc0qi2Stu5OrD8AIuP7g\",\"type\":\"rich\",\"providerNameSlug\":\"spotify\",\"className\":\"wp-embed-aspect-9-16 wp-has-aspect-ratio\"} -->\n\t<figure class=\"wp-block-embed-spotify wp-block-embed is-type-rich is-provider-spotify wp-embed-aspect-9-16 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">\n\thttps://open.spotify.com/album/76xp2axlbmffPMsZaGIWVX?si=dibc0qi2Stu5OrD8AIuP7g\n\t</div></figure>\n\t<!-- /wp:core-embed/spotify --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n"
});

/***/ }),
/* 489 */
/*!**********************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/landing-page-price-menu.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "\n<!-- wp:c9-blocks/grid {\"instanceId\":0,\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":7,\"blendMode\":\"multiply\",\"minScreenHeight\":50,\"containerVideoURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/restaurant-video-bg-web.mov\"} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-video\" style=\"min-height:50vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-0\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:50vh\"><source src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/restaurant-video-bg-web.mov\" type=\"video/mp4\"/></video></div></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.7);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"verticalAlign\":\"bottom\"} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-bottom one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"bottom\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-bottom\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"New Fall Menu\",\"type\":\"c9-txl display-\",\"textColor\":\"#abb8c3\",\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl font-weight-light\" style=\"color:#abb8c3\">New Fall Menu</h1></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"ORDER THIS FISH ONLINE RIGHT NOW\",\"tagLevel\":6,\"textColor\":\"#ffffff\",\"weight\":\"normal\"} -->\n<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-h font-weight-normal\" style=\"color:#ffffff\">ORDER THIS FISH ONLINE RIGHT NOW</h6></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/cta {\"type\":\"c9-sh\",\"buttonText\":\"get started\",\"buttonAlignment\":\"left\",\"buttonTextColor\":\"#313131\",\"buttonShape\":\"outline\",\"buttonTarget\":true,\"ctaLayout\":\"three-quarters\",\"ctaPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"align\":\"wide\"} -->\n<div style=\"text-align:left\" class=\"c9-cta c9-block-cta container alignwide p-5\"><div class=\"row\"><div class=\"c9-cta-content col-12 col-md-9\"><div class=\"c9-cta-text c9-sh\"><p>Make a reservation, buy a ring, get engaged, high five.</p></div></div><div class=\"c9-cta-button col-12 col-md-3\"><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"wp-block-button__link c9-button-shape-outline c9-button-size-medium\" style=\"color:#313131\">get started<span class=\"sr-only\">(Link opens in new window)</span></a></div></div></div>\n<!-- /wp:c9-blocks/cta -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":1,\"rows\":2,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":7,\"blendMode\":\"multiply\",\"minScreenHeight\":80,\"focalPoint\":{\"x\":0.5345622119815668,\"y\":1}} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:80vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:53.45622119815668% 100%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/shawn-ang-nmpW_WwwVSc-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.7);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"verticalAlign\":\"center\",\"minScreenHeight\":43} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\" style=\"min-height:43vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Brunch\",\"subheading\":\"Available on weekends and holidays\",\"addSubheading\":true,\"displayLevel\":\"5\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-txl display-5\" style=\"color:#ffffff\">Brunch</h1><div class=\"c9-txl display-5\"><small class=\"text-muted\">&nbsp;Available on weekends and holidays</small></div></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-wideright\",\"verticalAlign\":\"bottom\",\"overlayHue\":\"#ffffff\",\"overlayOpacity\":10,\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-wideright\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,1);mix-blend-mode:overlay\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Small Plates\",\"subheading\":\"served all day\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Small Plates</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;served all day</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Nachos\",\"subheading\":\"$16\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Nachos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$16</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Tacos\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Tacos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Plate of 3 small tacos. Like the tiniest tacos you\u2019ve ever seen for fourteen big ones</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Charcuterie\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Charcuterie</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Beef Tips\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Beef Tips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">At this far into the fake menu we ran out of ideas</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Mac &amp; Cheese\",\"subheading\":\"$10\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Mac &amp; Cheese</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$10</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/image-carousel {\"instanceId\":0,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\"],\"id\":[7340,7342,7341]} -->\n<div id=\"c9-image-carousel-indicator-0\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Entrees\",\"subheading\":\"7am-noon\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Entrees</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;7am-noon</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"NY Strip\",\"subheading\":\"$26\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">NY Strip</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$26</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Grilled Chicken\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Grilled Chicken</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Pork Loin\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Pork Loin</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Kielbasa\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Kielbasa</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Sausages are pretty good. Not quite sure what this kind is though</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Lamb Chops\",\"subheading\":\"$22\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Lamb Chops</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$22</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">How dare you think about eating these tiny baby animals</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Veggie Burger\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Burger</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Like those fake meat burgers. This is the real deal</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Veggie Lasagna\",\"subheading\":\"$17\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Lasagna</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$17</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Made with things that aren\u2019t meat</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":1,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg\"],\"id\":[7369,7335,7334],\"captionTitle\":[\"Brunch Cocktails\",\"Charcuterie Plate\",\"Now this is podracing\"],\"captionContent\":[\"Get hammered right after church!\",\"I mean it's mostly fruit but it's close\",null]} -->\n<div id=\"c9-image-carousel-indicator-1\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/stefan-johnson-xIFbDeGcy44-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Brunch Cocktails</h5><p>Get hammered right after church!</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-M4E7X3z80PQ-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Charcuterie Plate</h5><p>I mean it's mostly fruit but it's close</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-jZvlT-FvTZM-unsplash-1024x683.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Now this is podracing</h5></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-1\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-1\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:spacer {\"height\":47} -->\n<div style=\"height:47px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Sides\",\"subheading\":\"add for $1.00 - $6.00\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Sides</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;add for $1.00 - $6.00</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Chips\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Chips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Side Salad\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Side Salad</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Peanuts\",\"subheading\":\"$1\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Peanuts</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$1</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Yogurt\",\"subheading\":\"$2\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Yogurt</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$2</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Cereal\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Cereal</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"French Fries\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">French Fries</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Steak Bites\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Steak Bites</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":20} -->\n<div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/vertical-tabs {\"tabActive\":\"tab-saturday\",\"tabsData\":[{\"slug\":\"tab-saturday\",\"title\":\"Saturday\"},{\"slug\":\"tab-sunday\",\"title\":\"Sunday\"}],\"instanceId\":0,\"verticalAlign\":\"center\"} -->\n<div class=\"c9-vertical-tabs row\" data-tab-active=\"tab-saturday\"><div class=\"col-xs-12 col-sm-3\"><div class=\"nav flex-column nav-pills\" role=\"tablist\"><a data-toggle=\"pill\" role=\"tab\" href=\"#tab-tab-saturday-0\" class=\"nav-link active\" id=\"tab-button-tab-saturday\">Saturday</a><a data-toggle=\"pill\" role=\"tab\" href=\"#tab-tab-sunday-0\" class=\"nav-link\" id=\"tab-button-tab-sunday\">Sunday</a></div></div><div class=\"col-xs-12 col-sm-9\"><div class=\"c9-tabs-content tab-content align-self-center\"><!-- wp:c9-blocks/vertical-tabs-tab {\"slug\":\"tab-saturday\",\"tabActive\":\"tab-saturday\",\"id\":0} -->\n<div class=\"c9-vertical-tabs-tab tab-pane fade show active\" role=\"tabpanel\" id=\"tab-tab-saturday-0\" aria-labelledby=\"tab-saturday\"><!-- wp:heading {\"level\":6} -->\n<h6>Saturday Brunch Specials</h6>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Chef will make something and your server will tell you what it is and you will pay $25</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Bottomless mimosas and we\u2019ll make the newest hire clean up the $30</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/vertical-tabs-tab -->\n\n<!-- wp:c9-blocks/vertical-tabs-tab {\"slug\":\"tab-sunday\",\"tabActive\":\"tab-saturday\",\"id\":0} -->\n<div class=\"c9-vertical-tabs-tab tab-pane fade\" role=\"tabpanel\" id=\"tab-tab-sunday-0\" aria-labelledby=\"tab-sunday\"><!-- wp:heading {\"level\":6} -->\n<h6>Sunday Brunch Specials</h6>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Chef will make osmething and your server will tell you what it is and you will pay $25</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Ditch church and prove it for 10% off your total</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:c9-blocks/vertical-tabs-tab --></div></div></div>\n<!-- /wp:c9-blocks/vertical-tabs --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":2,\"containerHue\":\"#eeeeee\",\"minScreenHeight\":67} -->\n<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:67vh;background-color:rgba(238,238,238,1)\"><!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"center\",\"minScreenHeight\":10} -->\n<div class=\"container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\" style=\"min-height:10vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:separator -->\n<hr class=\"wp-block-separator\"/>\n<!-- /wp:separator -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Sustainable Food Mission\",\"tagLevel\":3,\"displayLevel\":\"1\",\"textAlign\":\"center\",\"weight\":\"light\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-h h1 font-weight-light\">Sustainable Food Mission</h3></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:spacer {\"height\":26} -->\n<div style=\"height:26px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don't let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.\",\"tagLevel\":4,\"displayLevel\":\"5\",\"type\":\"c9-sh subhead-h\",\"textAlign\":\"center\",\"weight\":\"light\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h4 class=\"c9-sh subhead-h5 font-weight-light\">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don't let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h4></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:separator -->\n<hr class=\"wp-block-separator\"/>\n<!-- /wp:separator -->\n\n<!-- wp:spacer {\"height\":55} -->\n<div style=\"height:55px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:button {\"align\":\"center\",\"className\":\"is-style-squared\"} -->\n<div class=\"wp-block-button aligncenter is-style-squared\"><a class=\"wp-block-button__link\" href=\"#\">Get involved</a></div>\n<!-- /wp:button -->\n\n<!-- wp:spacer {\"height\":55} -->\n<div style=\"height:55px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:image -->\n<figure class=\"wp-block-image\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/mission-bio-web-683x1024.jpg\" alt=\"\"/></figure>\n<!-- /wp:image --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n\n<!-- wp:c9-blocks/grid {\"instanceId\":3,\"rows\":2,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"normal\",\"minScreenHeight\":80,\"focalPoint\":{\"x\":0.4700460829493088,\"y\":0.8641975308641975}} -->\n<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:80vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:47.004608294930875% 86.41975308641975%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:normal\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"verticalAlign\":\"center\",\"minScreenHeight\":43} -->\n<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\" style=\"min-height:43vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column {\"verticalAlign\":\"center\"} -->\n<div class=\"c9-block-layout-column c9-column text-left c9-is-vertically-aligned-center\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Dinner\",\"subheading\":\"New Fall Menu\",\"addSubheading\":true,\"displayLevel\":\"5\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-txl display-5\" style=\"color:#ffffff\">Dinner</h1><div class=\"c9-txl display-5\"><small class=\"text-muted\">&nbsp;New Fall Menu</small></div></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container -->\n\n<!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-equal\",\"verticalAlign\":\"bottom\",\"overlayHue\":\"#ffffff\",\"overlayOpacity\":10,\"blendMode\":\"multiply\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n<div class=\"container alignwide c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-bottom c9-3-col-equal\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(255,255,255,1);mix-blend-mode:multiply\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Small Plates\",\"subheading\":\"served all day\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Small Plates</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;served all day</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Nachos\",\"subheading\":\"$16\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Nachos</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$16</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Homemade tortillas, carnitas, no beans, zero beans, steaks, chiwowa cheese, other good stuff</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Charcuterie\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Charcuterie</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">This is where its at fellas. Beef jerky in little tiny slices and some weird dips that make no sense</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Beef Tips\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Beef Tips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">At this far into the fake menu we ran out of ideas</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Mac &amp; Cheese\",\"subheading\":\"$10\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Mac &amp; Cheese</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$10</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Let\u2019s be honest with ourselves\u2026 no one is going to order this</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Bacon Stick\",\"subheading\":\"$40\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Bacon Stick</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$40</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">This is $40 of bacon on a stick. Prepare your veins for cholesterol</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/image-carousel {\"instanceId\":2,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\"],\"id\":[7340,7342,7341]} -->\n<div id=\"c9-image-carousel-indicator-2\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/abhishek-sanwa-limbu-LR559Dcst70-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-HlNcigvUi4Q-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/brooke-lark-W9OKrxBqiZA-unsplash-1024x683.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Entrees\",\"subheading\":\"7am-noon\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Entrees</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;7am-noon</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"NY Strip\",\"subheading\":\"$26\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">NY Strip</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$26</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Salted, peppered, buttered? We are in real trouble if we mess something this easy up</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Grilled Chicken\",\"subheading\":\"$14\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Grilled Chicken</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$14</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Grilled chicken full of naturally grown things and sadness cause no one ever wants a grilled chicken</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Pork Loin\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Pork Loin</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Some other weird meat that I\u2019ve seen at the store before. Full of ingredients and things.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Kielbasa\",\"subheading\":\"$12\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Kielbasa</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$12</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Sausages are pretty good. Not quite sure what this kind is though</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Lamb Chops\",\"subheading\":\"$22\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Lamb Chops</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$22</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">How dare you think about eating these tiny baby animals</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Veggie Burger\",\"subheading\":\"$13\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Burger</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$13</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Like those fake meat burgers. This is the real deal</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Veggie Lasagna\",\"subheading\":\"$17\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Veggie Lasagna</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$17</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Made with things that aren\u2019t meat</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Flatbread Pizza\",\"subheading\":\"$19\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Flatbread Pizza</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$19</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:paragraph {\"customFontSize\":14} -->\n<p style=\"font-size:14px\">Made with tomatoes, meat, and mystery sauce</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:c9-blocks/column -->\n\n<!-- wp:c9-blocks/column -->\n<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":3,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\"],\"id\":[7339,7336,7337],\"captionTitle\":[\"Chernobyl Burger\",\"Side Salad\",\"Chernobyl Fruit\"],\"captionContent\":[\"For all you vegans out there\",\"This thing is full of weirdness\",\"Good for stronk bones\"]} -->\n<div id=\"c9-image-carousel-indicator-3\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Burger</h5><p>For all you vegans out there</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/jennifer-schmidt-zOlQ7lF-3vs-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Side Salad</h5><p>This thing is full of weirdness</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Fruit</h5><p>Good for stronk bones</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n<!-- /wp:c9-blocks/image-carousel -->\n\n<!-- wp:spacer {\"height\":27} -->\n<div style=\"height:27px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n<!-- /wp:spacer -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Sides\",\"subheading\":\"add for $1.00 - $6.00\",\"addSubheading\":true,\"tagLevel\":5} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">Sides</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;add for $1.00 - $6.00</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Chips\",\"subheading\":\"$4\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Chips</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$4</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Side Salad\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Side Salad</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"French Fries\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">French Fries</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading -->\n\n<!-- wp:c9-blocks/heading {\"heading\":\"Steak Bites\",\"subheading\":\"$6\",\"addSubheading\":true,\"tagLevel\":5,\"weight\":\"light\"} -->\n<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h font-weight-light\">Steak Bites</h5><div class=\"c9-h h5\"><small class=\"text-muted\">&nbsp;$6</small></div></div>\n<!-- /wp:c9-blocks/heading --></div></div>\n<!-- /wp:c9-blocks/column --></div></div>\n<!-- /wp:c9-blocks/column-container --></div>\n<!-- /wp:c9-blocks/grid -->\n"
});

/***/ }),
/* 490 */
/*!*******************************************************************************!*\
  !*** ./src/components/templates-modal/page-templates/landing-page-service.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	icon: "wordpress",
	markup: "\n\t<!-- wp:c9-blocks/grid {\"instanceId\":0,\"rows\":2,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg\",\"containerHue\":\"#313131\",\"bgImgAttach\":true,\"overlayHue\":\"#313131\",\"overlayOpacity\":9,\"blendMode\":\"multiply\",\"minScreenHeight\":90} -->\n\t<div class=\"c9-grid p-5 c9-fixed c9-grid-has-background\" style=\"min-height:90vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/audience-celebration-concert-1179581-web66.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.9);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:spacer {\"height\":155} -->\n\t<div style=\"height:155px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Service Offering\",\"subheading\":\"Landing Page Template\",\"addSubheading\":true,\"displayLevel\":\"5\",\"type\":\"c9-txl display-\",\"textColor\":\"#eeeeee\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-5 font-weight-light\" style=\"color:#eeeeee\">Service Offering</h1><div class=\"c9-txl display-5\"><small class=\"text-muted\">&nbsp;Landing Page Template</small></div></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer -->\n\t<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-equal\",\"verticalAlign\":\"center\",\"overlayHue\":\"#eeeeee\",\"overlayOpacity\":10,\"blendMode\":\"normal\",\"minScreenHeight\":1,\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-3 c9-is-vertically-aligned-center c9-3-col-equal\" style=\"min-height:1vh\"><div class=\"c9-overlay-container\" style=\"background-color:rgba(238,238,238,1);mix-blend-mode:normal\"></div><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":3} -->\n\t<h3>Step 1</h3>\n\t<!-- /wp:heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination.&nbsp;</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":3} -->\n\t<h3>Step 2</h3>\n\t<!-- /wp:heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>At the end of the day, going forward, a new normal that has evolved into lots of boring shit.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":3} -->\n\t<h3>Step 3</h3>\n\t<!-- /wp:heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":1} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"wide\",\"columns\":2,\"layout\":\"c9-2-col-equal\",\"minScreenHeight\":1} -->\n\t<div class=\"container alignwide c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal\" style=\"min-height:1vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n\t<h4>Reason #1</h4>\n\t<!-- /wp:heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n\t<h4>Reason Maybe 3,000</h4>\n\t<!-- /wp:heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":2,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":8,\"blendMode\":\"multiply\",\"minScreenHeight\":60,\"containerVideoURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\"} -->\n\t<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background c9-grid-has-video\" style=\"min-height:60vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-video-container\"><div class=\"c9-embed-container\"><video id=\"containerVideo-2\" class=\"c9-video-custom\" playsinline autoplay muted loop style=\"min-height:60vh\"><source src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/Pexels-Videos-2706-1.mp4\" type=\"video/mp4\"/></video></div></div><div class=\"c9-image-container\" style=\"background-position:50% 50%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,.8);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Schedule Consultation\",\"tagLevel\":3,\"displayLevel\":\"2\",\"textColor\":\"#ffffff\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-h h2\" style=\"color:#ffffff\">Schedule Consultation</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"One of our professionals will walk you through the process\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"textColor\":\"#ffffff\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh font-weight-light\" style=\"color:#ffffff\">One of our professionals will walk you through the process</h4></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":42} -->\n\t<div style=\"height:42px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:button {\"textColor\":\"vivid-green-cyan\",\"className\":\"is-style-outline\"} -->\n\t<div class=\"wp-block-button is-style-outline\"><a class=\"wp-block-button__link has-text-color has-vivid-green-cyan-color\" href=\"#\">Schedule Now</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n\t<p></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":3,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"FAQ Toggles\",\"subheading\":\"with image carousels\",\"addSubheading\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-h\">FAQ Toggles</h1><div class=\"c9-h h1\"><small class=\"text-muted\">&nbsp;with image carousels</small></div></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/toggles {\"toggleCount\":5,\"instanceId\":0} -->\n\t<div class=\"c9-toggles accordion\" id=\"accordion-0\"><!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":1,\"id\":0} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading1-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse1-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>1. </strong>How long is the consultation?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse1-0\" data-parent=\"#accordion-0\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":2,\"id\":0} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading2-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse2-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>2. </strong>Is the consultation required?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse2-0\" data-parent=\"#accordion-0\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":3,\"id\":0} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading3-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse3-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>3. </strong>Do you work for non-profits?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse3-0\" data-parent=\"#accordion-0\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":4,\"id\":0} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading4-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse4-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>4. </strong>What does an image carousel look like?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse4-0\" data-parent=\"#accordion-0\"><div><!-- wp:c9-blocks/image-carousel {\"instanceId\":3,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\"],\"id\":[7547,7535,7534]} -->\n\t<div id=\"c9-image-carousel-indicator-3\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-3\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-3\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/image-carousel --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle -->\n\t\n\t<!-- wp:c9-blocks/toggles-toggle {\"toggleNumber\":5,\"id\":0} -->\n\t<div class=\"c9-toggles-toggle\"><div class=\"c9-toggles-item-heading\" id=\"c9-toggles-heading5-0\" data-toggle=\"collapse\" data-target=\"#c9-toggles-collapse5-0\"><div class=\"mb-0\"><span class=\"c9-toggles-toggle-label\"><strong>5. </strong>Can we read the whole thing?</span><span class=\"c9-toggles-item-collapse\"><span class=\"fas fa-angle-right\"></span></span></div></div><div class=\"c9-toggles-item-content collapse\" id=\"c9-toggles-collapse5-0\" data-parent=\"#accordion-0\"><div><!-- wp:paragraph -->\n\t<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>\n\t<!-- /wp:paragraph --></div></div></div>\n\t<!-- /wp:c9-blocks/toggles-toggle --></div>\n\t<!-- /wp:c9-blocks/toggles --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":4} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Our Brands\",\"subheading\":\"2000 - 2010\",\"textAlign\":\"center\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\">Our Brands</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/carousel {\"instanceId\":0,\"autoSlide\":false} -->\n\t<div id=\"c9-carousel-indicator-0\" class=\"c9-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"false\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><!-- wp:c9-blocks/carousel-slide {\"id\":0,\"slideActive\":2,\"slides\":3} -->\n\t<div class=\"c9-carousel-slide carousel-item active\"><!-- wp:gallery {\"columns\":4,\"imageCrop\":false} -->\n\t<ul class=\"wp-block-gallery columns-4\"><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-8.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-7.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-6.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-5.jpg\" alt=\"\"/></figure></li></ul>\n\t<!-- /wp:gallery --></div>\n\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\n\t<!-- wp:c9-blocks/carousel-slide {\"id\":1,\"slideActive\":2,\"slides\":3} -->\n\t<div class=\"c9-carousel-slide carousel-item\"><!-- wp:gallery {\"columns\":4,\"imageCrop\":false} -->\n\t<ul class=\"wp-block-gallery columns-4\"><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-5.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-6.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-7.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-8.jpg\" alt=\"\"/></figure></li></ul>\n\t<!-- /wp:gallery --></div>\n\t<!-- /wp:c9-blocks/carousel-slide -->\n\t\n\t<!-- wp:c9-blocks/carousel-slide {\"id\":2,\"slideActive\":2,\"slides\":3} -->\n\t<div class=\"c9-carousel-slide carousel-item\"><!-- wp:gallery {\"columns\":4,\"imageCrop\":false} -->\n\t<ul class=\"wp-block-gallery columns-4\"><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-5.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-6.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-7.jpg\" alt=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/logo-8.jpg\" alt=\"\"/></figure></li></ul>\n\t<!-- /wp:gallery --></div>\n\t<!-- /wp:c9-blocks/carousel-slide --></div><a class=\"carousel-control-prev\" href=\"#c9-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/carousel --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:spacer {\"height\":60} -->\n\t<div style=\"height:60px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:spacer {\"height\":60} -->\n\t<div style=\"height:60px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":5} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n\t<h4>Step 1 - Intermediate Subheading</h4>\n\t<!-- /wp:heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:list -->\n\t<ul><li>Download documents from link</li><li>Fill out and return documents to client</li><li>Review forms with internal team</li><li>Send superfluous status emails</li><li>Erroneaously misspell corporate words</li><li>Try not to die of eating too many hamburgers</li><li>It's harder than you think</li></ul>\n\t<!-- /wp:list --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":0,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/services-landing-page-bg-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\"],\"id\":[7416,7339,7337],\"captionTitle\":[\"Slide Caption\",\"Chernobyl Burger\",\"Chernobyl Oranges\"],\"captionContent\":[\"Step 1 caption\",\"I'd eat it for sure.\",\"Don't eat them.\"]} -->\n\t<div id=\"c9-image-carousel-indicator-0\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-0\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/services-landing-page-bg-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Slide Caption</h5><p>Step 1 caption</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/rustic-vegan-pRKDJZWNUvY-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Burger</h5><p>I'd eat it for sure.</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/edgar-castrejon-1CsaVdwfIew-unsplash-683x1024.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Chernobyl Oranges</h5><p>Don't eat them.</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-0\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":6,\"containerHue\":\"#e9e9e9\"} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh;background-color:rgba(233,233,233,1)\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":2,\"layout\":\"c9-2-col-equal\",\"containerWidth\":\"container-narrow\"} -->\n\t<div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n\t<h4>Step 2</h4>\n\t<!-- /wp:heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Nocusing solely on the bottom lineanot echnology immersion along the information highway will close the door on your foot</p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:heading {\"level\":4} -->\n\t<h4>Step 3</h4>\n\t<!-- /wp:heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Nanotechnology immersion along the information highway will close the loop.&nbsp;<a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">Learn how to do the thing</a></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/cta {\"type\":\"c9-sh\",\"buttonText\":\"Watch Video\",\"buttonAlignment\":\"right\",\"buttonTextColor\":\"#00d084\",\"buttonSize\":\"c9-button-size-large\",\"buttonShape\":\"outline\",\"buttonTarget\":true,\"ctaLayout\":\"three-quarters\",\"ctaPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"ctaWidth\":\"container-fluid\",\"ctaBackgroundColor\":\"#404041\",\"ctaTextColor\":\"#eeeeee\",\"align\":\"full\"} -->\n\t<div style=\"background-color:rgba(64,64,65,1);text-align:right\" class=\"c9-cta c9-block-cta container-fluid alignfull p-5\"><div class=\"row\"><div class=\"c9-cta-content col-12 col-md-9\"><div class=\"c9-cta-text c9-sh\" style=\"color:#eeeeee\"><p>Watch our video walk through to get a guided tour.</p></div></div><div class=\"c9-cta-button col-12 col-md-3\"><a href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"wp-block-button__link c9-button-shape-outline c9-button-size-large\" style=\"color:#00d084\">Watch Video<span class=\"sr-only\">(Link opens in new window)</span></a></div></div></div>\n\t<!-- /wp:c9-blocks/cta -->\n\t\n\t<!-- wp:spacer {\"height\":70} -->\n\t<div style=\"height:70px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:separator -->\n\t<hr class=\"wp-block-separator\"/>\n\t<!-- /wp:separator -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Nine More Seasons\",\"textAlign\":\"center\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\">Nine More Seasons</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":7,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:quote -->\n\t<blockquote class=\"wp-block-quote\"><p>Nine more seasons until I get that dipping szechuan sauce! For ninety-seven more years, Morty! I want that mcnuggut sauce Morty! Guess Who!</p><cite>A Person Wrote this</cite></blockquote>\n\t<!-- /wp:quote -->\n\t\n\t<!-- wp:button {\"align\":\"center\"} -->\n\t<div class=\"wp-block-button aligncenter\"><a class=\"wp-block-button__link\" href=\"#\">Sign up now</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":1,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg\"],\"id\":[7448,7449,7450],\"captionTitle\":[\"Office Interior\",\"Library Interior\",\"Office Chairs\"],\"captionContent\":[\"Slide caption goes here\",\"Subheading information would go here\",\"Don't sit on them or you're fired\"]} -->\n\t<div id=\"c9-image-carousel-indicator-1\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-1\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Office Interior</h5><p>Slide caption goes here</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web-1-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Library Interior</h5><p>Subheading information would go here</p></div></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/ali-yahya-ytNFYf4d_30-unsplash-web3-1024x431.jpg\" class=\"d-block w-100\"/><div class=\"carousel-caption d-none d-md-block\"><h5>Office Chairs</h5><p>Don't sit on them or you're fired</p></div></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-1\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-1\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":8,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash.jpg\",\"overlayHue\":\"#abb8c3\",\"overlayOpacity\":4,\"blendMode\":\"multiply\",\"minScreenHeight\":75,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"focalPoint\":{\"x\":0.5299539170506913,\"y\":0.4236111111111111}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll c9-grid-has-background\" style=\"min-height:75vh\"><div class=\"c9-image-container\" style=\"background-position:52.995391705069125% 42.36111111111111%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/candice-picard-mqSLs9mKIOc-unsplash.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(171,184,195,.4);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Service Name\",\"displayLevel\":\"3\",\"type\":\"c9-txl display-\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h1 class=\"c9-txl display-3\">Service Name</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Service features including some feelings\",\"tagLevel\":4,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-sh subhead-h4 font-weight-light\">Service features including some feelings</h4></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:spacer {\"height\":30} -->\n\t<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"$19 / ADVANCED\",\"tagLevel\":5,\"textAlign\":\"center\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-h\">$19 / ADVANCED</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":30} -->\n\t<div style=\"height:30px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:button {\"align\":\"center\",\"className\":\"is-style-squared\"} -->\n\t<div class=\"wp-block-button aligncenter is-style-squared\"><a class=\"wp-block-button__link\">BUY NOW</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":9,\"containerHue\":\"#eeeeee\",\"minScreenHeight\":50,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:50vh;background-color:rgba(238,238,238,1)\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":1,\"layout\":\"one-column\",\"containerWidth\":\"container-narrow\",\"verticalAlign\":\"center\",\"minScreenHeight\":10} -->\n\t<div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-1 c9-is-vertically-aligned-center one-column\" style=\"min-height:10vh\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Our Mission\",\"tagLevel\":3,\"displayLevel\":\"1\",\"textAlign\":\"center\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-center\"><h3 class=\"c9-h h1\">Our Mission</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:separator -->\n\t<hr class=\"wp-block-separator\"/>\n\t<!-- /wp:separator -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don't let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.\",\"tagLevel\":5,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-sh font-weight-light\">And then, we filled the space up with a little tiny story to break up the menus cause that makes us unique. Our food is made just like any other food, in a kitchen, but don't let that stop you from reading our devastating web copy where we just describe the food instead of letting you put it in your mouth cause this is just  a screen man.</h5></div>\n\t<!-- /wp:c9-blocks/heading --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:spacer -->\n\t<div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:separator -->\n\t<hr class=\"wp-block-separator\"/>\n\t<!-- /wp:separator -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Program Benefits\",\"textAlign\":\"center\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\">Program Benefits</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":10,\"rows\":2,\"containerMargin\":{\"linked\":true,\"unit\":\"px\",\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"c9-grid p-5 my-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"align\":\"narrow\",\"columns\":3,\"columnsGap\":1,\"layout\":\"c9-3-col-equal\",\"containerWidth\":\"container-narrow\"} -->\n\t<div class=\"container-narrow c9-column-container c9-scroll c9-layout-columns-3 c9-3-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-1 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image -->\n\t<figure class=\"wp-block-image\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/three-girls-drinking-beers-1024x682.jpg\" alt=\"\"/></figure>\n\t<!-- /wp:image -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"More Drinking with Friends\",\"tagLevel\":5} -->\n\t<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">More Drinking with Friends</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Especially at happy hour\",\"tagLevel\":6,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-sh font-weight-light\">Especially at happy hour</h6></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p><a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">Learn more</a></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image -->\n\t<figure class=\"wp-block-image\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/stock-image-3-1024x682.jpg\" alt=\"\"/></figure>\n\t<!-- /wp:image -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"More Adventures\",\"tagLevel\":5} -->\n\t<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">More Adventures</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Especially with the dudes\",\"tagLevel\":6,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-sh font-weight-light\">Especially with the dudes</h6></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p><a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">Learn more</a></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image -->\n\t<figure class=\"wp-block-image\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-blur-wide-1024x682.jpg\" alt=\"\"/></figure>\n\t<!-- /wp:image -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"More Drinking with Friends\",\"tagLevel\":5} -->\n\t<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-h\">More Drinking with Friends</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Free tickets to VIP shit you don't event want\",\"tagLevel\":6,\"type\":\"c9-sh subhead-h\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h6 class=\"c9-sh font-weight-light\">Free tickets to VIP shit you don't event want</h6></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p><a href=\"http://gutenberg-stock-test.local/service-landing-page/#\">Learn more</a></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container -->\n\t\n\t<!-- wp:c9-blocks/column-container {\"columns\":1,\"layout\":\"one-column\",\"containerMargin\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"},\"containerPadding\":{\"linked\":true,\"top\":\"5\",\"bottom\":\"5\",\"left\":\"5\",\"right\":\"5\",\"icon\":\"admin-links\"}} -->\n\t<div class=\"container c9-column-container p-5 my-5 c9-scroll c9-layout-columns-1 one-column\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/image-carousel {\"instanceId\":2,\"url\":[\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\",\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\"],\"id\":[7536,7535,7534]} -->\n\t<div id=\"c9-image-carousel-indicator-2\" class=\"c9-image-carousel carousel slide\" data-ride=\"carousel\" data-interval=\"5000\" data-wrap=\"true\"><ol class=\"carousel-indicators\"><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"1\"></li><li data-target=\"#c9-image-carousel-indicator-2\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/concert-crowd-dancing-1540338-web2-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/adult-applause-audience-625644-web-1024x682.jpg\" class=\"d-block w-100\"/></div><div class=\"carousel-item\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/audience-backlit-band-154147-web-1024x682.jpg\" class=\"d-block w-100\"/></div></div><a class=\"carousel-control-prev\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#c9-image-carousel-indicator-2\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div>\n\t<!-- /wp:c9-blocks/image-carousel --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:separator -->\n\t<hr class=\"wp-block-separator\"/>\n\t<!-- /wp:separator -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Customer Testimonials\",\"textAlign\":\"center\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h1 class=\"c9-h\">Customer Testimonials</h1></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:spacer {\"height\":57} -->\n\t<div style=\"height:57px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":11} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"align\":\"left\",\"width\":395,\"height\":330} -->\n\t<div class=\"wp-block-image\"><figure class=\"alignleft is-resized\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-responsive-theme-e1567053405233-1024x856.jpeg\" alt=\"\" width=\"395\" height=\"330\"/><figcaption><strong>First Name Last Name<br></strong>Title or Subheading</figcaption></figure></div>\n\t<!-- /wp:image --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Title\",\"tagLevel\":3,\"displayLevel\":\"4\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-h h4\">Title</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:paragraph -->\n\t<p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar.</p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:paragraph -->\n\t<p><strong>Girl who's trying to find her friends</strong></p>\n\t<!-- /wp:paragraph -->\n\t\n\t<!-- wp:spacer {\"height\":20} -->\n\t<div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"See how this girl found her friends\",\"tagLevel\":5,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-sh font-weight-light\">See how this girl found her friends</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:button {\"align\":\"center\"} -->\n\t<div class=\"wp-block-button aligncenter\"><a class=\"wp-block-button__link\" href=\"#\">Just wow</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":12} -->\n\t<div class=\"c9-grid p-5 c9-scroll\" style=\"min-height:20vh\"><!-- wp:c9-blocks/column-container {\"columns\":2,\"columnsGap\":4,\"layout\":\"c9-2-col-equal\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-equal\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-4 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Meet Star Wars Girl\",\"tagLevel\":3,\"displayLevel\":\"4\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h3 class=\"c9-h h4\">Meet Star Wars Girl</h3></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:quote -->\n\t<blockquote class=\"wp-block-quote\"><p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. <a href=\"#\">Dramatically maintain</a> clicks-and-mortar.</p><cite>Girl who's trying to find her friends</cite></blockquote>\n\t<!-- /wp:quote -->\n\t\n\t<!-- wp:spacer {\"height\":31} -->\n\t<div style=\"height:31px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div>\n\t<!-- /wp:spacer -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"See how this girl found her friends\",\"tagLevel\":5,\"type\":\"c9-sh subhead-h\",\"textAlign\":\"center\",\"weight\":\"light\"} -->\n\t<div class=\"section-heading c9-heading text-center\"><h5 class=\"c9-sh font-weight-light\">See how this girl found her friends</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:button {\"align\":\"center\"} -->\n\t<div class=\"wp-block-button aligncenter\"><a class=\"wp-block-button__link\" href=\"#\">SEE HER STORY</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:image {\"align\":\"center\"} -->\n\t<div class=\"wp-block-image\"><figure class=\"aligncenter\"><img src=\"//cortex.covertnine.com/wp-content/uploads/2019/08/gutenberg-testimonial-1024x1024.jpeg\" alt=\"girl in tesitmonial from WordPress Gutenberg Block\"/></figure></div>\n\t<!-- /wp:image --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n\t\n\t<!-- wp:c9-blocks/grid {\"instanceId\":13,\"containerImgURL\":\"//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing.jpg\",\"containerHue\":\"#313131\",\"overlayHue\":\"#313131\",\"overlayOpacity\":10,\"blendMode\":\"multiply\",\"minScreenHeight\":70,\"focalPoint\":{\"x\":0.2350230414746544,\"y\":0.4375}} -->\n\t<div class=\"c9-grid p-5 c9-scroll c9-grid-has-background\" style=\"min-height:70vh;background-color:rgba(49,49,49,1)\"><div class=\"c9-image-container\" style=\"background-position:23.502304147465438% 43.75%;background-image:url(//cortex.covertnine.com/wp-content/uploads/2019/08/crowd-dancing.jpg);background-repeat:no-repeat;background-size:cover\"></div><div class=\"c9-overlay-container\" style=\"background-color:rgba(49,49,49,1);mix-blend-mode:multiply\"></div><!-- wp:c9-blocks/column-container {\"columns\":2,\"layout\":\"c9-2-col-wideleft\",\"verticalAlign\":\"center\"} -->\n\t<div class=\"container c9-column-container c9-scroll c9-layout-columns-2 c9-is-vertically-aligned-center c9-2-col-wideleft\"><div class=\"c9-layout-column-wrap c9-block-layout-column-gap-2 c9-is-responsive-column\"><!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:c9-blocks/heading {\"heading\":\"Ready to sign up?\",\"tagLevel\":5,\"displayLevel\":\"1\",\"type\":\"c9-txl display-\",\"textColor\":\"#ffffff\"} -->\n\t<div class=\"section-heading c9-heading text-left\"><h5 class=\"c9-txl\" style=\"color:#ffffff\">Ready to sign up?</h5></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:c9-blocks/heading {\"heading\":\"Free for one month\",\"tagLevel\":4,\"displayLevel\":\"4\",\"textColor\":\"#ffffff\",\"weight\":\"light\",\"overrideStyle\":true} -->\n\t<div class=\"section-heading c9-heading text-left\"><h4 class=\"c9-h h4 font-weight-light\" style=\"color:#ffffff\">Free for one month</h4></div>\n\t<!-- /wp:c9-blocks/heading -->\n\t\n\t<!-- wp:button {\"customTextColor\":\"#ffffff\",\"className\":\"is-style-outline\"} -->\n\t<div class=\"wp-block-button is-style-outline\"><a class=\"wp-block-button__link has-text-color\" href=\"#\" style=\"color:#ffffff\">Get Started</a></div>\n\t<!-- /wp:button --></div></div>\n\t<!-- /wp:c9-blocks/column -->\n\t\n\t<!-- wp:c9-blocks/column -->\n\t<div class=\"c9-block-layout-column c9-column text-left\"><div class=\"c9-column-innner\"><!-- wp:paragraph -->\n\t<p></p>\n\t<!-- /wp:paragraph --></div></div>\n\t<!-- /wp:c9-blocks/column --></div></div>\n\t<!-- /wp:c9-blocks/column-container --></div>\n\t<!-- /wp:c9-blocks/grid -->\n"
});

/***/ }),
/* 491 */
/*!*********************************************!*\
  !*** ./src/components/large-modal/index.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Styles
 */


/**
 * WordPress dependencies
 */
var Modal = wp.components.Modal;


var LargeModal = function LargeModal(props) {
  return wp.element.createElement(
    Modal,
    _extends({ className: "c9-templates-modal", position: "top", size: "lg" }, props),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (LargeModal);

/***/ }),
/* 492 */
/*!************************************************!*\
  !*** ./src/components/large-modal/editor.scss ***!
  \************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 493);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 11)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 493 */
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/large-modal/editor.scss ***!
  \***************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 10)(false);
// Module
exports.push([module.i, ".c9-templates-modal .components-modal__header{border-bottom:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs{margin-top:-24px}@media (min-width: 600px){.c9-templates-modal{min-width:600px;max-width:600px;margin-left:-300px;transform:none;top:112px}}@media (min-width: 840px){.c9-templates-modal{min-width:800px;max-width:800px;margin-left:-400px;transform:none}}.c9-templates-modal .components-modal__header .components-modal__icon-container svg{display:block;margin-right:10px}.c9-templates-modal .components-modal__header .components-modal__header-heading{font-weight:600}\n", ""]);


/***/ }),
/* 494 */
/*!****************************************************!*\
  !*** ./src/components/templates-modal/editor.scss ***!
  \****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 495);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 11)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 495 */
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/templates-modal/editor.scss ***!
  \*******************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 10)(false);
// Module
exports.push([module.i, ".c9-templates-modal .c9-loading-wrapper{display:flex;justify-content:center;align-items:center}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options{display:grid;grid-column-gap:1rem;grid-row-gap:1rem;grid-template-columns:repeat(6, 1fr)}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button{border-width:1px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;border-radius:3px;box-shadow:inset 0 -1px 0 #ccc;padding:5px}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button:active,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button:active{border-color:#999;box-shadow:insert 0 1px 0 #999}.c9-templates-modal .c9-component-modal-tab-panel .c9-layout-options button span,.c9-templates-modal .c9-component-modal-tab-panel .c9-section-options button span{display:block;font-size:0.8rem;padding:2px 0}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab{padding:12px 16px;color:inherit}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab:focus{outline:none}.c9-templates-modal .c9-component-modal-tab-panel .components-tab-panel__tabs .c9-template-tabs-tab.is-active{position:relative;border-bottom:2px solid #00a0d2;z-index:1}\n", ""]);


/***/ }),
/* 496 */
/*!********************************************!*\
  !*** ./src/components/sidebar/editor.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ 497);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 11)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 497 */
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/sass-loader/dist/cjs.js!./src/components/sidebar/editor.scss ***!
  \***********************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 10)(false);
// Module
exports.push([module.i, ".edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg{display:block;height:16px}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg *,.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg *{stroke:initial !important}.edit-post-pinned-plugins .components-icon-button:not(.is-toggled) .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon svg [fill=\"#fff\"],.edit-post-pinned-plugins .components-icon-button:hover .c9-plugin-icon svg [fill=\"#fff\"]{fill:#fff !important}.edit-post-pinned-plugins .components-icon-button .c9-plugin-icon span{margin:-2px}.edit-post-pinned-plugins .components-icon-button.is-toggled .c9-plugin-icon span [fill=\"#fff\"]{fill:#555d66 !important}.plugin-c9-panel .plugin-c9-panel-button{display:block;width:100%;height:auto;padding:15px 10px;margin-bottom:16px;flex-shrink:0;overflow:hidden;color:inherit;text-align:center;cursor:pointer;background:none;border:1px solid;border-radius:4px;transition:0.2s color, 0.2s background-color, 0.2s border-color, 0.2s box-shadow}.plugin-c9-panel .plugin-c9-panel-button,.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{border-color:rgba(79,89,105,0.2);box-shadow:none}.plugin-c9-panel .plugin-c9-panel-button:hover,.plugin-c9-panel .plugin-c9-panel-button:active,.plugin-c9-panel .plugin-c9-panel-button:active:enabled{color:#191e23;background-color:#f8f9f9}.plugin-c9-panel .plugin-c9-panel-button:focus,.plugin-c9-panel .plugin-c9-panel-button:focus:enabled{color:#191e23;border-color:#007fac;box-shadow:0 0 0 2px #00a0d2}.plugin-c9-panel .plugin-c9-panel-button span{display:block;margin:0 auto;margin-top:3px;text-align:center;height:24px}\n", ""]);


/***/ })
/******/ ]);