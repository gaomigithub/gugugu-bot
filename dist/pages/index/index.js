(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/index/index.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mp_colorui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mp-colorui */ "./node_modules/mp-colorui/dist/index.esm.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.css */ "./src/pages/index/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_TipModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TipModal */ "./src/components/TipModal.tsx");
/* harmony import */ var _components_Calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Calendar */ "./src/components/Calendar.tsx");
/* harmony import */ var _services_normalServices__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/normalServices */ "./src/services/normalServices.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














function Index() {
  var normalServices = new _services_normalServices__WEBPACK_IMPORTED_MODULE_10__[/* NormalServices */ "a"]();

  var imgSource = __webpack_require__(/*! ../../utils/imgSource */ "./src/utils/imgSource.ts");

  var dateTool = __webpack_require__(/*! ../../utils/dateTool */ "./src/utils/dateTool.ts");

  var dataSource = __webpack_require__(/*! ../../utils/dataSource */ "./src/utils/dataSource.ts");

  var defaultUIColors = ['red', 'orange', 'yellow', 'olive', 'green', 'mauve', 'purple'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState, 2),
      isShowTest = _useState2[0],
      setIsShowTest = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState4 = Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState3, 2),
      isShowCalendar = _useState4[0],
      setIsShowCalendar = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      _useState6 = Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useState5, 2),
      sentence = _useState6[0],
      setSentence = _useState6[1];

  var handleShowTest = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    setIsShowTest(true);
  }, []);
  var showAction = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (value) {
    setIsShowTest(value);
  }, []);
  var handleShowCalendar = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    setIsShowCalendar(true);
  }, []);
  var calendarShowAction = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (value) {
    setIsShowCalendar(value);
  }, []);
  var handleSentences = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    var str = dataSource.sentences[Math.floor(Math.random() * dataSource.normalSentences.length)].value;
    setSentence(str);
    return str;
  }, [dataSource]);

  var testRequest = /*#__PURE__*/function () {
    var _ref = Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var test;
      return C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return normalServices.weatherShanghai();

            case 2:
              test = _context.sent;
              console.log(test);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function testRequest() {
      return _ref.apply(this, arguments);
    };
  }(); // 可以使用所有的 React Hooks


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    testRequest();
  }); // 对应 onReady

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useReady"])(function () {}); // 对应 onShow

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useDidShow"])(function () {}); // 对应 onHide

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["useDidHide"])(function () {}); // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Taro 文档】-> 【进阶指南】->【Hooks】

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__["usePullDownRefresh"])(function () {});
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "s"], {
    className: "index",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "s"], {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Image */ "e"], {
        className: "bubble",
        style: {
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          WebkitBorderRadius: "50%",
          MozBorderRadius: "50%",
          boxShadow: "0px 2px 12px 0px rgba(61, 73, 102, 0.2)"
        },
        src: imgSource.pigeon,
        onClick: handleSentences
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "s"], {
        style: "margin-top: 50px; display: flex; flex-direction: column; align-items: center;",
        children: [sentence ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(mp_colorui__WEBPACK_IMPORTED_MODULE_6__[/* ClText */ "d"], {
          align: "center",
          text: sentence,
          size: "large",
          fontWeight: "bolder",
          textColor: defaultUIColors[Math.floor(Math.random() * defaultUIColors.length)]
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(mp_colorui__WEBPACK_IMPORTED_MODULE_6__[/* ClText */ "d"], {
          text: "What The Pigeon Say Today?",
          size: "large",
          fontWeight: "bolder"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* Text */ "p"], {
          style: "margin: 50px",
          children: dateTool.now(1)
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "s"], {
      style: "position:absolute;left:0px;bottom:0px; margin:20px;",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(mp_colorui__WEBPACK_IMPORTED_MODULE_6__[/* ClButton */ "a"], {
        onClick: handleShowCalendar,
        shape: "round",
        bgColor: "blue",
        children: "\u65E5\u5386"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__[/* View */ "s"], {
      style: "position:absolute;right:0px;bottom:0px; margin:20px;",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(mp_colorui__WEBPACK_IMPORTED_MODULE_6__[/* ClButton */ "a"], {
        onClick: handleShowTest,
        shape: "round",
        bgColor: "red",
        children: "\u5495"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_TipModal__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      show: isShowTest,
      showAction: showAction
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_Calendar__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      show: isShowCalendar,
      calendarShowAction: calendarShowAction
    })]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Index);

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/mp-colorui/dist/index.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/mp-colorui/dist/index.esm.js ***!
  \***************************************************/
/*! exports provided: ClAccordion, ClActionSheet, ClAnimation, ClAvatar, ClButton, ClCalendar, ClCard, ClCheckbox, ClCurtain, ClDivider, ClDrawer, ClFlex, ClFloatButton, ClForm, ClFormItem, ClGrid, ClIcon, ClImagePicker, ClInput, ClLayout, ClLoading, ClMenuList, ClMessage, ClModal, ClNavBar, ClNoticeBar, ClProgress, ClRadio, ClScreenDrawer, ClSearchBar, ClSelect, ClShopBar, ClStep, ClSwiper, ClSwiperAction, ClSwitch, ClTabBar, ClTabs, ClTag, ClText, ClTextarea, ClTimeline, ClTip, ClTitleBar, ClTree, ClVerticalTab, ClVerticalTabCell */
/*! exports used: ClButton, ClCalendar, ClModal, ClText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global, document) {/* unused harmony export ClAccordion */
/* unused harmony export ClActionSheet */
/* unused harmony export ClAnimation */
/* unused harmony export ClAvatar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClCalendar; });
/* unused harmony export ClCard */
/* unused harmony export ClCheckbox */
/* unused harmony export ClCurtain */
/* unused harmony export ClDivider */
/* unused harmony export ClDrawer */
/* unused harmony export ClFlex */
/* unused harmony export ClFloatButton */
/* unused harmony export ClForm */
/* unused harmony export ClFormItem */
/* unused harmony export ClGrid */
/* unused harmony export ClIcon */
/* unused harmony export ClImagePicker */
/* unused harmony export ClInput */
/* unused harmony export ClLayout */
/* unused harmony export ClLoading */
/* unused harmony export ClMenuList */
/* unused harmony export ClMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ClModal; });
/* unused harmony export ClNavBar */
/* unused harmony export ClNoticeBar */
/* unused harmony export ClProgress */
/* unused harmony export ClRadio */
/* unused harmony export ClScreenDrawer */
/* unused harmony export ClSearchBar */
/* unused harmony export ClSelect */
/* unused harmony export ClShopBar */
/* unused harmony export ClStep */
/* unused harmony export ClSwiper */
/* unused harmony export ClSwiperAction */
/* unused harmony export ClSwitch */
/* unused harmony export ClTabBar */
/* unused harmony export ClTabs */
/* unused harmony export ClTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ClText; });
/* unused harmony export ClTextarea */
/* unused harmony export ClTimeline */
/* unused harmony export ClTip */
/* unused harmony export ClTitleBar */
/* unused harmony export ClTree */
/* unused harmony export ClVerticalTab */
/* unused harmony export ClVerticalTabCell */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");




/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var SIZE = {
    xsmall: 'xs',
    small: 'sm',
    normal: '',
    diff: 'df',
    large: 'lg',
    xlarge: 'xl',
    xxlarge: 'xxl',
    slarge: 'sl',
    xslarge: 'xsl'
};
var COLOR_LIST = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'cyan',
    'blue',
    'purple',
    'mauve',
    'pink',
    'brown',
    'grey',
    'gray',
    'black',
    'white'
];
var GRADUAL_COLOR_LIST = [
    'gradualRed',
    'gradualOrange',
    'gradualGreen',
    'gradualPurple',
    'gradualPink',
    'gradualBlue'
];
var COLOR = {};
COLOR_LIST.reduce(function (pre, cur) {
    pre[cur] = cur;
    return pre;
}, COLOR);
var BG_COLOR_LIST = {};
COLOR_LIST.reduce(function (pre, cur) {
    pre[cur] = "bg-" + cur;
    pre["light-" + cur] = "bg-" + cur + " light";
    return pre;
}, BG_COLOR_LIST);
GRADUAL_COLOR_LIST.reduce(function (pre, cur) {
    pre[cur] = "bg-" + cur.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
    return pre;
}, BG_COLOR_LIST);
var TEXT_COLOR_LIST = {};
COLOR_LIST.reduce(function (pre, cur) {
    pre[cur] = "text-" + cur;
    return pre;
}, TEXT_COLOR_LIST);
var SHADOW_LIST = {
    normal: 'shadow',
    large: 'shadow-lg',
    wrap: 'shadow-wrap',
    auto: 'shadow-blur'
};
var solids = 'solids';
var solid = 'solid';
var SOLID_LIST = {
    none: '',
    around: "" + solid,
    top: solid + "-top",
    left: solid + "-left",
    right: solid + "-right",
    bottom: solid + "-bottom",
    'bold-around': "" + solids,
    'bold-top': solids + "-top",
    'bold-left': solids + "-left",
    'bold-right': solids + "-right",
    'bold-bottom': solids + "-bottom"
};
var pxMap = {
    xsmall: 40,
    small: 48,
    normal: 56,
    large: 64,
    xlarge: 72,
    xxlarge: 88,
    slarge: 160,
    xslarge: 240
};

var model = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SIZE: SIZE,
    COLOR: COLOR,
    BG_COLOR_LIST: BG_COLOR_LIST,
    TEXT_COLOR_LIST: TEXT_COLOR_LIST,
    SHADOW_LIST: SHADOW_LIST,
    SOLID_LIST: SOLID_LIST,
    pxMap: pxMap
});

/**
 * 手机号码正则校验
 * @param value 需要校验值
 * @returns {boolean}
 */
var phone = function (value) { return /^[1]([3-9])[0-9]{9}$/.test(value); };
/**
 * email 地址校验
 * @param value 需要校验值
 * @returns {boolean}
 */
var email = function (value) { return /^([a-zA-Z0-9\u4e00-\u9fa5]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value); };
/**
 * 数值范围校验
 * @param min 最小值
 * @param max 最大值
 * @param value 需要校验值
 * @returns {boolean}
 */
var range = function (min, max, value) { return value >= min && value <= max; };
/**
 * 是否为空
 * @param value 需要校验值
 * @returns {boolean}
 */
var required = function (value) { return !!value; };
/**
 * 是否为纯英文
 * @param value 需要校验值
 * @returns {boolean}
 */
var en = function (value) { return /(^[A-Za-z]+$)/.test(value); };
/**
 * 是否为纯中文
 * @param value 需要校验值
 * @returns {boolean}
 */
var cn = function (value) { return /(^[\u4e00-\u9fa5]{0,}$)/.test(value); };
/**
 * 是否为金钱数字
 * @param value 需要校验值
 * @returns {boolean}
 */
var money = function (value) { return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test("" + value); };
/**
 * 是否为纯数字
 * @param value 需要校验值
 * @returns {boolean}
 */
var number = function (value) { return /^[0-9]+.?[0-9]*$/.test("" + value); };
/**
 * 是否为 ip 地址
 * @param value 需要校验值
 * @returns {boolean}
 */
var ip = function (value) { return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value); };
/**
 * 是否为合法 url
 * @param value 需要校验值
 * @returns {boolean}
 */
var url = function (value) { return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(value); };
/**
 * 是否为合法身份证
 * @param value 需要校验值
 * @returns {boolean}
 */
var idCard = function (value) {
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    var iSum = 0;
    if (!/^\d{17}(\d|x)$/i.test(value)) {
        return false; //身份证长度或格式错误
    }
    var idCardValid = value.replace(/x$/i, "a");
    if (aCity[parseInt(idCardValid.substr(0, 2))] == null) {
        return false; //身份证地区非法;
    }
    var sBirthday = idCardValid.substr(6, 4) + "-" + Number(idCardValid.substr(10, 2)) + "-" + Number(idCardValid.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
        return false; //身份证上的出生日期非法;
    }
    for (var i = 17; i >= 0; i--) {
        iSum += (Math.pow(2, i) % 11) * parseInt(idCardValid.charAt(17 - i), 11);
    }
    if (iSum % 11 != 1) {
        return false; //身份证号非法;
    }
};
var defaultRules = {
    phone: phone,
    email: email,
    range: range,
    required: required,
    en: en,
    cn: cn,
    money: money,
    number: number,
    ip: ip,
    url: url,
    idCard: idCard
};

var classNames = classnames;
var fullDate = function (num) {
    if (num < 10)
        return "0" + num;
    return num;
};
/**
 * 获取当前日期
 * @param type 单位
 */
var getNowDate = function (type) {
    var date = new Date();
    var year = date.getFullYear();
    var month = fullDate(date.getMonth());
    var day = fullDate(date.getDate());
    if (type === "year")
        return "" + year;
    if (type === "month")
        return year + "-" + month;
    if (type === "day")
        return year + "-" + month + "-" + day;
    return year + "-" + month + "-" + day;
};
/**
 * 判断是否为 number
 * @param obj  参数值
 */
var isNumber = function (obj) {
    return typeof obj === "number" && !isNaN(obj);
};
/**
 * 按照 750 作为设计时的百分比
 */
var screenPercent = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getSystemInfoSync().screenWidth / 750;
/**
 * 随机生成 id
 * @param hashLength number 长度
 * @returns {string} id
 */
var generateId = function (hashLength) {
    if (hashLength === void 0) { hashLength = 24; }
    if (!hashLength || typeof Number(hashLength) != "number") {
        return "";
    }
    var ar = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    var hs = [];
    var hl = Number(hashLength);
    var al = ar.length;
    for (var i = 0; i < hl; i++) {
        var radom = Math.random() * al;
        var index = Math.floor(radom);
        var code = ar[index];
        hs.push(code);
    }
    return "id-" + hs.join("");
};
/**
 * 是否是 H5 环境
 * @type {boolean}
 */
var isH5 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv();
/**
 * 是否是 支付宝 环境
 * @type {boolean}
 */
var isAliPay = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.ALIPAY === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv();
/**
 * 是否是 微信 环境
 * @type {boolean}
 */
var isWeApp = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEAPP === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv();
/**
 * 获取 Rect
 * @returns {number}
 */
var getRectNumber = function () {
    if (isAliPay)
        return 0;
    return 1;
};
var utils = {
    model: model,
    getNowDate: getNowDate,
    rule: defaultRules
};

function ClAvatar(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.headerArray || []), 2), headList = _a[0], setHeadList = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var list = props.headerArray || [];
        setHeadList(list.map(function (item) {
            item.cu_avatar_id = generateId();
            return item;
        }));
    }, [props.headerArray]);
    var onClick = function () {
        props.onClick && props.onClick();
    };
    var customSize = {
        small: 48,
        normal: 64,
        large: 96,
        xlarge: 128
    };
    var width = isNumber(props.size)
        ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(props.size)
        : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(customSize[props.size || "normal"]);
    var height = isNumber(props.size)
        ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(props.size)
        : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(customSize[props.size || "normal"]);
    var em = isNumber(props.size)
        ? props.size / 48
        : customSize[props.size || "normal"] / 48;
    var avatarArray = headList.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.cu_avatar_id || index, className: props.shape + " " + BG_COLOR_LIST[item.bgColor || "black"] + " " + (props.shadow ? "shadow" : "") + " cu-avatar", style: {
            width: width,
            height: height,
            fontSize: em + "em"
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "e"], { className: "" + props.shape, src: item.url, style: {
                width: width,
                height: height,
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }, mode: "aspectFill" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "cuIcon-" + item.icon }, item.text ? item.text.slice(0, 1) : ""),
        item.tag ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-tag badge cuIcon-" + item.tag + " " + (item.tagColor ? BG_COLOR_LIST[item.tagColor] : "") })) : (""))); });
    var avatarArrayComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-avatar-group", props.className), style: Object.assign({}, props.style), onClick: function () {
            onClick();
        } }, avatarArray));
    return props.headerArray && props.headerArray.length > 1 ? (avatarArrayComponent) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(props.className), style: Object.assign({}, props.style), onClick: function () {
            onClick();
        } }, avatarArray));
}
ClAvatar.options = {
    addGlobalClass: true
};
ClAvatar.defaultProps = {
    size: "normal",
    shape: "radius",
    type: "normal",
    headerArray: [],
    shadow: true
};

function ClButton(props) {
    var onClick = function (e) {
        !props.disabled && props.onClick && props.onClick(e);
    };
    var onOpenSetting = function (e) {
        !props.disabled && props.onOpenSetting && props.onOpenSetting(e);
    };
    var onGetUserInfo = function (e) {
        !props.disabled && props.onGetUserInfo && props.onGetUserInfo(e);
    };
    var onContact = function (e) {
        !props.disabled && props.onContact && props.onContact(e);
    };
    var onGetPhoneNumber = function (e) {
        !props.disabled && props.onGetPhoneNumber && props.onGetPhoneNumber(e);
    };
    var onGetRealnameAuthInfo = function (e) {
        !props.disabled &&
            props.onGetRealnameAuthInfo &&
            props.onGetRealnameAuthInfo(e);
    };
    var onError = function (e) {
        !props.disabled && props.onError && props.onError(e);
    };
    var shapeClassName = props.shape || "radius";
    var sizeClassName = props.size || "normal";
    var colorClassName = props.bgColor || "blue";
    var disabledClassName = props.disabled;
    var loadingClassName = props.loading ? "cuIcon-loading iconfont-spin" : "";
    var plainClassName = props.plain;
    var plainSizeName = props.plainSize === "default" ? "line" : "lines";
    var shadowSizeName = props.shadow ? "shadow" : "";
    var buttonClassName = "cu-btn " + shapeClassName + " " + SIZE[sizeClassName] + " " + (plainClassName ? "" : BG_COLOR_LIST[colorClassName]) + " " + (plainClassName ? plainSizeName + "-" + colorClassName : "") + " " + shadowSizeName;
    var normalButton = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "b"], { "data-data": props.customData, className: classNames(buttonClassName + " " + (disabledClassName ? "disabled" : "")), 
        // disabled={disabledClassName}
        onClick: onClick.bind(this), openType: props.disabled ? undefined : props.openType, onOpenSetting: onOpenSetting, onGetUserInfo: onGetUserInfo, onContact: onContact, onGetPhoneNumber: onGetPhoneNumber, onGetRealnameAuthInfo: onGetRealnameAuthInfo, onError: onError, appParameter: props.appParameter, showMessageCard: props.showMessageCard, sessionFrom: props.sessionFrom, sendMessageTitle: props.sendMessageTitle, sendMessagePath: props.sendMessagePath, sendMessageImg: props.sendMessageImg, scope: props.scope, lang: props.lang },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: loadingClassName }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], null, props.text),
        props.children));
    var longButton = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("flex flex-direction", props.className), style: Object.assign({}, props.style) }, normalButton));
    return props.long ? (longButton) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(props.className), style: Object.assign({ display: "inline-block" }, props.style) }, normalButton));
}
ClButton.options = {
    addGlobalClass: true
};
ClButton.defaultProps = {
    shape: "radius",
    size: "normal",
    bgColor: "blue",
    disabled: false,
    icon: undefined,
    loading: false,
    long: false,
    plain: false,
    plainSize: "default",
    shadow: true,
    openType: undefined,
    customData: {}
};

var SPECIAL_CLASS = {
    firstUpper: 'text-Abc',
    upper: 'text-ABC',
    lower: 'text-abc'
};
var LINE_SPACING = {
    small: 95 * screenPercent,
    normal: 115 * screenPercent,
    large: 155 * screenPercent
};
var FONT_SPACING = {
    small: 5,
    normal: 10,
    large: 20
};
function ClText(props) {
    var lineSpacing = props.lineSpacing || 'none';
    var fontSpacing = props.fontSpacing || 'none';
    var size = isNumber(props.size) ? props.size : props.size || 'normal';
    var fontSize = isNumber(size)
        ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(size)
        : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(pxMap[size || 'normal'] * screenPercent);
    // const sizeClassName = `text-${SIZE[size === "normal" ? "df" : size]}`;
    var textColorClassName = props.textColor
        ? TEXT_COLOR_LIST[props.textColor || 'black']
        : '';
    var bgColorClassName = props.bgColor
        ? BG_COLOR_LIST[props.bgColor || 'white']
        : '';
    var cutClassName = props.cut ? 'text-cut' : '';
    var alignClassName = props.align ? "text-" + props.align : 'text-left';
    var specialClassName = props.special ? SPECIAL_CLASS[props.special] : '';
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(textColorClassName + " " + bgColorClassName + " " + cutClassName + " " + alignClassName, props.className), style: Object.assign({
            lineHeight: lineSpacing === 'none'
                ? 'normal'
                : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(isNumber(lineSpacing)
                    ? lineSpacing
                    : LINE_SPACING[lineSpacing]),
            letterSpacing: fontSpacing === 'none'
                ? 'normal'
                : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(isNumber(fontSpacing)
                    ? fontSpacing
                    : FONT_SPACING[fontSpacing]),
            fontWeight: props.fontWeight,
            fontSize: fontSize
        }, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: classNames([
                {
                    'cl-text__wrap': props.wrap || !cutClassName
                },
                {
                    'cl-text__nowrap': !props.wrap || cutClassName
                }
            ], "" + specialClassName) },
            props.text,
            props.children)));
}
ClText.options = {
    addGlobalClass: true
};
ClText.defaultProps = {
    size: 'normal',
    textColor: undefined,
    bgColor: undefined,
    cut: false,
    align: 'left',
    special: undefined,
    text: '',
    lineSpacing: 'none',
    fontSpacing: 'none',
    fontWeight: 'normal',
    wrap: true
};

function ClCard(props) {
    var typeClassName = props.type === 'full' ? 'no-card' : '';
    var colorClassName = props.bgColor
        ? BG_COLOR_LIST[props.bgColor]
        : 'bg-white';
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(["cu-card case " + typeClassName], props.className), style: Object.assign({}, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                'cu-item',
                {
                    shadow: props.shadow
                },
                colorClassName,
                {
                    cu_card_active: props.active
                }
            ]) },
            props.title && props.title.text ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu_card__title-line padding' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, __assign({}, props.title)))) : (''),
            props.renderTitle,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'padding' }, props.children))));
}
ClCard.options = {
    addGlobalClass: true
};
ClCard.defaultProps = {
    type: 'card',
    bgColor: 'white',
    shadow: true,
    active: false,
    title: {}
};

var ClCheckboxH5 = /** @class */ (function (_super) {
    __extends(ClCheckboxH5, _super);
    function ClCheckboxH5(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            list: []
        };
        return _this;
    }
    ClCheckboxH5.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (prevProps.checkboxGroup !== this.props.checkboxGroup) {
            var currentCheckBox = this.props.checkboxGroup || [];
            this.setState({
                list: currentCheckBox.map(function (checkbox) {
                    var hasExit = _this.state.list.find(function (item) { return item.key === checkbox.key; });
                    return hasExit ? Object.assign(hasExit, checkbox) : checkbox;
                })
            });
        }
    };
    ClCheckboxH5.prototype.componentDidMount = function () {
        this.setState({
            list: this.props.checkboxGroup || []
        });
    };
    ClCheckboxH5.prototype.change = function () {
        var arr = this.state.list
            .filter(function (item) { return item.checked; })
            .map(function (item) { return item.value || ''; });
        this.props.onChange && this.props.onChange(arr);
    };
    ClCheckboxH5.prototype.render = function () {
        var _this = this;
        var colorClassName = this.props.color || 'green';
        var type = this.props.type === 'form' ? 'form' : '';
        var directionClassName = this.props.direction === 'horizontal' ? 'flex' : '';
        var title = this.props.title;
        var checkboxComponent = this.state.list.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'padding-xs', key: item.value },
            item.key ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: 'padding-right-sm', style: {
                    lineHeight: "" + Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(46),
                    display: 'inline-block',
                    verticalAlign: 'text-bottom'
                } }, item.key)) : (''),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                    'h5-checkbox-input',
                    {
                        round: _this.props.shape,
                        checked: item.checked,
                        disabled: item.disabled,
                        more: _this.props.more
                    }
                ]), onClick: function () {
                    if (!item.disabled) {
                        var checkItem = _this.state.list &&
                            _this.state.list.find(function (has) { return has.value === item.value; });
                        if (checkItem)
                            checkItem.checked = !item.checked;
                        _this.setState({
                            list: __spread(_this.state.list)
                        });
                        _this.change();
                    }
                } }))); });
        var formComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-form-group' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'title' }, title),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: directionClassName }, checkboxComponent)));
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "h5-checkbox " + colorClassName }, type === 'form' ? formComponent : checkboxComponent));
    };
    ClCheckboxH5.options = {
        addGlobalClass: true
    };
    ClCheckboxH5.defaultProps = {
        color: 'green',
        type: 'normal',
        shape: 'normal',
        direction: 'vertical',
        checkboxGroup: [],
        title: ''
    };
    return ClCheckboxH5;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function ClCheckbox(props) {
    var colorClassName = props.color || "green";
    var type = props.type === "form" ? "form" : "";
    var shapeClassName = props.shape === "round" ? "round" : "";
    var directionClassName = props.direction === "horizontal" ? "flex" : "";
    var list = props.checkboxGroup ? props.checkboxGroup : [];
    var title = props.title;
    var checkboxComponent = list.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "padding-xs", key: item.value },
        item.key ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "padding-right-sm" }, item.key) : "",
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Checkbox */ "c"], { className: classNames([
                colorClassName,
                shapeClassName,
                {
                    more: props.more
                }
            ]), value: item.value || "", checked: item.checked, disabled: item.disabled }))); });
    var formComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-form-group" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "title" }, title),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: directionClassName }, checkboxComponent)));
    var change = function (e) {
        props.onChange && props.onChange(e.detail.value);
    };
    var component = !isWeApp ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCheckboxH5, __assign({}, props))) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* CheckboxGroup */ "d"], { className: "" + (type === "form" ? "block" : ""), onChange: change }, type === "form" ? (formComponent) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: directionClassName }, checkboxComponent))));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(props.className), style: Object.assign({}, props.style) }, component));
}
ClCheckbox.options = {
    addGlobalClass: true
};

function ClDrawer(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.show), 2), showModal = _a[0], setShowModal = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        setShowModal(props.show);
    }, [props.show]);
    var hideModal = function () {
        props.closeWithShadow && setShowModal(false);
        props.onCancel && props.onCancel();
    };
    var leftComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-modal drawer-modal justify-start " + (showModal ? 'show' : ''), props.className), style: Object.assign({}, props.style), onClick: function (e) {
            hideModal();
            e.stopPropagation();
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-dialog basis-lg', onClick: function (e) {
                e.stopPropagation();
            }, style: { height: '100vh' } }, props.children)));
    var rightComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-modal drawer-modal justify-end " + (showModal ? 'show' : ''), props.className), style: Object.assign({}, props.style), onClick: function (e) {
            hideModal();
            e.stopPropagation();
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-dialog basis-lg', onClick: function (e) {
                e.stopPropagation();
            }, style: { height: '100vh' } }, props.children)));
    var bottomComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-modal bottom-modal " + (showModal ? 'show' : ''), props.className), style: Object.assign({}, props.style), onClick: function (e) {
            hideModal();
            e.stopPropagation();
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-dialog', style: { maxHeight: '70vh' }, onClick: function (e) {
                e.stopPropagation();
            } }, props.children)));
    return props.direction === 'left'
        ? leftComponent
        : props.direction === 'right'
            ? rightComponent
            : bottomComponent;
}
ClDrawer.options = {
    addGlobalClass: true
};

function ClIcon(props) {
    var iconName = props.iconName || '';
    var iconNameClass = "cuIcon-" + props.iconName;
    if (props.other) {
        iconNameClass = iconName;
    }
    var sizeClassName = props.size || 'normal';
    var bgColorClassName = props.color ? "text-" + props.color : '';
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: classNames(bgColorClassName + " " + iconNameClass, props.className), style: Object.assign({
            fontSize: "" + (isNumber(sizeClassName)
                ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(sizeClassName)
                : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(pxMap[sizeClassName]))
        }, props.style) }));
}
ClIcon.options = {
    addGlobalClass: true
};

/**
 * flex 问题
 * 浮动比例
 * flex-sub==>1, flex-twice==>2, flex-treble==>3
 */
function ClFlex(props) {
    var warpClassName = props.wrap ? 'flex-wrap' : '';
    var justifyClassName = props.justify ? "justify-" + props.justify : '';
    var alignClassName = props.align ? "align-" + props.align : '';
    var directionClassName = props.direction
        ? "flex-direction-" + props.direction
        : '';
    var flexComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("flex " + warpClassName + " " + justifyClassName + " " + alignClassName + " " + directionClassName, props.className), style: Object.assign({}, props.style) }, props.children));
    return flexComponent;
}
ClFlex.options = {
    addGlobalClass: true
};
ClFlex.defaultProps = {
    justify: 'start',
    align: 'start',
    direction: 'row',
    wrap: false
};

/**
 * 基础比例
 * basis-xs, basis-df, basis-lg, basis-xl
 */
function ClLayout(props) {
    var floatClassName = function () {
        if (props.float === 'left')
            return 'fl';
        if (props.float === 'right')
            return 'fr';
        return '';
    };
    var dealDirection = function (direction) {
        var dr;
        switch (direction) {
            case 'around': {
                dr = '';
                break;
            }
            case 'horizontal': {
                dr = '-lr';
                break;
            }
            case 'vertical': {
                dr = '-tb';
                break;
            }
            default: {
                dr = direction ? "-" + direction : '';
            }
        }
        return dr;
    };
    var dealSize = function (size) {
        if (!size || size === 'normal')
            return '';
        else
            return "-" + SIZE[size];
    };
    var paddingClassName = function () {
        var paddingDirection = props.paddingDirection;
        var size = props.padding;
        return "" + ((size ? 'padding' : '') + dealDirection(paddingDirection) + dealSize(size));
    };
    var marginClassName = function () {
        var marginDirection = props.marginDirection;
        var size = props.margin;
        return "" + ((size ? 'margin' : '') + dealDirection(marginDirection) + dealSize(size));
    };
    var normalComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(floatClassName() + " " + (props.padding ? paddingClassName() : '') + " " + (props.margin ? marginClassName() : ''), props.className), style: Object.assign({}, props.style) }, props.children));
    return normalComponent;
}
ClLayout.options = {
    addGlobalClass: true
};

function ClSearchResult(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.result || []), 2), resultState = _a[0], setResultState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var list = props.result || [];
        setResultState(list.map(function (item) {
            item.cu_search_bar_result_id = generateId();
            return item;
        }));
    }, [props.result]);
    var result = resultState || [];
    var showLoading = props.showLoading;
    var onTouchResult = props.onTouchResult;
    var resultComponent = result.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: 'key-' + index, className: 'cl_search_result solid-bottom', onClick: function () {
            onTouchResult(index);
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: item.title, size: 'large' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: item.desc, size: 'xsmall', cut: true })))); });
    var loadingComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cl_search_loading' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'loading2' }))));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(props.className), style: Object.assign({ width: '100%' }, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { direction: 'column', align: 'center', justify: 'center' }, showLoading ? loadingComponent : resultComponent)));
}
ClSearchResult.options = {
    addGlobalClass: true
};

function ClInput(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), focus = _a[0], setFocus = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), 2), normalType = _b[0], setNormalType = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), tempInput = _c[0], setTempInput = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value), 2), initValue = _d[0], setInitValue = _d[1];
    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("cl-input-" + +new Date()), 1), inputId = _e[0];
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("0px"), 2), materialWidth = _f[0], setMaterialWidth = _f[1];
    var _g = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.defaultValue), 2), defaultValue = _g[0], setDefaultValue = _g[1];
    var _h = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), showComplete = _h[0], setShowComplete = _h[1];
    var _j = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), firstInit = _j[0], setFirstInit = _j[1];
    var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        if (props.defaultValue !== "" && defaultValue === "") {
            setDefaultValue(defaultValue);
        }
    }, [props.defaultValue]);
    var isH5 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv();
    var onChange = function (event) {
        setFirstInit(false);
        var input = event.detail.value;
        setInitValue(input);
        props.autoComplete && setShowComplete(true);
        if (props.type === "number") {
            if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv()) {
                if (!isNaN(event.data - 0)) {
                    if (event.data === null) {
                        input = tempInput.slice(0, tempInput.length - 1);
                    }
                    else {
                        input = tempInput + parseInt("" + (event.data - 0));
                    }
                }
                else {
                    input = tempInput;
                }
                setTempInput(input);
                setTimeout(function () {
                    setInitValue(input);
                });
            }
            else {
                input = !isNaN(event.detail.value - 0) ? event.detail.value : null;
                if (input !== null) {
                    setTempInput(input);
                    setInitValue(input);
                }
                else {
                    setTimeout(function () {
                        setInitValue(tempInput);
                    });
                }
            }
        }
        else if (props.type === "digit") {
            if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv()) {
                if (!isNaN(event.data - 0)) {
                    if (event.data === null) {
                        input = tempInput.slice(0, tempInput.length - 1);
                    }
                    else {
                        input = tempInput + parseInt("" + (event.data - 0));
                    }
                }
                else {
                    input =
                        event.data === "." && tempInput.indexOf(".") === -1
                            ? tempInput + event.data
                            : tempInput;
                }
                setTempInput(input);
                setTimeout(function () {
                    setInitValue(input);
                });
            }
            else {
                input = !isNaN(event.detail.value - 0) ? event.detail.value : null;
                if (input !== null) {
                    setTempInput(input);
                    setInitValue(input);
                }
                else {
                    setTimeout(function () {
                        setInitValue(tempInput);
                    });
                }
            }
        }
        else {
            setInitValue(input);
        }
        props.onChange && props.onChange(input);
    };
    var onBlur = function (event) {
        setFocus(false);
        props.onBlur && props.onBlur(event.detail.value);
    };
    var onFocus = function (event) {
        setFocus(true);
        props.onFocus && props.onFocus(event.detail.value);
    };
    var onIconClick = function (event) {
        props.onIconClick && props.onIconClick(event);
    };
    var onImageClick = function (event) {
        props.onImageClick && props.onImageClick(event);
    };
    if (props.type !== "password") {
        if (props.type !== normalType) {
            setNormalType(props.type);
        }
    }
    var iconComponent = props.icon ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: onIconClick },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, __assign({}, props.icon)))) : ("");
    var buttonComponent = props.button ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClButton, __assign({}, props.button)) : "";
    var imageComponent = props.image ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: onImageClick, style: {} },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "e"], { src: props.image || "", mode: "aspectFit", style: {
                maxWidth: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.pxTransform(100),
                maxHeight: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.pxTransform(100),
            } }))) : ("");
    var autoCompleteComponent = props.autoComplete ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
            position: "absolute",
            top: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(100),
            left: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(0),
            width: "100%",
            display: showComplete ? "" : "none",
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCard, { shadow: false, type: "full" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true, style: { maxHeight: "300px" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClSearchResult, { showLoading: props.completeLoading, result: props.completes
                        ? props.completes.map(function (str) { return ({
                            title: str,
                        }); })
                        : [], onTouchResult: function (index) {
                        if (props.completes) {
                            setInitValue(props.completes[index]);
                            setTempInput(props.completes[index]);
                            props.onTouchResult &&
                                props.onTouchResult(props.completes[index], index);
                        }
                        setShowComplete(false);
                    } }))))) : ("");
    var title = props.title, placeholder = props.placeholder, value = props.value, adjustPosition = props.adjustPosition, type = props.type, maxLength = props.maxLength, disabled = props.disabled, renderCustomRight = props.renderCustomRight, autoFocus = props.autoFocus;
    var titleWidth = props.titleWidth === "auto"
        ? {}
        : {
            width: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(props.titleWidth || 200),
        };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        setInitValue(value);
    }, [props.value]);
    var initTitle = function () {
        if (props.pattern === "material") {
            if (isH5) {
                var content = document.querySelector("#" + inputId);
                var width = content.clientWidth;
                setMaterialWidth(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(width / screenPercent));
            }
            else {
                var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
                var view = query.select("#" + inputId);
                view.boundingClientRect().exec(function (res) {
                    var data = res[0];
                    setMaterialWidth(Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])((data === null || data === void 0 ? void 0 : data.width) / screenPercent));
                });
            }
        }
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        initTitle();
    }, [props.title, props.pattern]);
    Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["useReady"])(function () {
        initTitle();
    });
    var renderMaterialTitle = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "" + (focus || initValue ? "materialFocus" : "materialBlur"), style: titleWidth, id: inputId, ref: inputRef }, title));
    var normalTitle = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "title", style: titleWidth }, title));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-form-group " + (focus ? "focus" : "blur"), props.className), style: Object.assign({ position: "relative" }, props.style) },
        title && props.pattern === "normal" ? normalTitle : null,
        title && props.pattern === "material" ? renderMaterialTitle : null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                position: "relative",
                display: "flex",
                width: "100%",
                alignItems: "center",
                flex: 1,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "f"], { autoFocus: autoFocus, placeholder: placeholder, value: firstInit && defaultValue ? defaultValue : initValue, onInput: onChange, onBlur: onBlur, onFocus: onFocus, adjustPosition: adjustPosition, type: normalType, password: type === "password", maxlength: maxLength || -1, disabled: disabled, style: {
                    textAlign: props.align === "none" ? undefined : props.align,
                    flex: "1 0 auto",
                    paddingLeft: "" + (props.pattern === "material" && !(focus || initValue)
                        ? materialWidth
                        : 0),
                    paddingRight: props.clear ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(60) : "",
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                    position: "absolute",
                    right: 0,
                    display: props.clear && initValue !== "" && !firstInit
                        ? "relative"
                        : "none",
                }, onClick: function (e) {
                    e.stopPropagation();
                    setInitValue("");
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: "roundclosefill", size: "xsmall", color: "gray" }))),
        iconComponent,
        buttonComponent,
        imageComponent,
        renderCustomRight,
        autoCompleteComponent));
}
ClInput.options = {
    addGlobalClass: true,
};
ClInput.defaultProps = {
    autoFocus: false,
    titleWidth: "auto",
    align: "left",
    pattern: "normal",
    value: undefined,
    placeholder: "",
    type: "text",
    adjustPosition: true,
    defaultValue: "",
    completeLoading: false,
    completes: [],
    autoComplete: false,
    onTouchResult: function () { },
};

function ClLoading(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), loadProgress = _a[0], setLoadProgress = _a[1];
    var loadProgressFn = function () {
        setLoadProgress(100);
    };
    var contentViewStyle = { position: props.content ? "relative" : "inherit" };
    var contentLoadingStyle = {
        display: props.show ? "flex" : "none",
        flexDirection: "column",
        position: props.content ? "absolute" : "fixed",
        width: props.content ? "100%" : "100vw",
        height: props.content ? "100%" : "100vh",
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (props.show) {
            loadProgressFn();
        }
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (props.show)
            loadProgressFn();
        else {
            setLoadProgress(0);
        }
    }, [props.show]);
    var bgColorClassName = function () {
        return props.bgColor ? BG_COLOR_LIST[props.bgColor] : "bg-blue";
    };
    var commonComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: Object.assign(contentViewStyle) },
        props.children,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-load load-image", style: Object.assign(contentLoadingStyle), onClick: function (e) {
                e.stopPropagation();
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                    animationIterationCount: "infinite",
                    animationTimingFunction: "linear",
                    animationDuration: "0.5s",
                    animationName: "rotate-0-360",
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: classNames([
                        "cuIcon-loading1",
                        "text-white",
                        "text-xxl",
                    ]), style: {
                        fontSize: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(44),
                    } })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { textColor: "white", text: props.commonText, size: "xsmall" }))));
    var modalComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-load load-modal", onClick: function (e) {
            e.stopPropagation();
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "e"], { src: props.imgUrl || "", mode: "aspectFit" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "text-gray" }, props.modalText)));
    var imageComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: Object.assign(contentViewStyle) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-load load-image", style: Object.assign(contentLoadingStyle) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "e"], { src: props.imgUrl || "", mode: "widthFix", style: {
                    width: props.imgWidth ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(props.imgWidth) : "",
                } })),
        props.children));
    var lineComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-load " + (props.loadingError ? "bg-red erro" : bgColorClassName()) + " " + (props.noMore || props.loadingError ? "over" : "loading") }));
    var barComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: Object.assign(contentViewStyle) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("load-progress " + (props.show ? "show" : "hide"), props.className), style: Object.assign({ top: "0" }, contentLoadingStyle, props.style) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "load-progress-bar " + bgColorClassName(), style: {
                    transform: "translate3d(-" + (100 - loadProgress) + "%, 0px, 0px)",
                    transition: "all 5s ease 0s",
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "load-progress-spinner text-" + props.bgColor })),
        props.children));
    var renderLoading = function () {
        var renderContent = function () {
            if (props.type === "bar")
                return barComponent;
            if (props.type === "line")
                return lineComponent;
            if (props.type === "modal")
                return modalComponent;
            if (props.type === "image")
                return imageComponent;
            return commonComponent;
        };
        return props.content || props.show ? renderContent() : null;
    };
    return renderLoading();
}
ClLoading.options = {
    addGlobalClass: true,
};
ClLoading.defaultProps = {
    type: "bar",
    bgColor: "blue",
    modalText: "加载中...",
    loadingError: false,
    noMore: false,
    show: false,
};

function ClMenuList(props) {
    var shortLineClassName = props.shortBorder ? 'sm-border' : '';
    var cardClassName = props.card ? 'card-menu' : '';
    var list = props.list || [];
    var click = function (index) {
        props.onClick && props.onClick(index);
    };
    var itemComponent = list.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.title, className: classNames([
            'cu-item',
            {
                arrow: !!item.arrow,
                disabled: item.disabled
            }
        ]), onClick: function () {
            !item.disabled && click(index);
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'content flex justify-between' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'content flex align-center' },
                item.icon && item.icon.iconName ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'margin-right-xs flex align-center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, __assign({}, item.icon)))) : (''),
                item.imgUrl ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "e"], { src: item.imgUrl, className: 'png margin-right-xs', mode: 'aspectFit' })) : (''),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "" + TEXT_COLOR_LIST[item.titleColor || 'black'] }, item.title)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'flex align-center' }, item.value)))); });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-list menu " + shortLineClassName + " " + cardClassName, props.className), style: Object.assign({}, props.style) }, itemComponent));
}
ClMenuList.defaultProps = {
    shortBorder: false,
    card: false,
    list: []
};
ClMenuList.options = {
    addGlobalClass: true
};

var ClModal = /** @class */ (function (_super) {
    __extends(ClModal, _super);
    function ClModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showModal: _this.props.show
        };
        return _this;
    }
    ClModal.prototype.componentWillReceiveProps = function (nextProps) {
        var show = nextProps.show;
        if (show !== this.state.showModal) {
            this.setState({
                showModal: show
            });
        }
    };
    ClModal.prototype.render = function () {
        var _this = this;
        var titleBgColorClassName = this.props.titleBgColor
            ? BG_COLOR_LIST[this.props.titleBgColor]
            : '';
        var actionColor = this.props.actionColor
            ? BG_COLOR_LIST[this.props.actionColor]
            : '';
        var title = this.props.title;
        var actions = this.props.actions || [];
        var onClick = function (index) {
            _this.props.onClick && _this.props.onClick(index);
        };
        var actionsComponent = actions.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: (index > 0 ? 'solid-left' : '') + " action margin-0 flex-sub", key: 'key-' + item.text, onClick: function () {
                onClick(index);
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "" + (item.color ? TEXT_COLOR_LIST[item.color] : '') }, item.text))); });
        var dealSize = function (size) {
            if (!size || size === 'normal')
                return '';
            else
                return "-" + SIZE[size];
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-modal " + (this.state.showModal ? 'show' : ''), this.props.className), style: Object.assign({}, this.props.style), onClick: function () {
                _this.props.closeWithShadow &&
                    _this.setState({
                        showModal: false
                    });
                _this.props.onCancel && _this.props.onCancel();
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-dialog', onClick: function (e) {
                    e.stopPropagation();
                } },
                this.props.custom ? (this.props.renderTitle) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-bar justify-end " + titleBgColorClassName },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'content' }, title),
                    this.props.close ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action', onClick: function () {
                            _this.setState({
                                showModal: false
                            });
                            _this.props.onClose && _this.props.onClose();
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: 'cuIcon-close text-black' }))) : (''))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "padding" + dealSize(this.props.padding) }, this.props.children),
                this.props.custom ? (this.props.renderAction) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-bar " + actionColor }, actionsComponent)))));
    };
    ClModal.options = {
        addGlobalClass: true
    };
    return ClModal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState");};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D;}var I=H.prototype=new G;I.constructor=H;objectAssign(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h;}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return {$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return {result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a);}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e);}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++);}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a));}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b);}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:objectAssign};var Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b);},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
var Component=F;var Fragment=r;var Profiler=u;var PureComponent=H;var StrictMode=t;var Suspense=y;var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
var cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=objectAssign({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h]);}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f;}return {$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};var createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};var createElement=M;var createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};var createRef=function(){return {current:null}};var forwardRef=function(a){return {$$typeof:x,render:a}};var isValidElement=O;
var lazy=function(a){return {$$typeof:A,_ctor:a,_status:-1,_result:null}};var memo=function(a,b){return {$$typeof:z,type:a,compare:void 0===b?null:b}};var useCallback=function(a,b){return Z().useCallback(a,b)};var useContext=function(a,b){return Z().useContext(a,b)};var useDebugValue=function(){};var useEffect=function(a,b){return Z().useEffect(a,b)};var useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
var useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};var useMemo=function(a,b){return Z().useMemo(a,b)};var useReducer=function(a,b,c){return Z().useReducer(a,b,c)};var useRef=function(a){return Z().useRef(a)};var useState=function(a){return Z().useState(a)};var version="16.14.0";

var react_production_min = {
	Children: Children,
	Component: Component,
	Fragment: Fragment,
	Profiler: Profiler,
	PureComponent: PureComponent,
	StrictMode: StrictMode,
	Suspense: Suspense,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	cloneElement: cloneElement,
	createContext: createContext,
	createElement: createElement,
	createFactory: createFactory,
	createRef: createRef,
	forwardRef: forwardRef,
	isValidElement: isValidElement,
	lazy: lazy,
	memo: memo,
	useCallback: useCallback,
	useContext: useContext,
	useDebugValue: useDebugValue,
	useEffect: useEffect,
	useImperativeHandle: useImperativeHandle,
	useLayoutEffect: useLayoutEffect,
	useMemo: useMemo,
	useReducer: useReducer,
	useRef: useRef,
	useState: useState,
	version: version
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
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
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var react_development = createCommonjsModule(function (module, exports) {



if (true) {
  (function() {

var _assign = objectAssign;
var checkPropTypes = checkPropTypes_1;

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});
var react_development_1 = react_development.Children;
var react_development_2 = react_development.Component;
var react_development_3 = react_development.Fragment;
var react_development_4 = react_development.Profiler;
var react_development_5 = react_development.PureComponent;
var react_development_6 = react_development.StrictMode;
var react_development_7 = react_development.Suspense;
var react_development_8 = react_development.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var react_development_9 = react_development.cloneElement;
var react_development_10 = react_development.createContext;
var react_development_11 = react_development.createElement;
var react_development_12 = react_development.createFactory;
var react_development_13 = react_development.createRef;
var react_development_14 = react_development.forwardRef;
var react_development_15 = react_development.isValidElement;
var react_development_16 = react_development.lazy;
var react_development_17 = react_development.memo;
var react_development_18 = react_development.useCallback;
var react_development_19 = react_development.useContext;
var react_development_20 = react_development.useDebugValue;
var react_development_21 = react_development.useEffect;
var react_development_22 = react_development.useImperativeHandle;
var react_development_23 = react_development.useLayoutEffect;
var react_development_24 = react_development.useMemo;
var react_development_25 = react_development.useReducer;
var react_development_26 = react_development.useRef;
var react_development_27 = react_development.useState;
var react_development_28 = react_development.version;

var react = createCommonjsModule(function (module) {

if (false) {} else {
  module.exports = react_development;
}
});

var ClNavBar = /** @class */ (function (_super) {
    __extends(ClNavBar, _super);
    function ClNavBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClNavBar.prototype.onClickLeftIcon = function (index) {
        this.props.onClickLeftIcon && this.props.onClickLeftIcon(index);
    };
    ClNavBar.prototype.onClickRightIcon = function (index) {
        this.props.onClickRightIcon && this.props.onClickRightIcon(index);
    };
    ClNavBar.prototype.render = function () {
        var _this = this;
        var bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : 'bg-white';
        var leftComponent = this.props.leftIcon &&
            this.props.leftIcon.map(function (item, index) { return (react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Block */ "a"], { key: index },
                react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: (item.icon ? 'cuIcon-' + item.icon : '') + " " + (item.color ? TEXT_COLOR_LIST[item.color] : ''), onClick: _this.onClickLeftIcon.bind(_this, index) }),
                react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "" + (item.color ? TEXT_COLOR_LIST[item.color] : ''), onClick: _this.onClickLeftIcon.bind(_this, index) }, item.text))); });
        var rightComponent = this.props.rightIcon &&
            this.props.rightIcon.map(function (item, index) { return (react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Block */ "a"], { key: index },
                react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: (item.icon ? 'cuIcon-' + item.icon : '') + " " + (item.color ? TEXT_COLOR_LIST[item.color] : ''), onClick: _this.onClickRightIcon.bind(_this, index) }))); });
        return (react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-bar " + bgColorClassName, this.props.className), style: Object.assign({}, this.props.style) },
            react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action' }, leftComponent),
            react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'content text-bold' }, this.props.title),
            react.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action' }, rightComponent)));
    };
    ClNavBar.options = {
        addGlobalClass: true
    };
    ClNavBar.defaultProps = {
        title: '',
        leftIcon: [],
        rightIcon: [],
        bgColor: 'white'
    };
    return ClNavBar;
}(react.Component));

var ClProgress = /** @class */ (function (_super) {
    __extends(ClProgress, _super);
    function ClProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClProgress.prototype.render = function () {
        var _this = this;
        var shapeClassName = function () {
            return _this.props.shape
                ? _this.props.shape === 'normal'
                    ? ''
                    : _this.props.shape
                : '';
        };
        var bgColorClassName = function () {
            return _this.props.bgColor ? BG_COLOR_LIST[_this.props.bgColor] : 'bg-blue';
        };
        var sizeClassName = function () { return (_this.props.size ? SIZE[_this.props.size] : ''); };
        var stripeClassName = function () { return (_this.props.stripe ? 'striped' : ''); };
        var animationClassName = function () { return (_this.props.animation ? 'active' : ''); };
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-progress " + shapeClassName() + " " + sizeClassName() + " " + stripeClassName() + " " + animationClassName(), this.props.className), style: Object.assign({}, this.props.style) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "" + bgColorClassName(), style: { width: this.props.percent + "%" } })));
    };
    ClProgress.options = {
        addGlobalClass: true
    };
    ClProgress.defaultProps = {
        shape: 'normal',
        bgColor: 'blue',
        size: 'normal',
        stripe: false,
        animation: false,
        percent: 0
    };
    return ClProgress;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function ListRadio(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.list || []), 2), listState = _a[0], setListState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var list = props.list || [];
        setListState(list.map(function (item) {
            item.cu_radio_list_id = generateId();
            return item;
        }));
    }, [props.list]);
    var list = listState || [];
    var checkedValue = props.checkedValue;
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(checkedValue), 2), checked = _b[0], setChecked = _b[1];
    var listComponent = list.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.cu_radio_list_id, className: classNames([
            'cu-item',
            {
                checked: checked === item.value,
                disabled: props.disabled
            }
        ]), onClick: function () {
            if (!props.disabled) {
                setChecked(item.value || '');
                props.onChange && props.onChange(item.value);
            }
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'content flex align-center' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], null, item.key)))); });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-list menu" }, listComponent);
}
ListRadio.defaultProps = {
    list: [],
    checkedValue: '',
    onChange: function () { },
    disabled: false
};
ListRadio.options = {
    addGlobalClass: true
};

function RadioH5(props) {
    var type = props.type || 'normal';
    var shapeClassName = props.shape || 'normal';
    var title = props.title || '';
    var colorClassName = props.color || 'green';
    var directionClassName = props.direction === 'horizontal' ? 'flex' : '';
    var list = props.radioGroup || [];
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.checkedValue), 2), activeValue = _a[0], setActiveValue = _a[1];
    var clickRadio = function (name) {
        setActiveValue(name);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        props.onChange && props.onChange(activeValue);
    }, [activeValue]);
    var radioComponent = list.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'padding-xs', key: item.value },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: 'padding-right-sm' }, item.key),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                if (!props.disabled) {
                    clickRadio(item.value);
                }
            }, className: classNames([
                'h5-radio',
                colorClassName,
                shapeClassName,
                {
                    checked: activeValue === item.value,
                    disabled: props.disabled
                }
            ]) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'h5-radio-wrapper' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'h5-radio-input h5-radio-input-checked' }))))); });
    var formRadioComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-form-group' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'title' }, title),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: directionClassName }, radioComponent)));
    var renderListComponent = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListRadio, { onChange: function (value) {
            setActiveValue(value);
        }, list: list, checkedValue: activeValue, disabled: props.disabled })); };
    var formOrNormalComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'h5-radio-group' }, type === 'form' ? (formRadioComponent) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: directionClassName }, radioComponent))));
    var weappComponent = type === 'list' ? renderListComponent() : formOrNormalComponent;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null, weappComponent);
}
RadioH5.defaultProps = {
    type: 'normal',
    shape: 'normal',
    title: '',
    colorClassName: 'green',
    directionClassName: '',
    radioGroup: []
};
RadioH5.options = {
    addGlobalClass: true
};

function ClRadio(props) {
    var type = props.type || 'normal';
    var shapeClassName = function () { return props.shape || 'normal'; };
    var title = props.title || '';
    var colorClassName = function () { return props.color || 'green'; };
    var directionClassName = props.direction === 'horizontal' ? 'flex' : '';
    var list = props.radioGroup || [];
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.checkedValue), 2), checkedValue = _a[0], setCheckedValue = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setCheckedValue(checkedValue);
    }, [props.checkedValue]);
    var changeRadio = function (e) {
        props.onChange && props.onChange(e.detail.value);
    };
    var radioComponent = list.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'padding-xs', key: 'radio-' + item.value, onClick: function () {
            !props.disabled && setCheckedValue(item.value);
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: 'padding-right-sm' }, item.key),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Radio */ "j"], { className: colorClassName() + " " + shapeClassName(), checked: item.value === checkedValue, value: item.value || '', disabled: props.disabled }))); });
    var formRadioComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-form-group' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'title' }, title),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: directionClassName }, radioComponent)));
    var renderListComponent = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListRadio, { onChange: function (value) {
            changeRadio({ detail: { value: value } });
        }, list: list, checkedValue: props.checkedValue, disabled: props.disabled })); };
    var formOrNormalComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* RadioGroup */ "k"], { onChange: changeRadio, className: "" + (type === 'form' ? 'block' : '') }, type === 'form' ? (formRadioComponent) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: directionClassName }, radioComponent))));
    var weappComponent = type === 'list' ? renderListComponent() : formOrNormalComponent;
    var RadioComponent = !isWeApp ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioH5, __assign({}, props)) : weappComponent;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(props.className), style: Object.assign({}, props.style) }, RadioComponent));
}
ClRadio.defaultProps = {
    type: 'normal',
    shape: 'normal',
    title: '',
    colorClassName: 'green',
    directionClassName: '',
    radioGroup: []
};
ClRadio.options = {
    addGlobalClass: true
};

function ClScreenDrawer(props) {
    var hideModal = function () {
        props.onHide && props.onHide();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(props.className), style: Object.assign({}, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true, className: "DrawerPage " + (props.show ? 'show' : '') }, props.renderPage),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "DrawerClose " + (props.show ? 'show' : ''), onClick: hideModal },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: 'cuIcon-pullright' })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true, className: "DrawerWindow " + (props.show ? 'show' : '') }, props.renderDrawer)));
}
ClScreenDrawer.options = {
    addGlobalClass: true
};

var index = (function (props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), showSearch = _a[0], setShowSearch = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), 2), value = _b[0], setValue = _b[1];
    var onIconClick = function (index) {
        props.onIconClick && props.onIconClick(index);
    };
    var onSearch = function (e) {
        e.stopPropagation();
        props.onSearch && props.onSearch(value || '');
    };
    var onFocus = function (e) {
        props.onFocus && props.onFocus(value || '');
        setShowSearch(true);
        setValue(e.detail.value);
    };
    var onBlur = function (e) {
        props.onBlur && props.onBlur(value || '');
        setShowSearch(false);
        setValue(e.detail.value);
    };
    var onInput = function (e) {
        setValue(e.detail.value);
        props.onInput && props.onInput(e.detail.value);
    };
    var onPreventProp = function (e) {
        e.stopPropagation();
    };
    var bgColor = props.bgColor, rightButtonColor = props.rightButtonColor, rightTextColor = props.rightTextColor, leftIcons = props.leftIcons, shape = props.shape, placeholder = props.placeholder, clear = props.clear, fix = props.fix, className = props.className, style = props.style, searchType = props.searchType, showResult = props.showResult, result = props.result, showLoading = props.showLoading, onScrollToLower = props.onScrollToLower, onScrollToUpper = props.onScrollToUpper, onTouchResult = props.onTouchResult;
    var bgColorClassName = bgColor ? BG_COLOR_LIST[bgColor] : '';
    var buttonColorClassName = rightButtonColor
        ? BG_COLOR_LIST[rightButtonColor]
        : '';
    var textColorClassName = rightTextColor
        ? TEXT_COLOR_LIST[rightTextColor]
        : '';
    var leftIconComponent = leftIcons
        ? leftIcons.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: 'key-' + index, className: "cu-avatar round cuIcon-" + item, onClick: function () { return onIconClick(index); } })); })
        : '';
    var searchComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "search-form " + shape },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: 'cuIcon-search' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "f"], { placeholder: placeholder, confirmType: 'search', type: 'text', onFocus: onFocus, onBlur: onBlur, focus: showSearch, adjustPosition: true, autoFocus: props.autoFocus, value: value, onConfirm: onSearch, onInput: onInput }),
        clear && value ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function (e) {
                var onClear = props.onClear;
                e.stopPropagation();
                setValue('');
                onClear && onClear();
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'close', size: 32, style: {
                    display: 'flex',
                    alignItems: 'center'
                } }))) : ('')));
    var buttonComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action', onClick: onPreventProp },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "b"], { className: "cu-btn shadow-blur " + shape + " " + buttonColorClassName + " " + textColorClassName, onClick: onSearch }, "\u641C\u7D22")));
    var textComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action', onClick: onPreventProp },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "" + textColorClassName, onClick: onSearch }, "\u641C\u7D22")));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: fix ? { position: 'fixed', top: '0', width: '100vw', zIndex: 10 } : '' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-bar " + bgColorClassName, className), style: Object.assign({ position: 'relative' }, style) },
            leftIconComponent,
            searchComponent,
            searchType === 'text'
                ? textComponent
                : searchType === 'none'
                    ? ''
                    : buttonComponent,
            showResult ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                    position: 'absolute',
                    width: '100%',
                    zIndex: 11,
                    top: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(100)
                } }, (result && result.length) || showLoading ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCard, { shadow: false, bgColor: bgColor },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true, style: { maxHeight: '300px' }, onScrollToLower: function () {
                        onScrollToLower && onScrollToLower();
                    }, onScrollToUpper: function () {
                        onScrollToUpper && onScrollToUpper();
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClSearchResult, { result: result, showLoading: showLoading, onTouchResult: function (index) {
                            onTouchResult && onTouchResult(index);
                        } })))) : (''))) : (''))));
});

var pcaa={"86":{"110000":"北京市","120000":"天津市","130000":"河北省","140000":"山西省","150000":"内蒙古自治区","210000":"辽宁省","220000":"吉林省","230000":"黑龙江省","310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省","350000":"福建省","360000":"江西省","370000":"山东省","410000":"河南省","420000":"湖北省","430000":"湖南省","440000":"广东省","450000":"广西壮族自治区","460000":"海南省","500000":"重庆市","510000":"四川省","520000":"贵州省","530000":"云南省","540000":"西藏自治区","610000":"陕西省","620000":"甘肃省","630000":"青海省","640000":"宁夏回族自治区","650000":"新疆维吾尔自治区","710000":"台湾省","910000":"港澳"},"110000":{"110100":"市辖区"},"110100":{"110101":"东城区","110102":"西城区","110105":"朝阳区","110106":"丰台区","110107":"石景山区","110108":"海淀区","110109":"门头沟区","110111":"房山区","110112":"通州区","110113":"顺义区","110114":"昌平区","110115":"大兴区","110116":"怀柔区","110117":"平谷区","110118":"密云区","110119":"延庆区"},"120000":{"120100":"市辖区"},"120100":{"120101":"和平区","120102":"河东区","120103":"河西区","120104":"南开区","120105":"河北区","120106":"红桥区","120110":"东丽区","120111":"西青区","120112":"津南区","120113":"北辰区","120114":"武清区","120115":"宝坻区","120116":"滨海新区","120117":"宁河区","120118":"静海区","120119":"蓟州区"},"130000":{"130100":"石家庄市","130200":"唐山市","130300":"秦皇岛市","130400":"邯郸市","130500":"邢台市","130600":"保定市","130700":"张家口市","130800":"承德市","130900":"沧州市","131000":"廊坊市","131100":"衡水市","139001":"定州市","139002":"辛集市"},"130100":{"130102":"长安区","130104":"桥西区","130105":"新华区","130107":"井陉矿区","130108":"裕华区","130109":"藁城区","130110":"鹿泉区","130111":"栾城区","130121":"井陉县","130123":"正定县","130125":"行唐县","130126":"灵寿县","130127":"高邑县","130128":"深泽县","130129":"赞皇县","130130":"无极县","130131":"平山县","130132":"元氏县","130133":"赵县","130183":"晋州市","130184":"新乐市"},"130200":{"130202":"路南区","130203":"路北区","130204":"古冶区","130205":"开平区","130207":"丰南区","130208":"丰润区","130209":"曹妃甸区","130223":"滦县","130224":"滦南县","130225":"乐亭县","130227":"迁西县","130229":"玉田县","130281":"遵化市","130283":"迁安市"},"130300":{"130302":"海港区","130303":"山海关区","130304":"北戴河区","130306":"抚宁区","130321":"青龙满族自治县","130322":"昌黎县","130324":"卢龙县"},"130400":{"130402":"邯山区","130403":"丛台区","130404":"复兴区","130406":"峰峰矿区","130421":"邯郸县","130423":"临漳县","130424":"成安县","130425":"大名县","130426":"涉县","130427":"磁县","130428":"肥乡县","130429":"永年县","130430":"邱县","130431":"鸡泽县","130432":"广平县","130433":"馆陶县","130434":"魏县","130435":"曲周县","130481":"武安市"},"130500":{"130502":"桥东区","130503":"桥西区","130521":"邢台县","130522":"临城县","130523":"内丘县","130524":"柏乡县","130525":"隆尧县","130526":"任县","130527":"南和县","130528":"宁晋县","130529":"巨鹿县","130530":"新河县","130531":"广宗县","130532":"平乡县","130533":"威县","130534":"清河县","130535":"临西县","130581":"南宫市","130582":"沙河市"},"130600":{"130602":"竞秀区","130606":"莲池区","130607":"满城区","130608":"清苑区","130609":"徐水区","130623":"涞水县","130624":"阜平县","130626":"定兴县","130627":"唐县","130628":"高阳县","130629":"容城县","130630":"涞源县","130631":"望都县","130632":"安新县","130633":"易县","130634":"曲阳县","130635":"蠡县","130636":"顺平县","130637":"博野县","130638":"雄县","130681":"涿州市","130683":"安国市","130684":"高碑店市"},"130700":{"130702":"桥东区","130703":"桥西区","130705":"宣化区","130706":"下花园区","130708":"万全区","130709":"崇礼区","130722":"张北县","130723":"康保县","130724":"沽源县","130725":"尚义县","130726":"蔚县","130727":"阳原县","130728":"怀安县","130730":"怀来县","130731":"涿鹿县","130732":"赤城县"},"130800":{"130802":"双桥区","130803":"双滦区","130804":"鹰手营子矿区","130821":"承德县","130822":"兴隆县","130823":"平泉县","130824":"滦平县","130825":"隆化县","130826":"丰宁满族自治县","130827":"宽城满族自治县","130828":"围场满族蒙古族自治县"},"130900":{"130902":"新华区","130903":"运河区","130921":"沧县","130922":"青县","130923":"东光县","130924":"海兴县","130925":"盐山县","130926":"肃宁县","130927":"南皮县","130928":"吴桥县","130929":"献县","130930":"孟村回族自治县","130981":"泊头市","130982":"任丘市","130983":"黄骅市","130984":"河间市"},"131000":{"131002":"安次区","131003":"广阳区","131022":"固安县","131023":"永清县","131024":"香河县","131025":"大城县","131026":"文安县","131028":"大厂回族自治县","131081":"霸州市","131082":"三河市"},"131100":{"131102":"桃城区","131103":"冀州区","131121":"枣强县","131122":"武邑县","131123":"武强县","131124":"饶阳县","131125":"安平县","131126":"故城县","131127":"景县","131128":"阜城县","131182":"深州市"},"139001":{"1390011":"留早镇","13900111":"邢邑镇","139001001":"南城区街道","139001002":"北城区街道","139001003":"西城区街道","139001004":"长安路街道","139001101":"清风店镇","139001102":"庞村镇","139001103":"砖路镇","139001104":"明月店镇","139001105":"叮咛店镇","139001106":"东亭镇","139001107":"大辛庄镇","139001108":"东旺镇","139001109":"高蓬镇","139001111":"李亲顾镇","139001112":"子位镇","139001113":"开元镇","139001115":"周村镇","139001116":"息冢镇","139001203":"东留春乡","139001204":"号头庄回族乡","139001205":"杨家庄乡","139001206":"大鹿庄乡","139001208":"西城乡"},"139002":{"1390021":"辛集镇","1390022":"天宫营乡","1390025":"辛集经济开发区","139002101":"旧城镇","139002102":"张古庄镇","139002103":"位伯镇","139002104":"新垒头镇","139002105":"新城镇","139002106":"南智邱镇","139002107":"王口镇","139002201":"前营乡","139002202":"马庄乡","139002203":"和睦井乡","139002204":"田家庄乡","139002205":"中里厢乡","139002206":"小辛庄乡"},"140000":{"140100":"太原市","140200":"大同市","140300":"阳泉市","140400":"长治市","140500":"晋城市","140600":"朔州市","140700":"晋中市","140800":"运城市","140900":"忻州市","141000":"临汾市","141100":"吕梁市"},"140100":{"140105":"小店区","140106":"迎泽区","140107":"杏花岭区","140108":"尖草坪区","140109":"万柏林区","140110":"晋源区","140121":"清徐县","140122":"阳曲县","140123":"娄烦县","140181":"古交市"},"140200":{"140202":"城区","140203":"矿区","140211":"南郊区","140212":"新荣区","140221":"阳高县","140222":"天镇县","140223":"广灵县","140224":"灵丘县","140225":"浑源县","140226":"左云县","140227":"大同县"},"140300":{"140302":"城区","140303":"矿区","140311":"郊区","140321":"平定县","140322":"盂县"},"140400":{"140402":"城区","140411":"郊区","140421":"长治县","140423":"襄垣县","140424":"屯留县","140425":"平顺县","140426":"黎城县","140427":"壶关县","140428":"长子县","140429":"武乡县","140430":"沁县","140431":"沁源县","140481":"潞城市"},"140500":{"140502":"城区","140521":"沁水县","140522":"阳城县","140524":"陵川县","140525":"泽州县","140581":"高平市"},"140600":{"140602":"朔城区","140603":"平鲁区","140621":"山阴县","140622":"应县","140623":"右玉县","140624":"怀仁县"},"140700":{"140702":"榆次区","140721":"榆社县","140722":"左权县","140723":"和顺县","140724":"昔阳县","140725":"寿阳县","140726":"太谷县","140727":"祁县","140728":"平遥县","140729":"灵石县","140781":"介休市"},"140800":{"140802":"盐湖区","140821":"临猗县","140822":"万荣县","140823":"闻喜县","140824":"稷山县","140825":"新绛县","140826":"绛县","140827":"垣曲县","140828":"夏县","140829":"平陆县","140830":"芮城县","140881":"永济市","140882":"河津市"},"140900":{"140902":"忻府区","140921":"定襄县","140922":"五台县","140923":"代县","140924":"繁峙县","140925":"宁武县","140926":"静乐县","140927":"神池县","140928":"五寨县","140929":"岢岚县","140930":"河曲县","140931":"保德县","140932":"偏关县","140981":"原平市"},"141000":{"141002":"尧都区","141021":"曲沃县","141022":"翼城县","141023":"襄汾县","141024":"洪洞县","141025":"古县","141026":"安泽县","141027":"浮山县","141028":"吉县","141029":"乡宁县","141030":"大宁县","141031":"隰县","141032":"永和县","141033":"蒲县","141034":"汾西县","141081":"侯马市","141082":"霍州市"},"141100":{"141102":"离石区","141121":"文水县","141122":"交城县","141123":"兴县","141124":"临县","141125":"柳林县","141126":"石楼县","141127":"岚县","141128":"方山县","141129":"中阳县","141130":"交口县","141181":"孝义市","141182":"汾阳市"},"150000":{"150100":"呼和浩特市","150200":"包头市","150300":"乌海市","150400":"赤峰市","150500":"通辽市","150600":"鄂尔多斯市","150700":"呼伦贝尔市","150800":"巴彦淖尔市","150900":"乌兰察布市","152200":"兴安盟","152500":"锡林郭勒盟","152900":"阿拉善盟"},"150100":{"150102":"新城区","150103":"回民区","150104":"玉泉区","150105":"赛罕区","150121":"土默特左旗","150122":"托克托县","150123":"和林格尔县","150124":"清水河县","150125":"武川县"},"150200":{"150202":"东河区","150203":"昆都仑区","150204":"青山区","150205":"石拐区","150206":"白云鄂博矿区","150207":"九原区","150221":"土默特右旗","150222":"固阳县","150223":"达尔罕茂明安联合旗"},"150300":{"150302":"海勃湾区","150303":"海南区","150304":"乌达区"},"150400":{"150402":"红山区","150403":"元宝山区","150404":"松山区","150421":"阿鲁科尔沁旗","150422":"巴林左旗","150423":"巴林右旗","150424":"林西县","150425":"克什克腾旗","150426":"翁牛特旗","150428":"喀喇沁旗","150429":"宁城县","150430":"敖汉旗"},"150500":{"150502":"科尔沁区","150521":"科尔沁左翼中旗","150522":"科尔沁左翼后旗","150523":"开鲁县","150524":"库伦旗","150525":"奈曼旗","150526":"扎鲁特旗","150581":"霍林郭勒市"},"150600":{"150602":"东胜区","150603":"康巴什区","150621":"达拉特旗","150622":"准格尔旗","150623":"鄂托克前旗","150624":"鄂托克旗","150625":"杭锦旗","150626":"乌审旗","150627":"伊金霍洛旗"},"150700":{"150702":"海拉尔区","150703":"扎赉诺尔区","150721":"阿荣旗","150722":"莫力达瓦达斡尔族自治旗","150723":"鄂伦春自治旗","150724":"鄂温克族自治旗","150725":"陈巴尔虎旗","150726":"新巴尔虎左旗","150727":"新巴尔虎右旗","150781":"满洲里市","150782":"牙克石市","150783":"扎兰屯市","150784":"额尔古纳市","150785":"根河市"},"150800":{"150802":"临河区","150821":"五原县","150822":"磴口县","150823":"乌拉特前旗","150824":"乌拉特中旗","150825":"乌拉特后旗","150826":"杭锦后旗"},"150900":{"150902":"集宁区","150921":"卓资县","150922":"化德县","150923":"商都县","150924":"兴和县","150925":"凉城县","150926":"察哈尔右翼前旗","150927":"察哈尔右翼中旗","150928":"察哈尔右翼后旗","150929":"四子王旗","150981":"丰镇市"},"152200":{"152201":"乌兰浩特市","152202":"阿尔山市","152221":"科尔沁右翼前旗","152222":"科尔沁右翼中旗","152223":"扎赉特旗","152224":"突泉县"},"152500":{"152501":"二连浩特市","152502":"锡林浩特市","152522":"阿巴嘎旗","152523":"苏尼特左旗","152524":"苏尼特右旗","152525":"东乌珠穆沁旗","152526":"西乌珠穆沁旗","152527":"太仆寺旗","152528":"镶黄旗","152529":"正镶白旗","152530":"正蓝旗","152531":"多伦县"},"152900":{"152921":"阿拉善左旗","152922":"阿拉善右旗","152923":"额济纳旗"},"210000":{"210100":"沈阳市","210200":"大连市","210300":"鞍山市","210400":"抚顺市","210500":"本溪市","210600":"丹东市","210700":"锦州市","210800":"营口市","210900":"阜新市","211000":"辽阳市","211100":"盘锦市","211200":"铁岭市","211300":"朝阳市","211400":"葫芦岛市"},"210100":{"210102":"和平区","210103":"沈河区","210104":"大东区","210105":"皇姑区","210106":"铁西区","210111":"苏家屯区","210112":"浑南区","210113":"沈北新区","210114":"于洪区","210115":"辽中区","210123":"康平县","210124":"法库县","210181":"新民市"},"210200":{"210202":"中山区","210203":"西岗区","210204":"沙河口区","210211":"甘井子区","210212":"旅顺口区","210213":"金州区","210214":"普兰店区","210224":"长海县","210281":"瓦房店市","210283":"庄河市"},"210300":{"210302":"铁东区","210303":"铁西区","210304":"立山区","210311":"千山区","210321":"台安县","210323":"岫岩满族自治县","210381":"海城市"},"210400":{"210402":"新抚区","210403":"东洲区","210404":"望花区","210411":"顺城区","210421":"抚顺县","210422":"新宾满族自治县","210423":"清原满族自治县"},"210500":{"210502":"平山区","210503":"溪湖区","210504":"明山区","210505":"南芬区","210521":"本溪满族自治县","210522":"桓仁满族自治县"},"210600":{"210602":"元宝区","210603":"振兴区","210604":"振安区","210624":"宽甸满族自治县","210681":"东港市","210682":"凤城市"},"210700":{"210702":"古塔区","210703":"凌河区","210711":"太和区","210726":"黑山县","210727":"义县","210781":"凌海市","210782":"北镇市"},"210800":{"210802":"站前区","210803":"西市区","210804":"鲅鱼圈区","210811":"老边区","210881":"盖州市","210882":"大石桥市"},"210900":{"210902":"海州区","210903":"新邱区","210904":"太平区","210905":"清河门区","210911":"细河区","210921":"阜新蒙古族自治县","210922":"彰武县"},"211000":{"211002":"白塔区","211003":"文圣区","211004":"宏伟区","211005":"弓长岭区","211011":"太子河区","211021":"辽阳县","211081":"灯塔市"},"211100":{"211102":"双台子区","211103":"兴隆台区","211104":"大洼区","211122":"盘山县"},"211200":{"211202":"银州区","211204":"清河区","211221":"铁岭县","211223":"西丰县","211224":"昌图县","211281":"调兵山市","211282":"开原市"},"211300":{"211302":"双塔区","211303":"龙城区","211321":"朝阳县","211322":"建平县","211324":"喀喇沁左翼蒙古族自治县","211381":"北票市","211382":"凌源市"},"211400":{"211402":"连山区","211403":"龙港区","211404":"南票区","211421":"绥中县","211422":"建昌县","211481":"兴城市"},"220000":{"220100":"长春市","220200":"吉林市","220300":"四平市","220400":"辽源市","220500":"通化市","220600":"白山市","220700":"松原市","220800":"白城市","222400":"延边朝鲜族自治州"},"220100":{"220102":"南关区","220103":"宽城区","220104":"朝阳区","220105":"二道区","220106":"绿园区","220112":"双阳区","220113":"九台区","220122":"农安县","220182":"榆树市","220183":"德惠市"},"220200":{"220202":"昌邑区","220203":"龙潭区","220204":"船营区","220211":"丰满区","220221":"永吉县","220281":"蛟河市","220282":"桦甸市","220283":"舒兰市","220284":"磐石市"},"220300":{"220302":"铁西区","220303":"铁东区","220322":"梨树县","220323":"伊通满族自治县","220381":"公主岭市","220382":"双辽市"},"220400":{"220402":"龙山区","220403":"西安区","220421":"东丰县","220422":"东辽县"},"220500":{"220502":"东昌区","220503":"二道江区","220521":"通化县","220523":"辉南县","220524":"柳河县","220581":"梅河口市","220582":"集安市"},"220600":{"220602":"浑江区","220605":"江源区","220621":"抚松县","220622":"靖宇县","220623":"长白朝鲜族自治县","220681":"临江市"},"220700":{"220702":"宁江区","220721":"前郭尔罗斯蒙古族自治县","220722":"长岭县","220723":"乾安县","220781":"扶余市"},"220800":{"220802":"洮北区","220821":"镇赉县","220822":"通榆县","220881":"洮南市","220882":"大安市"},"222400":{"222401":"延吉市","222402":"图们市","222403":"敦化市","222404":"珲春市","222405":"龙井市","222406":"和龙市","222424":"汪清县","222426":"安图县"},"230000":{"230100":"哈尔滨市","230200":"齐齐哈尔市","230300":"鸡西市","230400":"鹤岗市","230500":"双鸭山市","230600":"大庆市","230700":"伊春市","230800":"佳木斯市","230900":"七台河市","231000":"牡丹江市","231100":"黑河市","231200":"绥化市","232700":"大兴安岭地区"},"230100":{"230102":"道里区","230103":"南岗区","230104":"道外区","230108":"平房区","230109":"松北区","230110":"香坊区","230111":"呼兰区","230112":"阿城区","230113":"双城区","230123":"依兰县","230124":"方正县","230125":"宾县","230126":"巴彦县","230127":"木兰县","230128":"通河县","230129":"延寿县","230183":"尚志市","230184":"五常市"},"230200":{"230202":"龙沙区","230203":"建华区","230204":"铁锋区","230205":"昂昂溪区","230206":"富拉尔基区","230207":"碾子山区","230208":"梅里斯达斡尔族区","230221":"龙江县","230223":"依安县","230224":"泰来县","230225":"甘南县","230227":"富裕县","230229":"克山县","230230":"克东县","230231":"拜泉县","230281":"讷河市"},"230300":{"230302":"鸡冠区","230303":"恒山区","230304":"滴道区","230305":"梨树区","230306":"城子河区","230307":"麻山区","230321":"鸡东县","230381":"虎林市","230382":"密山市"},"230400":{"230402":"向阳区","230403":"工农区","230404":"南山区","230405":"兴安区","230406":"东山区","230407":"兴山区","230421":"萝北县","230422":"绥滨县"},"230500":{"230502":"尖山区","230503":"岭东区","230505":"四方台区","230506":"宝山区","230521":"集贤县","230522":"友谊县","230523":"宝清县","230524":"饶河县"},"230600":{"230602":"萨尔图区","230603":"龙凤区","230604":"让胡路区","230605":"红岗区","230606":"大同区","230621":"肇州县","230622":"肇源县","230623":"林甸县","230624":"杜尔伯特蒙古族自治县"},"230700":{"230702":"伊春区","230703":"南岔区","230704":"友好区","230705":"西林区","230706":"翠峦区","230707":"新青区","230708":"美溪区","230709":"金山屯区","230710":"五营区","230711":"乌马河区","230712":"汤旺河区","230713":"带岭区","230714":"乌伊岭区","230715":"红星区","230716":"上甘岭区","230722":"嘉荫县","230781":"铁力市"},"230800":{"230803":"向阳区","230804":"前进区","230805":"东风区","230811":"郊区","230822":"桦南县","230826":"桦川县","230828":"汤原县","230881":"同江市","230882":"富锦市","230883":"抚远市"},"230900":{"230902":"新兴区","230903":"桃山区","230904":"茄子河区","230921":"勃利县"},"231000":{"231002":"东安区","231003":"阳明区","231004":"爱民区","231005":"西安区","231025":"林口县","231081":"绥芬河市","231083":"海林市","231084":"宁安市","231085":"穆棱市","231086":"东宁市"},"231100":{"231102":"爱辉区","231121":"嫩江县","231123":"逊克县","231124":"孙吴县","231181":"北安市","231182":"五大连池市"},"231200":{"231202":"北林区","231221":"望奎县","231222":"兰西县","231223":"青冈县","231224":"庆安县","231225":"明水县","231226":"绥棱县","231281":"安达市","231282":"肇东市","231283":"海伦市"},"232700":{"232721":"呼玛县","232722":"塔河县","232723":"漠河县"},"310000":{"310100":"市辖区"},"310100":{"310101":"黄浦区","310104":"徐汇区","310105":"长宁区","310106":"静安区","310107":"普陀区","310109":"虹口区","310110":"杨浦区","310112":"闵行区","310113":"宝山区","310114":"嘉定区","310115":"浦东新区","310116":"金山区","310117":"松江区","310118":"青浦区","310120":"奉贤区","310151":"崇明区"},"320000":{"320100":"南京市","320200":"无锡市","320300":"徐州市","320400":"常州市","320500":"苏州市","320600":"南通市","320700":"连云港市","320800":"淮安市","320900":"盐城市","321000":"扬州市","321100":"镇江市","321200":"泰州市","321300":"宿迁市"},"320100":{"320102":"玄武区","320104":"秦淮区","320105":"建邺区","320106":"鼓楼区","320111":"浦口区","320113":"栖霞区","320114":"雨花台区","320115":"江宁区","320116":"六合区","320117":"溧水区","320118":"高淳区"},"320200":{"320205":"锡山区","320206":"惠山区","320211":"滨湖区","320213":"梁溪区","320214":"新吴区","320281":"江阴市","320282":"宜兴市"},"320300":{"320302":"鼓楼区","320303":"云龙区","320305":"贾汪区","320311":"泉山区","320312":"铜山区","320321":"丰县","320322":"沛县","320324":"睢宁县","320381":"新沂市","320382":"邳州市"},"320400":{"320402":"天宁区","320404":"钟楼区","320411":"新北区","320412":"武进区","320413":"金坛区","320481":"溧阳市"},"320500":{"320505":"虎丘区","320506":"吴中区","320507":"相城区","320508":"姑苏区","320509":"吴江区","320581":"常熟市","320582":"张家港市","320583":"昆山市","320585":"太仓市"},"320600":{"320602":"崇川区","320611":"港闸区","320612":"通州区","320621":"海安县","320623":"如东县","320681":"启东市","320682":"如皋市","320684":"海门市"},"320700":{"320703":"连云区","320706":"海州区","320707":"赣榆区","320722":"东海县","320723":"灌云县","320724":"灌南县"},"320800":{"320803":"淮安区","320804":"淮阴区","320812":"清江浦区","320813":"洪泽区","320826":"涟水县","320830":"盱眙县","320831":"金湖县"},"320900":{"320902":"亭湖区","320903":"盐都区","320904":"大丰区","320921":"响水县","320922":"滨海县","320923":"阜宁县","320924":"射阳县","320925":"建湖县","320981":"东台市"},"321000":{"321002":"广陵区","321003":"邗江区","321012":"江都区","321023":"宝应县","321081":"仪征市","321084":"高邮市"},"321100":{"321102":"京口区","321111":"润州区","321112":"丹徒区","321181":"丹阳市","321182":"扬中市","321183":"句容市"},"321200":{"321202":"海陵区","321203":"高港区","321204":"姜堰区","321281":"兴化市","321282":"靖江市","321283":"泰兴市"},"321300":{"321302":"宿城区","321311":"宿豫区","321322":"沭阳县","321323":"泗阳县","321324":"泗洪县"},"330000":{"330100":"杭州市","330200":"宁波市","330300":"温州市","330400":"嘉兴市","330500":"湖州市","330600":"绍兴市","330700":"金华市","330800":"衢州市","330900":"舟山市","331000":"台州市","331100":"丽水市"},"330100":{"330102":"上城区","330103":"下城区","330104":"江干区","330105":"拱墅区","330106":"西湖区","330108":"滨江区","330109":"萧山区","330110":"余杭区","330111":"富阳区","330122":"桐庐县","330127":"淳安县","330182":"建德市","330185":"临安市"},"330200":{"330203":"海曙区","330204":"江东区","330205":"江北区","330206":"北仑区","330211":"镇海区","330212":"鄞州区","330225":"象山县","330226":"宁海县","330281":"余姚市","330282":"慈溪市","330283":"奉化市"},"330300":{"330302":"鹿城区","330303":"龙湾区","330304":"瓯海区","330305":"洞头区","330324":"永嘉县","330326":"平阳县","330327":"苍南县","330328":"文成县","330329":"泰顺县","330381":"瑞安市","330382":"乐清市"},"330400":{"330402":"南湖区","330411":"秀洲区","330421":"嘉善县","330424":"海盐县","330481":"海宁市","330482":"平湖市","330483":"桐乡市"},"330500":{"330502":"吴兴区","330503":"南浔区","330521":"德清县","330522":"长兴县","330523":"安吉县"},"330600":{"330602":"越城区","330603":"柯桥区","330604":"上虞区","330624":"新昌县","330681":"诸暨市","330683":"嵊州市"},"330700":{"330702":"婺城区","330703":"金东区","330723":"武义县","330726":"浦江县","330727":"磐安县","330781":"兰溪市","330782":"义乌市","330783":"东阳市","330784":"永康市"},"330800":{"330802":"柯城区","330803":"衢江区","330822":"常山县","330824":"开化县","330825":"龙游县","330881":"江山市"},"330900":{"330902":"定海区","330903":"普陀区","330921":"岱山县","330922":"嵊泗县"},"331000":{"331002":"椒江区","331003":"黄岩区","331004":"路桥区","331021":"玉环县","331022":"三门县","331023":"天台县","331024":"仙居县","331081":"温岭市","331082":"临海市"},"331100":{"331102":"莲都区","331121":"青田县","331122":"缙云县","331123":"遂昌县","331124":"松阳县","331125":"云和县","331126":"庆元县","331127":"景宁畲族自治县","331181":"龙泉市"},"340000":{"340100":"合肥市","340200":"芜湖市","340300":"蚌埠市","340400":"淮南市","340500":"马鞍山市","340600":"淮北市","340700":"铜陵市","340800":"安庆市","341000":"黄山市","341100":"滁州市","341200":"阜阳市","341300":"宿州市","341500":"六安市","341600":"亳州市","341700":"池州市","341800":"宣城市"},"340100":{"340102":"瑶海区","340103":"庐阳区","340104":"蜀山区","340111":"包河区","340121":"长丰县","340122":"肥东县","340123":"肥西县","340124":"庐江县","340181":"巢湖市"},"340200":{"340202":"镜湖区","340203":"弋江区","340207":"鸠江区","340208":"三山区","340221":"芜湖县","340222":"繁昌县","340223":"南陵县","340225":"无为县"},"340300":{"340302":"龙子湖区","340303":"蚌山区","340304":"禹会区","340311":"淮上区","340321":"怀远县","340322":"五河县","340323":"固镇县"},"340400":{"340402":"大通区","340403":"田家庵区","340404":"谢家集区","340405":"八公山区","340406":"潘集区","340421":"凤台县","340422":"寿县"},"340500":{"340503":"花山区","340504":"雨山区","340506":"博望区","340521":"当涂县","340522":"含山县","340523":"和县"},"340600":{"340602":"杜集区","340603":"相山区","340604":"烈山区","340621":"濉溪县"},"340700":{"340705":"铜官区","340706":"义安区","340711":"郊区","340722":"枞阳县"},"340800":{"340802":"迎江区","340803":"大观区","340811":"宜秀区","340822":"怀宁县","340824":"潜山县","340825":"太湖县","340826":"宿松县","340827":"望江县","340828":"岳西县","340881":"桐城市"},"341000":{"341002":"屯溪区","341003":"黄山区","341004":"徽州区","341021":"歙县","341022":"休宁县","341023":"黟县","341024":"祁门县"},"341100":{"341102":"琅琊区","341103":"南谯区","341122":"来安县","341124":"全椒县","341125":"定远县","341126":"凤阳县","341181":"天长市","341182":"明光市"},"341200":{"341202":"颍州区","341203":"颍东区","341204":"颍泉区","341221":"临泉县","341222":"太和县","341225":"阜南县","341226":"颍上县","341282":"界首市"},"341300":{"341302":"埇桥区","341321":"砀山县","341322":"萧县","341323":"灵璧县","341324":"泗县"},"341500":{"341502":"金安区","341503":"裕安区","341504":"叶集区","341522":"霍邱县","341523":"舒城县","341524":"金寨县","341525":"霍山县"},"341600":{"341602":"谯城区","341621":"涡阳县","341622":"蒙城县","341623":"利辛县"},"341700":{"341702":"贵池区","341721":"东至县","341722":"石台县","341723":"青阳县"},"341800":{"341802":"宣州区","341821":"郎溪县","341822":"广德县","341823":"泾县","341824":"绩溪县","341825":"旌德县","341881":"宁国市"},"350000":{"350100":"福州市","350200":"厦门市","350300":"莆田市","350400":"三明市","350500":"泉州市","350600":"漳州市","350700":"南平市","350800":"龙岩市","350900":"宁德市"},"350100":{"350102":"鼓楼区","350103":"台江区","350104":"仓山区","350105":"马尾区","350111":"晋安区","350121":"闽侯县","350122":"连江县","350123":"罗源县","350124":"闽清县","350125":"永泰县","350128":"平潭县","350181":"福清市","350182":"长乐市"},"350200":{"350203":"思明区","350205":"海沧区","350206":"湖里区","350211":"集美区","350212":"同安区","350213":"翔安区"},"350300":{"350302":"城厢区","350303":"涵江区","350304":"荔城区","350305":"秀屿区","350322":"仙游县"},"350400":{"350402":"梅列区","350403":"三元区","350421":"明溪县","350423":"清流县","350424":"宁化县","350425":"大田县","350426":"尤溪县","350427":"沙县","350428":"将乐县","350429":"泰宁县","350430":"建宁县","350481":"永安市"},"350500":{"350502":"鲤城区","350503":"丰泽区","350504":"洛江区","350505":"泉港区","350521":"惠安县","350524":"安溪县","350525":"永春县","350526":"德化县","350527":"金门县","350581":"石狮市","350582":"晋江市","350583":"南安市"},"350600":{"350602":"芗城区","350603":"龙文区","350622":"云霄县","350623":"漳浦县","350624":"诏安县","350625":"长泰县","350626":"东山县","350627":"南靖县","350628":"平和县","350629":"华安县","350681":"龙海市"},"350700":{"350702":"延平区","350703":"建阳区","350721":"顺昌县","350722":"浦城县","350723":"光泽县","350724":"松溪县","350725":"政和县","350781":"邵武市","350782":"武夷山市","350783":"建瓯市"},"350800":{"350802":"新罗区","350803":"永定区","350821":"长汀县","350823":"上杭县","350824":"武平县","350825":"连城县","350881":"漳平市"},"350900":{"350902":"蕉城区","350921":"霞浦县","350922":"古田县","350923":"屏南县","350924":"寿宁县","350925":"周宁县","350926":"柘荣县","350981":"福安市","350982":"福鼎市"},"360000":{"360100":"南昌市","360200":"景德镇市","360300":"萍乡市","360400":"九江市","360500":"新余市","360600":"鹰潭市","360700":"赣州市","360800":"吉安市","360900":"宜春市","361000":"抚州市","361100":"上饶市"},"360100":{"360102":"东湖区","360103":"西湖区","360104":"青云谱区","360105":"湾里区","360111":"青山湖区","360112":"新建区","360121":"南昌县","360123":"安义县","360124":"进贤县"},"360200":{"360202":"昌江区","360203":"珠山区","360222":"浮梁县","360281":"乐平市"},"360300":{"360302":"安源区","360313":"湘东区","360321":"莲花县","360322":"上栗县","360323":"芦溪县"},"360400":{"360402":"濂溪区","360403":"浔阳区","360421":"九江县","360423":"武宁县","360424":"修水县","360425":"永修县","360426":"德安县","360428":"都昌县","360429":"湖口县","360430":"彭泽县","360481":"瑞昌市","360482":"共青城市","360483":"庐山市"},"360500":{"360502":"渝水区","360521":"分宜县"},"360600":{"360602":"月湖区","360622":"余江县","360681":"贵溪市"},"360700":{"360702":"章贡区","360703":"南康区","360721":"赣县","360722":"信丰县","360723":"大余县","360724":"上犹县","360725":"崇义县","360726":"安远县","360727":"龙南县","360728":"定南县","360729":"全南县","360730":"宁都县","360731":"于都县","360732":"兴国县","360733":"会昌县","360734":"寻乌县","360735":"石城县","360781":"瑞金市"},"360800":{"360802":"吉州区","360803":"青原区","360821":"吉安县","360822":"吉水县","360823":"峡江县","360824":"新干县","360825":"永丰县","360826":"泰和县","360827":"遂川县","360828":"万安县","360829":"安福县","360830":"永新县","360881":"井冈山市"},"360900":{"360902":"袁州区","360921":"奉新县","360922":"万载县","360923":"上高县","360924":"宜丰县","360925":"靖安县","360926":"铜鼓县","360981":"丰城市","360982":"樟树市","360983":"高安市"},"361000":{"361002":"临川区","361021":"南城县","361022":"黎川县","361023":"南丰县","361024":"崇仁县","361025":"乐安县","361026":"宜黄县","361027":"金溪县","361028":"资溪县","361029":"东乡县","361030":"广昌县"},"361100":{"361102":"信州区","361103":"广丰区","361121":"上饶县","361123":"玉山县","361124":"铅山县","361125":"横峰县","361126":"弋阳县","361127":"余干县","361128":"鄱阳县","361129":"万年县","361130":"婺源县","361181":"德兴市"},"370000":{"370100":"济南市","370200":"青岛市","370300":"淄博市","370400":"枣庄市","370500":"东营市","370600":"烟台市","370700":"潍坊市","370800":"济宁市","370900":"泰安市","371000":"威海市","371100":"日照市","371200":"莱芜市","371300":"临沂市","371400":"德州市","371500":"聊城市","371600":"滨州市","371700":"菏泽市"},"370100":{"370102":"历下区","370103":"市中区","370104":"槐荫区","370105":"天桥区","370112":"历城区","370113":"长清区","370124":"平阴县","370125":"济阳县","370126":"商河县","370181":"章丘市"},"370200":{"370202":"市南区","370203":"市北区","370211":"黄岛区","370212":"崂山区","370213":"李沧区","370214":"城阳区","370281":"胶州市","370282":"即墨市","370283":"平度市","370285":"莱西市"},"370300":{"370302":"淄川区","370303":"张店区","370304":"博山区","370305":"临淄区","370306":"周村区","370321":"桓台县","370322":"高青县","370323":"沂源县"},"370400":{"370402":"市中区","370403":"薛城区","370404":"峄城区","370405":"台儿庄区","370406":"山亭区","370481":"滕州市"},"370500":{"370502":"东营区","370503":"河口区","370505":"垦利区","370522":"利津县","370523":"广饶县"},"370600":{"370602":"芝罘区","370611":"福山区","370612":"牟平区","370613":"莱山区","370634":"长岛县","370681":"龙口市","370682":"莱阳市","370683":"莱州市","370684":"蓬莱市","370685":"招远市","370686":"栖霞市","370687":"海阳市"},"370700":{"370702":"潍城区","370703":"寒亭区","370704":"坊子区","370705":"奎文区","370724":"临朐县","370725":"昌乐县","370781":"青州市","370782":"诸城市","370783":"寿光市","370784":"安丘市","370785":"高密市","370786":"昌邑市"},"370800":{"370811":"任城区","370812":"兖州区","370826":"微山县","370827":"鱼台县","370828":"金乡县","370829":"嘉祥县","370830":"汶上县","370831":"泗水县","370832":"梁山县","370881":"曲阜市","370883":"邹城市"},"370900":{"370902":"泰山区","370911":"岱岳区","370921":"宁阳县","370923":"东平县","370982":"新泰市","370983":"肥城市"},"371000":{"371002":"环翠区","371003":"文登区","371082":"荣成市","371083":"乳山市"},"371100":{"371102":"东港区","371103":"岚山区","371121":"五莲县","371122":"莒县"},"371200":{"371202":"莱城区","371203":"钢城区"},"371300":{"371302":"兰山区","371311":"罗庄区","371312":"河东区","371321":"沂南县","371322":"郯城县","371323":"沂水县","371324":"兰陵县","371325":"费县","371326":"平邑县","371327":"莒南县","371328":"蒙阴县","371329":"临沭县"},"371400":{"371402":"德城区","371403":"陵城区","371422":"宁津县","371423":"庆云县","371424":"临邑县","371425":"齐河县","371426":"平原县","371427":"夏津县","371428":"武城县","371481":"乐陵市","371482":"禹城市"},"371500":{"371502":"东昌府区","371521":"阳谷县","371522":"莘县","371523":"茌平县","371524":"东阿县","371525":"冠县","371526":"高唐县","371581":"临清市"},"371600":{"371602":"滨城区","371603":"沾化区","371621":"惠民县","371622":"阳信县","371623":"无棣县","371625":"博兴县","371626":"邹平县"},"371700":{"371702":"牡丹区","371703":"定陶区","371721":"曹县","371722":"单县","371723":"成武县","371724":"巨野县","371725":"郓城县","371726":"鄄城县","371728":"东明县"},"410000":{"410100":"郑州市","410200":"开封市","410300":"洛阳市","410400":"平顶山市","410500":"安阳市","410600":"鹤壁市","410700":"新乡市","410800":"焦作市","410900":"濮阳市","411000":"许昌市","411100":"漯河市","411200":"三门峡市","411300":"南阳市","411400":"商丘市","411500":"信阳市","411600":"周口市","411700":"驻马店市","419001":"济源市"},"410100":{"410102":"中原区","410103":"二七区","410104":"管城回族区","410105":"金水区","410106":"上街区","410108":"惠济区","410122":"中牟县","410181":"巩义市","410182":"荥阳市","410183":"新密市","410184":"新郑市","410185":"登封市"},"410200":{"410202":"龙亭区","410203":"顺河回族区","410204":"鼓楼区","410205":"禹王台区","410211":"金明区","410212":"祥符区","410221":"杞县","410222":"通许县","410223":"尉氏县","410225":"兰考县"},"410300":{"410302":"老城区","410303":"西工区","410304":"瀍河回族区","410305":"涧西区","410306":"吉利区","410311":"洛龙区","410322":"孟津县","410323":"新安县","410324":"栾川县","410325":"嵩县","410326":"汝阳县","410327":"宜阳县","410328":"洛宁县","410329":"伊川县","410381":"偃师市"},"410400":{"410402":"新华区","410403":"卫东区","410404":"石龙区","410411":"湛河区","410421":"宝丰县","410422":"叶县","410423":"鲁山县","410425":"郏县","410481":"舞钢市","410482":"汝州市"},"410500":{"410502":"文峰区","410503":"北关区","410505":"殷都区","410506":"龙安区","410522":"安阳县","410523":"汤阴县","410526":"滑县","410527":"内黄县","410581":"林州市"},"410600":{"410602":"鹤山区","410603":"山城区","410611":"淇滨区","410621":"浚县","410622":"淇县"},"410700":{"410702":"红旗区","410703":"卫滨区","410704":"凤泉区","410711":"牧野区","410721":"新乡县","410724":"获嘉县","410725":"原阳县","410726":"延津县","410727":"封丘县","410728":"长垣县","410781":"卫辉市","410782":"辉县市"},"410800":{"410802":"解放区","410803":"中站区","410804":"马村区","410811":"山阳区","410821":"修武县","410822":"博爱县","410823":"武陟县","410825":"温县","410882":"沁阳市","410883":"孟州市"},"410900":{"410902":"华龙区","410922":"清丰县","410923":"南乐县","410926":"范县","410927":"台前县","410928":"濮阳县"},"411000":{"411002":"魏都区","411023":"许昌县","411024":"鄢陵县","411025":"襄城县","411081":"禹州市","411082":"长葛市"},"411100":{"411102":"源汇区","411103":"郾城区","411104":"召陵区","411121":"舞阳县","411122":"临颍县"},"411200":{"411202":"湖滨区","411203":"陕州区","411221":"渑池县","411224":"卢氏县","411281":"义马市","411282":"灵宝市"},"411300":{"411302":"宛城区","411303":"卧龙区","411321":"南召县","411322":"方城县","411323":"西峡县","411324":"镇平县","411325":"内乡县","411326":"淅川县","411327":"社旗县","411328":"唐河县","411329":"新野县","411330":"桐柏县","411381":"邓州市"},"411400":{"411402":"梁园区","411403":"睢阳区","411421":"民权县","411422":"睢县","411423":"宁陵县","411424":"柘城县","411425":"虞城县","411426":"夏邑县","411481":"永城市"},"411500":{"411502":"浉河区","411503":"平桥区","411521":"罗山县","411522":"光山县","411523":"新县","411524":"商城县","411525":"固始县","411526":"潢川县","411527":"淮滨县","411528":"息县"},"411600":{"411602":"川汇区","411621":"扶沟县","411622":"西华县","411623":"商水县","411624":"沈丘县","411625":"郸城县","411626":"淮阳县","411627":"太康县","411628":"鹿邑县","411681":"项城市"},"411700":{"411702":"驿城区","411721":"西平县","411722":"上蔡县","411723":"平舆县","411724":"正阳县","411725":"确山县","411726":"泌阳县","411727":"汝南县","411728":"遂平县","411729":"新蔡县"},"419001":{"4190011":"济源市克井镇","41900111":"济源市下冶镇","419001001":"济源市沁园街道","419001002":"济源市济水街道","419001003":"济源市北海街道","419001004":"济源市天坛街道","419001005":"济源市玉泉街道","419001101":"济源市五龙口镇","419001102":"济源市轵城镇","419001103":"济源市承留镇","419001104":"济源市邵原镇","419001105":"济源市坡头镇","419001106":"济源市梨林镇","419001107":"济源市大峪镇","419001108":"济源市思礼镇","419001109":"济源市王屋镇"},"420000":{"420100":"武汉市","420200":"黄石市","420300":"十堰市","420500":"宜昌市","420600":"襄阳市","420700":"鄂州市","420800":"荆门市","420900":"孝感市","421000":"荆州市","421100":"黄冈市","421200":"咸宁市","421300":"随州市","422800":"恩施土家族苗族自治州","429004":"仙桃市","429005":"潜江市","429006":"天门市","429021":"神农架林区"},"420100":{"420102":"江岸区","420103":"江汉区","420104":"硚口区","420105":"汉阳区","420106":"武昌区","420107":"青山区","420111":"洪山区","420112":"东西湖区","420113":"汉南区","420114":"蔡甸区","420115":"江夏区","420116":"黄陂区","420117":"新洲区"},"420200":{"420202":"黄石港区","420203":"西塞山区","420204":"下陆区","420205":"铁山区","420222":"阳新县","420281":"大冶市"},"420300":{"420302":"茅箭区","420303":"张湾区","420304":"郧阳区","420322":"郧西县","420323":"竹山县","420324":"竹溪县","420325":"房县","420381":"丹江口市"},"420500":{"420502":"西陵区","420503":"伍家岗区","420504":"点军区","420505":"猇亭区","420506":"夷陵区","420525":"远安县","420526":"兴山县","420527":"秭归县","420528":"长阳土家族自治县","420529":"五峰土家族自治县","420581":"宜都市","420582":"当阳市","420583":"枝江市"},"420600":{"420602":"襄城区","420606":"樊城区","420607":"襄州区","420624":"南漳县","420625":"谷城县","420626":"保康县","420682":"老河口市","420683":"枣阳市","420684":"宜城市"},"420700":{"420702":"梁子湖区","420703":"华容区","420704":"鄂城区"},"420800":{"420802":"东宝区","420804":"掇刀区","420821":"京山县","420822":"沙洋县","420881":"钟祥市"},"420900":{"420902":"孝南区","420921":"孝昌县","420922":"大悟县","420923":"云梦县","420981":"应城市","420982":"安陆市","420984":"汉川市"},"421000":{"421002":"沙市区","421003":"荆州区","421022":"公安县","421023":"监利县","421024":"江陵县","421081":"石首市","421083":"洪湖市","421087":"松滋市"},"421100":{"421102":"黄州区","421121":"团风县","421122":"红安县","421123":"罗田县","421124":"英山县","421125":"浠水县","421126":"蕲春县","421127":"黄梅县","421181":"麻城市","421182":"武穴市"},"421200":{"421202":"咸安区","421221":"嘉鱼县","421222":"通城县","421223":"崇阳县","421224":"通山县","421281":"赤壁市"},"421300":{"421303":"曾都区","421321":"随县","421381":"广水市"},"422800":{"422801":"恩施市","422802":"利川市","422822":"建始县","422823":"巴东县","422825":"宣恩县","422826":"咸丰县","422827":"来凤县","422828":"鹤峰县"},"429004":{"4290041":"郑场镇","4290044":"工业园区","42900411":"张沟镇","429004001":"沙嘴街道","429004002":"干河街道","429004003":"龙华山","429004101":"毛嘴镇","429004102":"豆河镇","429004103":"三伏潭镇","429004104":"胡场镇","429004105":"长倘口镇","429004106":"西流河镇","429004107":"沙湖镇","429004108":"杨林尾镇","429004109":"彭场镇","429004111":"郭河镇","429004112":"沔城回族镇","429004113":"通海口镇","429004114":"陈场镇","429004401":"九合垸原种场","429004402":"沙湖原种场","429004404":"五湖渔场","429004405":"赵西垸林场","429004407":"畜禽良种场","429004408":"排湖风景区"},"429005":{"4290051":"竹根滩镇","4290054":"江汉石油管理局","42900545":"周矶管理区","429005001":"园林","429005002":"杨市","429005003":"周矶","429005004":"广华","429005005":"泰丰","429005006":"高场","429005101":"渔洋镇","429005102":"王场镇","429005103":"高石碑镇","429005104":"熊口镇","429005105":"老新镇","429005106":"浩口镇","429005107":"积玉口镇","429005108":"张金镇","429005109":"龙湾镇","429005401":"潜江经济开发区","429005451":"后湖管理区","429005452":"熊口管理区","429005453":"总口管理区","429005454":"白鹭湖管理区","429005455":"运粮湖管理区","429005457":"浩口原种场"},"429006":{"4290061":"多宝镇","42900611":"麻洋镇","42900612":"石河镇","42900645":"蒋湖农场","429006001":"竟陵街道","429006002":"侨乡街道开发区","429006003":"杨林街道","429006101":"拖市镇","429006102":"张港镇","429006103":"蒋场镇","429006104":"汪场镇","429006105":"渔薪镇","429006106":"黄潭镇","429006107":"岳口镇","429006108":"横林镇","429006109":"彭市镇","429006111":"多祥镇","429006112":"干驿镇","429006113":"马湾镇","429006114":"卢市镇","429006115":"小板镇","429006116":"九真镇","429006118":"皂市镇","429006119":"胡市镇","429006121":"佛子山镇","429006201":"净潭乡","429006451":"白茅湖农场","429006452":"沉湖管委会"},"429021":{"4290211":"松柏镇","4290212":"宋洛乡","429021101":"阳日镇","429021102":"木鱼镇","429021103":"红坪镇","429021104":"新华镇","429021105":"九湖镇","429021202":"下谷坪土家族乡"},"430000":{"430100":"长沙市","430200":"株洲市","430300":"湘潭市","430400":"衡阳市","430500":"邵阳市","430600":"岳阳市","430700":"常德市","430800":"张家界市","430900":"益阳市","431000":"郴州市","431100":"永州市","431200":"怀化市","431300":"娄底市","433100":"湘西土家族苗族自治州"},"430100":{"430102":"芙蓉区","430103":"天心区","430104":"岳麓区","430105":"开福区","430111":"雨花区","430112":"望城区","430121":"长沙县","430124":"宁乡县","430181":"浏阳市"},"430200":{"430202":"荷塘区","430203":"芦淞区","430204":"石峰区","430211":"天元区","430221":"株洲县","430223":"攸县","430224":"茶陵县","430225":"炎陵县","430281":"醴陵市"},"430300":{"430302":"雨湖区","430304":"岳塘区","430321":"湘潭县","430381":"湘乡市","430382":"韶山市"},"430400":{"430405":"珠晖区","430406":"雁峰区","430407":"石鼓区","430408":"蒸湘区","430412":"南岳区","430421":"衡阳县","430422":"衡南县","430423":"衡山县","430424":"衡东县","430426":"祁东县","430481":"耒阳市","430482":"常宁市"},"430500":{"430502":"双清区","430503":"大祥区","430511":"北塔区","430521":"邵东县","430522":"新邵县","430523":"邵阳县","430524":"隆回县","430525":"洞口县","430527":"绥宁县","430528":"新宁县","430529":"城步苗族自治县","430581":"武冈市"},"430600":{"430602":"岳阳楼区","430603":"云溪区","430611":"君山区","430621":"岳阳县","430623":"华容县","430624":"湘阴县","430626":"平江县","430681":"汨罗市","430682":"临湘市"},"430700":{"430702":"武陵区","430703":"鼎城区","430721":"安乡县","430722":"汉寿县","430723":"澧县","430724":"临澧县","430725":"桃源县","430726":"石门县","430781":"津市市"},"430800":{"430802":"永定区","430811":"武陵源区","430821":"慈利县","430822":"桑植县"},"430900":{"430902":"资阳区","430903":"赫山区","430921":"南县","430922":"桃江县","430923":"安化县","430981":"沅江市"},"431000":{"431002":"北湖区","431003":"苏仙区","431021":"桂阳县","431022":"宜章县","431023":"永兴县","431024":"嘉禾县","431025":"临武县","431026":"汝城县","431027":"桂东县","431028":"安仁县","431081":"资兴市"},"431100":{"431102":"零陵区","431103":"冷水滩区","431121":"祁阳县","431122":"东安县","431123":"双牌县","431124":"道县","431125":"江永县","431126":"宁远县","431127":"蓝山县","431128":"新田县","431129":"江华瑶族自治县"},"431200":{"431202":"鹤城区","431221":"中方县","431222":"沅陵县","431223":"辰溪县","431224":"溆浦县","431225":"会同县","431226":"麻阳苗族自治县","431227":"新晃侗族自治县","431228":"芷江侗族自治县","431229":"靖州苗族侗族自治县","431230":"通道侗族自治县","431281":"洪江市"},"431300":{"431302":"娄星区","431321":"双峰县","431322":"新化县","431381":"冷水江市","431382":"涟源市"},"433100":{"433101":"吉首市","433122":"泸溪县","433123":"凤凰县","433124":"花垣县","433125":"保靖县","433126":"古丈县","433127":"永顺县","433130":"龙山县"},"440000":{"440100":"广州市","440200":"韶关市","440300":"深圳市","440400":"珠海市","440500":"汕头市","440600":"佛山市","440700":"江门市","440800":"湛江市","440900":"茂名市","441200":"肇庆市","441300":"惠州市","441400":"梅州市","441500":"汕尾市","441600":"河源市","441700":"阳江市","441800":"清远市","441900":"东莞市","442000":"中山市","445100":"潮州市","445200":"揭阳市","445300":"云浮市"},"440100":{"440103":"荔湾区","440104":"越秀区","440105":"海珠区","440106":"天河区","440111":"白云区","440112":"黄埔区","440113":"番禺区","440114":"花都区","440115":"南沙区","440117":"从化区","440118":"增城区"},"440200":{"440203":"武江区","440204":"浈江区","440205":"曲江区","440222":"始兴县","440224":"仁化县","440229":"翁源县","440232":"乳源瑶族自治县","440233":"新丰县","440281":"乐昌市","440282":"南雄市"},"440300":{"440303":"罗湖区","440304":"福田区","440305":"南山区","440306":"宝安区","440307":"龙岗区","440308":"盐田区"},"440400":{"440402":"香洲区","440403":"斗门区","440404":"金湾区"},"440500":{"440507":"龙湖区","440511":"金平区","440512":"濠江区","440513":"潮阳区","440514":"潮南区","440515":"澄海区","440523":"南澳县"},"440600":{"440604":"禅城区","440605":"南海区","440606":"顺德区","440607":"三水区","440608":"高明区"},"440700":{"440703":"蓬江区","440704":"江海区","440705":"新会区","440781":"台山市","440783":"开平市","440784":"鹤山市","440785":"恩平市"},"440800":{"440802":"赤坎区","440803":"霞山区","440804":"坡头区","440811":"麻章区","440823":"遂溪县","440825":"徐闻县","440881":"廉江市","440882":"雷州市","440883":"吴川市"},"440900":{"440902":"茂南区","440904":"电白区","440981":"高州市","440982":"化州市","440983":"信宜市"},"441200":{"441202":"端州区","441203":"鼎湖区","441204":"高要区","441223":"广宁县","441224":"怀集县","441225":"封开县","441226":"德庆县","441284":"四会市"},"441300":{"441302":"惠城区","441303":"惠阳区","441322":"博罗县","441323":"惠东县","441324":"龙门县"},"441400":{"441402":"梅江区","441403":"梅县区","441422":"大埔县","441423":"丰顺县","441424":"五华县","441426":"平远县","441427":"蕉岭县","441481":"兴宁市"},"441500":{"441502":"城区","441521":"海丰县","441523":"陆河县","441581":"陆丰市"},"441600":{"441602":"源城区","441621":"紫金县","441622":"龙川县","441623":"连平县","441624":"和平县","441625":"东源县"},"441700":{"441702":"江城区","441704":"阳东区","441721":"阳西县","441781":"阳春市"},"441800":{"441802":"清城区","441803":"清新区","441821":"佛冈县","441823":"阳山县","441825":"连山壮族瑶族自治县","441826":"连南瑶族自治县","441881":"英德市","441882":"连州市"},"441900":{"441900003":"东城街道","441900004":"南城街道","441900005":"万江街道","441900006":"莞城街道","441900101":"石碣镇","441900102":"石龙镇","441900103":"茶山镇","441900104":"石排镇","441900105":"企石镇","441900106":"横沥镇","441900107":"桥头镇","441900108":"谢岗镇","441900109":"东坑镇","441900110":"常平镇","441900111":"寮步镇","441900112":"樟木头镇","441900113":"大朗镇","441900114":"黄江镇","441900115":"清溪镇","441900116":"塘厦镇","441900117":"凤岗镇","441900118":"大岭山镇","441900119":"长安镇","441900121":"虎门镇","441900122":"厚街镇","441900123":"沙田镇","441900124":"道滘镇","441900125":"洪梅镇","441900126":"麻涌镇","441900127":"望牛墩镇","441900128":"中堂镇","441900129":"高埗镇","441900401":"松山湖管委会","441900402":"虎门港管委会","441900403":"东莞生态园"},"442000":{"442000001":"石岐区街道","442000002":"东区街道","442000003":"火炬开发区街道","442000004":"西区街道","442000005":"南区街道","442000006":"五桂山街道","442000100":"小榄镇","442000101":"黄圃镇","442000102":"民众镇","442000103":"东凤镇","442000104":"东升镇","442000105":"古镇镇","442000106":"沙溪镇","442000107":"坦洲镇","442000108":"港口镇","442000109":"三角镇","442000110":"横栏镇","442000111":"南头镇","442000112":"阜沙镇","442000113":"南朗镇","442000114":"三乡镇","442000115":"板芙镇","442000116":"大涌镇","442000117":"神湾镇"},"445100":{"445102":"湘桥区","445103":"潮安区","445122":"饶平县"},"445200":{"445202":"榕城区","445203":"揭东区","445222":"揭西县","445224":"惠来县","445281":"普宁市"},"445300":{"445302":"云城区","445303":"云安区","445321":"新兴县","445322":"郁南县","445381":"罗定市"},"450000":{"450100":"南宁市","450200":"柳州市","450300":"桂林市","450400":"梧州市","450500":"北海市","450600":"防城港市","450700":"钦州市","450800":"贵港市","450900":"玉林市","451000":"百色市","451100":"贺州市","451200":"河池市","451300":"来宾市","451400":"崇左市"},"450100":{"450102":"兴宁区","450103":"青秀区","450105":"江南区","450107":"西乡塘区","450108":"良庆区","450109":"邕宁区","450110":"武鸣区","450123":"隆安县","450124":"马山县","450125":"上林县","450126":"宾阳县","450127":"横县"},"450200":{"450202":"城中区","450203":"鱼峰区","450204":"柳南区","450205":"柳北区","450206":"柳江区","450222":"柳城县","450223":"鹿寨县","450224":"融安县","450225":"融水苗族自治县","450226":"三江侗族自治县"},"450300":{"450302":"秀峰区","450303":"叠彩区","450304":"象山区","450305":"七星区","450311":"雁山区","450312":"临桂区","450321":"阳朔县","450323":"灵川县","450324":"全州县","450325":"兴安县","450326":"永福县","450327":"灌阳县","450328":"龙胜各族自治县","450329":"资源县","450330":"平乐县","450331":"荔浦县","450332":"恭城瑶族自治县"},"450400":{"450403":"万秀区","450405":"长洲区","450406":"龙圩区","450421":"苍梧县","450422":"藤县","450423":"蒙山县","450481":"岑溪市"},"450500":{"450502":"海城区","450503":"银海区","450512":"铁山港区","450521":"合浦县"},"450600":{"450602":"港口区","450603":"防城区","450621":"上思县","450681":"东兴市"},"450700":{"450702":"钦南区","450703":"钦北区","450721":"灵山县","450722":"浦北县"},"450800":{"450802":"港北区","450803":"港南区","450804":"覃塘区","450821":"平南县","450881":"桂平市"},"450900":{"450902":"玉州区","450903":"福绵区","450921":"容县","450922":"陆川县","450923":"博白县","450924":"兴业县","450981":"北流市"},"451000":{"451002":"右江区","451021":"田阳县","451022":"田东县","451023":"平果县","451024":"德保县","451026":"那坡县","451027":"凌云县","451028":"乐业县","451029":"田林县","451030":"西林县","451031":"隆林各族自治县","451081":"靖西市"},"451100":{"451102":"八步区","451103":"平桂区","451121":"昭平县","451122":"钟山县","451123":"富川瑶族自治县"},"451200":{"451202":"金城江区","451221":"南丹县","451222":"天峨县","451223":"凤山县","451224":"东兰县","451225":"罗城仫佬族自治县","451226":"环江毛南族自治县","451227":"巴马瑶族自治县","451228":"都安瑶族自治县","451229":"大化瑶族自治县","451281":"宜州市"},"451300":{"451302":"兴宾区","451321":"忻城县","451322":"象州县","451323":"武宣县","451324":"金秀瑶族自治县","451381":"合山市"},"451400":{"451402":"江州区","451421":"扶绥县","451422":"宁明县","451423":"龙州县","451424":"大新县","451425":"天等县","451481":"凭祥市"},"460000":{"460100":"海口市","460200":"三亚市","460300":"三沙市","460400":"儋州市","469001":"五指山市","469002":"琼海市","469005":"文昌市","469006":"万宁市","469007":"东方市","469021":"定安县","469022":"屯昌县","469023":"澄迈县","469024":"临高县","469025":"白沙黎族自治县","469026":"昌江黎族自治县","469027":"乐东黎族自治县","469028":"陵水黎族自治县","469029":"保亭黎族苗族自治县","469030":"琼中黎族苗族自治县"},"460100":{"460105":"秀英区","460106":"龙华区","460107":"琼山区","460108":"美兰区"},"460200":{"460202":"海棠区","460203":"吉阳区","460204":"天涯区","460205":"崖州区"},"460300":{"460321":"西沙群岛","460322":"南沙群岛","460323":"中沙群岛的岛礁及其海域"},"460400":{"4604001":"那大镇","4604004":"国营西培农场","4604005":"华南热作学院","46040011":"三都镇","460400101":"和庆镇","460400102":"南丰镇","460400103":"大成镇","460400104":"雅星镇","460400105":"兰洋镇","460400106":"光村镇","460400107":"木棠镇","460400108":"海头镇","460400109":"峨蔓镇","460400111":"王五镇","460400112":"白马井镇","460400113":"中和镇","460400114":"排浦镇","460400115":"东成镇","460400116":"新州镇","460400404":"国营西联农场","460400405":"国营蓝洋农场","460400407":"国营八一农场","460400499":"洋浦经济开发区"},"469001":{"4690011":"通什镇","4690012":"畅好乡","4690014":"畅好农场","469001101":"南圣镇","469001102":"毛阳镇","469001103":"番阳镇","469001201":"毛道乡","469001202":"水满乡"},"469002":{"4690021":"嘉积镇","4690024":"国营东太农场","4690025":"彬村山华侨农场","46900211":"大路镇","469002101":"万泉镇","469002102":"石壁镇","469002103":"中原镇","469002104":"博鳌镇","469002105":"阳江镇","469002106":"龙江镇","469002107":"潭门镇","469002108":"塔洋镇","469002109":"长坡镇","469002111":"会山镇","469002402":"国营东红农场","469002403":"国营东升农场"},"469005":{"4690051":"文城镇","4690054":"国营东路农场","46900511":"昌洒镇","469005101":"重兴镇","469005102":"蓬莱镇","469005103":"会文镇","469005104":"东路镇","469005105":"潭牛镇","469005106":"东阁镇","469005107":"文教镇","469005108":"东郊镇","469005109":"龙楼镇","469005111":"翁田镇","469005112":"抱罗镇","469005113":"冯坡镇","469005114":"锦山镇","469005115":"铺前镇","469005116":"公坡镇","469005401":"国营南阳农场","469005402":"国营罗豆农场"},"469006":{"4690061":"万城镇","4690064":"国营东兴农场","4690065":"兴隆华侨农场","46900611":"南桥镇","469006101":"龙滚镇","469006102":"和乐镇","469006103":"后安镇","469006104":"大茂镇","469006105":"东澳镇","469006106":"礼纪镇","469006107":"长丰镇","469006108":"山根镇","469006109":"北大镇","469006111":"三更罗镇","469006401":"国营东和农场","469006404":"国营新中农场","469006501":"地方国营六连林场"},"469007":{"4690071":"八所镇","4690072":"天安乡","4690074":"国营广坝农场","4690075":"东方华侨农场","469007101":"东河镇","469007102":"大田镇","469007103":"感城镇","469007104":"板桥镇","469007105":"三家镇","469007106":"四更镇","469007107":"新龙镇","469007201":"江边乡"},"469021":{"4690211":"定城镇","4690214":"国营中瑞农场","469021101":"新竹镇","469021102":"龙湖镇","469021103":"黄竹镇","469021104":"雷鸣镇","469021105":"龙门镇","469021106":"龙河镇","469021107":"岭口镇","469021108":"翰林镇","469021109":"富文镇","469021401":"国营南海农场","469021402":"国营金鸡岭农场"},"469022":{"4690221":"屯城镇","4690224":"国营中建农场","469022101":"新兴镇","469022102":"枫木镇","469022103":"乌坡镇","469022104":"南吕镇","469022105":"南坤镇","469022106":"坡心镇","469022107":"西昌镇","469022401":"国营中坤农场"},"469023":{"4690231":"金江镇","4690234":"国营红光农场","46902311":"大丰镇","469023101":"老城镇","469023102":"瑞溪镇","469023103":"永发镇","469023104":"加乐镇","469023105":"文儒镇","469023106":"中兴镇","469023107":"仁兴镇","469023108":"福山镇","469023109":"桥头镇","469023402":"国营西达农场","469023405":"国营金安农场"},"469024":{"4690241":"临城镇","4690244":"国营红华农场","469024101":"波莲镇","469024102":"东英镇","469024103":"博厚镇","469024104":"皇桐镇","469024105":"多文镇","469024106":"和舍镇","469024107":"南宝镇","469024108":"新盈镇","469024109":"调楼镇","469024401":"国营加来农场"},"469025":{"4690251":"牙叉镇","4690252":"细水乡","469025101":"七坊镇","469025102":"邦溪镇","469025103":"打安镇","469025201":"元门乡","469025202":"南开乡","469025203":"阜龙乡","469025204":"青松乡","469025205":"金波乡","469025206":"荣邦乡","469025401":"国营白沙农场","469025404":"国营龙江农场","469025408":"国营邦溪农场"},"469026":{"4690261":"石碌镇","4690262":"王下乡","4690265":"国营霸王岭林场","469026101":"叉河镇","469026102":"十月田镇","469026103":"乌烈镇","469026104":"昌化镇","469026105":"海尾镇","469026106":"七叉镇","469026401":"国营红林农场","469026501":"海南矿业联合有限公司"},"469027":{"4690271":"抱由镇","4690275":"国营尖峰岭林业公司","46902711":"莺歌海镇","469027101":"万冲镇","469027102":"大安镇","469027103":"志仲镇","469027104":"千家镇","469027105":"九所镇","469027106":"利国镇","469027107":"黄流镇","469027108":"佛罗镇","469027109":"尖峰镇","469027401":"国营山荣农场","469027402":"国营乐光农场","469027405":"国营保国农场","469027501":"国营莺歌海盐场"},"469028":{"4690281":"椰林镇","4690282":"提蒙乡","4690284":"国营岭门农场","4690285":"国营吊罗山林业公司","469028101":"光坡镇","469028102":"三才镇","469028103":"英州镇","469028104":"隆广镇","469028105":"文罗镇","469028106":"本号镇","469028107":"新村镇","469028108":"黎安镇","469028201":"群英乡","469028401":"国营南平农场"},"469029":{"4690291":"保城镇","4690292":"六弓乡","469029101":"什玲镇","469029102":"加茂镇","469029103":"响水镇","469029104":"新政镇","469029105":"三道镇","469029201":"南林乡","469029202":"毛感乡","469029401":"国营新星农场","469029402":"海南保亭热带作物研究所","469029403":"国营金江农场","469029405":"国营三道农场"},"469030":{"4690301":"营根镇","4690302":"吊罗山乡","4690305":"海南黎母山省级自然保护区管理站","469030101":"湾岭镇","469030102":"黎母山镇","469030103":"和平镇","469030104":"长征镇","469030105":"红毛镇","469030106":"中平镇","469030201":"上安乡","469030202":"什运乡","469030402":"国营阳江农场","469030403":"国营乌石农场","469030406":"国营加钗农场","469030407":"国营长征农场"},"500000":{"500100":"市辖区","500228":"梁平县","500229":"城口县","500230":"丰都县","500231":"垫江县","500232":"武隆县","500233":"忠县","500235":"云阳县","500236":"奉节县","500237":"巫山县","500238":"巫溪县","500240":"石柱土家族自治县","500241":"秀山土家族苗族自治县","500242":"酉阳土家族苗族自治县","500243":"彭水苗族土家族自治县"},"500100":{"500101":"万州区","500102":"涪陵区","500103":"渝中区","500104":"大渡口区","500105":"江北区","500106":"沙坪坝区","500107":"九龙坡区","500108":"南岸区","500109":"北碚区","500110":"綦江区","500111":"大足区","500112":"渝北区","500113":"巴南区","500114":"黔江区","500115":"长寿区","500116":"江津区","500117":"合川区","500118":"永川区","500119":"南川区","500120":"璧山区","500151":"铜梁区","500152":"潼南区","500153":"荣昌区","500154":"开州区"},"500228":{"5002282":"安胜乡","5002284":"梁平县农场","50022811":"聚奎镇","50022812":"合兴镇","500228001":"梁平县梁山街道","500228002":"梁平县双桂街道","500228101":"仁贤镇","500228102":"礼让镇","500228103":"云龙镇","500228104":"屏锦镇","500228106":"袁驿镇","500228107":"新盛镇","500228108":"福禄镇","500228109":"金带镇","500228111":"明达镇","500228112":"荫平镇","500228113":"和林镇","500228114":"回龙镇","500228115":"碧山镇","500228116":"虎城镇","500228117":"七星镇","500228118":"龙门镇","500228119":"文化镇","500228121":"石安镇","500228122":"柏家镇","500228123":"大观镇","500228124":"竹山镇","500228125":"蟠龙镇","500228126":"星桥镇","500228127":"曲水镇","500228201":"铁门乡","500228202":"龙胜乡","500228203":"复平乡","500228205":"紫照乡","500228401":"梁平县双桂工业园区"},"500229":{"50022911":"咸宜镇","50022921":"双河乡","50022922":"厚坪乡","500229001":"葛城街道","500229002":"复兴街道","500229102":"巴山镇","500229103":"坪坝镇","500229104":"庙坝镇","500229105":"明通镇","500229106":"修齐镇","500229107":"高观镇","500229108":"高燕镇","500229109":"东安镇","500229111":"高楠镇","500229201":"龙田乡","500229202":"北屏乡","500229205":"左岚乡","500229208":"沿河乡","500229211":"蓼子乡","500229212":"鸡鸣乡","500229214":"周溪乡","500229216":"明中乡","500229217":"治平乡","500229219":"岚天乡","500229221":"河鱼乡"},"500230":{"500230":"名山街道","50023011":"兴义镇","50023012":"兴龙镇","50023021":"三建乡","500230101":"虎威镇","500230102":"社坛镇","500230103":"三元镇","500230104":"许明寺镇","500230105":"董家镇","500230106":"树人镇","500230107":"十直镇","500230109":"高家镇","500230111":"双路镇","500230112":"江池镇","500230113":"龙河镇","500230114":"武平镇","500230115":"包鸾镇","500230116":"湛普镇","500230118":"南天湖镇","500230119":"保合镇","500230121":"仁沙镇","500230122":"龙孔镇","500230123":"暨龙镇","500230124":"双龙镇","500230125":"仙女湖镇","500230202":"青龙乡","500230206":"太平坝乡","500230207":"都督乡","500230209":"栗子乡"},"500231":{"50023111":"太平镇","50023112":"裴兴镇","500231001":"桂溪街道","500231002":"桂阳街道","500231101":"新民镇","500231102":"沙坪镇","500231103":"周嘉镇","500231104":"普顺镇","500231105":"永安镇","500231106":"高安镇","500231107":"高峰镇","500231108":"五洞镇","500231109":"澄溪镇","500231111":"鹤游镇","500231112":"坪山镇","500231113":"砚台镇","500231114":"曹回镇","500231115":"杠家镇","500231116":"包家镇","500231117":"白家镇","500231118":"永平镇","500231119":"三溪镇","500231121":"黄沙镇","500231122":"长龙镇","500231202":"沙河乡","500231204":"大石乡"},"500232":{"5002321":"巷口镇","5002322":"凤来乡","50023211":"土坎镇","50023221":"后坪苗族土家族乡","500232101":"火炉镇","500232102":"白马镇","500232103":"鸭江镇","500232104":"长坝镇","500232105":"江口镇","500232106":"平桥镇","500232107":"羊角镇","500232108":"仙女山镇","500232109":"桐梓镇","500232111":"和顺镇","500232112":"双河镇","500232202":"庙垭乡","500232203":"石桥苗族土家族乡","500232205":"黄莺乡","500232206":"沧沟乡","500232207":"文复苗族土家族乡","500232208":"土地乡","500232209":"白云乡","500232211":"浩口苗族仡佬族乡","500232212":"接龙乡","500232213":"赵家乡","500232214":"大洞河乡"},"500233":{"50023311":"官坝镇","50023312":"白石镇","50023321":"兴峰乡","500233001":"忠州街道","500233002":"白公街道","500233101":"新生镇","500233102":"任家镇","500233103":"乌杨镇","500233104":"洋渡镇","500233105":"东溪镇","500233106":"复兴镇","500233107":"石宝镇","500233108":"汝溪镇","500233109":"野鹤镇","500233111":"石黄镇","500233112":"马灌镇","500233113":"金鸡镇","500233114":"新立镇","500233115":"双桂镇","500233116":"拔山镇","500233117":"花桥镇","500233118":"永丰镇","500233119":"三汇镇","500233122":"黄金镇","500233201":"善广乡","500233203":"石子乡","500233204":"磨子土家族乡","500233206":"涂井乡","500233208":"金声乡"},"500235":{"50023513":"桑坪镇","50023514":"蔈草镇","500235001":"双江街道","500235002":"青龙街道","500235003":"人和街道","500235004":"盘龙街道","500235105":"龙角镇","500235107":"故陵镇","500235108":"红狮镇","500235115":"路阳镇","500235116":"农坝镇","500235118":"渠马镇","500235121":"黄石镇","500235122":"巴阳镇","500235123":"沙市镇","500235124":"鱼泉镇","500235125":"凤鸣镇","500235127":"宝坪镇","500235128":"南溪镇","500235129":"双土镇","500235131":"江口镇","500235132":"高阳镇","500235133":"平安镇","500235135":"云阳镇","500235136":"云安镇","500235137":"栖霞镇","500235138":"双龙镇","500235139":"泥溪镇","500235141":"养鹿镇","500235142":"水口镇","500235143":"堰坪镇","500235144":"龙洞镇","500235145":"后叶镇","500235146":"耀灵镇","500235147":"大阳镇","500235208":"外郎乡","500235215":"新津乡","500235216":"普安乡","500235218":"洞鹿乡","500235219":"石门乡","500235239":"上坝乡","500235242":"清水土家族自治乡"},"500236":{"50023612":"康乐镇","50023613":"新民镇","50023627":"康坪乡","500236001":"永安街道","500236002":"鱼复街道","500236003":"夔门街道","500236117":"白帝镇","500236118":"草堂镇","500236119":"汾河镇","500236121":"大树镇","500236122":"竹园镇","500236123":"公平镇","500236124":"朱衣镇","500236125":"甲高镇","500236126":"羊市镇","500236127":"吐祥镇","500236128":"兴隆镇","500236129":"青龙镇","500236131":"永乐镇","500236132":"安坪镇","500236133":"五马镇","500236134":"青莲镇","500236265":"岩湾乡","500236266":"平安乡","500236267":"红土乡","500236269":"石岗乡","500236272":"太和土家族乡","500236274":"鹤峰乡","500236275":"冯坪乡","500236276":"长安土家族乡","500236277":"龙桥土家族乡","500236278":"云雾土家族乡"},"500237":{"5002372":"红椿乡","50023711":"铜鼓镇","50023721":"建坪乡","500237001":"高唐街道","500237002":"龙门街道","500237101":"庙宇镇","500237102":"大昌镇","500237103":"福田镇","500237104":"龙溪镇","500237105":"双龙镇","500237106":"官阳镇","500237107":"骡坪镇","500237108":"抱龙镇","500237109":"官渡镇","500237111":"巫峡镇","500237207":"两坪乡","500237208":"曲尺乡","500237211":"大溪乡","500237214":"金坪乡","500237216":"平河乡","500237219":"当阳乡","500237222":"竹贤乡","500237225":"三溪乡","500237227":"培石乡","500237229":"笃坪乡","500237231":"邓家乡"},"500238":{"5002381":"城厢镇","5002384":"红池坝经济开发区","50023811":"峰灵镇","50023821":"长桂乡","50023824":"双阳乡","500238001":"宁河街道","500238002":"柏杨街道","500238101":"凤凰镇","500238102":"宁厂镇","500238103":"上磺镇","500238104":"古路镇","500238105":"文峰镇","500238106":"徐家镇","500238107":"白鹿镇","500238108":"尖山镇","500238109":"下堡镇","500238111":"塘坊镇","500238112":"朝阳镇","500238113":"田坝镇","500238114":"通城镇","500238115":"菱角镇","500238116":"蒲莲镇","500238117":"土城镇","500238204":"胜利乡","500238207":"大河乡","500238208":"天星乡","500238226":"鱼鳞乡","500238227":"乌龙乡","500238234":"中岗乡","500238237":"花台乡","500238239":"兰英乡","500238242":"中梁乡","500238243":"天元乡"},"500240":{"500240":"下路街道","50024011":"龙沙镇","50024021":"石家乡","500240101":"西沱镇","500240103":"悦崃镇","500240104":"临溪镇","500240105":"黄水镇","500240106":"马武镇","500240107":"沙子镇","500240108":"王场镇","500240109":"沿溪镇","500240111":"鱼池镇","500240112":"三河镇","500240113":"大歇镇","500240114":"桥头镇","500240115":"万朝镇","500240116":"冷水镇","500240117":"黄鹤镇","500240203":"黎场乡","500240204":"三星乡","500240205":"六塘乡","500240207":"三益乡","500240208":"王家乡","500240209":"河嘴乡","500240212":"枫木乡","500240213":"中益乡","500240214":"洗新乡","500240216":"龙潭乡","500240217":"新乐乡","500240218":"金铃乡","500240219":"金竹乡"},"500241":{"50024111":"雅江镇","500241001":"中和街道","500241002":"乌杨街道","500241003":"平凯街道","500241102":"清溪场镇","500241103":"隘口镇","500241104":"溶溪镇","500241105":"官庄镇","500241106":"龙池镇","500241107":"石堤镇","500241108":"峨溶镇","500241109":"洪安镇","500241111":"石耶镇","500241112":"梅江镇","500241113":"兰桥镇","500241114":"膏田镇","500241115":"溪口镇","500241116":"妙泉镇","500241117":"宋农镇","500241118":"里仁镇","500241119":"钟灵镇","500241201":"孝溪乡","500241207":"海洋乡","500241208":"大溪乡","500241211":"涌洞乡","500241214":"中平乡","500241215":"岑溪乡"},"500242":{"5002422":"涂市乡","50024211":"泔溪镇","50024221":"后坪乡","50024222":"清泉乡","500242001":"桃花源街道","500242002":"钟多街道","500242101":"龙潭镇","500242102":"麻旺镇","500242103":"酉酬镇","500242104":"大溪镇","500242105":"兴隆镇","500242106":"黑水镇","500242107":"丁市镇","500242108":"龚滩镇","500242109":"李溪镇","500242111":"酉水河镇","500242112":"苍岭镇","500242113":"小河镇","500242114":"板溪镇","500242202":"铜鼓乡","500242204":"可大乡","500242205":"偏柏乡","500242206":"五福乡","500242207":"木叶乡","500242208":"毛坝乡","500242209":"花田乡","500242211":"天馆乡","500242212":"宜居乡","500242213":"万木乡","500242214":"两罾乡","500242215":"板桥乡","500242216":"官清乡","500242217":"南腰界乡","500242218":"车田乡","500242219":"腴地乡","500242221":"庙溪乡","500242222":"浪坪乡","500242223":"双泉乡","500242224":"楠木乡"},"500243":{"50024311":"万足镇","50024321":"走马乡","500243001":"汉葭街道","500243002":"绍庆街道","500243003":"靛水街道","500243101":"保家镇","500243102":"郁山镇","500243103":"高谷镇","500243104":"桑柘镇","500243105":"鹿角镇","500243106":"黄家镇","500243107":"普子镇","500243108":"龙射镇","500243109":"连湖镇","500243111":"平安镇","500243112":"长生镇","500243113":"新田镇","500243114":"鞍子镇","500243115":"太原镇","500243116":"龙溪镇","500243117":"梅子垭镇","500243118":"大同镇","500243201":"岩东乡","500243202":"鹿鸣乡","500243204":"棣棠乡","500243206":"三义乡","500243207":"联合乡","500243208":"石柳乡","500243211":"芦塘乡","500243213":"乔梓乡","500243217":"诸佛乡","500243219":"桐楼乡","500243222":"善感乡","500243223":"双龙乡","500243224":"石盘乡","500243225":"大垭乡","500243226":"润溪乡","500243227":"朗溪乡","500243228":"龙塘乡"},"510000":{"510100":"成都市","510300":"自贡市","510400":"攀枝花市","510500":"泸州市","510600":"德阳市","510700":"绵阳市","510800":"广元市","510900":"遂宁市","511000":"内江市","511100":"乐山市","511300":"南充市","511400":"眉山市","511500":"宜宾市","511600":"广安市","511700":"达州市","511800":"雅安市","511900":"巴中市","512000":"资阳市","513200":"阿坝藏族羌族自治州","513300":"甘孜藏族自治州","513400":"凉山彝族自治州"},"510100":{"510104":"锦江区","510105":"青羊区","510106":"金牛区","510107":"武侯区","510108":"成华区","510112":"龙泉驿区","510113":"青白江区","510114":"新都区","510115":"温江区","510116":"双流区","510121":"金堂县","510124":"郫县","510129":"大邑县","510131":"蒲江县","510132":"新津县","510181":"都江堰市","510182":"彭州市","510183":"邛崃市","510184":"崇州市","510185":"简阳市"},"510300":{"510302":"自流井区","510303":"贡井区","510304":"大安区","510311":"沿滩区","510321":"荣县","510322":"富顺县"},"510400":{"510402":"东区","510403":"西区","510411":"仁和区","510421":"米易县","510422":"盐边县"},"510500":{"510502":"江阳区","510503":"纳溪区","510504":"龙马潭区","510521":"泸县","510522":"合江县","510524":"叙永县","510525":"古蔺县"},"510600":{"510603":"旌阳区","510623":"中江县","510626":"罗江县","510681":"广汉市","510682":"什邡市","510683":"绵竹市"},"510700":{"510703":"涪城区","510704":"游仙区","510705":"安州区","510722":"三台县","510723":"盐亭县","510725":"梓潼县","510726":"北川羌族自治县","510727":"平武县","510781":"江油市"},"510800":{"510802":"利州区","510811":"昭化区","510812":"朝天区","510821":"旺苍县","510822":"青川县","510823":"剑阁县","510824":"苍溪县"},"510900":{"510903":"船山区","510904":"安居区","510921":"蓬溪县","510922":"射洪县","510923":"大英县"},"511000":{"511002":"市中区","511011":"东兴区","511024":"威远县","511025":"资中县","511028":"隆昌县"},"511100":{"511102":"市中区","511111":"沙湾区","511112":"五通桥区","511113":"金口河区","511123":"犍为县","511124":"井研县","511126":"夹江县","511129":"沐川县","511132":"峨边彝族自治县","511133":"马边彝族自治县","511181":"峨眉山市"},"511300":{"511302":"顺庆区","511303":"高坪区","511304":"嘉陵区","511321":"南部县","511322":"营山县","511323":"蓬安县","511324":"仪陇县","511325":"西充县","511381":"阆中市"},"511400":{"511402":"东坡区","511403":"彭山区","511421":"仁寿县","511423":"洪雅县","511424":"丹棱县","511425":"青神县"},"511500":{"511502":"翠屏区","511503":"南溪区","511521":"宜宾县","511523":"江安县","511524":"长宁县","511525":"高县","511526":"珙县","511527":"筠连县","511528":"兴文县","511529":"屏山县"},"511600":{"511602":"广安区","511603":"前锋区","511621":"岳池县","511622":"武胜县","511623":"邻水县","511681":"华蓥市"},"511700":{"511702":"通川区","511703":"达川区","511722":"宣汉县","511723":"开江县","511724":"大竹县","511725":"渠县","511781":"万源市"},"511800":{"511802":"雨城区","511803":"名山区","511822":"荥经县","511823":"汉源县","511824":"石棉县","511825":"天全县","511826":"芦山县","511827":"宝兴县"},"511900":{"511902":"巴州区","511903":"恩阳区","511921":"通江县","511922":"南江县","511923":"平昌县"},"512000":{"512002":"雁江区","512021":"安岳县","512022":"乐至县"},"513200":{"513201":"马尔康市","513221":"汶川县","513222":"理县","513223":"茂县","513224":"松潘县","513225":"九寨沟县","513226":"金川县","513227":"小金县","513228":"黑水县","513230":"壤塘县","513231":"阿坝县","513232":"若尔盖县","513233":"红原县"},"513300":{"513301":"康定市","513322":"泸定县","513323":"丹巴县","513324":"九龙县","513325":"雅江县","513326":"道孚县","513327":"炉霍县","513328":"甘孜县","513329":"新龙县","513330":"德格县","513331":"白玉县","513332":"石渠县","513333":"色达县","513334":"理塘县","513335":"巴塘县","513336":"乡城县","513337":"稻城县","513338":"得荣县"},"513400":{"513401":"西昌市","513422":"木里藏族自治县","513423":"盐源县","513424":"德昌县","513425":"会理县","513426":"会东县","513427":"宁南县","513428":"普格县","513429":"布拖县","513430":"金阳县","513431":"昭觉县","513432":"喜德县","513433":"冕宁县","513434":"越西县","513435":"甘洛县","513436":"美姑县","513437":"雷波县"},"520000":{"520100":"贵阳市","520200":"六盘水市","520300":"遵义市","520400":"安顺市","520500":"毕节市","520600":"铜仁市","522300":"黔西南布依族苗族自治州","522600":"黔东南苗族侗族自治州","522700":"黔南布依族苗族自治州"},"520100":{"520102":"南明区","520103":"云岩区","520111":"花溪区","520112":"乌当区","520113":"白云区","520115":"观山湖区","520121":"开阳县","520122":"息烽县","520123":"修文县","520181":"清镇市"},"520200":{"520201":"钟山区","520203":"六枝特区","520221":"水城县","520222":"盘县"},"520300":{"520302":"红花岗区","520303":"汇川区","520304":"播州区","520322":"桐梓县","520323":"绥阳县","520324":"正安县","520325":"道真仡佬族苗族自治县","520326":"务川仡佬族苗族自治县","520327":"凤冈县","520328":"湄潭县","520329":"余庆县","520330":"习水县","520381":"赤水市","520382":"仁怀市"},"520400":{"520402":"西秀区","520403":"平坝区","520422":"普定县","520423":"镇宁布依族苗族自治县","520424":"关岭布依族苗族自治县","520425":"紫云苗族布依族自治县"},"520500":{"520502":"七星关区","520521":"大方县","520522":"黔西县","520523":"金沙县","520524":"织金县","520525":"纳雍县","520526":"威宁彝族回族苗族自治县","520527":"赫章县"},"520600":{"520602":"碧江区","520603":"万山区","520621":"江口县","520622":"玉屏侗族自治县","520623":"石阡县","520624":"思南县","520625":"印江土家族苗族自治县","520626":"德江县","520627":"沿河土家族自治县","520628":"松桃苗族自治县"},"522300":{"522301":"兴义市","522322":"兴仁县","522323":"普安县","522324":"晴隆县","522325":"贞丰县","522326":"望谟县","522327":"册亨县","522328":"安龙县"},"522600":{"522601":"凯里市","522622":"黄平县","522623":"施秉县","522624":"三穗县","522625":"镇远县","522626":"岑巩县","522627":"天柱县","522628":"锦屏县","522629":"剑河县","522630":"台江县","522631":"黎平县","522632":"榕江县","522633":"从江县","522634":"雷山县","522635":"麻江县","522636":"丹寨县"},"522700":{"522701":"都匀市","522702":"福泉市","522722":"荔波县","522723":"贵定县","522725":"瓮安县","522726":"独山县","522727":"平塘县","522728":"罗甸县","522729":"长顺县","522730":"龙里县","522731":"惠水县","522732":"三都水族自治县"},"530000":{"530100":"昆明市","530300":"曲靖市","530400":"玉溪市","530500":"保山市","530600":"昭通市","530700":"丽江市","530800":"普洱市","530900":"临沧市","532300":"楚雄彝族自治州","532500":"红河哈尼族彝族自治州","532600":"文山壮族苗族自治州","532800":"西双版纳傣族自治州","532900":"大理白族自治州","533100":"德宏傣族景颇族自治州","533300":"怒江傈僳族自治州","533400":"迪庆藏族自治州"},"530100":{"530102":"五华区","530103":"盘龙区","530111":"官渡区","530112":"西山区","530113":"东川区","530114":"呈贡区","530122":"晋宁县","530124":"富民县","530125":"宜良县","530126":"石林彝族自治县","530127":"嵩明县","530128":"禄劝彝族苗族自治县","530129":"寻甸回族彝族自治县","530181":"安宁市"},"530300":{"530302":"麒麟区","530303":"沾益区","530321":"马龙县","530322":"陆良县","530323":"师宗县","530324":"罗平县","530325":"富源县","530326":"会泽县","530381":"宣威市"},"530400":{"530402":"红塔区","530403":"江川区","530422":"澄江县","530423":"通海县","530424":"华宁县","530425":"易门县","530426":"峨山彝族自治县","530427":"新平彝族傣族自治县","530428":"元江哈尼族彝族傣族自治县"},"530500":{"530502":"隆阳区","530521":"施甸县","530523":"龙陵县","530524":"昌宁县","530581":"腾冲市"},"530600":{"530602":"昭阳区","530621":"鲁甸县","530622":"巧家县","530623":"盐津县","530624":"大关县","530625":"永善县","530626":"绥江县","530627":"镇雄县","530628":"彝良县","530629":"威信县","530630":"水富县"},"530700":{"530702":"古城区","530721":"玉龙纳西族自治县","530722":"永胜县","530723":"华坪县","530724":"宁蒗彝族自治县"},"530800":{"530802":"思茅区","530821":"宁洱哈尼族彝族自治县","530822":"墨江哈尼族自治县","530823":"景东彝族自治县","530824":"景谷傣族彝族自治县","530825":"镇沅彝族哈尼族拉祜族自治县","530826":"江城哈尼族彝族自治县","530827":"孟连傣族拉祜族佤族自治县","530828":"澜沧拉祜族自治县","530829":"西盟佤族自治县"},"530900":{"530902":"临翔区","530921":"凤庆县","530922":"云县","530923":"永德县","530924":"镇康县","530925":"双江拉祜族佤族布朗族傣族自治县","530926":"耿马傣族佤族自治县","530927":"沧源佤族自治县"},"532300":{"532301":"楚雄市","532322":"双柏县","532323":"牟定县","532324":"南华县","532325":"姚安县","532326":"大姚县","532327":"永仁县","532328":"元谋县","532329":"武定县","532331":"禄丰县"},"532500":{"532501":"个旧市","532502":"开远市","532503":"蒙自市","532504":"弥勒市","532523":"屏边苗族自治县","532524":"建水县","532525":"石屏县","532527":"泸西县","532528":"元阳县","532529":"红河县","532530":"金平苗族瑶族傣族自治县","532531":"绿春县","532532":"河口瑶族自治县"},"532600":{"532601":"文山市","532622":"砚山县","532623":"西畴县","532624":"麻栗坡县","532625":"马关县","532626":"丘北县","532627":"广南县","532628":"富宁县"},"532800":{"532801":"景洪市","532822":"勐海县","532823":"勐腊县"},"532900":{"532901":"大理市","532922":"漾濞彝族自治县","532923":"祥云县","532924":"宾川县","532925":"弥渡县","532926":"南涧彝族自治县","532927":"巍山彝族回族自治县","532928":"永平县","532929":"云龙县","532930":"洱源县","532931":"剑川县","532932":"鹤庆县"},"533100":{"533102":"瑞丽市","533103":"芒市","533122":"梁河县","533123":"盈江县","533124":"陇川县"},"533300":{"533301":"泸水市","533323":"福贡县","533324":"贡山独龙族怒族自治县","533325":"兰坪白族普米族自治县"},"533400":{"533401":"香格里拉市","533422":"德钦县","533423":"维西傈僳族自治县"},"540000":{"540100":"拉萨市","540200":"日喀则市","540300":"昌都市","540400":"林芝市","540500":"山南市","542400":"那曲地区","542500":"阿里地区"},"540100":{"540102":"城关区","540103":"堆龙德庆区","540121":"林周县","540122":"当雄县","540123":"尼木县","540124":"曲水县","540126":"达孜县","540127":"墨竹工卡县"},"540200":{"540202":"桑珠孜区","540221":"南木林县","540222":"江孜县","540223":"定日县","540224":"萨迦县","540225":"拉孜县","540226":"昂仁县","540227":"谢通门县","540228":"白朗县","540229":"仁布县","540230":"康马县","540231":"定结县","540232":"仲巴县","540233":"亚东县","540234":"吉隆县","540235":"聂拉木县","540236":"萨嘎县","540237":"岗巴县"},"540300":{"540302":"卡若区","540321":"江达县","540322":"贡觉县","540323":"类乌齐县","540324":"丁青县","540325":"察雅县","540326":"八宿县","540327":"左贡县","540328":"芒康县","540329":"洛隆县","540330":"边坝县"},"540400":{"540402":"巴宜区","540421":"工布江达县","540422":"米林县","540423":"墨脱县","540424":"波密县","540425":"察隅县","540426":"朗县"},"540500":{"540502":"乃东区","540521":"扎囊县","540522":"贡嘎县","540523":"桑日县","540524":"琼结县","540525":"曲松县","540526":"措美县","540527":"洛扎县","540528":"加查县","540529":"隆子县","540530":"错那县","540531":"浪卡子县"},"542400":{"542421":"那曲县","542422":"嘉黎县","542423":"比如县","542424":"聂荣县","542425":"安多县","542426":"申扎县","542427":"索县","542428":"班戈县","542429":"巴青县","542430":"尼玛县","542431":"双湖县"},"542500":{"542521":"普兰县","542522":"札达县","542523":"噶尔县","542524":"日土县","542525":"革吉县","542526":"改则县","542527":"措勤县"},"610000":{"610100":"西安市","610200":"铜川市","610300":"宝鸡市","610400":"咸阳市","610500":"渭南市","610600":"延安市","610700":"汉中市","610800":"榆林市","610900":"安康市","611000":"商洛市"},"610100":{"610102":"新城区","610103":"碑林区","610104":"莲湖区","610111":"灞桥区","610112":"未央区","610113":"雁塔区","610114":"阎良区","610115":"临潼区","610116":"长安区","610117":"高陵区","610122":"蓝田县","610124":"周至县","610125":"户县"},"610200":{"610202":"王益区","610203":"印台区","610204":"耀州区","610222":"宜君县"},"610300":{"610302":"渭滨区","610303":"金台区","610304":"陈仓区","610322":"凤翔县","610323":"岐山县","610324":"扶风县","610326":"眉县","610327":"陇县","610328":"千阳县","610329":"麟游县","610330":"凤县","610331":"太白县"},"610400":{"610402":"秦都区","610403":"杨陵区","610404":"渭城区","610422":"三原县","610423":"泾阳县","610424":"乾县","610425":"礼泉县","610426":"永寿县","610427":"彬县","610428":"长武县","610429":"旬邑县","610430":"淳化县","610431":"武功县","610481":"兴平市"},"610500":{"610502":"临渭区","610503":"华州区","610522":"潼关县","610523":"大荔县","610524":"合阳县","610525":"澄城县","610526":"蒲城县","610527":"白水县","610528":"富平县","610581":"韩城市","610582":"华阴市"},"610600":{"610602":"宝塔区","610603":"安塞区","610621":"延长县","610622":"延川县","610623":"子长县","610625":"志丹县","610626":"吴起县","610627":"甘泉县","610628":"富县","610629":"洛川县","610630":"宜川县","610631":"黄龙县","610632":"黄陵县"},"610700":{"610702":"汉台区","610721":"南郑县","610722":"城固县","610723":"洋县","610724":"西乡县","610725":"勉县","610726":"宁强县","610727":"略阳县","610728":"镇巴县","610729":"留坝县","610730":"佛坪县"},"610800":{"610802":"榆阳区","610803":"横山区","610821":"神木县","610822":"府谷县","610824":"靖边县","610825":"定边县","610826":"绥德县","610827":"米脂县","610828":"佳县","610829":"吴堡县","610830":"清涧县","610831":"子洲县"},"610900":{"610902":"汉滨区","610921":"汉阴县","610922":"石泉县","610923":"宁陕县","610924":"紫阳县","610925":"岚皋县","610926":"平利县","610927":"镇坪县","610928":"旬阳县","610929":"白河县"},"611000":{"611002":"商州区","611021":"洛南县","611022":"丹凤县","611023":"商南县","611024":"山阳县","611025":"镇安县","611026":"柞水县"},"620000":{"620100":"兰州市","620200":"嘉峪关市","620300":"金昌市","620400":"白银市","620500":"天水市","620600":"武威市","620700":"张掖市","620800":"平凉市","620900":"酒泉市","621000":"庆阳市","621100":"定西市","621200":"陇南市","622900":"临夏回族自治州","623000":"甘南藏族自治州"},"620100":{"620102":"城关区","620103":"七里河区","620104":"西固区","620105":"安宁区","620111":"红古区","620121":"永登县","620122":"皋兰县","620123":"榆中县"},"620200":{},"620300":{"620302":"金川区","620321":"永昌县"},"620400":{"620402":"白银区","620403":"平川区","620421":"靖远县","620422":"会宁县","620423":"景泰县"},"620500":{"620502":"秦州区","620503":"麦积区","620521":"清水县","620522":"秦安县","620523":"甘谷县","620524":"武山县","620525":"张家川回族自治县"},"620600":{"620602":"凉州区","620621":"民勤县","620622":"古浪县","620623":"天祝藏族自治县"},"620700":{"620702":"甘州区","620721":"肃南裕固族自治县","620722":"民乐县","620723":"临泽县","620724":"高台县","620725":"山丹县"},"620800":{"620802":"崆峒区","620821":"泾川县","620822":"灵台县","620823":"崇信县","620824":"华亭县","620825":"庄浪县","620826":"静宁县"},"620900":{"620902":"肃州区","620921":"金塔县","620922":"瓜州县","620923":"肃北蒙古族自治县","620924":"阿克塞哈萨克族自治县","620981":"玉门市","620982":"敦煌市"},"621000":{"621002":"西峰区","621021":"庆城县","621022":"环县","621023":"华池县","621024":"合水县","621025":"正宁县","621026":"宁县","621027":"镇原县"},"621100":{"621102":"安定区","621121":"通渭县","621122":"陇西县","621123":"渭源县","621124":"临洮县","621125":"漳县","621126":"岷县"},"621200":{"621202":"武都区","621221":"成县","621222":"文县","621223":"宕昌县","621224":"康县","621225":"西和县","621226":"礼县","621227":"徽县","621228":"两当县"},"622900":{"622901":"临夏市","622921":"临夏县","622922":"康乐县","622923":"永靖县","622924":"广河县","622925":"和政县","622926":"东乡族自治县","622927":"积石山保安族东乡族撒拉族自治县"},"623000":{"623001":"合作市","623021":"临潭县","623022":"卓尼县","623023":"舟曲县","623024":"迭部县","623025":"玛曲县","623026":"碌曲县","623027":"夏河县"},"630000":{"630100":"西宁市","630200":"海东市","632200":"海北藏族自治州","632300":"黄南藏族自治州","632500":"海南藏族自治州","632600":"果洛藏族自治州","632700":"玉树藏族自治州","632800":"海西蒙古族藏族自治州"},"630100":{"630102":"城东区","630103":"城中区","630104":"城西区","630105":"城北区","630121":"大通回族土族自治县","630122":"湟中县","630123":"湟源县"},"630200":{"630202":"乐都区","630203":"平安区","630222":"民和回族土族自治县","630223":"互助土族自治县","630224":"化隆回族自治县","630225":"循化撒拉族自治县"},"632200":{"632221":"门源回族自治县","632222":"祁连县","632223":"海晏县","632224":"刚察县"},"632300":{"632321":"同仁县","632322":"尖扎县","632323":"泽库县","632324":"河南蒙古族自治县"},"632500":{"632521":"共和县","632522":"同德县","632523":"贵德县","632524":"兴海县","632525":"贵南县"},"632600":{"632621":"玛沁县","632622":"班玛县","632623":"甘德县","632624":"达日县","632625":"久治县","632626":"玛多县"},"632700":{"632701":"玉树市","632722":"杂多县","632723":"称多县","632724":"治多县","632725":"囊谦县","632726":"曲麻莱县"},"632800":{"632801":"格尔木市","632802":"德令哈市","632821":"乌兰县","632822":"都兰县","632823":"天峻县"},"640000":{"640100":"银川市","640200":"石嘴山市","640300":"吴忠市","640400":"固原市","640500":"中卫市"},"640100":{"640104":"兴庆区","640105":"西夏区","640106":"金凤区","640121":"永宁县","640122":"贺兰县","640181":"灵武市"},"640200":{"640202":"大武口区","640205":"惠农区","640221":"平罗县"},"640300":{"640302":"利通区","640303":"红寺堡区","640323":"盐池县","640324":"同心县","640381":"青铜峡市"},"640400":{"640402":"原州区","640422":"西吉县","640423":"隆德县","640424":"泾源县","640425":"彭阳县"},"640500":{"640502":"沙坡头区","640521":"中宁县","640522":"海原县"},"650000":{"650100":"乌鲁木齐市","650200":"克拉玛依市","650400":"吐鲁番市","650500":"哈密市","652300":"昌吉回族自治州","652700":"博尔塔拉蒙古自治州","652800":"巴音郭楞蒙古自治州","652900":"阿克苏地区","653000":"克孜勒苏柯尔克孜自治州","653100":"喀什地区","653200":"和田地区","654000":"伊犁哈萨克自治州","654200":"塔城地区","654300":"阿勒泰地区","659001":"石河子市","659002":"阿拉尔市","659003":"图木舒克市","659004":"五家渠市","659006":"铁门关市"},"650100":{"650102":"天山区","650103":"沙依巴克区","650104":"新市区","650105":"水磨沟区","650106":"头屯河区","650107":"达坂城区","650109":"米东区","650121":"乌鲁木齐县"},"650200":{"650202":"独山子区","650203":"克拉玛依区","650204":"白碱滩区","650205":"乌尔禾区"},"650400":{"650402":"高昌区","650421":"鄯善县","650422":"托克逊县"},"650500":{"650502":"伊州区","650521":"巴里坤哈萨克自治县","650522":"伊吾县"},"652300":{"652301":"昌吉市","652302":"阜康市","652323":"呼图壁县","652324":"玛纳斯县","652325":"奇台县","652327":"吉木萨尔县","652328":"木垒哈萨克自治县"},"652700":{"652701":"博乐市","652702":"阿拉山口市","652722":"精河县","652723":"温泉县"},"652800":{"652801":"库尔勒市","652822":"轮台县","652823":"尉犁县","652824":"若羌县","652825":"且末县","652826":"焉耆回族自治县","652827":"和静县","652828":"和硕县","652829":"博湖县"},"652900":{"652901":"阿克苏市","652922":"温宿县","652923":"库车县","652924":"沙雅县","652925":"新和县","652926":"拜城县","652927":"乌什县","652928":"阿瓦提县","652929":"柯坪县"},"653000":{"653001":"阿图什市","653022":"阿克陶县","653023":"阿合奇县","653024":"乌恰县"},"653100":{"653101":"喀什市","653121":"疏附县","653122":"疏勒县","653123":"英吉沙县","653124":"泽普县","653125":"莎车县","653126":"叶城县","653127":"麦盖提县","653128":"岳普湖县","653129":"伽师县","653130":"巴楚县","653131":"塔什库尔干塔吉克自治县"},"653200":{"653201":"和田市","653221":"和田县","653222":"墨玉县","653223":"皮山县","653224":"洛浦县","653225":"策勒县","653226":"于田县","653227":"民丰县"},"654000":{"654002":"伊宁市","654003":"奎屯市","654004":"霍尔果斯市","654021":"伊宁县","654022":"察布查尔锡伯自治县","654023":"霍城县","654024":"巩留县","654025":"新源县","654026":"昭苏县","654027":"特克斯县","654028":"尼勒克县"},"654200":{"654201":"塔城市","654202":"乌苏市","654221":"额敏县","654223":"沙湾县","654224":"托里县","654225":"裕民县","654226":"和布克赛尔蒙古自治县"},"654300":{"654301":"阿勒泰市","654321":"布尔津县","654322":"富蕴县","654323":"福海县","654324":"哈巴河县","654325":"青河县","654326":"吉木乃县"},"659001":{"6590011":"北泉镇","6590015":"兵团一五二团","659001001":"新城街道","659001002":"向阳街道","659001003":"红山街道","659001004":"老街街道","659001005":"东城街道","659001101":"石河子镇"},"659002":{"6590022":"托喀依乡","6590025":"兵团七团","65900252":"兵团三团","659002001":"金银川路街道","659002002":"幸福路街道","659002003":"青松路街道","659002004":"南口街道","659002402":"工业园区","659002501":"兵团八团","659002503":"兵团十团","659002504":"兵团十一团","659002505":"兵团十二团","659002506":"兵团十三团","659002507":"兵团十四团","659002509":"兵团十六团","659002511":"兵团第一师水利水电工程处","659002512":"兵团第一师塔里木灌区水利管理处","659002513":"阿拉尔农场","659002514":"兵团第一师幸福农场","659002515":"中心监狱","659002516":"兵团一团","659002517":"兵团农一师沙井子水利管理处","659002518":"西工业园区管理委员会","659002519":"兵团二团"},"659003":{"65900351":"兵团五十团","659003001":"齐干却勒街道","659003002":"前海街道","659003003":"永安坝街道","659003504":"兵团四十四团","659003509":"兵团四十九团","659003511":"兵团五十一团","659003513":"兵团五十三团","659003514":"兵团图木舒克市喀拉拜勒镇"},"659004":{"6590045":"兵团一零一团","659004001":"军垦路街道","659004002":"青湖路街道","659004003":"人民路街道","659004501":"兵团一零二团","659004502":"兵团一零三团"},"659006":{"6590061":"博古其镇","659006101":"双丰镇"},"710000":{"710100":"台湾省"},"710100":{"710101":"金门","710102":"连江","710103":"苗栗","710104":"南投","710105":"澎湖","710106":"屏东","710107":"台东","710108":"台中","710109":"台南","710110":"台北","710111":"桃园","710112":"云林","710113":"新北","710114":"彰化","710115":"嘉义","710116":"新竹","710117":"花莲","710118":"宜兰","710119":"高雄","710120":"基隆"},"810000":{"810101":"中西区","810102":"东区","810103":"九龙城区","810104":"观塘区","810105":"深水埗区","810106":"湾仔区","810107":"黄大仙区","810108":"油尖旺区","810109":"离岛区","810110":"葵青区","810111":"北区","810112":"西贡区","810113":"沙田区","810114":"屯门区","810115":"大埔区","810116":"荃湾区","810117":"元朗区","810118":"香港","810119":"九龙","810120":"新界"},"820000":{"820101":"离岛","820102":"澳门半岛","820103":"凼仔","820104":"路凼城","820105":"路环"},"910000":{"810000":"香港特别行政区","820000":"澳门特别行政区"}};

var provinceObj = pcaa['86'];
var provinceArr = Object.entries(provinceObj);
var getAreaData = function (province, city) {
    var tempProvice = province;
    if (!province)
        tempProvice = {
            key: provinceArr[0][0],
            value: provinceArr[0][1]
        };
    var cityArr = Object.entries(pcaa[tempProvice.key]);
    var districtArr = Object.entries(pcaa[city ? city.key : cityArr[0][0]]);
    return {
        province: provinceArr,
        city: cityArr,
        district: districtArr
    };
};

var AlipayMutiSelect = /** @class */ (function (_super) {
    __extends(AlipayMutiSelect, _super);
    function AlipayMutiSelect(props) {
        return _super.call(this, props) || this;
    }
    AlipayMutiSelect.prototype.updateData = function () {
        var multiSelector = this.props.multiSelector;
        var range = (multiSelector && multiSelector.range) || [];
        var rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        var value = (multiSelector && multiSelector.value) || [];
        if (value.length) {
            var selected = range.map(function (list, index) { return list[value[index]]; });
            this.setState({
                selectedValue: selected
                    .map(function (item) { return (typeof item === 'string' ? item : item[rangeKey]); })
                    .join(',')
            });
        }
        else {
            this.setState({
                selectedValue: range
                    .map(function (item) { return item[0]; })
                    .map(function (item) { return (typeof item === 'string' ? item : item[rangeKey]); })
                    .join(',')
            });
        }
        this.setState({
            lastSelected: value.length ? value : range.map(function () { return 0; })
        });
    };
    AlipayMutiSelect.prototype.componentDidMount = function () {
        this.updateData();
    };
    AlipayMutiSelect.prototype.onClick = function () {
        this.setState({
            show: true
        });
    };
    AlipayMutiSelect.prototype.onConfirm = function () {
        var multiSelector = this.props.multiSelector;
        var range = (multiSelector && multiSelector.range) || [];
        var rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        var current = range.map(function (item) {
            return typeof item[0] === 'string' ? item : item[rangeKey];
        });
        this.props.onChange && this.props.onChange(this.state.tempSelected);
        this.setState({
            show: false,
            selectedValue: this.state.tempSelected
                .map(function (num, index) { return current[index][num]; })
                .join(','),
            lastSelected: this.state.tempSelected
        });
    };
    AlipayMutiSelect.prototype.onCancel = function () {
        this.props.onCancel && this.props.onCancel(this.state.lastSelected);
        this.setState({
            show: false,
            tempSelected: this.state.lastSelected
        });
    };
    AlipayMutiSelect.prototype.tempChangeValue = function (e) {
        var value = e.detail.value;
        this.props.onColumnChange && this.props.onColumnChange(value);
        this.setState({
            tempSelected: value
        });
    };
    AlipayMutiSelect.prototype.render = function () {
        var _this = this;
        var multiSelector = this.props.multiSelector;
        var range = (multiSelector && multiSelector.range) || [];
        var rangeKey = (multiSelector && multiSelector.rangeKey) || '';
        var value = (multiSelector && multiSelector.value) || [];
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(['cu-form-picker']), onClick: this.onClick.bind(this) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'picker' }, this.state.selectedValue),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClDrawer, { closeWithShadow: true, show: this.state.show, onCancel: function () {
                    _this.setState({
                        show: false
                    });
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'large', paddingDirection: 'horizontal' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { justify: 'between' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: this.onCancel.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: '\u53D6\u6D88', textColor: 'green' })),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: this.onConfirm.bind(this) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: '\u786E\u5B9A', textColor: 'green' }))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* PickerView */ "h"], { value: value, onChange: this.tempChangeValue.bind(this) }, range.map(function (itemList, index) {
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* PickerViewColumn */ "i"], { key: 'key-' + index }, itemList.map(function (item, index) {
                        var name = typeof item !== 'string' ? item[rangeKey] : item;
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: 'key-' + index }, name);
                    })));
                })))));
    };
    AlipayMutiSelect.options = {
        addGlobalClass: true
    };
    AlipayMutiSelect.state = {
        show: false,
        selectedValue: '',
        tempSelected: [],
        lastSelected: []
    };
    return AlipayMutiSelect;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function ClSelect(props) {
    var selector = {
        range: (props.selector && props.selector.range) || [],
        value: (props.selector && props.selector.value) || 0,
        rangeKey: (props.selector && props.selector.rangeKey) || undefined
    };
    var mutiSelector = {
        range: (props.multiSelector && props.multiSelector.range) || [],
        value: (props.multiSelector && props.multiSelector.value) || [0, 0],
        rangeKey: (props.multiSelector && props.multiSelector.rangeKey) || undefined
    };
    var timeSelector = {
        value: (props.time && props.time.value) || '00:00',
        start: (props.time && props.time.start) || '00:00',
        end: (props.time && props.time.end) || '23:59'
    };
    var dateSelector = {
        value: (props.date && props.date.value) ||
            getNowDate((props.date && props.date.fields) || 'day'),
        fields: (props.date && props.date.fields) || 'day',
        start: (props.date && props.date.start) || '',
        end: (props.date && props.date.end) || ''
    };
    var getRegionData = function (province, city) {
        var regionObjData = getAreaData(province, city);
        var provinceArr = regionObjData.province.map(function (item) { return ({
            key: item[0],
            value: item[1]
        }); });
        var cityArr = regionObjData.city.map(function (item) { return ({
            key: item[0],
            value: item[1]
        }); });
        var districtArr = regionObjData.district.map(function (item) { return ({
            key: item[0],
            value: item[1]
        }); });
        return [provinceArr, cityArr, districtArr];
    };
    var regionSelector = {
        value: (props.region && props.region.value) ||
            getRegionData().map(function (item) { return item[0]; })
    };
    // 单选
    var getSelectorValue = function (index) {
        return selector.rangeKey
            ? selector.range[index][selector.rangeKey]
            : selector.range[index];
    };
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        return getSelectorValue(selector.value);
    }), 2), selected = _a[0], setSelected = _a[1];
    var setSelect = function (index) {
        var value = getSelectorValue(index);
        setSelected(value);
    };
    // 多选
    var getMutiSelectorValue = function (mutiIndex) {
        var value = [];
        mutiSelector.range.forEach(function (item, index) {
            var rangeValue = mutiIndex[index];
            var temp = mutiSelector.rangeKey
                ? item[rangeValue][mutiSelector.rangeKey]
                : item[rangeValue];
            value.push(temp);
        });
        return value.join(',');
    };
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        return getMutiSelectorValue(mutiSelector.value);
    }), 2), mutiSelected = _b[0], setMutiSelected = _b[1];
    var setMutiSelect = function (index) {
        setMutiSelected(getMutiSelectorValue(index));
    };
    // 时间选择
    var getTimeSelectorValue = function (value) { return value; };
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        return getTimeSelectorValue(timeSelector.value);
    }), 2), timeSelected = _c[0], setTimeSelected = _c[1];
    var setTimeSelect = function (value) {
        setTimeSelected(getTimeSelectorValue(value));
    };
    // 日期选择
    var getDateSelectorValue = function (value) { return value; };
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        return getDateSelectorValue(dateSelector.value);
    }), 2), dateSelected = _d[0], setDateSelected = _d[1];
    var setDateSelect = function (value) {
        setDateSelected(getDateSelectorValue(value));
    };
    // 地区选择
    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getRegionData.apply(void 0, __spread(regionSelector.value))), 2), areaData = _e[0], setAreaData = _e[1];
    var getRegionSelectorValue = function (value) {
        return value.map(function (item) { return item.value; }).join(',');
    };
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
        return getRegionSelectorValue(regionSelector.value);
    }), 2), regionSelected = _f[0], setRegionSelected = _f[1];
    var _g = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(regionSelector.value), 2), confirmRegion = _g[0], setConfirmRegion = _g[1];
    var _h = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(areaData), 2), originAreaData = _h[0], setOriginAreaData = _h[1];
    var setRegionSelect = function (value) {
        setRegionSelected(getRegionSelectorValue(value));
    };
    // 单选触发
    var onSelectorChange = function (e) {
        var index = e.detail.value;
        setSelect(index);
        props.onChange && props.onChange(index);
    };
    // 多选触发
    var onMutiSelectorChange = function (e) {
        var index = e.detail.value;
        setMutiSelect(index);
        props.onChange && props.onChange(index);
    };
    // 多选滚动触发
    var onMutiSelectorColumChange = function (e) {
        props.onColumnChange && props.onColumnChange(e.detail);
    };
    // 时间触发
    var onTimeSelectorChange = function (e) {
        var index = e.detail.value;
        setTimeSelect(index);
        props.onChange && props.onChange(index);
    };
    // 日期触发
    var onDateSelectorChange = function (e) {
        var index = e.detail.value;
        setDateSelect(index);
        props.onChange && props.onChange(index);
    };
    var origin = regionSelector.value.map(function (item, index) {
        return originAreaData[index].findIndex(function (obj) { return obj.key === item.key; });
    });
    var onCancel = function (e) {
        setAreaData(originAreaData);
        setTempSelect(confirmRegion.map(function (item, index) {
            return originAreaData[index].findIndex(function (origin) { return origin.key === item.key; });
        }));
        props.onCancel && props.onCancel(e);
    };
    // 地区触发
    var onRegionSelectorChange = function (e) {
        var detail = e.detail.value;
        var dataSelected = detail.map(function (key, index) { return areaData[index][key]; });
        setRegionSelect(dataSelected);
        setOriginAreaData(areaData);
        setConfirmRegion(dataSelected);
        props.onChange && props.onChange(dataSelected);
    };
    var _j = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(origin), 2), tempSelect = _j[0], setTempSelect = _j[1];
    var onRegionMutiSelectorColumChange = function (e) {
        var detail = e.detail;
        var column = detail.column;
        var index = e.detail.value;
        tempSelect[column] = index;
        if (column !== 2) {
            if (column === 0) {
                tempSelect[1] = 0;
                tempSelect[2] = 0;
                setAreaData(getRegionData(areaData[0][tempSelect[0]]));
            }
            if (column === 1) {
                tempSelect[2] = 0;
                setAreaData(getRegionData(areaData[0][tempSelect[0]], areaData[1][tempSelect[1]]));
            }
        }
        setTempSelect(tempSelect);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        switch (props.mode) {
            case 'selector': {
                setSelected(getSelectorValue(selector.value));
                break;
            }
            case 'multiSelector': {
                setMutiSelected(getMutiSelectorValue(mutiSelector.value));
                break;
            }
            case 'region': {
                setRegionSelected(getRegionSelectorValue(regionSelector.value));
                var area_1 = getRegionData.apply(void 0, __spread(regionSelector.value));
                setAreaData(area_1);
                var origin_1 = regionSelector.value.map(function (item, index) {
                    return area_1[index].findIndex(function (obj) { return obj.key === item.key; });
                });
                setTempSelect(origin_1);
                break;
            }
            case 'date': {
                setDateSelected(getDateSelectorValue(dateSelector.value));
                break;
            }
            case 'time': {
                setTimeSelected(getTimeSelectorValue(timeSelector.value));
                break;
            }
        }
    }, [
        props.selector,
        props.region,
        props.date,
        props.time,
        props.multiSelector
    ]);
    // 单选组件
    var selectorComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Picker */ "g"], { mode: 'selector', range: selector.range, rangeKey: selector.rangeKey, value: selector.value || 0, onChange: onSelectorChange, onCancel: onCancel, disabled: props.disabled, className: 'longSelect' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'picker' }, selected)));
    // 多选组件
    var mutiSelectorComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Picker */ "g"], { mode: 'multiSelector', range: mutiSelector.range, rangeKey: mutiSelector.rangeKey, value: mutiSelector.value, onChange: onMutiSelectorChange, onColumnChange: onMutiSelectorColumChange, onCancel: onCancel, disabled: props.disabled, className: 'longSelect' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'picker' }, mutiSelected)));
    // alipay 多选
    var alipayMutiSelectorComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlipayMutiSelect, __assign({}, props));
    // 时间选择组件
    var timeSelectorComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Picker */ "g"], { mode: 'time', value: timeSelector.value, start: timeSelector.start, end: timeSelector.end, onChange: onTimeSelectorChange, onCancel: onCancel, disabled: props.disabled, className: 'longSelect' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'picker' }, timeSelected)));
    // 日期选择组件
    var dateSelectorComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Picker */ "g"], { mode: 'date', value: dateSelector.value, start: dateSelector.start, end: dateSelector.end, fields: dateSelector.fields, onCancel: onCancel, onChange: onDateSelectorChange, className: 'longSelect' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'picker' }, dateSelected)));
    // 地区选择组件
    var regionSelectorComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Picker */ "g"], { mode: 'multiSelector', range: areaData, rangeKey: 'value', value: tempSelect, onChange: onRegionSelectorChange, onColumnChange: onRegionMutiSelectorColumChange, onCancel: onCancel, disabled: props.disabled, className: 'longSelect' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'picker' }, regionSelected)));
    var title = props.title;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-form-group " + (props.disabled ? 'text-gray' : ''), props.className), style: Object.assign({}, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'title' }, title || ''),
        props.mode === 'selector' ? selectorComponent : '',
        props.mode === 'multiSelector' && !isAliPay ? mutiSelectorComponent : '',
        props.mode === 'multiSelector' && isAliPay
            ? alipayMutiSelectorComponent
            : '',
        props.mode === 'time' ? timeSelectorComponent : '',
        props.mode === 'date' ? dateSelectorComponent : '',
        props.mode === 'region' ? regionSelectorComponent : ''));
}
ClSelect.options = {
    addGlobalClass: true
};
ClSelect.defaultProps = {
    mode: 'selector',
    selector: [],
    multiSelector: [],
    time: [],
    date: [],
    region: []
};

function ClShopBar(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.tabs || []), 2), tabs = _a[0], setTabs = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.buttons || []), 2), buttons = _b[0], setButtons = _b[1];
    var onClickTab = function (index) {
        props.onClickTab && props.onClickTab(index);
    };
    var onClickButton = function (index) {
        props.onClickButton && props.onClickButton(index);
    };
    var bgColorClassName = BG_COLOR_LIST[props.bgColor || 'white'];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var initTabs = props.tabs || [];
        var tabs = initTabs.map(function (item) { return (__assign({ id: generateId() }, item)); });
        setTabs(tabs);
    }, [props.tabs]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var initButtons = props.buttons || [];
        var buttons = initButtons.map(function (item) { return (__assign({ id: generateId() }, item)); });
        setButtons(buttons);
    }, [props.buttons]);
    var tabsComponent = tabs.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.id, className: 'ClShopBar__tab' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClButton, __assign({ bgColor: props.bgColor, shadow: false }, item.moreAction, { onClick: function () {
                onClickTab(index);
            } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action', style: {
                    background: 'transparent'
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "" + (item.icon ? 'cuIcon-' + item.icon : '') }, item.badge !== false ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-tag badge' }, item.badge === true ? '' : item.badge)) : ('')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null, item.title))))); });
    var buttonsComponent = buttons.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.id, className: BG_COLOR_LIST[item.bgColor || 'red'] + " submit", onClick: function () {
            onClickButton(index);
        } }, item.text)); });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-bar " + bgColorClassName + " tabbar " + (props.safeArea ? 'safe-area' : '') + " shop " + (props.border ? 'border' : ''), props.className), style: Object.assign(props.fix
            ? { position: 'fixed', bottom: '0', width: '100vw', zIndex: '10' }
            : {}, props.style) },
        tabsComponent,
        buttonsComponent));
}
ClShopBar.options = {
    addGlobalClass: true
};
ClShopBar.defaultProps = {
    bgColor: 'white',
    tabs: [],
    buttons: [],
    border: false,
    onClickButton: function () { },
    onClickTab: function () { },
    safeArea: true
};

var ClStep = /** @class */ (function (_super) {
    __extends(ClStep, _super);
    function ClStep() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    ClStep.prototype.render = function () {
        var _this = this;
        var stepTypeClassName = this.props.type === 'arrow' ? 'steps-arrow' : '';
        var activeColorClassName = this.props.activeColor
            ? TEXT_COLOR_LIST[this.props.activeColor]
            : '';
        var step = this.props.step || 0;
        var tabsComponents = this.props.steps.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-item " + (step > index ? activeColorClassName : ''), key: index },
            _this.props.stepTitlePosition === 'top' ? item.title : '',
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: (_this.props.stepIconType === 'number' ? 'num' : '') + " " + (_this.props.stepIconType === 'custom' ? 'cuIcon-' + item.icon : ''), "data-index": index + 1 }),
            _this.props.stepTitlePosition === 'bottom' ? item.title : '')); });
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-steps " + stepTypeClassName + "  " + (this.props.stepTitlePosition === 'top' ? 'steps-bottom' : ''), this.props.className), style: Object.assign({}, this.props.style) }, tabsComponents));
    };
    ClStep.options = {
        addGlobalClass: true
    };
    ClStep.defaultProps = {
        steps: [],
        type: 'line',
        activeColor: 'blue',
        step: 0,
        stepIconType: 'number',
        stepTitlePosition: 'bottom'
    };
    return ClStep;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));

function ClSwiper(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.list || []), 2), listState = _a[0], setListState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var list = props.list || [];
        setListState(list.map(function (item) {
            item.cu_swiper_id = generateId();
            return item;
        }));
    }, [props.list]);
    var swiperTypeClassName = function (type) {
        return type ? type + "-swiper" : 'screen-swiper';
    };
    var dotClassName = function (type) { return (type === 'round' ? type + "-dot" : 'square-dot'); };
    var duration = props.duration || 500;
    var interval = props.interval || 5000;
    var indicatorDots = !!props.indicatorDots;
    var indicatorColor = props.indicatorColor || '#000';
    var indicatorActiveColor = props.indicatorActiveColor || '#FFF';
    var circular = !!props.circular;
    var autoplay = function (autoplayData) { return !!autoplayData; };
    var loop = function (loopData) { return !!loopData; };
    var muted = function (mutedData) { return !!mutedData; };
    var showPlayBtn = function (showPlayBtnData) { return !!showPlayBtnData; };
    var controls = function (controlsData) { return !!controlsData; };
    var title = function (titleData) { return titleData; };
    var poster = function (posterData) { return posterData; };
    var list = listState || [];
    var autoplaySwiper = props.autoplay;
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), cur = _b[0], setCur = _b[1];
    var onChange = function (e) {
        var current = e.detail.current;
        setCur(current);
        props.onChange && props.onChange(current);
    };
    var onClick = function (index) {
        props.onClick && props.onClick(index);
    };
    // const onTouchMove = e => {}
    // const onTouchStart = e => {}
    // const onTouchEnd = e => {}
    var renderImg = function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "e"], { src: item.url || '', mode: 'aspectFill' })); };
    var renderVideo = function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Video */ "r"], { src: item.url || '', autoplay: autoplay(item.autoplay), loop: loop(item.loop), muted: muted(item.muted), showPlayBtn: showPlayBtn(item.showPlayBtn), controls: controls(item.controls), objectFit: 'cover', title: title(item.title), poster: poster(item.poster) })); };
    var screenComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Swiper */ "m"], { className: classNames(dotClassName(props.dot) + " " + swiperTypeClassName(props.type), props.className), style: Object.assign({}, props.style), circular: circular, indicatorDots: indicatorDots, indicatorColor: indicatorColor, indicatorActiveColor: indicatorActiveColor, interval: interval, duration: duration, onChange: onChange, autoplay: autoplaySwiper }, list.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "n"], { key: 'key-' + index, onClick: function () {
            onClick(index);
        } },
        item.type !== 'video' ? renderImg(item) : '',
        item.type === 'video' ? renderVideo(item) : '')); })));
    var cardComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Swiper */ "m"], { className: classNames(dotClassName(props.dot) + " " + swiperTypeClassName(props.type), props.className), style: Object.assign({}, props.style), circular: circular, indicatorDots: indicatorDots, indicatorColor: indicatorColor, indicatorActiveColor: indicatorActiveColor, interval: interval, duration: duration, onChange: onChange, autoplay: autoplaySwiper, nextMargin: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(isAliPay ? 70 * screenPercent : 70), previousMargin: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(isAliPay ? 70 * screenPercent : 70) }, list.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "n"], { key: 'key-' + index, className: "" + (cur === index ? 'cur' : ''), onClick: function () {
            onClick(index);
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'swiper-item' },
            item.type === 'image' ? renderImg(item) : '',
            item.type === 'video' ? renderVideo(item) : ''))); })));
    // const towerComponent = (
    //   <View className={swiperTypeClassName(props.type)} onTouchMove={onTouchMove} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
    //     <View className={`tower-item ${}`}></View>
    //   </View>
    // );
    return props.type === 'card' ? cardComponent : screenComponent;
}
ClSwiper.options = {
    addGlobalClass: true
};
ClSwiper.defaultProps = {
    autoplay: false,
    type: 'screen',
    list: [],
    dot: 'square',
    duration: 500,
    onClick: function () { },
    indicatorDots: false,
    indicatorColor: '#000',
    indicatorActiveColor: '#FFF',
    interval: 5000,
    circular: false,
    onChange: function () { }
};

var ClSwitch_h5 = /** @class */ (function (_super) {
    __extends(ClSwitch_h5, _super);
    function ClSwitch_h5(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checkedSwitch: !!_this.props.checked
        };
        return _this;
    }
    ClSwitch_h5.prototype.onChange = function (flag) {
        this.props.onChange && this.props.onChange(flag);
    };
    ClSwitch_h5.prototype.render = function () {
        var _this = this;
        var title = this.props.title;
        var color = this.props.color || 'green';
        var shapeClassName = this.props.shape !== 'radius' ? '' : 'radius';
        var type = this.props.type === 'form' ? 'form' : 'normal';
        var checkedSwitch = this.state.checkedSwitch;
        var switchComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                'h5-switch',
                color,
                {
                    checked: checkedSwitch,
                    disabled: this.props.disabled
                },
                this.props.className
            ]), style: Object.assign({}, this.props.style), onClick: function () {
                if (!_this.props.disabled) {
                    var currentCheck = !checkedSwitch;
                    _this.setState({
                        checkedSwitch: currentCheck
                    });
                    _this.onChange(currentCheck);
                }
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "h5-switch-input sm " + shapeClassName })));
        var formSwitchComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames('cu-form-group', this.props.className), style: Object.assign({}, this.props.style) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'title' }, title),
            switchComponent));
        return type === 'form' ? formSwitchComponent : switchComponent;
    };
    ClSwitch_h5.options = {
        addGlobalClass: true
    };
    ClSwitch_h5.defaultProps = {
        title: '',
        color: 'green',
        shape: 'normal',
        type: 'normal',
        checked: false,
        onChange: function () { }
    };
    return ClSwitch_h5;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function ClSwitch(props) {
    var title = props.title;
    var color = props.color || 'green';
    var shapeClassName = props.shape !== 'radius' ? '' : 'radius';
    var type = props.type === 'form' ? 'form' : 'normal';
    var checked = !!props.checked;
    var hasChecked = checked ? 'checked' : '';
    var onChange = function (e) {
        props.onChange && props.onChange(e.detail.value);
    };
    var switchComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ "o"], { className: classNames(color + " " + hasChecked + " " + shapeClassName + " sm", props.className), style: Object.assign({}, props.style), checked: checked, onChange: onChange, disabled: props.disabled }));
    var formSwitchComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames('cu-form-group', props.className), style: Object.assign({}, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'title' }, title),
        switchComponent));
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClSwitch_h5, __assign({}, this.props))) : type === 'form' ? (formSwitchComponent) : (switchComponent);
}
ClSwitch.options = {
    addGlobalClass: true
};

var ClTabBar = /** @class */ (function (_super) {
    __extends(ClTabBar, _super);
    function ClTabBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeIndex: 0
        };
        _this.options = {
            addGlobalClass: true
        };
        _this.defaultProps = {
            bgColor: 'white',
            activeColor: 'blue',
            active: 0,
            tabs: [],
            safeArea: true
        };
        return _this;
    }
    ClTabBar.prototype.onClick = function (index) {
        var props = this.props;
        this.setState({
            activeIndex: index
        });
        props.onClick && props.onClick(index);
    };
    ClTabBar.prototype.componentWillReceiveProps = function (prevProps) {
        if (prevProps.active !== this.props.active) {
            this.setState({ activeIndex: this.props.active });
        }
    };
    ClTabBar.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var colorClassName = props.bgColor
            ? BG_COLOR_LIST[props.bgColor]
            : 'bg-white';
        var activeColorClassName = props.activeColor
            ? TEXT_COLOR_LIST[props.activeColor]
            : 'text-blue';
        var barComponent = props.tabs.map(function (item, index) {
            var _a;
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                    _this.onClick(index);
                }, key: 'key-' + item.icon, className: "action " + (item.action ? 'add-action' : '') + " " + (_this.state.activeIndex === index ? activeColorClassName : '') },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                        (_a = { 'cuIcon-cu-image': item.img }, _a["cuIcon-" + item.icon] = item.icon, _a)
                    ]) },
                    item.img ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "e"], { mode: 'aspectFit', src: item.img }) : '',
                    item.badge !== false ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-tag badge' }, isNumber(item.badge) ? item.badge : '')) : ('')),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], null, item.title)));
        });
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                'cu-bar tabbar',
                {
                    'safe-area': props.safeArea
                },
                colorClassName
            ], props.className), style: Object.assign(props.fix
                ? { position: 'fixed', width: '100vw', bottom: '0', zIndex: 10 }
                : {}, props.style) }, barComponent));
    };
    return ClTabBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
// export default function ClTabBar(
//   props: IProps = {
//     bgColor: 'white',
//     activeColor: 'blue',
//     active: 0,
//     tabs: [],
//     safeArea: true
//   }
// ) {
//   const [activeIndex, setActiveIndex] = useState(props.active)
//
//   useEffect(() => {
//     setActiveIndex(props.active || 0)
//   }, [props.active])
//
//   const onClick = (index: number) => {
//     setActiveIndex(index)
//     props.onClick && props.onClick(index)
//   }
//
//   const colorClassName = props.bgColor
//     ? BG_COLOR_LIST[props.bgColor]
//     : 'bg-white'
//   const activeColorClassName = props.activeColor
//     ? TEXT_COLOR_LIST[props.activeColor]
//     : 'text-blue'
//   const barComponent = props.tabs.map((item, index) => (
//     <View
//       onClick={() => {
//         onClick(index)
//       }}
//       key={'key-' + item.icon}
//       className={`action ${item.action ? 'add-action' : ''} ${
//         activeIndex === index ? activeColorClassName : ''
//       }`}
//     >
//       <View
//         className={classNames([
//           { 'cuIcon-cu-image': item.img, [`cuIcon-${item.icon}`]: item.icon }
//         ])}
//       >
//         {item.img ? <Image mode='aspectFit' src={item.img} /> : ''}
//         {item.badge !== false ? (
//           <View className='cu-tag badge'>
//             {isNumber(item.badge) ? item.badge : ''}
//           </View>
//         ) : (
//           ''
//         )}
//       </View>
//       <Text>{item.title}</Text>
//     </View>
//   ))
//   return (
//     <View
//       className={classNames(
//         [
//           'cu-bar tabbar',
//           {
//             'safe-area': props.safeArea
//           },
//           colorClassName
//         ],
//         props.className
//       )}
//       style={Object.assign(
//         props.fix
//           ? { position: 'fixed', width: '100vw', bottom: '0', zIndex: 10 }
//           : {},
//         props.style
//       )}
//     >
//       {barComponent}
//     </View>
//   )
// }
// ClTabBar.options = {
//   addGlobalClass: true
// }

var move = 0;
var scrollLeftContent = 0;
var duration = 0.3;
var distance = 0;
var ClTabs = /** @class */ (function (_super) {
    __extends(ClTabs, _super);
    function ClTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeTab: 0,
            scrollLeft: 0,
            contentScrollLeft: 0
        };
        return _this;
    }
    ClTabs.prototype.componentDidMount = function () {
        this.props.tabs.length && this.onClickTab(this.props.active || 0);
    };
    ClTabs.prototype.componentWillReceiveProps = function (nextProps) {
        var nextActive = nextProps.active;
        var thisActive = this.props.active;
        if (nextActive !== thisActive) {
            this.onClickTab(nextActive || 0);
        }
    };
    ClTabs.prototype.onClickTab = function (index) {
        var _this = this;
        var id = this.props.tabs[index].id;
        var id0 = this.props.tabs[0].id;
        var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
        var view = query.select("#" + id);
        var view0 = query.select("#" + id0);
        var left = 0;
        var promise = new Promise(function (resolve) {
            new Promise(function (resolve1) {
                view0.boundingClientRect().exec(function (res) {
                    var data = res[0];
                    left = data.left;
                    resolve1();
                });
            }).then(function () {
                view.boundingClientRect().exec(function (res) {
                    var data = res[getRectNumber()];
                    if (isAliPay) {
                        left = data.width * index;
                    }
                    else {
                        left = Math.abs(left - data.left);
                    }
                    resolve(left);
                });
            });
        });
        promise.then(function () {
            _this.setState({
                activeTab: index,
                scrollLeft: (index - 1) * 60,
                contentScrollLeft: left + Math.random() / 10
            });
        });
        this.props.onClick && this.props.onClick(index);
    };
    ClTabs.prototype.renderDefaultComponent = function (paramters) {
        var _this = this;
        var bgColorClassName = paramters.bgColorClassName, activeColor = paramters.activeColor, tabs = paramters.tabs, activeTab = paramters.activeTab, scrollLeft = paramters.scrollLeft;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollX: true, className: bgColorClassName + " nav", scrollWithAnimation: true, scrollLeft: scrollLeft }, tabs.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: index, className: "cu-item " + (activeTab === index ? activeColor + " cur" : ''), onClick: _this.onClickTab.bind(_this, index) },
            item.icon ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "cuIcon-" + item.icon + " margin-right-xs" })) : (''),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], null, item.text))); })));
    };
    ClTabs.prototype.renderVerbComponent = function (paramters) {
        var _this = this;
        var bgColorClassName = paramters.bgColorClassName, activeColor = paramters.activeColor, tabs = paramters.tabs, activeTab = paramters.activeTab;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollX: true, className: bgColorClassName + " nav" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'flex text-center' }, tabs.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: index, className: "cu-item flex-sub " + (activeTab === index ? activeColor + " cur" : ''), onClick: _this.onClickTab.bind(_this, index) },
                item.icon ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "cuIcon-" + item.icon + " margin-right-xs" })) : (''),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], null, item.text))); }))));
    };
    ClTabs.prototype.renderCenterComponent = function (paramters) {
        var _this = this;
        var bgColorClassName = paramters.bgColorClassName, activeColor = paramters.activeColor, tabs = paramters.tabs, activeTab = paramters.activeTab;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollX: true, className: bgColorClassName + " nav text-center" }, tabs.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: index, className: "cu-item " + (activeTab === index ? activeColor + " cur" : ''), onClick: _this.onClickTab.bind(_this, index) },
            item.icon ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "cuIcon-" + item.icon + " margin-right-xs" })) : (''),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], null, item.text))); })));
    };
    ClTabs.prototype.render = function () {
        var _this = this;
        var contentScrollLeft = this.state.contentScrollLeft;
        var bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : '';
        var activeColor = this.props.activeColor
            ? TEXT_COLOR_LIST[this.props.activeColor]
            : '';
        // 空组件镇压邪魔
        var centerComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null);
        var renderComponent = function () {
            var _a = _this.props, type = _a.type, tabs = _a.tabs;
            var _b = _this.state, activeTab = _b.activeTab, scrollLeft = _b.scrollLeft;
            var defaultParameter = {
                bgColorClassName: bgColorClassName,
                activeColor: activeColor,
                tabs: tabs,
                activeTab: activeTab,
                scrollLeft: scrollLeft
            };
            if (type === 'default')
                return _this.renderDefaultComponent(defaultParameter);
            else if (type === 'verb')
                return _this.renderVerbComponent(defaultParameter);
            else if (type === 'center')
                return _this.renderCenterComponent(defaultParameter);
            else
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null);
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(this.props.className), style: Object.assign({ overflow: 'hidden' }, this.props.style) },
            centerComponent,
            renderComponent(),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'scrollx', style: {
                        width: 'auto',
                        transform: "translateX(-" + Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(contentScrollLeft / screenPercent) + ")",
                        transitionDuration: duration + "s"
                    }, onTouchStart: function (e) {
                        if (!_this.props.touchMove)
                            return;
                        scrollLeftContent = 0;
                        duration = 0;
                        move = e.touches[0].pageX;
                    }, onTouchMove: function (e) {
                        if (!_this.props.touchMove)
                            return;
                        if (scrollLeftContent === 0)
                            scrollLeftContent = e.touches[0].pageX;
                        distance = e.touches[0].pageX - scrollLeftContent;
                        _this.setState({
                            contentScrollLeft: contentScrollLeft - distance
                        });
                        scrollLeftContent = e.touches[0].pageX;
                    }, onTouchEnd: function (e) {
                        if (!_this.props.touchMove)
                            return;
                        duration = 0.3;
                        var changedTouches = e.changedTouches[0];
                        move = changedTouches.pageX - move;
                        var maxIndex = _this.props.tabs.length - 1;
                        if (move < -50)
                            _this.onClickTab(_this.state.activeTab + 1 > maxIndex
                                ? maxIndex
                                : _this.state.activeTab + 1);
                        else if (move > 50)
                            _this.onClickTab(_this.state.activeTab - 1);
                        else
                            _this.onClickTab(_this.state.activeTab);
                    } }, this.props.children))));
    };
    ClTabs.options = {
        addGlobalClass: true
    };
    ClTabs.defaultProps = {
        type: 'default',
        bgColor: undefined,
        activeColor: 'black',
        active: 0,
        tabs: [],
        touchMove: false
    };
    return ClTabs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var ClTag = /** @class */ (function (_super) {
    __extends(ClTag, _super);
    function ClTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClTag.prototype.onClick = function (index) {
        this.props.onClick && this.props.onClick(index);
    };
    ClTag.prototype.render = function () {
        var _this = this;
        var shapeClassName = this.props.shape
            ? this.props.shape === 'normal'
                ? ''
                : this.props.shape
            : '';
        var colorClassName = function (color) {
            return BG_COLOR_LIST[color || 'blue'];
        };
        var plainClassName = function (color) {
            return "line-" + color;
        };
        var sizeClassName = function () {
            if (_this.props.size === 'normal')
                return '';
            else
                return 'sm';
        };
        var badgeClassName = function (badge) {
            return badge ? 'badge' : '';
        };
        var normalComponent;
        var capsuleComponent;
        if (this.props.tags.length > 0) {
            var tag = this.props.tags[0];
            normalComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-tag " + shapeClassName + " " + (tag.plain ? plainClassName(tag.color) : colorClassName(tag.color)) + " " + sizeClassName() + " " + badgeClassName(this.props.badge), this.props.className), style: Object.assign({ overflow: 'hidden' }, this.props.style) },
                tag.icon ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: tag.icon, size: 'inherit', style: {
                        paddingRight: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(8)
                    } })) : (''),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { style: {
                        height: 'inherit',
                        lineHeight: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(this.props.size === 'normal' ? 48 : 40)
                    } }, tag.text)));
            this.props.tags.length > 1 &&
                (capsuleComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-capsule " + shapeClassName + "  " + sizeClassName(), this.props.className), style: Object.assign({ overflow: 'hidden' }, this.props.style) }, this.props.tags.map(function (tag, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: tag.text, className: "cu-tag " + (tag.plain
                        ? plainClassName(tag.color)
                        : colorClassName(tag.color)), onClick: _this.onClick.bind(_this, index) },
                    tag.icon ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: tag.icon, size: 'inherit', style: {
                            paddingRight: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(8)
                        } })) : (''),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { style: {
                            height: 'inherit',
                            lineHeight: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(_this.props.size === 'normal' ? 48 : 40)
                        } }, tag.text))); }))));
        }
        return this.props.tags.length > 1 ? capsuleComponent : normalComponent;
    };
    ClTag.options = {
        addGlobalClass: true
    };
    ClTag.defaultProps = {
        shape: 'normal',
        size: 'normal',
        tags: []
    };
    return ClTag;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

function ClTimeline(props) {
    var times = props.times || [];
    var iconColorClassName = function (color) { return (color ? TEXT_COLOR_LIST[color] : ''); };
    var iconClassName = function (icon) { return (icon ? "cuIcon-" + icon : ''); };
    var bgColorClassName = function (color) { return (color ? BG_COLOR_LIST[color] : ''); };
    var onClick = function (index) {
        props.onClick && props.onClick(index);
    };
    var items = times.map(function (item, index) {
        return item.node ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-time', key: generateId(), onClick: function () {
                onClick(index);
            } }, item.node)) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-item " + iconColorClassName(item.iconColor) + " " + iconClassName(item.icon), key: generateId(), onClick: function () {
                onClick(index);
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: bgColorClassName(item.bgColor) + " content" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { justify: 'between', align: 'end' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: { fontSize: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(36) } }, item.title),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null, item.time)),
                item.content
                    ? item.content.map(function (desc, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: 'key-' + index }, desc)); })
                    : '')));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames('cu-timeline', props.className), style: Object.assign({}, props.style) }, items));
}
ClTimeline.options = {
    addGlobalClass: true
};
ClTimeline.defaultProps = {
    times: [],
    onClick: function () { }
};

var ClTitleBar = /** @class */ (function (_super) {
    __extends(ClTitleBar, _super);
    function ClTitleBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClTitleBar.prototype.render = function () {
        var textColorClassName = this.props.textColor
            ? "text-" + this.props.textColor
            : "";
        var borderColorClassName = this.props.borderColor
            ? BG_COLOR_LIST[this.props.borderColor]
            : 'bg-green';
        var bgColorClassName = this.props.bgColor
            ? BG_COLOR_LIST[this.props.bgColor]
            : "bg-white";
        var iconClassName = this.props.icon ? "cuIcon-" + this.props.icon : "";
        var iconColorClassName = this.props.iconColor
            ? "text-" + this.props.iconColor
            : "";
        var borderComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action border-title justify-between' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: textColorClassName + " text-bold text-xl" }, this.props.title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "" + borderColorClassName, style: { width: "" + Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(this.props.borderLong || 20) } })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null, this.props.renderRight)));
        var subComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action sub-title justify-between' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "text-xl text-bold " + textColorClassName }, this.props.title),
                this.props.subTitle ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "text-" + this.props.subTitleColor }, this.props.subTitle)) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "" + borderColorClassName }))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null, this.props.renderRight)));
        var iconComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'action justify-between' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: iconClassName + " " + iconColorClassName }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: "text-xl text-bold " + textColorClassName }, this.props.title)),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null, this.props.renderRight)));
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(bgColorClassName + " cu-bar", this.props.className), style: Object.assign({}, this.props.style) },
            this.props.type === 'border-title' ? borderComponent : '',
            this.props.type === 'sub-title' ? subComponent : '',
            this.props.type === 'icon' ? iconComponent : ''));
    };
    ClTitleBar.options = {
        addGlobalClass: true
    };
    ClTitleBar.defaultProps = {
        bgColor: 'white',
        textColor: 'green',
        type: 'border-title',
        borderLong: 20,
        borderColor: 'green',
        icon: 'title',
        iconColor: 'green',
        title: '',
        subTitle: '',
        subTitleColor: 'gray'
    };
    return ClTitleBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var ClImagePicker = /** @class */ (function (_super) {
    __extends(ClImagePicker, _super);
    function ClImagePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            imgList: props.imgList || []
        };
        return _this;
    }
    ClImagePicker.prototype.ChooseImage = function () {
        var _this = this;
        var _a = this.props, chooseImgObj = _a.chooseImgObj, max = _a.max;
        var imgList = this.state.imgList;
        var maxPic = max || 0;
        var chooseImg = chooseImgObj;
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.chooseImage({
            count: chooseImg.count || 9,
            sizeType: chooseImg.sizeType || ['original', 'compressed'],
            sourceType: chooseImg.sourceType || ['album'],
            success: function (res) {
                var selectArray = res.tempFilePaths.map(function (url) { return ({
                    url: url,
                    status: 'none'
                }); });
                selectArray.forEach(function (item) {
                    if (!imgList.find(function (obj) { return item.url === obj.url; })) {
                        if (maxPic) {
                            maxPic > imgList.length && imgList.push(item);
                        }
                        else {
                            imgList.push(item);
                        }
                    }
                });
                _this.setState({
                    imgList: imgList
                });
                chooseImg.success && chooseImg.success.call(_this, imgList);
            },
            fail: function () {
                chooseImg.fail && chooseImg.fail.call(this, imgList);
            },
            complete: function () {
                chooseImg.complete && chooseImg.complete.call(this, imgList);
            }
        });
    };
    ClImagePicker.prototype.viewImage = function (url) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.previewImage({
            urls: this.state.imgList.map(function (item) { return item.url; }),
            current: url
        });
    };
    ClImagePicker.prototype.delImg = function (index) {
        var _this = this;
        var flag = true;
        var imgList = this.state.imgList;
        var del = function (index) {
            imgList.splice(index, 1);
            _this.setState({
                imgList: imgList
            });
        };
        new Promise(function (resolve) {
            if (_this.props.beforeDel) {
                resolve(_this.props.beforeDel(index));
            }
            else {
                del(index);
            }
        }).then(function (res) {
            flag = res;
            if (flag) {
                del(index);
            }
        });
    };
    ClImagePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, style = _a.style, max = _a.max;
        var imgList = this.state.imgList;
        // const chooseImg = chooseImgObj || {};
        var maxPic = max || 0;
        var imgComponent = imgList.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'padding-xs bg-img bg-gray', key: item.url, style: { borderRadius: '6px', position: 'relative' }, onClick: function () {
                _this.viewImage.call(_this, item.url);
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "e"], { src: item.url, mode: 'widthFix', style: {
                    width: '100%',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    right: '0',
                    bottom: '0',
                    transform: 'translate(-50%, -50%)'
                } }),
            item.status === 'none' && !item.disabled ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-tag bg-red', onClick: function (e) {
                    e.stopPropagation();
                    _this.delImg.call(_this, index);
                }, style: {
                    backgroundColor: 'rgba(355, 355, 355, 0.8)'
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'close', color: 'black', size: 'xsmall' }))) : (''),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-tag', style: {
                    backgroundColor: 'rgba(355, 355, 355, 0.8)',
                    display: "" + (item.status === 'fail' ? '' : 'none')
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'warnfill', size: 'xsmall', color: 'red' })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-tag', style: {
                    backgroundColor: 'rgba(355, 355, 355, 0.8)',
                    display: "" + (item.status === 'success' ? '' : 'none')
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'roundcheckfill', size: 'xsmall', color: 'olive' })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-tag', style: {
                    backgroundColor: 'rgba(355, 355, 355, 0.8)',
                    display: "" + (item.status === 'loading' ? '' : 'none')
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'imagePicker-rotate-360' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'loading', size: 'xsmall', color: 'blue' }))))); });
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames('cu-form-group', className), style: Object.assign({}, style) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'grid col-4 grid-square flex-sub' },
                imgComponent,
                (maxPic === 0 || maxPic !== imgList.length) && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'padding-xs bg-gray', onClick: this.ChooseImage.bind(this), style: { borderRadius: '6px' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { className: 'cuIcon-cameraadd' }))))));
    };
    ClImagePicker.options = {
        addGlobalClass: true
    };
    ClImagePicker.defaultProps = {
        beforeDel: function () { return true; },
        max: 0
    };
    return ClImagePicker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));
// export default function ClImagePicker(props: IProps) {
//   const chooseImgObj = props.chooseImgObj || {};
//   const maxPic = props.max || 0;
//   const [imgList, setImgList] = useState(() => {
//     const tempImg = props.imgList || [];
//     return [...tempImg];
//   });
//   const ChooseImage = () => {
//     Taro.chooseImage({
//       count: chooseImgObj.count || 9,
//       sizeType: chooseImgObj.sizeType || ["original", "compressed"],
//       sourceType: chooseImgObj.sourceType || ["album"],
//       success: res => {
//         console.log(res);
//         const selectArray: imgListType = res.tempFilePaths.map(url => ({
//           url,
//           status: "none"
//         }));
//         selectArray.forEach(item => {
//           if (!imgList.find(obj => item.url === obj.url)) {
//             if (maxPic) {
//               maxPic > imgList.length && imgList.push(item);
//             } else {
//               imgList.push(item);
//             }
//           }
//         });
//         setImgList(imgList);
//         chooseImgObj.success && chooseImgObj.success.call(this, imgList);
//       },
//       fail() {
//         chooseImgObj.fail && chooseImgObj.fail.call(this, imgList);
//       },
//       complete() {
//         chooseImgObj.complete && chooseImgObj.complete.call(this, imgList);
//       }
//     });
//   };
//   const viewImage = (url: string) => {
//     Taro.previewImage({
//       urls: imgList.map(item => item.url),
//       current: url
//     });
//   };
//   const delImg = (index: number) => {
//     let flag = true;
//     const del = (index: number) => {
//       imgList.splice(index, 1);
//       setImgList(imgList);
//     };
//     new Promise(resolve => {
//       if (props.beforeDel) {
//         resolve(props.beforeDel(index));
//       } else {
//         del(index);
//       }
//     }).then((res: boolean) => {
//       flag = res;
//       if (flag) {
//         del(index);
//       }
//     });
//   };
//   const imgComponent = imgList.map((item, index) => (
//     <View
//       className="padding-xs bg-img bg-gray"
//       key={item.url}
//       style={{ borderRadius: "6px", position: "relative" }}
//       onClick={() => {
//         viewImage(item.url);
//       }}
//     >
//       <Image
//         src={item.url}
//         mode="widthFix"
//         style={{
//           width: "100%",
//           position: "absolute",
//           left: "0",
//           top: "0",
//           right: "0",
//           bottom: "0",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center"
//         }}
//       />
//       {item.status === "none" ? (
//         <View
//           className="cu-tag bg-red"
//           onClick={e => {
//             e.stopPropagation();
//             delImg(index);
//           }}
//           style={{ backgroundColor: "rgba(355, 355, 355, 0.8)" }}
//         >
//           <ClIcon iconName="close" color="black" size="xsmall" />
//         </View>
//       ) : (
//         ""
//       )}
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "fail" ? "" : "none"}`
//           }}
//         >
//           <ClIcon iconName="warnfill" size="xsmall" color="red" />
//         </View>
//       }
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "success" ? "" : "none"}`
//           }}
//         >
//           <ClIcon iconName="roundcheckfill" size="xsmall" color="olive" />
//         </View>
//       }
//       {
//         <View
//           className="cu-tag"
//           style={{
//             backgroundColor: "rgba(355, 355, 355, 0.8)",
//             display: `${item.status === "loading" ? "" : "none"}`
//           }}
//         >
//           <View className="imagePicker-rotate-360">
//             <ClIcon iconName="loading" size="xsmall" color="blue" />
//           </View>
//         </View>
//       }
//     </View>
//   ));
//   return (
//     <View
//       className={classNames("cu-form-group", props.className)}
//       style={Object.assign({}, props.style)}
//     >
//       <View className="grid col-4 grid-square flex-sub">
//         {imgComponent}
//         {(maxPic === 0 || maxPic !== imgList.length) && (
//           <View
//             className="padding-xs bg-gray"
//             onClick={ChooseImage}
//             style={{ borderRadius: "6px" }}
//           >
//             <Text className="cuIcon-cameraadd" />
//           </View>
//         )}
//       </View>
//     </View>
//   );
// }
// ClImagePicker.defaultProps = {
//   beforeDel: index => true,
//   max: 0
// } as IProps;
// ClImagePicker.options = {
//   addGlobalClass: true
// };

function ClGrid(props) {
    var colClassName = "col-" + props.col;
    var squareClassName = props.mode === 'square' ? 'grid-square' : '';
    var gridComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("grid " + colClassName + " " + squareClassName, props.className), style: Object.assign({}, props.style) }, props.children));
    return gridComponent;
}
ClGrid.options = {
    addGlobalClass: true
};
ClGrid.defaultProps = {
    col: 3,
    mode: 'normal'
};

function ClAnimation(props) {
    var type = props.type;
    var reverse = props.reverse ? "animation-reverse" : "";
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classnames("animation-" + type + " " + reverse, props.className), style: Object.assign({
            animationDelay: props.delay + "s",
            animationDuration: props.duration + "s"
        }, props.style), onAnimationStart: function (e) {
            props.onAnimationStart && props.onAnimationStart(e);
        }, onAnimationEnd: function (e) {
            props.onAnimationEnd && props.onAnimationEnd(e);
        } }, props.children));
}
ClAnimation.options = {
    addGlobalClass: true
};
ClAnimation.defaultProps = {
    type: "fade",
    reverse: false,
    delay: 0,
    duration: 0.5
};

var scrollTimer = undefined;
function ClVerticalTab(props) {
    var scrollTab = false;
    var id = '';
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.tabs || []), 2), tabsState = _a[0], setTabsState = _a[1];
    var currentId = props.current ? props.current : props.tabs[0].id;
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(currentId), 2), current = _b[0], setCurrent = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tabsState.findIndex(function (item) { return item.name === props.tabs[0].name; })), 2), verticalNavTop = _c[0], setVerticalNavTop = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(currentId), 2), scrollId = _d[0], setScrollId = _d[1];
    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), scrollContent = _e[0], setScrollContent = _e[1];
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), clickTab = _f[0], setClickTab = _f[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var list = props.tabs || [];
        setTabsState(list.map(function (item) {
            item.cu_vertical_tab_id = generateId();
            return item;
        }));
    }, [props.tabs]);
    var tabs = tabsState || [];
    // const [scrollTimer, setScrollTimer] = useState(0);
    var isH5 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB;
    var onScroll = function (e) {
        if (clickTab)
            return;
        var tabHeight = 0;
        var _loop_1 = function (i) {
            var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
            var view = query.select('#' + tabs[i].id);
            view.boundingClientRect().exec(function (res) {
                var data = res[0];
                tabs[i].top = tabHeight;
                tabHeight = tabHeight + data.height;
                tabs[i].bottom = tabHeight;
            });
        };
        for (var i = 0; i < tabs.length; i++) {
            _loop_1(i);
        }
        var scrollTop = e.detail.scrollTop + 20;
        isH5 && setScrollContent(e.detail.scrollTop);
        if (!scrollTab) {
            for (var i = 0; i < tabs.length; i++) {
                if (scrollTop > (tabs[i].top || 0) &&
                    scrollTop < (tabs[i].bottom || 0)) {
                    // console.log(i)
                    setVerticalNavTop(i);
                    setCurrent(tabs[i].id);
                    return false;
                }
            }
        }
    };
    var onH5Scroll = function (e) {
        if (clickTab)
            return;
        if (scrollTimer)
            clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
            onScroll(e);
            clearTimeout(scrollTimer);
        }, 300);
    };
    var tabsComponent = tabs.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.cu_vertical_tab_id, className: "cu-item " + (current === item.id ? 'cur' : ''), onClick: function () {
            id = item.id;
            scrollTab = true;
            changeTop(id);
            setCurrent(item.id);
            setVerticalNavTop(tabs.findIndex(function (tab) { return tab.name === item.name; }));
            setClickTab(true);
            !isH5 && setScrollId(item.id);
            setTimeout(function () {
                setClickTab(false);
            }, 800);
        } }, item.name)); });
    var changeTop = function (id) {
        var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
        var view = query.select('#' + id);
        var topView = query.select('#' + tabs[0].id);
        var top = 0;
        new Promise(function (resolve) {
            topView.boundingClientRect().exec(function (res) {
                var data = res[0];
                resolve(data.top);
            });
        }).then(function (res) {
            top = res;
            new Promise(function (resolve) {
                view.boundingClientRect().exec(function (res) {
                    var data = res[getRectNumber()];
                    setTimeout(function () {
                        var endTop = Math.abs(top - data.top);
                        setScrollContent(endTop);
                        scrollTab = false;
                        resolve();
                    }, 300);
                });
            });
        });
    };
    var weappComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true, scrollWithAnimation: true, 
        // scrollAnimationDuration={200}
        style: {
            height: props.height === 'full' ? '100%' : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(props.height),
            maxHeight: '100vh',
            width: '100%'
        }, scrollIntoView: scrollId, onScroll: onScroll, scrollTop: isAliPay ? undefined : scrollContent, enableBackToTop: props.backTop }, this.props.children));
    var h5Component = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true, scrollWithAnimation: true, 
        // scrollAnimationDuration={200}
        style: {
            height: props.height === 'full' ? '100%' : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(props.height),
            maxHeight: '100vh',
            width: '100%'
        }, onScroll: onH5Scroll, scrollTop: scrollContent, enableBackToTop: props.backTop }, this.props.children));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames('flex', props.className), style: Object.assign({}, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true, scrollWithAnimation: true, className: 'VerticalNav nav', style: {
                height: props.height === 'full' ? '100%' : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(props.height),
                maxHeight: '100vh'
            }, scrollTop: (verticalNavTop - 1) * screenPercent * 100, enableBackToTop: props.backTop }, tabsComponent),
        isH5 ? h5Component : weappComponent));
}
ClVerticalTab.options = {
    addGlobalClass: true
};
ClVerticalTab.defaultProps = {
    tabs: [{ name: '', id: '' }],
    height: 0,
    current: '',
    backTop: false
};

function ClVerticalTabCell(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCard, null, props.children);
}
ClVerticalTabCell.options = {
    addGlobalClass: true
};

function ClAccordion(props) {
    var open = props.open, title = props.title, animation = props.animation, onClick = props.onClick, card = props.card;
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(open), 2), show = _a[0], setShow = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), height = _b[0], setHeight = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("cl-accordion-content-" + +new Date()), 1), id = _c[0];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (show) {
            var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
            var view = query.select("#" + id);
            view.boundingClientRect().exec(function (res) {
                var data = res[0];
                setHeight(data.height);
            });
        }
        else {
            setHeight(0);
        }
    }, [show]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classnames("cu-list menu", {
            "card-menu": card,
        }, props.className), style: Object.assign({
            overflow: "hidden",
            height: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(98 + height / screenPercent),
            transition: "all " + (animation ? props.speed + "s" : 0) + " linear",
            color: "black",
        }, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-item", onClick: function () {
                onClick && onClick(!show);
                setShow(!show);
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "flex justify-between align-center", style: { width: "100%" } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null, title),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                        transition: "all " + props.speed + "s linear",
                        transform: "rotate(" + (show ? "90deg" : "0") + ")",
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: "right", size: "small" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { id: id, className: "bg-white" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "l"], { scrollY: true, style: {
                    height: props.height ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(props.height) : "100%",
                } }, props.children))));
}
ClAccordion.options = {
    addGlobalClass: true,
};
ClAccordion.defaultProps = {
    open: false,
    title: "",
    animation: true,
    onClick: function () { },
    card: false,
    speed: 0.15,
    height: 0,
};

var tempPageX = 0;
var tempPageY = 0;
var pageX = 25;
var pageY = 100;
function ClFloatButton(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), show = _a[0], setShow = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), rotate = _b[0], setRotate = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), 2), animation = _c[0], setAnimation = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.actionList), 2), actionListState = _d[0], setActionListState = _d[1];
    var move = props.move, open = props.open, icon = props.icon, bgColor = props.bgColor, iconColor = props.iconColor, direction = props.direction, shadow = props.shadow, shape = props.shape, size = props.size, actionList = props.actionList, onClick = props.onClick, onActionClick = props.onActionClick, closeWithShadow = props.closeWithShadow;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var list = actionList || [];
        setActionListState(list.map(function (item) {
            item.cu_float_button_id = generateId();
            return item;
        }));
    }, [props.actionList]);
    var dealSize = utils.model.SIZE[size || 'normal'];
    var dealBgColor = utils.model.BG_COLOR_LIST[bgColor || 'blue'];
    var dealShadow = shadow ? 'shadow' : '';
    var dealIconColor = iconColor || '';
    var dealActionList = actionListState || [];
    var len = dealActionList.length;
    var type = function () {
        if (direction === 'vertical') {
            return show ? 'slide-bottom' : 'slide-top';
        }
        else {
            return show ? 'slide-right' : 'slide-left';
        }
    };
    var actionListComponent = dealActionList.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.cu_float_button_id, style: { position: show ? 'relative' : 'absolute' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClAnimation, { type: type(), delay: show ? (len - index - 1) / 10 : 0, duration: 0.2 },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'small', paddingDirection: direction === 'vertical' ? 'bottom' : 'right' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-avatar " + shape + " " + dealSize + " " + (item.bgColor
                        ? utils.model.BG_COLOR_LIST[item.bgColor]
                        : dealBgColor) + " " + dealShadow, onClick: function (e) {
                        e.stopPropagation();
                        clickButton();
                        onActionClick && onActionClick(index);
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "" + (item.iconColor || dealIconColor) },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: item.icon, size: size }))))))); });
    var directionClass = direction === 'vertical' ? '' : 'flex';
    var clickButton = function () {
        open && setShow(!show);
        open && setRotate(rotate ? 0 : 45);
    };
    var position = props.position || {
        top: 'auto',
        right: 50,
        bottom: 200,
        left: 'auto'
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("" + (show ? 'float_button__mask' : ''), props.className), style: Object.assign({}, props.style), onClick: function () {
            closeWithShadow && clickButton();
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'float_button__fixed', style: {
                top: position.top && position.top !== 'auto'
                    ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(position.top)
                    : 'auto',
                right: position.right && position.right !== 'auto'
                    ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(position.right)
                    : 'auto',
                bottom: position.bottom && position.bottom !== 'auto'
                    ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(position.bottom)
                    : 'auto',
                left: position.left && position.left !== 'auto'
                    ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(position.left)
                    : 'auto'
            }, animation: animation, onTouchStart: function (e) {
                if (!move)
                    return;
                var touchs = e.touches[0];
                tempPageX = touchs.pageX;
                tempPageY = touchs.pageY;
            }, onTouchMove: function (e) {
                e.stopPropagation();
                if (!move)
                    return;
                var touchs = e.touches[0];
                var newAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createAnimation(animation);
                pageX = pageX - (touchs.pageX - tempPageX);
                pageY = pageY - (touchs.pageY - tempPageY);
                var length = Math.sqrt(Math.pow(pageX, 2) + Math.pow(pageY, 2));
                newAnimation.right(pageX);
                newAnimation.bottom(pageY).step({
                    duration: (13 * length) / 100
                });
                setAnimation(newAnimation.export());
                tempPageX = touchs.pageX;
                tempPageY = touchs.pageY;
            }, onTouchCancel: function (e) {
                e.stopPropagation();
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "float_button__content " + directionClass },
                actionListComponent,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-avatar " + shape + " " + dealSize + " " + dealBgColor + " " + dealShadow, onClick: function (e) {
                        e.stopPropagation();
                        clickButton();
                        onClick && onClick();
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "" + dealIconColor, style: {
                            transform: "rotate(" + rotate + "deg)",
                            transition: 'all 0.15s linear'
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: icon, size: size })))))));
}
ClFloatButton.options = {
    addGlobalClass: true
};
ClFloatButton.defaultProps = {
    move: false,
    open: true,
    icon: 'add',
    bgColor: 'blue',
    iconColor: undefined,
    direction: 'vertical',
    onClick: function () { },
    shadow: true,
    onActionClick: function () { },
    actionList: [],
    size: 'normal',
    shape: 'round',
    closeWithShadow: false,
    position: {
        top: 'auto',
        right: 50,
        bottom: 200,
        left: 'auto'
    }
};

var timer;
var firstTimer;
function ClMessage(props) {
    var tempHeight = 500;
    var _a = props.bgColor, bgColor = _a === void 0 ? "light-grey" : _a, _b = props.type, type = _b === void 0 ? "info" : _b, _c = props.onClose, onClose = _c === void 0 ? function () { } : _c, _d = props.message, message = _d === void 0 ? "" : _d, _e = props.show, show = _e === void 0 ? false : _e, _f = props.duration, duration = _f === void 0 ? 3 : _f;
    var _g = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(show), 2), showMessage = _g[0], setShowMessage = _g[1];
    var _h = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(tempHeight), 2), contentHeight = _h[0], setContentHeight = _h[1];
    var _j = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), tempMessage = _j[0], setTempMessage = _j[1];
    var _k = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), 2), tempType = _k[0], setTempType = _k[1];
    var durationTime = duration || 3;
    var mapColor = {
        success: "light-green",
        error: "light-red",
        warn: "light-yellow",
        info: "light-grey",
        custom: bgColor,
    };
    var calculateHeight = function () {
        var view = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
        var query = view.select("#cl_message_content");
        return new Promise(function (resolve) {
            query.boundingClientRect().exec(function (res) {
                var data = res[0];
                resolve(data === null || data === void 0 ? void 0 : data.height);
            });
        });
    };
    var clickClose = function () {
        new Promise(function (resolve) {
            resolve(calculateHeight());
        }).then(function (res) {
            var height = res;
            clearTimeout(timer);
            timer = null;
            setContentHeight(height);
            setShowMessage(false);
            onClose && onClose();
        });
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        (function () {
            if (!showMessage) {
                new Promise(function (resolve) {
                    resolve(calculateHeight());
                }).then(function (res) {
                    var height = res;
                    tempHeight = height;
                    setContentHeight(tempHeight);
                    setShowMessage(false);
                });
            }
            else {
                tempHeight = 0;
                setTempType(type);
                setTempMessage(message || "");
                if (duration !== 0) {
                    if (timer) {
                        clickClose();
                        clearTimeout(timer);
                        timer = null;
                        return;
                    }
                    timer = setTimeout(function () {
                        clickClose();
                        clearTimeout(timer);
                        timer = null;
                        props.message = "";
                    }, durationTime * 1000);
                }
                setContentHeight(tempHeight);
                setShowMessage(true);
            }
        })();
    }, [showMessage]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        show && setShowMessage(!!show);
        props.show = false;
    }, [show]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (show) {
            clearTimeout(timer);
            clearTimeout(firstTimer);
            timer = null;
            clickClose();
            firstTimer = setTimeout(function () {
                setShowMessage(true);
                setTempMessage(message || "");
                setTempType(type);
                console.log("tempType====>", props.type);
            }, 300);
        }
    }, [message, show]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cu-cl-message", props.className), style: Object.assign({
            transition: "all 0.2s linear",
            top: "" + (showMessage ? "0" : "-" + contentHeight + "px"),
        }, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-cl-message__content", id: "cl_message_content" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCard, { bgColor: mapColor[tempType || 0] || "light-grey", shadow: false },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { justify: "between", align: "center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: tempMessage }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                            clickClose();
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: "close", size: "xsmall" })))))));
}

function ClDivider(props) {
    var color = props.color, size = props.size;
    var colorClassName = TEXT_COLOR_LIST[color || 'grey'];
    var sizeClassName = "text-" + SIZE[size || 'normal'];
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(props.className), style: Object.assign({}, props.style) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'normal', paddingDirection: 'vertical' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: colorClassName + " " + sizeClassName + " cu-divider" }, props.children))));
}
ClDivider.options = {
    addGlobalClass: true
};
ClDivider.defaultProps = {
    color: 'grey',
    size: 'normal'
};

var context = {
    provider: {},
    inject: function (key) {
        return this.provider[key] || null;
    },
    focus: ''
};

var date = {};
var FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(date);
var ClForm = /** @class */ (function (_super) {
    __extends(ClForm, _super);
    function ClForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClForm.prototype.validate = function (fn) {
        var flag = true;
        var _a = this.props, model = _a.model, rules = _a.rules;
        var modelData = model || {};
        var rulesData = rules || {};
        var ruleKeys = Object.keys(rules || {}) || [];
        ruleKeys.forEach(function (key) {
            var ruleFunc = rulesData[key];
            var value = modelData[key];
            flag = flag && ruleFunc(defaultRules, value, function () { });
        });
        return fn(flag);
    };
    ClForm.prototype.render = function () {
        var _a = this.props, model = _a.model, rules = _a.rules;
        context.provider = {
            model: model,
            rules: rules,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(this.props.className), style: Object.assign({}, this.props.style) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormContext.Provider, { value: { model: model, rules: rules } }, this.props.children)));
    };
    ClForm.contextType = FormContext;
    ClForm.defaultProps = {
        model: {},
        rules: {},
    };
    ClForm.options = {
        addGlobalClass: true,
    };
    return ClForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));

function ClFormItem(props) {
    if (props === void 0) { props = {
        prop: "",
        required: false,
    }; }
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), tip = _a[0], setTip = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), err = _b[0], setErr = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), firstInit = _c[0], setFirstInit = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), flag = _d[0], setFlag = _d[1];
    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), 2), message = _e[0], setMessage = _e[1];
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}), 2), beforeModelData = _f[0], setBeforeModelData = _f[1];
    var prop = props.prop, required = props.required;
    var modelData = context.inject("model") || {};
    var rulesData = context.inject("rules") || {};
    console.log("modelData", modelData);
    var value = modelData[prop || ""] || "";
    var ruleFunc = rulesData[prop || ""] ||
        function () {
            return true;
        };
    // let message = ''
    var callback = function (str) {
        if (str === void 0) { str = ""; }
        setMessage(str);
        // message = str
    };
    // let flag = true;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (firstInit)
            setFirstInit(false);
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (firstInit) {
            setBeforeModelData(modelData);
        }
        else {
            Object.keys(modelData).forEach(function (key) {
                if (beforeModelData[key] !== modelData[key] && prop === key) {
                    setFlag(ruleFunc(defaultRules, value, callback));
                }
            });
            setBeforeModelData(modelData);
        }
    }, [modelData]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setErr(!flag);
    }, [flag]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setTip(message);
    }, [message]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(err ? "cu-formItem-err" : "cu-formItem", props.className), style: Object.assign({}, props.style) },
        props.children,
        err ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-formItem-err-tip" }, tip) : "",
        required ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-formItem-required" }) : ""));
}

function ClTip_H5(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.show), 2), showTip = _a[0], setShowTip = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        top: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
        transform: '',
        arrowTransform: ''
    }), 2), distance = _b[0], setDistance = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return "cl-tip-content-" + Math.random().toString().replace('.', ''); }), 1), id = _c[0];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () { return "cl-tip-message-" + Math.random().toString().replace('.', ''); }), 1), idMessage = _d[0];
    var resver2Zero = function (params) {
        distance.top = 'auto';
        distance.left = 'auto';
        distance.right = 'auto';
        distance.bottom = 'auto';
        params.forEach(function (item) {
            distance[item.direction] = item.long + "px";
        });
        return distance;
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setShowTip(props.show);
    }, [props.show]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var idContentQuery = document.querySelector("#" + id);
        var idMessageQuery = document.querySelector("#" + idMessage);
        var systemInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getSystemInfoSync();
        var res = {
            width: idContentQuery.clientWidth,
            height: idContentQuery.clientHeight,
            left: idContentQuery.offsetLeft,
            top: idContentQuery.offsetTop,
            bottom: systemInfo.windowHeight -
                idContentQuery.clientHeight -
                idContentQuery.offsetTop,
            right: systemInfo.windowWidth -
                idContentQuery.clientWidth -
                idContentQuery.offsetLeft
        };
        var messageData = {
            width: idMessageQuery.clientWidth,
            height: idMessageQuery.clientHeight
        };
        var contentWidth = props.width || 100;
        var screenWidth = 750 * screenPercent;
        var customDirection = [];
        var bottomDistance = res.bottom;
        var leftDistance = res.right;
        var sqrt = Math.sqrt(Math.pow(20 * screenPercent, 2) * 2) / 2;
        if (props.direction === 'top') {
            if (res.top < bottomDistance && res.top < messageData.height)
                props.direction = 'bottom';
            customDirection = [{ direction: 'bottom', long: 0 }];
            var translateX = (res.width - contentWidth) / 2;
            if (res.left < res.right && res.left < screenWidth / 2) {
                if (Math.abs(translateX) > res.left)
                    translateX = -res.left;
                distance.transform = "translateX(" + translateX + "px) translateY(-" + (res.height + 10) + "px)";
                distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(0)";
            }
            else {
                var maxRight = screenWidth - res.left;
                if (maxRight < contentWidth)
                    translateX = contentWidth - maxRight;
                distance.transform = "translateX(-" + translateX + "px) translateY(-" + (res.height + 10) + "px)";
                distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(30%)";
            }
        }
        else if (props.direction === 'bottom') {
            console.log(res, messageData);
            if (res.top > bottomDistance && bottomDistance < messageData.height)
                props.direction = 'bottom';
            customDirection = [{ direction: 'left', long: 0 }];
            var translateX = (res.width - contentWidth) / 2;
            if (res.left < res.right && res.left < screenWidth / 2) {
                if (Math.abs(translateX) > res.left)
                    translateX = -res.left;
                distance.transform = "translateX(" + translateX + "px) translateY(" + (res.height + 10) + "px)";
                distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - 10) + "px) rotate(45deg) translateY(0)";
            }
            else {
                var maxRight = screenWidth - res.left;
                if (maxRight < contentWidth)
                    translateX = contentWidth - maxRight;
                distance.transform = "translateX(-" + translateX + "px) translateY(" + (res.height + 10) + "px)";
                distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - 10) + "px) rotate(45deg) translateY(-30%)";
            }
        }
        else if (props.direction === "left") {
            var diffHeight = messageData.height - res.height;
            if (res.left < contentWidth + 10 && leftDistance > res.left)
                props.direction = 'right';
            customDirection = [
                {
                    direction: 'right',
                    long: 0
                }
            ];
            var moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
            var moveBottom = res.top - (messageData.height / 2 - res.height / 2);
            if (moveTop > 0)
                moveTop = 0;
            if (moveBottom > 0)
                moveBottom = 0;
            distance.arrowTransform = "translateY(" + (messageData.height / 2 - moveTop + moveBottom - sqrt) + "px) translateX(30%) rotate(45deg)";
            distance.transform = "translateX(" + (-res.width - 10) + "px) translateY(" + (-diffHeight / 2 + moveTop - moveBottom) + "px)";
        }
        else if (props.direction === 'right') {
            if (leftDistance - 10 < contentWidth && leftDistance < res.left)
                props.direction = 'left';
            var diffHeight = messageData.height - res.height;
            if (res.left < contentWidth + 10)
                props.direction = 'right';
            customDirection = [
                {
                    direction: 'left',
                    long: 0
                }
            ];
            var moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
            var moveBottom = res.top - (messageData.height / 2 - res.height / 2);
            if (moveTop > 0)
                moveTop = 0;
            if (moveBottom > 0)
                moveBottom = 0;
            distance.arrowTransform = "translateY(" + (messageData.height / 2 - moveTop + moveBottom - sqrt) + "px) translateX(-30%) rotate(45deg)";
            distance.transform = "translateX(" + (res.width + 10) + "px) translateY(" + (-diffHeight / 2 + moveTop - moveBottom) + "px)";
        }
        Object.assign(distance, resver2Zero(customDirection));
        setDistance(distance);
    }, [props.width, props.direction, showTip]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { id: id, onClick: function () {
            if (props.mode === 'click') {
                var show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, onTouchStart: function () {
            if (props.mode === 'touch') {
                var show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, onTouchEnd: function () {
            if (props.mode === 'touch') {
                var show = !showTip;
                setShowTip(show);
                props.onChange && props.onChange(show);
            }
        }, className: "cl-tip " + (showTip ? 'cl-tip__showZindex' : ''), style: { position: 'relative', display: 'inline-block' } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { id: idMessage, className: "cl-tip__content  shadow " + (showTip ? 'show' : 'hide') + " " + (showTip ? 'true' : 'false'), style: {
                width: (showTip ? props.width : 0) + "px",
                left: distance.left,
                right: distance.right,
                top: distance.top,
                bottom: distance.bottom,
                transform: distance.transform
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cl-tip__arrow " + props.direction + " " + BG_COLOR_LIST[props.bgColor || 'white'] + " " + (showTip ? 'showArrow' : 'hideArrow'), style: {
                    left: distance.left,
                    right: distance.right,
                    top: distance.top,
                    bottom: distance.bottom,
                    transform: distance.arrowTransform
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cl-tip__message " + BG_COLOR_LIST[props.bgColor || 'white'] },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: { width: props.width + "px", padding: '10px' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: props.message }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function (e) {
                            e.stopPropagation();
                        } }, this.props.renderMessage)))),
        this.props.children));
}
ClTip_H5.defaultProps = {
    show: false,
    direction: 'bottom',
    bgColor: 'white',
    mode: 'touch',
    width: 150
};
ClTip_H5.options = {
    addGlobalClass: true
};

ClTip.defaultProps = {
    show: false,
    direction: "bottom",
    bgColor: "white",
    mode: "touch",
    width: 150,
};
function ClTip(props) {
    var _this = this;
    var _a = props.show, show = _a === void 0 ? false : _a, _b = props.direction, direction = _b === void 0 ? "bottom" : _b, _c = props.bgColor, bgColor = _c === void 0 ? "white" : _c, _d = props.mode, mode = _d === void 0 ? "touch" : _d, _e = props.width, width = _e === void 0 ? 150 : _e;
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(show), 2), showTip = _f[0], setShowTip = _f[1];
    var _g = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        top: "auto",
        left: "auto",
        right: "auto",
        bottom: "auto",
        transform: "",
        arrowTransform: "",
    }), 2), distance = _g[0], setDistance = _g[1];
    var _h = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(generateId()), 1), contentId = _h[0];
    var _j = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(generateId()), 1), messageId = _j[0];
    var _k = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(direction), 2), currentDirection = _k[0], setCurrentDirection = _k[1];
    var isH5 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB;
    var resver2Zero = function (params) {
        distance.top = "auto";
        distance.left = "auto";
        distance.right = "auto";
        distance.bottom = "auto";
        params.forEach(function (item) {
            distance[item.direction] = item.long + "px";
        });
        return distance;
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setShowTip(show);
    }, [show]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setCurrentDirection(props.direction || "bottom");
    }, [props.direction]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        function reRender() {
            if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.ENV_TYPE.WEB === _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getEnv())
                return;
            var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
            new Promise(function (resolve) {
                query
                    .select("#" + contentId)
                    .boundingClientRect()
                    .exec(function (res) {
                    resolve(res[0]);
                });
            }).then(function (res) {
                query
                    .select("#" + messageId)
                    .boundingClientRect()
                    .exec(function (data) {
                    var messageData = data[0];
                    var contentWidth = width || 100;
                    var screenWidth = 750 * screenPercent;
                    var customDirection = [];
                    var systemInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.getSystemInfoSync();
                    var bottomDistance = systemInfo.windowHeight - res.top - res.height;
                    var leftDistance = screenWidth - res.left - res.width;
                    var sqrt = Math.sqrt(Math.pow(20 * screenPercent, 2) * 2) / 2;
                    if (currentDirection === "top") {
                        if (res.top < bottomDistance && res.top < messageData.height)
                            setCurrentDirection("bottom");
                        // props.direction = 'bottom'
                        customDirection = [{ direction: "bottom", long: 0 }];
                        console.log(res);
                        var translateX = (res.width - contentWidth) / 2;
                        if (res.left < res.right && res.left < screenWidth / 2) {
                            if (Math.abs(translateX) > res.left)
                                translateX = -res.left;
                            distance.transform = "translateX(" + translateX + "px) translateY(-" + (res.height + 10) + "px)";
                            distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(0)";
                        }
                        else {
                            var maxRight = screenWidth - res.left;
                            if (maxRight < contentWidth)
                                translateX = contentWidth - maxRight;
                            distance.transform = "translateX(-" + translateX + "px) translateY(-" + (res.height + 10) + "px)";
                            distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(30%)";
                        }
                    }
                    else if (currentDirection === "bottom") {
                        if (res.top > bottomDistance &&
                            bottomDistance < messageData.height)
                            setCurrentDirection("bottom");
                        // props.direction = 'bottom'
                        customDirection = [{ direction: "left", long: 0 }];
                        var translateX = (res.width - contentWidth) / 2;
                        if (res.left < res.right && res.left < screenWidth / 2) {
                            if (Math.abs(translateX) > res.left)
                                translateX = -res.left;
                            distance.transform = "translateX(" + translateX + "px) translateY(" + (res.height + 10) + "px)";
                            distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(0)";
                        }
                        else {
                            var maxRight = screenWidth - res.left;
                            if (maxRight < contentWidth)
                                translateX = contentWidth - maxRight;
                            distance.transform = "translateX(-" + translateX + "px) translateY(" + (res.height + 10) + "px)";
                            distance.arrowTransform = "translateX(" + (Math.abs(translateX) + res.width / 2 - sqrt) + "px) rotate(45deg) translateY(-30%)";
                        }
                    }
                    else if (currentDirection === "left") {
                        var diffHeight = messageData.height - res.height;
                        if (res.left < contentWidth + 10 && leftDistance > res.left)
                            setCurrentDirection("right");
                        // props.direction = 'right'
                        customDirection = [
                            {
                                direction: "right",
                                long: 0,
                            },
                        ];
                        var moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
                        var moveBottom = res.top - (messageData.height / 2 - res.height / 2);
                        if (moveTop > 0)
                            moveTop = 0;
                        if (moveBottom > 0)
                            moveBottom = 0;
                        distance.arrowTransform = "translateY(" + (messageData.height / 2 - moveTop + moveBottom - sqrt) + "px) translateX(30%) rotate(45deg)";
                        distance.transform = "translateX(" + (-res.width - 10) + "px) translateY(" + (-diffHeight / 2 + moveTop - moveBottom) + "px)";
                    }
                    else if (currentDirection === "right") {
                        if (leftDistance - 10 < contentWidth && leftDistance < res.left)
                            setCurrentDirection("left");
                        // props.direction = 'left'
                        var diffHeight = messageData.height - res.height;
                        if (res.left < contentWidth + 10)
                            setCurrentDirection("right");
                        // props.direction = 'right'
                        customDirection = [
                            {
                                direction: "left",
                                long: 0,
                            },
                        ];
                        var moveTop = bottomDistance - (messageData.height / 2 - res.height / 2);
                        var moveBottom = res.top - (messageData.height / 2 - res.height / 2);
                        if (moveTop > 0)
                            moveTop = 0;
                        if (moveBottom > 0)
                            moveBottom = 0;
                        distance.arrowTransform = "translateY(" + (messageData.height / 2 - moveTop + moveBottom - sqrt) + "px) translateX(-30%) rotate(45deg)";
                        distance.transform = "translateX(" + (res.width + 10) + "px) translateY(" + (-diffHeight / 2 + moveTop - moveBottom) + "px)";
                    }
                    Object.assign(distance, resver2Zero(customDirection));
                    setDistance(distance);
                });
            });
        }
        reRender.call(_this);
    }, [width, currentDirection, showTip]);
    var ClTip = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { id: contentId, onClick: function () {
            if (mode === "click") {
                var show_1 = !showTip;
                setShowTip(show_1);
                props.onChange && props.onChange(show_1);
            }
        }, onTouchStart: function () {
            if (mode === "touch") {
                var show_2 = !showTip;
                setShowTip(show_2);
                props.onChange && props.onChange(show_2);
            }
        }, onTouchEnd: function () {
            if (mode === "touch") {
                var show_3 = !showTip;
                setShowTip(show_3);
                props.onChange && props.onChange(show_3);
            }
        }, className: "cl-tip " + (showTip ? "cl-tip__showZindex" : ""), style: { position: "relative", display: "inline-block" } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { id: messageId, className: "cl-tip__content  shadow " + (showTip ? "show" : "hide"), style: {
                width: (showTip ? width : 0) + "px",
                left: distance.left,
                right: distance.right,
                top: distance.top,
                bottom: distance.bottom,
                transform: distance.transform,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cl-tip__arrow " + currentDirection + " " + BG_COLOR_LIST[bgColor || "white"] + " " + (showTip ? "showArrow" : "hideArrow"), style: {
                    left: distance.left,
                    right: distance.right,
                    top: distance.top,
                    bottom: distance.bottom,
                    transform: distance.arrowTransform,
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cl-tip__message " + BG_COLOR_LIST[bgColor || "white"] },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: { width: width + "px", padding: "10px" } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: props.message }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function (e) {
                            e.stopPropagation();
                        } }, props.renderMessage)))),
        props.children));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(props.className), style: Object.assign({}, props.style) }, isH5 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClTip_H5, __assign({}, props)) : ClTip));
}

function ClSwiperAction(props) {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.options || []), 2), initOptions = _a[0], setInitOptions = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(generateId()), 1), contentId = _b[0];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), actionWidth = _c[0], setActionWidth = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), lastPoint = _d[0], setLastPoint = _d[1];
    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), translateX = _e[0], setTranslateX = _e[1];
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), lastTranslateX = _f[0], setLastTranslateX = _f[1];
    var _g = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), beforeMove = _g[0], setBeforeMove = _g[1];
    var _h = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), init = _h[0], setInit = _h[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var list = props.options || [];
        var newOptions = list.map(function (item) {
            item.cu_index_id = generateId();
            return item;
        });
        setInitOptions(newOptions);
        if (isH5) {
            var query = document.querySelector("#" + contentId);
            if (query) {
                var width = query.clientWidth;
                setActionWidth(width);
            }
        }
        else {
            var query_1 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
            setTimeout(function () {
                var view = query_1.select("#" + contentId);
                try {
                    view.boundingClientRect().exec(function (rect) {
                        var res = rect[0];
                        var width = res.width;
                        setActionWidth(width);
                        setInit(true);
                    });
                }
                catch (e) {
                    throw e;
                }
            }, 500);
        }
    }, [props.options]);
    var actionsComponent = initOptions.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: BG_COLOR_LIST[item.bgColor || "white"] + " flex justify-center align-center cl-swiper-action__action__item", style: { height: "100%" }, key: item.cu_index_id, onClick: function () {
            props.onClick && props.onClick(index);
            if (props.autoClose)
                setTranslateX(0);
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: "small", paddingDirection: "horizontal" }, item.text))); });
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (translateX === 0) {
            props.onClose && props.onClose();
        }
        else if (Math.abs(translateX) === actionWidth) {
            setTimeout(function () { }, 300);
            props.onOpened && props.onOpened();
        }
    }, [translateX]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (props.show) {
            if (props.direction === "left") {
                setTranslateX(actionWidth);
            }
            else {
                setTranslateX(-actionWidth);
            }
        }
    }, [props.show, actionWidth]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames("cl-swiper-action", props.className), style: Object.assign({}, props.style), onClick: function (e) {
            e.stopPropagation();
        }, onTouchStart: function (e) {
            if (props.disabled)
                return;
            setLastPoint(e.touches[0].clientX);
            setBeforeMove(e.touches[0].clientX);
            setLastTranslateX(translateX);
        }, onTouchMove: function (e) {
            if (props.disabled)
                return;
            var nowPoint = e.touches[0].clientX;
            // 为正则右，为负则左
            var distance = nowPoint - lastPoint;
            if (props.direction === "right") {
                distance =
                    Math.abs(lastTranslateX) === actionWidth
                        ? distance < 0
                            ? 0
                            : distance
                        : lastTranslateX === 0
                            ? distance > 0
                                ? 0
                                : distance
                            : distance;
            }
            if (props.direction === "left") {
                distance =
                    Math.abs(lastTranslateX) === actionWidth
                        ? distance > 0
                            ? 0
                            : distance
                        : lastTranslateX === 0
                            ? distance < 0
                                ? 0
                                : distance
                            : distance;
            }
            setTranslateX(lastTranslateX + distance * screenPercent);
        }, onTouchEnd: function (e) {
            if (props.disabled)
                return;
            var touches = e.changedTouches[0];
            var nowClientX = touches.clientX;
            var move = beforeMove - nowClientX;
            var isRight = props.direction === "right";
            // 向左滑动一定距离
            if (move > 20) {
                setTranslateX(isRight ? -actionWidth : 0);
                setLastTranslateX(isRight ? -actionWidth : 0);
                // 向右滑动一定距离
            }
            else if (move < -20) {
                setTranslateX(isRight ? 0 : actionWidth);
                setLastTranslateX(isRight ? 0 : actionWidth);
            }
            else {
                setLastTranslateX(lastTranslateX);
                setTranslateX(lastTranslateX);
            }
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                transform: "translateX(" + Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(translateX / screenPercent) + ")",
                transition: "all 0.3s ease-in",
                position: "relative",
            } },
            props.children,
            isH5 ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cl-swiper-action__action", id: contentId, style: {
                    right: "" + (props.direction === "right"
                        ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(-actionWidth / screenPercent)
                        : "auto"),
                    left: "" + (props.direction === "left"
                        ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(-actionWidth / screenPercent)
                        : "auto"),
                    zIndex: init ? 1 : -1,
                } }, actionsComponent)) : (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cl-swiper-action__action", id: contentId, style: {
                    right: "" + (props.direction === "right"
                        ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(-actionWidth / screenPercent)
                        : "auto"),
                    left: "" + (props.direction === "left"
                        ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(-actionWidth / screenPercent)
                        : "auto"),
                    zIndex: init ? 1 : -1,
                } }, actionsComponent)))));
}
ClSwiperAction.options = {
    addGlobalClass: true,
};
ClSwiperAction.defaultProps = {
    show: false,
    disabled: false,
    autoClose: false,
    options: [],
    direction: "right",
    onClick: function () { },
    onClose: function () { },
    onOpened: function () { },
};

function ClActionSheet(props) {
    var _this = this;
    var type = props.type, tip = props.tip, isOpened = props.isOpened, closeWithShadow = props.closeWithShadow, options = props.options, cancelText = props.cancelText, showCancel = props.showCancel, cancelBgColor = props.cancelBgColor, cancelFontColor = props.cancelFontColor, onClick = props.onClick, onCancel = props.onCancel;
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), 2), actionsArr = _a[0], setActionsArr = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), show = _b[0], setShow = _b[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        var list = options || [];
        setActionsArr(list.map(function (item) {
            item.cu_action_sheet_id = generateId();
            return item;
        }));
    }, [options]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
        setShow(!!isOpened);
    }, [isOpened]);
    var click = function (index) {
        onClick && onClick(index);
    };
    var cancelComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function (e) {
                e.stopPropagation();
                onCancel && onCancel();
            }, style: {
                marginTop: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(20)
            }, className: classnames([
                {
                    cu_action_sheet_card: type === "card"
                }
            ]) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCard, { bgColor: cancelBgColor, type: "full", active: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: cancelText, textColor: cancelFontColor, align: "center" })))));
    var tipComponent = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { align: "center", bgColor: "gray", textColor: "grey" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: "xsmall", paddingDirection: "vertical" }, tip)));
    var actionsComponents = actionsArr.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: click.bind(_this, index), className: classnames([
            {
                cu_action_sheet_line: index !== actionsArr.length - 1
            },
            BG_COLOR_LIST[item.bgColor]
        ]), key: item.cu_action_sheet_id },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCard, { bgColor: item.bgColor, type: "full", active: true }, item.text))); });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classnames([
            "cu-modal bottom-modal",
            {
                show: show
            }
        ], props.className), style: Object.assign({}, props.style), onClick: function (e) {
            closeWithShadow && setShow(false);
            onCancel && onCancel();
            e.stopPropagation();
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "cu-dialog", style: {
                maxHeight: "70vh",
                backgroundColor: "" + (type === "card" ? "transparent" : "#f8f8f8")
            }, onClick: function (e) {
                e.stopPropagation();
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classnames([
                    {
                        cu_action_sheet_card: type === "card"
                    }
                ]) },
                tip ? tipComponent : "",
                actionsComponents),
            showCancel ? cancelComponent : "",
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: { height: "20px", width: "100%" } }))));
}
ClActionSheet.options = {
    addGlobalClass: true
};
ClActionSheet.defaultProps = {
    tip: "",
    isOpened: false,
    closeWithShadow: true,
    actions: [],
    cancelText: "取消",
    showCancel: false,
    cancelBgColor: "white",
    cancelFontColor: undefined,
    onClick: function () { },
    onCancel: function () { }
};

function ClCurtain(props) {
    var _a = props.show, show = _a === void 0 ? false : _a, _b = props.closeWithShadow, closeWithShadow = _b === void 0 ? false : _b, _c = props.closeBtnPosition, closeBtnPosition = _c === void 0 ? 'bottom' : _c;
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(show), 2), showImage = _d[0], setShowImage = _d[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setShowImage(show);
    }, [show]);
    var renderImage = function () {
        var commonComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames('cu-load load-image', props.className), style: Object.assign({}, props.style), onClick: function (e) {
                e.stopPropagation();
                if (closeWithShadow) {
                    setShowImage(false);
                    props.onClose && props.onClose();
                }
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-curtain__content', onClick: function () {
                    props.onClick && props.onClick();
                } },
                props.children,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: closeBtnPosition, onClick: function (e) {
                        e.stopPropagation();
                        setShowImage(false);
                        props.onClose && props.onClose();
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'close', color: 'white' }))));
        return showImage && commonComponent;
    };
    return renderImage();
}

function ClNoticeBar(props) {
    var text = props.text, bgColor = props.bgColor, single = props.single, marquee = props.marquee, speed = props.speed, showMore = props.showMore, moreText = props.moreText, icon = props.icon, close = props.close, onClose = props.onClose, onMore = props.onMore;
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('100%'), 2), singleContentWidth = _a[0], setSingleContentWidth = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), contentWidth = _b[0], setContentWidth = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(speed), 2), marqueeSpeed = _c[0], setMarqueeSpeed = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(generateId()), 1), textId = _d[0];
    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(generateId()), 1), contentId = _e[0];
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(single && marquee), 2), marqueeClass = _f[0], setMarqueeClass = _f[1];
    var _g = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), show = _g[0], setShow = _g[1];
    var cut = single && !marquee;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setMarqueeClass(single && marquee);
        if (single) {
            var width = 180;
            if (!showMore)
                width = 50;
            if (close)
                width += 50;
            setSingleContentWidth("calc(100vw - " + Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(width) + ")");
        }
        var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.createSelectorQuery();
        var promise = new Promise(function (resolve) {
            query
                .select("#" + contentId)
                .boundingClientRect(function (content) {
                resolve(content);
            })
                .exec();
        });
        promise.then(function (content) {
            query
                .select("#" + textId)
                .boundingClientRect(function (res) {
                if (res.width < content.width) {
                    setMarqueeClass(false);
                    setMarqueeSpeed(0);
                    return;
                }
                setContentWidth(-res.width);
                function beginInterval(time) {
                    var timer;
                    timer = setInterval(function () {
                        setContentWidth(res.width);
                        setMarqueeSpeed(0);
                        clearInterval(timer);
                        var timeout;
                        timeout = setTimeout(function () {
                            setContentWidth(-res.width);
                            var percentSpeed = res.width / speed;
                            var speedNow = speed + content.width / percentSpeed;
                            setMarqueeSpeed(speedNow);
                            beginInterval(speedNow);
                            clearTimeout(timeout);
                        }, 50);
                    }, time * 1000);
                }
                beginInterval(marqueeSpeed);
            })
                .exec();
        });
    }, [props.showMore, props.single, props.speed]);
    var showMoreComponent = showMore ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
            flex: '0 0 auto',
            zIndex: 1,
            paddingRight: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(10),
            paddingLeft: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(10)
        }, onClick: function () {
            onMore && onMore();
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: moreText, textColor: 'gray', size: 'small' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'right', color: 'gray', size: 24 })))) : ('');
    var showCloseComponent = close ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
            setShow(false);
            onClose && onClose();
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'close', size: 24, color: 'gray' }))) : ('');
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classnames('cu-notice', "" + BG_COLOR_LIST[bgColor || 'yellow']) }, show ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'between', style: { minHeight: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(40) } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { margin: 'xsmall', marginDirection: 'right', style: { zIndex: 10, flex: '0 0 auto' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'xsmall', paddingDirection: 'horizontal' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, null,
                        showCloseComponent,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: icon || 'notificationfill', size: 24 }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { id: contentId, style: {
                flex: '1 1 auto',
                overflow: 'hidden',
                minHeight: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(40)
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classnames([
                    'text-sm',
                    {
                        'text-cut': cut
                    }
                ]), style: {
                    lineHeight: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(42),
                    transition: "all " + (marqueeClass ? marqueeSpeed : 0) + "s linear",
                    transform: "translateX(" + (marqueeClass ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(contentWidth / screenPercent) : 0) + ")",
                    whiteSpace: 'nowrap',
                    width: singleContentWidth
                } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "p"], { id: textId, className: classnames([
                        {
                            'cl-text__nowrap': single,
                            'cl-text__wrap': !single
                        }
                    ]) }, text))),
        showMoreComponent)) : ('')));
}
ClNoticeBar.options = {
    addGlobalClass: true
};
ClNoticeBar.defaultProps = {
    text: '',
    bgColor: 'light-yellow',
    single: false,
    marquee: false,
    speed: 5,
    showMore: false,
    moreText: '查看详情',
    icon: 'notificationfill',
    close: false,
    onClose: function () { },
    onMore: function () { }
};

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return +(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else {var i=t.name;M[i]=t,r=i;}return !n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t);}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},$.$utils=function(){return g},$.isValid=function(){return !("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])};}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});
});

var FORMAT_DATE = 'YYYY-MM-DD';
var THIS_WEEK = 'thisWeek';
var PRE_WEEK = 'preWeek';
var NEXT_WEEK = 'nextWeek';
var PRE_MONTH = 'preMonth';
var THIS_MONTH = 'thisMonth';
var NEXT_MONTH = 'nextMonth';
var mapChangeWeekIndex = [PRE_WEEK, THIS_WEEK, NEXT_WEEK];
var mapChangeMonthIndex = [PRE_MONTH, THIS_MONTH, NEXT_MONTH];
var render = false;
function dealYearMonth(day) {
    return day.year() + "\u5E74" + (day.month() + 1) + "\u6708";
}
var Calendar_h5 = /** @class */ (function (_super) {
    __extends(Calendar_h5, _super);
    function Calendar_h5(props) {
        var _this = _super.call(this, props) || this;
        var today = dayjs_min().format(FORMAT_DATE);
        _this.state = {
            thisWeek: [],
            preWeek: [],
            nextWeek: [],
            thisMonth: [],
            nextMonth: [],
            preMonth: [],
            currentYear: dayjs_min().year(),
            chooseDate: today,
            currentDate: dealYearMonth(dayjs_min(today)),
            currentActive: 1,
            currentActiveLines: 5,
            showMonths: false,
            today: today
        };
        return _this;
    }
    Calendar_h5.prototype.selectDate = function (month) {
        var year = this.state.currentYear;
        var date = year + "-" + (month + 1) + "-01";
        this.changeMonth(date);
        this.setState({
            showMonths: false,
            currentDate: dealYearMonth(dayjs_min(date))
        });
    };
    Calendar_h5.prototype.clickDate = function (_a) {
        var item = _a.item;
        if (item.disabled)
            return;
        if (item.empty)
            return;
        if (this.props.calendarType === 'week') {
            var weeks_1 = {
                thisWeek: this.state.thisWeek,
                preWeek: this.state.preWeek,
                nextWeek: this.state.nextWeek
            };
            Object.keys(weeks_1).forEach(function (week) {
                weeks_1[week].forEach(function (item) { return (item.active = false); });
            });
        }
        else {
            var months_1 = {
                thisMonth: this.state.thisMonth,
                preMonth: this.state.preMonth,
                nextMonth: this.state.nextMonth
            };
            Object.keys(months_1).forEach(function (month) {
                months_1[month].forEach(function (item) { return (item.active = false); });
            });
        }
        item.active = true;
        this.setState({
            chooseDate: item.date
        });
        this.props.onClick && this.props.onClick(item.date);
    };
    Calendar_h5.prototype.getPreNextArray = function (index, data) {
        var _a;
        var varChange = this.props.calendarType === 'week'
            ? {
                PRE: PRE_WEEK,
                THIS: THIS_WEEK,
                NEXT: NEXT_WEEK
            }
            : {
                PRE: PRE_MONTH,
                THIS: THIS_MONTH,
                NEXT: NEXT_MONTH
            };
        var dataChange = this.props.calendarType === 'week'
            ? {
                PRE: 'tempPreWeek',
                THIS: 'tempThisWeek',
                NEXT: 'tempNextWeek'
            }
            : {
                PRE: 'tempPreMonth',
                THIS: 'tempThisMonth',
                NEXT: 'tempNextMonth'
            };
        var current = (_a = {},
            _a[varChange.PRE] = data[dataChange.PRE],
            _a[varChange.THIS] = data[dataChange.THIS],
            _a[varChange.NEXT] = data[dataChange.NEXT],
            _a);
        if (index === 0) {
            current[varChange.PRE] = data[dataChange.THIS];
            current[varChange.THIS] = data[dataChange.NEXT];
            current[varChange.NEXT] = data[dataChange.PRE];
        }
        if (index === 2) {
            current[varChange.PRE] = data[dataChange.NEXT];
            current[varChange.THIS] = data[dataChange.PRE];
            current[varChange.NEXT] = data[dataChange.THIS];
        }
        return current;
    };
    Calendar_h5.prototype.changeDate = function (e) {
        var arrayIndex = e.detail.current;
        if (render) {
            arrayIndex = 1;
            render = false;
        }
        var currentChangeDate = '';
        if (this.props.calendarType === 'week') {
            var oldWeeks = {
                thisWeek: this.state.thisWeek,
                preWeek: this.state.preWeek,
                nextWeek: this.state.nextWeek
            };
            var showWeeks = oldWeeks[mapChangeWeekIndex[arrayIndex]];
            if (showWeeks && showWeeks.length) {
                this.setState({
                    currentDate: dealYearMonth(dayjs_min(showWeeks[3].date))
                });
                currentChangeDate = dayjs_min(showWeeks[3].date).format('YYYY-MM');
                var newWeeks = this.getWeeks(oldWeeks[mapChangeWeekIndex[arrayIndex]][3].date);
                var current = this.getPreNextArray(arrayIndex, newWeeks);
                this.setState({
                    preWeek: current[PRE_WEEK],
                    nextWeek: current[NEXT_WEEK],
                    thisWeek: current[THIS_WEEK]
                });
            }
        }
        else {
            var oldMonths = {
                thisMonth: this.state.thisMonth,
                preMonth: this.state.preMonth,
                nextMonth: this.state.nextMonth
            };
            var showMonths = oldMonths[mapChangeMonthIndex[arrayIndex]];
            if (showMonths && showMonths.length) {
                currentChangeDate = dayjs_min(showMonths[8].date).format('YYYY-MM');
                this.setState({
                    currentDate: dealYearMonth(dayjs_min(showMonths[8].date)),
                    currentActiveLines: Math.ceil(showMonths.length / 7)
                });
                var newMonths = this.getMonths(oldMonths[mapChangeMonthIndex[arrayIndex]][8].date);
                var current = this.getPreNextArray(arrayIndex, newMonths);
                this.setState({
                    preMonth: current[PRE_MONTH],
                    nextMonth: current[NEXT_MONTH],
                    thisMonth: current[THIS_MONTH]
                });
            }
        }
        this.setState({
            currentActive: arrayIndex
        });
        this.props.onChange && this.props.onChange(currentChangeDate);
    };
    Calendar_h5.prototype.changeMonth = function (date) {
        if (this.props.calendarType === 'week') {
            var weeks = this.getWeeks(date);
            var newIndex = this.state.currentActive + 1 > 2 ? 0 : this.state.currentActive + 1;
            var current = this.getPreNextArray(newIndex, weeks);
            this.setState({
                currentActive: newIndex,
                preWeek: current[PRE_WEEK],
                nextWeek: current[NEXT_WEEK],
                thisWeek: current[THIS_WEEK]
            });
        }
        else {
            var months = this.getMonths(date);
            var newIndex = this.state.currentActive + 1 > 2 ? 0 : this.state.currentActive + 1;
            var current = this.getPreNextArray(newIndex, months);
            this.setState({
                currentActive: newIndex,
                preMonth: current[PRE_MONTH],
                nextMonth: current[NEXT_MONTH],
                thisMonth: current[THIS_MONTH]
            });
        }
    };
    Calendar_h5.prototype.handleBackToToday = function () {
        this.setState({
            chooseDate: this.state.today
        });
        this.changeMonth(this.state.today);
    };
    Calendar_h5.prototype.dealEveryDay = function (_a) {
        var i = _a.i, currentDay = _a.currentDay, date = _a.date;
        var thisNum = i - currentDay;
        var method = thisNum > 0 ? 'add' : 'subtract';
        var day = dayjs_min(date)[method](Math.abs(thisNum), 'day');
        var tipDayArray = this.props.tipDay || [];
        var dateData = {
            timeStamp: day.valueOf(),
            date: day.format(FORMAT_DATE),
            month: day.get('month'),
            day: day.get('date'),
            year: day.get('year'),
            today: this.state.today === day.format(FORMAT_DATE),
            old: dayjs_min(this.state.today).valueOf() - day.valueOf() > 0,
            active: this.state.chooseDate === day.format(FORMAT_DATE),
            tipTop: '',
            tipBottom: '',
            badge: {
                show: false,
                color: 'red',
                num: ''
            },
            disabled: false,
            special: {
                show: false,
                color: 'green'
            },
            highlight: this.props.highlightWeekend
                ? [0, 6].includes(day.get('day'))
                : false
        };
        // tip
        var tipIndex = tipDayArray.findIndex(function (item) { return item.date === dateData.date; });
        if (tipIndex >= 0) {
            var tipData = tipDayArray[tipIndex];
            dateData = Object.assign(dateData, {
                tipTop: tipData.tipTop || '',
                tipBottom: tipData.tipBottom || '',
                tipTopColor: tipData.tipTopColor,
                tipBottomColor: tipData.tipBottomColor
            });
        }
        // badge
        if (typeof this.props.badge === 'string' &&
            dateData.date === this.props.badge) {
            Object.assign(dateData.badge, { show: true });
        }
        else if (this.props.badge instanceof Array) {
            this.props.badge.forEach(function (item) {
                if (item.date === dateData.date) {
                    Object.assign(dateData.badge, {
                        show: true,
                        color: item.color || 'red',
                        num: item.num || ''
                    });
                }
            });
        }
        // disabledDay
        if (this.props.disabledDay instanceof Array) {
            this.props.disabledDay.forEach(function (item) {
                if (typeof item === 'string') {
                    dateData.disabled = dateData.date === item;
                }
                else if (item instanceof Array) {
                    var minDate = item[0] && dayjs_min(item[0]).valueOf();
                    var maxDate = item[1] && dayjs_min(item[1]).valueOf();
                    if (minDate && maxDate) {
                        dateData.disabled =
                            dateData.timeStamp > minDate && dateData.timeStamp < maxDate;
                    }
                    else if (minDate) {
                        dateData.disabled = dateData.timeStamp > minDate;
                    }
                    else if (maxDate) {
                        dateData.disabled = dateData.timeStamp < maxDate;
                    }
                }
            });
        }
        // specialDay
        if (this.props.specialDay instanceof Array) {
            this.props.specialDay.forEach(function (item) {
                if (typeof item === 'string') {
                    dateData.special.show = item === dateData.date;
                }
                else if (typeof item === 'object') {
                    var date_1 = item.date;
                    var color = item.color;
                    Object.assign(dateData.special, {
                        date: date_1 === dateData.date,
                        color: color
                    });
                }
            });
        }
        return dateData;
    };
    Calendar_h5.prototype.getWeeks = function (date) {
        var weekday = dayjs_min(date).day();
        var tempThisWeek = [];
        var tempPreWeek = [];
        var tempNextWeek = [];
        var i = -7;
        while (1) {
            if (i >= 14)
                break;
            var dateData = this.dealEveryDay({
                i: i,
                currentDay: weekday,
                date: date
            });
            if (i < 0) {
                tempPreWeek.push(dateData);
            }
            else if (i >= 7) {
                tempNextWeek.push(dateData);
            }
            else {
                tempThisWeek.push(dateData);
            }
            i++;
        }
        return {
            tempThisWeek: tempThisWeek,
            tempPreWeek: tempPreWeek,
            tempNextWeek: tempNextWeek
        };
    };
    Calendar_h5.prototype.fillMonths = function (months) {
        var firstDay = months[0];
        var weekday = dayjs_min(firstDay.date).day();
        while (weekday) {
            months.unshift({
                timeStamp: weekday,
                date: '',
                month: '',
                day: '',
                year: '',
                today: false,
                old: false,
                active: false,
                tipTop: '',
                tipBottom: '',
                badge: {
                    show: false,
                    color: 'red',
                    num: ''
                },
                disabled: false,
                special: {
                    show: false,
                    color: 'green'
                },
                empty: true
            });
            weekday--;
        }
        return months;
    };
    Calendar_h5.prototype.getMonths = function (date) {
        var tempThisMonth = [];
        var tempPreMonth = [];
        var tempNextMonth = [];
        var preMonthDays = dayjs_min(date).subtract(1, 'month').daysInMonth();
        var thisMonthDays = dayjs_min(date).daysInMonth();
        var nextMonthDays = dayjs_min(date).add(1, 'month').daysInMonth();
        var thisDays = dayjs_min(date).date();
        var i = -preMonthDays + 1;
        while (1) {
            if (i > nextMonthDays + thisMonthDays)
                break;
            var dateData = this.dealEveryDay({
                i: i,
                currentDay: thisDays,
                date: date
            });
            if (i <= 0) {
                tempPreMonth.push(dateData);
            }
            else if (i > thisMonthDays) {
                tempNextMonth.push(dateData);
            }
            else {
                tempThisMonth.push(dateData);
            }
            i++;
        }
        return {
            tempThisMonth: this.fillMonths(tempThisMonth),
            tempPreMonth: this.fillMonths(tempPreMonth),
            tempNextMonth: this.fillMonths(tempNextMonth)
        };
    };
    Calendar_h5.prototype.initCalendar = function () {
        if (this.props.calendarType === 'week') {
            var weeks = this.getWeeks(this.state.today);
            this.setState({
                preWeek: weeks.tempPreWeek,
                thisWeek: weeks.tempThisWeek,
                nextWeek: weeks.tempNextWeek
            });
        }
        else {
            var months = this.getMonths(this.state.today);
            this.setState({
                preMonth: months.tempPreMonth,
                thisMonth: months.tempThisMonth,
                nextMonth: months.tempNextMonth
            });
        }
        render = true;
    };
    Calendar_h5.prototype.componentDidMount = function () {
        this.initCalendar();
    };
    Calendar_h5.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.calendarType !== this.props.calendarType) {
            this.initCalendar();
        }
    };
    Calendar_h5.prototype.render = function () {
        var _this = this;
        var _a = this.state, thisWeek = _a.thisWeek, thisMonth = _a.thisMonth, preWeek = _a.preWeek, preMonth = _a.preMonth, nextWeek = _a.nextWeek, nextMonth = _a.nextMonth, showMonths = _a.showMonths, currentDate = _a.currentDate, currentActiveLines = _a.currentActiveLines, currentYear = _a.currentYear;
        var _b = this.props, highlightWeekend = _b.highlightWeekend, highlightWeekendColor = _b.highlightWeekendColor, activeColor = _b.activeColor, showType = _b.showType, backToToday = _b.backToToday, calendarType = _b.calendarType;
        var weekGridComponent = [
            '周日',
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六'
        ].map(function (week, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: week },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { align: 'center', size: 'small', lineSpacing: 'small', textColor: highlightWeekend
                    ? [0, 6].includes(index)
                        ? highlightWeekendColor
                        : 'black'
                    : 'black' }, week))); });
        var BGClassName = BG_COLOR_LIST[activeColor || 'blue'];
        var oldTextClassName = TEXT_COLOR_LIST['gray'];
        var weeksComponent = preWeek.length
            ? [preWeek, thisWeek, nextWeek].map(function (week) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "n"], { key: week[3].date },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClGrid, { col: 7 }, week.map(function (item) {
                    var _a, _b;
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.timeStamp, onClick: function () {
                            _this.clickDate({
                                item: item
                            });
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'center' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                                        position: 'relative'
                                    }, className: classNames([
                                        'day-normal',
                                        "" + (item.disabled ? BG_COLOR_LIST['gray'] : ''),
                                        "" + (item.special.show && !item.active
                                            ? BG_COLOR_LIST[item.special.color]
                                            : ''),
                                        (_a = {},
                                            _a[BGClassName] = !item.disabled && item.active,
                                            _a[oldTextClassName] = item.old,
                                            _a)
                                    ]) },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                                            (_b = {},
                                                _b['cu-tag badge'] = item.badge.show,
                                                _b),
                                            BG_COLOR_LIST[item.badge.color]
                                        ]) }, item.badge.num),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(50) }, textColor: item.active && !item.disabled
                                                ? undefined
                                                : item.tipTopColor, text: item.tipTop }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                                ? highlightWeekendColor
                                                : undefined }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(50) }, textColor: item.active && !item.disabled
                                                ? undefined
                                                : item.tipBottomColor, text: item.tipBottom })))))));
                })))); })
            : '';
        var monthsComponent = [preMonth, thisMonth, nextMonth].every(function (item) { return item.length > 0; })
            ? [preMonth, thisMonth, nextMonth].map(function (month) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "n"], { key: month[3].date },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClGrid, { col: 7 }, month.map(function (item) {
                    var _a, _b;
                    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.timeStamp, onClick: function () {
                            _this.clickDate({
                                item: item
                            });
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'center' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                                        position: 'relative'
                                    }, className: classNames([
                                        'day-normal',
                                        "" + (item.disabled ? BG_COLOR_LIST['gray'] : ''),
                                        "" + (item.special.show && !item.active
                                            ? BG_COLOR_LIST[item.special.color]
                                            : ''),
                                        (_a = {},
                                            _a[BGClassName] = !item.disabled && item.active,
                                            _a[oldTextClassName] = item.old,
                                            _a)
                                    ]) },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                                            (_b = {},
                                                _b['cu-tag badge'] = item.badge.show,
                                                _b),
                                            BG_COLOR_LIST[item.badge.color]
                                        ]) }, item.badge.num),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(50) }, textColor: item.active && !item.disabled
                                                ? undefined
                                                : item.tipTopColor, text: item.tipTop }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                                ? highlightWeekendColor
                                                : undefined }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(50) }, textColor: item.active && !item.disabled
                                                ? undefined
                                                : item.tipBottomColor, text: item.tipBottom })))))));
                })))); })
            : '';
        var months = Array.from(Array(12)).map(function (_item, index) { return index + 1 + "\u6708"; });
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCard, { type: showType },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([BG_COLOR_LIST['white'], 'cuCalendar']) },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'small', paddingDirection: 'bottom' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { justify: 'between', align: 'center' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClTip, { renderMessage: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'between' },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                                                _this.setState({
                                                    currentYear: currentYear - 1
                                                });
                                            } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'pullleft' })),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: currentYear + '' }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                                                _this.setState({
                                                    currentYear: currentYear + 1
                                                });
                                            } },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'pullright' })))),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClGrid, { col: 4 }, months.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item, className: classNames([
                                        'flex justify-center align-center'
                                    ]) },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { margin: 'small', marginDirection: 'vertical' },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClButton, { size: 'small', bgColor: 'light-gray', shadow: false, long: true, text: item, onClick: function () {
                                                _this.selectDate(index);
                                            } })))); }))), mode: 'click', width: 300, show: this.state.showMonths, onChange: function () {
                                var currentShow = !showMonths;
                                _this.setState({
                                    showMonths: currentShow
                                });
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClButton, { shape: 'round', shadow: false, size: 'small' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { className: 'chooseDate', lineSpacing: 'normal', text: currentDate }))),
                        backToToday ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                                _this.handleBackToToday();
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClButton, { shadow: false, size: 'small' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { className: 'backToToday', lineSpacing: 'normal' }, "\u4ECA")))) : (''))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'week' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClGrid, { col: 7, className: 'solid-bottom' }, weekGridComponent),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Swiper */ "m"], { current: this.state.currentActive, skipHiddenItemLayout: true, circular: true, key: 'key-' + Math.random(), style: {
                            width: '100%',
                            height: calendarType === 'week'
                                ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(120)
                                : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(120 * currentActiveLines)
                        }, onChange: function (e) {
                            if (_this.state.currentActive !== e.detail.current)
                                _this.changeDate(e);
                        } }, calendarType === 'week' ? weeksComponent : monthsComponent)))));
    };
    Calendar_h5.options = {
        addGlobalClass: true
    };
    return Calendar_h5;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));

function Calendar_weapp(props) {
    var _this = this;
    var highlightWeekendColor = props.highlightWeekendColor, calendarType = props.calendarType, showType = props.showType, activeColor = props.activeColor, tipDay = props.tipDay, backToToday = props.backToToday, disabledDay = props.disabledDay, badge = props.badge, onChange = props.onChange, onClick = props.onClick, highlightWeekend = props.highlightWeekend, specialDay = props.specialDay;
    var FORMAT_DATE = 'YYYY-MM-DD';
    var THIS_WEEK = 'thisWeek';
    var PRE_WEEK = 'preWeek';
    var NEXT_WEEK = 'nextWeek';
    var PRE_MONTH = 'preMonth';
    var THIS_MONTH = 'thisMonth';
    var NEXT_MONTH = 'nextMonth';
    var today = dayjs_min().format(FORMAT_DATE);
    var mapChangeWeekIndex = [PRE_WEEK, THIS_WEEK, NEXT_WEEK];
    var mapChangeMonthIndex = [PRE_MONTH, THIS_MONTH, NEXT_MONTH];
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), 2), thisWeek = _a[0], setThisWeek = _a[1];
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), 2), preWeek = _b[0], setPreWeek = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), 2), nextWeek = _c[0], setNextWeek = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), 2), thisMonth = _d[0], setThisMonth = _d[1];
    var _e = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), 2), preMonth = _e[0], setPreMonth = _e[1];
    var _f = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]), 2), nextMonth = _f[0], setNextMonth = _f[1];
    var _g = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(today), 2), chooseDate = _g[0], setChooseDate = _g[1];
    var _h = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dealYearMonth(dayjs_min(today))), 2), currentDate = _h[0], setCurrentDate = _h[1];
    var _j = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1), 2), currentActive = _j[0], setCurrentActive = _j[1];
    var _k = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(5), 2), currentActiveLines = _k[0], setCurrentActiveLines = _k[1];
    var _l = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), showMonths = _l[0], setShowMonths = _l[1];
    var _m = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(dayjs_min().year()), 2), currentYear = _m[0], setCurrentYear = _m[1];
    var selectDate = function (month) {
        var date = currentYear + "-" + (month + 1) + "-01";
        changeMonth(date);
        setShowMonths(false);
        setCurrentDate(dealYearMonth(dayjs_min(date)));
    };
    function dealYearMonth(day) {
        return day.year() + "\u5E74" + (day.month() + 1) + "\u6708";
    }
    var clickDate = function (_a) {
        var item = _a.item;
        if (item.disabled)
            return;
        if (item.empty)
            return;
        if (calendarType === 'week') {
            var weeks_1 = {
                thisWeek: thisWeek,
                preWeek: preWeek,
                nextWeek: nextWeek
            };
            Object.keys(weeks_1).forEach(function (week) {
                weeks_1[week].forEach(function (item) { return (item.active = false); });
            });
        }
        else {
            var months_1 = {
                thisMonth: thisMonth,
                preMonth: preMonth,
                nextMonth: nextMonth
            };
            Object.keys(months_1).forEach(function (month) {
                months_1[month].forEach(function (item) { return (item.active = false); });
            });
        }
        item.active = true;
        setChooseDate(item.date);
        onClick && onClick(item.date);
    };
    var getPreNextArray = function (index, data) {
        var _a;
        var varChange = calendarType === 'week'
            ? {
                PRE: PRE_WEEK,
                THIS: THIS_WEEK,
                NEXT: NEXT_WEEK
            }
            : {
                PRE: PRE_MONTH,
                THIS: THIS_MONTH,
                NEXT: NEXT_MONTH
            };
        var dataChange = calendarType === 'week'
            ? {
                PRE: 'tempPreWeek',
                THIS: 'tempThisWeek',
                NEXT: 'tempNextWeek'
            }
            : {
                PRE: 'tempPreMonth',
                THIS: 'tempThisMonth',
                NEXT: 'tempNextMonth'
            };
        var current = (_a = {},
            _a[varChange.PRE] = data[dataChange.PRE],
            _a[varChange.THIS] = data[dataChange.THIS],
            _a[varChange.NEXT] = data[dataChange.NEXT],
            _a);
        if (index === 0) {
            current[varChange.PRE] = data[dataChange.THIS];
            current[varChange.THIS] = data[dataChange.NEXT];
            current[varChange.NEXT] = data[dataChange.PRE];
        }
        if (index === 2) {
            current[varChange.PRE] = data[dataChange.NEXT];
            current[varChange.THIS] = data[dataChange.PRE];
            current[varChange.NEXT] = data[dataChange.THIS];
        }
        return current;
    };
    var changeDate = function (arrayIndex) {
        var currentDate = '';
        if (calendarType === 'week') {
            var oldWeeks = {
                thisWeek: thisWeek,
                preWeek: preWeek,
                nextWeek: nextWeek
            };
            var showWeeks = oldWeeks[mapChangeWeekIndex[arrayIndex]];
            setCurrentDate(dealYearMonth(dayjs_min(showWeeks[3].date)));
            currentDate = dayjs_min(showWeeks[3].date).format('YYYY-MM');
            var newWeeks = getWeeks(oldWeeks[mapChangeWeekIndex[arrayIndex]][3].date);
            var current = getPreNextArray(arrayIndex, newWeeks);
            setCurrentActive(arrayIndex);
            setPreWeek(current[PRE_WEEK]);
            setNextWeek(current[NEXT_WEEK]);
            setThisWeek(current[THIS_WEEK]);
        }
        else {
            var oldMonths = {
                thisMonth: thisMonth,
                preMonth: preMonth,
                nextMonth: nextMonth
            };
            var showMonths_1 = oldMonths[mapChangeMonthIndex[arrayIndex]];
            currentDate = dayjs_min(showMonths_1[8].date).format('YYYY-MM');
            setCurrentDate(dealYearMonth(dayjs_min(showMonths_1[8].date)));
            setCurrentActiveLines(Math.ceil(showMonths_1.length / 7));
            var newMonths = getMonths(oldMonths[mapChangeMonthIndex[arrayIndex]][8].date);
            var current = getPreNextArray(arrayIndex, newMonths);
            setCurrentActive(arrayIndex);
            setPreMonth(current[PRE_MONTH]);
            setNextMonth(current[NEXT_MONTH]);
            setThisMonth(current[THIS_MONTH]);
        }
        onChange && onChange(currentDate);
    };
    function changeMonth(date) {
        if (calendarType === 'week') {
            var weeks = getWeeks(date);
            var newIndex = currentActive + 1 > 2 ? 0 : currentActive + 1;
            setCurrentActive(newIndex);
            var current = getPreNextArray(newIndex, weeks);
            setPreWeek(current[PRE_WEEK]);
            setNextWeek(current[NEXT_WEEK]);
            setThisWeek(current[THIS_WEEK]);
        }
        else {
            var months_2 = getMonths(date);
            var newIndex = currentActive + 1 > 2 ? 0 : currentActive + 1;
            setCurrentActive(newIndex);
            var current = getPreNextArray(newIndex, months_2);
            setPreMonth(current[PRE_MONTH]);
            setNextMonth(current[NEXT_MONTH]);
            setThisMonth(current[THIS_MONTH]);
        }
    }
    var handleBackToToday = function () {
        setChooseDate(today);
        changeMonth(today);
    };
    function dealEveryDay(_a) {
        var i = _a.i, currentDay = _a.currentDay, date = _a.date;
        var thisNum = i - currentDay;
        var method = thisNum > 0 ? 'add' : 'subtract';
        var day = dayjs_min(date)[method](Math.abs(thisNum), 'day');
        var tipDayArray = tipDay || [];
        var dateData = {
            timeStamp: day.valueOf(),
            date: day.format(FORMAT_DATE),
            month: day.get('month'),
            day: day.get('date'),
            year: day.get('year'),
            today: today === day.format(FORMAT_DATE),
            old: dayjs_min(today).valueOf() - day.valueOf() > 0,
            active: chooseDate === day.format(FORMAT_DATE),
            tipTop: '',
            tipBottom: '',
            badge: {
                show: false,
                color: 'red',
                num: ''
            },
            disabled: false,
            special: {
                show: false,
                color: 'green'
            },
            highlight: highlightWeekend ? [0, 6].includes(day.get('day')) : false
        };
        // tip
        var tipIndex = tipDayArray.findIndex(function (item) { return item.date === dateData.date; });
        if (tipIndex >= 0) {
            var tipData = tipDayArray[tipIndex];
            dateData = Object.assign(dateData, {
                tipTop: tipData.tipTop || '',
                tipBottom: tipData.tipBottom || '',
                tipTopColor: tipData.tipTopColor,
                tipBottomColor: tipData.tipBottomColor
            });
        }
        // badge
        if (typeof badge === 'string' && dateData.date === badge) {
            Object.assign(dateData.badge, { show: true });
        }
        else if (badge instanceof Array) {
            badge.forEach(function (item) {
                if (item.date === dateData.date) {
                    Object.assign(dateData.badge, {
                        show: true,
                        color: item.color || 'red',
                        num: item.num || ''
                    });
                }
            });
        }
        // disabledDay
        if (disabledDay instanceof Array) {
            disabledDay.forEach(function (item) {
                if (typeof item === 'string') {
                    dateData.disabled = dateData.date === item;
                }
                else if (item instanceof Array) {
                    var minDate = item[0] && dayjs_min(item[0]).valueOf();
                    var maxDate = item[1] && dayjs_min(item[1]).valueOf();
                    if (minDate && maxDate) {
                        dateData.disabled =
                            dateData.timeStamp > minDate && dateData.timeStamp < maxDate;
                    }
                    else if (minDate) {
                        dateData.disabled = dateData.timeStamp > minDate;
                    }
                    else if (maxDate) {
                        dateData.disabled = dateData.timeStamp < maxDate;
                    }
                }
            });
        }
        // specialDay
        if (specialDay instanceof Array) {
            specialDay.forEach(function (item) {
                if (typeof item === 'string') {
                    dateData.special.show = item === dateData.date;
                }
                else if (typeof item === 'object') {
                    var date_1 = item.date;
                    var color = item.color;
                    Object.assign(dateData.special, {
                        date: date_1 === dateData.date,
                        color: color
                    });
                }
            });
        }
        return dateData;
    }
    function getWeeks(date) {
        var weekday = dayjs_min(date).day();
        var tempThisWeek = [];
        var tempPreWeek = [];
        var tempNextWeek = [];
        var i = -7;
        while (1) {
            if (i >= 14)
                break;
            var dateData = dealEveryDay({
                i: i,
                currentDay: weekday,
                date: date
            });
            if (i < 0) {
                tempPreWeek.push(dateData);
            }
            else if (i >= 7) {
                tempNextWeek.push(dateData);
            }
            else {
                tempThisWeek.push(dateData);
            }
            i++;
        }
        return {
            tempThisWeek: tempThisWeek,
            tempPreWeek: tempPreWeek,
            tempNextWeek: tempNextWeek
        };
    }
    function fillMonths(months) {
        var firstDay = months[0];
        var weekday = dayjs_min(firstDay.date).day();
        while (weekday) {
            months.unshift({
                timeStamp: weekday,
                date: '',
                month: '',
                day: '',
                year: '',
                today: false,
                old: false,
                active: false,
                tipTop: '',
                tipBottom: '',
                badge: {
                    show: false,
                    color: 'red',
                    num: ''
                },
                disabled: false,
                special: {
                    show: false,
                    color: 'green'
                },
                empty: true
            });
            weekday--;
        }
        return months;
    }
    function getMonths(date) {
        var tempThisMonth = [];
        var tempPreMonth = [];
        var tempNextMonth = [];
        var preMonthDays = dayjs_min(date).subtract(1, 'month').daysInMonth();
        var thisMonthDays = dayjs_min(date).daysInMonth();
        var thisDays = dayjs_min(date).date();
        var nextMonthDays = dayjs_min(date).add(1, 'month').daysInMonth();
        var i = -preMonthDays + 1;
        while (1) {
            if (i > nextMonthDays + thisMonthDays)
                break;
            var dateData = dealEveryDay({
                i: i,
                currentDay: thisDays,
                date: date
            });
            if (i <= 0) {
                tempPreMonth.push(dateData);
            }
            else if (i > thisMonthDays) {
                tempNextMonth.push(dateData);
            }
            else {
                tempThisMonth.push(dateData);
            }
            i++;
        }
        return {
            tempThisMonth: fillMonths(tempThisMonth),
            tempPreMonth: fillMonths(tempPreMonth),
            tempNextMonth: fillMonths(tempNextMonth)
        };
    }
    // useEffect(() => {}, [preWeek, nextWeek, thisWeek]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (calendarType === 'week') {
            var weeks = getWeeks(today);
            setPreWeek(weeks.tempPreWeek);
            setThisWeek(weeks.tempThisWeek);
            setNextWeek(weeks.tempNextWeek);
        }
        else {
            var months_3 = getMonths(today);
            setPreMonth(months_3.tempPreMonth);
            setThisMonth(months_3.tempThisMonth);
            setNextMonth(months_3.tempNextMonth);
        }
    }, [calendarType]);
    var weekGridComponent = [
        '周日',
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六'
    ].map(function (week, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: week },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { align: 'center', size: 'small', lineSpacing: 'small', textColor: highlightWeekend
                ? [0, 6].includes(index)
                    ? highlightWeekendColor
                    : 'black'
                : 'black' }, week))); });
    var BGClassName = BG_COLOR_LIST[activeColor || 'blue'];
    var oldTextClassName = TEXT_COLOR_LIST['gray'];
    var weeksComponent = [preWeek, thisWeek, nextWeek].map(function (week, index) {
        var _a;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "n"], { key: (_a = week[3]) === null || _a === void 0 ? void 0 : _a.date },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClGrid, { col: 7 }, week.map(function (item) {
                var _a, _b;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.timeStamp, onClick: clickDate.bind(_this, {
                        item: item,
                        type: mapChangeWeekIndex[index]
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'center' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                                    position: 'relative'
                                }, className: classNames([
                                    'day-normal',
                                    "" + (item.disabled ? BG_COLOR_LIST['gray'] : ''),
                                    "" + (item.special.show && !item.active
                                        ? BG_COLOR_LIST[item.special.color]
                                        : ''),
                                    (_a = {},
                                        _a[BGClassName] = !item.disabled && item.active,
                                        _a[oldTextClassName] = item.old,
                                        _a)
                                ]) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                                        (_b = {},
                                            _b['cu-tag badge'] = item.badge.show,
                                            _b),
                                        BG_COLOR_LIST[item.badge.color]
                                    ]) }, item.badge.num),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(50) }, textColor: item.active && !item.disabled
                                            ? undefined
                                            : item.tipTopColor, text: item.tipTop }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                            ? highlightWeekendColor
                                            : undefined }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(50) }, textColor: item.active && !item.disabled
                                            ? undefined
                                            : item.tipBottomColor, text: item.tipBottom })))))));
            }))));
    });
    var monthsComponent = [preMonth, thisMonth, nextMonth].map(function (month, index) {
        var _a;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "n"], { key: (_a = month[3]) === null || _a === void 0 ? void 0 : _a.date },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClGrid, { col: 7 }, month.map(function (item) {
                var _a, _b;
                return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item.timeStamp, onClick: clickDate.bind(_this, {
                        item: item,
                        type: mapChangeWeekIndex[index]
                    }) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'small', paddingDirection: 'vertical' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'center' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                                    position: 'relative'
                                }, className: classNames([
                                    'day-normal',
                                    "" + (item.disabled ? BG_COLOR_LIST['gray'] : ''),
                                    "" + (item.special.show && !item.active
                                        ? BG_COLOR_LIST[item.special.color]
                                        : ''),
                                    (_a = {},
                                        _a[BGClassName] = !item.disabled && item.active,
                                        _a[oldTextClassName] = item.old,
                                        _a)
                                ]) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                                        (_b = {},
                                            _b['cu-tag badge'] = item.badge.show,
                                            _b),
                                        BG_COLOR_LIST[item.badge.color]
                                    ]) }, item.badge.num),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'center', direction: 'column' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(50) }, textColor: item.active && !item.disabled
                                            ? undefined
                                            : item.tipTopColor, text: item.tipTop }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: item.day, textColor: !item.active && !item.disabled && item.highlight
                                            ? highlightWeekendColor
                                            : undefined }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { size: 12, align: 'center', cut: true, style: { maxWidth: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(50) }, textColor: item.active && !item.disabled
                                            ? undefined
                                            : item.tipBottomColor, text: item.tipBottom })))))));
            }))));
    });
    var months = Array.from(Array(12)).map(function (_item, index) { return index + 1 + "\u6708"; });
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCard, { type: showType },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([BG_COLOR_LIST['white'], 'cuCalendar']) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: 'small', paddingDirection: 'bottom' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { justify: 'between', align: 'center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClTip, { renderMessage: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center', justify: 'between' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                                            setCurrentYear(currentYear - 1);
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'pullleft' })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: currentYear + '' }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                                            setCurrentYear(currentYear + 1);
                                        } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'pullright' })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClGrid, { col: 4 }, months.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: item, className: classNames([
                                    'flex justify-center align-center'
                                ]) },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { margin: 'small', marginDirection: 'vertical' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClButton, { size: 'small', bgColor: 'light-gray', shadow: false, long: true, text: item, onClick: function () {
                                            selectDate(index);
                                        } })))); }))), mode: 'click', width: 300, show: showMonths, onChange: function () {
                            setShowMonths(!showMonths);
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClButton, { shape: 'round', shadow: false, size: 'small' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { className: 'chooseDate', lineSpacing: 'normal', text: currentDate }))),
                    backToToday ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: function () {
                            handleBackToToday();
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClButton, { shadow: false, size: 'small' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { className: 'backToToday', lineSpacing: 'normal' }, "\u4ECA")))) : (''))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'week' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClGrid, { col: 7, className: 'solid-bottom' }, weekGridComponent),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Swiper */ "m"], { current: currentActive, circular: true, style: {
                        width: '100%',
                        height: calendarType === 'week'
                            ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(120)
                            : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(120 * currentActiveLines)
                    }, onChange: function (e) {
                        if (currentActive !== e.detail.current)
                            changeDate(e.detail.current);
                    } }, calendarType === 'week' ? weeksComponent : monthsComponent)))));
}
Calendar_weapp.options = {
    addGlobalClass: true
};

function ClCalendar(props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
        isWeApp ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Calendar_weapp, __assign({}, props)) : "",
        isH5 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Calendar_h5, __assign({}, props)) : ""));
}
ClCalendar.defaultProps = {
    calendarType: "month",
    showType: "card",
    activeColor: "blue",
    tipDay: [],
    backToToday: true,
    onClick: function () { },
    onChange: function () { },
    badge: [],
    highlightWeekend: false,
    highlightWeekendColor: "blue",
    specialDay: []
};
ClCalendar.options = {
    addGlobalClass: true
};

function ClTextarea(props) {
    var _a = props.value, value = _a === void 0 ? "" : _a, _b = props.autoFocus, autoFocus = _b === void 0 ? false : _b, _c = props.focus, focus = _c === void 0 ? false : _c, _d = props.placeholder, placeholder = _d === void 0 ? "" : _d, _e = props.maxLength, maxLength = _e === void 0 ? 0 : _e, _f = props.disabled, disabled = _f === void 0 ? false : _f, _g = props.showConfirmBar, showConfirmBar = _g === void 0 ? false : _g, _h = props.showLengthTip, showLengthTip = _h === void 0 ? false : _h, _j = props.bgColor, bgColor = _j === void 0 ? "white" : _j, _k = props.shadow, shadow = _k === void 0 ? false : _k, _l = props.height, height = _l === void 0 ? 0 : _l, _m = props.overMaxForbidden, overMaxForbidden = _m === void 0 ? false : _m, _o = props.onChange, onChange = _o === void 0 ? function () { } : _o, _p = props.onFocus, onFocus = _p === void 0 ? function () { } : _p, _q = props.onBlur, onBlur = _q === void 0 ? function () { } : _q, _r = props.onConfirm, onConfirm = _r === void 0 ? function () { } : _r, _s = props.onLineChange, onLineChange = _s === void 0 ? function () { } : _s;
    var _t = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value), 2), tempValue = _t[0], setTempValue = _t[1];
    var tip = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: "tip" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClLayout, { padding: "small", paddingDirection: "right" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: "" + tempValue.length, size: "small", textColor: maxLength && !overMaxForbidden && maxLength < tempValue.length
                        ? "red"
                        : undefined }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: "/" + maxLength, size: "small", textColor: maxLength && !overMaxForbidden && maxLength < tempValue.length
                            ? "red"
                            : undefined }))))));
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setTempValue(value || "");
    }, [value]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames(["cu-textarea"]) },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: classNames([
                "bg",
                { shadow: shadow },
                BG_COLOR_LIST[bgColor || "white"],
            ]) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Textarea */ "q"], { style: __assign({
                    height: "" + (height ? Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(height) : Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(300)),
                    padding: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(10) + " " + Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(14) + " " + Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])(40),
                    width: "100%",
                    border: "none",
                }), className: classNames([BG_COLOR_LIST[bgColor || "white"]]), value: tempValue || "", autoFocus: autoFocus, focus: focus, placeholder: placeholder, maxlength: overMaxForbidden ? maxLength : -1, disabled: disabled, showConfirmBar: showConfirmBar, onLineChange: function (e) {
                    onLineChange && onLineChange(e.detail);
                }, onConfirm: function (e) {
                    onConfirm && onConfirm(e.detail.value);
                }, onInput: function (e) {
                    setTempValue(e.detail.value);
                    onChange && onChange(e.detail.value);
                }, onFocus: function (e) {
                    onFocus && onFocus(e.detail.value);
                }, onBlur: function (e) {
                    onBlur && onBlur(e.detail.value);
                } }),
            showLengthTip ? tip : "")));
}

var ClTree = /** @class */ (function (_super) {
    __extends(ClTree, _super);
    function ClTree(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            list: [],
            originList: [],
            flatList: []
        };
        return _this;
    }
    ClTree.prototype.dealLevel = function (_a) {
        var _this = this;
        var list = _a.list, parentId = _a.parentId, deep = _a.deep, levelId = _a.levelId;
        if (!list)
            return;
        var deepIndex = deep || 0;
        deepIndex++;
        var temp = list.map(function (item, listIndex) {
            var id = listIndex + 1;
            var newLevelId = levelId ? levelId + "-" + id : "" + id;
            return __assign(__assign({}, item), { deepIndex: deepIndex,
                id: id, parent: parentId, childrenCheck: [], commonId: generateId(), levelId: newLevelId, children: _this.dealLevel({
                    list: item.children,
                    parentId: id,
                    deep: deepIndex,
                    levelId: newLevelId
                }) });
        });
        return temp;
    };
    ClTree.prototype.openItem = function (item) {
        var thisOpen = !item.open;
        var originItem = this.getTreeItem(item.commonId);
        originItem.open = thisOpen;
        var originList = this.state.originList;
        var newList = this.flatList(originList);
        this.setState({
            list: newList
        });
    };
    ClTree.prototype.clickItem = function (item) {
        var onClickItem = this.props.onClickItem;
        onClickItem && onClickItem(item);
    };
    ClTree.prototype.getTreeItem = function (id) {
        var originList = this.state.originList;
        var result;
        function getItem(list) {
            var e_1, _a;
            if (!result) {
                try {
                    for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                        var item = list_1_1.value;
                        result = result ? result : item.commonId === id ? item : undefined;
                        if (item.children && !result) {
                            getItem(item.children);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        getItem(originList);
        return result;
    };
    ClTree.prototype.changeChecked = function (commonId, item) {
        if (commonId === void 0) { commonId = []; }
        var flatList = this.state.flatList;
        var onCheckedChange = this.props.onCheckedChange;
        var id = item.commonId;
        var checked = commonId.length > 0;
        var data = flatList.find(function (item) { return item.commonId === id; });
        var levelIdArr = item.levelId.split('-');
        var allLevelChildren = flatList.filter(function (child) {
            var levelArr = child.levelId.split('-');
            return (levelIdArr.every(function (item, index) { return item === levelArr[index]; }) &&
                item.deepIndex < child.deepIndex);
        });
        var allParent = flatList.filter(function (father) {
            if (item.deepIndex <= father.deepIndex)
                return false;
            var i = 0;
            var result = true;
            var levelArr = father.levelId.split('-');
            while (i < father.deepIndex) {
                result = result && levelArr[i] === levelIdArr[i];
                i++;
            }
            return result;
        });
        allLevelChildren.forEach(function (item) {
            item.checked = checked;
            item.someCheck = false;
        });
        var father = allParent.find(function (parent) { return parent.deepIndex === item.deepIndex - 1; });
        data.checked = checked;
        onCheckedChange && onCheckedChange(data);
        var maxDeep = allParent.length;
        var i = maxDeep;
        if (checked) {
            data.someCheck = false;
            if (father) {
                father.someCheck = father.children.some(function (item) { return !item.checked || item.someCheck; });
            }
            var result = true;
            while (i > 0) {
                var current = allParent.find(function (item) { return item.deepIndex === i; });
                result =
                    result &&
                        current.children.every(function (child) { return child.checked && !child.someCheck; });
                current.someCheck = !result;
                current.checked = checked;
                i--;
            }
        }
        else {
            allParent.forEach(function (item) { return (item.someCheck = true); });
            if (father) {
                father.checked = father.children.some(function (item) { return item.checked; });
            }
            while (i > 0) {
                var current = allParent.find(function (item) { return item.deepIndex === i; });
                current.checked = current.children.some(function (child) { return child.checked; });
                i--;
            }
        }
        this.setState({
            flatList: __spread(flatList),
            list: __spread(this.state.list)
        });
    };
    ClTree.prototype.renderItem = function (item) {
        var _this = this;
        var _a = this.props, color = _a.color, showCheck = _a.showCheck;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                paddingLeft: Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__["pxTransform"])((item.deepIndex - 1) * 20)
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClFlex, { align: 'center' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { style: {
                        transform: "rotate(" + (item.open ? 180 : 90) + "deg)",
                        visibility: item.children ? 'initial' : 'hidden'
                    }, onClick: this.openItem.bind(this, item) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClIcon, { iconName: 'triangleupfill', size: 'small' })),
                showCheck ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClCheckbox, { type: 'normal', shape: 'round', more: item.someCheck, color: color, checkboxGroup: [
                        {
                            checked: item.checked,
                            key: '',
                            value: item.commonId,
                            disabled: item.disabled
                        }
                    ], onChange: function (commonId) {
                        _this.changeChecked.call(_this, commonId, item);
                    } })) : (''),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { onClick: this.clickItem.bind(this, item) },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClText, { text: item.name })))));
    };
    ClTree.prototype.flatList = function (list) {
        var flat = [];
        function flatFn(list) {
            list.forEach(function (item) {
                flat.push(item);
                if (item.children && item.open) {
                    flatFn(item.children);
                }
            });
        }
        flatFn(list);
        return flat;
    };
    ClTree.prototype.flatAllArr = function (list) {
        var category = [];
        function categoryFn(list) {
            if (list === void 0) { list = []; }
            list.forEach(function (item) {
                category.push(item);
                if (item.children) {
                    categoryFn(item.children);
                }
            });
        }
        categoryFn(list);
        return category;
    };
    ClTree.prototype.updateData = function (data) {
        var _this = this;
        var dealArr = this.dealLevel({
            list: data,
            parentId: undefined
        });
        var flatArr = this.flatList(dealArr);
        var flatList = this.flatAllArr(dealArr);
        this.setState({
            list: flatArr,
            originList: dealArr,
            flatList: flatList
        }, function () {
            var checkedList = flatList.filter(function (item) { return item.checked; });
            var openList = flatList.filter(function (item) { return item.open; });
            openList.forEach(function (item) {
                item.open = !item.open;
                _this.openItem(item);
            });
            checkedList.forEach(function (item) {
                _this.changeChecked(item.commonId, item);
            });
        });
    };
    ClTree.prototype.componentWillReceiveProps = function (nextProps) {
        this.updateData(nextProps.data);
    };
    ClTree.prototype.componentDidMount = function () {
        this.updateData(this.props.data);
    };
    ClTree.prototype.render = function () {
        var _this = this;
        var list = this.state.list;
        var listComponent = list.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { key: 'key-' + item.commonId }, _this.renderItem(item))); });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "s"], { className: 'cu-tree' }, listComponent);
    };
    ClTree.options = {
        addGlobalClass: true
    };
    ClTree.defaultProps = {
        showCheck: false,
        data: []
    };
    return ClTree;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/util/support/isBuffer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/util/support/isBuffer.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function isBuffer(arg) {
  return arg instanceof Buffer;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/util/util.js":
/*!******************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/util/util.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/node-libs-browser/node_modules/util/support/isBuffer.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/node-libs-browser/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

var inspectCustom = __webpack_require__(/*! ./util.inspect */ "./node_modules/object-inspect/util.inspect.js").custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag !== 'undefined' ? Symbol.toStringTag : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + [].concat(stringTag || [], protoTag || []).join(': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "./node_modules/object-inspect/util.inspect.js":
/*!*****************************************************!*\
  !*** ./node_modules/object-inspect/util.inspect.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js").inspect;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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
function defaultClearTimeout () {
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
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
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

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
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
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

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

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
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

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
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
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
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
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
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
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    if (sideChannel.has(object)) {
        throw new RangeError('Cyclic object value');
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = typeof key === 'object' && key.value !== undefined ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, true);
        var valueSideChannel = getSideChannel();
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
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
        format: format,
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

    var sideChannel = getSideChannel();
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
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
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

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

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
    /* eslint no-param-reassign: 0 */
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

var encode = function encode(str, defaultEncoder, charset, kind, format) {
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
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
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

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
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
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.production.min.js ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: jsx, jsxs */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");var f=__webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
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

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "./node_modules/taro-axios/lib/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/taro-axios/lib/index.esm.js ***!
  \**************************************************/
/*! exports provided: default, FileData, PostData, __moduleExports, axios */
/*! exports used: axios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(navigator, window, document, process) {/* unused harmony export FileData */
/* unused harmony export PostData */
/* unused harmony export __moduleExports */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return axios$1; });
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};
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
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
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
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'object';
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
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS' || // 兼容 Taro 3
  // ref: https://github.com/NervJS/taro/commit/7349f716111accb6a39c72ed0f1e6cbc166fa32b
  navigator.product === 'Taro')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined' && // 兼容 Taro 3
  // ref: https://github.com/NervJS/taro/issues/5741#issuecomment-601102518
  !!document.scripts;
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
  } // Force an array if not already something iterable


  if (Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) !== 'object') {
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


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(result[key]) === 'object' && Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'object') {
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
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(result[key]) === 'object' && Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'object') {
      result[key] = deepMerge({}, val);
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

var utils = {
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
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

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


var buildURL = function buildURL(url, params, paramsSerializer) {
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
      } else {
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
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

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

var InterceptorManager_1 = InterceptorManager;
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */

var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
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


var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};
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


var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */


var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */


var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
}; // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
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

var parseHeaders = function parseHeaders(headers) {
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
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

var isURLSameOrigin = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
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

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

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
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();
var cookies = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
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
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies$1 = cookies; // Add xsrf header

      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies$1.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


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
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


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
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


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
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

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
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data) || // 放行 PostData
    data !== null && Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(data) === 'object' && data.toString() === '[object PostData]') {
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
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
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
var defaults_1 = defaults;
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


var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults_1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
  var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
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
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


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

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


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
var Axios_1 = Axios;
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
var Cancel_1 = Cancel;
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

    token.reason = new Cancel_1(message);
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

var CancelToken_1 = CancelToken;
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

var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios_1.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults_1); // Expose Axios class to allow class inheritance

axios.Axios = Axios_1; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel; // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;
var axios_1 = axios; // Allow use of default import syntax in TypeScript

var default_1 = axios;
axios_1.default = default_1;
var axios$1 = axios_1; // @ts-ignore

var isString$1 = utils.isString,
    isObject$1 = utils.isObject,
    forEach$1 = utils.forEach,
    merge$1 = utils.merge;

function objectToQueryString(obj) {
  var result = [];
  forEach$1(obj, function (value, key) {
    result.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value)));
  });
  return result.join('&');
}

function getTaro() {
  var Taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

  return Taro && Taro["default"] || Taro;
}

var Taro = getTaro();
var isWebLikeEnv = [Taro.ENV_TYPE.WEB, Taro.ENV_TYPE.RN].indexOf(Taro.getEnv()) >= 0;

function _typeof(obj) {
  if (typeof Symbol === "function" && Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var FileData = /*#__PURE__*/function () {
  function FileData(fileContent) {
    _classCallCheck(this, FileData);

    this.fileContent = fileContent;
  }

  _createClass(FileData, [{
    key: "getFileContent",
    value: function getFileContent() {
      return this.fileContent;
    }
  }]);

  return FileData;
}();

var PostData = /*#__PURE__*/function () {
  function PostData(postData) {
    _classCallCheck(this, PostData);

    this.postData = postData;
  }

  _createClass(PostData, [{
    key: "getParsedPostData",
    value: function getParsedPostData() {
      var postData = this.postData;
      var parsedPostData = {
        normalData: {},
        fileData: {}
      };

      if (isObject$1(postData)) {
        Object.keys(postData).forEach(function (key) {
          if (postData[key] && postData[key] instanceof FileData) {
            parsedPostData.fileData[key] = postData[key].getFileContent();
          } else {
            parsedPostData.normalData[key] = postData[key];
          }
        });
      }

      return parsedPostData;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[object ".concat(PostData.name, "]");
    }
  }]);

  return PostData;
}(); // @index('./*', (pp, cc) => `export * from '${pp.path}'`)


var Taro$1 = getTaro();

var taroAdapter = function taroAdapter(config) {
  return new Promise(function (resolve, reject) {
    var requestMethod = (isString$1(config.method) ? config.method : 'GET').toUpperCase();
    var requestUrl = buildURL(buildFullPath(config.baseURL, config.url), config.params, config.paramsSerializer);
    var requestHeaders = isObject$1(config.headers) ? config.headers : {}; // 请求数据

    var requestData = config.data; // 请求任务

    var requestTask = null; // 中断请求任务

    var abortRequestTask = null; // 文件上传请求

    if (requestData && requestData instanceof PostData) {
      var _requestData$getParse = requestData.getParsedPostData(),
          normalData = _requestData$getParse.normalData,
          fileData = _requestData$getParse.fileData;

      var hasFileData = Object.keys(fileData).length > 0;

      if (hasFileData) {
        var fileName = Object.keys(fileData)[0];
        var filePath = fileData[fileName];
        var request = Taro$1.uploadFile({
          url: requestUrl,
          header: requestHeaders,
          name: fileName,
          filePath: filePath,
          formData: normalData
        });
        abortRequestTask = request.abort;

        if (typeof config.onUploadProgress === 'function') {
          request.progress(function (e) {
            config.onUploadProgress(merge$1(e, // 兼容 XMLHttpRequest.onprogress 的数据结构
            {
              total: e.totalBytesExpectedToSend,
              loaded: e.totalBytesSent
            }));
          });
        }

        requestTask = request.then(function (res) {
          var data = res.data;

          if (config.responseType === 'json') {
            try {
              data = JSON.parse(data);
            } catch (e) {}
          }

          return {
            data: data,
            status: res.statusCode,
            statusText: '',
            headers: {},
            config: config,
            request: request
          };
        });
      } else {
        requestData = normalData;
        requestHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
      }
    } // 普通请求


    if (!requestTask) {
      var _request = Taro$1.request({
        method: requestMethod,
        url: requestUrl,
        header: requestHeaders,
        // 请求数据只在 POST, PUT, PATCH 时设置
        data: requestMethod === 'POST' || requestMethod === 'PUT' || requestMethod === 'PATCH' ? requestData : '',
        // 响应的内容只能是 arraybuffer 或 text
        responseType: config.responseType === 'arraybuffer' ? 'arraybuffer' : 'text',
        // 响应数据的类型只能是 json 或 其他
        dataType: config.responseType === 'json' ? 'json' : config.responseType
      });

      abortRequestTask = _request.abort;
      requestTask = _request.then(function (res) {
        return {
          data: res.data,
          status: res.statusCode,
          statusText: '',
          headers: res.header,
          config: config,
          request: _request
        };
      });
    } // 支持超时处理


    var timer = null;

    if (config.timeout) {
      timer = setTimeout(function () {
        abortRequestTask && abortRequestTask(); // ref: https://github.com/axios/axios/blob/master/lib/adapters/xhr.js#L90

        var timeoutErrorMessage = "timeout of ".concat(config.timeout, "ms exceeded");
        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', requestTask));
      }, config.timeout);
    } // 请求任务结果处理


    requestTask.then(function (response) {
      timer && clearTimeout(timer);
      settle(resolve, reject, response);
    })["catch"](function (response) {
      timer && clearTimeout(timer); // 如果存在状态码，说明请求服务器成功，将结果转发给 axios 处理

      if (response && _typeof(response) === 'object' && (response.status != null || response.statusCode != null)) {
        settle(resolve, reject, {
          data: response.data,
          status: response.status != null ? response.status : response.statusCode,
          statusText: '',
          headers: response.header || response.headers || {},
          config: config,
          request: requestTask
        });
      } else {
        var error = createError('Network Error', config, undefined, requestTask);
        reject(error);
      }
    }); // 支持取消请求任务

    if (config.cancelToken) {
      config.cancelToken.promise.then(function (cancel) {
        timer && clearTimeout(timer);
        abortRequestTask && abortRequestTask();
        reject(cancel);
      });
    }
  });
};

var xhrAdapter = function xhrAdapter(config) {
  return new Promise(function (resolve) {
    // 适配 PostData
    if (config.data && config.data instanceof PostData) {
      var _config$data$getParse = config.data.getParsedPostData(),
          normalData = _config$data$getParse.normalData,
          fileData = _config$data$getParse.fileData;

      var hasFileData = Object.keys(fileData).length > 0;

      if (hasFileData) {
        var formData = new FormData();
        forEach$1(normalData, function (value, key) {
          formData.set(key, value);
        });
        Promise.all(Object.keys(fileData).map(function (key) {
          return new Promise(function (resolve) {
            var fileContent = fileData[key]; // 兼容 blob 地址

            if (isString$1(fileContent) && fileContent.indexOf('blob:') === 0) {
              var xhr = new XMLHttpRequest();
              xhr.open('GET', fileContent);
              xhr.responseType = 'blob';

              xhr.onload = function () {
                resolve(xhr.response);
              };

              xhr.send();
            } else {
              resolve(fileContent);
            }
          }).then(function (fileContent) {
            return formData.set(key, fileContent);
          });
        })).then(function () {
          config.data = formData;
          resolve();
        });
      } else {
        config.data = objectToQueryString(normalData);
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        resolve();
      }
    } else {
      resolve();
    }
  }).then(function () {
    return xhr(config);
  });
}; // @index('./*', (pp, cc) => `export * from '${pp.path}'`)


axios$1.defaults.adapter = isWebLikeEnv ? xhrAdapter : taroAdapter;
/* unused harmony default export */ var _unused_webpack_default_export = (axios$1);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/components/Calendar.tsx":
/*!*************************************!*\
  !*** ./src/components/Calendar.tsx ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mp_colorui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mp-colorui */ "./node_modules/mp-colorui/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function Modal(props) {
  var show = props.show,
      calendarShowAction = props.calendarShowAction;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      normal = _useState2[0],
      setNormal = _useState2[1]; // 可以使用所有的 React Hooks


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setNormal(show);
  }, [show]); // 对应 onReady

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useReady"])(function () {}); // 对应 onShow

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {}); // 对应 onHide

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidHide"])(function () {});
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["usePullDownRefresh"])(function () {});
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(mp_colorui__WEBPACK_IMPORTED_MODULE_3__[/* ClModal */ "c"], {
    show: normal,
    closeWithShadow: true,
    title: "\u5575\u5495",
    close: true,
    onClose: function onClose() {
      setNormal(false);
      calendarShowAction(false);
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(mp_colorui__WEBPACK_IMPORTED_MODULE_3__[/* ClCalendar */ "b"], {
      showType: "full",
      backToToday: false,
      highlightWeekend: true
    })
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),

/***/ "./src/components/TipModal.tsx":
/*!*************************************!*\
  !*** ./src/components/TipModal.tsx ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mp_colorui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mp-colorui */ "./node_modules/mp-colorui/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function Modal(props) {
  var show = props.show,
      showAction = props.showAction;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      normal = _useState2[0],
      setNormal = _useState2[1]; // 可以使用所有的 React Hooks


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setNormal(show);
  }, [show]); // 对应 onReady

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useReady"])(function () {}); // 对应 onShow

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidShow"])(function () {}); // 对应 onHide

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["useDidHide"])(function () {});
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["usePullDownRefresh"])(function () {});
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(mp_colorui__WEBPACK_IMPORTED_MODULE_3__[/* ClModal */ "c"], {
    show: normal,
    closeWithShadow: true,
    title: "\u5575\u5495",
    close: true,
    actions: [{
      text: '咕咕',
      color: 'red'
    }, {
      text: '下次一定',
      color: 'blue'
    }],
    onCancel: function onCancel() {
      setNormal(false);
      showAction(false);
    },
    onClose: function onClose() {
      setNormal(false);
      showAction(false);
    },
    onClick: function onClick() {
      setNormal(false);
      showAction(false);
    },
    children: "\u6211\u53EF\u7231\u5417\uFF1F\u80FD\u7ED9\u6211\u6253\u94B1\u94B1\u5417\uFF1F"
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Modal);

/***/ }),

/***/ "./src/pages/index/index.css":
/*!***********************************!*\
  !*** ./src/pages/index/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.tsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/services/normalServices.ts":
/*!****************************************!*\
  !*** ./src/services/normalServices.ts ***!
  \****************************************/
/*! exports provided: NormalServices */
/*! exports used: NormalServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalServices; });
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/request */ "./src/utils/request.ts");



var NormalServices = function NormalServices() {
  Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, NormalServices);

  Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "TEST", function () {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__[/* get */ "a"])('https://jsonplaceholder.typicode.com/todos/1', null);
  });

  Object(C_Users_yaohai_Documents_GitHub_gugugu_bot_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "weatherShanghai", function () {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_2__[/* get */ "a"])('https://restapi.amap.com/v3/weather/weatherInfo?key=3d8718b02d7e13b4c69c650e2810db5e&city=310000&extensions=all', null);
  });
};

/***/ }),

/***/ "./src/utils/dataSource.ts":
/*!*********************************!*\
  !*** ./src/utils/dataSource.ts ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var dataSource = {
  normalSentences: [{
    "id": 1,
    "value": "下次吧，下次一定！"
  }, {
    "id": 2,
    "value": "话说今天好热太阳也好大啊，你是不是也这么觉得啊？"
  }, {
    "id": 3,
    "value": "啊？你该不会已经到了吧？"
  }, {
    "id": 4,
    "value": "在路上了。"
  }, {
    "id": 5,
    "value": "我觉得今天一定不止我一个人迟到对吧？"
  }, {
    "id": 6,
    "value": "那咱们打个赌，我今天准时到，你给什么奖励？"
  }, {
    "id": 7,
    "value": "同志们对不住，身体忽然不适。"
  }, {
    "id": 8,
    "value": "家里忽然来人了。"
  }, {
    "id": 9,
    "value": "我去买点东西，来得及赶回来。"
  }, {
    "id": 10,
    "value": "洗个澡，回头再说。"
  }, {
    "id": 11,
    "value": "我去打个电话。"
  }, {
    "id": 12,
    "value": "啊，忽然肚子痛，不用等我，你们先搞。"
  }, {
    "id": 13,
    "value": "没睡好，我睡一会儿，醒了再说。"
  }, {
    "id": 14,
    "value": "约了朋友，不确定什么时候结束，结束了就叫你。"
  }, {
    "id": 15,
    "value": "今天我加班的。"
  }, {
    "id": 16,
    "value": "算我算我，忘记了。"
  }, {
    "id": 17,
    "value": "啊？原来那个算约好的吗？"
  }, {
    "id": 18,
    "value": "你很急吗？"
  }, {
    "id": 19,
    "value": "今天不行哦，晚上有事 ~ "
  }, {
    "id": 20,
    "value": "太累啦，下次吧 ~ "
  }, {
    "id": 21,
    "value": "刚洗了头，我去吹个头发。"
  }, {
    "id": 22,
    "value": "我吃个饭，待会说。"
  }, {
    "id": 23,
    "value": "你以为只有你急嘛？我就不着急的吗？"
  }, {
    "id": 24,
    "value": "在你问出来之前，能想想你自己有什么问题吗？"
  }]
};
module.exports = dataSource;

/***/ }),

/***/ "./src/utils/dateTool.ts":
/*!*******************************!*\
  !*** ./src/utils/dateTool.ts ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var dateTool = {
  CalendarData: [0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95],
  madd: [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  tgString: '甲乙丙丁戊己庚辛壬癸',
  dzString: '子丑寅卯辰巳午未申酉戌亥',
  numString: '一二三四五六七八九十',
  monString: '正二三四五六七八九十冬腊',
  weekString: '日一二三四五六',
  sx: '鼠牛虎兔龙蛇马羊猴鸡狗猪',
  // 获取当前日期
  now: function now(withWeek) {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var week = d.getDay();
    var curDateTime = year.toString();

    if (month > 9) {
      curDateTime = curDateTime + '年' + month;
    } else {
      curDateTime = curDateTime + '年0' + month;
    }

    if (date > 9) {
      curDateTime = curDateTime + '月' + date + '日';
    } else {
      curDateTime = curDateTime + '月0' + date + '日';
    }

    if (withWeek) {
      var weekday = '星期' + this.weekString[week];
      curDateTime = curDateTime + ' ' + weekday;
    }

    return curDateTime;
  }
};
module.exports = dateTool;

/***/ }),

/***/ "./src/utils/imgSource.ts":
/*!********************************!*\
  !*** ./src/utils/imgSource.ts ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var imgSource = {
  pigeon: 'data:image/jpeg;base64,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'
};
module.exports = imgSource;

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! exports provided: get, post */
/*! exports used: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* unused harmony export post */
/* harmony import */ var taro_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taro-axios */ "./node_modules/taro-axios/lib/index.esm.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


function get(url, params) {
  return new Promise(function (resolve, reject) {
    taro_axios__WEBPACK_IMPORTED_MODULE_0__[/* axios */ "a"].get(url, {
      params: params
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (err) {
      reject(err.data);
    });
  });
}
function post(url, params) {
  return new Promise(function (resolve, reject) {
    taro_axios__WEBPACK_IMPORTED_MODULE_0__[/* axios */ "a"].post(url, qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params)).then(function (res) {
      resolve(res.data);
    }).catch(function (err) {
      reject(err.data);
    });
  });
}

/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map